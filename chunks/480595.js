(n.d(t, { A: () => F }), n(321073), n(938796));
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(665260),
    o = n(17928),
    d = n(228366),
    c = n(933958),
    u = n(182892),
    _ = n(587895),
    E = n(685396),
    A = n(952818),
    h = n(765741),
    I = n(863160);
let f = [n(732755).A],
    p = [];
function T() {
    let e = [];
    for (let t of f) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !r()(e, p) && ((p = e), !0);
}
class m extends o.Ay.Store {
    static displayName = "FirstPartyRichPresenceStore";
    initialize() {
        this.syncWith(f, T);
    }
    getActivities() {
        return p;
    }
}
let g = new m(d.h);
var S = n(155718),
    N = n(871633),
    C = n(655116),
    O = n(885386),
    R = n(617617),
    L = n(616356),
    y = n(734057),
    D = n(760751),
    v = n(794383),
    b = n(309010),
    M = n(528767),
    P = n(652215);
let U = [],
    w = {},
    G = null;
function x() {
    let e = [],
        t = O.G2.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, E.F)(t));
    let n = g.getActivities();
    e.push(...n);
    let i = v.A.getStream();
    null != i && e.push({ type: P.$pd.STREAMING, ...i });
    let a = new Set();
    s().forEach(w, (t) => {
        let [, n] = t;
        null != n.application_id && (a.add(n.name), e.push(n));
    });
    let l = null != L.A.getCurrentUserActiveStream(),
        o = A.Ay.getVisibleGame();
    if (l) {
        let e = L.A.getStreamerActiveStreamMetadata(),
            t = A.Ay.getVisibleRunningGames(),
            n = null;
        (e?.pid != null && (n = t.find((t) => t.pid === e.pid) ?? null),
            null == n && e?.id != null && (n = t.find((t) => t.id === e.id) ?? null),
            null != n ? (null == G && (G = n.start ?? Date.now()), (o = n)) : (G = null));
    } else G = null;
    let d = null != o ? A.Ay.getSdkResolutionForPID(o.pid) : void 0,
        c = null != d && d.type !== I.r.UNRESOLVED ? d.game.id : void 0,
        u = M.A.getRemoteActivities(),
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
                                    e.type === S.Mh.LINKED &&
                                    ((n = e.id), null != t.find((e) => e.application_id === n))
                                );
                            })
                    );
                })(o, [...e, ...u])),
        p = null != o && o.isLauncher;
    if (null != o && null != o.name && !(f || (p && !l))) {
        let t = D.A.findGame(o);
        e.push({
            type: P.$pd.PLAYING,
            name: o.name,
            application_id: o.id ?? t?.id,
            timestamps: { start: G ?? o.start },
            ...(0, N.CO)(o),
        });
    }
    let T = C.A.getActivity();
    return (null != T && e.push({ type: P.$pd.LISTENING, ...T }), !r()(U, e) && ((U = e), !0));
}
class k extends o.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        (this.waitFor(_.A, L.A, y.A, c.Ay, v.A, g, D.A, A.Ay, b.Ay, M.A, h.A, C.A, R.A), this.syncWith([g], () => x()));
    }
    getActivities() {
        return U;
    }
    getPrimaryActivity() {
        return U[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === P.$pd.CUSTOM_STATUS);
    }
    findActivity(e) {
        return U.find(e);
    }
    getApplicationActivities() {
        return w;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(w)) if (t === e) return n;
        return null;
    }
}
let F = new k(d.h, {
    ROBLOX_SUBGAME_UPDATE: x,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: x,
    OVERLAY_INITIALIZE: function (e) {
        let { localActivities: t } = e;
        ((w = { ...t }), x());
    },
    START_SESSION: function () {
        ((w = {}), x());
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        let { socketId: t, pid: n, activity: i, partyPrivacy: a } = e,
            s = null == i ? null == w[t] : r()(w[t], [n, i, a]);
        s || (null != i ? (w[t] = [n, i, a]) : delete w[t]);
        let l = x();
        return !s || l;
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { socketId: t } = e;
        (delete w[t], x());
    },
    RUNNING_GAMES_CHANGE: x,
    SOCIAL_SDK_GAMES_UPDATE: x,
    APPLICATION_FETCH_SUCCESS: x,
    APPLICATIONS_FETCH_SUCCESS: x,
    GAMES_DATABASE_UPDATE: x,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: x,
    SPOTIFY_PLAYER_STATE: x,
    SPOTIFY_PLAYER_PLAY: x,
    STREAMING_UPDATE: x,
    USER_CONNECTIONS_UPDATE: x,
    STREAM_START: x,
    STREAM_STOP: x,
    USER_SETTINGS_PROTO_UPDATE: function () {
        (!(function () {
            let e = {},
                t = !1;
            for (let [n, [i, r, a]] of Object.entries(w)) {
                let s = r.flags ?? 0,
                    o = (0, u.E)(
                        r,
                        (0, l.Lt)(r?.flags ?? 0, P.jUm.INSTANCE),
                        r.platform === P.yTV.EMBEDDED,
                        (0, u.e)(r),
                        a,
                    );
                o !== s ? ((e[n] = [i, { ...r, flags: o }, a]), (t = !0)) : (e[n] = [i, r, a]);
            }
            t && (w = e);
        })(),
            x());
    },
    EMBEDDED_ACTIVITY_CLOSE: x,
    RUNNING_GAME_TOGGLE_DETECTION: x,
});
