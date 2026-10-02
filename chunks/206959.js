n.d(t, { A: () => ea });
var i,
    r,
    a,
    s = n(214958),
    l = n.n(s),
    o = n(574381),
    d = n(972347),
    c = n(941426),
    u = n(935172),
    _ = n(651139),
    E = n(70909);
n(321073);
var A = n(404144),
    h = n.n(A),
    I = n(480664),
    f = n.n(I),
    p = n(811315),
    T = n.n(p),
    m = n(119469),
    g = n.n(m),
    S = n(141697),
    N = n(904986);
n(618792);
var C = n(466376),
    O = n(731854);
let R = [
    { name: "H264", encode: !0, decode: !0 },
    { name: "VP8", encode: !0, decode: !0 },
];
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = t.concat(R),
        r = [];
    if (
        (i.forEach((t) => {
            let n = e.find((e) => t.name === e.name);
            null != n && r.push({ name: n.name, encode: n.encode && t.encode, decode: n.decode && t.decode });
        }),
        n)
    ) {
        let t = new Set(r.map((e) => e.name));
        e.forEach((e) => {
            t.has(e.name) || r.push({ name: e.name, encode: !1, decode: e.decode });
        });
    }
    return r;
}
function y(e) {
    let t = [],
        n = e.has(O.fd.SIGNAL_AV1_ENCODE),
        i = e.has(O.fd.SIGNAL_AV1_DECODE);
    return (
        (n || i) && t.push({ name: "AV1", encode: n, decode: i }),
        t.push({
            name: "H265",
            encode: !e.has(O.fd.H265_DISABLE_ENCODE),
            decode: e.has(O.fd.H265_HARDWARE_DECODE_AVAILABLE),
        }),
        t
    );
}
function D(e) {
    return JSON.parse(e).map((e) => {
        var t;
        return { name: "AV1X" === (t = e.codec) ? "AV1" : t, encode: e.encode, decode: e.decode };
    });
}
var v =
        (((i = {})[(i.DISABLED = -1)] = "DISABLED"),
        (i[(i.NORMAL = 0)] = "NORMAL"),
        (i[(i.LOW_BIRTATE = 1)] = "LOW_BIRTATE"),
        (i[(i.AGGRESSIVE = 2)] = "AGGRESSIVE"),
        (i[(i.VERY_AGGRESSIVE = 3)] = "VERY_AGGRESSIVE"),
        i),
    b = n(823598),
    M = n(752163);
function P(e) {
    let t = (e?.headerBytes ?? 0) + (e?.payloadBytes ?? 0) + (e?.paddingBytes ?? 0);
    return (
        (e?.fec?.headerBytes ?? 0) +
        (e?.fec?.payloadBytes ?? 0) +
        (e?.fec?.paddingBytes ?? 0) +
        (e?.retransmitted?.headerBytes ?? 0) +
        (e?.retransmitted?.payloadBytes ?? 0) +
        (e?.retransmitted?.paddingBytes ?? 0) +
        (e?.transmitted?.headerBytes ?? 0) +
        (e?.transmitted?.payloadBytes ?? 0) +
        (e?.transmitted?.paddingBytes ?? 0) +
        t
    );
}
function U(e) {
    let t = e?.packets ?? 0;
    return (e?.fec?.packets ?? 0) + (e?.retransmitted?.packets ?? 0) + (e?.transmitted?.packets ?? 0) + t;
}
function w(e) {
    let t = {};
    for (let i in e)
        if (Array.isArray(e[i])) t[i] = e[i].map((e) => 1e3 * e);
        else {
            var n;
            null != e[i] &&
                (t[i] = {
                    last: Math.round(1e3 * (n = e[i]).last),
                    mean: Math.round(1e3 * n.mean),
                    p75: Math.round(1e3 * n.p75),
                    p95: Math.round(1e3 * n.p95),
                    p99: Math.round(1e3 * n.p99),
                    max: Math.round(1e3 * n.max),
                });
        }
    return t;
}
function G(e, t) {
    let n = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
    if (null == n) return;
    let i = e.substreams.reduce((e, t) => e + P(t.rtpStats), 0),
        r = e.substreams.reduce((e, t) => e + U(t.rtpStats), 0);
    return {
        type: "video",
        ssrc: n.ssrc,
        sinkWant: (0, M.D)(t, n.ssrc, !0),
        sinkWantAsInt: (0, M.q)(t, n.ssrc),
        codec: { id: e.codecPayloadType, name: e.codecName },
        keyFrameInterval: e.keyFrameInterval,
        bytesSent: i,
        packetsSent: r,
        packetsLost: n.rtcpStats?.packetsLost ?? 0,
        fractionLost: n.rtcpStats?.fractionLost ?? 0,
        bitrate: e.mediaBitrate,
        bitrateTarget: e.targetMediaBitrate,
        encoderImplementationName: e.encoderImplementationName,
        encodeUsage: e.encodeUsage,
        averageEncodeTime: e.avgEncodeTime,
        resolution: { height: n.height, width: n.width },
        framesSent: n.frameCounts.keyFrames + n.frameCounts.deltaFrames,
        keyFramesEncoded: n.frameCounts.keyFrames,
        framesEncoded: e.framesEncoded,
        frameRateInput: e.inputFrameRate,
        frameRateEncode: e.encodeFrameRate,
        firCount: n.rtcpStats?.firPackets ?? 0,
        nackCount: n.rtcpStats?.nackPackets ?? 0,
        pliCount: n.rtcpStats?.pliPackets ?? 0,
        qpSum: e.qpSum,
        bandwidthLimitedResolution: e.bwLimitedResolution,
        framesDroppedRateLimiter: e.framesDroppedRateLimiter,
        framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
        framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
        framesDroppedEncoder: e.framesDroppedEncoder,
        cpuLimitedResolution: e.cpuLimitedResolution,
        encoderQualityVmaf: n.encoderQualityStats?.imageQualityVmaf_v061 ?? void 0,
        encoderQualityPsnr: n.encoderQualityStats?.imageQualityWebrtcPsnrDb ?? void 0,
        qualityDecodeErrors: n.encoderQualityStats?.decodeErrors ?? void 0,
        qualityDecoderReboots: n.encoderQualityStats?.decoderReboots ?? void 0,
        qualityScoreErrors: n.encoderQualityStats?.scoreErrors ?? void 0,
        qualityFrameDrops: n.encoderQualityStats?.frameDrops ?? void 0,
        qualitySizeMismatches: n.encoderQualityStats?.sizeMismatches ?? void 0,
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
        freezeCount: n.encoderQualityStats?.freezeCount,
        totalFreezesDuration: n.encoderQualityStats?.totalFreezesDuration,
        totalFramesDuration: n.encoderQualityStats?.totalFramesDuration,
        videoEntropy: n.encoderQualityStats?.interFrameEntropy,
        consecutiveStaticColorFrames: n.encoderQualityStats?.consecutiveStaticColorFrames,
        minResolutionWidth: n.encoderQualityStats?.minResolutionWidth,
        minResolutionHeight: n.encoderQualityStats?.minResolutionHeight,
        reconFramesRequested: n.encoderQualityStats?.reconFramesRequested,
        reconFramesSuccessful: n.encoderQualityStats?.reconFramesSuccessful,
        reconFramesFailed: n.encoderQualityStats?.reconFramesFailed,
    };
}
function x(e, t, n, i) {
    let r = P(e.rtpStats),
        a = U(e.rtpStats);
    return {
        type: "video",
        ssrc: e.ssrc,
        sinkWant: (0, M.D)(t, e.ssrc, !0),
        sinkWantAsInt: (0, M.q)(t, e.ssrc),
        sinkWantLocal: (0, M.D)(n, e.ssrc, !0),
        sinkWantLocalAsInt: (0, M.q)(n, e.ssrc),
        codec: { id: e.codecPayloadType, name: e.codecName },
        bytesReceived: r,
        packetsReceived: a,
        packetsLost: e.rtpStats.packetsLost ?? e.rtcpStats.packetsLost,
        fractionLost: e.rtcpStats.fractionLost,
        bitrate: e.totalBitrate,
        jitterBuffer: e.jitterBuffer,
        currentDelay: e.currentDelay,
        targetDelay: e.targetDelay,
        minPlayoutDelay: e.minPlayoutDelay,
        renderDelay: e.renderDelay,
        averageDecodeTime: e.decode,
        totalDecodeTime: e.totalDecode,
        resolution: { height: e.height, width: e.width },
        decoderImplementationName: e.decoderImplementationName,
        framesDecoded: e.framesDecoded,
        framesDropped: e.framesDropped,
        framesDecodeErrors: e.framesDecodeErrors,
        framesReceived: e.frameCounts.keyFrames + e.frameCounts.deltaFrames,
        networkFramesDropped: e.networkFramesDropped ?? 0,
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
        minResolutionWidth: e.minResolutionWidth,
        minResolutionHeight: e.minResolutionHeight,
        ...(null != i
            ? w({
                  videoJitterBuffer: i.videoJitterBuffer,
                  videoJitterDelay: i.videoJitterDelay,
                  videoJitterTarget: i.videoJitterTarget,
              })
            : {}),
    };
}
function k(e, t, n, i) {
    let r = null,
        a = null,
        s = "string" == typeof t ? JSON.parse(t) : t,
        l = [];
    if (null != s.outbound) {
        let { audio: e, video: t, videos: i } = s.outbound;
        if (
            (null != e &&
                ((a = (a ?? 0) + e.bytesSent),
                l.push({
                    type: "audio",
                    ssrc: e.ssrc,
                    sinkWant: (0, M.D)(n, e.ssrc, !1),
                    sinkWantAsInt: (0, M.q)(n, e.ssrc),
                    codec: { id: e.codecPayloadType, name: e.codecName },
                    bytesSent: e.bytesSent,
                    packetsSent: e.packetsSent,
                    packetsLost: Math.max(0, e.packetsLost),
                    fractionLost: 100 * e.fractionLost,
                    audioLevel: e.audioLevel / 32768,
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
                    sampleRateMismatchPercent: e.sampleRateMismatchPercent,
                    currentSampleRate: e.currentSampleRate,
                    captureProcessingDelayMs: e.captureProcessingDelayMs,
                    captureProcessingFrameCount: e.captureProcessingFrameCount,
                    apmProcessTimeMs: e.apmProcessTimeMs,
                    apmFrameCount: e.apmFrameCount,
                    sendDelayMs: e.sendDelayMs,
                    sendPacketCount: e.sendPacketCount,
                    totalPacketSendDelayMs: e.totalPacketSendDelayMs,
                })),
            null != i)
        )
            i.forEach((e) => {
                let t = G(e, n);
                null != t && ((a = (a ?? 0) + t.bytesSent), l.push(t));
            });
        else if (null != t) {
            let e = G(t, n);
            null != e && ((a = (a ?? 0) + e.bytesSent), l.push(e));
        }
    }
    let o = {};
    null != s.inbound &&
        s.inbound.forEach((e) => {
            let { id: t, audio: a, video: s, videos: l, playout: d } = e;
            if (
                ((o[t] = []),
                null != a &&
                    ((r = (r ?? 0) + a.bytesReceived),
                    o[t].push({
                        type: "audio",
                        ssrc: a.ssrc,
                        sinkWant: (0, M.D)(n, a.ssrc, !1),
                        sinkWantAsInt: (0, M.q)(n, a.ssrc),
                        codec: { id: a.codecPayloadType, name: a.codecName },
                        bytesReceived: a.bytesReceived,
                        packetsReceived: a.packetsReceived,
                        packetsLost: a.packetsLost,
                        fractionLost: 100 * a.fractionLost,
                        fecPacketsReceived: a.fecPacketsReceived,
                        fecPacketsDiscarded: a.fecPacketsDiscarded,
                        audioLevel: a.audioLevel / 32768,
                        audioDetected: a.speaking,
                        currentSampleRate: a.currentSampleRate,
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
                        audioReceiverDelayMs: d?.audioReceiverDelayMs,
                        audioReceiverPacketCount: d?.audioReceiverPacketCount,
                        ...(null != d
                            ? w({
                                  audioJitterBuffer: d.audioJitterBuffer,
                                  audioJitterBufferSamples: d.audioJitterBufferSamples,
                                  audioJitterDelay: d.audioJitterDelay,
                                  audioJitterDelaySamples: d.audioJitterDelaySamples,
                                  audioJitterTarget: d.audioJitterTarget,
                                  audioJitterTargetSamples: d.audioJitterTargetSamples,
                                  audioPlayoutUnderruns: d.audioPlayoutUnderruns,
                                  relativeReceptionDelay: d.relativeReceptionDelay,
                                  relativePlayoutDelay: d.relativePlayoutDelay,
                              })
                            : {}),
                    })),
                null != l)
            )
                l.forEach((e) => {
                    let a = x(e, n, i, d);
                    if (null != a) {
                        let n = P(e.rtpStats);
                        ((r = (r ?? 0) + n), o[t].push(a));
                    }
                });
            else if (null != s) {
                let e = x(s, n, i, d);
                if (null != e) {
                    let n = P(s.rtpStats);
                    ((r = (r ?? 0) + n), o[t].push(e));
                }
            }
        });
    let { transport: d, clips: c } = s,
        u = {};
    (null != d &&
        ((u.availableOutgoingBitrate = d.sendBandwidth),
        (u.ping = d.rtt),
        (u.decryptionFailures = d.decryptionFailures),
        null != d.routingFailures && (u.routingFailures = d.routingFailures),
        (u.localAddress = d.localAddress),
        (u.pacerDelay = d.pacerDelay),
        null != d.receiverReports && (u.receiverReports = d.receiverReports),
        (u.receiverBitrateEstimate = d.receiverBitrateEstimate),
        (u.outboundBitrateEstimate = d.outboundBitrateEstimate),
        (u.inboundBitrateEstimate = d.inboundBitrateEstimate ?? 0),
        (u.packetsReceived = d.packetsReceived),
        (u.packetsSent = d.packetsSent),
        null != d.secureFramesProtocolVersion && (u.secureFramesProtocolVersion = d.secureFramesProtocolVersion),
        (u.transportDelayMs = d.transportDelayMs),
        (u.transportPacketCount = d.transportPacketCount)),
        (d?.bytesReceived == null && (null == r || Number.isNaN(r))) ||
            (u.bytesReceived = d?.bytesReceived ?? r ?? void 0),
        (d?.bytesSent == null && (null == a || Number.isNaN(a))) || (u.bytesSent = d?.bytesSent ?? a ?? void 0));
    let { screenshare: _, camera: E, audioDevice: A } = s;
    return {
        mediaEngineConnectionId: e,
        transport: u,
        screenshare: _,
        camera:
            null != E
                ? {
                      capturedFramesDropped: E.capturedFramesDropped,
                      capturedFramesCount: E.capturedFramesCount,
                      capturedFramesMean: E.capturedFramesMean,
                      capturedFramesStdev: E.capturedFramesStdev,
                  }
                : null,
        clips: c,
        audioDevice: A,
        rtp: { inbound: o, outbound: l },
    };
}
let F = { [O.TB.VOICE_ACTIVITY]: 1, [O.TB.PUSH_TO_TALK]: 2 };
var B =
        (((r = {}).VOICE_SOUND_STOP_LOOP = "voice_sound_stop_loop"),
        (r.VOICE_RELATIVE_SOUNDS = "voice_relative_sounds"),
        (r.VOICE_LEGACY_SUBSYSTEM = "voice_legacy_subsystem"),
        (r.VOICE_EXPERIMENTAL_SUBSYSTEM = "voice_experimental_subsystem"),
        (r.VOICE_AUTOMATIC_SUBSYSTEM = "voice_automatic_subsystem"),
        (r.VOICE_SUBSYSTEM_DEFERRED_SWITCH = "voice_subsystem_deferred_switch"),
        (r.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING = "voice_bypass_system_audio_input_processing"),
        (r.ELEVATED_HOOK = "elevated_hook"),
        (r.DEBUG_LOGGING = "debug_logging"),
        (r.SOUNDSHARE = "soundshare"),
        (r.SOUNDSHARE_LOOPBACK = "soundshare_loopback"),
        (r.SET_AUDIO_DEVICE_BY_ID = "set_audio_device_by_id"),
        (r.SET_VIDEO_DEVICE_BY_ID = "set_video_device_by_id"),
        (r.LOOPBACK = "loopback"),
        (r.WUMPUS_VIDEO = "wumpus_video"),
        (r.HYBRID_VIDEO = "hybrid_video"),
        (r.EXPERIMENT_CONFIG = "experiment_config"),
        (r.REMOTE_LOCUS_NETWORK_CONTROL = "remote_locus_network_control"),
        (r.SCREEN_PREVIEWS = "screen_previews"),
        (r.WINDOW_PREVIEWS = "window_previews"),
        (r.AUDIO_DEBUG_STATE = "audio_debug_state"),
        (r.CONNECTION_REPLAY = "connection_replay"),
        (r.SIMULCAST = "simulcast"),
        (r.SIMULCAST_BUGFIX = "simulcast_bugfix"),
        (r.RTC_REGION_RANKING = "RTC_REGION_RANKING"),
        (r.VIDEO_EFFECTS = "video_effects"),
        (r.ELECTRON_VIDEO = "electron_video"),
        (r.MEDIAPIPE = "mediapipe"),
        (r.VIDEO_BACKGROUND_FILTER = "video_background_filter"),
        (r.FIXED_KEYFRAME_INTERVAL = "fixed_keyframe_interval"),
        (r.FIRST_FRAME_CALLBACK = "first_frame_callback"),
        (r.REMOTE_USER_MULTI_STREAM = "remote_user_multi_stream"),
        (r.CLIPS = "clips"),
        (r.CLIPS_THUMBNAIL = "clips_thumbnail"),
        (r.CLIPS_RECORDING_READY_EVENTS = "clips_recording_ready_events"),
        (r.GO_LIVE_HARDWARE = "go_live_hardware"),
        (r.IMAGE_QUALITY_MEASUREMENT = "image_quality_measurement"),
        (r.SCREEN_CAPTURE_KIT = "screen_capture_kit"),
        (r.SCREEN_SOUNDSHARE = "screen_soundshare"),
        (r.NATIVE_SCREENSHARE_PICKER = "native_screenshare_picker"),
        (r.MLS_PAIRWISE_FINGERPRINTS = "mls_pairwise_fingerprints"),
        (r.OFFLOAD_ADM_CONTROLS = "offload_adm_controls"),
        (r.AUDIO_CODEC_RED = "audio_codec_red"),
        (r.SIDECHAIN_COMPRESSION = "sidechain_compression"),
        (r.VAAPI = "vaapi"),
        (r.GAMESCOPE_CAPTURE = "gamescope_capture"),
        (r.ASYNC_VIDEO_INPUT_DEVICE_INIT = "async_video_input_device_init"),
        (r.PORT_AWARE_LATENCY_TESTING = "port_aware_latency_testing"),
        (r.SPATIAL_AUDIO = "spatial_audio"),
        (r.KRISP_NATIVE_ERROR = "krisp_native_error"),
        (r.UDP_ENDPOINT_UPDATE = "udp_endpoint_update"),
        r),
    V =
        (((a = {})[(a.Started = 0)] = "Started"),
        (a[(a.Ended = 1)] = "Ended"),
        (a[(a.Error = 2)] = "Error"),
        (a[(a.TransferredToVoiceCall = 3)] = "TransferredToVoiceCall"),
        (a[(a.TransferredToGoLive = 4)] = "TransferredToGoLive"),
        (a[(a.StoppedByGoLive = 5)] = "StoppedByGoLive"),
        (a[(a.BlockedByGoLive = 6)] = "BlockedByGoLive"),
        (a[(a.GoLiveEnded = 7)] = "GoLiveEnded"),
        (a[(a.IdleShutdown = 8)] = "IdleShutdown"),
        (a[(a.RecordingHealthy = 9)] = "RecordingHealthy"),
        (a[(a.RecordingActive = 10)] = "RecordingActive"),
        (a[(a.RecordingInactive = 11)] = "RecordingInactive"),
        a);
