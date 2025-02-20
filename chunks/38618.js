n.d(t, { Z: () => eg });
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(287734),
    c = n(710845),
    u = n(569545),
    d = n(581883),
    f = n(314897),
    p = n(523746),
    _ = n(592125),
    h = n(131951),
    m = n(19780),
    g = n(936349),
    E = n(944486),
    v = n(885110),
    b = n(959457),
    y = n(358085),
    O = n(138859),
    S = n(955132),
    I = n(645436),
    T = n(344651),
    N = n(981631),
    A = n(526761);
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
S.Wb.dispatcher.getDispatchHandler = T.Z;
let P = new c.Z('ConnectionStore'),
    w = 100,
    D = 0,
    x = null,
    L = !0,
    M = null;
function k() {
    return S.Wb.isClosed() ? (P.verbose('Socket is reconnecting because of starting new session'), S.Wb.connect()) : (P.verbose('Socket is not reconnecting during a new session because it is not closed'), !1);
}
function j(e) {
    e.isSwitchingAccount && S.RR.handleAccountSwitch(), P.verbose('Closing socket because of logout'), S.Wb.close();
}
function U() {
    return P.verbose('session refresh dispatched', { isEstablished: S.Wb.isSessionEstablished() }), !!S.Wb.isSessionEstablished() && (S.Wb.close(), S.Wb.connect());
}
async function G(e) {
    (D = Date.now()), (x = e.sessionId), S.RR.handleConnectionOpen();
    let t = {},
        n = E.Z.getVoiceChannelId();
    if (null != n) {
        var r, i, o, a, s, c, u, d;
        if ((null === (s = window) || void 0 === s ? void 0 : null === (a = s.performance) || void 0 === a ? void 0 : null === (o = a.getEntriesByType) || void 0 === o ? void 0 : null === (i = o.call(a, 'navigation')) || void 0 === i ? void 0 : null === (r = i[0]) || void 0 === r ? void 0 : r.type) !== 'reload' && (null === (c = await (null == R ? void 0 : null === (d = R.processUtils) || void 0 === d ? void 0 : null === (u = d.getLastCrash) || void 0 === u ? void 0 : u.call(d))) || void 0 === c ? void 0 : c.rendererCrashReason) == null && L) m.Z.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
        else {
            let e = _.Z.getChannel(n);
            null != e &&
                (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                });
        }
    }
    S.GC.update(t, !0), (L = !1);
}
function B() {
    P.verbose('connection closed dispatched'), (D = Date.now());
}
function Z(e) {
    return e.resetSocket && (S.Wb.close(), S.Wb.dispatcher.clear(), S.Wb.connect()), !1;
}
function F(e) {
    return (
        S.GC.update({
            guildId: e.guildId,
            channelId: e.channelId
        }),
        (0, y.isIOS)() && M === N.$7l.BACKGROUND && (null == e.channelId ? S.Wb.close(!0) : S.Wb.isClosed() && (I.Y(!1), S.Wb.connect())),
        !1
    );
}
function V() {
    S.GC.update();
}
function H(e) {
    var t;
    e.settings.type === A.yP.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && V();
}
function W(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (f.default.getId() !== t.userId) return e;
        if (t.sessionId === x)
            S.GC.setState({
                guildId: t.guildId,
                channelId: t.channelId
            });
        else {
            if (t.guildId !== S.GC.guildId) return e;
            S.GC.setState({
                guildId: null,
                channelId: null
            });
        }
        return !0;
    }, !1);
}
function Y(e) {
    e.guild.id === S.GC.guildId &&
        S.GC.setState({
            guildId: null,
            channelId: null
        });
}
function K(e) {
    let { channelId: t } = e;
    t === S.GC.channelId &&
        S.GC.setState({
            guildId: null,
            channelId: null
        });
}
function z(e) {
    let { channel: t } = e;
    t.id === S.GC.channelId &&
        S.GC.setState({
            guildId: null,
            channelId: null
        });
}
function q(e) {
    if (e.state !== N.hes.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? S.Wb.streamPing(e.streamKey) : S.Wb.voiceServerPing());
}
function Q(e) {
    return (0, y.isIOS)() ? (f.default.isAuthenticated() && (M === N.$7l.INACTIVE && e.state === N.$7l.BACKGROUND && null == S.GC.channelId ? S.Wb.close(!0) : M === N.$7l.BACKGROUND && e.state === N.$7l.ACTIVE && S.Wb.isClosed() && (I.Y(!1), S.Wb.connect())), (M = e.state)) : e.state === N.$7l.ACTIVE && (I.Y(!1), f.default.isAuthenticated() && S.Wb.resetBackoff('App state is active')), !1;
}
function X() {
    return S.GC.update(), !1;
}
function J() {
    return S.RR.update(), !1;
}
function $(e) {
    return (
        S.Wb.isSessionEstablished() &&
            ('userIds' in e
                ? o()(e.userIds)
                      .chunk(w)
                      .forEach((t) => {
                          S.Wb.requestGuildMembers(e.guildIds, {
                              userIds: t,
                              presences: !!e.presences
                          });
                      })
                : S.Wb.requestGuildMembers(e.guildIds, {
                      query: e.query,
                      limit: e.limit,
                      presences: !!e.presences
                  })),
        !1
    );
}
function ee(e) {
    let { guildId: t, query: n, continuationToken: r } = e;
    S.Wb.isSessionEstablished() &&
        S.Wb.searchRecentMembers(t, {
            query: n,
            continuationToken: r
        });
}
function et(e) {
    let { subscriptions: t } = e;
    return S.Wb.isSessionEstablished() && S.Wb.updateGuildSubscriptions(t), !1;
}
function en(e) {
    let { channelId: t } = e;
    return S.Wb.isSessionEstablished() && S.Wb.callConnect(t), !1;
}
function er(e) {
    let { channelIds: t } = e;
    return (
        S.Wb.isSessionEstablished() &&
            t.forEach((e) => {
                S.Wb.callConnect(e);
            }),
        !1
    );
}
function ei(e) {
    let { sessionId: t, payload: n } = e;
    return S.Wb.isSessionEstablished() && S.Wb.remoteCommand(t, n), !1;
}
function eo(e) {
    S.Wb.isSessionEstablished() && S.Wb.streamDelete(e);
}
function ea() {
    let e = es();
    b.Z.getAllActiveStreamKeys()
        .filter((t) => t !== e)
        .forEach((e) => eo(e));
}
function es() {
    return b.Z.getAllActiveStreamKeys().find((e) => (0, u.my)(e).ownerId === f.default.getId());
}
function el(e) {
    let { streamType: t, guildId: n, channelId: r } = e;
    if (S.Wb.isSessionEstablished()) {
        var i, o;
        let e = null != n ? (null === (i = _.Z.getChannel(r)) || void 0 === i ? void 0 : i.rtcRegion) : null === (o = p.Z.getCall(r)) || void 0 === o ? void 0 : o.region;
        S.Wb.streamCreate(t, n, r, null != e ? e : g.Z.getPreferredRegion());
    }
    return !1;
}
function ec(e) {
    let { streamKey: t, paused: n } = e;
    S.Wb.isSessionEstablished() && S.Wb.streamSetPaused(t, n);
}
function eu(e) {
    let { streamKey: t, allowMultiple: n } = e;
    return S.Wb.isSessionEstablished() && (n || ea(), S.Wb.streamWatch(t)), !1;
}
function ed(e) {
    let { streamKey: t } = e;
    return eo(t), V(), !1;
}
function ef() {
    return S.Wb.expeditedHeartbeat(5000, 'user clicked on notification', !0), !1;
}
function ep(e) {
    let { guildId: t, channelId: n, threads: r } = e;
    S.Wb.requestForumUnreads(t, n, r);
}
function e_(e) {
    S.Wb.connectionState !== O.Z.WILL_RECONNECT && S.Wb.resetSocketOnError(e.args);
}
function eh(e) {
    let { guildIds: t } = e;
    S.Wb.requestSoundboardSounds(t);
}
class em extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(f.default, E.Z, _.Z, p.Z, d.Z), this.syncWith([h.Z], X), this.syncWith([v.Z], J);
    }
    getSocket() {
        return S.Wb;
    }
    isTryingToConnect() {
        return !S.Wb.isClosed();
    }
    isConnected() {
        return S.Wb.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return S.Wb.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return D;
    }
}
C(em, 'displayName', 'GatewayConnectionStore');
let eg = new em(s.Z, {
    START_SESSION: k,
    LOGIN_SUCCESS: U,
    LOGOUT: j,
    CLEAR_CACHES: Z,
    CONNECTION_OPEN: (e) => {
        G(e);
    },
    CONNECTION_CLOSED: B,
    RTC_CONNECTION_STATE: q,
    VOICE_CHANNEL_SELECT: F,
    VOICE_STATE_UPDATES: W,
    GUILD_DELETE: Y,
    CHANNEL_DELETE: z,
    CALL_DELETE: K,
    APP_STATE_UPDATE: Q,
    GUILD_MEMBERS_REQUEST: $,
    GUILD_SEARCH_RECENT_MEMBERS: ee,
    GUILD_SUBSCRIPTIONS_FLUSH: et,
    CALL_CONNECT: en,
    CALL_CONNECT_MULTIPLE: er,
    STREAM_CREATE: V,
    STREAM_START: el,
    STREAM_WATCH: eu,
    STREAM_STOP: ed,
    STREAM_SET_PAUSED: ec,
    PUSH_NOTIFICATION_CLICK: ef,
    REQUEST_FORUM_UNREADS: ep,
    REQUEST_SOUNDBOARD_SOUNDS: eh,
    REMOTE_COMMAND: ei,
    RESET_SOCKET: e_,
    CLIPS_SETTINGS_UPDATE: V,
    RUNNING_GAMES_CHANGE: V,
    USER_SETTINGS_PROTO_UPDATE: H
});
