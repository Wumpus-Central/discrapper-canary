let r;
n.d(t, { Z: () => j }), n(539854), n(388685), n(997841);
var i,
    a = n(348327),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(570140),
    d = n(317381),
    f = n(212517),
    _ = n(676035),
    p = n(594190),
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
function S(e) {
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
                I(e, t, n[t]);
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
function A(e, t) {
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
let N = [],
    C = {};
function R() {
    let e = [],
        t = g.Ok.getSetting();
    null != t && ('0' === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, _.I)(t));
    let n = h.Z.getActivities();
    e.push(...n);
    let r = y.Z.getStream();
    null != r && e.push(S({ type: v.IIU.STREAMING }, r));
    let i = new Set();
    l().forEach(C, (t) => {
        let [, n] = t;
        null != n.application_id && (i.add(n.name), e.push(n));
    });
    let a = p.ZP.getVisibleGame(),
        s = null != a && null != a.name && i.has(a.name),
        c = null != a && a.isLauncher,
        u = null != b.Z.getCurrentUserActiveStream(),
        d = s || (c && !u);
    if (null != a && null != a.name && !d) {
        var f, E;
        e.push({
            type: v.IIU.PLAYING,
            name: a.name,
            application_id: null != (E = a.id) ? E : null == (f = O.Z.getGameByName(a.name)) ? void 0 : f.id,
            timestamps: { start: a.start }
        });
    }
    let I = m.Z.getActivity();
    null != I && e.push(S({ type: v.IIU.LISTENING }, I)), o()(N, e) || (N = e);
}
function P() {
    (C = {}), R();
}
function w(e) {
    let { socketId: t, pid: n, activity: r } = e;
    if (o()(C[t], [n, r])) return !1;
    null != r ? (C[t] = [n, r]) : delete C[t], R();
}
function D(e) {
    let { socketId: t } = e;
    delete C[t], R();
}
function L(e) {
    let { localActivities: t } = e;
    (C = S({}, t)), R();
}
function x(e) {
    let t = {},
        n = !1;
    for (let [a, [o, s]] of Object.entries(C)) {
        var r, i;
        let l = null != (i = s.flags) ? i : 0,
            c = (0, f.Ix)(l);
        'string' == typeof (null == (r = s.metadata) ? void 0 : r.embedded_activity_instance_id) && (c = (0, f.Pu)(c, e, s.metadata.embedded_activity_instance_id)), c !== l ? ((t[a] = [o, A(S({}, s), { flags: c })]), (n = !0)) : (t[a] = [o, s]);
    }
    n && ((C = t), R());
}
function M(e) {
    let { state: t, channelId: n } = e;
    t === v.hes.RTC_CONNECTED ? n !== r && ((r = n), x(n)) : t === v.hes.DISCONNECTED && n === r && ((r = void 0), x(void 0));
}
class k extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, d.ZP, y.Z, b.Z, m.Z, E.Z, O.Z), this.syncWith([h.Z], () => R());
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
I(k, 'displayName', 'LocalActivityStore');
let j = new k(u.Z, {
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
    USER_SETTINGS_PROTO_UPDATE: R,
    EMBEDDED_ACTIVITY_CLOSE: R,
    RTC_CONNECTION_STATE: M
});
