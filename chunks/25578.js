let i, r, a, s, l, o, d, c, u, _, E, A;
(n.d(t, { yz: () => tn, Ay: () => n0 }), n(323874), n(14289), n(35956), n(321073));
var h,
    I = n(823598),
    f = n(626584),
    p = n(723702),
    T = n(19575);
(0, I.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (p.isPlatformEmbedded) {
                let e = (0, I.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new f.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => T.Ay.supportsFeature(e),
    setProcessPriority(e) {
        T.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => T.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => T.Ay.getOpenH264LibraryPath(),
});
var g = n(284009),
    m = n.n(g),
    S = n(435558),
    N = n.n(S),
    C = n(481613),
    O = n.n(C),
    R = n(299855),
    L = n.n(R),
    y = n(17928),
    D = n(459838),
    v = n(506774),
    b = n(451988),
    M = n(228366),
    P = n(77729),
    U = n(719129),
    w = n(894539),
    G = n(124838),
    x = n(915725),
    k = n(572164),
    F = n(680725),
    B = n(487329),
    V = n(736056),
    H = n(6494),
    j = n(952818),
    W = n(540305),
    Y = n(945810);
function K(e) {
    return { agc2Enabled: !0, noiseCancellationDuringProcessing: !0, vadKrispActivationThreshold: e };
}
(0, Y.mj)({
    kind: "user",
    name: "2026-09-agc2-mobile",
    defaultConfig: { agc2Enabled: !1, noiseCancellationDuringProcessing: !1, vadKrispActivationThreshold: 0.5 },
    variations: { 1: K(0.4), 2: K(0.5), 3: K(0.6), 4: K(0.7) },
});
let $ = (0, Y.mj)({
        name: "2026-06-av1-encode-linux",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    z = { probeAudioEffects: !1 },
    X = (0, Y.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: z,
        variations: { 1: { ...z, probeAudioEffects: !0 } },
    });
var q = n(403362);
let Z = (0, Y.mj)({
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
function Q(e, t) {
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
            (0, q.xb)(e);
    }
}
let J = (0, Y.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ee = (0, Y.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    });
var et = n(240921);
let en = (0, et.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ei = (0, Y.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    er = (0, Y.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ea = n(574381),
    es = n(941426),
    el = n(325278);
let eo = new es.Vy("InputWatcher");
class ed {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new b.Ep();
    inputDetected = void 0;
    lastUpdateTime = performance.now();
    constructor(e, t) {
        ((this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(D.bg.Silence, this.handleSilence));
    }
    reset() {
        (this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0));
    }
    fetchInputDeviceOSConfig = async () => {
        if ((0, ea.uF)() && L().satisfies(P.A?.os.release, el.PH))
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
                    M.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
                }
            } catch (e) {
                eo.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            (eo.info("Silence:", e),
                (this.inputDetected = t),
                (this.lastUpdateTime = performance.now()),
                e && (await this.fetchInputDeviceOSConfig()),
                M.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                }));
        });
    };
}
let ec = [
        { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
        { name: "small_NC", maxSampleRate: 16e3, filename: "krisp-nc-o-lite-v1.kef" },
        { name: "full_NC", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7-fp16.kef" },
    ],
    eu = (0, et.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var e_ = n(140175);
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
let eE = (0, Y.mj)({
        kind: "user",
        name: "2026-08-mute-aware-noise-cancellation",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    eA = (0, et.Ay)({
        kind: "user",
        name: "2026-07-nvenc-reconstructed-frames",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var eh = n(801644);
let eI = (0, Y.mj)({
        name: "2026-09-stream-zero-vad-leading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ef = (0, Y.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    ep = (0, Y.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    eT = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var eg = n(625075);
let em = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eS = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eN = (0, Y.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eC = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eO(e) {
    return eC.getConfig({ location: e });
}
let eR = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eL = n(75076),
    ey = n(91777),
    eD = n(559633),
    ev = n(205106),
    eb = n(174459),
    eM = n(652215);
let eP = new es.Vy("AudioEffects");
async function eU(e, t, n) {
    if (!(0, ea.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            M.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eb.default.track(eM.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        (eP.error("Failed to probe audio effects for device", e),
            eb.default.track(eM.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 }));
    }
}
var ew = n(967347),
    eG = n(617617),
    ex = n(125325),
    ek = n(738566),
    eF = n(353835),
    eB = n(927813),
    eV = n(38405),
    eH = n(350535),
    ej = n(280450),
    eW = n(131319),
    eY = n(347481),
    eK = n(734057),
    e$ = n(763827),
    ez = n(287809),
    eX = n(117549),
    eq = n(765682);
let eZ = {
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
var eQ = n(355097),
    eJ = n(621380),
    e0 = n(731854),
    e1 = n(375708);
let e2 = new f.A("MediaEngineStore"),
    e3 = "MediaEngineStore",
    e5 = {
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
    e6 = { left: 1, right: 1 },
    e4 = 5 * eB.A.Millis.SECOND,
    e7 = 2 * eB.A.Millis.SECOND,
    e8 = 30 * eB.A.Millis.SECOND,
    e9 = +eB.A.Millis.MINUTE,
    te = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    tt = 0;
var tn =
    (((h = {}).WEBCAM = "WEBCAM"),
    (h.INTEGRATED = "INTEGRATED"),
    (h.BLUETOOTH = "BLUETOOTH"),
    (h.AIRPLAY = "AIRPLAY"),
    (h.HEADSET = "HEADSET"),
    h);
function ti() {
    return {
        mode: eM.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: p.isPlatformEmbedded || __OVERLAY__,
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
        audioMixerSettings: { ...eZ },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: e0.Hz,
        outputVolume: e0.Hz,
        inputDeviceId: e0.dx,
        outputDeviceId: e0.dx,
        videoDeviceId: e0.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: ts.supports(e0.O5.VIDEO_HOOK),
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
let tr = {
        [eJ.m.CUSTOM]: {},
        [eJ.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eJ.m.STUDIO]: {
            mode: eM.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    ta = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    ts = (0, D.hB)((0, D.WI)());
function tl(e) {
    return eg.k.getConfig({ location: e }).videoEnabled;
}
e2.enableNativeLogger(!0);
let to = {},
    td = new Set([e0.x.DEFAULT]),
    tc = ts.supports(e0.O5.AUTO_ENABLE),
    tu = !1,
    t_ = e0.x.STREAM,
    tE = 0,
    tA = !1,
    th = performance.now(),
    tI = null,
    tf = { [e0.dx]: nD("No Input Devices", e0.oh.AUDIO_INPUT) },
    tp = { [e0.dx]: nD("No Output Devices", e0.oh.AUDIO_OUTPUT) },
    tT = { [e0.dx]: nD("No Video Devices", e0.oh.VIDEO_INPUT) },
    tg = new b.Ep(),
    tm = !1,
    tS = !1,
    tN = !1,
    tC = !1,
    tO = !1,
    tR = e0.qe,
    tL = e0.qe,
    ty = !1,
    tD = !1,
    tv = new b.Ep(),
    tb = !1,
    tM = !1,
    tP = !1,
    tU = !1,
    tw = new b.Ep(),
    tG = !1,
    tx = !1,
    tk = !1,
    tF = !1,
    tB = [],
    tV = !1,
    tH = null,
    tj = !1,
    tW = !1,
    tY = !1,
    tK = !1,
    t$ = e0.D1.UNKNOWN,
    tz = {},
    tX = null,
    tq = null,
    tZ = !1;
(ey.A.hasPermission(eq.iL.AUDIO, { showAuthorizationError: !1 }),
    ey.A.hasPermission(eq.iL.CAMERA, { showAuthorizationError: !1 }));
let tQ = new Set(),
    tJ = !1,
    t0 = new Set(),
    t1 = {},
    t2 = null,
    t3 = null,
    t5 = null,
    t6 = !0,
    t4 = !1,
    t7 = new b.Ep(),
    t8 = !1,
    t9 = !1,
    ne = !1,
    nt = !1,
    nn = {};
function ni(e) {
    return (function (e) {
        let { location: t } = e;
        return ei.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function nr() {
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
function na() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT,
        t = to[e];
    return (null == t && ((t = ti()), (to[e] = t)), t);
}
function ns() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT,
        t = na(e);
    if (e === e0.x.STREAM)
        return {
            ...t,
            modeOptions: {
                ...t.modeOptions,
                vadLeading: eI.getConfig({ location: "MediaEngineStore.getSettings" }).enabled
                    ? 0
                    : t.modeOptions.vadLeading,
            },
        };
    let n = tr[t.activeInputProfile ?? eJ.m.CUSTOM],
        i = nK() ? nn : ta,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function nl(e) {
    let t = ns(e.context),
        n = t.mode;
    (e.context === e0.x.DEFAULT && (0, e_.N)(!1, !1),
        e.setInputMode(n, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && nK(),
            vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: Math.round(t.modeOptions.delay),
        }));
}
function no(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.Hz;
    return N().clamp(e, 0, t);
}
function nd(e) {
    let t = ns(e.context),
        n = !tc || t.mute || t.deaf;
    switch (e.context) {
        case e0.x.DEFAULT:
            n = n || tm || tS || tN || !ey.A.didHavePermission(eq.iL.AUDIO);
            break;
        case e0.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    if ((e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e0.x.DEFAULT)) {
        let { enabled: t } = (function (e) {
            let { location: t } = e;
            return eE.getConfig({ location: t });
        })({ location: "updateConnectionMuteDeaf" });
        (e.setSkipNoiseCancellationIfMuted(t && n), w.A.updateNativeMute());
    }
}
function nc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tO,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, p.isWindows)()
                ? U.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && ns().videoHook && U.c1(n.desktopSource.sourcePid),
            ts.setGoLiveSource(null, t_)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            ts.setGoLiveSource(null, t_),
        tO || e)
    ) {
        let t = ns().videoDeviceId;
        (tO && t === e0.dx && tL === e0.dx && tR !== e0.qe ? (t = tR) : (tL = t),
            (tR = (tO = e) ? nU(tT, t) : e0.qe),
            ts.setVideoInputDevice(tR));
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = ni("MediaEngineStore go live"),
                r = ns().videoHook,
                a = nS(),
                s = a ? ((0, p.isWindows)() && L().satisfies(P.A?.os.release, el.fG) ? el.zl : el.eg) : 0,
                l = !1;
            (0, p.isWindows)() && s >= el.zl && (l = !0 === t3 || eS.getConfig({ location: "updateVideo" }).enabled);
            let o = r && em.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: d, minCaptureHeight: c } = ep.getConfig({ location: "updateVideo" });
            ts.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useGraphicsCapture: a,
                        useGraphicsCaptureApiLevel: s,
                        useCaptureDeviceForEncode: (0, p.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: nN(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e4,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? en.definition.defaultConfig : en.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: o,
                        minCaptureWidth: d,
                        minCaptureHeight: c,
                    },
                    quality: e,
                },
                t_,
            );
        }
        null != t.cameraSource &&
            ts.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                t_,
            );
    }
}
function nu(e) {
    switch (e) {
        case e0.CO.KRISP_CPU_OVERUSE:
            return B.B6.KrispCpuOveruse;
        case e0.CO.KRISP_FAILED:
            return B.B6.KrispFailed;
        case e0.CO.KRISP_VAD_CPU_OVERUSE:
            return B.B6.KrispVadCpuOveruse;
        case e0.CO.KRISP_INIT_ERROR:
            return B.B6.KrispInitError;
        case e0.CO.KRISP_INIT_ERROR_NATIVE:
            return B.B6.KrispInitErrorNative;
        case e0.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return B.B6.KrispInitErrorSse4NotSupported;
        case e0.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return B.B6.KrispInitErrorAvx2NotSupported;
        case e0.CO.KRISP_INIT_ERROR_UNSIGNED:
            return B.B6.KrispInitErrorUnsigned;
        case e0.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return B.B6.KrispInitErrorGlobalInit;
        case e0.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return B.B6.KrispInitErrorWeight8k;
        case e0.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return B.B6.KrispInitErrorWeight16k;
        case e0.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return B.B6.KrispInitErrorWeight32k;
        case e0.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return B.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let n_ = new Set([
    e0.CO.KRISP_INIT_ERROR,
    e0.CO.KRISP_INIT_ERROR_NATIVE,
    e0.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e0.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e0.CO.KRISP_INIT_ERROR_UNSIGNED,
    e0.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e0.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e0.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e0.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e0.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nE() {
    t$ = e0.D1.UNKNOWN;
}
function nA(e) {
    e !== t$ && ((t$ = e), i.emitChange());
}
function nh(e, t) {
    if (
        (e2.warn(`Voice processing error: ${e}`),
        (0, B.QW)({ type: B.iy.NOISE_CANCELLER_ERROR, underlyingError: nu(e), voiceProcessingErrorDetails: t }),
        eb.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        n_.has(e))
    ) {
        tF = !0;
        return;
    }
    e === e0.CO.KRISP_VAD_CPU_OVERUSE
        ? M.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tj = !0), M.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nI(e, t) {
    let n = t === e0.$C.LIVE;
    (e2.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, B.QW)({
                type: B.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e0.kv.UNSUPPORTED:
                            return B.B6.VideoBackgroundUnsupported;
                        case e0.kv.INIT_FAILED:
                            return B.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        M.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" }));
}
function nf(e) {
    return { enabled: e, ...(e ? e5 : { useAGC2: !1 }) };
}
function np(e, t) {
    e.setAutomaticGainControl(nf(t));
}
function nT(e, t) {
    let n = (0, ev.A)(t, i.getSystemMicrophoneMode());
    (n !== t && e2.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t));
}
function ng() {
    let e = ns(),
        t = e.inputDeviceId,
        n = eY.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eY.A.hasNoiseSuppression(t) || e.noiseSuppression,
        { maxSampleRateHz: a, maxChannelCount: s } = (function (e, t) {
            let { location: n } = e;
            if (!Q("any", t)) return { maxSampleRateHz: 0, maxChannelCount: 0 };
            let i = (function (e) {
                let { location: t } = e;
                return Z.getConfig({ location: t });
            })({ location: n });
            return Q(i.condition, t)
                ? { maxSampleRateHz: 32e3 * !!i.capSampleRate, maxChannelCount: +!!i.capChannelCount }
                : { maxSampleRateHz: 0, maxChannelCount: 0 };
        })(
            { location: "updateVoiceFidelityCaps" },
            {
                krispEnabled: (0, ev.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    (ts.setVoiceSampleRateCap(a), ts.setVoiceChannelCountCap(s));
}
function nm(e) {
    let t = ns(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eY.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eY.A.hasNoiseSuppression(n) || t.noiseSuppression),
        np(e, eY.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nT(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(nV(t.audioMixerSettings)),
        ng(),
        (0, p.isWindows)() && L().satisfies(P.A?.os.release, ">=10.0.15063") && e.context === e0.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return ef.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nM(tf[i.getInputDeviceId()]) || nM(tp[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, p.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nS() {
    return (0, p.isWindows)() && L().satisfies(P.A?.os.release, el.yg);
}
function nN() {
    return (0, p.isMac)() && ts.supports(e0.O5.SCREEN_CAPTURE_KIT) && L().satisfies(P.A?.os.release, el.e);
}
function nC() {
    return (
        (0, p.isWindows)() &&
        ts.supports(e0.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ts.supports(e0.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nO() {
    return ts.supports(e0.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = na(t);
    return (Object.assign(i, e), !__OVERLAY__ && n && v.w.set(e3, to), i);
}
function nL() {
    let e = ns();
    (nG(e.inputDeviceId),
        ts.setAudioOutputDevice(e.outputDeviceId),
        nc(),
        ts.setInputVolume(e.inputVolume),
        ts.setOutputVolume(e.outputVolume),
        ts.setAecDump(e.aecDumpEnabled),
        ts.setSidechainCompression(e.sidechainCompression),
        ts.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ts.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, p.isLinux)() && T.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        nH(e.audioMixerSettings));
}
function ny() {
    tc || ts.enable().then(() => M.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nD(e, t) {
    return {
        id: e0.dx,
        deviceType: t,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nv(e, t) {
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
let nb = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nM(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function nP(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nD(i, n);
        return { [e.id]: e };
    }
    return N()(r)
        .map((t) => ({
            id: t.id,
            deviceType: n,
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
                    case nv(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nb.test(e.hardwareId):
                        return "INTEGRATED";
                    case N()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nv(e, i):
                    case "audiooutput" === e.type && nv(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
        }))
        .keyBy("id")
        .value();
}
function nU(e, t) {
    let n = e[t] ?? e[e0.dx] ?? N()(e).values().first();
    return null != n ? n.id : t;
}
function nw(e) {
    if (!(0, p.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tf[e];
    t?.guid != null && eU(t.guid, e, ts);
}
function nG(e) {
    (ts.setAudioInputDevice(e),
        nw(e),
        (function (e) {
            if (!(0, p.isMac)()) return;
            let t = tf[e];
            t?.guid != null && ts.watchDeviceHardwareMutedChange?.(t.guid);
        })(e));
}
function nx(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nk() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eG.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eQ.W.USER ? e0.x.DEFAULT : e0.x.STREAM,
            r = i === e0.x.STREAM ? e0.Cn : e0.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = ns(i);
        for (let [e, t] of Object.entries(a))
            null == (0, ex.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                ts.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    ts.eachConnection((t) => {
                        (t.setLocalVolume(e, r), t.setLocalMute(e, !1));
                    }, i));
        nR({ localMutes: s, localVolumes: l }, i);
    }
}
function nF(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    e2.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eF.A.getAudioPid(e),
                    n = "";
                return (null != t && (n = eF.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n });
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = a),
                (0, p.isWindows)() &&
                    n > 1 &&
                    U.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            j.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            M.h.wait(() => {
                                M.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return (null != e && ns().videoHook && U.GH(e), { soundshareId: null, soundshareSession: null });
}
function nB() {
    let e = e0.x.DEFAULT,
        { videoToggleStateMap: t } = ns(e);
    for (let [e, n] of Object.entries(t)) n === eM.bb8.AUTO_PROBING && delete t[e];
    nR({ videoToggleStateMap: t }, e, !1);
}
function nV(e) {
    let { enabled: t } = ek.A.getConfig({ location: "MediaEngineStore" });
    return !0 === e.enabled && t && ts.supports(e0.O5.SPATIAL_AUDIO);
}
function nH(e) {
    ((tK = nV(e)),
        ts.setAudioMixerOptions({
            isSpatial: tK,
            enabled: tK,
            spatialBlend: e.spatialBlend,
            reflectionsEnabled: e.reflectionsEnabled,
            roomSize: e.roomSize,
            distanceAttenuationEnabled: e.distanceAttenuationEnabled,
        }));
}
function nj(e) {
    let t = ns(),
        n = ts.getAudioSubsystem(),
        r = ts.getAudioLayer(),
        a = nU(tf, t.inputDeviceId),
        s = tf[a]?.name,
        l = (0, ev.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eb.default.track(eM.HAw.VOICE_PROCESSING, {
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
function nW() {
    let e = ns(),
        t = t0.size > 0,
        n = e.inputDeviceId,
        i = eY.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eY.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nf(eY.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    (ts.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        ng());
}
async function nY() {
    if (!ts.supports(e0.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((ne = !0), (t9 = ts.supports(e0.O5.GAMESCOPE_CAPTURE)));
}
function nK() {
    return (tk || !1) && !tF;
}
async function n$() {
    try {
        await T.Ay.ensureModule("discord_krisp");
        let e = T.Ay.requireModule("discord_krisp");
        ((tk = !0),
            (u = e.getSdkVersion?.()),
            (_ = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                ((tB = e), i.emitChange());
            }),
            i.emitChange(),
            await T.Ay.ensureModule("discord_voice"));
        let t = T.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        (e2.warn(`Failed to load Krisp module: ${t.message}`), eV.A.captureException(t));
        let e = e0.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e0.CO.KRISP_INIT_ERROR : n;
        }
        ((0, B.QW)({ type: B.iy.NOISE_CANCELLER_ERROR, underlyingError: nu(e) }),
            eb.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e }));
    } finally {
        tx = !1;
    }
}
async function nz() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(te);
        if (null === i) return void e2.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await T.Ay.downloadOpenH264(
                te,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e2.log("OpenH264 download status", e);
                },
            );
            (e2.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0));
        } catch (n) {
            (e2.error("OpenH264 download failed", n), (t = n.message), (e = !1));
        }
        if (
            (eb.default.track(eM.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await T.Ay.cleanupUnusedOpenH264Files([a]);
            e2.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e2.error("OpenH264 download failed", e);
    }
}
function nX(e) {
    e === e0.rB.AUTOMATIC
        ? (nR({ automaticAudioSubsystem: !0 }), nq())
        : (nR({ automaticAudioSubsystem: !1 }), ts.setAudioSubsystem(e));
}
function nq() {
    ts.queueAudioSubsystem(e0.rB.EXPERIMENTAL);
}
function nZ(e) {
    let { section: t } = e;
    return (t === eM.nc_.VOICE && ny(), !1);
}
class nQ extends y.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new ed(ts, this)),
            tg.start(e8, () => {
                (e2.error("Device enumeration timed out"), eb.default.track(eM.HAw.DEVICE_ENUMERATION_TIMEOUT, {}));
            }),
            ts.on(D.bg.Connection, (e) => {
                let t;
                (nW(), nl(e), nd(e), nm(e));
                let n = ns();
                (e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, p.isWindows)()
                        ? (e.setExperimentFlag(e0.fd.H265_HARDWARE_ONLY, !0),
                          (null != tq
                              ? tq
                              : "u" > typeof window
                                ? (tq = nr().then((e) => ((tX = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e0.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, p.isMac)() && e.setExperimentFlag(e0.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, p.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e0.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? eu.definition.defaultConfig : eu.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e0.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e0.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e0.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0));
                let { swallowVolumeOnlySpeakingEvents: r } = G.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e0.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e0.x.STREAM)
                ) {
                    let t = nx(tp);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, p.isWindows)())
                    (e.setExperimentFlag(e0.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e0.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e0.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                else if ((0, p.isMac)())
                    (e.setExperimentFlag(e0.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e0.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e0.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                L().satisfies(window?.DiscordNative?.os.release, e0.Dk)
                            ),
                        ));
                else if ((0, p.isLinux)()) {
                    let { enabled: t } = $.getConfig({ location: "MediaEngineStore" });
                    (t && e.setExperimentFlag(e0.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e0.fd.SIGNAL_AV1_DECODE, !0));
                } else
                    ((0, p.isIOS)() || (0, p.isAndroid)()) &&
                        (e.setExperimentFlag(e0.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e0.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, p.isWeb)()) {
                    let { enabled: t } = J.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e0.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, p.isWindows)() &&
                    t2?.startsWith("AMD") &&
                    eO("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e0.fd.WMF_GPU_ENCODE, !0),
                (0, p.isWindows)() &&
                    t2?.startsWith("Intel") &&
                    !0 === t3 &&
                    1 === t5 &&
                    eR.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e0.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e0.fd.INTEL_GPU_DISABLE, !0)),
                (0, p.isWindows)() &&
                    t2?.startsWith("Intel") &&
                    !0 === t3 &&
                    1 === t5 &&
                    eN.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e0.fd.INTEL_GPU_DISABLE, !0),
                (0, p.isWindows)() &&
                    t2?.startsWith("Qualcomm") &&
                    eO("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e0.fd.WMF_GPU_ENCODE, !0),
                ts.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = ns(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== ej.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== ej.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                (e.on(D.yq.Speaking, (t, n, i, r) => {
                    M.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e0.x.DEFAULT &&
                        ((tD = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tD;
                            ((tD = !0),
                                e && i.emitChange(),
                                tv.start(e7, () => {
                                    ((tD = !1), i.emitChange());
                                }));
                        })),
                    e.on(D.yq.DesktopSourceEnd, (t, n) => {
                        M.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(D.yq.InteractionRequired, (e) => {
                        M.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(D.yq.VideoHookInitialize, (e, t, n, i, r, s) => {
                        a?.desktopSource != null &&
                            eb.default.track(eM.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, W.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, nh),
                    e.on(D.yq.VoiceActivityDetectorError, nh),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        eb.default.track(eM.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        M.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eW.A.bitrate),
                    e.applyVideoQualityMode(eX.A.mode),
                    (0, p.isWindows)() &&
                        ts.supports(e0.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        ts.setAsyncVideoInputDeviceInit(!0));
            }),
            ts.on(D.bg.DeviceChange, (e, t, n) => {
                (tg.stop(),
                    M.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n }));
            }),
            ts.on(D.bg.VolumeChange, (e, t) => {
                M.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            ts.on(D.bg.DesktopSourceEnd, (e, t) => {
                M.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            ts.on(D.bg.AudioPermission, (e) => {
                ((tZ = !0), M.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e }));
            }),
            ts.on(D.bg.VideoPermission, (e) => {
                M.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            ts.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eF.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e2.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != P.A.processUtils.setCrashReason;
                try {
                    await eb.default.track(
                        eM.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e2.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e2.info("Relaunching app due to voice watchdog timeout"),
                    await P.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    P.A.app.relaunch());
            }),
            ts.on(D.bg.VideoInputInitialized, (e) => {
                eb.default.track(eM.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eB.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: e$.A.getMediaSessionId(),
                    rtc_connection_id: e$.A.getRTCConnectionId(),
                });
            }),
            ts.on(D.bg.AudioInputInitialized, (e) => {
                eb.default.track(eM.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eB.A.Millis.SECOND),
                    rtc_connection_id: e$.A.getRTCConnectionId(),
                });
            }),
            ts.on(D.bg.ClipsRecordingRestartNeeded, () => {
                M.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            ts.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = tE < 3;
                ((tE += 1),
                    M.h.wait(() => {
                        (M.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? M.h.dispatch({ type: "CLIPS_RESTART" })
                                : e2.warn(
                                      `Clips init failure budget exhausted (${tE} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  ));
                    }));
            }),
            ts.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== tE && (e2.info(`Clips bridge reported healthy; resetting restart budget (was ${tE}).`), (tE = 0));
            }),
            ts.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                tA !== e && (e2.info(`Clips recorder ready changed: ${e}`), (tA = e));
            }),
            ts.on(D.bg.ClipsBridgeIdleShutdown, () => {
                e2.info("Clips bridge idle shutdown");
            }),
            ts.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && U.c1(t), (s = null));
            }),
            ts.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            ts.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            ts.on(D.bg.NativeScreenSharePickerError, (e) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            ts.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                eb.default.track(eM.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            ts.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? B.iy.VIDEO_ENCODE_ERROR : B.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, B.QW)(
                    t === B.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            ts.on(D.bg.ConnectionStats, (e) => {
                M.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: tt++,
                            context: n.context,
                        };
                    }),
                });
            }),
            ts.on(D.bg.VoiceProcessingError, nh),
            ts.on(D.bg.VideoFilterError, nI),
            ts.on(D.bg.SpatialAudioStatus, nA),
            ts.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nJ(e);
                null !== t && eb.default.track(eM.HAw.VOICE_QUEUE_METRICS, t);
            }),
            ts.setOnVideoContainerResized((e, t, n) => {
                M.h.wait(() =>
                    M.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nY(),
            l.reset(),
            (0, ew.w)().then((e) => {
                null != e && ((t2 = e.gpu_brand), (t3 = e.has_intel_hybrid_igpu), (t5 = e.gpu_count));
            }),
            ts.on(D.bg.DeviceHardwareMutedChange, (e, t) => {
                M.h.dispatch({ type: "AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED", deviceGuid: e, hardwareMuted: t });
            }),
            ts.on(D.bg.SystemMicrophoneModeChange, (e) => {
                ((A = e), ts.eachConnection(nm), i.emitChange());
            }),
            null != (e = v.w.get("audio")) && (v.w.set(e3, { [e0.x.DEFAULT]: e }), v.w.remove("audio")),
            (to = v.w.get(e3) ?? {}),
            N().each(to, (e) => {
                (N().defaultsDeep(e, ti()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eH.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    ts.supports(e0.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 3 &&
                        ((e.audioMixerSettingsVersion = 3), (e.audioMixerSettings = { ...eZ })),
                    (0, p.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)));
            }),
            nL(),
            ((0, p.isWindows)() || (0, p.isLinux)() || (0, p.isMac)()) && !__OVERLAY__ && !tx && !tk
                ? ((tx = !0), n$())
                : (0, p.isWeb)() && ts.supports(e0.O5.NOISE_CANCELLATION)
                  ? ((tk = !0), i.emitChange())
                  : (0, p.isWeb)() && nR({ noiseCancellation: !1 }),
            (0, p.isLinux)() && nz(),
            nB(),
            (0, p.isDesktop)() && p.isPlatformEmbedded && !nt)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    T.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = e0.tl;
                let n = nJ(e);
                (null !== n && eb.default.track(eM.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, e0.tl));
            }
            ((nt = !0), setTimeout(t, e0.tl));
        }
        ((0, p.isWindows)() &&
            p.isPlatformEmbedded &&
            null === tI &&
            ts
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tI = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        (e2.error("Failed to parse codec survey", e), (tI = !1));
                    }
                })
                .catch((e) => {
                    (e2.error("Failed to get codec survey", e), (tI = !1));
                })
                .finally(() => {
                    M.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (t1 = {
                [e0.O5.VIDEO]: ts.supports(e0.O5.VIDEO),
                [e0.O5.DESKTOP_CAPTURE]: ts.supports(e0.O5.DESKTOP_CAPTURE),
                [e0.O5.HYBRID_VIDEO]: ts.supports(e0.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ej.default, eW.A, eY.A, eK.A, x.Ay, V.A, e$.A, j.Ay, eG.A, ez.default, eX.A));
    }
    supports(e) {
        return (e !== e0.O5.VIDEO || !!tl("MediaEngineStore.supports")) && ts.supports(e);
    }
    supportsInApp(e) {
        return (e !== e0.O5.VIDEO || !!tl("MediaEngineStore.supportsInApp")) && (t1[e] || ts.supports(e));
    }
    isSupported() {
        return ts.supported();
    }
    isNoiseSuppressionSupported() {
        return ts.supports(e0.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nK();
    }
    isNoiseCancellationError() {
        return tj;
    }
    isAutomaticGainControlSupported() {
        return ts.supports(e0.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nO() && (ts.supports(e0.O5.LEGACY_AUDIO_SUBSYSTEM) || ts.supports(e0.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ts.supports(e0.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ts.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nK();
    }
    isAecDumpSupported() {
        return ts.supports(e0.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ts.supports(e0.O5.VIDEO) && ts.supports(e0.O5.SIMULCAST);
    }
    getAecDump() {
        return ns().aecDumpEnabled;
    }
    getMediaEngine() {
        return ts;
    }
    getVideoComponent() {
        return ts.Video;
    }
    getCameraComponent() {
        return ts.Camera;
    }
    getKrispSuppressionLevel() {
        return _ ?? 100;
    }
    getKrispEnableStats() {
        return tV;
    }
    isEnabled() {
        return tc;
    }
    isMute() {
        return this.isSelfMute() || tm;
    }
    isDeaf() {
        return this.isSelfDeaf() || tC;
    }
    isServerMute() {
        return tm;
    }
    isServerDeaf() {
        return tC;
    }
    getAudioMixerSettings() {
        return ns().audioMixerSettings;
    }
    isSpatialAudioEnabled() {
        return !0 === this.getAudioMixerSettings().enabled;
    }
    isSpatialAudioRequested() {
        return tK;
    }
    getSpatialAudioStatus() {
        return t$;
    }
    hasContext(e) {
        return null != to[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return e === e0.x.DEFAULT && tS;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return (
            !this.isEnabled() ||
            ns(e).mute ||
            !ey.A.didHavePermission(eq.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e0.x.DEFAULT && tN)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return ty;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ty = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT,
            t = t4 && "voice_isolation" !== this.getSystemMicrophoneMode() && ns(e).mode === eM.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eY.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t6;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return !this.isSupported() || ns(e).deaf;
    }
    isVideoEnabled() {
        return tO && tM;
    }
    isVideoAvailable() {
        return Object.values(tT).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tM;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.STREAM;
        return t_ === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.STREAM;
        return t_ === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT;
        return e !== ej.default.getId() && (ns(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ts.supports(e0.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT;
        return ns(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT;
        return ns(t).videoToggleStateMap[e] ?? eM.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT;
        return t === e0.x.DEFAULT && tQ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return e === e0.x.DEFAULT && tQ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tW;
    }
    isNativeAudioPermissionReady() {
        return tZ;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return t_;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return th;
    }
    isH264MfDecodeAvailable() {
        return tI;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT,
            n = ns(t).localPans[e];
        return null != n ? n : e6;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT,
            n = t === e0.x.STREAM ? e0.Cn : e0.Hz,
            i = ns(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return ns().inputVolume;
    }
    getOutputVolume() {
        return ns().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return ns(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return ns(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            N().each(to, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eM.TBI.PUSH_TO_TALK && td.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nU(tf, ns().inputDeviceId);
    }
    getOutputDeviceId() {
        return nU(tp, ns().outputDeviceId);
    }
    getVideoDeviceId() {
        return nU(tT, ns().videoDeviceId);
    }
    getInputDevices() {
        return tf;
    }
    getOutputDevices() {
        return tp;
    }
    getVideoDevices() {
        return tT;
    }
    getEchoCancellation() {
        let e = ns();
        return eY.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ts.supports(e0.O5.SIDECHAIN_COMPRESSION) && ns().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return ns().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return ns().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tX && tX;
    }
    getOpenH264Enabled() {
        return (0, p.isLinux)() && ns().openH264Enabled;
    }
    getLoopback() {
        return t0.size > 0;
    }
    getLoopbackReasons() {
        return t0;
    }
    getNoiseSuppression() {
        let e = ns();
        return eY.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = ns();
        return eY.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return ns().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return ns().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return ns().silenceWarning;
    }
    getDebugLogging() {
        return ts.getDebugLogging();
    }
    getQoS() {
        return ns().qos;
    }
    getAttenuation() {
        return ns().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return ns().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return ns().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nC() && ns().automaticAudioSubsystem ? e0.rB.AUTOMATIC : ts.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ts.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return ns().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eJ.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return ns(e);
    }
    getState() {
        return {
            settingsByContext: to,
            inputDevices: tf,
            outputDevices: tp,
            appSupported: t1,
            krispModuleLoaded: tk,
            krispFatalError: tF,
            krispVersion: u,
            krispSuppressionLevel: _,
            goLiveSource: a,
            goLiveContext: t_,
        };
    }
    getInputDetectedThisConnection() {
        return tP;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tU;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceHardwareMuted() {
        return c;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return p.isPlatformEmbedded || this.getMode(e) !== eM.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        ts.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tu;
    }
    getVideoHook() {
        return ns().videoHook;
    }
    supportsVideoHook() {
        return ts.supports(e0.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = ns().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return ts.supports(e0.O5.EXPERIMENTAL_SOUNDSHARE) && L().satisfies(P.A?.os.release, el.$x);
    }
    supportsHookSoundshare() {
        return (0, p.isWindows)() && ts.supports(e0.O5.SOUNDSHARE) && L().satisfies(P.A?.os.release, el.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = ns().useSystemScreensharePicker,
            n = (0, p.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return ts.supports(e0.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return ne;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e0.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eA.definition.defaultConfig : eA.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === e0.x.STREAM && "streamer" === t && (0, p.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eT.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (n.push("linux-vulkan"), n.join(","));
    }
    getUseGamescopeCapture() {
        return t9;
    }
    getSpeakingWhileMuted() {
        return tD;
    }
    getKrispModelOverride() {
        return E;
    }
    getKrispModels() {
        return tB;
    }
    getKrispVadActivationThreshold() {
        return ns().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t8;
    }
    setHasActiveCallKitCall(e) {
        t8 = e;
    }
    supportsScreenSoundshare() {
        return (0, p.isMac)()
            ? ts.supports(e0.O5.SOUNDSHARE) && L().satisfies(P.A?.os.release, el.P$) && nN()
            : (0, p.isWindows)()
              ? ts.supports(e0.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, p.isLinux)() && ts.supports(e0.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, p.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tz[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, p.isMac)() || (0, p.isIOS)()) return A;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT,
            t = this.supports(e0.O5.VIDEO)
                ? [{ rid: "100", type: e === e0.x.DEFAULT ? e0.mI.VIDEO : e0.mI.SCREEN, quality: e0.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e0.x.DEFAULT &&
                ee.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: e0.mI.VIDEO, quality: e0.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, p.isWeb)() };
        return ts.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tY &&
            ((tY = !0),
            (0, p.isWeb)() &&
                ts.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    (e2.warn("DAVE preload failed:", e), eV.A.captureException(e));
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return ts.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return tA;
    }
    isClipsRecordingReadySignalSupported() {
        return ts.supports(e0.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return t2;
    }
}
function nJ(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = { metrics_period_ms: e.periodMs, total_tasks: 0, total_exec_time_ns: 0, queue_name: e.queueName };
    ((t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)),
        (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0)));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        i = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let i = n[e];
            ((t[`slow_task_${e}_name`] = i.name), (t[`slow_task_${e}_longest_exec_time_ns`] = i.longestExecTimeNs));
        }
    for (let e = 0; e < 3; e++)
        if (e < i.length) {
            let n = i[e];
            ((t[`delayed_task_${e}_name`] = n.name),
                (t[`delayed_task_${e}_longest_queue_time_ns`] = n.longestQueueTimeNs));
        }
    return ((t.full_task_report = JSON.stringify(n)), t);
}
let n0 = (i = new nQ(M.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && nc(r, null), null == n && nE(), null != t || null == n)) {
            tG = !1;
            return;
        }
        if (tG) return;
        tG = !0;
        let a = ns();
        (a.mute || a.deaf) && (nR({ deaf: !1, mute: !1 }), ts.eachConnection(nd));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                ((tm = t.mute || t.suppress), (tC = t.deaf), ts.eachConnection(nd));
                let e = null != t.guildId && null != t.channelId && null != tH && tH !== t.channelId,
                    n = !tG && null == t.channelId;
                return (nc(!e && !n && tO), (tH = t.channelId), !0);
            }
            return (__OVERLAY__ || t.userId !== ej.default.getId() || null != e$.A.getChannelId() || nc(!1, null), e);
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        ((r = e.sessionId), (tm = !1), (tC = !1));
        let t = ns();
        (nC() && (nO() ? nX(e0.rB.AUTOMATIC) : t.automaticAudioSubsystem && nq()),
            ts.supports(e0.O5.OFFLOAD_ADM_CONTROLS) && ts.setOffloadAdmControls(!0),
            (0, p.isIOS)() &&
                er.getConfig({ location: "handleConnectionOpen" }).enabled &&
                ts.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, p.isIOS)() && (ts.setNcModels?.(ec), i.emitChange()),
            nw(t.inputDeviceId),
            nk());
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return ((0, p.isWeb)() && i.startDavePreload(), !1);
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eM.S7L.CONNECTING:
                ny();
                break;
            case eM.S7L.RTC_CONNECTING:
                ((tU = !1),
                    (o = void 0),
                    (d = void 0),
                    (c = void 0),
                    (tP = !1),
                    (t4 = !1),
                    t7.stop(),
                    tw.stop(),
                    l.reset());
                break;
            case eM.S7L.RTC_CONNECTED:
                nc();
                break;
            case eM.S7L.DISCONNECTED:
                ((nn = {}),
                    (function () {
                        if (0 === tQ.size) return;
                        let e = e0.x.DEFAULT,
                            { disabledLocalVideos: t } = ns(e);
                        (tQ.forEach((n) => {
                            (m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                ts.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
                        }),
                            tQ.clear(),
                            nR({ disabledLocalVideos: t }, e, !1));
                    })(),
                    nB());
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        ((tS = t), ts.eachConnection(nd));
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = ns(t);
        if (t === e0.x.DEFAULT && (ey.A.requestPermission(eq.iL.AUDIO), tN)) return !1;
        ((i = !r && !i) || (r = !1), n || (ty = !0), nR({ mute: i, deaf: r }, t), ts.eachConnection(nd));
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        (nR({ mute: n }, t), i || (ty = !0), ts.eachConnection(nd));
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        (nR({ deaf: !ns(t).deaf }, t), ts.eachConnection(nd));
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === ej.default.getId()) return;
        let { localMutes: i } = ns(t);
        (i[n] ? delete i[n] : (i[n] = !0),
            nR({ localMutes: i }, t),
            ts.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t));
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === eM.bb8.DISABLED,
            { disabledLocalVideos: l } = ns(t),
            o = l[n] ?? !1,
            d = tQ.has(n),
            c = i === eM.bb8.AUTO_ENABLED || i === eM.bb8.MANUAL_ENABLED;
        (e2.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled."));
        let u = s !== o,
            _ = t === e0.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e2.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = ns(t);
        if (
            (h[n] === eM.bb8.AUTO_PROBING &&
                i === eM.bb8.AUTO_ENABLED &&
                (0, eL.A)(n, s ? e0.Al.AUTO_DISABLE : e0.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nR({ videoToggleStateMap: h }, t, r),
            i === eM.bb8.AUTO_PROBING
                ? e$.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : e$.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tJ ||
                (e2.info(`isAutoDisableAllowed=${tJ} - disabling VideoHealthManager`),
                e$.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tJ)) return;
            ((0, eL.A)(n, s ? e0.Al.AUTO_DISABLE : e0.Al.AUTO_ENABLE, c), s ? tQ.add(n) : tQ.delete(n));
        } else
            A &&
                (d && !s
                    ? (e2.info("disallowing auto-disable for this session because of manual override by user"),
                      (tJ = !1),
                      e$.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eL.A)(n, e0.Al.MANUAL_REENABLE, c))
                    : (0, eL.A)(n, s ? e0.Al.MANUAL_DISABLE : e0.Al.MANUAL_ENABLE, c));
        (_ && !s && tQ.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nR({ disabledLocalVideos: l }, t, r),
            ts.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t));
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === ej.default.getId()) return;
        let r = t === e0.x.STREAM ? e0.Cn : e0.Hz,
            { localVolumes: a } = ns(t);
        (i === r ? delete a[n] : (a[n] = i),
            nR({ localVolumes: a }, t),
            ts.eachConnection((e) => e.setLocalVolume(n, i), t));
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        (nR({ audioMixerSettings: n }, t),
            nH(n),
            tK || nE(),
            ts.eachConnection((e) => e.setSpatialAudioEnabled(tK), e0.x.DEFAULT));
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = ns(t);
        ((a[n] = { left: i, right: r }), nR({ localPans: a }, t), ts.eachConnection((e) => e.setLocalPan(n, i, r), t));
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        (nR({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), ts.eachConnection(nl));
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nR({ inputVolume: no(t) }), ts.setInputVolume(t));
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nR({ outputVolume: t }), ts.setOutputVolume(t));
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        ((t = nU(tf, t)),
            (th = performance.now()),
            nR({ inputDeviceId: t }),
            nG(t),
            ts.eachConnection(nm),
            (o = void 0),
            (d = void 0),
            (c = void 0),
            t7.stop(),
            (t4 = !1));
        let { resetSilenceWarningOnDeviceChange: n } = eh.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tP = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        (nR({ outputDeviceId: (t = nU(tp, t)) }), ts.setAudioOutputDevice(t), ts.eachConnection(nm));
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nR({ activeInputProfile: t });
        let n = ns();
        (ts.eachConnection((e) => {
            (nl(e), nm(e));
        }),
            ts.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nW());
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nR({ echoCancellation: e.enabled }),
            n = eY.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        (ts.eachConnection((e) => e.setEchoCancellation(n)), nW(), nj(e.location));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        ((t = nR({ sidechainCompression: e.enabled })), ts.setSidechainCompression(t.sidechainCompression));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nR({ sidechainCompressionStrength: e.strength });
        ts.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return (t ? t0.add(n) : t0.delete(n), nW());
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nR({ noiseSuppression: e.enabled }),
            n = eY.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        (ts.eachConnection((e) => e.setNoiseSuppression(n)), nW(), nj(e.location));
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nR({ automaticGainControl: e.enabled });
        (ts.eachConnection((e) => np(e, t.automaticGainControl)), nW(), nj(e.location));
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nR({ noiseCancellation: e.enabled });
        (ts.eachConnection((e) => nT(e, t.noiseCancellation)), nW(), nj(e.location));
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        (eD.A.setKrispModelOverride(e.model), (E = e.model), nW());
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nR({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        ts.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        ((_ = t), eD.A.setKrispSuppressionLevel(t));
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, p.isWeb)() || ((tV = e.enabled), ts.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nR({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nR({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nR({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nR({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        ts.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        (nR({ qos: t }), ts.eachConnection((e) => e.setQoS(t)));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tf;
        if (
            ((tf = nP(e, { deviceType: e0.oh.AUDIO_INPUT, defaultName: e1.intl.string(e1.t["/QIjDA"]) })),
            !N().isEqual(tf, t))
        ) {
            let e = ns();
            (nG(nU(tf, e.inputDeviceId)), ts.eachConnection(nm));
        }
        !(function (e) {
            let t = tp;
            if (
                ((tp = nP(e, { deviceType: e0.oh.AUDIO_OUTPUT, defaultName: e1.intl.string(e1.t.xlUg0v) })),
                !N().isEqual(tp, t))
            ) {
                let e = ns(),
                    n = nU(tp, e.outputDeviceId);
                (ts.setAudioOutputDevice(n), ts.eachConnection(nm));
                let i = nx(t),
                    r = nx(tp);
                i !== r &&
                    ts.eachConnection((e) => {
                        e.context === e0.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tM = e.videoDevices.length > 0;
        let n = tT;
        if (
            ((tT = nP(e, { deviceType: e0.oh.VIDEO_INPUT, defaultName: e1.intl.string(e1.t.WKWARY) })),
            tO && !N().isEqual(tT, n))
        ) {
            let e = void 0 !== tT[tR],
                t = tR === e0.dx && n[e0.dx]?.disabled,
                i = "Firefox" === O().name && "" === tR && n[tR]?.name === "Default" && !n[tR]?.disabled;
            nc(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nR({ inputVolume: no(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        (v.w.remove(e3), location.reload());
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tU = !0 !== tP && !t), t)) ((tP = !0), (t4 = !1), t7.stop(), tw.stop());
        else if (ns().mode === eM.TBI.VOICE_ACTIVITY && tP) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eh.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            (e &&
                t7.start(e9, () => {
                    (eb.default.track(eM.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tf[nU(tf, ns().inputDeviceId)]?.name,
                        rtc_connection_id: e$.A.getRTCConnectionId(),
                    }),
                        (t4 = !0),
                        i.emitChange());
                }),
                null != t &&
                    tw.start(t * eB.A.Millis.MINUTE, () => {
                        ((tP = !1), l.reset());
                    }));
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        ((d = t), (o = n));
    },
    AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED: function (e) {
        let { deviceGuid: t, hardwareMuted: n } = e,
            i = nU(tf, ns().inputDeviceId),
            r = tf[i];
        if (t !== r?.guid) return !1;
        ((c = n), eb.default.track(eM.HAw.HARDWARE_MUTE_DETECTED, { input_device_name: r?.name, hardware_muted: n }));
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nX(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        (nR({ bypassSystemInputProcessing: t }), ts.setAudioInputBypassSystemProcessing(t), ng(), nj(e.location));
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        ((tc = e.enabled), e.unmute && nR({ mute: !1, deaf: !1 }), ts.eachConnection(nd));
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        (ey.A.requestPermission(eq.iL.CAMERA), nc(t));
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    ((tc = !1), ts.eachConnection(nd));
                    break;
                case "video":
                    nc(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? e0.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = eF.A.getPidFromDesktopSource(i);
            (p.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nF(o, r)),
                s !== t_ && (null != a && ts.setGoLiveSource(null, t_), (t_ = s)),
                nc(s === e0.x.STREAM && tO, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                }));
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e0.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e0.x.STREAM && tO,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            nc(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else nc(tO, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        (nR({ videoDeviceId: (t = nU(tT, t)) }), nc());
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tu !== e.required && ((tu = e.required), e.required || ts.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nZ,
    USER_SETTINGS_MODAL_SET_SECTION: nZ,
    CERTIFIED_DEVICES_SET: function () {
        return (ts.eachConnection(nm), !1);
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        td.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        td.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        ((to = t.settingsByContext),
            (tf = t.inputDevices),
            (tp = t.outputDevices),
            (t1 = t.appSupported),
            (tk = t.krispModuleLoaded),
            (tF = t.krispFatalError),
            (u = t.krispVersion),
            (t_ = t.goLiveContext));
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === eM.g6G.BACKGROUND && tO && !n) ((tb = !0), nc(!1));
        else {
            if (t !== eM.g6G.ACTIVE || !tb) return !1;
            ((tb = !1), nc(!0));
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        ts.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tN) return !1;
        ((tN = n), ts.eachConnection(nd));
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eq.hL.ACCEPTED;
        switch (n) {
            case eq.iL.AUDIO:
                ((tZ = !0), ts.eachConnection(nd));
                break;
            case eq.iL.CAMERA:
                !i && tO && nc(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        ts.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nR({ aecDumpEnabled: t });
        ts.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        (nR({ openH264Enabled: t }), T.Ay?.setOpenH264Enabled?.(t));
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        ((to = Object.values(e0.x).reduce((e, n) => {
            let i = ti();
            return ((e[n] = N().merge(i, t[n])), e);
        }, {})),
            v.w.set(e3, to),
            nL());
    },
    CHANNEL_DELETE: function () {
        if ((!tO && null == a) || null != e$.A.getRTCConnectionId()) return !1;
        nc(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e0.CO.KRISP_CPU_OVERUSE) {
            ((nn.noiseCancellation = !1), (nn.noiseSuppression = !0));
            let e = ns();
            return (ts.eachConnection((t) => nT(t, e.noiseCancellation)), nW(), nj(), !0);
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e0.CO.KRISP_VAD_CPU_OVERUSE &&
            ((nn.modeOptions = { vadUseKrisp: !1 }), ts.eachConnection((e) => nl(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tj && ((tj = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        ts.applyMediaFilterSettings(t).finally(() => {
            ((tW = !1), i.emitChange());
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tW = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tW = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eQ.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nk(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.T)() || null == P.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (ts.setClipsSource(null),
            (0, p.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? U.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && ns().videoHook && U.c1(s.desktopSource.sourcePid)));
        let a = eF.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nF(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = ni("MediaEngineStore clips"),
            c = ns().videoHook,
            u = c && em.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: _, minCaptureHeight: E } = ep.getConfig({ location: "handleClipsInit" });
        ts.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useGraphicsCapture: nS(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nN(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e4,
                hdrCaptureMode: d,
                videoHookAllowDx12: u,
                minCaptureWidth: _,
                minCaptureHeight: E,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e0.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), ts.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t6 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        ((tz[t] = { active: n, available: i }), ng());
    },
}));
