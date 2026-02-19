"use strict";
let r;
n.d(t, { A: () => P });
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
    p = n(531685),
    h = n(652215);
let m = "IncomingCallStore",
    E = 232,
    g = 315,
    A = 10,
    I = new Set(),
    T = [],
    S = new Map(),
    y = new Set(),
    v = !1;
function N() {
    let e = p.A.windowSize();
    return null != r && r.x + E < e.width && r.y + g < e.height
        ? r
        : { x: e.width / 2 - E / 2, y: e.height / 2 - g / 2 };
}
function C(e) {
    if (null == e || null == S.get(e)) return !1;
    S.delete(e), (y = new Set(y)).delete(e);
}
function b(e) {
    let { channelId: t, ongoingRings: n } = e;
    if (
        "GUILD_RING_START" === e.type &&
        !c.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallCreate" }).enabled
    )
        return !1;
    let r = d.default.getId(),
        i = r in n && null != n[r];
    if (!y.has(t) && i) {
        let e = _.A.getChannel(t);
        if (null == e) return !1;
        let i = A * y.size,
            { x: s, y: a } = N();
        return S.set(t, { channel: e, senderId: n[r], x: s + i, y: a + i }), void (y = new Set(y)).add(t);
    }
    return !!y.has(t) && !i && C(t);
}
function R(e) {
    let { channelId: t } = e;
    return (
        ("GUILD_RING_STOP" !== e.type ||
            (!!c.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallDelete" }).enabled &&
                !!e.ringing.includes(d.default.getId()))) &&
        C(t)
    );
}
function O(e) {
    let { channelId: t } = e;
    return C(t);
}
function D(e) {
    let { x: t, y: n } = e;
    return (r = { x: t, y: n }), s.w.set(m, r), !1;
}
function L(e) {
    let { channel: t } = e;
    return C(t.id);
}
function w() {
    v = f.A.getStatus() === h.clD.DND || l.NO.getSetting();
}
function x() {
    let e = d.default.getId();
    y.forEach((t) => {
        let n = t;
        null == _.A.getChannel(n)?.guild_id || o.A.getGuildRingingUsers(n).has(e) || C(n);
    });
}
class M extends i.Ay.Store {
    static displayName = "IncomingCallStore";
    initialize() {
        this.waitFor(d.default, o.A, _.A, f.A, u.A, p.A),
            this.syncWith([f.A], w),
            this.syncWith([u.A], w),
            this.syncWith([o.A], x);
    }
    getIncomingCalls() {
        return v ? T : Array.from(S.values());
    }
    getIncomingCallChannelIds() {
        return v ? I : y;
    }
    getFirstIncomingCallId() {
        return v ? null : y.values().next().value;
    }
    hasIncomingCalls() {
        return !v && y.size > 0;
    }
}
let P = new M(a.h, {
    CALL_CREATE: b,
    CALL_UPDATE: b,
    CALL_DELETE: R,
    GUILD_RING_START: b,
    GUILD_RING_STOP: R,
    VOICE_CHANNEL_SELECT: O,
    INCOMING_CALL_MOVE: D,
    CHANNEL_DELETE: L,
});
