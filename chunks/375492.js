n.d(t, { A: () => y }), n(321073), n(938796);
var i = n(812729),
    r = n.n(i),
    a = n(735438),
    s = n.n(a),
    _ = n(665260),
    l = n(17928),
    o = n(228366),
    E = n(933958),
    d = n(182892),
    c = n(587895),
    u = n(685396),
    I = n(328153),
    A = n(668731),
    T = n(589187),
    S = n(871633),
    N = n(655116),
    O = n(253932),
    R = n(617617),
    f = n(616356),
    C = n(734057),
    p = n(760751),
    m = n(794383),
    L = n(309010),
    D = n(528767),
    h = n(652215);
let g = [],
    b = {},
    U = null;
function P() {
    let e = [],
        t = O.G2.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, u.F)(t));
    let n = A.A.getActivities();
    e.push(...n);
    let i = m.A.getStream();
    null != i && e.push({ type: h.$pd.STREAMING, ...i });
    let a = new Set();
    s().forEach(b, (t) => {
        let [, n] = t;
        null != n.application_id && (a.add(n.name), e.push(n));
    });
    let _ = null != f.A.getCurrentUserActiveStream(),
        l = I.Ay.getVisibleGame();
    if (_) {
        let e = f.A.getStreamerActiveStreamMetadata(),
            t = I.Ay.getVisibleRunningGames(),
            n = null;
        e?.pid != null && (n = t.find((t) => t.pid === e.pid) ?? null),
            null == n && e?.id != null && (n = t.find((t) => t.id === e.id) ?? null),
            null != n ? (null == U && (U = n.start ?? Date.now()), (l = n)) : (U = null);
    } else U = null;
    let o = null != l && null != l.name && (a.has(l.name) || (0, T.v)(l, [...e, ...D.A.getRemoteActivities()])),
        E = null != l && l.isLauncher;
    if (null != l && null != l.name && !(o || (E && !_))) {
        let t = p.A.findGame(l);
        e.push({
            type: h.$pd.PLAYING,
            name: l.name,
            application_id: l.id ?? t?.id,
            timestamps: { start: U ?? l.start },
            ...(0, S.CO)(l),
        });
    }
    let d = N.A.getActivity();
    null != d && e.push({ type: h.$pd.LISTENING, ...d }), r()(g, e) || (g = e);
}
class M extends l.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        this.waitFor(c.A, f.A, C.A, E.Ay, m.A, A.A, p.A, I.Ay, L.A, D.A, N.A, R.A), this.syncWith([A.A], () => P());
    }
    getActivities() {
        return g;
    }
    getPrimaryActivity() {
        return g[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === h.$pd.CUSTOM_STATUS);
    }
    findActivity(e) {
        return g.find(e);
    }
    getApplicationActivities() {
        return b;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(b)) if (t === e) return n;
        return null;
    }
}
let y = new M(o.h, {
    ROBLOX_SUBGAME_UPDATE: P,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: P,
    OVERLAY_INITIALIZE: function (e) {
        let { localActivities: t } = e;
        (b = { ...t }), P();
    },
    START_SESSION: function () {
        (b = {}), P();
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        let { socketId: t, pid: n, activity: i, partyPrivacy: a } = e;
        if (r()(b[t], [n, i, a])) return !1;
        null != i ? (b[t] = [n, i, a]) : delete b[t], P();
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { socketId: t } = e;
        delete b[t], P();
    },
    RUNNING_GAMES_CHANGE: P,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: P,
    SPOTIFY_PLAYER_STATE: P,
    SPOTIFY_PLAYER_PLAY: P,
    STREAMING_UPDATE: P,
    USER_CONNECTIONS_UPDATE: P,
    STREAM_START: P,
    STREAM_STOP: P,
    USER_SETTINGS_PROTO_UPDATE: function () {
        !(function () {
            let e = {},
                t = !1;
            for (let [n, [i, r, a]] of Object.entries(b)) {
                let s = r.flags ?? 0,
                    l = (0, d.E)(
                        r,
                        (0, _.Lt)(r?.flags ?? 0, h.jUm.INSTANCE),
                        r.platform === h.yTV.EMBEDDED,
                        (0, d.e)(r),
                        a,
                    );
                l !== s ? ((e[n] = [i, { ...r, flags: l }, a]), (t = !0)) : (e[n] = [i, r, a]);
            }
            t && (b = e);
        })(),
            P();
    },
    EMBEDDED_ACTIVITY_CLOSE: P,
    RUNNING_GAME_TOGGLE_DETECTION: P,
});
