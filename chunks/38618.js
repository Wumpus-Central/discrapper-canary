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
    _ = n(523746),
    p = n(592125),
    h = n(131951),
    m = n(19780),
    g = n(936349),
    E = n(944486),
    b = n(885110),
    y = n(959457),
    v = n(358085),
    O = n(138859),
    I = n(955132),
    S = n(645436),
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
I.Wb.dispatcher.getDispatchHandler = T.Z;
let P = new c.Z('ConnectionStore'),
    w = 100,
    D = 0,
    L = null,
    x = !0,
    M = null;
function k() {
    return I.Wb.isClosed() ? (P.verbose('Socket is reconnecting because of starting new session'), I.Wb.connect()) : (P.verbose('Socket is not reconnecting during a new session because it is not closed'), !1);
}
function j(e) {
    e.isSwitchingAccount && I.RR.handleAccountSwitch(), P.verbose('Closing socket because of logout'), I.Wb.close();
}
function U() {
    return P.verbose('session refresh dispatched', { isEstablished: I.Wb.isSessionEstablished() }), !!I.Wb.isSessionEstablished() && (I.Wb.close(), I.Wb.connect());
}
async function G(e) {
    (D = Date.now()), (L = e.sessionId), I.RR.handleConnectionOpen();
    let t = {},
        n = E.Z.getVoiceChannelId();
    if (null != n) {
        var r, i, o, a, s, c, u, d;
        if ((null == (s = window) || null == (a = s.performance) || null == (o = a.getEntriesByType) || null == (i = o.call(a, 'navigation')) || null == (r = i[0]) ? void 0 : r.type) !== 'reload' && (null == (c = await (null == R || null == (d = R.processUtils) || null == (u = d.getLastCrash) ? void 0 : u.call(d))) ? void 0 : c.rendererCrashReason) == null && x) m.Z.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
        else {
            let e = p.Z.getChannel(n);
            null != e &&
                (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                });
        }
    }
    I.GC.update(t, !0), (x = !1);
}
function B() {
    P.verbose('connection closed dispatched'), (D = Date.now());
}
function F(e) {
    return e.resetSocket && (I.Wb.close(), I.Wb.dispatcher.clear(), I.Wb.connect()), !1;
}
function V(e) {
    return (
        I.GC.update({
            guildId: e.guildId,
            channelId: e.channelId
        }),
        (0, v.isIOS)() && M === N.$7l.BACKGROUND && (null == e.channelId ? I.Wb.close(!0) : I.Wb.isClosed() && (S.Y(!1), I.Wb.connect())),
        !1
    );
}
function Z() {
    I.GC.update();
}
function H(e) {
    var t;
    e.settings.type === A.yP.PRELOADED_USER_SETTINGS && (null == (t = e.settings.proto.clips) ? void 0 : t.allowVoiceRecording) != null && Z();
}
function W(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (f.default.getId() !== t.userId) return e;
        if (t.sessionId === L)
            I.GC.setState({
                guildId: t.guildId,
                channelId: t.channelId
            });
        else {
            if (t.guildId !== I.GC.guildId) return e;
            I.GC.setState({
                guildId: null,
                channelId: null
            });
        }
        return !0;
    }, !1);
}
function Y(e) {
    e.guild.id === I.GC.guildId &&
        I.GC.setState({
            guildId: null,
            channelId: null
        });
}
function K(e) {
    let { channelId: t } = e;
    t === I.GC.channelId &&
        I.GC.setState({
            guildId: null,
            channelId: null
        });
}
function z(e) {
    let { channel: t } = e;
    t.id === I.GC.channelId &&
        I.GC.setState({
            guildId: null,
            channelId: null
        });
}
function q(e) {
    if (e.state !== N.hes.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? I.Wb.streamPing(e.streamKey) : I.Wb.voiceServerPing());
}
function Q(e) {
    return (0, v.isIOS)() ? (f.default.isAuthenticated() && (M === N.$7l.INACTIVE && e.state === N.$7l.BACKGROUND && null == I.GC.channelId ? I.Wb.close(!0) : M === N.$7l.BACKGROUND && e.state === N.$7l.ACTIVE && I.Wb.isClosed() && (S.Y(!1), I.Wb.connect())), (M = e.state)) : e.state === N.$7l.ACTIVE && (S.Y(!1), f.default.isAuthenticated() && I.Wb.resetBackoff('App state is active')), !1;
}
function X() {
    return I.GC.update(), !1;
}
function J() {
    return I.RR.update(), !1;
}
function $(e) {
    return (
        I.Wb.isSessionEstablished() &&
            ('userIds' in e
                ? o()(e.userIds)
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
function ee(e) {
    let { guildId: t, query: n, continuationToken: r } = e;
    I.Wb.isSessionEstablished() &&
        I.Wb.searchRecentMembers(t, {
            query: n,
            continuationToken: r
        });
}
function et(e) {
    let { subscriptions: t } = e;
    return I.Wb.isSessionEstablished() && I.Wb.updateGuildSubscriptions(t), !1;
}
function en(e) {
    let { channelId: t } = e;
    return I.Wb.isSessionEstablished() && I.Wb.callConnect(t), !1;
}
function er(e) {
    let { channelIds: t } = e;
    return (
        I.Wb.isSessionEstablished() &&
            t.forEach((e) => {
                I.Wb.callConnect(e);
            }),
        !1
    );
}
function ei(e) {
    let { sessionId: t, payload: n } = e;
    return I.Wb.isSessionEstablished() && I.Wb.remoteCommand(t, n), !1;
}
function eo(e) {
    I.Wb.isSessionEstablished() && I.Wb.streamDelete(e);
}
function ea() {
    let e = es();
    y.Z.getAllActiveStreamKeys()
        .filter((t) => t !== e)
        .forEach((e) => eo(e));
}
function es() {
    return y.Z.getAllActiveStreamKeys().find((e) => (0, u.my)(e).ownerId === f.default.getId());
}
function el(e) {
    let { streamType: t, guildId: n, channelId: r } = e;
    if (I.Wb.isSessionEstablished()) {
        var i, o;
        let e = null != n ? (null == (i = p.Z.getChannel(r)) ? void 0 : i.rtcRegion) : null == (o = _.Z.getCall(r)) ? void 0 : o.region;
        I.Wb.streamCreate(t, n, r, null != e ? e : g.Z.getPreferredRegion());
    }
    return !1;
}
function ec(e) {
    let { streamKey: t, paused: n } = e;
    I.Wb.isSessionEstablished() && I.Wb.streamSetPaused(t, n);
}
function eu(e) {
    let { streamKey: t, allowMultiple: n } = e;
    return I.Wb.isSessionEstablished() && (n || ea(), I.Wb.streamWatch(t)), !1;
}
function ed(e) {
    let { streamKey: t } = e;
    return eo(t), Z(), !1;
}
function ef() {
    return I.Wb.expeditedHeartbeat(5000, 'user clicked on notification', !0), !1;
}
function e_(e) {
    let { guildId: t, channelId: n, threads: r } = e;
    I.Wb.requestForumUnreads(t, n, r);
}
function ep(e) {
    I.Wb.connectionState !== O.Z.WILL_RECONNECT && I.Wb.resetSocketOnError(e.args);
}
function eh(e) {
    let { guildIds: t } = e;
    I.Wb.requestSoundboardSounds(t);
}
class em extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(f.default, E.Z, p.Z, _.Z, d.Z), this.syncWith([h.Z], X), this.syncWith([b.Z], J);
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
C(em, 'displayName', 'GatewayConnectionStore');
let eg = new em(s.Z, {
    START_SESSION: k,
    LOGIN_SUCCESS: U,
    LOGOUT: j,
    CLEAR_CACHES: F,
    CONNECTION_OPEN: (e) => {
        G(e);
    },
    CONNECTION_CLOSED: B,
    RTC_CONNECTION_STATE: q,
    VOICE_CHANNEL_SELECT: V,
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
    STREAM_CREATE: Z,
    STREAM_START: el,
    STREAM_WATCH: eu,
    STREAM_STOP: ed,
    STREAM_SET_PAUSED: ec,
    PUSH_NOTIFICATION_CLICK: ef,
    REQUEST_FORUM_UNREADS: e_,
    REQUEST_SOUNDBOARD_SOUNDS: eh,
    REMOTE_COMMAND: ei,
    RESET_SOCKET: ep,
    CLIPS_SETTINGS_UPDATE: Z,
    RUNNING_GAMES_CHANGE: Z,
    USER_SETTINGS_PROTO_UPDATE: H
});
