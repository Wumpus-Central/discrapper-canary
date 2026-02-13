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
    h = n(731854);
let p = [],
    g = null,
    E = null,
    A = null,
    I = null,
    T = !1,
    y = !1,
    S = null,
    v = !1,
    C = null;
function b(e, t) {
    if (null == i) throw Error("Creating RTCConnection without session.");
    let r = d.default.getId(),
        a = new (n(767065).A)({ userId: r, sessionId: i, guildId: e, channelId: t, joinVoiceId: C });
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
                    context: h.x.DEFAULT,
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
            I?.setSpeaking(e, t);
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
        (I = new l.A(d.default.getId(), t)),
        (E = null),
        (T = !1),
        (y = !1),
        a
    );
}
function N() {
    if (null == r) return !1;
    (E = {
        duration: r.getDuration(),
        mediaSessionId: r.getMediaSessionId() ?? null,
        rtcConnectionId: r.getRTCConnectionId(),
        wasEverMultiParticipant: T,
        wasEverRtcConnected: y,
        voiceStateAnalytics: I,
        channelId: r.channelId,
    }),
        s.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: r.getMediaEngineConnectionId(),
        }),
        r.destroy(),
        (r = null),
        (I = null),
        (v = !1);
}
function R(e) {
    return (i = e.sessionId), (g = null), (A = null), N(), !1;
}
function O() {
    (i = null), (g = null), (A = null), N();
}
function D(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (
            (I?.updateVoiceStates(t.userId, t.channelId),
            (T = T || (I?.getStats().max_voice_state_count ?? 0) > 1),
            d.default.getId() !== t.userId)
        )
            return e;
        if (null != r)
            t.sessionId === i
                ? (null != t.guildId && t.guildId === r.guildId) || (null == t.guildId && t.channelId === r.channelId)
                    ? null == t.channelId
                        ? N()
                        : (r.setNextChannelId(t.channelId), (v = !0), (C = null), r.clearJoinVoiceId())
                    : ((t.guildId !== r.guildId && null == t.channelId) || N(),
                      null != t.channelId &&
                          ((g = null),
                          (A = null),
                          (r = b(t.guildId, t.channelId)),
                          (T = (I?.getStats().max_voice_state_count ?? 0) > 1)))
                : t.guildId === r.guildId &&
                  ((null == u.default.getAwaitingRemoteSessionInfo() || null == u.default.getRemoteSessionId()) &&
                      (g = r.channelId),
                  N());
        else {
            if (t.sessionId !== i || null == t.channelId) return e;
            (g = null),
                (A = null),
                (r = b(t.guildId, t.channelId)),
                (T = (I?.getStats().max_voice_state_count ?? 0) > 1);
        }
        return !0;
    }, !1);
}
function L(e) {
    if (
        null == r ||
        (null != e.guildId && e.guildId !== r.guildId) ||
        (null != e.channelId && e.channelId !== r.getNextChannelId())
    )
        return !1;
    r.connect(e.endpoint, e.token);
}
function w() {
    g = null;
}
function x() {
    A = null;
}
function P(e) {
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
function U(e) {
    let { channelId: t, joinVoiceId: n } = e;
    null != r && (null == t || r.channelId !== t) && N(), (C = n);
}
function G(e) {
    return e.state === f.g6G.ACTIVE && null != r && r.resetBackoff("App state is active"), !1;
}
function F(e) {
    return e.state === f.S7L.RTC_CONNECTED && (y = !0), !0;
}
function V(e) {
    r?.setNoiseCancellationEnabled(e.enabled);
}
function B() {
    return !0;
}
function j(e) {
    let { context: t, wants: n } = e;
    if (
        t !== h.x.DEFAULT ||
        !Object.entries(n).some((e) => {
            let [t, n] = e;
            return "any" !== t && 0 !== n;
        })
    )
        return !1;
    S = performance.now();
}
function H(e) {
    return e.connection === r;
}
function Y(e) {
    let { userId: t, context: n, quality: i } = e;
    r?.setSimulcastDebugOverride(t, n, i);
}
function W(e) {
    let { streamId: t, dimensions: n, zoom: i } = e;
    r?.setVideoSize(t, n, i);
}
class K extends a.Ay.Store {
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
        return g;
    }
    getLastSessionVoiceChannelId() {
        return A;
    }
    setLastSessionVoiceChannelId(e) {
        A = e;
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
        return null != r ? r.getPings() : p;
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
        return r?.getDuration() ?? E?.duration;
    }
    getLastRTCConnectionState() {
        return E;
    }
    getPacketStats() {
        return r?.getPacketStats();
    }
    getVoiceStateStats() {
        return I?.getStats();
    }
    getUserVoiceSettingsStats(e) {
        return I?.getUserVoiceSettingsStats(e);
    }
    getWasEverMultiParticipant() {
        return T;
    }
    getWasEverRtcConnected() {
        return y;
    }
    getUserIds() {
        return r?.getUserIds();
    }
    getJoinVoiceId() {
        return C;
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
        return S;
    }
    getWasMoved() {
        return v;
    }
}
let $ = new K(
    s.h,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: R,
              CONNECTION_CLOSED: O,
              RTC_CONNECTION_STATE: F,
              RTC_CONNECTION_PING: B,
              RTC_CONNECTION_LOSS_RATE: B,
              RTC_CONNECTION_UPDATE_ID: H,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: B,
              RTC_CONNECTION_CLIENT_CONNECT: B,
              RTC_CONNECTION_CLIENT_DISCONNECT: B,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: j,
              VIDEO_SIZE_UPDATE: W,
              VOICE_STATE_UPDATES: D,
              VOICE_CHANNEL_SELECT: U,
              AUDIO_SET_NOISE_CANCELLATION: V,
              VOICE_SERVER_UPDATE: L,
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: w,
              REMOTE_SESSION_CONNECT: w,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: x,
              GUILD_DELETE: P,
              CHANNEL_DELETE: k,
              THREAD_DELETE: k,
              CALL_DELETE: M,
              APP_STATE_UPDATE: G,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: Y,
          },
);
Promise.resolve()
    .then(n.bind(n, 954571))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = $.getState();
        });
    });
let z = $;
