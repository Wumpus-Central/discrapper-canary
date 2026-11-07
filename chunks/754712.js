let i, r, a, s, l, o, d, c, u, _, E, A;
(n.d(t, { fc: () => e6, Ay: () => nw, hp: () => nl }), n(323874), n(14289), n(35956), n(321073));
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
    V = n(6494),
    H = n(397369),
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
            (0, z.xb)(e);
    }
}
let Z = (0, W.mj)({
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
var ef = n(625075);
let eh = (0, W.mj)({
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
function eT(e) {
    return em.getConfig({ location: e });
}
let eg = (0, W.mj)({
        name: "2026-01-wmf-gpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eS = (0, W.mj)({
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
var eN = n(75076),
    eC = n(674966),
    eO = n(559633),
    eR = n(886705),
    eL = n(129230),
    ey = n(652215);
let eD = new er.Vy("AudioEffects");
var eb = n(967347),
    ev = n(617617),
    eP = n(125325),
    eM = n(353835),
    eU = n(927813),
    ew = n(856383),
    eG = n(350535),
    ex = n(46653),
    ek = n(131319),
    eF = n(347481),
    eB = n(734057),
    eV = n(495867),
    eH = n(287809),
    ej = n(117549),
    eW = n(765682),
    eY = n(355097),
    eK = n(621380),
    e$ = n(731854),
    eX = n(792996);
let ez = new I.A("MediaEngineStore"),
    eq = "MediaEngineStore",
    eQ = {
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
    eJ = 5 * eU.A.Millis.SECOND,
    e0 = 2 * eU.A.Millis.SECOND,
    e1 = 30 * eU.A.Millis.SECOND,
    e2 = "https://ciscobinary.openh264.org/libopenh264-2.7.0-linux64.8.so.bz2",
    e3 = 0;
var e6 =
    (((f = {}).WEBCAM = "WEBCAM"),
    (f.INTEGRATED = "INTEGRATED"),
    (f.BLUETOOTH = "BLUETOOTH"),
    (f.AIRPLAY = "AIRPLAY"),
    (f.HEADSET = "HEADSET"),
    f);
function e5() {
    return {
        mode: ey.TBI.VOICE_ACTIVITY,
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
        inputDeviceId: e$.dx,
        outputDeviceId: e$.dx,
        videoDeviceId: e$.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e4.supports(e$.O5.VIDEO_HOOK),
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
let e7 = {
        [eK.m.CUSTOM]: {},
        [eK.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eK.m.STUDIO]: {
            mode: ey.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e8 = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    e4 = (0, D.hB)((0, D.WI)());
function e9(e) {
    return ef.k.getConfig({ location: e }).videoEnabled;
}
ez.enableNativeLogger(!0);
let te = {},
    tt = new Set([e$.x.DEFAULT]),
    tn = e4.supports(e$.O5.AUTO_ENABLE),
    ti = !1,
    tr = e$.x.STREAM,
    ta = 0,
    ts = !1,
    tl = performance.now(),
    to = null,
    td = { [e$.dx]: nA("No Input Devices", e$.oh.AUDIO_INPUT) },
    tc = { [e$.dx]: nA("No Output Devices", e$.oh.AUDIO_OUTPUT) },
    tu = { [e$.dx]: nA("No Video Devices", e$.oh.VIDEO_INPUT) },
    t_ = new v.Ep(),
    tE = !1,
    tA = !1,
    tf = !1,
    th = !1,
    tI = !1,
    tp = e$.qe,
    tm = e$.qe,
    tT = !1,
    tg = !1,
    tS = new v.Ep(),
    tN = !1,
    tC = !1,
    tO = !1,
    tR = !1,
    tL = !1,
    ty = !1,
    tD = !1,
    tb = !1,
    tv = [],
    tP = !1,
    tM = null,
    tU = !1,
    tw = !1,
    tG = !1,
    tx = {},
    tk = null,
    tF = null,
    tB = !1;
(eC.A.hasPermission(eW.iL.AUDIO, { showAuthorizationError: !1 }),
    eC.A.hasPermission(eW.iL.CAMERA, { showAuthorizationError: !1 }));
let tV = new Set(),
    tH = !1,
    tj = new Set(),
    tW = {},
    tY = null,
    tK = null,
    t$ = null,
    tX = !1,
    tz = !0,
    tq = !1,
    tQ = !1,
    tZ = !1,
    tJ = !1,
    t0 = {};
function t1(e) {
    return (function (e) {
        let { location: t } = e;
        return et.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
function t2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
        t = te[e];
    return (null == t && ((t = e5()), (te[e] = t)), t);
}
function t3() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
        t = t2(e);
    if (e === e$.x.STREAM) return { ...t, modeOptions: { ...t.modeOptions, vadLeading: 0 } };
    let n = e7[t.activeInputProfile ?? eK.m.CUSTOM],
        i = nD() ? t0 : e8,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function t6(e) {
    let t = t3(e.context),
        n = t.mode;
    (e.context === e$.x.DEFAULT && (0, ec.N)(e4, !1, !1),
        e.setInputMode(n, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && nD(),
            vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: Math.round(t.modeOptions.delay),
        }));
}
function t5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    return N().clamp(e, 0, t);
}
function t7(e) {
    let t = t3(e.context),
        n = !tn || t.mute || t.deaf;
    switch (e.context) {
        case e$.x.DEFAULT:
            n = n || tE || tA || tf || !eC.A.didHavePermission(eW.iL.AUDIO);
            break;
        case e$.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    if ((e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e$.x.DEFAULT)) {
        let { enabled: t } = (function (e) {
            let { location: t } = e;
            return eu.getConfig({ location: t });
        })({ location: "updateConnectionMuteDeaf" });
        (e.setSkipNoiseCancellationIfMuted(t && n), w.A.updateNativeMute());
    }
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tI,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, p.uF)()
                ? U.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t3().videoHook && U.c1(n.desktopSource.sourcePid),
            e4.setGoLiveSource(null, tr)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e4.setGoLiveSource(null, tr),
        tI || e)
    ) {
        let t = t3().videoDeviceId;
        (tI && t === e$.dx && tm === e$.dx && tp !== e$.qe ? (t = tp) : (tm = t),
            (tp = (tI = e) ? nm(tu, t) : e$.qe),
            e4.setVideoInputDevice(tp));
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t1("MediaEngineStore go live"),
                r = t3().videoHook,
                a = nl(),
                s = a ? ((0, p.uF)() && L().satisfies(M.A?.os.release, ea.fG) ? 26100 : 22e3) : 0,
                l = !1;
            (0, p.uF)() && s >= 26100 && (l = !0 === tK || eI.getConfig({ location: "updateVideo" }).enabled);
            let o = r && eh.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: d, minCaptureHeight: c } = eE.getConfig({ location: "updateVideo" });
            e4.setGoLiveSource(
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
                        allowScreenCaptureKit: no(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eJ,
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
                tr,
            );
        }
        null != t.cameraSource &&
            e4.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tr,
            );
    }
}
function t4(e) {
    switch (e) {
        case e$.CO.KRISP_CPU_OVERUSE:
            return F.B6.KrispCpuOveruse;
        case e$.CO.KRISP_FAILED:
            return F.B6.KrispFailed;
        case e$.CO.KRISP_VAD_CPU_OVERUSE:
            return F.B6.KrispVadCpuOveruse;
        case e$.CO.KRISP_INIT_ERROR:
            return F.B6.KrispInitError;
        case e$.CO.KRISP_INIT_ERROR_NATIVE:
            return F.B6.KrispInitErrorNative;
        case e$.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return F.B6.KrispInitErrorSse4NotSupported;
        case e$.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return F.B6.KrispInitErrorAvx2NotSupported;
        case e$.CO.KRISP_INIT_ERROR_UNSIGNED:
            return F.B6.KrispInitErrorUnsigned;
        case e$.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return F.B6.KrispInitErrorGlobalInit;
        case e$.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return F.B6.KrispInitErrorWeight8k;
        case e$.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return F.B6.KrispInitErrorWeight16k;
        case e$.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return F.B6.KrispInitErrorWeight32k;
        case e$.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return F.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let t9 = new Set([
    e$.CO.KRISP_INIT_ERROR,
    e$.CO.KRISP_INIT_ERROR_NATIVE,
    e$.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e$.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e$.CO.KRISP_INIT_ERROR_UNSIGNED,
    e$.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e$.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e$.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e$.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e$.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function ne(e, t) {
    if (
        (ez.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t4(e), voiceProcessingErrorDetails: t }),
        eL.default.track(ey.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        t9.has(e))
    ) {
        tb = !0;
        return;
    }
    e === e$.CO.KRISP_VAD_CPU_OVERUSE
        ? P.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tU = !0), P.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nt(e, t) {
    let n = t === e$.$C.LIVE;
    (ez.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, F.QW)({
                type: F.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e$.kv.UNSUPPORTED:
                            return F.B6.VideoBackgroundUnsupported;
                        case e$.kv.INIT_FAILED:
                            return F.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        P.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" }));
}
function nn(e) {
    return { enabled: e, ...(e ? eQ : { useAGC2: !1 }) };
}
function ni(e, t) {
    e.setAutomaticGainControl(nn(t));
}
function nr(e, t) {
    let n = (0, eR.A)(t, i.getSystemMicrophoneMode());
    (n !== t && ez.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t));
}
function na() {
    let e = t3(),
        t = e.inputDeviceId,
        n = eF.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eF.A.hasNoiseSuppression(t) || e.noiseSuppression,
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
                krispEnabled: (0, eR.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    (e4.setVoiceSampleRateCap(a), e4.setVoiceChannelCountCap(s));
}
function ns(e) {
    let t = t3(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eF.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eF.A.hasNoiseSuppression(n) || t.noiseSuppression),
        ni(e, eF.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nr(e, t.noiseCancellation),
        na(),
        (0, p.uF)() && L().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === e$.x.DEFAULT)
    ) {
        let t = nI(td[i.getInputDeviceId()]) || nI(tc[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(t ? "mix" : "auto");
    }
    if ((0, p.HZ)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nl() {
    return (0, p.uF)() && L().satisfies(M.A?.os.release, ea.yg);
}
function no() {
    return (0, p.cX)() && e4.supports(e$.O5.SCREEN_CAPTURE_KIT) && L().satisfies(M.A?.os.release, ea.e);
}
function nd() {
    return (
        (0, p.uF)() &&
        e4.supports(e$.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e4.supports(e$.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nc() {
    return e4.supports(e$.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t2(t);
    return (Object.assign(i, e), !__OVERLAY__ && n && b.w.set(eq, te), i);
}
function n_() {
    let e = t3();
    (nS(e.inputDeviceId),
        e4.setAudioOutputDevice(e.outputDeviceId),
        t8(),
        e4.setInputVolume(e.inputVolume),
        e4.setOutputVolume(e.outputVolume),
        e4.setAecDump(e.aecDumpEnabled),
        e4.setSidechainCompression(e.sidechainCompression),
        e4.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e4.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, p.j9)() && m.Ay?.setOpenH264Enabled?.(e.openH264Enabled));
}
function nE() {
    tn || e4.enable().then(() => P.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nA(e, t) {
    return {
        id: e$.dx,
        deviceType: t,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nf(e, t) {
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
function nI(e) {
    return e?.windowsDeviceService === "voicemodvad";
}
function np(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nA(i, n);
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
                    case nf(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nh.test(e.hardwareId):
                        return "INTEGRATED";
                    case N()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nf(e, i):
                    case "audiooutput" === e.type && nf(e, n):
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
function nm(e, t) {
    let n = e[t] ?? e[e$.dx] ?? N()(e).values().first();
    return null != n ? n.id : t;
}
async function nT(e) {
    if (!(0, p.uF)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = td[e];
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
                        eL.default.track(ey.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                            succeeded: !0,
                            active_effects: i.active,
                            available_effects: i.available,
                        }),
                        i
                    );
                } catch (e) {
                    (eD.error("Failed to probe audio effects for device", e),
                        eL.default.track(ey.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 }));
                }
            })(t.guid, e, e4);
        } catch (e) {
            ez.warn("Unable to query audio effects", e);
        }
}
function ng(e) {
    if (null != e) return null != e.guid && "" !== e.guid ? e.guid : e.name;
}
function nS(e) {
    (e4.setAudioInputDevice(e),
        nT(e),
        (function (e) {
            if (!(0, p.uF)() && !(0, p.cX)() && !(0, p.j9)()) return;
            let t = ng(td[e]);
            null != t && e4.watchDeviceHardwareMutedChange?.(t);
        })(e));
}
function nN(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nC() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ev.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eY.W.USER ? e$.x.DEFAULT : e$.x.STREAM,
            r = i === e$.x.STREAM ? 18 : 100,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = t3(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eP.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                e4.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    e4.eachConnection((t) => {
                        (t.setLocalVolume(e, r), t.setLocalMute(e, !1));
                    }, i));
        nu({ localMutes: s, localVolumes: l }, i);
    }
}
function nO(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    ez.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eM.A.getAudioPid(e),
                    n = "";
                return (null != t && (n = eM.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n });
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
    return (null != e && t3().videoHook && U.GH(e), { soundshareId: null, soundshareSession: null });
}
function nR() {
    let e = e$.x.DEFAULT,
        { videoToggleStateMap: t } = t3(e);
    for (let [e, n] of Object.entries(t)) n === ey.bb8.AUTO_PROBING && delete t[e];
    nu({ videoToggleStateMap: t }, e, !1);
}
function nL(e) {
    let t = t3(),
        n = e4.getAudioSubsystem(),
        r = e4.getAudioLayer(),
        a = nm(td, t.inputDeviceId),
        s = td[a]?.name,
        l = (0, eR.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eL.default.track(ey.HAw.VOICE_PROCESSING, {
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
function ny() {
    let e = t3(),
        t = tj.size > 0,
        n = e.inputDeviceId,
        i = eF.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eF.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nn(eF.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    (e4.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        na());
}
function nD() {
    return (tD || !1) && !tb;
}
function nb(e) {
    e === e$.rB.AUTOMATIC
        ? (nu({ automaticAudioSubsystem: !0 }), nv())
        : (nu({ automaticAudioSubsystem: !1 }), e4.setAudioSubsystem(e));
}
function nv() {
    e4.queueAudioSubsystem(e$.rB.EXPERIMENTAL);
}
function nP(e) {
    let { section: t } = e;
    return (t === ey.nc_.VOICE && nE(), !1);
}
class nM extends y.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        ((l ??= new el(e4, this)),
            t_.start(e1, () => {
                (ez.error("Device enumeration timed out"), eL.default.track(ey.HAw.DEVICE_ENUMERATION_TIMEOUT, {}));
            }),
            e4.on(D.bg.Connection, (e) => {
                let t;
                (ny(), t6(e), t7(e), ns(e));
                let n = t3();
                (e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, p.uF)() || (0, p.j9)()
                        ? (null != tF
                              ? tF
                              : "u" > typeof window
                                ? (tF = (async function () {
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
                                  })().then((e) => ((tk = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          })
                        : (0, p.cX)() && e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, p.j9)() && n.openH264Enabled && e.setExperimentFlag(e$.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ed.definition.defaultConfig : ed.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e$.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e$.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e$.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0));
                let { swallowVolumeOnlySpeakingEvents: r } = G.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e$.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e$.x.STREAM)
                ) {
                    let t = nN(tc);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, p.uF)())
                    (e.setExperimentFlag(e$.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                else if ((0, p.cX)())
                    (e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e$.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                L().satisfies(window?.DiscordNative?.os.release, e$.Dk)
                            ),
                        ));
                else if ((0, p.j9)()) {
                    let { enabled: t } = K.getConfig({ location: "MediaEngineStore" });
                    (t && e.setExperimentFlag(e$.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0));
                } else
                    ((0, p.un)() || (0, p.m0)()) &&
                        (e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, !0));
                if ((0, p.HZ)()) {
                    let { enabled: t } = Z.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e$.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, p.uF)() &&
                    tY?.startsWith("AMD") &&
                    eT("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                (0, p.uF)() &&
                    tY?.startsWith("Intel") &&
                    !0 === tK &&
                    1 === t$ &&
                    eg.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e$.fd.INTEL_GPU_DISABLE, !0)),
                (0, p.uF)() &&
                    tY?.startsWith("Intel") &&
                    !0 === tK &&
                    1 === t$ &&
                    ep.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e$.fd.INTEL_GPU_DISABLE, !0),
                (0, p.uF)() &&
                    tY?.startsWith("Qualcomm") &&
                    eT("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                e4.setHasFullbandPerformance(null === (t = (0, k.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = t3(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== ex.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== ex.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                (e.on(D.yq.Speaking, (t, n, i, r) => {
                    P.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e$.x.DEFAULT &&
                        ((tg = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tg;
                            ((tg = !0),
                                e && i.emitChange(),
                                tS.start(e0, () => {
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
                            eL.default.track(ey.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, j.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, ne),
                    e.on(D.yq.VoiceActivityDetectorError, ne),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        eL.default.track(ey.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        P.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(ek.A.bitrate),
                    e.applyVideoQualityMode(ej.A.mode),
                    (0, p.uF)() &&
                        e4.supports(e$.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        e4.setAsyncVideoInputDeviceInit(!0));
            }),
            e4.on(D.bg.DeviceChange, (e, t, n) => {
                (t_.stop(),
                    P.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n }));
            }),
            e4.on(D.bg.VolumeChange, (e, t) => {
                P.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            e4.on(D.bg.DesktopSourceEnd, (e, t) => {
                P.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            e4.on(D.bg.AudioPermission, (e) => {
                ((tB = !0), P.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e }));
            }),
            e4.on(D.bg.VideoPermission, (e) => {
                P.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            e4.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eM.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                ez.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await eL.default.track(
                        ey.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    ez.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (ez.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    b.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            e4.on(D.bg.VideoInputInitialized, (e) => {
                eL.default.track(ey.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eU.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eV.A.getMediaSessionId(),
                    rtc_connection_id: eV.A.getRTCConnectionId(),
                });
            }),
            e4.on(D.bg.AudioInputInitialized, (e) => {
                eL.default.track(ey.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eU.A.Millis.SECOND),
                    rtc_connection_id: eV.A.getRTCConnectionId(),
                });
            }),
            e4.on(D.bg.ClipsRecordingRestartNeeded, () => {
                P.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            e4.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = ta < 3;
                ((ta += 1),
                    P.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                    n
                        ? P.h.dispatch({ type: "CLIPS_RESTART" })
                        : ez.warn(
                              `Clips init failure budget exhausted (${ta} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                          ));
            }),
            e4.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== ta && (ez.info(`Clips bridge reported healthy; resetting restart budget (was ${ta}).`), (ta = 0));
            }),
            e4.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                ts !== e && (ez.info(`Clips recorder ready changed: ${e}`), (ts = e));
            }),
            e4.on(D.bg.ClipsBridgeIdleShutdown, () => {
                ez.info("Clips bridge idle shutdown");
            }),
            e4.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && U.c1(t), (s = null));
            }),
            e4.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            e4.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            e4.on(D.bg.NativeScreenSharePickerError, (e) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            e4.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                eL.default.track(ey.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            e4.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            e4.on(D.bg.ConnectionStats, (e) => {
                P.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e3++,
                            context: n.context,
                        };
                    }),
                });
            }),
            e4.on(D.bg.VoiceProcessingError, ne),
            e4.on(D.bg.VideoFilterError, nt),
            e4.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nU(e);
                null !== t && eL.default.track(ey.HAw.VOICE_QUEUE_METRICS, t);
            }),
            e4.setOnVideoContainerResized((e, t, n) => {
                P.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } });
            }),
            (async function () {
                if (!e4.supports(e$.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
                let e = await window.DiscordNative.processUtils.getSystemInfo();
                (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
                    ((tZ = !0), (tQ = e4.supports(e$.O5.GAMESCOPE_CAPTURE)));
            })(),
            l.reset(),
            (0, eb.w)().then((e) => {
                if (null != e) {
                    ((tY = e.gpu_brand), (tK = e.has_intel_hybrid_igpu), (t$ = e.gpu_count));
                    let t = e.gpus ?? [];
                    tX = t.length > 0 && t.every((e) => "10de" === e.vendor_id);
                }
            }),
            e4.on(D.bg.DeviceHardwareMutedChange, (e, t) => {
                P.h.dispatch({ type: "AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED", deviceGuid: e, hardwareMuted: t });
            }),
            e4.on(D.bg.SystemMicrophoneModeChange, (e) => {
                ((A = e), e4.eachConnection(ns), i.emitChange());
            }),
            null != (e = b.w.get("audio")) && (b.w.set(eq, { [e$.x.DEFAULT]: e }), b.w.remove("audio")),
            (te = b.w.get(eq) ?? {}),
            N().each(te, (e) => {
                (N().defaultsDeep(e, e5()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eG.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    e4.supports(e$.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, p.HZ)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)));
            }),
            n_(),
            ((0, p.uF)() || (0, p.j9)() || (0, p.cX)()) && !__OVERLAY__ && !ty && !tD
                ? ((ty = !0),
                  (async function () {
                      try {
                          await m.Ay.ensureModule("discord_krisp");
                          let e = m.Ay.requireModule("discord_krisp");
                          ((tD = !0),
                              (u = e.getSdkVersion?.()),
                              (_ = e.getSuppressionLevel?.() ?? 100),
                              e.getNcModels?.().then((e) => {
                                  ((tv = e), i.emitChange());
                              }),
                              i.emitChange(),
                              await m.Ay.ensureModule("discord_voice"));
                          let t = m.Ay.requireModule("discord_voice");
                          t.setupKrispPath?.();
                      } catch (t) {
                          (ez.warn(`Failed to load Krisp module: ${t.message}`), ew.A.captureException(t));
                          let e = e$.CO.KRISP_INIT_ERROR;
                          if (t.message.includes(": ")) {
                              let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                              e = isNaN(n) || 0 === n ? e$.CO.KRISP_INIT_ERROR : n;
                          }
                          ((0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t4(e) }),
                              eL.default.track(ey.HAw.VOICE_PROCESSING, { noise_canceller_error: e }));
                      } finally {
                          ty = !1;
                      }
                  })())
                : (0, p.HZ)() && e4.supports(e$.O5.NOISE_CANCELLATION)
                  ? ((tD = !0), i.emitChange())
                  : (0, p.HZ)() && nu({ noiseCancellation: !1 }),
            (0, p.j9)() &&
                (async function () {
                    try {
                        let e,
                            t = "",
                            n = !1,
                            i = URL.parse(e2);
                        if (null === i) return void ez.log("OpenH264 URL ", i, " is invalid");
                        let r = i.pathname.split("/"),
                            a = r[r.length - 1].replace(".bz2", "");
                        try {
                            let t = await m.Ay.downloadOpenH264(
                                e2,
                                a,
                                "1522f873a482923c5ec018a4415e1866898197528828c50f90fd300c94620df3",
                                (e) => {
                                    ez.log("OpenH264 download status", e);
                                },
                            );
                            (ez.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0));
                        } catch (n) {
                            (ez.error("OpenH264 download failed", n), (t = n.message), (e = !1));
                        }
                        if (
                            (eL.default.track(ey.HAw.VIDEO_OPENH264_DOWNLOADED, {
                                success: e,
                                fetched_from_network: n,
                                error_message: t,
                            }),
                            e)
                        ) {
                            let e = await m.Ay.cleanupUnusedOpenH264Files([a]);
                            ez.log("OpenH264 cleanup", e);
                        }
                    } catch (e) {
                        ez.error("OpenH264 download failed", e);
                    }
                })(),
            nR(),
            (0, p.xl)() &&
                p.isPlatformEmbedded &&
                !tJ &&
                ((tJ = !0),
                setTimeout(async function e() {
                    let t = await new Promise((e) => {
                        m.Ay.pollQueueMetrics((t) => {
                            e(t);
                        });
                    });
                    t.periodMs = 9e5;
                    let n = nU(t);
                    (null !== n && eL.default.track(ey.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, 9e5));
                }, 9e5)),
            (0, p.uF)() &&
                p.isPlatformEmbedded &&
                null === to &&
                e4
                    .getCodecSurvey()
                    .then((e) => {
                        try {
                            let t = JSON.parse(e);
                            if (null == t || null == t.available_video_decoders)
                                throw Error("decoder survey is not available");
                            to = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                        } catch (e) {
                            (ez.error("Failed to parse codec survey", e), (to = !1));
                        }
                    })
                    .catch((e) => {
                        (ez.error("Failed to get codec survey", e), (to = !1));
                    })
                    .finally(() => {
                        P.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                    }),
            (tW = {
                [e$.O5.VIDEO]: e4.supports(e$.O5.VIDEO),
                [e$.O5.DESKTOP_CAPTURE]: e4.supports(e$.O5.DESKTOP_CAPTURE),
                [e$.O5.HYBRID_VIDEO]: e4.supports(e$.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ex.default, ek.A, eF.A, eB.A, x.Ay, B.A, eV.A, H.Ay, ev.A, eH.default, ej.A));
    }
    supports(e) {
        return (e !== e$.O5.VIDEO || !!e9("MediaEngineStore.supports")) && e4.supports(e);
    }
    supportsInApp(e) {
        return (e !== e$.O5.VIDEO || !!e9("MediaEngineStore.supportsInApp")) && (tW[e] || e4.supports(e));
    }
    isSupported() {
        return e4.supported();
    }
    isNoiseSuppressionSupported() {
        return e4.supports(e$.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nD();
    }
    isNoiseCancellationError() {
        return tU;
    }
    isAutomaticGainControlSupported() {
        return e4.supports(e$.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nc() && (e4.supports(e$.O5.LEGACY_AUDIO_SUBSYSTEM) || e4.supports(e$.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e4.supports(e$.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e4.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nD();
    }
    isAecDumpSupported() {
        return e4.supports(e$.O5.AEC_DUMP);
    }
    getAecDump() {
        return t3().aecDumpEnabled;
    }
    getMediaEngine() {
        return e4;
    }
    getVideoComponent() {
        return e4.Video;
    }
    getCameraComponent() {
        return e4.Camera;
    }
    getKrispSuppressionLevel() {
        return _ ?? 100;
    }
    getKrispEnableStats() {
        return tP;
    }
    isEnabled() {
        return tn;
    }
    isMute() {
        return this.isSelfMute() || tE;
    }
    isDeaf() {
        return this.isSelfDeaf() || th;
    }
    isServerMute() {
        return tE;
    }
    isServerDeaf() {
        return th;
    }
    hasContext(e) {
        return null != te[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return e === e$.x.DEFAULT && tA;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t3(e).mute ||
            !eC.A.didHavePermission(eW.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e$.x.DEFAULT && tf)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tT;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tT = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eF.A.isHardwareMute(this.getInputDeviceId());
    }
    isHardwareMuteNoticeEnabled() {
        return tz;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return !this.isSupported() || t3(e).deaf;
    }
    isVideoEnabled() {
        return tI && tC;
    }
    isVideoAvailable() {
        return Object.values(tu).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tC;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.STREAM;
        return tr === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.STREAM;
        return tr === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return e !== ex.default.getId() && (t3(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e4.supports(e$.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return t3(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return t3(t).videoToggleStateMap[e] ?? ey.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return t === e$.x.DEFAULT && tV.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return e === e$.x.DEFAULT && tV.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tw;
    }
    isNativeAudioPermissionReady() {
        return tB;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tr;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tl;
    }
    isH264MfDecodeAvailable() {
        return to;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
            n = t3(t).localPans[e];
        return null != n ? n : eZ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
            n = t === e$.x.STREAM,
            i = t3(t).localVolumes[e];
        return null != i ? i : n ? 18 : 100;
    }
    getInputVolume() {
        return t3().inputVolume;
    }
    getOutputVolume() {
        return t3().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return t3(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return t3(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            N().each(te, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === ey.TBI.PUSH_TO_TALK && tt.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nm(td, t3().inputDeviceId);
    }
    getOutputDeviceId() {
        return nm(tc, t3().outputDeviceId);
    }
    getVideoDeviceId() {
        return nm(tu, t3().videoDeviceId);
    }
    getInputDevices() {
        return td;
    }
    getOutputDevices() {
        return tc;
    }
    getVideoDevices() {
        return tu;
    }
    getEchoCancellation() {
        let e = t3();
        return eF.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e4.supports(e$.O5.SIDECHAIN_COMPRESSION) && t3().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t3().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t3().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tk && tk;
    }
    getOpenH264Enabled() {
        return (0, p.j9)() && t3().openH264Enabled;
    }
    getLoopback() {
        return tj.size > 0;
    }
    getLoopbackReasons() {
        return tj;
    }
    getNoiseSuppression() {
        let e = t3();
        return eF.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t3();
        return eF.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t3().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t3().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t3().silenceWarning;
    }
    getDebugLogging() {
        return e4.getDebugLogging();
    }
    getQoS() {
        return t3().qos;
    }
    getAttenuation() {
        return t3().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t3().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t3().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nd() && t3().automaticAudioSubsystem ? e$.rB.AUTOMATIC : e4.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e4.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t3().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eK.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return t3(e);
    }
    getState() {
        return {
            settingsByContext: te,
            inputDevices: td,
            outputDevices: tc,
            appSupported: tW,
            krispModuleLoaded: tD,
            krispFatalError: tb,
            krispVersion: u,
            krispSuppressionLevel: _,
            goLiveSource: a,
            goLiveContext: tr,
        };
    }
    getInputDetectedThisConnection() {
        return tO;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tR;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return p.isPlatformEmbedded || this.getMode(e) !== ey.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        e4.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ti;
    }
    getVideoHook() {
        return t3().videoHook;
    }
    supportsVideoHook() {
        return e4.supports(e$.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t3().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e4.supports(e$.O5.EXPERIMENTAL_SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.$x);
    }
    supportsHookSoundshare() {
        return (0, p.uF)() && e4.supports(e$.O5.SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t3().useSystemScreensharePicker,
            n = (0, p.j9)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e4.supports(e$.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tZ;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e$.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? e_.definition.defaultConfig : e_.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === e$.x.STREAM && "streamer" === t && (0, p.uF)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eA.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (n.push("linux-vulkan"), n.join(","));
    }
    getUseGamescopeCapture() {
        return tQ;
    }
    getSpeakingWhileMuted() {
        return tg;
    }
    getKrispModelOverride() {
        return E;
    }
    getKrispModels() {
        return tv;
    }
    getKrispVadActivationThreshold() {
        return t3().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveSystemTelecomCall() {
        return tq;
    }
    setHasActiveSystemTelecomCall(e) {
        tq = e;
    }
    supportsScreenSoundshare() {
        return (0, p.cX)()
            ? e4.supports(e$.O5.SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.P$) && no()
            : (0, p.uF)()
              ? e4.supports(e$.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, p.j9)() && e4.supports(e$.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, p.uF)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tx[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, p.cX)() || (0, p.un)()) return A;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return this.supports(e$.O5.VIDEO)
            ? [{ rid: "100", type: e === e$.x.DEFAULT ? e$.mI.VIDEO : e$.mI.SCREEN, quality: 100 }]
            : [];
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, p.HZ)() };
        return e4.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tG &&
            ((tG = !0),
            (0, p.HZ)() &&
                e4.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    (ez.warn("DAVE preload failed:", e), ew.A.captureException(e));
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return e4.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return ts;
    }
    isClipsRecordingReadySignalSupported() {
        return e4.supports(e$.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return tY;
    }
    getHasNvidiaGpu() {
        return tX || window.DiscordNative?.process?.env?.LIBVA_DRIVER_NAME === "nvidia";
    }
}
function nU(e) {
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
let nw = (i = new nM(P.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && t8(r, null), null != t || null == n)) {
            tL = !1;
            return;
        }
        if (tL) return;
        tL = !0;
        let a = t3();
        (a.mute || a.deaf) && (nu({ deaf: !1, mute: !1 }), e4.eachConnection(t7));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                ((tE = t.mute || t.suppress), (th = t.deaf), e4.eachConnection(t7));
                let e = null != t.guildId && null != t.channelId && null != tM && tM !== t.channelId,
                    n = !tL && null == t.channelId;
                return (t8(!e && !n && tI), (tM = t.channelId), !0);
            }
            return (__OVERLAY__ || t.userId !== ex.default.getId() || null != eV.A.getChannelId() || t8(!1, null), e);
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        ((r = e.sessionId), (tE = !1), (th = !1));
        let t = t3();
        if (
            (nd() && (nc() ? nb(e$.rB.AUTOMATIC) : t.automaticAudioSubsystem && nv()),
            e4.supports(e$.O5.OFFLOAD_ADM_CONTROLS) && e4.setOffloadAdmControls(!0),
            (0, p.un)() &&
                en.getConfig({ location: "handleConnectionOpen" }).enabled &&
                e4.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, p.un)() && (e4.setNcModels?.(eo), i.emitChange()),
            nT(t.inputDeviceId),
            (0, p.uF)())
        ) {
            let { windowsOutputBufferDurationMs: e } = (function (e) {
                let { location: t } = e;
                return eS.getConfig({ location: t });
            })({ location: "handleConnectionOpen" });
            null != e && e4.setAudioOutputBufferDurationMs(e);
        }
        nC();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return ((0, p.HZ)() && i.startDavePreload(), !1);
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case ey.S7L.CONNECTING:
                nE();
                break;
            case ey.S7L.RTC_CONNECTING:
                ((tR = !1), (o = void 0), (d = void 0), (c = void 0), (tO = !1), l.reset());
                break;
            case ey.S7L.RTC_CONNECTED:
                t8();
                break;
            case ey.S7L.DISCONNECTED:
                ((t0 = {}),
                    (function () {
                        if (0 === tV.size) return;
                        let e = e$.x.DEFAULT,
                            { disabledLocalVideos: t } = t3(e);
                        (tV.forEach((n) => {
                            (g()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                e4.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
                        }),
                            tV.clear(),
                            nu({ disabledLocalVideos: t }, e, !1));
                    })(),
                    nR());
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        ((tA = t), e4.eachConnection(t7));
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t3(t);
        if (t === e$.x.DEFAULT && (eC.A.requestPermission(eW.iL.AUDIO), tf)) return !1;
        ((i = !r && !i) || (r = !1), n || (tT = !0), nu({ mute: i, deaf: r }, t), e4.eachConnection(t7));
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        (nu({ mute: n }, t), i || (tT = !0), e4.eachConnection(t7));
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        (nu({ deaf: !t3(t).deaf }, t), e4.eachConnection(t7));
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === ex.default.getId()) return;
        let { localMutes: i } = t3(t);
        (i[n] ? delete i[n] : (i[n] = !0),
            nu({ localMutes: i }, t),
            e4.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t));
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        g()(!(r && a), "These are not allowed to both be true.");
        let s = i === ey.bb8.DISABLED,
            { disabledLocalVideos: l } = t3(t),
            o = l[n] ?? !1,
            d = tV.has(n),
            c = i === ey.bb8.AUTO_ENABLED || i === ey.bb8.MANUAL_ENABLED;
        (ez.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            g()(!(d && !o), "If you are auto-disabled, then you are also disabled."));
        let u = s !== o,
            _ = t === e$.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        ez.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: f } = t3(t);
        if (
            (f[n] === ey.bb8.AUTO_PROBING &&
                i === ey.bb8.AUTO_ENABLED &&
                (0, eN.A)(n, s ? e$.Al.AUTO_DISABLE : e$.Al.AUTO_ENABLE, c),
            (f[n] = i),
            nu({ videoToggleStateMap: f }, t, r),
            i === ey.bb8.AUTO_PROBING
                ? eV.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eV.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tH ||
                (ez.info(`isAutoDisableAllowed=${tH} - disabling VideoHealthManager`),
                eV.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tH)) return;
            ((0, eN.A)(n, s ? e$.Al.AUTO_DISABLE : e$.Al.AUTO_ENABLE, c), s ? tV.add(n) : tV.delete(n));
        } else
            A &&
                (d && !s
                    ? (ez.info("disallowing auto-disable for this session because of manual override by user"),
                      (tH = !1),
                      eV.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eN.A)(n, e$.Al.MANUAL_REENABLE, c))
                    : (0, eN.A)(n, s ? e$.Al.MANUAL_DISABLE : e$.Al.MANUAL_ENABLE, c));
        (_ && !s && tV.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nu({ disabledLocalVideos: l }, t, r),
            e4.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t));
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === ex.default.getId()) return;
        let r = t === e$.x.STREAM,
            { localVolumes: a } = t3(t);
        (i === (r ? 18 : 100) ? delete a[n] : (a[n] = i),
            nu({ localVolumes: a }, t),
            e4.eachConnection((e) => e.setLocalVolume(n, i), t));
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = t3(t);
        ((a[n] = { left: i, right: r }), nu({ localPans: a }, t), e4.eachConnection((e) => e.setLocalPan(n, i, r), t));
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        (nu({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), e4.eachConnection(t6));
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nu({ inputVolume: t5(t) }), e4.setInputVolume(t));
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nu({ outputVolume: t }), e4.setOutputVolume(t));
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        ((t = nm(td, t)),
            (tl = performance.now()),
            nu({ inputDeviceId: t }),
            nS(t),
            e4.eachConnection(ns),
            (o = void 0),
            (d = void 0),
            (c = void 0),
            (tO = !1),
            l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        (nu({ outputDeviceId: (t = nm(tc, t)) }), e4.setAudioOutputDevice(t), e4.eachConnection(ns));
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nu({ activeInputProfile: t });
        let n = t3();
        (e4.eachConnection((e) => {
            (t6(e), ns(e));
        }),
            e4.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            ny());
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nu({ echoCancellation: e.enabled }),
            n = eF.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        (e4.eachConnection((e) => e.setEchoCancellation(n)), ny(), nL(e.location));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        ((t = nu({ sidechainCompression: e.enabled })), e4.setSidechainCompression(t.sidechainCompression));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nu({ sidechainCompressionStrength: e.strength });
        e4.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return (t ? tj.add(n) : tj.delete(n), ny());
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nu({ noiseSuppression: e.enabled }),
            n = eF.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        (e4.eachConnection((e) => e.setNoiseSuppression(n)), ny(), nL(e.location));
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nu({ automaticGainControl: e.enabled });
        (e4.eachConnection((e) => ni(e, t.automaticGainControl)), ny(), nL(e.location));
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nu({ noiseCancellation: e.enabled });
        (e4.eachConnection((e) => nr(e, t.noiseCancellation)), ny(), nL(e.location));
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        (eO.A.setKrispModelOverride(e.model), (E = e.model), ny());
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nu({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        e4.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        ((_ = t), eO.A.setKrispSuppressionLevel(t));
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, p.HZ)() || ((tP = e.enabled), e4.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nu({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nu({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nu({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nu({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        e4.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        (nu({ qos: t }), e4.eachConnection((e) => e.setQoS(t)));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = td;
        if (
            ((td = np(e, { deviceType: e$.oh.AUDIO_INPUT, defaultName: eX.intl.string(eX.t["/QIjDA"]) })),
            !N().isEqual(td, t))
        ) {
            let e = t3();
            (nS(nm(td, e.inputDeviceId)), e4.eachConnection(ns));
        }
        !(function (e) {
            let t = tc;
            if (
                ((tc = np(e, { deviceType: e$.oh.AUDIO_OUTPUT, defaultName: eX.intl.string(eX.t.xlUg0v) })),
                !N().isEqual(tc, t))
            ) {
                let e = t3(),
                    n = nm(tc, e.outputDeviceId);
                (e4.setAudioOutputDevice(n), e4.eachConnection(ns));
                let i = nN(t),
                    r = nN(tc);
                i !== r &&
                    e4.eachConnection((e) => {
                        e.context === e$.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tC = e.videoDevices.length > 0;
        let n = tu;
        if (
            ((tu = np(e, { deviceType: e$.oh.VIDEO_INPUT, defaultName: eX.intl.string(eX.t.WKWARY) })),
            tI && !N().isEqual(tu, n))
        ) {
            let e = void 0 !== tu[tp],
                t = tp === e$.dx && n[e$.dx]?.disabled,
                i = "Firefox" === O().name && "" === tp && n[tp]?.name === "Default" && !n[tp]?.disabled;
            t8(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nu({ inputVolume: t5(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        (b.w.remove(eq), location.reload());
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        ((tR = !0 !== tO && !t), t && (tO = !0));
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        ((d = t), (o = n));
    },
    AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED: function (e) {
        let { deviceGuid: t, hardwareMuted: n } = e,
            i = nm(td, t3().inputDeviceId),
            r = td[i];
        if (t !== ng(r)) return !1;
        ((c = n), eL.default.track(ey.HAw.HARDWARE_MUTE_DETECTED, { input_device_name: r?.name, hardware_muted: n }));
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nb(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        (nu({ bypassSystemInputProcessing: t }), e4.setAudioInputBypassSystemProcessing(t), na(), nL(e.location));
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        ((tn = e.enabled), e.unmute && nu({ mute: !1, deaf: !1 }), e4.eachConnection(t7));
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        (eC.A.requestPermission(eW.iL.CAMERA), t8(t));
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    ((tn = !1), e4.eachConnection(t7));
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
                s = t.context ?? e$.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = i.startsWith(`${e$.fS.ACTIVITY}:`),
                d = o ? null : eM.A.getPidFromDesktopSource(i);
            (p.isPlatformEmbedded && !o && ({ soundshareId: e, soundshareSession: n } = nO(d, r)),
                s !== tr && (null != a && e4.setGoLiveSource(null, tr), (tr = s)),
                t8(s === e$.x.STREAM && tI, {
                    desktopSource: { id: i, sourcePid: d, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                }));
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e$.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e$.x.STREAM && tI,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            t8(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else t8(tI, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        (nu({ videoDeviceId: (t = nm(tu, t)) }), t8());
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return ti !== e.required && ((ti = e.required), e.required || e4.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nP,
    USER_SETTINGS_MODAL_SET_SECTION: nP,
    CERTIFIED_DEVICES_SET: function () {
        return (e4.eachConnection(ns), !1);
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tt.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tt.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        ((te = t.settingsByContext),
            (td = t.inputDevices),
            (tc = t.outputDevices),
            (tW = t.appSupported),
            (tD = t.krispModuleLoaded),
            (tb = t.krispFatalError),
            (u = t.krispVersion),
            (tr = t.goLiveContext));
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = V.A.isEnabled();
        if (t === ey.g6G.BACKGROUND && tI && !n) ((tN = !0), t8(!1));
        else {
            if (t !== ey.g6G.ACTIVE || !tN) return !1;
            ((tN = !1), t8(!0));
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        e4.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tf) return !1;
        ((tf = n), e4.eachConnection(t7));
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eW.hL.ACCEPTED;
        switch (n) {
            case eW.iL.AUDIO:
                ((tB = !0), e4.eachConnection(t7));
                break;
            case eW.iL.CAMERA:
                !i && tI && t8(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        e4.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nu({ aecDumpEnabled: t });
        e4.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        (nu({ openH264Enabled: t }), m.Ay?.setOpenH264Enabled?.(t));
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        ((te = Object.values(e$.x).reduce((e, n) => {
            let i = e5();
            return ((e[n] = N().merge(i, t[n])), e);
        }, {})),
            b.w.set(eq, te),
            n_());
    },
    CHANNEL_DELETE: function () {
        if ((!tI && null == a) || null != eV.A.getRTCConnectionId()) return !1;
        t8(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e$.CO.KRISP_CPU_OVERUSE) {
            ((t0.noiseCancellation = !1), (t0.noiseSuppression = !0));
            let e = t3();
            return (e4.eachConnection((t) => nr(t, e.noiseCancellation)), ny(), nL(), !0);
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e$.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t0.modeOptions = { vadUseKrisp: !1 }), e4.eachConnection((e) => t6(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tU && ((tU = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        e4.applyMediaFilterSettings(t).finally(() => {
            ((tw = !1), i.emitChange());
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tw = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tw = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eY.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nC(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (e4.setClipsSource(null),
            (0, p.uF)() &&
                (null != s.desktopSource.soundshareId
                    ? U.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && t3().videoHook && U.c1(s.desktopSource.sourcePid)));
        let a = eM.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nO(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = t1("MediaEngineStore clips"),
            c = t3().videoHook,
            u = c && eh.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: _, minCaptureHeight: E } = eE.getConfig({ location: "handleClipsInit" });
        e4.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useGraphicsCapture: nl(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: no(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: eJ,
                hdrCaptureMode: d,
                videoHookAllowDx12: u,
                minCaptureWidth: _,
                minCaptureHeight: E,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e$.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), e4.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tz = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        ((tx[t] = { active: n, available: i }), na());
    },
}));
