"use strict";
n.d(t, {
    ET: () => O,
    Wn: () => E,
    aV: () => S,
    dg: () => N,
    eq: () => p,
    iF: () => A,
    kZ: () => I,
    s7: () => T,
    tH: () => y,
    yo: () => h,
}),
    n(321073);
var r,
    i,
    s,
    a,
    o = n(499979),
    l = n(687658),
    u = n(499954);
let d = [0, 5e5, 1e6, 15e5, 2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6],
    c = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    _ = [720, 480, 360],
    f = [
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
var E =
        (((r = {}).H264 = "H264"),
        (r.H265 = "H265"),
        (r.VP8 = "VP8"),
        (r.VP9 = "VP9"),
        (r.AV1 = "AV1"),
        (r.UNKNOWN = "UNKNOWN"),
        r),
    h =
        (((i = {}).NVIDIA_CUDA = "nvidia_cuda"),
        (i.NVIDIA_DIRECT_3D = "nvidia_direct_3d"),
        (i.NVIDIA_VULKAN = "nvidia_vulkan"),
        (i.OPENH264 = "openh264"),
        (i.VIDEOTOOLBOX = "videotoolbox"),
        (i.AMD_DIRECT_3D = "amd_direct_3d"),
        (i.AMD_VAAPI = "amd_vaapi"),
        (i.INTEL = "intel"),
        (i.INTEL_DIRECT_3D = "intel_direct_3d"),
        (i.INTEL_VAAPI = "intel_vaapi"),
        (i.VP8_LIBVPX = "vp8_libvpx"),
        (i.EXYNOS = "exynos"),
        (i.QUALCOMM = "qualcomm"),
        (i.MEDIATEK = "mediatek"),
        (i.WMF_SW = "wmf_sw"),
        (i.WMF_HW = "wmf_hw"),
        (i.WMF_DIRECT_3D = "wmf_direct_3d"),
        (i.WMF_CHROME = "wmf_chrome"),
        (i.UNCATEGORIZED = "uncategorized"),
        (i.UNKNOWN = "unknown"),
        i),
    p =
        (((s = {}).VIDEOTOOLBOX = "videotoolbox"),
        (s.VP8_LIBVPX = "vp8_libvpx"),
        (s.ELECTRON = "electron"),
        (s.FFMPEG = "ffmpeg"),
        (s.DAV1D = "dav1d"),
        (s.WEBRTC = "WebRTC"),
        (s.EXYNOS = "exynos"),
        (s.QUALCOMM = "qualcomm"),
        (s.MEDIATEK = "mediatek"),
        (s.UNCATEGORIZED = "uncategorized"),
        (s.D3D11VIDEODECODER = "d3d11videodecoder"),
        (s.UNKNOWN = "unknown"),
        s);
let m = Object.freeze({
        mediafoundationvideoencodeaccelerator: "wmf_chrome",
        "nvidia: cuda": "nvidia_cuda",
        "nvidia: direct3d": "nvidia_direct_3d",
        "nvidia: vulkan": "nvidia_vulkan",
        "amd: direct3d": "amd_direct_3d",
        "amd: vaapi": "amd_vaapi",
        "intel: direct3d": "intel_direct_3d",
        "intel: vaapi": "intel_vaapi",
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
    g = Object.freeze({
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
        d3d11videodecoder: "d3d11videodecoder",
    });
var A =
    (((a = {})[(a.None = 0)] = "None"),
    (a[(a.ClientSideDisableVideo = 1)] = "ClientSideDisableVideo"),
    (a[(a.SenderStopped = 2)] = "SenderStopped"),
    a);
function I(e) {
    if (null == e) return "unknown";
    for (let t of Object.keys(m)) if (e.toLowerCase().includes(t)) return m[t];
    return "uncategorized";
}
function T(e) {
    if (null == e) return "unknown";
    for (let t of Object.keys(g)) if (e.toLowerCase().includes(t)) return g[t];
    return "uncategorized";
}
function S(e) {
    if (null == e) return "UNKNOWN";
    if ("H264" === (e = e.toUpperCase())) return "H264";
    if ("H265" === e) return "H265";
    if ("VP8" === e) return "VP8";
    if ("VP9" === e) return "VP9";
    if ("AV1" === e || "AV1X" === e) return "AV1";
    else return "UNKNOWN";
}
class y {
    bytes = 0;
    framesCodec = 0;
    framesCodecError = null;
    framesNetwork = 0;
    resolution = 0;
    minorResolution = 0;
    majorResolution = 0;
    timestamp = 0;
    packets = 0;
    packetsLost = 0;
    framesDropped = 0;
    nackCount = 0;
    pliCount = 0;
    encoder = null;
    decoder = null;
    codecType = null;
    qpSum = 0;
    freezeCount = 0;
    pauseCount = 0;
    totalFreezesDuration = 0;
    totalPausesDuration = 0;
    totalFramesDuration = 0;
    vmafScore = null;
    psnrDb = null;
    outboundSinkWant = null;
    keyframes = null;
    framesDroppedRateLimiter = null;
    framesDroppedEncoderQueue = null;
    framesDroppedCongestionWindow = null;
    framesDroppedEncoder = null;
    passthroughCount = 0;
    cryptorSuccessCount = 0;
    cryptorFailureCount = 0;
    cryptorDuration = 0;
    cryptorAttempts = 0;
    cryptorMaxAttempts = 0;
    cryptorMissingKeyCount = 0;
    cryptorInvalidNonceCount = 0;
    qualityDecodeErrors = 0;
    qualityDecoderReboots = 0;
    qualityScoreErrors = 0;
    qualityFrameDrops = 0;
    qualitySizeMismatches = 0;
    localWant = 0;
    consecutiveStaticColorFrames = 0;
    static parseInboundStats(e, t) {
        let n = new y();
        return (
            null == e ||
                ((n.bytes = e.bytesReceived),
                (n.framesCodec = e.framesDecoded),
                (n.framesCodecError = e.framesDecodeErrors ?? null),
                (n.framesNetwork = e.framesReceived),
                (n.packets = e.packetsReceived),
                (n.packetsLost = e.packetsLost),
                (n.framesDropped = e.framesDropped),
                (n.resolution = null != e.resolution ? e.resolution.height : 0),
                (n.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0),
                (n.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0),
                (n.timestamp = t),
                (n.nackCount = e.nackCount),
                (n.pliCount = e.pliCount),
                (n.decoder = T(e.decoderImplementationName)),
                (n.codecType = S(e.codec.name)),
                (n.qpSum = 0),
                (n.freezeCount = e.freezeCount),
                (n.pauseCount = e.pauseCount),
                (n.totalFreezesDuration = e.totalFreezesDuration),
                (n.totalPausesDuration = e.totalPausesDuration),
                (n.totalFramesDuration = e.totalFramesDuration),
                (n.keyframes = e.keyFramesDecoded ?? null),
                (n.passthroughCount = e.passthroughCount ?? 0),
                (n.cryptorSuccessCount = e.decryptSuccessCount ?? 0),
                (n.cryptorFailureCount = e.decryptFailureCount ?? 0),
                (n.cryptorDuration = e.decryptDuration ?? 0),
                (n.cryptorAttempts = e.decryptAttempts ?? 0),
                (n.cryptorMissingKeyCount = e.decryptMissingKeyCount ?? 0),
                (n.cryptorInvalidNonceCount = e.decryptInvalidNonceCount ?? 0),
                (n.localWant = e.sinkWantLocalAsInt ?? 0)),
            n
        );
    }
    static parseOutboundStats(e, t) {
        let n = new y();
        return null == e
            ? n
            : {
                  bytes: e.bytesSent,
                  framesCodec: e.framesEncoded,
                  framesCodecError: null,
                  framesNetwork: e.framesSent ?? 0,
                  packets: e.packetsSent,
                  packetsLost: e.packetsLost ?? 0,
                  framesDropped: 0,
                  resolution: null != e.resolution ? e.resolution.height : 0,
                  minorResolution: null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0,
                  majorResolution: null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0,
                  timestamp: t,
                  encoder: I(e.encoderImplementationName),
                  decoder: null,
                  codecType: S(e.codec.name),
                  nackCount: e.nackCount,
                  pliCount: e.pliCount,
                  qpSum: e.qpSum,
                  freezeCount: e.freezeCount ?? 0,
                  pauseCount: 0,
                  totalFreezesDuration: e.totalFreezesDuration ?? 0,
                  totalPausesDuration: 0,
                  totalFramesDuration: e.totalFramesDuration ?? 0,
                  outboundSinkWant: e.sinkWantAsInt ?? null,
                  vmafScore: e.encoderQualityVmaf ?? null,
                  qualityDecodeErrors: e.qualityDecodeErrors ?? 0,
                  qualityDecoderReboots: e.qualityDecoderReboots ?? 0,
                  qualityScoreErrors: e.qualityScoreErrors ?? 0,
                  qualityFrameDrops: e.qualityFrameDrops ?? 0,
                  qualitySizeMismatches: e.qualitySizeMismatches ?? 0,
                  psnrDb: e.encoderQualityPsnr ?? null,
                  keyframes: e.keyFramesEncoded ?? null,
                  framesDroppedRateLimiter: e.framesDroppedRateLimiter ?? null,
                  framesDroppedEncoderQueue: e.framesDroppedEncoderQueue ?? null,
                  framesDroppedCongestionWindow: e.framesDroppedCongestionWindow ?? null,
                  framesDroppedEncoder: e.framesDroppedEncoder ?? null,
                  passthroughCount: e.passthroughCount ?? 0,
                  cryptorSuccessCount: e.encryptSuccessCount ?? 0,
                  cryptorFailureCount: e.encryptFailureCount ?? 0,
                  cryptorDuration: e.encryptDuration ?? 0,
                  cryptorAttempts: e.encryptAttempts ?? 0,
                  cryptorMaxAttempts: e.encryptMaxAttempts ?? 0,
                  cryptorMissingKeyCount: e.encryptMissingKeyCount ?? 0,
                  cryptorInvalidNonceCount: 0,
                  localWant: 0,
                  consecutiveStaticColorFrames: e.consecutiveStaticColorFrames ?? 0,
              };
    }
}
class N {
    decoderBuckets = Object.fromEntries(Object.values(p).map((e) => [e, 0]));
    codecBuckets = { H264: 0, H265: 0, VP8: 0, VP9: 0, AV1: 0, UNKNOWN: 0 };
    statsWindow = [];
    fpsHistogram = new l.d();
    bitrateHistogram = new l.d();
    inboundBitrateEstimateHistogram = new l.d();
    resolutionHistogram = new l.d();
    localWantHistogram = new l.d();
    systemResources = new u.A();
    decoderCodec = "UNKNOWN";
    startTime;
    timeToFirstFrame;
    aggregatedProperties = {
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
    };
    aggregationDuration = 0;
    bitrateBuckets = {};
    fpsBuckets = {};
    resolutionBuckets = {};
    resolutionTotal = 0;
    minorResolutionTotal = 0;
    majorResolutionTotal = 0;
    intervalTotal = 0;
    cryptorMaxAttempts = 0;
    cryptorFailureBeforeSuccessCount;
    minWidth = null;
    minHeight = null;
    maxConsecutiveStaticColorFrames = 0;
    videoStoppedWatch;
    videoStoppedReason = 0;
    get isVideoStopped() {
        return 0 !== this.videoStoppedReason;
    }
    get videoStoppedDuration() {
        return this.videoStoppedWatch.elapsed();
    }
    constructor(e) {
        (this.startTime = e.now()),
            (this.videoStoppedWatch = new o.W0(e)),
            d.forEach((e) => {
                this.bitrateBuckets[e] = 0;
            }),
            c.forEach((e) => {
                this.fpsBuckets[e] = 0;
            }),
            _.forEach((e) => {
                this.resolutionBuckets[e] = 0;
            });
    }
    collectAggregationStats(e, t) {
        for (let n of f) {
            let r = e[n];
            if (null === r) continue;
            let i = t[n] ?? 0;
            i > r ? (this.aggregatedProperties[n] += r) : (this.aggregatedProperties[n] += r - i);
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
        this.collectAggregationStats(t, n),
            null == this.cryptorFailureBeforeSuccessCount &&
                e.cryptorSuccessCount > 0 &&
                (this.cryptorFailureBeforeSuccessCount = this.aggregatedProperties.cryptorFailureCount ?? 0);
        let {
                bytes: r,
                framesCodec: i,
                timestamp: s,
                resolution: a,
                minorResolution: o,
                majorResolution: l,
                encoder: u,
                decoder: f,
                codecType: E,
                localWant: h,
            } = t,
            { timestamp: p } = n,
            m = (s - p) / 1e3;
        if (
            ((this.intervalTotal += m),
            (this.resolutionTotal += a * m),
            (this.minorResolutionTotal += o * m),
            (this.majorResolutionTotal += l * m),
            (this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts)),
            null != u &&
                null != E &&
                "encoderBuckets" in this &&
                ((this.encoderBuckets[u] += m),
                (this.codecBuckets[E] += m),
                null != t.codecType && "UNKNOWN" !== t.codecType && (this.encoderCodec = t.codecType),
                null != e.vmafScore &&
                    e.vmafScore >= 0 &&
                    ((this.vmafScoreNum += 1),
                    (this.vmafScoreSum += e.vmafScore),
                    this.vmafHistogram.addSample(e.vmafScore)),
                null != e.psnrDb &&
                    e.psnrDb >= 0 &&
                    ((this.psnrDbNum += 1), (this.psnrDbSum += e.psnrDb), this.psnrHistogram.addSample(e.psnrDb)),
                null != e.outboundSinkWant &&
                    0 !== e.outboundSinkWant &&
                    ((this.outboundSinkWantNum += 1), (this.outboundSinkWantSum += e.outboundSinkWant)),
                (this.consecutiveStaticColorFramesMax = Math.max(
                    this.consecutiveStaticColorFramesMax,
                    e.consecutiveStaticColorFrames,
                ))),
            null != f &&
                null != E &&
                "decoderBuckets" in this &&
                ((this.decoderBuckets[f] += m),
                (this.codecBuckets[E] += m),
                null != t.codecType && "UNKNOWN" !== t.codecType && (this.decoderCodec = t.codecType)),
            this.statsWindow.length < 6)
        )
            return;
        let { bytes: g, framesCodec: A, timestamp: I } = this.statsWindow[this.statsWindow.length - 3];
        _.forEach((e) => {
            a <= e && (this.resolutionBuckets[e] += m);
        });
        let T = (s - I) / 1e3,
            S = ((r - g) * 8) / T,
            y = (i - A) / T;
        d.forEach((e) => {
            S <= e && (this.bitrateBuckets[e] += m);
        }),
            c.forEach((e) => {
                y <= e && (this.fpsBuckets[e] += m);
            }),
            this.resolutionHistogram.addSample(a),
            this.bitrateHistogram.addSample(S),
            this.fpsHistogram.addSample(y),
            this.localWantHistogram.addSample(h),
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
}
class O extends N {
    encoderBuckets = Object.fromEntries(Object.values(h).map((e) => [e, 0]));
    encoderCodec = "UNKNOWN";
    targetFrames = 0;
    targetBytesMax = 0;
    targetBytesNetwork = 0;
    targetBitrateHistogram = new l.d();
    outboundBytesAvailable = 0;
    outboundBandwidthSurplus = new l.d();
    averageEncodeTime = 0;
    vmafScoreSum = 0;
    vmafScoreNum = 0;
    vmafHistogram = new l.d();
    psnrDbSum = 0;
    psnrDbNum = 0;
    psnrHistogram = new l.d();
    qualityDecodeErrors = 0;
    qualityDecoderReboots = 0;
    qualityScoreErrors = 0;
    qualityFrameDrops = 0;
    qualitySizeMismatches = 0;
    outboundSinkWantSum = 0;
    outboundSinkWantNum = 0;
    framesDroppedRateLimiter = null;
    framesDroppedEncoderQueue = null;
    framesDroppedCongestionWindow = null;
    framesDroppedEncoder = null;
    consecutiveStaticColorFramesMax = 0;
    appendTargetRates(e, t, n, r) {
        if (this.statsWindow.length < 2) return;
        (e = e ?? 0), (t = t ?? 0), (n = n ?? 0), (r = r ?? 0);
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
}
