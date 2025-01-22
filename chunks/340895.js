let i;
var a,
    o = r(47120);
var s = r(442837),
    l = r(433517),
    u = r(570140),
    c = r(695346),
    d = r(581883),
    f = r(163612),
    p = r(314897),
    h = r(592125),
    _ = r(885110),
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
    y = {
        width: 232,
        height: 315
    },
    b = 10,
    I = new Set(),
    T = [],
    S = new Map(),
    A = new Set(),
    C = !1;
function N() {
    let e = m.Z.windowSize();
    return null != i && i.x + y.width < e.width && i.y + y.height < e.height
        ? i
        : {
              x: e.width / 2 - y.width / 2,
              y: e.height / 2 - y.height / 2
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
    let i = r.includes(p.default.getId());
    if (!A.has(n) && i) {
        let e = h.Z.getChannel(n);
        if (null == e) return !1;
        let r = b * A.size,
            { x: i, y: a } = N();
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
function x(e) {
    let { channelId: n } = e;
    return R(n);
}
function L(e) {
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
    C = _.Z.getStatus() === g.Skl.DND || c.QZ.getSetting();
}
class M extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, _.Z), this.syncWith([_.Z], P), this.syncWith([d.Z], P);
    }
    getIncomingCalls() {
        return C ? T : Array.from(S.values());
    }
    getIncomingCallChannelIds() {
        return C ? I : A;
    }
    getFirstIncomingCallId() {
        return C ? null : A.values().next().value;
    }
    hasIncomingCalls() {
        return !C && A.size > 0;
    }
}
E(M, 'displayName', 'IncomingCallStore'),
    (n.Z = new M(u.Z, {
        CALL_CREATE: O,
        CALL_UPDATE: O,
        CALL_DELETE: D,
        GUILD_RING_START: O,
        GUILD_RING_STOP: D,
        VOICE_CHANNEL_SELECT: x,
        INCOMING_CALL_MOVE: L,
        CHANNEL_DELETE: w
    }));
