let r, i;
n.d(t, { Z: () => Q }), n(415506), n(388685);
var a,
    o = n(442837),
    s = n(570140),
    l = n(437263),
    c = n(764976),
    u = n(258609),
    d = n(338336),
    f = n(314897),
    p = n(938475),
    _ = n(981631),
    m = n(65154);
function h(e, t, n) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let E = [],
    b = null,
    y = null,
    O = null,
    v = null,
    S = !1,
    I = !1,
    T = null,
    A = !1,
    C = null;
function N(e, t) {
    if (null == i) throw Error("Creating RTCConnection without session.");
    let r = f.default.getId(),
        a = new (n(861687).Z)({
            userId: r,
            sessionId: i,
            guildId: e,
            channelId: t,
            joinVoiceId: C,
        });
    return (
        a.on(l.z.State, (e, t, n) => {
            s.Z.wait(() =>
                s.Z.dispatch(
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
        a.on(l.z.Video, (e, t, n, r, i) => {
            s.Z.wait(() =>
                s.Z.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: r,
                    rtcServerId: i,
                    context: m.Yn.DEFAULT,
                    mediaEngineConnectionId: a.getMediaEngineConnectionId(),
                }),
            );
        }),
        a.on(l.z.Ping, (e, t) => {
            s.Z.wait(() =>
                s.Z.dispatch({
                    type: "RTC_CONNECTION_PING",
                    pings: e,
                    quality: t,
                }),
            );
        }),
        a.on(l.z.OutboundLossRate, (e) => {
            s.Z.wait(() =>
                s.Z.dispatch({
                    type: "RTC_CONNECTION_LOSS_RATE",
                    lossRate: e,
                }),
            );
        }),
        a.on(l.z.Speaking, (e, t) => {
            null == v || v.setSpeaking(e, t);
        }),
        a.on(l.z.Flags, (e, t) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: "RTC_CONNECTION_FLAGS",
                    flags: t,
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context,
                });
            });
        }),
        a.on(l.z.UsersMerged, (e, t) => {
            s.Z.dispatch({
                type: "RTC_CONNECTION_USERS_MERGED",
                userIds: e,
                context: t,
            });
        }),
        a.on(l.z.ClientConnect, (e) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: "RTC_CONNECTION_CLIENT_CONNECT",
                    userIds: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context,
                });
            });
        }),
        a.on(l.z.ClientDisconnect, (e) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: "RTC_CONNECTION_CLIENT_DISCONNECT",
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context,
                });
            });
        }),
        a.on(l.z.Platform, (e, t, n) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: "RTC_CONNECTION_PLATFORM",
                    platform: t,
                    userId: e,
                    channelId: n,
                });
            });
        }),
        a.on(l.z.SecureFramesUpdate, () => {
            s.Z.wait(() => {
                s.Z.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
            });
        }),
        a.on(l.z.RosterMapUpdate, (e) => {
            s.Z.wait(() => {
                s.Z.dispatch({
                    type: "RTC_CONNECTION_ROSTER_MAP_UPDATE",
                    userIds: e,
                });
            });
        }),
        (v = new c.Z(f.default.getId(), t)),
        (y = null),
        (S = !1),
        (I = !1),
        a
    );
}
function P() {
    var e;
    if (null == r) return !1;
    (y = {
        duration: r.getDuration(),
        mediaSessionId: null != (e = r.getMediaSessionId()) ? e : null,
        rtcConnectionId: r.getRTCConnectionId(),
        wasEverMultiParticipant: S,
        wasEverRtcConnected: I,
        voiceStateAnalytics: v,
        channelId: r.channelId,
    }),
        s.Z.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: r.getMediaEngineConnectionId(),
        }),
        r.destroy(),
        (r = null),
        (v = null),
        (A = !1);
}
function R(e) {
    return (i = e.sessionId), (b = null), (O = null), P(), !1;
}
function D() {
    (i = null), (b = null), (O = null), P();
}
function w(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, a, o;
        if (
            (null == v || v.updateVoiceStates(t.userId, t.channelId),
            (S = S || (null != (n = null == v ? void 0 : v.getStats().max_voice_state_count) ? n : 0) > 1),
            f.default.getId() !== t.userId)
        )
            return e;
        if (null != r)
            t.sessionId === i
                ? (null != t.guildId && t.guildId === r.guildId) || (null == t.guildId && t.channelId === r.channelId)
                    ? null == t.channelId
                        ? P()
                        : (r.setNextChannelId(t.channelId), (A = !0), (C = null), r.clearJoinVoiceId())
                    : ((t.guildId !== r.guildId && null == t.channelId) || P(),
                      null != t.channelId &&
                          ((b = null),
                          (O = null),
                          (r = N(t.guildId, t.channelId)),
                          (S = (null != (a = null == v ? void 0 : v.getStats().max_voice_state_count) ? a : 0) > 1)))
                : t.guildId === r.guildId &&
                  ((null == u.default.getAwaitingRemoteSessionInfo() || null == u.default.getRemoteSessionId()) &&
                      (b = r.channelId),
                  P());
        else {
            if (t.sessionId !== i || null == t.channelId) return e;
            (b = null),
                (O = null),
                (r = N(t.guildId, t.channelId)),
                (S = (null != (o = null == v ? void 0 : v.getStats().max_voice_state_count) ? o : 0) > 1);
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
    P();
}
function k(e) {
    let { channelId: t } = e;
    if (null == r || r.channelId !== t) return !1;
    P();
}
function U(e) {
    let { channel: t } = e;
    if (null == r || r.channelId !== t.id) return !1;
    P();
}
function G(e) {
    let { channelId: t, joinVoiceId: n } = e;
    null != r && (null == t || r.channelId !== t) && P(), (C = n);
}
function Z(e) {
    return e.state === _.$7l.ACTIVE && null != r && r.resetBackoff("App state is active"), !1;
}
function B(e) {
    return e.state === _.hes.RTC_CONNECTED && (I = !0), !0;
}
function F(e) {
    null == r || r.setNoiseCancellationEnabled(e.enabled);
}
function V() {
    return !0;
}
function H(e) {
    let { context: t, wants: n } = e;
    if (
        t !== m.Yn.DEFAULT ||
        !Object.entries(n).some((e) => {
            let [t, n] = e;
            return "any" !== t && 0 !== n;
        })
    )
        return !1;
    T = performance.now();
}
function Y(e) {
    return e.connection === r;
}
function W(e) {
    let { userId: t, context: n, quality: i } = e;
    null == r || r.setSimulcastDebugOverride(t, n, i);
}
function K(e) {
    let { streamId: t, width: n, height: i } = e;
    null == r || r.setVideoSize(t, n, i);
}
class z extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(f.default, u.default, p.ZP), (0, d.r)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return r;
    }
    getState() {
        return null != r ? r.state : _.hes.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === _.hes.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === _.hes.DISCONNECTED;
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
        return null != r ? r.quality : _.IE4.UNKNOWN;
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
        return null == v ? void 0 : v.getStats();
    }
    getUserVoiceSettingsStats(e) {
        return null == v ? void 0 : v.getUserVoiceSettingsStats(e);
    }
    getWasEverMultiParticipant() {
        return S;
    }
    getWasEverRtcConnected() {
        return I;
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
        return T;
    }
    getWasMoved() {
        return A;
    }
}
h(z, "displayName", "RTCConnectionStore");
let q = new z(
    s.Z,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: R,
              CONNECTION_CLOSED: D,
              RTC_CONNECTION_STATE: B,
              RTC_CONNECTION_PING: V,
              RTC_CONNECTION_LOSS_RATE: V,
              RTC_CONNECTION_UPDATE_ID: Y,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: V,
              RTC_CONNECTION_CLIENT_CONNECT: V,
              RTC_CONNECTION_CLIENT_DISCONNECT: V,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: H,
              VIDEO_SIZE_UPDATE: K,
              VOICE_STATE_UPDATES: w,
              VOICE_CHANNEL_SELECT: G,
              AUDIO_SET_NOISE_CANCELLATION: F,
              VOICE_SERVER_UPDATE: x,
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: L,
              REMOTE_SESSION_CONNECT: L,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: j,
              GUILD_DELETE: M,
              CHANNEL_DELETE: U,
              THREAD_DELETE: U,
              CALL_DELETE: k,
              APP_STATE_UPDATE: Z,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: W,
          },
);
Promise.resolve()
    .then(n.bind(n, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = q.getState();
        });
    });
let Q = q;
