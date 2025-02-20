n.d(t, {
    Mq: () => m,
    Su: () => f,
    gr: () => p,
    lG: () => g,
    m7: () => y,
    nt: () => O,
    u7: () => d,
    z4: () => b
}),
    n(47120),
    n(653041);
var r = n(379649),
    i = n(909766),
    o = n(179654);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000],
    l = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    c = [720, 480, 360],
    u = ['framesCodec', 'framesNetwork', 'packets', 'packetsLost', 'framesDropped', 'framesCodecError', 'bytes', 'nackCount', 'pliCount', 'qpSum', 'freezeCount', 'pauseCount', 'totalFreezesDuration', 'totalPausesDuration', 'totalFramesDuration', 'keyframes', 'passthroughCount', 'cryptorSuccessCount', 'cryptorFailureCount', 'cryptorDuration', 'cryptorAttempts', 'cryptorMissingKeyCount', 'cryptorInvalidNonceCount', 'qualityDecodeErrors', 'qualityDecoderReboots', 'qualityScoreErrors', 'qualityFrameDrops', 'qualitySizeMismatches'];
var d = (function (e) {
        return (e.H264 = 'H264'), (e.H265 = 'H265'), (e.VP8 = 'VP8'), (e.VP9 = 'VP9'), (e.AV1 = 'AV1'), (e.UNKNOWN = 'UNKNOWN'), e;
    })({}),
    f = (function (e) {
        return (e.NVIDIA_CUDA = 'nvidia_cuda'), (e.NVIDIA_DIRECT_3D = 'nvidia_direct_3d'), (e.OPENH264 = 'openh264'), (e.VIDEOTOOLBOX = 'videotoolbox'), (e.AMD_DIRECT_3D = 'amd_direct_3d'), (e.INTEL = 'intel'), (e.INTEL_DIRECT_3D = 'intel_direct_3d'), (e.VP8_LIBVPX = 'vp8_libvpx'), (e.UNCATEGORIZED = 'uncategorized'), (e.UNKNOWN = 'unknown'), e;
    })({}),
    p = (function (e) {
        return (e.VIDEOTOOLBOX = 'videotoolbox'), (e.VP8_LIBVPX = 'vp8_libvpx'), (e.ELECTRON = 'electron'), (e.FFMPEG = 'ffmpeg'), (e.DAV1D = 'dav1d'), (e.UNCATEGORIZED = 'uncategorized'), (e.UNKNOWN = 'unknown'), e;
    })({});
let _ = Object.freeze({
        'nvidia: cuda': 'nvidia_cuda',
        'nvidia: direct3d': 'nvidia_direct_3d',
        'amd: direct3d': 'amd_direct_3d',
        'intel: direct3d': 'intel_direct_3d',
        intel: 'intel',
        VideoToolbox: 'videotoolbox',
        OpenH264: 'openh264',
        libvpx: 'vp8_libvpx'
    }),
    h = Object.freeze({
        VideoToolbox: 'videotoolbox',
        libvpx: 'vp8_libvpx',
        electron: 'electron',
        ffmpeg: 'ffmpeg',
        dav1d: 'dav1d'
    });
