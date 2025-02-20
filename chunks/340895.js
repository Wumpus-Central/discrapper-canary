let r;
n.d(t, { Z: () => k }), n(47120);
var i,
    o = n(442837),
    a = n(433517),
    s = n(570140),
    l = n(358221),
    c = n(695346),
    u = n(581883),
    d = n(163612),
    f = n(314897),
    p = n(592125),
    _ = n(885110),
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
    b = 10,
    y = new Set(),
    O = [],
    S = new Map(),
    I = new Set(),
    T = !1;
function N() {
    let e = h.Z.windowSize();
    return null != r && r.x + v.width < e.width && r.y + v.height < e.height
        ? r
        : {
              x: e.width / 2 - v.width / 2,
              y: e.height / 2 - v.height / 2
          };
}
function A(e) {
    if (null == e || null == S.get(e)) return !1;
    S.delete(e), (I = new Set(I)).delete(e);
}
function C(e) {
    let { channelId: t, ringing: n } = e;
    if (
        'GUILD_RING_START' === e.type &&
        !d.Z.getCurrentConfig({
            guildId: e.guildId,
            location: 'IncomingCallCreate'
        }).enabled
    )
        return !1;
    let r = n.includes(f.default.getId());
    if (!I.has(t) && r) {
        let e = p.Z.getChannel(t);
        if (null == e) return !1;
        let n = b * I.size,
            { x: r, y: i } = N();
        return (
            S.set(t, {
                channel: e,
                x: r + n,
                y: i + n
            }),
            void (I = new Set(I)).add(t)
        );
    }
    return !!I.has(t) && !r && A(t);
}
function R(e) {
    let { channelId: t } = e;
    return (
        !!(
            'GUILD_RING_STOP' !== e.type ||
            (d.Z.getCurrentConfig({
                guildId: e.guildId,
                location: 'IncomingCallDelete'
            }).enabled &&
                e.ringing.includes(f.default.getId()))
        ) && A(t)
    );
}
function P(e) {
    let { channelId: t } = e;
    return A(t);
}
function w(e) {
    let { x: t, y: n } = e;
    return (
        (r = {
            x: t,
            y: n
        }),
        a.K.set(E, r),
        !1
    );
}
function D(e) {
    let { channel: t } = e;
    return A(t.id);
}
function x() {
    T = _.Z.getStatus() === m.Skl.DND || c.QZ.getSetting();
}
function L() {
    let e = f.default.getId();
    I.forEach((t) => {
        var n;
        let r = t;
        null != (null === (n = p.Z.getChannel(r)) || void 0 === n ? void 0 : n.guild_id) && (l.Z.getGuildRingingUsers(r).has(e) || A(r));
    });
}
class M extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, _.Z), this.syncWith([_.Z], x), this.syncWith([u.Z], x), this.syncWith([l.Z], L);
    }
    getIncomingCalls() {
        return T ? O : Array.from(S.values());
    }
    getIncomingCallChannelIds() {
        return T ? y : I;
    }
    getFirstIncomingCallId() {
        return T ? null : I.values().next().value;
    }
    hasIncomingCalls() {
        return !T && I.size > 0;
    }
}
g(M, 'displayName', 'IncomingCallStore');
let k = new M(s.Z, {
    CALL_CREATE: C,
    CALL_UPDATE: C,
    CALL_DELETE: R,
    GUILD_RING_START: C,
    GUILD_RING_STOP: R,
    VOICE_CHANNEL_SELECT: P,
    INCOMING_CALL_MOVE: w,
    CHANNEL_DELETE: D
});
