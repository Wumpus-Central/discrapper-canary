n.d(t, {
    A: () => ey,
});
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(956793),
    c = n(626584),
    u = n(652896),
    d = n(796774),
    f = n(617617),
    p = n(961350),
    _ = n(470710),
    h = n(734057),
    m = n(430452),
    g = n(383501),
    E = n(873985),
    b = n(309010),
    y = n(461213),
    O = n(162605),
    A = n(723702),
    v = n(175306),
    S = n(531013),
    I = n(33282),
    T = n(448515),
    C = n(652215),
    N = n(355097);

function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let w = window.DiscordNative;
S.sZ.dispatcher.getDispatchHandler = T.A;
let P = new c.A("ConnectionStore"),
    D = 100,
    x = 0,
    L = null,
    j = !0,
    M = null,
    k = null;

function U() {
    return S.sZ.isClosed()
        ? (P.verbose("Socket is reconnecting because of starting new session"), S.sZ.connect())
        : (P.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
}

function G(e) {
    e.isSwitchingAccount && S.OV.handleAccountSwitch(), P.verbose("Closing socket because of logout"), S.sZ.close();
}

function V() {
    return (
        P.verbose("session refresh dispatched", {
            isEstablished: S.sZ.isSessionEstablished(),
        }),
        !!S.sZ.isSessionEstablished() && (S.sZ.close(), S.sZ.connect())
    );
}
async function F(e) {
    (x = Date.now()), (L = e.sessionId), S.OV.handleConnectionOpen();
    let t = {},
        n = b.A.getVoiceChannelId();
    if (null != n) {
        var r, i, a, s, o, c, u, f;
        if (
            (null == (o = window) ||
            null == (s = o.performance) ||
            null == (a = s.getEntriesByType) ||
            null == (i = a.call(s, "navigation")) ||
            null == (r = i[0])
                ? void 0
                : r.type) !== "reload" &&
            (null ==
            (c = await (null == w || null == (f = w.processUtils) || null == (u = f.getLastCrash) ? void 0 : u.call(f)))
                ? void 0
                : c.rendererCrashReason) == null &&
            j
        )
            g.A.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
        else {
            let e = h.A.getChannel(n);
            null != e &&
                ((t = {
                    guildId: e.getGuildId(),
                    channelId: n,
                }),
                (0, d.CX)(n));
        }
    }
    S.Xo.update(t, !0), (j = !1), (k = null);
}

function B() {
    P.verbose("connection closed dispatched"), (x = Date.now());
}

function H() {
    k = null;
}

function Y(e) {
    return e.resetSocket && (S.sZ.close(), S.sZ.dispatcher.clear(), S.sZ.connect()), !1;
}

function W(e) {
    return (
        S.Xo.update({
            guildId: e.guildId,
            channelId: e.channelId,
        }),
        (k = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
        (0, A.isIOS)() &&
            M === C.g6G.BACKGROUND &&
            (null == e.channelId ? S.sZ.close(!0) : S.sZ.isClosed() && (I.V(!1), S.sZ.connect())),
        !1
    );
}

function K() {
    S.Xo.update();
}

function z(e) {
    var t;
    e.settings.type === N.oD.PRELOADED_USER_SETTINGS &&
        (null == (t = e.settings.proto.clips) ? void 0 : t.allowVoiceRecording) != null &&
        K();
}

function q(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (p.default.getId() !== t.userId) return e;
        if (t.sessionId === L) {
            if (null != k) return P.verbose("Ignoring voice state for own session due to VSU lock on channel:", k), e;
            S.Xo.setState({
                guildId: t.guildId,
                channelId: t.channelId,
            });
        } else {
            if (t.guildId !== S.Xo.guildId) return e;
            S.Xo.setState({
                guildId: null,
                channelId: null,
            });
        }
        return !0;
    }, !1);
}

function X(e) {
    e.guild.id === S.Xo.guildId &&
        S.Xo.setState({
            guildId: null,
            channelId: null,
        });
}

function Z(e) {
    let { channelId: t } = e;
    if (t === S.Xo.channelId) {
        if (k === t) return !1;
        S.Xo.setState({
            guildId: null,
            channelId: null,
        });
    }
}

function Q(e) {
    let { channel: t } = e;
    t.id === S.Xo.channelId &&
        S.Xo.setState({
            guildId: null,
            channelId: null,
        });
}

function $(e) {
    if (e.state !== C.S7L.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? S.sZ.streamPing(e.streamKey) : S.sZ.voiceServerPing());
}

function J(e) {
    return (
        (0, A.isIOS)()
            ? (p.default.isAuthenticated() &&
                  (M === C.g6G.INACTIVE && e.state === C.g6G.BACKGROUND && null == S.Xo.channelId
                      ? S.sZ.close(!0)
                      : M === C.g6G.BACKGROUND &&
                        e.state === C.g6G.ACTIVE &&
                        S.sZ.isClosed() &&
                        (I.V(!1), S.sZ.connect())),
              (M = e.state))
            : e.state === C.g6G.ACTIVE &&
              (I.V(!1), p.default.isAuthenticated() && S.sZ.resetBackoff("App state is active")),
        !1
    );
}

