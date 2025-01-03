let i, a;
var s,
    o = r(411104);
var l = r(724458);
var u = r(442837),
    c = r(570140),
    d = r(437263),
    f = r(764976),
    _ = r(258609),
    h = r(338336),
    p = r(314897),
    m = r(938475),
    g = r(981631),
    E = r(65154);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let I = [],
    T = null,
    b = null,
    y = null,
    S = null,
    A = !1,
    N = !1;
function C(e, n) {
    if (null == a) throw Error('Creating RTCConnection without session.');
    let i = p.default.getId(),
        s = new (r(861687).Z)({
            userId: i,
            sessionId: a,
            guildId: e,
            channelId: n
        });
    return (
        s.on(d.z.State, (e, n, r) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_STATE',
                    state: e,
                    ...n,
                    ...r
                })
            );
        }),
        s.on(d.z.Video, (e, n, r, i, a) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_VIDEO',
                    guildId: e,
                    channelId: n,
                    userId: r,
                    streamId: i,
                    rtcServerId: a,
                    context: E.Yn.DEFAULT
                })
            );
        }),
        s.on(d.z.Ping, (e, n) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_PING',
                    pings: e,
                    quality: n
                })
            );
        }),
        s.on(d.z.OutboundLossRate, (e) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_LOSS_RATE',
                    lossRate: e
                })
            );
        }),
        s.on(d.z.Speaking, (e, n) => {
            null == y || y.setSpeaking(e, n);
        }),
        s.on(d.z.Flags, (e, n) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_FLAGS',
                    flags: n,
                    userId: e,
                    guildId: s.guildId,
                    channelId: s.channelId,
                    context: s.context
                });
            });
        }),
        s.on(d.z.ClientConnect, (e) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_CONNECT',
                    userIds: e,
                    guildId: s.guildId,
                    channelId: s.channelId,
                    context: s.context
                });
            });
        }),
        s.on(d.z.ClientDisconnect, (e) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_DISCONNECT',
                    userId: e,
                    guildId: s.guildId,
                    channelId: s.channelId,
                    context: s.context
                });
            });
        }),
        s.on(d.z.Platform, (e, n, r) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_PLATFORM',
                    platform: n,
                    userId: e,
                    channelId: r
                });
            });
        }),
        s.on(d.z.SecureFramesUpdate, () => {
            c.Z.wait(() => {
                c.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
            });
        }),
        s.on(d.z.RosterMapUpdate, (e) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                    userIds: e
                });
            });
        }),
        (y = new f.Z(p.default.getId(), n)),
        (S = null),
        (A = !1),
        (N = !1),
        s
    );
}
function R() {
    if (null == i) return !1;
    (S = i.getDuration()), i.destroy(), (i = null), (y = null);
}
function O(e) {
    return (a = e.sessionId), (T = null), (b = null), R(), !1;
}
function D() {
    (a = null), (T = null), (b = null), R();
}
function L(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        var r, s, o;
        if ((null == y || y.updateVoiceStates(n.userId, n.channelId), (A = A || (null !== (r = null == y ? void 0 : y.getStats().max_voice_state_count) && void 0 !== r ? r : 0) > 1), p.default.getId() !== n.userId)) return !1;
        if (null != i) n.sessionId === a ? ((null != n.guildId && n.guildId === i.guildId) || (null == n.guildId && n.channelId === i.channelId) ? (null == n.channelId ? R() : (i.channelId = n.channelId)) : ((n.guildId !== i.guildId && null == n.channelId) || R(), null != n.channelId && ((T = null), (b = null), (i = C(n.guildId, n.channelId)), (A = (null !== (s = null == y ? void 0 : y.getStats().max_voice_state_count) && void 0 !== s ? s : 0) > 1)))) : n.guildId === i.guildId && (!(null != _.Z.getAwaitingRemoteSessionInfo() && null != _.Z.getRemoteSessionId()) && (T = i.channelId), R());
        else {
            if (n.sessionId !== a || null == n.channelId) return e;
            (T = null), (b = null), (i = C(n.guildId, n.channelId)), (A = (null !== (o = null == y ? void 0 : y.getStats().max_voice_state_count) && void 0 !== o ? o : 0) > 1);
        }
        return !0;
    }, !1);
}
function x(e) {
    if (null == i || (null != e.guildId && e.guildId !== i.guildId) || (null != e.channelId && e.channelId !== i.channelId)) return !1;
    i.connect(e.endpoint, e.token);
}
function w() {
    T = null;
}
function P() {
    b = null;
}
function M(e) {
    let { guild: n } = e;
    if (null == i || i.guildId !== n.id) return !1;
    R();
}
function k(e) {
    let { channelId: n } = e;
    if (null == i || i.channelId !== n) return !1;
    R();
}
function U(e) {
    let { channel: n } = e;
    if (null == i || i.channelId !== n.id) return !1;
    R();
}
function B(e) {
    let { channelId: n } = e;
    if (null == i || (null != n && i.channelId === n)) return !1;
    R();
}
function G(e) {
    return e.state === g.$7l.ACTIVE && null != i && i.resetBackoff('App state is active'), !1;
}
function Z(e) {
    return e.state === g.hes.RTC_CONNECTED && (N = !0), !0;
}
function F() {
    return !0;
}
function V(e) {
    return e.connection === i;
}
function j(e) {
    let { userId: n, context: r, quality: a } = e;
    null == i || i.setSimulcastDebugOverride(n, r, a);
}
function H(e) {
    let { streamId: n, width: r, height: a } = e;
    null == i || i.setVideoSize(n, r, a);
}
class Y extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(m.ZP), (0, h.r)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return i;
    }
    getState() {
        return null != i ? i.state : g.hes.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === g.hes.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === g.hes.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return T;
    }
    getLastSessionVoiceChannelId() {
        return b;
    }
    setLastSessionVoiceChannelId(e) {
        b = e;
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
        return null != i ? i.quality : g.IE4.UNKNOWN;
    }
    getPings() {
        return null != i ? i.getPings() : I;
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
        return null !== (e = null == i ? void 0 : i.getDuration()) && void 0 !== e ? e : S;
    }
    getPacketStats() {
        return null == i ? void 0 : i.getPacketStats();
    }
    getVoiceStateStats() {
        return null == y ? void 0 : y.getStats();
    }
    getWasEverMultiParticipant() {
        return A;
    }
    getWasEverRtcConnected() {
        return N;
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
        let n = null == i ? void 0 : i.getSecureFramesRosterMap();
        return null == n ? void 0 : n.get(e);
    }
}
v(Y, 'displayName', 'RTCConnectionStore');
let W = new Y(
    c.Z,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: O,
              CONNECTION_CLOSED: D,
              RTC_CONNECTION_STATE: Z,
              RTC_CONNECTION_PING: F,
              RTC_CONNECTION_LOSS_RATE: F,
              RTC_CONNECTION_UPDATE_ID: V,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: F,
              RTC_CONNECTION_CLIENT_CONNECT: F,
              RTC_CONNECTION_CLIENT_DISCONNECT: F,
              VIDEO_SIZE_UPDATE: H,
              VOICE_STATE_UPDATES: L,
              VOICE_CHANNEL_SELECT: B,
              VOICE_SERVER_UPDATE: x,
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: w,
              REMOTE_SESSION_CONNECT: w,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: P,
              GUILD_DELETE: M,
              CHANNEL_DELETE: U,
              THREAD_DELETE: U,
              CALL_DELETE: k,
              APP_STATE_UPDATE: G,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: j
          }
);
Promise.resolve()
    .then(r.bind(r, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: n } = e;
        n((e) => {
            e.client_rtc_state = W.getState();
        });
    }),
    (n.Z = W);
