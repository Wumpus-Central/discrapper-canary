(n.d(t, { A: () => V }), n(321073), n(938796));
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
    f = n(732755),
    p = n(142346);
let T = [f.A, p.Ay],
    m = [];
function g() {
    let e = [];
    for (let t of T) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !r()(e, m) && ((m = e), !0);
}
class S extends o.Ay.Store {
    static displayName = "FirstPartyRichPresenceStore";
    initialize() {
        this.syncWith(T, g);
    }
    getActivities() {
        return m;
    }
}
let N = new S(d.h);
var C = n(155718),
    O = n(871633),
    R = n(655116),
    L = n(885386),
    y = n(617617),
    D = n(616356),
    v = n(734057),
    b = n(760751),
    M = n(794383),
    P = n(309010),
    U = n(528767),
    w = n(652215);
let G = [],
    x = {},
    k = null;
function F() {
    let e = [],
        t = L.G2.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, E.F)(t));
    let n = N.getActivities();
    e.push(...n);
    let i = M.A.getStream();
    null != i && e.push({ type: w.$pd.STREAMING, ...i });
    let a = new Set();
    s().forEach(x, (t) => {
        let [, n] = t;
        null != n.application_id && (a.add(n.name), e.push(n));
    });
    let l = null != D.A.getCurrentUserActiveStream(),
        o = A.Ay.getVisibleGame();
    if (l) {
        let e = D.A.getStreamerActiveStreamMetadata(),
            t = A.Ay.getVisibleRunningGames(),
            n = null;
        (e?.pid != null && (n = t.find((t) => t.pid === e.pid) ?? null),
            null == n && e?.id != null && (n = t.find((t) => t.id === e.id) ?? null),
            null != n ? (null == k && (k = n.start ?? Date.now()), (o = n)) : (k = null));
    } else k = null;
    let d = null != o ? A.Ay.getSdkResolutionForPID(o.pid) : void 0,
        c = null != d && d.type !== I.r.UNRESOLVED ? d.game.id : void 0,
        u = U.A.getRemoteActivities(),
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
                                    e.type === C.Mh.LINKED &&
                                    ((n = e.id), null != t.find((e) => e.application_id === n))
                                );
                            })
                    );
                })(o, [...e, ...u])),
        p = null != o && o.isLauncher;
    if (null != o && null != o.name && !(f || (p && !l))) {
        let t = b.A.findGame(o);
        e.push({
            type: w.$pd.PLAYING,
            name: o.name,
            application_id: o.id ?? t?.id,
            timestamps: { start: k ?? o.start },
            ...(0, O.CO)(o),
        });
    }
    let T = R.A.getActivity();
    return (null != T && e.push({ type: w.$pd.LISTENING, ...T }), !r()(G, e) && ((G = e), !0));
}
class B extends o.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        (this.waitFor(_.A, D.A, v.A, c.Ay, M.A, N, b.A, A.Ay, P.Ay, U.A, h.A, R.A, y.A), this.syncWith([N], () => F()));
    }
    getActivities() {
        return G;
    }
    getPrimaryActivity() {
        return G[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === w.$pd.CUSTOM_STATUS);
    }
    findActivity(e) {
        return G.find(e);
    }
    getApplicationActivities() {
        return x;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(x)) if (t === e) return n;
        return null;
    }
}
let V = new B(d.h, {
    ROBLOX_SUBGAME_UPDATE: F,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: F,
    OVERLAY_INITIALIZE: function (e) {
        let { localActivities: t } = e;
        ((x = { ...t }), F());
    },
    START_SESSION: function () {
        ((x = {}), F());
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        let { socketId: t, pid: n, activity: i, partyPrivacy: a } = e,
            s = null == i ? null == x[t] : r()(x[t], [n, i, a]);
        s || (null != i ? (x[t] = [n, i, a]) : delete x[t]);
        let l = F();
        return !s || l;
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { socketId: t } = e;
        (delete x[t], F());
    },
    RUNNING_GAMES_CHANGE: F,
    SOCIAL_SDK_GAMES_UPDATE: F,
    APPLICATION_FETCH_SUCCESS: F,
    APPLICATIONS_FETCH_SUCCESS: F,
    GAMES_DATABASE_UPDATE: F,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: F,
    SPOTIFY_PLAYER_STATE: F,
    SPOTIFY_PLAYER_PLAY: F,
    STREAMING_UPDATE: F,
    USER_CONNECTIONS_UPDATE: F,
    STREAM_START: F,
    STREAM_STOP: F,
    USER_SETTINGS_PROTO_UPDATE: function () {
        (!(function () {
            let e = {},
                t = !1;
            for (let [n, [i, r, a]] of Object.entries(x)) {
                let s = r.flags ?? 0,
                    o = (0, u.E)(
                        r,
                        (0, l.Lt)(r?.flags ?? 0, w.jUm.INSTANCE),
                        r.platform === w.yTV.EMBEDDED,
                        (0, u.e)(r),
                        a,
                    );
                o !== s ? ((e[n] = [i, { ...r, flags: o }, a]), (t = !0)) : (e[n] = [i, r, a]);
            }
            t && (x = e);
        })(),
            F());
    },
    EMBEDDED_ACTIVITY_CLOSE: F,
    RUNNING_GAME_TOGGLE_DETECTION: F,
});
