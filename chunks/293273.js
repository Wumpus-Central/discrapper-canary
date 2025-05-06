let r;
n.d(t, { Z: () => G }), n(539854), n(388685), n(997841);
var i,
    o = n(348327),
    a = n.n(o),
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
    v = n(19780),
    I = n(981631);
function S(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = [],
    P = {};
function R() {
    let e = [],
        t = g.Ok.getSetting();
    null != t && ('0' === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, _.I)(t));
    let n = h.Z.getActivities();
    e.push(...n);
    let r = y.Z.getStream();
    null != r && e.push(T({ type: I.IIU.STREAMING }, r));
    let i = new Set();
    l().forEach(P, (t) => {
        let [, n] = t;
        null != n.application_id && (i.add(n.name), e.push(n));
    });
    let o = p.ZP.getVisibleGame(),
        s = null != o && null != o.name && i.has(o.name),
        c = null != o && o.isLauncher,
        u = null != b.Z.getCurrentUserActiveStream(),
        d = s || (c && !u);
    if (null != o && null != o.name && !d) {
        var f, E;
        e.push({
            type: I.IIU.PLAYING,
            name: o.name,
            application_id: null != (E = o.id) ? E : null == (f = O.Z.getGameByName(o.name)) ? void 0 : f.id,
            timestamps: { start: o.start }
        });
    }
    let v = m.Z.getActivity();
    null != v && e.push(T({ type: I.IIU.LISTENING }, v)), a()(C, e) || (C = e);
}
function w() {
    (P = {}), R();
}
function D(e) {
    let { socketId: t, pid: n, activity: r } = e;
    if (a()(P[t], [n, r])) return !1;
    null != r ? (P[t] = [n, r]) : delete P[t], R();
}
function L(e) {
    let { socketId: t } = e;
    delete P[t], R();
}
function x(e) {
    let { localActivities: t } = e;
    (P = T({}, t)), R();
}
function k(e) {
    let t = {},
        n = !1;
    for (let [o, [a, s]] of Object.entries(P)) {
        var r, i;
        let l = null != (i = s.flags) ? i : 0,
            c = (0, f.Ix)(l);
        'string' == typeof (null == (r = s.metadata) ? void 0 : r.embedded_activity_instance_id) && (c = (0, f.Pu)(c, e, s.metadata.embedded_activity_instance_id)), c !== l ? ((t[o] = [a, N(T({}, s), { flags: c })]), (n = !0)) : (t[o] = [a, s]);
    }
    return n ? ((P = t), 'APPLICATION_ACTIVITIES_CHANGED') : 'NO_CHANGES';
}
function M(e) {
    let { state: t, channelId: n } = e,
        i = 'NO_CHANGES';
    t === I.hes.RTC_CONNECTED ? n !== r && ((r = n), (i = k(n))) : t === I.hes.DISCONNECTED && n === r && ((r = void 0), (i = k(void 0))), 'APPLICATION_ACTIVITIES_CHANGED' === i && R();
}
function j() {
    let e = v.Z.getChannelId();
    k(null != e ? e : void 0), R();
}
class U extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, d.ZP, y.Z, b.Z, m.Z, E.Z, O.Z), this.syncWith([h.Z], () => R());
    }
    getActivities() {
        return C;
    }
    getPrimaryActivity() {
        return C[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === I.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return C.find(e);
    }
    getApplicationActivities() {
        return P;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(P)) if (t === e) return n;
        return null;
    }
}
S(U, 'displayName', 'LocalActivityStore');
let G = new U(u.Z, {
    OVERLAY_INITIALIZE: x,
    START_SESSION: w,
    LOCAL_ACTIVITY_UPDATE: D,
    RPC_APP_DISCONNECTED: L,
    RUNNING_GAMES_CHANGE: R,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: R,
    SPOTIFY_PLAYER_STATE: R,
    SPOTIFY_PLAYER_PLAY: R,
    STREAMING_UPDATE: R,
    USER_CONNECTIONS_UPDATE: R,
    STREAM_START: R,
    STREAM_STOP: R,
    USER_SETTINGS_PROTO_UPDATE: j,
    EMBEDDED_ACTIVITY_CLOSE: R,
    RTC_CONNECTION_STATE: M
});
