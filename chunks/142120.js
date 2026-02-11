"use strict";
n.d(t, { A: () => eA });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(956793),
    l = n(626584),
    u = n(652896),
    c = n(796774),
    d = n(617617),
    _ = n(961350),
    f = n(470710),
    h = n(734057),
    p = n(430452),
    g = n(383501),
    E = n(873985),
    A = n(309010),
    I = n(461213),
    T = n(162605),
    y = n(723702),
    S = n(175306),
    v = n(531013),
    C = n(33282),
    b = n(448515),
    N = n(652215),
    R = n(355097);
let O = window.DiscordNative;
v.sZ.dispatcher.getDispatchHandler = b.A;
let D = new l.A("ConnectionStore"),
    L = 100,
    w = 0,
    x = null,
    P = !0,
    M = null,
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
    (w = Date.now()), (x = e.sessionId), v.OV.handleConnectionOpen();
    let t = {},
        n = A.A.getVoiceChannelId();
    if (null != n)
        if (
            window?.performance?.getEntriesByType?.("navigation")?.[0]?.type !== "reload" &&
            (await O?.processUtils?.getLastCrash?.())?.rendererCrashReason == null &&
            P
        )
            g.A.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null);
        else {
            let e = h.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, c.CX)(n));
        }
    v.Xo.update(t, !0), (P = !1), (k = null);
}
function B() {
    D.verbose("connection closed dispatched"), (w = Date.now());
}
function j() {
    k = null;
}
function H(e) {
    return e.resetSocket && (v.sZ.close(), v.sZ.dispatcher.clear(), v.sZ.connect()), !1;
}
function Y(e) {
    return (
        v.Xo.update({ guildId: e.guildId, channelId: e.channelId }),
        (k = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
        (0, y.isIOS)() &&
            M === N.g6G.BACKGROUND &&
            (null == e.channelId ? v.sZ.close(!0) : v.sZ.isClosed() && (C.V(!1), v.sZ.connect())),
        !1
    );
}
function W() {
    v.Xo.update();
}
function K(e) {
    e.settings.type === R.oD.PRELOADED_USER_SETTINGS && e.settings.proto.clips?.allowVoiceRecording != null && W();
}
function $(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (_.default.getId() !== t.userId) return e;
        if (t.sessionId === x) {
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
function X(e) {
    let { channel: t } = e;
    t.id === v.Xo.channelId && v.Xo.setState({ guildId: null, channelId: null });
}
function Z(e) {
    if (e.state !== N.S7L.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? v.sZ.streamPing(e.streamKey) : v.sZ.voiceServerPing());
}
function Q(e) {
    return (
        (0, y.isIOS)()
            ? (_.default.isAuthenticated() &&
                  (M === N.g6G.INACTIVE && e.state === N.g6G.BACKGROUND && null == v.Xo.channelId
                      ? v.sZ.close(!0)
                      : M === N.g6G.BACKGROUND &&
                        e.state === N.g6G.ACTIVE &&
                        v.sZ.isClosed() &&
                        (C.V(!1), v.sZ.connect())),
              (M = e.state))
            : e.state === N.g6G.ACTIVE &&
              (C.V(!1), _.default.isAuthenticated() && v.sZ.resetBackoff("App state is active")),
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
function ea(e) {
    let { channelIds: t } = e;
    return (
        v.sZ.isSessionEstablished() &&
            t.forEach((e) => {
                v.sZ.callConnect(e);
            }),
        !1
    );
}
function es(e) {
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
    return T.A.getAllActiveStreamKeys().find((e) => (0, u.Iy)(e).ownerId === _.default.getId());
}
function ec(e) {
    let { streamType: t, guildId: n, channelId: r } = e;
    if (v.sZ.isSessionEstablished()) {
        let e = null != n ? h.A.getChannel(r)?.rtcRegion : f.A.getCall(r)?.region;
        v.sZ.streamCreate(t, n, r, e ?? E.A.getPreferredRegion());
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
function eh() {
    return v.sZ.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
}
function ep(e) {
    let { guildId: t, channelId: n, threads: r } = e;
    v.sZ.requestForumUnreads(t, n, r);
}
function em(e) {
    v.sZ.connectionState !== S.A.WILL_RECONNECT && v.sZ.resetSocketOnError(e.args);
}
function eg(e) {
    let { guildIds: t } = e;
    v.sZ.requestSoundboardSounds(t);
}
class eE extends a.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(_.default, f.A, h.A, p.Ay, g.A, E.A, A.A, I.A, T.A, d.A),
            this.syncWith([p.Ay], J),
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
let eA = new eE(s.h, {
    START_SESSION: U,
    LOGIN_SUCCESS: F,
    LOGOUT: G,
    CLEAR_CACHES: H,
    CONNECTION_OPEN: (e) => {
        V(e);
    },
    CONNECTION_RESUMED: j,
    CONNECTION_CLOSED: B,
    RTC_CONNECTION_STATE: Z,
    VOICE_CHANNEL_SELECT: Y,
    VOICE_STATE_UPDATES: $,
    GUILD_DELETE: z,
    CHANNEL_DELETE: X,
    CALL_DELETE: q,
    APP_STATE_UPDATE: Q,
    GUILD_MEMBERS_REQUEST: et,
    GUILD_SEARCH_RECENT_MEMBERS: en,
    GUILD_SUBSCRIPTIONS_FLUSH: er,
    CALL_CONNECT: ei,
    CALL_CONNECT_MULTIPLE: ea,
    STREAM_CREATE: W,
    STREAM_START: ec,
    STREAM_WATCH: e_,
    STREAM_STOP: ef,
    STREAM_SET_PAUSED: ed,
    PUSH_NOTIFICATION_CLICK: eh,
    REQUEST_FORUM_UNREADS: ep,
    REQUEST_SOUNDBOARD_SOUNDS: eg,
    REMOTE_COMMAND: es,
    RESET_SOCKET: em,
    CLIPS_SETTINGS_UPDATE: W,
    RUNNING_GAMES_CHANGE: W,
    USER_SETTINGS_PROTO_UPDATE: K,
});
