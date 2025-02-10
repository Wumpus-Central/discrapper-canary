let i, r;
n.d(t, { Z: () => H }), n(411104), n(724458);
var a,
    s = n(442837),
    o = n(570140),
    l = n(437263),
    u = n(764976),
    c = n(258609),
    d = n(338336),
    f = n(314897),
    _ = n(938475),
    p = n(981631),
    h = n(65154);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = [],
    E = null,
    v = null,
    y = null,
    I = null,
    T = !1,
    b = !1;
function S(e, t) {
    if (null == r) throw Error('Creating RTCConnection without session.');
    let i = f.default.getId(),
        a = new (n(861687).Z)({
            userId: i,
            sessionId: r,
            guildId: e,
            channelId: t
        });
    return (
        a.on(l.z.State, (e, t, n) => {
            o.Z.wait(() =>
                o.Z.dispatch({
                    type: 'RTC_CONNECTION_STATE',
                    state: e,
                    ...t,
                    ...n
                })
            );
        }),
        a.on(l.z.Video, (e, t, n, i, r) => {
            o.Z.wait(() =>
                o.Z.dispatch({
                    type: 'RTC_CONNECTION_VIDEO',
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: i,
                    rtcServerId: r,
                    context: h.Yn.DEFAULT
                })
            );
        }),
        a.on(l.z.Ping, (e, t) => {
            o.Z.wait(() =>
                o.Z.dispatch({
                    type: 'RTC_CONNECTION_PING',
                    pings: e,
                    quality: t
                })
            );
        }),
        a.on(l.z.OutboundLossRate, (e) => {
            o.Z.wait(() =>
                o.Z.dispatch({
                    type: 'RTC_CONNECTION_LOSS_RATE',
                    lossRate: e
                })
            );
        }),
        a.on(l.z.Speaking, (e, t) => {
            null == y || y.setSpeaking(e, t);
        }),
        a.on(l.z.Flags, (e, t) => {
            o.Z.wait(() => {
                o.Z.dispatch({
                    type: 'RTC_CONNECTION_FLAGS',
                    flags: t,
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(l.z.ClientConnect, (e) => {
            o.Z.wait(() => {
                o.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_CONNECT',
                    userIds: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(l.z.ClientDisconnect, (e) => {
            o.Z.wait(() => {
                o.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_DISCONNECT',
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(l.z.Platform, (e, t, n) => {
            o.Z.wait(() => {
                o.Z.dispatch({
                    type: 'RTC_CONNECTION_PLATFORM',
                    platform: t,
                    userId: e,
                    channelId: n
                });
            });
        }),
        a.on(l.z.SecureFramesUpdate, () => {
            o.Z.wait(() => {
                o.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
            });
        }),
        a.on(l.z.RosterMapUpdate, (e) => {
            o.Z.wait(() => {
                o.Z.dispatch({
                    type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                    userIds: e
                });
            });
        }),
        (y = new u.Z(f.default.getId(), t)),
        (I = null),
        (T = !1),
        (b = !1),
        a
    );
}
function A() {
    if (null == i) return !1;
    (I = i.getDuration()), i.destroy(), (i = null), (y = null);
}
function N(e) {
    return (r = e.sessionId), (E = null), (v = null), A(), !1;
}
function C() {
    (r = null), (E = null), (v = null), A();
}
function R(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, a, s;
        if ((null == y || y.updateVoiceStates(t.userId, t.channelId), (T = T || (null !== (n = null == y ? void 0 : y.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1), f.default.getId() !== t.userId)) return !1;
        if (null != i) t.sessionId === r ? ((null != t.guildId && t.guildId === i.guildId) || (null == t.guildId && t.channelId === i.channelId) ? (null == t.channelId ? A() : (i.channelId = t.channelId)) : ((t.guildId !== i.guildId && null == t.channelId) || A(), null != t.channelId && ((E = null), (v = null), (i = S(t.guildId, t.channelId)), (T = (null !== (a = null == y ? void 0 : y.getStats().max_voice_state_count) && void 0 !== a ? a : 0) > 1)))) : t.guildId === i.guildId && ((null != c.Z.getAwaitingRemoteSessionInfo() && null != c.Z.getRemoteSessionId()) || (E = i.channelId), A());
        else {
            if (t.sessionId !== r || null == t.channelId) return e;
            (E = null), (v = null), (i = S(t.guildId, t.channelId)), (T = (null !== (s = null == y ? void 0 : y.getStats().max_voice_state_count) && void 0 !== s ? s : 0) > 1);
        }
        return !0;
    }, !1);
}
function O(e) {
    if (null == i || (null != e.guildId && e.guildId !== i.guildId) || (null != e.channelId && e.channelId !== i.channelId)) return !1;
    i.connect(e.endpoint, e.token);
}
function D() {
    E = null;
}
function L() {
    v = null;
}
function x(e) {
    let { guild: t } = e;
    if (null == i || i.guildId !== t.id) return !1;
    A();
}
function P(e) {
    let { channelId: t } = e;
    if (null == i || i.channelId !== t) return !1;
    A();
}
function w(e) {
    let { channel: t } = e;
    if (null == i || i.channelId !== t.id) return !1;
    A();
}
function M(e) {
    let { channelId: t } = e;
    if (null == i || (null != t && i.channelId === t)) return !1;
    A();
}
function k(e) {
    return e.state === p.$7l.ACTIVE && null != i && i.resetBackoff('App state is active'), !1;
}
function U(e) {
    return e.state === p.hes.RTC_CONNECTED && (b = !0), !0;
}
function G() {
    return !0;
}
function B(e) {
    return e.connection === i;
}
function Z(e) {
    let { userId: t, context: n, quality: r } = e;
    null == i || i.setSimulcastDebugOverride(t, n, r);
}
function F(e) {
    let { streamId: t, width: n, height: r } = e;
    null == i || i.setVideoSize(t, n, r);
}
class V extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP), (0, d.r)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return i;
    }
    getState() {
        return null != i ? i.state : p.hes.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === p.hes.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === p.hes.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return E;
    }
    getLastSessionVoiceChannelId() {
        return v;
    }
    setLastSessionVoiceChannelId(e) {
        v = e;
    }
    getGuildId() {
        return null == i ? void 0 : i.guildId;
    }
    getChannelId() {
        return null == i ? void 0 : i.channelId;
    }
    getHostname() {
        return null != i ? i.hostname : '';
    }
    getQuality() {
        return null != i ? i.quality : p.IE4.UNKNOWN;
    }
    getPings() {
        return null != i ? i.getPings() : g;
    }
    getAveragePing() {
        return null != i ? (null == i ? void 0 : i.getAveragePing()) : 0;
    }
    getLastPing() {
        return null == i ? void 0 : i.getLastPing();
    }
    getOutboundLossRate() {
        return null == i ? void 0 : i.getOutboundLossRate();
    }
    getMediaSessionId() {
        return null == i ? void 0 : i.getMediaSessionId();
    }
    getRTCConnectionId() {
        return null == i ? void 0 : i.getRTCConnectionId();
    }
    getDuration() {
        var e;
        return null !== (e = null == i ? void 0 : i.getDuration()) && void 0 !== e ? e : I;
    }
    getPacketStats() {
        return null == i ? void 0 : i.getPacketStats();
    }
    getVoiceStateStats() {
        return null == y ? void 0 : y.getStats();
    }
    getWasEverMultiParticipant() {
        return T;
    }
    getWasEverRtcConnected() {
        return b;
    }
    getUserIds() {
        return null == i ? void 0 : i.getUserIds();
    }
    isUserConnected(e) {
        return null == i ? void 0 : i.getIsUserConnected(e);
    }
    getSecureFramesState() {
        return null == i ? void 0 : i.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e) {
        let t = null == i ? void 0 : i.getSecureFramesRosterMap();
        return null == t ? void 0 : t.get(e);
    }
}
m(V, 'displayName', 'RTCConnectionStore');
let j = new V(
    o.Z,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: N,
              CONNECTION_CLOSED: C,
              RTC_CONNECTION_STATE: U,
              RTC_CONNECTION_PING: G,
              RTC_CONNECTION_LOSS_RATE: G,
              RTC_CONNECTION_UPDATE_ID: B,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: G,
              RTC_CONNECTION_CLIENT_CONNECT: G,
              RTC_CONNECTION_CLIENT_DISCONNECT: G,
              VIDEO_SIZE_UPDATE: F,
              VOICE_STATE_UPDATES: R,
              VOICE_CHANNEL_SELECT: M,
              VOICE_SERVER_UPDATE: O,
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: D,
              REMOTE_SESSION_CONNECT: D,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: L,
              GUILD_DELETE: x,
              CHANNEL_DELETE: w,
              THREAD_DELETE: w,
              CALL_DELETE: P,
              APP_STATE_UPDATE: k,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: Z
          }
);
Promise.resolve()
    .then(n.bind(n, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = j.getState();
        });
    });
let H = j;
