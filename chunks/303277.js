let i, r, a, s, l, o, d, c, u, _, E;
n.d(t, { yz: () => tr, Ay: () => n2 }), n(323874), n(14289), n(35956), n(321073);
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
    O = n(299855),
    R = n.n(O),
    L = n(17928),
    y = n(459838),
    D = n(506774),
    v = n(451988),
    b = n(228366),
    M = n(77729),
    P = n(719129),
    U = n(894539),
    w = n(124838),
    G = n(915725),
    x = n(572164),
    k = n(680725),
    F = n(487329),
    V = n(736056),
    B = n(6494),
    H = n(952818),
    j = n(540305),
    W = n(945810);
let Y = (0, W.mj)({
        name: "2026-06-av1-encode-linux",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    K = { probeAudioEffects: !1 },
    $ = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: K,
        variations: { 1: { ...K, probeAudioEffects: !0 } },
    });
var z = n(403362);
let q = (0, W.mj)({
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
function Z(e, t) {
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
            (0, z.xb)(e);
    }
}
let X = (0, W.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    Q = (0, W.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    }),
    J = (0, W.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ee = n(240921);
let et = (0, ee.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    en = (0, W.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    ei = (0, W.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var er = n(574381),
    ea = n(941426),
    es = n(325278);
let el = new ea.Vy("InputWatcher");
class eo {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new v.Ep();
    inputDetected = void 0;
    lastUpdateTime = performance.now();
    constructor(e, t) {
        (this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(y.bg.Silence, this.handleSilence);
    }
    reset() {
        this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0);
    }
    fetchInputDeviceOSConfig = async () => {
        if ((0, er.uF)() && R().satisfies(M.A?.os.release, es.PH))
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
                el.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            el.info("Silence:", e),
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
let ed = (0, W.mj)({
        kind: "user",
        name: "2026-07-krisp-cpu-disablement",
        defaultConfig: { consecutiveFailures: 1 },
        variations: { 1: { consecutiveFailures: 3 }, 2: { consecutiveFailures: 5 }, 3: { consecutiveFailures: 10 } },
    }),
    ec = (0, W.mj)({
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
    eu = (0, ee.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var e_ = n(140175);
(0, W.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
let eE = (0, W.mj)({
        kind: "user",
        name: "2026-08-mute-aware-noise-cancellation",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    eA = (0, ee.Ay)({
        kind: "user",
        name: "2026-07-nvenc-reconstructed-frames",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var eh = n(801644);
let eI = (0, W.mj)({
        name: "2026-09-stream-zero-vad-leading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ef = (0, W.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    ep = (0, W.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    eT = (0, W.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var em = n(625075);
let eg = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eS = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eN = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eC = (0, W.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eO = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eR(e) {
    return eO.getConfig({ location: e });
}
let eL = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ey = n(75076),
    eD = n(91777),
    ev = n(559633),
    eb = n(205106),
    eM = n(174459),
    eP = n(652215);
let eU = new ea.Vy("AudioEffects");
async function ew(e, t, n) {
    if (!(0, er.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            b.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eM.default.track(eP.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eU.error("Failed to probe audio effects for device", e),
            eM.default.track(eP.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eG = n(967347),
    ex = n(617617),
    ek = n(125325),
    eF = n(499156),
    eV = n(738566),
    eB = n(353835),
    eH = n(927813),
    ej = n(38405),
    eW = n(350535),
    eY = n(280450),
    eK = n(131319),
    e$ = n(347481),
    ez = n(734057),
    eq = n(763827),
    eZ = n(287809),
    eX = n(117549),
    eQ = n(765682);
let eJ = {
    enabled: !0,
    spatialBlend: 1,
    reflectionsEnabled: !1,
    roomSize: 25,
    distanceAttenuationEnabled: !1,
    mode: "arc",
    spread: 2,
    arcAngle: 20,
    gridColumns: 3,
    gridSpacing: 1,
    buckets: 10,
    listenerHeight: 0.15,
    distance: 5,
};
var e0 = n(355097),
    e1 = n(621380),
    e2 = n(731854),
    e3 = n(375708);
let e5 = new I.A("MediaEngineStore"),
    e6 = "MediaEngineStore",
    e4 = {
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
    e7 = { left: 1, right: 1 },
    e8 = 5 * eH.A.Millis.SECOND,
    e9 = 2 * eH.A.Millis.SECOND,
    te = 30 * eH.A.Millis.SECOND,
    tt = +eH.A.Millis.MINUTE,
    tn = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    ti = 0;
var tr =
    (((A = {}).WEBCAM = "WEBCAM"),
    (A.INTEGRATED = "INTEGRATED"),
    (A.BLUETOOTH = "BLUETOOTH"),
    (A.AIRPLAY = "AIRPLAY"),
    (A.HEADSET = "HEADSET"),
    A);
function ta() {
    return {
        mode: eP.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...eJ },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: e2.Hz,
        outputVolume: e2.Hz,
        inputDeviceId: e2.dx,
        outputDeviceId: e2.dx,
        videoDeviceId: e2.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: to.supports(e2.O5.VIDEO_HOOK),
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
let ts = {
        [e1.m.CUSTOM]: {},
        [e1.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [e1.m.STUDIO]: {
            mode: eP.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tl = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    to = (0, y.hB)((0, y.WI)());
function td(e) {
    return em.k.getConfig({ location: e }).videoEnabled;
}
e5.enableNativeLogger(!0);
let tc = {},
    tu = new Set([e2.x.DEFAULT]),
    t_ = to.supports(e2.O5.AUTO_ENABLE),
    tE = !1,
    tA = e2.x.STREAM,
    th = 0,
    tI = !1,
    tf = performance.now(),
    tp = null,
    tT = { [e2.dx]: nb("No Input Devices") },
    tm = { [e2.dx]: nb("No Output Devices") },
    tg = { [e2.dx]: nb("No Video Devices") },
    tS = new v.Ep(),
    tN = !1,
    tC = !1,
    tO = !1,
    tR = !1,
    tL = !1,
    ty = e2.qe,
    tD = e2.qe,
    tv = !1,
    tb = !1,
    tM = new v.Ep(),
    tP = !1,
    tU = !1,
    tw = !1,
    tG = !1,
    tx = new v.Ep(),
    tk = !1,
    tF = !1,
    tV = !1,
    tB = !1,
    tH = [],
    tj = !1,
    tW = null,
    tY = !1,
    tK = !1,
    t$ = !1,
    tz = !1,
    tq = e2.D1.UNKNOWN,
    tZ = {},
    tX = null,
    tQ = null,
    tJ = !1;
eD.A.hasPermission(eQ.iL.AUDIO, { showAuthorizationError: !1 }),
    eD.A.hasPermission(eQ.iL.CAMERA, { showAuthorizationError: !1 });
let t0 = new Set(),
    t1 = !1,
    t2 = new Set(),
    t3 = {},
    t5 = null,
    t6 = null,
    t4 = null,
    t7 = !0,
    t8 = !1,
    t9 = new v.Ep(),
    ne = !1,
    nt = !1,
    nn = !1,
    ni = !1,
    nr = {};
function na(e) {
    return (function (e) {
        let { location: t } = e;
        return en.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function ns() {
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
function nl() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT,
        t = tc[e];
    return null == t && ((t = ta()), (tc[e] = t)), t;
}
function no() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT,
        t = nl(e);
    if (e === e2.x.STREAM)
        return {
            ...t,
            modeOptions: {
                ...t.modeOptions,
                vadLeading: eI.getConfig({ location: "MediaEngineStore.getSettings" }).enabled
                    ? 0
                    : t.modeOptions.vadLeading,
            },
        };
    let n = ts[t.activeInputProfile ?? e1.m.CUSTOM],
        i = nz() ? nr : tl,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function nd(e) {
    let t = no(e.context),
        n = t.mode;
    e.context === e2.x.DEFAULT && (0, e_.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = eF.A.getConfig({ location: "setInputMode" }),
        r = i && n === eP.TBI.PUSH_TO_TALK;
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
function nc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e2.Hz;
    return S().clamp(e, 0, t);
}
function nu(e) {
    let t = no(e.context),
        n = !t_ || t.mute || t.deaf;
    switch (e.context) {
        case e2.x.DEFAULT:
            n = n || tN || tC || tO || !eD.A.didHavePermission(eQ.iL.AUDIO);
            break;
        case e2.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    if ((e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e2.x.DEFAULT)) {
        let { enabled: t } = (function (e) {
            let { location: t } = e;
            return eE.getConfig({ location: t });
        })({ location: "updateConnectionMuteDeaf" });
        e.setSkipNoiseCancellationIfMuted(t && n), U.A.updateNativeMute();
    }
}
function n_() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tL,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && no().videoHook && P.c1(n.desktopSource.sourcePid),
            to.setGoLiveSource(null, tA)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            to.setGoLiveSource(null, tA),
        tL || e)
    ) {
        let t = no().videoDeviceId;
        tL && t === e2.dx && tD === e2.dx && ty !== e2.qe ? (t = ty) : (tD = t),
            (ty = (tL = e) ? nG(tg, t) : e2.qe),
            to.setVideoInputDevice(ty);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = na("MediaEngineStore go live"),
                r = no().videoHook,
                a = nC(),
                s = a ? ((0, f.isWindows)() && R().satisfies(M.A?.os.release, es.fG) ? es.zl : es.eg) : 0,
                l = !1;
            (0, f.isWindows)() &&
                s >= es.zl &&
                (l =
                    !0 === t6
                        ? eN.getConfig({ location: "updateVideo" }).enabled
                        : eS.getConfig({ location: "updateVideo" }).enabled);
            let o = !r || !J.getConfig({ location: "updateVideo" }).enabled,
                d = r && eg.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: u } = ep.getConfig({ location: "updateVideo" });
            to.setGoLiveSource(
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
                        allowScreenCaptureKit: nO(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e8,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? et.definition.defaultConfig : et.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: d,
                        minCaptureWidth: c,
                        minCaptureHeight: u,
                    },
                    quality: e,
                },
                tA,
            );
        }
        null != t.cameraSource &&
            to.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tA,
            );
    }
}
function nE(e) {
    switch (e) {
        case e2.CO.KRISP_CPU_OVERUSE:
            return F.B6.KrispCpuOveruse;
        case e2.CO.KRISP_FAILED:
            return F.B6.KrispFailed;
        case e2.CO.KRISP_VAD_CPU_OVERUSE:
            return F.B6.KrispVadCpuOveruse;
        case e2.CO.KRISP_INIT_ERROR:
            return F.B6.KrispInitError;
        case e2.CO.KRISP_INIT_ERROR_NATIVE:
            return F.B6.KrispInitErrorNative;
        case e2.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return F.B6.KrispInitErrorSse4NotSupported;
        case e2.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return F.B6.KrispInitErrorAvx2NotSupported;
        case e2.CO.KRISP_INIT_ERROR_UNSIGNED:
            return F.B6.KrispInitErrorUnsigned;
        case e2.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return F.B6.KrispInitErrorGlobalInit;
        case e2.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return F.B6.KrispInitErrorWeight8k;
        case e2.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return F.B6.KrispInitErrorWeight16k;
        case e2.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return F.B6.KrispInitErrorWeight32k;
        case e2.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return F.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nA = new Set([
    e2.CO.KRISP_INIT_ERROR,
    e2.CO.KRISP_INIT_ERROR_NATIVE,
    e2.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e2.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e2.CO.KRISP_INIT_ERROR_UNSIGNED,
    e2.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e2.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e2.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e2.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e2.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nh() {
    tq = e2.D1.UNKNOWN;
}
function nI(e) {
    e !== tq && ((tq = e), i.emitChange());
}
function nf(e, t) {
    if (
        (e5.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: nE(e), voiceProcessingErrorDetails: t }),
        eM.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nA.has(e))
    ) {
        tB = !0;
        return;
    }
    e === e2.CO.KRISP_VAD_CPU_OVERUSE
        ? b.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tY = !0), b.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function np(e, t) {
    let n = t === e2.$C.LIVE;
    e5.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, F.QW)({
                type: F.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e2.kv.UNSUPPORTED:
                            return F.B6.VideoBackgroundUnsupported;
                        case e2.kv.INIT_FAILED:
                            return F.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function nT(e) {
    return { enabled: e, ...(e && 1 ? e4 : { useAGC2: !1 }) };
}
function nm(e, t) {
    e.setAutomaticGainControl(nT(t));
}
function ng(e, t) {
    let n = (0, eb.A)(t, i.getSystemMicrophoneMode());
    n !== t && e5.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t && !0);
}
function nS() {
    let e = no(),
        t = e.inputDeviceId,
        n = e$.A.hasEchoCancellation(t) || e.echoCancellation,
        r = e$.A.hasNoiseSuppression(t) || e.noiseSuppression,
        { maxSampleRateHz: a, maxChannelCount: s } = (function (e, t) {
            let { location: n } = e;
            if (!Z("any", t)) return { maxSampleRateHz: 0, maxChannelCount: 0 };
            let i = (function (e) {
                let { location: t } = e;
                return q.getConfig({ location: t });
            })({ location: n });
            return Z(i.condition, t)
                ? { maxSampleRateHz: 32e3 * !!i.capSampleRate, maxChannelCount: +!!i.capChannelCount }
                : { maxSampleRateHz: 0, maxChannelCount: 0 };
        })(
            { location: "updateVoiceFidelityCaps" },
            {
                krispEnabled: (0, eb.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    to.setVoiceSampleRateCap(a), to.setVoiceChannelCountCap(s);
}
function nN(e) {
    let t = no(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(e$.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(e$.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nm(e, e$.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        ng(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(nj(t.audioMixerSettings)),
        nS(),
        (0, f.isWindows)() && R().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === e2.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return ef.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nU(tT[i.getInputDeviceId()]) || nU(tm[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, f.isDesktop)()) {
        let { consecutiveFailures: t } = (function (e) {
            let { location: t } = e;
            return ed.getConfig({ location: t });
        })({ location: "updateConnectionVoiceProcessing" });
        e.setNoiseCancellationCpuDisablement(t);
    }
    if ((0, f.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nC() {
    return (0, f.isWindows)() && R().satisfies(M.A?.os.release, es.yg);
}
function nO() {
    return (0, f.isMac)() && to.supports(e2.O5.SCREEN_CAPTURE_KIT) && R().satisfies(M.A?.os.release, es.e);
}
function nR() {
    return (
        (0, f.isWindows)() &&
        to.supports(e2.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        to.supports(e2.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nL() {
    return to.supports(e2.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function ny(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e2.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = nl(t);
    return Object.assign(i, e), !__OVERLAY__ && n && D.w.set(e6, tc), i;
}
function nD() {
    let e = no();
    nk(e.inputDeviceId),
        to.setAudioOutputDevice(e.outputDeviceId),
        n_(),
        to.setInputVolume(e.inputVolume),
        to.setOutputVolume(e.outputVolume),
        to.setAecDump(e.aecDumpEnabled),
        to.setSidechainCompression(e.sidechainCompression),
        to.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        to.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && p.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        nW(e.audioMixerSettings);
}
function nv() {
    t_ || to.enable().then(() => b.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nb(e) {
    return { id: e2.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
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
    let n = e[t] ?? e[e2.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nx(e) {
    if (!(0, f.isWindows)() || !$.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tT[e];
    t?.guid != null && ew(t.guid, e, to);
}
function nk(e) {
    to.setAudioInputDevice(e), nx(e);
}
function nF(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nV() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ex.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === e0.W.USER ? e2.x.DEFAULT : e2.x.STREAM,
            r = i === e2.x.STREAM ? e2.Cn : e2.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = no(i);
        for (let [e, t] of Object.entries(a))
            null == (0, ek.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                to.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    to.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        ny({ localMutes: s, localVolumes: l }, i);
    }
}
function nB(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    e5.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eB.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eB.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
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
                            H.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            b.h.wait(() => {
                                b.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return null != e && no().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function nH() {
    let e = e2.x.DEFAULT,
        { videoToggleStateMap: t } = no(e);
    for (let [e, n] of Object.entries(t)) n === eP.bb8.AUTO_PROBING && delete t[e];
    ny({ videoToggleStateMap: t }, e, !1);
}
function nj(e) {
    let { enabled: t } = eV.A.getConfig({ location: "MediaEngineStore" });
    return !0 === e.enabled && t && to.supports(e2.O5.SPATIAL_AUDIO);
}
function nW(e) {
    (tz = nj(e)),
        to.setAudioMixerOptions({
            isSpatial: tz,
            enabled: tz,
            spatialBlend: e.spatialBlend,
            reflectionsEnabled: e.reflectionsEnabled,
            roomSize: e.roomSize,
            distanceAttenuationEnabled: e.distanceAttenuationEnabled,
        });
}
function nY(e) {
    let t = no(),
        n = to.getAudioSubsystem(),
        r = to.getAudioLayer(),
        a = nG(tT, t.inputDeviceId),
        s = tT[a]?.name,
        l = (0, eb.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eM.default.track(eP.HAw.VOICE_PROCESSING, {
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
    let e = no(),
        t = t2.size > 0,
        n = e.inputDeviceId,
        i = e$.A.hasEchoCancellation(n) || e.echoCancellation,
        r = e$.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nT(e$.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    to.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        nS();
}
async function n$() {
    if (!to.supports(e2.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((nn = !0), (nt = to.supports(e2.O5.GAMESCOPE_CAPTURE)));
}
function nz() {
    return (tV || !1) && !tB;
}
async function nq() {
    try {
        await p.Ay.ensureModule("discord_krisp");
        let e = p.Ay.requireModule("discord_krisp");
        (tV = !0),
            (c = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tH = e), i.emitChange();
            }),
            i.emitChange(),
            await p.Ay.ensureModule("discord_voice");
        let t = p.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e5.warn(`Failed to load Krisp module: ${t.message}`), ej.A.captureException(t);
        let e = e2.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e2.CO.KRISP_INIT_ERROR : n;
        }
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: nE(e) }),
            eM.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tF = !1;
    }
}
async function nZ() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(tn);
        if (null === i) return void e5.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await p.Ay.downloadOpenH264(
                tn,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e5.log("OpenH264 download status", e);
                },
            );
            e5.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            e5.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eM.default.track(eP.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await p.Ay.cleanupUnusedOpenH264Files([a]);
            e5.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e5.error("OpenH264 download failed", e);
    }
}
function nX(e) {
    e === e2.rB.AUTOMATIC
        ? (ny({ automaticAudioSubsystem: !0 }), nQ())
        : (ny({ automaticAudioSubsystem: !1 }), to.setAudioSubsystem(e));
}
function nQ() {
    to.queueAudioSubsystem(e2.rB.EXPERIMENTAL);
}
function nJ(e) {
    let { section: t } = e;
    return t === eP.nc_.VOICE && nv(), !1;
}
class n0 extends L.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new eo(to, this)),
            tS.start(te, () => {
                e5.error("Device enumeration timed out"), eM.default.track(eP.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            to.on(y.bg.Connection, (e) => {
                let t;
                nK(), nd(e), nu(e), nN(e);
                let n = no();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(e2.fd.H265_HARDWARE_ONLY, !0),
                          (null != tQ
                              ? tQ
                              : "u" > typeof window
                                ? (tQ = ns().then((e) => ((tX = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e2.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(e2.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e2.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? eu.definition.defaultConfig : eu.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e2.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e2.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e2.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = w.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e2.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e2.x.STREAM)
                ) {
                    let t = nF(tm);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(e2.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e2.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e2.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(e2.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e2.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e2.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                R().satisfies(window?.DiscordNative?.os.release, e2.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) {
                    let { enabled: t } = Y.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(e2.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e2.fd.SIGNAL_AV1_DECODE, !0);
                } else
                    ((0, f.isIOS)() || (0, f.isAndroid)()) &&
                        (e.setExperimentFlag(e2.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e2.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, f.isWeb)()) {
                    let { enabled: t } = X.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e2.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, f.isWindows)() &&
                    t5?.startsWith("AMD") &&
                    eR("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e2.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    t5?.startsWith("Intel") &&
                    !0 === t6 &&
                    1 === t4 &&
                    eL.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e2.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e2.fd.INTEL_GPU_DISABLE, !0)),
                (0, f.isWindows)() &&
                    t5?.startsWith("Intel") &&
                    !0 === t6 &&
                    1 === t4 &&
                    eC.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e2.fd.INTEL_GPU_DISABLE, !0),
                (0, f.isWindows)() &&
                    t5?.startsWith("Qualcomm") &&
                    eR("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e2.fd.WMF_GPU_ENCODE, !0),
                to.setHasFullbandPerformance(null === (t = (0, k.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = no(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== eY.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eY.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(y.yq.Speaking, (t, n, i, r) => {
                    b.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e2.x.DEFAULT &&
                        ((tb = !1),
                        e.on(y.yq.SpeakingWhileMuted, () => {
                            let e = !tb;
                            (tb = !0),
                                e && i.emitChange(),
                                tM.start(e9, () => {
                                    (tb = !1), i.emitChange();
                                });
                        })),
                    e.on(y.yq.DesktopSourceEnd, (t, n) => {
                        b.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(y.yq.InteractionRequired, (e) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(y.yq.VideoHookInitialize, (e, t, n, i, r, s) => {
                        a?.desktopSource != null &&
                            eM.default.track(eP.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, j.A)(a?.desktopSource),
                            });
                    }),
                    e.on(y.yq.NoiseCancellationError, nf),
                    e.on(y.yq.VoiceActivityDetectorError, nf),
                    e.on(y.yq.SdpError, (e, t, n, i) => {
                        eM.default.track(eP.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(y.yq.VideoState, (t) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eK.A.bitrate),
                    e.applyVideoQualityMode(eX.A.mode),
                    (0, f.isWindows)() &&
                        to.supports(e2.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        to.setAsyncVideoInputDeviceInit(!0);
            }),
            to.on(y.bg.DeviceChange, (e, t, n) => {
                tS.stop(),
                    b.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            to.on(y.bg.VolumeChange, (e, t) => {
                b.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            to.on(y.bg.DesktopSourceEnd, (e, t) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            to.on(y.bg.AudioPermission, (e) => {
                (tJ = !0), b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            to.on(y.bg.VideoPermission, (e) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            to.on(y.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eB.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e5.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await eM.default.track(
                        eP.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e5.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e5.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    D.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            to.on(y.bg.VideoInputInitialized, (e) => {
                eM.default.track(eP.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eH.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eq.A.getMediaSessionId(),
                    rtc_connection_id: eq.A.getRTCConnectionId(),
                });
            }),
            to.on(y.bg.AudioInputInitialized, (e) => {
                eM.default.track(eP.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eH.A.Millis.SECOND),
                    rtc_connection_id: eq.A.getRTCConnectionId(),
                });
            }),
            to.on(y.bg.ClipsRecordingRestartNeeded, () => {
                b.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            to.on(y.bg.ClipsInitFailure, (e, t) => {
                let n = th < 3;
                (th += 1),
                    b.h.wait(() => {
                        b.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? b.h.dispatch({ type: "CLIPS_RESTART" })
                                : e5.warn(
                                      `Clips init failure budget exhausted (${th} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            to.on(y.bg.ClipsRecordingHealthy, () => {
                0 !== th && (e5.info(`Clips bridge reported healthy; resetting restart budget (was ${th}).`), (th = 0));
            }),
            to.on(y.bg.ClipsRecordingReadyChanged, (e) => {
                tI !== e && (e5.info(`Clips recorder ready changed: ${e}`), (tI = e));
            }),
            to.on(y.bg.ClipsBridgeIdleShutdown, () => {
                e5.info("Clips bridge idle shutdown");
            }),
            to.on(y.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && P.c1(t), (s = null));
            }),
            to.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            to.on(y.bg.NativeScreenSharePickerCancel, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            to.on(y.bg.NativeScreenSharePickerError, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            to.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
                eM.default.track(eP.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            to.on(y.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            to.on(y.bg.ConnectionStats, (e) => {
                b.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: ti++,
                            context: n.context,
                        };
                    }),
                });
            }),
            to.on(y.bg.VoiceProcessingError, nf),
            to.on(y.bg.VideoFilterError, np),
            to.on(y.bg.SpatialAudioStatus, nI),
            to.on(y.bg.VoiceQueueMetrics, (e) => {
                let t = n1(e);
                null !== t && eM.default.track(eP.HAw.VOICE_QUEUE_METRICS, t);
            }),
            to.setOnVideoContainerResized((e, t, n) => {
                b.h.wait(() =>
                    b.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            n$(),
            l.reset(),
            (0, eG.w)().then((e) => {
                null != e && ((t5 = e.gpu_brand), (t6 = e.has_intel_hybrid_igpu), (t4 = e.gpu_count));
            }),
            to.on(y.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), to.eachConnection(nN), i.emitChange();
            }),
            null != (e = D.w.get("audio")) && (D.w.set(e6, { [e2.x.DEFAULT]: e }), D.w.remove("audio")),
            (tc = D.w.get(e6) ?? {}),
            S().each(tc, (e) => {
                S().defaultsDeep(e, ta()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eW.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    to.supports(e2.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 3 &&
                        ((e.audioMixerSettingsVersion = 3), (e.audioMixerSettings = { ...eJ })),
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            nD(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tF && !tV
                ? ((tF = !0), nq())
                : (0, f.isWeb)() && to.supports(e2.O5.NOISE_CANCELLATION)
                  ? ((tV = !0), i.emitChange())
                  : (0, f.isWeb)() && ny({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nZ(),
            nH(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !ni)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    p.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = e2.tl;
                let n = n1(e);
                null !== n && eM.default.track(eP.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, e2.tl);
            }
            (ni = !0), setTimeout(t, e2.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === tp &&
            to
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tp = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e5.error("Failed to parse codec survey", e), (tp = !1);
                    }
                })
                .catch((e) => {
                    e5.error("Failed to get codec survey", e), (tp = !1);
                })
                .finally(() => {
                    b.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (t3 = {
                [e2.O5.VIDEO]: to.supports(e2.O5.VIDEO),
                [e2.O5.DESKTOP_CAPTURE]: to.supports(e2.O5.DESKTOP_CAPTURE),
                [e2.O5.HYBRID_VIDEO]: to.supports(e2.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eY.default, eK.A, e$.A, ez.A, G.Ay, V.A, eq.A, H.Ay, ex.A, eZ.default, eX.A);
    }
    supports(e) {
        return (e !== e2.O5.VIDEO || !!td("MediaEngineStore.supports")) && to.supports(e);
    }
    supportsInApp(e) {
        return (e !== e2.O5.VIDEO || !!td("MediaEngineStore.supportsInApp")) && (t3[e] || to.supports(e));
    }
    isSupported() {
        return to.supported();
    }
    isNoiseSuppressionSupported() {
        return to.supports(e2.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nz();
    }
    isNoiseCancellationError() {
        return tY;
    }
    isAutomaticGainControlSupported() {
        return to.supports(e2.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nL() && (to.supports(e2.O5.LEGACY_AUDIO_SUBSYSTEM) || to.supports(e2.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return to.supports(e2.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === to.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nz();
    }
    isAecDumpSupported() {
        return to.supports(e2.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return to.supports(e2.O5.VIDEO) && to.supports(e2.O5.SIMULCAST);
    }
    getAecDump() {
        return no().aecDumpEnabled;
    }
    getMediaEngine() {
        return to;
    }
    getVideoComponent() {
        return to.Video;
    }
    getCameraComponent() {
        return to.Camera;
    }
    getKrispSuppressionLevel() {
        return u ?? 100;
    }
    getKrispEnableStats() {
        return tj;
    }
    isEnabled() {
        return t_;
    }
    isMute() {
        return this.isSelfMute() || tN;
    }
    isDeaf() {
        return this.isSelfDeaf() || tR;
    }
    isServerMute() {
        return tN;
    }
    isServerDeaf() {
        return tR;
    }
    getAudioMixerSettings() {
        return no().audioMixerSettings;
    }
    isSpatialAudioEnabled() {
        return !0 === this.getAudioMixerSettings().enabled;
    }
    isSpatialAudioRequested() {
        return tz;
    }
    getSpatialAudioStatus() {
        return tq;
    }
    hasContext(e) {
        return null != tc[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT;
        return e === e2.x.DEFAULT && tC;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT;
        return (
            !this.isEnabled() ||
            no(e).mute ||
            !eD.A.didHavePermission(eQ.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e2.x.DEFAULT && tO)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tv;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tv = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT,
            t = t8 && "voice_isolation" !== this.getSystemMicrophoneMode() && no(e).mode === eP.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (e$.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t7;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT;
        return !this.isSupported() || no(e).deaf;
    }
    isVideoEnabled() {
        return tL && tU;
    }
    isVideoAvailable() {
        return Object.values(tg).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tU;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.STREAM;
        return tA === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.STREAM;
        return tA === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e2.x.DEFAULT;
        return e !== eY.default.getId() && (no(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return to.supports(e2.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e2.x.DEFAULT;
        return no(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e2.x.DEFAULT;
        return no(t).videoToggleStateMap[e] ?? eP.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e2.x.DEFAULT;
        return t === e2.x.DEFAULT && t0.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT;
        return e === e2.x.DEFAULT && t0.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tK;
    }
    isNativeAudioPermissionReady() {
        return tJ;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tA;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tf;
    }
    isH264MfDecodeAvailable() {
        return tp;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e2.x.DEFAULT,
            n = no(t).localPans[e];
        return null != n ? n : e7;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e2.x.DEFAULT,
            n = t === e2.x.STREAM ? e2.Cn : e2.Hz,
            i = no(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return no().inputVolume;
    }
    getOutputVolume() {
        return no().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT;
        return no(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT;
        return no(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(tc, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eP.TBI.PUSH_TO_TALK && tu.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nG(tT, no().inputDeviceId);
    }
    getOutputDeviceId() {
        return nG(tm, no().outputDeviceId);
    }
    getVideoDeviceId() {
        return nG(tg, no().videoDeviceId);
    }
    getInputDevices() {
        return tT;
    }
    getOutputDevices() {
        return tm;
    }
    getVideoDevices() {
        return tg;
    }
    getEchoCancellation() {
        let e = no();
        return e$.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return to.supports(e2.O5.SIDECHAIN_COMPRESSION) && no().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return no().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return no().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tX && tX;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && no().openH264Enabled;
    }
    getLoopback() {
        return t2.size > 0;
    }
    getLoopbackReasons() {
        return t2;
    }
    getNoiseSuppression() {
        let e = no();
        return e$.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = no();
        return e$.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return no().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return no().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return no().silenceWarning;
    }
    getDebugLogging() {
        return to.getDebugLogging();
    }
    getQoS() {
        return no().qos;
    }
    getAttenuation() {
        return no().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return no().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return no().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nR() && no().automaticAudioSubsystem ? e2.rB.AUTOMATIC : to.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return to.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return no().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === e1.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT;
        return no(e);
    }
    getState() {
        return {
            settingsByContext: tc,
            inputDevices: tT,
            outputDevices: tm,
            appSupported: t3,
            krispModuleLoaded: tV,
            krispFatalError: tB,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: tA,
        };
    }
    getInputDetectedThisConnection() {
        return tw;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tG;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT;
        return f.isPlatformEmbedded || this.getMode(e) !== eP.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        to.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tE;
    }
    getVideoHook() {
        return no().videoHook;
    }
    supportsVideoHook() {
        return to.supports(e2.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = no().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return to.supports(e2.O5.EXPERIMENTAL_SOUNDSHARE) && R().satisfies(M.A?.os.release, es.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && to.supports(e2.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, es.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = no().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return to.supports(e2.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return nn;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e2.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eA.definition.defaultConfig : eA.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === e2.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eT.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return nt;
    }
    getSpeakingWhileMuted() {
        return tb;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tH;
    }
    getKrispVadActivationThreshold() {
        return no().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return ne;
    }
    setHasActiveCallKitCall(e) {
        ne = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? to.supports(e2.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, es.P$) && nO()
            : (0, f.isWindows)()
              ? to.supports(e2.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && to.supports(e2.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tZ[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e2.x.DEFAULT,
            t = this.supports(e2.O5.VIDEO)
                ? [{ rid: "100", type: e === e2.x.DEFAULT ? e2.mI.VIDEO : e2.mI.SCREEN, quality: e2.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e2.x.DEFAULT &&
                Q.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: e2.mI.VIDEO, quality: e2.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return to.fetchAsyncResources(e);
    }
    startDavePreload() {
        !t$ &&
            ((t$ = !0),
            (0, f.isWeb)() &&
                to.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    e5.warn("DAVE preload failed:", e), ej.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return to.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return tI;
    }
    isClipsRecordingReadySignalSupported() {
        return to.supports(e2.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return t5;
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
        if ((i !== n && n_(r, null), null == n && nh(), null != t || null == n)) {
            tk = !1;
            return;
        }
        if (tk) return;
        tk = !0;
        let a = no();
        (a.mute || a.deaf) && (ny({ deaf: !1, mute: !1 }), to.eachConnection(nu));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tN = t.mute || t.suppress), (tR = t.deaf), to.eachConnection(nu);
                let e = null != t.guildId && null != t.channelId && null != tW && tW !== t.channelId,
                    n = !tk && null == t.channelId;
                return n_(!e && !n && tL), (tW = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eY.default.getId() || null != eq.A.getChannelId() || n_(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tN = !1), (tR = !1);
        let t = no();
        nR() && (nL() ? nX(e2.rB.AUTOMATIC) : t.automaticAudioSubsystem && nQ()),
            to.supports(e2.O5.OFFLOAD_ADM_CONTROLS) && to.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                ei.getConfig({ location: "handleConnectionOpen" }).enabled &&
                to.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, f.isIOS)() && (to.setNcModels?.(ec.getConfig({ location: "setupKrisp" }).models), i.emitChange()),
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
            case eP.S7L.CONNECTING:
                nv();
                break;
            case eP.S7L.RTC_CONNECTING:
                (tG = !1), (o = void 0), (d = void 0), (tw = !1), (t8 = !1), t9.stop(), tx.stop(), l.reset();
                break;
            case eP.S7L.RTC_CONNECTED:
                n_();
                break;
            case eP.S7L.DISCONNECTED:
                (nr = {}),
                    (function () {
                        if (0 === t0.size) return;
                        let e = e2.x.DEFAULT,
                            { disabledLocalVideos: t } = no(e);
                        t0.forEach((n) => {
                            m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                to.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            t0.clear(),
                            ny({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nH();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tC = t), to.eachConnection(nu);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = no(t);
        if (t === e2.x.DEFAULT && (eD.A.requestPermission(eQ.iL.AUDIO), tO)) return !1;
        (i = !r && !i) || (r = !1), n || (tv = !0), ny({ mute: i, deaf: r }, t), to.eachConnection(nu);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        ny({ mute: n }, t), i || (tv = !0), to.eachConnection(nu);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        ny({ deaf: !no(t).deaf }, t), to.eachConnection(nu);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eY.default.getId()) return;
        let { localMutes: i } = no(t);
        i[n] ? delete i[n] : (i[n] = !0),
            ny({ localMutes: i }, t),
            to.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === eP.bb8.DISABLED,
            { disabledLocalVideos: l } = no(t),
            o = l[n] ?? !1,
            d = t0.has(n),
            c = i === eP.bb8.AUTO_ENABLED || i === eP.bb8.MANUAL_ENABLED;
        e5.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled.");
        let u = s !== o,
            _ = t === e2.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e5.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = no(t);
        if (
            (h[n] === eP.bb8.AUTO_PROBING &&
                i === eP.bb8.AUTO_ENABLED &&
                (0, ey.A)(n, s ? e2.Al.AUTO_DISABLE : e2.Al.AUTO_ENABLE, c),
            (h[n] = i),
            ny({ videoToggleStateMap: h }, t, r),
            i === eP.bb8.AUTO_PROBING
                ? eq.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eq.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            t1 ||
                (e5.info(`isAutoDisableAllowed=${t1} - disabling VideoHealthManager`),
                eq.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !t1)) return;
            (0, ey.A)(n, s ? e2.Al.AUTO_DISABLE : e2.Al.AUTO_ENABLE, c), s ? t0.add(n) : t0.delete(n);
        } else
            A &&
                (d && !s
                    ? (e5.info("disallowing auto-disable for this session because of manual override by user"),
                      (t1 = !1),
                      eq.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, ey.A)(n, e2.Al.MANUAL_REENABLE, c))
                    : (0, ey.A)(n, s ? e2.Al.MANUAL_DISABLE : e2.Al.MANUAL_ENABLE, c));
        _ && !s && t0.delete(n),
            s ? (l[n] = !0) : delete l[n],
            ny({ disabledLocalVideos: l }, t, r),
            to.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eY.default.getId()) return;
        let r = t === e2.x.STREAM ? e2.Cn : e2.Hz,
            { localVolumes: a } = no(t);
        i === r ? delete a[n] : (a[n] = i),
            ny({ localVolumes: a }, t),
            to.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        ny({ audioMixerSettings: n }, t),
            nW(n),
            tz || nh(),
            to.eachConnection((e) => e.setSpatialAudioEnabled(tz), e2.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = no(t);
        (a[n] = { left: i, right: r }), ny({ localPans: a }, t), to.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        ny({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), to.eachConnection(nd);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        ny({ inputVolume: nc(t) }), to.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        ny({ outputVolume: t }), to.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nG(tT, t)),
            (tf = performance.now()),
            ny({ inputDeviceId: t }),
            nk(t),
            to.eachConnection(nN),
            (o = void 0),
            (d = void 0),
            t9.stop(),
            (t8 = !1);
        let { resetSilenceWarningOnDeviceChange: n } = eh.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tw = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        ny({ outputDeviceId: (t = nG(tm, t)) }), to.setAudioOutputDevice(t), to.eachConnection(nN);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        ny({ activeInputProfile: t });
        let n = no();
        to.eachConnection((e) => {
            nd(e), nN(e);
        }),
            to.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nK();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = ny({ echoCancellation: e.enabled }),
            n = e$.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        to.eachConnection((e) => e.setEchoCancellation(n)), nK(), nY(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = ny({ sidechainCompression: e.enabled })), to.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = ny({ sidechainCompressionStrength: e.strength });
        to.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? t2.add(n) : t2.delete(n), nK();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = ny({ noiseSuppression: e.enabled }),
            n = e$.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        to.eachConnection((e) => e.setNoiseSuppression(n)), nK(), nY(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = ny({ automaticGainControl: e.enabled });
        to.eachConnection((e) => nm(e, t.automaticGainControl)), nK(), nY(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = ny({ noiseCancellation: e.enabled });
        to.eachConnection((e) => ng(e, t.noiseCancellation)), nK(), nY(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        ev.A.setKrispModelOverride(e.model), (_ = e.model), nK();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        ny({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        to.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), ev.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((tj = e.enabled), to.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        ny({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        ny({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        ny({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = ny({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        to.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        ny({ qos: t }), to.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tT;
        if (
            ((tT = nw(e, { deviceType: e2.oh.AUDIO_INPUT, defaultName: e3.intl.string(e3.t["/QIjDA"]) })),
            !S().isEqual(tT, t))
        ) {
            let e = no();
            nk(nG(tT, e.inputDeviceId)), to.eachConnection(nN);
        }
        !(function (e) {
            let t = tm;
            if (
                ((tm = nw(e, { deviceType: e2.oh.AUDIO_OUTPUT, defaultName: e3.intl.string(e3.t.xlUg0v) })),
                !S().isEqual(tm, t))
            ) {
                let e = no(),
                    n = nG(tm, e.outputDeviceId);
                to.setAudioOutputDevice(n), to.eachConnection(nN);
                let i = nF(t),
                    r = nF(tm);
                i !== r &&
                    to.eachConnection((e) => {
                        e.context === e2.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tU = e.videoDevices.length > 0;
        let n = tg;
        if (
            ((tg = nw(e, { deviceType: e2.oh.VIDEO_INPUT, defaultName: e3.intl.string(e3.t.WKWARY) })),
            tL && !S().isEqual(tg, n))
        ) {
            let e = void 0 !== tg[ty],
                t = ty === e2.dx && n[e2.dx]?.disabled,
                i = "Firefox" === C().name && "" === ty && n[ty]?.name === "Default" && !n[ty]?.disabled;
            n_(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        ny({ inputVolume: nc(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        D.w.remove(e6), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tG = !0 !== tw && !t), t)) (tw = !0), (t8 = !1), t9.stop(), tx.stop();
        else if (no().mode === eP.TBI.VOICE_ACTIVITY && tw) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eh.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                t9.start(tt, () => {
                    eM.default.track(eP.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tT[nG(tT, no().inputDeviceId)]?.name,
                        rtc_connection_id: eq.A.getRTCConnectionId(),
                    }),
                        (t8 = !0),
                        i.emitChange();
                }),
                null != t &&
                    tx.start(t * eH.A.Millis.MINUTE, () => {
                        (tw = !1), l.reset();
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
        ny({ bypassSystemInputProcessing: t }), to.setAudioInputBypassSystemProcessing(t), nS(), nY(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (t_ = e.enabled), e.unmute && ny({ mute: !1, deaf: !1 }), to.eachConnection(nu);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eD.A.requestPermission(eQ.iL.CAMERA), n_(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (t_ = !1), to.eachConnection(nu);
                    break;
                case "video":
                    n_(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? e2.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = eB.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nB(o, r)),
                s !== tA && (null != a && to.setGoLiveSource(null, tA), (tA = s)),
                n_(s === e2.x.STREAM && tL, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e2.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e2.x.STREAM && tL,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            n_(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else n_(tL, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        ny({ videoDeviceId: (t = nG(tg, t)) }), n_();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tE !== e.required && ((tE = e.required), e.required || to.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nJ,
    USER_SETTINGS_MODAL_SET_SECTION: nJ,
    CERTIFIED_DEVICES_SET: function () {
        return to.eachConnection(nN), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tu.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tu.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (tc = t.settingsByContext),
            (tT = t.inputDevices),
            (tm = t.outputDevices),
            (t3 = t.appSupported),
            (tV = t.krispModuleLoaded),
            (tB = t.krispFatalError),
            (c = t.krispVersion),
            (tA = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = B.A.isEnabled();
        if (t === eP.g6G.BACKGROUND && tL && !n) (tP = !0), n_(!1);
        else {
            if (t !== eP.g6G.ACTIVE || !tP) return !1;
            (tP = !1), n_(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        to.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tO) return !1;
        (tO = n), to.eachConnection(nu);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eQ.hL.ACCEPTED;
        switch (n) {
            case eQ.iL.AUDIO:
                (tJ = !0), to.eachConnection(nu);
                break;
            case eQ.iL.CAMERA:
                !i && tL && n_(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        to.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = ny({ aecDumpEnabled: t });
        to.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        ny({ openH264Enabled: t }), p.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (tc = Object.values(e2.x).reduce((e, n) => {
            let i = ta();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            D.w.set(e6, tc),
            nD();
    },
    CHANNEL_DELETE: function () {
        if ((!tL && null == a) || null != eq.A.getRTCConnectionId()) return !1;
        n_(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e2.CO.KRISP_CPU_OVERUSE) {
            (nr.noiseCancellation = !1), (nr.noiseSuppression = !0);
            let e = no();
            return to.eachConnection((t) => ng(t, e.noiseCancellation)), nK(), nY(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e2.CO.KRISP_VAD_CPU_OVERUSE &&
            ((nr.modeOptions = { vadUseKrisp: !1 }), to.eachConnection((e) => nd(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tY && ((tY = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        to.applyMediaFilterSettings(t).finally(() => {
            (tK = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tK = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tK = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== e0.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nV(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, x.T)() || null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (to.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? P.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && no().videoHook && P.c1(s.desktopSource.sourcePid)));
        let a = eB.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nB(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = na("MediaEngineStore clips"),
            c = no().videoHook,
            u = !c || !J.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eg.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: E, minCaptureHeight: A } = ep.getConfig({ location: "handleClipsInit" });
        to.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: u,
                useGraphicsCapture: nC(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nO(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e8,
                hdrCaptureMode: d,
                videoHookAllowDx12: _,
                minCaptureWidth: E,
                minCaptureHeight: A,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e2.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), to.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t7 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        (tZ[t] = { active: n, available: i }), nS();
    },
}));
