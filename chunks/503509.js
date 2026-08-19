"use strict";
let i;
n.d(t, { A: () => v, c: () => p });
var r = n(17928),
    a = n(506774),
    s = n(228366),
    l = n(198052),
    o = n(885386),
    d = n(617617),
    c = n(164891),
    u = n(280450),
    _ = n(734057),
    E = n(461213),
    A = n(607567),
    h = n(531685),
    I = n(652215);
let f = { width: 232, height: 315 },
    p = { width: 400, height: 374 },
    T = new Set(),
    m = [],
    g = new Map(),
    S = new Set(),
    N = !1;
function C(e) {
    if (null == e || null == g.get(e)) return !1;
    g.delete(e), (S = new Set(S)).delete(e);
}
function O(e) {
    let { channelId: t, ongoingRings: n } = e,
        r = "GUILD_RING_START" === e.type;
    if (r && !c.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallCreate" }).enabled) return !1;
    let a = u.default.getId(),
        s = a in n && null != n[a];
    if (!S.has(t) && s) {
        var o;
        let e,
            s,
            d = _.A.getChannel(t);
        if (null == d) return !1;
        let u = 10 * S.size,
            { x: E, y: I } =
                ((o = r ? d : void 0),
                (e = h.A.windowSize()),
                (s = (function (e) {
                    let { enabled: t } = c.A.getCurrentConfig({ guildId: e?.guild_id, location: "IncomingCallStore" });
                    if (e?.guild_id == null || !t) return f;
                    let n = A.Ay.getVoiceStatesForChannel(e).filter(
                            (t) => !l.A.getGuildRingingUsers(e.id).has(t.user.id),
                        ),
                        i = n.length > 2,
                        r = 48 * Math.min(n.length, 2) + 22 * !!i;
                    return { ...p, height: p.height + r };
                })(o)),
                null != i && i.x + s.width < e.width && i.y + s.height < e.height
                    ? i
                    : { x: e.width / 2 - s.width / 2, y: e.height / 2 - s.height / 2 });
        return g.set(t, { channel: d, senderId: n[a], x: E + u, y: I + u }), void (S = new Set(S)).add(t);
    }
    return !!S.has(t) && !s && C(t);
}
function R(e) {
    let { channelId: t } = e;
    return (
        ("GUILD_RING_STOP" !== e.type ||
            (!!c.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallDelete" }).enabled &&
                !!e.ringing.includes(u.default.getId()))) &&
        C(t)
    );
}
function L() {
    N = E.A.getStatus() === I.clD.DND || o.NO.getSetting();
}
function y() {
    let e = u.default.getId();
    S.forEach((t) => {
        null == _.A.getChannel(t)?.guild_id || l.A.getGuildRingingUsers(t).has(e) || C(t);
    });
}
class D extends r.Ay.Store {
    static displayName = "IncomingCallStore";
    initialize() {
        this.waitFor(u.default, l.A, _.A, E.A, A.Ay, d.A, h.A),
            this.syncWith([E.A], L),
            this.syncWith([d.A], L),
            this.syncWith([l.A], y);
    }
    getIncomingCalls() {
        return N ? m : Array.from(g.values());
    }
    getIncomingCallChannelIds() {
        return N ? T : S;
    }
    getFirstIncomingCallId() {
        return N ? null : S.values().next().value;
    }
    hasIncomingCalls() {
        return !N && S.size > 0;
    }
}
let v = new D(s.h, {
    CALL_CREATE: O,
    CALL_UPDATE: O,
    CALL_DELETE: R,
    GUILD_RING_START: O,
    GUILD_RING_STOP: R,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return C(t);
    },
    INCOMING_CALL_MOVE: function (e) {
        let { x: t, y: n } = e;
        return (i = { x: t, y: n }), a.w.set("IncomingCallStore", i), !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return C(t.id);
    },
});
