n.d(t, {
    Mq: () => m,
    Su: () => f,
    gr: () => _,
    lG: () => g,
    m7: () => I,
    nt: () => T,
    u7: () => d,
    z4: () => y
}),
    n(47120),
    n(653041);
var i = n(379649),
    r = n(909766),
    a = n(179654);
function s(e, t, n) {
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
let o = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000],
    l = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    u = [720, 480, 360],
    c = ['framesCodec', 'framesNetwork', 'packets', 'packetsLost', 'framesDropped', 'framesCodecError', 'bytes', 'nackCount', 'pliCount', 'qpSum', 'freezeCount', 'pauseCount', 'totalFreezesDuration', 'totalPausesDuration', 'totalFramesDuration', 'keyframes', 'passthroughCount', 'cryptorSuccessCount', 'cryptorFailureCount', 'cryptorDuration', 'cryptorAttempts', 'cryptorMissingKeyCount', 'cryptorInvalidNonceCount', 'qualityDecodeErrors', 'qualityDecoderReboots', 'qualityScoreErrors', 'qualityFrameDrops', 'qualitySizeMismatches'];
var d = (function (e) {
        return (e.H264 = 'H264'), (e.H265 = 'H265'), (e.VP8 = 'VP8'), (e.VP9 = 'VP9'), (e.AV1 = 'AV1'), (e.UNKNOWN = 'UNKNOWN'), e;
    })({}),
    f = (function (e) {
        return (e.NVIDIA_CUDA = 'nvidia_cuda'), (e.NVIDIA_DIRECT_3D = 'nvidia_direct_3d'), (e.OPENH264 = 'openh264'), (e.VIDEOTOOLBOX = 'videotoolbox'), (e.AMD_DIRECT_3D = 'amd_direct_3d'), (e.INTEL = 'intel'), (e.INTEL_DIRECT_3D = 'intel_direct_3d'), (e.VP8_LIBVPX = 'vp8_libvpx'), (e.UNCATEGORIZED = 'uncategorized'), (e.UNKNOWN = 'unknown'), e;
    })({}),
    _ = (function (e) {
        return (e.VIDEOTOOLBOX = 'videotoolbox'), (e.VP8_LIBVPX = 'vp8_libvpx'), (e.ELECTRON = 'electron'), (e.FFMPEG = 'ffmpeg'), (e.DAV1D = 'dav1d'), (e.UNCATEGORIZED = 'uncategorized'), (e.UNKNOWN = 'unknown'), e;
    })({});
