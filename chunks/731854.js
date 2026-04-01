"use strict";
n.d(t, {
    $I: () => o,
    Al: () => u,
    CO: () => Q,
    Cl: () => x,
    Cn: () => _,
    Dk: () => B,
    E6: () => J,
    HE: () => p,
    Hz: () => d,
    K3: () => X,
    KR: () => C,
    Ku: () => Y,
    ME: () => $,
    O5: () => j,
    PR: () => h,
    Rv: () => f,
    TB: () => a,
    UK: () => K,
    X1: () => V,
    XA: () => w,
    Xg: () => S,
    Y4: () => M,
    YU: () => F,
    Zi: () => T,
    d_: () => y,
    dx: () => E,
    eQ: () => G,
    ei: () => q,
    fS: () => r.fS,
    fd: () => Z,
    kO: () => m,
    kc: () => L,
    l2: () => N,
    lo: () => P,
    mI: () => z,
    n8: () => O,
    nJ: () => U,
    nO: () => v,
    oL: () => k,
    oh: () => s,
    qe: () => A,
    qm: () => b,
    r8: () => c,
    rB: () => W,
    sG: () => D,
    tl: () => H,
    us: () => R,
    vt: () => g,
    x: () => i,
    yt: () => l,
    zt: () => I,
});
var r = n(141931),
    i = (function (e) {
        return (e.DEFAULT = "default"), (e.STREAM = "stream"), e;
    })({}),
    s = (function (e) {
        return (e.AUDIO_INPUT = "audioinput"), (e.AUDIO_OUTPUT = "audiooutput"), (e.VIDEO_INPUT = "videoinput"), e;
    })({}),
    a = (function (e) {
        return (e.PUSH_TO_TALK = "PUSH_TO_TALK"), (e.VOICE_ACTIVITY = "VOICE_ACTIVITY"), e;
    })({}),
    o = (function (e) {
        return (
            (e.DISCONNECTED = "DISCONNECTED"),
            (e.CONNECTING = "CONNECTING"),
            (e.CONNECTED = "CONNECTED"),
            (e.NO_ROUTE = "NO_ROUTE"),
            (e.ICE_CHECKING = "ICE_CHECKING"),
            (e.DTLS_CONNECTING = "DTLS_CONNECTING"),
            e
        );
    })({}),
    l = (function (e) {
        return (
            (e[(e.TRANSPORT = 1)] = "TRANSPORT"),
            (e[(e.OUTBOUND = 2)] = "OUTBOUND"),
            (e[(e.INBOUND = 4)] = "INBOUND"),
            (e[(e.ALL = 7)] = "ALL"),
            e
        );
    })({}),
    u = (function (e) {
        return (
            (e.MANUAL_DISABLE = "video_manual_disable"),
            (e.MANUAL_ENABLE = "video_manual_enable"),
            (e.MANUAL_REENABLE = "video_manual_reenable"),
            (e.AUTO_DISABLE = "video_auto_disable"),
            (e.AUTO_ENABLE = "video_auto_enable"),
            (e.AUTO_DOWNGRADE = "video_auto_downgrade"),
            (e.AUTO_UPGRADE = "video_auto_upgrade,"),
            e
        );
    })({}),
    c = (function (e) {
        return (e.NO_OVERRIDE = "no_override"), (e.HIGH = "high"), (e.LOW = "low"), e;
    })({});
let d = 100,
    _ = 18,
    f = 200,
    p = 100,
    h = 64e3,
    m = 128e3,
    E = "default",
    g = /^Default/,
    A = "disabled",
    I = 0.1,
    T = -40,
    S = -25,
    y = 1 / 15,
    v = 0.8,
    N = 6e5,
    C = 16e3,
    R = 1e7,
    O = 5e3,
    b = 15e3,
    D = 30,
    L = 20,
    w = 12,
    M = 100,
    x = 50,
    P = 35e5,
    k = 9e6,
    U = [
        "remoteSinkWantsPixelCount",
        "remoteSinkWantsMaxFramerate",
        "encodingVideoMinBitRate",
        "encodingVideoMaxBitRate",
        "encodingVideoBitRate",
        "streamParameters",
    ],
    G = {
        videoBudget: { width: 1280, height: 720, framerate: 30 },
        videoCapture: { width: 1280, height: 720, framerate: 30 },
        videoBitrate: { min: 15e4, max: 25e5 },
        desktopBitrate: { min: 5e5, max: 35e5, target: 6e5 },
        videoBitrateFloor: 15e4,
    },
    F = 0.02,
    V = 6e4,
    B = ">=22.0.0",
    H = 9e5;
