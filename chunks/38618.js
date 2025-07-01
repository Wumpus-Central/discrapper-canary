n.d(t, { Z: () => eb });
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(287734),
    c = n(710845),
    u = n(569545),
    d = n(581883),
    f = n(314897),
    _ = n(523746),
    p = n(592125),
    h = n(131951),
    m = n(19780),
    g = n(936349),
    E = n(944486),
    b = n(885110),
    y = n(959457),
    O = n(358085),
    v = n(138859),
    I = n(955132),
    T = n(645436),
    S = n(344651),
    A = n(981631),
    N = n(526761);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let R = window.DiscordNative;
I.Wb.dispatcher.getDispatchHandler = S.Z;
let P = new c.Z('ConnectionStore'),
    w = 100,
    D = 0,
    L = null,
    x = !0,
    k = null,
    M = null;
function j() {
    return I.Wb.isClosed() ? (P.verbose('Socket is reconnecting because of starting new session'), I.Wb.connect()) : (P.verbose('Socket is not reconnecting during a new session because it is not closed'), !1);
}
function U(e) {
    (e.isSwitchingAccount && I.RR.handleAccountSwitch(), P.verbose('Closing socket because of logout'), I.Wb.close());
}
function G() {
    return (P.verbose('session refresh dispatched', { isEstablished: I.Wb.isSessionEstablished() }), !!I.Wb.isSessionEstablished() && (I.Wb.close(), I.Wb.connect()));
}
async function B(e) {
    ((D = Date.now()), (L = e.sessionId), I.RR.handleConnectionOpen());
    let t = {},
        n = E.Z.getVoiceChannelId();
    if (null != n) {
        var r, i, a, o, s, c, u, d;
        if ((null == (s = window) || null == (o = s.performance) || null == (a = o.getEntriesByType) || null == (i = a.call(o, 'navigation')) || null == (r = i[0]) ? void 0 : r.type) !== 'reload' && (null == (c = await (null == R || null == (d = R.processUtils) || null == (u = d.getLastCrash) ? void 0 : u.call(d))) ? void 0 : c.rendererCrashReason) == null && x) (m.Z.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null));
        else {
            let e = p.Z.getChannel(n);
            null != e &&
                (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                });
        }
    }
    (I.GC.update(t, !0), (x = !1), (M = null));
}
function V() {
    (P.verbose('connection closed dispatched'), (D = Date.now()));
}
function F() {
    M = null;
}
function Z(e) {
    return (e.resetSocket && (I.Wb.close(), I.Wb.dispatcher.clear(), I.Wb.connect()), !1);
}
function H(e) {
    return (
        I.GC.update({
            guildId: e.guildId,
            channelId: e.channelId
        }),
        (M = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
        (0, O.isIOS)() && k === A.$7l.BACKGROUND && (null == e.channelId ? I.Wb.close(!0) : I.Wb.isClosed() && (T.Y(!1), I.Wb.connect())),
        !1
    );
}
function Y() {
    I.GC.update();
}
function W(e) {
    var t;
    e.settings.type === N.yP.PRELOADED_USER_SETTINGS && (null == (t = e.settings.proto.clips) ? void 0 : t.allowVoiceRecording) != null && Y();
}
function K(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (f.default.getId() !== t.userId) return e;
        if (t.sessionId === L) {
            if (null != M) return (P.verbose('Ignoring voice state for own session due to VSU lock on channel:', M), e);
            I.GC.setState({
                guildId: t.guildId,
                channelId: t.channelId
            });
        } else {
            if (t.guildId !== I.GC.guildId) return e;
            I.GC.setState({
                guildId: null,
                channelId: null
            });
        }
        return !0;
    }, !1);
}
function z(e) {
    e.guild.id === I.GC.guildId &&
        I.GC.setState({
            guildId: null,
            channelId: null
        });
}
function q(e) {
    let { channelId: t } = e;
    if (t === I.GC.channelId) {
        if (M === t) return !1;
        I.GC.setState({
            guildId: null,
            channelId: null
        });
    }
}
function X(e) {
    let { channel: t } = e;
    t.id === I.GC.channelId &&
        I.GC.setState({
            guildId: null,
            channelId: null
        });
}
function Q(e) {
    if (e.state !== A.hes.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? I.Wb.streamPing(e.streamKey) : I.Wb.voiceServerPing());
}
function J(e) {
    return ((0, O.isIOS)() ? (f.default.isAuthenticated() && (k === A.$7l.INACTIVE && e.state === A.$7l.BACKGROUND && null == I.GC.channelId ? I.Wb.close(!0) : k === A.$7l.BACKGROUND && e.state === A.$7l.ACTIVE && I.Wb.isClosed() && (T.Y(!1), I.Wb.connect())), (k = e.state)) : e.state === A.$7l.ACTIVE && (T.Y(!1), f.default.isAuthenticated() && I.Wb.resetBackoff('App state is active')), !1);
}
function $() {
    return (I.GC.update(), !1);
}
function ee() {
    return (I.RR.update(), !1);
}
function et(e) {
    return (
        I.Wb.isSessionEstablished() &&
            ('userIds' in e
                ? a()(e.userIds)
                      .chunk(w)
                      .forEach((t) => {
                          I.Wb.requestGuildMembers(e.guildIds, {
                              userIds: t,
                              presences: !!e.presences
                          });
                      })
                : I.Wb.requestGuildMembers(e.guildIds, {
                      query: e.query,
                      limit: e.limit,
                      presences: !!e.presences
                  })),
        !1
    );
}
function en(e) {
    let { guildId: t, query: n, continuationToken: r } = e;
    I.Wb.isSessionEstablished() &&
        I.Wb.searchRecentMembers(t, {
            query: n,
            continuationToken: r
        });
}
function er(e) {
    let { subscriptions: t } = e;
    return (I.Wb.isSessionEstablished() && I.Wb.updateGuildSubscriptions(t), !1);
}
function ei(e) {
    let { channelId: t } = e;
    return (I.Wb.isSessionEstablished() && I.Wb.callConnect(t), !1);
}
function ea(e) {
    let { channelIds: t } = e;
    return (
        I.Wb.isSessionEstablished() &&
            t.forEach((e) => {
                I.Wb.callConnect(e);
            }),
        !1
    );
}
function eo(e) {
    let { sessionId: t, payload: n } = e;
    return (I.Wb.isSessionEstablished() && I.Wb.remoteCommand(t, n), !1);
}
function es(e) {
    I.Wb.isSessionEstablished() && I.Wb.streamDelete(e);
}
function el() {
    let e = ec();
    y.Z.getAllActiveStreamKeys()
        .filter((t) => t !== e)
        .forEach((e) => es(e));
}
function ec() {
    return y.Z.getAllActiveStreamKeys().find((e) => (0, u.my)(e).ownerId === f.default.getId());
}
function eu(e) {
    let { streamType: t, guildId: n, channelId: r } = e;
    if (I.Wb.isSessionEstablished()) {
        var i, a;
        let e = null != n ? (null == (i = p.Z.getChannel(r)) ? void 0 : i.rtcRegion) : null == (a = _.Z.getCall(r)) ? void 0 : a.region;
        I.Wb.streamCreate(t, n, r, null != e ? e : g.Z.getPreferredRegion());
    }
    return !1;
}
function ed(e) {
    let { streamKey: t, paused: n } = e;
    I.Wb.isSessionEstablished() && I.Wb.streamSetPaused(t, n);
}
function ef(e) {
    let { streamKey: t, allowMultiple: n } = e;
    return (I.Wb.isSessionEstablished() && (n || el(), I.Wb.streamWatch(t)), !1);
}
function e_(e) {
    let { streamKey: t } = e;
    return (es(t), Y(), !1);
}
function ep() {
    return (I.Wb.expeditedHeartbeat(5000, 'user clicked on notification', !0), !1);
}
function eh(e) {
    let { guildId: t, channelId: n, threads: r } = e;
    I.Wb.requestForumUnreads(t, n, r);
}
function em(e) {
    I.Wb.connectionState !== v.Z.WILL_RECONNECT && I.Wb.resetSocketOnError(e.args);
}
function eg(e) {
    let { guildIds: t } = e;
    I.Wb.requestSoundboardSounds(t);
}
class eE extends (r = o.ZP.Store) {
    initialize() {
        (this.waitFor(f.default, E.Z, p.Z, _.Z, d.Z), this.syncWith([h.Z], $), this.syncWith([b.Z], ee));
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
        return D;
    }
}
C(eE, 'displayName', 'GatewayConnectionStore');
let eb = new eE(s.Z, {
    START_SESSION: j,
    LOGIN_SUCCESS: G,
    LOGOUT: U,
    CLEAR_CACHES: Z,
    CONNECTION_OPEN: (e) => {
        B(e);
    },
    CONNECTION_RESUMED: F,
    CONNECTION_CLOSED: V,
    RTC_CONNECTION_STATE: Q,
    VOICE_CHANNEL_SELECT: H,
    VOICE_STATE_UPDATES: K,
    GUILD_DELETE: z,
    CHANNEL_DELETE: X,
    CALL_DELETE: q,
    APP_STATE_UPDATE: J,
    GUILD_MEMBERS_REQUEST: et,
    GUILD_SEARCH_RECENT_MEMBERS: en,
    GUILD_SUBSCRIPTIONS_FLUSH: er,
    CALL_CONNECT: ei,
    CALL_CONNECT_MULTIPLE: ea,
    STREAM_CREATE: Y,
    STREAM_START: eu,
    STREAM_WATCH: ef,
    STREAM_STOP: e_,
    STREAM_SET_PAUSED: ed,
    PUSH_NOTIFICATION_CLICK: ep,
    REQUEST_FORUM_UNREADS: eh,
    REQUEST_SOUNDBOARD_SOUNDS: eg,
    REMOTE_COMMAND: eo,
    RESET_SOCKET: em,
    CLIPS_SETTINGS_UPDATE: Y,
    RUNNING_GAMES_CHANGE: Y,
    USER_SETTINGS_PROTO_UPDATE: W
});
