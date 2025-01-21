let i;
var a,
    s = r(47120);
var o = r(442837),
    l = r(433517),
    u = r(570140),
    c = r(695346),
    d = r(581883),
    f = r(163612),
    _ = r(314897),
    h = r(592125),
    p = r(885110),
    m = r(451478),
    g = r(981631);
function E(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let v = 'IncomingCallStore',
    I = {
        width: 232,
        height: 315
    },
    T = 10,
    b = new Set(),
    y = [],
    S = new Map(),
    A = new Set(),
    N = !1;
function C() {
    let e = m.Z.windowSize();
    return null != i && i.x + I.width < e.width && i.y + I.height < e.height
        ? i
        : {
              x: e.width / 2 - I.width / 2,
              y: e.height / 2 - I.height / 2
          };
}
function R(e) {
    if (null == e || null == S.get(e)) return !1;
    S.delete(e), (A = new Set(A)).delete(e);
}
function O(e) {
    let { channelId: n, ringing: r } = e;
    if (
        'GUILD_RING_START' === e.type &&
        !f.Z.getCurrentConfig({
            guildId: e.guildId,
            location: 'IncomingCallCreate'
        }).enabled
    )
        return !1;
    let i = r.includes(_.default.getId());
    if (!A.has(n) && i) {
        let e = h.Z.getChannel(n);
        if (null == e) return !1;
        let r = T * A.size,
            { x: i, y: a } = C();
        return (
            S.set(n, {
                channel: e,
                x: i + r,
                y: a + r
            }),
            (A = new Set(A)).add(n),
            void 0
        );
    }
    return !!A.has(n) && !i && R(n);
}
function D(e) {
    let { channelId: n } = e;
    return (
        ('GUILD_RING_STOP' !== e.type ||
            !!f.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'IncomingCallDelete'
            }).enabled) &&
        R(n)
    );
}
function L(e) {
    let { channelId: n } = e;
    return R(n);
}
function x(e) {
    let { x: n, y: r } = e;
    return (
        (i = {
            x: n,
            y: r
        }),
        l.K.set(v, i),
        !1
    );
}
function w(e) {
    let { channel: n } = e;
    return R(n.id);
}
function P() {
    N = p.Z.getStatus() === g.Skl.DND || c.QZ.getSetting();
}
class M extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, p.Z), this.syncWith([p.Z], P), this.syncWith([d.Z], P);
    }
    getIncomingCalls() {
        return N ? y : Array.from(S.values());
    }
    getIncomingCallChannelIds() {
        return N ? b : A;
    }
    getFirstIncomingCallId() {
        return N ? null : A.values().next().value;
    }
    hasIncomingCalls() {
        return !N && A.size > 0;
    }
}
E(M, 'displayName', 'IncomingCallStore'),
    (n.Z = new M(u.Z, {
        CALL_CREATE: O,
        CALL_UPDATE: O,
        CALL_DELETE: D,
        GUILD_RING_START: O,
        GUILD_RING_STOP: D,
        VOICE_CHANNEL_SELECT: L,
        INCOMING_CALL_MOVE: x,
        CHANNEL_DELETE: w
    }));
