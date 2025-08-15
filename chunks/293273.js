n.d(t, { Z: () => V }), n(539854), n(388685), n(997841);
var r,
    i = n(348327),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(317381),
    d = n(212517),
    f = n(812206),
    _ = n(676035),
    p = n(594190),
    h = n(106301),
    m = n(406066),
    g = n(674691),
    E = n(509003),
    b = n(768419),
    y = n(695346),
    O = n(581883),
    v = n(199902),
    I = n(272053),
    T = n(77498),
    S = n(797258),
    A = n(981631);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = [],
    D = {};
function L() {
    let e = [],
        t = y.Ok.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, _.I)(t));
    let n = m.Z.getActivities();
    e.push(...n);
    let r = I.Z.getStream();
    null != r && e.push(C({ type: A.IIU.STREAMING }, r));
    let i = new Set();
    s().forEach(D, (t) => {
        let [, n] = t;
        null != n.application_id && (i.add(n.name), e.push(n));
    });
    let o = p.ZP.getVisibleGame(),
        l = null != o && null != o.name && (i.has(o.name) || (0, g.G)(o, [...e, ...S.Z.getRemoteActivities()])),
        c = null != o && o.isLauncher,
        u = null != v.Z.getCurrentUserActiveStream(),
        d = l || (c && !u);
    if (null != o && null != o.name && !d) {
        var f, O, N;
        e.push(
            C(
                {
                    type: A.IIU.PLAYING,
                    name: o.name,
                    application_id: null != (O = o.id) ? O : null == (f = T.Z.getGameByName(o.name)) ? void 0 : f.id,
                    metadata: { distributor: null != (N = o.distributor) ? N : void 0 },
                    timestamps: { start: o.start },
                },
                (0, E.LK)(o),
            ),
        );
    }
    let R = b.Z.getActivity();
    null != R && e.push(C({ type: A.IIU.LISTENING }, R));
    let P = h.Z.getCurrentHangStatus();
    if (null != P) {
        let t = h.Z.getCustomHangStatus();
        e.push({
            type: A.IIU.HANG_STATUS,
            name: "Hang Status",
            state: P,
            details: null == t ? void 0 : t.status,
            emoji: null == t ? void 0 : t.emoji,
        });
    }
    a()(w, e) || (w = e);
}
function x() {
    (D = {}), L();
}
function M(e) {
    let { socketId: t, pid: n, activity: r } = e;
    if (a()(D[t], [n, r])) return !1;
    null != r ? (D[t] = [n, r]) : delete D[t], L();
}
function k(e) {
    let { socketId: t } = e;
    delete D[t], L();
}
function j(e) {
    let { localActivities: t } = e;
    (D = C({}, t)), L();
}
function U() {
    let e = {},
        t = !1;
    for (let [r, [i, a]] of Object.entries(D)) {
        var n;
        let o = null != (n = a.flags) ? n : 0,
            s = (0, d.Ix)(o);
        s !== o ? ((e[r] = [i, P(C({}, a), { flags: s })]), (t = !0)) : (e[r] = [i, a]);
    }
    return t ? ((D = e), "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES";
}
function G() {
    U(), L();
}
class B extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, u.ZP, I.Z, v.Z, b.Z, O.Z, T.Z, h.Z, S.Z, f.Z), this.syncWith([m.Z, h.Z], () => L());
    }
    getActivities() {
        return w;
    }
    getPrimaryActivity() {
        return w[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === A.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return w.find(e);
    }
    getApplicationActivities() {
        return D;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(D)) if (t === e) return n;
        return null;
    }
}
N(B, "displayName", "LocalActivityStore");
let V = new B(c.Z, {
    ROBLOX_SUBGAME_UPDATE: L,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: L,
    OVERLAY_INITIALIZE: j,
    START_SESSION: x,
    LOCAL_ACTIVITY_UPDATE: M,
    RPC_APP_DISCONNECTED: k,
    RUNNING_GAMES_CHANGE: L,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: L,
    SPOTIFY_PLAYER_STATE: L,
    SPOTIFY_PLAYER_PLAY: L,
    STREAMING_UPDATE: L,
    USER_CONNECTIONS_UPDATE: L,
    STREAM_START: L,
    STREAM_STOP: L,
    USER_SETTINGS_PROTO_UPDATE: G,
    EMBEDDED_ACTIVITY_CLOSE: L,
    UPDATE_HANG_STATUS: L,
    RUNNING_GAME_TOGGLE_DETECTION: L,
});
