"use strict";
let r;
n.d(t, { A: () => V, c: () => A });
var i = n(311907),
    s = n(506774),
    a = n(73153),
    o = n(313961),
    l = n(253932),
    u = n(617617),
    c = n(164891),
    d = n(961350),
    _ = n(734057),
    f = n(461213),
    p = n(607567),
    h = n(531685),
    m = n(652215);
let E = "IncomingCallStore",
    g = { width: 232, height: 315 },
    A = { width: 400, height: 374 },
    I = 48,
    T = 22,
    S = 2,
    y = 10,
    v = new Set(),
    N = [],
    C = new Map(),
    b = new Set(),
    R = !1;
function O(e) {
    let { enabled: t } = c.A.getCurrentConfig({ guildId: e?.guild_id, location: "IncomingCallStore" });
    if (e?.guild_id == null || !t) return g;
    let n = p.Ay.getVoiceStatesForChannel(e).filter((t) => !o.A.getGuildRingingUsers(e.id).has(t.user.id)),
        r = n.length > S,
        i = Math.min(n.length, S) * I + (r ? T : 0);
    return { ...A, height: A.height + i };
}
function D(e) {
    let t = h.A.windowSize(),
        n = O(e);
    return null != r && r.x + n.width < t.width && r.y + n.height < t.height
        ? r
        : { x: t.width / 2 - n.width / 2, y: t.height / 2 - n.height / 2 };
}
function L(e) {
    if (null == e || null == C.get(e)) return !1;
    C.delete(e), (b = new Set(b)).delete(e);
}
function w(e) {
    let { channelId: t, ongoingRings: n } = e,
        r = "GUILD_RING_START" === e.type;
    if (r && !c.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallCreate" }).enabled) return !1;
    let i = d.default.getId(),
        s = i in n && null != n[i];
    if (!b.has(t) && s) {
        let e = _.A.getChannel(t);
        if (null == e) return !1;
        let s = y * b.size,
            { x: a, y: o } = D(r ? e : void 0);
        return C.set(t, { channel: e, senderId: n[i], x: a + s, y: o + s }), void (b = new Set(b)).add(t);
    }
    return !!b.has(t) && !s && L(t);
}
function x(e) {
    let { channelId: t } = e;
    return (
        ("GUILD_RING_STOP" !== e.type ||
            (!!c.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallDelete" }).enabled &&
                !!e.ringing.includes(d.default.getId()))) &&
        L(t)
    );
}
function M(e) {
    let { channelId: t } = e;
    return L(t);
}
function P(e) {
    let { x: t, y: n } = e;
    return (r = { x: t, y: n }), s.w.set(E, r), !1;
}
function k(e) {
    let { channel: t } = e;
    return L(t.id);
}
function U() {
    R = f.A.getStatus() === m.clD.DND || l.NO.getSetting();
}
function G() {
    let e = d.default.getId();
    b.forEach((t) => {
        let n = t;
        null == _.A.getChannel(n)?.guild_id || o.A.getGuildRingingUsers(n).has(e) || L(n);
    });
}
class F extends i.Ay.Store {
    static displayName = "IncomingCallStore";
    initialize() {
        this.waitFor(d.default, o.A, _.A, f.A, p.Ay, u.A, h.A),
            this.syncWith([f.A], U),
            this.syncWith([u.A], U),
            this.syncWith([o.A], G);
    }
    getIncomingCalls() {
        return R ? N : Array.from(C.values());
    }
    getIncomingCallChannelIds() {
        return R ? v : b;
    }
    getFirstIncomingCallId() {
        return R ? null : b.values().next().value;
    }
    hasIncomingCalls() {
        return !R && b.size > 0;
    }
}
let V = new F(a.h, {
    CALL_CREATE: w,
    CALL_UPDATE: w,
    CALL_DELETE: x,
    GUILD_RING_START: w,
    GUILD_RING_STOP: x,
    VOICE_CHANNEL_SELECT: M,
    INCOMING_CALL_MOVE: P,
    CHANNEL_DELETE: k,
});
