(n.d(t, { A: () => B }), n(321073), n(938796));
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(665260),
    o = n(17928),
    d = n(73153),
    c = n(933958),
    u = n(182892),
    _ = n(587895),
    E = n(685396),
    A = n(952818),
    h = n(765741),
    I = n(863160),
    f = n(671389);
let p = [n(732755).A, f.Ay],
    T = [];
function m() {
    let e = [];
    for (let t of p) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !r()(e, T) && ((T = e), !0);
}
class g extends o.Ay.Store {
    static displayName = "FirstPartyRichPresenceStore";
    initialize() {
        this.syncWith(p, m);
    }
    getActivities() {
        return T;
    }
}
let S = new g(d.h);
var N = n(155718),
    C = n(871633),
    O = n(655116),
    R = n(885386),
    L = n(617617),
    y = n(616356),
    D = n(734057),
    v = n(760751),
    b = n(794383),
    M = n(309010),
    P = n(528767),
    U = n(652215);
let w = [],
    G = {},
    x = null;
function k() {
    let e = [],
        t = R.G2.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, E.F)(t));
    let n = S.getActivities();
    e.push(...n);
    let i = b.A.getStream();
    null != i && e.push({ type: U.$pd.STREAMING, ...i });
    let a = new Set();
    s().forEach(G, (t) => {
        let [, n] = t;
        null != n.application_id && (a.add(n.name), e.push(n));
    });
    let l = null != y.A.getCurrentUserActiveStream(),
        o = A.Ay.getVisibleGame();
    if (l) {
        let e = y.A.getStreamerActiveStreamMetadata(),
            t = A.Ay.getVisibleRunningGames(),
            n = null;
        (e?.pid != null && (n = t.find((t) => t.pid === e.pid) ?? null),
            null == n && e?.id != null && (n = t.find((t) => t.id === e.id) ?? null),
            null != n ? (null == x && (x = n.start ?? Date.now()), (o = n)) : (x = null));
    } else x = null;
    let d = null != o ? A.Ay.getSdkResolutionForPID(o.pid) : void 0,
        c = null != d && d.type !== I.r.UNRESOLVED ? d.game.id : void 0,
        u = P.A.getRemoteActivities(),
        h =
            null != c &&
            [...e, ...u].some(
                (e) =>
                    e.application_id === c ||
                    _.A.getApplication(e.application_id ?? void 0)?.getCanonicalGameId() === c,
            ),
        f =
            null != o &&
            null != o.name &&
            (h ||
                a.has(o.name) ||
                (function (e, t) {
                    if (null === e.id || void 0 === e.id) return !1;
                    let n = _.A.getApplication(e.id);
                    return (
                        null != n &&
                        null != n.linkedGames &&
                        n.linkedGames.length > 0 &&
                        void 0 !==
                            n.linkedGames.find((e) => {
                                var n;
                                return (
                                    e.type === N.Mh.LINKED &&
                                    ((n = e.id), null != t.find((e) => e.application_id === n))
                                );
                            })
                    );
                })(o, [...e, ...u])),
        p = null != o && o.isLauncher;
    if (null != o && null != o.name && !(f || (p && !l))) {
        let t = v.A.findGame(o);
        e.push({
            type: U.$pd.PLAYING,
            name: o.name,
            application_id: o.id ?? t?.id,
            timestamps: { start: x ?? o.start },
            ...(0, C.CO)(o),
        });
    }
    let T = O.A.getActivity();
    return (null != T && e.push({ type: U.$pd.LISTENING, ...T }), !r()(w, e) && ((w = e), !0));
}
class F extends o.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        (this.waitFor(_.A, y.A, D.A, c.Ay, b.A, S, v.A, A.Ay, M.Ay, P.A, h.A, O.A, L.A), this.syncWith([S], () => k()));
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
        return this.findActivity((e) => e.type === U.$pd.CUSTOM_STATUS);
    }
    findActivity(e) {
        return w.find(e);
    }
    getApplicationActivities() {
        return G;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(G)) if (t === e) return n;
        return null;
    }
}
let B = new F(d.h, {
    ROBLOX_SUBGAME_UPDATE: k,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: k,
    OVERLAY_INITIALIZE: function (e) {
        let { localActivities: t } = e;
        ((G = { ...t }), k());
    },
    START_SESSION: function () {
        ((G = {}), k());
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        let { socketId: t, pid: n, activity: i, partyPrivacy: a } = e,
            s = null == i ? null == G[t] : r()(G[t], [n, i, a]);
        s || (null != i ? (G[t] = [n, i, a]) : delete G[t]);
        let l = k();
        return !s || l;
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { socketId: t } = e;
        (delete G[t], k());
    },
    RUNNING_GAMES_CHANGE: k,
    SOCIAL_SDK_GAMES_UPDATE: k,
    APPLICATION_FETCH_SUCCESS: k,
    APPLICATIONS_FETCH_SUCCESS: k,
    GAMES_DATABASE_UPDATE: k,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: k,
    SPOTIFY_PLAYER_STATE: k,
    SPOTIFY_PLAYER_PLAY: k,
    STREAMING_UPDATE: k,
    USER_CONNECTIONS_UPDATE: k,
    STREAM_START: k,
    STREAM_STOP: k,
    USER_SETTINGS_PROTO_UPDATE: function () {
        (!(function () {
            let e = {},
                t = !1;
            for (let [n, [i, r, a]] of Object.entries(G)) {
                let s = r.flags ?? 0,
                    o = (0, u.E)(
                        r,
                        (0, l.Lt)(r?.flags ?? 0, U.jUm.INSTANCE),
                        r.platform === U.yTV.EMBEDDED,
                        (0, u.e)(r),
                        a,
                    );
                o !== s ? ((e[n] = [i, { ...r, flags: o }, a]), (t = !0)) : (e[n] = [i, r, a]);
            }
            t && (G = e);
        })(),
            k());
    },
    EMBEDDED_ACTIVITY_CLOSE: k,
    RUNNING_GAME_TOGGLE_DETECTION: k,
});
