let i, r, a, s, l, o, d, c, u, _, E, A;
(n.d(t, { yz: () => e3, Ay: () => nU, hp: () => ns }), n(323874), n(14289), n(35956), n(321073));
var h,
    f = n(823598),
    I = n(626584),
    p = n(723702),
    m = n(253400);
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
    supportsFeature: (e) => m.Ay.supportsFeature(e),
    setProcessPriority(e) {
        m.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => m.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => m.Ay.getOpenH264LibraryPath(),
});
var g = n(284009),
    T = n.n(g),
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
    V = n(6494),
    H = n(986322),
    j = n(540305),
    W = n(945810);
function Y(e) {
    return { agc2Enabled: !0, noiseCancellationDuringProcessing: !0, vadKrispActivationThreshold: e };
}
(0, W.mj)({
    kind: "user",
    name: "2026-09-agc2-mobile",
    defaultConfig: { agc2Enabled: !1, noiseCancellationDuringProcessing: !1, vadKrispActivationThreshold: 0.5 },
    variations: { 1: Y(0.4), 2: Y(0.5), 3: Y(0.6), 4: Y(0.7) },
});
let K = (0, W.mj)({
        name: "2026-06-av1-encode-linux",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    $ = { probeAudioEffects: !1 },
    X = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: $,
        variations: { 1: { ...$, probeAudioEffects: !0 } },
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
let Q = (0, W.mj)({
    name: "2025-08-browser-hevc",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var J = n(400845);
let ee = (0, J.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    et = (0, W.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    en = (0, W.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ei = n(574381),
    er = n(611599),
    ea = n(55010);
let es = new er.Vy("InputWatcher");
class el {
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
        if ((0, ei.uF)() && L().satisfies(M.A?.os.release, ea.PH))
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
                es.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            (es.info("Silence:", e),
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
let eo = [
        { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
        { name: "small_NC", maxSampleRate: 16e3, filename: "krisp-nc-o-lite-v1.kef" },
        { name: "full_NC", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7-fp16.kef" },
    ],
    ed = (0, J.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ec = n(140175);
(0, W.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
let eu = (0, W.mj)({
        kind: "user",
        name: "2026-08-mute-aware-noise-cancellation",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    e_ = (0, J.Ay)({
        kind: "user",
        name: "2026-07-nvenc-reconstructed-frames",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eE = (0, W.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    eA = (0, W.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var eh = n(625075);
let ef = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eI = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ep = (0, W.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eg(e) {
    return em.getConfig({ location: e });
}
let eT = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eS = n(75076),
    eN = n(674966),
    eC = n(559633),
    eO = n(886705),
    eR = n(129230),
    eL = n(652215);
let ey = new er.Vy("AudioEffects");
var eD = n(967347),
    eb = n(617617),
    ev = n(125325),
    eP = n(353835),
    eM = n(927813),
    eU = n(856383),
    ew = n(350535),
    eG = n(46653),
    ex = n(131319),
    ek = n(347481),
    eF = n(734057),
    eB = n(495867),
    eV = n(287809),
    eH = n(117549),
    ej = n(765682),
    eW = n(355097),
    eY = n(621380),
    eK = n(731854),
    e$ = n(792996);
let eX = new I.A("MediaEngineStore"),
    ez = "MediaEngineStore",
    eq = {
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
    eQ = 5 * eM.A.Millis.SECOND,
    eJ = 2 * eM.A.Millis.SECOND,
    e0 = 30 * eM.A.Millis.SECOND,
    e1 = "https://ciscobinary.openh264.org/libopenh264-2.7.0-linux64.8.so.bz2",
    e2 = 0;
var e3 =
    (((h = {}).WEBCAM = "WEBCAM"),
    (h.INTEGRATED = "INTEGRATED"),
    (h.BLUETOOTH = "BLUETOOTH"),
    (h.AIRPLAY = "AIRPLAY"),
    (h.HEADSET = "HEADSET"),
    h);
function e6() {
    return {
        mode: eL.TBI.VOICE_ACTIVITY,
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
        inputDeviceId: eK.dx,
        outputDeviceId: eK.dx,
        videoDeviceId: eK.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e8.supports(eK.O5.VIDEO_HOOK),
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
let e5 = {
        [eY.m.CUSTOM]: {},
        [eY.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eY.m.STUDIO]: {
            mode: eL.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e4 = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    e8 = (0, D.hB)((0, D.WI)());
function e7(e) {
    return eh.k.getConfig({ location: e }).videoEnabled;
}
eX.enableNativeLogger(!0);
let e9 = {},
    te = new Set([eK.x.DEFAULT]),
    tt = e8.supports(eK.O5.AUTO_ENABLE),
    tn = !1,
    ti = eK.x.STREAM,
    tr = 0,
    ta = !1,
    ts = performance.now(),
    tl = null,
    to = { [eK.dx]: nE("No Input Devices", eK.oh.AUDIO_INPUT) },
    td = { [eK.dx]: nE("No Output Devices", eK.oh.AUDIO_OUTPUT) },
    tc = { [eK.dx]: nE("No Video Devices", eK.oh.VIDEO_INPUT) },
    tu = new v.Ep(),
    t_ = !1,
    tE = !1,
    tA = !1,
    th = !1,
    tf = !1,
    tI = eK.qe,
    tp = eK.qe,
    tm = !1,
    tg = !1,
    tT = new v.Ep(),
    tS = !1,
    tN = !1,
    tC = !1,
    tO = !1,
    tR = !1,
    tL = !1,
    ty = !1,
    tD = !1,
    tb = [],
    tv = !1,
    tP = null,
    tM = !1,
    tU = !1,
    tw = !1,
    tG = {},
    tx = null,
    tk = null,
    tF = !1;
(eN.A.hasPermission(ej.iL.AUDIO, { showAuthorizationError: !1 }),
    eN.A.hasPermission(ej.iL.CAMERA, { showAuthorizationError: !1 }));
let tB = new Set(),
    tV = !1,
    tH = new Set(),
    tj = {},
    tW = null,
    tY = null,
    tK = null,
    t$ = !1,
    tX = !0,
    tz = !1,
    tq = !1,
    tZ = !1,
    tQ = !1,
    tJ = {};
function t0(e) {
    return (function (e) {
        let { location: t } = e;
        return et.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
function t1() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT,
        t = e9[e];
    return (null == t && ((t = e6()), (e9[e] = t)), t);
}
function t2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT,
        t = t1(e);
    if (e === eK.x.STREAM) return { ...t, modeOptions: { ...t.modeOptions, vadLeading: 0 } };
    let n = e5[t.activeInputProfile ?? eY.m.CUSTOM],
        i = ny() ? tJ : e4,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function t3(e) {
    let t = t2(e.context),
        n = t.mode;
    (e.context === eK.x.DEFAULT && (0, ec.N)(e8, !1, !1),
        e.setInputMode(n, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && ny(),
            vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: Math.round(t.modeOptions.delay),
        }));
}
function t6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    return N().clamp(e, 0, t);
}
function t5(e) {
    let t = t2(e.context),
        n = !tt || t.mute || t.deaf;
    switch (e.context) {
        case eK.x.DEFAULT:
            n = n || t_ || tE || tA || !eN.A.didHavePermission(ej.iL.AUDIO);
            break;
        case eK.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    if ((e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eK.x.DEFAULT)) {
        let { enabled: t } = (function (e) {
            let { location: t } = e;
            return eu.getConfig({ location: t });
        })({ location: "updateConnectionMuteDeaf" });
        (e.setSkipNoiseCancellationIfMuted(t && n), w.A.updateNativeMute());
    }
}
function t4() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tf,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, p.uF)()
                ? U.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t2().videoHook && U.c1(n.desktopSource.sourcePid),
            e8.setGoLiveSource(null, ti)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e8.setGoLiveSource(null, ti),
        tf || e)
    ) {
        let t = t2().videoDeviceId;
        (tf && t === eK.dx && tp === eK.dx && tI !== eK.qe ? (t = tI) : (tp = t),
            (tI = (tf = e) ? np(tc, t) : eK.qe),
            e8.setVideoInputDevice(tI));
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t0("MediaEngineStore go live"),
                r = t2().videoHook,
                a = ns(),
                s = a ? ((0, p.uF)() && L().satisfies(M.A?.os.release, ea.fG) ? 26100 : 22e3) : 0,
                l = !1;
            (0, p.uF)() && s >= 26100 && (l = !0 === tY || eI.getConfig({ location: "updateVideo" }).enabled);
            let o = r && ef.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: d, minCaptureHeight: c } = eE.getConfig({ location: "updateVideo" });
            e8.setGoLiveSource(
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
                        allowScreenCaptureKit: nl(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eQ,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? ee.definition.defaultConfig : ee.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: o,
                        minCaptureWidth: d,
                        minCaptureHeight: c,
                    },
                    quality: e,
                },
                ti,
            );
        }
        null != t.cameraSource &&
            e8.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                ti,
            );
    }
}
function t8(e) {
    switch (e) {
        case eK.CO.KRISP_CPU_OVERUSE:
            return F.B6.KrispCpuOveruse;
        case eK.CO.KRISP_FAILED:
            return F.B6.KrispFailed;
        case eK.CO.KRISP_VAD_CPU_OVERUSE:
            return F.B6.KrispVadCpuOveruse;
        case eK.CO.KRISP_INIT_ERROR:
            return F.B6.KrispInitError;
        case eK.CO.KRISP_INIT_ERROR_NATIVE:
            return F.B6.KrispInitErrorNative;
        case eK.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return F.B6.KrispInitErrorSse4NotSupported;
        case eK.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return F.B6.KrispInitErrorAvx2NotSupported;
        case eK.CO.KRISP_INIT_ERROR_UNSIGNED:
            return F.B6.KrispInitErrorUnsigned;
        case eK.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return F.B6.KrispInitErrorGlobalInit;
        case eK.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return F.B6.KrispInitErrorWeight8k;
        case eK.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return F.B6.KrispInitErrorWeight16k;
        case eK.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return F.B6.KrispInitErrorWeight32k;
        case eK.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return F.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let t7 = new Set([
    eK.CO.KRISP_INIT_ERROR,
    eK.CO.KRISP_INIT_ERROR_NATIVE,
    eK.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eK.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eK.CO.KRISP_INIT_ERROR_UNSIGNED,
    eK.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eK.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eK.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eK.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eK.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function t9(e, t) {
    if (
        (eX.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t8(e), voiceProcessingErrorDetails: t }),
        eR.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        t7.has(e))
    ) {
        tD = !0;
        return;
    }
    e === eK.CO.KRISP_VAD_CPU_OVERUSE
        ? P.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tM = !0), P.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function ne(e, t) {
    let n = t === eK.$C.LIVE;
    (eX.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, F.QW)({
                type: F.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case eK.kv.UNSUPPORTED:
                            return F.B6.VideoBackgroundUnsupported;
                        case eK.kv.INIT_FAILED:
                            return F.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        P.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" }));
}
function nt(e) {
    return { enabled: e, ...(e ? eq : { useAGC2: !1 }) };
}
function nn(e, t) {
    e.setAutomaticGainControl(nt(t));
}
function ni(e, t) {
    let n = (0, eO.A)(t, i.getSystemMicrophoneMode());
    (n !== t && eX.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t));
}
function nr() {
    let e = t2(),
        t = e.inputDeviceId,
        n = ek.A.hasEchoCancellation(t) || e.echoCancellation,
        r = ek.A.hasNoiseSuppression(t) || e.noiseSuppression,
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
                krispEnabled: (0, eO.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    (e8.setVoiceSampleRateCap(a), e8.setVoiceChannelCountCap(s));
}
function na(e) {
    let t = t2(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ek.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ek.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nn(e, ek.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        ni(e, t.noiseCancellation),
        nr(),
        (0, p.uF)() && L().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === eK.x.DEFAULT)
    ) {
        let t = nf(to[i.getInputDeviceId()]) || nf(td[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(t ? "mix" : "auto");
    }
    if ((0, p.HZ)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ns() {
    return (0, p.uF)() && L().satisfies(M.A?.os.release, ea.yg);
}
function nl() {
    return (0, p.cX)() && e8.supports(eK.O5.SCREEN_CAPTURE_KIT) && L().satisfies(M.A?.os.release, ea.e);
}
function no() {
    return (
        (0, p.uF)() &&
        e8.supports(eK.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e8.supports(eK.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nd() {
    return e8.supports(eK.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eK.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t1(t);
    return (Object.assign(i, e), !__OVERLAY__ && n && b.w.set(ez, e9), i);
}
function nu() {
    let e = t2();
    (nT(e.inputDeviceId),
        e8.setAudioOutputDevice(e.outputDeviceId),
        t4(),
        e8.setInputVolume(e.inputVolume),
        e8.setOutputVolume(e.outputVolume),
        e8.setAecDump(e.aecDumpEnabled),
        e8.setSidechainCompression(e.sidechainCompression),
        e8.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e8.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, p.j9)() && m.Ay?.setOpenH264Enabled?.(e.openH264Enabled));
}
function n_() {
    tt || e8.enable().then(() => P.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nE(e, t) {
    return {
        id: eK.dx,
        deviceType: t,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nA(e, t) {
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
let nh = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nf(e) {
    return e?.windowsDeviceService === "voicemodvad";
}
function nI(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nE(i, n);
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
                    case nA(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nh.test(e.hardwareId):
                        return "INTEGRATED";
                    case N()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nA(e, i):
                    case "audiooutput" === e.type && nA(e, n):
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
function np(e, t) {
    let n = e[t] ?? e[eK.dx] ?? N()(e).values().first();
    return null != n ? n.id : t;
}
async function nm(e) {
    if (!(0, p.uF)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = to[e];
    if (t?.guid != null)
        try {
            await (async function (e, t, n) {
                if (!(0, ei.uF)())
                    return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
                if (!L().satisfies(M.A.os.release, ">=10.0.22000"))
                    return Promise.reject(
                        Error("Audio effects querying likely not supported on this Windows version."),
                    );
                try {
                    let i = await n.getDeviceAudioEffects(e);
                    return (
                        P.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
                        eR.default.track(eL.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                            succeeded: !0,
                            active_effects: i.active,
                            available_effects: i.available,
                        }),
                        i
                    );
                } catch (e) {
                    (ey.error("Failed to probe audio effects for device", e),
                        eR.default.track(eL.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 }));
                }
            })(t.guid, e, e8);
        } catch (e) {
            eX.warn("Unable to query audio effects", e);
        }
}
function ng(e) {
    if (null != e) return null != e.guid && "" !== e.guid ? e.guid : e.name;
}
function nT(e) {
    (e8.setAudioInputDevice(e),
        nm(e),
        (function (e) {
            if (!(0, p.uF)() && !(0, p.cX)() && !(0, p.j9)()) return;
            let t = ng(to[e]);
            null != t && e8.watchDeviceHardwareMutedChange?.(t);
        })(e));
}
function nS(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nN() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eb.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eW.W.USER ? eK.x.DEFAULT : eK.x.STREAM,
            r = i === eK.x.STREAM ? 18 : 100,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = t2(i);
        for (let [e, t] of Object.entries(a))
            null == (0, ev.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                e8.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    e8.eachConnection((t) => {
                        (t.setLocalVolume(e, r), t.setLocalMute(e, !1));
                    }, i));
        nc({ localMutes: s, localVolumes: l }, i);
    }
}
function nC(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    eX.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eP.A.getAudioPid(e),
                    n = "";
                return (null != t && (n = eP.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n });
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
                            H.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            P.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return (null != e && t2().videoHook && U.GH(e), { soundshareId: null, soundshareSession: null });
}
function nO() {
    let e = eK.x.DEFAULT,
        { videoToggleStateMap: t } = t2(e);
    for (let [e, n] of Object.entries(t)) n === eL.bb8.AUTO_PROBING && delete t[e];
    nc({ videoToggleStateMap: t }, e, !1);
}
function nR(e) {
    let t = t2(),
        n = e8.getAudioSubsystem(),
        r = e8.getAudioLayer(),
        a = np(to, t.inputDeviceId),
        s = to[a]?.name,
        l = (0, eO.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eR.default.track(eL.HAw.VOICE_PROCESSING, {
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
function nL() {
    let e = t2(),
        t = tH.size > 0,
        n = e.inputDeviceId,
        i = ek.A.hasEchoCancellation(n) || e.echoCancellation,
        r = ek.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nt(ek.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    (e8.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        nr());
}
function ny() {
    return (ty || !1) && !tD;
}
function nD(e) {
    e === eK.rB.AUTOMATIC
        ? (nc({ automaticAudioSubsystem: !0 }), nb())
        : (nc({ automaticAudioSubsystem: !1 }), e8.setAudioSubsystem(e));
}
function nb() {
    e8.queueAudioSubsystem(eK.rB.EXPERIMENTAL);
}
function nv(e) {
    let { section: t } = e;
    return (t === eL.nc_.VOICE && n_(), !1);
}
class nP extends y.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        ((l ??= new el(e8, this)),
            tu.start(e0, () => {
                (eX.error("Device enumeration timed out"), eR.default.track(eL.HAw.DEVICE_ENUMERATION_TIMEOUT, {}));
            }),
            e8.on(D.bg.Connection, (e) => {
                let t;
                (nL(), t3(e), t5(e), na(e));
                let n = t2();
                (e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, p.uF)() || (0, p.j9)()
                        ? (null != tk
                              ? tk
                              : "u" > typeof window
                                ? (tk = (async function () {
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
                                  })().then((e) => ((tx = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eK.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          })
                        : (0, p.cX)() && e.setExperimentFlag(eK.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, p.j9)() && n.openH264Enabled && e.setExperimentFlag(eK.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ed.definition.defaultConfig : ed.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eK.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eK.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eK.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0));
                let { swallowVolumeOnlySpeakingEvents: r } = G.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eK.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eK.x.STREAM)
                ) {
                    let t = nS(td);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, p.uF)())
                    (e.setExperimentFlag(eK.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eK.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eK.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                else if ((0, p.cX)())
                    (e.setExperimentFlag(eK.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eK.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eK.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                L().satisfies(window?.DiscordNative?.os.release, eK.Dk)
                            ),
                        ));
                else if ((0, p.j9)()) {
                    let { enabled: t } = K.getConfig({ location: "MediaEngineStore" });
                    (t && e.setExperimentFlag(eK.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eK.fd.SIGNAL_AV1_DECODE, !0));
                } else
                    ((0, p.un)() || (0, p.m0)()) &&
                        (e.setExperimentFlag(eK.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eK.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(eK.fd.H265_HARDWARE_DECODE_AVAILABLE, !0));
                if ((0, p.HZ)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eK.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, p.uF)() &&
                    tW?.startsWith("AMD") &&
                    eg("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eK.fd.WMF_GPU_ENCODE, !0),
                (0, p.uF)() &&
                    tW?.startsWith("Intel") &&
                    !0 === tY &&
                    1 === tK &&
                    eT.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(eK.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(eK.fd.INTEL_GPU_DISABLE, !0)),
                (0, p.uF)() &&
                    tW?.startsWith("Intel") &&
                    !0 === tY &&
                    1 === tK &&
                    ep.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eK.fd.INTEL_GPU_DISABLE, !0),
                (0, p.uF)() &&
                    tW?.startsWith("Qualcomm") &&
                    eg("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eK.fd.WMF_GPU_ENCODE, !0),
                e8.setHasFullbandPerformance(null === (t = (0, k.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = t2(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== eG.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eG.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                (e.on(D.yq.Speaking, (t, n, i, r) => {
                    P.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eK.x.DEFAULT &&
                        ((tg = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tg;
                            ((tg = !0),
                                e && i.emitChange(),
                                tT.start(eJ, () => {
                                    ((tg = !1), i.emitChange());
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
                            eR.default.track(eL.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, j.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, t9),
                    e.on(D.yq.VoiceActivityDetectorError, t9),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        eR.default.track(eL.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        P.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(ex.A.bitrate),
                    e.applyVideoQualityMode(eH.A.mode),
                    (0, p.uF)() &&
                        e8.supports(eK.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        e8.setAsyncVideoInputDeviceInit(!0));
            }),
            e8.on(D.bg.DeviceChange, (e, t, n) => {
                (tu.stop(),
                    P.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n }));
            }),
            e8.on(D.bg.VolumeChange, (e, t) => {
                P.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            e8.on(D.bg.DesktopSourceEnd, (e, t) => {
                P.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            e8.on(D.bg.AudioPermission, (e) => {
                ((tF = !0), P.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e }));
            }),
            e8.on(D.bg.VideoPermission, (e) => {
                P.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            e8.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eP.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eX.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await eR.default.track(
                        eL.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eX.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eX.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    b.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            e8.on(D.bg.VideoInputInitialized, (e) => {
                eR.default.track(eL.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eM.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eB.A.getMediaSessionId(),
                    rtc_connection_id: eB.A.getRTCConnectionId(),
                });
            }),
            e8.on(D.bg.AudioInputInitialized, (e) => {
                eR.default.track(eL.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eM.A.Millis.SECOND),
                    rtc_connection_id: eB.A.getRTCConnectionId(),
                });
            }),
            e8.on(D.bg.ClipsRecordingRestartNeeded, () => {
                P.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            e8.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = tr < 3;
                ((tr += 1),
                    P.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                    n
                        ? P.h.dispatch({ type: "CLIPS_RESTART" })
                        : eX.warn(
                              `Clips init failure budget exhausted (${tr} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                          ));
            }),
            e8.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== tr && (eX.info(`Clips bridge reported healthy; resetting restart budget (was ${tr}).`), (tr = 0));
            }),
            e8.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                ta !== e && (eX.info(`Clips recorder ready changed: ${e}`), (ta = e));
            }),
            e8.on(D.bg.ClipsBridgeIdleShutdown, () => {
                eX.info("Clips bridge idle shutdown");
            }),
            e8.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && U.c1(t), (s = null));
            }),
            e8.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            e8.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            e8.on(D.bg.NativeScreenSharePickerError, (e) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            e8.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                eR.default.track(eL.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            e8.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            e8.on(D.bg.ConnectionStats, (e) => {
                P.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e2++,
                            context: n.context,
                        };
                    }),
                });
            }),
            e8.on(D.bg.VoiceProcessingError, t9),
            e8.on(D.bg.VideoFilterError, ne),
            e8.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nM(e);
                null !== t && eR.default.track(eL.HAw.VOICE_QUEUE_METRICS, t);
            }),
            e8.setOnVideoContainerResized((e, t, n) => {
                P.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } });
            }),
            (async function () {
                if (!e8.supports(eK.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
                let e = await window.DiscordNative.processUtils.getSystemInfo();
                (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
                    ((tZ = !0), (tq = e8.supports(eK.O5.GAMESCOPE_CAPTURE)));
            })(),
            l.reset(),
            (0, eD.w)().then((e) => {
                if (null != e) {
                    ((tW = e.gpu_brand), (tY = e.has_intel_hybrid_igpu), (tK = e.gpu_count));
                    let t = e.gpus ?? [];
                    t$ = t.length > 0 && t.every((e) => "10de" === e.vendor_id);
                }
            }),
            e8.on(D.bg.DeviceHardwareMutedChange, (e, t) => {
                P.h.dispatch({ type: "AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED", deviceGuid: e, hardwareMuted: t });
            }),
            e8.on(D.bg.SystemMicrophoneModeChange, (e) => {
                ((A = e), e8.eachConnection(na), i.emitChange());
            }),
            null != (e = b.w.get("audio")) && (b.w.set(ez, { [eK.x.DEFAULT]: e }), b.w.remove("audio")),
            (e9 = b.w.get(ez) ?? {}),
            N().each(e9, (e) => {
                (N().defaultsDeep(e, e6()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, ew.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    e8.supports(eK.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, p.HZ)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)));
            }),
            nu(),
            ((0, p.uF)() || (0, p.j9)() || (0, p.cX)()) && !__OVERLAY__ && !tL && !ty
                ? ((tL = !0),
                  (async function () {
                      try {
                          await m.Ay.ensureModule("discord_krisp");
                          let e = m.Ay.requireModule("discord_krisp");
                          ((ty = !0),
                              (u = e.getSdkVersion?.()),
                              (_ = e.getSuppressionLevel?.() ?? 100),
                              e.getNcModels?.().then((e) => {
                                  ((tb = e), i.emitChange());
                              }),
                              i.emitChange(),
                              await m.Ay.ensureModule("discord_voice"));
                          let t = m.Ay.requireModule("discord_voice");
                          t.setupKrispPath?.();
                      } catch (t) {
                          (eX.warn(`Failed to load Krisp module: ${t.message}`), eU.A.captureException(t));
                          let e = eK.CO.KRISP_INIT_ERROR;
                          if (t.message.includes(": ")) {
                              let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                              e = isNaN(n) || 0 === n ? eK.CO.KRISP_INIT_ERROR : n;
                          }
                          ((0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t8(e) }),
                              eR.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }));
                      } finally {
                          tL = !1;
                      }
                  })())
                : (0, p.HZ)() && e8.supports(eK.O5.NOISE_CANCELLATION)
                  ? ((ty = !0), i.emitChange())
                  : (0, p.HZ)() && nc({ noiseCancellation: !1 }),
            (0, p.j9)() &&
                (async function () {
                    try {
                        let e,
                            t = "",
                            n = !1,
                            i = URL.parse(e1);
                        if (null === i) return void eX.log("OpenH264 URL ", i, " is invalid");
                        let r = i.pathname.split("/"),
                            a = r[r.length - 1].replace(".bz2", "");
                        try {
                            let t = await m.Ay.downloadOpenH264(
                                e1,
                                a,
                                "1522f873a482923c5ec018a4415e1866898197528828c50f90fd300c94620df3",
                                (e) => {
                                    eX.log("OpenH264 download status", e);
                                },
                            );
                            (eX.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0));
                        } catch (n) {
                            (eX.error("OpenH264 download failed", n), (t = n.message), (e = !1));
                        }
                        if (
                            (eR.default.track(eL.HAw.VIDEO_OPENH264_DOWNLOADED, {
                                success: e,
                                fetched_from_network: n,
                                error_message: t,
                            }),
                            e)
                        ) {
                            let e = await m.Ay.cleanupUnusedOpenH264Files([a]);
                            eX.log("OpenH264 cleanup", e);
                        }
                    } catch (e) {
                        eX.error("OpenH264 download failed", e);
                    }
                })(),
            nO(),
            (0, p.xl)() &&
                p.isPlatformEmbedded &&
                !tQ &&
                ((tQ = !0),
                setTimeout(async function e() {
                    let t = await new Promise((e) => {
                        m.Ay.pollQueueMetrics((t) => {
                            e(t);
                        });
                    });
                    t.periodMs = 9e5;
                    let n = nM(t);
                    (null !== n && eR.default.track(eL.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, 9e5));
                }, 9e5)),
            (0, p.uF)() &&
                p.isPlatformEmbedded &&
                null === tl &&
                e8
                    .getCodecSurvey()
                    .then((e) => {
                        try {
                            let t = JSON.parse(e);
                            if (null == t || null == t.available_video_decoders)
                                throw Error("decoder survey is not available");
                            tl = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                        } catch (e) {
                            (eX.error("Failed to parse codec survey", e), (tl = !1));
                        }
                    })
                    .catch((e) => {
                        (eX.error("Failed to get codec survey", e), (tl = !1));
                    })
                    .finally(() => {
                        P.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                    }),
            (tj = {
                [eK.O5.VIDEO]: e8.supports(eK.O5.VIDEO),
                [eK.O5.DESKTOP_CAPTURE]: e8.supports(eK.O5.DESKTOP_CAPTURE),
                [eK.O5.HYBRID_VIDEO]: e8.supports(eK.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eG.default, ex.A, ek.A, eF.A, x.Ay, B.A, eB.A, H.Ay, eb.A, eV.default, eH.A));
    }
    supports(e) {
        return (e !== eK.O5.VIDEO || !!e7("MediaEngineStore.supports")) && e8.supports(e);
    }
    supportsInApp(e) {
        return (e !== eK.O5.VIDEO || !!e7("MediaEngineStore.supportsInApp")) && (tj[e] || e8.supports(e));
    }
    isSupported() {
        return e8.supported();
    }
    isNoiseSuppressionSupported() {
        return e8.supports(eK.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return ny();
    }
    isNoiseCancellationError() {
        return tM;
    }
    isAutomaticGainControlSupported() {
        return e8.supports(eK.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nd() && (e8.supports(eK.O5.LEGACY_AUDIO_SUBSYSTEM) || e8.supports(eK.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e8.supports(eK.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e8.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return ny();
    }
    isAecDumpSupported() {
        return e8.supports(eK.O5.AEC_DUMP);
    }
    getAecDump() {
        return t2().aecDumpEnabled;
    }
    getMediaEngine() {
        return e8;
    }
    getVideoComponent() {
        return e8.Video;
    }
    getCameraComponent() {
        return e8.Camera;
    }
    getKrispSuppressionLevel() {
        return _ ?? 100;
    }
    getKrispEnableStats() {
        return tv;
    }
    isEnabled() {
        return tt;
    }
    isMute() {
        return this.isSelfMute() || t_;
    }
    isDeaf() {
        return this.isSelfDeaf() || th;
    }
    isServerMute() {
        return t_;
    }
    isServerDeaf() {
        return th;
    }
    hasContext(e) {
        return null != e9[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT;
        return e === eK.x.DEFAULT && tE;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t2(e).mute ||
            !eN.A.didHavePermission(ej.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eK.x.DEFAULT && tA)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tm;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tm = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ek.A.isHardwareMute(this.getInputDeviceId());
    }
    isHardwareMuteNoticeEnabled() {
        return tX;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT;
        return !this.isSupported() || t2(e).deaf;
    }
    isVideoEnabled() {
        return tf && tN;
    }
    isVideoAvailable() {
        return Object.values(tc).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tN;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.STREAM;
        return ti === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.STREAM;
        return ti === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eK.x.DEFAULT;
        return e !== eG.default.getId() && (t2(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e8.supports(eK.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eK.x.DEFAULT;
        return t2(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eK.x.DEFAULT;
        return t2(t).videoToggleStateMap[e] ?? eL.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eK.x.DEFAULT;
        return t === eK.x.DEFAULT && tB.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT;
        return e === eK.x.DEFAULT && tB.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tU;
    }
    isNativeAudioPermissionReady() {
        return tF;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return ti;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return ts;
    }
    isH264MfDecodeAvailable() {
        return tl;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eK.x.DEFAULT,
            n = t2(t).localPans[e];
        return null != n ? n : eZ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eK.x.DEFAULT,
            n = t === eK.x.STREAM,
            i = t2(t).localVolumes[e];
        return null != i ? i : n ? 18 : 100;
    }
    getInputVolume() {
        return t2().inputVolume;
    }
    getOutputVolume() {
        return t2().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT;
        return t2(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT;
        return t2(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            N().each(e9, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eL.TBI.PUSH_TO_TALK && te.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return np(to, t2().inputDeviceId);
    }
    getOutputDeviceId() {
        return np(td, t2().outputDeviceId);
    }
    getVideoDeviceId() {
        return np(tc, t2().videoDeviceId);
    }
    getInputDevices() {
        return to;
    }
    getOutputDevices() {
        return td;
    }
    getVideoDevices() {
        return tc;
    }
    getEchoCancellation() {
        let e = t2();
        return ek.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e8.supports(eK.O5.SIDECHAIN_COMPRESSION) && t2().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t2().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t2().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tx && tx;
    }
    getOpenH264Enabled() {
        return (0, p.j9)() && t2().openH264Enabled;
    }
    getLoopback() {
        return tH.size > 0;
    }
    getLoopbackReasons() {
        return tH;
    }
    getNoiseSuppression() {
        let e = t2();
        return ek.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t2();
        return ek.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t2().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t2().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t2().silenceWarning;
    }
    getDebugLogging() {
        return e8.getDebugLogging();
    }
    getQoS() {
        return t2().qos;
    }
    getAttenuation() {
        return t2().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t2().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t2().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return no() && t2().automaticAudioSubsystem ? eK.rB.AUTOMATIC : e8.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e8.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t2().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eY.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT;
        return t2(e);
    }
    getState() {
        return {
            settingsByContext: e9,
            inputDevices: to,
            outputDevices: td,
            appSupported: tj,
            krispModuleLoaded: ty,
            krispFatalError: tD,
            krispVersion: u,
            krispSuppressionLevel: _,
            goLiveSource: a,
            goLiveContext: ti,
        };
    }
    getInputDetectedThisConnection() {
        return tC;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tO;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT;
        return p.isPlatformEmbedded || this.getMode(e) !== eL.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        e8.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tn;
    }
    getVideoHook() {
        return t2().videoHook;
    }
    supportsVideoHook() {
        return e8.supports(eK.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t2().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e8.supports(eK.O5.EXPERIMENTAL_SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.$x);
    }
    supportsHookSoundshare() {
        return (0, p.uF)() && e8.supports(eK.O5.SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t2().useSystemScreensharePicker,
            n = (0, p.j9)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e8.supports(eK.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tZ;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eK.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? e_.definition.defaultConfig : e_.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === eK.x.STREAM && "streamer" === t && (0, p.uF)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eA.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (n.push("linux-vulkan"), n.join(","));
    }
    getUseGamescopeCapture() {
        return tq;
    }
    getSpeakingWhileMuted() {
        return tg;
    }
    getKrispModelOverride() {
        return E;
    }
    getKrispModels() {
        return tb;
    }
    getKrispVadActivationThreshold() {
        return t2().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveSystemTelecomCall() {
        return tz;
    }
    setHasActiveSystemTelecomCall(e) {
        tz = e;
    }
    supportsScreenSoundshare() {
        return (0, p.cX)()
            ? e8.supports(eK.O5.SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.P$) && nl()
            : (0, p.uF)()
              ? e8.supports(eK.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, p.j9)() && e8.supports(eK.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, p.uF)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tG[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, p.cX)() || (0, p.un)()) return A;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK.x.DEFAULT;
        return this.supports(eK.O5.VIDEO)
            ? [{ rid: "100", type: e === eK.x.DEFAULT ? eK.mI.VIDEO : eK.mI.SCREEN, quality: 100 }]
            : [];
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, p.HZ)() };
        return e8.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tw &&
            ((tw = !0),
            (0, p.HZ)() &&
                e8.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    (eX.warn("DAVE preload failed:", e), eU.A.captureException(e));
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return e8.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return ta;
    }
    isClipsRecordingReadySignalSupported() {
        return e8.supports(eK.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return tW;
    }
    getHasNvidiaGpu() {
        return t$ || window.DiscordNative?.process?.env?.LIBVA_DRIVER_NAME === "nvidia";
    }
}
function nM(e) {
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
let nU = (i = new nP(P.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && t4(r, null), null != t || null == n)) {
            tR = !1;
            return;
        }
        if (tR) return;
        tR = !0;
        let a = t2();
        (a.mute || a.deaf) && (nc({ deaf: !1, mute: !1 }), e8.eachConnection(t5));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                ((t_ = t.mute || t.suppress), (th = t.deaf), e8.eachConnection(t5));
                let e = null != t.guildId && null != t.channelId && null != tP && tP !== t.channelId,
                    n = !tR && null == t.channelId;
                return (t4(!e && !n && tf), (tP = t.channelId), !0);
            }
            return (__OVERLAY__ || t.userId !== eG.default.getId() || null != eB.A.getChannelId() || t4(!1, null), e);
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        ((r = e.sessionId), (t_ = !1), (th = !1));
        let t = t2();
        (no() && (nd() ? nD(eK.rB.AUTOMATIC) : t.automaticAudioSubsystem && nb()),
            e8.supports(eK.O5.OFFLOAD_ADM_CONTROLS) && e8.setOffloadAdmControls(!0),
            (0, p.un)() &&
                en.getConfig({ location: "handleConnectionOpen" }).enabled &&
                e8.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, p.un)() && (e8.setNcModels?.(eo), i.emitChange()),
            nm(t.inputDeviceId),
            nN());
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return ((0, p.HZ)() && i.startDavePreload(), !1);
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eL.S7L.CONNECTING:
                n_();
                break;
            case eL.S7L.RTC_CONNECTING:
                ((tO = !1), (o = void 0), (d = void 0), (c = void 0), (tC = !1), l.reset());
                break;
            case eL.S7L.RTC_CONNECTED:
                t4();
                break;
            case eL.S7L.DISCONNECTED:
                ((tJ = {}),
                    (function () {
                        if (0 === tB.size) return;
                        let e = eK.x.DEFAULT,
                            { disabledLocalVideos: t } = t2(e);
                        (tB.forEach((n) => {
                            (T()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                e8.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
                        }),
                            tB.clear(),
                            nc({ disabledLocalVideos: t }, e, !1));
                    })(),
                    nO());
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        ((tE = t), e8.eachConnection(t5));
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t2(t);
        if (t === eK.x.DEFAULT && (eN.A.requestPermission(ej.iL.AUDIO), tA)) return !1;
        ((i = !r && !i) || (r = !1), n || (tm = !0), nc({ mute: i, deaf: r }, t), e8.eachConnection(t5));
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        (nc({ mute: n }, t), i || (tm = !0), e8.eachConnection(t5));
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        (nc({ deaf: !t2(t).deaf }, t), e8.eachConnection(t5));
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eG.default.getId()) return;
        let { localMutes: i } = t2(t);
        (i[n] ? delete i[n] : (i[n] = !0),
            nc({ localMutes: i }, t),
            e8.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t));
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        T()(!(r && a), "These are not allowed to both be true.");
        let s = i === eL.bb8.DISABLED,
            { disabledLocalVideos: l } = t2(t),
            o = l[n] ?? !1,
            d = tB.has(n),
            c = i === eL.bb8.AUTO_ENABLED || i === eL.bb8.MANUAL_ENABLED;
        (eX.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            T()(!(d && !o), "If you are auto-disabled, then you are also disabled."));
        let u = s !== o,
            _ = t === eK.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        eX.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = t2(t);
        if (
            (h[n] === eL.bb8.AUTO_PROBING &&
                i === eL.bb8.AUTO_ENABLED &&
                (0, eS.A)(n, s ? eK.Al.AUTO_DISABLE : eK.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nc({ videoToggleStateMap: h }, t, r),
            i === eL.bb8.AUTO_PROBING
                ? eB.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eB.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tV ||
                (eX.info(`isAutoDisableAllowed=${tV} - disabling VideoHealthManager`),
                eB.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tV)) return;
            ((0, eS.A)(n, s ? eK.Al.AUTO_DISABLE : eK.Al.AUTO_ENABLE, c), s ? tB.add(n) : tB.delete(n));
        } else
            A &&
                (d && !s
                    ? (eX.info("disallowing auto-disable for this session because of manual override by user"),
                      (tV = !1),
                      eB.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eS.A)(n, eK.Al.MANUAL_REENABLE, c))
                    : (0, eS.A)(n, s ? eK.Al.MANUAL_DISABLE : eK.Al.MANUAL_ENABLE, c));
        (_ && !s && tB.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nc({ disabledLocalVideos: l }, t, r),
            e8.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t));
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eG.default.getId()) return;
        let r = t === eK.x.STREAM,
            { localVolumes: a } = t2(t);
        (i === (r ? 18 : 100) ? delete a[n] : (a[n] = i),
            nc({ localVolumes: a }, t),
            e8.eachConnection((e) => e.setLocalVolume(n, i), t));
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = t2(t);
        ((a[n] = { left: i, right: r }), nc({ localPans: a }, t), e8.eachConnection((e) => e.setLocalPan(n, i, r), t));
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        (nc({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), e8.eachConnection(t3));
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nc({ inputVolume: t6(t) }), e8.setInputVolume(t));
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nc({ outputVolume: t }), e8.setOutputVolume(t));
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        ((t = np(to, t)),
            (ts = performance.now()),
            nc({ inputDeviceId: t }),
            nT(t),
            e8.eachConnection(na),
            (o = void 0),
            (d = void 0),
            (c = void 0),
            (tC = !1),
            l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        (nc({ outputDeviceId: (t = np(td, t)) }), e8.setAudioOutputDevice(t), e8.eachConnection(na));
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nc({ activeInputProfile: t });
        let n = t2();
        (e8.eachConnection((e) => {
            (t3(e), na(e));
        }),
            e8.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nL());
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nc({ echoCancellation: e.enabled }),
            n = ek.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        (e8.eachConnection((e) => e.setEchoCancellation(n)), nL(), nR(e.location));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        ((t = nc({ sidechainCompression: e.enabled })), e8.setSidechainCompression(t.sidechainCompression));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nc({ sidechainCompressionStrength: e.strength });
        e8.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return (t ? tH.add(n) : tH.delete(n), nL());
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nc({ noiseSuppression: e.enabled }),
            n = ek.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        (e8.eachConnection((e) => e.setNoiseSuppression(n)), nL(), nR(e.location));
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nc({ automaticGainControl: e.enabled });
        (e8.eachConnection((e) => nn(e, t.automaticGainControl)), nL(), nR(e.location));
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nc({ noiseCancellation: e.enabled });
        (e8.eachConnection((e) => ni(e, t.noiseCancellation)), nL(), nR(e.location));
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        (eC.A.setKrispModelOverride(e.model), (E = e.model), nL());
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nc({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        e8.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        ((_ = t), eC.A.setKrispSuppressionLevel(t));
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, p.HZ)() || ((tv = e.enabled), e8.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nc({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nc({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nc({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nc({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        e8.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        (nc({ qos: t }), e8.eachConnection((e) => e.setQoS(t)));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = to;
        if (
            ((to = nI(e, { deviceType: eK.oh.AUDIO_INPUT, defaultName: e$.intl.string(e$.t["/QIjDA"]) })),
            !N().isEqual(to, t))
        ) {
            let e = t2();
            (nT(np(to, e.inputDeviceId)), e8.eachConnection(na));
        }
        !(function (e) {
            let t = td;
            if (
                ((td = nI(e, { deviceType: eK.oh.AUDIO_OUTPUT, defaultName: e$.intl.string(e$.t.xlUg0v) })),
                !N().isEqual(td, t))
            ) {
                let e = t2(),
                    n = np(td, e.outputDeviceId);
                (e8.setAudioOutputDevice(n), e8.eachConnection(na));
                let i = nS(t),
                    r = nS(td);
                i !== r &&
                    e8.eachConnection((e) => {
                        e.context === eK.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tN = e.videoDevices.length > 0;
        let n = tc;
        if (
            ((tc = nI(e, { deviceType: eK.oh.VIDEO_INPUT, defaultName: e$.intl.string(e$.t.WKWARY) })),
            tf && !N().isEqual(tc, n))
        ) {
            let e = void 0 !== tc[tI],
                t = tI === eK.dx && n[eK.dx]?.disabled,
                i = "Firefox" === O().name && "" === tI && n[tI]?.name === "Default" && !n[tI]?.disabled;
            t4(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nc({ inputVolume: t6(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        (b.w.remove(ez), location.reload());
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        ((tO = !0 !== tC && !t), t && (tC = !0));
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        ((d = t), (o = n));
    },
    AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED: function (e) {
        let { deviceGuid: t, hardwareMuted: n } = e,
            i = np(to, t2().inputDeviceId),
            r = to[i];
        if (t !== ng(r)) return !1;
        ((c = n), eR.default.track(eL.HAw.HARDWARE_MUTE_DETECTED, { input_device_name: r?.name, hardware_muted: n }));
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nD(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        (nc({ bypassSystemInputProcessing: t }), e8.setAudioInputBypassSystemProcessing(t), nr(), nR(e.location));
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        ((tt = e.enabled), e.unmute && nc({ mute: !1, deaf: !1 }), e8.eachConnection(t5));
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        (eN.A.requestPermission(ej.iL.CAMERA), t4(t));
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    ((tt = !1), e8.eachConnection(t5));
                    break;
                case "video":
                    t4(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? eK.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = i.startsWith(`${eK.fS.ACTIVITY}:`),
                d = o ? null : eP.A.getPidFromDesktopSource(i);
            (p.isPlatformEmbedded && !o && ({ soundshareId: e, soundshareSession: n } = nC(d, r)),
                s !== ti && (null != a && e8.setGoLiveSource(null, ti), (ti = s)),
                t4(s === eK.x.STREAM && tf, {
                    desktopSource: { id: i, sourcePid: d, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                }));
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eK.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === eK.x.STREAM && tf,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            t4(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else t4(tf, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        (nc({ videoDeviceId: (t = np(tc, t)) }), t4());
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tn !== e.required && ((tn = e.required), e.required || e8.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nv,
    USER_SETTINGS_MODAL_SET_SECTION: nv,
    CERTIFIED_DEVICES_SET: function () {
        return (e8.eachConnection(na), !1);
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        te.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        te.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        ((e9 = t.settingsByContext),
            (to = t.inputDevices),
            (td = t.outputDevices),
            (tj = t.appSupported),
            (ty = t.krispModuleLoaded),
            (tD = t.krispFatalError),
            (u = t.krispVersion),
            (ti = t.goLiveContext));
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = V.A.isEnabled();
        if (t === eL.g6G.BACKGROUND && tf && !n) ((tS = !0), t4(!1));
        else {
            if (t !== eL.g6G.ACTIVE || !tS) return !1;
            ((tS = !1), t4(!0));
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        e8.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tA) return !1;
        ((tA = n), e8.eachConnection(t5));
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === ej.hL.ACCEPTED;
        switch (n) {
            case ej.iL.AUDIO:
                ((tF = !0), e8.eachConnection(t5));
                break;
            case ej.iL.CAMERA:
                !i && tf && t4(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        e8.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nc({ aecDumpEnabled: t });
        e8.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        (nc({ openH264Enabled: t }), m.Ay?.setOpenH264Enabled?.(t));
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        ((e9 = Object.values(eK.x).reduce((e, n) => {
            let i = e6();
            return ((e[n] = N().merge(i, t[n])), e);
        }, {})),
            b.w.set(ez, e9),
            nu());
    },
    CHANNEL_DELETE: function () {
        if ((!tf && null == a) || null != eB.A.getRTCConnectionId()) return !1;
        t4(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eK.CO.KRISP_CPU_OVERUSE) {
            ((tJ.noiseCancellation = !1), (tJ.noiseSuppression = !0));
            let e = t2();
            return (e8.eachConnection((t) => ni(t, e.noiseCancellation)), nL(), nR(), !0);
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eK.CO.KRISP_VAD_CPU_OVERUSE &&
            ((tJ.modeOptions = { vadUseKrisp: !1 }), e8.eachConnection((e) => t3(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tM && ((tM = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        e8.applyMediaFilterSettings(t).finally(() => {
            ((tU = !1), i.emitChange());
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tU = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tU = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eW.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nN(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (e8.setClipsSource(null),
            (0, p.uF)() &&
                (null != s.desktopSource.soundshareId
                    ? U.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && t2().videoHook && U.c1(s.desktopSource.sourcePid)));
        let a = eP.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nC(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = t0("MediaEngineStore clips"),
            c = t2().videoHook,
            u = c && ef.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: _, minCaptureHeight: E } = eE.getConfig({ location: "handleClipsInit" });
        e8.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useGraphicsCapture: ns(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nl(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: eQ,
                hdrCaptureMode: d,
                videoHookAllowDx12: u,
                minCaptureWidth: _,
                minCaptureHeight: E,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eK.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), e8.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tX = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        ((tG[t] = { active: n, available: i }), nr());
    },
}));
