n.d(t, { Z: () => d }), n(724458), n(653041);
var i = n(878604);
function r(e) {
    return e / 32768;
}
function a(e) {
    var t, n, i, r, a, s, o, l, u, c, d, f, _, p, h, m, g, E, v, y, I;
    let T = (null !== (c = null == e ? void 0 : e.headerBytes) && void 0 !== c ? c : 0) + (null !== (d = null == e ? void 0 : e.payloadBytes) && void 0 !== d ? d : 0) + (null !== (f = null == e ? void 0 : e.paddingBytes) && void 0 !== f ? f : 0);
    return (null !== (_ = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.headerBytes) && void 0 !== _ ? _ : 0) + (null !== (p = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.payloadBytes) && void 0 !== p ? p : 0) + (null !== (h = null == e ? void 0 : null === (i = e.fec) || void 0 === i ? void 0 : i.paddingBytes) && void 0 !== h ? h : 0) + (null !== (m = null == e ? void 0 : null === (r = e.retransmitted) || void 0 === r ? void 0 : r.headerBytes) && void 0 !== m ? m : 0) + (null !== (g = null == e ? void 0 : null === (a = e.retransmitted) || void 0 === a ? void 0 : a.payloadBytes) && void 0 !== g ? g : 0) + (null !== (E = null == e ? void 0 : null === (s = e.retransmitted) || void 0 === s ? void 0 : s.paddingBytes) && void 0 !== E ? E : 0) + (null !== (v = null == e ? void 0 : null === (o = e.transmitted) || void 0 === o ? void 0 : o.headerBytes) && void 0 !== v ? v : 0) + (null !== (y = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.payloadBytes) && void 0 !== y ? y : 0) + (null !== (I = null == e ? void 0 : null === (u = e.transmitted) || void 0 === u ? void 0 : u.paddingBytes) && void 0 !== I ? I : 0) + T;
}
function s(e) {
    var t, n, i, r, a, s, o;
    let l = null !== (r = null == e ? void 0 : e.packets) && void 0 !== r ? r : 0;
    return (null !== (a = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.packets) && void 0 !== a ? a : 0) + (null !== (s = null == e ? void 0 : null === (n = e.retransmitted) || void 0 === n ? void 0 : n.packets) && void 0 !== s ? s : 0) + (null !== (o = null == e ? void 0 : null === (i = e.transmitted) || void 0 === i ? void 0 : i.packets) && void 0 !== o ? o : 0) + l;
}
function o(e) {
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
function l(e) {
    let t = {};
    for (let n in e) t[n] = o(e[n]);
    return t;
}
function u(e, t) {
    var n, r, o, l, u, c, d, f, _, p, h, m, g, E, v, y, I, T, b, S, A, N, C, R, O, D, L, x;
    let w = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
    if (null == w) return;
    let P = e.substreams.reduce((e, t) => e + a(t.rtpStats), 0),
        M = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0);
    return {
        type: 'video',
        ssrc: w.ssrc,
        sinkWant: (0, i.f)(t, w.ssrc, !0),
        sinkWantAsInt: (0, i.F)(t, w.ssrc),
        codec: {
            id: e.codecPayloadType,
            name: e.codecName
        },
        keyFrameInterval: e.keyFrameInterval,
        bytesSent: P,
        packetsSent: M,
        packetsLost: null !== (I = null === (n = w.rtcpStats) || void 0 === n ? void 0 : n.packetsLost) && void 0 !== I ? I : 0,
        fractionLost: null !== (T = null === (r = w.rtcpStats) || void 0 === r ? void 0 : r.fractionLost) && void 0 !== T ? T : 0,
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
        firCount: null !== (b = null === (o = w.rtcpStats) || void 0 === o ? void 0 : o.firPackets) && void 0 !== b ? b : 0,
        nackCount: null !== (S = null === (l = w.rtcpStats) || void 0 === l ? void 0 : l.nackPackets) && void 0 !== S ? S : 0,
        pliCount: null !== (A = null === (u = w.rtcpStats) || void 0 === u ? void 0 : u.pliPackets) && void 0 !== A ? A : 0,
        qpSum: e.qpSum,
        bandwidthLimitedResolution: e.bwLimitedResolution,
        framesDroppedRateLimiter: e.framesDroppedRateLimiter,
        framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
        framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
        framesDroppedEncoder: e.framesDroppedEncoder,
        cpuLimitedResolution: e.cpuLimitedResolution,
        encoderQualityVmaf: null !== (N = null === (c = w.encoderQualityStats) || void 0 === c ? void 0 : c.imageQualityVmaf_v061) && void 0 !== N ? N : void 0,
        encoderQualityPsnr: null !== (C = null === (d = w.encoderQualityStats) || void 0 === d ? void 0 : d.imageQualityWebrtcPsnrDb) && void 0 !== C ? C : void 0,
        qualityDecodeErrors: null !== (R = null === (f = w.encoderQualityStats) || void 0 === f ? void 0 : f.decodeErrors) && void 0 !== R ? R : void 0,
        qualityDecoderReboots: null !== (O = null === (_ = w.encoderQualityStats) || void 0 === _ ? void 0 : _.decoderReboots) && void 0 !== O ? O : void 0,
        qualityScoreErrors: null !== (D = null === (p = w.encoderQualityStats) || void 0 === p ? void 0 : p.scoreErrors) && void 0 !== D ? D : void 0,
        qualityFrameDrops: null !== (L = null === (h = w.encoderQualityStats) || void 0 === h ? void 0 : h.frameDrops) && void 0 !== L ? L : void 0,
        qualitySizeMismatches: null !== (x = null === (m = w.encoderQualityStats) || void 0 === m ? void 0 : m.sizeMismatches) && void 0 !== x ? x : void 0,
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
        freezeCount: null === (g = w.encoderQualityStats) || void 0 === g ? void 0 : g.freezeCount,
        totalFreezesDuration: null === (E = w.encoderQualityStats) || void 0 === E ? void 0 : E.totalFreezesDuration,
        totalFramesDuration: null === (v = w.encoderQualityStats) || void 0 === v ? void 0 : v.totalFramesDuration,
        videoEntropy: null === (y = w.encoderQualityStats) || void 0 === y ? void 0 : y.interFrameEntropy
    };
}
function c(e, t, n, r) {
    var o, u;
    let c = a(e.rtpStats),
        d = s(e.rtpStats);
    return {
        type: 'video',
        ssrc: e.ssrc,
        sinkWant: (0, i.f)(t, e.ssrc, !0),
        sinkWantAsInt: (0, i.F)(t, e.ssrc),
        sinkWantLocal: (0, i.f)(n, e.ssrc, !0),
        sinkWantLocalAsInt: (0, i.F)(n, e.ssrc),
        codec: {
            id: e.codecPayloadType,
            name: e.codecName
        },
        bytesReceived: c,
        packetsReceived: d,
        packetsLost: null !== (o = e.rtpStats.packetsLost) && void 0 !== o ? o : e.rtcpStats.packetsLost,
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
        networkFramesDropped: null !== (u = e.networkFramesDropped) && void 0 !== u ? u : 0,
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
        ...(null != r
            ? l({
                  videoJitterBuffer: r.videoJitterBuffer,
                  videoJitterDelay: r.videoJitterDelay,
                  videoJitterTarget: r.videoJitterTarget
              })
            : {})
    };
}
function d(e, t, n, s) {
    var o, d, f, _, p;
    let h = null,
        m = null,
        g = 'string' == typeof t ? JSON.parse(t) : t,
        E = [];
    if (null != g.outbound) {
        let { audio: e, video: t, videos: a } = g.outbound;
        if (
            (null != e &&
                ((m = (null != m ? m : 0) + e.bytesSent),
                E.push({
                    type: 'audio',
                    ssrc: e.ssrc,
                    sinkWant: (0, i.f)(n, e.ssrc, !1),
                    sinkWantAsInt: (0, i.F)(n, e.ssrc),
                    codec: {
                        id: e.codecPayloadType,
                        name: e.codecName
                    },
                    bytesSent: e.bytesSent,
                    packetsSent: e.packetsSent,
                    packetsLost: Math.max(0, e.packetsLost),
                    fractionLost: 100 * e.fractionLost,
                    audioLevel: r(e.audioLevel),
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
                    encryptMissingKeyCount: e.encryptMissingKeyCount,
                    pttQueueLatencyMicrosSamples: e.pttQueueLatencyMicrosSamples
                })),
            null != a)
        )
            a.forEach((e) => {
                let t = u(e, n);
                null != t && ((m = (null != m ? m : 0) + t.bytesSent), E.push(t));
            });
        else if (null != t) {
            let e = u(t, n);
            null != e && ((m = (null != m ? m : 0) + e.bytesSent), E.push(e));
        }
    }
    let v = {};
    null != g.inbound &&
        g.inbound.forEach((e) => {
            let { id: t, audio: o, video: u, videos: d, playout: f } = e;
            if (
                ((v[t] = []),
                null != o &&
                    ((h = (null != h ? h : 0) + o.bytesReceived),
                    v[t].push({
                        type: 'audio',
                        ssrc: o.ssrc,
                        sinkWant: (0, i.f)(n, o.ssrc, !1),
                        sinkWantAsInt: (0, i.F)(n, o.ssrc),
                        codec: {
                            id: o.codecPayloadType,
                            name: o.codecName
                        },
                        bytesReceived: o.bytesReceived,
                        packetsReceived: o.packetsReceived,
                        packetsLost: o.packetsLost,
                        fractionLost: 100 * o.fractionLost,
                        fecPacketsReceived: o.fecPacketsReceived,
                        fecPacketsDiscarded: o.fecPacketsDiscarded,
                        audioLevel: r(o.audioLevel),
                        audioDetected: o.speaking,
                        jitter: o.jitter,
                        jitterBuffer: o.jitterBuffer,
                        jitterBufferPreferred: o.jitterBufferPreferred,
                        decodingCNG: o.decodingCNG,
                        decodingMutedOutput: o.decodingMutedOutput,
                        decodingNormal: o.decodingNormal,
                        decodingPLC: o.decodingPLC,
                        decodingPLCCNG: o.decodingPLCCNG,
                        nackCount: o.nackCount,
                        accelerateRate: 100 * o.accelerateRate,
                        expandRate: 100 * o.expandRate,
                        preemptiveExpandRate: 100 * o.preemptiveExpandRate,
                        speechExpandRate: 100 * o.speechExpandRate,
                        secondaryDecodedRate: 100 * o.secondaryDecodedRate,
                        opSilence: o.opSilence,
                        opNormal: o.opNormal,
                        opMerge: o.opMerge,
                        opExpand: o.opExpand,
                        opAccelerate: o.opAccelerate,
                        opPreemptiveExpand: o.opPreemptiveExpand,
                        opCNG: o.opCNG,
                        delayEstimate: o.delayEstimate,
                        passthroughCount: o.passthroughCount,
                        decryptSuccessCount: o.decryptSuccessCount,
                        decryptFailureCount: o.decryptFailureCount,
                        decryptDuration: o.decryptDuration,
                        decryptAttempts: o.decryptAttempts,
                        decryptMissingKeyCount: o.decryptMissingKeyCount,
                        decryptInvalidNonceCount: o.decryptInvalidNonceCount,
                        ...(null != f
                            ? l({
                                  audioJitterBuffer: f.audioJitterBuffer,
                                  audioJitterDelay: f.audioJitterDelay,
                                  audioJitterTarget: f.audioJitterTarget,
                                  audioPlayoutUnderruns: f.audioPlayoutUnderruns,
                                  relativeReceptionDelay: f.relativeReceptionDelay,
                                  relativePlayoutDelay: f.relativePlayoutDelay
                              })
                            : {})
                    })),
                null != d)
            )
                d.forEach((e) => {
                    let i = c(e, n, s, f);
                    if (null != i) {
                        let n = a(e.rtpStats);
                        (h = (null != h ? h : 0) + n), v[t].push(i);
                    }
                });
            else if (null != u) {
                let e = c(u, n, s, f);
                if (null != e) {
                    let n = a(u.rtpStats);
                    (h = (null != h ? h : 0) + n), v[t].push(e);
                }
            }
        });
    let { transport: y, clips: I } = g,
        T = {};
    null != y && ((T.availableOutgoingBitrate = y.sendBandwidth), (T.ping = y.rtt), (T.decryptionFailures = y.decryptionFailures), null != y.routingFailures && (T.routingFailures = y.routingFailures), (T.localAddress = y.localAddress), (T.pacerDelay = y.pacerDelay), null != y.receiverReports && (T.receiverReports = y.receiverReports), (T.receiverBitrateEstimate = y.receiverBitrateEstimate), (T.outboundBitrateEstimate = y.outboundBitrateEstimate), (T.inboundBitrateEstimate = null !== (o = y.inboundBitrateEstimate) && void 0 !== o ? o : 0), (T.packetsReceived = y.packetsReceived), (T.packetsSent = y.packetsSent), null != y.secureFramesProtocolVersion && (T.secureFramesProtocolVersion = y.secureFramesProtocolVersion)), ((null == y ? void 0 : y.bytesReceived) == null && (null == h || Number.isNaN(h))) || (T.bytesReceived = null !== (f = null !== (d = null == y ? void 0 : y.bytesReceived) && void 0 !== d ? d : h) && void 0 !== f ? f : void 0), ((null == y ? void 0 : y.bytesSent) == null && (null == m || Number.isNaN(m))) || (T.bytesSent = null !== (p = null !== (_ = null == y ? void 0 : y.bytesSent) && void 0 !== _ ? _ : m) && void 0 !== p ? p : void 0);
    let { screenshare: b, camera: S, audioDevice: A } = g;
    return {
        mediaEngineConnectionId: e,
        transport: T,
        screenshare: b,
        camera:
            null != S
                ? {
                      capturedFramesDropped: S.capturedFramesDropped,
                      capturedFramesCount: S.capturedFramesCount,
                      capturedFramesMean: S.capturedFramesMean,
                      capturedFramesStdev: S.capturedFramesStdev
                  }
                : null,
        clips: I,
        audioDevice: A,
        rtp: {
            inbound: v,
            outbound: E
        }
    };
}
