n.d(t, { Z: () => eg }), n(724458);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(287734),
    u = n(710845),
    c = n(569545),
    d = n(581883),
    f = n(314897),
    _ = n(523746),
    p = n(592125),
    h = n(131951),
    m = n(19780),
    g = n(936349),
    E = n(944486),
    v = n(885110),
    y = n(959457),
    I = n(358085),
    b = n(138859),
    T = n(955132),
    S = n(645436),
    A = n(344651),
    N = n(981631),
    C = n(526761);
function R(e, t, n) {
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
let O = window.DiscordNative;
T.Wb.dispatcher.getDispatchHandler = A.Z;
let D = new u.Z('ConnectionStore'),
    x = 100,
    L = 0,
    P = null,
    w = !0,
    M = null;
function k() {
    return T.Wb.isClosed() ? (D.verbose('Socket is reconnecting because of starting new session'), T.Wb.connect()) : (D.verbose('Socket is not reconnecting during a new session because it is not closed'), !1);
}
function U(e) {
    e.isSwitchingAccount && T.RR.handleAccountSwitch(), D.verbose('Closing socket because of logout'), T.Wb.close();
}
function G() {
    return D.verbose('session refresh dispatched', { isEstablished: T.Wb.isSessionEstablished() }), !!T.Wb.isSessionEstablished() && (T.Wb.close(), T.Wb.connect());
}
async function B(e) {
    (L = Date.now()), (P = e.sessionId), T.RR.handleConnectionOpen();
    let t = {},
        n = E.Z.getVoiceChannelId();
    if (null != n) {
        var i, r, a, s, o, u, c, d;
        if ((null === (o = window) || void 0 === o ? void 0 : null === (s = o.performance) || void 0 === s ? void 0 : null === (a = s.getEntriesByType) || void 0 === a ? void 0 : null === (r = a.call(s, 'navigation')) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.type) !== 'reload' && (null === (u = await (null == O ? void 0 : null === (d = O.processUtils) || void 0 === d ? void 0 : null === (c = d.getLastCrash) || void 0 === c ? void 0 : c.call(d))) || void 0 === u ? void 0 : u.rendererCrashReason) == null && w) m.Z.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
        else {
            let e = p.Z.getChannel(n);
            null != e &&
                (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                });
        }
    }
    T.GC.update(t, !0), (w = !1);
}
function Z() {
    D.verbose('connection closed dispatched'), (L = Date.now());
}
function F(e) {
    return e.resetSocket && (T.Wb.close(), T.Wb.dispatcher.clear(), T.Wb.connect()), !1;
}
function V(e) {
    return (
        T.GC.update({
            guildId: e.guildId,
            channelId: e.channelId
        }),
        (0, I.isIOS)() && M === N.$7l.BACKGROUND && (null == e.channelId ? T.Wb.close(!0) : T.Wb.isClosed() && (S.Y(!1), T.Wb.connect())),
        !1
    );
}
function j() {
    T.GC.update();
}
function H(e) {
    var t;
    e.settings.type === C.yP.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && j();
}
function Y(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (f.default.getId() !== t.userId) return e;
        if (t.sessionId === P)
            T.GC.setState({
                guildId: t.guildId,
                channelId: t.channelId
            });
        else {
            if (t.guildId !== T.GC.guildId) return e;
            T.GC.setState({
                guildId: null,
                channelId: null
            });
        }
        return !0;
    }, !1);
}
function W(e) {
    e.guild.id === T.GC.guildId &&
        T.GC.setState({
            guildId: null,
            channelId: null
        });
}
function K(e) {
    let { channelId: t } = e;
    t === T.GC.channelId &&
        T.GC.setState({
            guildId: null,
            channelId: null
        });
}
function z(e) {
    let { channel: t } = e;
    t.id === T.GC.channelId &&
        T.GC.setState({
            guildId: null,
            channelId: null
        });
}
function q(e) {
    if (e.state !== N.hes.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? T.Wb.streamPing(e.streamKey) : T.Wb.voiceServerPing());
}
function Q(e) {
    return (0, I.isIOS)() ? (f.default.isAuthenticated() && (M === N.$7l.INACTIVE && e.state === N.$7l.BACKGROUND && null == T.GC.channelId ? T.Wb.close(!0) : M === N.$7l.BACKGROUND && e.state === N.$7l.ACTIVE && T.Wb.isClosed() && (S.Y(!1), T.Wb.connect())), (M = e.state)) : e.state === N.$7l.ACTIVE && (S.Y(!1), f.default.isAuthenticated() && T.Wb.resetBackoff('App state is active')), !1;
}
function X() {
    return T.GC.update(), !1;
}
function J() {
    return T.RR.update(), !1;
}
function $(e) {
    return (
        T.Wb.isSessionEstablished() &&
            ('userIds' in e
                ? a()(e.userIds)
                      .chunk(x)
                      .forEach((t) => {
                          T.Wb.requestGuildMembers(e.guildIds, {
                              userIds: t,
                              presences: !!e.presences
                          });
                      })
                : T.Wb.requestGuildMembers(e.guildIds, {
                      query: e.query,
                      limit: e.limit,
                      presences: !!e.presences
                  })),
        !1
    );
}
function ee(e) {
    let { guildId: t, query: n, continuationToken: i } = e;
    T.Wb.isSessionEstablished() &&
        T.Wb.searchRecentMembers(t, {
            query: n,
            continuationToken: i
        });
}
function et(e) {
    let { subscriptions: t } = e;
    return T.Wb.isSessionEstablished() && T.Wb.updateGuildSubscriptions(t), !1;
}
function en(e) {
    let { channelId: t } = e;
    return T.Wb.isSessionEstablished() && T.Wb.callConnect(t), !1;
}
function ei(e) {
    let { channelIds: t } = e;
    return (
        T.Wb.isSessionEstablished() &&
            t.forEach((e) => {
                T.Wb.callConnect(e);
            }),
        !1
    );
}
function er(e) {
    let { sessionId: t, payload: n } = e;
    return T.Wb.isSessionEstablished() && T.Wb.remoteCommand(t, n), !1;
}
function ea(e) {
    T.Wb.isSessionEstablished() && T.Wb.streamDelete(e);
}
function es() {
    let e = eo();
    y.Z.getAllActiveStreamKeys()
        .filter((t) => t !== e)
        .forEach((e) => ea(e));
}
function eo() {
    return y.Z.getAllActiveStreamKeys().find((e) => (0, c.my)(e).ownerId === f.default.getId());
}
function el(e) {
    let { streamType: t, guildId: n, channelId: i } = e;
    if (T.Wb.isSessionEstablished()) {
        var r, a;
        let e = null != n ? (null === (r = p.Z.getChannel(i)) || void 0 === r ? void 0 : r.rtcRegion) : null === (a = _.Z.getCall(i)) || void 0 === a ? void 0 : a.region;
        T.Wb.streamCreate(t, n, i, null != e ? e : g.Z.getPreferredRegion());
    }
    return !1;
}
function eu(e) {
    let { streamKey: t, paused: n } = e;
    T.Wb.isSessionEstablished() && T.Wb.streamSetPaused(t, n);
}
function ec(e) {
    let { streamKey: t, allowMultiple: n } = e;
    return T.Wb.isSessionEstablished() && (n || es(), T.Wb.streamWatch(t)), !1;
}
function ed(e) {
    let { streamKey: t } = e;
    return ea(t), j(), !1;
}
function ef() {
    return T.Wb.expeditedHeartbeat(5000, 'user clicked on notification', !0), !1;
}
function e_(e) {
    let { guildId: t, channelId: n, threads: i } = e;
    T.Wb.requestForumUnreads(t, n, i);
}
function ep(e) {
    T.Wb.connectionState !== b.Z.WILL_RECONNECT && T.Wb.resetSocketOnError(e.args);
}
function eh(e) {
    let { guildIds: t } = e;
    T.Wb.requestSoundboardSounds(t);
}
class em extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(f.default, E.Z, p.Z, _.Z, d.Z), this.syncWith([h.Z], X), this.syncWith([v.Z], J);
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
R(em, 'displayName', 'GatewayConnectionStore');
let eg = new em(o.Z, {
    START_SESSION: k,
    LOGIN_SUCCESS: G,
    LOGOUT: U,
    CLEAR_CACHES: F,
    CONNECTION_OPEN: (e) => {
        B(e);
    },
    CONNECTION_CLOSED: Z,
    RTC_CONNECTION_STATE: q,
    VOICE_CHANNEL_SELECT: V,
    VOICE_STATE_UPDATES: Y,
    GUILD_DELETE: W,
    CHANNEL_DELETE: z,
    CALL_DELETE: K,
    APP_STATE_UPDATE: Q,
    GUILD_MEMBERS_REQUEST: $,
    GUILD_SEARCH_RECENT_MEMBERS: ee,
    GUILD_SUBSCRIPTIONS_FLUSH: et,
    CALL_CONNECT: en,
    CALL_CONNECT_MULTIPLE: ei,
    STREAM_CREATE: j,
    STREAM_START: el,
    STREAM_WATCH: ec,
    STREAM_STOP: ed,
    STREAM_SET_PAUSED: eu,
    PUSH_NOTIFICATION_CLICK: ef,
    REQUEST_FORUM_UNREADS: e_,
    REQUEST_SOUNDBOARD_SOUNDS: eh,
    REMOTE_COMMAND: er,
    RESET_SOCKET: ep,
    CLIPS_SETTINGS_UPDATE: j,
    RUNNING_GAMES_CHANGE: j,
    USER_SETTINGS_PROTO_UPDATE: H
});
