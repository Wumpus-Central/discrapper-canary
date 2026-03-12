"use strict";
n.d(t, { A: () => eA });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(506774),
    o = n(73153),
    l = n(956793),
    u = n(626584),
    c = n(652896),
    d = n(796774),
    _ = n(617617),
    f = n(961350),
    p = n(470710),
    h = n(734057),
    m = n(430452),
    E = n(383501),
    g = n(873985),
    A = n(309010),
    I = n(461213),
    T = n(162605),
    S = n(723702),
    y = n(175306),
    v = n(531013),
    N = n(33282),
    C = n(448515),
    R = n(652215),
    O = n(355097);
let b = window.DiscordNative;
v.sZ.dispatcher.getDispatchHandler = C.A;
let D = new u.A("ConnectionStore"),
    L = 100,
    w = 0,
    M = null,
    x = !0,
    P = null,
    k = null;
function U() {
    return v.sZ.isClosed()
        ? (D.verbose("Socket is reconnecting because of starting new session"), v.sZ.connect())
        : (D.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
}
function G(e) {
    e.isSwitchingAccount && v.OV.handleAccountSwitch(), D.verbose("Closing socket because of logout"), v.sZ.close();
}
function F() {
    return (
        D.verbose("session refresh dispatched", { isEstablished: v.sZ.isSessionEstablished() }),
        !!v.sZ.isSessionEstablished() && (v.sZ.close(), v.sZ.connect())
    );
}
async function V(e) {
    (w = Date.now()), (M = e.sessionId), v.OV.handleConnectionOpen();
    let t = {},
        n = A.A.getVoiceChannelId();
    if (null != n) {
        let e = a.w.get("discord_watchdog_restart_timestamp"),
            r = null != e && Date.now() - parseInt(e, 10) < 6e4;
        if (
            (a.w.remove("discord_watchdog_restart_timestamp"),
            window?.performance?.getEntriesByType?.("navigation")?.[0]?.type === "reload" ||
                r ||
                (await b?.processUtils?.getLastCrash?.())?.rendererCrashReason != null ||
                !x)
        ) {
            let e = h.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, d.CX)(n));
        } else E.A.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
    }
    v.Xo.update(t, !0), (x = !1), (k = null);
}
function B() {
    D.verbose("connection closed dispatched"), (w = Date.now());
}
function H() {
    k = null;
}
function j(e) {
    return e.resetSocket && (v.sZ.close(), v.sZ.dispatcher.clear(), v.sZ.connect()), !1;
}
function Y(e) {
    return (
        v.Xo.update({ guildId: e.guildId, channelId: e.channelId }),
        (k = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
        (0, S.isIOS)() &&
            P === R.g6G.BACKGROUND &&
            (null == e.channelId ? v.sZ.close(!0) : v.sZ.isClosed() && (N.V(!1), v.sZ.connect())),
        !1
    );
}
function W() {
    v.Xo.update();
}
function K(e) {
    e.settings.type === O.oD.PRELOADED_USER_SETTINGS && e.settings.proto.clips?.allowVoiceRecording != null && W();
}
function $(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (f.default.getId() !== t.userId) return e;
        if (t.sessionId === M) {
            if (null != k) return D.verbose("Ignoring voice state for own session due to VSU lock on channel:", k), e;
            v.Xo.setState({ guildId: t.guildId, channelId: t.channelId });
        } else {
            if (t.guildId !== v.Xo.guildId) return e;
            v.Xo.setState({ guildId: null, channelId: null });
        }
        return !0;
    }, !1);
}
function z(e) {
    e.guild.id === v.Xo.guildId && v.Xo.setState({ guildId: null, channelId: null });
}
function q(e) {
    let { channelId: t } = e;
    if (t === v.Xo.channelId) {
        if (k === t) return !1;
        v.Xo.setState({ guildId: null, channelId: null });
    }
}
function Z(e) {
    let { channel: t } = e;
    t.id === v.Xo.channelId && v.Xo.setState({ guildId: null, channelId: null });
}
function X(e) {
    if (e.state !== R.S7L.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? v.sZ.streamPing(e.streamKey) : v.sZ.voiceServerPing());
}
function Q(e) {
    return (
        (0, S.isIOS)()
            ? (f.default.isAuthenticated() &&
                  (P === R.g6G.INACTIVE && e.state === R.g6G.BACKGROUND && null == v.Xo.channelId
                      ? v.sZ.close(!0)
                      : P === R.g6G.BACKGROUND &&
                        e.state === R.g6G.ACTIVE &&
                        v.sZ.isClosed() &&
                        (N.V(!1), v.sZ.connect())),
              (P = e.state))
            : e.state === R.g6G.ACTIVE &&
              (N.V(!1), f.default.isAuthenticated() && v.sZ.resetBackoff("App state is active")),
        !1
    );
}
function J() {
    return v.Xo.update(), !1;
}
function ee() {
    return v.OV.update(), !1;
}
function et(e) {
    return (
        v.sZ.isSessionEstablished() &&
            ("userIds" in e
                ? i()(e.userIds)
                      .chunk(L)
                      .forEach((t) => {
                          v.sZ.requestGuildMembers(e.guildIds, { userIds: t, presences: !!e.presences });
                      })
                : v.sZ.requestGuildMembers(e.guildIds, { query: e.query, limit: e.limit, presences: !!e.presences })),
        !1
    );
}
function en(e) {
    let { guildId: t, query: n, continuationToken: r } = e;
    v.sZ.isSessionEstablished() && v.sZ.searchRecentMembers(t, { query: n, continuationToken: r });
}
function er(e) {
    let { subscriptions: t } = e;
    return v.sZ.isSessionEstablished() && v.sZ.updateGuildSubscriptions(t), !1;
}
function ei(e) {
    let { channelId: t } = e;
    return v.sZ.isSessionEstablished() && v.sZ.callConnect(t), !1;
}
function es(e) {
    let { channelIds: t } = e;
    return (
        v.sZ.isSessionEstablished() &&
            t.forEach((e) => {
                v.sZ.callConnect(e);
            }),
        !1
    );
}
function ea(e) {
    let { sessionId: t, payload: n } = e;
    return v.sZ.isSessionEstablished() && v.sZ.remoteCommand(t, n), !1;
}
function eo(e) {
    v.sZ.isSessionEstablished() && v.sZ.streamDelete(e);
}
function el() {
    let e = eu();
    T.A.getAllActiveStreamKeys()
        .filter((t) => t !== e)
        .forEach((e) => eo(e));
}
function eu() {
    return T.A.getAllActiveStreamKeys().find((e) => (0, c.Iy)(e).ownerId === f.default.getId());
}
function ec(e) {
    let { streamType: t, guildId: n, channelId: r } = e;
    if (v.sZ.isSessionEstablished()) {
        let e = null != n ? h.A.getChannel(r)?.rtcRegion : p.A.getCall(r)?.region;
        v.sZ.streamCreate(t, n, r, e ?? g.A.getPreferredRegion());
    }
    return !1;
}
function ed(e) {
    let { streamKey: t, paused: n } = e;
    v.sZ.isSessionEstablished() && v.sZ.streamSetPaused(t, n);
}
function e_(e) {
    let { streamKey: t, allowMultiple: n } = e;
    return v.sZ.isSessionEstablished() && (n || el(), v.sZ.streamWatch(t)), !1;
}
function ef(e) {
    let { streamKey: t } = e;
    return eo(t), W(), !1;
}
function ep() {
    return v.sZ.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
}
function eh(e) {
    let { guildId: t, channelId: n, threads: r } = e;
    v.sZ.requestForumUnreads(t, n, r);
}
function em(e) {
    v.sZ.connectionState !== y.A.WILL_RECONNECT && v.sZ.resetSocketAndClearCacheOnError(e.args);
}
function eE(e) {
    let { guildIds: t } = e;
    v.sZ.requestSoundboardSounds(t);
}
class eg extends s.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(f.default, p.A, h.A, m.Ay, E.A, g.A, A.A, I.A, T.A, _.A),
            this.syncWith([m.Ay], J),
            this.syncWith([I.A], ee);
    }
    getSocket() {
        return v.sZ;
    }
    isTryingToConnect() {
        return !v.sZ.isClosed();
    }
    isConnected() {
        return v.sZ.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return v.sZ.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return w;
    }
}
let eA = new eg(o.h, {
    START_SESSION: U,
    LOGIN_SUCCESS: F,
    LOGOUT: G,
    CLEAR_CACHES: j,
    CONNECTION_OPEN: (e) => {
        V(e);
    },
    CONNECTION_RESUMED: H,
    CONNECTION_CLOSED: B,
    RTC_CONNECTION_STATE: X,
    VOICE_CHANNEL_SELECT: Y,
    VOICE_STATE_UPDATES: $,
    GUILD_DELETE: z,
    CHANNEL_DELETE: Z,
    CALL_DELETE: q,
    APP_STATE_UPDATE: Q,
    GUILD_MEMBERS_REQUEST: et,
    GUILD_SEARCH_RECENT_MEMBERS: en,
    GUILD_SUBSCRIPTIONS_FLUSH: er,
    CALL_CONNECT: ei,
    CALL_CONNECT_MULTIPLE: es,
    STREAM_CREATE: W,
    STREAM_START: ec,
    STREAM_WATCH: e_,
    STREAM_STOP: ef,
    STREAM_SET_PAUSED: ed,
    PUSH_NOTIFICATION_CLICK: ep,
    REQUEST_FORUM_UNREADS: eh,
    REQUEST_SOUNDBOARD_SOUNDS: eE,
    REMOTE_COMMAND: ea,
    RESET_SOCKET: em,
    CLIPS_SETTINGS_UPDATE: W,
    RUNNING_GAMES_CHANGE: W,
    USER_SETTINGS_PROTO_UPDATE: K,
});
