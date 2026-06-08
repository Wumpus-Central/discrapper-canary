"use strict";
n.d(t, {
    ET: () => v,
    Wn: () => f,
    aV: () => S,
    dg: () => N,
    eq: () => E,
    iF: () => A,
    kZ: () => I,
    s7: () => T,
    tH: () => y,
    yo: () => p,
}),
    n(321073);
var i,
    r,
    s,
    a,
    o = n(499979),
    l = n(687658),
    u = n(87306);
let c = [0, 5e5, 1e6, 15e5, 2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6],
    d = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    _ = [720, 480, 360],
    h = [
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
        "screenshareFramesUnique",
    ];
var f =
        (((i = {}).H264 = "H264"),
        (i.H265 = "H265"),
        (i.VP8 = "VP8"),
        (i.VP9 = "VP9"),
        (i.AV1 = "AV1"),
        (i.UNKNOWN = "UNKNOWN"),
        i),
    p =
        (((r = {}).NVIDIA_CUDA = "nvidia_cuda"),
        (r.NVIDIA_DIRECT_3D = "nvidia_direct_3d"),
        (r.NVIDIA_VULKAN = "nvidia_vulkan"),
        (r.OPENH264 = "openh264"),
        (r.VIDEOTOOLBOX = "videotoolbox"),
        (r.AMD_DIRECT_3D = "amd_direct_3d"),
        (r.AMD_VAAPI = "amd_vaapi"),
        (r.INTEL = "intel"),
        (r.INTEL_DIRECT_3D = "intel_direct_3d"),
        (r.INTEL_VAAPI = "intel_vaapi"),
        (r.VP8_LIBVPX = "vp8_libvpx"),
        (r.EXYNOS = "exynos"),
        (r.QUALCOMM = "qualcomm"),
        (r.MEDIATEK = "mediatek"),
        (r.WMF_SW = "wmf_sw"),
        (r.WMF_HW = "wmf_hw"),
        (r.WMF_DIRECT_3D = "wmf_direct_3d"),
        (r.WMF_DIRECT_3D_INTEL = "wmf_direct_3d_intel"),
        (r.WMF_DIRECT_3D_NVIDIA = "wmf_direct_3d_nvidia"),
        (r.WMF_DIRECT_3D_AMD = "wmf_direct_3d_amd"),
        (r.WMF_CHROME = "wmf_chrome"),
        (r.UNCATEGORIZED = "uncategorized"),
        (r.UNKNOWN = "unknown"),
        r),
    E =
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
        "mediafoundation direct3d intel": "wmf_direct_3d_intel",
        "mediafoundation direct3d nvidia": "wmf_direct_3d_nvidia",
        "mediafoundation direct3d amd": "wmf_direct_3d_amd",
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
    screenshareFramesUnique = 0;
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
                  screenshareFramesUnique: 0,
              };
    }
}
class N {
    decoderBuckets = Object.fromEntries(Object.values(E).map((e) => [e, 0]));
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
        screenshareFramesUnique: 0,
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
            c.forEach((e) => {
                this.bitrateBuckets[e] = 0;
            }),
            d.forEach((e) => {
                this.fpsBuckets[e] = 0;
            }),
            _.forEach((e) => {
                this.resolutionBuckets[e] = 0;
            });
    }
    collectAggregationStats(e, t) {
        for (let n of h) {
            let i = e[n];
            if (null === i) continue;
            let r = t[n] ?? 0;
            r > i ? (this.aggregatedProperties[n] += i) : (this.aggregatedProperties[n] += i - r);
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
                bytes: i,
                framesCodec: r,
                timestamp: s,
                resolution: a,
                minorResolution: o,
                majorResolution: l,
                encoder: u,
                decoder: h,
                codecType: f,
                localWant: p,
            } = t,
            { timestamp: E } = n,
            m = (s - E) / 1e3;
        if (
            ((this.intervalTotal += m),
            (this.resolutionTotal += a * m),
            (this.minorResolutionTotal += o * m),
            (this.majorResolutionTotal += l * m),
            (this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts)),
            null != u &&
                null != f &&
                "encoderBuckets" in this &&
                ((this.encoderBuckets[u] += m),
                (this.codecBuckets[f] += m),
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
            null != h &&
                null != f &&
                "decoderBuckets" in this &&
                ((this.decoderBuckets[h] += m),
                (this.codecBuckets[f] += m),
                null != t.codecType && "UNKNOWN" !== t.codecType && (this.decoderCodec = t.codecType)),
            this.statsWindow.length < 6)
        )
            return;
        let { bytes: g, framesCodec: A, timestamp: I } = this.statsWindow[this.statsWindow.length - 3];
        _.forEach((e) => {
            a <= e && (this.resolutionBuckets[e] += m);
        });
        let T = (s - I) / 1e3,
            S = ((i - g) * 8) / T,
            y = (r - A) / T;
        c.forEach((e) => {
            S <= e && (this.bitrateBuckets[e] += m);
        }),
            d.forEach((e) => {
                y <= e && (this.fpsBuckets[e] += m);
            }),
            this.resolutionHistogram.addSample(a),
            this.bitrateHistogram.addSample(S),
            this.fpsHistogram.addSample(y),
            this.localWantHistogram.addSample(p),
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
class v extends N {
    encoderBuckets = Object.fromEntries(Object.values(p).map((e) => [e, 0]));
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
    appendTargetRates(e, t, n, i) {
        if (this.statsWindow.length < 2) return;
        (e = e ?? 0), (t = t ?? 0), (n = n ?? 0), (i = i ?? 0);
        let r =
            (this.statsWindow[this.statsWindow.length - 1].timestamp -
                this.statsWindow[this.statsWindow.length - 2].timestamp) /
            1e3;
        (this.targetFrames = this.targetFrames + e * r),
            (this.targetBytesNetwork = this.targetBytesNetwork + (t / 8) * r),
            (this.targetBytesMax = this.targetBytesMax + (n / 8) * r),
            (this.outboundBytesAvailable = this.outboundBytesAvailable + (i / 8) * r),
            this.targetBitrateHistogram.addSample(t),
            this.outboundBandwidthSurplus.addSample(i - t);
    }
}
