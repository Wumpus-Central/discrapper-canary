n.d(t, { Z: () => V }), n(388685), n(539854), n(49124);
var r = n(570140),
    i = n(147913),
    o = n(358221),
    a = n(710845),
    s = n(569545),
    l = n(614963),
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
    y = n(557457),
    v = n(785141),
    O = n(38055),
    I = n(303284),
    S = n(272395),
    T = n(674503),
    N = n(981631);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let w = 30,
    D = 30,
    L = new a.Z('AVErrorManager');
function x(e, t) {
    let n = new Set();
    for (let r of e) t.has(r) || n.add(r);
    return n;
}
let M = {
    [v.u.NO_AUDIO_INPUT_DETECTED]: {
        getActiveErrors: (e) => {
            let { voiceChannelId: t, voiceState: n } = e,
                r = f.Z.getChannel(t),
                i = (null == r ? void 0 : r.isGuildStageVoice()) && (null == n ? void 0 : n.suppress),
                o = h.ZP.getMediaSessionId();
            if (null != r && null != o && !1 === p.Z.getInputDetected() && !i && !p.Z.isSelfMute()) return [C({ type: v.u.NO_AUDIO_INPUT_DETECTED }, (0, I.Y9)())];
        },
        makeErrorContextKey: (e) => ''.concat(e.mediaSessionId, ':').concat(e.audioInputDeviceName)
    },
    [v.u.NO_INPUT_DEVICES]: {
        getActiveErrors: (e) => {
            let { voiceChannelId: t, voiceState: n } = e,
                r = f.Z.getChannel(t),
                i = (null == r ? void 0 : r.isGuildStageVoice()) && (null == n ? void 0 : n.suppress),
                o = 0 === Object.keys(p.Z.getInputDevices()).length,
                a = h.ZP.getMediaSessionId();
            if (o && null != r && null != a && !i) return [C({ type: v.u.NO_INPUT_DEVICES }, (0, I.Y9)())];
        },
        makeErrorContextKey: (e) => ''.concat(e.mediaSessionId)
    },
    [v.u.STREAM_VIEW_LOW_FPS]: {
        getActiveErrors: (e) => {
            let { streamErrors: t } = e;
            return null == t
                ? void 0
                : t
                      .filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === v.u.STREAM_VIEW_LOW_FPS;
                      })
                      .map((e) => C({ type: v.u.STREAM_VIEW_LOW_FPS }, e));
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [v.u.STREAM_VIEW_HIGH_PACKET_LOSS]: {
        getActiveErrors: (e) => {
            let { streamErrors: t } = e;
            return null == t
                ? void 0
                : t
                      .filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === v.u.STREAM_VIEW_HIGH_PACKET_LOSS;
                      })
                      .map((e) => C({ type: v.u.STREAM_VIEW_HIGH_PACKET_LOSS }, e));
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [v.u.STREAM_SEND_HIGH_PACKET_LOSS]: {
        getActiveErrors: (e) => {
            let { streamErrors: t } = e;
            return null == t
                ? void 0
                : t
                      .filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === v.u.STREAM_SEND_HIGH_PACKET_LOSS;
                      })
                      .map((e) => C({ type: v.u.STREAM_SEND_HIGH_PACKET_LOSS }, e));
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [v.u.STREAM_SEND_LOW_FPS]: {
        getActiveErrors: (e) => {
            let { streamErrors: t } = e;
            return null == t
                ? void 0
                : t
                      .filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === v.u.STREAM_SEND_LOW_FPS;
                      })
                      .map((e) => C({ type: v.u.STREAM_SEND_LOW_FPS }, e));
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [v.u.STREAM_BAD_NETWORK_QUALITY]: {
        getActiveErrors: (e) => {
            let { streamErrors: t } = e;
            return null == t
                ? void 0
                : t
                      .filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === v.u.STREAM_BAD_NETWORK_QUALITY;
                      })
                      .map((e) => C({ type: v.u.STREAM_BAD_NETWORK_QUALITY }, e));
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [v.u.STREAM_SOUNDSHARE_FAILED]: {
        getActiveErrors: (e) => {
            let { streamErrors: t } = e;
            return null == t
                ? void 0
                : t
                      .filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === v.u.STREAM_SOUNDSHARE_FAILED;
                      })
                      .map((e) => C({ type: v.u.STREAM_SOUNDSHARE_FAILED }, e));
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [v.u.STREAM_FAILED_TO_START]: {
        getActiveErrors: (e) => {
            let { activeStreams: t } = e;
            return t.filter((e) => e.state === N.jm8.FAILED).map((e) => C({ type: v.u.STREAM_FAILED_TO_START }, (0, I.rT)((0, s.V9)(e))));
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [v.u.STREAM_RECONNECTING]: {
        getActiveErrors: (e) => {
            let { activeStreams: t } = e;
            return t.filter((e) => e.state === N.jm8.RECONNECTING).map((e) => C({ type: v.u.STREAM_RECONNECTING }, (0, I.rT)((0, s.V9)(e))));
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    },
    [v.u.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH]: {
        getActiveErrors: () => {
            var e, t, n, r, i, o;
            if ((null != (i = null == (e = h.ZP.getRTCConnection()) ? void 0 : e.getDurationSeconds()) ? i : 0) < D) return;
            let a = null != (o = null == (n = c.Z.getConnectionStats(null == (r = h.ZP.getRTCConnection()) ? void 0 : r.getMediaEngineConnectionId())) || null == (t = n.stats.rtp.outbound.find((e) => 'audio' === e.type)) ? void 0 : t.sampleRateMismatchPercent) ? o : 0;
            if (Math.abs(a) > w)
                return [
                    C(
                        {
                            type: v.u.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH,
                            audioCaptureSampleRateMismatchPercent: a
                        },
                        (0, I.Y9)()
                    )
                ];
        },
        makeErrorContextKey: (e) => ''.concat(e.mediaSessionId, ':').concat(e.audioInputDeviceName)
    },
    [v.u.VIDEO_STREAM_SENDER_READY_TIMEOUT]: {
        getActiveErrors: () =>
            Object.values(E.Z.getTimedoutVideos())
                .filter((e) => {
                    let { userId: t } = e;
                    return d.default.getId() === t;
                })
                .map((e) => C({ type: v.u.VIDEO_STREAM_SENDER_READY_TIMEOUT }, e)),
        makeErrorContextKey: (e) => ''.concat(e.mediaContext, ':').concat(e.userId)
    },
    [v.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT]: {
        getActiveErrors: () =>
            Object.values(E.Z.getTimedoutVideos())
                .filter((e) => {
                    let { userId: t } = e;
                    return d.default.getId() !== t;
                })
                .map((e) => C({ type: v.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT }, e)),
        makeErrorContextKey: (e) => ''.concat(e.mediaContext, ':').concat(e.userId)
    },
    [v.u.CAMERA_SEND_LOW_FPS]: {
        getActiveErrors: (e) => {
            let { videoErrors: t } = e;
            return null == t
                ? void 0
                : t
                      .filter((e) => {
                          let { videoError: t } = e;
                          return (null == t ? void 0 : t.avError) === v.u.CAMERA_SEND_LOW_FPS;
                      })
                      .map((e) => C({ type: v.u.CAMERA_SEND_LOW_FPS }, e));
        },
        makeErrorContextKey: (e) => ''.concat(e.mediaSessionId)
    }
};
function k(e) {
    return M[e.type];
}
function j(e) {
    let t = k(e);
    return ''.concat(e.type, ':').concat(null == t ? void 0 : t.makeErrorContextKey(e));
}
function U(e) {
    if (null == e) return null;
    let t = [];
    for (let n of o.Z.getStreamParticipants(e)) {
        let e = (0, y.Wc)(n),
            r = n.stream.guildId,
            i = n.stream.ownerId,
            o = i === d.default.getId();
        if (!o && null == u.Z.getActiveStreamForUser(i, r)) continue;
        let a = o && null != _.Z.getHookError(N.K3D.SOUND),
            s = (0, l.w)(g.Z.getQuality(), g.Z.getStatsHistory(r, i, o), a, e),
            c = n.id,
            f = g.Z.getMediaSessionId(c);
        null != s && null != f && t.push(C({ streamError: s }, (0, I.rT)(c)));
    }
    return t;
}
function G(e) {
    if (null == e) return null;
    let t = [];
    for (let n of o.Z.getVideoParticipants(e)) {
        let r = (0, l.H)(h.ZP.getStatsHistory(e, n.id));
        null != r && null != h.ZP.getMediaSessionId() && t.push(C({ videoError: r }, (0, I.Y9)()));
    }
    return t;
}
class B extends i.Z {
    _initialize() {
        (0, S.H3)('AVErrorManager');
    }
    updateActiveErrors() {
        var e, t;
        if (__OVERLAY__) return;
        let n = null != (e = m.Z.getVoiceChannelId()) ? e : null,
            i = null != n && null != (t = b.Z.getVoiceStateForChannel(n)) ? t : null,
            o = U(n),
            a = u.Z.getAllActiveStreams(),
            s = G(n),
            l = new Map();
        for (let e of Object.values(M)) {
            let t = e.getActiveErrors({
                voiceChannelId: n,
                voiceState: i,
                streamErrors: o,
                activeStreams: a,
                videoErrors: s
            });
            if (null != t) for (let e of t) l.set(j(e), e);
        }
        let c = T.Z.getActiveErrors();
        if (!(c instanceof Map)) return void L.error('existingErrors is not a Map: '.concat(c, ' type: ').concat(Object.prototype.toString.call(c)));
        if (0 === l.size && 0 === c.size) return;
        let d = new Set(l.keys()),
            f = new Set(c.keys());
        if (d.size > f.size)
            for (let e of x(d, f)) {
                let t = l.get(e);
                null != t && (0, v.kr)(t);
            }
        if (f.size > d.size)
            for (let e of x(f, d)) {
                let t = e,
                    n = c.get(t);
                if (null != n) {
                    let { type: e } = n,
                        t = R(n, ['type']);
                    L.info('Error resolved: '.concat(e, ' ').concat(JSON.stringify(t)));
                }
            }
        r.Z.dispatch({
            type: 'ACTIVE_AV_ERRORS_CHANGED',
            activeErrors: l
        });
    }
    handleReportAVError(e) {
        let { error: t, context: n } = e;
        __OVERLAY__ || (0, O.b)(t, n);
    }
    constructor(...e) {
        super(...e),
            A(this, 'actions', {
                MEDIA_ENGINE_SET_AUDIO_ENABLED: this.updateActiveErrors,
                AUDIO_INPUT_DETECTED: this.updateActiveErrors,
                AUDIO_SET_DISPLAY_SILENCE_WARNING: this.updateActiveErrors,
                CERTIFIED_DEVICES_SET: this.updateActiveErrors,
                AUDIO_SET_INPUT_DEVICE: this.updateActiveErrors,
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
let V = new B();
