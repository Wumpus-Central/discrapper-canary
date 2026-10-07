let i, r;
n.d(t, { A: () => H });
var a = n(17928),
    s = n(499979),
    l = n(451988),
    o = n(73153),
    d = n(507821),
    c = n(435558),
    u = n(977997),
    _ = n(607567),
    E = n(731854);
class A {
    userId;
    channelId;
    maxVoiceStateCount = 1;
    totalParticipants = new Set();
    speaking = E.ME.NONE;
    maxListenerCount = 0;
    totalListeners = new Set();
    maxSpeakerCount = 0;
    totalSpeakers = {};
    constructor(e, t) {
        ((this.userId = e), this.setChannelId(t));
    }
    updateVoiceStates(e, t) {
        t === this.channelId
            ? (this.totalParticipants.add(e),
              (this.maxVoiceStateCount = Math.max(_.Ay.countVoiceStatesForChannel(t), this.maxVoiceStateCount)))
            : (null == t && e in this.totalSpeakers && (this.totalSpeakers[e] = E.ME.NONE),
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
        let t = new Set(Object.keys(e.localMutes)),
            n = new Set(Object.keys(e.localVolumes));
        return (
            n.delete(this.userId),
            t.delete(this.userId),
            {
                num_local_voice_user_mutes: (0, c.intersection)(Array.from(t), Array.from(this.totalParticipants))
                    .length,
                num_local_voice_volumes: (0, c.intersection)(Array.from(n), Array.from(this.totalParticipants)).length,
            }
        );
    }
    setSpeaking(e, t) {
        if (t !== E.ME.NONE) {
            let n = u.A.getVoiceStateForChannel(this.channelId, e);
            if (null != n && !n.selfMute && !n.mute) {
                this.totalSpeakers[e] = t;
                let n = Object.values(this.totalSpeakers).filter((e) => e !== E.ME.NONE).length;
                this.maxSpeakerCount = Math.max(this.maxSpeakerCount, n);
            }
        } else e in this.totalSpeakers && (this.totalSpeakers[e] = E.ME.NONE);
        if (this.userId === e) {
            if (t === this.speaking) return;
            if (t !== E.ME.NONE) {
                let e = Object.values(u.A.getVoiceStatesForChannel(this.channelId)).filter(
                    (e) => !e.selfDeaf && !e.deaf,
                );
                (e.forEach((e) => this.totalListeners.add(e.userId)),
                    (this.maxListenerCount = Math.max(e.length, this.maxListenerCount)));
            }
            this.speaking = t;
        }
    }
    setChannelId(e) {
        if (e === this.channelId) return;
        ((this.channelId = e), (this.totalParticipants = new Set([this.userId])));
        let t = Object.keys(u.A.getVoiceStatesForChannel(this.channelId));
        (t.forEach((e) => this.totalParticipants.add(e)),
            (this.maxVoiceStateCount = t.length),
            (this.speaking = E.ME.NONE),
            (this.maxListenerCount = 0),
            (this.totalListeners = new Set()),
            (this.maxSpeakerCount = 0),
            (this.totalSpeakers = {}));
    }
}
var h = n(626584),
    f = n(643501),
    I = n(75076),
    p = n(280450),
    T = n(652215);
let m = new h.A("RTCConnectionStore"),
    g = [],
    S = null,
    N = null,
    C = null,
    O = null,
    R = !1,
    L = !1,
    y = null,
    D = !1,
    v = null,
    b = !1,
    M = null,
    P = null;
function U(e, t, i) {
    if (null == r) throw Error("Creating RTCConnection without session.");
    let a = p.default.getId(),
        s = new (n(143430).A)({ userId: a, sessionId: r, guildId: e, channelId: t, joinVoiceId: M, createdTime: i });
    return (
        s.on(d.q.State, (e, t, n) => {
            o.h.dispatch({ type: "RTC_CONNECTION_STATE", state: e, ...t, ...n });
        }),
        s.on(d.q.Video, (e, t, n, i, r) => {
            o.h.dispatch({
                type: "RTC_CONNECTION_VIDEO",
                guildId: e,
                channelId: t,
                userId: n,
                streamId: i,
                rtcServerId: r,
                context: E.x.DEFAULT,
                mediaEngineConnectionId: s.getMediaEngineConnectionId(),
            });
        }),
        s.on(d.q.Ping, (e, t) => {
            o.h.dispatch({ type: "RTC_CONNECTION_PING", pings: e, quality: t });
        }),
        s.on(d.q.OutboundLossRate, (e) => {
            o.h.dispatch({ type: "RTC_CONNECTION_LOSS_RATE", lossRate: e });
        }),
        s.on(d.q.Speaking, (e, t) => {
            O?.setSpeaking(e, t);
        }),
        s.on(d.q.Flags, (e, t) => {
            o.h.dispatch({
                type: "RTC_CONNECTION_FLAGS",
                flags: t,
                userId: e,
                guildId: s.guildId,
                channelId: s.channelId,
                context: s.context,
            });
        }),
        s.on(d.q.UsersMerged, (e, t) => {
            o.h.dispatch({ type: "RTC_CONNECTION_USERS_MERGED", userIds: e, context: t });
        }),
        s.on(d.q.ClientConnect, (e) => {
            o.h.dispatch({
                type: "RTC_CONNECTION_CLIENT_CONNECT",
                userIds: e,
                guildId: s.guildId,
                channelId: s.channelId,
                context: s.context,
            });
        }),
        s.on(d.q.ClientDisconnect, (e) => {
            o.h.dispatch({
                type: "RTC_CONNECTION_CLIENT_DISCONNECT",
                userId: e,
                guildId: s.guildId,
                channelId: s.channelId,
                context: s.context,
            });
        }),
        s.on(d.q.Platform, (e, t, n) => {
            o.h.dispatch({ type: "RTC_CONNECTION_PLATFORM", platform: t, userId: e, channelId: n });
        }),
        s.on(d.q.SecureFramesUpdate, () => {
            o.h.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
        }),
        s.on(d.q.RosterMapUpdate, (e) => {
            o.h.dispatch({ type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: e });
        }),
        (O = new A(p.default.getId(), t)),
        (N = null),
        (R = !1),
        (L = !1),
        s
    );
}
function w() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == i) return !1;
    ((N = {
        duration: i.getDuration(),
        mediaSessionId: i.getMediaSessionId() ?? null,
        rtcConnectionId: i.getRTCConnectionId(),
        wasEverMultiParticipant: R,
        wasEverRtcConnected: L,
        voiceStateAnalytics: O,
        channelId: i.channelId,
    }),
        o.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: i.getMediaEngineConnectionId(),
        }),
        i.destroy(),
        (i = null),
        (O = null),
        (b = !1),
        e && (y = null));
}
function G() {
    null != P && (P.timeout.stop(), (P = null));
}
function x() {
    S = null;
}
function k(e) {
    let { channel: t } = e;
    if (null == i || i.channelId !== t.id) return !1;
    w();
}
function F() {
    return !0;
}
class B extends a.Ay.Store {
    static displayName = "RTCConnectionStore";
    initialize() {
        (this.waitFor(p.default, f.default, _.Ay), (0, I.I)(this.getRTCConnectionId, this.getMediaSessionId));
    }
    getRTCConnection() {
        return i;
    }
    getState() {
        return null != i ? i.state : T.S7L.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === T.S7L.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === T.S7L.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return S;
    }
    getLastSessionVoiceChannelId() {
        return C;
    }
    setLastSessionVoiceChannelId(e) {
        C = e;
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
        return null != i ? i.quality : T.bFR.UNKNOWN;
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
        return i?.getDuration() ?? N?.duration;
    }
    getLastRTCConnectionState() {
        return N;
    }
    getPacketStats() {
        return i?.getPacketStats();
    }
    getVoiceStateStats() {
        return O?.getStats();
    }
    getUserVoiceSettingsStats(e) {
        return O?.getUserVoiceSettingsStats(e);
    }
    didReconnectTimeOut() {
        return D;
    }
    getWasEverMultiParticipant() {
        return R;
    }
    getWasEverRtcConnected() {
        return L;
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
let V = new B(
    o.h,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: function (e) {
                  return ((r = e.sessionId), (S = null), (C = null), w(!1), G(), !1);
              },
              CONNECTION_CLOSED: function () {
                  ((r = null), (S = null), (C = null), w(!1), G());
              },
              LOGOUT: function () {
                  return ((y = null), !1);
              },
              RTC_CONNECTION_STATE: function (e) {
                  return (e.state === T.S7L.RTC_CONNECTED && ((L = !0), null != i && (y = (0, s.tB)())), !0);
              },
              RTC_CONNECTION_PING: function () {
                  return (null != i && (y = (0, s.tB)()), !0);
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
                      t !== E.x.DEFAULT ||
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
                  let { voiceStates: t, receivedAt: n } = e;
                  return (
                      (D = !1),
                      t.reduce((e, t) => {
                          if (
                              (O?.updateVoiceStates(t.userId, t.channelId),
                              (R = R || (O?.getStats().max_voice_state_count ?? 0) > 1),
                              p.default.getId() !== t.userId)
                          )
                              return e;
                          let a = null != P && t.channelId === P.channelId;
                          if ((a && G(), null != i))
                              t.sessionId === r
                                  ? (null != t.guildId && t.guildId === i.guildId) ||
                                    (null == t.guildId && t.channelId === i.channelId)
                                      ? null == t.channelId
                                          ? w()
                                          : (i.setNextChannelId(t.channelId),
                                            (b = !0),
                                            (M = null),
                                            i.clearJoinVoiceId())
                                      : ((t.guildId !== i.guildId && null == t.channelId) || w(),
                                        null != t.channelId &&
                                            ((S = null),
                                            (C = null),
                                            (i = U(t.guildId, t.channelId, n)),
                                            (R = (O?.getStats().max_voice_state_count ?? 0) > 1)))
                                  : t.guildId === i.guildId &&
                                    ((null == f.default.getAwaitingRemoteSessionInfo() ||
                                        null == f.default.getRemoteSessionId()) &&
                                        (S = i.channelId),
                                    w());
                          else {
                              if (t.sessionId !== r || null == t.channelId) return e;
                              if (!a && null != y && (0, s.tB)() - y >= 3e5) return ((D = !0), e);
                              ((S = null),
                                  (C = null),
                                  (i = U(t.guildId, t.channelId, n)),
                                  (R = (O?.getStats().max_voice_state_count ?? 0) > 1));
                          }
                          return !0;
                      }, !1)
                  );
              },
              VOICE_CHANNEL_SELECT: function (e) {
                  (null != i && (null == e.channelId || i.channelId !== e.channelId) && w(),
                      (M = e.joinVoiceId),
                      (function (e) {
                          if ((G(), null == e.channelId)) return;
                          let t = new l.Ep();
                          (t.start(3e4, () => {
                              (m.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", {
                                  joinVoiceId: e.joinVoiceId,
                                  channelId: e.channelId,
                                  guildId: e.guildId,
                              }),
                                  (P = null));
                          }),
                              (P = {
                                  joinVoiceId: e.joinVoiceId,
                                  channelId: e.channelId,
                                  guildId: e.guildId,
                                  timeout: t,
                              }));
                      })(e));
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
                  C = null;
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
                  return (e.state === T.g6G.ACTIVE && null != i && i.resetBackoff("App state is active"), !1);
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
            e.client_rtc_state = V.getState();
        });
    });
let H = V;
