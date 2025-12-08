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
    p = n(314897),
    _ = n(523746),
    m = n(592125),
    h = n(131951),
    g = n(19780),
    E = n(936349),
    b = n(944486),
    y = n(885110),
    O = n(959457),
    v = n(358085),
    S = n(138859),
    I = n(955132),
    T = n(645436),
    A = n(344651),
    C = n(981631),
    N = n(526761);
function P(e, t, n) {
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
let R = window.DiscordNative;
I.Wb.dispatcher.getDispatchHandler = A.Z;
let w = new c.Z("ConnectionStore"),
    D = 100,
    x = 0,
    L = null,
    j = !0,
    M = null,
    k = null;
function U() {
    return I.Wb.isClosed()
        ? (w.verbose("Socket is reconnecting because of starting new session"), I.Wb.connect())
        : (w.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
}
function G(e) {
    e.isSwitchingAccount && I.RR.handleAccountSwitch(), w.verbose("Closing socket because of logout"), I.Wb.close();
}
function Z() {
    return (
        w.verbose("session refresh dispatched", { isEstablished: I.Wb.isSessionEstablished() }),
        !!I.Wb.isSessionEstablished() && (I.Wb.close(), I.Wb.connect())
    );
}
async function B(e) {
    (x = Date.now()), (L = e.sessionId), I.RR.handleConnectionOpen();
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
            (c = await (null == R || null == (f = R.processUtils) || null == (u = f.getLastCrash) ? void 0 : u.call(f)))
                ? void 0
                : c.rendererCrashReason) == null &&
            j
        )
            g.Z.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
        else {
            let e = m.Z.getChannel(n);
            null != e &&
                ((t = {
                    guildId: e.getGuildId(),
                    channelId: n,
                }),
                (0, d.Db)(n));
        }
    }
    I.GC.update(t, !0), (j = !1), (k = null);
}
function F() {
    w.verbose("connection closed dispatched"), (x = Date.now());
}
function V() {
    k = null;
}
function H(e) {
    return e.resetSocket && (I.Wb.close(), I.Wb.dispatcher.clear(), I.Wb.connect()), !1;
}
function Y(e) {
    return (
        I.GC.update({
            guildId: e.guildId,
            channelId: e.channelId,
        }),
        (k = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
        (0, v.isIOS)() &&
            M === C.$7l.BACKGROUND &&
            (null == e.channelId ? I.Wb.close(!0) : I.Wb.isClosed() && (T.Y(!1), I.Wb.connect())),
        !1
    );
}
function W() {
    I.GC.update();
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
        if (p.default.getId() !== t.userId) return e;
        if (t.sessionId === L) {
            if (null != k) return w.verbose("Ignoring voice state for own session due to VSU lock on channel:", k), e;
            I.GC.setState({
                guildId: t.guildId,
                channelId: t.channelId,
            });
        } else {
            if (t.guildId !== I.GC.guildId) return e;
            I.GC.setState({
                guildId: null,
                channelId: null,
            });
        }
        return !0;
    }, !1);
}
function q(e) {
    e.guild.id === I.GC.guildId &&
        I.GC.setState({
            guildId: null,
            channelId: null,
        });
}
function Q(e) {
    let { channelId: t } = e;
    if (t === I.GC.channelId) {
        if (k === t) return !1;
        I.GC.setState({
            guildId: null,
            channelId: null,
        });
    }
}
function X(e) {
    let { channel: t } = e;
    t.id === I.GC.channelId &&
        I.GC.setState({
            guildId: null,
            channelId: null,
        });
}
function J(e) {
    if (e.state !== C.hes.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? I.Wb.streamPing(e.streamKey) : I.Wb.voiceServerPing());
}
function $(e) {
    return (
        (0, v.isIOS)()
            ? (p.default.isAuthenticated() &&
                  (M === C.$7l.INACTIVE && e.state === C.$7l.BACKGROUND && null == I.GC.channelId
                      ? I.Wb.close(!0)
                      : M === C.$7l.BACKGROUND &&
                        e.state === C.$7l.ACTIVE &&
                        I.Wb.isClosed() &&
                        (T.Y(!1), I.Wb.connect())),
              (M = e.state))
            : e.state === C.$7l.ACTIVE &&
              (T.Y(!1), p.default.isAuthenticated() && I.Wb.resetBackoff("App state is active")),
        !1
    );
}
function ee() {
    return I.GC.update(), !1;
}
function et() {
    return I.RR.update(), !1;
}
function en(e) {
    return (
        I.Wb.isSessionEstablished() &&
            ("userIds" in e
                ? a()(e.userIds)
                      .chunk(D)
                      .forEach((t) => {
                          I.Wb.requestGuildMembers(e.guildIds, {
                              userIds: t,
                              presences: !!e.presences,
                          });
                      })
                : I.Wb.requestGuildMembers(e.guildIds, {
                      query: e.query,
                      limit: e.limit,
                      presences: !!e.presences,
                  })),
        !1
    );
}
function er(e) {
    let { guildId: t, query: n, continuationToken: r } = e;
    I.Wb.isSessionEstablished() &&
        I.Wb.searchRecentMembers(t, {
            query: n,
            continuationToken: r,
        });
}
function ei(e) {
    let { subscriptions: t } = e;
    return I.Wb.isSessionEstablished() && I.Wb.updateGuildSubscriptions(t), !1;
}
function ea(e) {
    let { channelId: t } = e;
    return I.Wb.isSessionEstablished() && I.Wb.callConnect(t), !1;
}
function eo(e) {
    let { channelIds: t } = e;
    return (
        I.Wb.isSessionEstablished() &&
            t.forEach((e) => {
                I.Wb.callConnect(e);
            }),
        !1
    );
}
function es(e) {
    let { sessionId: t, payload: n } = e;
    return I.Wb.isSessionEstablished() && I.Wb.remoteCommand(t, n), !1;
}
function el(e) {
    I.Wb.isSessionEstablished() && I.Wb.streamDelete(e);
}
function ec() {
    let e = eu();
    O.Z.getAllActiveStreamKeys()
        .filter((t) => t !== e)
        .forEach((e) => el(e));
}
function eu() {
    return O.Z.getAllActiveStreamKeys().find((e) => (0, u.my)(e).ownerId === p.default.getId());
}
function ed(e) {
    let { streamType: t, guildId: n, channelId: r } = e;
    if (I.Wb.isSessionEstablished()) {
        var i, a;
        let e =
            null != n
                ? null == (i = m.Z.getChannel(r))
                    ? void 0
                    : i.rtcRegion
                : null == (a = _.Z.getCall(r))
                  ? void 0
                  : a.region;
        I.Wb.streamCreate(t, n, r, null != e ? e : E.Z.getPreferredRegion());
    }
    return !1;
}
function ef(e) {
    let { streamKey: t, paused: n } = e;
    I.Wb.isSessionEstablished() && I.Wb.streamSetPaused(t, n);
}
function ep(e) {
    let { streamKey: t, allowMultiple: n } = e;
    return I.Wb.isSessionEstablished() && (n || ec(), I.Wb.streamWatch(t)), !1;
}
function e_(e) {
    let { streamKey: t } = e;
    return el(t), W(), !1;
}
function em() {
    return I.Wb.expeditedHeartbeat(5000, "user clicked on notification", !0), !1;
}
function eh(e) {
    let { guildId: t, channelId: n, threads: r } = e;
    I.Wb.requestForumUnreads(t, n, r);
}
function eg(e) {
    I.Wb.connectionState !== S.Z.WILL_RECONNECT && I.Wb.resetSocketOnError(e.args);
}
function eE(e) {
    let { guildIds: t } = e;
    I.Wb.requestSoundboardSounds(t);
}
class eb extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(p.default, _.Z, m.Z, h.Z, g.Z, E.Z, b.Z, y.Z, O.Z, f.Z),
            this.syncWith([h.Z], ee),
            this.syncWith([y.Z], et);
    }
    getSocket() {
        return I.Wb;
    }
    isTryingToConnect() {
        return !I.Wb.isClosed();
    }
    isConnected() {
        return I.Wb.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return I.Wb.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return x;
    }
}
P(eb, "displayName", "GatewayConnectionStore");
let ey = new eb(s.Z, {
    START_SESSION: U,
    LOGIN_SUCCESS: Z,
    LOGOUT: G,
    CLEAR_CACHES: H,
    CONNECTION_OPEN: (e) => {
        B(e);
    },
    CONNECTION_RESUMED: V,
    CONNECTION_CLOSED: F,
    RTC_CONNECTION_STATE: J,
    VOICE_CHANNEL_SELECT: Y,
    VOICE_STATE_UPDATES: z,
    GUILD_DELETE: q,
    CHANNEL_DELETE: X,
    CALL_DELETE: Q,
    APP_STATE_UPDATE: $,
    GUILD_MEMBERS_REQUEST: en,
    GUILD_SEARCH_RECENT_MEMBERS: er,
    GUILD_SUBSCRIPTIONS_FLUSH: ei,
    CALL_CONNECT: ea,
    CALL_CONNECT_MULTIPLE: eo,
    STREAM_CREATE: W,
    STREAM_START: ed,
    STREAM_WATCH: ep,
    STREAM_STOP: e_,
    STREAM_SET_PAUSED: ef,
    PUSH_NOTIFICATION_CLICK: em,
    REQUEST_FORUM_UNREADS: eh,
    REQUEST_SOUNDBOARD_SOUNDS: eE,
    REMOTE_COMMAND: es,
    RESET_SOCKET: eg,
    CLIPS_SETTINGS_UPDATE: W,
    RUNNING_GAMES_CHANGE: W,
    USER_SETTINGS_PROTO_UPDATE: K,
});
