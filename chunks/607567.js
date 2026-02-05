"use strict";
n.d(t, { Ay: () => U, RQ: () => v, hz: () => y });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(713402),
    o = n(73153),
    l = n(427157),
    u = n(961350),
    c = n(734057),
    d = n(696451),
    _ = n(287809),
    f = n(977997),
    p = n(661191),
    h = n(427262),
    m = n(652215);
let g = Object.freeze([]),
    E = {};
function A(e) {
    let t = E[e];
    return null == t && ((t = new C(e)), (E[e] = t)), t;
}
function I(e, t) {
    return d.Ay.getMember(e, t.id);
}
function T(e, t, n) {
    let r = t?.nick ?? h.Ay.getName(n);
    return { member: t, comparator: y(e, r) };
}
function y(e, t) {
    return `${e.selfStream ? "\0" : "\x01"}${t.toLowerCase()}\0${e.userId}`;
}
function S(e, t, n) {
    return T(n, I(e, t), t);
}
function v(e, t, n, r) {
    let i = _.default.getUser(n),
        a = null == i;
    null == i && (i = new l.A({ id: n, username: "...", discriminator: n.slice(-5, -1) }));
    let { member: s, comparator: o } = S(t, i, e),
        u = {
            voiceState: e,
            user: i,
            member: s,
            comparator: o,
            nick: s?.nick,
            connectedOn: r?.connectedOn ?? Date.now(),
        };
    return a && (u._isPlaceholder = !0), u;
}
class C {
    guildId;
    _pending = new Set();
    _voiceStates = new s.J(
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
            if (null == n) return this._voiceStates.set(e, v(t, this.guildId, e)), !0;
            else if (n.voiceState !== t) {
                let i = I(this.guildId, r),
                    a = i?.nick ?? h.Ay.getName(r);
                return this._voiceStates.set(e, { ...n, member: i, comparator: y(t, a), nick: a, voiceState: t }), !0;
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
                    ? (this._voiceStates.set(n.id, v(t.voiceState, this.guildId, n.id, t)), !0)
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
function b() {
    E = {};
}
function N() {
    M();
}
function R(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { guildId: n, userId: r } = t;
        return A(n ?? m.ME).updateVoiceState(r) || e;
    }, !1);
}
function O(e) {
    let t = !1,
        n = new Set(E[e.guildId]?.getUserIds()),
        r = new Set(e.voiceStates?.map((e) => e.userId)),
        i = new Set(e.removedVoiceStateUsers);
    for (let i of new Set([...n, ...r])) t = A(e.guildId).updateVoiceState(i) || t;
    for (let r of n) i.has(r) || (t = A(e.guildId).updateMember(r) || t);
    return t;
}
function D(e) {
    let { guildId: t } = e,
        n = u.default.getId();
    return null != n && A(t ?? m.ME).updateVoiceState(n);
}
function L() {
    return i().reduce(E, (e, t) => t.updateUsers() || e, !1);
}
function w(e) {
    let { guildId: t, user: n } = e;
    return A(t).updateMember(n.id);
}
function x(e) {
    let { guild: t } = e;
    delete E[t.id];
}
function P(e) {
    let { guild: t } = e;
    delete E[t.id];
}
function M() {
    E = {};
    let e = f.A.getAllVoiceStates();
    p.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            A(t ?? m.ME).updateVoiceState(e);
        });
    });
}
class k extends a.Ay.Store {
    static displayName = "SortedVoiceStateStore";
    initialize() {
        M(), this.waitFor(u.default, c.A, d.Ay, _.default, f.A), this.syncWith([_.default], L);
    }
    getVoiceStates(e) {
        return A(e ?? m.ME).getVoiceStates();
    }
    getAllVoiceStates() {
        return E;
    }
    getVoiceStatesForChannel(e) {
        let t = e.getGuildId(),
            n = e.id;
        return A(t ?? m.ME).getVoiceStatesForChannel(n);
    }
    getVoiceStatesForChannelAlt(e, t) {
        return A(t ?? m.ME).getVoiceStatesForChannel(e);
    }
    countVoiceStatesForChannel(e) {
        let t = c.A.getChannel(e);
        return null == t ? 0 : A(t.getGuildId() ?? m.ME).countVoiceStatesForChannel(e);
    }
    getVoiceStateVersion(e) {
        return A(e ?? m.ME).getVersion();
    }
}
let U = new k(o.h, {
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: N,
    VOICE_CHANNEL_SELECT: D,
    VOICE_STATE_UPDATES: R,
    GUILD_MEMBER_UPDATE: w,
    GUILD_CREATE: x,
    GUILD_DELETE: P,
    PASSIVE_UPDATE_V2: O,
});
