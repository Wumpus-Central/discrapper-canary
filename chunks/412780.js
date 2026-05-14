"use strict";
n.d(t, { Ay: () => b, Bz: () => y, EM: () => d, Xi: () => N, iA: () => p }), n(134528), n(947204), n(321073);
var i = n(17928),
    r = n(459838),
    s = n(228366),
    a = n(233545),
    o = n(235058),
    l = n(287809),
    u = n(652215),
    c = n(731854);
let d = N(c.x.DEFAULT, u.zWA.TRANSPORT, 0),
    _ = d,
    f = {},
    h = new Map(),
    p = {
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
function E(e, t, n) {
    return `${e}:${t}:${n}`;
}
function m(e, t) {
    return `${e}:${t}`;
}
class g {
    state;
    constructor(e) {
        this.state = e;
    }
    static empty() {
        return new g({});
    }
    put(e, t, n, i) {
        if ("" === i) {
            let i = { ...this.state };
            return delete i[E(e, t, n)], new g(i);
        }
        return new g({ [E(e, t, n)]: i, ...this.state });
    }
    get(e, t, n) {
        let i = this.state[E(e, t, n)];
        return null != i ? i : null;
    }
}
let A = g.empty(),
    I = !1,
    T = null,
    S = new Map();
function N(e, t, n) {
    return `${e}:${t}:${n}`;
}
function y(e) {
    let [t, n] = e.split(":");
    return { context: t, section: n };
}
function C(e) {
    return Array.isArray(e) ? e.at(-1)?.value : e;
}
function v() {
    Object.values(c.x).forEach((e) => {
        f[e] = {};
    });
}
function O() {
    null != T && (T.destroy(), (T = null));
}
v();
class R extends i.Ay.Store {
    initialize() {
        this.waitFor(o.Ay, l.default);
    }
    static displayName = "RTCDebugStore";
    getSection() {
        return _;
    }
    getInboundStats(e, t) {
        let n = this.getAllStats(t),
            i = n[0]?.rtp?.inbound[e],
            r = i?.find((e) => "video" === e.type);
        return { codec: r?.codec.name, resolution: r?.resolution, bitrateEstimate: void 0, fps: C(r?.frameRateRender) };
    }
    getOutboundStats(e) {
        let t = this.getAllStats(e),
            n = t[0]?.transport,
            i = t[0]?.rtp?.outbound,
            r = i?.find((e) => "video" === e.type);
        return {
            codec: r?.codec.name,
            resolution: r?.resolution,
            bitrateEstimate: C(n?.availableOutgoingBitrate),
            fps: C(r?.frameRateEncode),
        };
    }
    getAllStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.x.DEFAULT;
        return Object.values(f[e]);
    }
    getVideoStreams() {
        return A;
    }
    shouldRecordNextConnection() {
        return I;
    }
    getSimulcastDebugOverride(e, t) {
        let n = m(e, t);
        return h.has(n) ? h.get(n) : c.r8.NO_OVERRIDE;
    }
}
let b = new R(s.h, {
    RTC_DEBUG_MODAL_OPEN: function (e) {
        _ = e.section ?? d;
    },
    RTC_DEBUG_MODAL_CLOSE: function () {
        O();
    },
    RTC_DEBUG_MODAL_SET_SECTION: function (e) {
        _ = e.section;
    },
    RTC_DEBUG_MODAL_OPEN_REPLAY: function (e) {
        a._w();
    },
    RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function (e) {
        let { path: t } = e,
            n = o.Ay.getMediaEngine();
        if ((O(), !n.supports(c.O5.CONNECTION_REPLAY) || 0 === t.length)) return;
        let i = n.createReplayConnection(c.x.DEFAULT, t);
        null != i &&
            ((T = i),
            i.on(r.yq.Video, (e, t, n, r, a) => {
                s.h.dispatch({
                    type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
                    mediaEngineConnectionId: i.mediaEngineConnectionId,
                    userId: e,
                    videoSsrc: r ?? 0,
                    streamId: t ?? "",
                });
            }),
            s.h.wait(() => a.ho()));
    },
    RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function (e) {
        A = A.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
    },
    RTC_DEBUG_SET_RECORDING_FLAG: function (e) {
        let { value: t } = e;
        I = t;
    },
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
        let { userId: t, context: n, quality: i } = e;
        h.set(m(t, n), i);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        null != e.channelId && (v(), h.clear(), S.clear());
    },
    RTC_CONNECTION_VIDEO: function (e) {
        if (null === e.streamId) {
            let t = m(e.userId, e.context);
            h.set(t, c.r8.NO_OVERRIDE);
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
                        r = f[t];
                    if (null != n) {
                        let [e, a, o] = _.split(":");
                        if (e === t && parseInt(o) === i && null != l.default.getUser(a)) {
                            let {
                                rtp: { inbound: e },
                            } = n;
                            Object.keys(e).includes(a) || (_ = d);
                        }
                        let u = Date.now(),
                            c = n;
                        if (null != n.screenshare) {
                            let e = `${t}:${i}`,
                                a = S.get(e),
                                o = r[i]?.screenshare;
                            if ((S.set(e, u), null != a && null != o)) {
                                var s;
                                let e,
                                    t,
                                    i = (u - a) / 1e3;
                                i > 0 &&
                                    (c = {
                                        ...n,
                                        screenshare: {
                                            ...n.screenshare,
                                            ...((s = n.screenshare),
                                            (e =
                                                (s.videohookFrames ?? 0) +
                                                (s.hybridDxgiFrames ?? 0) +
                                                (s.hybridGdiFrames ?? 0) +
                                                (s.hybridVideohookFrames ?? 0) +
                                                (s.hybridGraphicsCaptureFrames ?? 0) +
                                                (s.quartzFrames ?? 0) +
                                                (s.screenCaptureKitFrames ?? 0)),
                                            (t =
                                                (o.videohookFrames ?? 0) +
                                                (o.hybridDxgiFrames ?? 0) +
                                                (o.hybridGdiFrames ?? 0) +
                                                (o.hybridVideohookFrames ?? 0) +
                                                (o.hybridGraphicsCaptureFrames ?? 0) +
                                                (o.quartzFrames ?? 0) +
                                                (o.screenCaptureKitFrames ?? 0)),
                                            {
                                                screenshareCapturedFps: Math.max(0, (e - t) / i),
                                                screenshareCapturedFpsUnique: Math.max(
                                                    0,
                                                    ((s.hybridDxgiFramesUnique ?? 0) +
                                                        (s.hybridGdiBitBltFramesUnique ?? 0) +
                                                        (s.hybridGdiPrintWindowFramesUnique ?? 0) +
                                                        (s.hybridVideohookFramesUnique ?? 0) +
                                                        (s.hybridGraphicsCaptureFramesUnique ?? 0) -
                                                        ((o.hybridDxgiFramesUnique ?? 0) +
                                                            (o.hybridGdiBitBltFramesUnique ?? 0) +
                                                            (o.hybridGdiPrintWindowFramesUnique ?? 0) +
                                                            (o.hybridVideohookFramesUnique ?? 0) +
                                                            (o.hybridGraphicsCaptureFramesUnique ?? 0))) /
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
                            for (let [s, a] of Object.entries(t)) {
                                let t = n[s];
                                if (Array.isArray(a))
                                    if ("object" == typeof a[0]) {
                                        let n = Array.isArray(t) ? t : [],
                                            o = (r[s] = []);
                                        for (let t = 0; t < a.length; t++) {
                                            let r = n[t],
                                                s = "object" == typeof r ? r : {};
                                            o.push(e(a[t], s, i));
                                        }
                                    } else r[s] = a;
                                else if ("object" == typeof a && null !== a) {
                                    let n = "object" == typeof t && null !== t ? t : {};
                                    r[s] = e(a, n, i);
                                } else if (s in p && "number" == typeof a) {
                                    let e = (r[s] = Array.isArray(t) ? t : []);
                                    e.push({ value: a, time: i }), e.length > 600 && e.shift();
                                } else r[s] = a;
                            }
                            return r;
                        })(c, r[i], u);
                    } else delete r[i];
                })({ context: e, stats: t.stats, index: n });
            });
        });
    },
});
