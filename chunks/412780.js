"use strict";
n.d(t, { Ay: () => Y, Bz: () => N, EM: () => d, Xi: () => v, iA: () => h }), n(134528), n(947204), n(321073);
var r = n(311907),
    i = n(205693),
    s = n(73153),
    a = n(233545),
    o = n(430452),
    l = n(287809),
    u = n(652215),
    c = n(731854);
let d = v(c.x.DEFAULT, u.zWA.TRANSPORT, 0),
    _ = d,
    f = {},
    p = new Map(),
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
    },
    m = 600;
function E(e, t, n) {
    return `${e}:${t}:${n}`;
}
function g(e, t) {
    return `${e}:${t}`;
}
class A {
    state;
    constructor(e) {
        this.state = e;
    }
    static empty() {
        return new A({});
    }
    put(e, t, n, r) {
        if ("" === r) {
            let r = { ...this.state };
            return delete r[E(e, t, n)], new A(r);
        }
        return new A({ [E(e, t, n)]: r, ...this.state });
    }
    get(e, t, n) {
        let r = this.state[E(e, t, n)];
        return null != r ? r : null;
    }
}
let I = A.empty(),
    T = !1,
    S = null,
    y = new Map();
function v(e, t, n) {
    return `${e}:${t}:${n}`;
}
function N(e) {
    let [t, n] = e.split(":");
    return { context: t, section: n };
}
function C(e) {
    return Array.isArray(e) ? e.at(-1)?.value : e;
}
function R() {
    Object.values(c.x).forEach((e) => {
        f[e] = {};
    });
}
function O() {
    null != S && (S.destroy(), (S = null));
}
function b(e) {
    _ = e.section ?? d;
}
function D() {
    O();
}
function L(e) {
    null != e.channelId && (R(), p.clear(), y.clear());
}
function w(e) {
    if (null === e.streamId) {
        let t = g(e.userId, e.context);
        p.set(t, c.r8.NO_OVERRIDE);
    }
}
function M(e) {
    _ = e.section;
}
function x(e, t, n) {
    return {
        screenshareCapturedFps: Math.max(
            0,
            ((e.videohookFrames ?? 0) +
                (e.hybridDxgiFrames ?? 0) +
                (e.hybridGdiFrames ?? 0) +
                (e.hybridVideohookFrames ?? 0) +
                (e.hybridGraphicsCaptureFrames ?? 0) +
                (e.quartzFrames ?? 0) +
                (e.screenCaptureKitFrames ?? 0) -
                ((t.videohookFrames ?? 0) +
                    (t.hybridDxgiFrames ?? 0) +
                    (t.hybridGdiFrames ?? 0) +
                    (t.hybridVideohookFrames ?? 0) +
                    (t.hybridGraphicsCaptureFrames ?? 0) +
                    (t.quartzFrames ?? 0) +
                    (t.screenCaptureKitFrames ?? 0))) /
                n,
        ),
        screenshareCapturedFpsUnique: Math.max(
            0,
            ((e.hybridDxgiFramesUnique ?? 0) +
                (e.hybridGdiBitBltFramesUnique ?? 0) +
                (e.hybridGdiPrintWindowFramesUnique ?? 0) +
                (e.hybridVideohookFramesUnique ?? 0) +
                (e.hybridGraphicsCaptureFramesUnique ?? 0) -
                ((t.hybridDxgiFramesUnique ?? 0) +
                    (t.hybridGdiBitBltFramesUnique ?? 0) +
                    (t.hybridGdiPrintWindowFramesUnique ?? 0) +
                    (t.hybridVideohookFramesUnique ?? 0) +
                    (t.hybridGraphicsCaptureFramesUnique ?? 0))) /
                n,
        ),
    };
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
        r = {};
    for (let [i, s] of Object.entries(e)) {
        let e = t[i];
        if (Array.isArray(s))
            if ("object" == typeof s[0]) {
                let t = Array.isArray(e) ? e : [],
                    a = (r[i] = []);
                for (let e = 0; e < s.length; e++) {
                    let r = t[e],
                        i = "object" == typeof r ? r : {};
                    a.push(P(s[e], i, n));
                }
            } else r[i] = s;
        else if ("object" == typeof s && null !== s) {
            let t = "object" == typeof e && null !== e ? e : {};
            r[i] = P(s, t, n);
        } else if (i in h && "number" == typeof s) {
            let t = (r[i] = Array.isArray(e) ? e : []);
            t.push({ value: s, time: n }), t.length > m && t.shift();
        } else r[i] = s;
    }
    return r;
}
function k(e) {
    let { connectionStats: t } = e;
    Object.values(c.x).forEach((e) => {
        t.filter((t) => {
            let { context: n } = t;
            return n === e;
        }).forEach((t, n) => {
            U({ context: e, stats: t.stats, index: n });
        });
    });
}
function U(e) {
    let { context: t, stats: n, index: r } = e,
        i = f[t];
    if (null != n) {
        let [e, s, a] = _.split(":");
        if (e === t && parseInt(a) === r && null != l.default.getUser(s)) {
            let {
                rtp: { inbound: e },
            } = n;
            Object.keys(e).includes(s) || (_ = d);
        }
        let o = Date.now(),
            u = n;
        if (null != n.screenshare) {
            let e = `${t}:${r}`,
                s = y.get(e),
                a = i[r]?.screenshare;
            if ((y.set(e, o), null != s && null != a)) {
                let e = (o - s) / 1e3;
                e > 0 && (u = { ...n, screenshare: { ...n.screenshare, ...x(n.screenshare, a, e) } });
            }
        }
        i[r] = P(u, i[r], o);
    } else delete i[r];
}
function G(e) {
    a._w();
}
function F(e) {
    let { path: t } = e,
        n = o.Ay.getMediaEngine();
    if ((O(), !n.supports(c.O5.CONNECTION_REPLAY) || 0 === t.length)) return;
    let r = n.createReplayConnection(c.x.DEFAULT, t);
    null != r &&
        ((S = r),
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
}
function V(e) {
    I = I.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
}
function B(e) {
    let { value: t } = e;
    T = t;
}
function H(e) {
    let { userId: t, context: n, quality: r } = e;
    p.set(g(t, n), r);
}
R();
class j extends r.Ay.Store {
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
        return { codec: i?.codec.name, resolution: i?.resolution, bitrateEstimate: void 0, fps: C(i?.frameRateRender) };
    }
    getOutboundStats(e) {
        let t = this.getAllStats(e),
            n = t[0]?.transport,
            r = t[0]?.rtp?.outbound,
            i = r?.find((e) => "video" === e.type);
        return {
            codec: i?.codec.name,
            resolution: i?.resolution,
            bitrateEstimate: C(n?.availableOutgoingBitrate),
            fps: C(i?.frameRateEncode),
        };
    }
    getAllStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.x.DEFAULT;
        return Object.values(f[e]);
    }
    getVideoStreams() {
        return I;
    }
    shouldRecordNextConnection() {
        return T;
    }
    getSimulcastDebugOverride(e, t) {
        let n = g(e, t);
        return p.has(n) ? p.get(n) : c.r8.NO_OVERRIDE;
    }
}
let Y = new j(s.h, {
    RTC_DEBUG_MODAL_OPEN: b,
    RTC_DEBUG_MODAL_CLOSE: D,
    RTC_DEBUG_MODAL_SET_SECTION: M,
    RTC_DEBUG_MODAL_OPEN_REPLAY: G,
    RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: F,
    RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: V,
    RTC_DEBUG_SET_RECORDING_FLAG: B,
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: H,
    VOICE_CHANNEL_SELECT: L,
    RTC_CONNECTION_VIDEO: w,
    MEDIA_ENGINE_CONNECTION_STATS: k,
});
