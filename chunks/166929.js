n.d(t, {
    ET: () => A,
    Wn: () => d,
    aV: () => b,
    dg: () => O,
    eq: () => p,
    iF: () => m,
    kZ: () => g,
    s7: () => E,
    tH: () => y,
    yo: () => f,
}),
    n(896048),
    n(321073),
    n(446912);
var r = n(499979),
    i = n(687658),
    a = n(499954);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = [0, 5e5, 1e6, 15e5, 2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6],
    l = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    c = [720, 480, 360],
    u = [
        "framesCodec",
        "framesNetwork",
        "packets",
        "packetsLost",
        "framesDropped",
        "framesCodecError",
        "bytes",
        "nackCount",
        "pliCount",
        "qpSum",
        "freezeCount",
        "pauseCount",
        "totalFreezesDuration",
        "totalPausesDuration",
        "totalFramesDuration",
        "keyframes",
        "passthroughCount",
        "cryptorSuccessCount",
        "cryptorFailureCount",
        "cryptorDuration",
        "cryptorAttempts",
        "cryptorMissingKeyCount",
        "cryptorInvalidNonceCount",
        "qualityDecodeErrors",
        "qualityDecoderReboots",
        "qualityScoreErrors",
        "qualityFrameDrops",
        "qualitySizeMismatches",
    ];
var d = (function (e) {
        return (
            (e.H264 = "H264"),
            (e.H265 = "H265"),
            (e.VP8 = "VP8"),
            (e.VP9 = "VP9"),
            (e.AV1 = "AV1"),
            (e.UNKNOWN = "UNKNOWN"),
            e
        );
    })({}),
    f = (function (e) {
        return (
            (e.NVIDIA_CUDA = "nvidia_cuda"),
            (e.NVIDIA_DIRECT_3D = "nvidia_direct_3d"),
            (e.OPENH264 = "openh264"),
            (e.VIDEOTOOLBOX = "videotoolbox"),
            (e.AMD_DIRECT_3D = "amd_direct_3d"),
            (e.AMD_VAAPI = "amd_vaapi"),
            (e.INTEL = "intel"),
            (e.INTEL_DIRECT_3D = "intel_direct_3d"),
            (e.VP8_LIBVPX = "vp8_libvpx"),
            (e.EXYNOS = "exynos"),
            (e.QUALCOMM = "qualcomm"),
            (e.MEDIATEK = "mediatek"),
            (e.WMF_SW = "wmf_sw"),
            (e.WMF_HW = "wmf_hw"),
            (e.WMF_DIRECT_3D = "wmf_direct_3d"),
            (e.UNCATEGORIZED = "uncategorized"),
            (e.UNKNOWN = "unknown"),
            e
        );
    })({}),
    p = (function (e) {
        return (
            (e.VIDEOTOOLBOX = "videotoolbox"),
            (e.VP8_LIBVPX = "vp8_libvpx"),
            (e.ELECTRON = "electron"),
            (e.FFMPEG = "ffmpeg"),
            (e.DAV1D = "dav1d"),
            (e.WEBRTC = "WebRTC"),
            (e.EXYNOS = "exynos"),
            (e.QUALCOMM = "qualcomm"),
            (e.MEDIATEK = "mediatek"),
            (e.UNCATEGORIZED = "uncategorized"),
            (e.UNKNOWN = "unknown"),
            e
        );
    })({});
let _ = Object.freeze({
        "nvidia: cuda": "nvidia_cuda",
        "nvidia: direct3d": "nvidia_direct_3d",
        "amd: direct3d": "amd_direct_3d",
        "amd: vaapi": "amd_vaapi",
        "intel: direct3d": "intel_direct_3d",
        intel: "intel",
        videotoolbox: "videotoolbox",
        openh264: "openh264",
        libvpx: "vp8_libvpx",
        "c2.exynos": "exynos",
        "omx.exynos": "exynos",
        "c2.qti": "qualcomm",
        "omx.qcom": "qualcomm",
        "c2.mtk": "mediatek",
        "omx.mtk": "mediatek",
        "mediafoundation sw": "wmf_sw",
        "mediafoundation hw": "wmf_hw",
        "mediafoundation direct3d": "wmf_direct_3d",
    }),
    h = Object.freeze({
        videotoolbox: "videotoolbox",
        libvpx: "vp8_libvpx",
        electron: "electron",
        ffmpeg: "ffmpeg",
        dav1d: "dav1d",
        webrtc: "WebRTC",
        "c2.exynos": "exynos",
        "omx.exynos": "exynos",
        "c2.qti": "qualcomm",
        "omx.qcom": "qualcomm",
        "c2.mtk": "mediatek",
        "omx.mtk": "mediatek",
    });
