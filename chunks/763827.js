"use strict";
let i, r;
n.d(t, { A: () => H });
var a = n(17928),
    s = n(499979),
    l = n(451988),
    o = n(228366),
    d = n(507821),
    c = n(435558),
    u = n(186295),
    _ = n(977997),
    E = n(607567),
    A = n(731854);
class h {
    userId;
    channelId;
    maxVoiceStateCount = 1;
    totalParticipants = new Set();
    speaking = A.ME.NONE;
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
              (this.maxVoiceStateCount = Math.max(E.Ay.countVoiceStatesForChannel(t), this.maxVoiceStateCount)))
            : (null == t && e in this.totalSpeakers && (this.totalSpeakers[e] = A.ME.NONE),
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
                num_local_voice_user_mutes: (0, c.intersection)(Array.from(n), Array.from(this.totalParticipants))
                    .length,
                num_local_voice_volumes: (0, c.intersection)(Array.from(i), Array.from(this.totalParticipants)).length,
            }
        );
    }
    setSpeaking(e, t) {
        if (t !== A.ME.NONE) {
            let n = _.A.getVoiceStateForChannel(this.channelId, e);
            if (null != n && !n.selfMute && !n.mute) {
                this.totalSpeakers[e] = t;
                let n = Object.values(this.totalSpeakers).filter((e) => e !== A.ME.NONE).length;
                this.maxSpeakerCount = Math.max(this.maxSpeakerCount, n);
            }
        } else e in this.totalSpeakers && (this.totalSpeakers[e] = A.ME.NONE);
        if (this.userId === e) {
            if (t === this.speaking) return;
            if (t !== A.ME.NONE) {
                let e = Object.values(_.A.getVoiceStatesForChannel(this.channelId)).filter(
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
        let t = Object.keys(_.A.getVoiceStatesForChannel(this.channelId));
        t.forEach((e) => this.totalParticipants.add(e)),
            (this.maxVoiceStateCount = t.length),
            (this.speaking = A.ME.NONE),
            (this.maxListenerCount = 0),
            (this.totalListeners = new Set()),
            (this.maxSpeakerCount = 0),
            (this.totalSpeakers = {});
    }
}
var I = n(626584),
    f = n(643501),
    p = n(75076),
    T = n(280450),
    m = n(652215);
let g = new I.A("RTCConnectionStore"),
    S = [],
    N = null,
    C = null,
    O = null,
    R = null,
    L = !1,
    y = !1,
    D = null,
    v = null,
    b = !1,
    M = null,
    P = null;
function U(e, t) {
    if (null == r) throw Error("Creating RTCConnection without session.");
    let i = T.default.getId(),
        a = new (n(483883).A)({ userId: i, sessionId: r, guildId: e, channelId: t, joinVoiceId: M });
    return (
        a.on(d.q.State, (e, t, n) => {
            o.h.wait(() => o.h.dispatch({ type: "RTC_CONNECTION_STATE", state: e, ...t, ...n }));
        }),
        a.on(d.q.Video, (e, t, n, i, r) => {
            o.h.wait(() =>
                o.h.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: i,
                    rtcServerId: r,
                    context: A.x.DEFAULT,
                    mediaEngineConnectionId: a.getMediaEngineConnectionId(),
                }),
            );
        }),
        a.on(d.q.Ping, (e, t) => {
            o.h.wait(() => o.h.dispatch({ type: "RTC_CONNECTION_PING", pings: e, quality: t }));
        }),
        a.on(d.q.OutboundLossRate, (e) => {
            o.h.wait(() => o.h.dispatch({ type: "RTC_CONNECTION_LOSS_RATE", lossRate: e }));
        }),
        a.on(d.q.Speaking, (e, t) => {
            R?.setSpeaking(e, t);
        }),
        a.on(d.q.Flags, (e, t) => {
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
        a.on(d.q.UsersMerged, (e, t) => {
            o.h.dispatch({ type: "RTC_CONNECTION_USERS_MERGED", userIds: e, context: t });
        }),
        a.on(d.q.ClientConnect, (e) => {
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
        a.on(d.q.ClientDisconnect, (e) => {
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
        a.on(d.q.Platform, (e, t, n) => {
            o.h.wait(() => {
                o.h.dispatch({ type: "RTC_CONNECTION_PLATFORM", platform: t, userId: e, channelId: n });
            });
        }),
        a.on(d.q.SecureFramesUpdate, () => {
            o.h.wait(() => {
                o.h.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
            });
        }),
        a.on(d.q.RosterMapUpdate, (e) => {
            o.h.wait(() => {
                o.h.dispatch({ type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: e });
            });
        }),
        (R = new h(T.default.getId(), t)),
        (C = null),
        (L = !1),
        (y = !1),
        a
    );
}
function w() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == i) return !1;
    (C = {
        duration: i.getDuration(),
        mediaSessionId: i.getMediaSessionId() ?? null,
        rtcConnectionId: i.getRTCConnectionId(),
        wasEverMultiParticipant: L,
        wasEverRtcConnected: y,
        voiceStateAnalytics: R,
        channelId: i.channelId,
    }),
        o.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: i.getMediaEngineConnectionId(),
        }),
        i.destroy(),
        (i = null),
        (R = null),
        (b = !1),
        e && (D = null);
}
function G() {
    null != P && (P.timeout.stop(), (P = null));
}
function x() {
    N = null;
}
function k(e) {
    let { channel: t } = e;
    if (null == i || i.channelId !== t.id) return !1;
    w();
}
function F() {
    return !0;
}
class V extends a.Ay.Store {
    static displayName = "RTCConnectionStore";
    initialize() {
        this.waitFor(T.default, f.default, E.Ay), (0, p.I)(this.getRTCConnectionId, this.getMediaSessionId);
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
        return N;
    }
    getLastSessionVoiceChannelId() {
        return O;
    }
    setLastSessionVoiceChannelId(e) {
        O = e;
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
        return null != i ? i.getPings() : S;
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
        return i?.getDuration() ?? C?.duration;
    }
    getLastRTCConnectionState() {
        return C;
    }
    getPacketStats() {
        return i?.getPacketStats();
    }
    getVoiceStateStats() {
        return R?.getStats();
    }
    getUserVoiceSettingsStats(e) {
        return R?.getUserVoiceSettingsStats(e);
    }
    getWasEverMultiParticipant() {
        return L;
    }
    getWasEverRtcConnected() {
        return y;
    }
    getUserIds() {
        return i?.getUserIds();
    }
    getJoinVoiceId() {
        return M;
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
        return v;
    }
    getWasMoved() {
        return b;
    }
}
let B = new V(
    o.h,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: function (e) {
                  return (r = e.sessionId), (N = null), (O = null), w(!1), G(), !1;
              },
              CONNECTION_CLOSED: function () {
                  (r = null), (N = null), (O = null), w(!1), G();
              },
              LOGOUT: function () {
                  return (D = null), !1;
              },
              RTC_CONNECTION_STATE: function (e) {
                  return e.state === m.S7L.RTC_CONNECTED && ((y = !0), null != i && (D = (0, s.tB)())), !0;
              },
              RTC_CONNECTION_PING: function () {
                  return null != i && (D = (0, s.tB)()), !0;
              },
              RTC_CONNECTION_LOSS_RATE: F,
              RTC_CONNECTION_UPDATE_ID: function (e) {
                  return e.connection === i;
              },
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: F,
              RTC_CONNECTION_CLIENT_CONNECT: F,
              RTC_CONNECTION_CLIENT_DISCONNECT: F,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function (e) {
                  let { context: t, wants: n } = e;
                  if (
                      t !== A.x.DEFAULT ||
                      !Object.entries(n).some((e) => {
                          let [t, n] = e;
                          return "any" !== t && 0 !== n;
                      })
                  )
                      return !1;
                  v = performance.now();
              },
              VIDEO_SIZE_UPDATE: function (e) {
                  let { streamId: t, dimensions: n, zoom: r } = e;
                  i?.setVideoSize(t, n, r);
              },
              VOICE_STATE_UPDATES: function (e) {
                  let { voiceStates: t } = e;
                  return t.reduce((e, t) => {
                      if (
                          (R?.updateVoiceStates(t.userId, t.channelId),
                          (L = L || (R?.getStats().max_voice_state_count ?? 0) > 1),
                          T.default.getId() !== t.userId)
                      )
                          return e;
                      let a = null != P && t.channelId === P.channelId;
                      if ((a && G(), null != i))
                          t.sessionId === r
                              ? (null != t.guildId && t.guildId === i.guildId) ||
                                (null == t.guildId && t.channelId === i.channelId)
                                  ? null == t.channelId
                                      ? w()
                                      : (i.setNextChannelId(t.channelId), (b = !0), (M = null), i.clearJoinVoiceId())
                                  : ((t.guildId !== i.guildId && null == t.channelId) || w(),
                                    null != t.channelId &&
                                        ((N = null),
                                        (O = null),
                                        (i = U(t.guildId, t.channelId)),
                                        (L = (R?.getStats().max_voice_state_count ?? 0) > 1)))
                              : t.guildId === i.guildId &&
                                ((null == f.default.getAwaitingRemoteSessionInfo() ||
                                    null == f.default.getRemoteSessionId()) &&
                                    (N = i.channelId),
                                w());
                      else {
                          if (t.sessionId !== r || null == t.channelId) return e;
                          if (!a && null != D && (0, s.tB)() - D >= 3e5)
                              return o.h.wait(() => n(730852).default.disconnect()), e;
                          (N = null),
                              (O = null),
                              (i = U(t.guildId, t.channelId)),
                              (L = (R?.getStats().max_voice_state_count ?? 0) > 1);
                      }
                      return !0;
                  }, !1);
              },
              VOICE_CHANNEL_SELECT: function (e) {
                  null != i && (null == e.channelId || i.channelId !== e.channelId) && w(),
                      (M = e.joinVoiceId),
                      (function (e) {
                          if ((G(), null == e.channelId)) return;
                          let t = new l.Ep();
                          t.start(3e4, () => {
                              g.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", {
                                  joinVoiceId: e.joinVoiceId,
                                  channelId: e.channelId,
                                  guildId: e.guildId,
                              }),
                                  (P = null);
                          }),
                              (P = {
                                  joinVoiceId: e.joinVoiceId,
                                  channelId: e.channelId,
                                  guildId: e.guildId,
                                  timeout: t,
                              });
                      })(e);
              },
              AUDIO_SET_NOISE_CANCELLATION: function (e) {
                  i?.setNoiseCancellationEnabled(e.enabled);
              },
              AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
                  if (e.context !== A.x.DEFAULT) return !1;
                  i?.setSpatialAudioEnabled(e.settings.enabled);
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
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: x,
              REMOTE_SESSION_CONNECT: x,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function () {
                  O = null;
              },
              GUILD_DELETE: function (e) {
                  let { guild: t } = e;
                  if (null == i || i.guildId !== t.id) return !1;
                  w();
              },
              CHANNEL_DELETE: k,
              THREAD_DELETE: k,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  if (null == i || i.channelId !== t) return !1;
                  w();
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
            e.client_rtc_state = B.getState();
        });
    });
let H = B;
