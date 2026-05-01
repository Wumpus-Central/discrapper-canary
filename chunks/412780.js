n.d(t, { Ay: () => b, Bz: () => C, EM: () => _, Xi: () => O, iA: () => I }), n(134528), n(947204), n(321073);
var i = n(17928),
    a = n(205693),
    r = n(228366),
    s = n(233545),
    l = n(51760),
    o = n(287809),
    d = n(652215),
    c = n(731854);
let _ = O(c.x.DEFAULT, d.zWA.TRANSPORT, 0),
    E = _,
    u = {},
    A = new Map(),
    I = {
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
function h(e, t) {
    return `${e}:${t}`;
}
class S {
    state;
    constructor(e) {
        this.state = e;
    }
    static empty() {
        return new S({});
    }
    put(e, t, n, i) {
        if ("" === i) {
            let i = { ...this.state };
            return delete i[T(e, t, n)], new S(i);
        }
        return new S({ [T(e, t, n)]: i, ...this.state });
    }
    get(e, t, n) {
        let i = this.state[T(e, t, n)];
        return null != i ? i : null;
    }
}
let N = S.empty(),
    f = !1,
    p = null,
    m = new Map();
function O(e, t, n) {
    return `${e}:${t}:${n}`;
}
function C(e) {
    let [t, n] = e.split(":");
    return { context: t, section: n };
}
function R(e) {
    return Array.isArray(e) ? e.at(-1)?.value : e;
}
function g() {
    Object.values(c.x).forEach((e) => {
        u[e] = {};
    });
}
function L() {
    null != p && (p.destroy(), (p = null));
}
g();
class D extends i.Ay.Store {
    initialize() {
        this.waitFor(l.Ay, o.default);
    }
    static displayName = "RTCDebugStore";
    getSection() {
        return E;
    }
    getInboundStats(e, t) {
        let n = this.getAllStats(t),
            i = n[0]?.rtp?.inbound[e],
            a = i?.find((e) => "video" === e.type);
        return { codec: a?.codec.name, resolution: a?.resolution, bitrateEstimate: void 0, fps: R(a?.frameRateRender) };
    }
    getOutboundStats(e) {
        let t = this.getAllStats(e),
            n = t[0]?.transport,
            i = t[0]?.rtp?.outbound,
            a = i?.find((e) => "video" === e.type);
        return {
            codec: a?.codec.name,
            resolution: a?.resolution,
            bitrateEstimate: R(n?.availableOutgoingBitrate),
            fps: R(a?.frameRateEncode),
        };
    }
    getAllStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.x.DEFAULT;
        return Object.values(u[e]);
    }
    getVideoStreams() {
        return N;
    }
    shouldRecordNextConnection() {
        return f;
    }
    getSimulcastDebugOverride(e, t) {
        let n = h(e, t);
        return A.has(n) ? A.get(n) : c.r8.NO_OVERRIDE;
    }
}
let b = new D(r.h, {
    RTC_DEBUG_MODAL_OPEN: function (e) {
        E = e.section ?? _;
    },
    RTC_DEBUG_MODAL_CLOSE: function () {
        L();
    },
    RTC_DEBUG_MODAL_SET_SECTION: function (e) {
        E = e.section;
    },
    RTC_DEBUG_MODAL_OPEN_REPLAY: function (e) {
        s._w();
    },
    RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function (e) {
        let { path: t } = e,
            n = l.Ay.getMediaEngine();
        if ((L(), !n.supports(c.O5.CONNECTION_REPLAY) || 0 === t.length)) return;
        let i = n.createReplayConnection(c.x.DEFAULT, t);
        null != i &&
            ((p = i),
            i.on(a.yq.Video, (e, t, n, a, s) => {
                r.h.dispatch({
                    type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
                    mediaEngineConnectionId: i.mediaEngineConnectionId,
                    userId: e,
                    videoSsrc: a ?? 0,
                    streamId: t ?? "",
                });
            }),
            r.h.wait(() => s.ho()));
    },
    RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function (e) {
        N = N.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
    },
    RTC_DEBUG_SET_RECORDING_FLAG: function (e) {
        let { value: t } = e;
        f = t;
    },
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
        let { userId: t, context: n, quality: i } = e;
        A.set(h(t, n), i);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        null != e.channelId && (g(), A.clear(), m.clear());
    },
    RTC_CONNECTION_VIDEO: function (e) {
        if (null === e.streamId) {
            let t = h(e.userId, e.context);
            A.set(t, c.r8.NO_OVERRIDE);
        }
    },
    MEDIA_ENGINE_CONNECTION_STATS: function (e) {
        let { connectionStats: t } = e;
        Object.values(c.x).forEach((e) => {
            t.filter((t) => {
                let { context: n } = t;
                return n === e;
            }).forEach((t, n) => {
                !(function (e) {
                    let { context: t, stats: n, index: i } = e,
                        a = u[t];
                    if (null != n) {
                        let [e, s, l] = E.split(":");
                        if (e === t && parseInt(l) === i && null != o.default.getUser(s)) {
                            let {
                                rtp: { inbound: e },
                            } = n;
                            Object.keys(e).includes(s) || (E = _);
                        }
                        let d = Date.now(),
                            c = n;
                        if (null != n.screenshare) {
                            let e = `${t}:${i}`,
                                s = m.get(e),
                                l = a[i]?.screenshare;
                            if ((m.set(e, d), null != s && null != l)) {
                                var r;
                                let e,
                                    t,
                                    i = (d - s) / 1e3;
                                i > 0 &&
                                    (c = {
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
                                                (l.videohookFrames ?? 0) +
                                                (l.hybridDxgiFrames ?? 0) +
                                                (l.hybridGdiFrames ?? 0) +
                                                (l.hybridVideohookFrames ?? 0) +
                                                (l.hybridGraphicsCaptureFrames ?? 0) +
                                                (l.quartzFrames ?? 0) +
                                                (l.screenCaptureKitFrames ?? 0)),
                                            {
                                                screenshareCapturedFps: Math.max(0, (e - t) / i),
                                                screenshareCapturedFpsUnique: Math.max(
                                                    0,
                                                    ((r.hybridDxgiFramesUnique ?? 0) +
                                                        (r.hybridGdiBitBltFramesUnique ?? 0) +
                                                        (r.hybridGdiPrintWindowFramesUnique ?? 0) +
                                                        (r.hybridVideohookFramesUnique ?? 0) +
                                                        (r.hybridGraphicsCaptureFramesUnique ?? 0) -
                                                        ((l.hybridDxgiFramesUnique ?? 0) +
                                                            (l.hybridGdiBitBltFramesUnique ?? 0) +
                                                            (l.hybridGdiPrintWindowFramesUnique ?? 0) +
                                                            (l.hybridVideohookFramesUnique ?? 0) +
                                                            (l.hybridGraphicsCaptureFramesUnique ?? 0))) /
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
                            for (let [r, s] of Object.entries(t)) {
                                let t = n[r];
                                if (Array.isArray(s))
                                    if ("object" == typeof s[0]) {
                                        let n = Array.isArray(t) ? t : [],
                                            l = (a[r] = []);
                                        for (let t = 0; t < s.length; t++) {
                                            let a = n[t],
                                                r = "object" == typeof a ? a : {};
                                            l.push(e(s[t], r, i));
                                        }
                                    } else a[r] = s;
                                else if ("object" == typeof s && null !== s) {
                                    let n = "object" == typeof t && null !== t ? t : {};
                                    a[r] = e(s, n, i);
                                } else if (r in I && "number" == typeof s) {
                                    let e = (a[r] = Array.isArray(t) ? t : []);
                                    e.push({ value: s, time: i }), e.length > 600 && e.shift();
                                } else a[r] = s;
                            }
                            return a;
                        })(c, a[i], d);
                    } else delete a[i];
                })({ context: e, stats: t.stats, index: n });
            });
        });
    },
});
