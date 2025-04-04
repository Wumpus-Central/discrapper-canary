n.d(t, {
    $A: () => I,
    $B: () => N,
    $j: () => s,
    AN: () => H,
    AS: () => W,
    Av: () => m,
    Dg: () => z,
    Er: () => P,
    Gs: () => C,
    H3: () => ee,
    JA: () => v,
    Jk: () => O,
    LD: () => D,
    P8: () => R,
    QO: () => y,
    QP: () => l,
    Qx: () => d,
    R$: () => M,
    Tr: () => q,
    UC: () => j,
    Uc: () => $,
    V8: () => J,
    WA: () => b,
    XR: () => B,
    YE: () => U,
    Yh: () => f,
    Yn: () => i,
    Z: () => u,
    Zq: () => E,
    ad: () => K,
    dX: () => _,
    ed: () => p,
    ef: () => L,
    fC: () => c,
    h7: () => o,
    iA: () => Y,
    jg: () => g,
    kS: () => F,
    mC: () => T,
    mN: () => S,
    n4: () => Z,
    pM: () => a,
    pk: () => k,
    ru: () => x,
    u$: () => A,
    uA: () => Q,
    ux: () => V,
    vA: () => r.vA,
    w5: () => h,
    y7: () => w,
    yf: () => G,
    ym: () => X
});
var r = n(268146),
    i = (function (e) {
        return (e.DEFAULT = 'default'), (e.STREAM = 'stream'), e;
    })({}),
    o = (function (e) {
        return (e.AUDIO_INPUT = 'audioinput'), (e.AUDIO_OUTPUT = 'audiooutput'), (e.VIDEO_INPUT = 'videoinput'), e;
    })({}),
    a = (function (e) {
        return (e.PUSH_TO_TALK = 'PUSH_TO_TALK'), (e.VOICE_ACTIVITY = 'VOICE_ACTIVITY'), e;
    })({}),
    s = (function (e) {
        return (e.DISCONNECTED = 'DISCONNECTED'), (e.CONNECTING = 'CONNECTING'), (e.CONNECTED = 'CONNECTED'), (e.NO_ROUTE = 'NO_ROUTE'), (e.ICE_CHECKING = 'ICE_CHECKING'), (e.DTLS_CONNECTING = 'DTLS_CONNECTING'), e;
    })({}),
    l = (function (e) {
        return (e[(e.TRANSPORT = 1)] = 'TRANSPORT'), (e[(e.OUTBOUND = 2)] = 'OUTBOUND'), (e[(e.INBOUND = 4)] = 'INBOUND'), (e[(e.ALL = 7)] = 'ALL'), e;
    })({}),
    c = (function (e) {
        return (e.MANUAL_DISABLE = 'video_manual_disable'), (e.MANUAL_ENABLE = 'video_manual_enable'), (e.MANUAL_REENABLE = 'video_manual_reenable'), (e.AUTO_DISABLE = 'video_auto_disable'), (e.AUTO_ENABLE = 'video_auto_enable'), (e.AUTO_DOWNGRADE = 'video_auto_downgrade'), (e.AUTO_UPGRADE = 'video_auto_upgrade,'), e;
    })({}),
    u = (function (e) {
        return (e.NO_OVERRIDE = 'no_override'), (e.HIGH = 'high'), (e.LOW = 'low'), e;
    })({});
let d = 100,
    f = 18,
    _ = 64000,
    p = 128000,
    h = 'default',
    m = 'disabled',
    g = 0.1,
    E = -40,
    b = -25,
    y = 1 / 15,
    v = 0.8,
    O = 0.4,
    I = 600000,
    S = 150000,
    T = 10000000,
    N = 5000,
    A = 15000,
    C = 30,
    R = 20,
    P = 12,
    w = 100,
    D = 50,
    L = 1280,
    x = 720,
    M = 30,
    k = 1500000,
    j = 500000,
    U = 3500000,
    G = 9000000,
    B = ['remoteSinkWantsPixelCount', 'remoteSinkWantsMaxFramerate', 'encodingVideoMinBitRate', 'encodingVideoMaxBitRate', 'encodingVideoBitRate', 'streamParameters'],
    F = {
        videoBudget: {
            width: 1280,
            height: 720,
            framerate: 30
        },
        videoCapture: {
            width: 1280,
            height: 720,
            framerate: 30
        },
        videoBitrate: {
            min: 150000,
            max: 2500000
        },
        desktopBitrate: {
            min: 500000,
            max: 3500000,
            target: 600000
        },
        videoBitrateFloor: 150000
    },
    V = 60000,
    Z = '>=22.0.0';
