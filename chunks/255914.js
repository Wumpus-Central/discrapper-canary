r.d(n, {
    Mq: function () {
        return s;
    },
    Su: function () {
        return a;
    },
    gr: function () {
        return o;
    },
    lG: function () {
        return y;
    },
    m7: function () {
        return S;
    },
    nt: function () {
        return A;
    },
    u7: function () {
        return i;
    },
    z4: function () {
        return T;
    }
});
var i,
    a,
    o,
    s,
    l = r(47120);
var u = r(653041);
var c = r(379649),
    d = r(909766),
    f = r(179654);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000],
    _ = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    m = [720, 480, 360],
    g = ['framesCodec', 'framesNetwork', 'packets', 'packetsLost', 'framesDropped', 'framesCodecError', 'bytes', 'nackCount', 'pliCount', 'qpSum', 'freezeCount', 'pauseCount', 'totalFreezesDuration', 'totalPausesDuration', 'totalFramesDuration', 'keyframes', 'passthroughCount', 'cryptorSuccessCount', 'cryptorFailureCount', 'cryptorDuration', 'cryptorAttempts', 'cryptorMissingKeyCount', 'cryptorInvalidNonceCount', 'qualityDecodeErrors', 'qualityDecoderReboots', 'qualityScoreErrors', 'qualityFrameDrops', 'qualitySizeMismatches'];
!(function (e) {
    (e.H264 = 'H264'), (e.H265 = 'H265'), (e.VP8 = 'VP8'), (e.VP9 = 'VP9'), (e.AV1 = 'AV1'), (e.UNKNOWN = 'UNKNOWN');
})(i || (i = {})),
    !(function (e) {
        (e.NVIDIA_CUDA = 'nvidia_cuda'), (e.NVIDIA_DIRECT_3D = 'nvidia_direct_3d'), (e.OPENH264 = 'openh264'), (e.VIDEOTOOLBOX = 'videotoolbox'), (e.AMD_DIRECT_3D = 'amd_direct_3d'), (e.INTEL = 'intel'), (e.INTEL_DIRECT_3D = 'intel_direct_3d'), (e.VP8_LIBVPX = 'vp8_libvpx'), (e.UNCATEGORIZED = 'uncategorized'), (e.UNKNOWN = 'unknown');
    })(a || (a = {})),
    !(function (e) {
        (e.VIDEOTOOLBOX = 'videotoolbox'), (e.VP8_LIBVPX = 'vp8_libvpx'), (e.ELECTRON = 'electron'), (e.FFMPEG = 'ffmpeg'), (e.DAV1D = 'dav1d'), (e.UNCATEGORIZED = 'uncategorized'), (e.UNKNOWN = 'unknown');
    })(o || (o = {}));
let E = Object.freeze({
        'nvidia: cuda': 'nvidia_cuda',
        'nvidia: direct3d': 'nvidia_direct_3d',
        'amd: direct3d': 'amd_direct_3d',
        'intel: direct3d': 'intel_direct_3d',
        intel: 'intel',
        VideoToolbox: 'videotoolbox',
        OpenH264: 'openh264',
        libvpx: 'vp8_libvpx'
    }),
    v = Object.freeze({
        VideoToolbox: 'videotoolbox',
        libvpx: 'vp8_libvpx',
        electron: 'electron',
        ffmpeg: 'ffmpeg',
        dav1d: 'dav1d'
    });
