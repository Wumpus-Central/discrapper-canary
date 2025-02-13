let i;
n.d(t, { Z: () => k }), n(47120);
var r,
    a = n(442837),
    s = n(433517),
    o = n(570140),
    l = n(358221),
    u = n(695346),
    c = n(581883),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = 'IncomingCallStore',
    v = {
        width: 232,
        height: 315
    },
    y = 10,
    I = new Set(),
    T = [],
    b = new Map(),
    S = new Set(),
    A = !1;
function N() {
    let e = h.Z.windowSize();
    return null != i && i.x + v.width < e.width && i.y + v.height < e.height
        ? i
        : {
              x: e.width / 2 - v.width / 2,
              y: e.height / 2 - v.height / 2
          };
}
function C(e) {
    if (null == e || null == b.get(e)) return !1;
    b.delete(e), (S = new Set(S)).delete(e);
}
function R(e) {
    let { channelId: t, ringing: n } = e;
    if (
        'GUILD_RING_START' === e.type &&
        !d.Z.getCurrentConfig({
            guildId: e.guildId,
            location: 'IncomingCallCreate'
        }).enabled
    )
        return !1;
    let i = n.includes(f.default.getId());
    if (!S.has(t) && i) {
        let e = _.Z.getChannel(t);
        if (null == e) return !1;
        let n = y * S.size,
            { x: i, y: r } = N();
        return (
            b.set(t, {
                channel: e,
                x: i + n,
                y: r + n
            }),
            void (S = new Set(S)).add(t)
        );
    }
    return !!S.has(t) && !i && C(t);
}
function O(e) {
    let { channelId: t } = e;
    return (
        !!(
            'GUILD_RING_STOP' !== e.type ||
            (d.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'IncomingCallDelete'
            }).enabled &&
                e.ringing.includes(f.default.getId()))
        ) && C(t)
    );
}
function D(e) {
    let { channelId: t } = e;
    return C(t);
}
function L(e) {
    let { x: t, y: n } = e;
    return (
        (i = {
            x: t,
            y: n
        }),
        s.K.set(E, i),
        !1
    );
}
function x(e) {
    let { channel: t } = e;
    return C(t.id);
}
function P() {
    A = p.Z.getStatus() === m.Skl.DND || u.QZ.getSetting();
}
function w() {
    let e = f.default.getId();
    S.forEach((t) => {
        var n;
        let i = t;
        null != (null === (n = _.Z.getChannel(i)) || void 0 === n ? void 0 : n.guild_id) && (l.Z.getGuildRingingUsers(i).has(e) || C(i));
    });
}
class M extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, p.Z), this.syncWith([p.Z], P), this.syncWith([c.Z], P), this.syncWith([l.Z], w);
    }
    getIncomingCalls() {
        return A ? T : Array.from(b.values());
    }
    getIncomingCallChannelIds() {
        return A ? I : S;
    }
    getFirstIncomingCallId() {
        return A ? null : S.values().next().value;
    }
    hasIncomingCalls() {
        return !A && S.size > 0;
    }
}
g(M, 'displayName', 'IncomingCallStore');
let k = new M(o.Z, {
    CALL_CREATE: R,
    CALL_UPDATE: R,
    CALL_DELETE: O,
    GUILD_RING_START: R,
    GUILD_RING_STOP: O,
    VOICE_CHANNEL_SELECT: D,
    INCOMING_CALL_MOVE: L,
    CHANNEL_DELETE: x
});
