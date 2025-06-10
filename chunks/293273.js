n.d(t, { Z: () => k }), n(539854), n(388685), n(997841);
var r,
    i = n(348327),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(317381),
    d = n(212517),
    f = n(676035),
    _ = n(594190),
    p = n(406066),
    h = n(768419),
    m = n(695346),
    g = n(581883),
    E = n(199902),
    b = n(272053),
    y = n(77498),
    O = n(981631);
function v(e, t, n) {
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = [],
    N = {};
function C() {
    let e = [],
        t = m.Ok.getSetting();
    null != t && ('0' === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, f.I)(t));
    let n = p.Z.getActivities();
    e.push(...n);
    let r = b.Z.getStream();
    null != r && e.push(I({ type: O.IIU.STREAMING }, r));
    let i = new Set();
    s().forEach(N, (t) => {
        let [, n] = t;
        null != n.application_id && (i.add(n.name), e.push(n));
    });
    let o = _.ZP.getVisibleGame(),
        l = null != o && null != o.name && i.has(o.name),
        c = null != o && o.isLauncher,
        u = null != E.Z.getCurrentUserActiveStream(),
        d = l || (c && !u);
    if (null != o && null != o.name && !d) {
        var g, v;
        e.push({
            type: O.IIU.PLAYING,
            name: o.name,
            application_id: null != (v = o.id) ? v : null == (g = y.Z.getGameByName(o.name)) ? void 0 : g.id,
            timestamps: { start: o.start }
        });
    }
    let T = h.Z.getActivity();
    null != T && e.push(I({ type: O.IIU.LISTENING }, T)), a()(A, e) || (A = e);
}
function R() {
    (N = {}), C();
}
function P(e) {
    let { socketId: t, pid: n, activity: r } = e;
    if (a()(N[t], [n, r])) return !1;
    null != r ? (N[t] = [n, r]) : delete N[t], C();
}
function w(e) {
    let { socketId: t } = e;
    delete N[t], C();
}
function D(e) {
    let { localActivities: t } = e;
    (N = I({}, t)), C();
}
function L() {
    let e = {},
        t = !1;
    for (let [r, [i, a]] of Object.entries(N)) {
        var n;
        let o = null != (n = a.flags) ? n : 0,
            s = (0, d.Ix)(o);
        s !== o ? ((e[r] = [i, S(I({}, a), { flags: s })]), (t = !0)) : (e[r] = [i, a]);
    }
    return t ? ((N = e), 'APPLICATION_ACTIVITIES_CHANGED') : 'NO_CHANGES';
}
function x() {
    L(), C();
}
class M extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, u.ZP, b.Z, E.Z, h.Z, g.Z, y.Z), this.syncWith([p.Z], () => C());
    }
    getActivities() {
        return A;
    }
    getPrimaryActivity() {
        return A[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === O.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return A.find(e);
    }
    getApplicationActivities() {
        return N;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(N)) if (t === e) return n;
        return null;
    }
}
v(M, 'displayName', 'LocalActivityStore');
let k = new M(c.Z, {
    OVERLAY_INITIALIZE: D,
    START_SESSION: R,
    LOCAL_ACTIVITY_UPDATE: P,
    RPC_APP_DISCONNECTED: w,
    RUNNING_GAMES_CHANGE: C,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: C,
    SPOTIFY_PLAYER_STATE: C,
    SPOTIFY_PLAYER_PLAY: C,
    STREAMING_UPDATE: C,
    USER_CONNECTIONS_UPDATE: C,
    STREAM_START: C,
    STREAM_STOP: C,
    USER_SETTINGS_PROTO_UPDATE: x,
    EMBEDDED_ACTIVITY_CLOSE: C
});
