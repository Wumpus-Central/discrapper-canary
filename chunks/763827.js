"use strict";
let i, r;
n.d(t, { A: () => V });
var s = n(17928),
    a = n(451988),
    o = n(228366),
    l = n(507821),
    u = n(735438),
    c = n(761853),
    d = n(977997),
    _ = n(607567),
    f = n(731854);
class h {
    userId;
    channelId;
    maxVoiceStateCount = 1;
    totalParticipants = new Set();
    speaking = f.ME.NONE;
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
              (this.maxVoiceStateCount = Math.max(_.Ay.countVoiceStatesForChannel(t), this.maxVoiceStateCount)))
            : (null == t && e in this.totalSpeakers && (this.totalSpeakers[e] = f.ME.NONE),
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
        let t = c.Ay.getSettings(e),
            n = new Set(Object.keys(t.localMutes)),
            i = new Set(Object.keys(t.localVolumes));
        return (
            i.delete(this.userId),
            n.delete(this.userId),
            {
                num_local_voice_user_mutes: (0, u.intersection)(Array.from(n), Array.from(this.totalParticipants))
                    .length,
                num_local_voice_volumes: (0, u.intersection)(Array.from(i), Array.from(this.totalParticipants)).length,
            }
        );
    }
    setSpeaking(e, t) {
        if (t !== f.ME.NONE) {
            let n = d.A.getVoiceStateForChannel(this.channelId, e);
            if (null != n && !n.selfMute && !n.mute) {
                this.totalSpeakers[e] = t;
                let n = Object.values(this.totalSpeakers).filter((e) => e !== f.ME.NONE).length;
                this.maxSpeakerCount = Math.max(this.maxSpeakerCount, n);
            }
        } else e in this.totalSpeakers && (this.totalSpeakers[e] = f.ME.NONE);
        if (this.userId === e) {
            if (t === this.speaking) return;
            if (t !== f.ME.NONE) {
                let e = Object.values(d.A.getVoiceStatesForChannel(this.channelId)).filter(
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
        let t = Object.keys(d.A.getVoiceStatesForChannel(this.channelId));
        t.forEach((e) => this.totalParticipants.add(e)),
            (this.maxVoiceStateCount = t.length),
            (this.speaking = f.ME.NONE),
            (this.maxListenerCount = 0),
            (this.totalListeners = new Set()),
            (this.maxSpeakerCount = 0),
            (this.totalSpeakers = {});
    }
}
var p = n(626584),
    E = n(643501),
    m = n(75076),
    g = n(495544),
    A = n(652215);
let I = new p.A("RTCConnectionStore"),
    T = [],
    S = null,
    N = null,
    y = null,
    C = null,
    v = !1,
    O = !1,
    R = null,
    b = !1,
    D = null,
    L = null;
function w(e, t) {
    if (null == r) throw Error("Creating RTCConnection without session.");
    let i = g.default.getId(),
        s = new (n(521337).A)({ userId: i, sessionId: r, guildId: e, channelId: t, joinVoiceId: D });
    return (
        s.on(l.q.State, (e, t, n) => {
            o.h.wait(() => o.h.dispatch({ type: "RTC_CONNECTION_STATE", state: e, ...t, ...n }));
        }),
        s.on(l.q.Video, (e, t, n, i, r) => {
            o.h.wait(() =>
                o.h.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: i,
                    rtcServerId: r,
                    context: f.x.DEFAULT,
                    mediaEngineConnectionId: s.getMediaEngineConnectionId(),
                }),
            );
        }),
        s.on(l.q.Ping, (e, t) => {
            o.h.wait(() => o.h.dispatch({ type: "RTC_CONNECTION_PING", pings: e, quality: t }));
        }),
        s.on(l.q.OutboundLossRate, (e) => {
            o.h.wait(() => o.h.dispatch({ type: "RTC_CONNECTION_LOSS_RATE", lossRate: e }));
        }),
        s.on(l.q.Speaking, (e, t) => {
            C?.setSpeaking(e, t);
        }),
        s.on(l.q.Flags, (e, t) => {
            o.h.wait(() => {
                o.h.dispatch({
                    type: "RTC_CONNECTION_FLAGS",
                    flags: t,
                    userId: e,
                    guildId: s.guildId,
                    channelId: s.channelId,
                    context: s.context,
                });
            });
        }),
        s.on(l.q.UsersMerged, (e, t) => {
            o.h.dispatch({ type: "RTC_CONNECTION_USERS_MERGED", userIds: e, context: t });
        }),
        s.on(l.q.ClientConnect, (e) => {
            o.h.wait(() => {
                o.h.dispatch({
                    type: "RTC_CONNECTION_CLIENT_CONNECT",
                    userIds: e,
                    guildId: s.guildId,
                    channelId: s.channelId,
                    context: s.context,
                });
            });
        }),
        s.on(l.q.ClientDisconnect, (e) => {
            o.h.wait(() => {
                o.h.dispatch({
                    type: "RTC_CONNECTION_CLIENT_DISCONNECT",
                    userId: e,
                    guildId: s.guildId,
                    channelId: s.channelId,
                    context: s.context,
                });
            });
        }),
        s.on(l.q.Platform, (e, t, n) => {
            o.h.wait(() => {
                o.h.dispatch({ type: "RTC_CONNECTION_PLATFORM", platform: t, userId: e, channelId: n });
            });
        }),
        s.on(l.q.SecureFramesUpdate, () => {
            o.h.wait(() => {
                o.h.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
            });
        }),
        s.on(l.q.RosterMapUpdate, (e) => {
            o.h.wait(() => {
                o.h.dispatch({ type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: e });
            });
        }),
        (C = new h(g.default.getId(), t)),
        (N = null),
        (v = !1),
        (O = !1),
        s
    );
}
function M() {
    if (null == i) return !1;
    (N = {
        duration: i.getDuration(),
        mediaSessionId: i.getMediaSessionId() ?? null,
        rtcConnectionId: i.getRTCConnectionId(),
        wasEverMultiParticipant: v,
        wasEverRtcConnected: O,
        voiceStateAnalytics: C,
        channelId: i.channelId,
    }),
        o.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: i.getMediaEngineConnectionId(),
        }),
        i.destroy(),
        (i = null),
        (C = null),
        (b = !1);
}
function P() {
    null != L && (L.timeout.stop(), (L = null));
}
function x() {
    S = null;
}
function U(e) {
    let { channel: t } = e;
    if (null == i || i.channelId !== t.id) return !1;
    M();
}
function k() {
    return !0;
}
class G extends s.Ay.Store {
    static displayName = "RTCConnectionStore";
    initialize() {
        this.waitFor(g.default, E.default, _.Ay), (0, m.I)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return i;
    }
    getState() {
        return null != i ? i.state : A.S7L.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === A.S7L.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === A.S7L.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return S;
    }
    getLastSessionVoiceChannelId() {
        return y;
    }
    setLastSessionVoiceChannelId(e) {
        y = e;
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
        return null != i ? i.quality : A.bFR.UNKNOWN;
    }
    getPings() {
        return null != i ? i.getPings() : T;
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
        return i?.getDuration() ?? N?.duration;
    }
    getLastRTCConnectionState() {
        return N;
    }
    getPacketStats() {
        return i?.getPacketStats();
    }
    getVoiceStateStats() {
        return C?.getStats();
    }
    getUserVoiceSettingsStats(e) {
        return C?.getUserVoiceSettingsStats(e);
    }
    getWasEverMultiParticipant() {
        return v;
    }
    getWasEverRtcConnected() {
        return O;
    }
    getUserIds() {
        return i?.getUserIds();
    }
    getJoinVoiceId() {
        return D;
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
        return R;
    }
    getWasMoved() {
        return b;
    }
}
let F = new G(
    o.h,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: function (e) {
                  return (r = e.sessionId), (S = null), (y = null), M(), P(), !1;
              },
              CONNECTION_CLOSED: function () {
                  (r = null), (S = null), (y = null), M(), P();
              },
              RTC_CONNECTION_STATE: function (e) {
                  return e.state === A.S7L.RTC_CONNECTED && (O = !0), !0;
              },
              RTC_CONNECTION_PING: k,
              RTC_CONNECTION_LOSS_RATE: k,
              RTC_CONNECTION_UPDATE_ID: function (e) {
                  return e.connection === i;
              },
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: k,
              RTC_CONNECTION_CLIENT_CONNECT: k,
              RTC_CONNECTION_CLIENT_DISCONNECT: k,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function (e) {
                  let { context: t, wants: n } = e;
                  if (
                      t !== f.x.DEFAULT ||
                      !Object.entries(n).some((e) => {
                          let [t, n] = e;
                          return "any" !== t && 0 !== n;
                      })
                  )
                      return !1;
                  R = performance.now();
              },
              VIDEO_SIZE_UPDATE: function (e) {
                  let { streamId: t, dimensions: n, zoom: r } = e;
                  i?.setVideoSize(t, n, r);
              },
              VOICE_STATE_UPDATES: function (e) {
                  let { voiceStates: t } = e;
                  return t.reduce((e, t) => {
                      if (
                          (C?.updateVoiceStates(t.userId, t.channelId),
                          (v = v || (C?.getStats().max_voice_state_count ?? 0) > 1),
                          g.default.getId() !== t.userId)
                      )
                          return e;
                      if ((null != L && t.channelId === L.channelId && P(), null != i))
                          t.sessionId === r
                              ? (null != t.guildId && t.guildId === i.guildId) ||
                                (null == t.guildId && t.channelId === i.channelId)
                                  ? null == t.channelId
                                      ? M()
                                      : (i.setNextChannelId(t.channelId), (b = !0), (D = null), i.clearJoinVoiceId())
                                  : ((t.guildId !== i.guildId && null == t.channelId) || M(),
                                    null != t.channelId &&
                                        ((S = null),
                                        (y = null),
                                        (i = w(t.guildId, t.channelId)),
                                        (v = (C?.getStats().max_voice_state_count ?? 0) > 1)))
                              : t.guildId === i.guildId &&
                                ((null == E.default.getAwaitingRemoteSessionInfo() ||
                                    null == E.default.getRemoteSessionId()) &&
                                    (S = i.channelId),
                                M());
                      else {
                          if (t.sessionId !== r || null == t.channelId) return e;
                          (S = null),
                              (y = null),
                              (i = w(t.guildId, t.channelId)),
                              (v = (C?.getStats().max_voice_state_count ?? 0) > 1);
                      }
                      return !0;
                  }, !1);
              },
              VOICE_CHANNEL_SELECT: function (e) {
                  null != i && (null == e.channelId || i.channelId !== e.channelId) && M(),
                      (D = e.joinVoiceId),
                      (function (e) {
                          if ((P(), null == e.channelId)) return;
                          let t = new a.Ep();
                          t.start(3e4, () => {
                              I.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", {
                                  joinVoiceId: e.joinVoiceId,
                                  channelId: e.channelId,
                                  guildId: e.guildId,
                              }),
                                  (L = null);
                          }),
                              (L = {
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
                  y = null;
              },
              GUILD_DELETE: function (e) {
                  let { guild: t } = e;
                  if (null == i || i.guildId !== t.id) return !1;
                  M();
              },
              CHANNEL_DELETE: U,
              THREAD_DELETE: U,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  if (null == i || i.channelId !== t) return !1;
                  M();
              },
              APP_STATE_UPDATE: function (e) {
                  return e.state === A.g6G.ACTIVE && null != i && i.resetBackoff("App state is active"), !1;
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
            e.client_rtc_state = F.getState();
        });
    });
let V = F;
