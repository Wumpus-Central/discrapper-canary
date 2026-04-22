"use strict";
let r, i;
n.d(t, { A: () => w });
var s = n(311907),
    a = n(73153),
    o = n(507821),
    l = n(859159),
    u = n(643501),
    d = n(75076),
    c = n(961350),
    _ = n(607567),
    f = n(652215),
    E = n(731854);
let h = [],
    p = null,
    m = null,
    g = null,
    A = null,
    I = !1,
    T = !1,
    S = null,
    y = !1,
    N = null;
function O(e, t) {
    if (null == i) throw Error("Creating RTCConnection without session.");
    let r = c.default.getId(),
        s = new (n(767065).A)({ userId: r, sessionId: i, guildId: e, channelId: t, joinVoiceId: N });
    return (
        s.on(o.q.State, (e, t, n) => {
            a.h.wait(() => a.h.dispatch({ type: "RTC_CONNECTION_STATE", state: e, ...t, ...n }));
        }),
        s.on(o.q.Video, (e, t, n, r, i) => {
            a.h.wait(() =>
                a.h.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: r,
                    rtcServerId: i,
                    context: E.x.DEFAULT,
                    mediaEngineConnectionId: s.getMediaEngineConnectionId(),
                }),
            );
        }),
        s.on(o.q.Ping, (e, t) => {
            a.h.wait(() => a.h.dispatch({ type: "RTC_CONNECTION_PING", pings: e, quality: t }));
        }),
        s.on(o.q.OutboundLossRate, (e) => {
            a.h.wait(() => a.h.dispatch({ type: "RTC_CONNECTION_LOSS_RATE", lossRate: e }));
        }),
        s.on(o.q.Speaking, (e, t) => {
            A?.setSpeaking(e, t);
        }),
        s.on(o.q.Flags, (e, t) => {
            a.h.wait(() => {
                a.h.dispatch({
                    type: "RTC_CONNECTION_FLAGS",
                    flags: t,
                    userId: e,
                    guildId: s.guildId,
                    channelId: s.channelId,
                    context: s.context,
                });
            });
        }),
        s.on(o.q.UsersMerged, (e, t) => {
            a.h.dispatch({ type: "RTC_CONNECTION_USERS_MERGED", userIds: e, context: t });
        }),
        s.on(o.q.ClientConnect, (e) => {
            a.h.wait(() => {
                a.h.dispatch({
                    type: "RTC_CONNECTION_CLIENT_CONNECT",
                    userIds: e,
                    guildId: s.guildId,
                    channelId: s.channelId,
                    context: s.context,
                });
            });
        }),
        s.on(o.q.ClientDisconnect, (e) => {
            a.h.wait(() => {
                a.h.dispatch({
                    type: "RTC_CONNECTION_CLIENT_DISCONNECT",
                    userId: e,
                    guildId: s.guildId,
                    channelId: s.channelId,
                    context: s.context,
                });
            });
        }),
        s.on(o.q.Platform, (e, t, n) => {
            a.h.wait(() => {
                a.h.dispatch({ type: "RTC_CONNECTION_PLATFORM", platform: t, userId: e, channelId: n });
            });
        }),
        s.on(o.q.SecureFramesUpdate, () => {
            a.h.wait(() => {
                a.h.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
            });
        }),
        s.on(o.q.RosterMapUpdate, (e) => {
            a.h.wait(() => {
                a.h.dispatch({ type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: e });
            });
        }),
        (A = new l.A(c.default.getId(), t)),
        (m = null),
        (I = !1),
        (T = !1),
        s
    );
}
function R() {
    if (null == r) return !1;
    (m = {
        duration: r.getDuration(),
        mediaSessionId: r.getMediaSessionId() ?? null,
        rtcConnectionId: r.getRTCConnectionId(),
        wasEverMultiParticipant: I,
        wasEverRtcConnected: T,
        voiceStateAnalytics: A,
        channelId: r.channelId,
    }),
        a.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: r.getMediaEngineConnectionId(),
        }),
        r.destroy(),
        (r = null),
        (A = null),
        (y = !1);
}
function v() {
    p = null;
}
function C(e) {
    let { channel: t } = e;
    if (null == r || r.channelId !== t.id) return !1;
    R();
}
function b() {
    return !0;
}
class D extends s.Ay.Store {
    static displayName = "RTCConnectionStore";
    initialize() {
        this.waitFor(c.default, u.default, _.Ay), (0, d.I)(this.getRTCConnectionId, this.getMediaSessionId);
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
        return p;
    }
    getLastSessionVoiceChannelId() {
        return g;
    }
    setLastSessionVoiceChannelId(e) {
        g = e;
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
        return r?.getDuration() ?? m?.duration;
    }
    getLastRTCConnectionState() {
        return m;
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
        return N;
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
        return y;
    }
}
let L = new D(
    a.h,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: function (e) {
                  return (i = e.sessionId), (p = null), (g = null), R(), !1;
              },
              CONNECTION_CLOSED: function () {
                  (i = null), (p = null), (g = null), R();
              },
              RTC_CONNECTION_STATE: function (e) {
                  return e.state === f.S7L.RTC_CONNECTED && (T = !0), !0;
              },
              RTC_CONNECTION_PING: b,
              RTC_CONNECTION_LOSS_RATE: b,
              RTC_CONNECTION_UPDATE_ID: function (e) {
                  return e.connection === r;
              },
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: b,
              RTC_CONNECTION_CLIENT_CONNECT: b,
              RTC_CONNECTION_CLIENT_DISCONNECT: b,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function (e) {
                  let { context: t, wants: n } = e;
                  if (
                      t !== E.x.DEFAULT ||
                      !Object.entries(n).some((e) => {
                          let [t, n] = e;
                          return "any" !== t && 0 !== n;
                      })
                  )
                      return !1;
                  S = performance.now();
              },
              VIDEO_SIZE_UPDATE: function (e) {
                  let { streamId: t, dimensions: n, zoom: i } = e;
                  r?.setVideoSize(t, n, i);
              },
              VOICE_STATE_UPDATES: function (e) {
                  let { voiceStates: t } = e;
                  return t.reduce((e, t) => {
                      if (
                          (A?.updateVoiceStates(t.userId, t.channelId),
                          (I = I || (A?.getStats().max_voice_state_count ?? 0) > 1),
                          c.default.getId() !== t.userId)
                      )
                          return e;
                      if (null != r)
                          t.sessionId === i
                              ? (null != t.guildId && t.guildId === r.guildId) ||
                                (null == t.guildId && t.channelId === r.channelId)
                                  ? null == t.channelId
                                      ? R()
                                      : (r.setNextChannelId(t.channelId), (y = !0), (N = null), r.clearJoinVoiceId())
                                  : ((t.guildId !== r.guildId && null == t.channelId) || R(),
                                    null != t.channelId &&
                                        ((p = null),
                                        (g = null),
                                        (r = O(t.guildId, t.channelId)),
                                        (I = (A?.getStats().max_voice_state_count ?? 0) > 1)))
                              : t.guildId === r.guildId &&
                                ((null == u.default.getAwaitingRemoteSessionInfo() ||
                                    null == u.default.getRemoteSessionId()) &&
                                    (p = r.channelId),
                                R());
                      else {
                          if (t.sessionId !== i || null == t.channelId) return e;
                          (p = null),
                              (g = null),
                              (r = O(t.guildId, t.channelId)),
                              (I = (A?.getStats().max_voice_state_count ?? 0) > 1);
                      }
                      return !0;
                  }, !1);
              },
              VOICE_CHANNEL_SELECT: function (e) {
                  let { channelId: t, joinVoiceId: n } = e;
                  null != r && (null == t || r.channelId !== t) && R(), (N = n);
              },
              AUDIO_SET_NOISE_CANCELLATION: function (e) {
                  r?.setNoiseCancellationEnabled(e.enabled);
              },
              VOICE_SERVER_UPDATE: function (e) {
                  if (
                      null == r ||
                      (null != e.guildId && e.guildId !== r.guildId) ||
                      (null != e.channelId && e.channelId !== r.getNextChannelId())
                  )
                      return !1;
                  r.connect(e.endpoint, e.token);
              },
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: v,
              REMOTE_SESSION_CONNECT: v,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function () {
                  g = null;
              },
              GUILD_DELETE: function (e) {
                  let { guild: t } = e;
                  if (null == r || r.guildId !== t.id) return !1;
                  R();
              },
              CHANNEL_DELETE: C,
              THREAD_DELETE: C,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  if (null == r || r.channelId !== t) return !1;
                  R();
              },
              APP_STATE_UPDATE: function (e) {
                  return e.state === f.g6G.ACTIVE && null != r && r.resetBackoff("App state is active"), !1;
              },
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
                  let { userId: t, context: n, quality: i } = e;
                  r?.setSimulcastDebugOverride(t, n, i);
              },
          },
);
Promise.resolve()
    .then(n.bind(n, 954571))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = L.getState();
        });
    });
let w = L;
