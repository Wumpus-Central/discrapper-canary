n.d(t, { A: () => v }), n(321073), n(938796);
var i = n(812729),
    a = n.n(i),
    r = n(735438),
    s = n.n(r),
    l = n(665260),
    o = n(17928),
    d = n(228366),
    c = n(933958),
    _ = n(182892),
    E = n(587895),
    u = n(685396),
    A = n(328153),
    I = n(668731),
    T = n(589187),
    h = n(871633),
    S = n(655116),
    N = n(253932),
    f = n(617617),
    p = n(616356),
    m = n(734057),
    O = n(760751),
    C = n(794383),
    R = n(309010),
    g = n(528767),
    L = n(652215);
let D = [],
    b = {},
    M = null;
function P() {
    let e = [],
        t = N.G2.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, u.F)(t));
    let n = I.A.getActivities();
    e.push(...n);
    let i = C.A.getStream();
    null != i && e.push({ type: L.$pd.STREAMING, ...i });
    let r = new Set();
    s().forEach(b, (t) => {
        let [, n] = t;
        null != n.application_id && (r.add(n.name), e.push(n));
    });
    let l = null != p.A.getCurrentUserActiveStream(),
        o = A.Ay.getVisibleGame();
    if (l) {
        let e = p.A.getStreamerActiveStreamMetadata(),
            t = A.Ay.getVisibleRunningGames(),
            n = null;
        e?.pid != null && (n = t.find((t) => t.pid === e.pid) ?? null),
            null == n && e?.id != null && (n = t.find((t) => t.id === e.id) ?? null),
            null != n ? (null == M && (M = n.start ?? Date.now()), (o = n)) : (M = null);
    } else M = null;
    let d = null != o && null != o.name && (r.has(o.name) || (0, T.v)(o, [...e, ...g.A.getRemoteActivities()])),
        c = null != o && o.isLauncher;
    if (null != o && null != o.name && !(d || (c && !l))) {
        let t = O.A.findGame(o);
        e.push({
            type: L.$pd.PLAYING,
            name: o.name,
            application_id: o.id ?? t?.id,
            timestamps: { start: M ?? o.start },
            ...(0, h.CO)(o),
        });
    }
    let _ = S.A.getActivity();
    null != _ && e.push({ type: L.$pd.LISTENING, ..._ }), a()(D, e) || (D = e);
}
class U extends o.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        this.waitFor(E.A, p.A, m.A, c.Ay, C.A, I.A, O.A, A.Ay, R.A, g.A, S.A, f.A), this.syncWith([I.A], () => P());
    }
    getActivities() {
        return D;
    }
    getPrimaryActivity() {
        return D[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === L.$pd.CUSTOM_STATUS);
    }
    findActivity(e) {
        return D.find(e);
    }
    getApplicationActivities() {
        return b;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(b)) if (t === e) return n;
        return null;
    }
}
let v = new U(d.h, {
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
        let { socketId: t, pid: n, activity: i, partyPrivacy: r } = e;
        if (a()(b[t], [n, i, r])) return !1;
        null != i ? (b[t] = [n, i, r]) : delete b[t], P();
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
            for (let [n, [i, a, r]] of Object.entries(b)) {
                let s = a.flags ?? 0,
                    o = (0, _.E)(
                        a,
                        (0, l.Lt)(a?.flags ?? 0, L.jUm.INSTANCE),
                        a.platform === L.yTV.EMBEDDED,
                        (0, _.e)(a),
                        r,
                    );
                o !== s ? ((e[n] = [i, { ...a, flags: o }, r]), (t = !0)) : (e[n] = [i, a, r]);
            }
            t && (b = e);
        })(),
            P();
    },
    EMBEDDED_ACTIVITY_CLOSE: P,
    RUNNING_GAME_TOGGLE_DETECTION: P,
});
