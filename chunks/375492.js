"use strict";
n.d(t, { A: () => M }), n(321073), n(938796);
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(665260),
    l = n(311907),
    u = n(73153),
    d = n(933958),
    c = n(182892),
    _ = n(587895),
    f = n(685396),
    E = n(15285),
    h = n(668731),
    p = n(589187),
    m = n(847521),
    g = n(655116),
    A = n(253932),
    I = n(617617),
    T = n(616356),
    S = n(734057),
    y = n(760751),
    N = n(794383),
    O = n(309010),
    R = n(528767),
    v = n(652215);
let C = [],
    b = {},
    D = null;
function L() {
    let e = [],
        t = A.G2.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, f.F)(t));
    let n = h.A.getActivities();
    e.push(...n);
    let r = N.A.getStream();
    null != r && e.push({ type: v.$pd.STREAMING, ...r });
    let s = new Set();
    a().forEach(b, (t) => {
        let [, n] = t;
        null != n.application_id && (s.add(n.name), e.push(n));
    });
    let o = null != T.A.getCurrentUserActiveStream(),
        l = E.Ay.getVisibleGame();
    if (o) {
        let e = T.A.getStreamerActiveStreamMetadata(),
            t = E.Ay.getVisibleRunningGames(),
            n = null;
        e?.pid != null && (n = t.find((t) => t.pid === e.pid) ?? null),
            null == n && e?.id != null && (n = t.find((t) => t.id === e.id) ?? null),
            null != n ? (null == D && (D = n.start ?? Date.now()), (l = n)) : (D = null);
    } else D = null;
    let u = null != l && null != l.name && (s.has(l.name) || (0, p.v)(l, [...e, ...R.A.getRemoteActivities()])),
        d = null != l && l.isLauncher;
    if (null != l && null != l.name && !(u || (d && !o))) {
        let t = y.A.findGame(l);
        e.push({
            type: v.$pd.PLAYING,
            name: l.name,
            application_id: l.id ?? t?.id,
            timestamps: { start: D ?? l.start },
            ...(0, m.CO)(l),
        });
    }
    let c = g.A.getActivity();
    null != c && e.push({ type: v.$pd.LISTENING, ...c }), i()(C, e) || (C = e);
}
class w extends l.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        this.waitFor(_.A, T.A, S.A, d.Ay, N.A, h.A, y.A, E.Ay, O.A, R.A, g.A, I.A), this.syncWith([h.A], () => L());
    }
    getActivities() {
        return C;
    }
    getPrimaryActivity() {
        return C[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === v.$pd.CUSTOM_STATUS);
    }
    findActivity(e) {
        return C.find(e);
    }
    getApplicationActivities() {
        return b;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(b)) if (t === e) return n;
        return null;
    }
}
let M = new w(u.h, {
    ROBLOX_SUBGAME_UPDATE: L,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: L,
    OVERLAY_INITIALIZE: function (e) {
        let { localActivities: t } = e;
        (b = { ...t }), L();
    },
    START_SESSION: function () {
        (b = {}), L();
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        let { socketId: t, pid: n, activity: r, partyPrivacy: s } = e;
        if (i()(b[t], [n, r, s])) return !1;
        null != r ? (b[t] = [n, r, s]) : delete b[t], L();
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { socketId: t } = e;
        delete b[t], L();
    },
    RUNNING_GAMES_CHANGE: L,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: L,
    SPOTIFY_PLAYER_STATE: L,
    SPOTIFY_PLAYER_PLAY: L,
    STREAMING_UPDATE: L,
    USER_CONNECTIONS_UPDATE: L,
    STREAM_START: L,
    STREAM_STOP: L,
    USER_SETTINGS_PROTO_UPDATE: function () {
        !(function () {
            let e = {},
                t = !1;
            for (let [n, [r, i, s]] of Object.entries(b)) {
                let a = i.flags ?? 0,
                    l = (0, c.E)(
                        i,
                        (0, o.Lt)(i?.flags ?? 0, v.jUm.INSTANCE),
                        i.platform === v.yTV.EMBEDDED,
                        (0, c.e)(i),
                        s,
                    );
                l !== a ? ((e[n] = [r, { ...i, flags: l }, s]), (t = !0)) : (e[n] = [r, i, s]);
            }
            t && (b = e);
        })(),
            L();
    },
    EMBEDDED_ACTIVITY_CLOSE: L,
    RUNNING_GAME_TOGGLE_DETECTION: L,
});
