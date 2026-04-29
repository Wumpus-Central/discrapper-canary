n.d(t, { Ay: () => b, Bz: () => p, EM: () => d, Xi: () => D, iA: () => T }), n(134528), n(947204), n(321073);
var i = n(17928),
    a = n(205693),
    r = n(228366),
    _ = n(233545),
    s = n(51760),
    l = n(287809),
    o = n(652215),
    E = n(731854);
let d = D(E.x.DEFAULT, o.zWA.TRANSPORT, 0),
    c = d,
    u = {},
    I = new Map(),
    T = {
        availableOutgoingBitrate: !0,
        bitrate: !0,
        bitrateTarget: !0,
        bytesReceived: !0,
        bytesSent: !0,
        encoderQualityPsnr: !0,
        encoderQualityVmaf: !0,
        encodeUsage: !0,
        frameRateDecode: !0,
        frameRateEncode: !0,
        frameRateInput: !0,
        frameRateNetwork: !0,
        frameRateRender: !0,
        keyFramesEncoded: !0,
        keyFramesDecoded: !0,
        inboundBitrateEstimate: !0,
        packetsLost: !0,
        packetsReceived: !0,
        packetsSent: !0,
        ping: !0,
        qpSum: !0,
        videoEntropy: !0,
        audioLevel: !0,
        screenshareCapturedFps: !0,
        screenshareCapturedFpsUnique: !0,
    };
function A(e, t, n) {
    return `${e}:${t}:${n}`;
}
function S(e, t) {
    return `${e}:${t}`;
}
class N {
    state;
    constructor(e) {
        this.state = e;
    }
    static empty() {
        return new N({});
    }
    put(e, t, n, i) {
        if ("" === i) {
            let i = { ...this.state };
            return delete i[A(e, t, n)], new N(i);
        }
        return new N({ [A(e, t, n)]: i, ...this.state });
    }
    get(e, t, n) {
        let i = this.state[A(e, t, n)];
        return null != i ? i : null;
    }
}
let O = N.empty(),
    f = !1,
    R = null,
    C = new Map();
