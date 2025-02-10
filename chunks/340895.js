let i;
n.d(t, { Z: () => w }), n(47120);
var r,
    a = n(442837),
    s = n(433517),
    o = n(570140),
    l = n(695346),
    u = n(581883),
    c = n(163612),
    d = n(314897),
    f = n(592125),
    _ = n(885110),
    p = n(451478),
    h = n(981631);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = 'IncomingCallStore',
    E = {
        width: 232,
        height: 315
    },
    v = 10,
    y = new Set(),
    I = [],
    T = new Map(),
    b = new Set(),
    S = !1;
function A() {
    let e = p.Z.windowSize();
    return null != i && i.x + E.width < e.width && i.y + E.height < e.height
        ? i
        : {
              x: e.width / 2 - E.width / 2,
              y: e.height / 2 - E.height / 2
          };
}
function N(e) {
    if (null == e || null == T.get(e)) return !1;
    T.delete(e), (b = new Set(b)).delete(e);
}
function C(e) {
    let { channelId: t, ringing: n } = e;
    if (
        'GUILD_RING_START' === e.type &&
        !c.Z.getCurrentConfig({
            guildId: e.guildId,
            location: 'IncomingCallCreate'
        }).enabled
    )
        return !1;
    let i = n.includes(d.default.getId());
    if (!b.has(t) && i) {
        let e = f.Z.getChannel(t);
        if (null == e) return !1;
        let n = v * b.size,
            { x: i, y: r } = A();
        return (
            T.set(t, {
                channel: e,
                x: i + n,
                y: r + n
            }),
            void (b = new Set(b)).add(t)
        );
    }
    return !!b.has(t) && !i && N(t);
}
function R(e) {
    let { channelId: t } = e;
    return (
        !!(
            'GUILD_RING_STOP' !== e.type ||
            (c.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'IncomingCallDelete'
            }).enabled &&
                e.ringing.includes(d.default.getId()))
        ) && N(t)
    );
}
function O(e) {
    let { channelId: t } = e;
    return N(t);
}
function D(e) {
    let { x: t, y: n } = e;
    return (
        (i = {
            x: t,
            y: n
        }),
        s.K.set(g, i),
        !1
    );
}
function L(e) {
    let { channel: t } = e;
    return N(t.id);
}
function x() {
    S = _.Z.getStatus() === h.Skl.DND || l.QZ.getSetting();
}
class P extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.Z), this.syncWith([_.Z], x), this.syncWith([u.Z], x);
    }
    getIncomingCalls() {
        return S ? I : Array.from(T.values());
    }
    getIncomingCallChannelIds() {
        return S ? y : b;
    }
    getFirstIncomingCallId() {
        return S ? null : b.values().next().value;
    }
    hasIncomingCalls() {
        return !S && b.size > 0;
    }
}
m(P, 'displayName', 'IncomingCallStore');
let w = new P(o.Z, {
    CALL_CREATE: C,
    CALL_UPDATE: C,
    CALL_DELETE: R,
    GUILD_RING_START: C,
    GUILD_RING_STOP: R,
    VOICE_CHANNEL_SELECT: O,
    INCOMING_CALL_MOVE: D,
    CHANNEL_DELETE: L
});
