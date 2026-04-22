"use strict";
let r;
n.d(t, { A: () => D, c: () => g });
var i = n(311907),
    s = n(506774),
    a = n(73153),
    o = n(313961),
    l = n(253932),
    u = n(617617),
    d = n(164891),
    c = n(961350),
    _ = n(734057),
    f = n(461213),
    E = n(607567),
    h = n(531685),
    p = n(652215);
let m = { width: 232, height: 315 },
    g = { width: 400, height: 374 },
    A = new Set(),
    I = [],
    T = new Map(),
    S = new Set(),
    y = !1;
function N(e) {
    if (null == e || null == T.get(e)) return !1;
    T.delete(e), (S = new Set(S)).delete(e);
}
function O(e) {
    let { channelId: t, ongoingRings: n } = e,
        i = "GUILD_RING_START" === e.type;
    if (i && !d.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallCreate" }).enabled) return !1;
    let s = c.default.getId(),
        a = s in n && null != n[s];
    if (!S.has(t) && a) {
        var l;
        let e,
            a,
            u = _.A.getChannel(t);
        if (null == u) return !1;
        let c = 10 * S.size,
            { x: f, y: p } =
                ((l = i ? u : void 0),
                (e = h.A.windowSize()),
                (a = (function (e) {
                    let { enabled: t } = d.A.getCurrentConfig({ guildId: e?.guild_id, location: "IncomingCallStore" });
                    if (e?.guild_id == null || !t) return m;
                    let n = E.Ay.getVoiceStatesForChannel(e).filter(
                            (t) => !o.A.getGuildRingingUsers(e.id).has(t.user.id),
                        ),
                        r = n.length > 2,
                        i = 48 * Math.min(n.length, 2) + 22 * !!r;
                    return { ...g, height: g.height + i };
                })(l)),
                null != r && r.x + a.width < e.width && r.y + a.height < e.height
                    ? r
                    : { x: e.width / 2 - a.width / 2, y: e.height / 2 - a.height / 2 });
        return T.set(t, { channel: u, senderId: n[s], x: f + c, y: p + c }), void (S = new Set(S)).add(t);
    }
    return !!S.has(t) && !a && N(t);
}
function R(e) {
    let { channelId: t } = e;
    return (
        ("GUILD_RING_STOP" !== e.type ||
            (!!d.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallDelete" }).enabled &&
                !!e.ringing.includes(c.default.getId()))) &&
        N(t)
    );
}
function v() {
    y = f.A.getStatus() === p.clD.DND || l.NO.getSetting();
}
function C() {
    let e = c.default.getId();
    S.forEach((t) => {
        null == _.A.getChannel(t)?.guild_id || o.A.getGuildRingingUsers(t).has(e) || N(t);
    });
}
class b extends i.Ay.Store {
    static displayName = "IncomingCallStore";
    initialize() {
        this.waitFor(c.default, o.A, _.A, f.A, E.Ay, u.A, h.A),
            this.syncWith([f.A], v),
            this.syncWith([u.A], v),
            this.syncWith([o.A], C);
    }
    getIncomingCalls() {
        return y ? I : Array.from(T.values());
    }
    getIncomingCallChannelIds() {
        return y ? A : S;
    }
    getFirstIncomingCallId() {
        return y ? null : S.values().next().value;
    }
    hasIncomingCalls() {
        return !y && S.size > 0;
    }
}
let D = new b(a.h, {
    CALL_CREATE: O,
    CALL_UPDATE: O,
    CALL_DELETE: R,
    GUILD_RING_START: O,
    GUILD_RING_STOP: R,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return N(t);
    },
    INCOMING_CALL_MOVE: function (e) {
        let { x: t, y: n } = e;
        return (r = { x: t, y: n }), s.w.set("IncomingCallStore", r), !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return N(t.id);
    },
});
