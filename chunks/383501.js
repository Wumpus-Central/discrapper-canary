let r, i;
n.d(t, { A: () => Z }), n(65821), n(896048);
var a,
    s = n(311907),
    o = n(73153),
    l = n(507821),
    c = n(859159),
    u = n(643501),
    d = n(75076),
    f = n(961350),
    p = n(607567),
    _ = n(652215),
    h = n(731854);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
let E = [],
    b = null,
    y = null,
    O = null,
    A = null,
    v = !1,
    S = !1,
    I = null,
    T = !1,
    C = null;
function N(e, t) {
    if (null == i) throw Error("Creating RTCConnection without session.");
    let r = f.default.getId(),
        a = new (n(767065).A)({
            userId: r,
            sessionId: i,
            guildId: e,
            channelId: t,
            joinVoiceId: C,
        });
    return (
        a.on(l.q.State, (e, t, n) => {
            o.h.wait(() =>
                o.h.dispatch(
                    g(
                        {
                            type: "RTC_CONNECTION_STATE",
                            state: e,
                        },
                        t,
                        n,
                    ),
                ),
            );
        }),
        a.on(l.q.Video, (e, t, n, r, i) => {
            o.h.wait(() =>
                o.h.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: r,
                    rtcServerId: i,
                    context: h.x.DEFAULT,
                    mediaEngineConnectionId: a.getMediaEngineConnectionId(),
                }),
            );
        }),
        a.on(l.q.Ping, (e, t) => {
            o.h.wait(() =>
                o.h.dispatch({
                    type: "RTC_CONNECTION_PING",
                    pings: e,
                    quality: t,
                }),
            );
        }),
        a.on(l.q.OutboundLossRate, (e) => {
            o.h.wait(() =>
                o.h.dispatch({
                    type: "RTC_CONNECTION_LOSS_RATE",
                    lossRate: e,
                }),
            );
        }),
        a.on(l.q.Speaking, (e, t) => {
            null == A || A.setSpeaking(e, t);
        }),
        a.on(l.q.Flags, (e, t) => {
            o.h.wait(() => {
                o.h.dispatch({
                    type: "RTC_CONNECTION_FLAGS",
                    flags: t,
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context,
                });
            });
        }),
        a.on(l.q.UsersMerged, (e, t) => {
            o.h.dispatch({
                type: "RTC_CONNECTION_USERS_MERGED",
                userIds: e,
                context: t,
            });
        }),
        a.on(l.q.ClientConnect, (e) => {
            o.h.wait(() => {
                o.h.dispatch({
                    type: "RTC_CONNECTION_CLIENT_CONNECT",
                    userIds: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context,
                });
            });
        }),
        a.on(l.q.ClientDisconnect, (e) => {
            o.h.wait(() => {
                o.h.dispatch({
                    type: "RTC_CONNECTION_CLIENT_DISCONNECT",
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context,
                });
            });
        }),
        a.on(l.q.Platform, (e, t, n) => {
            o.h.wait(() => {
                o.h.dispatch({
                    type: "RTC_CONNECTION_PLATFORM",
                    platform: t,
                    userId: e,
                    channelId: n,
                });
            });
        }),
        a.on(l.q.SecureFramesUpdate, () => {
            o.h.wait(() => {
                o.h.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
            });
        }),
        a.on(l.q.RosterMapUpdate, (e) => {
            o.h.wait(() => {
                o.h.dispatch({
                    type: "RTC_CONNECTION_ROSTER_MAP_UPDATE",
                    userIds: e,
                });
            });
        }),
        (A = new c.A(f.default.getId(), t)),
        (y = null),
        (v = !1),
        (S = !1),
        a
    );
}
function R() {
    var e;
    if (null == r) return !1;
    (y = {
        duration: r.getDuration(),
        mediaSessionId: null != (e = r.getMediaSessionId()) ? e : null,
        rtcConnectionId: r.getRTCConnectionId(),
        wasEverMultiParticipant: v,
        wasEverRtcConnected: S,
        voiceStateAnalytics: A,
        channelId: r.channelId,
    }),
        o.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: r.getMediaEngineConnectionId(),
        }),
        r.destroy(),
        (r = null),
        (A = null),
        (T = !1);
}
function w(e) {
    return (i = e.sessionId), (b = null), (O = null), R(), !1;
}
function P() {
    (i = null), (b = null), (O = null), R();
}
function D(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, a, s;
        if (
            (null == A || A.updateVoiceStates(t.userId, t.channelId),
            (v = v || (null != (n = null == A ? void 0 : A.getStats().max_voice_state_count) ? n : 0) > 1),
            f.default.getId() !== t.userId)
        )
            return e;
        if (null != r)
            t.sessionId === i
                ? (null != t.guildId && t.guildId === r.guildId) || (null == t.guildId && t.channelId === r.channelId)
                    ? null == t.channelId
                        ? R()
                        : (r.setNextChannelId(t.channelId), (T = !0), (C = null), r.clearJoinVoiceId())
                    : ((t.guildId !== r.guildId && null == t.channelId) || R(),
                      null != t.channelId &&
                          ((b = null),
                          (O = null),
                          (r = N(t.guildId, t.channelId)),
                          (v = (null != (a = null == A ? void 0 : A.getStats().max_voice_state_count) ? a : 0) > 1)))
                : t.guildId === r.guildId &&
                  ((null == u.default.getAwaitingRemoteSessionInfo() || null == u.default.getRemoteSessionId()) &&
                      (b = r.channelId),
                  R());
        else {
            if (t.sessionId !== i || null == t.channelId) return e;
            (b = null),
                (O = null),
                (r = N(t.guildId, t.channelId)),
                (v = (null != (s = null == A ? void 0 : A.getStats().max_voice_state_count) ? s : 0) > 1);
        }
        return !0;
    }, !1);
}
function x(e) {
    if (
        null == r ||
        (null != e.guildId && e.guildId !== r.guildId) ||
        (null != e.channelId && e.channelId !== r.getNextChannelId())
    )
        return !1;
    r.connect(e.endpoint, e.token);
}
function L() {
    b = null;
}
function j() {
    O = null;
}
function M(e) {
    let { guild: t } = e;
    if (null == r || r.guildId !== t.id) return !1;
    R();
}
function k(e) {
    let { channelId: t } = e;
    if (null == r || r.channelId !== t) return !1;
    R();
}
function U(e) {
    let { channel: t } = e;
    if (null == r || r.channelId !== t.id) return !1;
    R();
}
function G(e) {
    let { channelId: t, joinVoiceId: n } = e;
    null != r && (null == t || r.channelId !== t) && R(), (C = n);
}
function V(e) {
    return e.state === _.g6G.ACTIVE && null != r && r.resetBackoff("App state is active"), !1;
}
function F(e) {
    return e.state === _.S7L.RTC_CONNECTED && (S = !0), !0;
}
function B(e) {
    null == r || r.setNoiseCancellationEnabled(e.enabled);
}
function H() {
    return !0;
}
function Y(e) {
    let { context: t, wants: n } = e;
    if (
        t !== h.x.DEFAULT ||
        !Object.entries(n).some((e) => {
            let [t, n] = e;
            return "any" !== t && 0 !== n;
        })
    )
        return !1;
    I = performance.now();
}
function W(e) {
    return e.connection === r;
}
function K(e) {
    let { userId: t, context: n, quality: i } = e;
    null == r || r.setSimulcastDebugOverride(t, n, i);
}
function z(e) {
    let { streamId: t, dimensions: n, zoom: i } = e;
    null == r || r.setVideoSize(t, n, i);
}
class q extends (a = s.Ay.Store) {
    initialize() {
        this.waitFor(f.default, u.default, p.Ay), (0, d.I)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return r;
    }
    getState() {
        return null != r ? r.state : _.S7L.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === _.S7L.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === _.S7L.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return b;
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
        return null != r ? r.hostname : "";
    }
    getQuality() {
        return null != r ? r.quality : _.bFR.UNKNOWN;
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
        return null != (e = null == r ? void 0 : r.getDuration()) ? e : null == y ? void 0 : y.duration;
    }
    getLastRTCConnectionState() {
        return y;
    }
    getVoiceFilterSpeakingDurationMs() {
        return null == r ? void 0 : r.getVoiceFilterSpeakingDurationMs();
    }
    getPacketStats() {
        return null == r ? void 0 : r.getPacketStats();
    }
    getVoiceStateStats() {
        return null == A ? void 0 : A.getStats();
    }
    getUserVoiceSettingsStats(e) {
        return null == A ? void 0 : A.getUserVoiceSettingsStats(e);
    }
    getWasEverMultiParticipant() {
        return v;
    }
    getWasEverRtcConnected() {
        return S;
    }
    getUserIds() {
        return null == r ? void 0 : r.getUserIds();
    }
    getJoinVoiceId() {
        return C;
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
        return I;
    }
    getWasMoved() {
        return T;
    }
}
m(q, "displayName", "RTCConnectionStore");
let X = new q(
    o.h,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: w,
              CONNECTION_CLOSED: P,
              RTC_CONNECTION_STATE: F,
              RTC_CONNECTION_PING: H,
              RTC_CONNECTION_LOSS_RATE: H,
              RTC_CONNECTION_UPDATE_ID: W,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: H,
              RTC_CONNECTION_CLIENT_CONNECT: H,
              RTC_CONNECTION_CLIENT_DISCONNECT: H,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: Y,
              VIDEO_SIZE_UPDATE: z,
              VOICE_STATE_UPDATES: D,
              VOICE_CHANNEL_SELECT: G,
              AUDIO_SET_NOISE_CANCELLATION: B,
              VOICE_SERVER_UPDATE: x,
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: L,
              REMOTE_SESSION_CONNECT: L,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: j,
              GUILD_DELETE: M,
              CHANNEL_DELETE: U,
              THREAD_DELETE: U,
              CALL_DELETE: k,
              APP_STATE_UPDATE: V,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: K,
          },
);
Promise.resolve()
    .then(n.bind(n, 954571))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = X.getState();
        });
    });
let Z = X;
