let r, i;
n.d(t, {
    ZP: () => q,
    lx: () => Y,
    ml: () => W
}),
    n(411104);
var o,
    a = n(442837),
    s = n(570140),
    l = n(437263),
    c = n(764976),
    u = n(358221),
    d = n(258609),
    f = n(450109),
    _ = n(338336),
    p = n(314897),
    h = n(938475),
    m = n(981631),
    g = n(65154);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
let v = [],
    y = null,
    O = null,
    I = null,
    S = null,
    T = !1,
    A = !1;
function N(e, t) {
    if (null == i) throw Error('Creating RTCConnection without session.');
    let r = p.default.getId(),
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
                    b(
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
                    context: g.Yn.DEFAULT
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
            null == I || I.setSpeaking(e, t);
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
        (I = new c.Z(p.default.getId(), t)),
        (S = null),
        (T = !1),
        (A = !1),
        o
    );
}
function C() {
    if (null == r) return !1;
    (S = r.getDuration()), r.destroy(), (r = null), (I = null), f.Z.resetStatsHistory(g.Yn.DEFAULT);
}
function R(e) {
    return (i = e.sessionId), (y = null), (O = null), C(), !1;
}
function P() {
    (i = null), (y = null), (O = null), C();
}
function w(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, o, a;
        if ((null == I || I.updateVoiceStates(t.userId, t.channelId), (T = T || (null !== (n = null == I ? void 0 : I.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1), p.default.getId() !== t.userId)) return !1;
        if (null != r) t.sessionId === i ? ((null != t.guildId && t.guildId === r.guildId) || (null == t.guildId && t.channelId === r.channelId) ? (null == t.channelId ? C() : (r.channelId = t.channelId)) : ((t.guildId !== r.guildId && null == t.channelId) || C(), null != t.channelId && ((y = null), (O = null), (r = N(t.guildId, t.channelId)), (T = (null !== (o = null == I ? void 0 : I.getStats().max_voice_state_count) && void 0 !== o ? o : 0) > 1)))) : t.guildId === r.guildId && ((null == d.Z.getAwaitingRemoteSessionInfo() || null == d.Z.getRemoteSessionId()) && (y = r.channelId), C());
        else {
            if (t.sessionId !== i || null == t.channelId) return e;
            (y = null), (O = null), (r = N(t.guildId, t.channelId)), (T = (null !== (a = null == I ? void 0 : I.getStats().max_voice_state_count) && void 0 !== a ? a : 0) > 1);
        }
        return !0;
    }, !1);
}
function D(e) {
    if (null == r || (null != e.guildId && e.guildId !== r.guildId) || (null != e.channelId && e.channelId !== r.channelId)) return !1;
    r.connect(e.endpoint, e.token);
}
function L() {
    y = null;
}
function x() {
    O = null;
}
function M(e) {
    let { guild: t } = e;
    if (null == r || r.guildId !== t.id) return !1;
    C();
}
function k(e) {
    let { channelId: t } = e;
    if (null == r || r.channelId !== t) return !1;
    C();
}
function j(e) {
    let { channel: t } = e;
    if (null == r || r.channelId !== t.id) return !1;
    C();
}
function U(e) {
    let { channelId: t } = e;
    if (null == r || (null != t && r.channelId === t)) return !1;
    C();
}
function G(e) {
    return e.state === m.$7l.ACTIVE && null != r && r.resetBackoff('App state is active'), !1;
}
function B(e) {
    return e.state === m.hes.RTC_CONNECTED && (A = !0), !0;
}
function F() {
    return !0;
}
function V(e) {
    return e.connection === r;
}
function Z(e) {
    let { userId: t, context: n, quality: i } = e;
    null == r || r.setSimulcastDebugOverride(t, n, i);
}
function H(e) {
    let { streamId: t, width: n, height: i } = e;
    null == r || r.setVideoSize(t, n, i);
}
function W(e) {
    var t, n, r, i, o;
    let a = e.find((e) => 'video' === e.type);
    return null != a && 'video' === a.type
        ? {
              type: 'sender',
              packetsSentOrReceived: null !== (n = a.packetsSent) && void 0 !== n ? n : 0,
              packetsLost: null !== (r = a.packetsLost) && void 0 !== r ? r : 0,
              frameRate: null !== (i = a.frameRateEncode) && void 0 !== i ? i : 0,
              resolution: null !== (o = null === (t = a.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== o ? o : 0,
              bitrate: 0
          }
        : null;
}
function Y(e) {
    var t, n, r, i, o, a;
    if (null == e) return null;
    let s = e.find((e) => 'video' === e.type);
    return null != s && 'video' === s.type
        ? {
              type: 'receiver',
              packetsSentOrReceived: null !== (n = s.packetsReceived) && void 0 !== n ? n : 0,
              packetsLost: null !== (r = s.packetsLost) && void 0 !== r ? r : 0,
              frameRate: null !== (i = s.frameRateDecode) && void 0 !== i ? i : 0,
              bitrate: null !== (o = s.bitrate) && void 0 !== o ? o : 0,
              resolution: null !== (a = null === (t = s.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0
          }
        : null;
}
class K extends (o = a.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP), (0, _.r)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return r;
    }
    getState() {
        return null != r ? r.state : m.hes.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === m.hes.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === m.hes.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return y;
    }
    getLastSessionVoiceChannelId() {
        return O;
    }
    setLastSessionVoiceChannelId(e) {
        O = e;
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
        return null != r ? r.quality : m.IE4.UNKNOWN;
    }
    getPings() {
        return null != r ? r.getPings() : v;
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
        return null !== (e = null == r ? void 0 : r.getDuration()) && void 0 !== e ? e : S;
    }
    getVoiceFilterSpeakingDurationMs() {
        return null == r ? void 0 : r.getVoiceFilterSpeakingDurationMs();
    }
    getPacketStats() {
        return null == r ? void 0 : r.getPacketStats();
    }
    getVoiceStateStats() {
        return null == I ? void 0 : I.getStats();
    }
    getWasEverMultiParticipant() {
        return T;
    }
    getWasEverRtcConnected() {
        return A;
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
        if (null == t || null == e || u.Z.getParticipants(e).length <= 1) return null;
        let n = t === p.default.getId();
        return f.Z.getStatsHistory(g.Yn.DEFAULT).map((e) => (n ? W(e.rtp.outbound) : Y(e.rtp.inbound[t])));
    }
}
E(K, 'displayName', 'RTCConnectionStore');
let z = new K(
    s.Z,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: R,
              CONNECTION_CLOSED: P,
              RTC_CONNECTION_STATE: B,
              RTC_CONNECTION_PING: F,
              RTC_CONNECTION_LOSS_RATE: F,
              RTC_CONNECTION_UPDATE_ID: V,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: F,
              RTC_CONNECTION_CLIENT_CONNECT: F,
              RTC_CONNECTION_CLIENT_DISCONNECT: F,
              VIDEO_SIZE_UPDATE: H,
              VOICE_STATE_UPDATES: w,
              VOICE_CHANNEL_SELECT: U,
              VOICE_SERVER_UPDATE: D,
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: L,
              REMOTE_SESSION_CONNECT: L,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: x,
              GUILD_DELETE: M,
              CHANNEL_DELETE: j,
              THREAD_DELETE: j,
              CALL_DELETE: k,
              APP_STATE_UPDATE: G,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: Z
          }
);
Promise.resolve()
    .then(n.bind(n, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = z.getState();
        });
    });
let q = z;