let H = 0;
function j(e) {
    return null != e && 0 !== e ? e + 1 : 0;
}
class W extends N.A {
    mediaEngineConnectionId = `Native-${H++}`;
    goLiveSourceIdentifier;
    selfVideo = !1;
    codecs = [];
    initialCodecs = [];
    videoEncoderFallbackPending = !1;
    videoDecoderFallbackSent = new Set();
    lastOverrideCodecDenylist = "";
    lastOverrideEncoderDenylist = "";
    lastCaptureOverrides = "";
    overrideCodecResetAt = 0;
    desktopDegradationPreference = (0, b.lE)().DegradationPreference.MAINTAIN_FRAMERATE;
    sourceDesktopDegradationPreference = (0, b.lE)().DegradationPreference.DISABLED;
    videoDegradationPreference = (0, b.lE)().DegradationPreference.BALANCED;
    localPans = {};
    remoteAudioSSRCs = {};
    remoteVideoSSRCs = {};
    inputMode = O.TB.VOICE_ACTIVITY;
    vadThreshold = -40;
    vadAutoThreshold = !0;
    vadKrispActivationThreshold = 0.5;
    vadUseKrisp = !0;
    vadLeading = 5;
    vadTrailing = 25;
    pttReleaseDelay = 20;
    soundshareActive = !1;
    soundshareId = null;
    soundshareSentSpeakingEvent = !1;
    echoCancellation = !0;
    noiseSuppression = !0;
    automaticGainControl = { enabled: !0 };
    noiseCancellation = !1;
    noiseCancellationDuringProcessing = !1;
    echoReferenceMode = "mix";
    attenuationFactor = 0.5;
    attenuateWhileSpeakingSelf = !1;
    attenuateWhileSpeakingOthers = !0;
    qos = !0;
    conn;
    minimumJitterBufferLevel = 0;
    postponeDecodeLevel = 100;
    reconnectInterval = 6e4;
    keyframeInterval = 0;
    videoQualityMeasurement = "";
    videoEncoderExperiments = "";
    singleCpuCopy = !1;
    numFastUdpReconnects = 0;
    lastPreparedTransitionId = -1;
    lastExecutedTransitionId = -1;
    currentVideoCodec = null;
    lastDesktopEncodingOptions = null;
    logger;
    constructor(e, t, n) {
        (super(e, t),
            (this.videoSupported = n),
            (this.logger = new c.Vy(`Connection(${e})`)),
            this.logger.enableNativeLogger(!0));
    }
    static create(e, t, n, i) {
        let r = new W(e, t, i);
        return (r.initialize(n), r);
    }
    static createReplay(e, t) {
        let n = new W(e, "0", !0),
            i = (0, b.lE)();
        n.initializeStreamParameters([{ type: O.mI.VIDEO, rid: "100", ssrc: 0, rtxSsrc: 0, quality: 100, active: !1 }]);
        let r = i.createReplayConnection(
            "default",
            (t, r) => {
                (n.on(u.y.Stats, n.handleStats),
                    n.conn.setOnVideoCallback(n.handleVideo),
                    i.getCodecCapabilities((t) => {
                        let i = y(n.experimentFlags);
                        ((n.codecs = [
                            { type: "audio", name: O.UK.OPUS, priority: 1, payloadType: 120 },
                            ...(n.videoSupported
                                ? (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                      return L(D(e), t, n);
                                  })(t, i).map((e, t) => {
                                      let n = 101 + 2 * t;
                                      return {
                                          type: "video",
                                          name: e.name,
                                          priority: t + 1,
                                          payloadType: n,
                                          rtxPayloadType: n + 1,
                                          encode: e.encode,
                                          decode: e.decode,
                                      };
                                  })
                                : []),
                        ]),
                            n.setCodecs(O.UK.OPUS, O.UK.H264, e),
                            n.conn.startReplay());
                    }));
            },
            t,
        );
        return null == r ? null : ((n.conn = r), n);
    }
    transportInfo;
    beginInitializeAt;
    onConnectCallbackAt;
    onVideoCodecsCallbackAt;
    onEncryptionModesCallbackAt;
    initialize(e) {
        let t;
        (this.logger.info(`Creating connection to ${e.address}:${e.port} with audio ssrc: ${e.ssrc}`),
            (this.beginInitializeAt = performance.now()),
            (this.audioSSRC = e.ssrc),
            (this.streamUserId = e.streamUserId),
            this.initializeStreamParameters(e.streamParameters),
            (e.streamParameters = [
                {
                    type: O.mI.AUDIO,
                    ssrc: this.audioSSRC,
                    rid: "",
                    maxBitrate: 64e3,
                    soundshare: this.context === O.x.STREAM,
                },
                ...this.videoStreamParameters,
            ]),
            (e.context = this.context));
        let n = (0, b.lE)(),
            i = (i, r) => {
                if (this.destroyed) return;
                if (null != i && "" !== i) {
                    (this.setConnectionState(O.$I.NO_ROUTE), this.emit(u.y.Error, i));
                    return;
                }
                if (null == r) throw Error("Invalid transport info");
                this.transportInfo = r;
                let { protocol: a, address: s, port: l } = r;
                (this.logger.info(`Connected with local address ${s}:${l} and protocol: ${a}`),
                    (this.onConnectCallbackAt = performance.now()),
                    n.getCodecCapabilities((i) => {
                        ((this.onVideoCodecsCallbackAt = performance.now()),
                            this.logger.info(`Available engine codecs: ${JSON.stringify(i)}`));
                        let r = y(this.experimentFlags);
                        this.logger.info(`Experimental codecs: ${JSON.stringify(r)}`);
                        let o = D(i),
                            d = this.lastOverrideCodecDenylist.length > 0;
                        this.codecs = [
                            { type: "audio", name: O.UK.OPUS, priority: 1, payloadType: 120 },
                            ...(this.videoSupported
                                ? L(o, r, d).map((e, t) => {
                                      let n = 101 + 2 * t;
                                      return {
                                          type: "video",
                                          name: e.name,
                                          priority: t + 1,
                                          payloadType: n,
                                          rtxPayloadType: n + 1,
                                          encode: e.encode,
                                          decode: e.decode,
                                      };
                                  })
                                : []),
                        ];
                        let c = new Map(o.map((e) => [e.name, e.encode]));
                        ((this.initialCodecs = this.codecs.map((e) => ({
                            ...e,
                            encode: "video" === e.type ? (c.get(e.name) ?? e.encode) : e.encode,
                        }))),
                            this.logger.info(
                                `Audio codecs: ${this.codecs.filter((e) => "audio" === e.type).map((e) => e.name)}`,
                            ),
                            this.logger.info(
                                `Video codecs: ${this.codecs.filter((e) => "video" === e.type).map((e) => e.name + "[encode: " + e.encode + ", decode: " + e.decode + "]")}`,
                            ),
                            t.getEncryptionModes((i) => {
                                ((this.onEncryptionModesCallbackAt = performance.now()),
                                    this.logger.info(`Encryption modes: ${i}`),
                                    t.setTransportOptions(this.getConnectionTransportOptions()),
                                    t.setSelfMute(this.selfMute || this.context === O.x.STREAM),
                                    t.setSelfDeafen(this.selfDeaf),
                                    t.setOnSpeakingCallback(this.handleSpeakingNative),
                                    t.setOnNativeMuteChangedCallback?.(this.handleNativeMuteChanged),
                                    t.setOnSpeakingWhileMutedCallback?.(this.handleSpeakingWhileMuted),
                                    t.setPingInterval?.(O.n8),
                                    t.setPingCallback(this.handlePing),
                                    t.setPingTimeoutCallback?.(this.handlePingTimeout),
                                    t.setOnVideoEncoderFallbackCallback?.(this.handleVideoEncoderFallback),
                                    t.setOnVideoDecoderFallbackCallback?.(this.handleVideoDecoderFallback),
                                    t.setVideoCodecErrorCallback?.(this.handleVideoCodecError),
                                    n.setTransportOptions({
                                        builtInEchoCancellation: !0,
                                        echoCancellation: this.echoCancellation,
                                        noiseSuppression: this.noiseSuppression,
                                        automaticGainControl: this.automaticGainControl.enabled,
                                        automaticGainControlConfig: this.automaticGainControl,
                                        noiseCancellation: this.noiseCancellation,
                                        noiseCancellationDuringProcessing: this.noiseCancellationDuringProcessing,
                                    }),
                                    n.setNoInputThreshold(-100),
                                    n.setNoInputCallback(this.handleNoInput),
                                    this.videoSupported &&
                                        (t.setOnVideoCallback(this.handleVideo),
                                        t.setOnFirstFrameCallback?.(this.handleFirstFrame),
                                        t.setOnFirstFrameDeliveredStatsCallback?.(this.handleFirstFrameStats),
                                        t.setOnFirstFrameEncryptedStatsCallback?.(this.handleFirstFrameEncryptedStats),
                                        t.setOnDesktopSourceEnded?.(this.handleDesktopSourceEnded),
                                        t.setOnSoundshare?.(this.handleSoundshare),
                                        t.setOnSoundshareEnded?.(this.handleSoundshareEnded),
                                        t.setOnSoundshareFailed?.(this.handleSoundshareFailed)),
                                    t.setOnMLSFailureCallback?.(this.handleMLSFailure),
                                    this.setConnectionState(O.$I.CONNECTED),
                                    this.emit(u.y.Connected, a, {
                                        address: s,
                                        port: l,
                                        mode: this.chooseEncryptionMode(e.modes, i),
                                        codecs: this.codecs,
                                    }),
                                    this.on(u.y.Stats, this.handleStats));
                                let r = this.getUserOptions();
                                for (let e of (r.forEach((e) =>
                                    this.logger.info(
                                        `Creating user: ${e.id} with audio SSRC: ${e.ssrc} and video SSRCs: ${e.videoSsrcs?.join(",") ?? 0}`,
                                    ),
                                ),
                                this.mergeUsers(r),
                                this.emit(u.y.RemoteStreamsReady, r.length),
                                Object.keys(this.localSpeakingFlags)))
                                    e !== this.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e]);
                            }));
                    }));
            };
        if (null != n.createOwnStreamConnectionWithOptions)
            r =
                this.context === O.x.STREAM && this.streamUserId === this.userId
                    ? n.createOwnStreamConnectionWithOptions
                    : n.createVoiceConnectionWithOptions;
        else if (null != n.createOwnStreamConnection) {
            var r,
                a =
                    this.context === O.x.STREAM && this.streamUserId === this.userId
                        ? n.createOwnStreamConnection
                        : n.createVoiceConnection;
            r = (e, t, n) => a(t.ssrc, this.userId, t.address, t.port, n, t.experiments, t.streamParameters);
        } else
            r = (e, t, i) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, i, t.experiments, t.streamParameters);
        ((t = this.conn = r(this.userId, e, i)),
            t.setOnConnectionFailedCallback?.(this.handleConnectionFailed),
            t.setSecureFramesStateUpdateCallback?.((e) => {
                (this.logger.info(`DAVE protocol state update: ${JSON.stringify(e)}`),
                    this.emit(u.y.SecureFramesUpdate, e));
            }),
            t.setDesktopSourceStatusCallback?.((e) => {
                "videohook_start" === e.type
                    ? this.emit(u.y.VideoHookStart)
                    : "videohook_stop" === e.type
                      ? this.emit(u.y.VideoHookStop)
                      : "videohook_initialize" === e.type
                        ? this.emit(
                              u.y.VideoHookInitialize,
                              e.backend,
                              e.format,
                              e.framebufferFormat,
                              e.sampleCount,
                              e.success,
                              e.reinitialization,
                          )
                        : "screenshare_finish" === e.type
                          ? this.emit(
                                u.y.ScreenshareFinish,
                                e.screenshareFrames,
                                e.videohookFrames,
                                e.hybridDxgiFrames,
                                e.hybridGdiFrames,
                                e.hybridVideohookFrames,
                                e.hybridGraphicsCaptureFrames,
                                e.hybridCaptureMethodSwitches,
                                e.hybridGdiBitBltFrames,
                                e.hybridGdiPrintWindowFrames,
                                e.hybridGraphicsCaptureFramesUnique,
                                e.hybridDxgiFramesUnique,
                                e.hybridVideohookFramesUnique,
                                e.hybridGdiBitBltFramesUnique,
                                e.hybridGdiPrintWindowFramesUnique,
                                e.skipHistoryJson,
                                e.quartzFrames,
                                e.desktopCapturerType ?? e.desktop_capturer_type,
                                e.activity,
                                e.goLiveCameraFrames,
                                e.screenCaptureKitFrames,
                                e.hdrFramesCapable,
                                e.hdrFrames,
                                e.targetWindowElevated,
                                e.pipewireFrames,
                                e.x11Frames,
                                e.videohookBackend,
                            )
                          : "video_state" === e.type
                            ? this.emit(u.y.VideoState, e.state)
                            : e.type.startsWith("soundshare_") && this.emit(u.y.SoundshareTrace, e);
            }),
            this.on("newListener", this.handleNewListenerNative));
    }
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.conn.destroy(e),
            Object.keys(this.localSpeakingFlags)
                .filter((e) => e !== this.userId)
                .forEach((e) => this.emit(u.y.Speaking, e, O.ME.NONE, this.remoteAudioSSRCs[e])),
            this.setConnectionState(O.$I.DISCONNECTED),
            super.destroy());
    }
    setCodecs(e, t, n) {
        let i = this.currentVideoCodec !== t;
        if (((this.currentVideoCodec = t), i && null != this.lastDesktopEncodingOptions)) {
            let { width: e, height: t, framerate: n } = this.lastDesktopEncodingOptions;
            this.setDesktopEncodingOptions(e, t, n);
        }
        (this.conn.setTransportOptions(this.getCodecOptions(e, t, n)),
            this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1));
    }
    getStats() {
        return this.connectionState === O.$I.DISCONNECTED
            ? Promise.resolve(null)
            : (0, S.timeout)(
                  new Promise((e) => {
                      null != this.conn.getFilteredStats
                          ? this.conn.getFilteredStats(O.yt.ALL, (t) =>
                                e(
                                    k(
                                        this.mediaEngineConnectionId,
                                        t,
                                        this.remoteVideoSinkWants,
                                        this.localVideoSinkWants,
                                    ),
                                ),
                            )
                          : null != this.conn.getStats
                            ? this.conn.getStats((t) =>
                                  e(
                                      k(
                                          this.mediaEngineConnectionId,
                                          t,
                                          this.remoteVideoSinkWants,
                                          this.localVideoSinkWants,
                                      ),
                                  ),
                              )
                            : (0, b.lE)().getStats((t) =>
                                  e(
                                      k(
                                          this.mediaEngineConnectionId,
                                          t,
                                          this.remoteVideoSinkWants,
                                          this.localVideoSinkWants,
                                      ),
                                  ),
                              );
                  }),
                  1e3,
              ).catch((e) => {
                  if (!(e instanceof S.TimeoutError)) throw e;
              });
    }
    createUser(e, t, n) {
        let i = this.remoteAudioSSRCs[e],
            r = this.remoteVideoSSRCs[e];
        if (null != i && 0 === t)
            return void this.logger.info(`Ignoring attempt to recreate user ${e} with 0 audio SSRC`);
        ((r = void 0 !== r ? [...r].sort() : []), (n = void 0 === n ? (r ?? []) : [...n].sort()));
        let a = !T()(r, n);
        if (
            ((this.remoteAudioSSRCs[e] = t), (this.remoteVideoSSRCs[e] = n ?? []), this.userId !== e && (i !== t || a))
        ) {
            let i = void 0 !== n && n.length > 0 ? n[0] : 0,
                r = {
                    id: e,
                    ssrc: t,
                    videoSsrc: i,
                    videoSsrcs: n,
                    rtxSsrc: j(i),
                    mute: this.getLocalMute(e),
                    volume: this.getLocalVolume(e),
                };
            this.connectionState === O.$I.CONNECTED &&
                (this.logger.info(`Creating user: ${e} with audio SSRC: ${t} and video SSRCs: ${n?.join(",") ?? 0}`),
                this.mergeUsers([r]));
            let a = this.localPans[e];
            null != a && this.setLocalPan(e, a.left, a.right);
            let s = this.localSpeakingFlags[e];
            null != s && s !== O.ME.NONE && this.setSpeakingFlags(e, s);
        }
    }
    destroyUser(e) {
        null != this.remoteAudioSSRCs[e] &&
            (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e]);
    }
    setSelfMute(e) {
        ((this.selfMute = e), this.conn.setSelfMute(e), this.emit(u.y.Mute, e));
    }
    getSelfMute() {
        return this.selfMute;
    }
    getSelfDeaf() {
        return this.selfDeaf;
    }
    setSelfDeaf(e) {
        ((this.selfDeaf = e), this.conn.setSelfDeafen(e), this.emit(u.y.Deafen, e));
    }
    setSoundshareSource(e, t) {
        if ((this.soundshareId === e && this.soundshareSentSpeakingEvent) || this.context !== O.x.STREAM) return;
        ((this.soundshareId = e), (this.soundshareSentSpeakingEvent = !1));
        let n = e;
        (null === n && (n = 0),
            this.conn.setTransportOptions({ soundsharePid: n, soundshareEventDriven: !0, soundshareLoopback: t }));
    }
    setLocalMute(e, t) {
        ((this.localMutes[e] = t), this.conn.setLocalMute(e, t), this.emit(u.y.LocalMute, e, t));
    }
    setUserPosition(e, t) {
        this.conn.setUserPosition?.(e, t);
    }
    fastUdpReconnect() {
        null != this.conn.fastUdpReconnect && ((this.numFastUdpReconnects += 1), this.conn.fastUdpReconnect());
    }
    setUdpEndpoint(e) {
        this.conn.setUdpEndpoint?.(e?.address ?? null, e?.port ?? 0);
    }
    getNumFastUdpReconnects() {
        return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null;
    }
    wasRemoteDisconnected() {
        this.conn.wasRemoteDisconnected?.();
    }
    setLocalVideoDisabled(e, t) {
        ((this.disabledLocalVideos[e] = t), this.emit(u.y.LocalVideoDisabled, e, t));
    }
    setMinimumJitterBufferLevel(e) {
        this.minimumJitterBufferLevel = e;
    }
    setPostponeDecodeLevel(e) {
        this.postponeDecodeLevel = e;
    }
    setClipRecordUser(e, t, n) {
        if (!this.destroyed) {
            let i;
            ((i =
                "soundboard" === t
                    ? "soundboardAudio"
                    : (this.context === O.x.STREAM ? "application" : "user").concat("audio" === t ? "Audio" : "Video")),
                this.conn.setClipRecordUser?.(e, i, n));
        }
    }
    setRemoteAudioHistory(e) {
        this.conn.setTransportOptions({ remoteAudioHistoryMs: e });
    }
    setQualityDecoupling(e) {
        this.context === O.x.STREAM && this.conn.setTransportOptions({ enableQualityDecoupling: e });
    }
    getLocalVolume(e) {
        var t;
        let n = this.localVolumes[e];
        return (null == n && (n = this.context === O.x.DEFAULT ? O.Hz : O.Cn), (null != (t = n) ? t : O.Hz) / O.Hz);
    }
    setLocalVolume(e, t) {
        this.localVolumes[e] = t;
        try {
            this.conn.setLocalVolume(e, this.getLocalVolume(e));
        } catch {
            this.logger.warn(`Failed to set volume for user: ${e}: ${t}`);
        }
    }
    setLocalPan(e, t, n) {
        ((this.localPans[e] = { left: t, right: n }), this.conn.setLocalPan(e, t, n));
    }
    isAttenuating() {
        return this.attenuationFactor < 1;
    }
    setAttenuation(e, t, n) {
        ((this.attenuationFactor = (100 - e) / 100),
            (this.attenuateWhileSpeakingSelf = t),
            (this.attenuateWhileSpeakingOthers = n),
            this.conn.setTransportOptions(this.getAttenuationOptions()));
    }
    setCanHavePriority(e, t) {
        this.conn.setRemoteUserCanHavePriority?.(e, t);
    }
    setBitRate(e) {
        this.setVoiceBitRate(e);
    }
    setVoiceBitRate(e) {
        if (this.voiceBitrate === e) return;
        this.voiceBitrate = e;
        let t = this.voiceBitrate;
        (this.soundshareActive && (t = Math.max(O.kO, t)), this.conn.setTransportOptions({ encodingVoiceBitRate: t }));
    }
    setCameraBitRate(e, t, n) {
        (null != n || null != t
            ? this.videoQualityManager.setQualityOverwrite({ bitrateMin: null != n && n > 0 ? n : t, bitrateMax: t })
            : this.videoQualityManager.setQualityOverwrite({}),
            this.hasDesktopSource() ||
                this.conn.setTransportOptions({
                    encodingVideoBitRate: e,
                    encodingVideoMinBitRate: n,
                    encodingVideoMaxBitRate: t,
                }));
    }
    setEchoCancellation(e) {
        ((this.echoCancellation = e), (0, b.lE)().setTransportOptions({ echoCancellation: this.echoCancellation }));
    }
    setNoiseSuppression(e) {
        ((this.noiseSuppression = e), (0, b.lE)().setTransportOptions({ noiseSuppression: this.noiseSuppression }));
    }
    setAutomaticGainControl(e) {
        ((this.automaticGainControl = e),
            (0, b.lE)().setTransportOptions({
                automaticGainControl: this.automaticGainControl.enabled,
                automaticGainControlConfig: this.automaticGainControl,
            }));
    }
    setNoiseCancellation(e) {
        ((this.noiseCancellation = e), (0, b.lE)().setTransportOptions({ noiseCancellation: this.noiseCancellation }));
    }
    setNoiseCancellationDuringProcessing(e) {
        ((this.noiseCancellationDuringProcessing = e),
            (0, b.lE)().setTransportOptions({
                noiseCancellationDuringProcessing: this.noiseCancellationDuringProcessing,
            }));
    }
    setSkipNoiseCancellationIfMuted(e) {
        (0, b.lE)().setTransportOptions({ skipNoiseCancellationIfMuted: e });
    }
    setEchoReferenceMode(e) {
        ((this.echoReferenceMode = e), (0, b.lE)().setTransportOptions({ echoReferenceMode: this.echoReferenceMode }));
    }
    getNoiseCancellation() {
        return this.noiseCancellation;
    }
    setQoS(e) {
        ((this.qos = e), this.conn.setTransportOptions({ qos: this.qos }));
    }
    setSoundshareDiscardRearChannels(e) {
        this.conn.setTransportOptions({ soundshareDiscardRearChannels: e });
    }
    setInputMode(e, t) {
        switch (((this.inputMode = e), e)) {
            case O.TB.PUSH_TO_TALK:
                this.pttReleaseDelay = t.pttReleaseDelay;
                break;
            case O.TB.VOICE_ACTIVITY:
                ((this.vadThreshold = t.vadThreshold),
                    (this.vadAutoThreshold = t.vadAutoThreshold),
                    (this.vadUseKrisp = t.vadUseKrisp),
                    (this.vadLeading = t.vadLeading),
                    (this.vadTrailing = t.vadTrailing),
                    (this.vadKrispActivationThreshold = t.vadKrispActivationThreshold));
                break;
            default:
                throw Error(`Unknown Input Mode: ${e}`);
        }
        this.conn.setTransportOptions({
            inputMode: F[this.inputMode],
            inputModeOptions: this.createInputModeOptions(),
        });
    }
    setSilenceThreshold(e) {
        (0, b.lE)().setNoInputThreshold(e);
    }
    setForceAudioInput(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.conn.setPTTActive(e, t, n);
    }
    setSpeakingFlags(e, t) {
        (null != this.conn.setRemoteUserSpeakingStatus
            ? this.conn.setRemoteUserSpeakingStatus(e, t)
            : null != this.conn.setRemoteUserSpeaking &&
              this.conn.setRemoteUserSpeaking(e, (t & O.ME.VOICE) === O.ME.VOICE),
            this.handleSpeakingFlags(e, t));
    }
    clearAllSpeaking() {}
    setEncryption(e, t) {
        (this.logger.info(`Selected encryption mode: ${e}`),
            this.conn.setTransportOptions({ encryptionSettings: { mode: e, secretKey: t } }));
    }
    setReconnectInterval(e) {
        ((this.reconnectInterval = e), this.conn.setTransportOptions({ reconnectInterval: this.reconnectInterval }));
    }
    setKeyframeInterval(e) {
        ((this.keyframeInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.keyframeInterval,
                alwaysSendVideo: this.keyframeInterval > 0,
            }));
    }
    setVideoQualityMeasurement(e) {
        ((this.videoQualityMeasurement = e),
            this.conn.setTransportOptions({ videoQualityMeasurement: this.videoQualityMeasurement }));
    }
    setVideoEncoderExperiments(e) {
        ((this.videoEncoderExperiments = e),
            this.conn.setTransportOptions({ videoEncoderExperiments: this.videoEncoderExperiments }));
    }
    setSingleCpuCopy(e) {
        ((this.singleCpuCopy = e), this.conn.setTransportOptions({ singleCpuCopy: this.singleCpuCopy }));
    }
    setAudioVideoOverridesTransport(e) {
        let t = null != e.overrideDeniedVideoCodecs && e.overrideDeniedVideoCodecs !== this.lastOverrideCodecDenylist,
            n =
                null != e.overrideDeniedVideoEncoders &&
                e.overrideDeniedVideoEncoders !== this.lastOverrideEncoderDenylist,
            i = null != e.captureOverrides && e.captureOverrides !== this.lastCaptureOverrides,
            r = {};
        if (
            (t && (r.overrideDeniedVideoCodecs = e.overrideDeniedVideoCodecs),
            n && (r.overrideDeniedVideoEncoders = e.overrideDeniedVideoEncoders),
            i && (r.captureOverrides = e.captureOverrides),
            (t || n || i) && this.conn.setTransportOptions(r),
            t && (this.lastOverrideCodecDenylist = e.overrideDeniedVideoCodecs),
            n && (this.lastOverrideEncoderDenylist = e.overrideDeniedVideoEncoders),
            i && (this.lastCaptureOverrides = e.captureOverrides),
            (t || n) && ((this.videoEncoderFallbackPending = !1), this.videoDecoderFallbackSent.clear()),
            (t || n) && this.initialCodecs.length > 0)
        ) {
            let e =
                    this.lastOverrideCodecDenylist.length > 0
                        ? new Set(this.lastOverrideCodecDenylist.split(",").map((e) => e.trim().toUpperCase()))
                        : null,
                n = this.initialCodecs
                    .map((e) => ({ ...e }))
                    .filter(
                        (t) =>
                            "video" !== t.type || null == e || "VP8" === t.name || "VP9" === t.name || !e.has(t.name),
                    ),
                i = new Set(this.codecs.filter((e) => "video" === e.type && e.encode).map((e) => e.name)),
                r = new Set(n.filter((e) => "video" === e.type && e.encode).map((e) => e.name)),
                a = [...i].some((e) => !r.has(e));
            ((this.codecs = n),
                t && a && (this.overrideCodecResetAt = performance.now()),
                this.emit(u.y.VideoEncoderFallback, this.codecs));
        }
    }
    setVideoBroadcast(e) {
        this.selfVideo !== e && ((this.selfVideo = e), this.applyVideoTransportOptions());
    }
    setGoLiveSource(e) {
        let { resolution: t, frameRate: n } = e.quality,
            i = t <= 480 ? (t / 3) * 4 : (t / 9) * 16,
            r = null;
        if (
            (null != e.desktopDescription
                ? (r = e.desktopDescription.id)
                : null != e.cameraDescription &&
                  (r = `${e.cameraDescription.videoDeviceGuid}:${e.cameraDescription.audioDeviceGuid}`),
            this.goLiveSourceIdentifier === r)
        ) {
            if ((this.setDesktopEncodingOptions(i, t, n), null != e.desktopDescription)) {
                let { soundshareId: t, useLoopback: n } = e.desktopDescription;
                this.soundshareId !== t && this.setSoundshareSource(t, n);
            }
            return;
        }
        if (((this.goLiveSourceIdentifier = r), null != this.conn.setDesktopSource)) {
            if (null != e.desktopDescription) {
                let {
                    id: r,
                    soundshareId: a,
                    useLoopback: s,
                    useVideoHook: l,
                    useGraphicsCaptureApiLevel: o,
                    useCaptureDeviceForEncode: d,
                    useGraphicsCapture: c,
                    useQuartzCapturer: u,
                    allowScreenCaptureKit: _,
                    videoHookStaleFrameTimeoutMs: E,
                    graphicsCaptureStaleFrameTimeoutMs: A,
                    hdrCaptureMode: h,
                    enableGlobalFramePoolLock: I,
                    useGraphicsCaptureDirtyRegions: f,
                    videoHookAllowDx12: p,
                    minCaptureWidth: T,
                    minCaptureHeight: m,
                } = e.desktopDescription;
                this.setSoundshareSource(a, s);
                let [g, S] = null != r ? r.split(":") : ["", ""];
                (null != r
                    ? this.logger.info(
                          `capturing desktop (type: ${g}, handle: ${S}, use-video-hook: ${l.toString()}, use-graphics-capture: ${c?.toString()}, use-graphics-capture-api-level: ${o?.toString()}, use-capture-device-for-encode: ${d?.toString()}).`,
                      )
                    : this.logger.info("capturing desktop (type: <stop>)."),
                    null != this.conn.setDesktopSourceWithOptions
                        ? null != r
                            ? (this.setDesktopEncodingOptions(i, t, n),
                              this.conn.setDesktopSourceWithOptions({
                                  type: g,
                                  sourceId: S,
                                  useVideoHook: l,
                                  useGraphicsCapture: c,
                                  useGraphicsCaptureApiLevel: o,
                                  useCaptureDeviceForEncode: d,
                                  useQuartzCapturer: u,
                                  allowScreenCaptureKit: _,
                                  videoHookStaleFrameTimeoutMs: E,
                                  graphicsCaptureStaleFrameTimeoutMs: A,
                                  hdrCaptureMode: h,
                                  enableGlobalFramePoolLock: I,
                                  useGraphicsCaptureDirtyRegions: f,
                                  videoHookAllowDx12: p,
                                  minCaptureWidth: T,
                                  minCaptureHeight: m,
                              }))
                            : this.conn.clearDesktopSource()
                        : this.conn.setDesktopSource(`wumpus-${S}`, l, g));
            } else if (null != e.cameraDescription) {
                let { videoDeviceGuid: t, audioDeviceGuid: n } = e.cameraDescription;
                this.conn.setGoLiveDevices({ videoInputDeviceId: t, audioInputDeviceId: n });
            }
            this.setDesktopEncodingOptions(i, t, n);
        }
    }
    clearGoLiveDevices() {
        null != this.conn.clearGoLiveDevices && this.conn.clearGoLiveDevices();
    }
    clearDesktopSource() {
        ((this.goLiveSourceIdentifier = null),
            null != this.conn.clearDesktopSource
                ? this.conn.clearDesktopSource()
                : this.conn.setDesktopSource("", !1, ""));
    }
    setDesktopSourceStatusCallback(e) {
        this.conn.setDesktopSourceStatusCallback?.(e);
    }
    hasDesktopSource() {
        return null != this.goLiveSourceIdentifier;
    }
    setDesktopEncodingOptions(e, t, n) {
        if (this.destroyed) return;
        this.lastDesktopEncodingOptions = { width: e, height: t, framerate: n };
        let i = this.calcMaxBitrateFunc({ width: e, height: t, framerate: n, videoCodec: this.currentVideoCodec });
        null == i && (i = (0 === t && n >= 10) || t > 720 || n > 30 ? O.oL : O.lo);
        let r = { width: e, height: t, framerate: n },
            a = this.videoQualityManager.getQuality(),
            s = !C.Xb.equals(r, a.capture) || a.bitrateMax !== i,
            l = this.videoStreamParameters.findIndex((e) => e.quality === O.Y4);
        (-1 === l && (l = 0),
            s &&
                (this.videoQualityManager.setGoliveQuality({ capture: r, encode: r, bitrateMax: i }),
                this.videoStreamParameters.length > l &&
                    ((this.videoStreamParameters[l].maxResolution = {
                        type: 0 === e && 0 === t ? O.ei.SOURCE : O.ei.FIXED,
                        width: e,
                        height: t,
                    }),
                    (this.videoStreamParameters[l].maxFrameRate = n),
                    (this.videoStreamParameters[l].maxBitrate = i)),
                this.emit(
                    u.y.Video,
                    this.userId,
                    null,
                    this.audioSSRC,
                    this.videoStreamParameters[l].ssrc,
                    j(this.videoStreamParameters[l].ssrc),
                    this.videoStreamParameters,
                ),
                this.conn.setTransportOptions(this.applyQualityConstraints().constraints)));
    }
    setSDP(e) {}
    setRemoteVideoSinkWants(e) {
        ((this.remoteVideoSinkWants = e), this.updateVideoQuality(O.nJ));
    }
    setLocalVideoSinkWants(e) {
        let t = this.localVideoSinkWants;
        for (let [n, i] of Object.entries(this.remoteVideoSSRCs)) {
            let r = 0,
                a = 0;
            for (let n of i) ((r += t?.[n]), (a += e?.[n]));
            (0 === r && 0 !== a && this.conn.setDisableLocalVideo?.(n, !1),
                0 !== r && 0 === a && this.conn.setDisableLocalVideo?.(n, !0));
        }
        this.localVideoSinkWants = e;
    }
    startSamplesLocalPlayback(e, t, n, i) {
        if (t.numberOfChannels > 2) return void i(2, "Too many channels");
        if (null == this.conn.startSamplesLocalPlayback) return void i(3, "Not supported");
        for (var r = [], a = 0; a < t.numberOfChannels; a++) {
            var s = t.getChannelData(a);
            r.push(s);
        }
        this.conn.startSamplesLocalPlayback(e, { sampleRate: t.sampleRate, volume: n }, r, i);
    }
    stopAllSamplesLocalPlayback() {
        this.conn.stopAllSamplesLocalPlayback();
    }
    stopSamplesLocalPlayback(e) {
        this.conn.stopSamplesLocalPlayback?.(e);
    }
    setBandwidthEstimationExperiments(e) {
        this.conn.setTransportOptions({ bandwidthEstimationExperiments: e });
    }
    updateVideoQualityCore(e, t) {
        this.videoSupported && (this.destroyed || this.conn.setTransportOptions(e));
    }
    setStreamParameters(e) {
        return new Promise((t, n) => {
            for (let t of this.videoStreamParameters) {
                let i = e.findIndex((e) => e.rid === t.rid);
                if (-1 === i) return void n(Error("Invalid rid"));
                let r = [];
                (T()(this.videoStreamParameters[i], e[i]) ||
                    ((this.videoStreamParameters[i] = { ...e[i] }), r.push({ ...e[i] })),
                    this.conn.setTransportOptions({ streamParameters: r }));
            }
            t();
        });
    }
    applyVideoTransportOptions() {
        if (!this.videoSupported) return;
        let e = !1;
        (this.hasDesktopSource() &&
            this.videoStreamParameters.length > 0 &&
            (e = this.videoStreamParameters[0].maxResolution?.type === O.ei.SOURCE),
            this.conn.setTransportOptions(
                this.applyQualityConstraints({
                    encodingVideoDegradationPreference: this.hasDesktopSource()
                        ? e
                            ? this.sourceDesktopDegradationPreference
                            : this.desktopDegradationPreference
                        : this.videoDegradationPreference,
                }).constraints,
            ),
            this.conn.setVideoBroadcast(this.selfVideo));
    }
    chooseEncryptionMode(e, t) {
        for (let n of t) for (let t of e) if (n === t) return n;
        return "xsalsa20_poly1305";
    }
    getUserOptions() {
        return Object.keys(this.remoteAudioSSRCs).map((e) => {
            let t =
                void 0 !== this.remoteVideoSSRCs[e] && this.remoteVideoSSRCs[e].length > 0
                    ? this.remoteVideoSSRCs[e][0]
                    : 0;
            return {
                id: e,
                ssrc: this.remoteAudioSSRCs[e],
                videoSsrc: t,
                videoSsrcs: this.remoteVideoSSRCs[e],
                rtxSsrc: j(t),
                mute: this.getLocalMute(e),
                volume: this.getLocalVolume(e),
            };
        });
    }
    createInputModeOptions() {
        switch (this.inputMode) {
            case O.TB.VOICE_ACTIVITY:
                return {
                    vadThreshold: this.vadThreshold,
                    vadAutoThreshold: this.vadAutoThreshold ? v.VERY_AGGRESSIVE : v.DISABLED,
                    vadUseKrisp: this.vadUseKrisp,
                    vadLeading: this.vadLeading,
                    vadTrailing: this.vadTrailing,
                    vadKrispActivationThreshold: this.vadKrispActivationThreshold,
                };
            case O.TB.PUSH_TO_TALK:
                return { pttReleaseDelay: this.pttReleaseDelay };
            default:
                throw Error(`Unknown Input Mode: ${this.inputMode}`);
        }
    }
    getAttenuationOptions() {
        return {
            attenuation: this.isAttenuating(),
            attenuationFactor: this.attenuationFactor,
            attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf,
            attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers,
        };
    }
    getCodecParams(e, t) {
        return e !== O.UK.H264
            ? {}
            : t
              ? { "level-asymmetry-allowed": "1", "packetization-mode": "1", "profile-level-id": "42e034" }
              : {
                    "level-asymmetry-allowed": "1",
                    "packetization-mode": "1",
                    "profile-level-id": "android" === (0, b.lE)().platform ? "42e01f" : "4d0033",
                };
    }
    getCodecOptions(e, t, n) {
        let i;
        i = this.codecs.find((t) => t.name === e);
        let r = { type: i?.payloadType ?? 0, name: e, freq: 48e3, pacsize: 960, channels: 1, rate: 64e3 },
            a = this.codecs
                .filter((e) => "audio" === e.type)
                .map((e) => ({
                    type: e?.payloadType ?? 0,
                    name: e.name,
                    freq: 48e3,
                    channels: 2,
                    params: { stereo: "1" },
                }));
        n === O.x.STREAM && (r.channels = 2);
        let s = [],
            l = { name: "", type: 0, rtxType: 0, params: {} };
        for (i of this.codecs) {
            var o;
            if (i.name === e) continue;
            let n = {
                name: "AV1" === (o = i.name) ? "AV1X" : o,
                type: i?.payloadType ?? 0,
                rtxType: i?.rtxPayloadType ?? 0,
                params: this.getCodecParams(i.name, !0),
            };
            if (
                (this.experimentFlags.has(O.fd.RESET_DECODER_ON_ERRORS) && (n.params["reset-on-errors"] = "1"),
                this.experimentFlags.has(O.fd.SOFTWARE_FALLBACK_ON_ERRORS) && (n.params["fallback-after-errors"] = "3"),
                this.experimentFlags.has(O.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS) &&
                    (n.params["fallback-on-consecutive-errors"] = "1"),
                this.experimentFlags.has(O.fd.SIGNAL_AV1_HARDWARE_DECODE) && (n.params["hardware-av1-decode"] = "1"),
                "H265" === n.name && (n.params["software-h265"] = "0"),
                (n.params["hardware-h264"] = this.useElectronVideo ? "1" : "0"),
                this.experimentFlags.has(O.fd.USE_LIBOPENH264_DECODER))
            ) {
                let e = (0, b.XH)();
                null != e && ((n.params.libopenh264 = "1"), (n.params["libopenh264-path"] = e));
            }
            (s.push(n),
                i.name === t &&
                    ((l = { ...n, params: this.getCodecParams(i.name, !1) }),
                    this.experimentFlags.has(O.fd.VIDEOTOOLBOX_RATE_CONTROL) &&
                        (l.params["fixed-rate-presentation-timestamps"] = "1"),
                    this.experimentFlags.has(O.fd.LOW_LATENCY_RATE_CONTROL) &&
                        (l.params["low-latency-rate-control"] = "1"),
                    this.experimentFlags.has(O.fd.WMF_GPU_ENCODE) && (l.params["wmf-gpu"] = "1"),
                    this.experimentFlags.has(O.fd.INTEL_GPU_DISABLE) && (l.params["intel-gpu"] = "0")));
        }
        return { videoEncoder: l, videoDecoders: s, audioEncoder: r, audioDecoders: a };
    }
    getConnectionTransportOptions() {
        let e = {
            selfMute: this.selfMute,
            inputMode: F[this.inputMode],
            inputModeOptions: this.createInputModeOptions(),
            minimumJitterBufferLevel: this.minimumJitterBufferLevel,
            postponeDecodeLevel: this.postponeDecodeLevel,
            ...this.getAttenuationOptions(),
            fec: !0,
            packetLossRate: 0.3,
            qos: this.qos,
            prioritySpeakerDucking: O.zt,
            encodingVoiceBitRate: this.voiceBitrate,
            callBitRate: O.l2,
            callMinBitRate: O.KR,
            callMaxBitRate: O.us,
            encodingVideoDegradationPreference: this.videoDegradationPreference,
            reconnectInterval: this.reconnectInterval,
        };
        return ((0, b.$b)(B.VIDEO_EFFECTS) && this.context === O.x.STREAM && (e.enableVideoEffects = !0), e);
    }
    handleSpeakingNative = (e, t, n) => {
        let i = O.ME.NONE;
        ((i = "boolean" == typeof t ? (t ? O.ME.VOICE : O.ME.NONE) : t), this.handleSpeakingFlags(e, i, n));
    };
    handleNativeMuteChanged = (e) => {
        this.emit(u.y.NativeMuteChanged, e);
    };
    handleSpeakingFlags = (e, t, n) => {
        let i = this.localSpeakingFlags[e] ?? O.ME.NONE;
        if (this.experimentFlags.has(O.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS) && i === t) return;
        this.localSpeakingFlags[e] = t;
        let r = e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
        (this.emit(u.y.Speaking, e, t, r, n),
            (t & O.ME.SOUNDSHARE) != 0 &&
                !1 === this.soundshareSentSpeakingEvent &&
                (this.emit(u.y.SoundshareSpeaking), (this.soundshareSentSpeakingEvent = !0)));
    };
    handleSpeakingWhileMuted = () => {
        this.emit(u.y.SpeakingWhileMuted);
    };
    handlePing = (e, t, n) => {
        this.emit(u.y.Ping, e);
    };
    handlePingTimeout = (e, t, n, i) => {
        this.emit(u.y.PingTimeout, n, i > 0 ? i : 4e3);
    };
    handleConnectionFailed = (e) => {
        if (this.destroyed) return;
        let t = `UDP endpoint retarget failed: ${e}`;
        (this.setConnectionState(O.$I.NO_ROUTE), this.emit(u.y.Error, t));
    };
    handleVideoEncoderFallback = (e) => {
        if (!this.videoEncoderFallbackPending) {
            if (this.overrideCodecResetAt > 0 && performance.now() - this.overrideCodecResetAt < 1e3)
                return void this.logger.info(
                    `Suppressing encoder fallback for ${e} (override codec reset in progress)`,
                );
            (this.logger.info(`Falling back from current video encoder: ${e}`),
                (this.codecs = this.codecs
                    .map((t) => ((e === t.name || ("AV1" === t.name && "AV1X" === e)) && (t.encode = !1), t))
                    .filter((e) => "video" !== e.type || !1 !== e.encode || !1 !== e.decode)),
                this.emit(u.y.VideoEncoderFallback, this.codecs),
                (this.videoEncoderFallbackPending = !0));
        }
    };
    handleVideoDecoderFallback = (e) => {
        this.videoDecoderFallbackSent.has(e) ||
            (this.videoDecoderFallbackSent.add(e),
            this.logger.info(`Falling back from current video decoder: ${e}`),
            (this.codecs = this.codecs
                .map((t) => ((e === t.name || ("AV1" === t.name && "AV1X" === e)) && (t.decode = !1), t))
                .filter((e) => "video" !== e.type || !1 !== e.encode || !1 !== e.decode)),
            this.emit(u.y.VideoDecoderFallback, this.codecs));
    };
    handleVideoCodecError = (e) => {
        this.emit(u.y.VideoCodecError, e);
    };
    handleVideo = (e, t, n, i) => {
        let r = f()(this.videoStreamParameters);
        (e === this.userId
            ? null != i && Array.isArray(i) && i.length > 0
                ? i.forEach((e) => {
                      r.forEach((t, n) => {
                          if (t.rid === e.rid) {
                              let i = e.active;
                              r[n] = { ...t, ssrc: e.ssrc, rtxSsrc: e.rtxSsrc, active: i };
                          }
                      });
                  })
                : t > 0
                  ? ((r[0].active = !0), (r[0].ssrc = t), (r[0].rtxSsrc = j(t)))
                  : (r[0].active = !1)
            : t > 0 &&
              (void 0 !== this.remoteVideoSSRCs[e]
                  ? this.remoteVideoSSRCs[e].includes(t) ||
                    (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], t])
                  : (this.remoteVideoSSRCs[e] = [t])),
            (this.videoStreamParameters = r),
            this.emit(
                u.y.Video,
                e,
                null != n && "" !== n ? n : null,
                e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e],
                t,
                j(t),
                this.videoStreamParameters,
            ));
    };
    handleFirstFrame = (e, t, n) => {
        this.emit(u.y.FirstFrame, e, t, n);
    };
    handleFirstFrameStats = (e) => {
        this.emit(u.y.FirstFrameStats, e);
    };
    handleFirstFrameEncryptedStats = (e) => {
        this.emit(u.y.FirstFrameEncryptedStats, e);
    };
    handleNoInput = (e) => {
        this.emit(u.y.Silence, !e);
    };
    handleDesktopSourceEnded = (e, t) => {
        this.emit(u.y.DesktopSourceEnd, e, t);
    };
    handleSoundshare = (e) => {
        e &&
            ((this.soundshareActive = !0),
            this.conn.setTransportOptions({ encodingVoiceBitRate: Math.max(O.kO, this.voiceBitrate) }),
            this.emit(u.y.SoundshareAttached));
    };
    handleSoundshareFailed = (e, t, n) => {
        this.emit(u.y.SoundshareFailed, { failureCode: e, failureReason: t, willRetry: n });
    };
    handleSoundshareEnded = () => {
        ((this.soundshareActive = !1),
            this.destroyed || this.conn.setTransportOptions({ encodingVoiceBitRate: this.voiceBitrate }));
    };
    handleNewListenerNative = (e) => {
        e === u.y.ConnectionStateChange && this.emit(e, this.connectionState);
    };
    handleStats = (e) => {
        if (this.connectionState === O.$I.DISCONNECTED) return void this.off(u.y.Stats, this.handleStats);
        if (null != e) {
            if (null != this.stats) {
                let t = g()(
                        e.rtp.outbound,
                        (e, t) => ((e.lost += t.packetsLost ?? 0), (e.sent += t.packetsSent ?? 0), e),
                        { lost: 0, sent: 0 },
                    ),
                    n = g()(
                        this.stats.rtp.outbound,
                        (e, t) => ((e.lost += t.packetsLost ?? 0), (e.sent += t.packetsSent ?? 0), e),
                        { lost: 0, sent: 0 },
                    ),
                    i = t.sent - n.sent,
                    r = t.lost - n.lost;
                if (0 === i) this.emit(u.y.OutboundLossRate, 0);
                else if (i > 0 && r >= 0) {
                    let e = h()(r / (i + r), 0, 1);
                    this.emit(u.y.OutboundLossRate, 100 * e);
                }
                let a = e.rtp.outbound.filter((e) => "audio" === e.type)[0],
                    s = this.stats.rtp.outbound.filter((e) => "audio" === e.type)[0];
                if (null != a && null != s && null != a.framesCaptured && null != s.framesCaptured) {
                    let e = a.framesCaptured - s.framesCaptured,
                        t =
                            null != a.noiseCancellerFrames
                                ? null != s.noiseCancellerFrames
                                    ? a.noiseCancellerFrames - s.noiseCancellerFrames
                                    : 0
                                : e;
                    if (!(0, b.$b)(B.KRISP_NATIVE_ERROR)) {
                        if (
                            this.noiseCancellation &&
                            t > 50 &&
                            null != a.noiseCancellerProcessTime &&
                            null != s.noiseCancellerProcessTime
                        ) {
                            let e = a.noiseCancellerProcessTime - s.noiseCancellerProcessTime;
                            e / t > 8
                                ? this.emit(u.y.NoiseCancellationError, O.CO.KRISP_CPU_OVERUSE)
                                : 0 === e && this.emit(u.y.NoiseCancellationError, O.CO.KRISP_FAILED);
                        }
                        this.inputMode === O.TB.VOICE_ACTIVITY &&
                            this.vadAutoThreshold &&
                            this.vadUseKrisp &&
                            e > 50 &&
                            null != a.voiceActivityDetectorProcessTime &&
                            null != s.voiceActivityDetectorProcessTime &&
                            (a.voiceActivityDetectorProcessTime - s.voiceActivityDetectorProcessTime) / e > 4 &&
                            this.emit(u.y.VoiceActivityDetectorError, O.CO.KRISP_VAD_CPU_OVERUSE);
                    }
                }
            }
            this.stats = e;
        }
    };
    setStream(e) {
        throw Error("Method not implemented.");
    }
    getUserIdBySsrc(e) {}
    prepareSecureFramesTransition(e, t, n) {
        (0 === e && ((this.lastExecutedTransitionId = -1), (this.lastPreparedTransitionId = -1)),
            (this.lastPreparedTransitionId = e),
            this.conn.prepareSecureFramesTransition?.(e, t, n));
    }
    prepareSecureFramesEpoch(e, t, n) {
        this.conn.prepareSecureFramesEpoch?.(e, t, n);
    }
    executeSecureFramesTransition(e) {
        if (
            !(
                -1 === this.lastExecutedTransitionId ||
                -1 === this.lastPreparedTransitionId ||
                (this.lastPreparedTransitionId >= this.lastExecutedTransitionId
                    ? e > this.lastExecutedTransitionId && e <= this.lastPreparedTransitionId
                    : e > this.lastExecutedTransitionId || e <= this.lastPreparedTransitionId)
            )
        ) {
            let t = `Skipping invalid transition ${e} outside of range (${this.lastExecutedTransitionId}-${this.lastPreparedTransitionId}]`;
            throw (this.logger.warn(t), Error(t));
        }
        ((this.lastExecutedTransitionId = e), this.conn.executeSecureFramesTransition?.(e));
    }
    getMLSKeyPackage(e) {
        this.conn.getMLSKeyPackage?.(e);
    }
    updateMLSExternalSender(e) {
        this.conn.updateMLSExternalSender?.(e);
    }
    processMLSProposals(e, t) {
        this.conn.processMLSProposals?.(e, t);
    }
    prepareMLSCommitTransition(e, t, n) {
        ((this.lastPreparedTransitionId = e), this.conn.prepareMLSCommitTransition?.(e, t, n));
    }
    processMLSWelcome(e, t, n) {
        ((this.lastPreparedTransitionId = e), this.conn.processMLSWelcome?.(e, t, n));
    }
    getMLSPairwiseFingerprint(e, t, n) {
        this.conn.getMLSPairwiseFingerprint?.(e, t, n);
    }
    presentDesktopSourcePicker(e) {
        this.conn.presentDesktopSourcePicker?.(e);
    }
    handleMLSFailure = (e, t) => {
        this.emit(u.y.MLSFailure, e, t);
    };
    mergeUsers(e) {
        (this.conn.mergeUsers(e), this.emit(u.y.UsersMerged, e));
    }
}
function Y(e, t) {
    let n = !1,
        i = t.map((t, i) => {
            let {
                guid: r,
                guid: a,
                name: s,
                name: l,
                index: o,
                facing: d,
                hardwareId: c,
                containerId: u,
                effects: _,
                macosTransportType: E,
                windowsEndpointFormFactor: A,
                windowsDeviceService: h,
                windowsDeviceDescription: I,
                windowsDeviceInterfaceFriendlyName: f,
            } = t;
            return (
                /^default/.test(s)
                    ? ((n = !0), (r = O.dx), (s = s.replace("default", "Default")))
                    : (r = null != r && "" !== r ? r : s),
                null != o && (i = o),
                {
                    id: r,
                    type: e,
                    index: i,
                    name: s,
                    originalName: l,
                    originalId: a,
                    facing: d,
                    hardwareId: c,
                    containerId: u,
                    effects: _,
                    macosTransportType: E,
                    windowsEndpointFormFactor: A,
                    windowsDeviceService: h,
                    windowsDeviceDescription: I,
                    windowsDeviceInterfaceFriendlyName: f,
                }
            );
        });
    return (
        e !== O.oh.VIDEO_INPUT &&
            !n &&
            l()?.os?.family != null &&
            /^win/i.test(l().os.family) &&
            i.unshift({ id: O.dx, type: e, index: -1, name: "Default" }),
        i
    );
}
function K() {
    return new Promise((e) => {
        (0, b.lE)().getInputDevices((t) => e(Y(O.oh.AUDIO_INPUT, t)));
    });
}
function $() {
    return new Promise((e) => {
        (0, b.lE)().getOutputDevices((t) => e(Y(O.oh.AUDIO_OUTPUT, t)));
    });
}
n(667532);
var z = n(477900),
    X = n(582128),
    Z = n(503698),
    q = n.n(Z),
    Q = n(229209);
