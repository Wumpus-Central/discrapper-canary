n.d(t, { Ay: () => b, Bz: () => m, EM: () => d, Xi: () => p, iA: () => A }), n(134528), n(947204), n(321073);
var i = n(17928),
    r = n(205693),
    a = n(228366),
    s = n(233545),
    _ = n(969341),
    l = n(287809),
    o = n(652215),
    E = n(731854);
let d = p(E.x.DEFAULT, o.zWA.TRANSPORT, 0),
    c = d,
    u = {},
    I = new Map(),
    A = {
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
function T(e, t, n) {
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
            return delete i[T(e, t, n)], new N(i);
        }
        return new N({ [T(e, t, n)]: i, ...this.state });
    }
    get(e, t, n) {
        let i = this.state[T(e, t, n)];
        return null != i ? i : null;
    }
}
let O = N.empty(),
    R = !1,
    f = null,
    C = new Map();
function p(e, t, n) {
    return `${e}:${t}:${n}`;
}
function m(e) {
    let [t, n] = e.split(":");
    return { context: t, section: n };
}
function L(e) {
    return Array.isArray(e) ? e.at(-1)?.value : e;
}
function D() {
    Object.values(E.x).forEach((e) => {
        u[e] = {};
    });
}
function h() {
    null != f && (f.destroy(), (f = null));
}
D();
class g extends i.Ay.Store {
    initialize() {
        this.waitFor(_.Ay, l.default);
    }
    static displayName = "RTCDebugStore";
    getSection() {
        return c;
    }
    getInboundStats(e, t) {
        let n = this.getAllStats(t),
            i = n[0]?.rtp?.inbound[e],
            r = i?.find((e) => "video" === e.type);
        return { codec: r?.codec.name, resolution: r?.resolution, bitrateEstimate: void 0, fps: L(r?.frameRateRender) };
    }
    getOutboundStats(e) {
        let t = this.getAllStats(e),
            n = t[0]?.transport,
            i = t[0]?.rtp?.outbound,
            r = i?.find((e) => "video" === e.type);
        return {
            codec: r?.codec.name,
            resolution: r?.resolution,
            bitrateEstimate: L(n?.availableOutgoingBitrate),
            fps: L(r?.frameRateEncode),
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
        return R;
    }
    getSimulcastDebugOverride(e, t) {
        let n = S(e, t);
        return I.has(n) ? I.get(n) : E.r8.NO_OVERRIDE;
    }
}
let b = new g(a.h, {
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
        s._w();
    },
    RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function (e) {
        let { path: t } = e,
            n = _.Ay.getMediaEngine();
        if ((h(), !n.supports(E.O5.CONNECTION_REPLAY) || 0 === t.length)) return;
        let i = n.createReplayConnection(E.x.DEFAULT, t);
        null != i &&
            ((f = i),
            i.on(r.yq.Video, (e, t, n, r, s) => {
                a.h.dispatch({
                    type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
                    mediaEngineConnectionId: i.mediaEngineConnectionId,
                    userId: e,
                    videoSsrc: r ?? 0,
                    streamId: t ?? "",
                });
            }),
            a.h.wait(() => s.ho()));
    },
    RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function (e) {
        O = O.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
    },
    RTC_DEBUG_SET_RECORDING_FLAG: function (e) {
        let { value: t } = e;
        R = t;
    },
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
        let { userId: t, context: n, quality: i } = e;
        I.set(S(t, n), i);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        null != e.channelId && (D(), I.clear(), C.clear());
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
                        r = u[t];
                    if (null != n) {
                        let [e, s, _] = c.split(":");
                        if (e === t && parseInt(_) === i && null != l.default.getUser(s)) {
                            let {
                                rtp: { inbound: e },
                            } = n;
                            Object.keys(e).includes(s) || (c = d);
                        }
                        let o = Date.now(),
                            E = n;
                        if (null != n.screenshare) {
                            let e = `${t}:${i}`,
                                s = C.get(e),
                                _ = r[i]?.screenshare;
                            if ((C.set(e, o), null != s && null != _)) {
                                var a;
                                let e,
                                    t,
                                    i = (o - s) / 1e3;
                                i > 0 &&
                                    (E = {
                                        ...n,
                                        screenshare: {
                                            ...n.screenshare,
                                            ...((a = n.screenshare),
                                            (e =
                                                (a.videohookFrames ?? 0) +
                                                (a.hybridDxgiFrames ?? 0) +
                                                (a.hybridGdiFrames ?? 0) +
                                                (a.hybridVideohookFrames ?? 0) +
                                                (a.hybridGraphicsCaptureFrames ?? 0) +
                                                (a.quartzFrames ?? 0) +
                                                (a.screenCaptureKitFrames ?? 0)),
                                            (t =
                                                (_.videohookFrames ?? 0) +
                                                (_.hybridDxgiFrames ?? 0) +
                                                (_.hybridGdiFrames ?? 0) +
                                                (_.hybridVideohookFrames ?? 0) +
                                                (_.hybridGraphicsCaptureFrames ?? 0) +
                                                (_.quartzFrames ?? 0) +
                                                (_.screenCaptureKitFrames ?? 0)),
                                            {
                                                screenshareCapturedFps: Math.max(0, (e - t) / i),
                                                screenshareCapturedFpsUnique: Math.max(
                                                    0,
                                                    ((a.hybridDxgiFramesUnique ?? 0) +
                                                        (a.hybridGdiBitBltFramesUnique ?? 0) +
                                                        (a.hybridGdiPrintWindowFramesUnique ?? 0) +
                                                        (a.hybridVideohookFramesUnique ?? 0) +
                                                        (a.hybridGraphicsCaptureFramesUnique ?? 0) -
                                                        ((_.hybridDxgiFramesUnique ?? 0) +
                                                            (_.hybridGdiBitBltFramesUnique ?? 0) +
                                                            (_.hybridGdiPrintWindowFramesUnique ?? 0) +
                                                            (_.hybridVideohookFramesUnique ?? 0) +
                                                            (_.hybridGraphicsCaptureFramesUnique ?? 0))) /
                                                        i,
                                                ),
                                            }),
                                        },
                                    });
                            }
                        }
                        r[i] = (function e(t) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                                r = {};
                            for (let [a, s] of Object.entries(t)) {
                                let t = n[a];
                                if (Array.isArray(s))
                                    if ("object" == typeof s[0]) {
                                        let n = Array.isArray(t) ? t : [],
                                            _ = (r[a] = []);
                                        for (let t = 0; t < s.length; t++) {
                                            let r = n[t],
                                                a = "object" == typeof r ? r : {};
                                            _.push(e(s[t], a, i));
                                        }
                                    } else r[a] = s;
                                else if ("object" == typeof s && null !== s) {
                                    let n = "object" == typeof t && null !== t ? t : {};
                                    r[a] = e(s, n, i);
                                } else if (a in A && "number" == typeof s) {
                                    let e = (r[a] = Array.isArray(t) ? t : []);
                                    e.push({ value: s, time: i }), e.length > 600 && e.shift();
                                } else r[a] = s;
                            }
                            return r;
                        })(E, r[i], o);
                    } else delete r[i];
                })({ context: e, stats: t.stats, index: n });
            });
        });
    },
});
