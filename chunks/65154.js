r.d(n, {
    $A: function () {
        return M;
    },
    $B: function () {
        return B;
    },
    $j: function () {
        return o;
    },
    AN: function () {
        return d;
    },
    AS: function () {
        return f;
    },
    Av: function () {
        return O;
    },
    Dg: function () {
        return p;
    },
    Er: function () {
        return V;
    },
    Gs: function () {
        return Z;
    },
    H3: function () {
        return b;
    },
    JA: function () {
        return P;
    },
    LD: function () {
        return H;
    },
    P8: function () {
        return F;
    },
    QO: function () {
        return w;
    },
    QP: function () {
        return l;
    },
    Qx: function () {
        return S;
    },
    R$: function () {
        return K;
    },
    Tr: function () {
        return m;
    },
    UC: function () {
        return q;
    },
    Uc: function () {
        return T;
    },
    V8: function () {
        return I;
    },
    WA: function () {
        return x;
    },
    XR: function () {
        return J;
    },
    YE: function () {
        return Q;
    },
    Yh: function () {
        return A;
    },
    Yn: function () {
        return i;
    },
    Z: function () {
        return c;
    },
    Zq: function () {
        return L;
    },
    ad: function () {
        return h;
    },
    dX: function () {
        return N;
    },
    ed: function () {
        return C;
    },
    ef: function () {
        return Y;
    },
    fC: function () {
        return u;
    },
    h7: function () {
        return a;
    },
    iA: function () {
        return _;
    },
    jg: function () {
        return D;
    },
    kS: function () {
        return $;
    },
    mC: function () {
        return U;
    },
    mN: function () {
        return k;
    },
    n4: function () {
        return et;
    },
    pM: function () {
        return s;
    },
    pk: function () {
        return z;
    },
    ru: function () {
        return W;
    },
    u$: function () {
        return G;
    },
    uA: function () {
        return E;
    },
    ux: function () {
        return ee;
    },
    vA: function () {
        return y.vA;
    },
    w5: function () {
        return R;
    },
    y7: function () {
        return j;
    },
    yf: function () {
        return X;
    },
    ym: function () {
        return v;
    }
});
var i,
    a,
    s,
    o,
    l,
    u,
    c,
    d,
    f,
    _,
    h,
    p,
    m,
    g,
    E,
    v,
    I,
    T,
    b,
    y = r(268146);
!(function (e) {
    (e.DEFAULT = 'default'), (e.STREAM = 'stream');
})(i || (i = {})),
    !(function (e) {
        (e.AUDIO_INPUT = 'audioinput'), (e.AUDIO_OUTPUT = 'audiooutput'), (e.VIDEO_INPUT = 'videoinput');
    })(a || (a = {})),
    !(function (e) {
        (e.PUSH_TO_TALK = 'PUSH_TO_TALK'), (e.VOICE_ACTIVITY = 'VOICE_ACTIVITY');
    })(s || (s = {})),
    !(function (e) {
        (e.DISCONNECTED = 'DISCONNECTED'), (e.CONNECTING = 'CONNECTING'), (e.CONNECTED = 'CONNECTED'), (e.NO_ROUTE = 'NO_ROUTE'), (e.ICE_CHECKING = 'ICE_CHECKING'), (e.DTLS_CONNECTING = 'DTLS_CONNECTING');
    })(o || (o = {})),
    !(function (e) {
        (e[(e.TRANSPORT = 1)] = 'TRANSPORT'), (e[(e.OUTBOUND = 2)] = 'OUTBOUND'), (e[(e.INBOUND = 4)] = 'INBOUND'), (e[(e.ALL = 7)] = 'ALL');
    })(l || (l = {})),
    !(function (e) {
        (e.MANUAL_DISABLE = 'video_manual_disable'), (e.MANUAL_ENABLE = 'video_manual_enable'), (e.MANUAL_REENABLE = 'video_manual_reenable'), (e.AUTO_DISABLE = 'video_auto_disable'), (e.AUTO_ENABLE = 'video_auto_enable'), (e.AUTO_DOWNGRADE = 'video_auto_downgrade'), (e.AUTO_UPGRADE = 'video_auto_upgrade,');
    })(u || (u = {})),
    !(function (e) {
        (e.NO_OVERRIDE = 'no_override'), (e.HIGH = 'high'), (e.LOW = 'low');
    })(c || (c = {}));
