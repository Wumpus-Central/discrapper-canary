n.d(t, { Z: () => w }), n(653041), n(47120);
var r,
    i = n(348327),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(442837),
    c = n(570140),
    u = n(317381),
    d = n(676035),
    f = n(594190),
    p = n(406066),
    _ = n(768419),
    h = n(695346),
    m = n(581883),
    g = n(199902),
    E = n(272053),
    v = n(77498),
    b = n(981631);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
let S = [],
    I = {};
function T() {
    let e = [],
        t = h.Ok.getSetting();
    null != t && ('0' === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, d.I)(t));
    let n = p.Z.getActivities();
    e.push(...n);
    let r = E.Z.getStream();
    null != r && e.push(O({ type: b.IIU.STREAMING }, r));
    let i = new Set();
    s().forEach(I, (t) => {
        let [, n] = t;
        null != n.application_id && (i.add(n.name), e.push(n));
    });
    let a = f.ZP.getVisibleGame(),
        l = null != a && null != a.name && i.has(a.name),
        c = null != a && a.isLauncher,
        u = null != g.Z.getCurrentUserActiveStream(),
        m = l || (c && !u);
    if (null != a && null != a.name && !m) {
        var y, T;
        e.push({
            type: b.IIU.PLAYING,
            name: a.name,
            application_id: null !== (T = a.id) && void 0 !== T ? T : null === (y = v.Z.getGameByName(a.name)) || void 0 === y ? void 0 : y.id,
            timestamps: { start: a.start }
        });
    }
    let N = _.Z.getActivity();
    null != N && e.push(O({ type: b.IIU.LISTENING }, N)), o()(S, e) || (S = e);
}
function N() {
    (I = {}), T();
}
function A(e) {
    let { socketId: t, pid: n, activity: r } = e;
    if (o()(I[t], [n, r])) return !1;
    null != r ? (I[t] = [n, r]) : delete I[t], T();
}
function C(e) {
    let { socketId: t } = e;
    delete I[t], T();
}
function R(e) {
    let { localActivities: t } = e;
    (I = O({}, t)), T();
}
class P extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, u.ZP, E.Z, g.Z, _.Z, m.Z, v.Z), this.syncWith([p.Z], () => T());
    }
    getActivities() {
        return S;
    }
    getPrimaryActivity() {
        return S[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === b.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return S.find(e);
    }
    getApplicationActivities() {
        return I;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(I)) if (t === e) return n;
        return null;
    }
}
y(P, 'displayName', 'LocalActivityStore');
let w = new P(c.Z, {
    OVERLAY_INITIALIZE: R,
    START_SESSION: N,
    LOCAL_ACTIVITY_UPDATE: A,
    RPC_APP_DISCONNECTED: C,
    RUNNING_GAMES_CHANGE: T,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: T,
    SPOTIFY_PLAYER_STATE: T,
    SPOTIFY_PLAYER_PLAY: T,
    STREAMING_UPDATE: T,
    USER_CONNECTIONS_UPDATE: T,
    STREAM_START: T,
    STREAM_STOP: T,
    USER_SETTINGS_PROTO_UPDATE: T,
    EMBEDDED_ACTIVITY_CLOSE: T
});
