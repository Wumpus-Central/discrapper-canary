n.d(t, {
    $I: () => o,
    Al: () => c,
    Bb: () => j,
    CO: () => er,
    Cl: () => x,
    Cn: () => f,
    Dk: () => W,
    Hz: () => d,
    K3: () => en,
    KR: () => I,
    Ku: () => q,
    ME: () => Q,
    O5: () => z,
    PR: () => p,
    QP: () => v,
    TB: () => s,
    U9: () => ee,
    UK: () => Z,
    X1: () => Y,
    XA: () => P,
    Xg: () => y,
    Xk: () => M,
    Y4: () => D,
    YU: () => H,
    Zi: () => b,
    aE: () => L,
    d_: () => O,
    dx: () => h,
    eQ: () => B,
    ei: () => J,
    fS: () => r.fS,
    fd: () => et,
    kO: () => _,
    kc: () => w,
    l2: () => S,
    lo: () => G,
    mI: () => $,
    n8: () => C,
    nJ: () => F,
    nO: () => A,
    oL: () => V,
    oh: () => a,
    q5: () => k,
    qe: () => g,
    qm: () => N,
    r8: () => u,
    rB: () => X,
    sG: () => R,
    tl: () => K,
    us: () => T,
    vt: () => m,
    x: () => i,
    yS: () => U,
    yt: () => l,
    zt: () => E,
});
var r = n(141931),
    i = (function (e) {
        return (e.DEFAULT = "default"), (e.STREAM = "stream"), e;
    })({}),
    a = (function (e) {
        return (e.AUDIO_INPUT = "audioinput"), (e.AUDIO_OUTPUT = "audiooutput"), (e.VIDEO_INPUT = "videoinput"), e;
    })({}),
    s = (function (e) {
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
    c = (function (e) {
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
    u = (function (e) {
        return (e.NO_OVERRIDE = "no_override"), (e.HIGH = "high"), (e.LOW = "low"), e;
    })({});
let d = 100,
    f = 18,
    p = 64e3,
    _ = 128e3,
    h = "default",
    m = /^Default/,
    g = "disabled",
    E = 0.1,
    b = -40,
    y = -25,
    O = 1 / 15,
    A = 0.8,
    v = 0.4,
    S = 6e5,
    I = 16e3,
    T = 1e7,
    C = 5e3,
    N = 15e3,
    R = 30,
    w = 20,
    P = 12,
    D = 100,
    x = 50,
    L = 1280,
    j = 720,
    M = 30,
    k = 15e5,
    U = 5e5,
    G = 35e5,
    V = 9e6,
    F = [
        "remoteSinkWantsPixelCount",
        "remoteSinkWantsMaxFramerate",
        "encodingVideoMinBitRate",
        "encodingVideoMaxBitRate",
        "encodingVideoBitRate",
        "streamParameters",
    ],
    B = {
        videoBudget: {
            width: 1280,
            height: 720,
            framerate: 30,
        },
        videoCapture: {
            width: 1280,
            height: 720,
            framerate: 30,
        },
        videoBitrate: {
            min: 15e4,
            max: 25e5,
        },
        desktopBitrate: {
            min: 5e5,
            max: 35e5,
            target: 6e5,
        },
        videoBitrateFloor: 15e4,
    },
    H = 0.02,
    Y = 6e4,
    W = ">=22.0.0",
    K = 9e5;
var z = (function (e) {
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
            (e.VOICE_FILTERS = "VOICE_FILTERS"),
            (e.AUTOMATIC_GAIN_CONTROL = "AUTOMATIC_GAIN_CONTROL"),
            (e.CLIPS = "CLIPS"),
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
            (e.ASYNC_CLIPS_SOURCE_DEINIT = "ASYNC_CLIPS_SOURCE_DEINIT"),
            (e.PORT_AWARE_LATENCY_TESTING = "PORT_AWARE_LATENCY_TESTING"),
            e
        );
    })({}),
    q = (function (e) {
        return (e.NATIVE = "NATIVE"), (e.WEBRTC = "WEBRTC"), (e.DUMMY = "DUMMY"), e;
    })({}),
    X = (function (e) {
        return (
            (e.LEGACY = "legacy"),
            (e.STANDARD = "standard"),
            (e.EXPERIMENTAL = "experimental"),
            (e.AUTOMATIC = "automatic"),
            e
        );
    })({}),
    Z = (function (e) {
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
    Q = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.VOICE = 1)] = "VOICE"),
            (e[(e.SOUNDSHARE = 2)] = "SOUNDSHARE"),
            (e[(e.PRIORITY = 4)] = "PRIORITY"),
            (e[(e.HIDDEN = 8)] = "HIDDEN"),
            e
        );
    })({}),
    $ = (function (e) {
        return (e.AUDIO = "audio"), (e.VIDEO = "video"), (e.SCREEN = "screen"), (e.TEST = "test"), e;
    })({}),
    J = (function (e) {
        return (e.FIXED = "fixed"), (e.SOURCE = "source"), e;
    })({}),
    ee = (function (e) {
        return (e.REMB = "remb"), e;
    })({}),
    et = (function (e) {
        return (
            (e.VIDEOTOOLBOX_RATE_CONTROL = "videotoolbox_rate_control"),
            (e.SIGNAL_AV1 = "signal_av1"),
            (e.SIGNAL_AV1_DECODE = "signal_av1_decode"),
            (e.SIGNAL_AV1_HARDWARE_DECODE = "signal_av1_hardware_decode"),
            (e.VIEWER_CLIP = "viewer_clip"),
            (e.MUTE_BEFORE_PROCESSING = "mute_before_processing"),
            (e.PTT_BEFORE_PROCESSING = "ptt_before_processing"),
            (e.SKIP_ENCODE = "skip_encode"),
            (e.RESET_DECODER_ON_ERRORS = "reset_decoder_on_errors"),
            (e.SOFTWARE_FALLBACK_ON_ERRORS = "software_fallback_on_errors"),
            (e.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS = "software_fallback_on_consecutive_errors"),
            (e.BROWSER_HEVC = "browser_hevc"),
            (e.LOW_LATENCY_RATE_CONTROL = "low_latency_rate_control"),
            (e.H265_HARDWARE_ONLY = "h265_hardware_only"),
            (e.H265_HARDWARE_DECODE_AVAILABLE = "h265_hardware_decode_available"),
            (e.WMF_GPU_ENCODE = "wmf_gpu_encode"),
            (e.USE_H264_MF_DECODER = "use_h264_mf_decoder"),
            e
        );
    })({}),
    en = (function (e) {
        return (e[(e.AUTO = 1)] = "AUTO"), (e[(e.FULL = 2)] = "FULL"), e;
    })({}),
    er = (function (e) {
        return (
            (e[(e.CPU_OVERUSE = 1)] = "CPU_OVERUSE"),
            (e[(e.FAILED = 2)] = "FAILED"),
            (e[(e.VAD_CPU_OVERUSE = 3)] = "VAD_CPU_OVERUSE"),
            (e[(e.INITIALIZED = 4)] = "INITIALIZED"),
            e
        );
    })({});
