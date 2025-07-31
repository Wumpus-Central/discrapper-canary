(n.d(t, { Z: () => j }), n(539854), n(388685), n(997841));
var r,
    i = n(348327),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(317381),
    d = n(212517),
    _ = n(676035),
    f = n(594190),
    p = n(106301),
    h = n(406066),
    m = n(768419),
    g = n(695346),
    E = n(581883),
    b = n(199902),
    y = n(272053),
    O = n(77498),
    v = n(981631);
function I(e, t, n) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            }));
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = [],
    C = {};
function R() {
    let e = [],
        t = g.Ok.getSetting();
    null != t && ('0' === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, _.I)(t));
    let n = h.Z.getActivities();
    e.push(...n);
    let r = y.Z.getStream();
    null != r && e.push(T({ type: v.IIU.STREAMING }, r));
    let i = new Set();
    s().forEach(C, (t) => {
        let [, n] = t;
        null != n.application_id && (i.add(n.name), e.push(n));
    });
    let o = f.ZP.getVisibleGame(),
        l = null != o && null != o.name && i.has(o.name),
        c = null != o && o.isLauncher,
        u = null != b.Z.getCurrentUserActiveStream(),
        d = l || (c && !u);
    if (null != o && null != o.name && !d) {
        var E, I, S;
        e.push({
            type: v.IIU.PLAYING,
            name: o.name,
            application_id: null != (I = o.id) ? I : null == (E = O.Z.getGameByName(o.name)) ? void 0 : E.id,
            metadata: { distributor: null != (S = o.distributor) ? S : void 0 },
            timestamps: { start: o.start }
        });
    }
    let A = m.Z.getActivity();
    null != A && e.push(T({ type: v.IIU.LISTENING }, A));
    let R = p.Z.getCurrentHangStatus();
    if (null != R) {
        let t = p.Z.getCustomHangStatus();
        e.push({
            type: v.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: R,
            details: null == t ? void 0 : t.status,
            emoji: null == t ? void 0 : t.emoji
        });
    }
    a()(N, e) || (N = e);
}
function P() {
    ((C = {}), R());
}
function w(e) {
    let { socketId: t, pid: n, activity: r } = e;
    if (a()(C[t], [n, r])) return !1;
    (null != r ? (C[t] = [n, r]) : delete C[t], R());
}
function D(e) {
    let { socketId: t } = e;
    (delete C[t], R());
}
function L(e) {
    let { localActivities: t } = e;
    ((C = T({}, t)), R());
}
function x() {
    let e = {},
        t = !1;
    for (let [r, [i, a]] of Object.entries(C)) {
        var n;
        let o = null != (n = a.flags) ? n : 0,
            s = (0, d.Ix)(o);
        s !== o ? ((e[r] = [i, A(T({}, a), { flags: s })]), (t = !0)) : (e[r] = [i, a]);
    }
    return t ? ((C = e), 'APPLICATION_ACTIVITIES_CHANGED') : 'NO_CHANGES';
}
function k() {
    (x(), R());
}
class M extends (r = l.ZP.Store) {
    initialize() {
        (this.waitFor(f.ZP, u.ZP, y.Z, b.Z, m.Z, E.Z, O.Z, p.Z), this.syncWith([h.Z, p.Z], () => R()));
    }
    getActivities() {
        return N;
    }
    getPrimaryActivity() {
        return N[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === v.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return N.find(e);
    }
    getApplicationActivities() {
        return C;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(C)) if (t === e) return n;
        return null;
    }
}
I(M, 'displayName', 'LocalActivityStore');
let j = new M(c.Z, {
    OVERLAY_INITIALIZE: L,
    START_SESSION: P,
    LOCAL_ACTIVITY_UPDATE: w,
    RPC_APP_DISCONNECTED: D,
    RUNNING_GAMES_CHANGE: R,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: R,
    SPOTIFY_PLAYER_STATE: R,
    SPOTIFY_PLAYER_PLAY: R,
    STREAMING_UPDATE: R,
    USER_CONNECTIONS_UPDATE: R,
    STREAM_START: R,
    STREAM_STOP: R,
    USER_SETTINGS_PROTO_UPDATE: k,
    EMBEDDED_ACTIVITY_CLOSE: R,
    UPDATE_HANG_STATUS: R
});
