"use strict";
n.d(t, { A: () => H });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(506774),
    o = n(73153),
    l = n(956793),
    u = n(626584),
    d = n(652896),
    c = n(796774),
    _ = n(617617),
    f = n(961350),
    E = n(470710),
    h = n(734057),
    p = n(430452),
    m = n(383501),
    g = n(873985),
    A = n(309010),
    I = n(461213),
    T = n(162605),
    S = n(723702),
    y = n(175306),
    N = n(531013),
    O = n(33282),
    R = n(448515),
    v = n(652215),
    C = n(355097);
let b = window.DiscordNative;
N.sZ.dispatcher.getDispatchHandler = R.A;
let D = new u.A("ConnectionStore"),
    L = 0,
    w = null,
    M = !0,
    P = null,
    U = null;
async function k(e) {
    (L = Date.now()), (w = e.sessionId), N.OV.handleConnectionOpen();
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
                !M)
        ) {
            let e = h.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, c.CX)(n));
        } else m.A.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
    }
    N.Xo.update(t, !0), (M = !1), (U = null);
}
function x() {
    N.Xo.update();
}
function G() {
    return N.Xo.update(), !1;
}
function V() {
    return N.OV.update(), !1;
}
function F(e) {
    N.sZ.isSessionEstablished() && N.sZ.streamDelete(e);
}
class B extends s.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(f.default, E.A, h.A, p.Ay, m.A, g.A, A.A, I.A, T.A, _.A),
            this.syncWith([p.Ay], G),
            this.syncWith([I.A], V);
    }
    getSocket() {
        return N.sZ;
    }
    isTryingToConnect() {
        return !N.sZ.isClosed();
    }
    isConnected() {
        return N.sZ.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return N.sZ.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return L;
    }
}
let H = new B(o.h, {
    START_SESSION: function () {
        return N.sZ.isClosed()
            ? (D.verbose("Socket is reconnecting because of starting new session"), N.sZ.connect())
            : (D.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
    },
    LOGIN_SUCCESS: function () {
        return (
            D.verbose("session refresh dispatched", { isEstablished: N.sZ.isSessionEstablished() }),
            !!N.sZ.isSessionEstablished() && (N.sZ.close(), N.sZ.connect())
        );
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount && N.OV.handleAccountSwitch(), D.verbose("Closing socket because of logout"), N.sZ.close();
    },
    CLEAR_CACHES: function (e) {
        return e.resetSocket && (N.sZ.close(), N.sZ.dispatcher.clear(), N.sZ.connect()), !1;
    },
    CONNECTION_OPEN: (e) => {
        k(e);
    },
    CONNECTION_RESUMED: function () {
        U = null;
    },
    CONNECTION_CLOSED: function () {
        D.verbose("connection closed dispatched"), (L = Date.now());
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== v.S7L.DISCONNECTED) return !1;
        e.willReconnect && (null != e.streamKey ? N.sZ.streamPing(e.streamKey) : N.sZ.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return (
            N.Xo.update({ guildId: e.guildId, channelId: e.channelId }),
            (U = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
            (0, S.isIOS)() &&
                P === v.g6G.BACKGROUND &&
                (null == e.channelId ? N.sZ.close(!0) : N.sZ.isClosed() && (O.V(!1), N.sZ.connect())),
            !1
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (f.default.getId() !== t.userId) return e;
            if (t.sessionId === w) {
                if (null != U)
                    return D.verbose("Ignoring voice state for own session due to VSU lock on channel:", U), e;
                N.Xo.setState({ guildId: t.guildId, channelId: t.channelId });
            } else {
                if (t.guildId !== N.Xo.guildId) return e;
                N.Xo.setState({ guildId: null, channelId: null });
            }
            return !0;
        }, !1);
    },
    GUILD_DELETE: function (e) {
        e.guild.id === N.Xo.guildId && N.Xo.setState({ guildId: null, channelId: null });
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        t.id === N.Xo.channelId && N.Xo.setState({ guildId: null, channelId: null });
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        if (t === N.Xo.channelId) {
            if (U === t) return !1;
            N.Xo.setState({ guildId: null, channelId: null });
        }
    },
    APP_STATE_UPDATE: function (e) {
        return (
            (0, S.isIOS)()
                ? (f.default.isAuthenticated() &&
                      (P === v.g6G.INACTIVE && e.state === v.g6G.BACKGROUND && null == N.Xo.channelId
                          ? N.sZ.close(!0)
                          : P === v.g6G.BACKGROUND &&
                            e.state === v.g6G.ACTIVE &&
                            N.sZ.isClosed() &&
                            (O.V(!1), N.sZ.connect())),
                  (P = e.state))
                : e.state === v.g6G.ACTIVE &&
                  (O.V(!1), f.default.isAuthenticated() && N.sZ.resetBackoff("App state is active")),
            !1
        );
    },
    GUILD_MEMBERS_REQUEST: function (e) {
        return (
            N.sZ.isSessionEstablished() &&
                ("userIds" in e
                    ? i()(e.userIds)
                          .chunk(100)
                          .forEach((t) => {
                              N.sZ.requestGuildMembers(e.guildIds, { userIds: t, presences: !!e.presences });
                          })
                    : N.sZ.requestGuildMembers(e.guildIds, {
                          query: e.query,
                          limit: e.limit,
                          presences: !!e.presences,
                      })),
            !1
        );
    },
    GUILD_SEARCH_RECENT_MEMBERS: function (e) {
        let { guildId: t, query: n, continuationToken: r } = e;
        N.sZ.isSessionEstablished() && N.sZ.searchRecentMembers(t, { query: n, continuationToken: r });
    },
    GUILD_SUBSCRIPTIONS_FLUSH: function (e) {
        let { subscriptions: t } = e;
        return N.sZ.isSessionEstablished() && N.sZ.updateGuildSubscriptions(t), !1;
    },
    CALL_CONNECT: function (e) {
        let { channelId: t } = e;
        return N.sZ.isSessionEstablished() && N.sZ.callConnect(t), !1;
    },
    CALL_CONNECT_MULTIPLE: function (e) {
        let { channelIds: t } = e;
        return (
            N.sZ.isSessionEstablished() &&
                t.forEach((e) => {
                    N.sZ.callConnect(e);
                }),
            !1
        );
    },
    STREAM_CREATE: x,
    STREAM_START: function (e) {
        let { streamType: t, guildId: n, channelId: r } = e;
        if (N.sZ.isSessionEstablished()) {
            let e = null != n ? h.A.getChannel(r)?.rtcRegion : E.A.getCall(r)?.region;
            N.sZ.streamCreate(t, n, r, e ?? g.A.getPreferredRegion());
        }
        return !1;
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t, allowMultiple: n } = e;
        if (N.sZ.isSessionEstablished()) {
            if (n);
            else {
                let e;
                (e = T.A.getAllActiveStreamKeys().find((e) => (0, d.Iy)(e).ownerId === f.default.getId())),
                    T.A.getAllActiveStreamKeys()
                        .filter((t) => t !== e)
                        .forEach((e) => F(e));
            }
            N.sZ.streamWatch(t);
        }
        return !1;
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        return F(t), x(), !1;
    },
    STREAM_SET_PAUSED: function (e) {
        let { streamKey: t, paused: n } = e;
        N.sZ.isSessionEstablished() && N.sZ.streamSetPaused(t, n);
    },
    PUSH_NOTIFICATION_CLICK: function () {
        return N.sZ.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { guildId: t, channelId: n, threads: r } = e;
        N.sZ.requestForumUnreads(t, n, r);
    },
    REQUEST_SOUNDBOARD_SOUNDS: function (e) {
        let { guildIds: t } = e;
        N.sZ.requestSoundboardSounds(t);
    },
    REMOTE_COMMAND: function (e) {
        let { sessionId: t, payload: n } = e;
        return N.sZ.isSessionEstablished() && N.sZ.remoteCommand(t, n), !1;
    },
    RESET_SOCKET: function (e) {
        N.sZ.connectionState !== y.A.WILL_RECONNECT && N.sZ.resetSocketAndClearCacheOnError(e.args);
    },
    CLIPS_SETTINGS_UPDATE: x,
    RUNNING_GAMES_CHANGE: x,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        e.settings.type === C.oD.PRELOADED_USER_SETTINGS && e.settings.proto.clips?.allowVoiceRecording != null && x();
    },
});
