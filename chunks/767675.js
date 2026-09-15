(r.r(t), r.d(t, { default: () => eL }));
var n = r(477900),
    a = r(582128),
    i = r(979186);
(r(321073), r(667532));
var s = r(435558),
    l = r.n(s),
    o = r(17928),
    d = r(97808),
    u = r(778712),
    c = r(297264),
    m = r(233545),
    p = r(83257),
    h = r(361739),
    y = r(47167),
    f = r(235986),
    g = r(97469),
    F = r(363195),
    A = r(734057),
    b = r(696451),
    D = r(763827),
    v = r(412780),
    E = r(994500),
    x = r(287809),
    C = r(427262),
    S = r(289873),
    R = r(331322),
    j = r(503698),
    P = r.n(j),
    N = r(23339),
    I = r(691885),
    k = r(761508),
    B = r(684339),
    w = r(51092),
    T = r(544576);
(r(134528), r(947204));
var G = r(796873),
    L = r.n(G),
    M = r(229659),
    U = r(661531),
    $ = r(707554),
    q = r(404778),
    O = r(603349),
    W = r(378885);
let V = ["firCount", "nackCount"];
class H extends a.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return V.includes(e) ? (0, n.jsx)(O.A, { color: U.A.unsafe_rawColors.YELLOW_300.css, className: W.nm }) : null;
    }
    render() {
        let { children: e, className: t, valueRendered: r, section: a, label: i, renderGraph: s } = this.props;
        return (0, n.jsxs)(f.A, {
            className: P()(W.AS, t),
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
                null !== s && (0, n.jsx)(f.A.Child, { className: W.JB, children: s }, null != a ? `${a}-${i}` : i),
                (0, n.jsx)(q.c, { className: W.yF }),
            ],
        });
    }
}
let K = {
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
    capturedFramesMean: "Captured Frames Mean",
    capturedFramesStdev: "Captured Frames Standard Deviation",
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
    encoderQualityPsnr: "Encoder PSNR",
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
    totalFramesDuration: "Frames Duration",
    totalFreezesDuration: "Freezes Duration",
    totalPausesDuration: "Pauses Duration",
    totalProcessingDelay: "Total Processing Delay",
    totalSamplesDuration: "Total Samples Duration",
    totalSamplesReceived: "Total Samples Received",
    videoEntropy: "Video Entropy",
    videohookBackend: "Videohook Backend",
    videohookFrames: "Videohook Frames",
    x11Frames: "X11 Frames",
    pipewireFrames: "Pipewire Frames",
};
function z(e) {
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
    return `${e.toFixed(2)} s`;
}
function Y(e) {
    return `${e.toFixed(0)}%`;
}
function Z(e) {
    return e ? "Yes" : "No";
}
function ee(e) {
    return 20 * Math.log(e);
}
function et(e) {
    let { last: t } = e;
    return `${t} ms`;
}
function er(e) {
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
        consecutiveStaticColorFrames: !0,
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
        totalDecodeTime: !0,
        type: !0,
        videoJitterBuffer: !0,
        videoJitterDelay: !0,
        videoJitterTarget: !0,
        voiceActivityDetectorProcessTime: !0,
    },
    ea = {
        accelerateRate: Y,
        audioDetected: Z,
        audioLevel: function (e) {
            return e <= 0 ? "-\u221E dB" : `${ee(e).toFixed(2)} dB`;
        },
        availableOutgoingBitrate: z,
        averageDecodeTime: Q,
        averageEncodeTime: Q,
        bandwidthLimitedFrameRate: Z,
        bandwidthLimitedResolution: Z,
        bitrate: z,
        bitrateTarget: z,
        bytesReceived: J,
        bytesSent: J,
        capturedFramesMean: Q,
        capturedFramesStdev: Q,
        codec: function (e) {
            let { id: t, name: r } = e;
            return ((r = (r = "" === r ? "unknown" : r) ?? "unknown"), `${r[0].toUpperCase()}${r.slice(1)} (${t})`);
        },
        cpuLimitedResolution: Z,
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
        encoderQualityVmaf: er,
        encoderReady: Z,
        encodeUsage: Y,
        expandRate: Y,
        filter: _,
        fractionLost: Y,
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
        preemptiveExpandRate: Y,
        processRunning: Z,
        receiverBitrateEstimate: z,
        relativePlayoutDelay: et,
        relativeReceptionDelay: et,
        renderDelay: Q,
        resolution: (e) => {
            let { width: t, height: r } = e;
            return `${t}x${r}`;
        },
        sampleRateMismatchPercent: Y,
        screenshareCapturedFps: er,
        screenshareCapturedFpsUnique: er,
        secondaryDecodedRate: Y,
        secureFramesProtocolVersion: function (e) {
            return e > 0 ? `Version ${e}` : "Disabled";
        },
        speechExpandRate: Y,
        targetDelay: Q,
        totalFramesDuration: Q,
        totalFreezesDuration: Q,
        totalPausesDuration: Q,
        totalProcessingDelay: X,
        totalSamplesDuration: X,
        videoEntropy: er,
        videohookBackend: function (e) {
            let t = ["N/A", "Direct3D 9", "Direct3D 10", "Direct3D 11", "Direct3D 12", "OpenGL", "Vulkan"];
            return e < t.length ? t[e] : "Unknown";
        },
    },
    ei = {
        audioLevel: function (e) {
            return Math.max(ee(e), -100) + 100;
        },
    };
