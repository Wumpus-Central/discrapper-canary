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
    _ = n(812206),
    p = n(676035),
    h = n(594190),
    m = n(574176),
    g = n(106301),
    E = n(406066),
    b = n(674691),
    y = n(509003),
    O = n(768419),
    v = n(695346),
    I = n(581883),
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
function L(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = [],
    k = {};
function j() {
    var e, t;
    let n = [],
        r = v.Ok.getSetting();
    null != r &&
        ("0" === r.expiresAtMs || new Date(Number(r.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        n.push((0, p.I)(r));
    let i = E.Z.getActivities();
    n.push(...i);
    let o = A.Z.getStream();
    null != o && n.push(w({ type: P.IIU.STREAMING }, o));
    let l = new Set();
    s().forEach(k, (e) => {
        let [, t] = e;
        null != t.application_id && (l.add(t.name), n.push(t));
    });
    let c = h.ZP.getVisibleGame(),
        u = null != c && null != c.name && (l.has(c.name) || (0, b.G)(c, [...n, ...R.Z.getRemoteActivities()])),
        d = null != c && c.isLauncher,
        f = null != T.Z.getCurrentUserActiveStream(),
        _ = u || (d && !f);
    if (null != c && null != c.name && !_) {
        let t = C.Z.getGameByName(c.name);
        n.push(
            w(
                {
                    type: P.IIU.PLAYING,
                    name: c.name,
                    application_id: null != (e = c.id) ? e : null == t ? void 0 : t.id,
                    timestamps: { start: c.start },
                },
                (0, y.LK)(c),
            ),
        );
    }
    let I = O.Z.getActivity();
    null != I && n.push(w({ type: P.IIU.LISTENING }, I));
    let D = g.Z.getCurrentHangStatus();
    if (null != D) {
        let e = g.Z.getCustomHangStatus(),
            { defaultStatusVariant: r } = (0, m.gx)({
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
    (k = {}), j();
}
function G(e) {
    let { socketId: t, pid: n, activity: r, partyPrivacy: i } = e;
    if (a()(k[t], [n, r, i])) return !1;
    null != r ? (k[t] = [n, r, i]) : delete k[t], j();
}
function B(e) {
    let { socketId: t } = e;
    delete k[t], j();
}
function Z(e) {
    let { localActivities: t } = e;
    (k = w({}, t)), j();
}
function F() {
    let e = {},
        t = !1;
    for (let [i, [a, o, s]] of Object.entries(k)) {
        var n, r;
        let c = null != (n = o.flags) ? n : 0,
            u = (0, f.S)(
                o,
                (0, l.yE)(null != (r = null == o ? void 0 : o.flags) ? r : 0, P.xjy.INSTANCE),
                o.platform === P.M7m.EMBEDDED,
                (0, f.D)(o),
                s,
            );
        u !== c ? ((e[i] = [a, x(w({}, o), { flags: u }), s]), (t = !0)) : (e[i] = [a, o, s]);
    }
    return t ? ((k = e), "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES";
}
function V() {
    F(), j();
}
class H extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, T.Z, S.Z, d.ZP, A.Z, E.Z, C.Z, g.Z, h.ZP, N.Z, R.Z, O.Z, I.Z),
            this.syncWith([E.Z, g.Z], () => j());
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
        return k;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(k)) if (t === e) return n;
        return null;
    }
}
D(H, "displayName", "LocalActivityStore");
let Y = new H(u.Z, {
    ROBLOX_SUBGAME_UPDATE: j,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: j,
    OVERLAY_INITIALIZE: Z,
    START_SESSION: U,
    LOCAL_ACTIVITY_UPDATE: G,
    RPC_APP_DISCONNECTED: B,
    RUNNING_GAMES_CHANGE: j,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: j,
    SPOTIFY_PLAYER_STATE: j,
    SPOTIFY_PLAYER_PLAY: j,
    STREAMING_UPDATE: j,
    USER_CONNECTIONS_UPDATE: j,
    STREAM_START: j,
    STREAM_STOP: j,
    USER_SETTINGS_PROTO_UPDATE: V,
    EMBEDDED_ACTIVITY_CLOSE: j,
    UPDATE_HANG_STATUS: j,
    RUNNING_GAME_TOGGLE_DETECTION: j,
});
