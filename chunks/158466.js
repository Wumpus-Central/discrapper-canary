n.d(t, { Z: () => p }), n(653041);
var r = n(878604);
function i(e, t, n) {
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
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e) {
    return e / 32768;
}
function s(e) {
    var t, n, r, i, o, a, s, l, c, u, d, f, p, _, h, m, g, E, v, b, y;
    let O = (null !== (u = null == e ? void 0 : e.headerBytes) && void 0 !== u ? u : 0) + (null !== (d = null == e ? void 0 : e.payloadBytes) && void 0 !== d ? d : 0) + (null !== (f = null == e ? void 0 : e.paddingBytes) && void 0 !== f ? f : 0);
    return (null !== (p = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.headerBytes) && void 0 !== p ? p : 0) + (null !== (_ = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.payloadBytes) && void 0 !== _ ? _ : 0) + (null !== (h = null == e ? void 0 : null === (r = e.fec) || void 0 === r ? void 0 : r.paddingBytes) && void 0 !== h ? h : 0) + (null !== (m = null == e ? void 0 : null === (i = e.retransmitted) || void 0 === i ? void 0 : i.headerBytes) && void 0 !== m ? m : 0) + (null !== (g = null == e ? void 0 : null === (o = e.retransmitted) || void 0 === o ? void 0 : o.payloadBytes) && void 0 !== g ? g : 0) + (null !== (E = null == e ? void 0 : null === (a = e.retransmitted) || void 0 === a ? void 0 : a.paddingBytes) && void 0 !== E ? E : 0) + (null !== (v = null == e ? void 0 : null === (s = e.transmitted) || void 0 === s ? void 0 : s.headerBytes) && void 0 !== v ? v : 0) + (null !== (b = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.payloadBytes) && void 0 !== b ? b : 0) + (null !== (y = null == e ? void 0 : null === (c = e.transmitted) || void 0 === c ? void 0 : c.paddingBytes) && void 0 !== y ? y : 0) + O;
}
function l(e) {
    var t, n, r, i, o, a, s;
    let l = null !== (i = null == e ? void 0 : e.packets) && void 0 !== i ? i : 0;
    return (null !== (o = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.packets) && void 0 !== o ? o : 0) + (null !== (a = null == e ? void 0 : null === (n = e.retransmitted) || void 0 === n ? void 0 : n.packets) && void 0 !== a ? a : 0) + (null !== (s = null == e ? void 0 : null === (r = e.transmitted) || void 0 === r ? void 0 : r.packets) && void 0 !== s ? s : 0) + l;
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
function u(e) {
    let t = {};
    for (let n in e) t[n] = c(e[n]);
    return t;
}
function d(e, t) {
    var n, i, o, a, c, u, d, f, p, _, h, m, g, E, v, b, y, O, S, I, T, N, A, C, R, P, w, D;
    let x = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
    if (null == x) return;
    let L = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0),
        M = e.substreams.reduce((e, t) => e + l(t.rtpStats), 0);
    return {
        type: 'video',
        ssrc: x.ssrc,
        sinkWant: (0, r.f)(t, x.ssrc, !0),
        sinkWantAsInt: (0, r.F)(t, x.ssrc),
        codec: {
            id: e.codecPayloadType,
            name: e.codecName
        },
        keyFrameInterval: e.keyFrameInterval,
        bytesSent: L,
        packetsSent: M,
        packetsLost: null !== (y = null === (n = x.rtcpStats) || void 0 === n ? void 0 : n.packetsLost) && void 0 !== y ? y : 0,
        fractionLost: null !== (O = null === (i = x.rtcpStats) || void 0 === i ? void 0 : i.fractionLost) && void 0 !== O ? O : 0,
        bitrate: e.mediaBitrate,
        bitrateTarget: e.targetMediaBitrate,
        encoderImplementationName: e.encoderImplementationName,
        encodeUsage: e.encodeUsage,
        averageEncodeTime: e.avgEncodeTime,
        resolution: {
            height: x.height,
            width: x.width
        },
        framesSent: x.frameCounts.keyFrames + x.frameCounts.deltaFrames,
        keyFramesEncoded: x.frameCounts.keyFrames,
        framesEncoded: e.framesEncoded,
        frameRateInput: e.inputFrameRate,
        frameRateEncode: e.encodeFrameRate,
        firCount: null !== (S = null === (o = x.rtcpStats) || void 0 === o ? void 0 : o.firPackets) && void 0 !== S ? S : 0,
        nackCount: null !== (I = null === (a = x.rtcpStats) || void 0 === a ? void 0 : a.nackPackets) && void 0 !== I ? I : 0,
        pliCount: null !== (T = null === (c = x.rtcpStats) || void 0 === c ? void 0 : c.pliPackets) && void 0 !== T ? T : 0,
        qpSum: e.qpSum,
        bandwidthLimitedResolution: e.bwLimitedResolution,
        framesDroppedRateLimiter: e.framesDroppedRateLimiter,
        framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
        framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
        framesDroppedEncoder: e.framesDroppedEncoder,
        cpuLimitedResolution: e.cpuLimitedResolution,
        encoderQualityVmaf: null !== (N = null === (u = x.encoderQualityStats) || void 0 === u ? void 0 : u.imageQualityVmaf_v061) && void 0 !== N ? N : void 0,
        encoderQualityPsnr: null !== (A = null === (d = x.encoderQualityStats) || void 0 === d ? void 0 : d.imageQualityWebrtcPsnrDb) && void 0 !== A ? A : void 0,
        qualityDecodeErrors: null !== (C = null === (f = x.encoderQualityStats) || void 0 === f ? void 0 : f.decodeErrors) && void 0 !== C ? C : void 0,
        qualityDecoderReboots: null !== (R = null === (p = x.encoderQualityStats) || void 0 === p ? void 0 : p.decoderReboots) && void 0 !== R ? R : void 0,
        qualityScoreErrors: null !== (P = null === (_ = x.encoderQualityStats) || void 0 === _ ? void 0 : _.scoreErrors) && void 0 !== P ? P : void 0,
        qualityFrameDrops: null !== (w = null === (h = x.encoderQualityStats) || void 0 === h ? void 0 : h.frameDrops) && void 0 !== w ? w : void 0,
        qualitySizeMismatches: null !== (D = null === (m = x.encoderQualityStats) || void 0 === m ? void 0 : m.sizeMismatches) && void 0 !== D ? D : void 0,
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
        freezeCount: null === (g = x.encoderQualityStats) || void 0 === g ? void 0 : g.freezeCount,
        totalFreezesDuration: null === (E = x.encoderQualityStats) || void 0 === E ? void 0 : E.totalFreezesDuration,
        totalFramesDuration: null === (v = x.encoderQualityStats) || void 0 === v ? void 0 : v.totalFramesDuration,
        videoEntropy: null === (b = x.encoderQualityStats) || void 0 === b ? void 0 : b.interFrameEntropy
    };
}
function f(e, t, n, i) {
    var a, c;
    let d = s(e.rtpStats),
        f = l(e.rtpStats);
    return o(
        {
            type: 'video',
            ssrc: e.ssrc,
            sinkWant: (0, r.f)(t, e.ssrc, !0),
            sinkWantAsInt: (0, r.F)(t, e.ssrc),
            sinkWantLocal: (0, r.f)(n, e.ssrc, !0),
            sinkWantLocalAsInt: (0, r.F)(n, e.ssrc),
            codec: {
                id: e.codecPayloadType,
                name: e.codecName
            },
            bytesReceived: d,
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
            networkFramesDropped: null !== (c = e.networkFramesDropped) && void 0 !== c ? c : 0,
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
            decryptInvalidNonceCount: e.decryptInvalidNonceCount
        },
        null != i
            ? u({
                  videoJitterBuffer: i.videoJitterBuffer,
                  videoJitterDelay: i.videoJitterDelay,
                  videoJitterTarget: i.videoJitterTarget
              })
            : {}
    );
}
function p(e, t, n, i) {
    var l, c, p, _, h;
    let m = null,
        g = null,
        E = 'string' == typeof t ? JSON.parse(t) : t,
        v = [];
    if (null != E.outbound) {
        let { audio: e, video: t, videos: i } = E.outbound;
        if (
            (null != e &&
                ((g = (null != g ? g : 0) + e.bytesSent),
                v.push({
                    type: 'audio',
                    ssrc: e.ssrc,
                    sinkWant: (0, r.f)(n, e.ssrc, !1),
                    sinkWantAsInt: (0, r.F)(n, e.ssrc),
                    codec: {
                        id: e.codecPayloadType,
                        name: e.codecName
                    },
                    bytesSent: e.bytesSent,
                    packetsSent: e.packetsSent,
                    packetsLost: Math.max(0, e.packetsLost),
                    fractionLost: 100 * e.fractionLost,
                    audioLevel: a(e.audioLevel),
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
            null != i)
        )
            i.forEach((e) => {
                let t = d(e, n);
                null != t && ((g = (null != g ? g : 0) + t.bytesSent), v.push(t));
            });
        else if (null != t) {
            let e = d(t, n);
            null != e && ((g = (null != g ? g : 0) + e.bytesSent), v.push(e));
        }
    }
    let b = {};
    null != E.inbound &&
        E.inbound.forEach((e) => {
            let { id: t, audio: l, video: c, videos: d, playout: p } = e;
            if (
                ((b[t] = []),
                null != l &&
                    ((m = (null != m ? m : 0) + l.bytesReceived),
                    b[t].push(
                        o(
                            {
                                type: 'audio',
                                ssrc: l.ssrc,
                                sinkWant: (0, r.f)(n, l.ssrc, !1),
                                sinkWantAsInt: (0, r.F)(n, l.ssrc),
                                codec: {
                                    id: l.codecPayloadType,
                                    name: l.codecName
                                },
                                bytesReceived: l.bytesReceived,
                                packetsReceived: l.packetsReceived,
                                packetsLost: l.packetsLost,
                                fractionLost: 100 * l.fractionLost,
                                fecPacketsReceived: l.fecPacketsReceived,
                                fecPacketsDiscarded: l.fecPacketsDiscarded,
                                audioLevel: a(l.audioLevel),
                                audioDetected: l.speaking,
                                jitter: l.jitter,
                                jitterBuffer: l.jitterBuffer,
                                jitterBufferPreferred: l.jitterBufferPreferred,
                                decodingCNG: l.decodingCNG,
                                decodingMutedOutput: l.decodingMutedOutput,
                                decodingNormal: l.decodingNormal,
                                decodingPLC: l.decodingPLC,
                                decodingPLCCNG: l.decodingPLCCNG,
                                nackCount: l.nackCount,
                                accelerateRate: 100 * l.accelerateRate,
                                expandRate: 100 * l.expandRate,
                                preemptiveExpandRate: 100 * l.preemptiveExpandRate,
                                speechExpandRate: 100 * l.speechExpandRate,
                                secondaryDecodedRate: 100 * l.secondaryDecodedRate,
                                opSilence: l.opSilence,
                                opNormal: l.opNormal,
                                opMerge: l.opMerge,
                                opExpand: l.opExpand,
                                opAccelerate: l.opAccelerate,
                                opPreemptiveExpand: l.opPreemptiveExpand,
                                opCNG: l.opCNG,
                                delayEstimate: l.delayEstimate,
                                passthroughCount: l.passthroughCount,
                                decryptSuccessCount: l.decryptSuccessCount,
                                decryptFailureCount: l.decryptFailureCount,
                                decryptDuration: l.decryptDuration,
                                decryptAttempts: l.decryptAttempts,
                                decryptMissingKeyCount: l.decryptMissingKeyCount,
                                decryptInvalidNonceCount: l.decryptInvalidNonceCount
                            },
                            null != p
                                ? u({
                                      audioJitterBuffer: p.audioJitterBuffer,
                                      audioJitterDelay: p.audioJitterDelay,
                                      audioJitterTarget: p.audioJitterTarget,
                                      audioPlayoutUnderruns: p.audioPlayoutUnderruns,
                                      relativeReceptionDelay: p.relativeReceptionDelay,
                                      relativePlayoutDelay: p.relativePlayoutDelay
                                  })
                                : {}
                        )
                    )),
                null != d)
            )
                d.forEach((e) => {
                    let r = f(e, n, i, p);
                    if (null != r) {
                        let n = s(e.rtpStats);
                        (m = (null != m ? m : 0) + n), b[t].push(r);
                    }
                });
            else if (null != c) {
                let e = f(c, n, i, p);
                if (null != e) {
                    let n = s(c.rtpStats);
                    (m = (null != m ? m : 0) + n), b[t].push(e);
                }
            }
        });
    let { transport: y, clips: O } = E,
        S = {};
    null != y && ((S.availableOutgoingBitrate = y.sendBandwidth), (S.ping = y.rtt), (S.decryptionFailures = y.decryptionFailures), null != y.routingFailures && (S.routingFailures = y.routingFailures), (S.localAddress = y.localAddress), (S.pacerDelay = y.pacerDelay), null != y.receiverReports && (S.receiverReports = y.receiverReports), (S.receiverBitrateEstimate = y.receiverBitrateEstimate), (S.outboundBitrateEstimate = y.outboundBitrateEstimate), (S.inboundBitrateEstimate = null !== (l = y.inboundBitrateEstimate) && void 0 !== l ? l : 0), (S.packetsReceived = y.packetsReceived), (S.packetsSent = y.packetsSent), null != y.secureFramesProtocolVersion && (S.secureFramesProtocolVersion = y.secureFramesProtocolVersion)), ((null == y ? void 0 : y.bytesReceived) == null && (null == m || Number.isNaN(m))) || (S.bytesReceived = null !== (p = null !== (c = null == y ? void 0 : y.bytesReceived) && void 0 !== c ? c : m) && void 0 !== p ? p : void 0), ((null == y ? void 0 : y.bytesSent) == null && (null == g || Number.isNaN(g))) || (S.bytesSent = null !== (h = null !== (_ = null == y ? void 0 : y.bytesSent) && void 0 !== _ ? _ : g) && void 0 !== h ? h : void 0);
    let { screenshare: I, camera: T, audioDevice: N } = E;
    return {
        mediaEngineConnectionId: e,
        transport: S,
        screenshare: I,
        camera:
            null != T
                ? {
                      capturedFramesDropped: T.capturedFramesDropped,
                      capturedFramesCount: T.capturedFramesCount,
                      capturedFramesMean: T.capturedFramesMean,
                      capturedFramesStdev: T.capturedFramesStdev
                  }
                : null,
        clips: O,
        audioDevice: N,
        rtp: {
            inbound: b,
            outbound: v
        }
    };
}
