let i, r, a, s, l, o, d, c, u, _, E, A;
(n.d(t, { yz: () => e8, Ay: () => nH }), n(323874), n(14289), n(35956), n(321073));
var h,
    f = n(823598),
    I = n(626584),
    p = n(723702),
    T = n(19575);
(0, f.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (p.isPlatformEmbedded) {
                let e = (0, f.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new I.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
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
    D = n(205693),
    v = n(506774),
    b = n(451988),
    M = n(73153),
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
var Z = n(403362);
let q = (0, Y.mj)({
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
            (0, Z.xb)(e);
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
    ef = (0, Y.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    eI = (0, Y.mj)({
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
    if (!L().satisfies(P.A.os.release, ">=10.0.22000"))
        return Promise.reject(Error("Audio effects querying likely not supported on this Windows version."));
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
    ex = n(353835),
    ek = n(927813),
    eF = n(38405),
    eB = n(350535),
    eV = n(280450),
    eH = n(131319),
    ej = n(347481),
    eW = n(734057),
    eY = n(763827),
    eK = n(287809),
    e$ = n(117549),
    ez = n(765682),
    eX = n(355097),
    eZ = n(621380),
    eq = n(731854),
    eQ = n(375708);
let eJ = new I.A("MediaEngineStore"),
    e0 = "MediaEngineStore",
    e1 = {
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
    e2 = { left: 1, right: 1 },
    e3 = 5 * ek.A.Millis.SECOND,
    e5 = 2 * ek.A.Millis.SECOND,
    e6 = 30 * ek.A.Millis.SECOND,
    e4 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e7 = 0;
var e8 =
    (((h = {}).WEBCAM = "WEBCAM"),
    (h.INTEGRATED = "INTEGRATED"),
    (h.BLUETOOTH = "BLUETOOTH"),
    (h.AIRPLAY = "AIRPLAY"),
    (h.HEADSET = "HEADSET"),
    h);
function e9() {
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
        localPans: {},
        inputVolume: eq.Hz,
        outputVolume: eq.Hz,
        inputDeviceId: eq.dx,
        outputDeviceId: eq.dx,
        videoDeviceId: eq.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tn.supports(eq.O5.VIDEO_HOOK),
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
let te = {
        [eZ.m.CUSTOM]: {},
        [eZ.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eZ.m.STUDIO]: {
            mode: eb.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tt = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    tn = (0, D.hB)((0, D.WI)());
function ti(e) {
    return eT.k.getConfig({ location: e }).videoEnabled;
}
eJ.enableNativeLogger(!0);
let tr = {},
    ta = new Set([eq.x.DEFAULT]),
    ts = tn.supports(eq.O5.AUTO_ENABLE),
    tl = !1,
    to = eq.x.STREAM,
    td = 0,
    tc = !1,
    tu = performance.now(),
    t_ = null,
    tE = { [eq.dx]: nT("No Input Devices", eq.oh.AUDIO_INPUT) },
    tA = { [eq.dx]: nT("No Output Devices", eq.oh.AUDIO_OUTPUT) },
    th = { [eq.dx]: nT("No Video Devices", eq.oh.VIDEO_INPUT) },
    tf = new b.Ep(),
    tI = !1,
    tp = !1,
    tT = !1,
    tm = !1,
    tg = !1,
    tS = eq.qe,
    tN = eq.qe,
    tC = !1,
    tO = !1,
    tR = new b.Ep(),
    tL = !1,
    ty = !1,
    tD = !1,
    tv = !1,
    tb = !1,
    tM = !1,
    tP = !1,
    tU = !1,
    tw = [],
    tG = !1,
    tx = null,
    tk = !1,
    tF = !1,
    tB = !1,
    tV = {},
    tH = null,
    tj = null,
    tW = !1;
(eL.A.hasPermission(ez.iL.AUDIO, { showAuthorizationError: !1 }),
    eL.A.hasPermission(ez.iL.CAMERA, { showAuthorizationError: !1 }));
let tY = new Set(),
    tK = !1,
    t$ = new Set(),
    tz = {},
    tX = null,
    tZ = null,
    tq = null,
    tQ = !1,
    tJ = !0,
    t0 = !1,
    t1 = !1,
    t2 = !1,
    t3 = !1,
    t5 = {};
function t6(e) {
    return (function (e) {
        let { location: t } = e;
        return ei.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t4() {
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
function t7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT,
        t = tr[e];
    return (null == t && ((t = e9()), (tr[e] = t)), t);
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT,
        t = t7(e);
    if (e === eq.x.STREAM)
        return {
            ...t,
            modeOptions: {
                ...t.modeOptions,
                vadLeading: eh.getConfig({ location: "MediaEngineStore.getSettings" }).enabled
                    ? 0
                    : t.modeOptions.vadLeading,
            },
        };
    let n = te[t.activeInputProfile ?? eZ.m.CUSTOM],
        i = nU() ? t5 : tt,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function t9(e) {
    let t = t8(e.context),
        n = t.mode;
    (e.context === eq.x.DEFAULT && (0, e_.N)(!1, !1),
        e.setInputMode(n, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && nU(),
            vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: Math.round(t.modeOptions.delay),
        }));
}
function ne(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.Hz;
    return N().clamp(e, 0, t);
}
function nt(e) {
    let t = t8(e.context),
        n = !ts || t.mute || t.deaf;
    switch (e.context) {
        case eq.x.DEFAULT:
            n = n || tI || tp || tT || !eL.A.didHavePermission(ez.iL.AUDIO);
            break;
        case eq.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    if ((e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eq.x.DEFAULT)) {
        let { enabled: t } = (function (e) {
            let { location: t } = e;
            return eE.getConfig({ location: t });
        })({ location: "updateConnectionMuteDeaf" });
        (e.setSkipNoiseCancellationIfMuted(t && n), w.A.updateNativeMute());
    }
}
function nn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tg,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, p.isWindows)()
                ? U.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t8().videoHook && U.c1(n.desktopSource.sourcePid),
            tn.setGoLiveSource(null, to)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tn.setGoLiveSource(null, to),
        tg || e)
    ) {
        let t = t8().videoDeviceId;
        (tg && t === eq.dx && tN === eq.dx && tS !== eq.qe ? (t = tS) : (tN = t),
            (tS = (tg = e) ? nC(th, t) : eq.qe),
            tn.setVideoInputDevice(tS));
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t6("MediaEngineStore go live"),
                r = t8().videoHook,
                a = n_(),
                s = a ? ((0, p.isWindows)() && L().satisfies(P.A?.os.release, el.fG) ? el.zl : el.eg) : 0,
                l = !1;
            (0, p.isWindows)() && s >= el.zl && (l = !0 === tZ || eg.getConfig({ location: "updateVideo" }).enabled);
            let o = r && em.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: d, minCaptureHeight: c } = eI.getConfig({ location: "updateVideo" });
            tn.setGoLiveSource(
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
                        allowScreenCaptureKit: nE(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e3,
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
                to,
            );
        }
        null != t.cameraSource &&
            tn.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                to,
            );
    }
}
function ni(e) {
    switch (e) {
        case eq.CO.KRISP_CPU_OVERUSE:
            return B.B6.KrispCpuOveruse;
        case eq.CO.KRISP_FAILED:
            return B.B6.KrispFailed;
        case eq.CO.KRISP_VAD_CPU_OVERUSE:
            return B.B6.KrispVadCpuOveruse;
        case eq.CO.KRISP_INIT_ERROR:
            return B.B6.KrispInitError;
        case eq.CO.KRISP_INIT_ERROR_NATIVE:
            return B.B6.KrispInitErrorNative;
        case eq.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return B.B6.KrispInitErrorSse4NotSupported;
        case eq.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return B.B6.KrispInitErrorAvx2NotSupported;
        case eq.CO.KRISP_INIT_ERROR_UNSIGNED:
            return B.B6.KrispInitErrorUnsigned;
        case eq.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return B.B6.KrispInitErrorGlobalInit;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return B.B6.KrispInitErrorWeight8k;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return B.B6.KrispInitErrorWeight16k;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return B.B6.KrispInitErrorWeight32k;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return B.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nr = new Set([
    eq.CO.KRISP_INIT_ERROR,
    eq.CO.KRISP_INIT_ERROR_NATIVE,
    eq.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eq.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eq.CO.KRISP_INIT_ERROR_UNSIGNED,
    eq.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function na(e, t) {
    if (
        (eJ.warn(`Voice processing error: ${e}`),
        (0, B.QW)({ type: B.iy.NOISE_CANCELLER_ERROR, underlyingError: ni(e), voiceProcessingErrorDetails: t }),
        ev.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nr.has(e))
    ) {
        tU = !0;
        return;
    }
    e === eq.CO.KRISP_VAD_CPU_OVERUSE
        ? M.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tk = !0), M.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function ns(e, t) {
    let n = t === eq.$C.LIVE;
    (eJ.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, B.QW)({
                type: B.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case eq.kv.UNSUPPORTED:
                            return B.B6.VideoBackgroundUnsupported;
                        case eq.kv.INIT_FAILED:
                            return B.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        M.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" }));
}
function nl(e) {
    return { enabled: e, ...(e ? e1 : { useAGC2: !1 }) };
}
function no(e, t) {
    e.setAutomaticGainControl(nl(t));
}
function nd(e, t) {
    let n = (0, eD.A)(t, i.getSystemMicrophoneMode());
    (n !== t && eJ.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t));
}
function nc() {
    let e = t8(),
        t = e.inputDeviceId,
        n = ej.A.hasEchoCancellation(t) || e.echoCancellation,
        r = ej.A.hasNoiseSuppression(t) || e.noiseSuppression,
        { maxSampleRateHz: a, maxChannelCount: s } = (function (e, t) {
            let { location: n } = e;
            if (!Q("any", t)) return { maxSampleRateHz: 0, maxChannelCount: 0 };
            let i = (function (e) {
                let { location: t } = e;
                return q.getConfig({ location: t });
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
    (tn.setVoiceSampleRateCap(a), tn.setVoiceChannelCountCap(s));
}
function nu(e) {
    let t = t8(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ej.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ej.A.hasNoiseSuppression(n) || t.noiseSuppression),
        no(e, ej.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nd(e, t.noiseCancellation),
        nc(),
        (0, p.isWindows)() && L().satisfies(P.A?.os.release, ">=10.0.15063") && e.context === eq.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return ef.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nS(tE[i.getInputDeviceId()]) || nS(tA[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, p.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function n_() {
    return (0, p.isWindows)() && L().satisfies(P.A?.os.release, el.yg);
}
function nE() {
    return (0, p.isMac)() && tn.supports(eq.O5.SCREEN_CAPTURE_KIT) && L().satisfies(P.A?.os.release, el.e);
}
function nA() {
    return (
        (0, p.isWindows)() &&
        tn.supports(eq.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tn.supports(eq.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nh() {
    return tn.supports(eq.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nf(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t7(t);
    return (Object.assign(i, e), !__OVERLAY__ && n && v.w.set(e0, tr), i);
}
function nI() {
    let e = t8();
    (nR(e.inputDeviceId),
        tn.setAudioOutputDevice(e.outputDeviceId),
        nn(),
        tn.setInputVolume(e.inputVolume),
        tn.setOutputVolume(e.outputVolume),
        tn.setAecDump(e.aecDumpEnabled),
        tn.setSidechainCompression(e.sidechainCompression),
        tn.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tn.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, p.isLinux)() && T.Ay?.setOpenH264Enabled?.(e.openH264Enabled));
}
function np() {
    ts || tn.enable().then(() => M.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nT(e, t) {
    return {
        id: eq.dx,
        deviceType: t,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nm(e, t) {
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
let ng = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nS(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function nN(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nT(i, n);
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
                    case nm(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && ng.test(e.hardwareId):
                        return "INTEGRATED";
                    case N()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nm(e, i):
                    case "audiooutput" === e.type && nm(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
            windowsDeviceDescription: t.windowsDeviceDescription,
            windowsDeviceInterfaceFriendlyName: t.windowsDeviceInterfaceFriendlyName,
        }))
        .keyBy("id")
        .value();
}
function nC(e, t) {
    let n = e[t] ?? e[eq.dx] ?? N()(e).values().first();
    return null != n ? n.id : t;
}
async function nO(e) {
    if (!(0, p.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tE[e];
    if (t?.guid != null)
        try {
            await eP(t.guid, e, tn);
        } catch (e) {
            eJ.warn("Unable to query audio effects", e);
        }
}
function nR(e) {
    (tn.setAudioInputDevice(e),
        nO(e),
        (function (e) {
            if (!(0, p.isWindows)() && !(0, p.isMac)()) return;
            let t = tE[e];
            t?.guid != null && tn.watchDeviceHardwareMutedChange?.(t.guid);
        })(e));
}
function nL(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function ny() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ew.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eX.W.USER ? eq.x.DEFAULT : eq.x.STREAM,
            r = i === eq.x.STREAM ? eq.Cn : eq.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = t8(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eG.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                tn.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    tn.eachConnection((t) => {
                        (t.setLocalVolume(e, r), t.setLocalMute(e, !1));
                    }, i));
        nf({ localMutes: s, localVolumes: l }, i);
    }
}
function nD(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    eJ.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : ex.A.getAudioPid(e),
                    n = "";
                return (null != t && (n = ex.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n });
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
    return (null != e && t8().videoHook && U.GH(e), { soundshareId: null, soundshareSession: null });
}
function nv() {
    let e = eq.x.DEFAULT,
        { videoToggleStateMap: t } = t8(e);
    for (let [e, n] of Object.entries(t)) n === eb.bb8.AUTO_PROBING && delete t[e];
    nf({ videoToggleStateMap: t }, e, !1);
}
function nb(e) {
    let t = t8(),
        n = tn.getAudioSubsystem(),
        r = tn.getAudioLayer(),
        a = nC(tE, t.inputDeviceId),
        s = tE[a]?.name,
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
function nM() {
    let e = t8(),
        t = t$.size > 0,
        n = e.inputDeviceId,
        i = ej.A.hasEchoCancellation(n) || e.echoCancellation,
        r = ej.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nl(ej.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    (tn.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        nc());
}
async function nP() {
    if (!tn.supports(eq.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t2 = !0), (t1 = tn.supports(eq.O5.GAMESCOPE_CAPTURE)));
}
function nU() {
    return (tP || !1) && !tU;
}
async function nw() {
    try {
        await T.Ay.ensureModule("discord_krisp");
        let e = T.Ay.requireModule("discord_krisp");
        ((tP = !0),
            (u = e.getSdkVersion?.()),
            (_ = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                ((tw = e), i.emitChange());
            }),
            i.emitChange(),
            await T.Ay.ensureModule("discord_voice"));
        let t = T.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        (eJ.warn(`Failed to load Krisp module: ${t.message}`), eF.A.captureException(t));
        let e = eq.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eq.CO.KRISP_INIT_ERROR : n;
        }
        ((0, B.QW)({ type: B.iy.NOISE_CANCELLER_ERROR, underlyingError: ni(e) }),
            ev.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e }));
    } finally {
        tM = !1;
    }
}
async function nG() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e4);
        if (null === i) return void eJ.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await T.Ay.downloadOpenH264(
                e4,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    eJ.log("OpenH264 download status", e);
                },
            );
            (eJ.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0));
        } catch (n) {
            (eJ.error("OpenH264 download failed", n), (t = n.message), (e = !1));
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
            eJ.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eJ.error("OpenH264 download failed", e);
    }
}
function nx(e) {
    e === eq.rB.AUTOMATIC
        ? (nf({ automaticAudioSubsystem: !0 }), nk())
        : (nf({ automaticAudioSubsystem: !1 }), tn.setAudioSubsystem(e));
}
function nk() {
    tn.queueAudioSubsystem(eq.rB.EXPERIMENTAL);
}
function nF(e) {
    let { section: t } = e;
    return (t === eb.nc_.VOICE && np(), !1);
}
class nB extends y.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new ed(tn, this)),
            tf.start(e6, () => {
                (eJ.error("Device enumeration timed out"), ev.default.track(eb.HAw.DEVICE_ENUMERATION_TIMEOUT, {}));
            }),
            tn.on(D.bg.Connection, (e) => {
                let t;
                (nM(), t9(e), nt(e), nu(e));
                let n = t8();
                (e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, p.isWindows)() || (0, p.isLinux)()
                        ? (null != tj
                              ? tj
                              : "u" > typeof window
                                ? (tj = t4().then((e) => ((tH = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eq.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          })
                        : (0, p.isMac)() && e.setExperimentFlag(eq.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, p.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eq.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? eu.definition.defaultConfig : eu.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eq.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eq.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eq.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0));
                let { swallowVolumeOnlySpeakingEvents: r } = G.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eq.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eq.x.STREAM)
                ) {
                    let t = nL(tA);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, p.isWindows)())
                    (e.setExperimentFlag(eq.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                else if ((0, p.isMac)())
                    (e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eq.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                L().satisfies(window?.DiscordNative?.os.release, eq.Dk)
                            ),
                        ));
                else if ((0, p.isLinux)()) {
                    let { enabled: t } = $.getConfig({ location: "MediaEngineStore" });
                    (t && e.setExperimentFlag(eq.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0));
                } else
                    ((0, p.isIOS)() || (0, p.isAndroid)()) &&
                        (e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(eq.fd.H265_HARDWARE_DECODE_AVAILABLE, !0));
                if ((0, p.isWeb)()) {
                    let { enabled: t } = J.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eq.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, p.isWindows)() &&
                    tX?.startsWith("AMD") &&
                    eC("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eq.fd.WMF_GPU_ENCODE, !0),
                (0, p.isWindows)() &&
                    tX?.startsWith("Intel") &&
                    !0 === tZ &&
                    1 === tq &&
                    eO.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(eq.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(eq.fd.INTEL_GPU_DISABLE, !0)),
                (0, p.isWindows)() &&
                    tX?.startsWith("Intel") &&
                    !0 === tZ &&
                    1 === tq &&
                    eS.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eq.fd.INTEL_GPU_DISABLE, !0),
                (0, p.isWindows)() &&
                    tX?.startsWith("Qualcomm") &&
                    eC("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eq.fd.WMF_GPU_ENCODE, !0),
                tn.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = t8(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== eV.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eV.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                (e.on(D.yq.Speaking, (t, n, i, r) => {
                    M.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eq.x.DEFAULT &&
                        ((tO = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tO;
                            ((tO = !0),
                                e && i.emitChange(),
                                tR.start(e5, () => {
                                    ((tO = !1), i.emitChange());
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
                    e.on(D.yq.NoiseCancellationError, na),
                    e.on(D.yq.VoiceActivityDetectorError, na),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        ev.default.track(eb.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        M.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eH.A.bitrate),
                    e.applyVideoQualityMode(e$.A.mode),
                    (0, p.isWindows)() &&
                        tn.supports(eq.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        tn.setAsyncVideoInputDeviceInit(!0));
            }),
            tn.on(D.bg.DeviceChange, (e, t, n) => {
                (tf.stop(),
                    M.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n }));
            }),
            tn.on(D.bg.VolumeChange, (e, t) => {
                M.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            tn.on(D.bg.DesktopSourceEnd, (e, t) => {
                M.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            tn.on(D.bg.AudioPermission, (e) => {
                ((tW = !0), M.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e }));
            }),
            tn.on(D.bg.VideoPermission, (e) => {
                M.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            tn.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await ex.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eJ.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != P.A.processUtils.setCrashReason;
                try {
                    await ev.default.track(
                        eb.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eJ.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eJ.info("Relaunching app due to voice watchdog timeout"),
                    await P.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    P.A.app.relaunch());
            }),
            tn.on(D.bg.VideoInputInitialized, (e) => {
                ev.default.track(eb.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * ek.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eY.A.getMediaSessionId(),
                    rtc_connection_id: eY.A.getRTCConnectionId(),
                });
            }),
            tn.on(D.bg.AudioInputInitialized, (e) => {
                ev.default.track(eb.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * ek.A.Millis.SECOND),
                    rtc_connection_id: eY.A.getRTCConnectionId(),
                });
            }),
            tn.on(D.bg.ClipsRecordingRestartNeeded, () => {
                M.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            tn.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = td < 3;
                ((td += 1),
                    M.h.wait(() => {
                        (M.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? M.h.dispatch({ type: "CLIPS_RESTART" })
                                : eJ.warn(
                                      `Clips init failure budget exhausted (${td} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  ));
                    }));
            }),
            tn.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== td && (eJ.info(`Clips bridge reported healthy; resetting restart budget (was ${td}).`), (td = 0));
            }),
            tn.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                tc !== e && (eJ.info(`Clips recorder ready changed: ${e}`), (tc = e));
            }),
            tn.on(D.bg.ClipsBridgeIdleShutdown, () => {
                eJ.info("Clips bridge idle shutdown");
            }),
            tn.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && U.c1(t), (s = null));
            }),
            tn.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            tn.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            tn.on(D.bg.NativeScreenSharePickerError, (e) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            tn.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                ev.default.track(eb.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            tn.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? B.iy.VIDEO_ENCODE_ERROR : B.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, B.QW)(
                    t === B.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            tn.on(D.bg.ConnectionStats, (e) => {
                M.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e7++,
                            context: n.context,
                        };
                    }),
                });
            }),
            tn.on(D.bg.VoiceProcessingError, na),
            tn.on(D.bg.VideoFilterError, ns),
            tn.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nV(e);
                null !== t && ev.default.track(eb.HAw.VOICE_QUEUE_METRICS, t);
            }),
            tn.setOnVideoContainerResized((e, t, n) => {
                M.h.wait(() =>
                    M.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nP(),
            l.reset(),
            (0, eU.w)().then((e) => {
                if (null != e) {
                    ((tX = e.gpu_brand), (tZ = e.has_intel_hybrid_igpu), (tq = e.gpu_count));
                    let t = e.gpus ?? [];
                    tQ = t.length > 0 && t.every((e) => "10de" === e.vendor_id);
                }
            }),
            tn.on(D.bg.DeviceHardwareMutedChange, (e, t) => {
                M.h.dispatch({ type: "AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED", deviceGuid: e, hardwareMuted: t });
            }),
            tn.on(D.bg.SystemMicrophoneModeChange, (e) => {
                ((A = e), tn.eachConnection(nu), i.emitChange());
            }),
            null != (e = v.w.get("audio")) && (v.w.set(e0, { [eq.x.DEFAULT]: e }), v.w.remove("audio")),
            (tr = v.w.get(e0) ?? {}),
            N().each(tr, (e) => {
                (N().defaultsDeep(e, e9()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eB.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    tn.supports(eq.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, p.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)));
            }),
            nI(),
            ((0, p.isWindows)() || (0, p.isLinux)() || (0, p.isMac)()) && !__OVERLAY__ && !tM && !tP
                ? ((tM = !0), nw())
                : (0, p.isWeb)() && tn.supports(eq.O5.NOISE_CANCELLATION)
                  ? ((tP = !0), i.emitChange())
                  : (0, p.isWeb)() && nf({ noiseCancellation: !1 }),
            (0, p.isLinux)() && nG(),
            nv(),
            (0, p.isDesktop)() && p.isPlatformEmbedded && !t3)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    T.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = eq.tl;
                let n = nV(e);
                (null !== n && ev.default.track(eb.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, eq.tl));
            }
            ((t3 = !0), setTimeout(t, eq.tl));
        }
        ((0, p.isWindows)() &&
            p.isPlatformEmbedded &&
            null === t_ &&
            tn
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        t_ = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        (eJ.error("Failed to parse codec survey", e), (t_ = !1));
                    }
                })
                .catch((e) => {
                    (eJ.error("Failed to get codec survey", e), (t_ = !1));
                })
                .finally(() => {
                    M.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (tz = {
                [eq.O5.VIDEO]: tn.supports(eq.O5.VIDEO),
                [eq.O5.DESKTOP_CAPTURE]: tn.supports(eq.O5.DESKTOP_CAPTURE),
                [eq.O5.HYBRID_VIDEO]: tn.supports(eq.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eV.default, eH.A, ej.A, eW.A, x.Ay, V.A, eY.A, j.Ay, ew.A, eK.default, e$.A));
    }
    supports(e) {
        return (e !== eq.O5.VIDEO || !!ti("MediaEngineStore.supports")) && tn.supports(e);
    }
    supportsInApp(e) {
        return (e !== eq.O5.VIDEO || !!ti("MediaEngineStore.supportsInApp")) && (tz[e] || tn.supports(e));
    }
    isSupported() {
        return tn.supported();
    }
    isNoiseSuppressionSupported() {
        return tn.supports(eq.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nU();
    }
    isNoiseCancellationError() {
        return tk;
    }
    isAutomaticGainControlSupported() {
        return tn.supports(eq.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nh() && (tn.supports(eq.O5.LEGACY_AUDIO_SUBSYSTEM) || tn.supports(eq.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tn.supports(eq.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tn.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nU();
    }
    isAecDumpSupported() {
        return tn.supports(eq.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tn.supports(eq.O5.VIDEO) && tn.supports(eq.O5.SIMULCAST);
    }
    getAecDump() {
        return t8().aecDumpEnabled;
    }
    getMediaEngine() {
        return tn;
    }
    getVideoComponent() {
        return tn.Video;
    }
    getCameraComponent() {
        return tn.Camera;
    }
    getKrispSuppressionLevel() {
        return _ ?? 100;
    }
    getKrispEnableStats() {
        return tG;
    }
    isEnabled() {
        return ts;
    }
    isMute() {
        return this.isSelfMute() || tI;
    }
    isDeaf() {
        return this.isSelfDeaf() || tm;
    }
    isServerMute() {
        return tI;
    }
    isServerDeaf() {
        return tm;
    }
    hasContext(e) {
        return null != tr[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return e === eq.x.DEFAULT && tp;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t8(e).mute ||
            !eL.A.didHavePermission(ez.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eq.x.DEFAULT && tT)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tC;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tC = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ej.A.isHardwareMute(this.getInputDeviceId());
    }
    isHardwareMuteNoticeEnabled() {
        return tJ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return !this.isSupported() || t8(e).deaf;
    }
    isVideoEnabled() {
        return tg && ty;
    }
    isVideoAvailable() {
        return Object.values(th).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return ty;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.STREAM;
        return to === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.STREAM;
        return to === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return e !== eV.default.getId() && (t8(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tn.supports(eq.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return t8(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return t8(t).videoToggleStateMap[e] ?? eb.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return t === eq.x.DEFAULT && tY.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return e === eq.x.DEFAULT && tY.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tF;
    }
    isNativeAudioPermissionReady() {
        return tW;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return to;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tu;
    }
    isH264MfDecodeAvailable() {
        return t_;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT,
            n = t8(t).localPans[e];
        return null != n ? n : e2;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT,
            n = t === eq.x.STREAM ? eq.Cn : eq.Hz,
            i = t8(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t8().inputVolume;
    }
    getOutputVolume() {
        return t8().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return t8(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return t8(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            N().each(tr, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eb.TBI.PUSH_TO_TALK && ta.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nC(tE, t8().inputDeviceId);
    }
    getOutputDeviceId() {
        return nC(tA, t8().outputDeviceId);
    }
    getVideoDeviceId() {
        return nC(th, t8().videoDeviceId);
    }
    getInputDevices() {
        return tE;
    }
    getOutputDevices() {
        return tA;
    }
    getVideoDevices() {
        return th;
    }
    getEchoCancellation() {
        let e = t8();
        return ej.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tn.supports(eq.O5.SIDECHAIN_COMPRESSION) && t8().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t8().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t8().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tH && tH;
    }
    getOpenH264Enabled() {
        return (0, p.isLinux)() && t8().openH264Enabled;
    }
    getLoopback() {
        return t$.size > 0;
    }
    getLoopbackReasons() {
        return t$;
    }
    getNoiseSuppression() {
        let e = t8();
        return ej.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t8();
        return ej.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t8().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t8().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t8().silenceWarning;
    }
    getDebugLogging() {
        return tn.getDebugLogging();
    }
    getQoS() {
        return t8().qos;
    }
    getAttenuation() {
        return t8().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t8().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t8().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nA() && t8().automaticAudioSubsystem ? eq.rB.AUTOMATIC : tn.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tn.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t8().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eZ.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return t8(e);
    }
    getState() {
        return {
            settingsByContext: tr,
            inputDevices: tE,
            outputDevices: tA,
            appSupported: tz,
            krispModuleLoaded: tP,
            krispFatalError: tU,
            krispVersion: u,
            krispSuppressionLevel: _,
            goLiveSource: a,
            goLiveContext: to,
        };
    }
    getInputDetectedThisConnection() {
        return tD;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tv;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return p.isPlatformEmbedded || this.getMode(e) !== eb.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        tn.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tl;
    }
    getVideoHook() {
        return t8().videoHook;
    }
    supportsVideoHook() {
        return tn.supports(eq.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t8().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tn.supports(eq.O5.EXPERIMENTAL_SOUNDSHARE) && L().satisfies(P.A?.os.release, el.$x);
    }
    supportsHookSoundshare() {
        return (0, p.isWindows)() && tn.supports(eq.O5.SOUNDSHARE) && L().satisfies(P.A?.os.release, el.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t8().useSystemScreensharePicker,
            n = (0, p.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tn.supports(eq.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t2;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eq.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eA.definition.defaultConfig : eA.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === eq.x.STREAM && "streamer" === t && (0, p.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = ep.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (n.push("linux-vulkan"), n.join(","));
    }
    getUseGamescopeCapture() {
        return t1;
    }
    getSpeakingWhileMuted() {
        return tO;
    }
    getKrispModelOverride() {
        return E;
    }
    getKrispModels() {
        return tw;
    }
    getKrispVadActivationThreshold() {
        return t8().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t0;
    }
    setHasActiveCallKitCall(e) {
        t0 = e;
    }
    supportsScreenSoundshare() {
        return (0, p.isMac)()
            ? tn.supports(eq.O5.SOUNDSHARE) && L().satisfies(P.A?.os.release, el.P$) && nE()
            : (0, p.isWindows)()
              ? tn.supports(eq.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, p.isLinux)() && tn.supports(eq.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, p.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tV[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, p.isMac)() || (0, p.isIOS)()) return A;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT,
            t = this.supports(eq.O5.VIDEO)
                ? [{ rid: "100", type: e === eq.x.DEFAULT ? eq.mI.VIDEO : eq.mI.SCREEN, quality: eq.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eq.x.DEFAULT &&
                ee.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: eq.mI.VIDEO, quality: eq.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, p.isWeb)() };
        return tn.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tB &&
            ((tB = !0),
            (0, p.isWeb)() &&
                tn.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    (eJ.warn("DAVE preload failed:", e), eF.A.captureException(e));
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return tn.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return tc;
    }
    isClipsRecordingReadySignalSupported() {
        return tn.supports(eq.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return tX;
    }
    getHasNvidiaGpu() {
        return tQ || window.DiscordNative?.process?.env?.LIBVA_DRIVER_NAME === "nvidia";
    }
}
function nV(e) {
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
let nH = (i = new nB(M.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && nn(r, null), null != t || null == n)) {
            tb = !1;
            return;
        }
        if (tb) return;
        tb = !0;
        let a = t8();
        (a.mute || a.deaf) && (nf({ deaf: !1, mute: !1 }), tn.eachConnection(nt));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                ((tI = t.mute || t.suppress), (tm = t.deaf), tn.eachConnection(nt));
                let e = null != t.guildId && null != t.channelId && null != tx && tx !== t.channelId,
                    n = !tb && null == t.channelId;
                return (nn(!e && !n && tg), (tx = t.channelId), !0);
            }
            return (__OVERLAY__ || t.userId !== eV.default.getId() || null != eY.A.getChannelId() || nn(!1, null), e);
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        ((r = e.sessionId), (tI = !1), (tm = !1));
        let t = t8();
        (nA() && (nh() ? nx(eq.rB.AUTOMATIC) : t.automaticAudioSubsystem && nk()),
            tn.supports(eq.O5.OFFLOAD_ADM_CONTROLS) && tn.setOffloadAdmControls(!0),
            (0, p.isIOS)() &&
                er.getConfig({ location: "handleConnectionOpen" }).enabled &&
                tn.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, p.isIOS)() && (tn.setNcModels?.(ec), i.emitChange()),
            nO(t.inputDeviceId),
            ny());
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
                np();
                break;
            case eb.S7L.RTC_CONNECTING:
                ((tv = !1), (o = void 0), (d = void 0), (c = void 0), (tD = !1), l.reset());
                break;
            case eb.S7L.RTC_CONNECTED:
                nn();
                break;
            case eb.S7L.DISCONNECTED:
                ((t5 = {}),
                    (function () {
                        if (0 === tY.size) return;
                        let e = eq.x.DEFAULT,
                            { disabledLocalVideos: t } = t8(e);
                        (tY.forEach((n) => {
                            (g()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                tn.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
                        }),
                            tY.clear(),
                            nf({ disabledLocalVideos: t }, e, !1));
                    })(),
                    nv());
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        ((tp = t), tn.eachConnection(nt));
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t8(t);
        if (t === eq.x.DEFAULT && (eL.A.requestPermission(ez.iL.AUDIO), tT)) return !1;
        ((i = !r && !i) || (r = !1), n || (tC = !0), nf({ mute: i, deaf: r }, t), tn.eachConnection(nt));
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        (nf({ mute: n }, t), i || (tC = !0), tn.eachConnection(nt));
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        (nf({ deaf: !t8(t).deaf }, t), tn.eachConnection(nt));
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eV.default.getId()) return;
        let { localMutes: i } = t8(t);
        (i[n] ? delete i[n] : (i[n] = !0),
            nf({ localMutes: i }, t),
            tn.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t));
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        g()(!(r && a), "These are not allowed to both be true.");
        let s = i === eb.bb8.DISABLED,
            { disabledLocalVideos: l } = t8(t),
            o = l[n] ?? !1,
            d = tY.has(n),
            c = i === eb.bb8.AUTO_ENABLED || i === eb.bb8.MANUAL_ENABLED;
        (eJ.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            g()(!(d && !o), "If you are auto-disabled, then you are also disabled."));
        let u = s !== o,
            _ = t === eq.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        eJ.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = t8(t);
        if (
            (h[n] === eb.bb8.AUTO_PROBING &&
                i === eb.bb8.AUTO_ENABLED &&
                (0, eR.A)(n, s ? eq.Al.AUTO_DISABLE : eq.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nf({ videoToggleStateMap: h }, t, r),
            i === eb.bb8.AUTO_PROBING
                ? eY.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eY.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tK ||
                (eJ.info(`isAutoDisableAllowed=${tK} - disabling VideoHealthManager`),
                eY.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tK)) return;
            ((0, eR.A)(n, s ? eq.Al.AUTO_DISABLE : eq.Al.AUTO_ENABLE, c), s ? tY.add(n) : tY.delete(n));
        } else
            A &&
                (d && !s
                    ? (eJ.info("disallowing auto-disable for this session because of manual override by user"),
                      (tK = !1),
                      eY.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eR.A)(n, eq.Al.MANUAL_REENABLE, c))
                    : (0, eR.A)(n, s ? eq.Al.MANUAL_DISABLE : eq.Al.MANUAL_ENABLE, c));
        (_ && !s && tY.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nf({ disabledLocalVideos: l }, t, r),
            tn.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t));
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eV.default.getId()) return;
        let r = t === eq.x.STREAM ? eq.Cn : eq.Hz,
            { localVolumes: a } = t8(t);
        (i === r ? delete a[n] : (a[n] = i),
            nf({ localVolumes: a }, t),
            tn.eachConnection((e) => e.setLocalVolume(n, i), t));
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = t8(t);
        ((a[n] = { left: i, right: r }), nf({ localPans: a }, t), tn.eachConnection((e) => e.setLocalPan(n, i, r), t));
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        (nf({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), tn.eachConnection(t9));
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nf({ inputVolume: ne(t) }), tn.setInputVolume(t));
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nf({ outputVolume: t }), tn.setOutputVolume(t));
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        ((t = nC(tE, t)),
            (tu = performance.now()),
            nf({ inputDeviceId: t }),
            nR(t),
            tn.eachConnection(nu),
            (o = void 0),
            (d = void 0),
            (c = void 0),
            (tD = !1),
            l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        (nf({ outputDeviceId: (t = nC(tA, t)) }), tn.setAudioOutputDevice(t), tn.eachConnection(nu));
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nf({ activeInputProfile: t });
        let n = t8();
        (tn.eachConnection((e) => {
            (t9(e), nu(e));
        }),
            tn.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nM());
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nf({ echoCancellation: e.enabled }),
            n = ej.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        (tn.eachConnection((e) => e.setEchoCancellation(n)), nM(), nb(e.location));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        ((t = nf({ sidechainCompression: e.enabled })), tn.setSidechainCompression(t.sidechainCompression));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nf({ sidechainCompressionStrength: e.strength });
        tn.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return (t ? t$.add(n) : t$.delete(n), nM());
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nf({ noiseSuppression: e.enabled }),
            n = ej.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        (tn.eachConnection((e) => e.setNoiseSuppression(n)), nM(), nb(e.location));
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nf({ automaticGainControl: e.enabled });
        (tn.eachConnection((e) => no(e, t.automaticGainControl)), nM(), nb(e.location));
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nf({ noiseCancellation: e.enabled });
        (tn.eachConnection((e) => nd(e, t.noiseCancellation)), nM(), nb(e.location));
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        (ey.A.setKrispModelOverride(e.model), (E = e.model), nM());
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nf({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        tn.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        ((_ = t), ey.A.setKrispSuppressionLevel(t));
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, p.isWeb)() || ((tG = e.enabled), tn.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nf({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nf({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nf({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nf({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        tn.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        (nf({ qos: t }), tn.eachConnection((e) => e.setQoS(t)));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tE;
        if (
            ((tE = nN(e, { deviceType: eq.oh.AUDIO_INPUT, defaultName: eQ.intl.string(eQ.t["/QIjDA"]) })),
            !N().isEqual(tE, t))
        ) {
            let e = t8();
            (nR(nC(tE, e.inputDeviceId)), tn.eachConnection(nu));
        }
        !(function (e) {
            let t = tA;
            if (
                ((tA = nN(e, { deviceType: eq.oh.AUDIO_OUTPUT, defaultName: eQ.intl.string(eQ.t.xlUg0v) })),
                !N().isEqual(tA, t))
            ) {
                let e = t8(),
                    n = nC(tA, e.outputDeviceId);
                (tn.setAudioOutputDevice(n), tn.eachConnection(nu));
                let i = nL(t),
                    r = nL(tA);
                i !== r &&
                    tn.eachConnection((e) => {
                        e.context === eq.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        ty = e.videoDevices.length > 0;
        let n = th;
        if (
            ((th = nN(e, { deviceType: eq.oh.VIDEO_INPUT, defaultName: eQ.intl.string(eQ.t.WKWARY) })),
            tg && !N().isEqual(th, n))
        ) {
            let e = void 0 !== th[tS],
                t = tS === eq.dx && n[eq.dx]?.disabled,
                i = "Firefox" === O().name && "" === tS && n[tS]?.name === "Default" && !n[tS]?.disabled;
            nn(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nf({ inputVolume: ne(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        (v.w.remove(e0), location.reload());
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        ((tv = !0 !== tD && !t), t && (tD = !0));
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        ((d = t), (o = n));
    },
    AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED: function (e) {
        let { deviceGuid: t, hardwareMuted: n } = e,
            i = nC(tE, t8().inputDeviceId),
            r = tE[i];
        if (t !== r?.guid) return !1;
        ((c = n), ev.default.track(eb.HAw.HARDWARE_MUTE_DETECTED, { input_device_name: r?.name, hardware_muted: n }));
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nx(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        (nf({ bypassSystemInputProcessing: t }), tn.setAudioInputBypassSystemProcessing(t), nc(), nb(e.location));
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        ((ts = e.enabled), e.unmute && nf({ mute: !1, deaf: !1 }), tn.eachConnection(nt));
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        (eL.A.requestPermission(ez.iL.CAMERA), nn(t));
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    ((ts = !1), tn.eachConnection(nt));
                    break;
                case "video":
                    nn(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? eq.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = ex.A.getPidFromDesktopSource(i);
            (p.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nD(o, r)),
                s !== to && (null != a && tn.setGoLiveSource(null, to), (to = s)),
                nn(s === eq.x.STREAM && tg, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                }));
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eq.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === eq.x.STREAM && tg,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            nn(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else nn(tg, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        (nf({ videoDeviceId: (t = nC(th, t)) }), nn());
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tl !== e.required && ((tl = e.required), e.required || tn.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nF,
    USER_SETTINGS_MODAL_SET_SECTION: nF,
    CERTIFIED_DEVICES_SET: function () {
        return (tn.eachConnection(nu), !1);
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        ta.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        ta.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        ((tr = t.settingsByContext),
            (tE = t.inputDevices),
            (tA = t.outputDevices),
            (tz = t.appSupported),
            (tP = t.krispModuleLoaded),
            (tU = t.krispFatalError),
            (u = t.krispVersion),
            (to = t.goLiveContext));
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === eb.g6G.BACKGROUND && tg && !n) ((tL = !0), nn(!1));
        else {
            if (t !== eb.g6G.ACTIVE || !tL) return !1;
            ((tL = !1), nn(!0));
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        tn.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tT) return !1;
        ((tT = n), tn.eachConnection(nt));
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === ez.hL.ACCEPTED;
        switch (n) {
            case ez.iL.AUDIO:
                ((tW = !0), tn.eachConnection(nt));
                break;
            case ez.iL.CAMERA:
                !i && tg && nn(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        tn.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nf({ aecDumpEnabled: t });
        tn.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        (nf({ openH264Enabled: t }), T.Ay?.setOpenH264Enabled?.(t));
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        ((tr = Object.values(eq.x).reduce((e, n) => {
            let i = e9();
            return ((e[n] = N().merge(i, t[n])), e);
        }, {})),
            v.w.set(e0, tr),
            nI());
    },
    CHANNEL_DELETE: function () {
        if ((!tg && null == a) || null != eY.A.getRTCConnectionId()) return !1;
        nn(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eq.CO.KRISP_CPU_OVERUSE) {
            ((t5.noiseCancellation = !1), (t5.noiseSuppression = !0));
            let e = t8();
            return (tn.eachConnection((t) => nd(t, e.noiseCancellation)), nM(), nb(), !0);
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eq.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t5.modeOptions = { vadUseKrisp: !1 }), tn.eachConnection((e) => t9(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tk && ((tk = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        tn.applyMediaFilterSettings(t).finally(() => {
            ((tF = !1), i.emitChange());
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tF = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tF = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eX.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        ny(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.T)() || null == P.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (tn.setClipsSource(null),
            (0, p.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? U.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && t8().videoHook && U.c1(s.desktopSource.sourcePid)));
        let a = ex.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nD(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = t6("MediaEngineStore clips"),
            c = t8().videoHook,
            u = c && em.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: _, minCaptureHeight: E } = eI.getConfig({ location: "handleClipsInit" });
        tn.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useGraphicsCapture: n_(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nE(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e3,
                hdrCaptureMode: d,
                videoHookAllowDx12: u,
                minCaptureWidth: _,
                minCaptureHeight: E,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eq.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), tn.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tJ = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        ((tV[t] = { active: n, available: i }), nc());
    },
}));