function ee() {
    return S.Xo.update(), !1;
}

function et() {
    return S.OV.update(), !1;
}

function en(e) {
    return (
        S.sZ.isSessionEstablished() &&
            ("userIds" in e
                ? a()(e.userIds)
                      .chunk(D)
                      .forEach((t) => {
                          S.sZ.requestGuildMembers(e.guildIds, {
                              userIds: t,
                              presences: !!e.presences,
                          });
                      })
                : S.sZ.requestGuildMembers(e.guildIds, {
                      query: e.query,
                      limit: e.limit,
                      presences: !!e.presences,
                  })),
        !1
    );
}

function er(e) {
    let { guildId: t, query: n, continuationToken: r } = e;
    S.sZ.isSessionEstablished() &&
        S.sZ.searchRecentMembers(t, {
            query: n,
            continuationToken: r,
        });
}

function ei(e) {
    let { subscriptions: t } = e;
    return S.sZ.isSessionEstablished() && S.sZ.updateGuildSubscriptions(t), !1;
}

function ea(e) {
    let { channelId: t } = e;
    return S.sZ.isSessionEstablished() && S.sZ.callConnect(t), !1;
}

function es(e) {
    let { channelIds: t } = e;
    return (
        S.sZ.isSessionEstablished() &&
            t.forEach((e) => {
                S.sZ.callConnect(e);
            }),
        !1
    );
}

function eo(e) {
    let { sessionId: t, payload: n } = e;
    return S.sZ.isSessionEstablished() && S.sZ.remoteCommand(t, n), !1;
}

function el(e) {
    S.sZ.isSessionEstablished() && S.sZ.streamDelete(e);
}

function ec() {
    let e = eu();
    O.A.getAllActiveStreamKeys()
        .filter((t) => t !== e)
        .forEach((e) => el(e));
}

function eu() {
    return O.A.getAllActiveStreamKeys().find((e) => (0, u.Iy)(e).ownerId === p.default.getId());
}

function ed(e) {
    let { streamType: t, guildId: n, channelId: r } = e;
    if (S.sZ.isSessionEstablished()) {
        var i, a;
        let e =
            null != n
                ? null == (i = h.A.getChannel(r))
                    ? void 0
                    : i.rtcRegion
                : null == (a = _.A.getCall(r))
                  ? void 0
                  : a.region;
        S.sZ.streamCreate(t, n, r, null != e ? e : E.A.getPreferredRegion());
    }
    return !1;
}

function ef(e) {
    let { streamKey: t, paused: n } = e;
    S.sZ.isSessionEstablished() && S.sZ.streamSetPaused(t, n);
}

function ep(e) {
    let { streamKey: t, allowMultiple: n } = e;
    return S.sZ.isSessionEstablished() && (n || ec(), S.sZ.streamWatch(t)), !1;
}

function e_(e) {
    let { streamKey: t } = e;
    return el(t), K(), !1;
}

function eh() {
    return S.sZ.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
}

function em(e) {
    let { guildId: t, channelId: n, threads: r } = e;
    S.sZ.requestForumUnreads(t, n, r);
}

function eg(e) {
    S.sZ.connectionState !== v.A.WILL_RECONNECT && S.sZ.resetSocketOnError(e.args);
}

function eE(e) {
    let { guildIds: t } = e;
    S.sZ.requestSoundboardSounds(t);
}
class eb extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(p.default, _.A, h.A, m.A, g.A, E.A, b.A, y.A, O.A, f.A),
            this.syncWith([m.A], ee),
            this.syncWith([y.A], et);
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
        return x;
    }
}
R(eb, "displayName", "GatewayConnectionStore");
let ey = new eb(o.h, {
    START_SESSION: U,
    LOGIN_SUCCESS: V,
    LOGOUT: G,
    CLEAR_CACHES: Y,
    CONNECTION_OPEN: (e) => {
        F(e);
    },
    CONNECTION_RESUMED: H,
    CONNECTION_CLOSED: B,
    RTC_CONNECTION_STATE: $,
    VOICE_CHANNEL_SELECT: W,
    VOICE_STATE_UPDATES: q,
    GUILD_DELETE: X,
    CHANNEL_DELETE: Q,
    CALL_DELETE: Z,
    APP_STATE_UPDATE: J,
    GUILD_MEMBERS_REQUEST: en,
    GUILD_SEARCH_RECENT_MEMBERS: er,
    GUILD_SUBSCRIPTIONS_FLUSH: ei,
    CALL_CONNECT: ea,
    CALL_CONNECT_MULTIPLE: es,
    STREAM_CREATE: K,
    STREAM_START: ed,
    STREAM_WATCH: ep,
    STREAM_STOP: e_,
    STREAM_SET_PAUSED: ef,
    PUSH_NOTIFICATION_CLICK: eh,
    REQUEST_FORUM_UNREADS: em,
    REQUEST_SOUNDBOARD_SOUNDS: eE,
    REMOTE_COMMAND: eo,
    RESET_SOCKET: eg,
    CLIPS_SETTINGS_UPDATE: K,
    RUNNING_GAMES_CHANGE: K,
    USER_SETTINGS_PROTO_UPDATE: z,
});
