"use strict";
n.d(t, { Ay: () => v, RQ: () => N, hz: () => S });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(713402),
    o = n(228366),
    l = n(889227),
    d = n(495544),
    _ = n(734057),
    u = n(696451),
    c = n(287809),
    E = n(977997),
    h = n(935208),
    m = n(427262),
    f = n(652215);
let g = Object.freeze([]),
    p = {};
function A(e) {
    let t = p[e];
    return null == t && ((t = new C(e)), (p[e] = t)), t;
}
function I(e, t) {
    return u.Ay.getMember(e, t.id);
}
function T(e, t, n) {
    let i = t?.nick ?? m.Ay.getName(n);
    return { member: t, comparator: S(e, i) };
}
function S(e, t) {
    return `${e.selfStream ? "\0" : "\x01"}${t.toLowerCase()}\0${e.userId}`;
}
function N(e, t, n, i) {
    var r;
    let s = c.default.getUser(n),
        a = null == s;
    null == s && (s = new l.A({ id: n, username: "...", discriminator: n.slice(-5, -1) }));
    let { member: o, comparator: d } = T(e, I(t, (r = s)), r),
        _ = {
            voiceState: e,
            user: s,
            member: o,
            comparator: d,
            nick: o?.nick,
            connectedOn: i?.connectedOn ?? Date.now(),
        };
    return a && (_._isPlaceholder = !0), _;
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
        let t = E.A.getVoiceState(this.guildId, e),
            n = this._voiceStates.get(e),
            i = c.default.getUser(e);
        if (null != t && null != i) {
            if (null == n) return this._voiceStates.set(e, N(t, this.guildId, e)), !0;
            else if (n.voiceState !== t) {
                let r = I(this.guildId, i),
                    s = r?.nick ?? m.Ay.getName(i);
                return this._voiceStates.set(e, { ...n, member: r, comparator: S(t, s), nick: s, voiceState: t }), !0;
            }
        } else if (null != n) return this._voiceStates.delete(e), !0;
        return !1;
    }
    updateMember(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = this._voiceStates.get(e),
            n = c.default.getUser(e);
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
                let n = c.default.getUser(t.user.id);
                return null != n && t.user !== n
                    ? (this._voiceStates.set(n.id, N(t.voiceState, this.guildId, n.id, t)), !0)
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
        return 0 === t.length ? g : t;
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
function R() {
    return r().reduce(p, (e, t) => t.updateUsers() || e, !1);
}
function O() {
    p = {};
    let e = E.A.getAllVoiceStates();
    h.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            A(t ?? f.ME).updateVoiceState(e);
        });
    });
}
class y extends s.Ay.Store {
    static displayName = "SortedVoiceStateStore";
    initialize() {
        O(), this.waitFor(d.default, _.A, u.Ay, c.default, E.A), this.syncWith([c.default], R);
    }
    getVoiceStates(e) {
        return A(e ?? f.ME).getVoiceStates();
    }
    getAllVoiceStates() {
        return p;
    }
    getVoiceStatesForChannel(e) {
        let t = e.getGuildId(),
            n = e.id;
        return A(t ?? f.ME).getVoiceStatesForChannel(n);
    }
    getVoiceStatesForChannelAlt(e, t) {
        return A(t ?? f.ME).getVoiceStatesForChannel(e);
    }
    countVoiceStatesForChannel(e) {
        let t = _.A.getChannel(e);
        return null == t ? 0 : A(t.getGuildId() ?? f.ME).countVoiceStatesForChannel(e);
    }
    getVoiceStateVersion(e) {
        return A(e ?? f.ME).getVersion();
    }
}
let v = new y(o.h, {
    CONNECTION_OPEN: function () {
        p = {};
    },
    OVERLAY_INITIALIZE: function () {
        O();
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t } = e,
            n = d.default.getId();
        return null != n && A(t ?? f.ME).updateVoiceState(n);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { guildId: n, userId: i } = t;
            return A(n ?? f.ME).updateVoiceState(i) || e;
        }, !1);
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return A(t).updateMember(n.id);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        delete p[t.id];
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete p[t.id];
    },
    PASSIVE_UPDATE_V2: function (e) {
        let t = !1,
            n = new Set(p[e.guildId]?.getUserIds()),
            i = new Set(e.voiceStates?.map((e) => e.userId)),
            r = new Set(e.removedVoiceStateUsers);
        for (let r of new Set([...n, ...i])) t = A(e.guildId).updateVoiceState(r) || t;
        for (let i of n) r.has(i) || (t = A(e.guildId).updateMember(i) || t);
        return t;
    },
});
