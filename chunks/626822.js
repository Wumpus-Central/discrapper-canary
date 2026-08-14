"use strict";
let i, r, a, s, l, o, d, c, u, _, E;
n.d(t, { yz: () => tl, Ay: () => n2 }), n(323874), n(14289), n(35956), n(321073);
var A,
    h = n(823598),
    I = n(626584),
    f = n(723702),
    p = n(19575);
(0, h.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (f.isPlatformEmbedded) {
                let e = (0, h.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new I.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => p.Ay.supportsFeature(e),
    setProcessPriority(e) {
        p.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => p.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => p.Ay.getOpenH264LibraryPath(),
});
var T = n(284009),
    m = n.n(T),
    g = n(435558),
    S = n.n(g),
    N = n(481613),
    C = n.n(N),
    R = n(299855),
    O = n.n(R),
    L = n(17928),
    D = n(459838),
    y = n(506774),
    v = n(451988),
    b = n(228366),
    M = n(77729),
    P = n(719129),
    U = n(894539),
    w = n(124838),
    G = n(915725),
    x = n(915618),
    k = n(572164),
    F = n(680725),
    V = n(487329),
    B = n(736056),
    H = n(6494),
    j = n(952818),
    W = n(540305),
    Y = n(945810);
let K = {
        useAGC2: !0,
        enableAnalog: !1,
        enableDigital: !0,
        headroom_db: 5,
        max_gain_db: 50,
        initial_gain_db: 15,
        max_gain_change_db_per_second: 6,
        max_output_noise_level_dbfs: -50,
        fixed_gain_db: 0,
    },
    $ = (0, Y.mj)({
        kind: "user",
        name: "2025-09-agc2-v2",
        defaultConfig: { noiseCancellationDuringProcessing: !1, noiseCancellationConfig: { useAGC2: !1 } },
        variations: {
            1: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: { useAGC2: !1 } },
            2: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.5 },
            3: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.7 },
            4: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.8 },
            5: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.9 },
            6: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.95 },
        },
    });
