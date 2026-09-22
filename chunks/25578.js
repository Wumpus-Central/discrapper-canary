let i, r, a, s, l, o, d, c, u, _, E, A;
(n.d(t, { yz: () => te, Ay: () => nX }), n(323874), n(14289), n(35956), n(321073));
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
var m = n(284009),
    g = n.n(m),
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
    }),
    eh = (0, Y.mj)({
        name: "2026-09-stream-zero-vad-leading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eI = (0, Y.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    ef = (0, Y.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    ep = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var eT = n(625075);
let em = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eS = (0, Y.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eN = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eC(e) {
    return eN.getConfig({ location: e });
}
let eO = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eR = n(75076),
    eL = n(91777),
    ey = n(559633),
    eD = n(205106),
    ev = n(174459),
    eb = n(652215);
let eM = new es.Vy("AudioEffects");
async function eP(e, t, n) {
    if (!(0, ea.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            M.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            ev.default.track(eb.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        (eM.error("Failed to probe audio effects for device", e),
            ev.default.track(eb.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 }));
    }
}
var eU = n(967347),
    ew = n(617617),
    eG = n(125325),
    ex = n(738566),
    ek = n(353835),
    eF = n(927813),
    eB = n(38405),
    eV = n(350535),
    eH = n(280450),
    ej = n(131319),
    eW = n(347481),
    eY = n(734057),
    eK = n(763827),
    e$ = n(287809),
    ez = n(117549),
    eX = n(765682);
let eq = {
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
var eZ = n(355097),
    eQ = n(621380),
    eJ = n(731854),
    e0 = n(375708);
let e1 = new f.A("MediaEngineStore"),
    e2 = "MediaEngineStore",
    e3 = {
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
    e5 = { left: 1, right: 1 },
    e6 = 5 * eF.A.Millis.SECOND,
    e4 = 2 * eF.A.Millis.SECOND,
    e7 = 30 * eF.A.Millis.SECOND,
    e8 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e9 = 0;
var te =
    (((h = {}).WEBCAM = "WEBCAM"),
    (h.INTEGRATED = "INTEGRATED"),
    (h.BLUETOOTH = "BLUETOOTH"),
    (h.AIRPLAY = "AIRPLAY"),
    (h.HEADSET = "HEADSET"),
    h);
function tt() {
    return {
        mode: eb.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...eq },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: eJ.Hz,
        outputVolume: eJ.Hz,
        inputDeviceId: eJ.dx,
        outputDeviceId: eJ.dx,
        videoDeviceId: eJ.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tr.supports(eJ.O5.VIDEO_HOOK),
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
let tn = {
        [eQ.m.CUSTOM]: {},
        [eQ.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eQ.m.STUDIO]: {
            mode: eb.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    ti = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    tr = (0, D.hB)((0, D.WI)());
function ta(e) {
    return eT.k.getConfig({ location: e }).videoEnabled;
}
e1.enableNativeLogger(!0);
let ts = {},
    tl = new Set([eJ.x.DEFAULT]),
    to = tr.supports(eJ.O5.AUTO_ENABLE),
    td = !1,
    tc = eJ.x.STREAM,
    tu = 0,
    t_ = !1,
    tE = performance.now(),
    tA = null,
    th = { [eJ.dx]: nC("No Input Devices", eJ.oh.AUDIO_INPUT) },
    tI = { [eJ.dx]: nC("No Output Devices", eJ.oh.AUDIO_OUTPUT) },
    tf = { [eJ.dx]: nC("No Video Devices", eJ.oh.VIDEO_INPUT) },
    tp = new b.Ep(),
    tT = !1,
    tm = !1,
    tg = !1,
    tS = !1,
    tN = !1,
    tC = eJ.qe,
    tO = eJ.qe,
    tR = !1,
    tL = !1,
    ty = new b.Ep(),
    tD = !1,
    tv = !1,
    tb = !1,
    tM = !1,
    tP = !1,
    tU = !1,
    tw = !1,
    tG = !1,
    tx = [],
    tk = !1,
    tF = null,
    tB = !1,
    tV = !1,
    tH = !1,
    tj = !1,
    tW = eJ.D1.UNKNOWN,
    tY = {},
    tK = null,
    t$ = null,
    tz = !1;
(eL.A.hasPermission(eX.iL.AUDIO, { showAuthorizationError: !1 }),
    eL.A.hasPermission(eX.iL.CAMERA, { showAuthorizationError: !1 }));
let tX = new Set(),
    tq = !1,
    tZ = new Set(),
    tQ = {},
    tJ = null,
    t0 = null,
    t1 = null,
    t2 = !0,
    t3 = !1,
    t5 = !1,
    t6 = !1,
    t4 = !1,
    t7 = {};
function t8(e) {
    return (function (e) {
        let { location: t } = e;
        return ei.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t9() {
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
function ne() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT,
        t = ts[e];
    return (null == t && ((t = tt()), (ts[e] = t)), t);
}
function nt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT,
        t = ne(e);
    if (e === eJ.x.STREAM)
        return {
            ...t,
            modeOptions: {
                ...t.modeOptions,
                vadLeading: eh.getConfig({ location: "MediaEngineStore.getSettings" }).enabled
                    ? 0
                    : t.modeOptions.vadLeading,
            },
        };
    let n = tn[t.activeInputProfile ?? eQ.m.CUSTOM],
        i = nV() ? t7 : ti,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function nn(e) {
    let t = nt(e.context),
        n = t.mode;
    (e.context === eJ.x.DEFAULT && (0, e_.N)(!1, !1),
        e.setInputMode(n, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && nV(),
            vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: Math.round(t.modeOptions.delay),
        }));
}
function ni(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.Hz;
    return N().clamp(e, 0, t);
}
function nr(e) {
    let t = nt(e.context),
        n = !to || t.mute || t.deaf;
    switch (e.context) {
        case eJ.x.DEFAULT:
            n = n || tT || tm || tg || !eL.A.didHavePermission(eX.iL.AUDIO);
            break;
        case eJ.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    if ((e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eJ.x.DEFAULT)) {
        let { enabled: t } = (function (e) {
            let { location: t } = e;
            return eE.getConfig({ location: t });
        })({ location: "updateConnectionMuteDeaf" });
        (e.setSkipNoiseCancellationIfMuted(t && n), w.A.updateNativeMute());
    }
}
function na() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tN,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, p.isWindows)()
                ? U.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && nt().videoHook && U.c1(n.desktopSource.sourcePid),
            tr.setGoLiveSource(null, tc)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tr.setGoLiveSource(null, tc),
        tN || e)
    ) {
        let t = nt().videoDeviceId;
        (tN && t === eJ.dx && tO === eJ.dx && tC !== eJ.qe ? (t = tC) : (tO = t),
            (tC = (tN = e) ? nD(tf, t) : eJ.qe),
            tr.setVideoInputDevice(tC));
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t8("MediaEngineStore go live"),
                r = nt().videoHook,
                a = nf(),
                s = a ? ((0, p.isWindows)() && L().satisfies(P.A?.os.release, el.fG) ? el.zl : el.eg) : 0,
                l = !1;
            (0, p.isWindows)() && s >= el.zl && (l = !0 === t0 || eg.getConfig({ location: "updateVideo" }).enabled);
            let o = r && em.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: d, minCaptureHeight: c } = ef.getConfig({ location: "updateVideo" });
            tr.setGoLiveSource(
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
                        allowScreenCaptureKit: np(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e6,
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
                tc,
            );
        }
        null != t.cameraSource &&
            tr.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tc,
            );
    }
}
function ns(e) {
    switch (e) {
        case eJ.CO.KRISP_CPU_OVERUSE:
            return B.B6.KrispCpuOveruse;
        case eJ.CO.KRISP_FAILED:
            return B.B6.KrispFailed;
        case eJ.CO.KRISP_VAD_CPU_OVERUSE:
            return B.B6.KrispVadCpuOveruse;
        case eJ.CO.KRISP_INIT_ERROR:
            return B.B6.KrispInitError;
        case eJ.CO.KRISP_INIT_ERROR_NATIVE:
            return B.B6.KrispInitErrorNative;
        case eJ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return B.B6.KrispInitErrorSse4NotSupported;
        case eJ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return B.B6.KrispInitErrorAvx2NotSupported;
        case eJ.CO.KRISP_INIT_ERROR_UNSIGNED:
            return B.B6.KrispInitErrorUnsigned;
        case eJ.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return B.B6.KrispInitErrorGlobalInit;
        case eJ.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return B.B6.KrispInitErrorWeight8k;
        case eJ.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return B.B6.KrispInitErrorWeight16k;
        case eJ.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return B.B6.KrispInitErrorWeight32k;
        case eJ.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return B.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nl = new Set([
    eJ.CO.KRISP_INIT_ERROR,
    eJ.CO.KRISP_INIT_ERROR_NATIVE,
    eJ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eJ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eJ.CO.KRISP_INIT_ERROR_UNSIGNED,
    eJ.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eJ.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eJ.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eJ.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eJ.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function no() {
    tW = eJ.D1.UNKNOWN;
}
function nd(e) {
    e !== tW && ((tW = e), i.emitChange());
}
function nc(e, t) {
    if (
        (e1.warn(`Voice processing error: ${e}`),
        (0, B.QW)({ type: B.iy.NOISE_CANCELLER_ERROR, underlyingError: ns(e), voiceProcessingErrorDetails: t }),
        ev.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nl.has(e))
    ) {
        tG = !0;
        return;
    }
    e === eJ.CO.KRISP_VAD_CPU_OVERUSE
        ? M.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tB = !0), M.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nu(e, t) {
    let n = t === eJ.$C.LIVE;
    (e1.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, B.QW)({
                type: B.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case eJ.kv.UNSUPPORTED:
                            return B.B6.VideoBackgroundUnsupported;
                        case eJ.kv.INIT_FAILED:
                            return B.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        M.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" }));
}
function n_(e) {
    return { enabled: e, ...(e ? e3 : { useAGC2: !1 }) };
}
function nE(e, t) {
    e.setAutomaticGainControl(n_(t));
}
function nA(e, t) {
    let n = (0, eD.A)(t, i.getSystemMicrophoneMode());
    (n !== t && e1.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t));
}
function nh() {
    let e = nt(),
        t = e.inputDeviceId,
        n = eW.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eW.A.hasNoiseSuppression(t) || e.noiseSuppression,
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
                krispEnabled: (0, eD.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    (tr.setVoiceSampleRateCap(a), tr.setVoiceChannelCountCap(s));
}
function nI(e) {
    let t = nt(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eW.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eW.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nE(e, eW.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nA(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(nG(t.audioMixerSettings)),
        nh(),
        (0, p.isWindows)() && L().satisfies(P.A?.os.release, ">=10.0.15063") && e.context === eJ.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return eI.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nL(th[i.getInputDeviceId()]) || nL(tI[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, p.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nf() {
    return (0, p.isWindows)() && L().satisfies(P.A?.os.release, el.yg);
}
function np() {
    return (0, p.isMac)() && tr.supports(eJ.O5.SCREEN_CAPTURE_KIT) && L().satisfies(P.A?.os.release, el.e);
}
function nT() {
    return (
        (0, p.isWindows)() &&
        tr.supports(eJ.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tr.supports(eJ.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nm() {
    return tr.supports(eJ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function ng(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = ne(t);
    return (Object.assign(i, e), !__OVERLAY__ && n && v.w.set(e2, ts), i);
}
function nS() {
    let e = nt();
    (nb(e.inputDeviceId),
        tr.setAudioOutputDevice(e.outputDeviceId),
        na(),
        tr.setInputVolume(e.inputVolume),
        tr.setOutputVolume(e.outputVolume),
        tr.setAecDump(e.aecDumpEnabled),
        tr.setSidechainCompression(e.sidechainCompression),
        tr.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tr.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, p.isLinux)() && T.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        nx(e.audioMixerSettings));
}
function nN() {
    to || tr.enable().then(() => M.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nC(e, t) {
    return {
        id: eJ.dx,
        deviceType: t,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nO(e, t) {
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
let nR = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nL(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function ny(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nC(i, n);
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
                    case nO(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nR.test(e.hardwareId):
                        return "INTEGRATED";
                    case N()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nO(e, i):
                    case "audiooutput" === e.type && nO(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
        }))
        .keyBy("id")
        .value();
}
function nD(e, t) {
    let n = e[t] ?? e[eJ.dx] ?? N()(e).values().first();
    return null != n ? n.id : t;
}
function nv(e) {
    if (!(0, p.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = th[e];
    t?.guid != null && eP(t.guid, e, tr);
}
function nb(e) {
    (tr.setAudioInputDevice(e),
        nv(e),
        (function (e) {
            if (!(0, p.isMac)()) return;
            let t = th[e];
            t?.guid != null && tr.watchDeviceHardwareMutedChange?.(t.guid);
        })(e));
}
function nM(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nP() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ew.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eZ.W.USER ? eJ.x.DEFAULT : eJ.x.STREAM,
            r = i === eJ.x.STREAM ? eJ.Cn : eJ.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = nt(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eG.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                tr.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    tr.eachConnection((t) => {
                        (t.setLocalVolume(e, r), t.setLocalMute(e, !1));
                    }, i));
        ng({ localMutes: s, localVolumes: l }, i);
    }
}
function nU(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    e1.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : ek.A.getAudioPid(e),
                    n = "";
                return (null != t && (n = ek.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n });
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
    return (null != e && nt().videoHook && U.GH(e), { soundshareId: null, soundshareSession: null });
}
function nw() {
    let e = eJ.x.DEFAULT,
        { videoToggleStateMap: t } = nt(e);
    for (let [e, n] of Object.entries(t)) n === eb.bb8.AUTO_PROBING && delete t[e];
    ng({ videoToggleStateMap: t }, e, !1);
}
function nG(e) {
    let { enabled: t } = ex.A.getConfig({ location: "MediaEngineStore" });
    return !0 === e.enabled && t && tr.supports(eJ.O5.SPATIAL_AUDIO);
}
function nx(e) {
    ((tj = nG(e)),
        tr.setAudioMixerOptions({
            isSpatial: tj,
            enabled: tj,
            spatialBlend: e.spatialBlend,
            reflectionsEnabled: e.reflectionsEnabled,
            roomSize: e.roomSize,
            distanceAttenuationEnabled: e.distanceAttenuationEnabled,
        }));
}
function nk(e) {
    let t = nt(),
        n = tr.getAudioSubsystem(),
        r = tr.getAudioLayer(),
        a = nD(th, t.inputDeviceId),
        s = th[a]?.name,
        l = (0, eD.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    ev.default.track(eb.HAw.VOICE_PROCESSING, {
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
function nF() {
    let e = nt(),
        t = tZ.size > 0,
        n = e.inputDeviceId,
        i = eW.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eW.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = n_(eW.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    (tr.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        nh());
}
async function nB() {
    if (!tr.supports(eJ.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t6 = !0), (t5 = tr.supports(eJ.O5.GAMESCOPE_CAPTURE)));
}
function nV() {
    return (tw || !1) && !tG;
}
async function nH() {
    try {
        await T.Ay.ensureModule("discord_krisp");
        let e = T.Ay.requireModule("discord_krisp");
        ((tw = !0),
            (u = e.getSdkVersion?.()),
            (_ = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                ((tx = e), i.emitChange());
            }),
            i.emitChange(),
            await T.Ay.ensureModule("discord_voice"));
        let t = T.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        (e1.warn(`Failed to load Krisp module: ${t.message}`), eB.A.captureException(t));
        let e = eJ.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eJ.CO.KRISP_INIT_ERROR : n;
        }
        ((0, B.QW)({ type: B.iy.NOISE_CANCELLER_ERROR, underlyingError: ns(e) }),
            ev.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e }));
    } finally {
        tU = !1;
    }
}
async function nj() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e8);
        if (null === i) return void e1.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await T.Ay.downloadOpenH264(
                e8,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e1.log("OpenH264 download status", e);
                },
            );
            (e1.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0));
        } catch (n) {
            (e1.error("OpenH264 download failed", n), (t = n.message), (e = !1));
        }
        if (
            (ev.default.track(eb.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await T.Ay.cleanupUnusedOpenH264Files([a]);
            e1.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e1.error("OpenH264 download failed", e);
    }
}
function nW(e) {
    e === eJ.rB.AUTOMATIC
        ? (ng({ automaticAudioSubsystem: !0 }), nY())
        : (ng({ automaticAudioSubsystem: !1 }), tr.setAudioSubsystem(e));
}
function nY() {
    tr.queueAudioSubsystem(eJ.rB.EXPERIMENTAL);
}
function nK(e) {
    let { section: t } = e;
    return (t === eb.nc_.VOICE && nN(), !1);
}
class n$ extends y.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new ed(tr, this)),
            tp.start(e7, () => {
                (e1.error("Device enumeration timed out"), ev.default.track(eb.HAw.DEVICE_ENUMERATION_TIMEOUT, {}));
            }),
            tr.on(D.bg.Connection, (e) => {
                let t;
                (nF(), nn(e), nr(e), nI(e));
                let n = nt();
                (e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, p.isWindows)()
                        ? (e.setExperimentFlag(eJ.fd.H265_HARDWARE_ONLY, !0),
                          (null != t$
                              ? t$
                              : "u" > typeof window
                                ? (t$ = t9().then((e) => ((tK = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eJ.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, p.isMac)() && e.setExperimentFlag(eJ.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, p.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eJ.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? eu.definition.defaultConfig : eu.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eJ.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eJ.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eJ.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0));
                let { swallowVolumeOnlySpeakingEvents: r } = G.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eJ.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eJ.x.STREAM)
                ) {
                    let t = nM(tI);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, p.isWindows)())
                    (e.setExperimentFlag(eJ.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eJ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eJ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                else if ((0, p.isMac)())
                    (e.setExperimentFlag(eJ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eJ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eJ.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                L().satisfies(window?.DiscordNative?.os.release, eJ.Dk)
                            ),
                        ));
                else if ((0, p.isLinux)()) {
                    let { enabled: t } = $.getConfig({ location: "MediaEngineStore" });
                    (t && e.setExperimentFlag(eJ.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eJ.fd.SIGNAL_AV1_DECODE, !0));
                } else
                    ((0, p.isIOS)() || (0, p.isAndroid)()) &&
                        (e.setExperimentFlag(eJ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eJ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, p.isWeb)()) {
                    let { enabled: t } = J.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eJ.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, p.isWindows)() &&
                    tJ?.startsWith("AMD") &&
                    eC("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eJ.fd.WMF_GPU_ENCODE, !0),
                (0, p.isWindows)() &&
                    tJ?.startsWith("Intel") &&
                    !0 === t0 &&
                    1 === t1 &&
                    eO.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(eJ.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(eJ.fd.INTEL_GPU_DISABLE, !0)),
                (0, p.isWindows)() &&
                    tJ?.startsWith("Intel") &&
                    !0 === t0 &&
                    1 === t1 &&
                    eS.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eJ.fd.INTEL_GPU_DISABLE, !0),
                (0, p.isWindows)() &&
                    tJ?.startsWith("Qualcomm") &&
                    eC("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eJ.fd.WMF_GPU_ENCODE, !0),
                tr.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = nt(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== eH.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eH.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                (e.on(D.yq.Speaking, (t, n, i, r) => {
                    M.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eJ.x.DEFAULT &&
                        ((tL = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tL;
                            ((tL = !0),
                                e && i.emitChange(),
                                ty.start(e4, () => {
                                    ((tL = !1), i.emitChange());
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
                            ev.default.track(eb.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, W.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, nc),
                    e.on(D.yq.VoiceActivityDetectorError, nc),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        ev.default.track(eb.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        M.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(ej.A.bitrate),
                    e.applyVideoQualityMode(ez.A.mode),
                    (0, p.isWindows)() &&
                        tr.supports(eJ.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        tr.setAsyncVideoInputDeviceInit(!0));
            }),
            tr.on(D.bg.DeviceChange, (e, t, n) => {
                (tp.stop(),
                    M.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n }));
            }),
            tr.on(D.bg.VolumeChange, (e, t) => {
                M.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            tr.on(D.bg.DesktopSourceEnd, (e, t) => {
                M.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            tr.on(D.bg.AudioPermission, (e) => {
                ((tz = !0), M.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e }));
            }),
            tr.on(D.bg.VideoPermission, (e) => {
                M.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            tr.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await ek.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e1.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != P.A.processUtils.setCrashReason;
                try {
                    await ev.default.track(
                        eb.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e1.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e1.info("Relaunching app due to voice watchdog timeout"),
                    await P.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    P.A.app.relaunch());
            }),
            tr.on(D.bg.VideoInputInitialized, (e) => {
                ev.default.track(eb.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eF.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eK.A.getMediaSessionId(),
                    rtc_connection_id: eK.A.getRTCConnectionId(),
                });
            }),
            tr.on(D.bg.AudioInputInitialized, (e) => {
                ev.default.track(eb.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eF.A.Millis.SECOND),
                    rtc_connection_id: eK.A.getRTCConnectionId(),
                });
            }),
            tr.on(D.bg.ClipsRecordingRestartNeeded, () => {
                M.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            tr.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = tu < 3;
                ((tu += 1),
                    M.h.wait(() => {
                        (M.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? M.h.dispatch({ type: "CLIPS_RESTART" })
                                : e1.warn(
                                      `Clips init failure budget exhausted (${tu} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  ));
                    }));
            }),
            tr.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== tu && (e1.info(`Clips bridge reported healthy; resetting restart budget (was ${tu}).`), (tu = 0));
            }),
            tr.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                t_ !== e && (e1.info(`Clips recorder ready changed: ${e}`), (t_ = e));
            }),
            tr.on(D.bg.ClipsBridgeIdleShutdown, () => {
                e1.info("Clips bridge idle shutdown");
            }),
            tr.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && U.c1(t), (s = null));
            }),
            tr.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            tr.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            tr.on(D.bg.NativeScreenSharePickerError, (e) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            tr.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                ev.default.track(eb.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            tr.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? B.iy.VIDEO_ENCODE_ERROR : B.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, B.QW)(
                    t === B.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            tr.on(D.bg.ConnectionStats, (e) => {
                M.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e9++,
                            context: n.context,
                        };
                    }),
                });
            }),
            tr.on(D.bg.VoiceProcessingError, nc),
            tr.on(D.bg.VideoFilterError, nu),
            tr.on(D.bg.SpatialAudioStatus, nd),
            tr.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nz(e);
                null !== t && ev.default.track(eb.HAw.VOICE_QUEUE_METRICS, t);
            }),
            tr.setOnVideoContainerResized((e, t, n) => {
                M.h.wait(() =>
                    M.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nB(),
            l.reset(),
            (0, eU.w)().then((e) => {
                null != e && ((tJ = e.gpu_brand), (t0 = e.has_intel_hybrid_igpu), (t1 = e.gpu_count));
            }),
            tr.on(D.bg.DeviceHardwareMutedChange, (e, t) => {
                M.h.dispatch({ type: "AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED", deviceGuid: e, hardwareMuted: t });
            }),
            tr.on(D.bg.SystemMicrophoneModeChange, (e) => {
                ((A = e), tr.eachConnection(nI), i.emitChange());
            }),
            null != (e = v.w.get("audio")) && (v.w.set(e2, { [eJ.x.DEFAULT]: e }), v.w.remove("audio")),
            (ts = v.w.get(e2) ?? {}),
            N().each(ts, (e) => {
                (N().defaultsDeep(e, tt()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eV.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    tr.supports(eJ.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 3 &&
                        ((e.audioMixerSettingsVersion = 3), (e.audioMixerSettings = { ...eq })),
                    (0, p.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)));
            }),
            nS(),
            ((0, p.isWindows)() || (0, p.isLinux)() || (0, p.isMac)()) && !__OVERLAY__ && !tU && !tw
                ? ((tU = !0), nH())
                : (0, p.isWeb)() && tr.supports(eJ.O5.NOISE_CANCELLATION)
                  ? ((tw = !0), i.emitChange())
                  : (0, p.isWeb)() && ng({ noiseCancellation: !1 }),
            (0, p.isLinux)() && nj(),
            nw(),
            (0, p.isDesktop)() && p.isPlatformEmbedded && !t4)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    T.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = eJ.tl;
                let n = nz(e);
                (null !== n && ev.default.track(eb.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, eJ.tl));
            }
            ((t4 = !0), setTimeout(t, eJ.tl));
        }
        ((0, p.isWindows)() &&
            p.isPlatformEmbedded &&
            null === tA &&
            tr
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tA = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        (e1.error("Failed to parse codec survey", e), (tA = !1));
                    }
                })
                .catch((e) => {
                    (e1.error("Failed to get codec survey", e), (tA = !1));
                })
                .finally(() => {
                    M.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (tQ = {
                [eJ.O5.VIDEO]: tr.supports(eJ.O5.VIDEO),
                [eJ.O5.DESKTOP_CAPTURE]: tr.supports(eJ.O5.DESKTOP_CAPTURE),
                [eJ.O5.HYBRID_VIDEO]: tr.supports(eJ.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eH.default, ej.A, eW.A, eY.A, x.Ay, V.A, eK.A, j.Ay, ew.A, e$.default, ez.A));
    }
    supports(e) {
        return (e !== eJ.O5.VIDEO || !!ta("MediaEngineStore.supports")) && tr.supports(e);
    }
    supportsInApp(e) {
        return (e !== eJ.O5.VIDEO || !!ta("MediaEngineStore.supportsInApp")) && (tQ[e] || tr.supports(e));
    }
    isSupported() {
        return tr.supported();
    }
    isNoiseSuppressionSupported() {
        return tr.supports(eJ.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nV();
    }
    isNoiseCancellationError() {
        return tB;
    }
    isAutomaticGainControlSupported() {
        return tr.supports(eJ.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nm() && (tr.supports(eJ.O5.LEGACY_AUDIO_SUBSYSTEM) || tr.supports(eJ.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tr.supports(eJ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tr.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nV();
    }
    isAecDumpSupported() {
        return tr.supports(eJ.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tr.supports(eJ.O5.VIDEO) && tr.supports(eJ.O5.SIMULCAST);
    }
    getAecDump() {
        return nt().aecDumpEnabled;
    }
    getMediaEngine() {
        return tr;
    }
    getVideoComponent() {
        return tr.Video;
    }
    getCameraComponent() {
        return tr.Camera;
    }
    getKrispSuppressionLevel() {
        return _ ?? 100;
    }
    getKrispEnableStats() {
        return tk;
    }
    isEnabled() {
        return to;
    }
    isMute() {
        return this.isSelfMute() || tT;
    }
    isDeaf() {
        return this.isSelfDeaf() || tS;
    }
    isServerMute() {
        return tT;
    }
    isServerDeaf() {
        return tS;
    }
    getAudioMixerSettings() {
        return nt().audioMixerSettings;
    }
    isSpatialAudioEnabled() {
        return !0 === this.getAudioMixerSettings().enabled;
    }
    isSpatialAudioRequested() {
        return tj;
    }
    getSpatialAudioStatus() {
        return tW;
    }
    hasContext(e) {
        return null != ts[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return e === eJ.x.DEFAULT && tm;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return (
            !this.isEnabled() ||
            nt(e).mute ||
            !eL.A.didHavePermission(eX.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eJ.x.DEFAULT && tg)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tR;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tR = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eW.A.isHardwareMute(this.getInputDeviceId());
    }
    isHardwareMuteNoticeEnabled() {
        return t2;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return !this.isSupported() || nt(e).deaf;
    }
    isVideoEnabled() {
        return tN && tv;
    }
    isVideoAvailable() {
        return Object.values(tf).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tv;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.STREAM;
        return tc === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.STREAM;
        return tc === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT;
        return e !== eH.default.getId() && (nt(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tr.supports(eJ.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT;
        return nt(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT;
        return nt(t).videoToggleStateMap[e] ?? eb.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT;
        return t === eJ.x.DEFAULT && tX.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return e === eJ.x.DEFAULT && tX.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tV;
    }
    isNativeAudioPermissionReady() {
        return tz;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tc;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tE;
    }
    isH264MfDecodeAvailable() {
        return tA;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT,
            n = nt(t).localPans[e];
        return null != n ? n : e5;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT,
            n = t === eJ.x.STREAM ? eJ.Cn : eJ.Hz,
            i = nt(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return nt().inputVolume;
    }
    getOutputVolume() {
        return nt().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return nt(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return nt(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            N().each(ts, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eb.TBI.PUSH_TO_TALK && tl.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nD(th, nt().inputDeviceId);
    }
    getOutputDeviceId() {
        return nD(tI, nt().outputDeviceId);
    }
    getVideoDeviceId() {
        return nD(tf, nt().videoDeviceId);
    }
    getInputDevices() {
        return th;
    }
    getOutputDevices() {
        return tI;
    }
    getVideoDevices() {
        return tf;
    }
    getEchoCancellation() {
        let e = nt();
        return eW.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tr.supports(eJ.O5.SIDECHAIN_COMPRESSION) && nt().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return nt().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return nt().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tK && tK;
    }
    getOpenH264Enabled() {
        return (0, p.isLinux)() && nt().openH264Enabled;
    }
    getLoopback() {
        return tZ.size > 0;
    }
    getLoopbackReasons() {
        return tZ;
    }
    getNoiseSuppression() {
        let e = nt();
        return eW.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = nt();
        return eW.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return nt().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return nt().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return nt().silenceWarning;
    }
    getDebugLogging() {
        return tr.getDebugLogging();
    }
    getQoS() {
        return nt().qos;
    }
    getAttenuation() {
        return nt().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return nt().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return nt().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nT() && nt().automaticAudioSubsystem ? eJ.rB.AUTOMATIC : tr.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tr.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return nt().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eQ.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return nt(e);
    }
    getState() {
        return {
            settingsByContext: ts,
            inputDevices: th,
            outputDevices: tI,
            appSupported: tQ,
            krispModuleLoaded: tw,
            krispFatalError: tG,
            krispVersion: u,
            krispSuppressionLevel: _,
            goLiveSource: a,
            goLiveContext: tc,
        };
    }
    getInputDetectedThisConnection() {
        return tb;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tM;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return p.isPlatformEmbedded || this.getMode(e) !== eb.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        tr.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return td;
    }
    getVideoHook() {
        return nt().videoHook;
    }
    supportsVideoHook() {
        return tr.supports(eJ.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = nt().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tr.supports(eJ.O5.EXPERIMENTAL_SOUNDSHARE) && L().satisfies(P.A?.os.release, el.$x);
    }
    supportsHookSoundshare() {
        return (0, p.isWindows)() && tr.supports(eJ.O5.SOUNDSHARE) && L().satisfies(P.A?.os.release, el.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = nt().useSystemScreensharePicker,
            n = (0, p.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tr.supports(eJ.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t6;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eJ.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eA.definition.defaultConfig : eA.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === eJ.x.STREAM && "streamer" === t && (0, p.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = ep.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (n.push("linux-vulkan"), n.join(","));
    }
    getUseGamescopeCapture() {
        return t5;
    }
    getSpeakingWhileMuted() {
        return tL;
    }
    getKrispModelOverride() {
        return E;
    }
    getKrispModels() {
        return tx;
    }
    getKrispVadActivationThreshold() {
        return nt().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t3;
    }
    setHasActiveCallKitCall(e) {
        t3 = e;
    }
    supportsScreenSoundshare() {
        return (0, p.isMac)()
            ? tr.supports(eJ.O5.SOUNDSHARE) && L().satisfies(P.A?.os.release, el.P$) && np()
            : (0, p.isWindows)()
              ? tr.supports(eJ.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, p.isLinux)() && tr.supports(eJ.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, p.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tY[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, p.isMac)() || (0, p.isIOS)()) return A;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT,
            t = this.supports(eJ.O5.VIDEO)
                ? [{ rid: "100", type: e === eJ.x.DEFAULT ? eJ.mI.VIDEO : eJ.mI.SCREEN, quality: eJ.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eJ.x.DEFAULT &&
                ee.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: eJ.mI.VIDEO, quality: eJ.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, p.isWeb)() };
        return tr.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tH &&
            ((tH = !0),
            (0, p.isWeb)() &&
                tr.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    (e1.warn("DAVE preload failed:", e), eB.A.captureException(e));
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return tr.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return t_;
    }
    isClipsRecordingReadySignalSupported() {
        return tr.supports(eJ.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return tJ;
    }
}
function nz(e) {
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
let nX = (i = new n$(M.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && na(r, null), null == n && no(), null != t || null == n)) {
            tP = !1;
            return;
        }
        if (tP) return;
        tP = !0;
        let a = nt();
        (a.mute || a.deaf) && (ng({ deaf: !1, mute: !1 }), tr.eachConnection(nr));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                ((tT = t.mute || t.suppress), (tS = t.deaf), tr.eachConnection(nr));
                let e = null != t.guildId && null != t.channelId && null != tF && tF !== t.channelId,
                    n = !tP && null == t.channelId;
                return (na(!e && !n && tN), (tF = t.channelId), !0);
            }
            return (__OVERLAY__ || t.userId !== eH.default.getId() || null != eK.A.getChannelId() || na(!1, null), e);
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        ((r = e.sessionId), (tT = !1), (tS = !1));
        let t = nt();
        (nT() && (nm() ? nW(eJ.rB.AUTOMATIC) : t.automaticAudioSubsystem && nY()),
            tr.supports(eJ.O5.OFFLOAD_ADM_CONTROLS) && tr.setOffloadAdmControls(!0),
            (0, p.isIOS)() &&
                er.getConfig({ location: "handleConnectionOpen" }).enabled &&
                tr.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, p.isIOS)() && (tr.setNcModels?.(ec), i.emitChange()),
            nv(t.inputDeviceId),
            nP());
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return ((0, p.isWeb)() && i.startDavePreload(), !1);
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eb.S7L.CONNECTING:
                nN();
                break;
            case eb.S7L.RTC_CONNECTING:
                ((tM = !1), (o = void 0), (d = void 0), (c = void 0), (tb = !1), l.reset());
                break;
            case eb.S7L.RTC_CONNECTED:
                na();
                break;
            case eb.S7L.DISCONNECTED:
                ((t7 = {}),
                    (function () {
                        if (0 === tX.size) return;
                        let e = eJ.x.DEFAULT,
                            { disabledLocalVideos: t } = nt(e);
                        (tX.forEach((n) => {
                            (g()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                tr.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
                        }),
                            tX.clear(),
                            ng({ disabledLocalVideos: t }, e, !1));
                    })(),
                    nw());
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        ((tm = t), tr.eachConnection(nr));
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = nt(t);
        if (t === eJ.x.DEFAULT && (eL.A.requestPermission(eX.iL.AUDIO), tg)) return !1;
        ((i = !r && !i) || (r = !1), n || (tR = !0), ng({ mute: i, deaf: r }, t), tr.eachConnection(nr));
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        (ng({ mute: n }, t), i || (tR = !0), tr.eachConnection(nr));
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        (ng({ deaf: !nt(t).deaf }, t), tr.eachConnection(nr));
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eH.default.getId()) return;
        let { localMutes: i } = nt(t);
        (i[n] ? delete i[n] : (i[n] = !0),
            ng({ localMutes: i }, t),
            tr.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t));
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        g()(!(r && a), "These are not allowed to both be true.");
        let s = i === eb.bb8.DISABLED,
            { disabledLocalVideos: l } = nt(t),
            o = l[n] ?? !1,
            d = tX.has(n),
            c = i === eb.bb8.AUTO_ENABLED || i === eb.bb8.MANUAL_ENABLED;
        (e1.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            g()(!(d && !o), "If you are auto-disabled, then you are also disabled."));
        let u = s !== o,
            _ = t === eJ.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e1.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = nt(t);
        if (
            (h[n] === eb.bb8.AUTO_PROBING &&
                i === eb.bb8.AUTO_ENABLED &&
                (0, eR.A)(n, s ? eJ.Al.AUTO_DISABLE : eJ.Al.AUTO_ENABLE, c),
            (h[n] = i),
            ng({ videoToggleStateMap: h }, t, r),
            i === eb.bb8.AUTO_PROBING
                ? eK.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eK.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tq ||
                (e1.info(`isAutoDisableAllowed=${tq} - disabling VideoHealthManager`),
                eK.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tq)) return;
            ((0, eR.A)(n, s ? eJ.Al.AUTO_DISABLE : eJ.Al.AUTO_ENABLE, c), s ? tX.add(n) : tX.delete(n));
        } else
            A &&
                (d && !s
                    ? (e1.info("disallowing auto-disable for this session because of manual override by user"),
                      (tq = !1),
                      eK.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eR.A)(n, eJ.Al.MANUAL_REENABLE, c))
                    : (0, eR.A)(n, s ? eJ.Al.MANUAL_DISABLE : eJ.Al.MANUAL_ENABLE, c));
        (_ && !s && tX.delete(n),
            s ? (l[n] = !0) : delete l[n],
            ng({ disabledLocalVideos: l }, t, r),
            tr.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t));
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eH.default.getId()) return;
        let r = t === eJ.x.STREAM ? eJ.Cn : eJ.Hz,
            { localVolumes: a } = nt(t);
        (i === r ? delete a[n] : (a[n] = i),
            ng({ localVolumes: a }, t),
            tr.eachConnection((e) => e.setLocalVolume(n, i), t));
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        (ng({ audioMixerSettings: n }, t),
            nx(n),
            tj || no(),
            tr.eachConnection((e) => e.setSpatialAudioEnabled(tj), eJ.x.DEFAULT));
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = nt(t);
        ((a[n] = { left: i, right: r }), ng({ localPans: a }, t), tr.eachConnection((e) => e.setLocalPan(n, i, r), t));
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        (ng({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), tr.eachConnection(nn));
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (ng({ inputVolume: ni(t) }), tr.setInputVolume(t));
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (ng({ outputVolume: t }), tr.setOutputVolume(t));
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        ((t = nD(th, t)),
            (tE = performance.now()),
            ng({ inputDeviceId: t }),
            nb(t),
            tr.eachConnection(nI),
            (o = void 0),
            (d = void 0),
            (c = void 0),
            (tb = !1),
            l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        (ng({ outputDeviceId: (t = nD(tI, t)) }), tr.setAudioOutputDevice(t), tr.eachConnection(nI));
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        ng({ activeInputProfile: t });
        let n = nt();
        (tr.eachConnection((e) => {
            (nn(e), nI(e));
        }),
            tr.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nF());
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = ng({ echoCancellation: e.enabled }),
            n = eW.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        (tr.eachConnection((e) => e.setEchoCancellation(n)), nF(), nk(e.location));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        ((t = ng({ sidechainCompression: e.enabled })), tr.setSidechainCompression(t.sidechainCompression));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = ng({ sidechainCompressionStrength: e.strength });
        tr.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return (t ? tZ.add(n) : tZ.delete(n), nF());
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = ng({ noiseSuppression: e.enabled }),
            n = eW.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        (tr.eachConnection((e) => e.setNoiseSuppression(n)), nF(), nk(e.location));
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = ng({ automaticGainControl: e.enabled });
        (tr.eachConnection((e) => nE(e, t.automaticGainControl)), nF(), nk(e.location));
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = ng({ noiseCancellation: e.enabled });
        (tr.eachConnection((e) => nA(e, t.noiseCancellation)), nF(), nk(e.location));
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        (ey.A.setKrispModelOverride(e.model), (E = e.model), nF());
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        ng({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        tr.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        ((_ = t), ey.A.setKrispSuppressionLevel(t));
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, p.isWeb)() || ((tk = e.enabled), tr.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        ng({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        ng({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        ng({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = ng({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        tr.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        (ng({ qos: t }), tr.eachConnection((e) => e.setQoS(t)));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = th;
        if (
            ((th = ny(e, { deviceType: eJ.oh.AUDIO_INPUT, defaultName: e0.intl.string(e0.t["/QIjDA"]) })),
            !N().isEqual(th, t))
        ) {
            let e = nt();
            (nb(nD(th, e.inputDeviceId)), tr.eachConnection(nI));
        }
        !(function (e) {
            let t = tI;
            if (
                ((tI = ny(e, { deviceType: eJ.oh.AUDIO_OUTPUT, defaultName: e0.intl.string(e0.t.xlUg0v) })),
                !N().isEqual(tI, t))
            ) {
                let e = nt(),
                    n = nD(tI, e.outputDeviceId);
                (tr.setAudioOutputDevice(n), tr.eachConnection(nI));
                let i = nM(t),
                    r = nM(tI);
                i !== r &&
                    tr.eachConnection((e) => {
                        e.context === eJ.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tv = e.videoDevices.length > 0;
        let n = tf;
        if (
            ((tf = ny(e, { deviceType: eJ.oh.VIDEO_INPUT, defaultName: e0.intl.string(e0.t.WKWARY) })),
            tN && !N().isEqual(tf, n))
        ) {
            let e = void 0 !== tf[tC],
                t = tC === eJ.dx && n[eJ.dx]?.disabled,
                i = "Firefox" === O().name && "" === tC && n[tC]?.name === "Default" && !n[tC]?.disabled;
            na(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        ng({ inputVolume: ni(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        (v.w.remove(e2), location.reload());
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        ((tM = !0 !== tb && !t), t && (tb = !0));
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        ((d = t), (o = n));
    },
    AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED: function (e) {
        let { deviceGuid: t, hardwareMuted: n } = e,
            i = nD(th, nt().inputDeviceId),
            r = th[i];
        if (t !== r?.guid) return !1;
        ((c = n), ev.default.track(eb.HAw.HARDWARE_MUTE_DETECTED, { input_device_name: r?.name, hardware_muted: n }));
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nW(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        (ng({ bypassSystemInputProcessing: t }), tr.setAudioInputBypassSystemProcessing(t), nh(), nk(e.location));
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        ((to = e.enabled), e.unmute && ng({ mute: !1, deaf: !1 }), tr.eachConnection(nr));
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        (eL.A.requestPermission(eX.iL.CAMERA), na(t));
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    ((to = !1), tr.eachConnection(nr));
                    break;
                case "video":
                    na(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? eJ.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = ek.A.getPidFromDesktopSource(i);
            (p.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nU(o, r)),
                s !== tc && (null != a && tr.setGoLiveSource(null, tc), (tc = s)),
                na(s === eJ.x.STREAM && tN, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                }));
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eJ.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === eJ.x.STREAM && tN,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            na(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else na(tN, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        (ng({ videoDeviceId: (t = nD(tf, t)) }), na());
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return td !== e.required && ((td = e.required), e.required || tr.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nK,
    USER_SETTINGS_MODAL_SET_SECTION: nK,
    CERTIFIED_DEVICES_SET: function () {
        return (tr.eachConnection(nI), !1);
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tl.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tl.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        ((ts = t.settingsByContext),
            (th = t.inputDevices),
            (tI = t.outputDevices),
            (tQ = t.appSupported),
            (tw = t.krispModuleLoaded),
            (tG = t.krispFatalError),
            (u = t.krispVersion),
            (tc = t.goLiveContext));
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === eb.g6G.BACKGROUND && tN && !n) ((tD = !0), na(!1));
        else {
            if (t !== eb.g6G.ACTIVE || !tD) return !1;
            ((tD = !1), na(!0));
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        tr.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tg) return !1;
        ((tg = n), tr.eachConnection(nr));
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eX.hL.ACCEPTED;
        switch (n) {
            case eX.iL.AUDIO:
                ((tz = !0), tr.eachConnection(nr));
                break;
            case eX.iL.CAMERA:
                !i && tN && na(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        tr.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = ng({ aecDumpEnabled: t });
        tr.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        (ng({ openH264Enabled: t }), T.Ay?.setOpenH264Enabled?.(t));
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        ((ts = Object.values(eJ.x).reduce((e, n) => {
            let i = tt();
            return ((e[n] = N().merge(i, t[n])), e);
        }, {})),
            v.w.set(e2, ts),
            nS());
    },
    CHANNEL_DELETE: function () {
        if ((!tN && null == a) || null != eK.A.getRTCConnectionId()) return !1;
        na(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eJ.CO.KRISP_CPU_OVERUSE) {
            ((t7.noiseCancellation = !1), (t7.noiseSuppression = !0));
            let e = nt();
            return (tr.eachConnection((t) => nA(t, e.noiseCancellation)), nF(), nk(), !0);
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eJ.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t7.modeOptions = { vadUseKrisp: !1 }), tr.eachConnection((e) => nn(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tB && ((tB = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        tr.applyMediaFilterSettings(t).finally(() => {
            ((tV = !1), i.emitChange());
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tV = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tV = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eZ.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nP(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.T)() || null == P.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (tr.setClipsSource(null),
            (0, p.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? U.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && nt().videoHook && U.c1(s.desktopSource.sourcePid)));
        let a = ek.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nU(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = t8("MediaEngineStore clips"),
            c = nt().videoHook,
            u = c && em.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: _, minCaptureHeight: E } = ef.getConfig({ location: "handleClipsInit" });
        tr.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useGraphicsCapture: nf(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: np(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e6,
                hdrCaptureMode: d,
                videoHookAllowDx12: u,
                minCaptureWidth: _,
                minCaptureHeight: E,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eJ.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), tr.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t2 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        ((tY[t] = { active: n, available: i }), nh());
    },
}));
