(n.d(t, { A: () => W }), n(321073), n(938796));
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(570138),
    o = n(350835),
    d = n(665260),
    c = n(855986),
    u = n(73153),
    _ = n(933958),
    E = n(182892),
    A = n(587895),
    f = n(685396),
    h = n(644727),
    I = n(765741),
    p = n(863160),
    m = n(671389);
let T = [n(732755).A, m.Ay],
    g = [];
function S() {
    let e = [];
    for (let t of T) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !r()(e, g) && ((g = e), !0);
}
class N extends c.Ay.Store {
    static displayName = "FirstPartyRichPresenceStore";
    initialize() {
        this.syncWith(T, S);
    }
    getActivities() {
        return g;
    }
}
let C = new N(u.h);
var O = n(155718),
    R = n(977556),
    L = n(655116),
    y = n(253932),
    D = n(617617),
    b = n(616356),
    v = n(734057),
    P = n(760751),
    M = n(794383),
    U = n(309010),
    w = n(528767),
    G = n(652215);
let x = [],
    k = {},
    F = new Set(),
    B = null;
function V() {
    let e = [],
        t = y.G2.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, f.F)(t));
    let n = C.getActivities();
    e.push(...n);
    let i = M.A.getStream();
    null != i && e.push({ type: o.$.STREAMING, ...i });
    let a = new Set();
    s().forEach(k, (t) => {
        let [, n] = t;
        null != n.application_id && (a.add(n.name), e.push(n));
    });
    let l = null != b.A.getCurrentUserActiveStream(),
        d = h.Ay.getVisibleGame();
    if (l) {
        let e = b.A.getStreamerActiveStreamMetadata(),
            t = h.Ay.getVisibleRunningGames(),
            n = null;
        (e?.pid != null && (n = t.find((t) => t.pid === e.pid) ?? null),
            null == n && e?.id != null && (n = t.find((t) => t.id === e.id) ?? null),
            null != n ? (null == B && (B = n.start ?? Date.now()), (d = n)) : (B = null));
    } else B = null;
    let c = null != d ? h.Ay.getSdkResolutionForPID(d.pid) : void 0,
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
        m = null != d && d.isLauncher;
    if (null != d && null != d.name && !(I || (m && !l))) {
        let t = P.A.findGame(d);
        e.push({
            type: o.$.PLAYING,
            name: d.name,
            application_id: d.id ?? t?.id,
            timestamps: { start: B ?? d.start },
            ...(0, R.CO)(d),
        });
    }
    let T = L.A.getActivity();
    return (null != T && e.push({ type: o.$.LISTENING, ...T }), !r()(x, e) && ((x = e), !0));
}
function H(e) {
    return e.platform === l.y.EMBEDDED && !(0, E.e)(e);
}
class j extends c.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        (this.waitFor(A.A, b.A, v.A, _.Ay, M.A, C, P.A, h.Ay, U.Ay, w.A, I.A, L.A, D.A), this.syncWith([C], () => V()));
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
let W = new j(u.h, {
    ROBLOX_SUBGAME_UPDATE: V,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: V,
    OVERLAY_INITIALIZE: function (e) {
        let { localActivities: t } = e;
        ((k = { ...t }), V());
    },
    START_SESSION: function () {
        ((k = {}), F.clear(), V());
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        let { socketId: t, pid: n, activity: i, partyPrivacy: a } = e,
            s = i?.application_id;
        if (null != i && null != s && H(i) && F.has(s)) {
            if (!_.Ay.getSelfEmbeddedActivities().has(s)) return !1;
            F.delete(s);
        }
        let l = null == i ? null == k[t] : r()(k[t], [n, i, a]);
        l || (null != i ? (k[t] = [n, i, a]) : delete k[t]);
        let o = V();
        return !l || o;
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { socketId: t } = e;
        (delete k[t], V());
    },
    RUNNING_GAMES_CHANGE: V,
    SOCIAL_SDK_GAMES_UPDATE: V,
    APPLICATION_FETCH_SUCCESS: V,
    APPLICATIONS_FETCH_SUCCESS: V,
    GAMES_DATABASE_UPDATE: V,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: V,
    SPOTIFY_PLAYER_STATE: V,
    SPOTIFY_PLAYER_PLAY: V,
    STREAMING_UPDATE: V,
    USER_CONNECTIONS_UPDATE: V,
    STREAM_START: V,
    STREAM_STOP: V,
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
            V());
    },
    EMBEDDED_ACTIVITY_CLOSE: function (e) {
        let { applicationId: t } = e;
        F.add(t);
        let n = s().omitBy(k, (e) => {
                let [, n] = e;
                return n.application_id === t && H(n);
            }),
            i = s().size(n) !== s().size(k);
        return ((k = n), V() || i);
    },
    RUNNING_GAME_TOGGLE_DETECTION: V,
});
