"use strict";
n.d(t, { Ay: () => b, Bz: () => N, EM: () => c, Xi: () => y, iA: () => h }), n(134528), n(947204), n(321073);
var r = n(311907),
    i = n(205693),
    s = n(73153),
    a = n(233545),
    o = n(430452),
    l = n(287809),
    u = n(652215),
    d = n(731854);
let c = y(d.x.DEFAULT, u.zWA.TRANSPORT, 0),
    _ = c,
    f = {},
    E = new Map(),
    h = {
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
function p(e, t, n) {
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
    put(e, t, n, r) {
        if ("" === r) {
            let r = { ...this.state };
            return delete r[p(e, t, n)], new g(r);
        }
        return new g({ [p(e, t, n)]: r, ...this.state });
    }
    get(e, t, n) {
        let r = this.state[p(e, t, n)];
        return null != r ? r : null;
    }
}
let A = g.empty(),
    I = !1,
    T = null,
    S = new Map();
function y(e, t, n) {
    return `${e}:${t}:${n}`;
}
function N(e) {
    let [t, n] = e.split(":");
    return { context: t, section: n };
}
function O(e) {
    return Array.isArray(e) ? e.at(-1)?.value : e;
}
function R() {
    Object.values(d.x).forEach((e) => {
        f[e] = {};
    });
}
function v() {
    null != T && (T.destroy(), (T = null));
}
R();
class C extends r.Ay.Store {
    initialize() {
        this.waitFor(o.Ay, l.default);
    }
    static displayName = "RTCDebugStore";
    getSection() {
        return _;
    }
    getInboundStats(e, t) {
        let n = this.getAllStats(t),
            r = n[0]?.rtp?.inbound[e],
            i = r?.find((e) => "video" === e.type);
        return { codec: i?.codec.name, resolution: i?.resolution, bitrateEstimate: void 0, fps: O(i?.frameRateRender) };
    }
    getOutboundStats(e) {
        let t = this.getAllStats(e),
            n = t[0]?.transport,
            r = t[0]?.rtp?.outbound,
            i = r?.find((e) => "video" === e.type);
        return {
            codec: i?.codec.name,
            resolution: i?.resolution,
            bitrateEstimate: O(n?.availableOutgoingBitrate),
            fps: O(i?.frameRateEncode),
        };
    }
    getAllStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.x.DEFAULT;
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
        return E.has(n) ? E.get(n) : d.r8.NO_OVERRIDE;
    }
}
let b = new C(s.h, {
    RTC_DEBUG_MODAL_OPEN: function (e) {
        _ = e.section ?? c;
    },
    RTC_DEBUG_MODAL_CLOSE: function () {
        v();
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
        if ((v(), !n.supports(d.O5.CONNECTION_REPLAY) || 0 === t.length)) return;
        let r = n.createReplayConnection(d.x.DEFAULT, t);
        null != r &&
            ((T = r),
            r.on(i.yq.Video, (e, t, n, i, a) => {
                s.h.dispatch({
                    type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
                    mediaEngineConnectionId: r.mediaEngineConnectionId,
                    userId: e,
                    videoSsrc: i ?? 0,
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
        let { userId: t, context: n, quality: r } = e;
        E.set(m(t, n), r);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        null != e.channelId && (R(), E.clear(), S.clear());
    },
    RTC_CONNECTION_VIDEO: function (e) {
        if (null === e.streamId) {
            let t = m(e.userId, e.context);
            E.set(t, d.r8.NO_OVERRIDE);
        }
    },
    MEDIA_ENGINE_CONNECTION_STATS: function (e) {
        let { connectionStats: t } = e;
        Object.values(d.x).forEach((e) => {
            t.filter((t) => {
                let { context: n } = t;
                return n === e;
            }).forEach((t, n) => {
                !(function (e) {
                    let { context: t, stats: n, index: r } = e,
                        i = f[t];
                    if (null != n) {
                        let [e, a, o] = _.split(":");
                        if (e === t && parseInt(o) === r && null != l.default.getUser(a)) {
                            let {
                                rtp: { inbound: e },
                            } = n;
                            Object.keys(e).includes(a) || (_ = c);
                        }
                        let u = Date.now(),
                            d = n;
                        if (null != n.screenshare) {
                            let e = `${t}:${r}`,
                                a = S.get(e),
                                o = i[r]?.screenshare;
                            if ((S.set(e, u), null != a && null != o)) {
                                var s;
                                let e,
                                    t,
                                    r = (u - a) / 1e3;
                                r > 0 &&
                                    (d = {
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
                                                screenshareCapturedFps: Math.max(0, (e - t) / r),
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
                                                        r,
                                                ),
                                            }),
                                        },
                                    });
                            }
                        }
                        i[r] = (function e(t) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                                i = {};
                            for (let [s, a] of Object.entries(t)) {
                                let t = n[s];
                                if (Array.isArray(a))
                                    if ("object" == typeof a[0]) {
                                        let n = Array.isArray(t) ? t : [],
                                            o = (i[s] = []);
                                        for (let t = 0; t < a.length; t++) {
                                            let i = n[t],
                                                s = "object" == typeof i ? i : {};
                                            o.push(e(a[t], s, r));
                                        }
                                    } else i[s] = a;
                                else if ("object" == typeof a && null !== a) {
                                    let n = "object" == typeof t && null !== t ? t : {};
                                    i[s] = e(a, n, r);
                                } else if (s in h && "number" == typeof a) {
                                    let e = (i[s] = Array.isArray(t) ? t : []);
                                    e.push({ value: a, time: r }), e.length > 600 && e.shift();
                                } else i[s] = a;
                            }
                            return i;
                        })(d, i[r], u);
                    } else delete i[r];
                })({ context: e, stats: t.stats, index: n });
            });
        });
    },
});
