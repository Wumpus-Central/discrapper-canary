n.d(t, { Z: () => _ }), n(653041);
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
    var t, n, r, i, o, a, s, l, c, u, d, f, _, p, h, m, g, E, b, y, v;
    let O = (null != (u = null == e ? void 0 : e.headerBytes) ? u : 0) + (null != (d = null == e ? void 0 : e.payloadBytes) ? d : 0) + (null != (f = null == e ? void 0 : e.paddingBytes) ? f : 0);
    return (null != (_ = null == e || null == (t = e.fec) ? void 0 : t.headerBytes) ? _ : 0) + (null != (p = null == e || null == (n = e.fec) ? void 0 : n.payloadBytes) ? p : 0) + (null != (h = null == e || null == (r = e.fec) ? void 0 : r.paddingBytes) ? h : 0) + (null != (m = null == e || null == (i = e.retransmitted) ? void 0 : i.headerBytes) ? m : 0) + (null != (g = null == e || null == (o = e.retransmitted) ? void 0 : o.payloadBytes) ? g : 0) + (null != (E = null == e || null == (a = e.retransmitted) ? void 0 : a.paddingBytes) ? E : 0) + (null != (b = null == e || null == (s = e.transmitted) ? void 0 : s.headerBytes) ? b : 0) + (null != (y = null == e || null == (l = e.transmitted) ? void 0 : l.payloadBytes) ? y : 0) + (null != (v = null == e || null == (c = e.transmitted) ? void 0 : c.paddingBytes) ? v : 0) + O;
}
function l(e) {
    var t, n, r, i, o, a, s;
    let l = null != (i = null == e ? void 0 : e.packets) ? i : 0;
    return (null != (o = null == e || null == (t = e.fec) ? void 0 : t.packets) ? o : 0) + (null != (a = null == e || null == (n = e.retransmitted) ? void 0 : n.packets) ? a : 0) + (null != (s = null == e || null == (r = e.transmitted) ? void 0 : r.packets) ? s : 0) + l;
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
    var n, i, o, a, c, u, d, f, _, p, h, m, g, E, b, y, v, O, I, S, T, N, A, C, R, P, w, D;
    let L = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
    if (null == L) return;
    let x = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0),
        M = e.substreams.reduce((e, t) => e + l(t.rtpStats), 0);
    return {
        type: 'video',
        ssrc: L.ssrc,
        sinkWant: (0, r.f)(t, L.ssrc, !0),
        sinkWantAsInt: (0, r.F)(t, L.ssrc),
        codec: {
            id: e.codecPayloadType,
            name: e.codecName
        },
        keyFrameInterval: e.keyFrameInterval,
        bytesSent: x,
        packetsSent: M,
        packetsLost: null != (v = null == (n = L.rtcpStats) ? void 0 : n.packetsLost) ? v : 0,
        fractionLost: null != (O = null == (i = L.rtcpStats) ? void 0 : i.fractionLost) ? O : 0,
        bitrate: e.mediaBitrate,
        bitrateTarget: e.targetMediaBitrate,
        encoderImplementationName: e.encoderImplementationName,
        encodeUsage: e.encodeUsage,
        averageEncodeTime: e.avgEncodeTime,
        resolution: {
            height: L.height,
            width: L.width
        },
        framesSent: L.frameCounts.keyFrames + L.frameCounts.deltaFrames,
        keyFramesEncoded: L.frameCounts.keyFrames,
        framesEncoded: e.framesEncoded,
        frameRateInput: e.inputFrameRate,
        frameRateEncode: e.encodeFrameRate,
        firCount: null != (I = null == (o = L.rtcpStats) ? void 0 : o.firPackets) ? I : 0,
        nackCount: null != (S = null == (a = L.rtcpStats) ? void 0 : a.nackPackets) ? S : 0,
        pliCount: null != (T = null == (c = L.rtcpStats) ? void 0 : c.pliPackets) ? T : 0,
        qpSum: e.qpSum,
        bandwidthLimitedResolution: e.bwLimitedResolution,
        framesDroppedRateLimiter: e.framesDroppedRateLimiter,
        framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
        framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
        framesDroppedEncoder: e.framesDroppedEncoder,
        cpuLimitedResolution: e.cpuLimitedResolution,
        encoderQualityVmaf: null != (N = null == (u = L.encoderQualityStats) ? void 0 : u.imageQualityVmaf_v061) ? N : void 0,
        encoderQualityPsnr: null != (A = null == (d = L.encoderQualityStats) ? void 0 : d.imageQualityWebrtcPsnrDb) ? A : void 0,
        qualityDecodeErrors: null != (C = null == (f = L.encoderQualityStats) ? void 0 : f.decodeErrors) ? C : void 0,
        qualityDecoderReboots: null != (R = null == (_ = L.encoderQualityStats) ? void 0 : _.decoderReboots) ? R : void 0,
        qualityScoreErrors: null != (P = null == (p = L.encoderQualityStats) ? void 0 : p.scoreErrors) ? P : void 0,
        qualityFrameDrops: null != (w = null == (h = L.encoderQualityStats) ? void 0 : h.frameDrops) ? w : void 0,
        qualitySizeMismatches: null != (D = null == (m = L.encoderQualityStats) ? void 0 : m.sizeMismatches) ? D : void 0,
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
        freezeCount: null == (g = L.encoderQualityStats) ? void 0 : g.freezeCount,
        totalFreezesDuration: null == (E = L.encoderQualityStats) ? void 0 : E.totalFreezesDuration,
        totalFramesDuration: null == (b = L.encoderQualityStats) ? void 0 : b.totalFramesDuration,
        videoEntropy: null == (y = L.encoderQualityStats) ? void 0 : y.interFrameEntropy
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
            packetsLost: null != (a = e.rtpStats.packetsLost) ? a : e.rtcpStats.packetsLost,
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
            networkFramesDropped: null != (c = e.networkFramesDropped) ? c : 0,
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
function _(e, t, n, i) {
    var l, c, _, p, h;
    let m = null,
        g = null,
        E = 'string' == typeof t ? JSON.parse(t) : t,
        b = [];
    if (null != E.outbound) {
        let { audio: e, video: t, videos: i } = E.outbound;
        if (
            (null != e &&
                ((g = (null != g ? g : 0) + e.bytesSent),
                b.push({
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
                    bitrate: e.mediaBitrate,
                    bitrateTarget: e.targetMediaBitrate,
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
                    pttQueueLatencyMicrosSamples: e.pttQueueLatencyMicrosSamples,
                    sampleRateMismatchPercent: e.sampleRateMismatchPercent
                })),
            null != i)
        )
            i.forEach((e) => {
                let t = d(e, n);
                null != t && ((g = (null != g ? g : 0) + t.bytesSent), b.push(t));
            });
        else if (null != t) {
            let e = d(t, n);
            null != e && ((g = (null != g ? g : 0) + e.bytesSent), b.push(e));
        }
    }
    let y = {};
    null != E.inbound &&
        E.inbound.forEach((e) => {
            let { id: t, audio: l, video: c, videos: d, playout: _ } = e;
            if (
                ((y[t] = []),
                null != l &&
                    ((m = (null != m ? m : 0) + l.bytesReceived),
                    y[t].push(
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
                            null != _
                                ? u({
                                      audioJitterBuffer: _.audioJitterBuffer,
                                      audioJitterDelay: _.audioJitterDelay,
                                      audioJitterTarget: _.audioJitterTarget,
                                      audioPlayoutUnderruns: _.audioPlayoutUnderruns,
                                      relativeReceptionDelay: _.relativeReceptionDelay,
                                      relativePlayoutDelay: _.relativePlayoutDelay
                                  })
                                : {}
                        )
                    )),
                null != d)
            )
                d.forEach((e) => {
                    let r = f(e, n, i, _);
                    if (null != r) {
                        let n = s(e.rtpStats);
                        (m = (null != m ? m : 0) + n), y[t].push(r);
                    }
                });
            else if (null != c) {
                let e = f(c, n, i, _);
                if (null != e) {
                    let n = s(c.rtpStats);
                    (m = (null != m ? m : 0) + n), y[t].push(e);
                }
            }
        });
    let { transport: v, clips: O } = E,
        I = {};
    null != v && ((I.availableOutgoingBitrate = v.sendBandwidth), (I.ping = v.rtt), (I.decryptionFailures = v.decryptionFailures), null != v.routingFailures && (I.routingFailures = v.routingFailures), (I.localAddress = v.localAddress), (I.pacerDelay = v.pacerDelay), null != v.receiverReports && (I.receiverReports = v.receiverReports), (I.receiverBitrateEstimate = v.receiverBitrateEstimate), (I.outboundBitrateEstimate = v.outboundBitrateEstimate), (I.inboundBitrateEstimate = null != (l = v.inboundBitrateEstimate) ? l : 0), (I.packetsReceived = v.packetsReceived), (I.packetsSent = v.packetsSent), null != v.secureFramesProtocolVersion && (I.secureFramesProtocolVersion = v.secureFramesProtocolVersion)), ((null == v ? void 0 : v.bytesReceived) == null && (null == m || Number.isNaN(m))) || (I.bytesReceived = null != (_ = null != (c = null == v ? void 0 : v.bytesReceived) ? c : m) ? _ : void 0), ((null == v ? void 0 : v.bytesSent) == null && (null == g || Number.isNaN(g))) || (I.bytesSent = null != (h = null != (p = null == v ? void 0 : v.bytesSent) ? p : g) ? h : void 0);
    let { screenshare: S, camera: T, audioDevice: N } = E;
    return {
        mediaEngineConnectionId: e,
        transport: I,
        screenshare: S,
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
            inbound: y,
            outbound: b
        }
    };
}
