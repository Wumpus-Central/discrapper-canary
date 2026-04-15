"use strict";
n.d(t, { A: () => F }), n(321073), n(938796);
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(665260),
    l = n(311907),
    u = n(73153),
    c = n(933958),
    d = n(182892),
    _ = n(587895),
    f = n(685396),
    p = n(15285),
    h = n(668731),
    m = n(589187),
    E = n(847521),
    g = n(655116),
    A = n(253932),
    I = n(617617),
    T = n(616356),
    S = n(734057),
    y = n(760751),
    v = n(794383),
    N = n(309010),
    C = n(528767),
    R = n(652215);
let O = [],
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
    let r = v.A.getStream();
    null != r && e.push({ type: R.$pd.STREAMING, ...r });
    let s = new Set();
    a().forEach(b, (t) => {
        let [, n] = t;
        null != n.application_id && (s.add(n.name), e.push(n));
    });
    let o = null != T.A.getCurrentUserActiveStream(),
        l = p.Ay.getVisibleGame();
    if (o) {
        let e = T.A.getStreamerActiveStreamMetadata(),
            t = p.Ay.getVisibleRunningGames(),
            n = null;
        e?.pid != null && (n = t.find((t) => t.pid === e.pid) ?? null),
            null == n && e?.id != null && (n = t.find((t) => t.id === e.id) ?? null),
            null != n ? (null == D && (D = n.start ?? Date.now()), (l = n)) : (D = null);
    } else D = null;
    let u = null != l && null != l.name && (s.has(l.name) || (0, m.v)(l, [...e, ...C.A.getRemoteActivities()])),
        c = null != l && l.isLauncher,
        d = u || (c && !o);
    if (null != l && null != l.name && !d) {
        let t = y.A.findGame(l);
        e.push({
            type: R.$pd.PLAYING,
            name: l.name,
            application_id: l.id ?? t?.id,
            timestamps: { start: D ?? l.start },
            ...(0, E.CO)(l),
        });
    }
    let _ = g.A.getActivity();
    null != _ && e.push({ type: R.$pd.LISTENING, ..._ }), i()(O, e) || (O = e);
}
function w() {
    (b = {}), L();
}
function M(e) {
    let { socketId: t, pid: n, activity: r, partyPrivacy: s } = e;
    if (i()(b[t], [n, r, s])) return !1;
    null != r ? (b[t] = [n, r, s]) : delete b[t], L();
}
function x(e) {
    let { socketId: t } = e;
    delete b[t], L();
}
function P(e) {
    let { localActivities: t } = e;
    (b = { ...t }), L();
}
function k() {
    let e = {},
        t = !1;
    for (let [n, [r, i, s]] of Object.entries(b)) {
        let a = i.flags ?? 0,
            l = (0, d.E)(i, (0, o.Lt)(i?.flags ?? 0, R.jUm.INSTANCE), i.platform === R.yTV.EMBEDDED, (0, d.e)(i), s);
        l !== a ? ((e[n] = [r, { ...i, flags: l }, s]), (t = !0)) : (e[n] = [r, i, s]);
    }
    return t ? ((b = e), "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES";
}
function U() {
    k(), L();
}
class G extends l.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        this.waitFor(_.A, T.A, S.A, c.Ay, v.A, h.A, y.A, p.Ay, N.A, C.A, g.A, I.A), this.syncWith([h.A], () => L());
    }
    getActivities() {
        return O;
    }
    getPrimaryActivity() {
        return O[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === R.$pd.CUSTOM_STATUS);
    }
    findActivity(e) {
        return O.find(e);
    }
    getApplicationActivities() {
        return b;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(b)) if (t === e) return n;
        return null;
    }
}
let F = new G(u.h, {
    ROBLOX_SUBGAME_UPDATE: L,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: L,
    OVERLAY_INITIALIZE: P,
    START_SESSION: w,
    LOCAL_ACTIVITY_UPDATE: M,
    RPC_APP_DISCONNECTED: x,
    RUNNING_GAMES_CHANGE: L,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: L,
    SPOTIFY_PLAYER_STATE: L,
    SPOTIFY_PLAYER_PLAY: L,
    STREAMING_UPDATE: L,
    USER_CONNECTIONS_UPDATE: L,
    STREAM_START: L,
    STREAM_STOP: L,
    USER_SETTINGS_PROTO_UPDATE: U,
    EMBEDDED_ACTIVITY_CLOSE: L,
    RUNNING_GAME_TOGGLE_DETECTION: L,
});
