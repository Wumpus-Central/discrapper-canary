let r;
n.d(t, { Z: () => k }), n(388685);
var i,
    a = n(442837),
    o = n(433517),
    s = n(570140),
    l = n(358221),
    c = n(695346),
    u = n(581883),
    d = n(163612),
    f = n(314897),
    _ = n(592125),
    p = n(885110),
    h = n(451478),
    m = n(981631);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let E = "IncomingCallStore",
    b = 232,
    y = 315,
    O = 10,
    v = new Set(),
    I = [],
    T = new Map(),
    S = new Set(),
    A = !1;
function C() {
    let e = h.Z.windowSize();
    return null != r && r.x + b < e.width && r.y + y < e.height
        ? r
        : {
              x: e.width / 2 - b / 2,
              y: e.height / 2 - y / 2,
          };
}
function N(e) {
    if (null == e || null == T.get(e)) return !1;
    T.delete(e), (S = new Set(S)).delete(e);
}
function R(e) {
    let { channelId: t, ringing: n } = e;
    if (
        "GUILD_RING_START" === e.type &&
        !d.Z.getCurrentConfig({
            guildId: e.guildId,
            location: "IncomingCallCreate",
        }).enabled
    )
        return !1;
    let r = n.includes(f.default.getId());
    if (!S.has(t) && r) {
        let e = _.Z.getChannel(t);
        if (null == e) return !1;
        let n = O * S.size,
            { x: r, y: i } = C();
        return (
            T.set(t, {
                channel: e,
                x: r + n,
                y: i + n,
            }),
            void (S = new Set(S)).add(t)
        );
    }
    return !!S.has(t) && !r && N(t);
}
function P(e) {
    let { channelId: t } = e;
    return (
        ("GUILD_RING_STOP" !== e.type ||
            (!!d.Z.getCurrentConfig({
                guildId: e.guildId,
                location: "IncomingCallDelete",
            }).enabled &&
                !!e.ringing.includes(f.default.getId()))) &&
        N(t)
    );
}
function D(e) {
    let { channelId: t } = e;
    return N(t);
}
function w(e) {
    let { x: t, y: n } = e;
    return (
        (r = {
            x: t,
            y: n,
        }),
        o.K.set(E, r),
        !1
    );
}
function x(e) {
    let { channel: t } = e;
    return N(t.id);
}
function L() {
    A = p.Z.getStatus() === m.Skl.DND || c.QZ.getSetting();
}
function M() {
    let e = f.default.getId();
    S.forEach((t) => {
        var n;
        let r = t;
        null != (null == (n = _.Z.getChannel(r)) ? void 0 : n.guild_id) && (l.Z.getGuildRingingUsers(r).has(e) || N(r));
    });
}
class j extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(f.default, l.Z, _.Z, p.Z, u.Z, h.Z),
            this.syncWith([p.Z], L),
            this.syncWith([u.Z], L),
            this.syncWith([l.Z], M);
    }
    getIncomingCalls() {
        return A ? I : Array.from(T.values());
    }
    getIncomingCallChannelIds() {
        return A ? v : S;
    }
    getFirstIncomingCallId() {
        return A ? null : S.values().next().value;
    }
    hasIncomingCalls() {
        return !A && S.size > 0;
    }
}
g(j, "displayName", "IncomingCallStore");
let k = new j(s.Z, {
    CALL_CREATE: R,
    CALL_UPDATE: R,
    CALL_DELETE: P,
    GUILD_RING_START: R,
    GUILD_RING_STOP: P,
    VOICE_CHANNEL_SELECT: D,
    INCOMING_CALL_MOVE: w,
    CHANNEL_DELETE: x,
});
