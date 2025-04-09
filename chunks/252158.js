n.d(t, { Z: () => $ }), n(388685), n(539854), n(49124);
var r = n(570140),
    i = n(147913),
    o = n(798681),
    a = n(358221),
    s = n(710845),
    l = n(569545),
    c = n(450109),
    u = n(199902),
    d = n(314897),
    f = n(592125),
    _ = n(858340),
    p = n(131951),
    h = n(19780),
    m = n(944486),
    g = n(959457),
    E = n(33039),
    b = n(979651),
    y = n(70956),
    v = n(557457),
    O = n(785141),
    I = n(38055),
    S = n(303284),
    T = n(272395),
    N = n(674503),
    A = n(981631);
function C(e, t, n) {
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
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let D = 30,
    L = 30,
    x = 10 * y.Z.Millis.SECOND,
    M = 5,
    k = 10,
    j = 10,
    U = 30,
    G = 15,
    B = 8,
    V = 3,
    F = 10 * y.Z.Millis.SECOND,
    Z = new s.Z('AVErrorManager'),
    H = performance.now();
function W(e, t) {
    let n = new Set();
    for (let r of e) t.has(r) || n.add(r);
    return n;
}
function Y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? V : e <= 15 ? B : e <= 30 ? G : U;
}
function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : M,
        r = c.Z.getAccumulatedPerformanceStats(e, t, 'short'),
        i = c.Z.getAccumulatedPerformanceStats(e, t, 'long');
    return null == r || null == i || r.numDatapoints < n || i.numDatapoints < n
        ? null
        : {
              short: r,
              long: i
          };
}
function z() {
    return o.w.isIncomingVideoEnabled() && Date.now() - o.w.lastIncomingVideoEnabledChangeTime() > F;
}
let q = {
    [O.u.NO_AUDIO_INPUT_DETECTED]: {
        getActiveErrors: (e) => {
            let { voiceChannelId: t, voiceState: n } = e,
                r = f.Z.getChannel(t),
                i = (null == r ? void 0 : r.isGuildStageVoice()) && (null == n ? void 0 : n.suppress),
                o = h.ZP.getMediaSessionId();
            if (null != r && null != o && !1 === p.Z.getInputDetected() && !i && !p.Z.isSelfMute()) return [R({ type: O.u.NO_AUDIO_INPUT_DETECTED }, (0, S.Y9)())];
        },
        makeErrorContextKey: (e) => ''.concat(e.mediaSessionId, ':').concat(e.audioInputDeviceName)
    },
    [O.u.NO_INPUT_DEVICES]: {
        getActiveErrors: (e) => {
            let { voiceChannelId: t, voiceState: n } = e,
                r = f.Z.getChannel(t),
                i = (null == r ? void 0 : r.isGuildStageVoice()) && (null == n ? void 0 : n.suppress),
                o = 0 === Object.keys(p.Z.getInputDevices()).length,
                a = h.ZP.getMediaSessionId();
            if (o && null != r && null != a && !i) return [R({ type: O.u.NO_INPUT_DEVICES }, (0, S.Y9)())];
        },
        makeErrorContextKey: (e) => ''.concat(e.mediaSessionId)
    },
    [O.u.STREAM_VIEW_LOW_FPS]: {
        getActiveErrors: () =>
            z()
                ? u.Z.getAllActiveStreams().reduce((e, t) => {
                      var n;
                      let r = null == (n = g.Z.getRTCConnection((0, l.V9)(t))) ? void 0 : n.getMediaEngineConnectionId();
                      if (null == r) return e;
                      let i = K(r, t.ownerId);
                      if (null == i) return e;
                      let o = a.Z.getParticipant(t.channelId, (0, l.V9)(t));
                      if (null == o) return e;
                      let s = (0, v.Wc)(o);
                      return null == s || ((i.short.frameRate < Y(s.maxFrameRate) || i.long.frameRate < Y(s.maxFrameRate)) && e.push(R({ type: O.u.STREAM_VIEW_LOW_FPS }, (0, S.rT)((0, l.V9)(t))))), e;
                  }, [])
                : null,
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [O.u.STREAM_VIEW_HIGH_PACKET_LOSS]: {
        getActiveErrors: () =>
            z()
                ? u.Z.getAllActiveStreams().reduce((e, t) => {
                      var n;
                      let r = null == (n = g.Z.getRTCConnection((0, l.V9)(t))) ? void 0 : n.getMediaEngineConnectionId();
                      if (null == r) return e;
                      let i = K(r, t.ownerId);
                      return null == i || ((100 * i.short.packetLossRate > k || 100 * i.long.packetLossRate > k) && e.push(R({ type: O.u.STREAM_VIEW_HIGH_PACKET_LOSS }, (0, S.rT)((0, l.V9)(t))))), e;
                  }, [])
                : null,
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [O.u.STREAM_SEND_HIGH_PACKET_LOSS]: {
        getActiveErrors: () => {
            var e;
            let t = u.Z.getCurrentUserActiveStream();
            if (null == t) return null;
            let n = null == (e = g.Z.getRTCConnection((0, l.V9)(t))) ? void 0 : e.getMediaEngineConnectionId();
            if (null == n) return null;
            let r = K(n, t.ownerId);
            return null == r ? null : 100 * r.short.packetLossRate > k || 100 * r.long.packetLossRate > k ? [R({ type: O.u.STREAM_SEND_HIGH_PACKET_LOSS }, (0, S.rT)((0, l.V9)(t)))] : void 0;
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [O.u.STREAM_SEND_LOW_FPS]: {
        getActiveErrors: () => {
            var e;
            let t = u.Z.getCurrentUserActiveStream();
            if (null == t) return null;
            let n = null == (e = g.Z.getRTCConnection((0, l.V9)(t))) ? void 0 : e.getMediaEngineConnectionId();
            if (null == n) return null;
            let r = a.Z.getParticipant(t.channelId, (0, l.V9)(t));
            if (null == r) return null;
            let i = K(n, t.ownerId);
            if (null == i) return null;
            let o = (0, v.Wc)(r);
            return null == o ? null : i.short.frameRate < Y(o.maxFrameRate) || i.long.frameRate < Y(o.maxFrameRate) ? [R({ type: O.u.STREAM_SEND_LOW_FPS }, (0, S.rT)((0, l.V9)(t)))] : null;
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [O.u.STREAM_BAD_NETWORK_QUALITY]: {
        getActiveErrors: () => (g.Z.getQuality() === A.IE4.BAD ? u.Z.getAllActiveStreams().map((e) => R({ type: O.u.STREAM_BAD_NETWORK_QUALITY }, (0, S.rT)((0, l.V9)(e)))) : null),
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [O.u.STREAM_SOUNDSHARE_FAILED]: {
        getActiveErrors: () => {
            let e = u.Z.getCurrentUserActiveStream();
            return null != e && null != _.Z.getHookError(A.K3D.SOUND) ? [R({ type: O.u.STREAM_SOUNDSHARE_FAILED }, (0, S.rT)((0, l.V9)(e)))] : void 0;
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [O.u.STREAM_FAILED_TO_START]: {
        getActiveErrors: (e) => {
            let { activeStreams: t } = e;
            return t.filter((e) => e.state === A.jm8.FAILED).map((e) => R({ type: O.u.STREAM_FAILED_TO_START }, (0, S.rT)((0, l.V9)(e))));
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [O.u.STREAM_RECONNECTING]: {
        getActiveErrors: (e) => {
            let { activeStreams: t } = e;
            return t.filter((e) => e.state === A.jm8.RECONNECTING).map((e) => R({ type: O.u.STREAM_RECONNECTING }, (0, S.rT)((0, l.V9)(e))));
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [O.u.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH]: {
        getActiveErrors: () => {
            var e, t, n, r, i, o;
            if ((null != (i = null == (e = h.ZP.getRTCConnection()) ? void 0 : e.getDurationSeconds()) ? i : 0) < L || performance.now() - H < x) return;
            let a = null != (o = null == (n = c.Z.getConnectionStats(null == (r = h.ZP.getRTCConnection()) ? void 0 : r.getMediaEngineConnectionId())) || null == (t = n.stats.rtp.outbound.find((e) => 'audio' === e.type)) ? void 0 : t.sampleRateMismatchPercent) ? o : 0;
            if (Math.abs(a) > D)
                return [
                    R(
                        {
                            type: O.u.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH,
                            audioCaptureSampleRateMismatchPercent: a
                        },
                        (0, S.Y9)()
                    )
                ];
        },
        makeErrorContextKey: (e) => ''.concat(e.mediaSessionId, ':').concat(e.audioInputDeviceName)
    },
    [O.u.VIDEO_STREAM_SENDER_READY_TIMEOUT]: {
        getActiveErrors: () =>
            Object.values(E.Z.getTimedoutVideos())
                .filter((e) => {
                    let { userId: t, videoStreamId: n } = e;
                    return d.default.getId() === t && null != n;
                })
                .map((e) => R({ type: O.u.VIDEO_STREAM_SENDER_READY_TIMEOUT }, e)),
        makeErrorContextKey: (e) => ''.concat(e.mediaContext, ':').concat(e.userId)
    },
    [O.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT]: {
        getActiveErrors: () =>
            Object.values(E.Z.getTimedoutVideos())
                .filter((e) => {
                    let { userId: t, videoStreamId: n } = e;
                    return d.default.getId() !== t && null != n;
                })
                .map((e) => R({ type: O.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT }, e)),
        makeErrorContextKey: (e) => ''.concat(e.mediaContext, ':').concat(e.userId)
    },
    [O.u.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM]: {
        getActiveErrors: () =>
            Object.values(E.Z.getTimedoutVideos())
                .filter((e) => {
                    let { userId: t, videoStreamId: n } = e;
                    return d.default.getId() === t && null == n;
                })
                .map((e) => R({ type: O.u.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM }, e)),
        makeErrorContextKey: (e) => ''.concat(e.mediaContext, ':').concat(e.userId)
    },
    [O.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM]: {
        getActiveErrors: () =>
            Object.values(E.Z.getTimedoutVideos())
                .filter((e) => {
                    let { userId: t, videoStreamId: n } = e;
                    return d.default.getId() !== t && null == n;
                })
                .map((e) => R({ type: O.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM }, e)),
        makeErrorContextKey: (e) => ''.concat(e.mediaContext, ':').concat(e.userId)
    },
    [O.u.CAMERA_SEND_LOW_FPS]: {
        getActiveErrors: () => {
            var e;
            let t = null == (e = h.ZP.getRTCConnection()) ? void 0 : e.getMediaEngineConnectionId();
            if (null == t || !p.Z.isVideoEnabled()) return null;
            let n = K(t, d.default.getId());
            return null == n ? null : n.short.frameRate < j || n.long.frameRate < j ? [R({ type: O.u.CAMERA_SEND_LOW_FPS }, (0, S.Y9)())] : void 0;
        },
        makeErrorContextKey: (e) => ''.concat(e.mediaSessionId)
    }
};
function Q(e) {
    return q[e.type];
}
function X(e) {
    let t = Q(e);
    return ''.concat(e.type, ':').concat(null == t ? void 0 : t.makeErrorContextKey(e));
}
class J extends i.Z {
    _initialize() {
        (0, T.H3)('AVErrorManager');
    }
    updateActiveErrors() {
        var e, t;
        if (__OVERLAY__) return;
        let n = null != (e = m.Z.getVoiceChannelId()) ? e : null,
            i = null != n && null != (t = b.Z.getVoiceStateForChannel(n)) ? t : null,
            o = u.Z.getAllActiveStreams(),
            a = new Map();
        for (let e of Object.values(q)) {
            let t = e.getActiveErrors({
                voiceChannelId: n,
                voiceState: i,
                activeStreams: o
            });
            if (null != t) for (let e of t) a.set(X(e), e);
        }
        let s = N.Z.getActiveErrors();
        if (!(s instanceof Map)) return void Z.error('existingErrors is not a Map: '.concat(s, ' type: ').concat(Object.prototype.toString.call(s)));
        if (0 === a.size && 0 === s.size) return;
        let l = new Set(a.keys()),
            c = new Set(s.keys());
        if (l.size > c.size)
            for (let e of W(l, c)) {
                let t = a.get(e);
                null != t && (0, O.kr)(t);
            }
        if (c.size > l.size)
            for (let e of W(c, l)) {
                let t = e,
                    n = s.get(t);
                if (null != n) {
                    let { type: e } = n,
                        t = P(n, ['type']);
                    Z.info('Error resolved: '.concat(e, ' ').concat(JSON.stringify(t)));
                }
            }
        r.Z.dispatch({
            type: 'ACTIVE_AV_ERRORS_CHANGED',
            activeErrors: a
        });
    }
    handleReportAVError(e) {
        let { error: t, context: n } = e;
        __OVERLAY__ || (0, I.b)(t, n);
    }
    handleAudioInputDeviceChanged() {
        (H = performance.now()), this.updateActiveErrors();
    }
    constructor(...e) {
        super(...e),
            C(this, 'actions', {
                MEDIA_ENGINE_SET_AUDIO_ENABLED: this.updateActiveErrors,
                AUDIO_INPUT_DETECTED: this.updateActiveErrors,
                AUDIO_SET_DISPLAY_SILENCE_WARNING: this.updateActiveErrors,
                CERTIFIED_DEVICES_SET: this.updateActiveErrors,
                AUDIO_SET_INPUT_DEVICE: this.handleAudioInputDeviceChanged,
                AUDIO_SET_OUTPUT_DEVICE: this.updateActiveErrors,
                MEDIA_ENGINE_DEVICES: this.updateActiveErrors,
                RTC_CONNECTION_STATE: this.updateActiveErrors,
                VOICE_STATE_UPDATES: this.updateActiveErrors,
                MEDIA_ENGINE_SET_GO_LIVE_SOURCE: this.updateActiveErrors,
                MEDIA_ENGINE_SOUNDSHARE_FAILED: this.updateActiveErrors,
                MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: this.updateActiveErrors,
                MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: this.updateActiveErrors,
                MEDIA_ENGINE_VIDEO_STATE_CHANGED: this.updateActiveErrors,
                NATIVE_SCREEN_SHARE_PICKER_UPDATE: this.updateActiveErrors,
                NATIVE_SCREEN_SHARE_PICKER_ERROR: this.updateActiveErrors,
                MEDIA_SESSION_JOINED: this.updateActiveErrors,
                RTC_CONNECTION_UPDATE_ID: this.updateActiveErrors,
                RTC_CONNECTION_USER_CREATE: this.updateActiveErrors,
                RTC_CONNECTION_VIDEO: this.updateActiveErrors,
                VIDEO_STREAM_READY_TIMEOUT: this.updateActiveErrors,
                CLEAR_VIDEO_STREAM_READY_TIMEOUT: this.updateActiveErrors,
                REPORT_AV_ERROR: this.handleReportAVError
            });
    }
}
let $ = new J();
