"use strict";
let r;
n.d(t, { A: () => D, c: () => g });
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
    E = n(652215);
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
function v(e) {
    let { channelId: t, ongoingRings: n } = e,
        i = "GUILD_RING_START" === e.type;
    if (i && !c.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallCreate" }).enabled) return !1;
    let s = d.default.getId(),
        a = s in n && null != n[s];
    if (!S.has(t) && a) {
        var l;
        let e,
            a,
            u = _.A.getChannel(t);
        if (null == u) return !1;
        let d = 10 * S.size,
            { x: f, y: E } =
                ((l = i ? u : void 0),
                (e = h.A.windowSize()),
                (a = (function (e) {
                    let { enabled: t } = c.A.getCurrentConfig({ guildId: e?.guild_id, location: "IncomingCallStore" });
                    if (e?.guild_id == null || !t) return m;
                    let n = p.Ay.getVoiceStatesForChannel(e).filter(
                            (t) => !o.A.getGuildRingingUsers(e.id).has(t.user.id),
                        ),
                        r = n.length > 2,
                        i = 48 * Math.min(n.length, 2) + 22 * !!r;
                    return { ...g, height: g.height + i };
                })(l)),
                null != r && r.x + a.width < e.width && r.y + a.height < e.height
                    ? r
                    : { x: e.width / 2 - a.width / 2, y: e.height / 2 - a.height / 2 });
        return T.set(t, { channel: u, senderId: n[s], x: f + d, y: E + d }), void (S = new Set(S)).add(t);
    }
    return !!S.has(t) && !a && N(t);
}
function C(e) {
    let { channelId: t } = e;
    return (
        ("GUILD_RING_STOP" !== e.type ||
            (!!c.A.getCurrentConfig({ guildId: e.guildId, location: "IncomingCallDelete" }).enabled &&
                !!e.ringing.includes(d.default.getId()))) &&
        N(t)
    );
}
function O() {
    y = f.A.getStatus() === E.clD.DND || l.NO.getSetting();
}
function R() {
    let e = d.default.getId();
    S.forEach((t) => {
        null == _.A.getChannel(t)?.guild_id || o.A.getGuildRingingUsers(t).has(e) || N(t);
    });
}
class b extends i.Ay.Store {
    static displayName = "IncomingCallStore";
    initialize() {
        this.waitFor(d.default, o.A, _.A, f.A, p.Ay, u.A, h.A),
            this.syncWith([f.A], O),
            this.syncWith([u.A], O),
            this.syncWith([o.A], R);
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
    CALL_CREATE: v,
    CALL_UPDATE: v,
    CALL_DELETE: C,
    GUILD_RING_START: v,
    GUILD_RING_STOP: C,
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
