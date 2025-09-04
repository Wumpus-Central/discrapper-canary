n.d(t, { Z: () => F }), n(539854), n(388685), n(997841);
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
    v = n(630388),
    I = n(199902),
    S = n(272053),
    T = n(77498),
    A = n(797258),
    C = n(981631);
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
function R(e) {
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
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = [],
    x = {};
function L() {
    let e = [],
        t = y.Ok.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, _.I)(t));
    let n = m.Z.getActivities();
    e.push(...n);
    let r = S.Z.getStream();
    null != r && e.push(R({ type: C.IIU.STREAMING }, r));
    let i = new Set();
    s().forEach(x, (t) => {
        let [, n] = t;
        null != n.application_id && (i.add(n.name), e.push(n));
    });
    let o = p.ZP.getVisibleGame(),
        l = null != o && null != o.name && (i.has(o.name) || (0, g.G)(o, [...e, ...A.Z.getRemoteActivities()])),
        c = null != o && o.isLauncher,
        u = null != I.Z.getCurrentUserActiveStream(),
        d = l || (c && !u);
    if (null != o && null != o.name && !d) {
        var f, O;
        let t = T.Z.getGameByName(o.name);
        e.push(
            R(
                {
                    type: C.IIU.PLAYING,
                    name: o.name,
                    application_id: null != (f = o.id) ? f : null == t ? void 0 : t.id,
                    metadata: { distributor: null != (O = o.distributor) ? O : void 0 },
                    timestamps: { start: o.start },
                },
                (0, E.LK)(o),
            ),
        );
    }
    let v = b.Z.getActivity();
    null != v && e.push(R({ type: C.IIU.LISTENING }, v));
    let N = h.Z.getCurrentHangStatus();
    if (null != N) {
        let t = h.Z.getCustomHangStatus();
        e.push({
            type: C.IIU.HANG_STATUS,
            name: "Hang Status",
            state: N,
            details: null == t ? void 0 : t.status,
            emoji: null == t ? void 0 : t.emoji,
        });
    }
    a()(D, e) || (D = e);
}
function j() {
    (x = {}), L();
}
function M(e) {
    let { socketId: t, pid: n, activity: r, partyPrivacy: i } = e;
    if (a()(x[t], [n, r, i])) return !1;
    null != r ? (x[t] = [n, r, i]) : delete x[t], L();
}
function k(e) {
    let { socketId: t } = e;
    delete x[t], L();
}
function U(e) {
    let { localActivities: t } = e;
    (x = R({}, t)), L();
}
function G() {
    let e = {},
        t = !1;
    for (let [i, [a, o, s]] of Object.entries(x)) {
        var n, r;
        let l = null != (n = o.flags) ? n : 0,
            c = (0, d.S)(
                o,
                (0, v.yE)(null != (r = null == o ? void 0 : o.flags) ? r : 0, C.xjy.INSTANCE),
                o.platform === C.M7m.EMBEDDED,
                (0, d.D)(o),
                s,
            );
        c !== l ? ((e[i] = [a, w(R({}, o), { flags: c }), s]), (t = !0)) : (e[i] = [a, o, s]);
    }
    return t ? ((x = e), "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES";
}
function B() {
    G(), L();
}
class Z extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, u.ZP, S.Z, I.Z, b.Z, O.Z, T.Z, h.Z, A.Z, f.Z), this.syncWith([m.Z, h.Z], () => L());
    }
    getActivities() {
        return D;
    }
    getPrimaryActivity() {
        return D[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === C.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return D.find(e);
    }
    getApplicationActivities() {
        return x;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(x)) if (t === e) return n;
        return null;
    }
}
N(Z, "displayName", "LocalActivityStore");
let F = new Z(c.Z, {
    ROBLOX_SUBGAME_UPDATE: L,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: L,
    OVERLAY_INITIALIZE: U,
    START_SESSION: j,
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
    USER_SETTINGS_PROTO_UPDATE: B,
    EMBEDDED_ACTIVITY_CLOSE: L,
    UPDATE_HANG_STATUS: L,
    RUNNING_GAME_TOGGLE_DETECTION: L,
});
