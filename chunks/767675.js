r.r(t), r.d(t, { default: () => eP });
var n = r(627968),
    i = r(64700),
    a = r(979186);
r(321073), r(667532);
var o = r(735438),
    s = r.n(o),
    l = r(17928),
    d = r(97808),
    c = r(778712),
    u = r(534514),
    m = r(233545),
    p = r(83257),
    h = r(361739),
    y = r(47167),
    b = r(235986),
    g = r(97469),
    f = r(363195),
    C = r(734057),
    A = r(696451),
    F = r(763827),
    x = r(412780),
    _ = r(994500),
    v = r(287809),
    D = r(427262),
    E = r(289873),
    S = r(331322),
    R = r(503698),
    j = r.n(R),
    B = r(23339),
    I = r(691885),
    N = r(761508),
    k = r(684339),
    P = r(51092),
    w = r(969341);
r(134528), r(947204);
var T = r(796873),
    L = r.n(T),
    G = r(229659),
    M = r(661531),
    U = r(707554),
    H = r(404778),
    O = r(603349),
    W = r(41604);
let q = ["firCount", "nackCount"];
class $ extends i.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return q.includes(e) ? (0, n.jsx)(O.A, { color: M.A.unsafe_rawColors.YELLOW_300.css, className: W.nm }) : null;
    }
    render() {
        let { children: e, className: t, valueRendered: r, section: i, label: a, renderGraph: o } = this.props;
        return (0, n.jsxs)(b.A, {
            className: j()(W.AS, t),
            direction: b.A.Direction.VERTICAL,
            basis: "50%",
            children: [
                (0, n.jsxs)(b.A, {
                    className: W.l5,
                    align: b.A.Align.START,
                    children: [
                        (0, n.jsx)(b.A.Child, { children: (0, n.jsx)(U.H, { className: W.DD, children: e }) }),
                        Array.isArray(r)
                            ? (0, n.jsx)(b.A.Child, { grow: 1, children: r })
                            : (0, n.jsxs)(b.A.Child, {
                                  grow: 0,
                                  shrink: 0,
                                  children: [
                                      this.renderValueIcon(),
                                      (0, n.jsx)("span", { className: W.R$, title: r, children: r }),
                                  ],
                              }),
                    ],
                }),
                null !== o && (0, n.jsx)(b.A.Child, { className: W.JB, children: o }, null != i ? `${i}-${a}` : a),
                (0, n.jsx)(H.c, { className: W.yF }),
            ],
        });
    }
}
let V = {
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
function z(e) {
    return `${(e / 1e3).toFixed(2)} Kbps`;
}
function K(e) {
    return L().filesize(e);
}
function J(e) {
    return e;
}
function Q(e) {
    return `${e} ms`;
}
function X(e) {
    return `${e.toFixed(0)}%`;
}
function Z(e) {
    return e ? "Yes" : "No";
}
function Y(e) {
    return 20 * Math.log(e);
}
function ee(e) {
    let { last: t } = e;
    return `${t} ms`;
}
function et(e) {
    return e.toFixed(2);
}
let er = {
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
    en = {
        accelerateRate: X,
        audioDetected: Z,
        audioLevel: function (e) {
            return e <= 0 ? "-∞ dB" : `${Y(e).toFixed(2)} dB`;
        },
        availableOutgoingBitrate: z,
        averageDecodeTime: Q,
        averageEncodeTime: Q,
        bandwidthLimitedFrameRate: Z,
        bandwidthLimitedResolution: Z,
        bitrate: z,
        bitrateTarget: z,
        bytesReceived: K,
        bytesSent: K,
        codec: function (e) {
            let { id: t, name: r } = e;
            return (r = (r = "" === r ? "unknown" : r) ?? "unknown"), `${r[0].toUpperCase()}${r.slice(1)} (${t})`;
        },
        cpuLimitedResolution: Z,
        currentDelay: Q,
        currentSampleRate: function (e) {
            return e % 100 == 0 ? `${e / 1e3} kHz` : `${e} Hz`;
        },
        decoderImplementationName: J,
        delayEstimate: Q,
        encoderImplementationName: J,
        encoderQualityPsnr: function (e) {
            return `${Math.max(e, 0).toFixed(2)} dB`;
        },
        encoderQualityVmaf: et,
        encodeUsage: X,
        expandRate: X,
        filter: J,
        fractionLost: X,
        inboundBitrateEstimate: z,
        jitter: Q,
        jitterBuffer: Q,
        jitterBufferPreferred: Q,
        keyFrameInterval: Q,
        minPlayoutDelay: Q,
        outboundBitrateEstimate: z,
        pacerDelay: Q,
        ping: Q,
        powerEfficientDecoder: Z,
        powerEfficientEncoder: Z,
        preemptiveExpandRate: X,
        receiverBitrateEstimate: z,
        relativePlayoutDelay: ee,
        relativeReceptionDelay: ee,
        renderDelay: Q,
        resolution: (e) => {
            let { width: t, height: r } = e;
            return `${t}x${r}`;
        },
        sampleRateMismatchPercent: X,
        screenshareCapturedFps: et,
        screenshareCapturedFpsUnique: et,
        secondaryDecodedRate: X,
        secureFramesProtocolVersion: function (e) {
            return e > 0 ? `Version ${e}` : "Disabled";
        },
        speechExpandRate: X,
        targetDelay: Q,
        videoEntropy: et,
        videohookBackend: function (e) {
            let t = ["N/A", "Direct3D 9", "Direct3D 10", "Direct3D 11", "Direct3D 12", "OpenGL", "Vulkan"];
            return e < t.length ? t[e] : "Unknown";
        },
    },
    ei = {
        audioLevel: function (e) {
            return Math.max(Y(e), -100) + 100;
        },
    },
    ea = (e) => e,
    eo = (e) => {
        let [t] = i.useState([]);
        return (
            t.push({ value: e.value, time: Date.now() }),
            t.length > 600 && t.shift(),
            (0, n.jsx)(G.A, { converter: e.converter, dataPoints: t, width: e.width, height: e.height })
        );
    };
function es(e) {
    let { label: t, value: r, section: i } = e,
        a = en[t] ?? ea,
        o = ei[t],
        s =
            x.iA[t] &&
            (Array.isArray(r) && r.length > 0 && "number" == typeof r[0].value
                ? (0, n.jsx)(G.A, { converter: o, dataPoints: r, width: 300, height: 100 })
                : "number" == typeof r
                  ? (0, n.jsx)(eo, { converter: o, value: r, width: 300, height: 100 })
                  : void 0),
        l = Array.isArray(r) ? r.at(-1)?.value : r;
    return (0, n.jsx)($, { label: t, valueRendered: a(l), section: i, renderGraph: s, children: V[t] ?? t });
}
var el = r(731854),
    ed = r(818050);
let ec = { [el.r8.NO_OVERRIDE]: "None", [el.r8.LOW]: "Low Quality Stream", [el.r8.HIGH]: "High Quality Stream" };
function eu(e) {
    let t = [],
        r = 0;
    for (e.length % 2 != 0 && e.push((0, n.jsx)(b.A, { basis: "50%", grow: 0 }, r++)); e.length > 0; )
        t.push((0, n.jsx)(b.A, { basis: "50%", grow: 0, children: e.splice(0, 2) }, r++));
    return t;
}
let em = { ssrc: 1, codec: 2 };
function ep(e) {
    let {
            streams: t,
            context: r,
            mediaEngineConnectionId: a,
            userId: o,
            videoStreams: s,
            title: d,
            showUserInfo: c = !1,
            showSimulcastOverride: p = !1,
        } = e,
        [h, y] = i.useState("0"),
        g = (0, l.bG)([F.A], () => (c ? F.A.getGuildId() : null)),
        f = (0, l.bG)([v.default], () => (c && null != o ? v.default.getUser(o) : null)),
        C = (0, l.bG)([A.Ay], () => (c && null != g && null != o ? A.Ay.getNick(g, o) : null));
    if (null == t || (c && null == o) || 0 === t.length) return (0, n.jsx)(E.y, { type: E.y.Type.SPINNING_CIRCLE });
    let _ = d;
    c && null != f && (_ = `${d} — ${C ?? D.Ay.getName(f)}`);
    let R = t.map((e, t) => {
            let r, i;
            return (0, n.jsx)(
                N.V.Item,
                {
                    id: t.toString(),
                    children:
                        ((r = (0, B.$G)(e.type)),
                        (i = ""),
                        "resolution" in e &&
                            null != e.resolution &&
                            0 !== e.resolution.width &&
                            0 !== e.resolution.height &&
                            (i = ` (${e.resolution.width}x${e.resolution.height})`),
                        r + i),
                },
                t.toString(),
            );
        }),
        T = Math.min(parseInt(h, 10), t.length - 1),
        L = t[T],
        G = (function (e, t, r, i) {
            let a,
                o = [];
            for (let t of Object.keys(e).sort((e, t) => {
                let r = em[e],
                    n = em[t];
                return r !== n
                    ? void 0 === r
                        ? 1
                        : void 0 === n
                          ? -1
                          : r - n
                    : x.iA[e] !== x.iA[t]
                      ? x.iA[e]
                          ? 1
                          : -1
                      : e > t
                        ? 1
                        : -1;
            })) {
                let i = e[t];
                er[t] || void 0 === i || o.push((0, n.jsx)(es, { section: r, label: t, value: i }, t));
            }
            return (0, n.jsxs)(
                "div",
                {
                    className: ed.C2,
                    children: [
                        "video" === e.type &&
                            null != t &&
                            null != r &&
                            null != i &&
                            (null != (a = i.get(t, r, e.ssrc))
                                ? (0, n.jsx)("div", {
                                      className: j()(W.tN, ed.C2),
                                      children: (0, n.jsx)(P.A, {
                                          streamId: a,
                                          videoComponent: w.Ay.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: k.u.REPLAY_VIDEO_STREAM,
                                          userId: r,
                                      }),
                                  })
                                : null),
                        eu(o),
                    ],
                },
                `${e.type} + ${e.ssrc}`,
            );
        })(L, a, o, s),
        M =
            p &&
            "video" === L.type &&
            null != a &&
            null != o &&
            null != s &&
            r === el.x.DEFAULT &&
            (0, n.jsx)(b.A, {
                className: ed.SX,
                children: (0, n.jsx)(b.A.Child, {
                    basis: "100%",
                    children: (0, n.jsx)(I.l, {
                        label: "Simulcast Override",
                        value: x.Ay.getSimulcastDebugOverride(o, r),
                        onSelectionChange: (e) => {
                            m.z0(o, r, e);
                        },
                        options: Object.values(el.r8).map((e) => ({ id: e, value: e, label: ec[e] })),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                }),
            });
    return (0, n.jsxs)(S.B, {
        gap: 16,
        children: [
            (0, n.jsx)(u.D, { variant: "heading-md/medium", children: _ }),
            (0, n.jsx)(N.V, {
                type: "top",
                look: "brand",
                selectedItem: h,
                onItemSelect: y,
                className: W.$H,
                children: R,
            }),
            G,
            M,
        ],
    });
}
var eh = r(985018);
function ey(e) {
    let { camera: t } = e;
    if (null == t) return (0, n.jsx)(E.y, { type: E.y.Type.SPINNING_CIRCLE });
    let r = s().map(t, (e, t) => {
        if (!(er[t] || void 0 === e)) return (0, n.jsx)(es, { label: t, value: e }, t);
    });
    return (0, n.jsxs)(S.B, {
        children: [(0, n.jsx)(u.D, { variant: "heading-md/medium", children: eh.intl.string(eh.t["2AGBWH"]) }), eu(r)],
    });
}
let eb = {
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
function eg(e) {
    let { clips: t } = e;
    if (null == t) return (0, n.jsx)(E.y, { type: E.y.Type.SPINNING_CIRCLE });
    let r = s().map(t, (e, t) => {
        if (void 0 !== e && "buffers" !== t) return (0, n.jsx)(es, { label: t, value: e }, t);
    });
    return (
        r.push(
            (0, n.jsx)(
                es,
                { label: "Frames Per Second", value: t.recentEncodedFrames / (t.recentDurationMs / 1e3) },
                "framerate",
            ),
        ),
        (0, n.jsxs)(S.B, {
            children: [
                (0, n.jsx)(u.D, { variant: "heading-md/medium", children: eh.intl.string(eh.t.MKrFKE) }),
                eu(r),
                (function (e) {
                    if (null != e.buffers)
                        return e.buffers.map((e) => {
                            let t = [];
                            for (let r of Object.keys(e).sort((e, t) => {
                                let r = eb[e],
                                    n = eb[t];
                                return r !== n ? (void 0 === r ? 1 : void 0 === n ? -1 : r - n) : e > t ? 1 : -1;
                            })) {
                                let i = e[r];
                                null !== i && "key" !== r && t.push((0, n.jsx)(es, { label: r, value: i }, r));
                            }
                            return (0, n.jsxs)(
                                "div",
                                {
                                    className: ed.C2,
                                    children: [
                                        (0, n.jsx)(u.D, { variant: "heading-md/medium", children: `Buffer: ${e.key}` }),
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
let ef = l.Ay.connectStores([x.Ay], (e) => {
        let { context: t, index: r, videoStreams: n } = e,
            i = x.Ay.getAllStats(t)[r],
            { section: a } = (0, x.Bz)(x.Ay.getSection());
        if (null == a) throw Error("Unrecognized section format");
        let o = null;
        return (
            null != i && null != i.rtp.inbound && (o = i.rtp.inbound[a] ?? []),
            { mediaEngineConnectionId: i?.mediaEngineConnectionId, userId: a, streams: o, videoStreams: n }
        );
    })(function (e) {
        let { streams: t, context: r, index: i, userId: a, mediaEngineConnectionId: o, videoStreams: s } = e;
        return (0, n.jsx)(ep, {
            streams: t,
            context: r,
            index: i,
            mediaEngineConnectionId: o,
            userId: a,
            videoStreams: s,
            title: eh.intl.string(eh.t.SJmZaq),
            showUserInfo: !0,
        });
    }),
    eC = l.Ay.connectStores([x.Ay], (e) => {
        let { context: t, index: r } = e,
            n = x.Ay.getAllStats(t)[r];
        return { outbound: null != n ? n.rtp.outbound : null };
    })(function (e) {
        let { outbound: t, context: r, index: i } = e;
        return (0, n.jsx)(ep, {
            streams: t,
            context: r,
            index: i,
            title: eh.intl.string(eh.t["3u0gII"]),
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
    eF = [
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
    ex = new Set([...eF, ...Object.values(eA).map((e) => e.key)]);
class e_ extends i.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        return null == e
            ? (0, n.jsx)(E.y, { type: E.y.Type.SPINNING_CIRCLE })
            : (0, n.jsxs)(S.B, {
                  children: [
                      (0, n.jsx)(u.D, { variant: "heading-md/medium", children: eh.intl.string(eh.t["gWbr/U"]) }),
                      eu(
                          (function (e) {
                              let t = null != e.hybridGdiBitBltFrames && null != e.hybridGdiPrintWindowFrames,
                                  r = [];
                              for (let i of eF) {
                                  if ("hybridGdiFrames" === i && t) continue;
                                  let a = e[i];
                                  if (void 0 === a) continue;
                                  let o = eA[i],
                                      s = null != o ? e[o.key] : void 0;
                                  null != o && void 0 !== s
                                      ? r.push(
                                            (0, n.jsx)(
                                                $,
                                                {
                                                    label: i,
                                                    valueRendered: `${a} (${s})`,
                                                    renderGraph: null,
                                                    children: `${V[i] ?? i} (${o.suffix})`,
                                                },
                                                i,
                                            ),
                                        )
                                      : r.push((0, n.jsx)(es, { label: i, value: a }, i));
                              }
                              for (let [t, i] of Object.entries(e))
                                  ex.has(t) ||
                                      er[t] ||
                                      void 0 === i ||
                                      r.push((0, n.jsx)(es, { label: t, value: i }, t));
                              return r;
                          })(e),
                      ),
                  ],
              });
    }
}
var ev = r(967198),
    eD = r(116956),
    eE = r(351906),
    eS = r(562153),
    eR = r(917592);
class ej extends i.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: r, hostname: i } = this.props;
        if (null == e) return (0, n.jsx)(E.y, { type: E.y.Type.SPINNING_CIRCLE });
        let a = { ...e, hostname: i },
            o = s().map(a, (e, t) => {
                if ("receiverReports" !== t && (!r || "localAddress" !== t))
                    return (0, n.jsx)(es, { label: t, value: e }, t);
            }),
            l = s().map(a.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? e.bitrate.at(-1)?.value : e.bitrate,
                    r = v.default.getUser(e.id);
                var n = eS.Ay.getNickname(ev.A.getGuildId(), void 0, r);
                return (
                    null == n && (n = null != r ? r.username : e.id),
                    { displayName: n, bitrate: t / 1e3, lost: (100 * e.fractionLost) / 256 }
                );
            }),
            d = s().sortBy(l, (e) => e.displayName),
            c = s().map(d, (e) => {
                var t, r, i;
                let a, o;
                return (
                    (t = e.displayName),
                    (r = e.bitrate),
                    (i = e.lost),
                    (a = (0, n.jsxs)(b.A, {
                        id: `bitrate-${t}`,
                        justify: b.A.Justify.BETWEEN,
                        children: [
                            (0, n.jsx)("span", { children: "Bitrate:" }),
                            (0, n.jsxs)("span", { children: [r.toFixed(2), " Kbps"] }),
                        ],
                    })),
                    (o = (0, n.jsxs)(b.A, {
                        id: `lost-${t}`,
                        justify: b.A.Justify.BETWEEN,
                        children: [
                            (0, n.jsx)("span", { children: "Packet Loss:" }),
                            (0, n.jsxs)("span", { children: [i.toFixed(0), "%"] }),
                        ],
                    })),
                    (0, n.jsx)($, { label: t, valueRendered: [a, o], children: t }, t)
                );
            });
        return (0, n.jsxs)(S.B, {
            className: W._8,
            children: [
                (0, n.jsx)(u.D, {
                    variant: "heading-md/medium",
                    children: eh.intl.string(eh.t.wU9IN2) + (null != t ? " - " + t : ""),
                }),
                eu(o),
                0 === c.length ? null : (0, n.jsx)(H.c, { className: ed.SX }),
                eu(c),
            ],
        });
    }
}
let eB = l.Ay.connectStores([x.Ay, F.A, eE.A, eD.A], (e) => {
    let { context: t, index: r } = e,
        n = x.Ay.getAllStats(t)[r],
        i =
            t === el.x.STREAM
                ? Object.values(eD.A.getRTCConnections()).find(
                      (e) => e.getMediaEngineConnectionId() === n.mediaEngineConnectionId,
                  )
                : null,
        a = i?.hostname ?? "";
    return {
        hidePersonalInformation: eE.A.hidePersonalInformation,
        transport: null != n ? n.transport : null,
        mediaSessionId: F.A.getMediaSessionId(),
        hostname: eR.A.getShortHostname(a),
    };
})(ej);
var eI = r(652215);
function eN(e, t, r, i, a) {
    let o = [];
    if (null == t) return o;
    let {
        transport: l,
        rtp: { inbound: u, outbound: p },
        camera: y,
    } = t;
    if (
        (o.push({ section: h.Fq.HEADER, label: eh.intl.formatToPlainString(eh.t.PK5fOC, { context: e }) }),
        null != l &&
            o.push({
                section: (0, x.Xi)(e, eI.zWA.TRANSPORT, r),
                label: eh.intl.string(eh.t.wU9IN2),
                element: eB,
                elementProps: { context: e, index: r },
            }),
        null == p ||
            s().isEmpty(p) ||
            o.push({
                section: (0, x.Xi)(e, eI.zWA.OUTBOUND, r),
                label: eh.intl.string(eh.t["3u0gII"]),
                element: eC,
                elementProps: { context: e, index: r },
            }),
        null != y &&
            o.push({
                section: (0, x.Xi)(e, eI.zWA.CAMERA, r),
                label: eh.intl.string(eh.t["2AGBWH"]),
                element: ey,
                elementProps: { context: e, index: r, camera: y },
            }),
        null != u && !s().isEmpty(u))
    ) {
        let t = [];
        Object.keys(u).forEach((o) => {
            let s,
                l = v.default.getUser(o),
                p = A.Ay.getNick(a, o),
                h = (0, x.Xi)(e, o, r);
            null != u[o] &&
                u[o].length > 0 &&
                t.push({
                    section: h,
                    label:
                        null != l
                            ? (0, n.jsx)(b.A, {
                                  align: b.A.Align.CENTER,
                                  children: (0, n.jsx)(b.A.Child, {
                                      children: (0, n.jsxs)(b.A, {
                                          align: b.A.Align.CENTER,
                                          children: [
                                              (0, n.jsx)(d.eu, {
                                                  size: c._3.SIZE_24,
                                                  src: l.getAvatarURL(a, 24),
                                                  "aria-label": l.username,
                                                  className: W.my,
                                              }),
                                              (0, n.jsx)("span", { className: W.Xh, children: p ?? D.Ay.getName(l) }),
                                          ],
                                      }),
                                  }),
                              })
                            : ((s = p ?? o),
                              (0, n.jsx)(b.A, {
                                  align: b.A.Align.CENTER,
                                  children: (0, n.jsx)(b.A.Child, {
                                      children: (0, n.jsx)(b.A, {
                                          align: b.A.Align.CENTER,
                                          children: (0, n.jsx)("span", { className: W.Xh, children: s }),
                                      }),
                                  }),
                              })),
                    ariaLabel: null != l ? l.tag : o,
                    onClick: () => {
                        m.c4(h);
                    },
                    element: ef,
                    elementProps: { context: e, index: r, videoStreams: i },
                });
        }),
            t.length > 0 && (o.push({ section: h.Fq.HEADER, label: eh.intl.string(eh.t.SJmZaq) }), o.push(...t));
    }
    return o;
}
function ek() {
    let { defaultStats: e, streamStats: t } = (0, l.bG)(
            [x.Ay],
            () => ({ defaultStats: x.Ay.getAllStats(el.x.DEFAULT), streamStats: x.Ay.getAllStats(el.x.STREAM) }),
            [],
            l.My,
        ),
        r = (0, l.bG)([F.A, C.A], () => C.A.getChannel(F.A.getChannelId())),
        a = e.concat(t).find((e) => null != e.screenshare)?.screenshare,
        o = t.find((e) => null != e.clips)?.clips,
        s = (0, l.bG)([f.A], () => f.A.theme),
        d = (0, g.NC)(),
        c = (0, l.bG)([x.Ay], () => x.Ay.getSection()),
        b = (function (e) {
            let {
                    defaultStats: t,
                    streamStats: r,
                    videoStreams: i,
                    screenshare: a,
                    clips: o,
                    channel: s,
                    connectionState: l,
                } = e,
                d = t.flatMap((e, t) => eN(el.x.DEFAULT, e, t, i, s?.getGuildId())),
                c = r.flatMap((e, t) => eN(el.x.STREAM, e, t, i, s?.getGuildId())),
                m = [],
                p = [],
                b = { section: h.Fq.DIVIDER };
            return (
                null != a &&
                    (m.push(b),
                    m.push({
                        section: eI.zWA.SCREENSHARE,
                        label: eh.intl.string(eh.t["gWbr/U"]),
                        element: e_,
                        elementProps: { screenshare: a },
                    })),
                null != o &&
                    (p.push(b),
                    p.push({
                        section: eI.zWA.CLIPS,
                        label: eh.intl.string(eh.t.MKrFKE),
                        element: eg,
                        elementProps: { clips: o },
                    })),
                c.length > 0 && c.unshift(b),
                [
                    ...(null != s
                        ? [
                              {
                                  section: h.Fq.CUSTOM,
                                  label: "Channel Name",
                                  element: () =>
                                      (0, n.jsx)(u.D, {
                                          className: W.HA,
                                          variant: "heading-lg/semibold",
                                          children: (0, y.m1)(s, v.default, _.A),
                                      }),
                              },
                          ]
                        : []),
                    {
                        section: h.Fq.CUSTOM,
                        label: "Connection State",
                        element: () =>
                            (0, n.jsx)(u.D, {
                                className: W.HA,
                                variant: "heading-md/normal",
                                children: l === eI.S7L.RTC_CONNECTED ? "Connected" : "Disconnected",
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
            videoStreams: (0, l.bG)([x.Ay], () => x.Ay.getVideoStreams()),
            screenshare: a,
            clips: o,
            channel: r,
            connectionState: (0, l.bG)([F.A], () => F.A.getState()),
        });
    return (
        i.useEffect(
            () => () => {
                m.VN();
            },
            [],
        ),
        i.useEffect(() => {
            b.some((e) => e.section === c) || c === x.EM || m.c4(x.EM);
        }, [b, c]),
        (0, n.jsx)(p.Ay, { theme: s, sidebarTheme: d, section: c, onSetSection: m.c4, sections: b })
    );
}
function eP(e) {
    let { windowKey: t } = e;
    return (0, n.jsx)(a.A, {
        withTitleBar: !0,
        windowKey: t,
        title: eh.intl.string(eh.t["5I/1fl"]),
        children: (0, n.jsx)(ek, {}),
    });
}
