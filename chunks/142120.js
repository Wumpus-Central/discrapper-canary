"use strict";
n.d(t, { A: () => eE });
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
    p = n(734057),
    h = n(430452),
    m = n(383501),
    g = n(873985),
    E = n(309010),
    A = n(461213),
    I = n(162605),
    T = n(723702),
    y = n(175306),
    S = n(531013),
    v = n(33282),
    C = n(448515),
    b = n(652215),
    N = n(355097);
let R = window.DiscordNative;
S.sZ.dispatcher.getDispatchHandler = C.A;
let O = new l.A("ConnectionStore"),
    D = 100,
    L = 0,
    w = null,
    x = !0,
    P = null,
    M = null;
function k() {
    return S.sZ.isClosed()
        ? (O.verbose("Socket is reconnecting because of starting new session"), S.sZ.connect())
        : (O.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
}
function U(e) {
    e.isSwitchingAccount && S.OV.handleAccountSwitch(), O.verbose("Closing socket because of logout"), S.sZ.close();
}
function G() {
    return (
        O.verbose("session refresh dispatched", { isEstablished: S.sZ.isSessionEstablished() }),
        !!S.sZ.isSessionEstablished() && (S.sZ.close(), S.sZ.connect())
    );
}
async function V(e) {
    (L = Date.now()), (w = e.sessionId), S.OV.handleConnectionOpen();
    let t = {},
        n = E.A.getVoiceChannelId();
    if (null != n)
        if (
            window?.performance?.getEntriesByType?.("navigation")?.[0]?.type !== "reload" &&
            (await R?.processUtils?.getLastCrash?.())?.rendererCrashReason == null &&
            x
        )
            m.A.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null);
        else {
            let e = p.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, c.CX)(n));
        }
    S.Xo.update(t, !0), (x = !1), (M = null);
}
function F() {
    O.verbose("connection closed dispatched"), (L = Date.now());
}
function B() {
    M = null;
}
function j(e) {
    return e.resetSocket && (S.sZ.close(), S.sZ.dispatcher.clear(), S.sZ.connect()), !1;
}
function H(e) {
    return (
        S.Xo.update({ guildId: e.guildId, channelId: e.channelId }),
        (M = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
        (0, T.isIOS)() &&
            P === b.g6G.BACKGROUND &&
            (null == e.channelId ? S.sZ.close(!0) : S.sZ.isClosed() && (v.V(!1), S.sZ.connect())),
        !1
    );
}
function Y() {
    S.Xo.update();
}
function W(e) {
    e.settings.type === N.oD.PRELOADED_USER_SETTINGS && e.settings.proto.clips?.allowVoiceRecording != null && Y();
}
function K(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (_.default.getId() !== t.userId) return e;
        if (t.sessionId === w) {
            if (null != M) return O.verbose("Ignoring voice state for own session due to VSU lock on channel:", M), e;
            S.Xo.setState({ guildId: t.guildId, channelId: t.channelId });
        } else {
            if (t.guildId !== S.Xo.guildId) return e;
            S.Xo.setState({ guildId: null, channelId: null });
        }
        return !0;
    }, !1);
}
function z(e) {
    e.guild.id === S.Xo.guildId && S.Xo.setState({ guildId: null, channelId: null });
}
function $(e) {
    let { channelId: t } = e;
    if (t === S.Xo.channelId) {
        if (M === t) return !1;
        S.Xo.setState({ guildId: null, channelId: null });
    }
}
function q(e) {
    let { channel: t } = e;
    t.id === S.Xo.channelId && S.Xo.setState({ guildId: null, channelId: null });
}
function Z(e) {
    if (e.state !== b.S7L.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? S.sZ.streamPing(e.streamKey) : S.sZ.voiceServerPing());
}
function Q(e) {
    return (
        (0, T.isIOS)()
            ? (_.default.isAuthenticated() &&
                  (P === b.g6G.INACTIVE && e.state === b.g6G.BACKGROUND && null == S.Xo.channelId
                      ? S.sZ.close(!0)
                      : P === b.g6G.BACKGROUND &&
                        e.state === b.g6G.ACTIVE &&
                        S.sZ.isClosed() &&
                        (v.V(!1), S.sZ.connect())),
              (P = e.state))
            : e.state === b.g6G.ACTIVE &&
              (v.V(!1), _.default.isAuthenticated() && S.sZ.resetBackoff("App state is active")),
        !1
    );
}
function X() {
    return S.Xo.update(), !1;
}
function J() {
    return S.OV.update(), !1;
}
function ee(e) {
    return (
        S.sZ.isSessionEstablished() &&
            ("userIds" in e
                ? i()(e.userIds)
                      .chunk(D)
                      .forEach((t) => {
                          S.sZ.requestGuildMembers(e.guildIds, { userIds: t, presences: !!e.presences });
                      })
                : S.sZ.requestGuildMembers(e.guildIds, { query: e.query, limit: e.limit, presences: !!e.presences })),
        !1
    );
}
function et(e) {
    let { guildId: t, query: n, continuationToken: r } = e;
    S.sZ.isSessionEstablished() && S.sZ.searchRecentMembers(t, { query: n, continuationToken: r });
}
function en(e) {
    let { subscriptions: t } = e;
    return S.sZ.isSessionEstablished() && S.sZ.updateGuildSubscriptions(t), !1;
}
function er(e) {
    let { channelId: t } = e;
    return S.sZ.isSessionEstablished() && S.sZ.callConnect(t), !1;
}
function ei(e) {
    let { channelIds: t } = e;
    return (
        S.sZ.isSessionEstablished() &&
            t.forEach((e) => {
                S.sZ.callConnect(e);
            }),
        !1
    );
}
function ea(e) {
    let { sessionId: t, payload: n } = e;
    return S.sZ.isSessionEstablished() && S.sZ.remoteCommand(t, n), !1;
}
function es(e) {
    S.sZ.isSessionEstablished() && S.sZ.streamDelete(e);
}
function eo() {
    let e = el();
    I.A.getAllActiveStreamKeys()
        .filter((t) => t !== e)
        .forEach((e) => es(e));
}
function el() {
    return I.A.getAllActiveStreamKeys().find((e) => (0, u.Iy)(e).ownerId === _.default.getId());
}
function eu(e) {
    let { streamType: t, guildId: n, channelId: r } = e;
    if (S.sZ.isSessionEstablished()) {
        let e = null != n ? p.A.getChannel(r)?.rtcRegion : f.A.getCall(r)?.region;
        S.sZ.streamCreate(t, n, r, e ?? g.A.getPreferredRegion());
    }
    return !1;
}
function ec(e) {
    let { streamKey: t, paused: n } = e;
    S.sZ.isSessionEstablished() && S.sZ.streamSetPaused(t, n);
}
function ed(e) {
    let { streamKey: t, allowMultiple: n } = e;
    return S.sZ.isSessionEstablished() && (n || eo(), S.sZ.streamWatch(t)), !1;
}
function e_(e) {
    let { streamKey: t } = e;
    return es(t), Y(), !1;
}
function ef() {
    return S.sZ.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
}
function ep(e) {
    let { guildId: t, channelId: n, threads: r } = e;
    S.sZ.requestForumUnreads(t, n, r);
}
function eh(e) {
    S.sZ.connectionState !== y.A.WILL_RECONNECT && S.sZ.resetSocketOnError(e.args);
}
function em(e) {
    let { guildIds: t } = e;
    S.sZ.requestSoundboardSounds(t);
}
class eg extends a.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(_.default, f.A, p.A, h.A, m.A, g.A, E.A, A.A, I.A, d.A),
            this.syncWith([h.A], X),
            this.syncWith([A.A], J);
    }
    getSocket() {
        return S.sZ;
    }
    isTryingToConnect() {
        return !S.sZ.isClosed();
    }
    isConnected() {
        return S.sZ.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return S.sZ.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return L;
    }
}
let eE = new eg(s.h, {
    START_SESSION: k,
    LOGIN_SUCCESS: G,
    LOGOUT: U,
    CLEAR_CACHES: j,
    CONNECTION_OPEN: (e) => {
        V(e);
    },
    CONNECTION_RESUMED: B,
    CONNECTION_CLOSED: F,
    RTC_CONNECTION_STATE: Z,
    VOICE_CHANNEL_SELECT: H,
    VOICE_STATE_UPDATES: K,
    GUILD_DELETE: z,
    CHANNEL_DELETE: q,
    CALL_DELETE: $,
    APP_STATE_UPDATE: Q,
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
    REMOTE_COMMAND: ea,
    RESET_SOCKET: eh,
    CLIPS_SETTINGS_UPDATE: Y,
    RUNNING_GAMES_CHANGE: Y,
    USER_SETTINGS_PROTO_UPDATE: W,
});