var H = (function (e) {
        return (e.AUTO_ENABLE = 'AUTO_ENABLE'), (e.ATTENUATION = 'ATTENUATION'), (e.AUDIO_INPUT_DEVICE = 'AUDIO_INPUT_DEVICE'), (e.AUDIO_OUTPUT_DEVICE = 'AUDIO_OUTPUT_DEVICE'), (e.VOICE_PROCESSING = 'VOICE_PROCESSING'), (e.QOS = 'QOS'), (e.NATIVE_PING = 'NATIVE_PING'), (e.LEGACY_AUDIO_SUBSYSTEM = 'LEGACY_AUDIO_SUBSYSTEM'), (e.EXPERIMENTAL_AUDIO_SUBSYSTEM = 'EXPERIMENTAL_AUDIO_SUBSYSTEM'), (e.AUTOMATIC_AUDIO_SUBSYSTEM = 'AUTOMATIC_AUDIO_SUBSYSTEM'), (e.AUDIO_SUBSYSTEM_DEFERRED_SWITCH = 'AUDIO_SUBSYSTEM_DEFERRED_SWITCH'), (e.DEBUG_LOGGING = 'DEBUG_LOGGING'), (e.AUTOMATIC_VAD = 'AUTOMATIC_VAD'), (e.VOICE_PANNING = 'VOICE_PANNING'), (e.DIAGNOSTICS = 'DIAGNOSTICS'), (e.VIDEO = 'VIDEO'), (e.DESKTOP_CAPTURE = 'DESKTOP_CAPTURE'), (e.DESKTOP_CAPTURE_FORMAT = 'DESKTOP_CAPTURE_FORMAT'), (e.DESKTOP_CAPTURE_APPLICATIONS = 'DESKTOP_CAPTURE_APPLICATIONS'), (e.SOUNDSHARE = 'SOUNDSHARE'), (e.LOOPBACK = 'LOOPBACK'), (e.VIDEO_HOOK = 'VIDEO_HOOK'), (e.EXPERIMENTAL_SOUNDSHARE = 'EXPERIMENTAL_SOUNDSHARE'), (e.WUMPUS_VIDEO = 'WUMPUS_VIDEO'), (e.ELEVATED_HOOK = 'ELEVATED_HOOK'), (e.HYBRID_VIDEO = 'HYBRID_VIDEO'), (e.OPEN_H264 = 'OPEN_H264'), (e.EXPERIMENTAL_ENCODERS = 'EXPERIMENTAL_ENCODERS'), (e.REMOTE_LOCUS_NETWORK_CONTROL = 'REMOTE_LOCUS_NETWORK_CONTROL'), (e.SCREEN_PREVIEWS = 'SCREEN_PREVIEWS'), (e.WINDOW_PREVIEWS = 'WINDOW_PREVIEWS'), (e.AUDIO_DEBUG_STATE = 'AUDIO_DEBUG_STATE'), (e.AEC_DUMP = 'AEC_DUMP'), (e.DISABLE_VIDEO = 'DISABLE_VIDEO'), (e.CONNECTION_REPLAY = 'CONNECTION_REPLAY'), (e.SIMULCAST = 'SIMULCAST'), (e.RTC_REGION_RANKING = 'RTC_REGION_RANKING'), (e.ELECTRON_VIDEO = 'ELECTRON_VIDEO'), (e.MEDIAPIPE = 'MEDIAPIPE'), (e.FIXED_KEYFRAME_INTERVAL = 'FIXED_KEYFRAME_INTERVAL'), (e.SAMPLE_PLAYBACK = 'SAMPLE_PLAYBACK'), (e.FIRST_FRAME_CALLBACK = 'FIRST_FRAME_CALLBACK'), (e.REMOTE_USER_MULTI_STREAM = 'REMOTE_USER_MULTI_STREAM'), (e.NOISE_SUPPRESSION = 'NOISE_SUPPRESSION'), (e.NOISE_CANCELLATION = 'NOISE_CANCELLATION'), (e.VOICE_FILTERS = 'VOICE_FILTERS'), (e.AUTOMATIC_GAIN_CONTROL = 'AUTOMATIC_GAIN_CONTROL'), (e.CLIPS = 'CLIPS'), (e.SPEED_TEST = 'SPEED_TEST'), (e.IMAGE_QUALITY_MEASUREMENT = 'IMAGE_QUALITY_MEASUREMENT'), (e.GO_LIVE_HARDWARE = 'GO_LIVE_HARDWARE'), (e.SCREEN_CAPTURE_KIT = 'SCREEN_CAPTURE_KIT'), (e.CAPTURE_TIMEOUT_EXPERIMENTS = 'CAPTURE_TIMEOUT_EXPERIMENTS'), (e.SCREEN_SOUNDSHARE = 'SCREEN_SOUNDSHARE'), (e.NATIVE_SCREENSHARE_PICKER = 'NATIVE_SCREENSHARE_PICKER'), (e.MLS_PAIRWISE_FINGERPRINTS = 'MLS_PAIRWISE_FINGERPRINTS'), e;
    })({}),
    W = (function (e) {
        return (e.NATIVE = 'NATIVE'), (e.WEBRTC = 'WEBRTC'), (e.DUMMY = 'DUMMY'), e;
    })({}),
    Y = (function (e) {
        return (e.LEGACY = 'legacy'), (e.STANDARD = 'standard'), (e.EXPERIMENTAL = 'experimental'), (e.AUTOMATIC = 'automatic'), e;
    })({}),
    K = (function (e) {
        return (e.OPUS = 'opus'), (e.VP8 = 'VP8'), (e.VP9 = 'VP9'), (e.H264 = 'H264'), (e.RTX = 'rtx'), (e.TEST = 'TEST'), e;
    })({}),
    z = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.VOICE = 1)] = 'VOICE'), (e[(e.SOUNDSHARE = 2)] = 'SOUNDSHARE'), (e[(e.PRIORITY = 4)] = 'PRIORITY'), e;
    })({}),
    q = (function (e) {
        return (e.AUDIO = 'audio'), (e.VIDEO = 'video'), (e.SCREEN = 'screen'), (e.TEST = 'test'), e;
    })({}),
    Q = (function (e) {
        return (e.FIXED = 'fixed'), (e.SOURCE = 'source'), e;
    })({}),
    X = (function (e) {
        return (e.REMB = 'remb'), e;
    })({}),
    J = (function (e) {
        return (e.VIDEOTOOLBOX_RATE_CONTROL = 'videotoolbox_rate_control'), (e.SIGNAL_AV1 = 'signal_av1'), (e.SIGNAL_AV1_DECODE = 'signal_av1_decode'), (e.SIGNAL_AV1_HARDWARE_DECODE = 'signal_av1_hardware_decode'), (e.STREAMER_CLIP = 'streamer_clip'), (e.VIEWER_CLIP = 'viewer_clip'), (e.MUTE_BEFORE_PROCESSING = 'mute_before_processing'), (e.PTT_BEFORE_PROCESSING = 'ptt_before_processing'), (e.SKIP_ENCODE = 'skip_encode'), (e.RESET_DECODER_ON_ERRORS = 'reset_decoder_on_errors'), (e.SOFTWARE_FALLBACK_ON_ERRORS = 'software_fallback_on_errors'), (e.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS = 'software_fallback_on_consecutive_errors'), e;
    })({}),
    $ = (function (e) {
        return (e[(e.AUTO = 1)] = 'AUTO'), (e[(e.FULL = 2)] = 'FULL'), e;
    })({}),
    ee = (function (e) {
        return (e[(e.CPU_OVERUSE = 1)] = 'CPU_OVERUSE'), (e[(e.FAILED = 2)] = 'FAILED'), (e[(e.VAD_CPU_OVERUSE = 3)] = 'VAD_CPU_OVERUSE'), (e[(e.INITIALIZED = 4)] = 'INITIALIZED'), e;
    })({});
