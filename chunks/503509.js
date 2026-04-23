"use strict";
let i;
n.d(t, { A: () => L, c: () => p });
var r = n(17928),
    s = n(506774),
    a = n(228366),
    o = n(313961),
    l = n(253932),
    d = n(617617),
    _ = n(164891),
    u = n(495544),
    c = n(734057),
    E = n(461213),
    h = n(607567),
    m = n(531685),
    f = n(652215);
let g = { width: 232, height: 315 },
    p = { width: 400, height: 374 },
    A = new Set(),
    I = [],
    T = new Map(),
    S = new Set(),
    N = !1;
function C(e) {
    if (null == e || null == T.get(e)) return !1;
    T.delete(e), (S = new Set(S)).delete(e);
}
function R(e) {
    let { channelId: t, ongoingRings: n } = e,
        r = "GUILD_RING_START" === e.type;
    if (r && !_.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallCreate" }).enabled) return !1;
    let s = u.default.getId(),
        a = s in n && null != n[s];
    if (!S.has(t) && a) {
        var l;
        let e,
            a,
            d = c.A.getChannel(t);
        if (null == d) return !1;
        let u = 10 * S.size,
            { x: E, y: f } =
                ((l = r ? d : void 0),
                (e = m.A.windowSize()),
                (a = (function (e) {
                    let { enabled: t } = _.A.getCurrentConfig({ guildId: e?.guild_id, location: "IncomingCallStore" });
                    if (e?.guild_id == null || !t) return g;
                    let n = h.Ay.getVoiceStatesForChannel(e).filter(
                            (t) => !o.A.getGuildRingingUsers(e.id).has(t.user.id),
                        ),
                        i = n.length > 2,
                        r = 48 * Math.min(n.length, 2) + 22 * !!i;
                    return { ...p, height: p.height + r };
                })(l)),
                null != i && i.x + a.width < e.width && i.y + a.height < e.height
                    ? i
                    : { x: e.width / 2 - a.width / 2, y: e.height / 2 - a.height / 2 });
        return T.set(t, { channel: d, senderId: n[s], x: E + u, y: f + u }), void (S = new Set(S)).add(t);
    }
    return !!S.has(t) && !a && C(t);
}
function O(e) {
    let { channelId: t } = e;
    return (
        ("GUILD_RING_STOP" !== e.type ||
            (!!_.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallDelete" }).enabled &&
                !!e.ringing.includes(u.default.getId()))) &&
        C(t)
    );
}
function y() {
    N = E.A.getStatus() === f.clD.DND || l.NO.getSetting();
}
function v() {
    let e = u.default.getId();
    S.forEach((t) => {
        null == c.A.getChannel(t)?.guild_id || o.A.getGuildRingingUsers(t).has(e) || C(t);
    });
}
class D extends r.Ay.Store {
    static displayName = "IncomingCallStore";
    initialize() {
        this.waitFor(u.default, o.A, c.A, E.A, h.Ay, d.A, m.A),
            this.syncWith([E.A], y),
            this.syncWith([d.A], y),
            this.syncWith([o.A], v);
    }
    getIncomingCalls() {
        return N ? I : Array.from(T.values());
    }
    getIncomingCallChannelIds() {
        return N ? A : S;
    }
    getFirstIncomingCallId() {
        return N ? null : S.values().next().value;
    }
    hasIncomingCalls() {
        return !N && S.size > 0;
    }
}
let L = new D(a.h, {
    CALL_CREATE: R,
    CALL_UPDATE: R,
    CALL_DELETE: O,
    GUILD_RING_START: R,
    GUILD_RING_STOP: O,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return C(t);
    },
    INCOMING_CALL_MOVE: function (e) {
        let { x: t, y: n } = e;
        return (i = { x: t, y: n }), s.w.set("IncomingCallStore", i), !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return C(t.id);
    },
});
