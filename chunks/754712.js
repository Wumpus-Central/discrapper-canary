let i, r, a, s, l, o, d, c, u, _, E, A;
(n.d(t, { fc: () => e5, Ay: () => nk, hp: () => no }), n(323874), n(14289), n(35956), n(321073));
var f,
    h = n(823598),
    I = n(626584),
    p = n(723702),
    m = n(253400);
(0, h.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (p.isPlatformEmbedded) {
                let e = (0, h.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new I.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => m.Ay.supportsFeature(e),
    setProcessPriority(e) {
        m.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => m.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => m.Ay.getOpenH264LibraryPath(),
});
var T = n(284009),
    g = n.n(T),
    S = n(435558),
    N = n.n(S),
    C = n(481613),
    O = n.n(C),
    R = n(299855),
    L = n.n(R),
    y = n(855986),
    D = n(205693),
    b = n(506774),
    v = n(451988),
    P = n(73153),
    M = n(77729),
    U = n(719129),
    w = n(894539),
    G = n(124838),
    x = n(419490),
    k = n(680725),
    F = n(487329),
    B = n(343446),
    V = n(340344),
    H = n(6494),
    j = n(644727),
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
    X = { probeAudioEffects: !1 },
    z = (0, Y.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: X,
        variations: { 1: { ...X, probeAudioEffects: !0 } },
    });
var q = n(403362);
let Q = (0, Y.mj)({
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
function J(e, t) {
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
let Z = (0, Y.mj)({
    name: "2025-08-browser-hevc",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ee = n(400845);
let et = (0, ee.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    en = (0, Y.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    ei = (0, Y.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var er = n(574381),
    ea = n(611599),
    es = n(55010);
let el = new ea.Vy("InputWatcher");
class eo {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new v.Ep();
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
        if ((0, er.uF)() && L().satisfies(M.A?.os.release, es.PH))
            try {
                let e = this.mediaEngineStore.getInputDeviceId(),
                    t = this.mediaEngineStore.getInputDevices()[e]?.guid;
                if (null != t && "" !== t) {
                    let e = n(253400).Ay;
                    await e.ensureModule("discord_voice");
                    let [i, r] = await Promise.all([
                        this.mediaEngine.getDeviceOSVolume(t),
                        this.mediaEngine.getDeviceOSMuted(t),
                    ]);
                    P.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
                }
            } catch (e) {
                el.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            (el.info("Silence:", e),
                (this.inputDetected = t),
                (this.lastUpdateTime = performance.now()),
                e && (await this.fetchInputDeviceOSConfig()),
                P.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                }));
        });
    };
}
let ed = [
        { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
        { name: "small_NC", maxSampleRate: 16e3, filename: "krisp-nc-o-lite-v1.kef" },
        { name: "full_NC", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7-fp16.kef" },
    ],
    ec = (0, ee.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var eu = n(140175);
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
let e_ = (0, Y.mj)({
        kind: "user",
        name: "2026-08-mute-aware-noise-cancellation",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    eE = (0, ee.Ay)({
        kind: "user",
        name: "2026-07-nvenc-reconstructed-frames",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eA = (0, Y.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    ef = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var eh = n(625075);
let eI = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ep = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, Y.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eT = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eg(e) {
    return eT.getConfig({ location: e });
}
let eS = (0, Y.mj)({
        name: "2026-01-wmf-gpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eN = (0, Y.mj)({
        kind: "user",
        name: "2026-10-windows-playout-buffer-duration",
        defaultConfig: { windowsOutputBufferDurationMs: null },
        variations: {
            1: { windowsOutputBufferDurationMs: 30 },
            2: { windowsOutputBufferDurationMs: 40 },
            3: { windowsOutputBufferDurationMs: 50 },
            4: { windowsOutputBufferDurationMs: 60 },
        },
    });
var eC = n(75076),
    eO = n(674966),
    eR = n(559633),
    eL = n(886705),
    ey = n(129230),
    eD = n(652215);
let eb = new ea.Vy("AudioEffects");
var ev = n(967347),
    eP = n(617617),
    eM = n(125325),
    eU = n(353835),
    ew = n(927813),
    eG = n(856383),
    ex = n(350535),
    ek = n(46653),
    eF = n(131319),
    eB = n(347481),
    eV = n(734057),
    eH = n(495867),
    ej = n(287809),
    eW = n(117549),
    eY = n(765682),
    eK = n(355097),
    e$ = n(621380),
    eX = n(731854),
    ez = n(792996);
let eq = new I.A("MediaEngineStore"),
    eQ = "MediaEngineStore",
    eJ = {
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
    eZ = { left: 1, right: 1 },
    e0 = 5 * ew.A.Millis.SECOND,
    e1 = 2 * ew.A.Millis.SECOND,
    e2 = 30 * ew.A.Millis.SECOND,
    e3 = "https://ciscobinary.openh264.org/libopenh264-2.7.0-linux64.8.so.bz2",
    e6 = 0;
var e5 =
    (((f = {}).WEBCAM = "WEBCAM"),
    (f.INTEGRATED = "INTEGRATED"),
    (f.BLUETOOTH = "BLUETOOTH"),
    (f.AIRPLAY = "AIRPLAY"),
    (f.HEADSET = "HEADSET"),
    f);
function e7() {
    return {
        mode: eD.TBI.VOICE_ACTIVITY,
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
        inputVolume: 100,
        outputVolume: 100,
        inputDeviceId: eX.dx,
        outputDeviceId: eX.dx,
        videoDeviceId: eX.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e9.supports(eX.O5.VIDEO_HOOK),
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
let e4 = {
        [e$.m.CUSTOM]: {},
        [e$.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [e$.m.STUDIO]: {
            mode: eD.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e8 = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    e9 = (0, D.hB)((0, D.WI)());
function te(e) {
    return eh.k.getConfig({ location: e }).videoEnabled;
}
eq.enableNativeLogger(!0);
let tt = {},
    tn = new Set([eX.x.DEFAULT]),
    ti = e9.supports(eX.O5.AUTO_ENABLE),
    tr = !1,
    ta = eX.x.STREAM,
    ts = 0,
    tl = !1,
    to = performance.now(),
    td = null,
    tc = { [eX.dx]: nh("No Input Devices", eX.oh.AUDIO_INPUT) },
    tu = { [eX.dx]: nh("No Output Devices", eX.oh.AUDIO_OUTPUT) },
    t_ = { [eX.dx]: nh("No Video Devices", eX.oh.VIDEO_INPUT) },
    tE = new v.Ep(),
    tA = !1,
    tf = !1,
    th = !1,
    tI = !1,
    tp = !1,
    tm = eX.qe,
    tT = eX.qe,
    tg = !1,
    tS = !1,
    tN = new v.Ep(),
    tC = !1,
    tO = !1,
    tR = !1,
    tL = !1,
    ty = !1,
    tD = !1,
    tb = !1,
    tv = !1,
    tP = [],
    tM = !1,
    tU = null,
    tw = !1,
    tG = !1,
    tx = !1,
    tk = {},
    tF = null,
    tB = null,
    tV = !1;
(eO.A.hasPermission(eY.iL.AUDIO, { showAuthorizationError: !1 }),
    eO.A.hasPermission(eY.iL.CAMERA, { showAuthorizationError: !1 }));
let tH = new Set(),
    tj = !1,
    tW = new Set(),
    tY = {},
    tK = null,
    t$ = null,
    tX = null,
    tz = !1,
    tq = !0,
    tQ = !1,
    tJ = !1,
    tZ = !1,
    t0 = !1,
    t1 = {};
function t2(e) {
    return (function (e) {
        let { location: t } = e;
        return en.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
function t3() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
        t = tt[e];
    return (null == t && ((t = e7()), (tt[e] = t)), t);
}
function t6() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
        t = t3(e);
    if (e === eX.x.STREAM) return { ...t, modeOptions: { ...t.modeOptions, vadLeading: 0 } };
    let n = e4[t.activeInputProfile ?? e$.m.CUSTOM],
        i = nP() ? t1 : e8,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function t5(e) {
    let t = t6(e.context),
        n = t.mode;
    (e.context === eX.x.DEFAULT && (0, eu.N)(e9, !1, !1),
        e.setInputMode(n, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && nP(),
            vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: Math.round(t.modeOptions.delay),
        }));
}
function t7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    return N().clamp(e, 0, t);
}
function t4(e) {
    let t = t6(e.context),
        n = !ti || t.mute || t.deaf;
    switch (e.context) {
        case eX.x.DEFAULT:
            n = n || tA || tf || th || !eO.A.didHavePermission(eY.iL.AUDIO);
            break;
        case eX.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    if ((e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eX.x.DEFAULT)) {
        let { enabled: t } = (function (e) {
            let { location: t } = e;
            return e_.getConfig({ location: t });
        })({ location: "updateConnectionMuteDeaf" });
        (e.setSkipNoiseCancellationIfMuted(t && n), w.A.updateNativeMute());
    }
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tp,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, p.uF)()
                ? U.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t6().videoHook && U.c1(n.desktopSource.sourcePid),
            e9.setGoLiveSource(null, ta)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e9.setGoLiveSource(null, ta),
        tp || e)
    ) {
        let t = t6().videoDeviceId;
        (tp && t === eX.dx && tT === eX.dx && tm !== eX.qe ? (t = tm) : (tT = t),
            (tm = (tp = e) ? ng(t_, t) : eX.qe),
            e9.setVideoInputDevice(tm));
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t2("MediaEngineStore go live"),
                r = t6().videoHook,
                a = no(),
                s = a ? ((0, p.uF)() && L().satisfies(M.A?.os.release, es.fG) ? 26100 : 22e3) : 0,
                l = !1;
            (0, p.uF)() && s >= 26100 && (l = !0 === t$ || ep.getConfig({ location: "updateVideo" }).enabled);
            let o = r && eI.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: d, minCaptureHeight: c } = eA.getConfig({ location: "updateVideo" });
            e9.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useGraphicsCapture: a,
                        useGraphicsCaptureApiLevel: s,
                        useCaptureDeviceForEncode: (0, p.uF)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: nd(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e0,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? et.definition.defaultConfig : et.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: o,
                        minCaptureWidth: d,
                        minCaptureHeight: c,
                    },
                    quality: e,
                },
                ta,
            );
        }
        null != t.cameraSource &&
            e9.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                ta,
            );
    }
}
function t9(e) {
    switch (e) {
        case eX.CO.KRISP_CPU_OVERUSE:
            return F.B6.KrispCpuOveruse;
        case eX.CO.KRISP_FAILED:
            return F.B6.KrispFailed;
        case eX.CO.KRISP_VAD_CPU_OVERUSE:
            return F.B6.KrispVadCpuOveruse;
        case eX.CO.KRISP_INIT_ERROR:
            return F.B6.KrispInitError;
        case eX.CO.KRISP_INIT_ERROR_NATIVE:
            return F.B6.KrispInitErrorNative;
        case eX.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return F.B6.KrispInitErrorSse4NotSupported;
        case eX.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return F.B6.KrispInitErrorAvx2NotSupported;
        case eX.CO.KRISP_INIT_ERROR_UNSIGNED:
            return F.B6.KrispInitErrorUnsigned;
        case eX.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return F.B6.KrispInitErrorGlobalInit;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return F.B6.KrispInitErrorWeight8k;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return F.B6.KrispInitErrorWeight16k;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return F.B6.KrispInitErrorWeight32k;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return F.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let ne = new Set([
    eX.CO.KRISP_INIT_ERROR,
    eX.CO.KRISP_INIT_ERROR_NATIVE,
    eX.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eX.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eX.CO.KRISP_INIT_ERROR_UNSIGNED,
    eX.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eX.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eX.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eX.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eX.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nt(e, t) {
    if (
        (eq.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t9(e), voiceProcessingErrorDetails: t }),
        ey.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        ne.has(e))
    ) {
        tv = !0;
        return;
    }
    e === eX.CO.KRISP_VAD_CPU_OVERUSE
        ? P.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tw = !0), P.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nn(e, t) {
    let n = t === eX.$C.LIVE;
    (eq.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, F.QW)({
                type: F.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case eX.kv.UNSUPPORTED:
                            return F.B6.VideoBackgroundUnsupported;
                        case eX.kv.INIT_FAILED:
                            return F.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        P.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" }));
}
function ni(e) {
    return { enabled: e, ...(e ? eJ : { useAGC2: !1 }) };
}
function nr(e, t) {
    e.setAutomaticGainControl(ni(t));
}
function na(e, t) {
    let n = (0, eL.A)(t, i.getSystemMicrophoneMode());
    (n !== t && eq.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t));
}
function ns() {
    let e = t6(),
        t = e.inputDeviceId,
        n = eB.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eB.A.hasNoiseSuppression(t) || e.noiseSuppression,
        { maxSampleRateHz: a, maxChannelCount: s } = (function (e, t) {
            let { location: n } = e;
            if (!J("any", t)) return { maxSampleRateHz: 0, maxChannelCount: 0 };
            let i = (function (e) {
                let { location: t } = e;
                return Q.getConfig({ location: t });
            })({ location: n });
            return J(i.condition, t)
                ? { maxSampleRateHz: 32e3 * !!i.capSampleRate, maxChannelCount: +!!i.capChannelCount }
                : { maxSampleRateHz: 0, maxChannelCount: 0 };
        })(
            { location: "updateVoiceFidelityCaps" },
            {
                krispEnabled: (0, eL.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    (e9.setVoiceSampleRateCap(a), e9.setVoiceChannelCountCap(s));
}
function nl(e) {
    let t = t6(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eB.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eB.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nr(e, eB.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        na(e, t.noiseCancellation),
        ns(),
        (0, p.uF)() && L().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === eX.x.DEFAULT)
    ) {
        let t = nm(tc[i.getInputDeviceId()]) || nm(tu[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(t ? "mix" : "auto");
    }
    if ((0, p.HZ)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function no() {
    return (0, p.uF)() && L().satisfies(M.A?.os.release, es.yg);
}
function nd() {
    return (0, p.cX)() && e9.supports(eX.O5.SCREEN_CAPTURE_KIT) && L().satisfies(M.A?.os.release, es.e);
}
function nc() {
    return (
        (0, p.uF)() &&
        e9.supports(eX.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e9.supports(eX.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nu() {
    return e9.supports(eX.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function n_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t3(t);
    return (Object.assign(i, e), !__OVERLAY__ && n && b.w.set(eQ, tt), i);
}
function nE() {
    let e = t6();
    (nC(e.inputDeviceId),
        e9.setAudioOutputDevice(e.outputDeviceId),
        t8(),
        e9.setInputVolume(e.inputVolume),
        nA(),
        e9.setAecDump(e.aecDumpEnabled),
        e9.setSidechainCompression(e.sidechainCompression),
        e9.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e9.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, p.j9)() && m.Ay?.setOpenH264Enabled?.(e.openH264Enabled));
}
function nA() {
    e9.setOutputVolume(t6().outputVolume);
}
function nf() {
    ti || e9.enable().then(() => P.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nh(e, t) {
    return {
        id: eX.dx,
        deviceType: t,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nI(e, t) {
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
let np = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nm(e) {
    return e?.windowsDeviceService === "voicemodvad";
}
function nT(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nh(i, n);
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
                    case nI(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && np.test(e.hardwareId):
                        return "INTEGRATED";
                    case N()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nI(e, i):
                    case "audiooutput" === e.type && nI(e, n):
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
function ng(e, t) {
    let n = e[t] ?? e[eX.dx] ?? N()(e).values().first();
    return null != n ? n.id : t;
}
async function nS(e) {
    if (!(0, p.uF)() || !z.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tc[e];
    if (t?.guid != null)
        try {
            await (async function (e, t, n) {
                if (!(0, er.uF)())
                    return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
                if (!L().satisfies(M.A.os.release, ">=10.0.22000"))
                    return Promise.reject(
                        Error("Audio effects querying likely not supported on this Windows version."),
                    );
                try {
                    let i = await n.getDeviceAudioEffects(e);
                    return (
                        P.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
                        ey.default.track(eD.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                            succeeded: !0,
                            active_effects: i.active,
                            available_effects: i.available,
                        }),
                        i
                    );
                } catch (e) {
                    (eb.error("Failed to probe audio effects for device", e),
                        ey.default.track(eD.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 }));
                }
            })(t.guid, e, e9);
        } catch (e) {
            eq.warn("Unable to query audio effects", e);
        }
}
function nN(e) {
    if (null != e) return null != e.guid && "" !== e.guid ? e.guid : e.name;
}
function nC(e) {
    (e9.setAudioInputDevice(e),
        nS(e),
        (function (e) {
            if (!(0, p.uF)() && !(0, p.cX)() && !(0, p.j9)()) return;
            let t = nN(tc[e]);
            null != t && e9.watchDeviceHardwareMutedChange?.(t);
        })(e));
}
function nO(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nR() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eP.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eK.W.USER ? eX.x.DEFAULT : eX.x.STREAM,
            r = i === eX.x.STREAM ? 18 : 100,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = t6(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eM.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                e9.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    e9.eachConnection((t) => {
                        (t.setLocalVolume(e, r), t.setLocalMute(e, !1));
                    }, i));
        n_({ localMutes: s, localVolumes: l }, i);
    }
}
function nL(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    eq.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eU.A.getAudioPid(e),
                    n = "";
                return (null != t && (n = eU.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n });
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = a),
                (0, p.uF)() &&
                    n > 1 &&
                    U.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            j.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            P.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return (null != e && t6().videoHook && U.GH(e), { soundshareId: null, soundshareSession: null });
}
function ny() {
    return (nA(), !1);
}
function nD() {
    let e = eX.x.DEFAULT,
        { videoToggleStateMap: t } = t6(e);
    for (let [e, n] of Object.entries(t)) n === eD.bb8.AUTO_PROBING && delete t[e];
    n_({ videoToggleStateMap: t }, e, !1);
}
function nb(e) {
    let t = t6(),
        n = e9.getAudioSubsystem(),
        r = e9.getAudioLayer(),
        a = ng(tc, t.inputDeviceId),
        s = tc[a]?.name,
        l = (0, eL.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    ey.default.track(eD.HAw.VOICE_PROCESSING, {
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
function nv() {
    let e = t6(),
        t = tW.size > 0,
        n = e.inputDeviceId,
        i = eB.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eB.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = ni(eB.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    (e9.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        ns());
}
function nP() {
    return (tb || !1) && !tv;
}
function nM(e) {
    e === eX.rB.AUTOMATIC
        ? (n_({ automaticAudioSubsystem: !0 }), nU())
        : (n_({ automaticAudioSubsystem: !1 }), e9.setAudioSubsystem(e));
}
function nU() {
    e9.queueAudioSubsystem(eX.rB.EXPERIMENTAL);
}
function nw(e) {
    let { section: t } = e;
    return (t === eD.nc_.VOICE && nf(), !1);
}
class nG extends y.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        ((l ??= new eo(e9, this)),
            tE.start(e2, () => {
                (eq.error("Device enumeration timed out"), ey.default.track(eD.HAw.DEVICE_ENUMERATION_TIMEOUT, {}));
            }),
            e9.on(D.bg.Connection, (e) => {
                let t;
                (nv(), t5(e), t4(e), nl(e));
                let n = t6();
                (e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, p.uF)() || (0, p.j9)()
                        ? (null != tB
                              ? tB
                              : "u" > typeof window
                                ? (tB = (async function () {
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
                                  })().then((e) => ((tF = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          })
                        : (0, p.cX)() && e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, p.j9)() && n.openH264Enabled && e.setExperimentFlag(eX.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ec.definition.defaultConfig : ec.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eX.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eX.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eX.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0));
                let { swallowVolumeOnlySpeakingEvents: r } = G.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eX.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eX.x.STREAM)
                ) {
                    let t = nO(tu);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, p.uF)())
                    (e.setExperimentFlag(eX.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                else if ((0, p.cX)())
                    (e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eX.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                L().satisfies(window?.DiscordNative?.os.release, eX.Dk)
                            ),
                        ));
                else if ((0, p.j9)()) {
                    let { enabled: t } = $.getConfig({ location: "MediaEngineStore" });
                    (t && e.setExperimentFlag(eX.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0));
                } else
                    ((0, p.un)() || (0, p.m0)()) &&
                        (e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, !0));
                if ((0, p.HZ)()) {
                    let { enabled: t } = Z.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eX.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, p.uF)() &&
                    tK?.startsWith("AMD") &&
                    eg("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                (0, p.uF)() &&
                    tK?.startsWith("Intel") &&
                    !0 === t$ &&
                    1 === tX &&
                    eS.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(eX.fd.INTEL_GPU_DISABLE, !0)),
                (0, p.uF)() &&
                    tK?.startsWith("Intel") &&
                    !0 === t$ &&
                    1 === tX &&
                    em.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eX.fd.INTEL_GPU_DISABLE, !0),
                (0, p.uF)() &&
                    tK?.startsWith("Qualcomm") &&
                    eg("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                e9.setHasFullbandPerformance(null === (t = (0, k.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = t6(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== ek.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== ek.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                (e.on(D.yq.Speaking, (t, n, i, r) => {
                    P.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eX.x.DEFAULT &&
                        ((tS = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tS;
                            ((tS = !0),
                                e && i.emitChange(),
                                tN.start(e1, () => {
                                    ((tS = !1), i.emitChange());
                                }));
                        })),
                    e.on(D.yq.DesktopSourceEnd, (t, n) => {
                        P.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(D.yq.InteractionRequired, (e) => {
                        P.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(D.yq.VideoHookInitialize, (e, t, n, i, r, s) => {
                        a?.desktopSource != null &&
                            ey.default.track(eD.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, W.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, nt),
                    e.on(D.yq.VoiceActivityDetectorError, nt),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        ey.default.track(eD.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        P.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eF.A.bitrate),
                    e.applyVideoQualityMode(eW.A.mode),
                    (0, p.uF)() &&
                        e9.supports(eX.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        e9.setAsyncVideoInputDeviceInit(!0));
            }),
            e9.on(D.bg.DeviceChange, (e, t, n) => {
                (tE.stop(),
                    P.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n }));
            }),
            e9.on(D.bg.VolumeChange, (e, t) => {
                P.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            e9.on(D.bg.DesktopSourceEnd, (e, t) => {
                P.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            e9.on(D.bg.AudioPermission, (e) => {
                ((tV = !0), P.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e }));
            }),
            e9.on(D.bg.VideoPermission, (e) => {
                P.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            e9.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eU.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eq.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await ey.default.track(
                        eD.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eq.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eq.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    b.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            e9.on(D.bg.VideoInputInitialized, (e) => {
                ey.default.track(eD.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * ew.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eH.A.getMediaSessionId(),
                    rtc_connection_id: eH.A.getRTCConnectionId(),
                });
            }),
            e9.on(D.bg.AudioInputInitialized, (e) => {
                ey.default.track(eD.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * ew.A.Millis.SECOND),
                    rtc_connection_id: eH.A.getRTCConnectionId(),
                });
            }),
            e9.on(D.bg.ClipsRecordingRestartNeeded, () => {
                P.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            e9.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = ts < 3;
                ((ts += 1),
                    P.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                    n
                        ? P.h.dispatch({ type: "CLIPS_RESTART" })
                        : eq.warn(
                              `Clips init failure budget exhausted (${ts} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                          ));
            }),
            e9.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== ts && (eq.info(`Clips bridge reported healthy; resetting restart budget (was ${ts}).`), (ts = 0));
            }),
            e9.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                tl !== e && (eq.info(`Clips recorder ready changed: ${e}`), (tl = e));
            }),
            e9.on(D.bg.ClipsBridgeIdleShutdown, () => {
                eq.info("Clips bridge idle shutdown");
            }),
            e9.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && U.c1(t), (s = null));
            }),
            e9.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            e9.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            e9.on(D.bg.NativeScreenSharePickerError, (e) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            e9.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                ey.default.track(eD.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            e9.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            e9.on(D.bg.ConnectionStats, (e) => {
                P.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e6++,
                            context: n.context,
                        };
                    }),
                });
            }),
            e9.on(D.bg.VoiceProcessingError, nt),
            e9.on(D.bg.VideoFilterError, nn),
            e9.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nx(e);
                null !== t && ey.default.track(eD.HAw.VOICE_QUEUE_METRICS, t);
            }),
            e9.setOnVideoContainerResized((e, t, n) => {
                P.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } });
            }),
            (async function () {
                if (!e9.supports(eX.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
                let e = await window.DiscordNative.processUtils.getSystemInfo();
                (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
                    ((tZ = !0), (tJ = e9.supports(eX.O5.GAMESCOPE_CAPTURE)));
            })(),
            l.reset(),
            (0, ev.w)().then((e) => {
                if (null != e) {
                    ((tK = e.gpu_brand), (t$ = e.has_intel_hybrid_igpu), (tX = e.gpu_count));
                    let t = e.gpus ?? [];
                    tz = t.length > 0 && t.every((e) => "10de" === e.vendor_id);
                }
            }),
            e9.on(D.bg.DeviceHardwareMutedChange, (e, t) => {
                P.h.dispatch({ type: "AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED", deviceGuid: e, hardwareMuted: t });
            }),
            e9.on(D.bg.SystemMicrophoneModeChange, (e) => {
                ((A = e), e9.eachConnection(nl), i.emitChange());
            }),
            null != (e = b.w.get("audio")) && (b.w.set(eQ, { [eX.x.DEFAULT]: e }), b.w.remove("audio")),
            (tt = b.w.get(eQ) ?? {}),
            N().each(tt, (e) => {
                (N().defaultsDeep(e, e7()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, ex.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    e9.supports(eX.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, p.HZ)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)));
            }),
            nE(),
            ((0, p.uF)() || (0, p.j9)() || (0, p.cX)()) && !__OVERLAY__ && !tD && !tb
                ? ((tD = !0),
                  (async function () {
                      try {
                          await m.Ay.ensureModule("discord_krisp");
                          let e = m.Ay.requireModule("discord_krisp");
                          ((tb = !0),
                              (u = e.getSdkVersion?.()),
                              (_ = e.getSuppressionLevel?.() ?? 100),
                              e.getNcModels?.().then((e) => {
                                  ((tP = e), i.emitChange());
                              }),
                              i.emitChange(),
                              await m.Ay.ensureModule("discord_voice"));
                          let t = m.Ay.requireModule("discord_voice");
                          t.setupKrispPath?.();
                      } catch (t) {
                          (eq.warn(`Failed to load Krisp module: ${t.message}`), eG.A.captureException(t));
                          let e = eX.CO.KRISP_INIT_ERROR;
                          if (t.message.includes(": ")) {
                              let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                              e = isNaN(n) || 0 === n ? eX.CO.KRISP_INIT_ERROR : n;
                          }
                          ((0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t9(e) }),
                              ey.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }));
                      } finally {
                          tD = !1;
                      }
                  })())
                : (0, p.HZ)() && e9.supports(eX.O5.NOISE_CANCELLATION)
                  ? ((tb = !0), i.emitChange())
                  : (0, p.HZ)() && n_({ noiseCancellation: !1 }),
            (0, p.j9)() &&
                (async function () {
                    try {
                        let e,
                            t = "",
                            n = !1,
                            i = URL.parse(e3);
                        if (null === i) return void eq.log("OpenH264 URL ", i, " is invalid");
                        let r = i.pathname.split("/"),
                            a = r[r.length - 1].replace(".bz2", "");
                        try {
                            let t = await m.Ay.downloadOpenH264(
                                e3,
                                a,
                                "1522f873a482923c5ec018a4415e1866898197528828c50f90fd300c94620df3",
                                (e) => {
                                    eq.log("OpenH264 download status", e);
                                },
                            );
                            (eq.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0));
                        } catch (n) {
                            (eq.error("OpenH264 download failed", n), (t = n.message), (e = !1));
                        }
                        if (
                            (ey.default.track(eD.HAw.VIDEO_OPENH264_DOWNLOADED, {
                                success: e,
                                fetched_from_network: n,
                                error_message: t,
                            }),
                            e)
                        ) {
                            let e = await m.Ay.cleanupUnusedOpenH264Files([a]);
                            eq.log("OpenH264 cleanup", e);
                        }
                    } catch (e) {
                        eq.error("OpenH264 download failed", e);
                    }
                })(),
            nD(),
            (0, p.xl)() &&
                p.isPlatformEmbedded &&
                !t0 &&
                ((t0 = !0),
                setTimeout(async function e() {
                    let t = await new Promise((e) => {
                        m.Ay.pollQueueMetrics((t) => {
                            e(t);
                        });
                    });
                    t.periodMs = 9e5;
                    let n = nx(t);
                    (null !== n && ey.default.track(eD.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, 9e5));
                }, 9e5)),
            (0, p.uF)() &&
                p.isPlatformEmbedded &&
                null === td &&
                e9
                    .getCodecSurvey()
                    .then((e) => {
                        try {
                            let t = JSON.parse(e);
                            if (null == t || null == t.available_video_decoders)
                                throw Error("decoder survey is not available");
                            td = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                        } catch (e) {
                            (eq.error("Failed to parse codec survey", e), (td = !1));
                        }
                    })
                    .catch((e) => {
                        (eq.error("Failed to get codec survey", e), (td = !1));
                    })
                    .finally(() => {
                        P.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                    }),
            (tY = {
                [eX.O5.VIDEO]: e9.supports(eX.O5.VIDEO),
                [eX.O5.DESKTOP_CAPTURE]: e9.supports(eX.O5.DESKTOP_CAPTURE),
                [eX.O5.HYBRID_VIDEO]: e9.supports(eX.O5.HYBRID_VIDEO),
            }),
            this.waitFor(V.A, ek.default, eF.A, eB.A, eV.A, x.Ay, B.A, eH.A, j.Ay, eP.A, ej.default, eW.A));
    }
    supports(e) {
        return (e !== eX.O5.VIDEO || !!te("MediaEngineStore.supports")) && e9.supports(e);
    }
    supportsInApp(e) {
        return (e !== eX.O5.VIDEO || !!te("MediaEngineStore.supportsInApp")) && (tY[e] || e9.supports(e));
    }
    isSupported() {
        return e9.supported();
    }
    isNoiseSuppressionSupported() {
        return e9.supports(eX.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nP();
    }
    isNoiseCancellationError() {
        return tw;
    }
    isAutomaticGainControlSupported() {
        return e9.supports(eX.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nu() && (e9.supports(eX.O5.LEGACY_AUDIO_SUBSYSTEM) || e9.supports(eX.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e9.supports(eX.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e9.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nP();
    }
    isAecDumpSupported() {
        return e9.supports(eX.O5.AEC_DUMP);
    }
    getAecDump() {
        return t6().aecDumpEnabled;
    }
    getMediaEngine() {
        return e9;
    }
    getVideoComponent() {
        return e9.Video;
    }
    getCameraComponent() {
        return e9.Camera;
    }
    getKrispSuppressionLevel() {
        return _ ?? 100;
    }
    getKrispEnableStats() {
        return tM;
    }
    isEnabled() {
        return ti;
    }
    isMute() {
        return this.isSelfMute() || tA;
    }
    isDeaf() {
        return this.isSelfDeaf() || tI;
    }
    isServerMute() {
        return tA;
    }
    isServerDeaf() {
        return tI;
    }
    hasContext(e) {
        return null != tt[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return e === eX.x.DEFAULT && tf;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t6(e).mute ||
            !eO.A.didHavePermission(eY.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eX.x.DEFAULT && th)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tg;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tg = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eB.A.isHardwareMute(this.getInputDeviceId());
    }
    isHardwareMuteNoticeEnabled() {
        return tq;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return !this.isSupported() || t6(e).deaf;
    }
    isVideoEnabled() {
        return tp && tO;
    }
    isVideoAvailable() {
        return Object.values(t_).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tO;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.STREAM;
        return ta === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.STREAM;
        return ta === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return e !== ek.default.getId() && (t6(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e9.supports(eX.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t6(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t6(t).videoToggleStateMap[e] ?? eD.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t === eX.x.DEFAULT && tH.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return e === eX.x.DEFAULT && tH.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tG;
    }
    isNativeAudioPermissionReady() {
        return tV;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return ta;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return to;
    }
    isH264MfDecodeAvailable() {
        return td;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
            n = t6(t).localPans[e];
        return null != n ? n : eZ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
            n = t === eX.x.STREAM,
            i = t6(t).localVolumes[e];
        return null != i ? i : n ? 18 : 100;
    }
    getInputVolume() {
        return t6().inputVolume;
    }
    getOutputVolume() {
        return t6().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t6(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t6(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            N().each(tt, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eD.TBI.PUSH_TO_TALK && tn.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return ng(tc, t6().inputDeviceId);
    }
    getOutputDeviceId() {
        return ng(tu, t6().outputDeviceId);
    }
    getVideoDeviceId() {
        return ng(t_, t6().videoDeviceId);
    }
    getInputDevices() {
        return tc;
    }
    getOutputDevices() {
        return tu;
    }
    getVideoDevices() {
        return t_;
    }
    getEchoCancellation() {
        let e = t6();
        return eB.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e9.supports(eX.O5.SIDECHAIN_COMPRESSION) && t6().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t6().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t6().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tF && tF;
    }
    getOpenH264Enabled() {
        return (0, p.j9)() && t6().openH264Enabled;
    }
    getLoopback() {
        return tW.size > 0;
    }
    getLoopbackReasons() {
        return tW;
    }
    getNoiseSuppression() {
        let e = t6();
        return eB.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t6();
        return eB.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t6().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t6().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t6().silenceWarning;
    }
    getDebugLogging() {
        return e9.getDebugLogging();
    }
    getQoS() {
        return t6().qos;
    }
    getAttenuation() {
        return t6().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t6().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t6().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nc() && t6().automaticAudioSubsystem ? eX.rB.AUTOMATIC : e9.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e9.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t6().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === e$.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t6(e);
    }
    getState() {
        return {
            settingsByContext: tt,
            inputDevices: tc,
            outputDevices: tu,
            appSupported: tY,
            krispModuleLoaded: tb,
            krispFatalError: tv,
            krispVersion: u,
            krispSuppressionLevel: _,
            goLiveSource: a,
            goLiveContext: ta,
        };
    }
    getInputDetectedThisConnection() {
        return tR;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tL;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return p.isPlatformEmbedded || this.getMode(e) !== eD.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        e9.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tr;
    }
    getVideoHook() {
        return t6().videoHook;
    }
    supportsVideoHook() {
        return e9.supports(eX.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t6().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e9.supports(eX.O5.EXPERIMENTAL_SOUNDSHARE) && L().satisfies(M.A?.os.release, es.$x);
    }
    supportsHookSoundshare() {
        return (0, p.uF)() && e9.supports(eX.O5.SOUNDSHARE) && L().satisfies(M.A?.os.release, es.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t6().useSystemScreensharePicker,
            n = (0, p.j9)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e9.supports(eX.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tZ;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eX.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eE.definition.defaultConfig : eE.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === eX.x.STREAM && "streamer" === t && (0, p.uF)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = ef.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (n.push("linux-vulkan"), n.join(","));
    }
    getUseGamescopeCapture() {
        return tJ;
    }
    getSpeakingWhileMuted() {
        return tS;
    }
    getKrispModelOverride() {
        return E;
    }
    getKrispModels() {
        return tP;
    }
    getKrispVadActivationThreshold() {
        return t6().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveSystemTelecomCall() {
        return tQ;
    }
    setHasActiveSystemTelecomCall(e) {
        tQ = e;
    }
    supportsScreenSoundshare() {
        return (0, p.cX)()
            ? e9.supports(eX.O5.SOUNDSHARE) && L().satisfies(M.A?.os.release, es.P$) && nd()
            : (0, p.uF)()
              ? e9.supports(eX.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, p.j9)() && e9.supports(eX.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, p.uF)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tk[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, p.cX)() || (0, p.un)()) return A;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return this.supports(eX.O5.VIDEO)
            ? [{ rid: "100", type: e === eX.x.DEFAULT ? eX.mI.VIDEO : eX.mI.SCREEN, quality: 100 }]
            : [];
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, p.HZ)() };
        return e9.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tx &&
            ((tx = !0),
            (0, p.HZ)() &&
                e9.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    (eq.warn("DAVE preload failed:", e), eG.A.captureException(e));
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return e9.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return tl;
    }
    isClipsRecordingReadySignalSupported() {
        return e9.supports(eX.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return tK;
    }
    getHasNvidiaGpu() {
        return tz || window.DiscordNative?.process?.env?.LIBVA_DRIVER_NAME === "nvidia";
    }
}
function nx(e) {
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
let nk = (i = new nG(P.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && t8(r, null), null != t || null == n)) {
            ty = !1;
            return;
        }
        if (ty) return;
        ty = !0;
        let a = t6();
        (a.mute || a.deaf) && (n_({ deaf: !1, mute: !1 }), e9.eachConnection(t4));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                ((tA = t.mute || t.suppress), (tI = t.deaf), e9.eachConnection(t4));
                let e = null != t.guildId && null != t.channelId && null != tU && tU !== t.channelId,
                    n = !ty && null == t.channelId;
                return (t8(!e && !n && tp), (tU = t.channelId), !0);
            }
            return (__OVERLAY__ || t.userId !== ek.default.getId() || null != eH.A.getChannelId() || t8(!1, null), e);
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        ((r = e.sessionId), (tA = !1), (tI = !1));
        let t = t6();
        if (
            (nc() && (nu() ? nM(eX.rB.AUTOMATIC) : t.automaticAudioSubsystem && nU()),
            e9.supports(eX.O5.OFFLOAD_ADM_CONTROLS) && e9.setOffloadAdmControls(!0),
            (0, p.un)() &&
                ei.getConfig({ location: "handleConnectionOpen" }).enabled &&
                e9.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, p.un)() && (e9.setNcModels?.(ed), i.emitChange()),
            nS(t.inputDeviceId),
            (0, p.uF)())
        ) {
            let { windowsOutputBufferDurationMs: e } = (function (e) {
                let { location: t } = e;
                return eN.getConfig({ location: t });
            })({ location: "handleConnectionOpen" });
            null != e && e9.setAudioOutputBufferDurationMs(e);
        }
        (nR(), nA());
    },
    CONNECTION_OPEN_STATE_UPDATE: ny,
    APEX_EXPERIMENT_OVERRIDE_CREATE: ny,
    APEX_EXPERIMENT_OVERRIDE_DELETE: ny,
    APEX_EXPERIMENT_OVERRIDE_CLEAR: ny,
    APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE: ny,
    APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE: ny,
    APEX_EXPERIMENTS_FETCH_SUCCESS: ny,
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return ((0, p.HZ)() && i.startDavePreload(), !1);
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eD.S7L.CONNECTING:
                nf();
                break;
            case eD.S7L.RTC_CONNECTING:
                ((tL = !1), (o = void 0), (d = void 0), (c = void 0), (tR = !1), l.reset());
                break;
            case eD.S7L.RTC_CONNECTED:
                t8();
                break;
            case eD.S7L.DISCONNECTED:
                ((t1 = {}),
                    (function () {
                        if (0 === tH.size) return;
                        let e = eX.x.DEFAULT,
                            { disabledLocalVideos: t } = t6(e);
                        (tH.forEach((n) => {
                            (g()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                e9.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
                        }),
                            tH.clear(),
                            n_({ disabledLocalVideos: t }, e, !1));
                    })(),
                    nD());
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        ((tf = t), e9.eachConnection(t4));
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t6(t);
        if (t === eX.x.DEFAULT && (eO.A.requestPermission(eY.iL.AUDIO), th)) return !1;
        ((i = !r && !i) || (r = !1), n || (tg = !0), n_({ mute: i, deaf: r }, t), e9.eachConnection(t4));
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        (n_({ mute: n }, t), i || (tg = !0), e9.eachConnection(t4));
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        (n_({ deaf: !t6(t).deaf }, t), e9.eachConnection(t4));
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === ek.default.getId()) return;
        let { localMutes: i } = t6(t);
        (i[n] ? delete i[n] : (i[n] = !0),
            n_({ localMutes: i }, t),
            e9.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t));
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        g()(!(r && a), "These are not allowed to both be true.");
        let s = i === eD.bb8.DISABLED,
            { disabledLocalVideos: l } = t6(t),
            o = l[n] ?? !1,
            d = tH.has(n),
            c = i === eD.bb8.AUTO_ENABLED || i === eD.bb8.MANUAL_ENABLED;
        (eq.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            g()(!(d && !o), "If you are auto-disabled, then you are also disabled."));
        let u = s !== o,
            _ = t === eX.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        eq.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: f } = t6(t);
        if (
            (f[n] === eD.bb8.AUTO_PROBING &&
                i === eD.bb8.AUTO_ENABLED &&
                (0, eC.A)(n, s ? eX.Al.AUTO_DISABLE : eX.Al.AUTO_ENABLE, c),
            (f[n] = i),
            n_({ videoToggleStateMap: f }, t, r),
            i === eD.bb8.AUTO_PROBING
                ? eH.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eH.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tj ||
                (eq.info(`isAutoDisableAllowed=${tj} - disabling VideoHealthManager`),
                eH.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tj)) return;
            ((0, eC.A)(n, s ? eX.Al.AUTO_DISABLE : eX.Al.AUTO_ENABLE, c), s ? tH.add(n) : tH.delete(n));
        } else
            A &&
                (d && !s
                    ? (eq.info("disallowing auto-disable for this session because of manual override by user"),
                      (tj = !1),
                      eH.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eC.A)(n, eX.Al.MANUAL_REENABLE, c))
                    : (0, eC.A)(n, s ? eX.Al.MANUAL_DISABLE : eX.Al.MANUAL_ENABLE, c));
        (_ && !s && tH.delete(n),
            s ? (l[n] = !0) : delete l[n],
            n_({ disabledLocalVideos: l }, t, r),
            e9.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t));
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === ek.default.getId()) return;
        let r = t === eX.x.STREAM,
            { localVolumes: a } = t6(t);
        (i === (r ? 18 : 100) ? delete a[n] : (a[n] = i),
            n_({ localVolumes: a }, t),
            e9.eachConnection((e) => e.setLocalVolume(n, i), t));
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = t6(t);
        ((a[n] = { left: i, right: r }), n_({ localPans: a }, t), e9.eachConnection((e) => e.setLocalPan(n, i, r), t));
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        (n_({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), e9.eachConnection(t5));
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (n_({ inputVolume: t7(t) }), e9.setInputVolume(t));
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (n_({ outputVolume: t }), e9.setOutputVolume(t));
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        ((t = ng(tc, t)),
            (to = performance.now()),
            n_({ inputDeviceId: t }),
            nC(t),
            e9.eachConnection(nl),
            (o = void 0),
            (d = void 0),
            (c = void 0),
            (tR = !1),
            l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        (n_({ outputDeviceId: (t = ng(tu, t)) }), e9.setAudioOutputDevice(t), e9.eachConnection(nl));
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        n_({ activeInputProfile: t });
        let n = t6();
        (e9.eachConnection((e) => {
            (t5(e), nl(e));
        }),
            e9.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nv());
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = n_({ echoCancellation: e.enabled }),
            n = eB.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        (e9.eachConnection((e) => e.setEchoCancellation(n)), nv(), nb(e.location));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        ((t = n_({ sidechainCompression: e.enabled })), e9.setSidechainCompression(t.sidechainCompression));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = n_({ sidechainCompressionStrength: e.strength });
        e9.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return (t ? tW.add(n) : tW.delete(n), nv());
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = n_({ noiseSuppression: e.enabled }),
            n = eB.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        (e9.eachConnection((e) => e.setNoiseSuppression(n)), nv(), nb(e.location));
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = n_({ automaticGainControl: e.enabled });
        (e9.eachConnection((e) => nr(e, t.automaticGainControl)), nv(), nb(e.location));
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = n_({ noiseCancellation: e.enabled });
        (e9.eachConnection((e) => na(e, t.noiseCancellation)), nv(), nb(e.location));
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        (eR.A.setKrispModelOverride(e.model), (E = e.model), nv());
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        n_({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        e9.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        ((_ = t), eR.A.setKrispSuppressionLevel(t));
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, p.HZ)() || ((tM = e.enabled), e9.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        n_({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        n_({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        n_({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = n_({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        e9.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        (n_({ qos: t }), e9.eachConnection((e) => e.setQoS(t)));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tc;
        if (
            ((tc = nT(e, { deviceType: eX.oh.AUDIO_INPUT, defaultName: ez.intl.string(ez.t["/QIjDA"]) })),
            !N().isEqual(tc, t))
        ) {
            let e = t6();
            (nC(ng(tc, e.inputDeviceId)), e9.eachConnection(nl));
        }
        !(function (e) {
            let t = tu;
            if (
                ((tu = nT(e, { deviceType: eX.oh.AUDIO_OUTPUT, defaultName: ez.intl.string(ez.t.xlUg0v) })),
                !N().isEqual(tu, t))
            ) {
                let e = t6(),
                    n = ng(tu, e.outputDeviceId);
                (e9.setAudioOutputDevice(n), e9.eachConnection(nl));
                let i = nO(t),
                    r = nO(tu);
                i !== r &&
                    e9.eachConnection((e) => {
                        e.context === eX.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tO = e.videoDevices.length > 0;
        let n = t_;
        if (
            ((t_ = nT(e, { deviceType: eX.oh.VIDEO_INPUT, defaultName: ez.intl.string(ez.t.WKWARY) })),
            tp && !N().isEqual(t_, n))
        ) {
            let e = void 0 !== t_[tm],
                t = tm === eX.dx && n[eX.dx]?.disabled,
                i = "Firefox" === O().name && "" === tm && n[tm]?.name === "Default" && !n[tm]?.disabled;
            t8(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        n_({ inputVolume: t7(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        (b.w.remove(eQ), location.reload());
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        ((tL = !0 !== tR && !t), t && (tR = !0));
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        ((d = t), (o = n));
    },
    AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED: function (e) {
        let { deviceGuid: t, hardwareMuted: n } = e,
            i = ng(tc, t6().inputDeviceId),
            r = tc[i];
        if (t !== nN(r)) return !1;
        ((c = n), ey.default.track(eD.HAw.HARDWARE_MUTE_DETECTED, { input_device_name: r?.name, hardware_muted: n }));
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nM(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        (n_({ bypassSystemInputProcessing: t }), e9.setAudioInputBypassSystemProcessing(t), ns(), nb(e.location));
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        ((ti = e.enabled), e.unmute && n_({ mute: !1, deaf: !1 }), e9.eachConnection(t4));
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        (eO.A.requestPermission(eY.iL.CAMERA), t8(t));
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    ((ti = !1), e9.eachConnection(t4));
                    break;
                case "video":
                    t8(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? eX.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = i.startsWith(`${eX.fS.ACTIVITY}:`),
                d = o ? null : eU.A.getPidFromDesktopSource(i);
            (p.isPlatformEmbedded && !o && ({ soundshareId: e, soundshareSession: n } = nL(d, r)),
                s !== ta && (null != a && e9.setGoLiveSource(null, ta), (ta = s)),
                t8(s === eX.x.STREAM && tp, {
                    desktopSource: { id: i, sourcePid: d, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                }));
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eX.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === eX.x.STREAM && tp,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            t8(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else t8(tp, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        (n_({ videoDeviceId: (t = ng(t_, t)) }), t8());
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tr !== e.required && ((tr = e.required), e.required || e9.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nw,
    USER_SETTINGS_MODAL_SET_SECTION: nw,
    CERTIFIED_DEVICES_SET: function () {
        return (e9.eachConnection(nl), !1);
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tn.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tn.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        ((tt = t.settingsByContext),
            (tc = t.inputDevices),
            (tu = t.outputDevices),
            (tY = t.appSupported),
            (tb = t.krispModuleLoaded),
            (tv = t.krispFatalError),
            (u = t.krispVersion),
            (ta = t.goLiveContext));
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === eD.g6G.BACKGROUND && tp && !n) ((tC = !0), t8(!1));
        else {
            if (t !== eD.g6G.ACTIVE || !tC) return !1;
            ((tC = !1), t8(!0));
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        e9.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === th) return !1;
        ((th = n), e9.eachConnection(t4));
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eY.hL.ACCEPTED;
        switch (n) {
            case eY.iL.AUDIO:
                ((tV = !0), e9.eachConnection(t4));
                break;
            case eY.iL.CAMERA:
                !i && tp && t8(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        e9.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = n_({ aecDumpEnabled: t });
        e9.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        (n_({ openH264Enabled: t }), m.Ay?.setOpenH264Enabled?.(t));
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        ((tt = Object.values(eX.x).reduce((e, n) => {
            let i = e7();
            return ((e[n] = N().merge(i, t[n])), e);
        }, {})),
            b.w.set(eQ, tt),
            nE());
    },
    CHANNEL_DELETE: function () {
        if ((!tp && null == a) || null != eH.A.getRTCConnectionId()) return !1;
        t8(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eX.CO.KRISP_CPU_OVERUSE) {
            ((t1.noiseCancellation = !1), (t1.noiseSuppression = !0));
            let e = t6();
            return (e9.eachConnection((t) => na(t, e.noiseCancellation)), nv(), nb(), !0);
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eX.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t1.modeOptions = { vadUseKrisp: !1 }), e9.eachConnection((e) => t5(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tw && ((tw = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        e9.applyMediaFilterSettings(t).finally(() => {
            ((tG = !1), i.emitChange());
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tG = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tG = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eK.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nR(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (e9.setClipsSource(null),
            (0, p.uF)() &&
                (null != s.desktopSource.soundshareId
                    ? U.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && t6().videoHook && U.c1(s.desktopSource.sourcePid)));
        let a = eU.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nL(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = t2("MediaEngineStore clips"),
            c = t6().videoHook,
            u = c && eI.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: _, minCaptureHeight: E } = eA.getConfig({ location: "handleClipsInit" });
        e9.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useGraphicsCapture: no(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nd(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e0,
                hdrCaptureMode: d,
                videoHookAllowDx12: u,
                minCaptureWidth: _,
                minCaptureHeight: E,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eX.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), e9.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tq = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        ((tk[t] = { active: n, available: i }), ns());
    },
}));