var m = (function (e) {
    return (
        (e[(e.None = 0)] = "None"),
        (e[(e.ClientSideDisableVideo = 1)] = "ClientSideDisableVideo"),
        (e[(e.SenderStopped = 2)] = "SenderStopped"),
        e
    );
})({});

function g(e) {
    if (null == e) return "unknown";
    for (let t of Object.keys(_)) if (e.toLowerCase().includes(t)) return _[t];
    return "uncategorized";
}

function E(e) {
    if (null == e) return "unknown";
    for (let t of Object.keys(h)) if (e.toLowerCase().includes(t)) return h[t];
    return "uncategorized";
}

function b(e) {
    if (null == e) return "UNKNOWN";
    if ("H264" === (e = e.toUpperCase())) return "H264";
    if ("H265" === e) return "H265";
    if ("VP8" === e) return "VP8";
    if ("VP9" === e) return "VP9";
    if ("AV1" === e || "AV1X" === e) return "AV1";
    else return "UNKNOWN";
}
class y {
    static parseInboundStats(e, t) {
        var n, r, i, a, s, o, l, c, u, d;
        let f = new y();
        return (
            null == e ||
                ((f.bytes = e.bytesReceived),
                (f.framesCodec = e.framesDecoded),
                (f.framesCodecError = null != (n = e.framesDecodeErrors) ? n : null),
                (f.framesNetwork = e.framesReceived),
                (f.packets = e.packetsReceived),
                (f.packetsLost = e.packetsLost),
                (f.framesDropped = e.framesDropped),
                (f.resolution = null != e.resolution ? e.resolution.height : 0),
                (f.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0),
                (f.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0),
                (f.timestamp = t),
                (f.nackCount = e.nackCount),
                (f.pliCount = e.pliCount),
                (f.decoder = E(e.decoderImplementationName)),
                (f.codecType = b(e.codec.name)),
                (f.qpSum = 0),
                (f.freezeCount = e.freezeCount),
                (f.pauseCount = e.pauseCount),
                (f.totalFreezesDuration = e.totalFreezesDuration),
                (f.totalPausesDuration = e.totalPausesDuration),
                (f.totalFramesDuration = e.totalFramesDuration),
                (f.keyframes = null != (r = e.keyFramesDecoded) ? r : null),
                (f.passthroughCount = null != (i = e.passthroughCount) ? i : 0),
                (f.cryptorSuccessCount = null != (a = e.decryptSuccessCount) ? a : 0),
                (f.cryptorFailureCount = null != (s = e.decryptFailureCount) ? s : 0),
                (f.cryptorDuration = null != (o = e.decryptDuration) ? o : 0),
                (f.cryptorAttempts = null != (l = e.decryptAttempts) ? l : 0),
                (f.cryptorMissingKeyCount = null != (c = e.decryptMissingKeyCount) ? c : 0),
                (f.cryptorInvalidNonceCount = null != (u = e.decryptInvalidNonceCount) ? u : 0),
                (f.localWant = null != (d = e.sinkWantLocalAsInt) ? d : 0)),
            f
        );
    }
    static parseOutboundStats(e, t) {
        var n, r, i, a, s, o, l, c, u, d, f, p, _, h, m, E, O, A, v, S, I, T, C, N, R;
        let w = new y();
        return null == e
            ? w
            : {
                  bytes: e.bytesSent,
                  framesCodec: e.framesEncoded,
                  framesCodecError: null,
                  framesNetwork: null != (n = e.framesSent) ? n : 0,
                  packets: e.packetsSent,
                  packetsLost: null != (r = e.packetsLost) ? r : 0,
                  framesDropped: 0,
                  resolution: null != e.resolution ? e.resolution.height : 0,
                  minorResolution: null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0,
                  majorResolution: null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0,
                  timestamp: t,
                  encoder: g(e.encoderImplementationName),
                  decoder: null,
                  codecType: b(e.codec.name),
                  nackCount: e.nackCount,
                  pliCount: e.pliCount,
                  qpSum: e.qpSum,
                  freezeCount: null != (i = e.freezeCount) ? i : 0,
                  pauseCount: 0,
                  totalFreezesDuration: null != (a = e.totalFreezesDuration) ? a : 0,
                  totalPausesDuration: 0,
                  totalFramesDuration: null != (s = e.totalFramesDuration) ? s : 0,
                  outboundSinkWant: null != (o = e.sinkWantAsInt) ? o : null,
                  vmafScore: null != (l = e.encoderQualityVmaf) ? l : null,
                  qualityDecodeErrors: null != (c = e.qualityDecodeErrors) ? c : 0,
                  qualityDecoderReboots: null != (u = e.qualityDecoderReboots) ? u : 0,
                  qualityScoreErrors: null != (d = e.qualityScoreErrors) ? d : 0,
                  qualityFrameDrops: null != (f = e.qualityFrameDrops) ? f : 0,
                  qualitySizeMismatches: null != (p = e.qualitySizeMismatches) ? p : 0,
                  psnrDb: null != (_ = e.encoderQualityPsnr) ? _ : null,
                  keyframes: null != (h = e.keyFramesEncoded) ? h : null,
                  framesDroppedRateLimiter: null != (m = e.framesDroppedRateLimiter) ? m : null,
                  framesDroppedEncoderQueue: null != (E = e.framesDroppedEncoderQueue) ? E : null,
                  framesDroppedCongestionWindow: null != (O = e.framesDroppedCongestionWindow) ? O : null,
                  framesDroppedEncoder: null != (A = e.framesDroppedEncoder) ? A : null,
                  passthroughCount: null != (v = e.passthroughCount) ? v : 0,
                  cryptorSuccessCount: null != (S = e.encryptSuccessCount) ? S : 0,
                  cryptorFailureCount: null != (I = e.encryptFailureCount) ? I : 0,
                  cryptorDuration: null != (T = e.encryptDuration) ? T : 0,
                  cryptorAttempts: null != (C = e.encryptAttempts) ? C : 0,
                  cryptorMaxAttempts: null != (N = e.encryptMaxAttempts) ? N : 0,
                  cryptorMissingKeyCount: null != (R = e.encryptMissingKeyCount) ? R : 0,
                  cryptorInvalidNonceCount: 0,
                  localWant: 0,
              };
    }
    constructor() {
        s(this, "bytes", 0),
            s(this, "framesCodec", 0),
            s(this, "framesCodecError", null),
            s(this, "framesNetwork", 0),
            s(this, "resolution", 0),
            s(this, "minorResolution", 0),
            s(this, "majorResolution", 0),
            s(this, "timestamp", 0),
            s(this, "packets", 0),
            s(this, "packetsLost", 0),
            s(this, "framesDropped", 0),
            s(this, "nackCount", 0),
            s(this, "pliCount", 0),
            s(this, "encoder", null),
            s(this, "decoder", null),
            s(this, "codecType", null),
            s(this, "qpSum", 0),
            s(this, "freezeCount", 0),
            s(this, "pauseCount", 0),
            s(this, "totalFreezesDuration", 0),
            s(this, "totalPausesDuration", 0),
            s(this, "totalFramesDuration", 0),
            s(this, "vmafScore", null),
            s(this, "psnrDb", null),
            s(this, "outboundSinkWant", null),
            s(this, "keyframes", null),
            s(this, "framesDroppedRateLimiter", null),
            s(this, "framesDroppedEncoderQueue", null),
            s(this, "framesDroppedCongestionWindow", null),
            s(this, "framesDroppedEncoder", null),
            s(this, "passthroughCount", 0),
            s(this, "cryptorSuccessCount", 0),
            s(this, "cryptorFailureCount", 0),
            s(this, "cryptorDuration", 0),
            s(this, "cryptorAttempts", 0),
            s(this, "cryptorMaxAttempts", 0),
            s(this, "cryptorMissingKeyCount", 0),
            s(this, "cryptorInvalidNonceCount", 0),
            s(this, "qualityDecodeErrors", 0),
            s(this, "qualityDecoderReboots", 0),
            s(this, "qualityScoreErrors", 0),
            s(this, "qualityFrameDrops", 0),
            s(this, "qualitySizeMismatches", 0),
            s(this, "localWant", 0);
    }
}
class O {
    get isVideoStopped() {
        return 0 !== this.videoStoppedReason;
    }
    get videoStoppedDuration() {
        return this.videoStoppedWatch.elapsed();
    }
    collectAggregationStats(e, t) {
        for (let r of u) {
            var n;
            let i = e[r];
            if (null === i) continue;
            let a = null != (n = t[r]) ? n : 0;
            a > i ? (this.aggregatedProperties[r] += i) : (this.aggregatedProperties[r] += i - a);
        }
        this.aggregationDuration += e.timestamp - t.timestamp;
    }
    setVideoStopped(e, t) {
        if (e) {
            (this.videoStoppedReason |= t), this.videoStoppedWatch.start();
            return;
        }
        (this.videoStoppedReason &= ~t),
            0 === this.videoStoppedReason && (this.statsWindow.splice(0), this.videoStoppedWatch.stop());
    }
    appendAndIncrementStats(e) {
        if (this.isVideoStopped || (this.statsWindow.push(e), this.statsWindow.length < 2)) return;
        let t = this.statsWindow[this.statsWindow.length - 1],
            n = this.statsWindow[this.statsWindow.length - 2];
        if (
            (this.collectAggregationStats(t, n),
            null == this.cryptorFailureBeforeSuccessCount && e.cryptorSuccessCount > 0)
        ) {
            var r;
            this.cryptorFailureBeforeSuccessCount = null != (r = this.aggregatedProperties.cryptorFailureCount) ? r : 0;
        }
        let {
                bytes: i,
                framesCodec: a,
                timestamp: s,
                resolution: u,
                minorResolution: d,
                majorResolution: f,
                encoder: p,
                decoder: _,
                codecType: h,
                localWant: m,
            } = t,
            { timestamp: g } = n,
            E = (s - g) / 1e3;
        if (
            ((this.intervalTotal += E),
            (this.resolutionTotal += u * E),
            (this.minorResolutionTotal += d * E),
            (this.majorResolutionTotal += f * E),
            (this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts)),
            null != p && null != h && "encoderBuckets" in this)
        ) {
            let n = this;
            (n.encoderBuckets[p] += E),
                (n.codecBuckets[h] += E),
                null != t.codecType && "UNKNOWN" !== t.codecType && (n.encoderCodec = t.codecType),
                null != e.vmafScore &&
                    e.vmafScore >= 0 &&
                    ((n.vmafScoreNum += 1), (n.vmafScoreSum += e.vmafScore), n.vmafHistogram.addSample(e.vmafScore)),
                null != e.psnrDb &&
                    e.psnrDb >= 0 &&
                    ((n.psnrDbNum += 1), (n.psnrDbSum += e.psnrDb), n.psnrHistogram.addSample(e.psnrDb)),
                null != e.outboundSinkWant &&
                    0 !== e.outboundSinkWant &&
                    ((n.outboundSinkWantNum += 1), (n.outboundSinkWantSum += e.outboundSinkWant));
        }
        if (null != _ && null != h && "decoderBuckets" in this) {
            let e = this;
            (e.decoderBuckets[_] += E),
                (e.codecBuckets[h] += E),
                null != t.codecType && "UNKNOWN" !== t.codecType && (e.decoderCodec = t.codecType);
        }
        if (this.statsWindow.length < 6) return;
        let { bytes: b, framesCodec: y, timestamp: O } = this.statsWindow[this.statsWindow.length - 3];
        c.forEach((e) => {
            u <= e && (this.resolutionBuckets[e] += E);
        });
        let A = (s - O) / 1e3,
            v = ((i - b) * 8) / A,
            S = (a - y) / A;
        o.forEach((e) => {
            v <= e && (this.bitrateBuckets[e] += E);
        }),
            l.forEach((e) => {
                S <= e && (this.fpsBuckets[e] += E);
            }),
            this.resolutionHistogram.addSample(u),
            this.bitrateHistogram.addSample(v),
            this.fpsHistogram.addSample(S),
            this.localWantHistogram.addSample(m),
            this.statsWindow.shift();
    }
    addSystemResources() {
        this.systemResources.takeSample();
    }
    appendTransportStats(e) {
        null != e.inboundBitrateEstimate && this.inboundBitrateEstimateHistogram.addSample(e.inboundBitrateEstimate);
    }
    getCodecsUsed() {
        let e = new Set();
        for (let [t, n] of Object.entries(this.codecBuckets)) n > 0 && e.add(t);
        return e;
    }
    constructor(e) {
        s(this, "decoderBuckets", Object.fromEntries(Object.values(p).map((e) => [e, 0]))),
            s(this, "codecBuckets", {
                H264: 0,
                H265: 0,
                VP8: 0,
                VP9: 0,
                AV1: 0,
                UNKNOWN: 0,
            }),
            s(this, "statsWindow", []),
            s(this, "fpsHistogram", new i.d()),
            s(this, "bitrateHistogram", new i.d()),
            s(this, "inboundBitrateEstimateHistogram", new i.d()),
            s(this, "resolutionHistogram", new i.d()),
            s(this, "localWantHistogram", new i.d()),
            s(this, "systemResources", new a.A()),
            s(this, "decoderCodec", "UNKNOWN"),
            s(this, "startTime", void 0),
            s(this, "timeToFirstFrame", void 0),
            s(this, "aggregatedProperties", {
                framesCodec: 0,
                framesNetwork: 0,
                packets: 0,
                packetsLost: 0,
                framesDropped: 0,
                framesCodecError: 0,
                bytes: 0,
                nackCount: 0,
                pliCount: 0,
                qpSum: 0,
                freezeCount: 0,
                pauseCount: 0,
                totalFreezesDuration: 0,
                totalPausesDuration: 0,
                totalFramesDuration: 0,
                keyframes: 0,
                passthroughCount: 0,
                cryptorSuccessCount: 0,
                cryptorFailureCount: 0,
                cryptorDuration: 0,
                cryptorAttempts: 0,
                cryptorMissingKeyCount: 0,
                cryptorInvalidNonceCount: 0,
                qualityDecodeErrors: 0,
                qualityDecoderReboots: 0,
                qualityScoreErrors: 0,
                qualityFrameDrops: 0,
                qualitySizeMismatches: 0,
            }),
            s(this, "aggregationDuration", 0),
            s(this, "bitrateBuckets", {}),
            s(this, "fpsBuckets", {}),
            s(this, "resolutionBuckets", {}),
            s(this, "resolutionTotal", 0),
            s(this, "minorResolutionTotal", 0),
            s(this, "majorResolutionTotal", 0),
            s(this, "intervalTotal", 0),
            s(this, "cryptorMaxAttempts", 0),
            s(this, "cryptorFailureBeforeSuccessCount", void 0),
            s(this, "videoStoppedWatch", void 0),
            s(this, "videoStoppedReason", 0),
            (this.startTime = e.now()),
            (this.videoStoppedWatch = new r.W0(e)),
            o.forEach((e) => {
                this.bitrateBuckets[e] = 0;
            }),
            l.forEach((e) => {
                this.fpsBuckets[e] = 0;
            }),
            c.forEach((e) => {
                this.resolutionBuckets[e] = 0;
            });
    }
}
class A extends O {
    appendTargetRates(e, t, n, r) {
        if (this.statsWindow.length < 2) return;
        (e = null != e ? e : 0), (t = null != t ? t : 0), (n = null != n ? n : 0), (r = null != r ? r : 0);
        let i =
            (this.statsWindow[this.statsWindow.length - 1].timestamp -
                this.statsWindow[this.statsWindow.length - 2].timestamp) /
            1e3;
        (this.targetFrames = this.targetFrames + e * i),
            (this.targetBytesNetwork = this.targetBytesNetwork + (t / 8) * i),
            (this.targetBytesMax = this.targetBytesMax + (n / 8) * i),
            (this.outboundBytesAvailable = this.outboundBytesAvailable + (r / 8) * i),
            this.targetBitrateHistogram.addSample(t),
            this.outboundBandwidthSurplus.addSample(r - t);
    }
    constructor(...e) {
        super(...e),
            s(this, "encoderBuckets", Object.fromEntries(Object.values(f).map((e) => [e, 0]))),
            s(this, "encoderCodec", "UNKNOWN"),
            s(this, "targetFrames", 0),
            s(this, "targetBytesMax", 0),
            s(this, "targetBytesNetwork", 0),
            s(this, "targetBitrateHistogram", new i.d()),
            s(this, "outboundBytesAvailable", 0),
            s(this, "outboundBandwidthSurplus", new i.d()),
            s(this, "averageEncodeTime", 0),
            s(this, "vmafScoreSum", 0),
            s(this, "vmafScoreNum", 0),
            s(this, "vmafHistogram", new i.d()),
            s(this, "psnrDbSum", 0),
            s(this, "psnrDbNum", 0),
            s(this, "psnrHistogram", new i.d()),
            s(this, "qualityDecodeErrors", 0),
            s(this, "qualityDecoderReboots", 0),
            s(this, "qualityScoreErrors", 0),
            s(this, "qualityFrameDrops", 0),
            s(this, "qualitySizeMismatches", 0),
            s(this, "outboundSinkWantSum", 0),
            s(this, "outboundSinkWantNum", 0),
            s(this, "framesDroppedRateLimiter", null),
            s(this, "framesDroppedEncoderQueue", null),
            s(this, "framesDroppedCongestionWindow", null),
            s(this, "framesDroppedEncoder", null);
    }
}
