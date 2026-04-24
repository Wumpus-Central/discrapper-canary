"use strict";
n.r(t), n.d(t, { default: () => ek });
var i = n(627968),
    r = n(64700),
    a = n(979186);
n(321073), n(667532);
var s = n(735438),
    l = n.n(s),
    o = n(17928),
    d = n(97808),
    c = n(778712),
    u = n(534514),
    m = n(233545),
    p = n(83257),
    _ = n(361739),
    h = n(47167),
    g = n(235986),
    b = n(97469),
    y = n(363195),
    f = n(734057),
    A = n(696451),
    S = n(763827),
    E = n(412780),
    x = n(994500),
    C = n(287809),
    v = n(427262),
    N = n(289873),
    D = n(331322),
    I = n(503698),
    L = n.n(I),
    F = n(23339),
    R = n(691885),
    j = n(761508),
    T = n(684339),
    k = n(51092),
    M = n(969341);
n(134528), n(947204);
var O = n(796873),
    G = n.n(O),
    w = n(229659),
    B = n(661531),
    P = n(707554),
    U = n(404778),
    H = n(603349),
    W = n(41604);
let V = ["firCount", "nackCount"];
class q extends r.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return V.includes(e) ? (0, i.jsx)(H.A, { color: B.A.unsafe_rawColors.YELLOW_300.css, className: W.nm }) : null;
    }
    render() {
        let { children: e, className: t, valueRendered: n, section: r, label: a, renderGraph: s } = this.props;
        return (0, i.jsxs)(g.A, {
            className: L()(W.AS, t),
            direction: g.A.Direction.VERTICAL,
            basis: "50%",
            children: [
                (0, i.jsxs)(g.A, {
                    className: W.l5,
                    align: g.A.Align.START,
                    children: [
                        (0, i.jsx)(g.A.Child, { children: (0, i.jsx)(P.H, { className: W.DD, children: e }) }),
                        Array.isArray(n)
                            ? (0, i.jsx)(g.A.Child, { grow: 1, children: n })
                            : (0, i.jsxs)(g.A.Child, {
                                  grow: 0,
                                  shrink: 0,
                                  children: [
                                      this.renderValueIcon(),
                                      (0, i.jsx)("span", { className: W.R$, title: n, children: n }),
                                  ],
                              }),
                    ],
                }),
                null !== s && (0, i.jsx)(g.A.Child, { className: W.JB, children: s }, null != r ? `${r}-${a}` : a),
                (0, i.jsx)(U.c, { className: W.yF }),
            ],
        });
    }
}
let $ = {
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
    hdrFrames: "HDR Frames",
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
    powerEfficientDecoder: "Power Efficient Decoder",
    powerEfficientEncoder: "Power Efficient Encoder",
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
    screenshareCapturedFps: "Captured FPS",
    screenshareCapturedFpsUnique: "Unique Captured FPS",
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
function Q(e) {
    return `${(e / 1e3).toFixed(2)} Kbps`;
}
function z(e) {
    return G().filesize(e);
}
function K(e) {
    return e;
}
function Y(e) {
    return `${e} ms`;
}
function J(e) {
    return `${e.toFixed(0)}%`;
}
function Z(e) {
    return e ? "Yes" : "No";
}
function X(e) {
    return 20 * Math.log(e);
}
function ee(e) {
    let { last: t } = e;
    return `${t} ms`;
}
function et(e) {
    return e.toFixed(2);
}
let en = {
        audioJitterBuffer: !0,
        audioJitterBufferSamples: !0,
        audioJitterDelay: !0,
        audioJitterDelaySamples: !0,
        audioJitterTarget: !0,
        audioJitterTargetSamples: !0,
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
        skipHistoryJson: !0,
        sumOfSquaredFramesDurations: !0,
        targetWindowElevated: !0,
        timestamp: !0,
        type: !0,
        videoJitterBuffer: !0,
        videoJitterDelay: !0,
        videoJitterTarget: !0,
        voiceActivityDetectorProcessTime: !0,
        consecutiveStaticColorFrames: !0,
    },
    ei = {
        accelerateRate: J,
        audioDetected: Z,
        audioLevel: function (e) {
            return e <= 0 ? "-∞ dB" : `${X(e).toFixed(2)} dB`;
        },
        availableOutgoingBitrate: Q,
        averageDecodeTime: Y,
        averageEncodeTime: Y,
        bandwidthLimitedFrameRate: Z,
        bandwidthLimitedResolution: Z,
        bitrate: Q,
        bitrateTarget: Q,
        bytesReceived: z,
        bytesSent: z,
        codec: function (e) {
            let { id: t, name: n } = e;
            return (n = (n = "" === n ? "unknown" : n) ?? "unknown"), `${n[0].toUpperCase()}${n.slice(1)} (${t})`;
        },
        cpuLimitedResolution: Z,
        currentDelay: Y,
        currentSampleRate: function (e) {
            return e % 100 == 0 ? `${e / 1e3} kHz` : `${e} Hz`;
        },
        decoderImplementationName: K,
        delayEstimate: Y,
        encoderImplementationName: K,
        encoderQualityPsnr: function (e) {
            return `${Math.max(e, 0).toFixed(2)} dB`;
        },
        encoderQualityVmaf: et,
        encodeUsage: J,
        expandRate: J,
        filter: K,
        fractionLost: J,
        inboundBitrateEstimate: Q,
        jitter: Y,
        jitterBuffer: Y,
        jitterBufferPreferred: Y,
        keyFrameInterval: Y,
        minPlayoutDelay: Y,
        outboundBitrateEstimate: Q,
        pacerDelay: Y,
        ping: Y,
        powerEfficientDecoder: Z,
        powerEfficientEncoder: Z,
        preemptiveExpandRate: J,
        receiverBitrateEstimate: Q,
        relativePlayoutDelay: ee,
        relativeReceptionDelay: ee,
        renderDelay: Y,
        resolution: (e) => {
            let { width: t, height: n } = e;
            return `${t}x${n}`;
        },
        sampleRateMismatchPercent: J,
        screenshareCapturedFps: et,
        screenshareCapturedFpsUnique: et,
        secondaryDecodedRate: J,
        secureFramesProtocolVersion: function (e) {
            return e > 0 ? `Version ${e}` : "Disabled";
        },
        speechExpandRate: J,
        targetDelay: Y,
        videoEntropy: et,
        videohookBackend: function (e) {
            let t = ["N/A", "Direct3D 9", "Direct3D 10", "Direct3D 11", "Direct3D 12", "OpenGL", "Vulkan"];
            return e < t.length ? t[e] : "Unknown";
        },
    },
    er = {
        audioLevel: function (e) {
            return Math.max(X(e), -100) + 100;
        },
    },
    ea = (e) => e,
    es = (e) => {
        let [t] = r.useState([]);
        return (
            t.push({ value: e.value, time: Date.now() }),
            t.length > 600 && t.shift(),
            (0, i.jsx)(w.A, { converter: e.converter, dataPoints: t, width: e.width, height: e.height })
        );
    };
function el(e) {
    let { label: t, value: n, section: r } = e,
        a = ei[t] ?? ea,
        s = er[t],
        l =
            E.iA[t] &&
            (Array.isArray(n) && n.length > 0 && "number" == typeof n[0].value
                ? (0, i.jsx)(w.A, { converter: s, dataPoints: n, width: 300, height: 100 })
                : "number" == typeof n
                  ? (0, i.jsx)(es, { converter: s, value: n, width: 300, height: 100 })
                  : void 0),
        o = Array.isArray(n) ? n.at(-1)?.value : n;
    return (0, i.jsx)(q, { label: t, valueRendered: a(o), section: r, renderGraph: l, children: $[t] ?? t });
}
var eo = n(731854),
    ed = n(818050);
let ec = { [eo.r8.NO_OVERRIDE]: "None", [eo.r8.LOW]: "Low Quality Stream", [eo.r8.HIGH]: "High Quality Stream" };
function eu(e) {
    let t = [],
        n = 0;
    for (e.length % 2 != 0 && e.push((0, i.jsx)(g.A, { basis: "50%", grow: 0 }, n++)); e.length > 0; )
        t.push((0, i.jsx)(g.A, { basis: "50%", grow: 0, children: e.splice(0, 2) }, n++));
    return t;
}
let em = { ssrc: 1, codec: 2 };
function ep(e) {
    let {
            streams: t,
            context: n,
            mediaEngineConnectionId: a,
            userId: s,
            videoStreams: l,
            title: d,
            showUserInfo: c = !1,
            showSimulcastOverride: p = !1,
        } = e,
        [_, h] = r.useState("0"),
        b = (0, o.bG)([S.A], () => (c ? S.A.getGuildId() : null)),
        y = (0, o.bG)([C.default], () => (c && null != s ? C.default.getUser(s) : null)),
        f = (0, o.bG)([A.Ay], () => (c && null != b && null != s ? A.Ay.getNick(b, s) : null));
    if (null == t || (c && null == s) || 0 === t.length) return (0, i.jsx)(N.y, { type: N.y.Type.SPINNING_CIRCLE });
    let x = d;
    c && null != y && (x = `${d} — ${f ?? v.Ay.getName(y)}`);
    let I = t.map((e, t) => {
            let n, r;
            return (0, i.jsx)(
                j.V.Item,
                {
                    id: t.toString(),
                    children:
                        ((n = (0, F.$G)(e.type)),
                        (r = ""),
                        "resolution" in e &&
                            null != e.resolution &&
                            0 !== e.resolution.width &&
                            0 !== e.resolution.height &&
                            (r = ` (${e.resolution.width}x${e.resolution.height})`),
                        n + r),
                },
                t.toString(),
            );
        }),
        O = Math.min(parseInt(_, 10), t.length - 1),
        G = t[O],
        w = (function (e, t, n, r) {
            let a,
                s = [];
            for (let t of Object.keys(e).sort((e, t) => {
                let n = em[e],
                    i = em[t];
                return n !== i
                    ? void 0 === n
                        ? 1
                        : void 0 === i
                          ? -1
                          : n - i
                    : E.iA[e] !== E.iA[t]
                      ? E.iA[e]
                          ? 1
                          : -1
                      : e > t
                        ? 1
                        : -1;
            })) {
                let r = e[t];
                en[t] || void 0 === r || s.push((0, i.jsx)(el, { section: n, label: t, value: r }, t));
            }
            return (0, i.jsxs)(
                "div",
                {
                    className: ed.C2,
                    children: [
                        "video" === e.type &&
                            null != t &&
                            null != n &&
                            null != r &&
                            (null != (a = r.get(t, n, e.ssrc))
                                ? (0, i.jsx)("div", {
                                      className: L()(W.tN, ed.C2),
                                      children: (0, i.jsx)(k.A, {
                                          streamId: a,
                                          videoComponent: M.Ay.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: T.u.REPLAY_VIDEO_STREAM,
                                          userId: n,
                                      }),
                                  })
                                : null),
                        eu(s),
                    ],
                },
                `${e.type} + ${e.ssrc}`,
            );
        })(G, a, s, l),
        B =
            p &&
            "video" === G.type &&
            null != a &&
            null != s &&
            null != l &&
            n === eo.x.DEFAULT &&
            (0, i.jsx)(g.A, {
                className: ed.SX,
                children: (0, i.jsx)(g.A.Child, {
                    basis: "100%",
                    children: (0, i.jsx)(R.l, {
                        label: "Simulcast Override",
                        value: E.Ay.getSimulcastDebugOverride(s, n),
                        onSelectionChange: (e) => {
                            m.z0(s, n, e);
                        },
                        options: Object.values(eo.r8).map((e) => ({ id: e, value: e, label: ec[e] })),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                }),
            });
    return (0, i.jsxs)(D.B, {
        gap: 16,
        children: [
            (0, i.jsx)(u.D, { variant: "heading-md/medium", children: x }),
            (0, i.jsx)(j.V, {
                type: "top",
                look: "brand",
                selectedItem: _,
                onItemSelect: h,
                className: W.$H,
                children: I,
            }),
            w,
            B,
        ],
    });
}
var e_ = n(985018);
function eh(e) {
    let { camera: t } = e;
    if (null == t) return (0, i.jsx)(N.y, { type: N.y.Type.SPINNING_CIRCLE });
    let n = l().map(t, (e, t) => {
        if (!(en[t] || void 0 === e)) return (0, i.jsx)(el, { label: t, value: e }, t);
    });
    return (0, i.jsxs)(D.B, {
        children: [(0, i.jsx)(u.D, { variant: "heading-md/medium", children: e_.intl.string(e_.t["2AGBWH"]) }), eu(n)],
    });
}
let eg = {
    userId: 1,
    dataType: 2,
    savedKB: 3,
    numFrames: 4,
    startTimestampMs: 5,
    endTimestampMs: 6,
    width: 7,
    height: 8,
    audioChannels: 9,
    sampleRate: 10,
};
function eb(e) {
    let { clips: t } = e;
    if (null == t) return (0, i.jsx)(N.y, { type: N.y.Type.SPINNING_CIRCLE });
    let n = l().map(t, (e, t) => {
        if (void 0 !== e && "buffers" !== t) return (0, i.jsx)(el, { label: t, value: e }, t);
    });
    return (
        n.push(
            (0, i.jsx)(
                el,
                { label: "Frames Per Second", value: t.recentEncodedFrames / (t.recentDurationMs / 1e3) },
                "framerate",
            ),
        ),
        (0, i.jsxs)(D.B, {
            children: [
                (0, i.jsx)(u.D, { variant: "heading-md/medium", children: e_.intl.string(e_.t.MKrFKE) }),
                eu(n),
                (function (e) {
                    if (null != e.buffers)
                        return e.buffers.map((e) => {
                            let t = [];
                            for (let n of Object.keys(e).sort((e, t) => {
                                let n = eg[e],
                                    i = eg[t];
                                return n !== i ? (void 0 === n ? 1 : void 0 === i ? -1 : n - i) : e > t ? 1 : -1;
                            })) {
                                let r = e[n];
                                null !== r && "key" !== n && t.push((0, i.jsx)(el, { label: n, value: r }, n));
                            }
                            return (0, i.jsxs)(
                                "div",
                                {
                                    className: ed.C2,
                                    children: [
                                        (0, i.jsx)(u.D, { variant: "heading-md/medium", children: `Buffer: ${e.key}` }),
                                        eu(t),
                                    ],
                                },
                                `Buffer: ${e.key}`,
                            );
                        });
                })(t),
            ],
        })
    );
}
let ey = o.Ay.connectStores([E.Ay], (e) => {
        let { context: t, index: n, videoStreams: i } = e,
            r = E.Ay.getAllStats(t)[n],
            { section: a } = (0, E.Bz)(E.Ay.getSection());
        if (null == a) throw Error("Unrecognized section format");
        let s = null;
        return (
            null != r && null != r.rtp.inbound && (s = r.rtp.inbound[a] ?? []),
            { mediaEngineConnectionId: r?.mediaEngineConnectionId, userId: a, streams: s, videoStreams: i }
        );
    })(function (e) {
        let { streams: t, context: n, index: r, userId: a, mediaEngineConnectionId: s, videoStreams: l } = e;
        return (0, i.jsx)(ep, {
            streams: t,
            context: n,
            index: r,
            mediaEngineConnectionId: s,
            userId: a,
            videoStreams: l,
            title: e_.intl.string(e_.t.SJmZaq),
            showUserInfo: !0,
        });
    }),
    ef = o.Ay.connectStores([E.Ay], (e) => {
        let { context: t, index: n } = e,
            i = E.Ay.getAllStats(t)[n];
        return { outbound: null != i ? i.rtp.outbound : null };
    })(function (e) {
        let { outbound: t, context: n, index: r } = e;
        return (0, i.jsx)(ep, {
            streams: t,
            context: n,
            index: r,
            title: e_.intl.string(e_.t["3u0gII"]),
            showUserInfo: !1,
            showSimulcastOverride: !1,
        });
    }),
    eA = {
        hdrFrames: { key: "hdrFramesCapable", suffix: "Capable" },
        hybridDxgiFrames: { key: "hybridDxgiFramesUnique", suffix: "Unique" },
        hybridGdiBitBltFrames: { key: "hybridGdiBitBltFramesUnique", suffix: "Unique" },
        hybridGdiPrintWindowFrames: { key: "hybridGdiPrintWindowFramesUnique", suffix: "Unique" },
        hybridGraphicsCaptureFrames: { key: "hybridGraphicsCaptureFramesUnique", suffix: "Unique" },
        hybridVideohookFrames: { key: "hybridVideohookFramesUnique", suffix: "Unique" },
    },
    eS = [
        "hdrFrames",
        "hybridCaptureMethodSwitches",
        "hybridDxgiFrames",
        "hybridGdiBitBltFrames",
        "hybridGdiPrintWindowFrames",
        "hybridGraphicsCaptureFrames",
        "hybridVideohookFrames",
        "hybridGdiFrames",
        "quartzFrames",
        "screenCaptureKitFrames",
        "screenshareFrames",
        "videohookFrames",
        "videohookBackend",
        "screenshareCapturedFps",
        "screenshareCapturedFpsUnique",
    ],
    eE = new Set([...eS, ...Object.values(eA).map((e) => e.key)]);
class ex extends r.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        return null == e
            ? (0, i.jsx)(N.y, { type: N.y.Type.SPINNING_CIRCLE })
            : (0, i.jsxs)(D.B, {
                  children: [
                      (0, i.jsx)(u.D, { variant: "heading-md/medium", children: e_.intl.string(e_.t["gWbr/U"]) }),
                      eu(
                          (function (e) {
                              let t = null != e.hybridGdiBitBltFrames && null != e.hybridGdiPrintWindowFrames,
                                  n = [];
                              for (let r of eS) {
                                  if ("hybridGdiFrames" === r && t) continue;
                                  let a = e[r];
                                  if (void 0 === a) continue;
                                  let s = eA[r],
                                      l = null != s ? e[s.key] : void 0;
                                  null != s && void 0 !== l
                                      ? n.push(
                                            (0, i.jsx)(
                                                q,
                                                {
                                                    label: r,
                                                    valueRendered: `${a} (${l})`,
                                                    renderGraph: null,
                                                    children: `${$[r] ?? r} (${s.suffix})`,
                                                },
                                                r,
                                            ),
                                        )
                                      : n.push((0, i.jsx)(el, { label: r, value: a }, r));
                              }
                              for (let [t, r] of Object.entries(e))
                                  eE.has(t) ||
                                      en[t] ||
                                      void 0 === r ||
                                      n.push((0, i.jsx)(el, { label: t, value: r }, t));
                              return n;
                          })(e),
                      ),
                  ],
              });
    }
}
var eC = n(967198),
    ev = n(116956),
    eN = n(351906),
    eD = n(562153),
    eI = n(917592);
class eL extends r.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: n, hostname: r } = this.props;
        if (null == e) return (0, i.jsx)(N.y, { type: N.y.Type.SPINNING_CIRCLE });
        let a = { ...e, hostname: r },
            s = l().map(a, (e, t) => {
                if ("receiverReports" !== t && (!n || "localAddress" !== t))
                    return (0, i.jsx)(el, { label: t, value: e }, t);
            }),
            o = l().map(a.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? e.bitrate.at(-1)?.value : e.bitrate,
                    n = C.default.getUser(e.id);
                var i = eD.Ay.getNickname(eC.A.getGuildId(), void 0, n);
                return (
                    null == i && (i = null != n ? n.username : e.id),
                    { displayName: i, bitrate: t / 1e3, lost: (100 * e.fractionLost) / 256 }
                );
            }),
            d = l().sortBy(o, (e) => e.displayName),
            c = l().map(d, (e) => {
                var t, n, r;
                let a, s;
                return (
                    (t = e.displayName),
                    (n = e.bitrate),
                    (r = e.lost),
                    (a = (0, i.jsxs)(g.A, {
                        id: `bitrate-${t}`,
                        justify: g.A.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)("span", { children: "Bitrate:" }),
                            (0, i.jsxs)("span", { children: [n.toFixed(2), " Kbps"] }),
                        ],
                    })),
                    (s = (0, i.jsxs)(g.A, {
                        id: `lost-${t}`,
                        justify: g.A.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)("span", { children: "Packet Loss:" }),
                            (0, i.jsxs)("span", { children: [r.toFixed(0), "%"] }),
                        ],
                    })),
                    (0, i.jsx)(q, { label: t, valueRendered: [a, s], children: t }, t)
                );
            });
        return (0, i.jsxs)(D.B, {
            className: W._8,
            children: [
                (0, i.jsx)(u.D, {
                    variant: "heading-md/medium",
                    children: e_.intl.string(e_.t.wU9IN2) + (null != t ? " - " + t : ""),
                }),
                eu(s),
                0 === c.length ? null : (0, i.jsx)(U.c, { className: ed.SX }),
                eu(c),
            ],
        });
    }
}
let eF = o.Ay.connectStores([E.Ay, S.A, eN.A, ev.A], (e) => {
    let { context: t, index: n } = e,
        i = E.Ay.getAllStats(t)[n],
        r =
            t === eo.x.STREAM
                ? Object.values(ev.A.getRTCConnections()).find(
                      (e) => e.getMediaEngineConnectionId() === i.mediaEngineConnectionId,
                  )
                : null,
        a = r?.hostname ?? "";
    return {
        hidePersonalInformation: eN.A.hidePersonalInformation,
        transport: null != i ? i.transport : null,
        mediaSessionId: S.A.getMediaSessionId(),
        hostname: eI.A.getShortHostname(a),
    };
})(eL);
var eR = n(652215);
function ej(e, t, n, r, a) {
    let s = [];
    if (null == t) return s;
    let {
        transport: o,
        rtp: { inbound: u, outbound: p },
        camera: h,
    } = t;
    if (
        (s.push({ section: _.Fq.HEADER, label: e_.intl.formatToPlainString(e_.t.PK5fOC, { context: e }) }),
        null != o &&
            s.push({
                section: (0, E.Xi)(e, eR.zWA.TRANSPORT, n),
                label: e_.intl.string(e_.t.wU9IN2),
                element: eF,
                elementProps: { context: e, index: n },
            }),
        null == p ||
            l().isEmpty(p) ||
            s.push({
                section: (0, E.Xi)(e, eR.zWA.OUTBOUND, n),
                label: e_.intl.string(e_.t["3u0gII"]),
                element: ef,
                elementProps: { context: e, index: n },
            }),
        null != h &&
            s.push({
                section: (0, E.Xi)(e, eR.zWA.CAMERA, n),
                label: e_.intl.string(e_.t["2AGBWH"]),
                element: eh,
                elementProps: { context: e, index: n, camera: h },
            }),
        null != u && !l().isEmpty(u))
    ) {
        let t = [];
        Object.keys(u).forEach((s) => {
            let l,
                o = C.default.getUser(s),
                p = A.Ay.getNick(a, s),
                _ = (0, E.Xi)(e, s, n);
            null != u[s] &&
                u[s].length > 0 &&
                t.push({
                    section: _,
                    label:
                        null != o
                            ? (0, i.jsx)(g.A, {
                                  align: g.A.Align.CENTER,
                                  children: (0, i.jsx)(g.A.Child, {
                                      children: (0, i.jsxs)(g.A, {
                                          align: g.A.Align.CENTER,
                                          children: [
                                              (0, i.jsx)(d.eu, {
                                                  size: c._3.SIZE_24,
                                                  src: o.getAvatarURL(a, 24),
                                                  "aria-label": o.username,
                                                  className: W.my,
                                              }),
                                              (0, i.jsx)("span", { className: W.Xh, children: p ?? v.Ay.getName(o) }),
                                          ],
                                      }),
                                  }),
                              })
                            : ((l = p ?? s),
                              (0, i.jsx)(g.A, {
                                  align: g.A.Align.CENTER,
                                  children: (0, i.jsx)(g.A.Child, {
                                      children: (0, i.jsx)(g.A, {
                                          align: g.A.Align.CENTER,
                                          children: (0, i.jsx)("span", { className: W.Xh, children: l }),
                                      }),
                                  }),
                              })),
                    ariaLabel: null != o ? o.tag : s,
                    onClick: () => {
                        m.c4(_);
                    },
                    element: ey,
                    elementProps: { context: e, index: n, videoStreams: r },
                });
        }),
            t.length > 0 && (s.push({ section: _.Fq.HEADER, label: e_.intl.string(e_.t.SJmZaq) }), s.push(...t));
    }
    return s;
}
function eT() {
    let { defaultStats: e, streamStats: t } = (0, o.bG)(
            [E.Ay],
            () => ({ defaultStats: E.Ay.getAllStats(eo.x.DEFAULT), streamStats: E.Ay.getAllStats(eo.x.STREAM) }),
            [],
            o.My,
        ),
        n = (0, o.bG)([S.A, f.A], () => f.A.getChannel(S.A.getChannelId())),
        a = e.concat(t).find((e) => null != e.screenshare)?.screenshare,
        s = t.find((e) => null != e.clips)?.clips,
        l = (0, o.bG)([y.A], () => y.A.theme),
        d = (0, b.NC)(),
        c = (0, o.bG)([E.Ay], () => E.Ay.getSection()),
        g = (function (e) {
            let {
                    defaultStats: t,
                    streamStats: n,
                    videoStreams: r,
                    screenshare: a,
                    clips: s,
                    channel: l,
                    connectionState: o,
                } = e,
                d = t.flatMap((e, t) => ej(eo.x.DEFAULT, e, t, r, l?.getGuildId())),
                c = n.flatMap((e, t) => ej(eo.x.STREAM, e, t, r, l?.getGuildId())),
                m = [],
                p = [],
                g = { section: _.Fq.DIVIDER };
            return (
                null != a &&
                    (m.push(g),
                    m.push({
                        section: eR.zWA.SCREENSHARE,
                        label: e_.intl.string(e_.t["gWbr/U"]),
                        element: ex,
                        elementProps: { screenshare: a },
                    })),
                null != s &&
                    (p.push(g),
                    p.push({
                        section: eR.zWA.CLIPS,
                        label: e_.intl.string(e_.t.MKrFKE),
                        element: eb,
                        elementProps: { clips: s },
                    })),
                c.length > 0 && c.unshift(g),
                [
                    ...(null != l
                        ? [
                              {
                                  section: _.Fq.CUSTOM,
                                  label: "Channel Name",
                                  element: () =>
                                      (0, i.jsx)(u.D, {
                                          className: W.HA,
                                          variant: "heading-lg/semibold",
                                          children: (0, h.m1)(l, C.default, x.A),
                                      }),
                              },
                          ]
                        : []),
                    {
                        section: _.Fq.CUSTOM,
                        label: "Connection State",
                        element: () =>
                            (0, i.jsx)(u.D, {
                                className: W.HA,
                                variant: "heading-md/normal",
                                children: o === eR.S7L.RTC_CONNECTED ? "Connected" : "Disconnected",
                            }),
                    },
                    ...d,
                    ...c,
                    ...m,
                    ...p,
                ]
            );
        })({
            defaultStats: e,
            streamStats: t,
            videoStreams: (0, o.bG)([E.Ay], () => E.Ay.getVideoStreams()),
            screenshare: a,
            clips: s,
            channel: n,
            connectionState: (0, o.bG)([S.A], () => S.A.getState()),
        });
    return (
        r.useEffect(
            () => () => {
                m.VN();
            },
            [],
        ),
        r.useEffect(() => {
            g.some((e) => e.section === c) || c === E.EM || m.c4(E.EM);
        }, [g, c]),
        (0, i.jsx)(p.Ay, { theme: l, sidebarTheme: d, section: c, onSetSection: m.c4, sections: g })
    );
}
function ek(e) {
    let { windowKey: t } = e;
    return (0, i.jsx)(a.A, {
        withTitleBar: !0,
        windowKey: t,
        title: e_.intl.string(e_.t["5I/1fl"]),
        children: (0, i.jsx)(eT, {}),
    });
}
