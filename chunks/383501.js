"use strict";
let r, i;
n.d(t, { A: () => z });
var a = n(311907),
    s = n(73153),
    o = n(507821),
    l = n(859159),
    u = n(643501),
    c = n(75076),
    d = n(961350),
    _ = n(607567),
    f = n(652215),
    p = n(731854);
let h = [],
    m = null,
    g = null,
    E = null,
    A = null,
    I = !1,
    T = !1,
    y = null,
    S = !1,
    v = null;
function C(e, t) {
    if (null == i) throw Error("Creating RTCConnection without session.");
    let r = d.default.getId(),
        a = new (n(767065).A)({ userId: r, sessionId: i, guildId: e, channelId: t, joinVoiceId: v });
    return (
        a.on(o.q.State, (e, t, n) => {
            s.h.wait(() => s.h.dispatch({ type: "RTC_CONNECTION_STATE", state: e, ...t, ...n }));
        }),
        a.on(o.q.Video, (e, t, n, r, i) => {
            s.h.wait(() =>
                s.h.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: r,
                    rtcServerId: i,
                    context: p.x.DEFAULT,
                    mediaEngineConnectionId: a.getMediaEngineConnectionId(),
                }),
            );
        }),
        a.on(o.q.Ping, (e, t) => {
            s.h.wait(() => s.h.dispatch({ type: "RTC_CONNECTION_PING", pings: e, quality: t }));
        }),
        a.on(o.q.OutboundLossRate, (e) => {
            s.h.wait(() => s.h.dispatch({ type: "RTC_CONNECTION_LOSS_RATE", lossRate: e }));
        }),
        a.on(o.q.Speaking, (e, t) => {
            A?.setSpeaking(e, t);
        }),
        a.on(o.q.Flags, (e, t) => {
            s.h.wait(() => {
                s.h.dispatch({
                    type: "RTC_CONNECTION_FLAGS",
                    flags: t,
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context,
                });
            });
        }),
        a.on(o.q.UsersMerged, (e, t) => {
            s.h.dispatch({ type: "RTC_CONNECTION_USERS_MERGED", userIds: e, context: t });
        }),
        a.on(o.q.ClientConnect, (e) => {
            s.h.wait(() => {
                s.h.dispatch({
                    type: "RTC_CONNECTION_CLIENT_CONNECT",
                    userIds: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context,
                });
            });
        }),
        a.on(o.q.ClientDisconnect, (e) => {
            s.h.wait(() => {
                s.h.dispatch({
                    type: "RTC_CONNECTION_CLIENT_DISCONNECT",
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context,
                });
            });
        }),
        a.on(o.q.Platform, (e, t, n) => {
            s.h.wait(() => {
                s.h.dispatch({ type: "RTC_CONNECTION_PLATFORM", platform: t, userId: e, channelId: n });
            });
        }),
        a.on(o.q.SecureFramesUpdate, () => {
            s.h.wait(() => {
                s.h.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
            });
        }),
        a.on(o.q.RosterMapUpdate, (e) => {
            s.h.wait(() => {
                s.h.dispatch({ type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: e });
            });
        }),
        (A = new l.A(d.default.getId(), t)),
        (g = null),
        (I = !1),
        (T = !1),
        a
    );
}
function b() {
    if (null == r) return !1;
    (g = {
        duration: r.getDuration(),
        mediaSessionId: r.getMediaSessionId() ?? null,
        rtcConnectionId: r.getRTCConnectionId(),
        wasEverMultiParticipant: I,
        wasEverRtcConnected: T,
        voiceStateAnalytics: A,
        channelId: r.channelId,
    }),
        s.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: r.getMediaEngineConnectionId(),
        }),
        r.destroy(),
        (r = null),
        (A = null),
        (S = !1);
}
function N(e) {
    return (i = e.sessionId), (m = null), (E = null), b(), !1;
}
function R() {
    (i = null), (m = null), (E = null), b();
}
function O(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (
            (A?.updateVoiceStates(t.userId, t.channelId),
            (I = I || (A?.getStats().max_voice_state_count ?? 0) > 1),
            d.default.getId() !== t.userId)
        )
            return e;
        if (null != r)
            t.sessionId === i
                ? (null != t.guildId && t.guildId === r.guildId) || (null == t.guildId && t.channelId === r.channelId)
                    ? null == t.channelId
                        ? b()
                        : (r.setNextChannelId(t.channelId), (S = !0), (v = null), r.clearJoinVoiceId())
                    : ((t.guildId !== r.guildId && null == t.channelId) || b(),
                      null != t.channelId &&
                          ((m = null),
                          (E = null),
                          (r = C(t.guildId, t.channelId)),
                          (I = (A?.getStats().max_voice_state_count ?? 0) > 1)))
                : t.guildId === r.guildId &&
                  ((null == u.default.getAwaitingRemoteSessionInfo() || null == u.default.getRemoteSessionId()) &&
                      (m = r.channelId),
                  b());
        else {
            if (t.sessionId !== i || null == t.channelId) return e;
            (m = null),
                (E = null),
                (r = C(t.guildId, t.channelId)),
                (I = (A?.getStats().max_voice_state_count ?? 0) > 1);
        }
        return !0;
    }, !1);
}
function D(e) {
    if (
        null == r ||
        (null != e.guildId && e.guildId !== r.guildId) ||
        (null != e.channelId && e.channelId !== r.getNextChannelId())
    )
        return !1;
    r.connect(e.endpoint, e.token);
}
function L() {
    m = null;
}
function w() {
    E = null;
}
function x(e) {
    let { guild: t } = e;
    if (null == r || r.guildId !== t.id) return !1;
    b();
}
function P(e) {
    let { channelId: t } = e;
    if (null == r || r.channelId !== t) return !1;
    b();
}
function M(e) {
    let { channel: t } = e;
    if (null == r || r.channelId !== t.id) return !1;
    b();
}
function k(e) {
    let { channelId: t, joinVoiceId: n } = e;
    null != r && (null == t || r.channelId !== t) && b(), (v = n);
}
function U(e) {
    return e.state === f.g6G.ACTIVE && null != r && r.resetBackoff("App state is active"), !1;
}
function G(e) {
    return e.state === f.S7L.RTC_CONNECTED && (T = !0), !0;
}
function V(e) {
    r?.setNoiseCancellationEnabled(e.enabled);
}
function F() {
    return !0;
}
function B(e) {
    let { context: t, wants: n } = e;
    if (
        t !== p.x.DEFAULT ||
        !Object.entries(n).some((e) => {
            let [t, n] = e;
            return "any" !== t && 0 !== n;
        })
    )
        return !1;
    y = performance.now();
}
function j(e) {
    return e.connection === r;
}
function H(e) {
    let { userId: t, context: n, quality: i } = e;
    r?.setSimulcastDebugOverride(t, n, i);
}
function Y(e) {
    let { streamId: t, dimensions: n, zoom: i } = e;
    r?.setVideoSize(t, n, i);
}
class W extends a.Ay.Store {
    static displayName = "RTCConnectionStore";
    initialize() {
        this.waitFor(d.default, u.default, _.Ay), (0, c.I)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return r;
    }
    getState() {
        return null != r ? r.state : f.S7L.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === f.S7L.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === f.S7L.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return m;
    }
    getLastSessionVoiceChannelId() {
        return E;
    }
    setLastSessionVoiceChannelId(e) {
        E = e;
    }
    getGuildId() {
        return r?.guildId;
    }
    getChannelId() {
        return r?.channelId;
    }
    getHostname() {
        return null != r ? r.hostname : "";
    }
    getQuality() {
        return null != r ? r.quality : f.bFR.UNKNOWN;
    }
    getPings() {
        return null != r ? r.getPings() : h;
    }
    getAveragePing() {
        return null != r ? r?.getAveragePing() : 0;
    }
    getLastPing() {
        return r?.getLastPing();
    }
    getOutboundLossRate() {
        return r?.getOutboundLossRate();
    }
    getMediaSessionId() {
        return r?.getMediaSessionId();
    }
    getRTCConnectionId() {
        return r?.getRTCConnectionId();
    }
    getDuration() {
        return r?.getDuration() ?? g?.duration;
    }
    getLastRTCConnectionState() {
        return g;
    }
    getVoiceFilterSpeakingDurationMs() {
        return r?.getVoiceFilterSpeakingDurationMs();
    }
    getPacketStats() {
        return r?.getPacketStats();
    }
    getVoiceStateStats() {
        return A?.getStats();
    }
    getUserVoiceSettingsStats(e) {
        return A?.getUserVoiceSettingsStats(e);
    }
    getWasEverMultiParticipant() {
        return I;
    }
    getWasEverRtcConnected() {
        return T;
    }
    getUserIds() {
        return r?.getUserIds();
    }
    getJoinVoiceId() {
        return v;
    }
    isUserConnected(e) {
        return r?.getIsUserConnected(e);
    }
    getSecureFramesState() {
        return r?.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e) {
        let t = r?.getSecureFramesRosterMap();
        return t?.get(e);
    }
    getLastNonZeroRemoteVideoSinkWantsTime() {
        return y;
    }
    getWasMoved() {
        return S;
    }
}
let K = new W(
    s.h,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: N,
              CONNECTION_CLOSED: R,
              RTC_CONNECTION_STATE: G,
              RTC_CONNECTION_PING: F,
              RTC_CONNECTION_LOSS_RATE: F,
              RTC_CONNECTION_UPDATE_ID: j,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: F,
              RTC_CONNECTION_CLIENT_CONNECT: F,
              RTC_CONNECTION_CLIENT_DISCONNECT: F,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: B,
              VIDEO_SIZE_UPDATE: Y,
              VOICE_STATE_UPDATES: O,
              VOICE_CHANNEL_SELECT: k,
              AUDIO_SET_NOISE_CANCELLATION: V,
              VOICE_SERVER_UPDATE: D,
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: L,
              REMOTE_SESSION_CONNECT: L,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: w,
              GUILD_DELETE: x,
              CHANNEL_DELETE: M,
              THREAD_DELETE: M,
              CALL_DELETE: P,
              APP_STATE_UPDATE: U,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: H,
          },
);
Promise.resolve()
    .then(n.bind(n, 954571))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = K.getState();
        });
    });
let z = K;
