var i,
    a = r(724458);
var s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(570140),
    c = r(287734),
    d = r(710845),
    f = r(569545),
    _ = r(581883),
    h = r(314897),
    p = r(523746),
    m = r(592125),
    g = r(131951),
    E = r(19780),
    v = r(936349),
    I = r(944486),
    T = r(885110),
    b = r(959457),
    y = r(358085),
    S = r(138859),
    A = r(955132),
    N = r(645436),
    C = r(344651),
    R = r(981631),
    O = r(526761);
function D(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let L = window.DiscordNative;
A.Wb.dispatcher.getDispatchHandler = C.Z;
let x = new d.Z('ConnectionStore'),
    w = 100,
    P = 0,
    M = null,
    k = !0,
    U = null;
function B() {
    return A.Wb.isClosed() ? (x.verbose('Socket is reconnecting because of starting new session'), A.Wb.connect()) : (x.verbose('Socket is not reconnecting during a new session because it is not closed'), !1);
}
function G(e) {
    e.isSwitchingAccount && A.RR.handleAccountSwitch(), x.verbose('Closing socket because of logout'), A.Wb.close();
}
function Z() {
    return x.verbose('session refresh dispatched', { isEstablished: A.Wb.isSessionEstablished() }), !!A.Wb.isSessionEstablished() && (A.Wb.close(), A.Wb.connect());
}
async function F(e) {
    (P = Date.now()), (M = e.sessionId), A.RR.handleConnectionOpen();
    let n = {},
        r = I.Z.getVoiceChannelId();
    if (null != r) {
        var i, a, s, o, l, u, d, f;
        if ((null === (l = window) || void 0 === l ? void 0 : null === (o = l.performance) || void 0 === o ? void 0 : null === (s = o.getEntriesByType) || void 0 === s ? void 0 : null === (a = s.call(o, 'navigation')) || void 0 === a ? void 0 : null === (i = a[0]) || void 0 === i ? void 0 : i.type) === 'reload' || (null === (u = await (null == L ? void 0 : null === (f = L.processUtils) || void 0 === f ? void 0 : null === (d = f.getLastCrash) || void 0 === d ? void 0 : d.call(f))) || void 0 === u ? void 0 : u.rendererCrashReason) != null || !k) {
            let e = m.Z.getChannel(r);
            null != e &&
                (n = {
                    guildId: e.getGuildId(),
                    channelId: r
                });
        } else E.Z.setLastSessionVoiceChannelId(null != r ? r : null), c.default.selectVoiceChannel(null);
    }
    A.GC.update(n, !0), (k = !1);
}
function V() {
    x.verbose('connection closed dispatched'), (P = Date.now());
}
function j(e) {
    return e.resetSocket && (A.Wb.close(), A.Wb.dispatcher.clear(), A.Wb.connect()), !1;
}
function H(e) {
    return (
        A.GC.update({
            guildId: e.guildId,
            channelId: e.channelId
        }),
        (0, y.isIOS)() && U === R.$7l.BACKGROUND && (null == e.channelId ? A.Wb.close(!0) : A.Wb.isClosed() && (N.Y(!1), A.Wb.connect())),
        !1
    );
}
function Y() {
    A.GC.update();
}
function W(e) {
    var n;
    e.settings.type === O.yP.PRELOADED_USER_SETTINGS && (null === (n = e.settings.proto.clips) || void 0 === n ? void 0 : n.allowVoiceRecording) != null && Y();
}
function K(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        if (h.default.getId() !== n.userId) return e;
        if (n.sessionId === M)
            A.GC.setState({
                guildId: n.guildId,
                channelId: n.channelId
            });
        else {
            if (n.guildId !== A.GC.guildId) return e;
            A.GC.setState({
                guildId: null,
                channelId: null
            });
        }
        return !0;
    }, !1);
}
function z(e) {
    e.guild.id === A.GC.guildId &&
        A.GC.setState({
            guildId: null,
            channelId: null
        });
}
function q(e) {
    let { channelId: n } = e;
    n === A.GC.channelId &&
        A.GC.setState({
            guildId: null,
            channelId: null
        });
}
function Q(e) {
    let { channel: n } = e;
    n.id === A.GC.channelId &&
        A.GC.setState({
            guildId: null,
            channelId: null
        });
}
function X(e) {
    if (e.state !== R.hes.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? A.Wb.streamPing(e.streamKey) : A.Wb.voiceServerPing());
}
function J(e) {
    return (0, y.isIOS)() ? (h.default.isAuthenticated() && (U === R.$7l.INACTIVE && e.state === R.$7l.BACKGROUND && null == A.GC.channelId ? A.Wb.close(!0) : U === R.$7l.BACKGROUND && e.state === R.$7l.ACTIVE && A.Wb.isClosed() && (N.Y(!1), A.Wb.connect())), (U = e.state)) : e.state === R.$7l.ACTIVE && (N.Y(!1), h.default.isAuthenticated() && A.Wb.resetBackoff('App state is active')), !1;
}
function $() {
    return A.GC.update(), !1;
}
function ee() {
    return A.RR.update(), !1;
}
function et(e) {
    return (
        A.Wb.isSessionEstablished() &&
            ('userIds' in e
                ? o()(e.userIds)
                      .chunk(w)
                      .forEach((n) => {
                          A.Wb.requestGuildMembers(e.guildIds, {
                              userIds: n,
                              presences: !!e.presences
                          });
                      })
                : A.Wb.requestGuildMembers(e.guildIds, {
                      query: e.query,
                      limit: e.limit,
                      presences: !!e.presences
                  })),
        !1
    );
}
function en(e) {
    let { guildId: n, query: r, continuationToken: i } = e;
    A.Wb.isSessionEstablished() &&
        A.Wb.searchRecentMembers(n, {
            query: r,
            continuationToken: i
        });
}
function er(e) {
    let { subscriptions: n } = e;
    return A.Wb.isSessionEstablished() && A.Wb.updateGuildSubscriptions(n), !1;
}
function ei(e) {
    let { channelId: n } = e;
    return A.Wb.isSessionEstablished() && A.Wb.callConnect(n), !1;
}
function ea(e) {
    let { channelIds: n } = e;
    return (
        A.Wb.isSessionEstablished() &&
            n.forEach((e) => {
                A.Wb.callConnect(e);
            }),
        !1
    );
}
function es(e) {
    let { sessionId: n, payload: r } = e;
    return A.Wb.isSessionEstablished() && A.Wb.remoteCommand(n, r), !1;
}
function eo(e) {
    A.Wb.isSessionEstablished() && A.Wb.streamDelete(e);
}
function el() {
    let e = eu();
    b.Z.getAllActiveStreamKeys()
        .filter((n) => n !== e)
        .forEach((e) => eo(e));
}
function eu() {
    return b.Z.getAllActiveStreamKeys().find((e) => (0, f.my)(e).ownerId === h.default.getId());
}
function ec(e) {
    let { streamType: n, guildId: r, channelId: i } = e;
    if (A.Wb.isSessionEstablished()) {
        var a, s;
        let e = null != r ? (null === (a = m.Z.getChannel(i)) || void 0 === a ? void 0 : a.rtcRegion) : null === (s = p.Z.getCall(i)) || void 0 === s ? void 0 : s.region;
        A.Wb.streamCreate(n, r, i, null != e ? e : v.Z.getPreferredRegion());
    }
    return !1;
}
function ed(e) {
    let { streamKey: n, paused: r } = e;
    A.Wb.isSessionEstablished() && A.Wb.streamSetPaused(n, r);
}
function ef(e) {
    let { streamKey: n, allowMultiple: r } = e;
    return A.Wb.isSessionEstablished() && (r || el(), A.Wb.streamWatch(n)), !1;
}
function e_(e) {
    let { streamKey: n } = e;
    return eo(n), Y(), !1;
}
function eh() {
    return A.Wb.expeditedHeartbeat(5000, 'user clicked on notification', !0), !1;
}
function ep(e) {
    let { guildId: n, channelId: r, threads: i } = e;
    A.Wb.requestForumUnreads(n, r, i);
}
function em(e) {
    if (A.Wb.connectionState !== S.Z.WILL_RECONNECT) A.Wb.resetSocketOnError(e.args);
}
function eg(e) {
    let { guildIds: n } = e;
    A.Wb.requestSoundboardSounds(n);
}
class eE extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(h.default, I.Z, m.Z, p.Z, _.Z), this.syncWith([g.Z], $), this.syncWith([T.Z], ee);
    }
    getSocket() {
        return A.Wb;
    }
    isTryingToConnect() {
        return !A.Wb.isClosed();
    }
    isConnected() {
        return A.Wb.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return A.Wb.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return P;
    }
}
D(eE, 'displayName', 'GatewayConnectionStore'),
    (n.Z = new eE(u.Z, {
        START_SESSION: B,
        LOGIN_SUCCESS: Z,
        LOGOUT: G,
        CLEAR_CACHES: j,
        CONNECTION_OPEN: (e) => {
            F(e);
        },
        CONNECTION_CLOSED: V,
        RTC_CONNECTION_STATE: X,
        VOICE_CHANNEL_SELECT: H,
        VOICE_STATE_UPDATES: K,
        GUILD_DELETE: z,
        CHANNEL_DELETE: Q,
        CALL_DELETE: q,
        APP_STATE_UPDATE: J,
        GUILD_MEMBERS_REQUEST: et,
        GUILD_SEARCH_RECENT_MEMBERS: en,
        GUILD_SUBSCRIPTIONS_FLUSH: er,
        CALL_CONNECT: ei,
        CALL_CONNECT_MULTIPLE: ea,
        STREAM_CREATE: Y,
        STREAM_START: ec,
        STREAM_WATCH: ef,
        STREAM_STOP: e_,
        STREAM_SET_PAUSED: ed,
        PUSH_NOTIFICATION_CLICK: eh,
        REQUEST_FORUM_UNREADS: ep,
        REQUEST_SOUNDBOARD_SOUNDS: eg,
        REMOTE_COMMAND: es,
        RESET_SOCKET: em,
        CLIPS_SETTINGS_UPDATE: Y,
        RUNNING_GAMES_CHANGE: Y,
        USER_SETTINGS_PROTO_UPDATE: W
    }));
