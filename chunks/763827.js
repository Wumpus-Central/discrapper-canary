"use strict";
let i, r;
n.d(t, { A: () => x });
var s = n(17928),
    a = n(228366),
    o = n(507821),
    l = n(735438),
    u = n(235058),
    c = n(977997),
    d = n(607567),
    _ = n(731854);
class f {
    userId;
    channelId;
    maxVoiceStateCount = 1;
    totalParticipants = new Set();
    speaking = _.ME.NONE;
    maxListenerCount = 0;
    totalListeners = new Set();
    maxSpeakerCount = 0;
    totalSpeakers = {};
    constructor(e, t) {
        (this.userId = e), this.setChannelId(t);
    }
    updateVoiceStates(e, t) {
        t === this.channelId
            ? (this.totalParticipants.add(e),
              (this.maxVoiceStateCount = Math.max(d.Ay.countVoiceStatesForChannel(t), this.maxVoiceStateCount)))
            : (null == t && e in this.totalSpeakers && (this.totalSpeakers[e] = _.ME.NONE),
              e === this.userId && null != t && this.setChannelId(t));
    }
    getStats() {
        return {
            max_voice_state_count: this.maxVoiceStateCount,
            total_voice_state_count: this.totalParticipants.size,
            max_listener_count: this.maxListenerCount,
            total_listener_count: this.totalListeners.size,
            max_speaker_count: this.maxSpeakerCount,
            total_speaker_count: Object.keys(this.totalSpeakers).length,
        };
    }
    getUserVoiceSettingsStats(e) {
        let t = u.Ay.getSettings(e),
            n = new Set(Object.keys(t.localMutes)),
            i = new Set(Object.keys(t.localVolumes));
        return (
            i.delete(this.userId),
            n.delete(this.userId),
            {
                num_local_voice_user_mutes: (0, l.intersection)(Array.from(n), Array.from(this.totalParticipants))
                    .length,
                num_local_voice_volumes: (0, l.intersection)(Array.from(i), Array.from(this.totalParticipants)).length,
            }
        );
    }
    setSpeaking(e, t) {
        if (t !== _.ME.NONE) {
            let n = c.A.getVoiceStateForChannel(this.channelId, e);
            if (null != n && !n.selfMute && !n.mute) {
                this.totalSpeakers[e] = t;
                let n = Object.values(this.totalSpeakers).filter((e) => e !== _.ME.NONE).length;
                this.maxSpeakerCount = Math.max(this.maxSpeakerCount, n);
            }
        } else e in this.totalSpeakers && (this.totalSpeakers[e] = _.ME.NONE);
        if (this.userId === e) {
            if (t === this.speaking) return;
            if (t !== _.ME.NONE) {
                let e = Object.values(c.A.getVoiceStatesForChannel(this.channelId)).filter(
                    (e) => !e.selfDeaf && !e.deaf,
                );
                e.forEach((e) => this.totalListeners.add(e.userId)),
                    (this.maxListenerCount = Math.max(e.length, this.maxListenerCount));
            }
            this.speaking = t;
        }
    }
    setChannelId(e) {
        if (e === this.channelId) return;
        (this.channelId = e), (this.totalParticipants = new Set([this.userId]));
        let t = Object.keys(c.A.getVoiceStatesForChannel(this.channelId));
        t.forEach((e) => this.totalParticipants.add(e)),
            (this.maxVoiceStateCount = t.length),
            (this.speaking = _.ME.NONE),
            (this.maxListenerCount = 0),
            (this.totalListeners = new Set()),
            (this.maxSpeakerCount = 0),
            (this.totalSpeakers = {});
    }
}
var h = n(643501),
    p = n(75076),
    E = n(495544),
    m = n(652215);
let g = [],
    A = null,
    I = null,
    T = null,
    S = null,
    N = !1,
    y = !1,
    C = null,
    v = !1,
    O = null;
