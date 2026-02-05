"use strict";
n.d(t, { A: () => H }), n(321073), n(938796);
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
    y = n(617617),
    S = n(997752),
    v = n(616356),
    C = n(734057),
    b = n(760751),
    N = n(794383),
    R = n(309010),
    O = n(528767),
    D = n(652215);
let L = [],
    w = {};
function x(e) {
    let t = S.A.getVoiceDareCustomStatusActivity();
    return null != t ? t : null == e || P(e) ? null : (0, f.F)(e);
}
function P(e) {
    return (
        null == e || !("0" === e.expiresAtMs || new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime() > 0)
    );
}
function M() {
    let e = [],
        t = x(T.G2.getSetting());
    null != t && e.push(t);
    let n = g.A.getActivities();
    e.push(...n);
    let r = N.A.getStream();
    null != r && e.push({ type: D.$pd.STREAMING, ...r });
    let a = new Set();
    s().forEach(w, (t) => {
        let [, n] = t;
        null != n.application_id && (a.add(n.name), e.push(n));
    });
    let o = p.Ay.getVisibleGame(),
        l = null != o && null != o.name && (a.has(o.name) || (0, E.v)(o, [...e, ...O.A.getRemoteActivities()])),
        u = null != o && o.isLauncher,
        c = null != v.A.getCurrentUserActiveStream(),
        d = l || (u && !c);
    if (null != o && null != o.name && !d) {
        let t = b.A.getGameByName(o.name);
        e.push({
            type: D.$pd.PLAYING,
            name: o.name,
            application_id: o.id ?? t?.id,
            timestamps: { start: o.start },
            ...(0, A.CO)(o),
        });
    }
    let _ = I.A.getActivity();
    null != _ && e.push({ type: D.$pd.LISTENING, ..._ });
    let f = m.A.getCurrentHangStatus();
    if (null != f) {
        let t = m.A.getCustomHangStatus(),
            { defaultStatusVariant: n } = (0, h.ko)({
                guildId: C.A.getChannel(R.A.getVoiceChannelId())?.guild_id,
                location: "LocalActivityStore",
            });
        e.push({
            type: D.$pd.HANG_STATUS,
            name: "Hang Status",
            state: `${f}:${n}`,
            details: t?.status,
            emoji: t?.emoji,
        });
    }
    i()(L, e) || (L = e);
}
function k() {
    (w = {}), M();
}
function U(e) {
    let { socketId: t, pid: n, activity: r, partyPrivacy: a } = e;
    if (i()(w[t], [n, r, a])) return !1;
    null != r ? (w[t] = [n, r, a]) : delete w[t], M();
}
function G(e) {
    let { socketId: t } = e;
    delete w[t], M();
}
function V(e) {
    let { localActivities: t } = e;
    (w = { ...t }), M();
}
function F() {
    let e = {},
        t = !1;
    for (let [n, [r, i, a]] of Object.entries(w)) {
        let s = i.flags ?? 0,
            l = (0, d.E)(i, (0, o.Lt)(i?.flags ?? 0, D.jUm.INSTANCE), i.platform === D.yTV.EMBEDDED, (0, d.e)(i), a);
        l !== s ? ((e[n] = [r, { ...i, flags: l }, a]), (t = !0)) : (e[n] = [r, i, a]);
    }
    return t ? ((w = e), "APPLICATION_ACTIVITIES_CHANGED") : "NO_CHANGES";
}
function B() {
    F(), M();
}
class j extends l.Ay.Store {
    static displayName = "LocalActivityStore";
    initialize() {
        this.waitFor(_.A, v.A, C.A, c.Ay, N.A, g.A, b.A, m.A, p.Ay, R.A, O.A, I.A, S.A, y.A),
            this.syncWith([g.A, m.A, S.A], () => M());
    }
    getActivities() {
        return L;
    }
    getPrimaryActivity() {
        return L[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === D.$pd.CUSTOM_STATUS);
    }
    findActivity(e) {
        return L.find(e);
    }
    getApplicationActivities() {
        return w;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(w)) if (t === e) return n;
        return null;
    }
}
let H = new j(u.h, {
    ROBLOX_SUBGAME_UPDATE: M,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: M,
    OVERLAY_INITIALIZE: V,
    START_SESSION: k,
    LOCAL_ACTIVITY_UPDATE: U,
    RPC_APP_DISCONNECTED: G,
    RUNNING_GAMES_CHANGE: M,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: M,
    SPOTIFY_PLAYER_STATE: M,
    SPOTIFY_PLAYER_PLAY: M,
    STREAMING_UPDATE: M,
    USER_CONNECTIONS_UPDATE: M,
    STREAM_START: M,
    STREAM_STOP: M,
    USER_SETTINGS_PROTO_UPDATE: B,
    EMBEDDED_ACTIVITY_CLOSE: M,
    UPDATE_HANG_STATUS: M,
    RUNNING_GAME_TOGGLE_DETECTION: M,
});
