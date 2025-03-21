n.d(t, {
    J: () => L,
    Z: () => k
}),
    n(47120),
    n(653041),
    n(26686);
var r = n(570140),
    i = n(147913),
    o = n(358221),
    a = n(710845),
    s = n(569545),
    l = n(614963),
    c = n(199902),
    u = n(314897),
    d = n(592125),
    f = n(858340),
    _ = n(131951),
    p = n(19780),
    h = n(944486),
    m = n(959457),
    g = n(979651),
    E = n(557457),
    b = n(785141),
    v = n(38055),
    y = n(272395),
    O = n(674503),
    I = n(981631),
    S = n(65154);
function T(e, t, n) {
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
function N(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
let A = new a.Z('AVErrorManager');
function C(e, t) {
    let n = new Set();
    for (let r of e) t.has(r) || n.add(r);
    return n;
}
let R = new Map([
    [
        b.u.NO_AUDIO_INPUT_DETECTED,
        {
            getActiveErrors: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    r = d.Z.getChannel(t),
                    i = (null == r ? void 0 : r.isGuildStageVoice()) && (null == n ? void 0 : n.suppress),
                    o = p.Z.getMediaSessionId();
                if (null != r && null != o && !1 === _.Z.getInputDetected() && !i) return [D()];
            },
            makeErrorContextKey: (e) => ''.concat(e.mediaSessionId)
        }
    ],
    [
        b.u.NO_INPUT_DEVICES,
        {
            getActiveErrors: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    r = d.Z.getChannel(t),
                    i = (null == r ? void 0 : r.isGuildStageVoice()) && (null == n ? void 0 : n.suppress),
                    o = 0 === Object.keys(_.Z.getInputDevices()).length,
                    a = p.Z.getMediaSessionId();
                if (o && null != r && null != a && !i) return [D()];
            },
            makeErrorContextKey: (e) => ''.concat(e.mediaSessionId)
        }
    ],
    [
        b.u.STREAM_VIEW_LOW_FPS,
        {
            getActiveErrors: (e) => {
                let { streamErrors: t } = e;
                return null == t
                    ? void 0
                    : t.filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === b.u.STREAM_VIEW_LOW_FPS;
                      });
            },
            makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
        }
    ],
    [
        b.u.STREAM_VIEW_HIGH_PACKET_LOSS,
        {
            getActiveErrors: (e) => {
                let { streamErrors: t } = e;
                return null == t
                    ? void 0
                    : t.filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === b.u.STREAM_VIEW_HIGH_PACKET_LOSS;
                      });
            },
            makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
        }
    ],
    [
        b.u.STREAM_SEND_HIGH_PACKET_LOSS,
        {
            getActiveErrors: (e) => {
                let { streamErrors: t } = e;
                return null == t
                    ? void 0
                    : t.filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === b.u.STREAM_SEND_HIGH_PACKET_LOSS;
                      });
            },
            makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
        }
    ],
    [
        b.u.STREAM_SEND_LOW_FPS,
        {
            getActiveErrors: (e) => {
                let { streamErrors: t } = e;
                return null == t
                    ? void 0
                    : t.filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === b.u.STREAM_SEND_LOW_FPS;
                      });
            },
            makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
        }
    ],
    [
        b.u.STREAM_BAD_NETWORK_QUALITY,
        {
            getActiveErrors: (e) => {
                let { streamErrors: t } = e;
                return null == t
                    ? void 0
                    : t.filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === b.u.STREAM_BAD_NETWORK_QUALITY;
                      });
            },
            makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
        }
    ],
    [
        b.u.STREAM_SOUNDSHARE_FAILED,
        {
            getActiveErrors: (e) => {
                let { streamErrors: t } = e;
                return null == t
                    ? void 0
                    : t.filter((e) => {
                          let { streamError: t } = e;
                          return (null == t ? void 0 : t.avError) === b.u.STREAM_SOUNDSHARE_FAILED;
                      });
            },
            makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
        }
    ],
    [
        b.u.STREAM_FAILED_TO_START,
        {
            getActiveErrors: (e) => {
                let { activeStreams: t } = e;
                return t.filter((e) => e.state === I.jm8.FAILED).map((e) => L((0, s.V9)(e)));
            },
            makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
        }
    ],
    [
        b.u.STREAM_RECONNECTING,
        {
            getActiveErrors: (e) => {
                let { activeStreams: t } = e;
                return t.filter((e) => e.state === I.jm8.RECONNECTING).map((e) => L((0, s.V9)(e)));
            },
            makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
        }
    ]
]);
function P(e, t) {
    let n = R.get(e);
    return ''.concat(e, ':').concat(null == n ? void 0 : n.makeErrorContextKey(t));
}
function w(e) {
    if (null == e) return null;
    let t = [];
    for (let n of o.Z.getStreamParticipants(e)) {
        let e = (0, E.Wc)(n),
            r = n.stream.guildId,
            i = n.stream.ownerId,
            o = i === u.default.getId();
        if (!o && null == c.Z.getActiveStreamForUser(i, r)) continue;
        let a = o && null != f.Z.getHookError(I.K3D.SOUND),
            s = (0, l.Z)(m.Z.getQuality(), m.Z.getStatsHistory(r, i, o), a, e),
            d = n.id,
            _ = m.Z.getMediaSessionId(d);
        null != s && null != _ && t.push(N({ streamError: s }, L(d)));
    }
    return t;
}
function D() {
    return N(
        {
            channelId: h.Z.getVoiceChannelId(),
            mediaSessionId: p.Z.getMediaSessionId(),
            rtcConnectionId: p.Z.getRTCConnectionId(),
            mediaContext: S.Yn.DEFAULT
        },
        x()
    );
}
function L(e) {
    let { channelId: t } = (0, s.my)(e),
        n = m.Z.getRTCConnection(e);
    return N(
        {
            channelId: t,
            mediaSessionId: null == n ? void 0 : n.getMediaSessionId(),
            rtcConnectionId: null == n ? void 0 : n.getRTCConnectionId(),
            mediaContext: S.Yn.STREAM,
            streamKey: e
        },
        x()
    );
}
function x() {
    var e, t, n;
    return {
        videoDeviceName: null === (e = _.Z.getVideoDevices()[_.Z.getVideoDeviceId()]) || void 0 === e ? void 0 : e.name,
        audioInputDeviceName: null === (t = _.Z.getInputDevices()[_.Z.getInputDeviceId()]) || void 0 === t ? void 0 : t.name,
        audioOutputDeviceName: null === (n = _.Z.getOutputDevices()[_.Z.getOutputDeviceId()]) || void 0 === n ? void 0 : n.name
    };
}
class M extends i.Z {
    _initialize() {
        (0, y.H3)('AVErrorManager');
    }
    updateActiveErrors() {
        var e, t;
        if (__OVERLAY__) return;
        let n = null !== (e = h.Z.getVoiceChannelId()) && void 0 !== e ? e : null,
            i = null != n && null !== (t = g.Z.getVoiceStateForChannel(n)) && void 0 !== t ? t : null,
            o = w(n),
            a = c.Z.getAllActiveStreams(),
            s = new Map();
        for (let [e, t] of R) {
            let r = t.getActiveErrors({
                voiceChannelId: n,
                voiceState: i,
                streamErrors: o,
                activeStreams: a
            });
            if (null != r)
                for (let t of r)
                    s.set(P(e, t), {
                        error: e,
                        context: t
                    });
        }
        let l = O.Z.getActiveErrors();
        if (!(l instanceof Map)) {
            A.error('existingErrors is not a Map: '.concat(l, ' type: ').concat(Object.prototype.toString.call(l)));
            return;
        }
        if (0 === s.size && 0 === l.size) return;
        let u = new Set(s.keys()),
            d = new Set(l.keys());
        if (u.size > d.size)
            for (let e of C(u, d)) {
                let t = s.get(e);
                null != t && (0, b.kr)(t.error, t.context);
            }
        if (d.size > u.size)
            for (let e of C(d, u)) {
                let t = l.get(e);
                null != t && A.info('Error resolved: '.concat(t.error, ' ').concat(JSON.stringify(t.context)));
            }
        r.Z.dispatch({
            type: 'ACTIVE_AV_ERRORS_CHANGED',
            activeErrors: s
        });
    }
    handleReportAVError(e) {
        let { error: t, context: n } = e;
        !__OVERLAY__ && (0, v.b)(t, n);
    }
    constructor(...e) {
        super(...e),
            T(this, 'actions', {
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
                REPORT_AV_ERROR: this.handleReportAVError
            });
    }
}
let k = new M();