let S = 100,
    A = 18,
    N = 64000,
    C = 128000,
    R = 'default',
    O = 'disabled',
    D = 0.1,
    L = -40,
    x = -25,
    w = 1 / 15,
    P = 0.8,
    M = 600000,
    k = 150000,
    U = 10000000,
    B = 5000,
    G = 15000,
    Z = 30,
    F = 20,
    V = 12,
    j = 100,
    H = 50,
    Y = 1280,
    W = 720,
    K = 30,
    z = 1500000,
    q = 500000,
    Q = 3500000,
    X = 9000000,
    J = ['remoteSinkWantsPixelCount', 'remoteSinkWantsMaxFramerate', 'encodingVideoMinBitRate', 'encodingVideoMaxBitRate', 'encodingVideoBitRate', 'streamParameters'],
    $ = {
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
    ee = 60000,
    et = '>=22.0.0';
!(function (e) {
    (e.AUTO_ENABLE = 'AUTO_ENABLE'), (e.ATTENUATION = 'ATTENUATION'), (e.AUDIO_INPUT_DEVICE = 'AUDIO_INPUT_DEVICE'), (e.AUDIO_OUTPUT_DEVICE = 'AUDIO_OUTPUT_DEVICE'), (e.VOICE_PROCESSING = 'VOICE_PROCESSING'), (e.QOS = 'QOS'), (e.NATIVE_PING = 'NATIVE_PING'), (e.LEGACY_AUDIO_SUBSYSTEM = 'LEGACY_AUDIO_SUBSYSTEM'), (e.EXPERIMENTAL_AUDIO_SUBSYSTEM = 'EXPERIMENTAL_AUDIO_SUBSYSTEM'), (e.AUTOMATIC_AUDIO_SUBSYSTEM = 'AUTOMATIC_AUDIO_SUBSYSTEM'), (e.AUDIO_SUBSYSTEM_DEFERRED_SWITCH = 'AUDIO_SUBSYSTEM_DEFERRED_SWITCH'), (e.DEBUG_LOGGING = 'DEBUG_LOGGING'), (e.AUTOMATIC_VAD = 'AUTOMATIC_VAD'), (e.VOICE_PANNING = 'VOICE_PANNING'), (e.DIAGNOSTICS = 'DIAGNOSTICS'), (e.VIDEO = 'VIDEO'), (e.DESKTOP_CAPTURE = 'DESKTOP_CAPTURE'), (e.DESKTOP_CAPTURE_FORMAT = 'DESKTOP_CAPTURE_FORMAT'), (e.DESKTOP_CAPTURE_APPLICATIONS = 'DESKTOP_CAPTURE_APPLICATIONS'), (e.SOUNDSHARE = 'SOUNDSHARE'), (e.LOOPBACK = 'LOOPBACK'), (e.VIDEO_HOOK = 'VIDEO_HOOK'), (e.EXPERIMENTAL_SOUNDSHARE = 'EXPERIMENTAL_SOUNDSHARE'), (e.WUMPUS_VIDEO = 'WUMPUS_VIDEO'), (e.ELEVATED_HOOK = 'ELEVATED_HOOK'), (e.HYBRID_VIDEO = 'HYBRID_VIDEO'), (e.OPEN_H264 = 'OPEN_H264'), (e.EXPERIMENTAL_ENCODERS = 'EXPERIMENTAL_ENCODERS'), (e.REMOTE_LOCUS_NETWORK_CONTROL = 'REMOTE_LOCUS_NETWORK_CONTROL'), (e.SCREEN_PREVIEWS = 'SCREEN_PREVIEWS'), (e.WINDOW_PREVIEWS = 'WINDOW_PREVIEWS'), (e.AUDIO_DEBUG_STATE = 'AUDIO_DEBUG_STATE'), (e.AEC_DUMP = 'AEC_DUMP'), (e.DISABLE_VIDEO = 'DISABLE_VIDEO'), (e.CONNECTION_REPLAY = 'CONNECTION_REPLAY'), (e.SIMULCAST = 'SIMULCAST'), (e.RTC_REGION_RANKING = 'RTC_REGION_RANKING'), (e.DIRECT_VIDEO = 'DIRECT_VIDEO'), (e.ELECTRON_VIDEO = 'ELECTRON_VIDEO'), (e.MEDIAPIPE = 'MEDIAPIPE'), (e.FIXED_KEYFRAME_INTERVAL = 'FIXED_KEYFRAME_INTERVAL'), (e.SAMPLE_PLAYBACK = 'SAMPLE_PLAYBACK'), (e.FIRST_FRAME_CALLBACK = 'FIRST_FRAME_CALLBACK'), (e.REMOTE_USER_MULTI_STREAM = 'REMOTE_USER_MULTI_STREAM'), (e.NOISE_SUPPRESSION = 'NOISE_SUPPRESSION'), (e.NOISE_CANCELLATION = 'NOISE_CANCELLATION'), (e.AUTOMATIC_GAIN_CONTROL = 'AUTOMATIC_GAIN_CONTROL'), (e.CLIPS = 'CLIPS'), (e.SPEED_TEST = 'SPEED_TEST'), (e.IMAGE_QUALITY_MEASUREMENT = 'IMAGE_QUALITY_MEASUREMENT'), (e.AMD_EXPERIMENTAL_RATE_CONTROL = 'AMD_EXPERIMENTAL_RATE_CONTROL'), (e.GO_LIVE_HARDWARE = 'GO_LIVE_HARDWARE'), (e.SCREEN_CAPTURE_KIT = 'SCREEN_CAPTURE_KIT'), (e.CAPTURE_TIMEOUT_EXPERIMENTS = 'CAPTURE_TIMEOUT_EXPERIMENTS'), (e.SCREEN_SOUNDSHARE = 'SCREEN_SOUNDSHARE'), (e.NATIVE_SCREENSHARE_PICKER = 'NATIVE_SCREENSHARE_PICKER'), (e.MLS_PAIRWISE_FINGERPRINTS = 'MLS_PAIRWISE_FINGERPRINTS');
})(d || (d = {})),
    !(function (e) {
        (e.NATIVE = 'NATIVE'), (e.WEBRTC = 'WEBRTC'), (e.DUMMY = 'DUMMY');
    })(f || (f = {})),
    !(function (e) {
        (e.LEGACY = 'legacy'), (e.STANDARD = 'standard'), (e.EXPERIMENTAL = 'experimental'), (e.AUTOMATIC = 'automatic');
    })(_ || (_ = {})),
    !(function (e) {
        (e.OPUS = 'opus'), (e.VP8 = 'VP8'), (e.VP9 = 'VP9'), (e.H264 = 'H264'), (e.RTX = 'rtx'), (e.TEST = 'TEST');
    })(h || (h = {})),
    !(function (e) {
        (e[(e.NONE = 0)] = 'NONE'), (e[(e.VOICE = 1)] = 'VOICE'), (e[(e.SOUNDSHARE = 2)] = 'SOUNDSHARE'), (e[(e.PRIORITY = 4)] = 'PRIORITY');
    })(p || (p = {})),
    !(function (e) {
        (e.AUDIO = 'audio'), (e.VIDEO = 'video'), (e.SCREEN = 'screen'), (e.TEST = 'test');
    })(m || (m = {})),
    !(function (e) {
        (e.PLAYING = 'playing'), (e.PAUSED = 'paused');
    })(g || (g = {})),
    !(function (e) {
        (e.FIXED = 'fixed'), (e.SOURCE = 'source');
    })(E || (E = {})),
    !(function (e) {
        e.REMB = 'remb';
    })(v || (v = {})),
    !(function (e) {
        (e.VIDEOTOOLBOX_RATE_CONTROL = 'videotoolbox_rate_control'), (e.SIGNAL_AV1 = 'signal_av1'), (e.SIGNAL_AV1_DECODE = 'signal_av1_decode'), (e.SIGNAL_AV1_HARDWARE_DECODE = 'signal_av1_hardware_decode'), (e.STREAMER_CLIP = 'streamer_clip'), (e.VIEWER_CLIP = 'viewer_clip'), (e.MUTE_BEFORE_PROCESSING = 'mute_before_processing'), (e.PTT_BEFORE_PROCESSING = 'ptt_before_processing'), (e.SKIP_ENCODE = 'skip_encode'), (e.RESET_DECODER_ON_ERRORS = 'reset_decoder_on_errors'), (e.SOFTWARE_FALLBACK_ON_ERRORS = 'software_fallback_on_errors'), (e.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS = 'software_fallback_on_consecutive_errors');
    })(I || (I = {})),
    !(function (e) {
        (e[(e.AUTO = 1)] = 'AUTO'), (e[(e.FULL = 2)] = 'FULL');
    })(T || (T = {})),
    !(function (e) {
        (e[(e.CPU_OVERUSE = 1)] = 'CPU_OVERUSE'), (e[(e.FAILED = 2)] = 'FAILED'), (e[(e.VAD_CPU_OVERUSE = 3)] = 'VAD_CPU_OVERUSE'), (e[(e.INITIALIZED = 4)] = 'INITIALIZED');
    })(b || (b = {}));
