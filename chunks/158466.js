r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(724458);
var a = r(653041);
var o = r(878604);
function s(e) {
    return e / 32768;
}
function l(e) {
    var n, r, i, a, o, s, l, u, c, d, f, p, h, _, m, g, E, v, y, b, I;
    let T = (null !== (d = null == e ? void 0 : e.headerBytes) && void 0 !== d ? d : 0) + (null !== (f = null == e ? void 0 : e.payloadBytes) && void 0 !== f ? f : 0) + (null !== (p = null == e ? void 0 : e.paddingBytes) && void 0 !== p ? p : 0);
    return (null !== (h = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.headerBytes) && void 0 !== h ? h : 0) + (null !== (_ = null == e ? void 0 : null === (r = e.fec) || void 0 === r ? void 0 : r.payloadBytes) && void 0 !== _ ? _ : 0) + (null !== (m = null == e ? void 0 : null === (i = e.fec) || void 0 === i ? void 0 : i.paddingBytes) && void 0 !== m ? m : 0) + (null !== (g = null == e ? void 0 : null === (a = e.retransmitted) || void 0 === a ? void 0 : a.headerBytes) && void 0 !== g ? g : 0) + (null !== (E = null == e ? void 0 : null === (o = e.retransmitted) || void 0 === o ? void 0 : o.payloadBytes) && void 0 !== E ? E : 0) + (null !== (v = null == e ? void 0 : null === (s = e.retransmitted) || void 0 === s ? void 0 : s.paddingBytes) && void 0 !== v ? v : 0) + (null !== (y = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.headerBytes) && void 0 !== y ? y : 0) + (null !== (b = null == e ? void 0 : null === (u = e.transmitted) || void 0 === u ? void 0 : u.payloadBytes) && void 0 !== b ? b : 0) + (null !== (I = null == e ? void 0 : null === (c = e.transmitted) || void 0 === c ? void 0 : c.paddingBytes) && void 0 !== I ? I : 0) + T;
}
function u(e) {
    var n, r, i, a, o, s, l;
    let u = null !== (a = null == e ? void 0 : e.packets) && void 0 !== a ? a : 0;
    return (null !== (o = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.packets) && void 0 !== o ? o : 0) + (null !== (s = null == e ? void 0 : null === (r = e.retransmitted) || void 0 === r ? void 0 : r.packets) && void 0 !== s ? s : 0) + (null !== (l = null == e ? void 0 : null === (i = e.transmitted) || void 0 === i ? void 0 : i.packets) && void 0 !== l ? l : 0) + u;
}
function c(e) {
    return null != e
        ? {
              last: Math.round(1000 * e.last),
              mean: Math.round(1000 * e.mean),
              p75: Math.round(1000 * e.p75),
              p95: Math.round(1000 * e.p95),
              p99: Math.round(1000 * e.p99),
              max: Math.round(1000 * e.max)
          }
        : null;
}
function d(e) {
    let n = {};
    for (let r in e) n[r] = c(e[r]);
    return n;
}
function f(e, n) {
    var r, i, a, s, c, d, f, p, h, _, m, g, E, v, y, b, I, T, S, A, C, N, R, O, D, L, x;
    let w = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
    if (null == w) return;
    let P = e.substreams.reduce((e, n) => e + l(n.rtpStats), 0),
        M = e.substreams.reduce((e, n) => e + u(n.rtpStats), 0);
    return {
        type: 'video',
        ssrc: w.ssrc,
        sinkWant: (0, o.f)(n, w.ssrc, !0),
        sinkWantAsInt: (0, o.F)(n, w.ssrc),
        codec: {
            id: e.codecPayloadType,
            name: e.codecName
        },
        keyFrameInterval: e.keyFrameInterval,
        bytesSent: P,
        packetsSent: M,
        packetsLost: null !== (b = null === (r = w.rtcpStats) || void 0 === r ? void 0 : r.packetsLost) && void 0 !== b ? b : 0,
        fractionLost: null !== (I = null === (i = w.rtcpStats) || void 0 === i ? void 0 : i.fractionLost) && void 0 !== I ? I : 0,
        bitrate: e.mediaBitrate,
        bitrateTarget: e.targetMediaBitrate,
        encoderImplementationName: e.encoderImplementationName,
        encodeUsage: e.encodeUsage,
        averageEncodeTime: e.avgEncodeTime,
        resolution: {
            height: w.height,
            width: w.width
        },
        framesSent: w.frameCounts.keyFrames + w.frameCounts.deltaFrames,
        keyFramesEncoded: w.frameCounts.keyFrames,
        framesEncoded: e.framesEncoded,
        frameRateInput: e.inputFrameRate,
        frameRateEncode: e.encodeFrameRate,
        firCount: null !== (T = null === (a = w.rtcpStats) || void 0 === a ? void 0 : a.firPackets) && void 0 !== T ? T : 0,
        nackCount: null !== (S = null === (s = w.rtcpStats) || void 0 === s ? void 0 : s.nackPackets) && void 0 !== S ? S : 0,
        pliCount: null !== (A = null === (c = w.rtcpStats) || void 0 === c ? void 0 : c.pliPackets) && void 0 !== A ? A : 0,
        qpSum: e.qpSum,
        bandwidthLimitedResolution: e.bwLimitedResolution,
        framesDroppedRateLimiter: e.framesDroppedRateLimiter,
        framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
        framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
        framesDroppedEncoder: e.framesDroppedEncoder,
        cpuLimitedResolution: e.cpuLimitedResolution,
        encoderQualityVmaf: null !== (C = null === (d = w.encoderQualityStats) || void 0 === d ? void 0 : d.imageQualityVmaf_v061) && void 0 !== C ? C : void 0,
        encoderQualityPsnr: null !== (N = null === (f = w.encoderQualityStats) || void 0 === f ? void 0 : f.imageQualityWebrtcPsnrDb) && void 0 !== N ? N : void 0,
        qualityDecodeErrors: null !== (R = null === (p = w.encoderQualityStats) || void 0 === p ? void 0 : p.decodeErrors) && void 0 !== R ? R : void 0,
        qualityDecoderReboots: null !== (O = null === (h = w.encoderQualityStats) || void 0 === h ? void 0 : h.decoderReboots) && void 0 !== O ? O : void 0,
        qualityScoreErrors: null !== (D = null === (_ = w.encoderQualityStats) || void 0 === _ ? void 0 : _.scoreErrors) && void 0 !== D ? D : void 0,
        qualityFrameDrops: null !== (L = null === (m = w.encoderQualityStats) || void 0 === m ? void 0 : m.frameDrops) && void 0 !== L ? L : void 0,
        qualitySizeMismatches: null !== (x = null === (g = w.encoderQualityStats) || void 0 === g ? void 0 : g.sizeMismatches) && void 0 !== x ? x : void 0,
        filter: e.filter,
        passthroughCount: e.passthroughCount,
        encryptSuccessCount: e.encryptSuccessCount,
        encryptFailureCount: e.encryptFailureCount,
        encryptDuration: e.encryptDuration,
        encryptAttempts: e.encryptAttempts,
        encryptMaxAttempts: e.encryptMaxAttempts,
        encryptMissingKeyCount: e.encryptMissingKeyCount,
        hqSimulcastStreamEncoded: e.hqSimulcastStreamEncoded,
        lqSimulcastStreamEncoded: e.lqSimulcastStreamEncoded,
        bandwidthLimitedFrameRate: e.bwLimitedFrameRate,
        freezeCount: null === (E = w.encoderQualityStats) || void 0 === E ? void 0 : E.freezeCount,
        totalFreezesDuration: null === (v = w.encoderQualityStats) || void 0 === v ? void 0 : v.totalFreezesDuration,
        totalFramesDuration: null === (y = w.encoderQualityStats) || void 0 === y ? void 0 : y.totalFramesDuration
    };
}
function p(e, n, r, i) {
    var a, s;
    let c = l(e.rtpStats),
        f = u(e.rtpStats);
    return {
        type: 'video',
        ssrc: e.ssrc,
        sinkWant: (0, o.f)(n, e.ssrc, !0),
        sinkWantAsInt: (0, o.F)(n, e.ssrc),
        sinkWantLocal: (0, o.f)(r, e.ssrc, !0),
        sinkWantLocalAsInt: (0, o.F)(r, e.ssrc),
        codec: {
            id: e.codecPayloadType,
            name: e.codecName
        },
        bytesReceived: c,
        packetsReceived: f,
        packetsLost: null !== (a = e.rtpStats.packetsLost) && void 0 !== a ? a : e.rtcpStats.packetsLost,
        fractionLost: e.rtcpStats.fractionLost,
        bitrate: e.totalBitrate,
        jitterBuffer: e.jitterBuffer,
        currentDelay: e.currentDelay,
        targetDelay: e.targetDelay,
        minPlayoutDelay: e.minPlayoutDelay,
        renderDelay: e.renderDelay,
        averageDecodeTime: e.decode,
        resolution: {
            height: e.height,
            width: e.width
        },
        decoderImplementationName: e.decoderImplementationName,
        framesDecoded: e.framesDecoded,
        framesDropped: e.framesDropped,
        framesDecodeErrors: e.framesDecodeErrors,
        framesReceived: e.frameCounts.keyFrames + e.frameCounts.deltaFrames,
        networkFramesDropped: null !== (s = e.networkFramesDropped) && void 0 !== s ? s : 0,
        keyFramesDecoded: e.frameCounts.keyFrames,
        frameRateDecode: e.decodeFrameRate,
        frameRateNetwork: e.networkFrameRate,
        frameRateRender: e.renderFrameRate,
        firCount: e.rtcpStats.firPackets,
        nackCount: e.rtcpStats.nackPackets,
        pliCount: e.rtcpStats.pliPackets,
        qpSum: e.qpSum,
        freezeCount: e.freezeCount,
        pauseCount: e.pauseCount,
        totalFreezesDuration: e.totalFreezesDuration,
        totalPausesDuration: e.totalPausesDuration,
        totalFramesDuration: e.totalFramesDuration,
        sumOfSquaredFramesDurations: e.sumOfSquaredFramesDurations,
        passthroughCount: e.passthroughCount,
        decryptSuccessCount: e.decryptSuccessCount,
        decryptFailureCount: e.decryptFailureCount,
        decryptDuration: e.decryptDuration,
        decryptAttempts: e.decryptAttempts,
        decryptMissingKeyCount: e.decryptMissingKeyCount,
        decryptInvalidNonceCount: e.decryptInvalidNonceCount,
        ...(null != i
            ? d({
                  videoJitterBuffer: i.videoJitterBuffer,
                  videoJitterDelay: i.videoJitterDelay,
                  videoJitterTarget: i.videoJitterTarget
              })
            : {})
    };
}
function h(e, n, r, i) {
    var a, u, c, h, _;
    let m = null,
        g = null,
        E = 'string' == typeof n ? JSON.parse(n) : n,
        v = [];
    if (null != E.outbound) {
        let { audio: e, video: n, videos: i } = E.outbound;
        if (
            (null != e &&
                ((g = (null != g ? g : 0) + e.bytesSent),
                v.push({
                    type: 'audio',
                    ssrc: e.ssrc,
                    sinkWant: (0, o.f)(r, e.ssrc, !1),
                    sinkWantAsInt: (0, o.F)(r, e.ssrc),
                    codec: {
                        id: e.codecPayloadType,
                        name: e.codecName
                    },
                    bytesSent: e.bytesSent,
                    packetsSent: e.packetsSent,
                    packetsLost: Math.max(0, e.packetsLost),
                    fractionLost: 100 * e.fractionLost,
                    audioLevel: s(e.audioLevel),
                    audioDetected: e.speaking,
                    framesCaptured: e.framesCaptured,
                    framesRendered: e.framesRendered,
                    noiseCancellerFrames: e.noiseCancellerFrames,
                    noiseCancellerProcessTime: e.noiseCancellerProcessTime,
                    voiceActivityDetectorProcessTime: e.voiceActivityDetectorProcessTime,
                    passthroughCount: e.passthroughCount,
                    encryptSuccessCount: e.encryptSuccessCount,
                    encryptFailureCount: e.encryptFailureCount,
                    encryptDuration: e.encryptDuration,
                    encryptAttempts: e.encryptAttempts,
                    encryptMaxAttempts: e.encryptMaxAttempts,
                    encryptMissingKeyCount: e.encryptMissingKeyCount
                })),
            null != i)
        )
            i.forEach((e) => {
                let n = f(e, r);
                null != n && ((g = (null != g ? g : 0) + n.bytesSent), v.push(n));
            });
        else if (null != n) {
            let e = f(n, r);
            null != e && ((g = (null != g ? g : 0) + e.bytesSent), v.push(e));
        }
    }
    let y = {};
    null != E.inbound &&
        E.inbound.forEach((e) => {
            let { id: n, audio: a, video: u, videos: c, playout: f } = e;
            if (
                ((y[n] = []),
                null != a &&
                    ((m = (null != m ? m : 0) + a.bytesReceived),
                    y[n].push({
                        type: 'audio',
                        ssrc: a.ssrc,
                        sinkWant: (0, o.f)(r, a.ssrc, !1),
                        sinkWantAsInt: (0, o.F)(r, a.ssrc),
                        codec: {
                            id: a.codecPayloadType,
                            name: a.codecName
                        },
                        bytesReceived: a.bytesReceived,
                        packetsReceived: a.packetsReceived,
                        packetsLost: a.packetsLost,
                        fractionLost: 100 * a.fractionLost,
                        fecPacketsReceived: a.fecPacketsReceived,
                        fecPacketsDiscarded: a.fecPacketsDiscarded,
                        audioLevel: s(a.audioLevel),
                        audioDetected: a.speaking,
                        jitter: a.jitter,
                        jitterBuffer: a.jitterBuffer,
                        jitterBufferPreferred: a.jitterBufferPreferred,
                        decodingCNG: a.decodingCNG,
                        decodingMutedOutput: a.decodingMutedOutput,
                        decodingNormal: a.decodingNormal,
                        decodingPLC: a.decodingPLC,
                        decodingPLCCNG: a.decodingPLCCNG,
                        nackCount: a.nackCount,
                        accelerateRate: 100 * a.accelerateRate,
                        expandRate: 100 * a.expandRate,
                        preemptiveExpandRate: 100 * a.preemptiveExpandRate,
                        speechExpandRate: 100 * a.speechExpandRate,
                        secondaryDecodedRate: 100 * a.secondaryDecodedRate,
                        opSilence: a.opSilence,
                        opNormal: a.opNormal,
                        opMerge: a.opMerge,
                        opExpand: a.opExpand,
                        opAccelerate: a.opAccelerate,
                        opPreemptiveExpand: a.opPreemptiveExpand,
                        opCNG: a.opCNG,
                        delayEstimate: a.delayEstimate,
                        passthroughCount: a.passthroughCount,
                        decryptSuccessCount: a.decryptSuccessCount,
                        decryptFailureCount: a.decryptFailureCount,
                        decryptDuration: a.decryptDuration,
                        decryptAttempts: a.decryptAttempts,
                        decryptMissingKeyCount: a.decryptMissingKeyCount,
                        decryptInvalidNonceCount: a.decryptInvalidNonceCount,
                        ...(null != f
                            ? d({
                                  audioJitterBuffer: f.audioJitterBuffer,
                                  audioJitterDelay: f.audioJitterDelay,
                                  audioJitterTarget: f.audioJitterTarget,
                                  audioPlayoutUnderruns: f.audioPlayoutUnderruns,
                                  relativeReceptionDelay: f.relativeReceptionDelay,
                                  relativePlayoutDelay: f.relativePlayoutDelay
                              })
                            : {})
                    })),
                null != c)
            )
                c.forEach((e) => {
                    let a = p(e, r, i, f);
                    if (null != a) {
                        let r = l(e.rtpStats);
                        (m = (null != m ? m : 0) + r), y[n].push(a);
                    }
                });
            else if (null != u) {
                let e = p(u, r, i, f);
                if (null != e) {
                    let r = l(u.rtpStats);
                    (m = (null != m ? m : 0) + r), y[n].push(e);
                }
            }
        });
    let { transport: b, clips: I } = E,
        T = {};
    null != b && ((T.availableOutgoingBitrate = b.sendBandwidth), (T.ping = b.rtt), (T.decryptionFailures = b.decryptionFailures), null != b.routingFailures && (T.routingFailures = b.routingFailures), (T.localAddress = b.localAddress), (T.pacerDelay = b.pacerDelay), null != b.receiverReports && (T.receiverReports = b.receiverReports), (T.receiverBitrateEstimate = b.receiverBitrateEstimate), (T.outboundBitrateEstimate = b.outboundBitrateEstimate), (T.inboundBitrateEstimate = null !== (a = b.inboundBitrateEstimate) && void 0 !== a ? a : 0), (T.packetsReceived = b.packetsReceived), (T.packetsSent = b.packetsSent), null != b.secureFramesProtocolVersion && (T.secureFramesProtocolVersion = b.secureFramesProtocolVersion)), ((null == b ? void 0 : b.bytesReceived) != null || (null != m && !Number.isNaN(m))) && (T.bytesReceived = null !== (c = null !== (u = null == b ? void 0 : b.bytesReceived) && void 0 !== u ? u : m) && void 0 !== c ? c : void 0), ((null == b ? void 0 : b.bytesSent) != null || (null != g && !Number.isNaN(g))) && (T.bytesSent = null !== (_ = null !== (h = null == b ? void 0 : b.bytesSent) && void 0 !== h ? h : g) && void 0 !== _ ? _ : void 0);
    let { screenshare: S, camera: A, audioDevice: C } = E;
    return {
        mediaEngineConnectionId: e,
        transport: T,
        screenshare: S,
        camera:
            null != A
                ? {
                      capturedFramesDropped: A.capturedFramesDropped,
                      capturedFramesCount: A.capturedFramesCount,
                      capturedFramesMean: A.capturedFramesMean,
                      capturedFramesStdev: A.capturedFramesStdev
                  }
                : null,
        clips: I,
        audioDevice: C,
        rtp: {
            inbound: y,
            outbound: v
        }
    };
}
