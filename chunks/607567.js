"use strict";
n.d(t, { Ay: () => O, RQ: () => y, hz: () => S });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(713402),
    o = n(228366),
    l = n(889227),
    u = n(495544),
    c = n(734057),
    d = n(696451),
    _ = n(287809),
    h = n(977997),
    f = n(935208),
    p = n(427262),
    E = n(652215);
let m = Object.freeze([]),
    g = {};
function A(e) {
    let t = g[e];
    return null == t && ((t = new C(e)), (g[e] = t)), t;
}
function I(e, t) {
    return d.Ay.getMember(e, t.id);
}
function T(e, t, n) {
    let i = t?.nick ?? p.Ay.getName(n);
    return { member: t, comparator: S(e, i) };
}
function S(e, t) {
    return `${e.selfStream ? "\0" : "\x01"}${t.toLowerCase()}\0${e.userId}`;
}
function y(e, t, n, i) {
    var r;
    let s = _.default.getUser(n),
        a = null == s;
    null == s && (s = new l.A({ id: n, username: "...", discriminator: n.slice(-5, -1) }));
    let { member: o, comparator: u } = T(e, I(t, (r = s)), r),
        c = {
            voiceState: e,
            user: s,
            member: o,
            comparator: u,
            nick: o?.nick,
            connectedOn: i?.connectedOn ?? Date.now(),
        };
    return a && (c._isPlaceholder = !0), c;
}
class C {
    guildId;
    _pending = new Set();
    _voiceStates = new a.J(
        (e) => {
            let {
                voiceState: { channelId: t },
            } = e;
            return null != t ? [t] : [];
        },
        (e) => {
            let { comparator: t } = e;
            return t;
        },
    );
    constructor(e) {
        this.guildId = e;
    }
    updateVoiceState(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = h.A.getVoiceState(this.guildId, e),
            n = this._voiceStates.get(e),
            i = _.default.getUser(e);
        if (null != t && null != i) {
            if (null == n) return this._voiceStates.set(e, y(t, this.guildId, e)), !0;
            else if (n.voiceState !== t) {
                let r = I(this.guildId, i),
                    s = r?.nick ?? p.Ay.getName(i);
                return this._voiceStates.set(e, { ...n, member: r, comparator: S(t, s), nick: s, voiceState: t }), !0;
            }
        } else if (null != n) return this._voiceStates.delete(e), !0;
        return !1;
    }
    updateMember(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = this._voiceStates.get(e),
            n = _.default.getUser(e);
        if (null != t && null != n) {
            let i = I(this.guildId, n);
            if (i?.nick !== t.member?.nick || i?.avatar !== t.member?.avatar) {
                let { comparator: r } = T(t.voiceState, i, n);
                return this._voiceStates.set(e, { ...t, member: i, comparator: r, nick: i?.nick }), !0;
            }
        }
        return !1;
    }
    updateUsers() {
        return (
            null == this._pending &&
            this._voiceStates.values().reduce((e, t) => {
                let n = _.default.getUser(t.user.id);
                return null != n && t.user !== n
                    ? (this._voiceStates.set(n.id, y(t.voiceState, this.guildId, n.id, t)), !0)
                    : e;
            }, !1)
        );
    }
    getUserIds() {
        return this.processPending(), this._voiceStates.keys();
    }
    getVoiceStates() {
        return this.processPending(), this._voiceStates.indexes();
    }
    getVoiceStatesForChannel(e) {
        this.processPending();
        let t = this._voiceStates.values(e);
        return 0 === t.length ? m : t;
    }
    countVoiceStatesForChannel(e) {
        return this.processPending(), this._voiceStates.size(e);
    }
    getVersion() {
        return this.processPending(), this._voiceStates.version;
    }
    processPending() {
        if (null != this._pending) {
            let e = this._pending;
            (this._pending = void 0), e.forEach((e) => this.updateVoiceState(e));
        }
    }
}
function N() {
    return r().reduce(g, (e, t) => t.updateUsers() || e, !1);
}
function v() {
    g = {};
    let e = h.A.getAllVoiceStates();
    f.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            A(t ?? E.ME).updateVoiceState(e);
        });
    });
}
class R extends s.Ay.Store {
    static displayName = "SortedVoiceStateStore";
    initialize() {
        v(), this.waitFor(u.default, c.A, d.Ay, _.default, h.A), this.syncWith([_.default], N);
    }
    getVoiceStates(e) {
        return A(e ?? E.ME).getVoiceStates();
    }
    getAllVoiceStates() {
        return g;
    }
    getVoiceStatesForChannel(e) {
        let t = e.getGuildId(),
            n = e.id;
        return A(t ?? E.ME).getVoiceStatesForChannel(n);
    }
    getVoiceStatesForChannelAlt(e, t) {
        return A(t ?? E.ME).getVoiceStatesForChannel(e);
    }
    countVoiceStatesForChannel(e) {
        let t = c.A.getChannel(e);
        return null == t ? 0 : A(t.getGuildId() ?? E.ME).countVoiceStatesForChannel(e);
    }
    getVoiceStateVersion(e) {
        return A(e ?? E.ME).getVersion();
    }
}
let O = new R(o.h, {
    CONNECTION_OPEN: function () {
        g = {};
    },
    OVERLAY_INITIALIZE: function () {
        v();
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t } = e,
            n = u.default.getId();
        return null != n && A(t ?? E.ME).updateVoiceState(n);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { guildId: n, userId: i } = t;
            return A(n ?? E.ME).updateVoiceState(i) || e;
        }, !1);
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return A(t).updateMember(n.id);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        delete g[t.id];
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete g[t.id];
    },
    PASSIVE_UPDATE_V2: function (e) {
        let t = !1,
            n = new Set(g[e.guildId]?.getUserIds()),
            i = new Set(e.voiceStates?.map((e) => e.userId)),
            r = new Set(e.removedVoiceStateUsers);
        for (let r of new Set([...n, ...i])) t = A(e.guildId).updateVoiceState(r) || t;
        for (let i of n) r.has(i) || (t = A(e.guildId).updateMember(i) || t);
        return t;
    },
});
