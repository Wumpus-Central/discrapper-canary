"use strict";
n.d(t, { A: () => er });
var i,
    r,
    s,
    a = n(214958),
    o = n.n(a),
    l = n(972347),
    u = n(941426),
    c = n(459838),
    d = n(70909);
n(321073);
var _ = n(119479),
    f = n.n(_),
    h = n(415955),
    p = n.n(h),
    E = n(128080),
    m = n.n(E),
    g = n(264968),
    A = n.n(g),
    I = n(141697),
    T = n(904986);
n(618792);
var S = n(466376),
    N = n(731854);
let y = [
    { name: "H264", encode: !0, decode: !0 },
    { name: "VP8", encode: !0, decode: !0 },
];
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = t.concat(y),
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
function v(e) {
    let t = [],
        n = e.has(N.fd.SIGNAL_AV1_ENCODE),
        i = e.has(N.fd.SIGNAL_AV1_DECODE);
    return (
        (n || i) && t.push({ name: "AV1", encode: n, decode: i }),
        t.push({
            name: "H265",
            encode: !e.has(N.fd.H265_DISABLE_ENCODE),
            decode: !e?.has(N.fd.H265_HARDWARE_ONLY) || e?.has(N.fd.H265_HARDWARE_DECODE_AVAILABLE),
        }),
        t
    );
}
function O(e) {
    return JSON.parse(e).map((e) => {
        var t;
        return { name: "AV1X" === (t = e.codec) ? "AV1" : t, encode: e.encode, decode: e.decode };
    });
}
var R =
        (((i = {})[(i.DISABLED = -1)] = "DISABLED"),
        (i[(i.NORMAL = 0)] = "NORMAL"),
        (i[(i.LOW_BIRTATE = 1)] = "LOW_BIRTATE"),
        (i[(i.AGGRESSIVE = 2)] = "AGGRESSIVE"),
        (i[(i.VERY_AGGRESSIVE = 3)] = "VERY_AGGRESSIVE"),
        i),
    b = n(823598),
    D = n(752163);
function L(e) {
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
function w(e) {
    let t = e?.packets ?? 0;
    return (e?.fec?.packets ?? 0) + (e?.retransmitted?.packets ?? 0) + (e?.transmitted?.packets ?? 0) + t;
}
function M(e) {
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
function P(e, t) {
    let n = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
    if (null == n) return;
    let i = e.substreams.reduce((e, t) => e + L(t.rtpStats), 0),
        r = e.substreams.reduce((e, t) => e + w(t.rtpStats), 0);
    return {
        type: "video",
        ssrc: n.ssrc,
        sinkWant: (0, D.D)(t, n.ssrc, !0),
        sinkWantAsInt: (0, D.q)(t, n.ssrc),
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
    };
}
function x(e, t, n, i) {
    let r = L(e.rtpStats),
        s = w(e.rtpStats);
    return {
        type: "video",
        ssrc: e.ssrc,
        sinkWant: (0, D.D)(t, e.ssrc, !0),
        sinkWantAsInt: (0, D.q)(t, e.ssrc),
        sinkWantLocal: (0, D.D)(n, e.ssrc, !0),
        sinkWantLocalAsInt: (0, D.q)(n, e.ssrc),
        codec: { id: e.codecPayloadType, name: e.codecName },
        bytesReceived: r,
        packetsReceived: s,
        packetsLost: e.rtpStats.packetsLost ?? e.rtcpStats.packetsLost,
        fractionLost: e.rtcpStats.fractionLost,
        bitrate: e.totalBitrate,
        jitterBuffer: e.jitterBuffer,
        currentDelay: e.currentDelay,
        targetDelay: e.targetDelay,
        minPlayoutDelay: e.minPlayoutDelay,
        renderDelay: e.renderDelay,
        averageDecodeTime: e.decode,
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
            ? M({
                  videoJitterBuffer: i.videoJitterBuffer,
                  videoJitterDelay: i.videoJitterDelay,
                  videoJitterTarget: i.videoJitterTarget,
              })
            : {}),
    };
}
function U(e, t, n, i) {
    let r = null,
        s = null,
        a = "string" == typeof t ? JSON.parse(t) : t,
        o = [];
    if (null != a.outbound) {
        let { audio: e, video: t, videos: i } = a.outbound;
        if (
            (null != e &&
                ((s = (s ?? 0) + e.bytesSent),
                o.push({
                    type: "audio",
                    ssrc: e.ssrc,
                    sinkWant: (0, D.D)(n, e.ssrc, !1),
                    sinkWantAsInt: (0, D.q)(n, e.ssrc),
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
                })),
            null != i)
        )
            i.forEach((e) => {
                let t = P(e, n);
                null != t && ((s = (s ?? 0) + t.bytesSent), o.push(t));
            });
        else if (null != t) {
            let e = P(t, n);
            null != e && ((s = (s ?? 0) + e.bytesSent), o.push(e));
        }
    }
    let l = {};
    null != a.inbound &&
        a.inbound.forEach((e) => {
            let { id: t, audio: s, video: a, videos: o, playout: u } = e;
            if (
                ((l[t] = []),
                null != s &&
                    ((r = (r ?? 0) + s.bytesReceived),
                    l[t].push({
                        type: "audio",
                        ssrc: s.ssrc,
                        sinkWant: (0, D.D)(n, s.ssrc, !1),
                        sinkWantAsInt: (0, D.q)(n, s.ssrc),
                        codec: { id: s.codecPayloadType, name: s.codecName },
                        bytesReceived: s.bytesReceived,
                        packetsReceived: s.packetsReceived,
                        packetsLost: s.packetsLost,
                        fractionLost: 100 * s.fractionLost,
                        fecPacketsReceived: s.fecPacketsReceived,
                        fecPacketsDiscarded: s.fecPacketsDiscarded,
                        audioLevel: s.audioLevel / 32768,
                        audioDetected: s.speaking,
                        currentSampleRate: s.currentSampleRate,
                        jitter: s.jitter,
                        jitterBuffer: s.jitterBuffer,
                        jitterBufferPreferred: s.jitterBufferPreferred,
                        decodingCNG: s.decodingCNG,
                        decodingMutedOutput: s.decodingMutedOutput,
                        decodingNormal: s.decodingNormal,
                        decodingPLC: s.decodingPLC,
                        decodingPLCCNG: s.decodingPLCCNG,
                        nackCount: s.nackCount,
                        accelerateRate: 100 * s.accelerateRate,
                        expandRate: 100 * s.expandRate,
                        preemptiveExpandRate: 100 * s.preemptiveExpandRate,
                        speechExpandRate: 100 * s.speechExpandRate,
                        secondaryDecodedRate: 100 * s.secondaryDecodedRate,
                        opSilence: s.opSilence,
                        opNormal: s.opNormal,
                        opMerge: s.opMerge,
                        opExpand: s.opExpand,
                        opAccelerate: s.opAccelerate,
                        opPreemptiveExpand: s.opPreemptiveExpand,
                        opCNG: s.opCNG,
                        delayEstimate: s.delayEstimate,
                        passthroughCount: s.passthroughCount,
                        decryptSuccessCount: s.decryptSuccessCount,
                        decryptFailureCount: s.decryptFailureCount,
                        decryptDuration: s.decryptDuration,
                        decryptAttempts: s.decryptAttempts,
                        decryptMissingKeyCount: s.decryptMissingKeyCount,
                        decryptInvalidNonceCount: s.decryptInvalidNonceCount,
                        ...(null != u
                            ? M({
                                  audioJitterBuffer: u.audioJitterBuffer,
                                  audioJitterBufferSamples: u.audioJitterBufferSamples,
                                  audioJitterDelay: u.audioJitterDelay,
                                  audioJitterDelaySamples: u.audioJitterDelaySamples,
                                  audioJitterTarget: u.audioJitterTarget,
                                  audioJitterTargetSamples: u.audioJitterTargetSamples,
                                  audioPlayoutUnderruns: u.audioPlayoutUnderruns,
                                  relativeReceptionDelay: u.relativeReceptionDelay,
                                  relativePlayoutDelay: u.relativePlayoutDelay,
                              })
                            : {}),
                    })),
                null != o)
            )
                o.forEach((e) => {
                    let s = x(e, n, i, u);
                    if (null != s) {
                        let n = L(e.rtpStats);
                        (r = (r ?? 0) + n), l[t].push(s);
                    }
                });
            else if (null != a) {
                let e = x(a, n, i, u);
                if (null != e) {
                    let n = L(a.rtpStats);
                    (r = (r ?? 0) + n), l[t].push(e);
                }
            }
        });
    let { transport: u, clips: c } = a,
        d = {};
    null != u &&
        ((d.availableOutgoingBitrate = u.sendBandwidth),
        (d.ping = u.rtt),
        (d.decryptionFailures = u.decryptionFailures),
        null != u.routingFailures && (d.routingFailures = u.routingFailures),
        (d.localAddress = u.localAddress),
        (d.pacerDelay = u.pacerDelay),
        null != u.receiverReports && (d.receiverReports = u.receiverReports),
        (d.receiverBitrateEstimate = u.receiverBitrateEstimate),
        (d.outboundBitrateEstimate = u.outboundBitrateEstimate),
        (d.inboundBitrateEstimate = u.inboundBitrateEstimate ?? 0),
        (d.packetsReceived = u.packetsReceived),
        (d.packetsSent = u.packetsSent),
        null != u.secureFramesProtocolVersion && (d.secureFramesProtocolVersion = u.secureFramesProtocolVersion)),
        (u?.bytesReceived == null && (null == r || Number.isNaN(r))) ||
            (d.bytesReceived = u?.bytesReceived ?? r ?? void 0),
        (u?.bytesSent == null && (null == s || Number.isNaN(s))) || (d.bytesSent = u?.bytesSent ?? s ?? void 0);
    let { screenshare: _, camera: f, audioDevice: h } = a;
    return {
        mediaEngineConnectionId: e,
        transport: d,
        screenshare: _,
        camera:
            null != f
                ? {
                      capturedFramesDropped: f.capturedFramesDropped,
                      capturedFramesCount: f.capturedFramesCount,
                      capturedFramesMean: f.capturedFramesMean,
                      capturedFramesStdev: f.capturedFramesStdev,
                  }
                : null,
        clips: c,
        audioDevice: h,
        rtp: { inbound: l, outbound: o },
    };
}
let k = { [N.TB.VOICE_ACTIVITY]: 1, [N.TB.PUSH_TO_TALK]: 2 };
var G =
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
        (r.FIXED_KEYFRAME_INTERVAL = "fixed_keyframe_interval"),
        (r.FIRST_FRAME_CALLBACK = "first_frame_callback"),
        (r.REMOTE_USER_MULTI_STREAM = "remote_user_multi_stream"),
        (r.CLIPS = "clips"),
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
        r),
    F =
        (((s = {})[(s.Started = 0)] = "Started"),
        (s[(s.Ended = 1)] = "Ended"),
        (s[(s.Error = 2)] = "Error"),
        (s[(s.TransferredToVoiceCall = 3)] = "TransferredToVoiceCall"),
        (s[(s.TransferredToGoLive = 4)] = "TransferredToGoLive"),
        (s[(s.StoppedByGoLive = 5)] = "StoppedByGoLive"),
        (s[(s.BlockedByGoLive = 6)] = "BlockedByGoLive"),
        (s[(s.GoLiveEnded = 7)] = "GoLiveEnded"),
        s);
