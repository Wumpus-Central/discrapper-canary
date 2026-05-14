r.r(t), r.d(t, { default: () => ew });
var n = r(627968),
    i = r(64700),
    a = r(979186);
r(321073), r(667532);
var s = r(735438),
    l = r.n(s),
    o = r(17928),
    d = r(97808),
    u = r(778712),
    c = r(534514),
    m = r(233545),
    p = r(83257),
    h = r(361739),
    y = r(47167),
    f = r(235986),
    g = r(97469),
    A = r(363195),
    F = r(734057),
    b = r(696451),
    v = r(763827),
    C = r(412780),
    E = r(994500),
    x = r(287809),
    D = r(427262),
    S = r(289873),
    R = r(331322),
    j = r(503698),
    N = r.n(j),
    P = r(23339),
    I = r(691885),
    k = r(761508),
    B = r(684339),
    w = r(51092),
    T = r(235058);
r(134528), r(947204);
var G = r(796873),
    L = r.n(G),
    M = r(229659),
    U = r(661531),
    $ = r(707554),
    q = r(404778),
    O = r(603349),
    W = r(41604);
let V = ["firCount", "nackCount"];
class H extends i.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return V.includes(e) ? (0, n.jsx)(O.A, { color: U.A.unsafe_rawColors.YELLOW_300.css, className: W.nm }) : null;
    }
    render() {
        let { children: e, className: t, valueRendered: r, section: i, label: a, renderGraph: s } = this.props;
        return (0, n.jsxs)(f.A, {
            className: N()(W.AS, t),
            direction: f.A.Direction.VERTICAL,
            basis: "50%",
            children: [
                (0, n.jsxs)(f.A, {
                    className: W.l5,
                    align: f.A.Align.START,
                    children: [
                        (0, n.jsx)(f.A.Child, { children: (0, n.jsx)($.H, { className: W.DD, children: e }) }),
                        Array.isArray(r)
                            ? (0, n.jsx)(f.A.Child, { grow: 1, children: r })
                            : (0, n.jsxs)(f.A.Child, {
                                  grow: 0,
                                  shrink: 0,
                                  children: [
                                      this.renderValueIcon(),
                                      (0, n.jsx)("span", { className: W.R$, title: r, children: r }),
                                  ],
                              }),
                    ],
                }),
                null !== s && (0, n.jsx)(f.A.Child, { className: W.JB, children: s }, null != i ? `${i}-${a}` : a),
                (0, n.jsx)(q.c, { className: W.yF }),
            ],
        });
    }
}
let z = {
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
    x11Frames: "X11 Frames",
    pipewireFrames: "Pipewire Frames",
};
function K(e) {
    return `${(e / 1e3).toFixed(2)} Kbps`;
}
function J(e) {
    return L().filesize(e);
}
function _(e) {
    return e;
}
function Q(e) {
    return `${e} ms`;
}
function X(e) {
    return `${e.toFixed(0)}%`;
}
function Y(e) {
    return e ? "Yes" : "No";
}
function Z(e) {
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
        audioDetected: Y,
        audioLevel: function (e) {
            return e <= 0 ? "-\u221E dB" : `${Z(e).toFixed(2)} dB`;
        },
        availableOutgoingBitrate: K,
        averageDecodeTime: Q,
        averageEncodeTime: Q,
        bandwidthLimitedFrameRate: Y,
        bandwidthLimitedResolution: Y,
        bitrate: K,
        bitrateTarget: K,
        bytesReceived: J,
        bytesSent: J,
        codec: function (e) {
            let { id: t, name: r } = e;
            return (r = (r = "" === r ? "unknown" : r) ?? "unknown"), `${r[0].toUpperCase()}${r.slice(1)} (${t})`;
        },
        cpuLimitedResolution: Y,
        currentDelay: Q,
        currentSampleRate: function (e) {
            return e % 100 == 0 ? `${e / 1e3} kHz` : `${e} Hz`;
        },
        decoderImplementationName: _,
        delayEstimate: Q,
        encoderImplementationName: _,
        encoderQualityPsnr: function (e) {
            return `${Math.max(e, 0).toFixed(2)} dB`;
        },
        encoderQualityVmaf: et,
        encodeUsage: X,
        expandRate: X,
        filter: _,
        fractionLost: X,
        inboundBitrateEstimate: K,
        jitter: Q,
        jitterBuffer: Q,
        jitterBufferPreferred: Q,
        keyFrameInterval: Q,
        minPlayoutDelay: Q,
        outboundBitrateEstimate: K,
        pacerDelay: Q,
        ping: Q,
        powerEfficientDecoder: Y,
        powerEfficientEncoder: Y,
        preemptiveExpandRate: X,
        receiverBitrateEstimate: K,
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
            return Math.max(Z(e), -100) + 100;
        },
    },
    ea = (e) => e,
    es = (e) => {
        let [t] = i.useState([]);
        return (
            t.push({ value: e.value, time: Date.now() }),
            t.length > 600 && t.shift(),
            (0, n.jsx)(M.A, { converter: e.converter, dataPoints: t, width: e.width, height: e.height })
        );
    };
