"use strict";
n.d(t, { A: () => eg });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(956793),
    l = n(626584),
    u = n(652896),
    c = n(796774),
    d = n(617617),
    _ = n(961350),
    f = n(470710),
    p = n(734057),
    h = n(430452),
    m = n(383501),
    E = n(873985),
    g = n(309010),
    A = n(461213),
    I = n(162605),
    T = n(723702),
    S = n(175306),
    y = n(531013),
    v = n(33282),
    N = n(448515),
    C = n(652215),
    R = n(355097);
let O = window.DiscordNative;
y.sZ.dispatcher.getDispatchHandler = N.A;
let b = new l.A("ConnectionStore"),
    D = 100,
    L = 0,
    w = null,
    M = !0,
    x = null,
    P = null;
function k() {
    return y.sZ.isClosed()
        ? (b.verbose("Socket is reconnecting because of starting new session"), y.sZ.connect())
        : (b.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
}
function U(e) {
    e.isSwitchingAccount && y.OV.handleAccountSwitch(), b.verbose("Closing socket because of logout"), y.sZ.close();
}
function G() {
    return (
        b.verbose("session refresh dispatched", { isEstablished: y.sZ.isSessionEstablished() }),
        !!y.sZ.isSessionEstablished() && (y.sZ.close(), y.sZ.connect())
    );
}
async function F(e) {
    (L = Date.now()), (w = e.sessionId), y.OV.handleConnectionOpen();
    let t = {},
        n = g.A.getVoiceChannelId();
    if (null != n) {
        let e = localStorage.getItem("discord_watchdog_restart_timestamp"),
            r = null != e && Date.now() - parseInt(e, 10) < 6e4;
        if (
            (localStorage.removeItem("discord_watchdog_restart_timestamp"),
            window?.performance?.getEntriesByType?.("navigation")?.[0]?.type === "reload" ||
                r ||
                (await O?.processUtils?.getLastCrash?.())?.rendererCrashReason != null ||
                !M)
        ) {
            let e = p.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, c.CX)(n));
        } else m.A.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null);
    }
    y.Xo.update(t, !0), (M = !1), (P = null);
}
function V() {
    b.verbose("connection closed dispatched"), (L = Date.now());
}
function B() {
    P = null;
}
function H(e) {
    return e.resetSocket && (y.sZ.close(), y.sZ.dispatcher.clear(), y.sZ.connect()), !1;
}
function j(e) {
    return (
        y.Xo.update({ guildId: e.guildId, channelId: e.channelId }),
        (P = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
        (0, T.isIOS)() &&
            x === C.g6G.BACKGROUND &&
            (null == e.channelId ? y.sZ.close(!0) : y.sZ.isClosed() && (v.V(!1), y.sZ.connect())),
        !1
    );
}
function Y() {
    y.Xo.update();
}
function W(e) {
    e.settings.type === R.oD.PRELOADED_USER_SETTINGS && e.settings.proto.clips?.allowVoiceRecording != null && Y();
}
function K(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (_.default.getId() !== t.userId) return e;
        if (t.sessionId === w) {
            if (null != P) return b.verbose("Ignoring voice state for own session due to VSU lock on channel:", P), e;
            y.Xo.setState({ guildId: t.guildId, channelId: t.channelId });
        } else {
            if (t.guildId !== y.Xo.guildId) return e;
            y.Xo.setState({ guildId: null, channelId: null });
        }
        return !0;
    }, !1);
}
function $(e) {
    e.guild.id === y.Xo.guildId && y.Xo.setState({ guildId: null, channelId: null });
}
function z(e) {
    let { channelId: t } = e;
    if (t === y.Xo.channelId) {
        if (P === t) return !1;
        y.Xo.setState({ guildId: null, channelId: null });
    }
}
function q(e) {
    let { channel: t } = e;
    t.id === y.Xo.channelId && y.Xo.setState({ guildId: null, channelId: null });
}
function Z(e) {
    if (e.state !== C.S7L.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? y.sZ.streamPing(e.streamKey) : y.sZ.voiceServerPing());
}
function X(e) {
    return (
        (0, T.isIOS)()
            ? (_.default.isAuthenticated() &&
                  (x === C.g6G.INACTIVE && e.state === C.g6G.BACKGROUND && null == y.Xo.channelId
                      ? y.sZ.close(!0)
                      : x === C.g6G.BACKGROUND &&
                        e.state === C.g6G.ACTIVE &&
                        y.sZ.isClosed() &&
                        (v.V(!1), y.sZ.connect())),
              (x = e.state))
            : e.state === C.g6G.ACTIVE &&
              (v.V(!1), _.default.isAuthenticated() && y.sZ.resetBackoff("App state is active")),
        !1
    );
}
function Q() {
    return y.Xo.update(), !1;
}
function J() {
    return y.OV.update(), !1;
}
function ee(e) {
    return (
        y.sZ.isSessionEstablished() &&
            ("userIds" in e
                ? i()(e.userIds)
                      .chunk(D)
                      .forEach((t) => {
                          y.sZ.requestGuildMembers(e.guildIds, { userIds: t, presences: !!e.presences });
                      })
                : y.sZ.requestGuildMembers(e.guildIds, { query: e.query, limit: e.limit, presences: !!e.presences })),
        !1
    );
}
function et(e) {
    let { guildId: t, query: n, continuationToken: r } = e;
    y.sZ.isSessionEstablished() && y.sZ.searchRecentMembers(t, { query: n, continuationToken: r });
}
function en(e) {
    let { subscriptions: t } = e;
    return y.sZ.isSessionEstablished() && y.sZ.updateGuildSubscriptions(t), !1;
}
function er(e) {
    let { channelId: t } = e;
    return y.sZ.isSessionEstablished() && y.sZ.callConnect(t), !1;
}
function ei(e) {
    let { channelIds: t } = e;
    return (
        y.sZ.isSessionEstablished() &&
            t.forEach((e) => {
                y.sZ.callConnect(e);
            }),
        !1
    );
}
function es(e) {
    let { sessionId: t, payload: n } = e;
    return y.sZ.isSessionEstablished() && y.sZ.remoteCommand(t, n), !1;
}
function ea(e) {
    y.sZ.isSessionEstablished() && y.sZ.streamDelete(e);
}
function eo() {
    let e = el();
    I.A.getAllActiveStreamKeys()
        .filter((t) => t !== e)
        .forEach((e) => ea(e));
}
function el() {
    return I.A.getAllActiveStreamKeys().find((e) => (0, u.Iy)(e).ownerId === _.default.getId());
}
function eu(e) {
    let { streamType: t, guildId: n, channelId: r } = e;
    if (y.sZ.isSessionEstablished()) {
        let e = null != n ? p.A.getChannel(r)?.rtcRegion : f.A.getCall(r)?.region;
        y.sZ.streamCreate(t, n, r, e ?? E.A.getPreferredRegion());
    }
    return !1;
}
function ec(e) {
    let { streamKey: t, paused: n } = e;
    y.sZ.isSessionEstablished() && y.sZ.streamSetPaused(t, n);
}
function ed(e) {
    let { streamKey: t, allowMultiple: n } = e;
    return y.sZ.isSessionEstablished() && (n || eo(), y.sZ.streamWatch(t)), !1;
}
function e_(e) {
    let { streamKey: t } = e;
    return ea(t), Y(), !1;
}
function ef() {
    return y.sZ.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
}
function ep(e) {
    let { guildId: t, channelId: n, threads: r } = e;
    y.sZ.requestForumUnreads(t, n, r);
}
function eh(e) {
    y.sZ.connectionState !== S.A.WILL_RECONNECT && y.sZ.resetSocketOnError(e.args);
}
function em(e) {
    let { guildIds: t } = e;
    y.sZ.requestSoundboardSounds(t);
}
class eE extends s.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(_.default, f.A, p.A, h.Ay, m.A, E.A, g.A, A.A, I.A, d.A),
            this.syncWith([h.Ay], Q),
            this.syncWith([A.A], J);
    }
    getSocket() {
        return y.sZ;
    }
    isTryingToConnect() {
        return !y.sZ.isClosed();
    }
    isConnected() {
        return y.sZ.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return y.sZ.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return L;
    }
}
let eg = new eE(a.h, {
    START_SESSION: k,
    LOGIN_SUCCESS: G,
    LOGOUT: U,
    CLEAR_CACHES: H,
    CONNECTION_OPEN: (e) => {
        F(e);
    },
    CONNECTION_RESUMED: B,
    CONNECTION_CLOSED: V,
    RTC_CONNECTION_STATE: Z,
    VOICE_CHANNEL_SELECT: j,
    VOICE_STATE_UPDATES: K,
    GUILD_DELETE: $,
    CHANNEL_DELETE: q,
    CALL_DELETE: z,
    APP_STATE_UPDATE: X,
    GUILD_MEMBERS_REQUEST: ee,
    GUILD_SEARCH_RECENT_MEMBERS: et,
    GUILD_SUBSCRIPTIONS_FLUSH: en,
    CALL_CONNECT: er,
    CALL_CONNECT_MULTIPLE: ei,
    STREAM_CREATE: Y,
    STREAM_START: eu,
    STREAM_WATCH: ed,
    STREAM_STOP: e_,
    STREAM_SET_PAUSED: ec,
    PUSH_NOTIFICATION_CLICK: ef,
    REQUEST_FORUM_UNREADS: ep,
    REQUEST_SOUNDBOARD_SOUNDS: em,
    REMOTE_COMMAND: es,
    RESET_SOCKET: eh,
    CLIPS_SETTINGS_UPDATE: Y,
    RUNNING_GAMES_CHANGE: Y,
    USER_SETTINGS_PROTO_UPDATE: W,
});
