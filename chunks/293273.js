n.d(t, { Z: () => Y }), n(539854), n(388685), n(997841);
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
    h = n(574176),
    m = n(106301),
    g = n(406066),
    E = n(674691),
    b = n(509003),
    y = n(768419),
    O = n(695346),
    v = n(581883),
    I = n(630388),
    T = n(199902),
    S = n(592125),
    A = n(272053),
    C = n(77498),
    N = n(944486),
    R = n(797258),
    P = n(981631);
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
let M = [],
    j = {};
function k() {
    var e, t;
    let n = [],
        r = O.Ok.getSetting();
    null != r &&
        ("0" === r.expiresAtMs || new Date(Number(r.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        n.push((0, _.I)(r));
    let i = g.Z.getActivities();
    n.push(...i);
    let o = A.Z.getStream();
    null != o && n.push(w({ type: P.IIU.STREAMING }, o));
    let l = new Set();
    s().forEach(j, (e) => {
        let [, t] = e;
        null != t.application_id && (l.add(t.name), n.push(t));
    });
    let c = p.ZP.getVisibleGame(),
        u = null != c && null != c.name && (l.has(c.name) || (0, E.G)(c, [...n, ...R.Z.getRemoteActivities()])),
        d = null != c && c.isLauncher,
        f = null != T.Z.getCurrentUserActiveStream(),
        v = u || (d && !f);
    if (null != c && null != c.name && !v) {
        let t = C.Z.getGameByName(c.name);
        n.push(
            w(
                {
                    type: P.IIU.PLAYING,
                    name: c.name,
                    application_id: null != (e = c.id) ? e : null == t ? void 0 : t.id,
                    timestamps: { start: c.start },
                },
                (0, b.LK)(c),
            ),
        );
    }
    let I = y.Z.getActivity();
    null != I && n.push(w({ type: P.IIU.LISTENING }, I));
    let D = m.Z.getCurrentHangStatus();
    if (null != D) {
        let e = m.Z.getCustomHangStatus(),
            { defaultStatusVariant: r } = (0, h.gx)({
                guildId: null == (t = S.Z.getChannel(N.Z.getVoiceChannelId())) ? void 0 : t.guild_id,
                location: "LocalActivityStore",
            });
        n.push({
            type: P.IIU.HANG_STATUS,
            name: "Hang Status",
            state: "".concat(D, ":").concat(r),
            details: null == e ? void 0 : e.status,
            emoji: null == e ? void 0 : e.emoji,
        });
    }
    a()(M, n) || (M = n);
}
function U() {
    (j = {}), k();
}
function G(e) {
    let { socketId: t, pid: n, activity: r, partyPrivacy: i } = e;
    if (a()(j[t], [n, r, i])) return !1;
    null != r ? (j[t] = [n, r, i]) : delete j[t], k();
}
function B(e) {
    let { socketId: t } = e;
    delete j[t], k();
}
function Z(e) {
    let { localActivities: t } = e;
    (j = w({}, t)), k();
}
function F() {
    let e = {},
        t = !1;
    for (let [i, [a, o, s]] of Object.entries(j)) {
        var n, r;
        let l = null != (n = o.flags) ? n : 0,
            c = (0, d.S)(
                o,
                (0, I.yE)(null != (r = null == o ? void 0 : o.flags) ? r : 0, P.xjy.INSTANCE),
                o.platform === P.M7m.EMBEDDED,
                (0, d.D)(o),
                s,
            );
        c !== l ? ((e[i] = [a, L(w({}, o), { flags: c }), s]), (t = !0)) : (e[i] = [a, o, s]);
    }
    return t ? ((j = e), "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES";
}
function V() {
    F(), k();
}
class H extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, T.Z, S.Z, u.ZP, A.Z, g.Z, C.Z, m.Z, p.ZP, N.Z, R.Z, y.Z, v.Z),
            this.syncWith([g.Z, m.Z], () => k());
    }
    getActivities() {
        return M;
    }
    getPrimaryActivity() {
        return M[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === P.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return M.find(e);
    }
    getApplicationActivities() {
        return j;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(j)) if (t === e) return n;
        return null;
    }
}
D(H, "displayName", "LocalActivityStore");
let Y = new H(c.Z, {
    ROBLOX_SUBGAME_UPDATE: k,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: k,
    OVERLAY_INITIALIZE: Z,
    START_SESSION: U,
    LOCAL_ACTIVITY_UPDATE: G,
    RPC_APP_DISCONNECTED: B,
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
