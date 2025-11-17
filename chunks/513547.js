n.d(t, {
    al: () => b,
    ck: () => C,
}),
    n(388685),
    n(539854),
    n(784620),
    n(973216);
var r = n(54381),
    a = n(473749),
    i = n(112456),
    l = n.n(i),
    o = n(226961),
    s = n(706619),
    c = n(206314);
let d = {
    accelerateRate: "Accelerate Rate",
    audioDetected: "Audio Detected",
    audioLevel: "Audio Level",
    availableOutgoingBitrate: "Available Outgoing Bitrate",
    averageDecodeTime: "Average Decode Time",
    averageEncodeTime: "Average Encode Time",
    bandwidthLimitedFrameRate: "Bandwidth Limited Frame Rate",
    bandwidthLimitedResolution: "Bandwidth Limited Resolution",
    bitrate: "Bitrate",
    bitrateTarget: "Bitrate (Target)",
    bytesReceived: "Bytes Received",
    bytesSent: "Bytes Sent",
    capturedFramesCount: "Captured Frames per Second",
    capturedFramesDropped: "Captured Frames Dropped",
    capturedFramesMean: "Captured Frames Mean (ms)",
    capturedFramesStdev: "Captured Frames Standard Deviation (ms)",
    codec: "Codec",
    cpuLimitedResolution: "CPU Limited Resolution",
    currentDelay: "Current Delay",
    currentSampleRate: "Current Sample Rate",
    decoderImplementationName: "Decoder",
    decodingCNG: "Decoding CNG",
    decodingMutedOutput: "Decoding Muted Output",
    decodingNormal: "Decoding Normal",
    decodingPLC: "Decoding PLC",
    decodingPLCCNG: "Decoding PLC CNG",
    decryptFailureCount: "Decrypt Failures",
    decryptionFailures: "Decryption Failures",
    decryptSuccessCount: "Decrypt Successes",
    delayEstimate: "Delay Estimate",
    encoderImplementationName: "Encoder",
    encoderQualityPsnr: "Encoder PSNR (dB)",
    encoderQualityVmaf: "Encoder VMAF",
    encodeUsage: "Encode Usage",
    encryptFailureCount: "Encrypt Failures",
    encryptSuccessCount: "Encrypt Successes",
    expandRate: "Expand Rate",
    fecPacketsDiscarded: "FEC Packets Discarded",
    fecPacketsReceived: "FEC Packets Received",
    filter: "Filter",
    firCount: "FIR",
    fractionLost: "Packet Loss",
    frameRateDecode: "Frame Rate (Decode)",
    frameRateEncode: "Frame Rate (Encode)",
    frameRateInput: "Frame Rate (Input)",
    frameRateNetwork: "Frame Rate (Network)",
    frameRateRender: "Frame Rate (Render)",
    framesDecoded: "Frames Decoded",
    framesDecodeErrors: "Decoder Error Count",
    framesDropped: "Frames Dropped",
    framesDroppedCongestionWindow: "Frames Dropped by Congestion Window",
    framesDroppedEncoder: "Frames Dropped by Encoder",
    framesDroppedEncoderQueue: "Frames Dropped by Encoder Queue",
    framesDroppedRateLimiter: "Frames Dropped by Bitrate Limiter",
    framesEncoded: "Frames Encoded",
    framesReceived: "Frames Received",
    framesSent: "Frames Sent",
    freezeCount: "Freeze Count",
    hostname: "Hostname",
    hybridCaptureMethodSwitches: "Hybrid Capture Method Switches",
    hybridDxgiFrames: "Hybrid DXGI Frames",
    hybridGdiBitBltFrames: "Hybrid GDI BitBlt Frames",
    hybridGdiFrames: "Hybrid GDI Frames",
    hybridGdiPrintWindowFrames: "Hybrid GDI PrintWindow Frames",
    hybridGraphicsCaptureFrames: "Hybrid Graphics Capture Frames",
    hybridVideohookFrames: "Hybrid Videohook Frames",
    inboundBitrateEstimate: "Inbound Bitrate Estimate",
    jitter: "Jitter",
    jitterBuffer: "Jitter Buffer",
    jitterBufferPreferred: "Jitter Buffer (Preferred)",
    keyFrameInterval: "Key Frame Interval",
    keyFramesDecoded: "Key Frames Decoded",
    keyFramesEncoded: "Key Frames Encoded",
    localAddress: "Local Address",
    minPlayoutDelay: "Minimum Playout Delay",
    nackCount: "NACK",
    networkFramesDropped: "Frames Dropped By Network",
    opAccelerate: "Accelerated Frames",
    opCNG: "CNG Frames",
    opExpand: "Expand Frames",
    opMerge: "Merge Frames",
    opNormal: "Normal Frames",
    opPreemptiveExpand: "Preemptive Expand Frames",
    opSilence: "Silent Frames",
    outboundBitrateEstimate: "Outbound Bitrate Estimate",
    pacerDelay: "Pacer Delay",
    packetsLost: "Packets Lost",
    packetsReceived: "Packets Received",
    packetsSent: "Packets Sent",
    passthroughCount: "Passthrough",
    pauseCount: "Pause Count",
    ping: "Ping",
    pliCount: "PLI",
    preemptiveExpandRate: "Pre-emptive Expand Rate",
    qpSum: "QP Sum",
    qualityDecodeErrors: "Encoder Quality Decode Errors",
    qualityDecoderReboots: "Encoder Quality Decoder Reboots",
    qualityFrameDrops: "Encoder Quality Frame Drops",
    qualityScoreErrors: "Encoder Quality Score Errors",
    qualitySizeMismatches: "Encoder Quality Size Mismatches",
    quartzFrames: "Quartz Frames",
    receiverBitrateEstimate: "Receiver Bitrate Estimate (REMB)",
    relativePlayoutDelay: "Relative Playout Delay",
    relativeReceptionDelay: "Relative Reception Delay",
    renderDelay: "Render Delay",
    resolution: "Resolution",
    routingFailures: "Routing Failures",
    sampleRateMismatchPercent: "Sample Rate Mismatch",
    screenCaptureKitFrames: "ScreenCaptureKit frames",
    screenshareFrames: "WebRTC Frames",
    secondaryDecodedRate: "Secondary Decode Rate",
    secureFramesProtocolVersion: "DAVE Protocol",
    sinkWant: "Sink Quality Level (Remote)",
    sinkWantLocal: "Sink Quality Level (Local)",
    speechExpandRate: "Speech Expand Rate",
    ssrc: "SSRC",
    targetDelay: "Target Delay",
    totalFramesDuration: "Frames Duration (ms)",
    totalFreezesDuration: "Freezes Duration (ms)",
    totalPausesDuration: "Pauses Duration (ms)",
    videoEntropy: "Video Entropy",
    videohookBackend: "Videohook Backend",
    videohookFrames: "Videohook Frames",
};
function u(e) {
    return "".concat((e / 1000).toFixed(2), " Kbps");
}
function m(e) {
    return l().filesize(e);
}
function p(e) {
    return e;
}
function h(e) {
    return "".concat(e, " ms");
}
function f(e) {
    return "".concat(e.toFixed(0), "%");
}
function y(e) {
    return e ? "Yes" : "No";
}
function g(e) {
    return 20 * Math.log(e);
}
function v(e) {
    let { last: t } = e;
    return "".concat(t, " ms");
}
function E(e) {
    return e.toFixed(2);
}
let b = {
        audioJitterBuffer: !0,
        audioJitterDelay: !0,
        audioJitterTarget: !0,
        audioPlayoutUnderruns: !0,
        decryptAttempts: !0,
        decryptDuration: !0,
        decryptInvalidNonceCount: !0,
        decryptMissingKeyCount: !0,
        encryptAttempts: !0,
        encryptDuration: !0,
        encryptMaxAttempts: !0,
        encryptMissingKeyCount: !0,
        fractionLost: !0,
        framesCaptured: !0,
        framesRendered: !0,
        hqSimulcastStreamEncoded: !0,
        lqSimulcastStreamEncoded: !0,
        noiseCancellerFrames: !0,
        noiseCancellerProcessTime: !0,
        sinkWantAsInt: !0,
        sinkWantLocalAsInt: !0,
        sumOfSquaredFramesDurations: !0,
        timestamp: !0,
        type: !0,
        videoJitterBuffer: !0,
        videoJitterDelay: !0,
        videoJitterTarget: !0,
        voiceActivityDetectorProcessTime: !0,
    },
    D = {
        accelerateRate: f,
        audioDetected: y,
        audioLevel: function (e) {
            return e <= 0 ? "-\u221E dB" : "".concat(g(e).toFixed(2), " dB");
        },
        availableOutgoingBitrate: u,
        averageDecodeTime: h,
        averageEncodeTime: h,
        bandwidthLimitedFrameRate: y,
        bandwidthLimitedResolution: y,
        bitrate: u,
        bitrateTarget: u,
        bytesReceived: m,
        bytesSent: m,
        codec: function (e) {
            let { id: t, name: n } = e;
            return (
                (n = null != (n = "" === n ? "unknown" : n) ? n : "unknown"),
                "".concat(n[0].toUpperCase()).concat(n.slice(1), " (").concat(t, ")")
            );
        },
        cpuLimitedResolution: y,
        currentSampleRate: function (e) {
            return e % 100 == 0 ? "".concat(e / 1000, " kHz") : "".concat(e, " Hz");
        },
        currentDelay: h,
        decoderImplementationName: p,
        delayEstimate: h,
        encoderImplementationName: p,
        encoderQualityPsnr: function (e) {
            return "".concat(Math.max(e, 0).toFixed(2), " dB");
        },
        encoderQualityVmaf: E,
        encodeUsage: f,
        expandRate: f,
        filter: p,
        fractionLost: f,
        inboundBitrateEstimate: u,
        jitter: h,
        jitterBuffer: h,
        jitterBufferPreferred: h,
        keyFrameInterval: h,
        minPlayoutDelay: h,
        outboundBitrateEstimate: u,
        pacerDelay: h,
        ping: h,
        preemptiveExpandRate: f,
        receiverBitrateEstimate: u,
        relativePlayoutDelay: v,
        relativeReceptionDelay: v,
        renderDelay: h,
        resolution: (e) => {
            let { width: t, height: n } = e;
            return "".concat(t, "x").concat(n);
        },
        sampleRateMismatchPercent: f,
        secondaryDecodedRate: f,
        secureFramesProtocolVersion: function (e) {
            return e > 0 ? "Version ".concat(e) : "Disabled";
        },
        speechExpandRate: f,
        targetDelay: h,
        videoEntropy: E,
        videohookBackend: function (e) {
            let t = ["N/A", "Direct3D 9", "Direct3D 10", "Direct3D 11", "Direct3D 12", "OpenGL", "Vulkan"];
            return e < t.length ? t[e] : "Unknown";
        },
    },
    P = {
        audioLevel: function (e) {
            return Math.max(g(e), -100) + 100;
        },
    },
    j = (e) => e,
    x = (e) => {
        let [t] = a.useState([]);
        return (
            t.push({
                value: e.value,
                time: Date.now(),
            }),
            t.length > 600 && t.shift(),
            (0, r.jsx)(s.Z, {
                converter: e.converter,
                dataPoints: t,
                width: e.width,
                height: e.height,
            })
        );
    };
function C(e) {
    var t, n, a;
    let { label: i, value: l, section: u } = e,
        m = null != (n = D[i]) ? n : j,
        p = P[i],
        h =
            o.Pz[i] &&
            (Array.isArray(l) && l.length > 0 && "number" == typeof l[0].value
                ? (0, r.jsx)(s.Z, {
                      converter: p,
                      dataPoints: l,
                      width: 300,
                      height: 100,
                  })
                : "number" == typeof l
                  ? (0, r.jsx)(x, {
                        converter: p,
                        value: l,
                        width: 300,
                        height: 100,
                    })
                  : void 0),
        f = Array.isArray(l) ? (null == (t = l.at(-1)) ? void 0 : t.value) : l;
    return (0, r.jsx)(c.Z, {
        label: i,
        valueRendered: m(f),
        section: u,
        renderGraph: h,
        children: null != (a = d[i]) ? a : i,
    });
}
