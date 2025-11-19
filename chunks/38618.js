n.d(t, { Z: () => ey });
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(287734),
    c = n(710845),
    u = n(569545),
    d = n(208049),
    f = n(581883),
    _ = n(314897),
    p = n(523746),
    h = n(592125),
    m = n(131951),
    g = n(19780),
    E = n(936349),
    b = n(944486),
    y = n(885110),
    O = n(959457),
    v = n(358085),
    I = n(138859),
    T = n(955132),
    S = n(645436),
    A = n(344651),
    C = n(981631),
    N = n(526761);
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
let P = window.DiscordNative;
T.Wb.dispatcher.getDispatchHandler = A.Z;
let D = new c.Z("ConnectionStore"),
    w = 100,
    L = 0,
    x = null,
    M = !0,
    j = null,
    k = null;
function U() {
    return T.Wb.isClosed()
        ? (D.verbose("Socket is reconnecting because of starting new session"), T.Wb.connect())
        : (D.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
}
function G(e) {
    e.isSwitchingAccount && T.RR.handleAccountSwitch(), D.verbose("Closing socket because of logout"), T.Wb.close();
}
function B() {
    return (
        D.verbose("session refresh dispatched", { isEstablished: T.Wb.isSessionEstablished() }),
        !!T.Wb.isSessionEstablished() && (T.Wb.close(), T.Wb.connect())
    );
}
async function Z(e) {
    (L = Date.now()), (x = e.sessionId), T.RR.handleConnectionOpen();
    let t = {},
        n = b.Z.getVoiceChannelId();
    if (null != n) {
        var r, i, a, o, s, c, u, f;
        if (
            (null == (s = window) ||
            null == (o = s.performance) ||
            null == (a = o.getEntriesByType) ||
            null == (i = a.call(o, "navigation")) ||
            null == (r = i[0])
                ? void 0
                : r.type) !== "reload" &&
            (null ==
            (c = await (null == P || null == (f = P.processUtils) || null == (u = f.getLastCrash) ? void 0 : u.call(f)))
                ? void 0
                : c.rendererCrashReason) == null &&
            M
        )
            g.Z.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
        else {
            let e = h.Z.getChannel(n);
            null != e &&
                ((t = {
                    guildId: e.getGuildId(),
                    channelId: n,
                }),
                (0, d.Db)(n));
        }
    }
    T.GC.update(t, !0), (M = !1), (k = null);
}
function F() {
    D.verbose("connection closed dispatched"), (L = Date.now());
}
function V() {
    k = null;
}
function H(e) {
    return e.resetSocket && (T.Wb.close(), T.Wb.dispatcher.clear(), T.Wb.connect()), !1;
}
function Y(e) {
    return (
        T.GC.update({
            guildId: e.guildId,
            channelId: e.channelId,
        }),
        (k = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
        (0, v.isIOS)() &&
            j === C.$7l.BACKGROUND &&
            (null == e.channelId ? T.Wb.close(!0) : T.Wb.isClosed() && (S.Y(!1), T.Wb.connect())),
        !1
    );
}
function W() {
    T.GC.update();
}
function K(e) {
    var t;
    e.settings.type === N.yP.PRELOADED_USER_SETTINGS &&
        (null == (t = e.settings.proto.clips) ? void 0 : t.allowVoiceRecording) != null &&
        W();
}
function z(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (_.default.getId() !== t.userId) return e;
        if (t.sessionId === x) {
            if (null != k) return D.verbose("Ignoring voice state for own session due to VSU lock on channel:", k), e;
            T.GC.setState({
                guildId: t.guildId,
                channelId: t.channelId,
            });
        } else {
            if (t.guildId !== T.GC.guildId) return e;
            T.GC.setState({
                guildId: null,
                channelId: null,
            });
        }
        return !0;
    }, !1);
}
function q(e) {
    e.guild.id === T.GC.guildId &&
        T.GC.setState({
            guildId: null,
            channelId: null,
        });
}
function X(e) {
    let { channelId: t } = e;
    if (t === T.GC.channelId) {
        if (k === t) return !1;
        T.GC.setState({
            guildId: null,
            channelId: null,
        });
    }
}
function Q(e) {
    let { channel: t } = e;
    t.id === T.GC.channelId &&
        T.GC.setState({
            guildId: null,
            channelId: null,
        });
}
function J(e) {
    if (e.state !== C.hes.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? T.Wb.streamPing(e.streamKey) : T.Wb.voiceServerPing());
}
function $(e) {
    return (
        (0, v.isIOS)()
            ? (_.default.isAuthenticated() &&
                  (j === C.$7l.INACTIVE && e.state === C.$7l.BACKGROUND && null == T.GC.channelId
                      ? T.Wb.close(!0)
                      : j === C.$7l.BACKGROUND &&
                        e.state === C.$7l.ACTIVE &&
                        T.Wb.isClosed() &&
                        (S.Y(!1), T.Wb.connect())),
              (j = e.state))
            : e.state === C.$7l.ACTIVE &&
              (S.Y(!1), _.default.isAuthenticated() && T.Wb.resetBackoff("App state is active")),
        !1
    );
}
function ee() {
    return T.GC.update(), !1;
}
function et() {
    return T.RR.update(), !1;
}
function en(e) {
    return (
        T.Wb.isSessionEstablished() &&
            ("userIds" in e
                ? a()(e.userIds)
                      .chunk(w)
                      .forEach((t) => {
                          T.Wb.requestGuildMembers(e.guildIds, {
                              userIds: t,
                              presences: !!e.presences,
                          });
                      })
                : T.Wb.requestGuildMembers(e.guildIds, {
                      query: e.query,
                      limit: e.limit,
                      presences: !!e.presences,
                  })),
        !1
    );
}
function er(e) {
    let { guildId: t, query: n, continuationToken: r } = e;
    T.Wb.isSessionEstablished() &&
        T.Wb.searchRecentMembers(t, {
            query: n,
            continuationToken: r,
        });
}
function ei(e) {
    let { subscriptions: t } = e;
    return T.Wb.isSessionEstablished() && T.Wb.updateGuildSubscriptions(t), !1;
}
function ea(e) {
    let { channelId: t } = e;
    return T.Wb.isSessionEstablished() && T.Wb.callConnect(t), !1;
}
function eo(e) {
    let { channelIds: t } = e;
    return (
        T.Wb.isSessionEstablished() &&
            t.forEach((e) => {
                T.Wb.callConnect(e);
            }),
        !1
    );
}
function es(e) {
    let { sessionId: t, payload: n } = e;
    return T.Wb.isSessionEstablished() && T.Wb.remoteCommand(t, n), !1;
}
function el(e) {
    T.Wb.isSessionEstablished() && T.Wb.streamDelete(e);
}
function ec() {
    let e = eu();
    O.Z.getAllActiveStreamKeys()
        .filter((t) => t !== e)
        .forEach((e) => el(e));
}
function eu() {
    return O.Z.getAllActiveStreamKeys().find((e) => (0, u.my)(e).ownerId === _.default.getId());
}
function ed(e) {
    let { streamType: t, guildId: n, channelId: r } = e;
    if (T.Wb.isSessionEstablished()) {
        var i, a;
        let e =
            null != n
                ? null == (i = h.Z.getChannel(r))
                    ? void 0
                    : i.rtcRegion
                : null == (a = p.Z.getCall(r))
                  ? void 0
                  : a.region;
        T.Wb.streamCreate(t, n, r, null != e ? e : E.Z.getPreferredRegion());
    }
    return !1;
}
function ef(e) {
    let { streamKey: t, paused: n } = e;
    T.Wb.isSessionEstablished() && T.Wb.streamSetPaused(t, n);
}
function e_(e) {
    let { streamKey: t, allowMultiple: n } = e;
    return T.Wb.isSessionEstablished() && (n || ec(), T.Wb.streamWatch(t)), !1;
}
function ep(e) {
    let { streamKey: t } = e;
    return el(t), W(), !1;
}
function eh() {
    return T.Wb.expeditedHeartbeat(5000, "user clicked on notification", !0), !1;
}
function em(e) {
    let { guildId: t, channelId: n, threads: r } = e;
    T.Wb.requestForumUnreads(t, n, r);
}
function eg(e) {
    T.Wb.connectionState !== I.Z.WILL_RECONNECT && T.Wb.resetSocketOnError(e.args);
}
function eE(e) {
    let { guildIds: t } = e;
    T.Wb.requestSoundboardSounds(t);
}
class eb extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(_.default, p.Z, h.Z, m.Z, g.Z, E.Z, b.Z, y.Z, O.Z, f.Z),
            this.syncWith([m.Z], ee),
            this.syncWith([y.Z], et);
    }
    getSocket() {
        return T.Wb;
    }
    isTryingToConnect() {
        return !T.Wb.isClosed();
    }
    isConnected() {
        return T.Wb.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return T.Wb.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return L;
    }
}
R(eb, "displayName", "GatewayConnectionStore");
let ey = new eb(s.Z, {
    START_SESSION: U,
    LOGIN_SUCCESS: B,
    LOGOUT: G,
    CLEAR_CACHES: H,
    CONNECTION_OPEN: (e) => {
        Z(e);
    },
    CONNECTION_RESUMED: V,
    CONNECTION_CLOSED: F,
    RTC_CONNECTION_STATE: J,
    VOICE_CHANNEL_SELECT: Y,
    VOICE_STATE_UPDATES: z,
    GUILD_DELETE: q,
    CHANNEL_DELETE: Q,
    CALL_DELETE: X,
    APP_STATE_UPDATE: $,
    GUILD_MEMBERS_REQUEST: en,
    GUILD_SEARCH_RECENT_MEMBERS: er,
    GUILD_SUBSCRIPTIONS_FLUSH: ei,
    CALL_CONNECT: ea,
    CALL_CONNECT_MULTIPLE: eo,
    STREAM_CREATE: W,
    STREAM_START: ed,
    STREAM_WATCH: e_,
    STREAM_STOP: ep,
    STREAM_SET_PAUSED: ef,
    PUSH_NOTIFICATION_CLICK: eh,
    REQUEST_FORUM_UNREADS: em,
    REQUEST_SOUNDBOARD_SOUNDS: eE,
    REMOTE_COMMAND: es,
    RESET_SOCKET: eg,
    CLIPS_SETTINGS_UPDATE: W,
    RUNNING_GAMES_CHANGE: W,
    USER_SETTINGS_PROTO_UPDATE: K,
});
