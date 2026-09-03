let i, r;
n.d(t, { A: () => j });
var a = n(17928),
    s = n(499979),
    l = n(451988),
    o = n(228366),
    d = n(507821),
    c = n(435558),
    u = n(916546),
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
    T = n(844981),
    m = n(280450),
    g = n(652215);
let S = new I.A("RTCConnectionStore"),
    N = [],
    C = null,
    O = null,
    R = null,
    L = null,
    y = !1,
    D = !1,
    v = null,
    b = null,
    M = !1,
    P = null,
    U = null;
function w(e, t, i) {
    if (null == r) throw Error("Creating RTCConnection without session.");
    let a = m.default.getId(),
        s = new (n(940227).A)({ userId: a, sessionId: r, guildId: e, channelId: t, joinVoiceId: P, createdTime: i });
    return (
        s.on(d.q.State, (e, t, n) => {
            o.h.wait(() => o.h.dispatch({ type: "RTC_CONNECTION_STATE", state: e, ...t, ...n }));
        }),
        s.on(d.q.Video, (e, t, n, i, r) => {
            o.h.wait(() =>
                o.h.dispatch({
                    type: "RTC_CONNECTION_VIDEO",
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: i,
                    rtcServerId: r,
                    context: A.x.DEFAULT,
                    mediaEngineConnectionId: s.getMediaEngineConnectionId(),
                }),
            );
        }),
        s.on(d.q.Ping, (e, t) => {
            o.h.wait(() => o.h.dispatch({ type: "RTC_CONNECTION_PING", pings: e, quality: t }));
        }),
        s.on(d.q.OutboundLossRate, (e) => {
            o.h.wait(() => o.h.dispatch({ type: "RTC_CONNECTION_LOSS_RATE", lossRate: e }));
        }),
        s.on(d.q.Speaking, (e, t) => {
            L?.setSpeaking(e, t);
        }),
        s.on(d.q.Flags, (e, t) => {
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
        s.on(d.q.UsersMerged, (e, t) => {
            o.h.dispatch({ type: "RTC_CONNECTION_USERS_MERGED", userIds: e, context: t });
        }),
        s.on(d.q.ClientConnect, (e) => {
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
        s.on(d.q.ClientDisconnect, (e) => {
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
        s.on(d.q.Platform, (e, t, n) => {
            o.h.wait(() => {
                o.h.dispatch({ type: "RTC_CONNECTION_PLATFORM", platform: t, userId: e, channelId: n });
            });
        }),
        s.on(d.q.SecureFramesUpdate, () => {
            o.h.wait(() => {
                o.h.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
            });
        }),
        s.on(d.q.RosterMapUpdate, (e) => {
            o.h.wait(() => {
                o.h.dispatch({ type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: e });
            });
        }),
        (L = new h(m.default.getId(), t)),
        (O = null),
        (y = !1),
        (D = !1),
        s
    );
}
function G() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == i) return !1;
    (O = {
        duration: i.getDuration(),
        mediaSessionId: i.getMediaSessionId() ?? null,
        rtcConnectionId: i.getRTCConnectionId(),
        wasEverMultiParticipant: y,
        wasEverRtcConnected: D,
        voiceStateAnalytics: L,
        channelId: i.channelId,
    }),
        o.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: i.getMediaEngineConnectionId(),
        }),
        i.destroy(),
        (i = null),
        (L = null),
        (M = !1),
        e && (v = null);
}
function x() {
    null != U && (U.timeout.stop(), (U = null));
}
function k() {
    C = null;
}
function F(e) {
    let { channel: t } = e;
    if (null == i || i.channelId !== t.id) return !1;
    G();
}
function V() {
    return !0;
}
class B extends a.Ay.Store {
    static displayName = "RTCConnectionStore";
    initialize() {
        this.waitFor(m.default, f.default, E.Ay), (0, p.I)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return i;
    }
    getState() {
        return null != i ? i.state : g.S7L.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === g.S7L.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === g.S7L.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return C;
    }
    getLastSessionVoiceChannelId() {
        return R;
    }
    setLastSessionVoiceChannelId(e) {
        R = e;
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
        return null != i ? i.quality : g.bFR.UNKNOWN;
    }
    getPings() {
        return null != i ? i.getPings() : N;
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
        return i?.getDuration() ?? O?.duration;
    }
    getLastRTCConnectionState() {
        return O;
    }
    getPacketStats() {
        return i?.getPacketStats();
    }
    getVoiceStateStats() {
        return L?.getStats();
    }
    getUserVoiceSettingsStats(e) {
        return L?.getUserVoiceSettingsStats(e);
    }
    getWasEverMultiParticipant() {
        return y;
    }
    getWasEverRtcConnected() {
        return D;
    }
    getUserIds() {
        return i?.getUserIds();
    }
    getJoinVoiceId() {
        return P;
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
        return b;
    }
    getWasMoved() {
        return M;
    }
}
let H = new B(
    o.h,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: function (e) {
                  return (r = e.sessionId), (C = null), (R = null), G(!1), x(), !1;
              },
              CONNECTION_CLOSED: function () {
                  (r = null), (C = null), (R = null), G(!1), x();
              },
              LOGOUT: function () {
                  return (v = null), !1;
              },
              RTC_CONNECTION_STATE: function (e) {
                  return e.state === g.S7L.RTC_CONNECTED && ((D = !0), null != i && (v = (0, s.tB)())), !0;
              },
              RTC_CONNECTION_PING: function () {
                  return null != i && (v = (0, s.tB)()), !0;
              },
              RTC_CONNECTION_LOSS_RATE: V,
              RTC_CONNECTION_UPDATE_ID: function (e) {
                  return e.connection === i;
              },
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: V,
              RTC_CONNECTION_CLIENT_CONNECT: V,
              RTC_CONNECTION_CLIENT_DISCONNECT: V,
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
                  b = performance.now();
              },
              VIDEO_SIZE_UPDATE: function (e) {
                  let { streamId: t, dimensions: n, zoom: r } = e;
                  i?.setVideoSize(t, n, r);
              },
              VOICE_STATE_UPDATES: function (e) {
                  let { voiceStates: t, receivedAt: a } = e;
                  return t.reduce((e, t) => {
                      if (
                          (L?.updateVoiceStates(t.userId, t.channelId),
                          (y = y || (L?.getStats().max_voice_state_count ?? 0) > 1),
                          m.default.getId() !== t.userId)
                      )
                          return e;
                      let l = null != U && t.channelId === U.channelId;
                      if ((l && x(), null != i))
                          t.sessionId === r
                              ? (null != t.guildId && t.guildId === i.guildId) ||
                                (null == t.guildId && t.channelId === i.channelId)
                                  ? null == t.channelId
                                      ? G()
                                      : (i.setNextChannelId(t.channelId), (M = !0), (P = null), i.clearJoinVoiceId())
                                  : ((t.guildId !== i.guildId && null == t.channelId) || G(),
                                    null != t.channelId &&
                                        ((C = null),
                                        (R = null),
                                        (i = w(t.guildId, t.channelId, a)),
                                        (y = (L?.getStats().max_voice_state_count ?? 0) > 1)))
                              : t.guildId === i.guildId &&
                                ((null == f.default.getAwaitingRemoteSessionInfo() ||
                                    null == f.default.getRemoteSessionId()) &&
                                    (C = i.channelId),
                                G());
                      else {
                          if (t.sessionId !== r || null == t.channelId) return e;
                          if (!l && null != v && (0, s.tB)() - v >= 3e5)
                              return o.h.wait(() => n(730852).default.disconnect()), e;
                          (C = null),
                              (R = null),
                              (i = w(t.guildId, t.channelId, a)),
                              (y = (L?.getStats().max_voice_state_count ?? 0) > 1);
                      }
                      return !0;
                  }, !1);
              },
              VOICE_CHANNEL_SELECT: function (e) {
                  null != i && (null == e.channelId || i.channelId !== e.channelId) && G(),
                      (P = e.joinVoiceId),
                      (function (e) {
                          if ((x(), null == e.channelId)) return;
                          let t = new l.Ep();
                          t.start(3e4, () => {
                              S.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", {
                                  joinVoiceId: e.joinVoiceId,
                                  channelId: e.channelId,
                                  guildId: e.guildId,
                              }),
                                  (U = null);
                          }),
                              (U = {
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
                  let t = (e.settings.enabled ?? !1) && (0, T.Q2)("RTCConnectionStore");
                  i?.setSpatialAudioEnabled(t);
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
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: k,
              REMOTE_SESSION_CONNECT: k,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function () {
                  R = null;
              },
              GUILD_DELETE: function (e) {
                  let { guild: t } = e;
                  if (null == i || i.guildId !== t.id) return !1;
                  G();
              },
              CHANNEL_DELETE: F,
              THREAD_DELETE: F,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  if (null == i || i.channelId !== t) return !1;
                  G();
              },
              APP_STATE_UPDATE: function (e) {
                  return e.state === g.g6G.ACTIVE && null != i && i.resetBackoff("App state is active"), !1;
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
            e.client_rtc_state = H.getState();
        });
    });
let j = H;