let J = new c.Vy("DirectVideo");
function ee(e) {
    return (function (e, t) {
        let {
                streamId: n,
                paused: i = !1,
                onReady: r,
                onResize: a,
                reportContainerResized: s = !0,
                className: l,
                ...o
            } = e,
            d = X.useRef(null),
            c = X.useRef(null),
            u = X.useRef({ width: 0, height: 0 }),
            _ = X.useRef({ streamId: n, paused: i, onReady: r, onResize: a, onContainerResized: t });
        return (
            X.useLayoutEffect(() => {
                let { current: e } = d,
                    t = new ResizeObserver((e) => {
                        if (s)
                            for (let t of e) {
                                if (t.target !== c.current) continue;
                                let e = window.devicePixelRatio * t.target.clientWidth,
                                    n = window.devicePixelRatio * t.target.clientHeight;
                                _.current.onContainerResized?.(_.current.streamId, e, n);
                            }
                    });
                if (null != e) {
                    let n = document.createElement("video");
                    ((n.style.display = "block"),
                        (n.style.width = "100%"),
                        (n.style.height = "100%"),
                        (n.autoplay = !0),
                        (n.muted = !0),
                        n.addEventListener("pause", function () {
                            _.current.paused || c.current?.play();
                        }),
                        n.addEventListener("resize", function () {
                            let { width: e, height: t } = u.current,
                                n = c.current?.videoWidth ?? 0,
                                i = c.current?.videoHeight ?? 0;
                            if (e !== n || t !== i) {
                                let e = { width: n, height: i };
                                (_.current.onResize?.(e), (u.current = e));
                            }
                        }),
                        n.addEventListener("canplaythrough", function () {
                            (J.info(
                                `handleReady for ${_.current.streamId}, have onReady callback = ${null != _.current.onReady}`,
                            ),
                                _.current.onReady?.());
                        }),
                        J.info(`create video element for ${_.current.streamId}, readyState=${n.readyState}`),
                        n.readyState > 3 &&
                            J.error(`video element for ${_.current.streamId} was ready before attached`),
                        e.appendChild(n),
                        t.disconnect(),
                        t.observe(n),
                        (c.current = n));
                }
            }, [s]),
            X.useEffect(() => {
                ((_.current.streamId = n), (_.current.paused = i), (_.current.onReady = r), (_.current.onResize = a));
            }),
            X.useEffect(() => {
                let e = c.current;
                if (null != e)
                    if (i) null != e.srcObject && (e.srcObject = null);
                    else {
                        J.info(`attaching srcObject for ${n}`);
                        let t = (0, Q.nz)(n);
                        return (
                            (e.srcObject = t.stream),
                            () => {
                                (t.release(), (e.srcObject = null));
                            }
                        );
                    }
            }, [i, n]),
            (0, z.jsx)("div", { className: q()("media-engine-video", l), ref: d, ...o })
        );
    })(e, ee.onContainerResized);
}
function et(e) {
    let { disabled: t, deviceId: n, width: i, height: r } = e;
    return t
        ? (0, z.jsx)("div", { className: "media-engine-video", style: { width: i, height: r } })
        : (0, z.jsx)(ee, { streamId: n, style: { width: i, height: r } });
}
(J.enableNativeLogger(!0),
    (ee.onContainerResized = (e, t, n) => {}),
    (et.defaultProps = { disabled: !1, width: 320, height: 180 }));