function es(e) {
    return e;
}
let el = (e) => {
    let [t] = a.useState([]);
    return (
        t.push({ value: e.value, time: Date.now() }),
        t.length > 600 && t.shift(),
        (0, n.jsx)(M.A, { converter: e.converter, dataPoints: t, width: e.width, height: e.height })
    );
};
function eo(e) {
    let { label: t, value: r, section: a } = e,
        i = ea[t] ?? es,
        s = ei[t],
        l =
            v.iA[t] &&
            (Array.isArray(r) && r.length > 0 && "number" == typeof r[0].value
                ? (0, n.jsx)(M.A, { converter: s, dataPoints: r, width: 300, height: 100 })
                : "number" == typeof r
                  ? (0, n.jsx)(el, { converter: s, value: r, width: 300, height: 100 })
                  : void 0),
        o = Array.isArray(r) ? r.at(-1)?.value : r;
    return (0, n.jsx)(H, { label: t, valueRendered: i(o), section: a, renderGraph: l, children: K[t] ?? t });
}
var ed = r(731854),
    eu = r(221851);
let ec = { [ed.r8.NO_OVERRIDE]: "None", [ed.r8.LOW]: "Low Quality Stream", [ed.r8.HIGH]: "High Quality Stream" };
function em(e) {
    let t = [],
        r = 0;
    for (e.length % 2 != 0 && e.push((0, n.jsx)(f.A, { basis: "50%", grow: 0 }, r++)); e.length > 0;)
        t.push((0, n.jsx)(f.A, { basis: "50%", grow: 0, children: e.splice(0, 2) }, r++));
    return t;
}
let ep = { ssrc: 1, codec: 2 };
function eh(e) {
    let {
            streams: t,
            context: r,
            mediaEngineConnectionId: i,
            userId: s,
            videoStreams: l,
            title: d,
            showUserInfo: u = !1,
            showSimulcastOverride: p = !1,
        } = e,
        [h, y] = a.useState("0"),
        g = (0, o.bG)([D.A], () => (u ? D.A.getGuildId() : null)),
        F = (0, o.bG)([x.default], () => (u && null != s ? x.default.getUser(s) : null)),
        A = (0, o.bG)([b.Ay], () => (u && null != g && null != s ? b.Ay.getNick(g, s) : null));
    if (null == t || (u && null == s) || 0 === t.length) return (0, n.jsx)(S.y, { type: S.y.Type.SPINNING_CIRCLE });
    let E = d;
    u && null != F && (E = `${d} \u{2014} ${A ?? C.Ay.getName(F)}`);
    let j = t.map((e, t) => {
            let r, a;
            return (0, n.jsx)(
                k.V.Item,
                {
                    id: t.toString(),
                    children:
                        ((r = (0, N.$G)(e.type)),
                        (a = ""),
                        "resolution" in e &&
                            null != e.resolution &&
                            0 !== e.resolution.width &&
                            0 !== e.resolution.height &&
                            (a = ` (${e.resolution.width}x${e.resolution.height})`),
                        r + a),
                },
                t.toString(),
            );
        }),
        G = Math.min(parseInt(h, 10), t.length - 1),
        L = t[G],
        M = (function (e, t, r, a) {
            let i,
                s = [];
            for (let t of Object.keys(e).sort((e, t) => {
                let r = ep[e],
                    n = ep[t];
                return r !== n
                    ? void 0 === r
                        ? 1
                        : void 0 === n
                          ? -1
                          : r - n
                    : v.iA[e] !== v.iA[t]
                      ? v.iA[e]
                          ? 1
                          : -1
                      : e > t
                        ? 1
                        : -1;
            })) {
                let a = e[t];
                en[t] || void 0 === a || s.push((0, n.jsx)(eo, { section: r, label: t, value: a }, t));
            }
            return (0, n.jsxs)(
                "div",
                {
                    className: eu.C2,
                    children: [
                        "video" === e.type &&
                            null != t &&
                            null != r &&
                            null != a &&
                            (null != (i = a.get(t, r, e.ssrc))
                                ? (0, n.jsx)("div", {
                                      className: P()(W.tN, eu.C2),
                                      children: (0, n.jsx)(w.A, {
                                          streamId: i,
                                          videoComponent: T.Ay.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: B.u.REPLAY_VIDEO_STREAM,
                                          userId: r,
                                      }),
                                  })
                                : null),
                        em(s),
                    ],
                },
                `${e.type} + ${e.ssrc}`,
            );
        })(L, i, s, l),
        U =
            p &&
            "video" === L.type &&
            null != i &&
            null != s &&
            null != l &&
            r === ed.x.DEFAULT &&
            (0, n.jsx)(f.A, {
                className: eu.SX,
                children: (0, n.jsx)(f.A.Child, {
                    basis: "100%",
                    children: (0, n.jsx)(I.l, {
                        label: "Simulcast Override",
                        value: v.Ay.getSimulcastDebugOverride(s, r),
                        onSelectionChange: (e) => {
                            m.z0(s, r, e);
                        },
                        options: Object.values(ed.r8).map((e) => ({ id: e, value: e, label: ec[e] })),
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
var ey = r(375708);
function ef(e) {
    let { camera: t } = e;
    if (null == t) return (0, n.jsx)(S.y, { type: S.y.Type.SPINNING_CIRCLE });
    let r = l().map(t, (e, t) => {
        if (!(en[t] || void 0 === e)) return (0, n.jsx)(eo, { label: t, value: e }, t);
    });
    return (0, n.jsxs)(R.B, {
        children: [(0, n.jsx)(c.D, { variant: "heading-md/medium", children: ey.intl.string(ey.t["2AGBWH"]) }), em(r)],
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
    },
    eF = {
        processRunning: 1,
        encoderReady: 2,
        encodeWidth: 3,
        encodeHeight: 4,
        encodeFps: 5,
        measuredFps: 6,
        encoderImplementationName: 7,
        referenceBitrateKbps: 8,
        bitrateKbps: 9,
        maxBitrateKbps: 10,
        submittedFrames: 11,
        encodedFrames: 12,
        droppedFrames: 13,
        recentEncodedFrames: 14,
        recentDroppedFrames: 15,
        recentDurationMs: 16,
        clipDurationMs: 17,
        totalSavedKB: 18,
    };
function eA(e, t) {
    return Object.keys(e).sort((e, r) => {
        let n = t[e],
            a = t[r];
        return n !== a ? (void 0 === n ? 1 : void 0 === a ? -1 : n - a) : e > r ? 1 : -1;
    });
}
function eb(e) {
    let { clips: t } = e;
    if (null == t) return (0, n.jsx)(S.y, { type: S.y.Type.SPINNING_CIRCLE });
    let r = (function (e) {
        let t = [];
        for (let r of eA(e, eF)) {
            let a = e[r];
            void 0 !== a &&
                "buffers" !== r &&
                ("bitrateKbps" === r &&
                    t.length % 2 != 0 &&
                    t.push((0, n.jsx)(f.A, { basis: "50%", grow: 0 }, "bitrate-alignment")),
                t.push((0, n.jsx)(eo, { label: r, value: a }, r)));
        }
        return t;
    })(t);
    return (
        null != t.recentEncodedFrames &&
            null != t.recentDurationMs &&
            t.recentDurationMs > 0 &&
            r.push(
                (0, n.jsx)(
                    eo,
                    { label: "Frames Per Second", value: t.recentEncodedFrames / (t.recentDurationMs / 1e3) },
                    "framerate",
                ),
            ),
        (0, n.jsxs)(R.B, {
            children: [
                (0, n.jsx)(c.D, { variant: "heading-md/medium", children: ey.intl.string(ey.t.MKrFKE) }),
                em(r),
                (function (e) {
                    if (null != e.buffers)
                        return e.buffers.map((e) => {
                            let t = [];
                            for (let r of eA(e, eg)) {
                                let a = e[r];
                                null !== a && "key" !== r && t.push((0, n.jsx)(eo, { label: r, value: a }, r));
                            }
                            return (0, n.jsxs)(
                                "div",
                                {
                                    className: eu.C2,
                                    children: [
                                        (0, n.jsx)(c.D, { variant: "heading-md/medium", children: `Buffer: ${e.key}` }),
                                        em(t),
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
let eD = o.Ay.connectStores([v.Ay], (e) => {
        let { context: t, index: r, videoStreams: n } = e,
            a = v.Ay.getAllStats(t)[r],
            { section: i } = (0, v.Bz)(v.Ay.getSection());
        if (null == i) throw Error("Unrecognized section format");
        let s = null;
        return (
            null != a && null != a.rtp.inbound && (s = a.rtp.inbound[i] ?? []),
            { mediaEngineConnectionId: a?.mediaEngineConnectionId, userId: i, streams: s, videoStreams: n }
        );
    })(function (e) {
        let { streams: t, context: r, index: a, userId: i, mediaEngineConnectionId: s, videoStreams: l } = e;
        return (0, n.jsx)(eh, {
            streams: t,
            context: r,
            index: a,
            mediaEngineConnectionId: s,
            userId: i,
            videoStreams: l,
            title: ey.intl.string(ey.t.SJmZaq),
            showUserInfo: !0,
        });
    }),
    ev = o.Ay.connectStores([v.Ay], (e) => {
        let { context: t, index: r } = e,
            n = v.Ay.getAllStats(t)[r];
        return { outbound: null != n ? n.rtp.outbound : null };
    })(function (e) {
        let { outbound: t, context: r, index: a } = e;
        return (0, n.jsx)(eh, {
            streams: t,
            context: r,
            index: a,
            title: ey.intl.string(ey.t["3u0gII"]),
            showUserInfo: !1,
            showSimulcastOverride: !1,
        });
    }),
    eE = {
        hdrFrames: { key: "hdrFramesCapable", suffix: "Capable" },
        hybridDxgiFrames: { key: "hybridDxgiFramesUnique", suffix: "Unique" },
        hybridGdiBitBltFrames: { key: "hybridGdiBitBltFramesUnique", suffix: "Unique" },
        hybridGdiPrintWindowFrames: { key: "hybridGdiPrintWindowFramesUnique", suffix: "Unique" },
        hybridGraphicsCaptureFrames: { key: "hybridGraphicsCaptureFramesUnique", suffix: "Unique" },
        hybridVideohookFrames: { key: "hybridVideohookFramesUnique", suffix: "Unique" },
    },
    ex = [
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
    eC = new Set([...ex, ...Object.values(eE).map((e) => e.key)]);
class eS extends a.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        return null == e
            ? (0, n.jsx)(S.y, { type: S.y.Type.SPINNING_CIRCLE })
            : (0, n.jsxs)(R.B, {
                  children: [
                      (0, n.jsx)(c.D, { variant: "heading-md/medium", children: ey.intl.string(ey.t["gWbr/U"]) }),
                      em(
                          (function (e) {
                              let t = null != e.hybridGdiBitBltFrames && null != e.hybridGdiPrintWindowFrames,
                                  r = [];
                              for (let a of ex) {
                                  if ("hybridGdiFrames" === a && t) continue;
                                  let i = e[a];
                                  if (void 0 === i) continue;
                                  let s = eE[a],
                                      l = null != s ? e[s.key] : void 0;
                                  null != s && void 0 !== l
                                      ? r.push(
                                            (0, n.jsx)(
                                                H,
                                                {
                                                    label: a,
                                                    valueRendered: `${i} (${l})`,
                                                    renderGraph: null,
                                                    children: `${K[a] ?? a} (${s.suffix})`,
                                                },
                                                a,
                                            ),
                                        )
                                      : r.push((0, n.jsx)(eo, { label: a, value: i }, a));
                              }
                              for (let [t, a] of Object.entries(e))
                                  eC.has(t) ||
                                      en[t] ||
                                      void 0 === a ||
                                      r.push((0, n.jsx)(eo, { label: t, value: a }, t));
                              return r;
                          })(e),
                      ),
                  ],
              });
    }
}
var eR = r(967198),
    ej = r(116956),
    eP = r(351906),
    eN = r(562153),
    eI = r(917592);
class ek extends a.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: r, hostname: a } = this.props;
        if (null == e) return (0, n.jsx)(S.y, { type: S.y.Type.SPINNING_CIRCLE });
        let i = { ...e, hostname: a },
            s = l().map(i, (e, t) => {
                if ("receiverReports" !== t && (!r || "localAddress" !== t))
                    return (0, n.jsx)(eo, { label: t, value: e }, t);
            }),
            o = l().map(i.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? e.bitrate.at(-1)?.value : e.bitrate,
                    r = x.default.getUser(e.id);
                var n = eN.Ay.getNickname(eR.A.getGuildId(), void 0, r);
                return (
                    null == n && (n = null != r ? r.username : e.id),
                    { displayName: n, bitrate: t / 1e3, lost: (100 * e.fractionLost) / 256 }
                );
            }),
            d = l().sortBy(o, (e) => e.displayName),
            u = l().map(d, (e) => {
                var t, r, a;
                let i, s;
                return (
                    (t = e.displayName),
                    (r = e.bitrate),
                    (a = e.lost),
                    (i = (0, n.jsxs)(f.A, {
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
                            (0, n.jsxs)("span", { children: [a.toFixed(0), "%"] }),
                        ],
                    })),
                    (0, n.jsx)(H, { label: t, valueRendered: [i, s], children: t }, t)
                );
            });
        return (0, n.jsxs)(R.B, {
            className: W._8,
            children: [
                (0, n.jsx)(c.D, {
                    variant: "heading-md/medium",
                    children: ey.intl.string(ey.t.wU9IN2) + (null != t ? " - " + t : ""),
                }),
                em(s),
                0 === u.length ? null : (0, n.jsx)(q.c, { className: eu.SX }),
                em(u),
            ],
        });
    }
}
let eB = o.Ay.connectStores([v.Ay, D.A, eP.A, ej.A], (e) => {
    let { context: t, index: r } = e,
        n = v.Ay.getAllStats(t)[r],
        a =
            t === ed.x.STREAM
                ? Object.values(ej.A.getRTCConnections()).find(
                      (e) => e.getMediaEngineConnectionId() === n.mediaEngineConnectionId,
                  )
                : null,
        i = a?.hostname ?? "";
    return {
        hidePersonalInformation: eP.A.hidePersonalInformation,
        transport: null != n ? n.transport : null,
        mediaSessionId: D.A.getMediaSessionId(),
        hostname: eI.A.getShortHostname(i),
    };
})(ek);
var ew = r(652215);
function eT(e, t, r, a, i) {
    let s = [];
    if (null == t) return s;
    let {
        transport: o,
        rtp: { inbound: c, outbound: p },
        camera: y,
    } = t;
    if (
        (s.push({ section: h.Fq.HEADER, label: ey.intl.formatToPlainString(ey.t.PK5fOC, { context: e }) }),
        null != o &&
            s.push({
                section: (0, v.Xi)(e, ew.zWA.TRANSPORT, r),
                label: ey.intl.string(ey.t.wU9IN2),
                element: eB,
                elementProps: { context: e, index: r },
            }),
        null == p ||
            l().isEmpty(p) ||
            s.push({
                section: (0, v.Xi)(e, ew.zWA.OUTBOUND, r),
                label: ey.intl.string(ey.t["3u0gII"]),
                element: ev,
                elementProps: { context: e, index: r },
            }),
        null != y &&
            s.push({
                section: (0, v.Xi)(e, ew.zWA.CAMERA, r),
                label: ey.intl.string(ey.t["2AGBWH"]),
                element: ef,
                elementProps: { context: e, index: r, camera: y },
            }),
        null != c && !l().isEmpty(c))
    ) {
        let t = [];
        (Object.keys(c).forEach((s) => {
            var l;
            let o = x.default.getUser(s),
                p = b.Ay.getNick(i, s),
                h = (0, v.Xi)(e, s, r);
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
                                                  src: o.getAvatarURL(i, 24),
                                                  "aria-label": o.username,
                                                  className: W.my,
                                              }),
                                              (0, n.jsx)("span", { className: W.Xh, children: p ?? C.Ay.getName(o) }),
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
                    element: eD,
                    elementProps: { context: e, index: r, videoStreams: a },
                });
        }),
            t.length > 0 && (s.push({ section: h.Fq.HEADER, label: ey.intl.string(ey.t.SJmZaq) }), s.push(...t)));
    }
    return s;
}
function eG() {
    let { defaultStats: e, streamStats: t } = (0, o.bG)(
            [v.Ay],
            () => ({ defaultStats: v.Ay.getAllStats(ed.x.DEFAULT), streamStats: v.Ay.getAllStats(ed.x.STREAM) }),
            [],
            o.My,
        ),
        r = (0, o.bG)([D.A, A.A], () => A.A.getChannel(D.A.getChannelId())),
        i = e.concat(t).find((e) => null != e.screenshare)?.screenshare,
        s = t.find((e) => null != e.clips)?.clips,
        l = (0, o.bG)([F.A], () => F.A.theme),
        d = (0, g.NC)(),
        u = (0, o.bG)([v.Ay], () => v.Ay.getSection()),
        f = (function (e) {
            let {
                    defaultStats: t,
                    streamStats: r,
                    videoStreams: a,
                    screenshare: i,
                    clips: s,
                    channel: l,
                    connectionState: o,
                } = e,
                d = t.flatMap((e, t) => eT(ed.x.DEFAULT, e, t, a, l?.getGuildId())),
                u = r.flatMap((e, t) => eT(ed.x.STREAM, e, t, a, l?.getGuildId())),
                m = [],
                p = [],
                f = { section: h.Fq.DIVIDER };
            return (
                null != i &&
                    (m.push(f),
                    m.push({
                        section: ew.zWA.SCREENSHARE,
                        label: ey.intl.string(ey.t["gWbr/U"]),
                        element: eS,
                        elementProps: { screenshare: i },
                    })),
                null != s &&
                    (p.push(f),
                    p.push({
                        section: ew.zWA.CLIPS,
                        label: ey.intl.string(ey.t.MKrFKE),
                        element: eb,
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
                                children: o === ew.S7L.RTC_CONNECTED ? "Connected" : "Disconnected",
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
            videoStreams: (0, o.bG)([v.Ay], () => v.Ay.getVideoStreams()),
            screenshare: i,
            clips: s,
            channel: r,
            connectionState: (0, o.bG)([D.A], () => D.A.getState()),
        });
    return (
        a.useEffect(
            () => () => {
                m.VN();
            },
            [],
        ),
        a.useEffect(() => {
            f.some((e) => e.section === u) || u === v.EM || m.c4(v.EM);
        }, [f, u]),
        (0, n.jsx)(p.A, { theme: l, sidebarTheme: d, section: u, onSetSection: m.c4, sections: f })
    );
}
function eL(e) {
    let { windowKey: t } = e;
    return (0, n.jsx)(i.A, {
        withTitleBar: !0,
        windowKey: t,
        title: ey.intl.string(ey.t["5I/1fl"]),
        children: (0, n.jsx)(eG, {}),
    });
}
