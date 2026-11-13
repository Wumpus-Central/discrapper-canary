(n.d(t, { Ay: () => y, Bz: () => N, EM: () => u, Xi: () => S, iA: () => f }), n(134528), n(947204), n(321073));
var i = n(855986),
    r = n(205693),
    a = n(73153),
    s = n(233545),
    l = n(754712),
    o = n(287809),
    d = n(652215),
    c = n(731854);
let u = S(c.x.DEFAULT, d.zWA.TRANSPORT, 0),
    _ = u,
    E = {},
    A = new Map(),
    f = {
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
function h(e, t, n) {
    return `${e}:${t}:${n}`;
}
function I(e, t) {
    return `${e}:${t}`;
}
let p = class e {
        state;
        constructor(e) {
            this.state = e;
        }
        static empty() {
            return new e({});
        }
        put(t, n, i, r) {
            if ("" === r) {
                let r = { ...this.state };
                return (delete r[h(t, n, i)], new e(r));
            }
            return new e({ [h(t, n, i)]: r, ...this.state });
        }
        get(e, t, n) {
            let i = this.state[h(e, t, n)];
            return null != i ? i : null;
        }
    }.empty(),
    m = !1,
    g = null,
    T = new Map();
function S(e, t, n) {
    return `${e}:${t}:${n}`;
}
function N(e) {
    let [t, n] = e.split(":");
    return { context: t, section: n };
}
function C(e) {
    return Array.isArray(e) ? e.at(-1)?.value : e;
}
function O() {
    Object.values(c.x).forEach((e) => {
        E[e] = {};
    });
}
function R() {
    null != g && (g.destroy(), (g = null));
}
O();
class L extends i.Ay.Store {
    initialize() {
        this.waitFor(l.Ay, o.default);
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
        return Object.values(E[e]);
    }
    getVideoStreams() {
        return p;
    }
    shouldRecordNextConnection() {
        return m;
    }
    getSimulcastDebugOverride(e, t) {
        let n = I(e, t);
        return A.has(n) ? A.get(n) : c.r8.NO_OVERRIDE;
    }
}
let y = new L(a.h, {
    RTC_DEBUG_MODAL_OPEN: function (e) {
        _ = e.section ?? u;
    },
    RTC_DEBUG_MODAL_CLOSE: function () {
        R();
    },
    RTC_DEBUG_MODAL_SET_SECTION: function (e) {
        _ = e.section;
    },
    RTC_DEBUG_MODAL_OPEN_REPLAY: function (e) {
        s._w();
    },
    RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function (e) {
        let { path: t } = e,
            n = l.Ay.getMediaEngine();
        if ((R(), !n.supports(c.O5.CONNECTION_REPLAY) || 0 === t.length)) return;
        let i = n.createReplayConnection(c.x.DEFAULT, t);
        null != i &&
            ((g = i),
            i.on(r.yq.Video, (e, t, n, r, s) => {
                a.h.dispatch({
                    type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
                    mediaEngineConnectionId: i.mediaEngineConnectionId,
                    userId: e,
                    videoSsrc: r ?? 0,
                    streamId: t ?? "",
                });
            }),
            s.ho());
    },
    RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function (e) {
        p = p.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
    },
    RTC_DEBUG_SET_RECORDING_FLAG: function (e) {
        let { value: t } = e;
        m = t;
    },
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
        let { userId: t, context: n, quality: i } = e;
        A.set(I(t, n), i);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        null != e.channelId && (O(), A.clear(), T.clear());
    },
    RTC_CONNECTION_VIDEO: function (e) {
        if (null === e.streamId) {
            let t = I(e.userId, e.context);
            A.set(t, c.r8.NO_OVERRIDE);
        }
    },
    MEDIA_ENGINE_CONNECTION_STATS: function (e) {
        let { connectionStats: t } = e;
        if (0 === t.length) return !1;
        Object.values(c.x).forEach((e) => {
            t.filter((t) => {
                let { context: n } = t;
                return n === e;
            }).forEach((t, n) => {
                !(function (e) {
                    let { context: t, stats: n, index: i } = e,
                        r = E[t];
                    if (null != n) {
                        let [e, s, l] = _.split(":");
                        if (e === t && parseInt(l) === i && null != o.default.getUser(s)) {
                            let {
                                rtp: { inbound: e },
                            } = n;
                            Object.keys(e).includes(s) || (_ = u);
                        }
                        let d = Date.now(),
                            c = n;
                        if (null != n.screenshare) {
                            let e = `${t}:${i}`,
                                s = T.get(e),
                                l = r[i]?.screenshare;
                            if ((T.set(e, d), null != s && null != l)) {
                                var a;
                                let e,
                                    t,
                                    i = (d - s) / 1e3;
                                i > 0 &&
                                    (c = {
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
                                                (a.screenCaptureKitFrames ?? 0) +
                                                (a.activityFrames ?? 0)),
                                            (t =
                                                (l.videohookFrames ?? 0) +
                                                (l.hybridDxgiFrames ?? 0) +
                                                (l.hybridGdiFrames ?? 0) +
                                                (l.hybridVideohookFrames ?? 0) +
                                                (l.hybridGraphicsCaptureFrames ?? 0) +
                                                (l.quartzFrames ?? 0) +
                                                (l.screenCaptureKitFrames ?? 0) +
                                                (l.activityFrames ?? 0)),
                                            {
                                                screenshareCapturedFps: Math.max(0, (e - t) / i),
                                                screenshareCapturedFpsUnique: Math.max(
                                                    0,
                                                    ((a.hybridDxgiFramesUnique ?? 0) +
                                                        (a.hybridGdiBitBltFramesUnique ?? 0) +
                                                        (a.hybridGdiPrintWindowFramesUnique ?? 0) +
                                                        (a.hybridVideohookFramesUnique ?? 0) +
                                                        (a.hybridGraphicsCaptureFramesUnique ?? 0) +
                                                        (a.hybridExternalFramesUnique ?? 0) -
                                                        ((l.hybridDxgiFramesUnique ?? 0) +
                                                            (l.hybridGdiBitBltFramesUnique ?? 0) +
                                                            (l.hybridGdiPrintWindowFramesUnique ?? 0) +
                                                            (l.hybridVideohookFramesUnique ?? 0) +
                                                            (l.hybridGraphicsCaptureFramesUnique ?? 0) +
                                                            (l.hybridExternalFramesUnique ?? 0))) /
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
                                            l = (r[a] = []);
                                        for (let t = 0; t < s.length; t++) {
                                            let r = n[t],
                                                a = "object" == typeof r ? r : {};
                                            l.push(e(s[t], a, i));
                                        }
                                    } else r[a] = s;
                                else if ("object" == typeof s && null !== s) {
                                    let n = "object" == typeof t && null !== t ? t : {};
                                    r[a] = e(s, n, i);
                                } else if (a in f && "number" == typeof s) {
                                    let e = (r[a] = Array.isArray(t) ? t : []);
                                    (e.push({ value: s, time: i }), e.length > 600 && e.shift());
                                } else r[a] = s;
                            }
                            return r;
                        })(c, r[i], d);
                    } else delete r[i];
                })({ context: e, stats: t.stats, index: n });
            });
        });
    },
});
