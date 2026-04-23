"use strict";
n.d(t, { Ay: () => R, RQ: () => y, hz: () => S });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(713402),
    o = n(73153),
    l = n(427157),
    u = n(961350),
    c = n(734057),
    d = n(696451),
    _ = n(287809),
    f = n(977997),
    p = n(661191),
    h = n(427262),
    E = n(652215);
let m = Object.freeze([]),
    g = {};
function A(e) {
    let t = g[e];
    return null == t && ((t = new N(e)), (g[e] = t)), t;
}
function I(e, t) {
    return d.Ay.getMember(e, t.id);
}
function T(e, t, n) {
    let r = t?.nick ?? h.Ay.getName(n);
    return { member: t, comparator: S(e, r) };
}
function S(e, t) {
    return `${e.selfStream ? "\0" : "\x01"}${t.toLowerCase()}\0${e.userId}`;
}
function y(e, t, n, r) {
    var i;
    let s = _.default.getUser(n),
        a = null == s;
    null == s && (s = new l.A({ id: n, username: "...", discriminator: n.slice(-5, -1) }));
    let { member: o, comparator: u } = T(e, I(t, (i = s)), i),
        c = {
            voiceState: e,
            user: s,
            member: o,
            comparator: u,
            nick: o?.nick,
            connectedOn: r?.connectedOn ?? Date.now(),
        };
    return a && (c._isPlaceholder = !0), c;
}
class N {
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
        let t = f.A.getVoiceState(this.guildId, e),
            n = this._voiceStates.get(e),
            r = _.default.getUser(e);
        if (null != t && null != r) {
            if (null == n) return this._voiceStates.set(e, y(t, this.guildId, e)), !0;
            else if (n.voiceState !== t) {
                let i = I(this.guildId, r),
                    s = i?.nick ?? h.Ay.getName(r);
                return this._voiceStates.set(e, { ...n, member: i, comparator: S(t, s), nick: s, voiceState: t }), !0;
            }
        } else if (null != n) return this._voiceStates.delete(e), !0;
        return !1;
    }
    updateMember(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = this._voiceStates.get(e),
            n = _.default.getUser(e);
        if (null != t && null != n) {
            let r = I(this.guildId, n);
            if (r?.nick !== t.member?.nick || r?.avatar !== t.member?.avatar) {
                let { comparator: i } = T(t.voiceState, r, n);
                return this._voiceStates.set(e, { ...t, member: r, comparator: i, nick: r?.nick }), !0;
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
function v() {
    return i().reduce(g, (e, t) => t.updateUsers() || e, !1);
}
function C() {
    g = {};
    let e = f.A.getAllVoiceStates();
    p.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            A(t ?? E.ME).updateVoiceState(e);
        });
    });
}
class O extends s.Ay.Store {
    static displayName = "SortedVoiceStateStore";
    initialize() {
        C(), this.waitFor(u.default, c.A, d.Ay, _.default, f.A), this.syncWith([_.default], v);
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
let R = new O(o.h, {
    CONNECTION_OPEN: function () {
        g = {};
    },
    OVERLAY_INITIALIZE: function () {
        C();
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t } = e,
            n = u.default.getId();
        return null != n && A(t ?? E.ME).updateVoiceState(n);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { guildId: n, userId: r } = t;
            return A(n ?? E.ME).updateVoiceState(r) || e;
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
            r = new Set(e.voiceStates?.map((e) => e.userId)),
            i = new Set(e.removedVoiceStateUsers);
        for (let i of new Set([...n, ...r])) t = A(e.guildId).updateVoiceState(i) || t;
        for (let r of n) i.has(r) || (t = A(e.guildId).updateMember(r) || t);
        return t;
    },
});