function y(e) {
    if (null == e) return 'unknown';
    for (let n of Object.keys(E)) if (e.includes(n)) return E[n];
    return 'uncategorized';
}
function b(e) {
    if (null == e) return 'unknown';
    for (let n of Object.keys(v)) if (e.includes(n)) return v[n];
    return 'uncategorized';
}
function I(e) {
    if (null == e) return 'UNKNOWN';
    if ('H264' === (e = e.toUpperCase())) return 'H264';
    if ('H265' === e) return 'H265';
    if ('VP8' === e) return 'VP8';
    else if ('VP9' === e) return 'VP9';
    else if ('AV1' === e || 'AV1X' === e) return 'AV1';
    else return 'UNKNOWN';
}
!(function (e) {
    (e[(e.None = 0)] = 'None'), (e[(e.ClientSideDisableVideo = 1)] = 'ClientSideDisableVideo'), (e[(e.SenderStopped = 2)] = 'SenderStopped');
})(s || (s = {}));
class T {
    static parseInboundStats(e, n) {
        var r, i, a, o, s, l, u, c, d, f;
        let p = new T();
        return null == e ? p : ((p.bytes = e.bytesReceived), (p.framesCodec = e.framesDecoded), (p.framesCodecError = null !== (r = e.framesDecodeErrors) && void 0 !== r ? r : null), (p.framesNetwork = e.framesReceived), (p.packets = e.packetsReceived), (p.packetsLost = e.packetsLost), (p.framesDropped = e.framesDropped), (p.resolution = null != e.resolution ? e.resolution.height : 0), (p.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0), (p.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0), (p.timestamp = n), (p.nackCount = e.nackCount), (p.pliCount = e.pliCount), (p.decoder = b(e.decoderImplementationName)), (p.codecType = I(e.codec.name)), (p.qpSum = 0), (p.freezeCount = e.freezeCount), (p.pauseCount = e.pauseCount), (p.totalFreezesDuration = e.totalFreezesDuration), (p.totalPausesDuration = e.totalPausesDuration), (p.totalFramesDuration = e.totalFramesDuration), (p.keyframes = null !== (i = e.keyFramesDecoded) && void 0 !== i ? i : null), (p.passthroughCount = null !== (a = e.passthroughCount) && void 0 !== a ? a : 0), (p.cryptorSuccessCount = null !== (o = e.decryptSuccessCount) && void 0 !== o ? o : 0), (p.cryptorFailureCount = null !== (s = e.decryptFailureCount) && void 0 !== s ? s : 0), (p.cryptorDuration = null !== (l = e.decryptDuration) && void 0 !== l ? l : 0), (p.cryptorAttempts = null !== (u = e.decryptAttempts) && void 0 !== u ? u : 0), (p.cryptorMissingKeyCount = null !== (c = e.decryptMissingKeyCount) && void 0 !== c ? c : 0), (p.cryptorInvalidNonceCount = null !== (d = e.decryptInvalidNonceCount) && void 0 !== d ? d : 0), (p.localWant = null !== (f = e.sinkWantLocalAsInt) && void 0 !== f ? f : 0), p);
    }
    static parseOutboundStats(e, n) {
        var r, i, a, o, s, l, u, c, d, f, p, h, _, m, g, E, v, b, S, A, C, N, R, O, D;
        let x = new T();
        return null == e
            ? x
            : {
                  bytes: e.bytesSent,
                  framesCodec: e.framesEncoded,
                  framesCodecError: null,
                  framesNetwork: null !== (r = e.framesSent) && void 0 !== r ? r : 0,
                  packets: e.packetsSent,
                  packetsLost: null !== (i = e.packetsLost) && void 0 !== i ? i : 0,
                  framesDropped: 0,
                  resolution: null != e.resolution ? e.resolution.height : 0,
                  minorResolution: null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0,
                  majorResolution: null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0,
                  timestamp: n,
                  encoder: y(e.encoderImplementationName),
                  decoder: null,
                  codecType: I(e.codec.name),
                  nackCount: e.nackCount,
                  pliCount: e.pliCount,
                  qpSum: e.qpSum,
                  freezeCount: null !== (a = e.freezeCount) && void 0 !== a ? a : 0,
                  pauseCount: 0,
                  totalFreezesDuration: null !== (o = e.totalFreezesDuration) && void 0 !== o ? o : 0,
                  totalPausesDuration: 0,
                  totalFramesDuration: null !== (s = e.totalFramesDuration) && void 0 !== s ? s : 0,
                  outboundSinkWant: null !== (l = e.sinkWantAsInt) && void 0 !== l ? l : null,
                  vmafScore: null !== (u = e.encoderQualityVmaf) && void 0 !== u ? u : null,
                  qualityDecodeErrors: null !== (c = e.qualityDecodeErrors) && void 0 !== c ? c : 0,
                  qualityDecoderReboots: null !== (d = e.qualityDecoderReboots) && void 0 !== d ? d : 0,
                  qualityScoreErrors: null !== (f = e.qualityScoreErrors) && void 0 !== f ? f : 0,
                  qualityFrameDrops: null !== (p = e.qualityFrameDrops) && void 0 !== p ? p : 0,
                  qualitySizeMismatches: null !== (h = e.qualitySizeMismatches) && void 0 !== h ? h : 0,
                  psnrDb: null !== (_ = e.encoderQualityPsnr) && void 0 !== _ ? _ : null,
                  keyframes: null !== (m = e.keyFramesEncoded) && void 0 !== m ? m : null,
                  framesDroppedRateLimiter: null !== (g = e.framesDroppedRateLimiter) && void 0 !== g ? g : null,
                  framesDroppedEncoderQueue: null !== (E = e.framesDroppedEncoderQueue) && void 0 !== E ? E : null,
                  framesDroppedCongestionWindow: null !== (v = e.framesDroppedCongestionWindow) && void 0 !== v ? v : null,
                  framesDroppedEncoder: null !== (b = e.framesDroppedEncoder) && void 0 !== b ? b : null,
                  passthroughCount: null !== (S = e.passthroughCount) && void 0 !== S ? S : 0,
                  cryptorSuccessCount: null !== (A = e.encryptSuccessCount) && void 0 !== A ? A : 0,
                  cryptorFailureCount: null !== (C = e.encryptFailureCount) && void 0 !== C ? C : 0,
                  cryptorDuration: null !== (N = e.encryptDuration) && void 0 !== N ? N : 0,
                  cryptorAttempts: null !== (R = e.encryptAttempts) && void 0 !== R ? R : 0,
                  cryptorMaxAttempts: null !== (O = e.encryptMaxAttempts) && void 0 !== O ? O : 0,
                  cryptorMissingKeyCount: null !== (D = e.encryptMissingKeyCount) && void 0 !== D ? D : 0,
                  cryptorInvalidNonceCount: 0,
                  localWant: 0
              };
    }
    constructor() {
        p(this, 'bytes', 0), p(this, 'framesCodec', 0), p(this, 'framesCodecError', null), p(this, 'framesNetwork', 0), p(this, 'resolution', 0), p(this, 'minorResolution', 0), p(this, 'majorResolution', 0), p(this, 'timestamp', 0), p(this, 'packets', 0), p(this, 'packetsLost', 0), p(this, 'framesDropped', 0), p(this, 'nackCount', 0), p(this, 'pliCount', 0), p(this, 'encoder', null), p(this, 'decoder', null), p(this, 'codecType', null), p(this, 'qpSum', 0), p(this, 'freezeCount', 0), p(this, 'pauseCount', 0), p(this, 'totalFreezesDuration', 0), p(this, 'totalPausesDuration', 0), p(this, 'totalFramesDuration', 0), p(this, 'vmafScore', null), p(this, 'psnrDb', null), p(this, 'outboundSinkWant', null), p(this, 'keyframes', null), p(this, 'framesDroppedRateLimiter', null), p(this, 'framesDroppedEncoderQueue', null), p(this, 'framesDroppedCongestionWindow', null), p(this, 'framesDroppedEncoder', null), p(this, 'passthroughCount', 0), p(this, 'cryptorSuccessCount', 0), p(this, 'cryptorFailureCount', 0), p(this, 'cryptorDuration', 0), p(this, 'cryptorAttempts', 0), p(this, 'cryptorMaxAttempts', 0), p(this, 'cryptorMissingKeyCount', 0), p(this, 'cryptorInvalidNonceCount', 0), p(this, 'qualityDecodeErrors', 0), p(this, 'qualityDecoderReboots', 0), p(this, 'qualityScoreErrors', 0), p(this, 'qualityFrameDrops', 0), p(this, 'qualitySizeMismatches', 0), p(this, 'localWant', 0);
    }
}
class S {
    get isVideoStopped() {
        return 0 !== this.videoStoppedReason;
    }
    get videoStoppedDuration() {
        return this.videoStoppedWatch.elapsed();
    }
    collectAggregationStats(e, n) {
        for (let i of g) {
            var r;
            let a = e[i];
            if (null === a) continue;
            let o = null !== (r = n[i]) && void 0 !== r ? r : 0;
            o > a ? (this.aggregatedProperties[i] += a) : (this.aggregatedProperties[i] += a - o);
        }
        this.aggregationDuration += e.timestamp - n.timestamp;
    }
    setVideoStopped(e, n) {
        if (e) {
            (this.videoStoppedReason |= n), this.videoStoppedWatch.start();
            return;
        }
        (this.videoStoppedReason &= ~n), 0 === this.videoStoppedReason && (this.statsWindow.splice(0), this.videoStoppedWatch.stop());
    }
    appendAndIncrementStats(e) {
        if (this.isVideoStopped) return;
        if ((this.statsWindow.push(e), this.statsWindow.length < 2)) return;
        let n = this.statsWindow[this.statsWindow.length - 1],
            r = this.statsWindow[this.statsWindow.length - 2];
        this.collectAggregationStats(n, r);
        let { bytes: i, framesCodec: a, timestamp: o, resolution: s, minorResolution: l, majorResolution: u, encoder: c, decoder: d, codecType: f, localWant: p } = n,
            { timestamp: g } = r,
            E = (o - g) / 1000;
        if (((this.intervalTotal += E), (this.resolutionTotal += s * E), (this.minorResolutionTotal += l * E), (this.majorResolutionTotal += u * E), (this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, n.cryptorMaxAttempts)), null != c && null != f && 'encoderBuckets' in this)) {
            let r = this;
            (r.encoderBuckets[c] += E), (r.codecBuckets[f] += E), null != n.codecType && 'UNKNOWN' !== n.codecType && (r.encoderCodec = n.codecType), null != e.vmafScore && e.vmafScore >= 0 && ((r.vmafScoreNum += 1), (r.vmafScoreSum += e.vmafScore), r.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && e.psnrDb >= 0 && ((r.psnrDbNum += 1), (r.psnrDbSum += e.psnrDb), r.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && ((r.outboundSinkWantNum += 1), (r.outboundSinkWantSum += e.outboundSinkWant));
        }
        if (null != d && null != f && 'decoderBuckets' in this) {
            let e = this;
            (e.decoderBuckets[d] += E), (e.codecBuckets[f] += E), null != n.codecType && 'UNKNOWN' !== n.codecType && (e.decoderCodec = n.codecType);
        }
        if (this.statsWindow.length < 6) return;
        let { bytes: v, framesCodec: y, timestamp: b } = this.statsWindow[this.statsWindow.length - 3];
        m.forEach((e) => {
            s <= e && (this.resolutionBuckets[e] += E);
        });
        let I = (o - b) / 1000,
            T = ((i - v) * 8) / I,
            S = (a - y) / I;
        h.forEach((e) => {
            T <= e && (this.bitrateBuckets[e] += E);
        }),
            _.forEach((e) => {
                S <= e && (this.fpsBuckets[e] += E);
            }),
            this.resolutionHistogram.addSample(s),
            this.bitrateHistogram.addSample(T),
            this.fpsHistogram.addSample(S),
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
        for (let [n, r] of Object.entries(this.codecBuckets)) r > 0 && e.add(n);
        return e;
    }
    constructor(e) {
        p(this, 'decoderBuckets', {
            vp8_libvpx: 0,
            dav1d: 0,
            ffmpeg: 0,
            electron: 0,
            videotoolbox: 0,
            uncategorized: 0,
            unknown: 0
        }),
            p(this, 'codecBuckets', {
                H264: 0,
                H265: 0,
                VP8: 0,
                VP9: 0,
                AV1: 0,
                UNKNOWN: 0
            }),
            p(this, 'statsWindow', []),
            p(this, 'fpsHistogram', new d.b()),
            p(this, 'bitrateHistogram', new d.b()),
            p(this, 'inboundBitrateEstimateHistogram', new d.b()),
            p(this, 'resolutionHistogram', new d.b()),
            p(this, 'localWantHistogram', new d.b()),
            p(this, 'systemResources', new f.Z()),
            p(this, 'decoderCodec', 'UNKNOWN'),
            p(this, 'startTime', void 0),
            p(this, 'timeToFirstFrame', void 0),
            p(this, 'aggregatedProperties', {
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
            p(this, 'aggregationDuration', 0),
            p(this, 'bitrateBuckets', {}),
            p(this, 'fpsBuckets', {}),
            p(this, 'resolutionBuckets', {}),
            p(this, 'resolutionTotal', 0),
            p(this, 'minorResolutionTotal', 0),
            p(this, 'majorResolutionTotal', 0),
            p(this, 'intervalTotal', 0),
            p(this, 'cryptorMaxAttempts', 0),
            p(this, 'videoStoppedWatch', void 0),
            p(this, 'videoStoppedReason', 0),
            (this.startTime = e.now()),
            (this.videoStoppedWatch = new c.G9(e)),
            h.forEach((e) => {
                this.bitrateBuckets[e] = 0;
            }),
            _.forEach((e) => {
                this.fpsBuckets[e] = 0;
            }),
            m.forEach((e) => {
                this.resolutionBuckets[e] = 0;
            });
    }
}
class A extends S {
    appendTargetRates(e, n, r, i) {
        if (this.statsWindow.length < 2) return;
        (e = null != e ? e : 0), (n = null != n ? n : 0), (r = null != r ? r : 0), (i = null != i ? i : 0);
        let a = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1000;
        (this.targetFrames = this.targetFrames + e * a), (this.targetBytesNetwork = this.targetBytesNetwork + (n / 8) * a), (this.targetBytesMax = this.targetBytesMax + (r / 8) * a), (this.outboundBytesAvailable = this.outboundBytesAvailable + (i / 8) * a), this.targetBitrateHistogram.addSample(n), this.outboundBandwidthSurplus.addSample(i - n);
    }
    constructor(...e) {
        super(...e),
            p(this, 'encoderBuckets', {
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
            p(this, 'encoderCodec', 'UNKNOWN'),
            p(this, 'targetFrames', 0),
            p(this, 'targetBytesMax', 0),
            p(this, 'targetBytesNetwork', 0),
            p(this, 'targetBitrateHistogram', new d.b()),
            p(this, 'outboundBytesAvailable', 0),
            p(this, 'outboundBandwidthSurplus', new d.b()),
            p(this, 'averageEncodeTime', 0),
            p(this, 'vmafScoreSum', 0),
            p(this, 'vmafScoreNum', 0),
            p(this, 'vmafHistogram', new d.b()),
            p(this, 'psnrDbSum', 0),
            p(this, 'psnrDbNum', 0),
            p(this, 'psnrHistogram', new d.b()),
            p(this, 'qualityDecodeErrors', 0),
            p(this, 'qualityDecoderReboots', 0),
            p(this, 'qualityScoreErrors', 0),
            p(this, 'qualityFrameDrops', 0),
            p(this, 'qualitySizeMismatches', 0),
            p(this, 'outboundSinkWantSum', 0),
            p(this, 'outboundSinkWantNum', 0),
            p(this, 'framesDroppedRateLimiter', null),
            p(this, 'framesDroppedEncoderQueue', null),
            p(this, 'framesDroppedCongestionWindow', null),
            p(this, 'framesDroppedEncoder', null);
    }
}