var j = (function (e) {
        return (
            (e.AUTO_ENABLE = "AUTO_ENABLE"),
            (e.ATTENUATION = "ATTENUATION"),
            (e.AUDIO_INPUT_DEVICE = "AUDIO_INPUT_DEVICE"),
            (e.AUDIO_OUTPUT_DEVICE = "AUDIO_OUTPUT_DEVICE"),
            (e.VOICE_PROCESSING = "VOICE_PROCESSING"),
            (e.QOS = "QOS"),
            (e.NATIVE_PING = "NATIVE_PING"),
            (e.LEGACY_AUDIO_SUBSYSTEM = "LEGACY_AUDIO_SUBSYSTEM"),
            (e.EXPERIMENTAL_AUDIO_SUBSYSTEM = "EXPERIMENTAL_AUDIO_SUBSYSTEM"),
            (e.AUTOMATIC_AUDIO_SUBSYSTEM = "AUTOMATIC_AUDIO_SUBSYSTEM"),
            (e.AUDIO_SUBSYSTEM_DEFERRED_SWITCH = "AUDIO_SUBSYSTEM_DEFERRED_SWITCH"),
            (e.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING = "AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING"),
            (e.DEBUG_LOGGING = "DEBUG_LOGGING"),
            (e.AUTOMATIC_VAD = "AUTOMATIC_VAD"),
            (e.VOICE_PANNING = "VOICE_PANNING"),
            (e.DIAGNOSTICS = "DIAGNOSTICS"),
            (e.VIDEO = "VIDEO"),
            (e.DESKTOP_CAPTURE = "DESKTOP_CAPTURE"),
            (e.DESKTOP_CAPTURE_FORMAT = "DESKTOP_CAPTURE_FORMAT"),
            (e.DESKTOP_CAPTURE_APPLICATIONS = "DESKTOP_CAPTURE_APPLICATIONS"),
            (e.SOUNDSHARE = "SOUNDSHARE"),
            (e.LOOPBACK = "LOOPBACK"),
            (e.VIDEO_HOOK = "VIDEO_HOOK"),
            (e.EXPERIMENTAL_SOUNDSHARE = "EXPERIMENTAL_SOUNDSHARE"),
            (e.WUMPUS_VIDEO = "WUMPUS_VIDEO"),
            (e.ELEVATED_HOOK = "ELEVATED_HOOK"),
            (e.HYBRID_VIDEO = "HYBRID_VIDEO"),
            (e.REMOTE_LOCUS_NETWORK_CONTROL = "REMOTE_LOCUS_NETWORK_CONTROL"),
            (e.SCREEN_PREVIEWS = "SCREEN_PREVIEWS"),
            (e.WINDOW_PREVIEWS = "WINDOW_PREVIEWS"),
            (e.AUDIO_DEBUG_STATE = "AUDIO_DEBUG_STATE"),
            (e.AEC_DUMP = "AEC_DUMP"),
            (e.DISABLE_VIDEO = "DISABLE_VIDEO"),
            (e.CONNECTION_REPLAY = "CONNECTION_REPLAY"),
            (e.SIMULCAST = "SIMULCAST"),
            (e.RTC_REGION_RANKING = "RTC_REGION_RANKING"),
            (e.ELECTRON_VIDEO = "ELECTRON_VIDEO"),
            (e.MEDIAPIPE = "MEDIAPIPE"),
            (e.FIXED_KEYFRAME_INTERVAL = "FIXED_KEYFRAME_INTERVAL"),
            (e.SAMPLE_PLAYBACK = "SAMPLE_PLAYBACK"),
            (e.FIRST_FRAME_CALLBACK = "FIRST_FRAME_CALLBACK"),
            (e.REMOTE_USER_MULTI_STREAM = "REMOTE_USER_MULTI_STREAM"),
            (e.NOISE_SUPPRESSION = "NOISE_SUPPRESSION"),
            (e.NOISE_CANCELLATION = "NOISE_CANCELLATION"),
            (e.AUTOMATIC_GAIN_CONTROL = "AUTOMATIC_GAIN_CONTROL"),
            (e.CLIPS = "CLIPS"),
            (e.CLIPS_V3 = "CLIPS_V3"),
            (e.SPEED_TEST = "SPEED_TEST"),
            (e.IMAGE_QUALITY_MEASUREMENT = "IMAGE_QUALITY_MEASUREMENT"),
            (e.GO_LIVE_HARDWARE = "GO_LIVE_HARDWARE"),
            (e.SCREEN_CAPTURE_KIT = "SCREEN_CAPTURE_KIT"),
            (e.SCREEN_SOUNDSHARE = "SCREEN_SOUNDSHARE"),
            (e.NATIVE_SCREENSHARE_PICKER = "NATIVE_SCREENSHARE_PICKER"),
            (e.MLS_PAIRWISE_FINGERPRINTS = "MLS_PAIRWISE_FINGERPRINTS"),
            (e.OFFLOAD_ADM_CONTROLS = "OFFLOAD_ADM_CONTROLS"),
            (e.SIDECHAIN_COMPRESSION = "SIDECHAIN_COMPRESSION"),
            (e.VAAPI = "VAAPI"),
            (e.GAMESCOPE_CAPTURE = "GAMESCOPE_CAPTURE"),
            (e.ASYNC_VIDEO_INPUT_DEVICE_INIT = "ASYNC_VIDEO_INPUT_DEVICE_INIT"),
            (e.PORT_AWARE_LATENCY_TESTING = "PORT_AWARE_LATENCY_TESTING"),
            e
        );
    })({}),
    Y = (function (e) {
        return (e.NATIVE = "NATIVE"), (e.WEBRTC = "WEBRTC"), (e.DUMMY = "DUMMY"), e;
    })({}),
    W = (function (e) {
        return (
            (e.LEGACY = "legacy"),
            (e.STANDARD = "standard"),
            (e.EXPERIMENTAL = "experimental"),
            (e.AUTOMATIC = "automatic"),
            e
        );
    })({}),
    K = (function (e) {
        return (
            (e.OPUS = "opus"),
            (e.VP8 = "VP8"),
            (e.VP9 = "VP9"),
            (e.H264 = "H264"),
            (e.H265 = "H265"),
            (e.RTX = "rtx"),
            (e.TEST = "TEST"),
            e
        );
    })({}),
    $ = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.VOICE = 1)] = "VOICE"),
            (e[(e.SOUNDSHARE = 2)] = "SOUNDSHARE"),
            (e[(e.PRIORITY = 4)] = "PRIORITY"),
            (e[(e.HIDDEN = 8)] = "HIDDEN"),
            e
        );
    })({}),
    z = (function (e) {
        return (e.AUDIO = "audio"), (e.VIDEO = "video"), (e.SCREEN = "screen"), (e.TEST = "test"), e;
    })({}),
    q = (function (e) {
        return (e.FIXED = "fixed"), (e.SOURCE = "source"), e;
    })({}),
    Z = (function (e) {
        return (
            (e.VIDEOTOOLBOX_RATE_CONTROL = "videotoolbox_rate_control"),
            (e.SIGNAL_AV1 = "signal_av1"),
            (e.SIGNAL_AV1_DECODE = "signal_av1_decode"),
            (e.SIGNAL_AV1_HARDWARE_DECODE = "signal_av1_hardware_decode"),
            (e.VIEWER_CLIP = "viewer_clip"),
            (e.RESET_DECODER_ON_ERRORS = "reset_decoder_on_errors"),
            (e.SOFTWARE_FALLBACK_ON_ERRORS = "software_fallback_on_errors"),
            (e.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS = "software_fallback_on_consecutive_errors"),
            (e.BROWSER_HEVC = "browser_hevc"),
            (e.LOW_LATENCY_RATE_CONTROL = "low_latency_rate_control"),
            (e.H265_HARDWARE_ONLY = "h265_hardware_only"),
            (e.H265_HARDWARE_DECODE_AVAILABLE = "h265_hardware_decode_available"),
            (e.WMF_GPU_ENCODE = "wmf_gpu_encode"),
            (e.USE_LIBOPENH264_DECODER = "use_libopenh264_decoder"),
            (e.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS = "swallow_volume_only_speaking_events"),
            e
        );
    })({}),
    X = (function (e) {
        return (e[(e.AUTO = 1)] = "AUTO"), (e[(e.FULL = 2)] = "FULL"), e;
    })({}),
    Q = (function (e) {
        return (
            (e[(e.CPU_OVERUSE = 1)] = "CPU_OVERUSE"),
            (e[(e.FAILED = 2)] = "FAILED"),
            (e[(e.VAD_CPU_OVERUSE = 3)] = "VAD_CPU_OVERUSE"),
            (e[(e.INITIALIZED = 4)] = "INITIALIZED"),
            e
        );
    })({}),
    J = (function (e) {
        return (
            (e[(e.LOW = 2)] = "LOW"),
            (e[(e.BELOW_NORMAL = 1)] = "BELOW_NORMAL"),
            (e[(e.NORMAL = 0)] = "NORMAL"),
            (e[(e.ABOVE_NORMAL = -1)] = "ABOVE_NORMAL"),
            (e[(e.HIGH = -2)] = "HIGH"),
            e
        );
    })({});
