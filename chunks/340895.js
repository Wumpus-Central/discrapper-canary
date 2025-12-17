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
    p = n(592125),
    _ = n(885110),
    m = n(451478),
    h = n(981631);
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
    S = [],
    I = new Map(),
    T = new Set(),
    C = !1;
function A() {
    let e = m.Z.windowSize();
    return null != r && r.x + b < e.width && r.y + y < e.height
        ? r
        : {
              x: e.width / 2 - b / 2,
              y: e.height / 2 - y / 2,
          };
}
function N(e) {
    if (null == e || null == I.get(e)) return !1;
    I.delete(e), (T = new Set(T)).delete(e);
}
function P(e) {
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
    if (!T.has(t) && r) {
        let e = p.Z.getChannel(t);
        if (null == e) return !1;
        let n = O * T.size,
            { x: r, y: i } = A();
        return (
            I.set(t, {
                channel: e,
                x: r + n,
                y: i + n,
            }),
            void (T = new Set(T)).add(t)
        );
    }
    return !!T.has(t) && !r && N(t);
}
function R(e) {
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
function w(e) {
    let { channelId: t } = e;
    return N(t);
}
function D(e) {
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
    C = _.Z.getStatus() === h.Skl.DND || c.QZ.getSetting();
}
function j() {
    let e = f.default.getId();
    T.forEach((t) => {
        var n;
        let r = t;
        null != (null == (n = p.Z.getChannel(r)) ? void 0 : n.guild_id) && (l.Z.getGuildRingingUsers(r).has(e) || N(r));
    });
}
class M extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(f.default, l.Z, p.Z, _.Z, u.Z, m.Z),
            this.syncWith([_.Z], L),
            this.syncWith([u.Z], L),
            this.syncWith([l.Z], j);
    }
    getIncomingCalls() {
        return C ? S : Array.from(I.values());
    }
    getIncomingCallChannelIds() {
        return C ? v : T;
    }
    getFirstIncomingCallId() {
        return C ? null : T.values().next().value;
    }
    hasIncomingCalls() {
        return !C && T.size > 0;
    }
}
g(M, "displayName", "IncomingCallStore");
let k = new M(s.Z, {
    CALL_CREATE: P,
    CALL_UPDATE: P,
    CALL_DELETE: R,
    GUILD_RING_START: P,
    GUILD_RING_STOP: R,
    VOICE_CHANNEL_SELECT: w,
    INCOMING_CALL_MOVE: D,
    CHANNEL_DELETE: x,
});