function D(e, t, n) {
    return `${e}:${t}:${n}`;
}
function p(e) {
    let [t, n] = e.split(":");
    return { context: t, section: n };
}
function L(e) {
    return Array.isArray(e) ? e.at(-1)?.value : e;
}
function m() {
    Object.values(E.x).forEach((e) => {
        u[e] = {};
    });
}
function h() {
    null != R && (R.destroy(), (R = null));
}
m();
class g extends i.Ay.Store {
    initialize() {
        this.waitFor(s.Ay, l.default);
    }
    static displayName = "RTCDebugStore";
    getSection() {
        return c;
    }
    getInboundStats(e, t) {
        let n = this.getAllStats(t),
            i = n[0]?.rtp?.inbound[e],
            a = i?.find((e) => "video" === e.type);
        return { codec: a?.codec.name, resolution: a?.resolution, bitrateEstimate: void 0, fps: L(a?.frameRateRender) };
    }
    getOutboundStats(e) {
        let t = this.getAllStats(e),
            n = t[0]?.transport,
            i = t[0]?.rtp?.outbound,
            a = i?.find((e) => "video" === e.type);
        return {
            codec: a?.codec.name,
            resolution: a?.resolution,
            bitrateEstimate: L(n?.availableOutgoingBitrate),
            fps: L(a?.frameRateEncode),
        };
    }
    getAllStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.x.DEFAULT;
        return Object.values(u[e]);
    }
    getVideoStreams() {
        return O;
    }
    shouldRecordNextConnection() {
        return f;
    }
    getSimulcastDebugOverride(e, t) {
        let n = S(e, t);
        return I.has(n) ? I.get(n) : E.r8.NO_OVERRIDE;
    }
}
let b = new g(r.h, {
    RTC_DEBUG_MODAL_OPEN: function (e) {
        c = e.section ?? d;
    },
    RTC_DEBUG_MODAL_CLOSE: function () {
        h();
    },
    RTC_DEBUG_MODAL_SET_SECTION: function (e) {
        c = e.section;
    },
    RTC_DEBUG_MODAL_OPEN_REPLAY: function (e) {
        _._w();
    },
    RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function (e) {
        let { path: t } = e,
            n = s.Ay.getMediaEngine();
        if ((h(), !n.supports(E.O5.CONNECTION_REPLAY) || 0 === t.length)) return;
        let i = n.createReplayConnection(E.x.DEFAULT, t);
        null != i &&
            ((R = i),
            i.on(a.yq.Video, (e, t, n, a, _) => {
                r.h.dispatch({
                    type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
                    mediaEngineConnectionId: i.mediaEngineConnectionId,
                    userId: e,
                    videoSsrc: a ?? 0,
                    streamId: t ?? "",
                });
            }),
            r.h.wait(() => _.ho()));
    },
    RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function (e) {
        O = O.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
    },
    RTC_DEBUG_SET_RECORDING_FLAG: function (e) {
        let { value: t } = e;
        f = t;
    },
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
        let { userId: t, context: n, quality: i } = e;
        I.set(S(t, n), i);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        null != e.channelId && (m(), I.clear(), C.clear());
    },
    RTC_CONNECTION_VIDEO: function (e) {
        if (null === e.streamId) {
            let t = S(e.userId, e.context);
            I.set(t, E.r8.NO_OVERRIDE);
        }
    },
    MEDIA_ENGINE_CONNECTION_STATS: function (e) {
        let { connectionStats: t } = e;
        Object.values(E.x).forEach((e) => {
            t.filter((t) => {
                let { context: n } = t;
                return n === e;
            }).forEach((t, n) => {
                !(function (e) {
                    let { context: t, stats: n, index: i } = e,
                        a = u[t];
                    if (null != n) {
                        let [e, _, s] = c.split(":");
                        if (e === t && parseInt(s) === i && null != l.default.getUser(_)) {
                            let {
                                rtp: { inbound: e },
                            } = n;
                            Object.keys(e).includes(_) || (c = d);
                        }
                        let o = Date.now(),
                            E = n;
                        if (null != n.screenshare) {
                            let e = `${t}:${i}`,
                                _ = C.get(e),
                                s = a[i]?.screenshare;
                            if ((C.set(e, o), null != _ && null != s)) {
                                var r;
                                let e,
                                    t,
                                    i = (o - _) / 1e3;
                                i > 0 &&
                                    (E = {
                                        ...n,
                                        screenshare: {
                                            ...n.screenshare,
                                            ...((r = n.screenshare),
                                            (e =
                                                (r.videohookFrames ?? 0) +
                                                (r.hybridDxgiFrames ?? 0) +
                                                (r.hybridGdiFrames ?? 0) +
                                                (r.hybridVideohookFrames ?? 0) +
                                                (r.hybridGraphicsCaptureFrames ?? 0) +
                                                (r.quartzFrames ?? 0) +
                                                (r.screenCaptureKitFrames ?? 0)),
                                            (t =
                                                (s.videohookFrames ?? 0) +
                                                (s.hybridDxgiFrames ?? 0) +
                                                (s.hybridGdiFrames ?? 0) +
                                                (s.hybridVideohookFrames ?? 0) +
                                                (s.hybridGraphicsCaptureFrames ?? 0) +
                                                (s.quartzFrames ?? 0) +
                                                (s.screenCaptureKitFrames ?? 0)),
                                            {
                                                screenshareCapturedFps: Math.max(0, (e - t) / i),
                                                screenshareCapturedFpsUnique: Math.max(
                                                    0,
                                                    ((r.hybridDxgiFramesUnique ?? 0) +
                                                        (r.hybridGdiBitBltFramesUnique ?? 0) +
                                                        (r.hybridGdiPrintWindowFramesUnique ?? 0) +
                                                        (r.hybridVideohookFramesUnique ?? 0) +
                                                        (r.hybridGraphicsCaptureFramesUnique ?? 0) -
                                                        ((s.hybridDxgiFramesUnique ?? 0) +
                                                            (s.hybridGdiBitBltFramesUnique ?? 0) +
                                                            (s.hybridGdiPrintWindowFramesUnique ?? 0) +
                                                            (s.hybridVideohookFramesUnique ?? 0) +
                                                            (s.hybridGraphicsCaptureFramesUnique ?? 0))) /
                                                        i,
                                                ),
                                            }),
                                        },
                                    });
                            }
                        }
                        a[i] = (function e(t) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                                a = {};
                            for (let [r, _] of Object.entries(t)) {
                                let t = n[r];
                                if (Array.isArray(_))
                                    if ("object" == typeof _[0]) {
                                        let n = Array.isArray(t) ? t : [],
                                            s = (a[r] = []);
                                        for (let t = 0; t < _.length; t++) {
                                            let a = n[t],
                                                r = "object" == typeof a ? a : {};
                                            s.push(e(_[t], r, i));
                                        }
                                    } else a[r] = _;
                                else if ("object" == typeof _ && null !== _) {
                                    let n = "object" == typeof t && null !== t ? t : {};
                                    a[r] = e(_, n, i);
                                } else if (r in T && "number" == typeof _) {
                                    let e = (a[r] = Array.isArray(t) ? t : []);
                                    e.push({ value: _, time: i }), e.length > 600 && e.shift();
                                } else a[r] = _;
                            }
                            return a;
                        })(E, a[i], o);
                    } else delete a[i];
                })({ context: e, stats: t.stats, index: n });
            });
        });
    },
});
