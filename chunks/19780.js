let r, i;
n.d(t, {
    ZP: () => z,
    lx: () => W,
    ml: () => H
}),
    n(411104);
var o,
    a = n(442837),
    s = n(570140),
    l = n(437263),
    c = n(764976),
    u = n(258609),
    d = n(450109),
    f = n(338336),
    _ = n(314897),
    p = n(938475),
    h = n(981631),
    m = n(65154);
function g(e, t, n) {
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
let b = [],
    y = null,
    v = null,
    O = null,
    I = null,
    S = !1,
    T = !1;
function N(e, t) {
    if (null == i) throw Error('Creating RTCConnection without session.');
    let r = _.default.getId(),
        o = new (n(861687).Z)({
            userId: r,
            sessionId: i,
            guildId: e,
            channelId: t
        });
    return (
        o.on(l.z.State, (e, t, n) => {
            s.Z.wait(() =>
                s.Z.dispatch(
                    E(
                        {
                            type: 'RTC_CONNECTION_STATE',
                            state: e
                        },
                        t,
                        n
                    )
                )
            );
        }),
        o.on(l.z.Video, (e, t, n, r, i) => {
            s.Z.wait(() =>
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_VIDEO',
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: r,
                    rtcServerId: i,
                    context: m.Yn.DEFAULT
                })
            );
        }),
        o.on(l.z.Ping, (e, t) => {
            s.Z.wait(() =>
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_PING',
                    pings: e,
                    quality: t
                })
            );
        }),
        o.on(l.z.OutboundLossRate, (e) => {
            s.Z.wait(() =>
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_LOSS_RATE',
                    lossRate: e
                })
            );
        }),
        o.on(l.z.Speaking, (e, t) => {
            null == O || O.setSpeaking(e, t);
        }),
        o.on(l.z.Flags, (e, t) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_FLAGS',
                    flags: t,
                    userId: e,
                    guildId: o.guildId,
                    channelId: o.channelId,
                    context: o.context
                });
            });
        }),
        o.on(l.z.ClientConnect, (e) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_CONNECT',
                    userIds: e,
                    guildId: o.guildId,
                    channelId: o.channelId,
                    context: o.context
                });
            });
        }),
        o.on(l.z.ClientDisconnect, (e) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_DISCONNECT',
                    userId: e,
                    guildId: o.guildId,
                    channelId: o.channelId,
                    context: o.context
                });
            });
        }),
        o.on(l.z.Platform, (e, t, n) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_PLATFORM',
                    platform: t,
                    userId: e,
                    channelId: n
                });
            });
        }),
        o.on(l.z.SecureFramesUpdate, () => {
            s.Z.wait(() => {
                s.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
            });
        }),
        o.on(l.z.RosterMapUpdate, (e) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                    userIds: e
                });
            });
        }),
        (O = new c.Z(_.default.getId(), t)),
        (I = null),
        (S = !1),
        (T = !1),
        o
    );
}
function A() {
    if (null == r) return !1;
    (I = r.getDuration()),
        r.destroy(),
        (r = null),
        (O = null),
        s.Z.dispatch({
            type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
            context: m.Yn.DEFAULT
        });
}
function C(e) {
    return (i = e.sessionId), (y = null), (v = null), A(), !1;
}
function R() {
    (i = null), (y = null), (v = null), A();
}
function P(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, o, a;
        if ((null == O || O.updateVoiceStates(t.userId, t.channelId), (S = S || (null != (n = null == O ? void 0 : O.getStats().max_voice_state_count) ? n : 0) > 1), _.default.getId() !== t.userId)) return !1;
        if (null != r) t.sessionId === i ? ((null != t.guildId && t.guildId === r.guildId) || (null == t.guildId && t.channelId === r.channelId) ? (null == t.channelId ? A() : (r.channelId = t.channelId)) : ((t.guildId !== r.guildId && null == t.channelId) || A(), null != t.channelId && ((y = null), (v = null), (r = N(t.guildId, t.channelId)), (S = (null != (o = null == O ? void 0 : O.getStats().max_voice_state_count) ? o : 0) > 1)))) : t.guildId === r.guildId && ((null == u.Z.getAwaitingRemoteSessionInfo() || null == u.Z.getRemoteSessionId()) && (y = r.channelId), A());
        else {
            if (t.sessionId !== i || null == t.channelId) return e;
            (y = null), (v = null), (r = N(t.guildId, t.channelId)), (S = (null != (a = null == O ? void 0 : O.getStats().max_voice_state_count) ? a : 0) > 1);
        }
        return !0;
    }, !1);
}
function w(e) {
    if (null == r || (null != e.guildId && e.guildId !== r.guildId) || (null != e.channelId && e.channelId !== r.channelId)) return !1;
    r.connect(e.endpoint, e.token);
}
function D() {
    y = null;
}
function L() {
    v = null;
}
function x(e) {
    let { guild: t } = e;
    if (null == r || r.guildId !== t.id) return !1;
    A();
}
function M(e) {
    let { channelId: t } = e;
    if (null == r || r.channelId !== t) return !1;
    A();
}
function k(e) {
    let { channel: t } = e;
    if (null == r || r.channelId !== t.id) return !1;
    A();
}
function j(e) {
    let { channelId: t } = e;
    if (null == r || (null != t && r.channelId === t)) return !1;
    A();
}
function U(e) {
    return e.state === h.$7l.ACTIVE && null != r && r.resetBackoff('App state is active'), !1;
}
function G(e) {
    return e.state === h.hes.RTC_CONNECTED && (T = !0), !0;
}
function B() {
    return !0;
}
function F(e) {
    return e.connection === r;
}
function V(e) {
    let { userId: t, context: n, quality: i } = e;
    null == r || r.setSimulcastDebugOverride(t, n, i);
}
function Z(e) {
    let { streamId: t, width: n, height: i } = e;
    null == r || r.setVideoSize(t, n, i);
}
function H(e) {
    var t, n, r, i, o;
    let a = e.find((e) => 'video' === e.type);
    return null != a && 'video' === a.type
        ? {
              type: 'sender',
              packetsSentOrReceived: null != (n = a.packetsSent) ? n : 0,
              packetsLost: null != (r = a.packetsLost) ? r : 0,
              frameRate: null != (i = a.frameRateEncode) ? i : 0,
              resolution: null != (o = null == (t = a.resolution) ? void 0 : t.height) ? o : 0,
              bitrate: 0
          }
        : null;
}
function W(e) {
    var t, n, r, i, o, a;
    if (null == e) return null;
    let s = e.find((e) => 'video' === e.type);
    return null != s && 'video' === s.type
        ? {
              type: 'receiver',
              packetsSentOrReceived: null != (n = s.packetsReceived) ? n : 0,
              packetsLost: null != (r = s.packetsLost) ? r : 0,
              frameRate: null != (i = s.frameRateDecode) ? i : 0,
              bitrate: null != (o = s.bitrate) ? o : 0,
              resolution: null != (a = null == (t = s.resolution) ? void 0 : t.height) ? a : 0
          }
        : null;
}
class Y extends (o = a.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP), (0, f.r)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return r;
    }
    getState() {
        return null != r ? r.state : h.hes.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === h.hes.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === h.hes.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return y;
    }
    getLastSessionVoiceChannelId() {
        return v;
    }
    setLastSessionVoiceChannelId(e) {
        v = e;
    }
    getGuildId() {
        return null == r ? void 0 : r.guildId;
    }
    getChannelId() {
        return null == r ? void 0 : r.channelId;
    }
    getHostname() {
        return null != r ? r.hostname : '';
    }
    getQuality() {
        return null != r ? r.quality : h.IE4.UNKNOWN;
    }
    getPings() {
        return null != r ? r.getPings() : b;
    }
    getAveragePing() {
        return null != r ? (null == r ? void 0 : r.getAveragePing()) : 0;
    }
    getLastPing() {
        return null == r ? void 0 : r.getLastPing();
    }
    getOutboundLossRate() {
        return null == r ? void 0 : r.getOutboundLossRate();
    }
    getMediaSessionId() {
        return null == r ? void 0 : r.getMediaSessionId();
    }
    getRTCConnectionId() {
        return null == r ? void 0 : r.getRTCConnectionId();
    }
    getDuration() {
        var e;
        return null != (e = null == r ? void 0 : r.getDuration()) ? e : I;
    }
    getVoiceFilterSpeakingDurationMs() {
        return null == r ? void 0 : r.getVoiceFilterSpeakingDurationMs();
    }
    getPacketStats() {
        return null == r ? void 0 : r.getPacketStats();
    }
    getVoiceStateStats() {
        return null == O ? void 0 : O.getStats();
    }
    getWasEverMultiParticipant() {
        return S;
    }
    getWasEverRtcConnected() {
        return T;
    }
    getUserIds() {
        return null == r ? void 0 : r.getUserIds();
    }
    isUserConnected(e) {
        return null == r ? void 0 : r.getIsUserConnected(e);
    }
    getSecureFramesState() {
        return null == r ? void 0 : r.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e) {
        let t = null == r ? void 0 : r.getSecureFramesRosterMap();
        return null == t ? void 0 : t.get(e);
    }
    getStatsHistory(e, t) {
        if (null == t || null == e) return null;
        let n = t === _.default.getId();
        return d.Z.getStatsHistory(m.Yn.DEFAULT).map((e) => (n ? H(e.rtp.outbound) : W(e.rtp.inbound[t])));
    }
}
g(Y, 'displayName', 'RTCConnectionStore');
let K = new Y(
    s.Z,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: C,
              CONNECTION_CLOSED: R,
              RTC_CONNECTION_STATE: G,
              RTC_CONNECTION_PING: B,
              RTC_CONNECTION_LOSS_RATE: B,
              RTC_CONNECTION_UPDATE_ID: F,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: B,
              RTC_CONNECTION_CLIENT_CONNECT: B,
              RTC_CONNECTION_CLIENT_DISCONNECT: B,
              VIDEO_SIZE_UPDATE: Z,
              VOICE_STATE_UPDATES: P,
              VOICE_CHANNEL_SELECT: j,
              VOICE_SERVER_UPDATE: w,
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: D,
              REMOTE_SESSION_CONNECT: D,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: L,
              GUILD_DELETE: x,
              CHANNEL_DELETE: k,
              THREAD_DELETE: k,
              CALL_DELETE: M,
              APP_STATE_UPDATE: U,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: V
          }
);
Promise.resolve()
    .then(n.bind(n, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = K.getState();
        });
    });
let z = K;
