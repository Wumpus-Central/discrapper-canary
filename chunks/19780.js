let r, i;
(n.d(t, { Z: () => z }), n(415506), n(388685));
var a,
    o = n(442837),
    s = n(570140),
    l = n(437263),
    c = n(764976),
    u = n(258609),
    d = n(338336),
    f = n(314897),
    _ = n(938475),
    p = n(981631),
    h = n(65154);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
let E = [],
    b = null,
    y = null,
    O = null,
    v = null,
    I = !1,
    T = !1,
    S = null;
function A(e, t) {
    if (null == i) throw Error('Creating RTCConnection without session.');
    let r = f.default.getId(),
        a = new (n(861687).Z)({
            userId: r,
            sessionId: i,
            guildId: e,
            channelId: t
        });
    return (
        a.on(l.z.State, (e, t, n) => {
            s.Z.wait(() =>
                s.Z.dispatch(
                    g(
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
        a.on(l.z.Video, (e, t, n, r, i) => {
            s.Z.wait(() =>
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_VIDEO',
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: r,
                    rtcServerId: i,
                    context: h.Yn.DEFAULT,
                    mediaEngineConnectionId: a.getMediaEngineConnectionId()
                })
            );
        }),
        a.on(l.z.Ping, (e, t) => {
            s.Z.wait(() =>
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_PING',
                    pings: e,
                    quality: t
                })
            );
        }),
        a.on(l.z.OutboundLossRate, (e) => {
            s.Z.wait(() =>
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_LOSS_RATE',
                    lossRate: e
                })
            );
        }),
        a.on(l.z.Speaking, (e, t) => {
            null == O || O.setSpeaking(e, t);
        }),
        a.on(l.z.Flags, (e, t) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_FLAGS',
                    flags: t,
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(l.z.UsersMerged, (e, t) => {
            s.Z.dispatch({
                type: 'RTC_CONNECTION_USERS_MERGED',
                userIds: e,
                context: t
            });
        }),
        a.on(l.z.ClientConnect, (e) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_CONNECT',
                    userIds: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(l.z.ClientDisconnect, (e) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_DISCONNECT',
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(l.z.Platform, (e, t, n) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_PLATFORM',
                    platform: t,
                    userId: e,
                    channelId: n
                });
            });
        }),
        a.on(l.z.SecureFramesUpdate, () => {
            s.Z.wait(() => {
                s.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
            });
        }),
        a.on(l.z.RosterMapUpdate, (e) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                    userIds: e
                });
            });
        }),
        (O = new c.Z(f.default.getId(), t)),
        (v = null),
        (I = !1),
        (T = !1),
        a
    );
}
function N() {
    if (null == r) return !1;
    ((v = r.getDuration()),
        s.Z.dispatch({
            type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
            mediaEngineConnectionId: r.getMediaEngineConnectionId()
        }),
        r.destroy(),
        (r = null),
        (O = null));
}
function C(e) {
    return ((i = e.sessionId), (b = null), (y = null), N(), !1);
}
function R() {
    ((i = null), (b = null), (y = null), N());
}
function P(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, a, o;
        if ((null == O || O.updateVoiceStates(t.userId, t.channelId), (I = I || (null != (n = null == O ? void 0 : O.getStats().max_voice_state_count) ? n : 0) > 1), f.default.getId() !== t.userId)) return !1;
        if (null != r) t.sessionId === i ? ((null != t.guildId && t.guildId === r.guildId) || (null == t.guildId && t.channelId === r.channelId) ? (null == t.channelId ? N() : (r.channelId = t.channelId)) : ((t.guildId !== r.guildId && null == t.channelId) || N(), null != t.channelId && ((b = null), (y = null), (r = A(t.guildId, t.channelId)), (I = (null != (a = null == O ? void 0 : O.getStats().max_voice_state_count) ? a : 0) > 1)))) : t.guildId === r.guildId && ((null == u.Z.getAwaitingRemoteSessionInfo() || null == u.Z.getRemoteSessionId()) && (b = r.channelId), N());
        else {
            if (t.sessionId !== i || null == t.channelId) return e;
            ((b = null), (y = null), (r = A(t.guildId, t.channelId)), (I = (null != (o = null == O ? void 0 : O.getStats().max_voice_state_count) ? o : 0) > 1));
        }
        return !0;
    }, !1);
}
function w(e) {
    if (null == r || (null != e.guildId && e.guildId !== r.guildId) || (null != e.channelId && e.channelId !== r.channelId)) return !1;
    r.connect(e.endpoint, e.token);
}
function D() {
    b = null;
}
function L() {
    y = null;
}
function x(e) {
    let { guild: t } = e;
    if (null == r || r.guildId !== t.id) return !1;
    N();
}
function M(e) {
    let { channelId: t } = e;
    if (null == r || r.channelId !== t) return !1;
    N();
}
function k(e) {
    let { channel: t } = e;
    if (null == r || r.channelId !== t.id) return !1;
    N();
}
function j(e) {
    let { channelId: t } = e;
    if (null == r || (null != t && r.channelId === t)) return !1;
    N();
}
function U(e) {
    return (e.state === p.$7l.ACTIVE && null != r && r.resetBackoff('App state is active'), !1);
}
function G(e) {
    return (e.state === p.hes.RTC_CONNECTED && (T = !0), !0);
}
function B(e) {
    null == r || r.setNoiseCancellationEnabled(e.enabled);
}
function V() {
    return !0;
}
function F(e) {
    let { context: t, wants: n } = e;
    if (
        t !== h.Yn.DEFAULT ||
        !Object.entries(n).some((e) => {
            let [t, n] = e;
            return 'any' !== t && 0 !== n;
        })
    )
        return !1;
    S = performance.now();
}
function Z(e) {
    return e.connection === r;
}
function H(e) {
    let { userId: t, context: n, quality: i } = e;
    null == r || r.setSimulcastDebugOverride(t, n, i);
}
function Y(e) {
    let { streamId: t, width: n, height: i } = e;
    null == r || r.setVideoSize(t, n, i);
}
class W extends (a = o.ZP.Store) {
    initialize() {
        (this.waitFor(_.ZP), (0, d.r)(this.getRTCConnectionId, this.getMediaSessionId));
    }
    getRTCConnection() {
        return r;
    }
    getState() {
        return null != r ? r.state : p.hes.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === p.hes.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === p.hes.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return b;
    }
    getLastSessionVoiceChannelId() {
        return y;
    }
    setLastSessionVoiceChannelId(e) {
        y = e;
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
        return null != r ? r.quality : p.IE4.UNKNOWN;
    }
    getPings() {
        return null != r ? r.getPings() : E;
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
        return null != (e = null == r ? void 0 : r.getDuration()) ? e : v;
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
        return I;
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
    getLastNonZeroRemoteVideoSinkWantsTime() {
        return S;
    }
}
m(W, 'displayName', 'RTCConnectionStore');
let K = new W(
    s.Z,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: C,
              CONNECTION_CLOSED: R,
              RTC_CONNECTION_STATE: G,
              RTC_CONNECTION_PING: V,
              RTC_CONNECTION_LOSS_RATE: V,
              RTC_CONNECTION_UPDATE_ID: Z,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: V,
              RTC_CONNECTION_CLIENT_CONNECT: V,
              RTC_CONNECTION_CLIENT_DISCONNECT: V,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: F,
              VIDEO_SIZE_UPDATE: Y,
              VOICE_STATE_UPDATES: P,
              VOICE_CHANNEL_SELECT: j,
              AUDIO_SET_NOISE_CANCELLATION: B,
              VOICE_SERVER_UPDATE: w,
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: D,
              REMOTE_SESSION_CONNECT: D,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: L,
              GUILD_DELETE: x,
              CHANNEL_DELETE: k,
              THREAD_DELETE: k,
              CALL_DELETE: M,
              APP_STATE_UPDATE: U,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: H
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
