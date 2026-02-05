"use strict";
let r;
n.d(t, { A: () => M });
var i = n(311907),
    a = n(506774),
    s = n(73153),
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
    g = 232,
    E = 315,
    A = 10,
    I = new Set(),
    T = [],
    y = new Map(),
    S = new Set(),
    v = !1;
function C() {
    let e = p.A.windowSize();
    return null != r && r.x + g < e.width && r.y + E < e.height
        ? r
        : { x: e.width / 2 - g / 2, y: e.height / 2 - E / 2 };
}
function b(e) {
    if (null == e || null == y.get(e)) return !1;
    y.delete(e), (S = new Set(S)).delete(e);
}
function N(e) {
    let { channelId: t, ringing: n } = e;
    if (
        "GUILD_RING_START" === e.type &&
        !c.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallCreate" }).enabled
    )
        return !1;
    let r = n.includes(d.default.getId());
    if (!S.has(t) && r) {
        let e = _.A.getChannel(t);
        if (null == e) return !1;
        let n = A * S.size,
            { x: r, y: i } = C();
        return y.set(t, { channel: e, x: r + n, y: i + n }), void (S = new Set(S)).add(t);
    }
    return !!S.has(t) && !r && b(t);
}
function R(e) {
    let { channelId: t } = e;
    return (
        ("GUILD_RING_STOP" !== e.type ||
            (!!c.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallDelete" }).enabled &&
                !!e.ringing.includes(d.default.getId()))) &&
        b(t)
    );
}
function O(e) {
    let { channelId: t } = e;
    return b(t);
}
function D(e) {
    let { x: t, y: n } = e;
    return (r = { x: t, y: n }), a.w.set(m, r), !1;
}
function L(e) {
    let { channel: t } = e;
    return b(t.id);
}
function w() {
    v = f.A.getStatus() === h.clD.DND || l.NO.getSetting();
}
function x() {
    let e = d.default.getId();
    S.forEach((t) => {
        let n = t;
        null == _.A.getChannel(n)?.guild_id || o.A.getGuildRingingUsers(n).has(e) || b(n);
    });
}
class P extends i.Ay.Store {
    static displayName = "IncomingCallStore";
    initialize() {
        this.waitFor(d.default, o.A, _.A, f.A, u.A, p.A),
            this.syncWith([f.A], w),
            this.syncWith([u.A], w),
            this.syncWith([o.A], x);
    }
    getIncomingCalls() {
        return v ? T : Array.from(y.values());
    }
    getIncomingCallChannelIds() {
        return v ? I : S;
    }
    getFirstIncomingCallId() {
        return v ? null : S.values().next().value;
    }
    hasIncomingCalls() {
        return !v && S.size > 0;
    }
}
let M = new P(s.h, {
    CALL_CREATE: N,
    CALL_UPDATE: N,
    CALL_DELETE: R,
    GUILD_RING_START: N,
    GUILD_RING_STOP: R,
    VOICE_CHANNEL_SELECT: O,
    INCOMING_CALL_MOVE: D,
    CHANNEL_DELETE: L,
});
