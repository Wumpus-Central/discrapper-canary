"use strict";
n.d(t, { A: () => V }), n(321073), n(938796);
var r = n(812729),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(665260),
    l = n(311907),
    u = n(73153),
    c = n(933958),
    d = n(182892),
    _ = n(587895),
    f = n(685396),
    p = n(15285),
    h = n(140547),
    m = n(242919),
    g = n(668731),
    E = n(589187),
    A = n(847521),
    I = n(655116),
    T = n(253932),
    S = n(617617),
    y = n(616356),
    v = n(734057),
    C = n(760751),
    N = n(794383),
    b = n(309010),
    R = n(528767),
    O = n(652215);
let D = [],
    L = {};
function w() {
    let e = [],
        t = T.G2.getSetting();
    null != t &&
        ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
        e.push((0, f.F)(t));
    let n = g.A.getActivities();
    e.push(...n);
    let r = N.A.getStream();
    null != r && e.push({ type: O.$pd.STREAMING, ...r });
    let a = new Set();
    s().forEach(L, (t) => {
        let [, n] = t;
        null != n.application_id && (a.add(n.name), e.push(n));
    });
    let o = p.Ay.getVisibleGame(),
        l = null != o && null != o.name && (a.has(o.name) || (0, E.v)(o, [...e, ...R.A.getRemoteActivities()])),
        u = null != o && o.isLauncher,
        c = null != y.A.getCurrentUserActiveStream(),
        d = l || (u && !c);
    if (null != o && null != o.name && !d) {
        let t = C.A.getGameByName(o.name);
        e.push({
            type: O.$pd.PLAYING,
            name: o.name,
            application_id: o.id ?? t?.id,
            timestamps: { start: o.start },
            ...(0, A.CO)(o),
        });
    }
    let _ = I.A.getActivity();
    null != _ && e.push({ type: O.$pd.LISTENING, ..._ });
    let S = m.A.getCurrentHangStatus();
    if (null != S) {
        let t = m.A.getCustomHangStatus(),
            { defaultStatusVariant: n } = (0, h.ko)({
                guildId: v.A.getChannel(b.A.getVoiceChannelId())?.guild_id,
                location: "LocalActivityStore",
            });
        e.push({
            type: O.$pd.HANG_STATUS,
            name: "Hang Status",
            state: `${S}:${n}`,
            details: t?.status,
            emoji: t?.emoji,
        });
    }
    i()(D, e) || (D = e);
}
function x() {
    (L = {}), w();
}
function M(e) {
    let { socketId: t, pid: n, activity: r, partyPrivacy: a } = e;
    if (i()(L[t], [n, r, a])) return !1;
    null != r ? (L[t] = [n, r, a]) : delete L[t], w();
}
function P(e) {
    let { socketId: t } = e;
    delete L[t], w();
}
function k(e) {
    let { localActivities: t } = e;
    (L = { ...t }), w();
}
function U() {
    let e = {},
        t = !1;
    for (let [n, [r, i, a]] of Object.entries(L)) {
        let s = i.flags ?? 0,
            l = (0, d.E)(i, (0, o.Lt)(i?.flags ?? 0, O.jUm.INSTANCE), i.platform === O.yTV.EMBEDDED, (0, d.e)(i), a);
        l !== s ? ((e[n] = [r, { ...i, flags: l }, a]), (t = !0)) : (e[n] = [r, i, a]);
    }
    return t ? ((L = e), "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES";
}
function G() {
    U(), w();
}
class F extends l.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        this.waitFor(_.A, y.A, v.A, c.Ay, N.A, g.A, C.A, m.A, p.Ay, b.A, R.A, I.A, S.A),
            this.syncWith([g.A, m.A], () => w());
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
        return this.findActivity((e) => e.type === O.$pd.CUSTOM_STATUS);
    }
    findActivity(e) {
        return D.find(e);
    }
    getApplicationActivities() {
        return L;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(L)) if (t === e) return n;
        return null;
    }
}
let V = new F(u.h, {
    ROBLOX_SUBGAME_UPDATE: w,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: w,
    OVERLAY_INITIALIZE: k,
    START_SESSION: x,
    LOCAL_ACTIVITY_UPDATE: M,
    RPC_APP_DISCONNECTED: P,
    RUNNING_GAMES_CHANGE: w,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: w,
    SPOTIFY_PLAYER_STATE: w,
    SPOTIFY_PLAYER_PLAY: w,
    STREAMING_UPDATE: w,
    USER_CONNECTIONS_UPDATE: w,
    STREAM_START: w,
    STREAM_STOP: w,
    USER_SETTINGS_PROTO_UPDATE: G,
    EMBEDDED_ACTIVITY_CLOSE: w,
    UPDATE_HANG_STATUS: w,
    RUNNING_GAME_TOGGLE_DETECTION: w,
});