var en = n(264572).Buffer;
function ei(e) {
    return (e ?? O.Hz) / O.Hz;
}
function er(e) {
    if (null != e) return Math.round((6e3 * Math.min(100, Math.max(10, e))) / 100);
}
class ea extends d.A {
    Video = ee;
    Camera = et;
    audioInputDeviceId = O.qe;
    audioOutputDeviceId = O.qe;
    videoInputDeviceId = O.qe;
    connections = new Set();
    lastVoiceActivity = -1;
    audioSubsystem = "standard";
    audioLayer = "";
    deviceChangeGeneration = 0;
    consecutiveWatchdogFailures = 0;
    codecSurvey = null;
    clipsRecordingEventContext = { id: "", soundshareId: 0, applicationName: "" };
    clipsRecordingEventHandlerRegistered = !1;
    logger = new c.Vy("MediaEngineNative");
    constructor() {
        (super(), this.logger.enableNativeLogger(!0));
        const e = (0, b.lE)();
        (e.setDeviceChangeCallback(this.handleDeviceChange),
            e.setVolumeChangeCallback(this.handleVolumeChange),
            e.setOnVoiceCallback(this.handleVoiceActivity),
            e.setVideoInputInitializationCallback?.(this.handleVideoInputInitialization),
            e.setAudioInputInitializationCallback?.(this.handleAudioInputInitialization),
            e.setAudioDeviceModuleErrorCallback?.(this.handleAudioDeviceModuleErrorCallback),
            e.setTransportOptions({ idleJitterBufferFlush: !0, ducking: !1 }),
            e.setNativeScreenSharePickerCallbacks?.(
                this.handleNativeScreenSharePickerUpdate,
                this.handleNativeScreenSharePickerCancel,
                this.handleNativeScreenSharePickerError,
            ),
            e.setVideoCodecErrorCallback?.(this.handleVideoCodecErrorCallback),
            e.setVoiceProcessingErrorCallback?.(this.handleVoiceProcessingErrorCallback),
            e.setVideoFilterErrorCallback?.(this.handleVideoFilterErrorCallback),
            e.setSpatialAudioStatusCallback?.(this.handleSpatialAudioStatusCallback),
            e.setSystemMicrophoneModeChangeCallback?.(this.handleSystemMicrophoneModeChangeCallback),
            this.on("removeListener", this.handleRemoveListener),
            this.on("newListener", this.handleNewListener),
            null != (0, b.lE)().getAudioSubsystem &&
                (0, b.lE)().getAudioSubsystem((e, t) => {
                    ((this.audioSubsystem = e), (this.audioLayer = t));
                }),
            null != e.pingVoiceThread && this.watchdogTick(),
            null != e.setActiveSinksChangeCallback && e.setActiveSinksChangeCallback(this.handleActiveSinksChange),
            e.setClipsV3Enabled?.(!0),
            e.setOnClipsMlDetection?.((e) => {
                e.length > 0 && this.emit(_.b.ClipsMlDetection, e);
            }),
            (0, E.A)(this),
            (function (e) {
                let t = !1;
                async function n() {
                    if (t) return;
                    let i = (0, b.lE)(),
                        r = await new Promise((e) => {
                            i.pollQueueMetrics?.((t) => {
                                e(t);
                            });
                        });
                    ((r.periodMs = O.tl), e.emit(_.b.VoiceQueueMetrics, r), setTimeout(n, O.tl));
                }
                (e.on(_.b.Destroy, () => (t = !0)), setTimeout(n, O.tl));
            })(this));
    }
    destroy() {
        (this.eachConnection((e) => e.destroy()), this.emit(_.b.Destroy), this.removeAllListeners());
    }
    interact() {}
    static supported() {
        return (0, b.$j)();
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case O.O5.LEGACY_AUDIO_SUBSYSTEM:
                return (0, b.$b)(B.VOICE_LEGACY_SUBSYSTEM);
            case O.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                return (0, b.$b)(B.VOICE_EXPERIMENTAL_SUBSYSTEM);
            case O.O5.AUTOMATIC_AUDIO_SUBSYSTEM:
                return (0, b.$b)(B.VOICE_AUTOMATIC_SUBSYSTEM);
            case O.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
                return (0, b.$b)(B.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
            case O.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING:
                return (0, b.$b)(B.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING);
            case O.O5.DEBUG_LOGGING:
                return (0, b.$b)(B.DEBUG_LOGGING);
            case O.O5.SOUNDSHARE:
                return (0, b.$b)(B.SOUNDSHARE);
            case O.O5.SCREEN_SOUNDSHARE:
                return (0, b.$b)(B.SCREEN_SOUNDSHARE);
            case O.O5.ELEVATED_HOOK:
                return (0, b.$b)(B.ELEVATED_HOOK);
            case O.O5.LOOPBACK:
                return (0, b.$b)(B.LOOPBACK);
            case O.O5.WUMPUS_VIDEO:
                return (0, b.$b)(B.WUMPUS_VIDEO);
            case O.O5.HYBRID_VIDEO:
                return (0, b.$b)(B.HYBRID_VIDEO);
            case O.O5.ATTENUATION:
            case O.O5.VIDEO_HOOK:
                return l()?.os?.family != null && /^win/i.test(l().os.family);
            case O.O5.EXPERIMENTAL_SOUNDSHARE:
                return (0, b.$b)(B.SOUNDSHARE_LOOPBACK);
            case O.O5.REMOTE_LOCUS_NETWORK_CONTROL:
                return (0, b.$b)(B.REMOTE_LOCUS_NETWORK_CONTROL);
            case O.O5.SCREEN_PREVIEWS:
                return (0, b.$b)(B.SCREEN_PREVIEWS);
            case O.O5.CLIPS:
                return (0, b.$b)(B.CLIPS);
            case O.O5.CLIPS_RECORDING_READY_EVENTS:
                return (0, b.$b)(B.CLIPS_RECORDING_READY_EVENTS);
            case O.O5.WINDOW_PREVIEWS:
                return (0, b.$b)(B.WINDOW_PREVIEWS);
            case O.O5.AUDIO_DEBUG_STATE:
                return (0, b.$b)(B.AUDIO_DEBUG_STATE);
            case O.O5.CONNECTION_REPLAY:
                return (0, b.$b)(B.CONNECTION_REPLAY);
            case O.O5.SIMULCAST:
                return (0, b.$b)(B.SIMULCAST) && (0, b.$b)(B.SIMULCAST_BUGFIX);
            case O.O5.RTC_REGION_RANKING:
                return (0, b.$b)(B.RTC_REGION_RANKING);
            case O.O5.ELECTRON_VIDEO:
                return (0, b.$b)(B.ELECTRON_VIDEO);
            case O.O5.MEDIAPIPE:
                return (0, b.$b)(B.MEDIAPIPE);
            case O.O5.VIDEO_BACKGROUND_FILTER:
                return ((0, o.xl)() && (0, b.$b)(B.MEDIAPIPE)) || (0, b.$b)(B.VIDEO_BACKGROUND_FILTER);
            case O.O5.FIXED_KEYFRAME_INTERVAL:
                return (0, b.$b)(B.FIXED_KEYFRAME_INTERVAL);
            case O.O5.FIRST_FRAME_CALLBACK:
                return (0, b.$b)(B.FIRST_FRAME_CALLBACK);
            case O.O5.REMOTE_USER_MULTI_STREAM:
                return (0, b.$b)(B.REMOTE_USER_MULTI_STREAM);
            case O.O5.IMAGE_QUALITY_MEASUREMENT:
                return (0, b.$b)(B.IMAGE_QUALITY_MEASUREMENT);
            case O.O5.GO_LIVE_HARDWARE:
                return (0, b.$b)(B.GO_LIVE_HARDWARE);
            case O.O5.SCREEN_CAPTURE_KIT:
                return (0, b.$b)(B.SCREEN_CAPTURE_KIT);
            case O.O5.NATIVE_SCREENSHARE_PICKER:
                return (0, b.$b)(B.NATIVE_SCREENSHARE_PICKER);
            case O.O5.MLS_PAIRWISE_FINGERPRINTS:
                return (0, b.$b)(B.MLS_PAIRWISE_FINGERPRINTS);
            case O.O5.OFFLOAD_ADM_CONTROLS:
                return (0, b.$b)(B.OFFLOAD_ADM_CONTROLS);
            case O.O5.VAAPI:
                return (0, b.$b)(B.VAAPI);
            case O.O5.GAMESCOPE_CAPTURE:
                return (0, b.$b)(B.GAMESCOPE_CAPTURE);
            case O.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT:
                return (0, b.$b)(B.ASYNC_VIDEO_INPUT_DEVICE_INIT);
            case O.O5.PORT_AWARE_LATENCY_TESTING:
                return (0, b.$b)(B.PORT_AWARE_LATENCY_TESTING);
            case O.O5.SPATIAL_AUDIO:
                return (0, b.$b)(B.SPATIAL_AUDIO);
            case O.O5.KRISP_NATIVE_ERROR:
                return (0, b.$b)(B.KRISP_NATIVE_ERROR);
            case O.O5.UDP_ENDPOINT_UPDATE:
                return (0, b.$b)(B.UDP_ENDPOINT_UPDATE);
            case O.O5.DIAGNOSTICS:
            case O.O5.NATIVE_PING:
            case O.O5.AUTOMATIC_VAD:
            case O.O5.AUDIO_INPUT_DEVICE:
            case O.O5.AUDIO_OUTPUT_DEVICE:
            case O.O5.QOS:
            case O.O5.VOICE_PROCESSING:
            case O.O5.AUTO_ENABLE:
            case O.O5.VIDEO:
            case O.O5.DESKTOP_CAPTURE:
            case O.O5.DESKTOP_CAPTURE_FORMAT:
            case O.O5.DESKTOP_CAPTURE_APPLICATIONS:
            case O.O5.VOICE_PANNING:
            case O.O5.AEC_DUMP:
            case O.O5.DISABLE_VIDEO:
            case O.O5.SAMPLE_PLAYBACK:
            case O.O5.NOISE_SUPPRESSION:
            case O.O5.AUTOMATIC_GAIN_CONTROL:
            case O.O5.SIDECHAIN_COMPRESSION:
                return !0;
            default:
                return !1;
        }
    }
    connect(e, t, n) {
        (0, b.$b)(B.EXPERIMENT_CONFIG) || (n.experiments = void 0);
        let i = W.create(e, t, n, (n.videoSupported ?? !0) && this.supports(O.O5.VIDEO));
        return (
            i.on(u.y.Destroy, (e) => {
                (this.connections.delete(e),
                    this.connectionsEmpty() && ((0, b.i0)(O.E6.NORMAL), (0, b.lE)().setNativeThreadsPriority?.(0)));
            }),
            i.on(u.y.Connected, () => {
                i.setVideoBroadcast(this.shouldConnectionBroadcastVideo(i));
            }),
            i.on(u.y.Silence, (e) => {
                this.emit(_.b.Silence, e);
            }),
            this.connections.add(i),
            (0, b.i0)(n.processPriority ?? O.E6.HIGH),
            null != n.threadPriorityConfiguration &&
                (0, b.lE)().setNativeThreadsPriority?.(n.threadPriorityConfiguration),
            this.emit(_.b.Connection, i),
            i
        );
    }
    shouldConnectionBroadcastVideo(e) {
        return (e.context === O.x.DEFAULT && this.videoInputDeviceId !== O.qe) || e.hasDesktopSource();
    }
    eachConnection(e, t) {
        this.connections.forEach((n) => {
            (null == t || n.context === t) && e(n);
        });
    }
    enable() {
        return Promise.resolve();
    }
    setAudioMixerOptions(e) {
        (0, b.$b)(B.SPATIAL_AUDIO) && (0, b.lE)().setTransportOptions({ audioMixerOptions: e });
    }
    setAudioInputBypassSystemProcessing(e) {
        (0, b.lE)().setTransportOptions({ bypassSystemProcessing: e });
    }
    setInputVolume(e) {
        (0, b.lE)().setInputVolume(ei(e));
    }
    setOutputVolume(e) {
        (0, b.lE)().setOutputVolume(ei(e));
    }
    getAudioInputDevices() {
        return K();
    }
    getNoiseCancellationStats() {
        return new Promise((e) => {
            let t = (0, b.lE)();
            null == t.getNoiseCancellationStats ? e(null) : t.getNoiseCancellationStats((t) => e(JSON.parse(t)));
        });
    }
    setNoiseCancellationEnableStats(e) {
        (0, b.lE)().setNoiseCancellationEnableStats?.(e);
    }
    setAudioInputDevice(e) {
        let t = this.audioInputDeviceId;
        ((this.audioInputDeviceId = e),
            (0, b.$b)(B.SET_AUDIO_DEVICE_BY_ID)
                ? (0, b.lE)().setInputDevice(e)
                : K().then((t) => {
                      let n = t.find((t) => t.id === e) ?? t[0];
                      null != n && (0, b.lE)().setInputDevice(n.index);
                  }),
            this.emit(_.b.SelectedDeviceChange, O.oh.AUDIO_INPUT, t, e));
    }
    getAudioOutputDevices() {
        return $();
    }
    setAudioOutputDevice(e) {
        let t = this.audioOutputDeviceId;
        ((this.audioOutputDeviceId = e),
            (0, b.$b)(B.SET_AUDIO_DEVICE_BY_ID)
                ? (0, b.lE)().setOutputDevice(e)
                : $().then((t) => {
                      let n = t.find((t) => t.id === e) ?? t[0];
                      null != n && (0, b.lE)().setOutputDevice(n.index);
                  }),
            this.emit(_.b.SelectedDeviceChange, O.oh.AUDIO_OUTPUT, t, e));
    }
    getVideoInputDevices() {
        return new Promise((e) => {
            (0, b.lE)().getVideoInputDevices((t) => e(Y(O.oh.VIDEO_INPUT, t)));
        });
    }
    async setVideoInputDevice(e) {
        let t = (await this.getVideoInputDevices()).find((t) => t.id === e),
            n = null != t ? t.id : O.qe;
        if (n !== this.videoInputDeviceId) {
            if (((this.videoInputDeviceId = n), (0, b.$b)(B.SET_VIDEO_DEVICE_BY_ID))) {
                let e = null != t ? (null != t.originalId && "" !== t.originalId ? t.originalId : t.id) : O.qe;
                (0, b.lE)().setVideoInputDevice(e);
            } else (0, b.lE)().setVideoInputDevice(null != t ? t.index : -1);
            this.connections.forEach((e) => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)));
        }
    }
    getVideoInputDeviceId() {
        return this.videoInputDeviceId;
    }
    setAsyncVideoInputDeviceInit(e) {
        ((0, b.lE)().setAsyncVideoInputDeviceInitSetting?.(e), (0, b.lE)().setAsyncVideoInputDeviceInit?.(e));
    }
    getCodecCapabilities(e) {
        (0, b.lE)().getCodecCapabilities(e);
    }
    setGoLiveSource(e, t) {
        null == e
            ? this.eachConnection((e) => {
                  (e.clearDesktopSource(),
                      e.clearGoLiveDevices(),
                      e.setSoundshareSource(0, !1),
                      e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)));
              }, t)
            : this.eachConnection((n) => {
                  (t !== O.x.STREAM || n.streamUserId === n.userId) &&
                      (n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n)));
              }, t);
    }
    setClipsSource(e) {
        let t = (0, b.lE)();
        if (null == t.setClipsSource || null == t.setOnClipsRecordingEvent || null == t.applyClipsSettings) return;
        if (null == e) return void t.setClipsSource({ id: "", soundshareId: 0 });
        let { frameRate: n, resolution: i } = e.quality,
            {
                id: r,
                soundshareId: a,
                useLoopback: s,
                useVideoHook: l,
                useGraphicsCapture: o,
                useQuartzCapturer: d,
                allowScreenCaptureKit: c,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
                minCaptureWidth: E,
                minCaptureHeight: A,
            } = e.desktopDescription;
        ((this.clipsRecordingEventContext = { id: r, soundshareId: a, applicationName: e.applicationName }),
            this.registerClipsRecordingEventHandler(),
            t.applyClipsSettings?.({
                useVideoHook: l,
                useGraphicsCapture: o,
                useQuartzCapturer: d,
                allowScreenCaptureKit: c,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
                soundshareLoopback: s,
                frameRate: n,
                width: i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
                height: i,
                bitrateKbps: er(e.bitratePercent),
                videoEncoderExperiments: e.videoEncoderExperiments,
                minCaptureWidth: E,
                minCaptureHeight: A,
            }));
        let [h, I] = null != r ? r.split(":") : ["", ""];
        t.setClipsSource({ id: I, soundshareId: null != a ? a : 0 });
    }
    setClipsQualitySettings(e, t, n, i) {
        let r = (0, b.lE)();
        if (null == r.applyClipsQualitySettings) return !1;
        r.applyClipsQualitySettings(e, t, n);
        let a = er(i);
        return (null != a && null != r.applyClipsSettings && r.applyClipsSettings({ bitrateKbps: a }), !0);
    }
    setSoundshareSource(e, t, n) {
        this.eachConnection((i) => {
            (n !== O.x.STREAM || i.streamUserId === i.userId) && i.setSoundshareSource(e, t);
        }, n);
    }
    getDesktopSource() {
        return Promise.reject(Error("NO_STREAM"));
    }
    getScreenPreviews(e, t, n) {
        let i = (0, b.lE)();
        return (
            null != i.setPreviewsUseWgc && i.setPreviewsUseWgc(n),
            new Promise((n) => {
                null != (0, b.lE)().getScreenPreviews
                    ? (0, b.lE)().getScreenPreviews(e, t, (e) => {
                          n(e.map((e, t) => ({ ...e, name: "Screen " + (t + 1) })));
                      })
                    : n([]);
            })
        );
    }
    setClipsModulePath(e) {
        (this.registerClipsRecordingEventHandler(), (0, b.lE)().setClipsModulePath?.(e));
    }
    setClipsDataPath(e) {
        (0, b.lE)().setClipsDataPath?.(e);
    }
    setClipsSentryConfig(e, t, n) {
        (0, b.lE)().setClipsSentryConfig?.(e, t, n);
    }
    watchDeviceHardwareMutedChange(e) {
        (0, b.lE)().setDeviceHardwareMutedChangeCallback?.(e, this.handleDeviceHardwareMutedChange);
    }
    hasClipsV3Support() {
        let e = (0, b.lE)();
        return null != e.setClipsModulePath && null != e.setClipsRecordingEnabled && null != e.exportClipToFile;
    }
    registerClipsRecordingEventHandler() {
        let e = (0, b.lE)();
        null == e.setOnClipsRecordingEvent ||
            this.clipsRecordingEventHandlerRegistered ||
            ((this.clipsRecordingEventHandlerRegistered = !0),
            e.setOnClipsRecordingEvent((e, t) => {
                let { id: n, soundshareId: i, applicationName: r } = this.clipsRecordingEventContext;
                (this.logger.info(`Clips recording event: ${V[e]} received for stream ${n} and sound ${i}.`),
                    e === V.GoLiveEnded
                        ? this.emit(_.b.ClipsRecordingRestartNeeded)
                        : e === V.Error
                          ? this.emit(
                                _.b.ClipsInitFailure,
                                null != t && "" !== t ? t : "Failed to set clips source in media engine",
                                r,
                            )
                          : e === V.IdleShutdown
                            ? this.emit(_.b.ClipsBridgeIdleShutdown)
                            : e === V.RecordingHealthy
                              ? this.emit(_.b.ClipsRecordingHealthy)
                              : e === V.RecordingActive
                                ? this.emit(_.b.ClipsRecordingReadyChanged, !0)
                                : e === V.RecordingInactive
                                  ? this.emit(_.b.ClipsRecordingReadyChanged, !1)
                                  : (e === V.Ended || e === V.StoppedByGoLive) &&
                                    this.emit(_.b.ClipsRecordingEnded, n, i));
            }));
    }
    setClipsUIActive(e) {
        (0, b.lE)().setClipsUIActive?.(e);
    }
    setClipsV3MLEnabled(e) {
        (0, b.lE)().setClipsV3MLEnabled?.(e);
    }
    setClipsAudioModelOverride(e) {
        (0, b.lE)().setClipsAudioModelOverride?.(e);
    }
    setClipsRecordingEnabled(e) {
        (0, b.lE)().setClipsRecordingEnabled?.(e);
    }
    setClipBufferLength(e) {
        (0, b.lE)().setClipBufferLength?.(e);
    }
    getSystemSteadyClockNowMs() {
        return (0, b.lE)().getSystemSteadyClockNowMs?.() ?? null;
    }
    saveClipEx(e) {
        let t = (0, b.lE)();
        return new Promise((n, i) => {
            function r(e, t, i, r) {
                let a;
                try {
                    a = JSON.parse("" !== t ? t : "{}");
                } catch {
                    a = {};
                }
                let s = { duration: e, clipStats: a };
                return (
                    void 0 !== i && i.length > 0 && (s.thumbnail = i),
                    void 0 !== r && r.length > 0 && (s.metadata = r),
                    n(s)
                );
            }
            function a(e) {
                try {
                    let t = JSON.parse("" !== e ? e : "{}");
                    return i(t);
                } catch {
                    return i({ errorMessage: "clip save failed", errorAt: "unknown" });
                }
            }
            if (null != t.saveClipEx) return void t.saveClipEx(e, r, a);
            let {
                    filepath: s,
                    metadata: l,
                    thumbnailMs: o,
                    startMs: d,
                    endMs: c,
                    trimStartMs: u,
                    trimEndMs: _,
                    userId: E,
                } = e,
                A = null != E;
            if (
                A
                    ? null == t.saveClipForUser && null == t.saveClipForUserWithTime
                    : null == t.setClipBufferLength || (null == t.saveClip && null == t.saveClipWithTime)
            )
                return void i("unsupported");
            function h(e, t, n) {
                return r(e, n, t, void 0);
            }
            function I(e, t, n) {
                return r(e, t, void 0, n);
            }
            A
                ? null != t.saveClipForUserWithTime
                    ? t.saveClipForUserWithTime(E, s, l, d ?? null, c ?? null, u ?? null, _ ?? null, I, a, o)
                    : (0, b.$b)(B.CLIPS_THUMBNAIL)
                      ? t.saveClipForUser?.(E, s, l, h, a, o)
                      : t.saveClipForUser?.(E, s, l, h, a)
                : null != t.saveClipWithTime
                  ? t.saveClipWithTime(s, l, d ?? null, c ?? null, u ?? null, _ ?? null, I, a, o)
                  : (0, b.$b)(B.CLIPS_THUMBNAIL)
                    ? t.saveClip?.(s, l, h, a, o)
                    : t.saveClip?.(s, l, h, a);
        });
    }
    updateClipMetadata(e, t) {
        let n = (0, b.lE)();
        return null == n.updateClipMetadata
            ? Promise.reject("unsupported")
            : new Promise((i, r) => {
                  n.updateClipMetadata(e, t, i, r);
              });
    }
    saveScreenshot(e, t, n, i, r) {
        let a = (0, b.lE)();
        return null == a.saveScreenshot
            ? Promise.reject("unsupported")
            : new Promise((s, l) => {
                  a.saveScreenshot(
                      e,
                      t,
                      i ?? "",
                      n,
                      r ?? 0,
                      (e) => {
                          s(en.from(e));
                      },
                      l,
                  );
              });
    }
    setClipsPerfMonitoring(e, t, n) {
        let i = (0, b.lE)().setClipsPerfMonitoring;
        return null == i ? Promise.reject("unsupported") : i(e, t, n);
    }
    exportClipToFile(e, t, n) {
        let i = (0, b.lE)().exportClipToFile;
        return null == i
            ? Promise.reject("unsupported")
            : new Promise((r, a) => {
                  i(
                      e,
                      t,
                      n,
                      (e, t) => {
                          "string" != typeof e
                              ? a("unsupported: native exportClipToFile returned non-string")
                              : r({ filepath: e, formattedForUpload: !0 === t });
                      },
                      a,
                  );
              });
    }
    getWindowPreviews(e, t, n) {
        let i = (0, b.lE)();
        return (
            null != i.setPreviewsUseWgc && i.setPreviewsUseWgc(n),
            new Promise((n) => {
                null != (0, b.lE)().getWindowPreviews
                    ? (0, b.lE)().getWindowPreviews(e, t, (e) => {
                          n(e);
                      })
                    : n([]);
            })
        );
    }
    async getSingleWindowPreview(e, t, n, i) {
        let r = (0, b.lE)();
        if ((null != r.setPreviewsUseWgc && r.setPreviewsUseWgc(i), null != (0, b.lE)().getSingleWindowPreview)) {
            let i = await (0, b.lE)().getSingleWindowPreview(e, t, n);
            return i.length > 0 ? i[0] : null;
        }
        return null;
    }
    setAudioSubsystem(e) {
        null != (0, b.lE)().setAudioSubsystem && (0, b.lE)().setAudioSubsystem(e);
    }
    setOffloadAdmControls(e) {
        let t = (0, b.lE)();
        null != t.setOffloadAdmControls && t.setOffloadAdmControls(e);
    }
    updateFieldTrial(e, t) {
        (0, b.lE)().updateFieldTrial?.(e, t);
    }
    queueAudioSubsystem(e) {
        let t = (0, b.lE)();
        null != t.queueAudioSubsystem ? t.queueAudioSubsystem(e) : this.setAudioSubsystem(e);
    }
    getAudioSubsystem() {
        return this.audioSubsystem;
    }
    getAudioLayer() {
        return this.audioLayer;
    }
    getDebugLogging() {
        return !!this.supports(O.O5.DEBUG_LOGGING) && (0, b.lE)().getDebugLogging();
    }
    setDebugLogging(e) {
        this.supports(O.O5.DEBUG_LOGGING) && (0, b.lE)().setDebugLogging(e);
    }
    setLoopback(e, t) {
        (null != (0, b.lE)().setLoopback &&
            (0, b.lE)().setLoopback(e, {
                echoCancellation: t.echoCancellation,
                noiseSuppression: t.noiseSuppression,
                automaticGainControl: t.automaticGainControlConfig?.enabled,
                automaticGainControlConfig: t.automaticGainControlConfig,
                noiseCancellation: t.noiseCancellation,
                noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing,
            }),
            null != (0, b.lE)().setEmitVADLevel2
                ? (0, b.lE)().setEmitVADLevel2(e || this.listenerCount(_.b.VoiceActivity) > 0)
                : (0, b.lE)().setEmitVADLevel(e || this.listenerCount(_.b.VoiceActivity) > 0, e, {
                      echoCancellation: t.echoCancellation,
                      noiseSuppression: t.noiseSuppression,
                      automaticGainControl: t.automaticGainControlConfig?.enabled,
                      noiseCancellation: t.noiseCancellation,
                      noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing,
                  }));
    }
    getLoopback() {
        return !1;
    }
    getCodecSurvey() {
        return null != this.codecSurvey
            ? Promise.resolve(this.codecSurvey)
            : new Promise((e, t) => {
                  let n = (0, b.lE)();
                  null != n.getCodecSurvey
                      ? n.getCodecSurvey((t) => {
                            ((this.codecSurvey = t), e(t));
                        })
                      : t(Error("getCodecSurvey is not implemented."));
              });
    }
    writeAudioDebugState() {
        return new Promise((e, t) => {
            let { writeAudioDebugState: n } = (0, b.lE)();
            null != n ? (n(), e()) : t(Error("Audio debug state is not supported."));
        });
    }
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {
        (0, b.lE)().setAecDump?.(e);
    }
    startRecordingRawSamples(e) {
        (0, b.lE)().startRecordingRawSamples?.(e);
    }
    stopRecordingRawSamples() {
        (0, b.lE)().stopRecordingRawSamples?.();
    }
    processBatchAudioFiles(e, t, n, i) {
        (0, b.lE)().processBatchAudioFiles?.(e, t, n, i);
    }
    cancelBatchAudioProcessing() {
        (0, b.lE)().cancelBatchAudioProcessing?.();
    }
    rankRtcRegions(e) {
        return new Promise((t, n) => {
            let { rankRtcRegions: i } = (0, b.lE)();
            null != i ? i(e, (e) => t(e)) : n(Error("RTC region latency test is not supported."));
        });
    }
    createReplayConnection(e, t) {
        let n = W.createReplay(e, t);
        return null == n
            ? null
            : (n.on(u.y.Destroy, (e) => {
                  (this.connections.delete(e), this.connectionsEmpty() && (0, b.i0)(O.E6.NORMAL));
              }),
              this.connections.add(n),
              (0, b.i0)(O.E6.HIGH),
              this.emit(_.b.Connection, n),
              n);
    }
    setOnVideoContainerResized(e) {
        ee.onContainerResized = e;
    }
    setMaxSyncDelayOverride(e) {
        let { setMaxSyncDelayOverride: t } = (0, b.lE)();
        null != t && t(e);
    }
    applyMediaFilterSettings(e) {
        let { applyMediaFilterSettings: t, applyMediaFilterSettingsWithCallback: n } = (0, b.lE)();
        return null != n
            ? new Promise((t, i) => {
                  n(e, t);
              })
            : (null != t && t(e), Promise.resolve());
    }
    startLocalAudioRecording(e) {
        return new Promise((t, n) => {
            let { startLocalAudioRecording: i } = (0, b.lE)();
            null != i
                ? i(e, (e) => {
                      e ? t() : n(Error("Failed to start local audio recording."));
                  })
                : n(Error("startLocalAudioRecording is not supported."));
        });
    }
    stopLocalAudioRecording(e) {
        ((0, b.lE)().stopLocalAudioRecording?.((t, n) => {
            e(t, n);
        }),
            this.listenerCount(_.b.VoiceActivity) > 0 &&
                null != (0, b.lE)().setEmitVADLevel2 &&
                (0, b.lE)().setEmitVADLevel2(!0));
    }
    setHasFullbandPerformance(e) {
        (0, b.lE)().setHasFullbandPerformance?.(e);
    }
    setNcModels(e) {
        (0, b.lE)().setNcModels?.(e);
    }
    getSupportedSecureFramesProtocolVersion() {
        return (0, b.lE)().SupportedSecureFramesProtocolVersion ?? 0;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        (0, b.lE)().getSupportedBandwidthEstimationExperiments?.(e);
    }
    getMLSSigningKey(e, t) {
        return new Promise((n, i) => {
            let r = (0, b.lE)();
            null != r.getMLSSigningKey
                ? r.getMLSSigningKey(e, t, (e, t) => n({ key: e, signature: t }))
                : i(Error("NOT_IMPLEMENTED"));
        });
    }
    setSidechainCompression(e) {
        (0, b.lE)().setSidechainCompression?.(e);
    }
    setSidechainCompressionStrength(e) {
        var t, n;
        let i = 100 - e,
            r = (t = O.Zi) + ((O.Xg - t) * i) / 100,
            a = (n = O.d_) + ((O.nO - n) * i) / 100;
        (0, b.lE)().applySidechainCompressionSettings?.({ threshold: r, ratio: a });
    }
    setVoiceSampleRateCap(e) {
        (0, b.lE)().setVoiceSampleRateCap?.(e);
    }
    setVoiceChannelCountCap(e) {
        (0, b.lE)().setVoiceChannelCountCap?.(e);
    }
    setNativeDesktopVideoSourcePickerActive(e) {
        (0, b.lE)().setNativeDesktopVideoSourcePickerActive?.(e);
    }
    presentNativeScreenSharePicker(e) {
        (0, b.lE)().presentNativeScreenSharePicker?.(e ?? "");
    }
    releaseNativeDesktopVideoSourcePickerStream() {
        (0, b.lE)().releaseNativeDesktopVideoSourcePickerStream?.();
    }
    async getSystemMicrophoneMode() {
        return (await (0, b.lE)().getSystemMicrophoneMode?.()) ?? "";
    }
    showSystemCaptureConfigurationUI(e) {
        (0, b.lE)().showSystemCaptureConfigurationUI?.(e);
    }
    fetchAsyncResources(e) {
        return Promise.resolve();
    }
    async getDeviceOSVolume(e) {
        return await (0, b.lE)().getDeviceOSVolume?.(e);
    }
    async getDeviceOSMuted(e) {
        return await (0, b.lE)().getDeviceOSMuted?.(e);
    }
    getDeviceAudioEffects(e) {
        let t = (0, b.lE)();
        return null != t.getDeviceAudioEffects
            ? t.getDeviceAudioEffects(e)
            : Promise.reject(Error("Device audio effect querying not supported"));
    }
    handleDeviceChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            (e.deviceChangeGeneration++,
                e.emit(_.b.DeviceChange, Y(O.oh.AUDIO_INPUT, t), Y(O.oh.AUDIO_OUTPUT, n), Y(O.oh.VIDEO_INPUT, i)));
        };
    })();
    handleVolumeChange = (e, t) => {
        this.emit(_.b.VolumeChange, e * O.Hz, t * O.Hz);
    };
    handleVoiceActivity = (e, t) => {
        let n = Date.now();
        this.listenerCount(_.b.VoiceActivity) > 0 &&
            (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) &&
            ((this.lastVoiceActivity = n), this.emit(_.b.VoiceActivity, e, t));
    };
    handleActiveSinksChange = (e, t) => {
        this.connections.forEach((n) =>
            n.setHasActiveVideoOutputSink(e, t, "MediaEngineNative.handleActiveSinksChange"),
        );
    };
    handleNewListener = (e) => {
        switch (e) {
            case _.b.VoiceActivity:
                null != (0, b.lE)().setEmitVADLevel2
                    ? (0, b.lE)().setEmitVADLevel2(!0)
                    : (0, b.lE)().setEmitVADLevel(!0, !1, {});
                break;
            case _.b.DeviceChange:
                let t = this.deviceChangeGeneration;
                Promise.all([
                    this.getAudioInputDevices(),
                    this.getAudioOutputDevices(),
                    this.getVideoInputDevices(),
                ]).then((e) => {
                    let [n, i, r] = e;
                    t === this.deviceChangeGeneration && this.emit(_.b.DeviceChange, n, i, r);
                });
        }
    };
    handleRemoveListener = (e) => {
        e === _.b.VoiceActivity &&
            (null != (0, b.lE)().setEmitVADLevel2
                ? (0, b.lE)().setEmitVADLevel2(this.listenerCount(_.b.VoiceActivity) > 0)
                : (0, b.lE)().setEmitVADLevel(this.listenerCount(_.b.VoiceActivity) > 0, !1, {}));
    };
    handleVideoInputInitialization = (e) => {
        this.emit(_.b.VideoInputInitialized, e);
    };
    handleAudioInputInitialization = (e) => {
        this.emit(_.b.AudioInputInitialized, e);
    };
    handleNativeScreenSharePickerUpdate = (e, t) => {
        this.emit(_.b.NativeScreenSharePickerUpdate, e, t);
    };
    handleNativeScreenSharePickerCancel = (e) => {
        this.emit(_.b.NativeScreenSharePickerCancel, e);
    };
    handleNativeScreenSharePickerError = (e) => {
        this.emit(_.b.NativeScreenSharePickerError, e);
    };
    handleAudioDeviceModuleErrorCallback = (e, t) => {
        -100 !== e && this.emit(_.b.AudioDeviceModuleError, "RustAudioDeviceModule", e, t);
    };
    handleVideoCodecErrorCallback = (e) => {
        this.emit(_.b.VideoCodecError, e);
    };
    handleVoiceProcessingErrorCallback = (e) => {
        this.emit(_.b.VoiceProcessingError, e);
    };
    handleVideoFilterErrorCallback = (e, t) => {
        this.emit(_.b.VideoFilterError, e, t);
    };
    handleSpatialAudioStatusCallback = (e) => {
        this.emit(_.b.SpatialAudioStatus, e);
    };
    handleSystemMicrophoneModeChangeCallback = (e) => {
        this.emit(_.b.SystemMicrophoneModeChange, e);
    };
    handleDeviceHardwareMutedChange = (e, t) => {
        this.emit(_.b.DeviceHardwareMutedChange, e, t);
    };
    watchdogTick() {
        let e = !1;
        ((0, b.lE)().pingVoiceThread(() => {
            ((e = !0), (this.consecutiveWatchdogFailures = 0));
        }),
            setTimeout(() => {
                !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(_.b.WatchdogTimeout) : this.watchdogTick();
            }, 3e4));
    }
    connectionsEmpty() {
        return 0 === this.connections.size;
    }
}
