(n.d(t, { Z: () => U }), n(539854), n(388685), n(997841));
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
    p = n(106301),
    h = n(406066),
    m = n(509003),
    g = n(768419),
    E = n(695346),
    b = n(581883),
    y = n(199902),
    O = n(272053),
    v = n(77498),
    I = n(981631);
function T(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
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
    w = {};
function R() {
    let e = [],
        t = E.Ok.getSetting();
    null != t && ('0' === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, f.I)(t));
    let n = h.Z.getActivities();
    e.push(...n);
    let r = O.Z.getStream();
    null != r && e.push(S({ type: I.IIU.STREAMING }, r));
    let i = new Set();
    s().forEach(w, (t) => {
        let [, n] = t;
        null != n.application_id && (i.add(n.name), e.push(n));
    });
    let o = _.ZP.getVisibleGame(),
        l = null != o && null != o.name && i.has(o.name),
        c = null != o && o.isLauncher,
        u = null != y.Z.getCurrentUserActiveStream(),
        d = l || (c && !u);
    if (null != o && null != o.name && !d) {
        var b, T, A;
        e.push(
            S(
                {
                    type: I.IIU.PLAYING,
                    name: o.name,
                    application_id: null != (T = o.id) ? T : null == (b = v.Z.getGameByName(o.name)) ? void 0 : b.id,
                    metadata: { distributor: null != (A = o.distributor) ? A : void 0 },
                    timestamps: { start: o.start }
                },
                (0, m.LK)(o)
            )
        );
    }
    let N = g.Z.getActivity();
    null != N && e.push(S({ type: I.IIU.LISTENING }, N));
    let R = p.Z.getCurrentHangStatus();
    if (null != R) {
        let t = p.Z.getCustomHangStatus();
        e.push({
            type: I.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: R,
            details: null == t ? void 0 : t.status,
            emoji: null == t ? void 0 : t.emoji
        });
    }
    a()(C, e) || (C = e);
}
function P() {
    ((w = {}), R());
}
function D(e) {
    let { socketId: t, pid: n, activity: r } = e;
    if (a()(w[t], [n, r])) return !1;
    (null != r ? (w[t] = [n, r]) : delete w[t], R());
}
function L(e) {
    let { socketId: t } = e;
    (delete w[t], R());
}
function x(e) {
    let { localActivities: t } = e;
    ((w = S({}, t)), R());
}
function k() {
    let e = {},
        t = !1;
    for (let [r, [i, a]] of Object.entries(w)) {
        var n;
        let o = null != (n = a.flags) ? n : 0,
            s = (0, d.Ix)(o);
        s !== o ? ((e[r] = [i, N(S({}, a), { flags: s })]), (t = !0)) : (e[r] = [i, a]);
    }
    return t ? ((w = e), 'APPLICATION_ACTIVITIES_CHANGED') : 'NO_CHANGES';
}
function j() {
    (k(), R());
}
class M extends (r = l.ZP.Store) {
    initialize() {
        (this.waitFor(_.ZP, u.ZP, O.Z, y.Z, g.Z, b.Z, v.Z, p.Z), this.syncWith([h.Z, p.Z], () => R()));
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
        return w;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(w)) if (t === e) return n;
        return null;
    }
}
T(M, 'displayName', 'LocalActivityStore');
let U = new M(c.Z, {
    ROBLOX_SUBGAME_UPDATE: R,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: R,
    OVERLAY_INITIALIZE: x,
    START_SESSION: P,
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
    UPDATE_HANG_STATUS: R,
    RUNNING_GAME_TOGGLE_DETECTION: R
});