var m = (function (e) {
    return (e[(e.None = 0)] = 'None'), (e[(e.ClientSideDisableVideo = 1)] = 'ClientSideDisableVideo'), (e[(e.SenderStopped = 2)] = 'SenderStopped'), e;
})({});
function g(e) {
    if (null == e) return 'unknown';
    for (let t of Object.keys(_)) if (e.includes(t)) return _[t];
    return 'uncategorized';
}
function E(e) {
    if (null == e) return 'unknown';
    for (let t of Object.keys(h)) if (e.includes(t)) return h[t];
    return 'uncategorized';
}
function v(e) {
    if (null == e) return 'UNKNOWN';
    if ('H264' === (e = e.toUpperCase())) return 'H264';
    if ('H265' === e) return 'H265';
    if ('VP8' === e) return 'VP8';
    if ('VP9' === e) return 'VP9';
    if ('AV1' === e || 'AV1X' === e) return 'AV1';
    else return 'UNKNOWN';
}
class b {
    static parseInboundStats(e, t) {
        var n, r, i, o, a, s, l, c, u, d;
        let f = new b();
        return null == e || ((f.bytes = e.bytesReceived), (f.framesCodec = e.framesDecoded), (f.framesCodecError = null !== (n = e.framesDecodeErrors) && void 0 !== n ? n : null), (f.framesNetwork = e.framesReceived), (f.packets = e.packetsReceived), (f.packetsLost = e.packetsLost), (f.framesDropped = e.framesDropped), (f.resolution = null != e.resolution ? e.resolution.height : 0), (f.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0), (f.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0), (f.timestamp = t), (f.nackCount = e.nackCount), (f.pliCount = e.pliCount), (f.decoder = E(e.decoderImplementationName)), (f.codecType = v(e.codec.name)), (f.qpSum = 0), (f.freezeCount = e.freezeCount), (f.pauseCount = e.pauseCount), (f.totalFreezesDuration = e.totalFreezesDuration), (f.totalPausesDuration = e.totalPausesDuration), (f.totalFramesDuration = e.totalFramesDuration), (f.keyframes = null !== (r = e.keyFramesDecoded) && void 0 !== r ? r : null), (f.passthroughCount = null !== (i = e.passthroughCount) && void 0 !== i ? i : 0), (f.cryptorSuccessCount = null !== (o = e.decryptSuccessCount) && void 0 !== o ? o : 0), (f.cryptorFailureCount = null !== (a = e.decryptFailureCount) && void 0 !== a ? a : 0), (f.cryptorDuration = null !== (s = e.decryptDuration) && void 0 !== s ? s : 0), (f.cryptorAttempts = null !== (l = e.decryptAttempts) && void 0 !== l ? l : 0), (f.cryptorMissingKeyCount = null !== (c = e.decryptMissingKeyCount) && void 0 !== c ? c : 0), (f.cryptorInvalidNonceCount = null !== (u = e.decryptInvalidNonceCount) && void 0 !== u ? u : 0), (f.localWant = null !== (d = e.sinkWantLocalAsInt) && void 0 !== d ? d : 0)), f;
    }
    static parseOutboundStats(e, t) {
        var n, r, i, o, a, s, l, c, u, d, f, p, _, h, m, E, y, O, S, I, T, N, A, C, R;
        let P = new b();
        return null == e
            ? P
            : {
                  bytes: e.bytesSent,
                  framesCodec: e.framesEncoded,
                  framesCodecError: null,
                  framesNetwork: null !== (n = e.framesSent) && void 0 !== n ? n : 0,
                  packets: e.packetsSent,
                  packetsLost: null !== (r = e.packetsLost) && void 0 !== r ? r : 0,
                  framesDropped: 0,
                  resolution: null != e.resolution ? e.resolution.height : 0,
                  minorResolution: null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0,
                  majorResolution: null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0,
                  timestamp: t,
                  encoder: g(e.encoderImplementationName),
                  decoder: null,
                  codecType: v(e.codec.name),
                  nackCount: e.nackCount,
                  pliCount: e.pliCount,
                  qpSum: e.qpSum,
                  freezeCount: null !== (i = e.freezeCount) && void 0 !== i ? i : 0,
                  pauseCount: 0,
                  totalFreezesDuration: null !== (o = e.totalFreezesDuration) && void 0 !== o ? o : 0,
                  totalPausesDuration: 0,
                  totalFramesDuration: null !== (a = e.totalFramesDuration) && void 0 !== a ? a : 0,
                  outboundSinkWant: null !== (s = e.sinkWantAsInt) && void 0 !== s ? s : null,
                  vmafScore: null !== (l = e.encoderQualityVmaf) && void 0 !== l ? l : null,
                  qualityDecodeErrors: null !== (c = e.qualityDecodeErrors) && void 0 !== c ? c : 0,
                  qualityDecoderReboots: null !== (u = e.qualityDecoderReboots) && void 0 !== u ? u : 0,
                  qualityScoreErrors: null !== (d = e.qualityScoreErrors) && void 0 !== d ? d : 0,
                  qualityFrameDrops: null !== (f = e.qualityFrameDrops) && void 0 !== f ? f : 0,
                  qualitySizeMismatches: null !== (p = e.qualitySizeMismatches) && void 0 !== p ? p : 0,
                  psnrDb: null !== (_ = e.encoderQualityPsnr) && void 0 !== _ ? _ : null,
                  keyframes: null !== (h = e.keyFramesEncoded) && void 0 !== h ? h : null,
                  framesDroppedRateLimiter: null !== (m = e.framesDroppedRateLimiter) && void 0 !== m ? m : null,
                  framesDroppedEncoderQueue: null !== (E = e.framesDroppedEncoderQueue) && void 0 !== E ? E : null,
                  framesDroppedCongestionWindow: null !== (y = e.framesDroppedCongestionWindow) && void 0 !== y ? y : null,
                  framesDroppedEncoder: null !== (O = e.framesDroppedEncoder) && void 0 !== O ? O : null,
                  passthroughCount: null !== (S = e.passthroughCount) && void 0 !== S ? S : 0,
                  cryptorSuccessCount: null !== (I = e.encryptSuccessCount) && void 0 !== I ? I : 0,
                  cryptorFailureCount: null !== (T = e.encryptFailureCount) && void 0 !== T ? T : 0,
                  cryptorDuration: null !== (N = e.encryptDuration) && void 0 !== N ? N : 0,
                  cryptorAttempts: null !== (A = e.encryptAttempts) && void 0 !== A ? A : 0,
                  cryptorMaxAttempts: null !== (C = e.encryptMaxAttempts) && void 0 !== C ? C : 0,
                  cryptorMissingKeyCount: null !== (R = e.encryptMissingKeyCount) && void 0 !== R ? R : 0,
                  cryptorInvalidNonceCount: 0,
                  localWant: 0
              };
    }
    constructor() {
        a(this, 'bytes', 0), a(this, 'framesCodec', 0), a(this, 'framesCodecError', null), a(this, 'framesNetwork', 0), a(this, 'resolution', 0), a(this, 'minorResolution', 0), a(this, 'majorResolution', 0), a(this, 'timestamp', 0), a(this, 'packets', 0), a(this, 'packetsLost', 0), a(this, 'framesDropped', 0), a(this, 'nackCount', 0), a(this, 'pliCount', 0), a(this, 'encoder', null), a(this, 'decoder', null), a(this, 'codecType', null), a(this, 'qpSum', 0), a(this, 'freezeCount', 0), a(this, 'pauseCount', 0), a(this, 'totalFreezesDuration', 0), a(this, 'totalPausesDuration', 0), a(this, 'totalFramesDuration', 0), a(this, 'vmafScore', null), a(this, 'psnrDb', null), a(this, 'outboundSinkWant', null), a(this, 'keyframes', null), a(this, 'framesDroppedRateLimiter', null), a(this, 'framesDroppedEncoderQueue', null), a(this, 'framesDroppedCongestionWindow', null), a(this, 'framesDroppedEncoder', null), a(this, 'passthroughCount', 0), a(this, 'cryptorSuccessCount', 0), a(this, 'cryptorFailureCount', 0), a(this, 'cryptorDuration', 0), a(this, 'cryptorAttempts', 0), a(this, 'cryptorMaxAttempts', 0), a(this, 'cryptorMissingKeyCount', 0), a(this, 'cryptorInvalidNonceCount', 0), a(this, 'qualityDecodeErrors', 0), a(this, 'qualityDecoderReboots', 0), a(this, 'qualityScoreErrors', 0), a(this, 'qualityFrameDrops', 0), a(this, 'qualitySizeMismatches', 0), a(this, 'localWant', 0);
    }
}
class y {
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
            let o = null !== (n = t[r]) && void 0 !== n ? n : 0;
            o > i ? (this.aggregatedProperties[r] += i) : (this.aggregatedProperties[r] += i - o);
        }
        this.aggregationDuration += e.timestamp - t.timestamp;
    }
    setVideoStopped(e, t) {
        if (e) {
            (this.videoStoppedReason |= t), this.videoStoppedWatch.start();
            return;
        }
        (this.videoStoppedReason &= ~t), 0 === this.videoStoppedReason && (this.statsWindow.splice(0), this.videoStoppedWatch.stop());
    }
    appendAndIncrementStats(e) {
        if (this.isVideoStopped || (this.statsWindow.push(e), this.statsWindow.length < 2)) return;
        let t = this.statsWindow[this.statsWindow.length - 1],
            n = this.statsWindow[this.statsWindow.length - 2];
        this.collectAggregationStats(t, n);
        let { bytes: r, framesCodec: i, timestamp: o, resolution: a, minorResolution: u, majorResolution: d, encoder: f, decoder: p, codecType: _, localWant: h } = t,
            { timestamp: m } = n,
            g = (o - m) / 1000;
        if (((this.intervalTotal += g), (this.resolutionTotal += a * g), (this.minorResolutionTotal += u * g), (this.majorResolutionTotal += d * g), (this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts)), null != f && null != _ && 'encoderBuckets' in this)) {
            let n = this;
            (n.encoderBuckets[f] += g), (n.codecBuckets[_] += g), null != t.codecType && 'UNKNOWN' !== t.codecType && (n.encoderCodec = t.codecType), null != e.vmafScore && e.vmafScore >= 0 && ((n.vmafScoreNum += 1), (n.vmafScoreSum += e.vmafScore), n.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && e.psnrDb >= 0 && ((n.psnrDbNum += 1), (n.psnrDbSum += e.psnrDb), n.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && ((n.outboundSinkWantNum += 1), (n.outboundSinkWantSum += e.outboundSinkWant));
        }
        if (null != p && null != _ && 'decoderBuckets' in this) {
            let e = this;
            (e.decoderBuckets[p] += g), (e.codecBuckets[_] += g), null != t.codecType && 'UNKNOWN' !== t.codecType && (e.decoderCodec = t.codecType);
        }
        if (this.statsWindow.length < 6) return;
        let { bytes: E, framesCodec: v, timestamp: b } = this.statsWindow[this.statsWindow.length - 3];
        c.forEach((e) => {
            a <= e && (this.resolutionBuckets[e] += g);
        });
        let y = (o - b) / 1000,
            O = ((r - E) * 8) / y,
            S = (i - v) / y;
        s.forEach((e) => {
            O <= e && (this.bitrateBuckets[e] += g);
        }),
            l.forEach((e) => {
                S <= e && (this.fpsBuckets[e] += g);
            }),
            this.resolutionHistogram.addSample(a),
            this.bitrateHistogram.addSample(O),
            this.fpsHistogram.addSample(S),
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
    constructor(e) {
        a(this, 'decoderBuckets', {
            vp8_libvpx: 0,
            dav1d: 0,
            ffmpeg: 0,
            electron: 0,
            videotoolbox: 0,
            uncategorized: 0,
            unknown: 0
        }),
            a(this, 'codecBuckets', {
                H264: 0,
                H265: 0,
                VP8: 0,
                VP9: 0,
                AV1: 0,
                UNKNOWN: 0
            }),
            a(this, 'statsWindow', []),
            a(this, 'fpsHistogram', new i.b()),
            a(this, 'bitrateHistogram', new i.b()),
            a(this, 'inboundBitrateEstimateHistogram', new i.b()),
            a(this, 'resolutionHistogram', new i.b()),
            a(this, 'localWantHistogram', new i.b()),
            a(this, 'systemResources', new o.Z()),
            a(this, 'decoderCodec', 'UNKNOWN'),
            a(this, 'startTime', void 0),
            a(this, 'timeToFirstFrame', void 0),
            a(this, 'aggregatedProperties', {
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
                qualitySizeMismatches: 0
            }),
            a(this, 'aggregationDuration', 0),
            a(this, 'bitrateBuckets', {}),
            a(this, 'fpsBuckets', {}),
            a(this, 'resolutionBuckets', {}),
            a(this, 'resolutionTotal', 0),
            a(this, 'minorResolutionTotal', 0),
            a(this, 'majorResolutionTotal', 0),
            a(this, 'intervalTotal', 0),
            a(this, 'cryptorMaxAttempts', 0),
            a(this, 'videoStoppedWatch', void 0),
            a(this, 'videoStoppedReason', 0),
            (this.startTime = e.now()),
            (this.videoStoppedWatch = new r.G9(e)),
            s.forEach((e) => {
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
class O extends y {
    appendTargetRates(e, t, n, r) {
        if (this.statsWindow.length < 2) return;
        (e = null != e ? e : 0), (t = null != t ? t : 0), (n = null != n ? n : 0), (r = null != r ? r : 0);
        let i = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1000;
        (this.targetFrames = this.targetFrames + e * i), (this.targetBytesNetwork = this.targetBytesNetwork + (t / 8) * i), (this.targetBytesMax = this.targetBytesMax + (n / 8) * i), (this.outboundBytesAvailable = this.outboundBytesAvailable + (r / 8) * i), this.targetBitrateHistogram.addSample(t), this.outboundBandwidthSurplus.addSample(r - t);
    }
    constructor(...e) {
        super(...e),
            a(this, 'encoderBuckets', {
                nvidia_cuda: 0,
                nvidia_direct_3d: 0,
                openh264: 0,
                videotoolbox: 0,
                amd_direct_3d: 0,
                intel: 0,
                intel_direct_3d: 0,
                vp8_libvpx: 0,
                uncategorized: 0,
                unknown: 0
            }),
            a(this, 'encoderCodec', 'UNKNOWN'),
            a(this, 'targetFrames', 0),
            a(this, 'targetBytesMax', 0),
            a(this, 'targetBytesNetwork', 0),
            a(this, 'targetBitrateHistogram', new i.b()),
            a(this, 'outboundBytesAvailable', 0),
            a(this, 'outboundBandwidthSurplus', new i.b()),
            a(this, 'averageEncodeTime', 0),
            a(this, 'vmafScoreSum', 0),
            a(this, 'vmafScoreNum', 0),
            a(this, 'vmafHistogram', new i.b()),
            a(this, 'psnrDbSum', 0),
            a(this, 'psnrDbNum', 0),
            a(this, 'psnrHistogram', new i.b()),
            a(this, 'qualityDecodeErrors', 0),
            a(this, 'qualityDecoderReboots', 0),
            a(this, 'qualityScoreErrors', 0),
            a(this, 'qualityFrameDrops', 0),
            a(this, 'qualitySizeMismatches', 0),
            a(this, 'outboundSinkWantSum', 0),
            a(this, 'outboundSinkWantNum', 0),
            a(this, 'framesDroppedRateLimiter', null),
            a(this, 'framesDroppedEncoderQueue', null),
            a(this, 'framesDroppedCongestionWindow', null),
            a(this, 'framesDroppedEncoder', null);
    }
}