let V = 0;
function B(e) {
    return null != e && 0 !== e ? e + 1 : 0;
}
class H extends T.A {
    mediaEngineConnectionId = `Native-${V++}`;
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
    inputMode = N.TB.VOICE_ACTIVITY;
    vadThreshold = -40;
    vadAutoThreshold = !0;
    vadKrispActivationThreshold = 0.5;
    vadUseKrisp = !0;
    vadLeading = 5;
    vadTrailing = 25;
    vadDuringPreProcess = !1;
    pttReleaseDelay = 20;
    soundshareActive = !1;
    soundshareId = null;
    soundshareSentSpeakingEvent = !1;
    echoCancellation = !0;
    noiseSuppression = !0;
    automaticGainControl = { enabled: !0 };
    noiseCancellation = !1;
    noiseCancellationDuringProcessing = !1;
    attenuationFactor = 0.5;
    attenuateWhileSpeakingSelf = !1;
    attenuateWhileSpeakingOthers = !0;
    qos = !0;
    conn;
    minimumJitterBufferLevel = 0;
    postponeDecodeLevel = 100;
    reconnectInterval = 6e4;
    keyframeInterval = 0;
    clipsKeyFrameInterval = 0;
    videoQualityMeasurement = "";
    videoEncoderExperiments = "";
    numFastUdpReconnects = 0;
    lastPreparedTransitionId = -1;
    lastExecutedTransitionId = -1;
    currentVideoCodec = null;
    av1CodecBitrateFunc = () => N.lo;
    lastDesktopEncodingOptions = null;
    logger;
    constructor(e, t, n) {
        super(e, t),
            (this.videoSupported = n),
            (this.logger = new u.Vy(`Connection(${e})`)),
            this.logger.enableNativeLogger(!0);
    }
    static create(e, t, n) {
        let i = new H(e, t, !0);
        return i.initialize(n), i;
    }
    static createReplay(e, t) {
        let n = new H(e, "0", !0),
            i = (0, b.lE)();
        n.initializeStreamParameters([{ type: N.mI.VIDEO, rid: "100", ssrc: 0, rtxSsrc: 0, quality: 100, active: !1 }]);
        let r = i.createReplayConnection(
            "default",
            (t, r) => {
                n.on(c.yq.Stats, n.handleStats),
                    n.conn.setOnVideoCallback(n.handleVideo),
                    i.getCodecCapabilities((t) => {
                        let i = v(n.experimentFlags);
                        (n.codecs = [
                            { type: "audio", name: N.UK.OPUS, priority: 1, payloadType: 120 },
                            ...(function (e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return C(O(e), t, n);
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
                            }),
                        ]),
                            n.setCodecs(N.UK.OPUS, N.UK.H264, e),
                            n.conn.startReplay();
                    });
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
        this.logger.info(`Creating connection to ${e.address}:${e.port} with audio ssrc: ${e.ssrc}`),
            (this.beginInitializeAt = performance.now()),
            (this.audioSSRC = e.ssrc),
            (this.streamUserId = e.streamUserId),
            this.initializeStreamParameters(e.streamParameters),
            (e.streamParameters = [
                {
                    type: N.mI.AUDIO,
                    ssrc: this.audioSSRC,
                    rid: "",
                    maxBitrate: 64e3,
                    soundshare: this.context === N.x.STREAM,
                },
                ...this.videoStreamParameters,
            ]),
            (e.context = this.context);
        let n = (0, b.lE)(),
            i = (i, r) => {
                if (this.destroyed) return;
                if (null != i && "" !== i) {
                    this.setConnectionState(N.$I.NO_ROUTE), this.emit(c.yq.Error, i);
                    return;
                }
                if (null == r) throw Error("Invalid transport info");
                this.transportInfo = r;
                let { protocol: s, address: a, port: o } = r;
                this.logger.info(`Connected with local address ${a}:${o} and protocol: ${s}`),
                    (this.onConnectCallbackAt = performance.now()),
                    n.getCodecCapabilities((i) => {
                        (this.onVideoCodecsCallbackAt = performance.now()),
                            this.logger.info(`Available engine codecs: ${JSON.stringify(i)}`);
                        let r = v(this.experimentFlags);
                        this.logger.info(`Experimental codecs: ${JSON.stringify(r)}`);
                        let l = O(i),
                            u = this.lastOverrideCodecDenylist.length > 0;
                        this.codecs = [
                            { type: "audio", name: N.UK.OPUS, priority: 1, payloadType: 120 },
                            ...C(l, r, u).map((e, t) => {
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
                            }),
                        ];
                        let d = new Map(l.map((e) => [e.name, e.encode]));
                        (this.initialCodecs = this.codecs.map((e) => ({
                            ...e,
                            encode: "video" === e.type ? (d.get(e.name) ?? e.encode) : e.encode,
                        }))),
                            this.logger.info(
                                `Audio codecs: ${this.codecs.filter((e) => "audio" === e.type).map((e) => e.name)}`,
                            ),
                            this.logger.info(
                                `Video codecs: ${this.codecs.filter((e) => "video" === e.type).map((e) => e.name + "[encode: " + e.encode + ", decode: " + e.decode + "]")}`,
                            ),
                            t.getEncryptionModes((i) => {
                                (this.onEncryptionModesCallbackAt = performance.now()),
                                    this.logger.info(`Encryption modes: ${i}`),
                                    t.setTransportOptions(this.getConnectionTransportOptions()),
                                    t.setSelfMute(this.selfMute || this.context === N.x.STREAM),
                                    t.setSelfDeafen(this.selfDeaf),
                                    t.setOnSpeakingCallback(this.handleSpeakingNative),
                                    t.setOnNativeMuteChangedCallback?.(this.handleNativeMuteChanged),
                                    t.setOnSpeakingWhileMutedCallback?.(this.handleSpeakingWhileMuted),
                                    t.setPingInterval?.(N.n8),
                                    t.setPingCallback(this.handlePing),
                                    t.setPingTimeoutCallback?.(this.handlePingTimeout),
                                    t.setOnVideoEncoderFallbackCallback?.(this.handleVideoEncoderFallback),
                                    t.setOnVideoDecoderFallbackCallback?.(this.handleVideoDecoderFallback),
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
                                    this.setConnectionState(N.$I.CONNECTED),
                                    this.emit(c.yq.Connected, s, {
                                        address: a,
                                        port: o,
                                        mode: this.chooseEncryptionMode(e.modes, i),
                                        codecs: this.codecs,
                                    }),
                                    this.on(c.yq.Stats, this.handleStats);
                                let r = this.getUserOptions();
                                for (let e of (r.forEach((e) =>
                                    this.logger.info(
                                        `Creating user: ${e.id} with audio SSRC: ${e.ssrc} and video SSRCs: ${e.videoSsrcs?.join(",") ?? 0}`,
                                    ),
                                ),
                                this.mergeUsers(r),
                                this.emit(c.yq.RemoteStreamsReady, r.length),
                                Object.keys(this.localSpeakingFlags)))
                                    e !== this.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e]);
                            });
                    });
            };
        if (null != n.createOwnStreamConnectionWithOptions)
            r =
                this.context === N.x.STREAM && this.streamUserId === this.userId
                    ? n.createOwnStreamConnectionWithOptions
                    : n.createVoiceConnectionWithOptions;
        else if (null != n.createOwnStreamConnection) {
            var r,
                s =
                    this.context === N.x.STREAM && this.streamUserId === this.userId
                        ? n.createOwnStreamConnection
                        : n.createVoiceConnection;
            r = (e, t, n) => s(t.ssrc, this.userId, t.address, t.port, n, t.experiments, t.streamParameters);
        } else
            r = (e, t, i) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, i, t.experiments, t.streamParameters);
        (t = this.conn = r(this.userId, e, i)),
            t.setSecureFramesStateUpdateCallback?.((e) => {
                this.logger.info(`DAVE protocol state update: ${JSON.stringify(e)}`),
                    this.emit(c.yq.SecureFramesUpdate, e);
            }),
            t.setDesktopSourceStatusCallback?.((e) => {
                "videohook_start" === e.type
                    ? this.emit(c.yq.VideoHookStart)
                    : "videohook_stop" === e.type
                      ? this.emit(c.yq.VideoHookStop)
                      : "videohook_initialize" === e.type
                        ? this.emit(
                              c.yq.VideoHookInitialize,
                              e.backend,
                              e.format,
                              e.framebufferFormat,
                              e.sampleCount,
                              e.success,
                              e.reinitialization,
                          )
                        : "screenshare_finish" === e.type
                          ? this.emit(
                                c.yq.ScreenshareFinish,
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
                            ? this.emit(c.yq.VideoState, e.state)
                            : e.type.startsWith("soundshare_") && this.emit(c.yq.SoundshareTrace, e);
            }),
            this.on("newListener", this.handleNewListenerNative);
    }
    destroy() {
        this.conn.destroy(),
            Object.keys(this.localSpeakingFlags)
                .filter((e) => e !== this.userId)
                .forEach((e) => this.emit(c.yq.Speaking, e, N.ME.NONE, this.remoteAudioSSRCs[e])),
            this.setConnectionState(N.$I.DISCONNECTED),
            super.destroy();
    }
    setCodecs(e, t, n) {
        let i = this.currentVideoCodec !== t;
        if (((this.currentVideoCodec = t), i && null != this.lastDesktopEncodingOptions)) {
            let { width: e, height: t, framerate: n } = this.lastDesktopEncodingOptions;
            this.setDesktopEncodingOptions(e, t, n);
        }
        this.conn.setTransportOptions(this.getCodecOptions(e, t, n)),
            this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1);
    }
    getStats() {
        return this.connectionState === N.$I.DISCONNECTED
            ? Promise.resolve(null)
            : (0, I.timeout)(
                  new Promise((e) => {
                      null != this.conn.getFilteredStats
                          ? this.conn.getFilteredStats(N.yt.ALL, (t) =>
                                e(
                                    U(
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
                                      U(
                                          this.mediaEngineConnectionId,
                                          t,
                                          this.remoteVideoSinkWants,
                                          this.localVideoSinkWants,
                                      ),
                                  ),
                              )
                            : (0, b.lE)().getStats((t) =>
                                  e(
                                      U(
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
                  if (!(e instanceof I.TimeoutError)) throw e;
              });
    }
    createUser(e, t, n) {
        let i = this.remoteAudioSSRCs[e],
            r = this.remoteVideoSSRCs[e];
        if (null != i && 0 === t)
            return void this.logger.info(`Ignoring attempt to recreate user ${e} with 0 audio SSRC`);
        (r = void 0 !== r ? [...r].sort() : []), (n = void 0 === n ? (r ?? []) : [...n].sort());
        let s = !m()(r, n);
        if (
            ((this.remoteAudioSSRCs[e] = t), (this.remoteVideoSSRCs[e] = n ?? []), this.userId !== e && (i !== t || s))
        ) {
            let i = void 0 !== n && n.length > 0 ? n[0] : 0,
                r = {
                    id: e,
                    ssrc: t,
                    videoSsrc: i,
                    videoSsrcs: n,
                    rtxSsrc: B(i),
                    mute: this.getLocalMute(e),
                    volume: this.getLocalVolume(e),
                };
            this.connectionState === N.$I.CONNECTED &&
                (this.logger.info(`Creating user: ${e} with audio SSRC: ${t} and video SSRCs: ${n?.join(",") ?? 0}`),
                this.mergeUsers([r]));
            let s = this.localPans[e];
            null != s && this.setLocalPan(e, s.left, s.right);
            let a = this.localSpeakingFlags[e];
            null != a && a !== N.ME.NONE && this.setSpeakingFlags(e, a);
        }
    }
    destroyUser(e) {
        null != this.remoteAudioSSRCs[e] &&
            (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e]);
    }
    setSelfMute(e) {
        (this.selfMute = e), this.conn.setSelfMute(e), this.emit(c.yq.Mute, e);
    }
    getSelfMute() {
        return this.selfMute;
    }
    getSelfDeaf() {
        return this.selfDeaf;
    }
    setSelfDeaf(e) {
        (this.selfDeaf = e), this.conn.setSelfDeafen(e), this.emit(c.yq.Deafen, e);
    }
    setSoundshareSource(e, t) {
        if ((this.soundshareId === e && this.soundshareSentSpeakingEvent) || this.context !== N.x.STREAM) return;
        (this.soundshareId = e), (this.soundshareSentSpeakingEvent = !1);
        let n = e;
        null === n && (n = 0),
            this.conn.setTransportOptions({ soundsharePid: n, soundshareEventDriven: !0, soundshareLoopback: t });
    }
    setLocalMute(e, t) {
        (this.localMutes[e] = t), this.conn.setLocalMute(e, t), this.emit(c.yq.LocalMute, e, t);
    }
    setUserPosition(e, t) {
        this.conn.setUserPosition?.(e, t);
    }
    fastUdpReconnect() {
        null != this.conn.fastUdpReconnect && ((this.numFastUdpReconnects += 1), this.conn.fastUdpReconnect());
    }
    getNumFastUdpReconnects() {
        return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null;
    }
    wasRemoteDisconnected() {
        this.conn.wasRemoteDisconnected?.();
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(c.yq.LocalVideoDisabled, e, t);
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
            (i =
                "soundboard" === t
                    ? "soundboardAudio"
                    : (this.context === N.x.STREAM ? "application" : "user").concat("audio" === t ? "Audio" : "Video")),
                this.conn.setClipRecordUser?.(e, i, n);
        }
    }
    setClipsKeyFrameInterval(e) {
        this.context === N.x.STREAM &&
            ((this.clipsKeyFrameInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0,
            }));
    }
    setViewerSideClip(e) {
        this.context === N.x.STREAM && this.conn.setTransportOptions({ enableViewerSideClip: e });
    }
    setRemoteAudioHistory(e) {
        this.conn.setTransportOptions({ remoteAudioHistoryMs: e });
    }
    setQualityDecoupling(e) {
        this.context === N.x.STREAM && this.conn.setTransportOptions({ enableQualityDecoupling: e });
    }
    getLocalVolume(e) {
        var t;
        let n = this.localVolumes[e];
        return null == n && (n = this.context === N.x.DEFAULT ? N.Hz : N.Cn), (null != (t = n) ? t : N.Hz) / N.Hz;
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
        (this.localPans[e] = { left: t, right: n }), this.conn.setLocalPan(e, t, n);
    }
    isAttenuating() {
        return this.attenuationFactor < 1;
    }
    setAttenuation(e, t, n) {
        (this.attenuationFactor = (100 - e) / 100),
            (this.attenuateWhileSpeakingSelf = t),
            (this.attenuateWhileSpeakingOthers = n),
            this.conn.setTransportOptions(this.getAttenuationOptions());
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
        this.soundshareActive && (t = Math.max(N.kO, t)), this.conn.setTransportOptions({ encodingVoiceBitRate: t });
    }
    setCameraBitRate(e, t, n) {
        null != n || null != t
            ? this.videoQualityManager.setQualityOverwrite({ bitrateMin: null != n && n > 0 ? n : t, bitrateMax: t })
            : this.videoQualityManager.setQualityOverwrite({}),
            this.hasDesktopSource() ||
                this.conn.setTransportOptions({
                    encodingVideoBitRate: e,
                    encodingVideoMinBitRate: n,
                    encodingVideoMaxBitRate: t,
                });
    }
    setEchoCancellation(e) {
        (this.echoCancellation = e), (0, b.lE)().setTransportOptions({ echoCancellation: this.echoCancellation });
    }
    setNoiseSuppression(e) {
        (this.noiseSuppression = e), (0, b.lE)().setTransportOptions({ noiseSuppression: this.noiseSuppression });
    }
    setAutomaticGainControl(e) {
        (this.automaticGainControl = e),
            (0, b.lE)().setTransportOptions({
                automaticGainControl: this.automaticGainControl.enabled,
                automaticGainControlConfig: this.automaticGainControl,
            });
    }
    setNoiseCancellation(e) {
        (this.noiseCancellation = e), (0, b.lE)().setTransportOptions({ noiseCancellation: this.noiseCancellation });
    }
    setNoiseCancellationDuringProcessing(e) {
        (this.noiseCancellationDuringProcessing = e),
            (0, b.lE)().setTransportOptions({
                noiseCancellationDuringProcessing: this.noiseCancellationDuringProcessing,
            });
    }
    getNoiseCancellation() {
        return this.noiseCancellation;
    }
    setQoS(e) {
        (this.qos = e), this.conn.setTransportOptions({ qos: this.qos });
    }
    setSoundshareDiscardRearChannels(e) {
        this.conn.setTransportOptions({ soundshareDiscardRearChannels: e });
    }
    setInputMode(e, t) {
        switch (((this.inputMode = e), e)) {
            case N.TB.PUSH_TO_TALK:
                this.pttReleaseDelay = t.pttReleaseDelay;
                break;
            case N.TB.VOICE_ACTIVITY:
                (this.vadThreshold = t.vadThreshold),
                    (this.vadAutoThreshold = t.vadAutoThreshold),
                    (this.vadUseKrisp = t.vadUseKrisp),
                    (this.vadLeading = t.vadLeading),
                    (this.vadTrailing = t.vadTrailing),
                    (this.vadKrispActivationThreshold = t.vadKrispActivationThreshold),
                    (this.vadDuringPreProcess = t.vadDuringPreProcess);
                break;
            default:
                throw Error(`Unknown Input Mode: ${e}`);
        }
        this.conn.setTransportOptions({
            inputMode: k[this.inputMode],
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
        null != this.conn.setRemoteUserSpeakingStatus
            ? this.conn.setRemoteUserSpeakingStatus(e, t)
            : null != this.conn.setRemoteUserSpeaking &&
              this.conn.setRemoteUserSpeaking(e, (t & N.ME.VOICE) === N.ME.VOICE),
            this.handleSpeakingFlags(e, t);
    }
    clearAllSpeaking() {}
    setEncryption(e, t) {
        this.logger.info(`Selected encryption mode: ${e}`),
            this.conn.setTransportOptions({ encryptionSettings: { mode: e, secretKey: t } });
    }
    setReconnectInterval(e) {
        (this.reconnectInterval = e), this.conn.setTransportOptions({ reconnectInterval: this.reconnectInterval });
    }
    setKeyframeInterval(e) {
        (this.keyframeInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0,
            });
    }
    setVideoQualityMeasurement(e) {
        (this.videoQualityMeasurement = e),
            this.conn.setTransportOptions({ videoQualityMeasurement: this.videoQualityMeasurement });
    }
    setVideoEncoderExperiments(e) {
        (this.videoEncoderExperiments = e),
            this.conn.setTransportOptions({ videoEncoderExperiments: this.videoEncoderExperiments });
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
                s = [...i].some((e) => !r.has(e));
            (this.codecs = n),
                t && s && (this.overrideCodecResetAt = performance.now()),
                this.emit(c.yq.VideoEncoderFallback, this.codecs);
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
                    soundshareId: s,
                    useLoopback: a,
                    useVideoHook: o,
                    useHookFramePacer: l,
                    useGraphicsCaptureApiLevel: u,
                    useCaptureDeviceForEncode: c,
                    useGraphicsCapture: d,
                    useQuartzCapturer: _,
                    allowScreenCaptureKit: f,
                    videoHookStaleFrameTimeoutMs: h,
                    graphicsCaptureStaleFrameTimeoutMs: p,
                    hdrCaptureMode: E,
                    enableGlobalFramePoolLock: m,
                    useGraphicsCaptureDirtyRegions: g,
                    videoHookAllowDx12: A,
                } = e.desktopDescription;
                this.setSoundshareSource(s, a);
                let [I, T] = null != r ? r.split(":") : ["", ""];
                null != r
                    ? this.logger.info(
                          `capturing desktop (type: ${I}, handle: ${T}, use-video-hook: ${o.toString()}, use-graphics-capture: ${d?.toString()}, use-graphics-capture-api-level: ${u?.toString()}, use-capture-device-for-encode: ${c?.toString()}).`,
                      )
                    : this.logger.info("capturing desktop (type: <stop>)."),
                    null != this.conn.setDesktopSourceWithOptions
                        ? null != r
                            ? (this.setDesktopEncodingOptions(i, t, n),
                              this.conn.setDesktopSourceWithOptions({
                                  type: I,
                                  sourceId: T,
                                  useVideoHook: o,
                                  useHookFramePacer: l,
                                  useGraphicsCapture: d,
                                  useGraphicsCaptureApiLevel: u,
                                  useCaptureDeviceForEncode: c,
                                  useQuartzCapturer: _,
                                  allowScreenCaptureKit: f,
                                  videoHookStaleFrameTimeoutMs: h,
                                  graphicsCaptureStaleFrameTimeoutMs: p,
                                  hdrCaptureMode: E,
                                  enableGlobalFramePoolLock: m,
                                  useGraphicsCaptureDirtyRegions: g,
                                  videoHookAllowDx12: A,
                              }))
                            : this.conn.clearDesktopSource()
                        : this.conn.setDesktopSource(`wumpus-${T}`, o, I);
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
        (this.goLiveSourceIdentifier = null),
            null != this.conn.clearDesktopSource
                ? this.conn.clearDesktopSource()
                : this.conn.setDesktopSource("", !1, "");
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
        let i = null;
        i =
            (0 === t && n >= 10) || t > 720 || n > 30
                ? N.oL
                : "AV1" === this.currentVideoCodec
                  ? this.av1CodecBitrateFunc()
                  : N.lo;
        let r = { width: e, height: t, framerate: n },
            s = this.videoQualityManager.getQuality(),
            a = !S.Xb.equals(r, s.capture) || s.bitrateMax !== i,
            o = this.videoStreamParameters.findIndex((e) => e.quality === N.Y4);
        -1 === o && (o = 0),
            a &&
                (this.videoQualityManager.setGoliveQuality({ capture: r, encode: r, bitrateMax: i }),
                this.videoStreamParameters.length > o &&
                    ((this.videoStreamParameters[o].maxResolution = {
                        type: 0 === e && 0 === t ? N.ei.SOURCE : N.ei.FIXED,
                        width: e,
                        height: t,
                    }),
                    (this.videoStreamParameters[o].maxFrameRate = n),
                    (this.videoStreamParameters[o].maxBitrate = i)),
                this.emit(
                    c.yq.Video,
                    this.userId,
                    null,
                    this.audioSSRC,
                    this.videoStreamParameters[o].ssrc,
                    B(this.videoStreamParameters[o].ssrc),
                    this.videoStreamParameters,
                ),
                this.conn.setTransportOptions(this.applyQualityConstraints().constraints));
    }
    setSDP(e) {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(N.nJ);
    }
    setLocalVideoSinkWants(e) {
        let t = this.localVideoSinkWants;
        for (let [n, i] of Object.entries(this.remoteVideoSSRCs)) {
            let r = 0,
                s = 0;
            for (let n of i) (r += t?.[n]), (s += e?.[n]);
            0 === r && 0 !== s && this.conn.setDisableLocalVideo?.(n, !1),
                0 !== r && 0 === s && this.conn.setDisableLocalVideo?.(n, !0);
        }
        this.localVideoSinkWants = e;
    }
    startSamplesLocalPlayback(e, t, n, i) {
        if (t.numberOfChannels > 2) return void i(2, "Too many channels");
        if (null == this.conn.startSamplesLocalPlayback) return void i(3, "Not supported");
        for (var r = [], s = 0; s < t.numberOfChannels; s++) {
            var a = t.getChannelData(s);
            r.push(a);
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
                m()(this.videoStreamParameters[i], e[i]) ||
                    ((this.videoStreamParameters[i] = { ...e[i] }), r.push({ ...e[i] })),
                    this.conn.setTransportOptions({ streamParameters: r });
            }
            t();
        });
    }
    applyVideoTransportOptions() {
        if (!this.videoSupported) return;
        let e = !1;
        this.hasDesktopSource() &&
            this.videoStreamParameters.length > 0 &&
            (e = this.videoStreamParameters[0].maxResolution?.type === N.ei.SOURCE),
            this.conn.setTransportOptions(
                this.applyQualityConstraints({
                    encodingVideoDegradationPreference: this.hasDesktopSource()
                        ? e
                            ? this.sourceDesktopDegradationPreference
                            : this.desktopDegradationPreference
                        : this.videoDegradationPreference,
                }).constraints,
            ),
            this.conn.setVideoBroadcast(this.selfVideo);
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
                rtxSsrc: B(t),
                mute: this.getLocalMute(e),
                volume: this.getLocalVolume(e),
            };
        });
    }
    createInputModeOptions() {
        switch (this.inputMode) {
            case N.TB.VOICE_ACTIVITY:
                return {
                    vadThreshold: this.vadThreshold,
                    vadAutoThreshold: this.vadAutoThreshold ? R.VERY_AGGRESSIVE : R.DISABLED,
                    vadUseKrisp: this.vadUseKrisp,
                    vadLeading: this.vadLeading,
                    vadTrailing: this.vadTrailing,
                    vadKrispActivationThreshold: this.vadKrispActivationThreshold,
                    vadDuringPreProcess: this.vadDuringPreProcess,
                };
            case N.TB.PUSH_TO_TALK:
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
        return e !== N.UK.H264
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
            s = this.codecs
                .filter((e) => "audio" === e.type)
                .map((e) => ({
                    type: e?.payloadType ?? 0,
                    name: e.name,
                    freq: 48e3,
                    channels: 2,
                    params: { stereo: "1" },
                }));
        n === N.x.STREAM && (r.channels = 2);
        let a = [],
            o = { name: "", type: 0, rtxType: 0, params: {} };
        for (i of this.codecs) {
            var l;
            if (i.name === e) continue;
            let n = {
                name: "AV1" === (l = i.name) ? "AV1X" : l,
                type: i?.payloadType ?? 0,
                rtxType: i?.rtxPayloadType ?? 0,
                params: this.getCodecParams(i.name, !0),
            };
            if (
                (this.experimentFlags.has(N.fd.RESET_DECODER_ON_ERRORS) && (n.params["reset-on-errors"] = "1"),
                this.experimentFlags.has(N.fd.SOFTWARE_FALLBACK_ON_ERRORS) && (n.params["fallback-after-errors"] = "3"),
                this.experimentFlags.has(N.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS) &&
                    (n.params["fallback-on-consecutive-errors"] = "1"),
                this.experimentFlags.has(N.fd.SIGNAL_AV1_HARDWARE_DECODE) && (n.params["hardware-av1-decode"] = "1"),
                "H265" === n.name &&
                    (n.params["software-h265"] = this.experimentFlags.has(N.fd.H265_HARDWARE_ONLY) ? "0" : "1"),
                (n.params["hardware-h264"] = this.useElectronVideo ? "1" : "0"),
                this.experimentFlags.has(N.fd.USE_LIBOPENH264_DECODER))
            ) {
                let e = (0, b.XH)();
                null != e && ((n.params.libopenh264 = "1"), (n.params["libopenh264-path"] = e));
            }
            a.push(n),
                i.name === t &&
                    ((o = { ...n, params: this.getCodecParams(i.name, !1) }),
                    this.experimentFlags.has(N.fd.VIDEOTOOLBOX_RATE_CONTROL) &&
                        (o.params["fixed-rate-presentation-timestamps"] = "1"),
                    this.experimentFlags.has(N.fd.LOW_LATENCY_RATE_CONTROL) &&
                        (o.params["low-latency-rate-control"] = "1"),
                    this.experimentFlags.has(N.fd.WMF_GPU_ENCODE) && (o.params["wmf-gpu"] = "1"));
        }
        return { videoEncoder: o, videoDecoders: a, audioEncoder: r, audioDecoders: s };
    }
    getKeyFrameInterval() {
        return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0
            ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval)
            : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval);
    }
    getConnectionTransportOptions() {
        let e = {
            selfMute: this.selfMute,
            inputMode: k[this.inputMode],
            inputModeOptions: this.createInputModeOptions(),
            minimumJitterBufferLevel: this.minimumJitterBufferLevel,
            postponeDecodeLevel: this.postponeDecodeLevel,
            ...this.getAttenuationOptions(),
            fec: !0,
            packetLossRate: 0.3,
            qos: this.qos,
            prioritySpeakerDucking: N.zt,
            encodingVoiceBitRate: this.voiceBitrate,
            callBitRate: N.l2,
            callMinBitRate: N.KR,
            callMaxBitRate: N.us,
            encodingVideoDegradationPreference: this.videoDegradationPreference,
            reconnectInterval: this.reconnectInterval,
        };
        return (0, b.$b)(G.VIDEO_EFFECTS) && this.context === N.x.STREAM && (e.enableVideoEffects = !0), e;
    }
    handleSpeakingNative = (e, t, n) => {
        let i = N.ME.NONE;
        (i = "boolean" == typeof t ? (t ? N.ME.VOICE : N.ME.NONE) : t), this.handleSpeakingFlags(e, i, n);
    };
    handleNativeMuteChanged = (e) => {
        this.emit(c.yq.NativeMuteChanged, e);
    };
    handleSpeakingFlags = (e, t, n) => {
        let i = this.localSpeakingFlags[e] ?? N.ME.NONE;
        if (this.experimentFlags.has(N.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS) && i === t) return;
        this.localSpeakingFlags[e] = t;
        let r = e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
        this.emit(c.yq.Speaking, e, t, r, n),
            (t & N.ME.SOUNDSHARE) != 0 &&
                !1 === this.soundshareSentSpeakingEvent &&
                (this.emit(c.yq.SoundshareSpeaking), (this.soundshareSentSpeakingEvent = !0));
    };
    handleSpeakingWhileMuted = () => {
        this.emit(c.yq.SpeakingWhileMuted);
    };
    handlePing = (e, t, n) => {
        this.emit(c.yq.Ping, e);
    };
    handlePingTimeout = (e, t, n, i) => {
        this.emit(c.yq.PingTimeout, n, i > 0 ? i : 4e3);
    };
    handleVideoEncoderFallback = (e) => {
        if (!this.videoEncoderFallbackPending) {
            if (this.overrideCodecResetAt > 0 && performance.now() - this.overrideCodecResetAt < 1e3)
                return void this.logger.info(
                    `Suppressing encoder fallback for ${e} (override codec reset in progress)`,
                );
            this.logger.info(`Falling back from current video encoder: ${e}`),
                (this.codecs = this.codecs
                    .map((t) => ((e === t.name || ("AV1" === t.name && "AV1X" === e)) && (t.encode = !1), t))
                    .filter((e) => "video" !== e.type || !1 !== e.encode || !1 !== e.decode)),
                this.emit(c.yq.VideoEncoderFallback, this.codecs),
                (this.videoEncoderFallbackPending = !0);
        }
    };
    handleVideoDecoderFallback = (e) => {
        this.videoDecoderFallbackSent.has(e) ||
            (this.videoDecoderFallbackSent.add(e),
            this.logger.info(`Falling back from current video decoder: ${e}`),
            (this.codecs = this.codecs
                .map((t) => ((e === t.name || ("AV1" === t.name && "AV1X" === e)) && (t.decode = !1), t))
                .filter((e) => "video" !== e.type || !1 !== e.encode || !1 !== e.decode)),
            this.emit(c.yq.VideoDecoderFallback, this.codecs));
    };
    handleVideo = (e, t, n, i) => {
        let r = p()(this.videoStreamParameters);
        e === this.userId
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
                  ? ((r[0].active = !0), (r[0].ssrc = t), (r[0].rtxSsrc = B(t)))
                  : (r[0].active = !1)
            : t > 0 &&
              (void 0 !== this.remoteVideoSSRCs[e]
                  ? this.remoteVideoSSRCs[e].includes(t) ||
                    (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], t])
                  : (this.remoteVideoSSRCs[e] = [t])),
            (this.videoStreamParameters = r),
            this.emit(
                c.yq.Video,
                e,
                null != n && "" !== n ? n : null,
                e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e],
                t,
                B(t),
                this.videoStreamParameters,
            );
    };
    handleFirstFrame = (e, t, n) => {
        this.emit(c.yq.FirstFrame, e, t, n);
    };
    handleFirstFrameStats = (e) => {
        this.emit(c.yq.FirstFrameStats, e);
    };
    handleFirstFrameEncryptedStats = (e) => {
        this.emit(c.yq.FirstFrameEncryptedStats, e);
    };
    handleNoInput = (e) => {
        this.emit(c.yq.Silence, !e);
    };
    handleDesktopSourceEnded = (e, t) => {
        this.emit(c.yq.DesktopSourceEnd, e, t);
    };
    handleSoundshare = (e) => {
        e &&
            ((this.soundshareActive = !0),
            this.conn.setTransportOptions({ encodingVoiceBitRate: Math.max(N.kO, this.voiceBitrate) }),
            this.emit(c.yq.SoundshareAttached));
    };
    handleSoundshareFailed = (e, t, n) => {
        this.emit(c.yq.SoundshareFailed, { failureCode: e, failureReason: t, willRetry: n });
    };
    handleSoundshareEnded = () => {
        (this.soundshareActive = !1),
            this.destroyed || this.conn.setTransportOptions({ encodingVoiceBitRate: this.voiceBitrate });
    };
    handleNewListenerNative = (e) => {
        e === c.yq.ConnectionStateChange && this.emit(e, this.connectionState);
    };
    handleStats = (e) => {
        if (this.connectionState === N.$I.DISCONNECTED) return void this.off(c.yq.Stats, this.handleStats);
        if (null != e) {
            if (null != this.stats) {
                let t = A()(
                        e.rtp.outbound,
                        (e, t) => ((e.lost += t.packetsLost ?? 0), (e.sent += t.packetsSent ?? 0), e),
                        { lost: 0, sent: 0 },
                    ),
                    n = A()(
                        this.stats.rtp.outbound,
                        (e, t) => ((e.lost += t.packetsLost ?? 0), (e.sent += t.packetsSent ?? 0), e),
                        { lost: 0, sent: 0 },
                    ),
                    i = t.sent - n.sent,
                    r = t.lost - n.lost;
                if (0 === i) this.emit(c.yq.OutboundLossRate, 0);
                else if (i > 0 && r >= 0) {
                    let e = f()(r / (i + r), 0, 1);
                    this.emit(c.yq.OutboundLossRate, 100 * e);
                }
                let s = e.rtp.outbound.filter((e) => "audio" === e.type)[0],
                    a = this.stats.rtp.outbound.filter((e) => "audio" === e.type)[0];
                if (null != s && null != a && null != s.framesCaptured && null != a.framesCaptured) {
                    let e = s.framesCaptured - a.framesCaptured,
                        t =
                            null != s.noiseCancellerFrames
                                ? null != a.noiseCancellerFrames
                                    ? s.noiseCancellerFrames - a.noiseCancellerFrames
                                    : 0
                                : e;
                    if (!(0, b.$b)(G.KRISP_NATIVE_ERROR)) {
                        if (
                            this.noiseCancellation &&
                            t > 50 &&
                            null != s.noiseCancellerProcessTime &&
                            null != a.noiseCancellerProcessTime
                        ) {
                            let e = s.noiseCancellerProcessTime - a.noiseCancellerProcessTime;
                            e / t > 8
                                ? this.emit(c.yq.NoiseCancellationError, N.CO.KRISP_CPU_OVERUSE)
                                : 0 === e && this.emit(c.yq.NoiseCancellationError, N.CO.KRISP_FAILED);
                        }
                        this.inputMode === N.TB.VOICE_ACTIVITY &&
                            this.vadAutoThreshold &&
                            this.vadUseKrisp &&
                            e > 50 &&
                            null != s.voiceActivityDetectorProcessTime &&
                            null != a.voiceActivityDetectorProcessTime &&
                            (s.voiceActivityDetectorProcessTime - a.voiceActivityDetectorProcessTime) / e > 4 &&
                            this.emit(c.yq.VoiceActivityDetectorError, N.CO.KRISP_VAD_CPU_OVERUSE);
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
        0 === e && ((this.lastExecutedTransitionId = -1), (this.lastPreparedTransitionId = -1)),
            (this.lastPreparedTransitionId = e),
            this.conn.prepareSecureFramesTransition?.(e, t, n);
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
        (this.lastExecutedTransitionId = e), this.conn.executeSecureFramesTransition?.(e);
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
        (this.lastPreparedTransitionId = e), this.conn.prepareMLSCommitTransition?.(e, t, n);
    }
    processMLSWelcome(e, t, n) {
        (this.lastPreparedTransitionId = e), this.conn.processMLSWelcome?.(e, t, n);
    }
    getMLSPairwiseFingerprint(e, t, n) {
        this.conn.getMLSPairwiseFingerprint?.(e, t, n);
    }
    presentDesktopSourcePicker(e) {
        this.conn.presentDesktopSourcePicker?.(e);
    }
    handleMLSFailure = (e, t) => {
        this.emit(c.yq.MLSFailure, e, t);
    };
    mergeUsers(e) {
        this.conn.mergeUsers(e), this.emit(c.yq.UsersMerged, e);
    }
    setAv1CodecBitrateFunc(e) {
        let t = this.av1CodecBitrateFunc !== e;
        if (
            ((this.av1CodecBitrateFunc = e),
            t && "AV1" === this.currentVideoCodec && null != this.lastDesktopEncodingOptions)
        ) {
            let { width: e, height: t, framerate: n } = this.lastDesktopEncodingOptions;
            this.setDesktopEncodingOptions(e, t, n);
        }
    }
}
function j(e, t) {
    let n = !1,
        i = t.map((t, i) => {
            let {
                guid: r,
                guid: s,
                name: a,
                name: o,
                index: l,
                facing: u,
                hardwareId: c,
                containerId: d,
                effects: _,
            } = t;
            return (
                /^default/.test(a)
                    ? ((n = !0), (r = N.dx), (a = a.replace("default", "Default")))
                    : (r = null != r && "" !== r ? r : a),
                null != l && (i = l),
                {
                    id: r,
                    type: e,
                    index: i,
                    name: a,
                    originalName: o,
                    originalId: s,
                    facing: u,
                    hardwareId: c,
                    containerId: d,
                    effects: _,
                }
            );
        });
    return (
        e !== N.oh.VIDEO_INPUT &&
            !n &&
            o()?.os?.family != null &&
            /^win/i.test(o().os.family) &&
            i.unshift({ id: N.dx, type: e, index: -1, name: "Default" }),
        i
    );
}
function Y() {
    return new Promise((e) => {
        (0, b.lE)().getInputDevices((t) => e(j(N.oh.AUDIO_INPUT, t)));
    });
}
function W() {
    return new Promise((e) => {
        (0, b.lE)().getOutputDevices((t) => e(j(N.oh.AUDIO_OUTPUT, t)));
    });
}
n(667532);
var K = n(627968),
    z = n(64700),
    $ = n(503698),
    q = n.n($);
let Z = new u.Vy("DirectVideo");
Z.enableNativeLogger(!0);
class X {
    refcount;
    stream;
    constructor(e) {
        (this.refcount = 1), (this.stream = window.createDiscordStream(e));
    }
    addref() {
        this.refcount++;
    }
    release() {
        return this.refcount--, 0 === this.refcount;
    }
}
let Q = new Map();
function J(e) {
    let t = Q.get(e);
    null != t && t.release() && ((0, b.lE)().removeDirectVideoOutputSink(e), Q.delete(e));
}
function ee(e) {
    return (function (e, t) {
        let {
                streamId: n,
                paused: i = !1,
                onReady: r,
                onResize: s,
                reportContainerResized: a = !0,
                className: o,
                ...l
            } = e,
            u = z.useRef(null),
            c = z.useRef(null),
            d = z.useRef({ width: 0, height: 0 }),
            _ = z.useRef({ streamId: n, paused: i, onReady: r, onResize: s, onContainerResized: t });
        return (
            z.useLayoutEffect(() => {
                let { current: e } = u,
                    t = new ResizeObserver((e) => {
                        if (a)
                            for (let t of e) {
                                if (t.target !== c.current) continue;
                                let e = window.devicePixelRatio * t.target.clientWidth,
                                    n = window.devicePixelRatio * t.target.clientHeight;
                                _.current.onContainerResized?.(_.current.streamId, e, n);
                            }
                    });
                if (null != e) {
                    let n = document.createElement("video");
                    (n.style.display = "block"),
                        (n.style.width = "100%"),
                        (n.style.height = "100%"),
                        (n.autoplay = !0),
                        (n.muted = !0),
                        n.addEventListener("pause", function () {
                            _.current.paused || c.current?.play();
                        }),
                        n.addEventListener("resize", function () {
                            let { width: e, height: t } = d.current,
                                n = c.current?.videoWidth ?? 0,
                                i = c.current?.videoHeight ?? 0;
                            if (e !== n || t !== i) {
                                let e = { width: n, height: i };
                                _.current.onResize?.(e), (d.current = e);
                            }
                        }),
                        n.addEventListener("canplaythrough", function () {
                            Z.info(
                                `handleReady for ${_.current.streamId}, have onReady callback = ${null != _.current.onReady}`,
                            ),
                                _.current.onReady?.();
                        }),
                        Z.info(`create video element for ${_.current.streamId}, readyState=${n.readyState}`),
                        n.readyState > 3 &&
                            Z.error(`video element for ${_.current.streamId} was ready before attached`),
                        e.appendChild(n),
                        t.disconnect(),
                        t.observe(n),
                        (c.current = n);
                }
            }, [a]),
            z.useEffect(() => {
                (_.current.streamId = n), (_.current.paused = i), (_.current.onReady = r), (_.current.onResize = s);
            }),
            z.useEffect(() => {
                let e = c.current;
                if (null != e)
                    if (i) null != e.srcObject && ((e.srcObject = null), J(n));
                    else {
                        let t;
                        return (
                            Z.info(`attaching srcObject for ${n}`),
                            null == (t = Q.get(n))
                                ? ((t = new X(n)), (0, b.lE)().addDirectVideoOutputSink(n), Q.set(n, t))
                                : t.addref(),
                            (e.srcObject = t.stream),
                            () => {
                                J(n), (e.srcObject = null);
                            }
                        );
                    }
            }, [i, n]),
            (0, K.jsx)("div", { className: q()("media-engine-video", o), ref: u, ...l })
        );
    })(e, ee.onContainerResized);
}
function et(e) {
    let { disabled: t, deviceId: n, width: i, height: r } = e;
    return t
        ? (0, K.jsx)("div", { className: "media-engine-video", style: { width: i, height: r } })
        : (0, K.jsx)(ee, { streamId: n, style: { width: i, height: r } });
}
(ee.onContainerResized = (e, t, n) => {}), (et.defaultProps = { disabled: !1, width: 320, height: 180 });
var en = n(264572).Buffer;
function ei(e) {
    return (e ?? N.Hz) / N.Hz;
}
class er extends l.A {
    Video = ee;
    Camera = et;
    audioInputDeviceId = N.qe;
    audioOutputDeviceId = N.qe;
    videoInputDeviceId = N.qe;
    connections = new Set();
    lastVoiceActivity = -1;
    audioSubsystem = "standard";
    audioLayer = "";
    deviceChangeGeneration = 0;
    consecutiveWatchdogFailures = 0;
    codecSurvey = null;
    logger = new u.Vy("MediaEngineNative");
    constructor() {
        super(), this.logger.enableNativeLogger(!0);
        const e = (0, b.lE)();
        e.setDeviceChangeCallback(this.handleDeviceChange),
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
            e.setSystemMicrophoneModeChangeCallback?.(this.handleSystemMicrophoneModeChangeCallback),
            this.on("removeListener", this.handleRemoveListener),
            this.on("newListener", this.handleNewListener),
            null != (0, b.lE)().getAudioSubsystem
                ? (0, b.lE)().getAudioSubsystem((e, t) => {
                      (this.audioSubsystem = e), (this.audioLayer = t);
                  })
                : null != (0, b.lE)().getUseLegacyAudioDevice &&
                  (this.audioSubsystem = (0, b.lE)().getUseLegacyAudioDevice() ? N.rB.LEGACY : N.rB.STANDARD),
            null != e.pingVoiceThread && this.watchdogTick(),
            null != e.setActiveSinksChangeCallback && e.setActiveSinksChangeCallback(this.handleActiveSinksChange),
            e.setOnClipsMlDetection?.((e) => {
                e.length > 0 && this.emit(c.bg.ClipsMlDetection, e);
            }),
            (0, d.A)(this),
            (function (e) {
                let t = !1;
                e.on(c.bg.Destroy, () => (t = !0));
                let n = async () => {
                    if (t) return;
                    let i = (0, b.lE)(),
                        r = await new Promise((e) => {
                            i.pollQueueMetrics?.((t) => {
                                e(t);
                            });
                        });
                    (r.periodMs = N.tl), e.emit(c.bg.VoiceQueueMetrics, r), setTimeout(n, N.tl);
                };
                setTimeout(n, N.tl);
            })(this);
    }
    destroy() {
        this.eachConnection((e) => e.destroy()), this.emit(c.bg.Destroy), this.removeAllListeners();
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
            case N.O5.LEGACY_AUDIO_SUBSYSTEM:
                return (0, b.$b)(G.VOICE_LEGACY_SUBSYSTEM);
            case N.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                return (0, b.$b)(G.VOICE_EXPERIMENTAL_SUBSYSTEM);
            case N.O5.AUTOMATIC_AUDIO_SUBSYSTEM:
                return (0, b.$b)(G.VOICE_AUTOMATIC_SUBSYSTEM);
            case N.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
                return (0, b.$b)(G.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
            case N.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING:
                return (0, b.$b)(G.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING);
            case N.O5.DEBUG_LOGGING:
                return (0, b.$b)(G.DEBUG_LOGGING);
            case N.O5.SOUNDSHARE:
                return (0, b.$b)(G.SOUNDSHARE);
            case N.O5.SCREEN_SOUNDSHARE:
                return (0, b.$b)(G.SCREEN_SOUNDSHARE);
            case N.O5.ELEVATED_HOOK:
                return (0, b.$b)(G.ELEVATED_HOOK);
            case N.O5.LOOPBACK:
                return (0, b.$b)(G.LOOPBACK);
            case N.O5.WUMPUS_VIDEO:
                return (0, b.$b)(G.WUMPUS_VIDEO);
            case N.O5.HYBRID_VIDEO:
                return (0, b.$b)(G.HYBRID_VIDEO);
            case N.O5.ATTENUATION:
            case N.O5.VIDEO_HOOK:
                return o()?.os?.family != null && /^win/i.test(o().os.family);
            case N.O5.EXPERIMENTAL_SOUNDSHARE:
                return (0, b.$b)(G.SOUNDSHARE_LOOPBACK);
            case N.O5.REMOTE_LOCUS_NETWORK_CONTROL:
                return (0, b.$b)(G.REMOTE_LOCUS_NETWORK_CONTROL);
            case N.O5.SCREEN_PREVIEWS:
                return (0, b.$b)(G.SCREEN_PREVIEWS);
            case N.O5.CLIPS:
                return (0, b.$b)(G.CLIPS);
            case N.O5.WINDOW_PREVIEWS:
                return (0, b.$b)(G.WINDOW_PREVIEWS);
            case N.O5.AUDIO_DEBUG_STATE:
                return (0, b.$b)(G.AUDIO_DEBUG_STATE);
            case N.O5.CONNECTION_REPLAY:
                return (0, b.$b)(G.CONNECTION_REPLAY);
            case N.O5.SIMULCAST:
                return (0, b.$b)(G.SIMULCAST) && (0, b.$b)(G.SIMULCAST_BUGFIX);
            case N.O5.RTC_REGION_RANKING:
                return (0, b.$b)(G.RTC_REGION_RANKING);
            case N.O5.ELECTRON_VIDEO:
                return (0, b.$b)(G.ELECTRON_VIDEO);
            case N.O5.MEDIAPIPE:
                return (0, b.$b)(G.MEDIAPIPE);
            case N.O5.FIXED_KEYFRAME_INTERVAL:
                return (0, b.$b)(G.FIXED_KEYFRAME_INTERVAL);
            case N.O5.FIRST_FRAME_CALLBACK:
                return (0, b.$b)(G.FIRST_FRAME_CALLBACK);
            case N.O5.REMOTE_USER_MULTI_STREAM:
                return (0, b.$b)(G.REMOTE_USER_MULTI_STREAM);
            case N.O5.IMAGE_QUALITY_MEASUREMENT:
                return (0, b.$b)(G.IMAGE_QUALITY_MEASUREMENT);
            case N.O5.GO_LIVE_HARDWARE:
                return (0, b.$b)(G.GO_LIVE_HARDWARE);
            case N.O5.SCREEN_CAPTURE_KIT:
                return (0, b.$b)(G.SCREEN_CAPTURE_KIT);
            case N.O5.NATIVE_SCREENSHARE_PICKER:
                return (0, b.$b)(G.NATIVE_SCREENSHARE_PICKER);
            case N.O5.MLS_PAIRWISE_FINGERPRINTS:
                return (0, b.$b)(G.MLS_PAIRWISE_FINGERPRINTS);
            case N.O5.OFFLOAD_ADM_CONTROLS:
                return (0, b.$b)(G.OFFLOAD_ADM_CONTROLS);
            case N.O5.VAAPI:
                return (0, b.$b)(G.VAAPI);
            case N.O5.GAMESCOPE_CAPTURE:
                return (0, b.$b)(G.GAMESCOPE_CAPTURE);
            case N.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT:
                return (0, b.$b)(G.ASYNC_VIDEO_INPUT_DEVICE_INIT);
            case N.O5.PORT_AWARE_LATENCY_TESTING:
                return (0, b.$b)(G.PORT_AWARE_LATENCY_TESTING);
            case N.O5.SPATIAL_AUDIO:
                return (0, b.$b)(G.SPATIAL_AUDIO);
            case N.O5.KRISP_NATIVE_ERROR:
                return (0, b.$b)(G.KRISP_NATIVE_ERROR);
            case N.O5.DIAGNOSTICS:
            case N.O5.NATIVE_PING:
            case N.O5.AUTOMATIC_VAD:
            case N.O5.AUDIO_INPUT_DEVICE:
            case N.O5.AUDIO_OUTPUT_DEVICE:
            case N.O5.QOS:
            case N.O5.VOICE_PROCESSING:
            case N.O5.AUTO_ENABLE:
            case N.O5.VIDEO:
            case N.O5.DESKTOP_CAPTURE:
            case N.O5.DESKTOP_CAPTURE_FORMAT:
            case N.O5.DESKTOP_CAPTURE_APPLICATIONS:
            case N.O5.VOICE_PANNING:
            case N.O5.AEC_DUMP:
            case N.O5.DISABLE_VIDEO:
            case N.O5.SAMPLE_PLAYBACK:
            case N.O5.NOISE_SUPPRESSION:
            case N.O5.AUTOMATIC_GAIN_CONTROL:
            case N.O5.SIDECHAIN_COMPRESSION:
                return !0;
            default:
                return !1;
        }
    }
    connect(e, t, n) {
        (0, b.$b)(G.EXPERIMENT_CONFIG) || (n.experiments = void 0);
        let i = H.create(e, t, n);
        return (
            i.on(c.yq.Destroy, (e) => {
                this.connections.delete(e),
                    this.connectionsEmpty() && ((0, b.i0)(N.E6.NORMAL), (0, b.lE)().setNativeThreadsPriority?.(0));
            }),
            i.on(c.yq.Connected, () => {
                i.setVideoBroadcast(this.shouldConnectionBroadcastVideo(i));
            }),
            i.on(c.yq.Silence, (e) => {
                this.emit(c.bg.Silence, e);
            }),
            this.connections.add(i),
            (0, b.i0)(n.processPriority ?? N.E6.HIGH),
            null != n.threadPriorityConfiguration &&
                (0, b.lE)().setNativeThreadsPriority?.(n.threadPriorityConfiguration),
            this.emit(c.bg.Connection, i),
            i
        );
    }
    shouldConnectionBroadcastVideo(e) {
        return (e.context === N.x.DEFAULT && this.videoInputDeviceId !== N.qe) || e.hasDesktopSource();
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
        (0, b.$b)(G.SPATIAL_AUDIO) && (0, b.lE)().setTransportOptions({ audioMixerOptions: e });
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
        return Y();
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
        (this.audioInputDeviceId = e),
            (0, b.$b)(G.SET_AUDIO_DEVICE_BY_ID)
                ? (0, b.lE)().setInputDevice(e)
                : Y().then((t) => {
                      let n = t.find((t) => t.id === e) ?? t[0];
                      null != n && (0, b.lE)().setInputDevice(n.index);
                  }),
            this.emit(c.bg.SelectedDeviceChange, N.oh.AUDIO_INPUT, t, e);
    }
    getAudioOutputDevices() {
        return W();
    }
    setAudioOutputDevice(e) {
        let t = this.audioOutputDeviceId;
        (this.audioOutputDeviceId = e),
            (0, b.$b)(G.SET_AUDIO_DEVICE_BY_ID)
                ? (0, b.lE)().setOutputDevice(e)
                : W().then((t) => {
                      let n = t.find((t) => t.id === e) ?? t[0];
                      null != n && (0, b.lE)().setOutputDevice(n.index);
                  }),
            this.emit(c.bg.SelectedDeviceChange, N.oh.AUDIO_OUTPUT, t, e);
    }
    getVideoInputDevices() {
        return new Promise((e) => {
            (0, b.lE)().getVideoInputDevices((t) => e(j(N.oh.VIDEO_INPUT, t)));
        });
    }
    async setVideoInputDevice(e) {
        let t = (await this.getVideoInputDevices()).find((t) => t.id === e),
            n = null != t ? t.id : N.qe;
        if (n !== this.videoInputDeviceId) {
            if (((this.videoInputDeviceId = n), (0, b.$b)(G.SET_VIDEO_DEVICE_BY_ID))) {
                let e = null != t ? (null != t.originalId && "" !== t.originalId ? t.originalId : t.id) : N.qe;
                (0, b.lE)().setVideoInputDevice(e);
            } else (0, b.lE)().setVideoInputDevice(null != t ? t.index : -1);
            this.connections.forEach((e) => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)));
        }
    }
    getVideoInputDeviceId() {
        return this.videoInputDeviceId;
    }
    setAsyncVideoInputDeviceInit(e) {
        (0, b.lE)().setAsyncVideoInputDeviceInitSetting?.(e), (0, b.lE)().setAsyncVideoInputDeviceInit?.(e);
    }
    getCodecCapabilities(e) {
        (0, b.lE)().getCodecCapabilities(e);
    }
    setGoLiveSource(e, t) {
        null == e
            ? this.eachConnection((e) => {
                  e.clearDesktopSource(),
                      e.clearGoLiveDevices(),
                      e.setSoundshareSource(0, !1),
                      e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e));
              }, t)
            : this.eachConnection((n) => {
                  (t !== N.x.STREAM || n.streamUserId === n.userId) &&
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
                soundshareId: s,
                useLoopback: a,
                useVideoHook: o,
                useHookFramePacer: l,
                useGraphicsCapture: u,
                useQuartzCapturer: d,
                allowScreenCaptureKit: _,
                hdrCaptureMode: f,
                videoHookAllowDx12: h,
            } = e.desktopDescription;
        t.setOnClipsRecordingEvent((t) => {
            this.logger.info(`Clips recording event: ${F[t]} received for stream ${r} and sound ${s}.`),
                t === F.GoLiveEnded
                    ? this.emit(c.bg.ClipsRecordingRestartNeeded)
                    : t === F.Error
                      ? this.emit(
                            c.bg.ClipsInitFailure,
                            "Failed to set clips source in media engine",
                            e.applicationName,
                        )
                      : (t === F.Ended || t === F.StoppedByGoLive) && this.emit(c.bg.ClipsRecordingEnded, r, s);
        }),
            t.applyClipsSettings?.({
                useVideoHook: o,
                useHookFramePacer: l,
                useGraphicsCapture: u,
                useQuartzCapturer: d,
                allowScreenCaptureKit: _,
                hdrCaptureMode: f,
                videoHookAllowDx12: h,
                soundshareLoopback: a,
                frameRate: n,
                width: i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
                height: i,
                videoEncoderExperiments: e.videoEncoderExperiments,
            });
        let [p, E] = null != r ? r.split(":") : ["", ""];
        t.setClipsSource({ id: E, soundshareId: null != s ? s : 0 });
    }
    setClipsQualitySettings(e, t, n) {
        let i = (0, b.lE)();
        return null != i.applyClipsQualitySettings && (i.applyClipsQualitySettings(e, t, n), !0);
    }
    setSoundshareSource(e, t, n) {
        this.eachConnection((i) => {
            (n !== N.x.STREAM || i.streamUserId === i.userId) && i.setSoundshareSource(e, t);
        }, n);
    }
    getDesktopSource() {
        return Promise.reject(Error("NO_STREAM"));
    }
    getScreenPreviews(e, t) {
        return new Promise((n) => {
            null != (0, b.lE)().getScreenPreviews
                ? (0, b.lE)().getScreenPreviews(e, t, (e) => {
                      n(e.map((e, t) => ({ ...e, name: "Screen " + (t + 1) })));
                  })
                : n([]);
        });
    }
    setClipsModulePath(e) {
        (0, b.lE)().setClipsModulePath?.(e);
    }
    setClipsDataPath(e) {
        (0, b.lE)().setClipsDataPath?.(e);
    }
    setClipsV3Enabled(e) {
        (0, b.lE)().setClipsV3Enabled?.(e);
    }
    setClipsUIActive(e) {
        (0, b.lE)().setClipsUIActive?.(e);
    }
    setClipsV3MLEnabled(e) {
        (0, b.lE)().setClipsV3MLEnabled?.(e);
    }
    setClipBufferLength(e) {
        (0, b.lE)().setClipBufferLength?.(e);
    }
    saveClip(e, t) {
        let n = (0, b.lE)();
        return null == n.setClipBufferLength || null == n.saveClip
            ? Promise.reject("unsupported")
            : new Promise((i, r) => {
                  n.saveClip(
                      e,
                      t,
                      (e, t, n) => {
                          let r;
                          try {
                              r = JSON.parse("" !== n ? n : "{}");
                          } catch {
                              r = {};
                          }
                          return i({ duration: e, clipStats: r });
                      },
                      (e) => {
                          try {
                              let t = JSON.parse("" !== e ? e : "{}");
                              return r(t);
                          } catch {
                              return r({ errorMessage: "clip save failed", errorAt: "unknown" });
                          }
                      },
                  );
              });
    }
    saveClipForUser(e, t, n) {
        let i = (0, b.lE)();
        return null == i.saveClipForUser
            ? Promise.reject("unsupported")
            : new Promise((r, s) => {
                  i.saveClipForUser(
                      e,
                      t,
                      n,
                      (e, t, n) => {
                          let i;
                          try {
                              i = JSON.parse("" !== n ? n : "{}");
                          } catch {
                              i = {};
                          }
                          return r({ duration: e, clipStats: i });
                      },
                      (e) => {
                          try {
                              let t = JSON.parse("" !== e ? e : "{}");
                              return s(t);
                          } catch {
                              return s({ errorMessage: "clip save failed", errorAt: "unknown" });
                          }
                      },
                  );
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
        let s = (0, b.lE)();
        return null == s.saveScreenshot
            ? Promise.reject("unsupported")
            : new Promise((a, o) => {
                  s.saveScreenshot(
                      e,
                      t,
                      i ?? "",
                      n,
                      r ?? 0,
                      (e) => {
                          a(en.from(e));
                      },
                      o,
                  );
              });
    }
    exportClip(e, t) {
        let n = (0, b.lE)();
        return null == n.exportClip
            ? Promise.reject("unsupported")
            : new Promise((i, r) => {
                  n.exportClip(e, t, (e) => i(new Blob([e])), r);
              });
    }
    getWindowPreviews(e, t) {
        return new Promise((n) => {
            null != (0, b.lE)().getWindowPreviews
                ? (0, b.lE)().getWindowPreviews(e, t, (e) => {
                      n(e);
                  })
                : n([]);
        });
    }
    async getSingleWindowPreview(e, t, n) {
        if (null != (0, b.lE)().getSingleWindowPreview) {
            let i = await (0, b.lE)().getSingleWindowPreview(e, t, n);
            return i.length > 0 ? i[0] : null;
        }
        return null;
    }
    setAudioSubsystem(e) {
        null != (0, b.lE)().setAudioSubsystem
            ? (0, b.lE)().setAudioSubsystem(e)
            : (0, b.lE)().setUseLegacyAudioDevice(e === N.rB.LEGACY);
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
        return !!this.supports(N.O5.DEBUG_LOGGING) && (0, b.lE)().getDebugLogging();
    }
    setDebugLogging(e) {
        this.supports(N.O5.DEBUG_LOGGING) && (0, b.lE)().setDebugLogging(e);
    }
    setLoopback(e, t) {
        null != (0, b.lE)().setLoopback &&
            (0, b.lE)().setLoopback(e, {
                echoCancellation: t.echoCancellation,
                noiseSuppression: t.noiseSuppression,
                automaticGainControl: t.automaticGainControlConfig?.enabled,
                automaticGainControlConfig: t.automaticGainControlConfig,
                noiseCancellation: t.noiseCancellation,
                noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing,
            }),
            null != (0, b.lE)().setEmitVADLevel2
                ? (0, b.lE)().setEmitVADLevel2(e || this.listenerCount(c.bg.VoiceActivity) > 0)
                : (0, b.lE)().setEmitVADLevel(e || this.listenerCount(c.bg.VoiceActivity) > 0, e, {
                      echoCancellation: t.echoCancellation,
                      noiseSuppression: t.noiseSuppression,
                      automaticGainControl: t.automaticGainControlConfig?.enabled,
                      noiseCancellation: t.noiseCancellation,
                      noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing,
                  });
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
                            (this.codecSurvey = t), e(t);
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
        let n = H.createReplay(e, t);
        return null == n
            ? null
            : (n.on(c.yq.Destroy, (e) => {
                  this.connections.delete(e), this.connectionsEmpty() && (0, b.i0)(N.E6.NORMAL);
              }),
              this.connections.add(n),
              (0, b.i0)(N.E6.HIGH),
              this.emit(c.bg.Connection, n),
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
        (0, b.lE)().stopLocalAudioRecording?.((t, n) => {
            e(t, n);
        }),
            this.listenerCount(c.bg.VoiceActivity) > 0 &&
                null != (0, b.lE)().setEmitVADLevel2 &&
                (0, b.lE)().setEmitVADLevel2(!0);
    }
    setHasFullbandPerformance(e) {
        (0, b.lE)().setHasFullbandPerformance?.(e);
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
            r = (t = N.Zi) + ((N.Xg - t) * i) / 100,
            s = (n = N.d_) + ((N.nO - n) * i) / 100;
        (0, b.lE)().applySidechainCompressionSettings?.({ threshold: r, ratio: s });
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
            e.deviceChangeGeneration++,
                e.emit(c.bg.DeviceChange, j(N.oh.AUDIO_INPUT, t), j(N.oh.AUDIO_OUTPUT, n), j(N.oh.VIDEO_INPUT, i));
        };
    })();
    handleVolumeChange = (e, t) => {
        this.emit(c.bg.VolumeChange, e * N.Hz, t * N.Hz);
    };
    handleVoiceActivity = (e, t) => {
        let n = Date.now();
        this.listenerCount(c.bg.VoiceActivity) > 0 &&
            (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) &&
            ((this.lastVoiceActivity = n), this.emit(c.bg.VoiceActivity, e, t));
    };
    handleActiveSinksChange = (e, t) => {
        this.connections.forEach((n) =>
            n.setHasActiveVideoOutputSink(e, t, "MediaEngineNative.handleActiveSinksChange"),
        );
    };
    handleNewListener = (e) => {
        switch (e) {
            case c.bg.VoiceActivity:
                null != (0, b.lE)().setEmitVADLevel2
                    ? (0, b.lE)().setEmitVADLevel2(!0)
                    : (0, b.lE)().setEmitVADLevel(!0, !1, {});
                break;
            case c.bg.DeviceChange:
                let t = this.deviceChangeGeneration;
                Promise.all([
                    this.getAudioInputDevices(),
                    this.getAudioOutputDevices(),
                    this.getVideoInputDevices(),
                ]).then((e) => {
                    let [n, i, r] = e;
                    t === this.deviceChangeGeneration && this.emit(c.bg.DeviceChange, n, i, r);
                });
        }
    };
    handleRemoveListener = (e) => {
        e === c.bg.VoiceActivity &&
            (null != (0, b.lE)().setEmitVADLevel2
                ? (0, b.lE)().setEmitVADLevel2(this.listenerCount(c.bg.VoiceActivity) > 0)
                : (0, b.lE)().setEmitVADLevel(this.listenerCount(c.bg.VoiceActivity) > 0, !1, {}));
    };
    handleVideoInputInitialization = (e) => {
        this.emit(c.bg.VideoInputInitialized, e);
    };
    handleAudioInputInitialization = (e) => {
        this.emit(c.bg.AudioInputInitialized, e);
    };
    handleNativeScreenSharePickerUpdate = (e, t) => {
        this.emit(c.bg.NativeScreenSharePickerUpdate, e, t);
    };
    handleNativeScreenSharePickerCancel = (e) => {
        this.emit(c.bg.NativeScreenSharePickerCancel, e);
    };
    handleNativeScreenSharePickerError = (e) => {
        this.emit(c.bg.NativeScreenSharePickerError, e);
    };
    handleAudioDeviceModuleErrorCallback = (e, t) => {
        -100 !== e && this.emit(c.bg.AudioDeviceModuleError, "RustAudioDeviceModule", e, t);
    };
    handleVideoCodecErrorCallback = (e) => {
        this.emit(c.bg.VideoCodecError, e);
    };
    handleVoiceProcessingErrorCallback = (e) => {
        this.emit(c.bg.VoiceProcessingError, e);
    };
    handleSystemMicrophoneModeChangeCallback = (e) => {
        this.emit(c.bg.SystemMicrophoneModeChange, e);
    };
    watchdogTick() {
        let e = !1;
        (0, b.lE)().pingVoiceThread(() => {
            (e = !0), (this.consecutiveWatchdogFailures = 0);
        }),
            setTimeout(() => {
                !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(c.bg.WatchdogTimeout) : this.watchdogTick();
            }, 3e4);
    }
    connectionsEmpty() {
        return 0 === this.connections.size;
    }
}
