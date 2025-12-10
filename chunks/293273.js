n.d(t, { Z: () => Y }), n(539854), n(388685), n(997841);
var r,
    i = n(348327),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(95015),
    c = n(442837),
    u = n(570140),
    d = n(317381),
    f = n(212517),
    p = n(812206),
    _ = n(676035),
    m = n(594190),
    h = n(574176),
    g = n(106301),
    E = n(406066),
    b = n(674691),
    y = n(509003),
    O = n(768419),
    v = n(695346),
    S = n(581883),
    I = n(199902),
    T = n(592125),
    C = n(272053),
    A = n(77498),
    N = n(944486),
    P = n(797258),
    R = n(981631);
function D(e, t, n) {
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
function w(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = [],
    M = {};
function k() {
    var e, t;
    let n = [],
        r = v.Ok.getSetting();
    null != r &&
        ("0" === r.expiresAtMs || new Date(Number(r.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        n.push((0, _.I)(r));
    let i = E.Z.getActivities();
    n.push(...i);
    let o = C.Z.getStream();
    null != o && n.push(w({ type: R.IIU.STREAMING }, o));
    let l = new Set();
    s().forEach(M, (e) => {
        let [, t] = e;
        null != t.application_id && (l.add(t.name), n.push(t));
    });
    let c = m.ZP.getVisibleGame(),
        u = null != c && null != c.name && (l.has(c.name) || (0, b.G)(c, [...n, ...P.Z.getRemoteActivities()])),
        d = null != c && c.isLauncher,
        f = null != I.Z.getCurrentUserActiveStream(),
        p = u || (d && !f);
    if (null != c && null != c.name && !p) {
        let t = A.Z.getGameByName(c.name);
        n.push(
            w(
                {
                    type: R.IIU.PLAYING,
                    name: c.name,
                    application_id: null != (e = c.id) ? e : null == t ? void 0 : t.id,
                    timestamps: { start: c.start },
                },
                (0, y.LK)(c),
            ),
        );
    }
    let S = O.Z.getActivity();
    null != S && n.push(w({ type: R.IIU.LISTENING }, S));
    let D = g.Z.getCurrentHangStatus();
    if (null != D) {
        let e = g.Z.getCustomHangStatus(),
            { defaultStatusVariant: r } = (0, h.gx)({
                guildId: null == (t = T.Z.getChannel(N.Z.getVoiceChannelId())) ? void 0 : t.guild_id,
                location: "LocalActivityStore",
            });
        n.push({
            type: R.IIU.HANG_STATUS,
            name: "Hang Status",
            state: "".concat(D, ":").concat(r),
            details: null == e ? void 0 : e.status,
            emoji: null == e ? void 0 : e.emoji,
        });
    }
    a()(j, n) || (j = n);
}
function U() {
    (M = {}), k();
}
function G(e) {
    let { socketId: t, pid: n, activity: r, partyPrivacy: i } = e;
    if (a()(M[t], [n, r, i])) return !1;
    null != r ? (M[t] = [n, r, i]) : delete M[t], k();
}
function Z(e) {
    let { socketId: t } = e;
    delete M[t], k();
}
function B(e) {
    let { localActivities: t } = e;
    (M = w({}, t)), k();
}
function F() {
    let e = {},
        t = !1;
    for (let [i, [a, o, s]] of Object.entries(M)) {
        var n, r;
        let c = null != (n = o.flags) ? n : 0,
            u = (0, f.S)(
                o,
                (0, l.yE)(null != (r = null == o ? void 0 : o.flags) ? r : 0, R.xjy.INSTANCE),
                o.platform === R.M7m.EMBEDDED,
                (0, f.D)(o),
                s,
            );
        u !== c ? ((e[i] = [a, L(w({}, o), { flags: u }), s]), (t = !0)) : (e[i] = [a, o, s]);
    }
    return t ? ((M = e), "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES";
}
function V() {
    F(), k();
}
class H extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, I.Z, T.Z, d.ZP, C.Z, E.Z, A.Z, g.Z, m.ZP, N.Z, P.Z, O.Z, S.Z),
            this.syncWith([E.Z, g.Z], () => k());
    }
    getActivities() {
        return j;
    }
    getPrimaryActivity() {
        return j[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === R.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return j.find(e);
    }
    getApplicationActivities() {
        return M;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(M)) if (t === e) return n;
        return null;
    }
}
D(H, "displayName", "LocalActivityStore");
let Y = new H(u.Z, {
    ROBLOX_SUBGAME_UPDATE: k,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: k,
    OVERLAY_INITIALIZE: B,
    START_SESSION: U,
    LOCAL_ACTIVITY_UPDATE: G,
    RPC_APP_DISCONNECTED: Z,
    RUNNING_GAMES_CHANGE: k,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: k,
    SPOTIFY_PLAYER_STATE: k,
    SPOTIFY_PLAYER_PLAY: k,
    STREAMING_UPDATE: k,
    USER_CONNECTIONS_UPDATE: k,
    STREAM_START: k,
    STREAM_STOP: k,
    USER_SETTINGS_PROTO_UPDATE: V,
    EMBEDDED_ACTIVITY_CLOSE: k,
    UPDATE_HANG_STATUS: k,
    RUNNING_GAME_TOGGLE_DETECTION: k,
});