let p = Object.freeze({
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
    for (let t of Object.keys(p)) if (e.includes(t)) return p[t];
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
class y {
    static parseInboundStats(e, t) {
        var n, i, r, a, s, o, l, u, c, d;
        let f = new y();
        return null == e || ((f.bytes = e.bytesReceived), (f.framesCodec = e.framesDecoded), (f.framesCodecError = null !== (n = e.framesDecodeErrors) && void 0 !== n ? n : null), (f.framesNetwork = e.framesReceived), (f.packets = e.packetsReceived), (f.packetsLost = e.packetsLost), (f.framesDropped = e.framesDropped), (f.resolution = null != e.resolution ? e.resolution.height : 0), (f.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0), (f.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0), (f.timestamp = t), (f.nackCount = e.nackCount), (f.pliCount = e.pliCount), (f.decoder = E(e.decoderImplementationName)), (f.codecType = v(e.codec.name)), (f.qpSum = 0), (f.freezeCount = e.freezeCount), (f.pauseCount = e.pauseCount), (f.totalFreezesDuration = e.totalFreezesDuration), (f.totalPausesDuration = e.totalPausesDuration), (f.totalFramesDuration = e.totalFramesDuration), (f.keyframes = null !== (i = e.keyFramesDecoded) && void 0 !== i ? i : null), (f.passthroughCount = null !== (r = e.passthroughCount) && void 0 !== r ? r : 0), (f.cryptorSuccessCount = null !== (a = e.decryptSuccessCount) && void 0 !== a ? a : 0), (f.cryptorFailureCount = null !== (s = e.decryptFailureCount) && void 0 !== s ? s : 0), (f.cryptorDuration = null !== (o = e.decryptDuration) && void 0 !== o ? o : 0), (f.cryptorAttempts = null !== (l = e.decryptAttempts) && void 0 !== l ? l : 0), (f.cryptorMissingKeyCount = null !== (u = e.decryptMissingKeyCount) && void 0 !== u ? u : 0), (f.cryptorInvalidNonceCount = null !== (c = e.decryptInvalidNonceCount) && void 0 !== c ? c : 0), (f.localWant = null !== (d = e.sinkWantLocalAsInt) && void 0 !== d ? d : 0)), f;
    }
    static parseOutboundStats(e, t) {
        var n, i, r, a, s, o, l, u, c, d, f, _, p, h, m, E, I, T, b, S, A, N, C, R, O;
        let D = new y();
        return null == e
            ? D
            : {
                  bytes: e.bytesSent,
                  framesCodec: e.framesEncoded,
                  framesCodecError: null,
                  framesNetwork: null !== (n = e.framesSent) && void 0 !== n ? n : 0,
                  packets: e.packetsSent,
                  packetsLost: null !== (i = e.packetsLost) && void 0 !== i ? i : 0,
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
                  freezeCount: null !== (r = e.freezeCount) && void 0 !== r ? r : 0,
                  pauseCount: 0,
                  totalFreezesDuration: null !== (a = e.totalFreezesDuration) && void 0 !== a ? a : 0,
                  totalPausesDuration: 0,
                  totalFramesDuration: null !== (s = e.totalFramesDuration) && void 0 !== s ? s : 0,
                  outboundSinkWant: null !== (o = e.sinkWantAsInt) && void 0 !== o ? o : null,
                  vmafScore: null !== (l = e.encoderQualityVmaf) && void 0 !== l ? l : null,
                  qualityDecodeErrors: null !== (u = e.qualityDecodeErrors) && void 0 !== u ? u : 0,
                  qualityDecoderReboots: null !== (c = e.qualityDecoderReboots) && void 0 !== c ? c : 0,
                  qualityScoreErrors: null !== (d = e.qualityScoreErrors) && void 0 !== d ? d : 0,
                  qualityFrameDrops: null !== (f = e.qualityFrameDrops) && void 0 !== f ? f : 0,
                  qualitySizeMismatches: null !== (_ = e.qualitySizeMismatches) && void 0 !== _ ? _ : 0,
                  psnrDb: null !== (p = e.encoderQualityPsnr) && void 0 !== p ? p : null,
                  keyframes: null !== (h = e.keyFramesEncoded) && void 0 !== h ? h : null,
                  framesDroppedRateLimiter: null !== (m = e.framesDroppedRateLimiter) && void 0 !== m ? m : null,
                  framesDroppedEncoderQueue: null !== (E = e.framesDroppedEncoderQueue) && void 0 !== E ? E : null,
                  framesDroppedCongestionWindow: null !== (I = e.framesDroppedCongestionWindow) && void 0 !== I ? I : null,
                  framesDroppedEncoder: null !== (T = e.framesDroppedEncoder) && void 0 !== T ? T : null,
                  passthroughCount: null !== (b = e.passthroughCount) && void 0 !== b ? b : 0,
                  cryptorSuccessCount: null !== (S = e.encryptSuccessCount) && void 0 !== S ? S : 0,
                  cryptorFailureCount: null !== (A = e.encryptFailureCount) && void 0 !== A ? A : 0,
                  cryptorDuration: null !== (N = e.encryptDuration) && void 0 !== N ? N : 0,
                  cryptorAttempts: null !== (C = e.encryptAttempts) && void 0 !== C ? C : 0,
                  cryptorMaxAttempts: null !== (R = e.encryptMaxAttempts) && void 0 !== R ? R : 0,
                  cryptorMissingKeyCount: null !== (O = e.encryptMissingKeyCount) && void 0 !== O ? O : 0,
                  cryptorInvalidNonceCount: 0,
                  localWant: 0
              };
    }
    constructor() {
        s(this, 'bytes', 0), s(this, 'framesCodec', 0), s(this, 'framesCodecError', null), s(this, 'framesNetwork', 0), s(this, 'resolution', 0), s(this, 'minorResolution', 0), s(this, 'majorResolution', 0), s(this, 'timestamp', 0), s(this, 'packets', 0), s(this, 'packetsLost', 0), s(this, 'framesDropped', 0), s(this, 'nackCount', 0), s(this, 'pliCount', 0), s(this, 'encoder', null), s(this, 'decoder', null), s(this, 'codecType', null), s(this, 'qpSum', 0), s(this, 'freezeCount', 0), s(this, 'pauseCount', 0), s(this, 'totalFreezesDuration', 0), s(this, 'totalPausesDuration', 0), s(this, 'totalFramesDuration', 0), s(this, 'vmafScore', null), s(this, 'psnrDb', null), s(this, 'outboundSinkWant', null), s(this, 'keyframes', null), s(this, 'framesDroppedRateLimiter', null), s(this, 'framesDroppedEncoderQueue', null), s(this, 'framesDroppedCongestionWindow', null), s(this, 'framesDroppedEncoder', null), s(this, 'passthroughCount', 0), s(this, 'cryptorSuccessCount', 0), s(this, 'cryptorFailureCount', 0), s(this, 'cryptorDuration', 0), s(this, 'cryptorAttempts', 0), s(this, 'cryptorMaxAttempts', 0), s(this, 'cryptorMissingKeyCount', 0), s(this, 'cryptorInvalidNonceCount', 0), s(this, 'qualityDecodeErrors', 0), s(this, 'qualityDecoderReboots', 0), s(this, 'qualityScoreErrors', 0), s(this, 'qualityFrameDrops', 0), s(this, 'qualitySizeMismatches', 0), s(this, 'localWant', 0);
    }
}
class I {
    get isVideoStopped() {
        return 0 !== this.videoStoppedReason;
    }
    get videoStoppedDuration() {
        return this.videoStoppedWatch.elapsed();
    }
    collectAggregationStats(e, t) {
        for (let i of c) {
            var n;
            let r = e[i];
            if (null === r) continue;
            let a = null !== (n = t[i]) && void 0 !== n ? n : 0;
            a > r ? (this.aggregatedProperties[i] += r) : (this.aggregatedProperties[i] += r - a);
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
        let { bytes: i, framesCodec: r, timestamp: a, resolution: s, minorResolution: c, majorResolution: d, encoder: f, decoder: _, codecType: p, localWant: h } = t,
            { timestamp: m } = n,
            g = (a - m) / 1000;
        if (((this.intervalTotal += g), (this.resolutionTotal += s * g), (this.minorResolutionTotal += c * g), (this.majorResolutionTotal += d * g), (this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts)), null != f && null != p && 'encoderBuckets' in this)) {
            let n = this;
            (n.encoderBuckets[f] += g), (n.codecBuckets[p] += g), null != t.codecType && 'UNKNOWN' !== t.codecType && (n.encoderCodec = t.codecType), null != e.vmafScore && e.vmafScore >= 0 && ((n.vmafScoreNum += 1), (n.vmafScoreSum += e.vmafScore), n.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && e.psnrDb >= 0 && ((n.psnrDbNum += 1), (n.psnrDbSum += e.psnrDb), n.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && ((n.outboundSinkWantNum += 1), (n.outboundSinkWantSum += e.outboundSinkWant));
        }
        if (null != _ && null != p && 'decoderBuckets' in this) {
            let e = this;
            (e.decoderBuckets[_] += g), (e.codecBuckets[p] += g), null != t.codecType && 'UNKNOWN' !== t.codecType && (e.decoderCodec = t.codecType);
        }
        if (this.statsWindow.length < 6) return;
        let { bytes: E, framesCodec: v, timestamp: y } = this.statsWindow[this.statsWindow.length - 3];
        u.forEach((e) => {
            s <= e && (this.resolutionBuckets[e] += g);
        });
        let I = (a - y) / 1000,
            T = ((i - E) * 8) / I,
            b = (r - v) / I;
        o.forEach((e) => {
            T <= e && (this.bitrateBuckets[e] += g);
        }),
            l.forEach((e) => {
                b <= e && (this.fpsBuckets[e] += g);
            }),
            this.resolutionHistogram.addSample(s),
            this.bitrateHistogram.addSample(T),
            this.fpsHistogram.addSample(b),
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
        s(this, 'decoderBuckets', {
            vp8_libvpx: 0,
            dav1d: 0,
            ffmpeg: 0,
            electron: 0,
            videotoolbox: 0,
            uncategorized: 0,
            unknown: 0
        }),
            s(this, 'codecBuckets', {
                H264: 0,
                H265: 0,
                VP8: 0,
                VP9: 0,
                AV1: 0,
                UNKNOWN: 0
            }),
            s(this, 'statsWindow', []),
            s(this, 'fpsHistogram', new r.b()),
            s(this, 'bitrateHistogram', new r.b()),
            s(this, 'inboundBitrateEstimateHistogram', new r.b()),
            s(this, 'resolutionHistogram', new r.b()),
            s(this, 'localWantHistogram', new r.b()),
            s(this, 'systemResources', new a.Z()),
            s(this, 'decoderCodec', 'UNKNOWN'),
            s(this, 'startTime', void 0),
            s(this, 'timeToFirstFrame', void 0),
            s(this, 'aggregatedProperties', {
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
            s(this, 'aggregationDuration', 0),
            s(this, 'bitrateBuckets', {}),
            s(this, 'fpsBuckets', {}),
            s(this, 'resolutionBuckets', {}),
            s(this, 'resolutionTotal', 0),
            s(this, 'minorResolutionTotal', 0),
            s(this, 'majorResolutionTotal', 0),
            s(this, 'intervalTotal', 0),
            s(this, 'cryptorMaxAttempts', 0),
            s(this, 'videoStoppedWatch', void 0),
            s(this, 'videoStoppedReason', 0),
            (this.startTime = e.now()),
            (this.videoStoppedWatch = new i.G9(e)),
            o.forEach((e) => {
                this.bitrateBuckets[e] = 0;
            }),
            l.forEach((e) => {
                this.fpsBuckets[e] = 0;
            }),
            u.forEach((e) => {
                this.resolutionBuckets[e] = 0;
            });
    }
}
class T extends I {
    appendTargetRates(e, t, n, i) {
        if (this.statsWindow.length < 2) return;
        (e = null != e ? e : 0), (t = null != t ? t : 0), (n = null != n ? n : 0), (i = null != i ? i : 0);
        let r = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1000;
        (this.targetFrames = this.targetFrames + e * r), (this.targetBytesNetwork = this.targetBytesNetwork + (t / 8) * r), (this.targetBytesMax = this.targetBytesMax + (n / 8) * r), (this.outboundBytesAvailable = this.outboundBytesAvailable + (i / 8) * r), this.targetBitrateHistogram.addSample(t), this.outboundBandwidthSurplus.addSample(i - t);
    }
    constructor(...e) {
        super(...e),
            s(this, 'encoderBuckets', {
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
            s(this, 'encoderCodec', 'UNKNOWN'),
            s(this, 'targetFrames', 0),
            s(this, 'targetBytesMax', 0),
            s(this, 'targetBytesNetwork', 0),
            s(this, 'targetBitrateHistogram', new r.b()),
            s(this, 'outboundBytesAvailable', 0),
            s(this, 'outboundBandwidthSurplus', new r.b()),
            s(this, 'averageEncodeTime', 0),
            s(this, 'vmafScoreSum', 0),
            s(this, 'vmafScoreNum', 0),
            s(this, 'vmafHistogram', new r.b()),
            s(this, 'psnrDbSum', 0),
            s(this, 'psnrDbNum', 0),
            s(this, 'psnrHistogram', new r.b()),
            s(this, 'qualityDecodeErrors', 0),
            s(this, 'qualityDecoderReboots', 0),
            s(this, 'qualityScoreErrors', 0),
            s(this, 'qualityFrameDrops', 0),
            s(this, 'qualitySizeMismatches', 0),
            s(this, 'outboundSinkWantSum', 0),
            s(this, 'outboundSinkWantNum', 0),
            s(this, 'framesDroppedRateLimiter', null),
            s(this, 'framesDroppedEncoderQueue', null),
            s(this, 'framesDroppedCongestionWindow', null),
            s(this, 'framesDroppedEncoder', null);
    }
}
