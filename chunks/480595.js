(n.d(t, { A: () => H }), n(321073), n(938796));
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(570138),
    o = n(350835),
    d = n(665260),
    c = n(17928),
    u = n(73153),
    _ = n(933958),
    E = n(182892),
    A = n(587895),
    h = n(685396),
    f = n(952818),
    I = n(765741),
    p = n(863160),
    T = n(671389);
let m = [n(732755).A, T.Ay],
    g = [];
function S() {
    let e = [];
    for (let t of m) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !r()(e, g) && ((g = e), !0);
}
class N extends c.Ay.Store {
    static displayName = "FirstPartyRichPresenceStore";
    initialize() {
        this.syncWith(m, S);
    }
    getActivities() {
        return g;
    }
}
let C = new N(u.h);
var O = n(155718),
    R = n(871633),
    L = n(655116),
    y = n(253932),
    D = n(617617),
    v = n(616356),
    b = n(734057),
    P = n(760751),
    M = n(794383),
    U = n(309010),
    w = n(528767),
    G = n(652215);
let x = [],
    k = {},
    F = null;
function B() {
    let e = [],
        t = y.G2.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, h.F)(t));
    let n = C.getActivities();
    e.push(...n);
    let i = M.A.getStream();
    null != i && e.push({ type: o.$.STREAMING, ...i });
    let a = new Set();
    s().forEach(k, (t) => {
        let [, n] = t;
        null != n.application_id && (a.add(n.name), e.push(n));
    });
    let l = null != v.A.getCurrentUserActiveStream(),
        d = f.Ay.getVisibleGame();
    if (l) {
        let e = v.A.getStreamerActiveStreamMetadata(),
            t = f.Ay.getVisibleRunningGames(),
            n = null;
        (e?.pid != null && (n = t.find((t) => t.pid === e.pid) ?? null),
            null == n && e?.id != null && (n = t.find((t) => t.id === e.id) ?? null),
            null != n ? (null == F && (F = n.start ?? Date.now()), (d = n)) : (F = null));
    } else F = null;
    let c = null != d ? f.Ay.getSdkResolutionForPID(d.pid) : void 0,
        u = null != c && c.type !== p.r.UNRESOLVED ? c.game.id : void 0,
        _ = w.A.getRemoteActivities(),
        E =
            null != u &&
            [...e, ..._].some(
                (e) =>
                    e.application_id === u ||
                    A.A.getApplication(e.application_id ?? void 0)?.getCanonicalGameId() === u,
            ),
        I =
            null != d &&
            null != d.name &&
            (E ||
                a.has(d.name) ||
                (function (e, t) {
                    if (null === e.id || void 0 === e.id) return !1;
                    let n = A.A.getApplication(e.id);
                    return (
                        null != n &&
                        null != n.linkedGames &&
                        n.linkedGames.length > 0 &&
                        void 0 !==
                            n.linkedGames.find((e) => {
                                var n;
                                return (
                                    e.type === O.Mh.LINKED &&
                                    ((n = e.id), null != t.find((e) => e.application_id === n))
                                );
                            })
                    );
                })(d, [...e, ..._])),
        T = null != d && d.isLauncher;
    if (null != d && null != d.name && !(I || (T && !l))) {
        let t = P.A.findGame(d);
        e.push({
            type: o.$.PLAYING,
            name: d.name,
            application_id: d.id ?? t?.id,
            timestamps: { start: F ?? d.start },
            ...(0, R.CO)(d),
        });
    }
    let m = L.A.getActivity();
    return (null != m && e.push({ type: o.$.LISTENING, ...m }), !r()(x, e) && ((x = e), !0));
}
class V extends c.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        (this.waitFor(A.A, v.A, b.A, _.Ay, M.A, C, P.A, f.Ay, U.Ay, w.A, I.A, L.A, D.A), this.syncWith([C], () => B()));
    }
    getActivities() {
        return x;
    }
    getPrimaryActivity() {
        return x[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === o.$.CUSTOM_STATUS);
    }
    findActivity(e) {
        return x.find(e);
    }
    getApplicationActivities() {
        return k;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(k)) if (t === e) return n;
        return null;
    }
}
let H = new V(u.h, {
    ROBLOX_SUBGAME_UPDATE: B,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: B,
    OVERLAY_INITIALIZE: function (e) {
        let { localActivities: t } = e;
        ((k = { ...t }), B());
    },
    START_SESSION: function () {
        ((k = {}), B());
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        let { socketId: t, pid: n, activity: i, partyPrivacy: a } = e,
            s = null == i ? null == k[t] : r()(k[t], [n, i, a]);
        s || (null != i ? (k[t] = [n, i, a]) : delete k[t]);
        let l = B();
        return !s || l;
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { socketId: t } = e;
        (delete k[t], B());
    },
    RUNNING_GAMES_CHANGE: B,
    SOCIAL_SDK_GAMES_UPDATE: B,
    APPLICATION_FETCH_SUCCESS: B,
    APPLICATIONS_FETCH_SUCCESS: B,
    GAMES_DATABASE_UPDATE: B,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: B,
    SPOTIFY_PLAYER_STATE: B,
    SPOTIFY_PLAYER_PLAY: B,
    STREAMING_UPDATE: B,
    USER_CONNECTIONS_UPDATE: B,
    STREAM_START: B,
    STREAM_STOP: B,
    USER_SETTINGS_PROTO_UPDATE: function () {
        (!(function () {
            let e = {},
                t = !1;
            for (let [n, [i, r, a]] of Object.entries(k)) {
                let s = r.flags ?? 0,
                    o = (0, E.E)(
                        r,
                        (0, d.Lt)(r?.flags ?? 0, G.jUm.INSTANCE),
                        r.platform === l.y.EMBEDDED,
                        (0, E.e)(r),
                        a,
                    );
                o !== s ? ((e[n] = [i, { ...r, flags: o }, a]), (t = !0)) : (e[n] = [i, r, a]);
            }
            t && (k = e);
        })(),
            B());
    },
    EMBEDDED_ACTIVITY_CLOSE: B,
    RUNNING_GAME_TOGGLE_DETECTION: B,
});