function el(e) {
    let { label: t, value: r, section: i } = e,
        a = en[t] ?? ea,
        s = ei[t],
        l =
            C.iA[t] &&
            (Array.isArray(r) && r.length > 0 && "number" == typeof r[0].value
                ? (0, n.jsx)(M.A, { converter: s, dataPoints: r, width: 300, height: 100 })
                : "number" == typeof r
                  ? (0, n.jsx)(es, { converter: s, value: r, width: 300, height: 100 })
                  : void 0),
        o = Array.isArray(r) ? r.at(-1)?.value : r;
    return (0, n.jsx)(H, { label: t, valueRendered: a(o), section: i, renderGraph: l, children: z[t] ?? t });
}
var eo = r(731854),
    ed = r(818050);
let eu = { [eo.r8.NO_OVERRIDE]: "None", [eo.r8.LOW]: "Low Quality Stream", [eo.r8.HIGH]: "High Quality Stream" };
function ec(e) {
    let t = [],
        r = 0;
    for (e.length % 2 != 0 && e.push((0, n.jsx)(f.A, { basis: "50%", grow: 0 }, r++)); e.length > 0; )
        t.push((0, n.jsx)(f.A, { basis: "50%", grow: 0, children: e.splice(0, 2) }, r++));
    return t;
}
let em = { ssrc: 1, codec: 2 };
function ep(e) {
    let {
            streams: t,
            context: r,
            mediaEngineConnectionId: a,
            userId: s,
            videoStreams: l,
            title: d,
            showUserInfo: u = !1,
            showSimulcastOverride: p = !1,
        } = e,
        [h, y] = i.useState("0"),
        g = (0, o.bG)([v.A], () => (u ? v.A.getGuildId() : null)),
        A = (0, o.bG)([x.default], () => (u && null != s ? x.default.getUser(s) : null)),
        F = (0, o.bG)([b.Ay], () => (u && null != g && null != s ? b.Ay.getNick(g, s) : null));
    if (null == t || (u && null == s) || 0 === t.length) return (0, n.jsx)(S.y, { type: S.y.Type.SPINNING_CIRCLE });
    let E = d;
    u && null != A && (E = `${d} \u{2014} ${F ?? D.Ay.getName(A)}`);
    let j = t.map((e, t) => {
            let r, i;
            return (0, n.jsx)(
                k.V.Item,
                {
                    id: t.toString(),
                    children:
                        ((r = (0, P.$G)(e.type)),
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
        G = Math.min(parseInt(h, 10), t.length - 1),
        L = t[G],
        M = (function (e, t, r, i) {
            let a,
                s = [];
            for (let t of Object.keys(e).sort((e, t) => {
                let r = em[e],
                    n = em[t];
                return r !== n
                    ? void 0 === r
                        ? 1
                        : void 0 === n
                          ? -1
                          : r - n
                    : C.iA[e] !== C.iA[t]
                      ? C.iA[e]
                          ? 1
                          : -1
                      : e > t
                        ? 1
                        : -1;
            })) {
                let i = e[t];
                er[t] || void 0 === i || s.push((0, n.jsx)(el, { section: r, label: t, value: i }, t));
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
                                      className: N()(W.tN, ed.C2),
                                      children: (0, n.jsx)(w.A, {
                                          streamId: a,
                                          videoComponent: T.Ay.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: B.u.REPLAY_VIDEO_STREAM,
                                          userId: r,
                                      }),
                                  })
                                : null),
                        ec(s),
                    ],
                },
                `${e.type} + ${e.ssrc}`,
            );
        })(L, a, s, l),
        U =
            p &&
            "video" === L.type &&
            null != a &&
            null != s &&
            null != l &&
            r === eo.x.DEFAULT &&
            (0, n.jsx)(f.A, {
                className: ed.SX,
                children: (0, n.jsx)(f.A.Child, {
                    basis: "100%",
                    children: (0, n.jsx)(I.l, {
                        label: "Simulcast Override",
                        value: C.Ay.getSimulcastDebugOverride(s, r),
                        onSelectionChange: (e) => {
                            m.z0(s, r, e);
                        },
                        options: Object.values(eo.r8).map((e) => ({ id: e, value: e, label: eu[e] })),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                }),
            });
    return (0, n.jsxs)(R.B, {
        gap: 16,
        children: [
            (0, n.jsx)(c.D, { variant: "heading-md/medium", children: E }),
            (0, n.jsx)(k.V, {
                type: "top",
                look: "brand",
                selectedItem: h,
                onItemSelect: y,
                className: W.$H,
                children: j,
            }),
            M,
            U,
        ],
    });
}
var eh = r(375708);
function ey(e) {
    let { camera: t } = e;
    if (null == t) return (0, n.jsx)(S.y, { type: S.y.Type.SPINNING_CIRCLE });
    let r = l().map(t, (e, t) => {
        if (!(er[t] || void 0 === e)) return (0, n.jsx)(el, { label: t, value: e }, t);
    });
    return (0, n.jsxs)(R.B, {
        children: [(0, n.jsx)(c.D, { variant: "heading-md/medium", children: eh.intl.string(eh.t["2AGBWH"]) }), ec(r)],
    });
}
let ef = {
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
    if (null == t) return (0, n.jsx)(S.y, { type: S.y.Type.SPINNING_CIRCLE });
    let r = l().map(t, (e, t) => {
        if (void 0 !== e && "buffers" !== t) return (0, n.jsx)(el, { label: t, value: e }, t);
    });
    return (
        r.push(
            (0, n.jsx)(
                el,
                { label: "Frames Per Second", value: t.recentEncodedFrames / (t.recentDurationMs / 1e3) },
                "framerate",
            ),
        ),
        (0, n.jsxs)(R.B, {
            children: [
                (0, n.jsx)(c.D, { variant: "heading-md/medium", children: eh.intl.string(eh.t.MKrFKE) }),
                ec(r),
                (function (e) {
                    if (null != e.buffers)
                        return e.buffers.map((e) => {
                            let t = [];
                            for (let r of Object.keys(e).sort((e, t) => {
                                let r = ef[e],
                                    n = ef[t];
                                return r !== n ? (void 0 === r ? 1 : void 0 === n ? -1 : r - n) : e > t ? 1 : -1;
                            })) {
                                let i = e[r];
                                null !== i && "key" !== r && t.push((0, n.jsx)(el, { label: r, value: i }, r));
                            }
                            return (0, n.jsxs)(
                                "div",
                                {
                                    className: ed.C2,
                                    children: [
                                        (0, n.jsx)(c.D, { variant: "heading-md/medium", children: `Buffer: ${e.key}` }),
                                        ec(t),
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
let eA = o.Ay.connectStores([C.Ay], (e) => {
        let { context: t, index: r, videoStreams: n } = e,
            i = C.Ay.getAllStats(t)[r],
            { section: a } = (0, C.Bz)(C.Ay.getSection());
        if (null == a) throw Error("Unrecognized section format");
        let s = null;
        return (
            null != i && null != i.rtp.inbound && (s = i.rtp.inbound[a] ?? []),
            { mediaEngineConnectionId: i?.mediaEngineConnectionId, userId: a, streams: s, videoStreams: n }
        );
    })(function (e) {
        let { streams: t, context: r, index: i, userId: a, mediaEngineConnectionId: s, videoStreams: l } = e;
        return (0, n.jsx)(ep, {
            streams: t,
            context: r,
            index: i,
            mediaEngineConnectionId: s,
            userId: a,
            videoStreams: l,
            title: eh.intl.string(eh.t.SJmZaq),
            showUserInfo: !0,
        });
    }),
    eF = o.Ay.connectStores([C.Ay], (e) => {
        let { context: t, index: r } = e,
            n = C.Ay.getAllStats(t)[r];
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
    eb = {
        hdrFrames: { key: "hdrFramesCapable", suffix: "Capable" },
        hybridDxgiFrames: { key: "hybridDxgiFramesUnique", suffix: "Unique" },
        hybridGdiBitBltFrames: { key: "hybridGdiBitBltFramesUnique", suffix: "Unique" },
        hybridGdiPrintWindowFrames: { key: "hybridGdiPrintWindowFramesUnique", suffix: "Unique" },
        hybridGraphicsCaptureFrames: { key: "hybridGraphicsCaptureFramesUnique", suffix: "Unique" },
        hybridVideohookFrames: { key: "hybridVideohookFramesUnique", suffix: "Unique" },
    },
    ev = [
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
        "x11Frames",
        "pipewireFrames",
    ],
    eC = new Set([...ev, ...Object.values(eb).map((e) => e.key)]);
class eE extends i.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        return null == e
            ? (0, n.jsx)(S.y, { type: S.y.Type.SPINNING_CIRCLE })
            : (0, n.jsxs)(R.B, {
                  children: [
                      (0, n.jsx)(c.D, { variant: "heading-md/medium", children: eh.intl.string(eh.t["gWbr/U"]) }),
                      ec(
                          (function (e) {
                              let t = null != e.hybridGdiBitBltFrames && null != e.hybridGdiPrintWindowFrames,
                                  r = [];
                              for (let i of ev) {
                                  if ("hybridGdiFrames" === i && t) continue;
                                  let a = e[i];
                                  if (void 0 === a) continue;
                                  let s = eb[i],
                                      l = null != s ? e[s.key] : void 0;
                                  null != s && void 0 !== l
                                      ? r.push(
                                            (0, n.jsx)(
                                                H,
                                                {
                                                    label: i,
                                                    valueRendered: `${a} (${l})`,
                                                    renderGraph: null,
                                                    children: `${z[i] ?? i} (${s.suffix})`,
                                                },
                                                i,
                                            ),
                                        )
                                      : r.push((0, n.jsx)(el, { label: i, value: a }, i));
                              }
                              for (let [t, i] of Object.entries(e))
                                  eC.has(t) ||
                                      er[t] ||
                                      void 0 === i ||
                                      r.push((0, n.jsx)(el, { label: t, value: i }, t));
                              return r;
                          })(e),
                      ),
                  ],
              });
    }
}
var ex = r(967198),
    eD = r(116956),
    eS = r(351906),
    eR = r(562153),
    ej = r(917592);
class eN extends i.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: r, hostname: i } = this.props;
        if (null == e) return (0, n.jsx)(S.y, { type: S.y.Type.SPINNING_CIRCLE });
        let a = { ...e, hostname: i },
            s = l().map(a, (e, t) => {
                if ("receiverReports" !== t && (!r || "localAddress" !== t))
                    return (0, n.jsx)(el, { label: t, value: e }, t);
            }),
            o = l().map(a.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? e.bitrate.at(-1)?.value : e.bitrate,
                    r = x.default.getUser(e.id);
                var n = eR.Ay.getNickname(ex.A.getGuildId(), void 0, r);
                return (
                    null == n && (n = null != r ? r.username : e.id),
                    { displayName: n, bitrate: t / 1e3, lost: (100 * e.fractionLost) / 256 }
                );
            }),
            d = l().sortBy(o, (e) => e.displayName),
            u = l().map(d, (e) => {
                var t, r, i;
                let a, s;
                return (
                    (t = e.displayName),
                    (r = e.bitrate),
                    (i = e.lost),
                    (a = (0, n.jsxs)(f.A, {
                        id: `bitrate-${t}`,
                        justify: f.A.Justify.BETWEEN,
                        children: [
                            (0, n.jsx)("span", { children: "Bitrate:" }),
                            (0, n.jsxs)("span", { children: [r.toFixed(2), " Kbps"] }),
                        ],
                    })),
                    (s = (0, n.jsxs)(f.A, {
                        id: `lost-${t}`,
                        justify: f.A.Justify.BETWEEN,
                        children: [
                            (0, n.jsx)("span", { children: "Packet Loss:" }),
                            (0, n.jsxs)("span", { children: [i.toFixed(0), "%"] }),
                        ],
                    })),
                    (0, n.jsx)(H, { label: t, valueRendered: [a, s], children: t }, t)
                );
            });
        return (0, n.jsxs)(R.B, {
            className: W._8,
            children: [
                (0, n.jsx)(c.D, {
                    variant: "heading-md/medium",
                    children: eh.intl.string(eh.t.wU9IN2) + (null != t ? " - " + t : ""),
                }),
                ec(s),
                0 === u.length ? null : (0, n.jsx)(q.c, { className: ed.SX }),
                ec(u),
            ],
        });
    }
}
let eP = o.Ay.connectStores([C.Ay, v.A, eS.A, eD.A], (e) => {
    let { context: t, index: r } = e,
        n = C.Ay.getAllStats(t)[r],
        i =
            t === eo.x.STREAM
                ? Object.values(eD.A.getRTCConnections()).find(
                      (e) => e.getMediaEngineConnectionId() === n.mediaEngineConnectionId,
                  )
                : null,
        a = i?.hostname ?? "";
    return {
        hidePersonalInformation: eS.A.hidePersonalInformation,
        transport: null != n ? n.transport : null,
        mediaSessionId: v.A.getMediaSessionId(),
        hostname: ej.A.getShortHostname(a),
    };
})(eN);
var eI = r(652215);
function ek(e, t, r, i, a) {
    let s = [];
    if (null == t) return s;
    let {
        transport: o,
        rtp: { inbound: c, outbound: p },
        camera: y,
    } = t;
    if (
        (s.push({ section: h.Fq.HEADER, label: eh.intl.formatToPlainString(eh.t.PK5fOC, { context: e }) }),
        null != o &&
            s.push({
                section: (0, C.Xi)(e, eI.zWA.TRANSPORT, r),
                label: eh.intl.string(eh.t.wU9IN2),
                element: eP,
                elementProps: { context: e, index: r },
            }),
        null == p ||
            l().isEmpty(p) ||
            s.push({
                section: (0, C.Xi)(e, eI.zWA.OUTBOUND, r),
                label: eh.intl.string(eh.t["3u0gII"]),
                element: eF,
                elementProps: { context: e, index: r },
            }),
        null != y &&
            s.push({
                section: (0, C.Xi)(e, eI.zWA.CAMERA, r),
                label: eh.intl.string(eh.t["2AGBWH"]),
                element: ey,
                elementProps: { context: e, index: r, camera: y },
            }),
        null != c && !l().isEmpty(c))
    ) {
        let t = [];
        Object.keys(c).forEach((s) => {
            let l,
                o = x.default.getUser(s),
                p = b.Ay.getNick(a, s),
                h = (0, C.Xi)(e, s, r);
            null != c[s] &&
                c[s].length > 0 &&
                t.push({
                    section: h,
                    label:
                        null != o
                            ? (0, n.jsx)(f.A, {
                                  align: f.A.Align.CENTER,
                                  children: (0, n.jsx)(f.A.Child, {
                                      children: (0, n.jsxs)(f.A, {
                                          align: f.A.Align.CENTER,
                                          children: [
                                              (0, n.jsx)(d.eu, {
                                                  size: u._3.SIZE_24,
                                                  src: o.getAvatarURL(a, 24),
                                                  "aria-label": o.username,
                                                  className: W.my,
                                              }),
                                              (0, n.jsx)("span", { className: W.Xh, children: p ?? D.Ay.getName(o) }),
                                          ],
                                      }),
                                  }),
                              })
                            : ((l = p ?? s),
                              (0, n.jsx)(f.A, {
                                  align: f.A.Align.CENTER,
                                  children: (0, n.jsx)(f.A.Child, {
                                      children: (0, n.jsx)(f.A, {
                                          align: f.A.Align.CENTER,
                                          children: (0, n.jsx)("span", { className: W.Xh, children: l }),
                                      }),
                                  }),
                              })),
                    ariaLabel: null != o ? o.tag : s,
                    onClick: () => {
                        m.c4(h);
                    },
                    element: eA,
                    elementProps: { context: e, index: r, videoStreams: i },
                });
        }),
            t.length > 0 && (s.push({ section: h.Fq.HEADER, label: eh.intl.string(eh.t.SJmZaq) }), s.push(...t));
    }
    return s;
}
function eB() {
    let { defaultStats: e, streamStats: t } = (0, o.bG)(
            [C.Ay],
            () => ({ defaultStats: C.Ay.getAllStats(eo.x.DEFAULT), streamStats: C.Ay.getAllStats(eo.x.STREAM) }),
            [],
            o.My,
        ),
        r = (0, o.bG)([v.A, F.A], () => F.A.getChannel(v.A.getChannelId())),
        a = e.concat(t).find((e) => null != e.screenshare)?.screenshare,
        s = t.find((e) => null != e.clips)?.clips,
        l = (0, o.bG)([A.A], () => A.A.theme),
        d = (0, g.NC)(),
        u = (0, o.bG)([C.Ay], () => C.Ay.getSection()),
        f = (function (e) {
            let {
                    defaultStats: t,
                    streamStats: r,
                    videoStreams: i,
                    screenshare: a,
                    clips: s,
                    channel: l,
                    connectionState: o,
                } = e,
                d = t.flatMap((e, t) => ek(eo.x.DEFAULT, e, t, i, l?.getGuildId())),
                u = r.flatMap((e, t) => ek(eo.x.STREAM, e, t, i, l?.getGuildId())),
                m = [],
                p = [],
                f = { section: h.Fq.DIVIDER };
            return (
                null != a &&
                    (m.push(f),
                    m.push({
                        section: eI.zWA.SCREENSHARE,
                        label: eh.intl.string(eh.t["gWbr/U"]),
                        element: eE,
                        elementProps: { screenshare: a },
                    })),
                null != s &&
                    (p.push(f),
                    p.push({
                        section: eI.zWA.CLIPS,
                        label: eh.intl.string(eh.t.MKrFKE),
                        element: eg,
                        elementProps: { clips: s },
                    })),
                u.length > 0 && u.unshift(f),
                [
                    ...(null != l
                        ? [
                              {
                                  section: h.Fq.CUSTOM,
                                  label: "Channel Name",
                                  element: () =>
                                      (0, n.jsx)(c.D, {
                                          className: W.HA,
                                          variant: "heading-lg/semibold",
                                          children: (0, y.m1)(l, x.default, E.A),
                                      }),
                              },
                          ]
                        : []),
                    {
                        section: h.Fq.CUSTOM,
                        label: "Connection State",
                        element: () =>
                            (0, n.jsx)(c.D, {
                                className: W.HA,
                                variant: "heading-md/normal",
                                children: o === eI.S7L.RTC_CONNECTED ? "Connected" : "Disconnected",
                            }),
                    },
                    ...d,
                    ...u,
                    ...m,
                    ...p,
                ]
            );
        })({
            defaultStats: e,
            streamStats: t,
            videoStreams: (0, o.bG)([C.Ay], () => C.Ay.getVideoStreams()),
            screenshare: a,
            clips: s,
            channel: r,
            connectionState: (0, o.bG)([v.A], () => v.A.getState()),
        });
    return (
        i.useEffect(
            () => () => {
                m.VN();
            },
            [],
        ),
        i.useEffect(() => {
            f.some((e) => e.section === u) || u === C.EM || m.c4(C.EM);
        }, [f, u]),
        (0, n.jsx)(p.Ay, { theme: l, sidebarTheme: d, section: u, onSetSection: m.c4, sections: f })
    );
}
function ew(e) {
    let { windowKey: t } = e;
    return (0, n.jsx)(a.A, {
        withTitleBar: !0,
        windowKey: t,
        title: eh.intl.string(eh.t["5I/1fl"]),
        children: (0, n.jsx)(eB, {}),
    });
}
