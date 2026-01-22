let r;
n.d(t, {
    A: () => k,
}),
    n(896048);
var i,
    a = n(311907),
    s = n(506774),
    o = n(73153),
    l = n(313961),
    c = n(253932),
    u = n(617617),
    d = n(164891),
    f = n(961350),
    p = n(734057),
    _ = n(461213),
    h = n(531685),
    m = n(652215);

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
    A = new Set(),
    v = [],
    S = new Map(),
    I = new Set(),
    T = !1;

function C() {
    let e = h.A.windowSize();
    return null != r && r.x + b < e.width && r.y + y < e.height
        ? r
        : {
              x: e.width / 2 - b / 2,
              y: e.height / 2 - y / 2,
          };
}

function N(e) {
    if (null == e || null == S.get(e)) return !1;
    S.delete(e), (I = new Set(I)).delete(e);
}

function R(e) {
    let { channelId: t, ringing: n } = e;
    if (
        "GUILD_RING_START" === e.type &&
        !d.A.getCurrentConfig({
            guildId: e.guildId,
            location: "IncomingCallCreate",
        }).enabled
    )
        return !1;
    let r = n.includes(f.default.getId());
    if (!I.has(t) && r) {
        let e = p.A.getChannel(t);
        if (null == e) return !1;
        let n = O * I.size,
            { x: r, y: i } = C();
        return (
            S.set(t, {
                channel: e,
                x: r + n,
                y: i + n,
            }),
            void (I = new Set(I)).add(t)
        );
    }
    return !!I.has(t) && !r && N(t);
}

function w(e) {
    let { channelId: t } = e;
    return (
        ("GUILD_RING_STOP" !== e.type ||
            (!!d.A.getCurrentConfig({
                guildId: e.guildId,
                location: "IncomingCallDelete",
            }).enabled &&
                !!e.ringing.includes(f.default.getId()))) &&
        N(t)
    );
}

function P(e) {
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
        s.w.set(E, r),
        !1
    );
}

function x(e) {
    let { channel: t } = e;
    return N(t.id);
}

function L() {
    T = _.A.getStatus() === m.clD.DND || c.NO.getSetting();
}

function j() {
    let e = f.default.getId();
    I.forEach((t) => {
        var n;
        let r = t;
        null == (null == (n = p.A.getChannel(r)) ? void 0 : n.guild_id) || l.A.getGuildRingingUsers(r).has(e) || N(r);
    });
}
class M extends (i = a.Ay.Store) {
    initialize() {
        this.waitFor(f.default, l.A, p.A, _.A, u.A, h.A),
            this.syncWith([_.A], L),
            this.syncWith([u.A], L),
            this.syncWith([l.A], j);
    }
    getIncomingCalls() {
        return T ? v : Array.from(S.values());
    }
    getIncomingCallChannelIds() {
        return T ? A : I;
    }
    getFirstIncomingCallId() {
        return T ? null : I.values().next().value;
    }
    hasIncomingCalls() {
        return !T && I.size > 0;
    }
}
g(M, "displayName", "IncomingCallStore");
let k = new M(o.h, {
    CALL_CREATE: R,
    CALL_UPDATE: R,
    CALL_DELETE: w,
    GUILD_RING_START: R,
    GUILD_RING_STOP: w,
    VOICE_CHANNEL_SELECT: P,
    INCOMING_CALL_MOVE: D,
    CHANNEL_DELETE: x,
});