function R(e, t) {
    if (null == r) throw Error("Creating RTCConnection without session.");
    let i = E.default.getId(),
        s = new (n(521337).A)({ userId: i, sessionId: r, guildId: e, channelId: t, joinVoiceId: O });
    return (
        s.on(o.q.State, (e, t, n) => {
            a.h.wait(() => a.h.dispatch({ type: "RTC_CONNECTION_STATE", state: e, ...t, ...n }));
        }),
        s.on(o.q.Video, (e, t, n, i, r) => {
            a.h.wait(() =>
                a.h.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: i,
                    rtcServerId: r,
                    context: _.x.DEFAULT,
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
            S?.setSpeaking(e, t);
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
        (S = new f(E.default.getId(), t)),
        (I = null),
        (N = !1),
        (y = !1),
        s
    );
}
function b() {
    if (null == i) return !1;
    (I = {
        duration: i.getDuration(),
        mediaSessionId: i.getMediaSessionId() ?? null,
        rtcConnectionId: i.getRTCConnectionId(),
        wasEverMultiParticipant: N,
        wasEverRtcConnected: y,
        voiceStateAnalytics: S,
        channelId: i.channelId,
    }),
        a.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: i.getMediaEngineConnectionId(),
        }),
        i.destroy(),
        (i = null),
        (S = null),
        (v = !1);
}
function D() {
    A = null;
}
function L(e) {
    let { channel: t } = e;
    if (null == i || i.channelId !== t.id) return !1;
    b();
}
function w() {
    return !0;
}
class M extends s.Ay.Store {
    static displayName = "RTCConnectionStore";
    initialize() {
        this.waitFor(E.default, h.default, d.Ay), (0, p.I)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return i;
    }
    getState() {
        return null != i ? i.state : m.S7L.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === m.S7L.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === m.S7L.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return A;
    }
    getLastSessionVoiceChannelId() {
        return T;
    }
    setLastSessionVoiceChannelId(e) {
        T = e;
    }
    getGuildId() {
        return i?.guildId;
    }
    getChannelId() {
        return i?.channelId;
    }
    getHostname() {
        return null != i ? i.hostname : "";
    }
    getQuality() {
        return null != i ? i.quality : m.bFR.UNKNOWN;
    }
    getPings() {
        return null != i ? i.getPings() : g;
    }
    getAveragePing() {
        return null != i ? i?.getAveragePing() : 0;
    }
    getLastPing() {
        return i?.getLastPing();
    }
    getOutboundLossRate() {
        return i?.getOutboundLossRate();
    }
    getMediaSessionId() {
        return i?.getMediaSessionId();
    }
    getRTCConnectionId() {
        return i?.getRTCConnectionId();
    }
    getDuration() {
        return i?.getDuration() ?? I?.duration;
    }
    getLastRTCConnectionState() {
        return I;
    }
    getPacketStats() {
        return i?.getPacketStats();
    }
    getVoiceStateStats() {
        return S?.getStats();
    }
    getUserVoiceSettingsStats(e) {
        return S?.getUserVoiceSettingsStats(e);
    }
    getWasEverMultiParticipant() {
        return N;
    }
    getWasEverRtcConnected() {
        return y;
    }
    getUserIds() {
        return i?.getUserIds();
    }
    getJoinVoiceId() {
        return O;
    }
    isUserConnected(e) {
        return i?.getIsUserConnected(e);
    }
    getSecureFramesState() {
        return i?.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e) {
        let t = i?.getSecureFramesRosterMap();
        return t?.get(e);
    }
    getLastNonZeroRemoteVideoSinkWantsTime() {
        return C;
    }
    getWasMoved() {
        return v;
    }
}
let P = new M(
    a.h,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: function (e) {
                  return (r = e.sessionId), (A = null), (T = null), b(), !1;
              },
              CONNECTION_CLOSED: function () {
                  (r = null), (A = null), (T = null), b();
              },
              RTC_CONNECTION_STATE: function (e) {
                  return e.state === m.S7L.RTC_CONNECTED && (y = !0), !0;
              },
              RTC_CONNECTION_PING: w,
              RTC_CONNECTION_LOSS_RATE: w,
              RTC_CONNECTION_UPDATE_ID: function (e) {
                  return e.connection === i;
              },
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: w,
              RTC_CONNECTION_CLIENT_CONNECT: w,
              RTC_CONNECTION_CLIENT_DISCONNECT: w,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function (e) {
                  let { context: t, wants: n } = e;
                  if (
                      t !== _.x.DEFAULT ||
                      !Object.entries(n).some((e) => {
                          let [t, n] = e;
                          return "any" !== t && 0 !== n;
                      })
                  )
                      return !1;
                  C = performance.now();
              },
              VIDEO_SIZE_UPDATE: function (e) {
                  let { streamId: t, dimensions: n, zoom: r } = e;
                  i?.setVideoSize(t, n, r);
              },
              VOICE_STATE_UPDATES: function (e) {
                  let { voiceStates: t } = e;
                  return t.reduce((e, t) => {
                      if (
                          (S?.updateVoiceStates(t.userId, t.channelId),
                          (N = N || (S?.getStats().max_voice_state_count ?? 0) > 1),
                          E.default.getId() !== t.userId)
                      )
                          return e;
                      if (null != i)
                          t.sessionId === r
                              ? (null != t.guildId && t.guildId === i.guildId) ||
                                (null == t.guildId && t.channelId === i.channelId)
                                  ? null == t.channelId
                                      ? b()
                                      : (i.setNextChannelId(t.channelId), (v = !0), (O = null), i.clearJoinVoiceId())
                                  : ((t.guildId !== i.guildId && null == t.channelId) || b(),
                                    null != t.channelId &&
                                        ((A = null),
                                        (T = null),
                                        (i = R(t.guildId, t.channelId)),
                                        (N = (S?.getStats().max_voice_state_count ?? 0) > 1)))
                              : t.guildId === i.guildId &&
                                ((null == h.default.getAwaitingRemoteSessionInfo() ||
                                    null == h.default.getRemoteSessionId()) &&
                                    (A = i.channelId),
                                b());
                      else {
                          if (t.sessionId !== r || null == t.channelId) return e;
                          (A = null),
                              (T = null),
                              (i = R(t.guildId, t.channelId)),
                              (N = (S?.getStats().max_voice_state_count ?? 0) > 1);
                      }
                      return !0;
                  }, !1);
              },
              VOICE_CHANNEL_SELECT: function (e) {
                  let { channelId: t, joinVoiceId: n } = e;
                  null != i && (null == t || i.channelId !== t) && b(), (O = n);
              },
              AUDIO_SET_NOISE_CANCELLATION: function (e) {
                  i?.setNoiseCancellationEnabled(e.enabled);
              },
              VOICE_SERVER_UPDATE: function (e) {
                  if (
                      null == i ||
                      (null != e.guildId && e.guildId !== i.guildId) ||
                      (null != e.channelId && e.channelId !== i.getNextChannelId())
                  )
                      return !1;
                  i.connect(e.endpoint, e.token);
              },
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: D,
              REMOTE_SESSION_CONNECT: D,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function () {
                  T = null;
              },
              GUILD_DELETE: function (e) {
                  let { guild: t } = e;
                  if (null == i || i.guildId !== t.id) return !1;
                  b();
              },
              CHANNEL_DELETE: L,
              THREAD_DELETE: L,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  if (null == i || i.channelId !== t) return !1;
                  b();
              },
              APP_STATE_UPDATE: function (e) {
                  return e.state === m.g6G.ACTIVE && null != i && i.resetBackoff("App state is active"), !1;
              },
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
                  let { userId: t, context: n, quality: r } = e;
                  i?.setSimulcastDebugOverride(t, n, r);
              },
          },
);
Promise.resolve()
    .then(n.bind(n, 174459))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = P.getState();
        });
    });
let x = P;