function z(e) {
    let { location: t, disable: n = !1 } = e;
    return n ? $.definition.defaultConfig : $.getConfig({ location: t });
}
let Z = (0, Y.mj)({
        name: "2026-06-av1-encode-linux",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    q = { probeAudioEffects: !1 },
    X = (0, Y.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: q,
        variations: { 1: { ...q, probeAudioEffects: !0 } },
    });
var Q = n(403362);
let J = (0, Y.mj)({
    kind: "user",
    name: "2026-08-audio-fidelity",
    defaultConfig: { capSampleRate: !1, capChannelCount: !1, condition: "none" },
    variations: {
        1: { capSampleRate: !0, capChannelCount: !1, condition: "krisp" },
        2: { capSampleRate: !0, capChannelCount: !1, condition: "noiseSuppression" },
        3: { capSampleRate: !0, capChannelCount: !1, condition: "echoCancellation" },
        4: { capSampleRate: !0, capChannelCount: !1, condition: "any" },
        5: { capSampleRate: !0, capChannelCount: !0, condition: "krisp" },
        6: { capSampleRate: !0, capChannelCount: !0, condition: "noiseSuppression" },
        7: { capSampleRate: !0, capChannelCount: !0, condition: "echoCancellation" },
        8: { capSampleRate: !0, capChannelCount: !0, condition: "any" },
    },
});
function ee(e, t) {
    switch (e) {
        case "krisp":
            return t.krispEnabled;
        case "noiseSuppression":
            return t.noiseSuppressionEnabled;
        case "echoCancellation":
            return t.echoCancellationEnabled;
        case "any":
            return t.krispEnabled || t.noiseSuppressionEnabled || t.echoCancellationEnabled;
        case "none":
            return !1;
        default:
            (0, Q.xb)(e);
    }
}
let et = (0, Y.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    en = (0, Y.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    }),
    ei = (0, Y.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var er = n(240921);
let ea = (0, er.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    es = (0, Y.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    el = (0, Y.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var eo = n(574381),
    ed = n(941426),
    ec = n(325278);
let eu = new ed.Vy("InputWatcher");
class e_ {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new v.Ep();
    inputDetected = void 0;
    lastUpdateTime = performance.now();
    constructor(e, t) {
        (this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(D.bg.Silence, this.handleSilence);
    }
    reset() {
        this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0);
    }
    fetchInputDeviceOSConfig = async () => {
        if ((0, eo.uF)() && O().satisfies(M.A?.os.release, ec.PH))
            try {
                let e = this.mediaEngineStore.getInputDeviceId(),
                    t = this.mediaEngineStore.getInputDevices()[e]?.guid;
                if (null != t && "" !== t) {
                    let e = n(19575).Ay;
                    await e.ensureModule("discord_voice");
                    let [i, r] = await Promise.all([
                        this.mediaEngine.getDeviceOSVolume(t),
                        this.mediaEngine.getDeviceOSMuted(t),
                    ]);
                    b.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
                }
            } catch (e) {
                eu.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            eu.info("Silence:", e),
                (this.inputDetected = t),
                (this.lastUpdateTime = performance.now()),
                e && (await this.fetchInputDeviceOSConfig()),
                b.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                });
        });
    };
}
let eE = (0, Y.mj)({
        kind: "user",
        name: "2026-07-krisp-cpu-disablement",
        defaultConfig: { consecutiveFailures: 1 },
        variations: { 1: { consecutiveFailures: 3 }, 2: { consecutiveFailures: 5 }, 3: { consecutiveFailures: 10 } },
    }),
    eA = (0, Y.mj)({
        kind: "user",
        name: "2026-04-krisp-v9-ios",
        defaultConfig: {
            models: [
                { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
                { name: "small_NC", maxSampleRate: 16e3, filename: "krisp-nc-o-lite-v1.kef" },
                { name: "full_NC", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7-fp16.kef" },
            ],
        },
        variations: {
            1: {
                models: [
                    { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
                    {
                        name: "small_NC_non_optimized",
                        maxSampleRate: 16e3,
                        filename: "c6.f.s.laughter.da1785_non_optimized.kef",
                    },
                    { name: "full_NC_non_optimized", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7.kef" },
                ],
            },
        },
    }),
    eh = (0, er.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var eI = n(140175);
let ef = (0, Y.mj)({
    name: "2026-07-mkl-zen-cpu-dispatch-override",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function ep(e) {
    return ef.getConfig({ location: e });
}
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
let eT = (0, er.Ay)({
    kind: "user",
    name: "2026-07-nvenc-reconstructed-frames",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var em = n(801644);
let eg = (0, Y.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    eS = (0, Y.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    eN = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var eC = n(625075);
let eR = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eO = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eL = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eD = (0, Y.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ey = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function ev(e) {
    return ey.getConfig({ location: e });
}
let eb = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eM = n(75076),
    eP = n(91777),
    eU = n(559633),
    ew = n(205106),
    eG = n(174459),
    ex = n(652215);
let ek = new ed.Vy("AudioEffects");
async function eF(e, t, n) {
    if (!(0, eo.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            b.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eG.default.track(ex.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        ek.error("Failed to probe audio effects for device", e),
            eG.default.track(ex.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eV = n(967347),
    eB = n(617617),
    eH = n(125325),
    ej = n(499156),
    eW = n(738566),
    eY = n(353835),
    eK = n(927813),
    e$ = n(38405),
    ez = n(350535),
    eZ = n(280450),
    eq = n(131319),
    eX = n(347481),
    eQ = n(734057),
    eJ = n(763827),
    e0 = n(287809),
    e1 = n(117549),
    e2 = n(765682);
let e3 = {
    enabled: !0,
    spatialBlend: 1,
    reflectionsEnabled: !1,
    roomSize: 25,
    mode: "arc",
    spread: 2,
    arcAngle: 20,
    gridColumns: 3,
    gridSpacing: 1,
    buckets: 10,
    listenerHeight: 0.15,
    distance: 5,
};
var e4 = n(355097),
    e5 = n(621380),
    e6 = n(731854),
    e7 = n(375708);
let e8 = new I.A("MediaEngineStore"),
    e9 = "MediaEngineStore",
    te = { left: 1, right: 1 },
    tt = 5 * eK.A.Millis.SECOND,
    tn = 2 * eK.A.Millis.SECOND,
    ti = 30 * eK.A.Millis.SECOND,
    tr = +eK.A.Millis.MINUTE,
    ta = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    ts = 0;
var tl =
    (((A = {}).WEBCAM = "WEBCAM"),
    (A.INTEGRATED = "INTEGRATED"),
    (A.BLUETOOTH = "BLUETOOTH"),
    (A.AIRPLAY = "AIRPLAY"),
    (A.HEADSET = "HEADSET"),
    A);
function to() {
    return {
        mode: ex.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: f.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: 0.5,
            vadLeading: 5,
            vadTrailing: 25,
            delay: 20,
            shortcut: [],
            updatedAt: void 0,
        },
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: !1,
        deaf: !1,
        echoCancellation: !0,
        noiseSuppression: !1,
        automaticGainControl: !0,
        noiseCancellation: !0,
        bypassSystemInputProcessing: !0,
        hardwareEnabledVersion: 0,
        silenceWarning: !0,
        attenuation: 0,
        attenuateWhileSpeakingSelf: !1,
        attenuateWhileSpeakingOthers: !0,
        localMutes: {},
        disabledLocalVideos: {},
        videoToggleStateMap: {},
        localVolumes: {},
        audioMixerSettings: { ...e3 },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: e6.Hz,
        outputVolume: e6.Hz,
        inputDeviceId: e6.dx,
        outputDeviceId: e6.dx,
        videoDeviceId: e6.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tu.supports(e6.O5.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        openH264Enabled: !0,
        sidechainCompression: !0,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: !0,
        activeInputProfile: null,
    };
}
let td = {
        [e5.m.CUSTOM]: {},
        [e5.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [e5.m.STUDIO]: {
            mode: ex.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tc = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    tu = (0, D.hB)((0, D.WI)());
function t_(e) {
    return eC.k.getConfig({ location: e }).videoEnabled;
}
e8.enableNativeLogger(!0);
let tE = {},
    tA = new Set([e6.x.DEFAULT]),
    th = tu.supports(e6.O5.AUTO_ENABLE),
    tI = !1,
    tf = e6.x.STREAM,
    tp = 0,
    tT = !1,
    tm = performance.now(),
    tg = null,
    tS = { [e6.dx]: nb("No Input Devices") },
    tN = { [e6.dx]: nb("No Output Devices") },
    tC = { [e6.dx]: nb("No Video Devices") },
    tR = new v.Ep(),
    tO = !1,
    tL = !1,
    tD = !1,
    ty = !1,
    tv = !1,
    tb = e6.qe,
    tM = e6.qe,
    tP = !1,
    tU = !1,
    tw = new v.Ep(),
    tG = !1,
    tx = !1,
    tk = !1,
    tF = !1,
    tV = new v.Ep(),
    tB = !1,
    tH = !1,
    tj = !1,
    tW = !1,
    tY = [],
    tK = !1,
    t$ = null,
    tz = !1,
    tZ = !1,
    tq = !1,
    tX = !1,
    tQ = {},
    tJ = null,
    t0 = null,
    t1 = !1;
eP.A.hasPermission(e2.iL.AUDIO, { showAuthorizationError: !1 }),
    eP.A.hasPermission(e2.iL.CAMERA, { showAuthorizationError: !1 });
let t2 = new Set(),
    t3 = !1,
    t4 = new Set(),
    t5 = {},
    t6 = null,
    t7 = null,
    t8 = null,
    t9 = !0,
    ne = !1,
    nt = new v.Ep(),
    nn = !1,
    ni = !1,
    nr = !1,
    na = !1,
    ns = {};
function nl(e) {
    return (function (e) {
        let { location: t } = e;
        return es.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function no() {
    if (
        "u" < typeof window ||
        "u" < typeof navigator ||
        !("mediaCapabilities" in navigator) ||
        null == navigator.mediaCapabilities
    )
        return !1;
    try {
        let e = await navigator.mediaCapabilities.decodingInfo({
            type: "file",
            video: {
                contentType: 'video/mp4; codecs="hev1.1.6.L153.B0"',
                width: 1920,
                height: 1080,
                bitrate: 2e6,
                framerate: 30,
            },
        });
        return e.supported && e.powerEfficient;
    } catch {
        return !1;
    }
}
function nd() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT,
        t = tE[e];
    return null == t && ((t = to()), (tE[e] = t)), t;
}
function nc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT,
        t = nd(e),
        n = td[t.activeInputProfile ?? e5.m.CUSTOM],
        i = nz() ? ns : tc,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function nu(e) {
    let t = nc(e.context),
        n = t.mode;
    e.context === e6.x.DEFAULT && (0, eI.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = ej.A.getConfig({ location: "setInputMode" }),
        r = i && n === ex.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nz(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function n_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.Hz;
    return S().clamp(e, 0, t);
}
function nE(e) {
    let t = nc(e.context),
        n = !th || t.mute || t.deaf;
    switch (e.context) {
        case e6.x.DEFAULT:
            n = n || tO || tL || tD || !eP.A.didHavePermission(e2.iL.AUDIO);
            break;
        case e6.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e6.x.DEFAULT && U.A.updateNativeMute();
}
function nA() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tv,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && nc().videoHook && P.c1(n.desktopSource.sourcePid),
            tu.setGoLiveSource(null, tf)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tu.setGoLiveSource(null, tf),
        tv || e)
    ) {
        let t = nc().videoDeviceId;
        tv && t === e6.dx && tM === e6.dx && tb !== e6.qe ? (t = tb) : (tM = t),
            (tb = (tv = e) ? nG(tC, t) : e6.qe),
            tu.setVideoInputDevice(tb);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nl("MediaEngineStore go live"),
                r = nc().videoHook,
                a = nC(),
                s = a ? ((0, f.isWindows)() && O().satisfies(M.A?.os.release, ec.fG) ? ec.zl : ec.eg) : 0,
                l = !1;
            (0, f.isWindows)() &&
                s >= ec.zl &&
                (l =
                    !0 === t7
                        ? eL.getConfig({ location: "updateVideo" }).enabled
                        : eO.getConfig({ location: "updateVideo" }).enabled);
            let o = !r || !ei.getConfig({ location: "updateVideo" }).enabled,
                d = r && eR.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: u } = eS.getConfig({ location: "updateVideo" });
            tu.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useHookFramePacer: o,
                        useGraphicsCapture: a,
                        useGraphicsCaptureApiLevel: s,
                        useCaptureDeviceForEncode: (0, f.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: nR(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: tt,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? ea.definition.defaultConfig : ea.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: d,
                        minCaptureWidth: c,
                        minCaptureHeight: u,
                    },
                    quality: e,
                },
                tf,
            );
        }
        null != t.cameraSource &&
            tu.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tf,
            );
    }
}
function nh(e) {
    switch (e) {
        case e6.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case e6.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case e6.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case e6.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case e6.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case e6.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case e6.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case e6.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case e6.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case e6.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case e6.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case e6.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case e6.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nI = new Set([
    e6.CO.KRISP_INIT_ERROR,
    e6.CO.KRISP_INIT_ERROR_NATIVE,
    e6.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e6.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e6.CO.KRISP_INIT_ERROR_UNSIGNED,
    e6.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e6.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e6.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e6.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e6.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nf(e) {
    if (
        (e8.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nh(e) }),
        eG.default.track(ex.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nI.has(e))
    ) {
        tW = !0;
        return;
    }
    e === e6.CO.KRISP_VAD_CPU_OVERUSE
        ? b.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tz = !0), b.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function np(e, t) {
    let n = t === e6.$C.LIVE;
    e8.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, V.QW)({
                type: V.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e6.kv.UNSUPPORTED:
                            return V.B6.VideoBackgroundUnsupported;
                        case e6.kv.INIT_FAILED:
                            return V.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function nT(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nm(e, t) {
    e.setAutomaticGainControl(nT(t));
}
function ng(e, t) {
    let n = (0, ew.A)(t, i.getSystemMicrophoneMode());
    n !== t && e8.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nS() {
    let e = nc(),
        t = e.inputDeviceId,
        n = eX.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eX.A.hasNoiseSuppression(t) || e.noiseSuppression,
        { maxSampleRateHz: a, maxChannelCount: s } = (function (e, t) {
            let { location: n } = e;
            if (!ee("any", t)) return { maxSampleRateHz: 0, maxChannelCount: 0 };
            let i = (function (e) {
                let { location: t } = e;
                return J.getConfig({ location: t });
            })({ location: n });
            return ee(i.condition, t)
                ? { maxSampleRateHz: 32e3 * !!i.capSampleRate, maxChannelCount: +!!i.capChannelCount }
                : { maxSampleRateHz: 0, maxChannelCount: 0 };
        })(
            { location: "updateVoiceFidelityCaps" },
            {
                krispEnabled: (0, ew.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    tu.setVoiceSampleRateCap(a), tu.setVoiceChannelCountCap(s);
}
function nN(e) {
    let t = nc(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eX.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eX.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nm(e, eX.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        ng(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(nj(t.audioMixerSettings)),
        nS(),
        (0, f.isWindows)() && O().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === e6.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return eg.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nU(tS[i.getInputDeviceId()]) || nU(tN[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, f.isDesktop)()) {
        let { consecutiveFailures: t } = (function (e) {
            let { location: t } = e;
            return eE.getConfig({ location: t });
        })({ location: "updateConnectionVoiceProcessing" });
        e.setNoiseCancellationCpuDisablement(t);
    }
    if ((0, f.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nC() {
    return (0, f.isWindows)() && O().satisfies(M.A?.os.release, ec.yg);
}
function nR() {
    return (0, f.isMac)() && tu.supports(e6.O5.SCREEN_CAPTURE_KIT) && O().satisfies(M.A?.os.release, ec.e);
}
function nO() {
    return (
        (0, f.isWindows)() &&
        tu.supports(e6.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tu.supports(e6.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nL() {
    return tu.supports(e6.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = nd(t);
    return Object.assign(i, e), !__OVERLAY__ && n && y.w.set(e9, tE), i;
}
function ny() {
    let e = nc();
    nk(e.inputDeviceId),
        tu.setAudioOutputDevice(e.outputDeviceId),
        nA(),
        tu.setInputVolume(e.inputVolume),
        tu.setOutputVolume(e.outputVolume),
        tu.setAecDump(e.aecDumpEnabled),
        tu.setSidechainCompression(e.sidechainCompression),
        tu.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tu.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && p.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        nW(e.audioMixerSettings);
}
function nv() {
    th || tu.enable().then(() => b.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nb(e) {
    return { id: e6.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nM(e, t) {
    return (
        null !=
        t.find(
            (t) =>
                (null != t.containerId && t.containerId === e.containerId) ||
                (null != t.hardwareId && t.hardwareId === e.hardwareId) ||
                (null != t.originalId && t.originalId === e.originalId),
        )
    );
}
let nP = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nU(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function nw(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nb(i);
        return { [e.id]: e };
    }
    return S()(r)
        .map((t) => ({
            id: t.id,
            index: t.index,
            name: t.name,
            disabled: !1,
            facing: t.facing,
            guid: t.originalId,
            hardwareId: t.hardwareId,
            containerId: t.containerId,
            effects: t.effects,
            formFactor: (function (e, t) {
                let { inputDevices: n, outputDevices: i, videoDevices: r } = t;
                switch (!0) {
                    case "videoinput" === e.type:
                    case nM(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nP.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nM(e, i):
                    case "audiooutput" === e.type && nM(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
        }))
        .keyBy("id")
        .value();
}
function nG(e, t) {
    let n = e[t] ?? e[e6.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nx(e) {
    if (!(0, f.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tS[e];
    t?.guid != null && eF(t.guid, e, tu);
}
function nk(e) {
    tu.setAudioInputDevice(e), nx(e);
}
function nF(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nV() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eB.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === e4.W.USER ? e6.x.DEFAULT : e6.x.STREAM,
            r = i === e6.x.STREAM ? e6.Cn : e6.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = nc(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eH.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                tu.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    tu.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nD({ localMutes: s, localVolumes: l }, i);
    }
}
function nB(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    e8.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eY.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eY.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = a),
                (0, f.isWindows)() &&
                    n > 1 &&
                    P.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            j.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            b.h.wait(() => {
                                b.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return null != e && nc().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function nH() {
    let e = e6.x.DEFAULT,
        { videoToggleStateMap: t } = nc(e);
    for (let [e, n] of Object.entries(t)) n === ex.bb8.AUTO_PROBING && delete t[e];
    nD({ videoToggleStateMap: t }, e, !1);
}
function nj(e) {
    let { enabled: t } = eW.A.getConfig({ location: "MediaEngineStore" });
    return !0 === e.enabled && t && tu.supports(e6.O5.SPATIAL_AUDIO);
}
function nW(e) {
    (tX = nj(e)), tu.setAudioMixerOptions({ ...e, enabled: tX });
}
function nY(e) {
    let t = nc(),
        n = tu.getAudioSubsystem(),
        r = tu.getAudioLayer(),
        a = nG(tS, t.inputDeviceId),
        s = tS[a]?.name,
        l = (0, ew.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eG.default.track(ex.HAw.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e,
        bypass_system_input_processing: t.bypassSystemInputProcessing,
        audio_subsystem: n,
        audio_layer: r,
        input_device: s,
        effective_noise_cancellation: l,
    });
}
function nK() {
    let e = nc(),
        t = t4.size > 0,
        n = e.inputDeviceId,
        i = eX.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eX.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nT(eX.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    tu.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        nS();
}
async function n$() {
    if (!tu.supports(e6.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((nr = !0), (ni = tu.supports(e6.O5.GAMESCOPE_CAPTURE)));
}
function nz() {
    return (tj || !1) && !tW;
}
async function nZ() {
    try {
        await p.Ay.ensureModule("discord_krisp");
        let e = p.Ay.requireModule("discord_krisp");
        (tj = !0),
            (c = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            (0, f.isWindows)() && e.setMklZenOverrideEnabled?.(ep("setupKrispNativeModule").enabled),
            e.getNcModels?.().then((e) => {
                (tY = e), i.emitChange();
            }),
            i.emitChange(),
            await p.Ay.ensureModule("discord_voice");
        let t = p.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e8.warn(`Failed to load Krisp module: ${t.message}`), e$.A.captureException(t);
        let e = e6.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e6.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nh(e) }),
            eG.default.track(ex.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tH = !1;
    }
}
async function nq() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(ta);
        if (null === i) return void e8.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await p.Ay.downloadOpenH264(
                ta,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e8.log("OpenH264 download status", e);
                },
            );
            e8.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            e8.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eG.default.track(ex.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await p.Ay.cleanupUnusedOpenH264Files([a]);
            e8.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e8.error("OpenH264 download failed", e);
    }
}
function nX(e) {
    e === e6.rB.AUTOMATIC
        ? (nD({ automaticAudioSubsystem: !0 }), nQ())
        : (nD({ automaticAudioSubsystem: !1 }), tu.setAudioSubsystem(e));
}
function nQ() {
    tu.queueAudioSubsystem(e6.rB.EXPERIMENTAL);
}
function nJ(e) {
    let { section: t } = e;
    return t === ex.nc_.VOICE && nv(), !1;
}
class n0 extends L.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new e_(tu, this)),
            tR.start(ti, () => {
                e8.error("Device enumeration timed out"), eG.default.track(ex.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            tu.on(D.bg.Connection, (e) => {
                let t;
                nK(), nu(e), nE(e), nN(e);
                let n = nc();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(e6.fd.H265_HARDWARE_ONLY, !0),
                          (null != t0
                              ? t0
                              : "u" > typeof window
                                ? (t0 = no().then((e) => ((tJ = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e6.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(e6.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e6.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? eh.definition.defaultConfig : eh.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e6.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e6.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e6.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = w.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e6.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e6.x.STREAM)
                ) {
                    let t = nF(tN);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(e6.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e6.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e6.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(e6.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e6.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e6.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                O().satisfies(window?.DiscordNative?.os.release, e6.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) {
                    let { enabled: t } = Z.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(e6.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e6.fd.SIGNAL_AV1_DECODE, !0);
                } else
                    ((0, f.isIOS)() || (0, f.isAndroid)()) &&
                        (e.setExperimentFlag(e6.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e6.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, f.isWeb)()) {
                    let { enabled: t } = et.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e6.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, f.isWindows)() &&
                    t6?.startsWith("AMD") &&
                    ev("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e6.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    t6?.startsWith("Intel") &&
                    !0 === t7 &&
                    1 === t8 &&
                    eb.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e6.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e6.fd.INTEL_GPU_DISABLE, !0)),
                (0, f.isWindows)() &&
                    t6?.startsWith("Intel") &&
                    !0 === t7 &&
                    1 === t8 &&
                    eD.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e6.fd.INTEL_GPU_DISABLE, !0),
                (0, f.isWindows)() &&
                    t6?.startsWith("Qualcomm") &&
                    ev("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e6.fd.WMF_GPU_ENCODE, !0),
                tu.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, x.A)(i) && e.setClipsKeyFrameInterval(e6.X1),
                (n = nc(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eZ.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eZ.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(D.yq.Speaking, (t, n, i, r) => {
                    b.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e6.x.DEFAULT &&
                        ((tU = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tU;
                            (tU = !0),
                                e && i.emitChange(),
                                tw.start(tn, () => {
                                    (tU = !1), i.emitChange();
                                });
                        })),
                    e.on(D.yq.DesktopSourceEnd, (t, n) => {
                        b.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(D.yq.InteractionRequired, (e) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(D.yq.VideoHookInitialize, (e, t, n, i, r, s) => {
                        a?.desktopSource != null &&
                            eG.default.track(ex.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, W.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, nf),
                    e.on(D.yq.VoiceActivityDetectorError, nf),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        eG.default.track(ex.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eq.A.bitrate),
                    e.applyVideoQualityMode(e1.A.mode),
                    (0, f.isWindows)() &&
                        tu.supports(e6.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        tu.setAsyncVideoInputDeviceInit(!0);
            }),
            tu.on(D.bg.DeviceChange, (e, t, n) => {
                tR.stop(),
                    b.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            tu.on(D.bg.VolumeChange, (e, t) => {
                b.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            tu.on(D.bg.DesktopSourceEnd, (e, t) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            tu.on(D.bg.AudioPermission, (e) => {
                (t1 = !0), b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            tu.on(D.bg.VideoPermission, (e) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            tu.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eY.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e8.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await eG.default.track(
                        ex.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e8.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e8.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    y.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            tu.on(D.bg.VideoInputInitialized, (e) => {
                eG.default.track(ex.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eK.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eJ.A.getMediaSessionId(),
                    rtc_connection_id: eJ.A.getRTCConnectionId(),
                });
            }),
            tu.on(D.bg.AudioInputInitialized, (e) => {
                eG.default.track(ex.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eK.A.Millis.SECOND),
                    rtc_connection_id: eJ.A.getRTCConnectionId(),
                });
            }),
            tu.on(D.bg.ClipsRecordingRestartNeeded, () => {
                b.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            tu.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = tp < 3;
                (tp += 1),
                    b.h.wait(() => {
                        b.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? b.h.dispatch({ type: "CLIPS_RESTART" })
                                : e8.warn(
                                      `Clips init failure budget exhausted (${tp} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            tu.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== tp && (e8.info(`Clips bridge reported healthy; resetting restart budget (was ${tp}).`), (tp = 0));
            }),
            tu.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                tT !== e && (e8.info(`Clips recorder ready changed: ${e}`), (tT = e));
            }),
            tu.on(D.bg.ClipsBridgeIdleShutdown, () => {
                e8.info("Clips bridge idle shutdown");
            }),
            tu.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && P.c1(t), (s = null));
            }),
            tu.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            tu.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            tu.on(D.bg.NativeScreenSharePickerError, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            tu.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                eG.default.track(ex.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            tu.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            tu.on(D.bg.ConnectionStats, (e) => {
                b.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: ts++,
                            context: n.context,
                        };
                    }),
                });
            }),
            tu.on(D.bg.VoiceProcessingError, nf),
            tu.on(D.bg.VideoFilterError, np),
            tu.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = n1(e);
                null !== t && eG.default.track(ex.HAw.VOICE_QUEUE_METRICS, t);
            }),
            tu.setOnVideoContainerResized((e, t, n) => {
                b.h.wait(() =>
                    b.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            n$(),
            l.reset(),
            (0, eV.w)().then((e) => {
                null != e && ((t6 = e.gpu_brand), (t7 = e.has_intel_hybrid_igpu), (t8 = e.gpu_count));
            }),
            tu.on(D.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), tu.eachConnection(nN), i.emitChange();
            }),
            null != (e = y.w.get("audio")) && (y.w.set(e9, { [e6.x.DEFAULT]: e }), y.w.remove("audio")),
            (tE = y.w.get(e9) ?? {}),
            S().each(tE, (e) => {
                S().defaultsDeep(e, to()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, ez.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    tu.supports(e6.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 3 &&
                        ((e.audioMixerSettingsVersion = 3), (e.audioMixerSettings = { ...e3 })),
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            ny(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tH && !tj
                ? ((tH = !0), nZ())
                : (0, f.isWeb)() && tu.supports(e6.O5.NOISE_CANCELLATION)
                  ? ((tj = !0), i.emitChange())
                  : (0, f.isWeb)() && nD({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nq(),
            nH(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !na)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    p.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = e6.tl;
                let n = n1(e);
                null !== n && eG.default.track(ex.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, e6.tl);
            }
            (na = !0), setTimeout(t, e6.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === tg &&
            tu
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tg = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e8.error("Failed to parse codec survey", e), (tg = !1);
                    }
                })
                .catch((e) => {
                    e8.error("Failed to get codec survey", e), (tg = !1);
                })
                .finally(() => {
                    b.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (t5 = {
                [e6.O5.VIDEO]: tu.supports(e6.O5.VIDEO),
                [e6.O5.DESKTOP_CAPTURE]: tu.supports(e6.O5.DESKTOP_CAPTURE),
                [e6.O5.HYBRID_VIDEO]: tu.supports(e6.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eZ.default, eq.A, eX.A, eQ.A, G.Ay, B.A, eJ.A, j.Ay, eB.A, e0.default, e1.A);
    }
    supports(e) {
        return (e !== e6.O5.VIDEO || !!t_("MediaEngineStore.supports")) && tu.supports(e);
    }
    supportsInApp(e) {
        return (e !== e6.O5.VIDEO || !!t_("MediaEngineStore.supportsInApp")) && (t5[e] || tu.supports(e));
    }
    isSupported() {
        return tu.supported();
    }
    isNoiseSuppressionSupported() {
        return tu.supports(e6.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nz();
    }
    isNoiseCancellationError() {
        return tz;
    }
    isAutomaticGainControlSupported() {
        return tu.supports(e6.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nL() && (tu.supports(e6.O5.LEGACY_AUDIO_SUBSYSTEM) || tu.supports(e6.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tu.supports(e6.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tu.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nz();
    }
    isAecDumpSupported() {
        return tu.supports(e6.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tu.supports(e6.O5.VIDEO) && tu.supports(e6.O5.SIMULCAST);
    }
    getAecDump() {
        return nc().aecDumpEnabled;
    }
    getMediaEngine() {
        return tu;
    }
    getVideoComponent() {
        return tu.Video;
    }
    getCameraComponent() {
        return tu.Camera;
    }
    getKrispSuppressionLevel() {
        return u ?? 100;
    }
    getKrispEnableStats() {
        return tK;
    }
    isEnabled() {
        return th;
    }
    isMute() {
        return this.isSelfMute() || tO;
    }
    isDeaf() {
        return this.isSelfDeaf() || ty;
    }
    isServerMute() {
        return tO;
    }
    isServerDeaf() {
        return ty;
    }
    getAudioMixerSettings() {
        return nc().audioMixerSettings;
    }
    isSpatialAudioEnabled() {
        return !0 === this.getAudioMixerSettings().enabled;
    }
    isSpatialAudioActive() {
        return tX;
    }
    hasContext(e) {
        return null != tE[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return e === e6.x.DEFAULT && tL;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return (
            !this.isEnabled() ||
            nc(e).mute ||
            !eP.A.didHavePermission(e2.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e6.x.DEFAULT && tD)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tP;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tP = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT,
            t = ne && "voice_isolation" !== this.getSystemMicrophoneMode() && nc(e).mode === ex.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eX.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t9;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return !this.isSupported() || nc(e).deaf;
    }
    isVideoEnabled() {
        return tv && tx;
    }
    isVideoAvailable() {
        return Object.values(tC).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tx;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.STREAM;
        return tf === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.STREAM;
        return tf === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT;
        return e !== eZ.default.getId() && (nc(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tu.supports(e6.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT;
        return nc(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT;
        return nc(t).videoToggleStateMap[e] ?? ex.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT;
        return t === e6.x.DEFAULT && t2.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return e === e6.x.DEFAULT && t2.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tZ;
    }
    isNativeAudioPermissionReady() {
        return t1;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tf;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tm;
    }
    isH264MfDecodeAvailable() {
        return tg;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT,
            n = nc(t).localPans[e];
        return null != n ? n : te;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT,
            n = t === e6.x.STREAM ? e6.Cn : e6.Hz,
            i = nc(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return nc().inputVolume;
    }
    getOutputVolume() {
        return nc().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return nc(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return nc(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(tE, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === ex.TBI.PUSH_TO_TALK && tA.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nG(tS, nc().inputDeviceId);
    }
    getOutputDeviceId() {
        return nG(tN, nc().outputDeviceId);
    }
    getVideoDeviceId() {
        return nG(tC, nc().videoDeviceId);
    }
    getInputDevices() {
        return tS;
    }
    getOutputDevices() {
        return tN;
    }
    getVideoDevices() {
        return tC;
    }
    getEchoCancellation() {
        let e = nc();
        return eX.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tu.supports(e6.O5.SIDECHAIN_COMPRESSION) && nc().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return nc().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return nc().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tJ && tJ;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && nc().openH264Enabled;
    }
    getLoopback() {
        return t4.size > 0;
    }
    getLoopbackReasons() {
        return t4;
    }
    getNoiseSuppression() {
        let e = nc();
        return eX.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = nc();
        return eX.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return nc().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return nc().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return nc().silenceWarning;
    }
    getDebugLogging() {
        return tu.getDebugLogging();
    }
    getQoS() {
        return nc().qos;
    }
    getAttenuation() {
        return nc().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return nc().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return nc().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nO() && nc().automaticAudioSubsystem ? e6.rB.AUTOMATIC : tu.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tu.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return nc().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === e5.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return nc(e);
    }
    getState() {
        return {
            settingsByContext: tE,
            inputDevices: tS,
            outputDevices: tN,
            appSupported: t5,
            krispModuleLoaded: tj,
            krispFatalError: tW,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: tf,
        };
    }
    getInputDetectedThisConnection() {
        return tk;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tF;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        return f.isPlatformEmbedded || this.getMode() !== ex.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tu.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tI;
    }
    getVideoHook() {
        return nc().videoHook;
    }
    supportsVideoHook() {
        return tu.supports(e6.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = nc().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tu.supports(e6.O5.EXPERIMENTAL_SOUNDSHARE) && O().satisfies(M.A?.os.release, ec.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && tu.supports(e6.O5.SOUNDSHARE) && O().satisfies(M.A?.os.release, ec.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = nc().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tu.supports(e6.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return nr;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e6.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eT.definition.defaultConfig : eT.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === e6.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eN.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return ni;
    }
    getSpeakingWhileMuted() {
        return tU;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tY;
    }
    getKrispVadActivationThreshold() {
        return nc().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return nn;
    }
    setHasActiveCallKitCall(e) {
        nn = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? tu.supports(e6.O5.SOUNDSHARE) && O().satisfies(M.A?.os.release, ec.P$) && nR()
            : (0, f.isWindows)()
              ? tu.supports(e6.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && tu.supports(e6.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tQ[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT,
            t = this.supports(e6.O5.VIDEO)
                ? [{ rid: "100", type: e === e6.x.DEFAULT ? e6.mI.VIDEO : e6.mI.SCREEN, quality: e6.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e6.x.DEFAULT &&
                en.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: e6.mI.VIDEO, quality: e6.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return tu.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tq &&
            ((tq = !0),
            (0, f.isWeb)() &&
                tu.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    e8.warn("DAVE preload failed:", e), e$.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return tu.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return tT;
    }
    isClipsRecordingReadySignalSupported() {
        return tu.supports(e6.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return t6;
    }
}
function n1(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = { metrics_period_ms: e.periodMs, total_tasks: 0, total_exec_time_ns: 0, queue_name: e.queueName };
    (t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)),
        (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        i = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let i = n[e];
            (t[`slow_task_${e}_name`] = i.name), (t[`slow_task_${e}_longest_exec_time_ns`] = i.longestExecTimeNs);
        }
    for (let e = 0; e < 3; e++)
        if (e < i.length) {
            let n = i[e];
            (t[`delayed_task_${e}_name`] = n.name),
                (t[`delayed_task_${e}_longest_queue_time_ns`] = n.longestQueueTimeNs);
        }
    return (t.full_task_report = JSON.stringify(n)), t;
}
let n2 = (i = new n0(b.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && nA(r, null), null != t || null == n)) {
            tB = !1;
            return;
        }
        if (tB) return;
        tB = !0;
        let a = nc();
        (a.mute || a.deaf) && (nD({ deaf: !1, mute: !1 }), tu.eachConnection(nE));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tO = t.mute || t.suppress), (ty = t.deaf), tu.eachConnection(nE);
                let e = null != t.guildId && null != t.channelId && null != t$ && t$ !== t.channelId,
                    n = !tB && null == t.channelId;
                return nA(!e && !n && tv), (t$ = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eZ.default.getId() || null != eJ.A.getChannelId() || nA(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tO = !1), (ty = !1);
        let t = nc();
        nO() && (nL() ? nX(e6.rB.AUTOMATIC) : t.automaticAudioSubsystem && nQ()),
            tu.supports(e6.O5.OFFLOAD_ADM_CONTROLS) && tu.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                el.getConfig({ location: "handleConnectionOpen" }).enabled &&
                tu.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, f.isWindows)() &&
                tj &&
                p.Ay.requireModule("discord_krisp").setMklZenOverrideEnabled?.(ep("handleConnectionOpen").enabled),
            (0, f.isIOS)() && (tu.setNcModels?.(eA.getConfig({ location: "setupKrisp" }).models), i.emitChange()),
            nx(t.inputDeviceId),
            nV();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, f.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case ex.S7L.CONNECTING:
                nv();
                break;
            case ex.S7L.RTC_CONNECTING:
                (tF = !1), (o = void 0), (d = void 0), (tk = !1), (ne = !1), nt.stop(), tV.stop(), l.reset();
                break;
            case ex.S7L.RTC_CONNECTED:
                nA();
                break;
            case ex.S7L.DISCONNECTED:
                (ns = {}),
                    (function () {
                        if (0 === t2.size) return;
                        let e = e6.x.DEFAULT,
                            { disabledLocalVideos: t } = nc(e);
                        t2.forEach((n) => {
                            m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                tu.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            t2.clear(),
                            nD({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nH();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tL = t), tu.eachConnection(nE);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = nc(t);
        if (t === e6.x.DEFAULT && (eP.A.requestPermission(e2.iL.AUDIO), tD)) return !1;
        (i = !r && !i) || (r = !1), n || (tP = !0), nD({ mute: i, deaf: r }, t), tu.eachConnection(nE);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nD({ mute: n }, t), i || (tP = !0), tu.eachConnection(nE);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nD({ deaf: !nc(t).deaf }, t), tu.eachConnection(nE);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eZ.default.getId()) return;
        let { localMutes: i } = nc(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nD({ localMutes: i }, t),
            tu.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === ex.bb8.DISABLED,
            { disabledLocalVideos: l } = nc(t),
            o = l[n] ?? !1,
            d = t2.has(n),
            c = i === ex.bb8.AUTO_ENABLED || i === ex.bb8.MANUAL_ENABLED;
        e8.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled.");
        let u = s !== o,
            _ = t === e6.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e8.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = nc(t);
        if (
            (h[n] === ex.bb8.AUTO_PROBING &&
                i === ex.bb8.AUTO_ENABLED &&
                (0, eM.A)(n, s ? e6.Al.AUTO_DISABLE : e6.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nD({ videoToggleStateMap: h }, t, r),
            i === ex.bb8.AUTO_PROBING
                ? eJ.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eJ.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            t3 ||
                (e8.info(`isAutoDisableAllowed=${t3} - disabling VideoHealthManager`),
                eJ.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !t3)) return;
            (0, eM.A)(n, s ? e6.Al.AUTO_DISABLE : e6.Al.AUTO_ENABLE, c), s ? t2.add(n) : t2.delete(n);
        } else
            A &&
                (d && !s
                    ? (e8.info("disallowing auto-disable for this session because of manual override by user"),
                      (t3 = !1),
                      eJ.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eM.A)(n, e6.Al.MANUAL_REENABLE, c))
                    : (0, eM.A)(n, s ? e6.Al.MANUAL_DISABLE : e6.Al.MANUAL_ENABLE, c));
        _ && !s && t2.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nD({ disabledLocalVideos: l }, t, r),
            tu.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eZ.default.getId()) return;
        let r = t === e6.x.STREAM ? e6.Cn : e6.Hz,
            { localVolumes: a } = nc(t);
        i === r ? delete a[n] : (a[n] = i),
            nD({ localVolumes: a }, t),
            tu.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nD({ audioMixerSettings: n }, t), nW(n), tu.eachConnection((e) => e.setSpatialAudioEnabled(tX), e6.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = nc(t);
        (a[n] = { left: i, right: r }), nD({ localPans: a }, t), tu.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nD({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), tu.eachConnection(nu);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nD({ inputVolume: n_(t) }), tu.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nD({ outputVolume: t }), tu.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nG(tS, t)),
            (tm = performance.now()),
            nD({ inputDeviceId: t }),
            nk(t),
            tu.eachConnection(nN),
            (o = void 0),
            (d = void 0),
            nt.stop(),
            (ne = !1);
        let { resetSilenceWarningOnDeviceChange: n } = em.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tk = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nD({ outputDeviceId: (t = nG(tN, t)) }), tu.setAudioOutputDevice(t), tu.eachConnection(nN);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nD({ activeInputProfile: t });
        let n = nc();
        tu.eachConnection((e) => {
            nu(e), nN(e);
        }),
            tu.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nK();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nD({ echoCancellation: e.enabled }),
            n = eX.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        tu.eachConnection((e) => e.setEchoCancellation(n)), nK(), nY(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nD({ sidechainCompression: e.enabled })), tu.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nD({ sidechainCompressionStrength: e.strength });
        tu.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? t4.add(n) : t4.delete(n), nK();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nD({ noiseSuppression: e.enabled }),
            n = eX.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        tu.eachConnection((e) => e.setNoiseSuppression(n)), nK(), nY(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nD({ automaticGainControl: e.enabled });
        tu.eachConnection((e) => nm(e, t.automaticGainControl)), nK(), nY(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nD({ noiseCancellation: e.enabled });
        tu.eachConnection((e) => ng(e, t.noiseCancellation)), nK(), nY(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eU.A.setKrispModelOverride(e.model), (_ = e.model), nK();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nD({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        tu.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), eU.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((tK = e.enabled), tu.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nD({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nD({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nD({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nD({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        tu.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nD({ qos: t }), tu.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tS;
        if (
            ((tS = nw(e, { deviceType: e6.oh.AUDIO_INPUT, defaultName: e7.intl.string(e7.t["/QIjDA"]) })),
            !S().isEqual(tS, t))
        ) {
            let e = nc();
            nk(nG(tS, e.inputDeviceId)), tu.eachConnection(nN);
        }
        !(function (e) {
            let t = tN;
            if (
                ((tN = nw(e, { deviceType: e6.oh.AUDIO_OUTPUT, defaultName: e7.intl.string(e7.t.xlUg0v) })),
                !S().isEqual(tN, t))
            ) {
                let e = nc(),
                    n = nG(tN, e.outputDeviceId);
                tu.setAudioOutputDevice(n), tu.eachConnection(nN);
                let i = nF(t),
                    r = nF(tN);
                i !== r &&
                    tu.eachConnection((e) => {
                        e.context === e6.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tx = e.videoDevices.length > 0;
        let n = tC;
        if (
            ((tC = nw(e, { deviceType: e6.oh.VIDEO_INPUT, defaultName: e7.intl.string(e7.t.WKWARY) })),
            tv && !S().isEqual(tC, n))
        ) {
            let e = void 0 !== tC[tb],
                t = tb === e6.dx && n[e6.dx]?.disabled,
                i = "Firefox" === C().name && "" === tb && n[tb]?.name === "Default" && !n[tb]?.disabled;
            nA(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nD({ inputVolume: n_(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        y.w.remove(e9), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tF = !0 !== tk && !t), t)) (tk = !0), (ne = !1), nt.stop(), tV.stop();
        else if (nc().mode === ex.TBI.VOICE_ACTIVITY && tk) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = em.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                nt.start(tr, () => {
                    eG.default.track(ex.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tS[nG(tS, nc().inputDeviceId)]?.name,
                        rtc_connection_id: eJ.A.getRTCConnectionId(),
                    }),
                        (ne = !0),
                        i.emitChange();
                }),
                null != t &&
                    tV.start(t * eK.A.Millis.MINUTE, () => {
                        (tk = !1), l.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (d = t), (o = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nX(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nD({ bypassSystemInputProcessing: t }), tu.setAudioInputBypassSystemProcessing(t), nS(), nY(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (th = e.enabled), e.unmute && nD({ mute: !1, deaf: !1 }), tu.eachConnection(nE);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eP.A.requestPermission(e2.iL.CAMERA), nA(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (th = !1), tu.eachConnection(nE);
                    break;
                case "video":
                    nA(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? e6.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = eY.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nB(o, r)),
                s !== tf && (null != a && tu.setGoLiveSource(null, tf), (tf = s)),
                nA(s === e6.x.STREAM && tv, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e6.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e6.x.STREAM && tv,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            nA(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else nA(tv, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nD({ videoDeviceId: (t = nG(tC, t)) }), nA();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tI !== e.required && ((tI = e.required), e.required || tu.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nJ,
    USER_SETTINGS_MODAL_SET_SECTION: nJ,
    CERTIFIED_DEVICES_SET: function () {
        return tu.eachConnection(nN), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tA.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tA.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (tE = t.settingsByContext),
            (tS = t.inputDevices),
            (tN = t.outputDevices),
            (t5 = t.appSupported),
            (tj = t.krispModuleLoaded),
            (tW = t.krispFatalError),
            (c = t.krispVersion),
            (tf = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === ex.g6G.BACKGROUND && tv && !n) (tG = !0), nA(!1);
        else {
            if (t !== ex.g6G.ACTIVE || !tG) return !1;
            (tG = !1), nA(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        tu.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tD) return !1;
        (tD = n), tu.eachConnection(nE);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === e2.hL.ACCEPTED;
        switch (n) {
            case e2.iL.AUDIO:
                (t1 = !0), tu.eachConnection(nE);
                break;
            case e2.iL.CAMERA:
                !i && tv && nA(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        tu.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nD({ aecDumpEnabled: t });
        tu.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nD({ openH264Enabled: t }), p.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (tE = Object.values(e6.x).reduce((e, n) => {
            let i = to();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            y.w.set(e9, tE),
            ny();
    },
    CHANNEL_DELETE: function () {
        if ((!tv && null == a) || null != eJ.A.getRTCConnectionId()) return !1;
        nA(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e6.CO.KRISP_CPU_OVERUSE) {
            (ns.noiseCancellation = !1), (ns.noiseSuppression = !0);
            let e = nc();
            return tu.eachConnection((t) => ng(t, e.noiseCancellation)), nK(), nY(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e6.CO.KRISP_VAD_CPU_OVERUSE &&
            ((ns.modeOptions = { vadUseKrisp: !1 }), tu.eachConnection((e) => nu(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tz && ((tz = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        tu.applyMediaFilterSettings(t).finally(() => {
            (tZ = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tZ = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tZ = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== e4.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nV(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.Ao)() || null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (tu.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? P.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && nc().videoHook && P.c1(s.desktopSource.sourcePid)));
        let a = eY.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nB(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = nl("MediaEngineStore clips"),
            c = nc().videoHook,
            u = !c || !ei.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eR.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: E, minCaptureHeight: A } = eS.getConfig({ location: "handleClipsInit" });
        tu.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: u,
                useGraphicsCapture: nC(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nR(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: tt,
                hdrCaptureMode: d,
                videoHookAllowDx12: _,
                minCaptureWidth: E,
                minCaptureHeight: A,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e6.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((s = null), tu.setClipsSource(null)), !1 === t.clipsEnabled && (s = null);
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t9 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        (tQ[t] = { active: n, available: i }), nS();
    },
}));
