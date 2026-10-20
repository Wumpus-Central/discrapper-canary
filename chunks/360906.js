let i, r, a, s, l, o, d, c, u, _, E, A;
(n.d(t, { yz: () => e4, Ay: () => nV }), n(323874), n(14289), n(35956), n(321073));
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
    x = n(274372),
    k = n(680725),
    F = n(487329),
    B = n(736056),
    V = n(6494),
    H = n(952818),
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
    z = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: $,
        variations: { 1: { ...$, probeAudioEffects: !0 } },
    });
var X = n(403362);
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
            (0, X.xb)(e);
    }
}
let Q = (0, W.mj)({
    name: "2025-08-browser-hevc",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var J = n(240921);
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
    er = n(941426),
    ea = n(325278);
let es = new er.Vy("InputWatcher");
class el {
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
        if ((0, ei.uF)() && L().satisfies(P.A?.os.release, ea.PH))
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
                M.h.dispatch({
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
        name: "2026-09-stream-zero-vad-leading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eA = (0, W.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    eh = (0, W.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    ef = (0, W.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var eI = n(625075);
let ep = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eT = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, W.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eS(e) {
    return eg.getConfig({ location: e });
}
let eN = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eC = n(75076),
    eO = n(674966),
    eR = n(559633),
    eL = n(205106),
    ey = n(174459),
    eD = n(652215);
let ev = new er.Vy("AudioEffects");
async function eb(e, t, n) {
    if (!(0, ei.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    if (!L().satisfies(P.A.os.release, ">=10.0.22000"))
        return Promise.reject(Error("Audio effects querying likely not supported on this Windows version."));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            M.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            ey.default.track(eD.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        (ev.error("Failed to probe audio effects for device", e),
            ey.default.track(eD.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 }));
    }
}
var eM = n(967347),
    eP = n(617617),
    eU = n(125325),
    ew = n(353835),
    eG = n(927813),
    ex = n(38405),
    ek = n(350535),
    eF = n(280450),
    eB = n(131319),
    eV = n(347481),
    eH = n(734057),
    ej = n(763827),
    eW = n(287809),
    eY = n(117549),
    eK = n(765682),
    e$ = n(355097),
    ez = n(621380),
    eX = n(731854),
    eq = n(105292);
let eZ = new I.A("MediaEngineStore"),
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
    e0 = { left: 1, right: 1 },
    e1 = 5 * eG.A.Millis.SECOND,
    e2 = 2 * eG.A.Millis.SECOND,
    e3 = 30 * eG.A.Millis.SECOND,
    e5 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e6 = 0;
var e4 =
    (((h = {}).WEBCAM = "WEBCAM"),
    (h.INTEGRATED = "INTEGRATED"),
    (h.BLUETOOTH = "BLUETOOTH"),
    (h.AIRPLAY = "AIRPLAY"),
    (h.HEADSET = "HEADSET"),
    h);
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
        inputVolume: eX.Hz,
        outputVolume: eX.Hz,
        inputDeviceId: eX.dx,
        outputDeviceId: eX.dx,
        videoDeviceId: eX.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: te.supports(eX.O5.VIDEO_HOOK),
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
let e8 = {
        [ez.m.CUSTOM]: {},
        [ez.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [ez.m.STUDIO]: {
            mode: eD.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e9 = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    te = (0, D.hB)((0, D.WI)());
function tt(e) {
    return eI.k.getConfig({ location: e }).videoEnabled;
}
eZ.enableNativeLogger(!0);
let tn = {},
    ti = new Set([eX.x.DEFAULT]),
    tr = te.supports(eX.O5.AUTO_ENABLE),
    ta = !1,
    ts = eX.x.STREAM,
    tl = 0,
    to = !1,
    td = performance.now(),
    tc = null,
    tu = { [eX.dx]: nI("No Input Devices", eX.oh.AUDIO_INPUT) },
    t_ = { [eX.dx]: nI("No Output Devices", eX.oh.AUDIO_OUTPUT) },
    tE = { [eX.dx]: nI("No Video Devices", eX.oh.VIDEO_INPUT) },
    tA = new b.Ep(),
    th = !1,
    tf = !1,
    tI = !1,
    tp = !1,
    tT = !1,
    tm = eX.qe,
    tg = eX.qe,
    tS = !1,
    tN = !1,
    tC = new b.Ep(),
    tO = !1,
    tR = !1,
    tL = !1,
    ty = !1,
    tD = !1,
    tv = !1,
    tb = !1,
    tM = !1,
    tP = [],
    tU = !1,
    tw = null,
    tG = !1,
    tx = !1,
    tk = !1,
    tF = {},
    tB = null,
    tV = null,
    tH = !1;
(eO.A.hasPermission(eK.iL.AUDIO, { showAuthorizationError: !1 }),
    eO.A.hasPermission(eK.iL.CAMERA, { showAuthorizationError: !1 }));
let tj = new Set(),
    tW = !1,
    tY = new Set(),
    tK = {},
    t$ = null,
    tz = null,
    tX = null,
    tq = !1,
    tZ = !0,
    tQ = !1,
    tJ = !1,
    t0 = !1,
    t1 = !1,
    t2 = {};
function t3(e) {
    return (function (e) {
        let { location: t } = e;
        return et.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t5() {
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
function t6() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
        t = tn[e];
    return (null == t && ((t = e7()), (tn[e] = t)), t);
}
function t4() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
        t = t6(e);
    if (e === eX.x.STREAM)
        return {
            ...t,
            modeOptions: {
                ...t.modeOptions,
                vadLeading: eE.getConfig({ location: "MediaEngineStore.getSettings" }).enabled
                    ? 0
                    : t.modeOptions.vadLeading,
            },
        };
    let n = e8[t.activeInputProfile ?? ez.m.CUSTOM],
        i = nP() ? t2 : e9,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function t7(e) {
    let t = t4(e.context),
        n = t.mode;
    (e.context === eX.x.DEFAULT && (0, ec.N)(te, !1, !1),
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
function t8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.Hz;
    return N().clamp(e, 0, t);
}
function t9(e) {
    let t = t4(e.context),
        n = !tr || t.mute || t.deaf;
    switch (e.context) {
        case eX.x.DEFAULT:
            n = n || th || tf || tI || !eO.A.didHavePermission(eK.iL.AUDIO);
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
            return eu.getConfig({ location: t });
        })({ location: "updateConnectionMuteDeaf" });
        (e.setSkipNoiseCancellationIfMuted(t && n), w.A.updateNativeMute());
    }
}
function ne() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, p.isWindows)()
                ? U.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t4().videoHook && U.c1(n.desktopSource.sourcePid),
            te.setGoLiveSource(null, ts)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            te.setGoLiveSource(null, ts),
        tT || e)
    ) {
        let t = t4().videoDeviceId;
        (tT && t === eX.dx && tg === eX.dx && tm !== eX.qe ? (t = tm) : (tg = t),
            (tm = (tT = e) ? nS(tE, t) : eX.qe),
            te.setVideoInputDevice(tm));
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t3("MediaEngineStore go live"),
                r = t4().videoHook,
                a = nc(),
                s = a ? ((0, p.isWindows)() && L().satisfies(P.A?.os.release, ea.fG) ? ea.zl : ea.eg) : 0,
                l = !1;
            (0, p.isWindows)() && s >= ea.zl && (l = !0 === tz || eT.getConfig({ location: "updateVideo" }).enabled);
            let o = r && ep.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: d, minCaptureHeight: c } = eh.getConfig({ location: "updateVideo" });
            te.setGoLiveSource(
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
                        allowScreenCaptureKit: nu(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e1,
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
                ts,
            );
        }
        null != t.cameraSource &&
            te.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                ts,
            );
    }
}
function nt(e) {
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
let nn = new Set([
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
function ni(e, t) {
    if (
        (eZ.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: nt(e), voiceProcessingErrorDetails: t }),
        ey.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nn.has(e))
    ) {
        tM = !0;
        return;
    }
    e === eX.CO.KRISP_VAD_CPU_OVERUSE
        ? M.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tG = !0), M.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nr(e, t) {
    let n = t === eX.$C.LIVE;
    (eZ.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
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
        M.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" }));
}
function na(e) {
    return { enabled: e, ...(e ? eJ : { useAGC2: !1 }) };
}
function ns(e, t) {
    e.setAutomaticGainControl(na(t));
}
function nl(e, t) {
    let n = (0, eL.A)(t, i.getSystemMicrophoneMode());
    (n !== t && eZ.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t));
}
function no() {
    let e = t4(),
        t = e.inputDeviceId,
        n = eV.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eV.A.hasNoiseSuppression(t) || e.noiseSuppression,
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
                krispEnabled: (0, eL.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    (te.setVoiceSampleRateCap(a), te.setVoiceChannelCountCap(s));
}
function nd(e) {
    let t = t4(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eV.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eV.A.hasNoiseSuppression(n) || t.noiseSuppression),
        ns(e, eV.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nl(e, t.noiseCancellation),
        no(),
        (0, p.isWindows)() && L().satisfies(P.A?.os.release, ">=10.0.15063") && e.context === eX.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return eA.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nm(tu[i.getInputDeviceId()]) || nm(t_[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, p.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nc() {
    return (0, p.isWindows)() && L().satisfies(P.A?.os.release, ea.yg);
}
function nu() {
    return (0, p.isMac)() && te.supports(eX.O5.SCREEN_CAPTURE_KIT) && L().satisfies(P.A?.os.release, ea.e);
}
function n_() {
    return (
        (0, p.isWindows)() &&
        te.supports(eX.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        te.supports(eX.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nE() {
    return te.supports(eX.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t6(t);
    return (Object.assign(i, e), !__OVERLAY__ && n && v.w.set(eQ, tn), i);
}
function nh() {
    let e = t4();
    (nO(e.inputDeviceId),
        te.setAudioOutputDevice(e.outputDeviceId),
        ne(),
        te.setInputVolume(e.inputVolume),
        te.setOutputVolume(e.outputVolume),
        te.setAecDump(e.aecDumpEnabled),
        te.setSidechainCompression(e.sidechainCompression),
        te.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        te.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, p.isLinux)() && T.Ay?.setOpenH264Enabled?.(e.openH264Enabled));
}
function nf() {
    tr || te.enable().then(() => M.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nI(e, t) {
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
function np(e, t) {
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
let nT = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nm(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function ng(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nI(i, n);
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
                    case np(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nT.test(e.hardwareId):
                        return "INTEGRATED";
                    case N()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && np(e, i):
                    case "audiooutput" === e.type && np(e, n):
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
function nS(e, t) {
    let n = e[t] ?? e[eX.dx] ?? N()(e).values().first();
    return null != n ? n.id : t;
}
async function nN(e) {
    if (!(0, p.isWindows)() || !z.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tu[e];
    if (t?.guid != null)
        try {
            await eb(t.guid, e, te);
        } catch (e) {
            eZ.warn("Unable to query audio effects", e);
        }
}
function nC(e) {
    if (null != e) return null != e.guid && "" !== e.guid ? e.guid : e.name;
}
function nO(e) {
    (te.setAudioInputDevice(e),
        nN(e),
        (function (e) {
            if (!(0, p.isWindows)() && !(0, p.isMac)() && !(0, p.isLinux)()) return;
            let t = nC(tu[e]);
            null != t && te.watchDeviceHardwareMutedChange?.(t);
        })(e));
}
function nR(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nL() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eP.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === e$.W.USER ? eX.x.DEFAULT : eX.x.STREAM,
            r = i === eX.x.STREAM ? eX.Cn : eX.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = t4(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eU.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                te.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    te.eachConnection((t) => {
                        (t.setLocalVolume(e, r), t.setLocalMute(e, !1));
                    }, i));
        nA({ localMutes: s, localVolumes: l }, i);
    }
}
function ny(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    eZ.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : ew.A.getAudioPid(e),
                    n = "";
                return (null != t && (n = ew.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n });
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
                            H.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            M.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return (null != e && t4().videoHook && U.GH(e), { soundshareId: null, soundshareSession: null });
}
function nD() {
    let e = eX.x.DEFAULT,
        { videoToggleStateMap: t } = t4(e);
    for (let [e, n] of Object.entries(t)) n === eD.bb8.AUTO_PROBING && delete t[e];
    nA({ videoToggleStateMap: t }, e, !1);
}
function nv(e) {
    let t = t4(),
        n = te.getAudioSubsystem(),
        r = te.getAudioLayer(),
        a = nS(tu, t.inputDeviceId),
        s = tu[a]?.name,
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
function nb() {
    let e = t4(),
        t = tY.size > 0,
        n = e.inputDeviceId,
        i = eV.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eV.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = na(eV.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    (te.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        no());
}
async function nM() {
    if (!te.supports(eX.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t0 = !0), (tJ = te.supports(eX.O5.GAMESCOPE_CAPTURE)));
}
function nP() {
    return (tb || !1) && !tM;
}
async function nU() {
    try {
        await T.Ay.ensureModule("discord_krisp");
        let e = T.Ay.requireModule("discord_krisp");
        ((tb = !0),
            (u = e.getSdkVersion?.()),
            (_ = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                ((tP = e), i.emitChange());
            }),
            i.emitChange(),
            await T.Ay.ensureModule("discord_voice"));
        let t = T.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        (eZ.warn(`Failed to load Krisp module: ${t.message}`), ex.A.captureException(t));
        let e = eX.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eX.CO.KRISP_INIT_ERROR : n;
        }
        ((0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: nt(e) }),
            ey.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }));
    } finally {
        tv = !1;
    }
}
async function nw() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e5);
        if (null === i) return void eZ.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await T.Ay.downloadOpenH264(
                e5,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    eZ.log("OpenH264 download status", e);
                },
            );
            (eZ.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0));
        } catch (n) {
            (eZ.error("OpenH264 download failed", n), (t = n.message), (e = !1));
        }
        if (
            (ey.default.track(eD.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await T.Ay.cleanupUnusedOpenH264Files([a]);
            eZ.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eZ.error("OpenH264 download failed", e);
    }
}
function nG(e) {
    e === eX.rB.AUTOMATIC
        ? (nA({ automaticAudioSubsystem: !0 }), nx())
        : (nA({ automaticAudioSubsystem: !1 }), te.setAudioSubsystem(e));
}
function nx() {
    te.queueAudioSubsystem(eX.rB.EXPERIMENTAL);
}
function nk(e) {
    let { section: t } = e;
    return (t === eD.nc_.VOICE && nf(), !1);
}
class nF extends y.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new el(te, this)),
            tA.start(e3, () => {
                (eZ.error("Device enumeration timed out"), ey.default.track(eD.HAw.DEVICE_ENUMERATION_TIMEOUT, {}));
            }),
            te.on(D.bg.Connection, (e) => {
                let t;
                (nb(), t7(e), t9(e), nd(e));
                let n = t4();
                (e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, p.isWindows)() || (0, p.isLinux)()
                        ? (null != tV
                              ? tV
                              : "u" > typeof window
                                ? (tV = t5().then((e) => ((tB = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          })
                        : (0, p.isMac)() && e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, p.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eX.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ed.definition.defaultConfig : ed.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eX.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eX.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eX.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0));
                let { swallowVolumeOnlySpeakingEvents: r } = G.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eX.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eX.x.STREAM)
                ) {
                    let t = nR(t_);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, p.isWindows)())
                    (e.setExperimentFlag(eX.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                else if ((0, p.isMac)())
                    (e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eX.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                L().satisfies(window?.DiscordNative?.os.release, eX.Dk)
                            ),
                        ));
                else if ((0, p.isLinux)()) {
                    let { enabled: t } = K.getConfig({ location: "MediaEngineStore" });
                    (t && e.setExperimentFlag(eX.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0));
                } else
                    ((0, p.isIOS)() || (0, p.isAndroid)()) &&
                        (e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, !0));
                if ((0, p.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eX.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, p.isWindows)() &&
                    t$?.startsWith("AMD") &&
                    eS("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                (0, p.isWindows)() &&
                    t$?.startsWith("Intel") &&
                    !0 === tz &&
                    1 === tX &&
                    eN.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(eX.fd.INTEL_GPU_DISABLE, !0)),
                (0, p.isWindows)() &&
                    t$?.startsWith("Intel") &&
                    !0 === tz &&
                    1 === tX &&
                    em.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eX.fd.INTEL_GPU_DISABLE, !0),
                (0, p.isWindows)() &&
                    t$?.startsWith("Qualcomm") &&
                    eS("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                te.setHasFullbandPerformance(null === (t = (0, k.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = t4(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== eF.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eF.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                (e.on(D.yq.Speaking, (t, n, i, r) => {
                    M.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eX.x.DEFAULT &&
                        ((tN = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tN;
                            ((tN = !0),
                                e && i.emitChange(),
                                tC.start(e2, () => {
                                    ((tN = !1), i.emitChange());
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
                            ey.default.track(eD.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, j.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, ni),
                    e.on(D.yq.VoiceActivityDetectorError, ni),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        ey.default.track(eD.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        M.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eB.A.bitrate),
                    e.applyVideoQualityMode(eY.A.mode),
                    (0, p.isWindows)() &&
                        te.supports(eX.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        te.setAsyncVideoInputDeviceInit(!0));
            }),
            te.on(D.bg.DeviceChange, (e, t, n) => {
                (tA.stop(),
                    M.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n }));
            }),
            te.on(D.bg.VolumeChange, (e, t) => {
                M.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            te.on(D.bg.DesktopSourceEnd, (e, t) => {
                M.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            te.on(D.bg.AudioPermission, (e) => {
                ((tH = !0), M.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e }));
            }),
            te.on(D.bg.VideoPermission, (e) => {
                M.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            te.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await ew.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eZ.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != P.A.processUtils.setCrashReason;
                try {
                    await ey.default.track(
                        eD.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eZ.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eZ.info("Relaunching app due to voice watchdog timeout"),
                    await P.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    P.A.app.relaunch());
            }),
            te.on(D.bg.VideoInputInitialized, (e) => {
                ey.default.track(eD.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eG.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: ej.A.getMediaSessionId(),
                    rtc_connection_id: ej.A.getRTCConnectionId(),
                });
            }),
            te.on(D.bg.AudioInputInitialized, (e) => {
                ey.default.track(eD.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eG.A.Millis.SECOND),
                    rtc_connection_id: ej.A.getRTCConnectionId(),
                });
            }),
            te.on(D.bg.ClipsRecordingRestartNeeded, () => {
                M.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            te.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = tl < 3;
                ((tl += 1),
                    M.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                    n
                        ? M.h.dispatch({ type: "CLIPS_RESTART" })
                        : eZ.warn(
                              `Clips init failure budget exhausted (${tl} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                          ));
            }),
            te.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== tl && (eZ.info(`Clips bridge reported healthy; resetting restart budget (was ${tl}).`), (tl = 0));
            }),
            te.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                to !== e && (eZ.info(`Clips recorder ready changed: ${e}`), (to = e));
            }),
            te.on(D.bg.ClipsBridgeIdleShutdown, () => {
                eZ.info("Clips bridge idle shutdown");
            }),
            te.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && U.c1(t), (s = null));
            }),
            te.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            te.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            te.on(D.bg.NativeScreenSharePickerError, (e) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            te.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                ey.default.track(eD.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            te.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            te.on(D.bg.ConnectionStats, (e) => {
                M.h.dispatch({
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
            te.on(D.bg.VoiceProcessingError, ni),
            te.on(D.bg.VideoFilterError, nr),
            te.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nB(e);
                null !== t && ey.default.track(eD.HAw.VOICE_QUEUE_METRICS, t);
            }),
            te.setOnVideoContainerResized((e, t, n) => {
                M.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } });
            }),
            nM(),
            l.reset(),
            (0, eM.w)().then((e) => {
                if (null != e) {
                    ((t$ = e.gpu_brand), (tz = e.has_intel_hybrid_igpu), (tX = e.gpu_count));
                    let t = e.gpus ?? [];
                    tq = t.length > 0 && t.every((e) => "10de" === e.vendor_id);
                }
            }),
            te.on(D.bg.DeviceHardwareMutedChange, (e, t) => {
                M.h.dispatch({ type: "AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED", deviceGuid: e, hardwareMuted: t });
            }),
            te.on(D.bg.SystemMicrophoneModeChange, (e) => {
                ((A = e), te.eachConnection(nd), i.emitChange());
            }),
            null != (e = v.w.get("audio")) && (v.w.set(eQ, { [eX.x.DEFAULT]: e }), v.w.remove("audio")),
            (tn = v.w.get(eQ) ?? {}),
            N().each(tn, (e) => {
                (N().defaultsDeep(e, e7()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, ek.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    te.supports(eX.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, p.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)));
            }),
            nh(),
            ((0, p.isWindows)() || (0, p.isLinux)() || (0, p.isMac)()) && !__OVERLAY__ && !tv && !tb
                ? ((tv = !0), nU())
                : (0, p.isWeb)() && te.supports(eX.O5.NOISE_CANCELLATION)
                  ? ((tb = !0), i.emitChange())
                  : (0, p.isWeb)() && nA({ noiseCancellation: !1 }),
            (0, p.isLinux)() && nw(),
            nD(),
            (0, p.isDesktop)() && p.isPlatformEmbedded && !t1)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    T.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = eX.tl;
                let n = nB(e);
                (null !== n && ey.default.track(eD.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, eX.tl));
            }
            ((t1 = !0), setTimeout(t, eX.tl));
        }
        ((0, p.isWindows)() &&
            p.isPlatformEmbedded &&
            null === tc &&
            te
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tc = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        (eZ.error("Failed to parse codec survey", e), (tc = !1));
                    }
                })
                .catch((e) => {
                    (eZ.error("Failed to get codec survey", e), (tc = !1));
                })
                .finally(() => {
                    M.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (tK = {
                [eX.O5.VIDEO]: te.supports(eX.O5.VIDEO),
                [eX.O5.DESKTOP_CAPTURE]: te.supports(eX.O5.DESKTOP_CAPTURE),
                [eX.O5.HYBRID_VIDEO]: te.supports(eX.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eF.default, eB.A, eV.A, eH.A, x.Ay, B.A, ej.A, H.Ay, eP.A, eW.default, eY.A));
    }
    supports(e) {
        return (e !== eX.O5.VIDEO || !!tt("MediaEngineStore.supports")) && te.supports(e);
    }
    supportsInApp(e) {
        return (e !== eX.O5.VIDEO || !!tt("MediaEngineStore.supportsInApp")) && (tK[e] || te.supports(e));
    }
    isSupported() {
        return te.supported();
    }
    isNoiseSuppressionSupported() {
        return te.supports(eX.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nP();
    }
    isNoiseCancellationError() {
        return tG;
    }
    isAutomaticGainControlSupported() {
        return te.supports(eX.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nE() && (te.supports(eX.O5.LEGACY_AUDIO_SUBSYSTEM) || te.supports(eX.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return te.supports(eX.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === te.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nP();
    }
    isAecDumpSupported() {
        return te.supports(eX.O5.AEC_DUMP);
    }
    getAecDump() {
        return t4().aecDumpEnabled;
    }
    getMediaEngine() {
        return te;
    }
    getVideoComponent() {
        return te.Video;
    }
    getCameraComponent() {
        return te.Camera;
    }
    getKrispSuppressionLevel() {
        return _ ?? 100;
    }
    getKrispEnableStats() {
        return tU;
    }
    isEnabled() {
        return tr;
    }
    isMute() {
        return this.isSelfMute() || th;
    }
    isDeaf() {
        return this.isSelfDeaf() || tp;
    }
    isServerMute() {
        return th;
    }
    isServerDeaf() {
        return tp;
    }
    hasContext(e) {
        return null != tn[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return e === eX.x.DEFAULT && tf;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t4(e).mute ||
            !eO.A.didHavePermission(eK.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eX.x.DEFAULT && tI)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tS;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tS = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eV.A.isHardwareMute(this.getInputDeviceId());
    }
    isHardwareMuteNoticeEnabled() {
        return tZ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return !this.isSupported() || t4(e).deaf;
    }
    isVideoEnabled() {
        return tT && tR;
    }
    isVideoAvailable() {
        return Object.values(tE).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tR;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.STREAM;
        return ts === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.STREAM;
        return ts === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return e !== eF.default.getId() && (t4(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return te.supports(eX.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t4(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t4(t).videoToggleStateMap[e] ?? eD.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t === eX.x.DEFAULT && tj.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return e === eX.x.DEFAULT && tj.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tx;
    }
    isNativeAudioPermissionReady() {
        return tH;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return ts;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return td;
    }
    isH264MfDecodeAvailable() {
        return tc;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
            n = t4(t).localPans[e];
        return null != n ? n : e0;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
            n = t === eX.x.STREAM ? eX.Cn : eX.Hz,
            i = t4(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t4().inputVolume;
    }
    getOutputVolume() {
        return t4().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t4(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t4(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            N().each(tn, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eD.TBI.PUSH_TO_TALK && ti.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nS(tu, t4().inputDeviceId);
    }
    getOutputDeviceId() {
        return nS(t_, t4().outputDeviceId);
    }
    getVideoDeviceId() {
        return nS(tE, t4().videoDeviceId);
    }
    getInputDevices() {
        return tu;
    }
    getOutputDevices() {
        return t_;
    }
    getVideoDevices() {
        return tE;
    }
    getEchoCancellation() {
        let e = t4();
        return eV.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return te.supports(eX.O5.SIDECHAIN_COMPRESSION) && t4().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t4().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t4().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tB && tB;
    }
    getOpenH264Enabled() {
        return (0, p.isLinux)() && t4().openH264Enabled;
    }
    getLoopback() {
        return tY.size > 0;
    }
    getLoopbackReasons() {
        return tY;
    }
    getNoiseSuppression() {
        let e = t4();
        return eV.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t4();
        return eV.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t4().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t4().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t4().silenceWarning;
    }
    getDebugLogging() {
        return te.getDebugLogging();
    }
    getQoS() {
        return t4().qos;
    }
    getAttenuation() {
        return t4().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t4().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t4().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return n_() && t4().automaticAudioSubsystem ? eX.rB.AUTOMATIC : te.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return te.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t4().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ez.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t4(e);
    }
    getState() {
        return {
            settingsByContext: tn,
            inputDevices: tu,
            outputDevices: t_,
            appSupported: tK,
            krispModuleLoaded: tb,
            krispFatalError: tM,
            krispVersion: u,
            krispSuppressionLevel: _,
            goLiveSource: a,
            goLiveContext: ts,
        };
    }
    getInputDetectedThisConnection() {
        return tL;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return ty;
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
        te.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ta;
    }
    getVideoHook() {
        return t4().videoHook;
    }
    supportsVideoHook() {
        return te.supports(eX.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t4().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return te.supports(eX.O5.EXPERIMENTAL_SOUNDSHARE) && L().satisfies(P.A?.os.release, ea.$x);
    }
    supportsHookSoundshare() {
        return (0, p.isWindows)() && te.supports(eX.O5.SOUNDSHARE) && L().satisfies(P.A?.os.release, ea.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t4().useSystemScreensharePicker,
            n = (0, p.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return te.supports(eX.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t0;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eX.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? e_.definition.defaultConfig : e_.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === eX.x.STREAM && "streamer" === t && (0, p.isWindows)())
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
        return tN;
    }
    getKrispModelOverride() {
        return E;
    }
    getKrispModels() {
        return tP;
    }
    getKrispVadActivationThreshold() {
        return t4().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return tQ;
    }
    setHasActiveCallKitCall(e) {
        tQ = e;
    }
    supportsScreenSoundshare() {
        return (0, p.isMac)()
            ? te.supports(eX.O5.SOUNDSHARE) && L().satisfies(P.A?.os.release, ea.P$) && nu()
            : (0, p.isWindows)()
              ? te.supports(eX.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, p.isLinux)() && te.supports(eX.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, p.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tF[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, p.isMac)() || (0, p.isIOS)()) return A;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return this.supports(eX.O5.VIDEO)
            ? [{ rid: "100", type: e === eX.x.DEFAULT ? eX.mI.VIDEO : eX.mI.SCREEN, quality: eX.Y4 }]
            : [];
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, p.isWeb)() };
        return te.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tk &&
            ((tk = !0),
            (0, p.isWeb)() &&
                te.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    (eZ.warn("DAVE preload failed:", e), ex.A.captureException(e));
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return te.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return to;
    }
    isClipsRecordingReadySignalSupported() {
        return te.supports(eX.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return t$;
    }
    getHasNvidiaGpu() {
        return tq || window.DiscordNative?.process?.env?.LIBVA_DRIVER_NAME === "nvidia";
    }
}
function nB(e) {
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
let nV = (i = new nF(M.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && ne(r, null), null != t || null == n)) {
            tD = !1;
            return;
        }
        if (tD) return;
        tD = !0;
        let a = t4();
        (a.mute || a.deaf) && (nA({ deaf: !1, mute: !1 }), te.eachConnection(t9));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                ((th = t.mute || t.suppress), (tp = t.deaf), te.eachConnection(t9));
                let e = null != t.guildId && null != t.channelId && null != tw && tw !== t.channelId,
                    n = !tD && null == t.channelId;
                return (ne(!e && !n && tT), (tw = t.channelId), !0);
            }
            return (__OVERLAY__ || t.userId !== eF.default.getId() || null != ej.A.getChannelId() || ne(!1, null), e);
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        ((r = e.sessionId), (th = !1), (tp = !1));
        let t = t4();
        (n_() && (nE() ? nG(eX.rB.AUTOMATIC) : t.automaticAudioSubsystem && nx()),
            te.supports(eX.O5.OFFLOAD_ADM_CONTROLS) && te.setOffloadAdmControls(!0),
            (0, p.isIOS)() &&
                en.getConfig({ location: "handleConnectionOpen" }).enabled &&
                te.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, p.isIOS)() && (te.setNcModels?.(eo), i.emitChange()),
            nN(t.inputDeviceId),
            nL());
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return ((0, p.isWeb)() && i.startDavePreload(), !1);
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eD.S7L.CONNECTING:
                nf();
                break;
            case eD.S7L.RTC_CONNECTING:
                ((ty = !1), (o = void 0), (d = void 0), (c = void 0), (tL = !1), l.reset());
                break;
            case eD.S7L.RTC_CONNECTED:
                ne();
                break;
            case eD.S7L.DISCONNECTED:
                ((t2 = {}),
                    (function () {
                        if (0 === tj.size) return;
                        let e = eX.x.DEFAULT,
                            { disabledLocalVideos: t } = t4(e);
                        (tj.forEach((n) => {
                            (g()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                te.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
                        }),
                            tj.clear(),
                            nA({ disabledLocalVideos: t }, e, !1));
                    })(),
                    nD());
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        ((tf = t), te.eachConnection(t9));
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t4(t);
        if (t === eX.x.DEFAULT && (eO.A.requestPermission(eK.iL.AUDIO), tI)) return !1;
        ((i = !r && !i) || (r = !1), n || (tS = !0), nA({ mute: i, deaf: r }, t), te.eachConnection(t9));
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        (nA({ mute: n }, t), i || (tS = !0), te.eachConnection(t9));
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        (nA({ deaf: !t4(t).deaf }, t), te.eachConnection(t9));
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eF.default.getId()) return;
        let { localMutes: i } = t4(t);
        (i[n] ? delete i[n] : (i[n] = !0),
            nA({ localMutes: i }, t),
            te.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t));
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        g()(!(r && a), "These are not allowed to both be true.");
        let s = i === eD.bb8.DISABLED,
            { disabledLocalVideos: l } = t4(t),
            o = l[n] ?? !1,
            d = tj.has(n),
            c = i === eD.bb8.AUTO_ENABLED || i === eD.bb8.MANUAL_ENABLED;
        (eZ.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            g()(!(d && !o), "If you are auto-disabled, then you are also disabled."));
        let u = s !== o,
            _ = t === eX.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        eZ.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = t4(t);
        if (
            (h[n] === eD.bb8.AUTO_PROBING &&
                i === eD.bb8.AUTO_ENABLED &&
                (0, eC.A)(n, s ? eX.Al.AUTO_DISABLE : eX.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nA({ videoToggleStateMap: h }, t, r),
            i === eD.bb8.AUTO_PROBING
                ? ej.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : ej.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tW ||
                (eZ.info(`isAutoDisableAllowed=${tW} - disabling VideoHealthManager`),
                ej.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tW)) return;
            ((0, eC.A)(n, s ? eX.Al.AUTO_DISABLE : eX.Al.AUTO_ENABLE, c), s ? tj.add(n) : tj.delete(n));
        } else
            A &&
                (d && !s
                    ? (eZ.info("disallowing auto-disable for this session because of manual override by user"),
                      (tW = !1),
                      ej.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eC.A)(n, eX.Al.MANUAL_REENABLE, c))
                    : (0, eC.A)(n, s ? eX.Al.MANUAL_DISABLE : eX.Al.MANUAL_ENABLE, c));
        (_ && !s && tj.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nA({ disabledLocalVideos: l }, t, r),
            te.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t));
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eF.default.getId()) return;
        let r = t === eX.x.STREAM ? eX.Cn : eX.Hz,
            { localVolumes: a } = t4(t);
        (i === r ? delete a[n] : (a[n] = i),
            nA({ localVolumes: a }, t),
            te.eachConnection((e) => e.setLocalVolume(n, i), t));
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = t4(t);
        ((a[n] = { left: i, right: r }), nA({ localPans: a }, t), te.eachConnection((e) => e.setLocalPan(n, i, r), t));
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        (nA({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), te.eachConnection(t7));
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nA({ inputVolume: t8(t) }), te.setInputVolume(t));
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nA({ outputVolume: t }), te.setOutputVolume(t));
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        ((t = nS(tu, t)),
            (td = performance.now()),
            nA({ inputDeviceId: t }),
            nO(t),
            te.eachConnection(nd),
            (o = void 0),
            (d = void 0),
            (c = void 0),
            (tL = !1),
            l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        (nA({ outputDeviceId: (t = nS(t_, t)) }), te.setAudioOutputDevice(t), te.eachConnection(nd));
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nA({ activeInputProfile: t });
        let n = t4();
        (te.eachConnection((e) => {
            (t7(e), nd(e));
        }),
            te.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nb());
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nA({ echoCancellation: e.enabled }),
            n = eV.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        (te.eachConnection((e) => e.setEchoCancellation(n)), nb(), nv(e.location));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        ((t = nA({ sidechainCompression: e.enabled })), te.setSidechainCompression(t.sidechainCompression));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nA({ sidechainCompressionStrength: e.strength });
        te.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return (t ? tY.add(n) : tY.delete(n), nb());
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nA({ noiseSuppression: e.enabled }),
            n = eV.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        (te.eachConnection((e) => e.setNoiseSuppression(n)), nb(), nv(e.location));
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nA({ automaticGainControl: e.enabled });
        (te.eachConnection((e) => ns(e, t.automaticGainControl)), nb(), nv(e.location));
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nA({ noiseCancellation: e.enabled });
        (te.eachConnection((e) => nl(e, t.noiseCancellation)), nb(), nv(e.location));
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        (eR.A.setKrispModelOverride(e.model), (E = e.model), nb());
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nA({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        te.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        ((_ = t), eR.A.setKrispSuppressionLevel(t));
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, p.isWeb)() || ((tU = e.enabled), te.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nA({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nA({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nA({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nA({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        te.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        (nA({ qos: t }), te.eachConnection((e) => e.setQoS(t)));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tu;
        if (
            ((tu = ng(e, { deviceType: eX.oh.AUDIO_INPUT, defaultName: eq.intl.string(eq.t["/QIjDA"]) })),
            !N().isEqual(tu, t))
        ) {
            let e = t4();
            (nO(nS(tu, e.inputDeviceId)), te.eachConnection(nd));
        }
        !(function (e) {
            let t = t_;
            if (
                ((t_ = ng(e, { deviceType: eX.oh.AUDIO_OUTPUT, defaultName: eq.intl.string(eq.t.xlUg0v) })),
                !N().isEqual(t_, t))
            ) {
                let e = t4(),
                    n = nS(t_, e.outputDeviceId);
                (te.setAudioOutputDevice(n), te.eachConnection(nd));
                let i = nR(t),
                    r = nR(t_);
                i !== r &&
                    te.eachConnection((e) => {
                        e.context === eX.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tR = e.videoDevices.length > 0;
        let n = tE;
        if (
            ((tE = ng(e, { deviceType: eX.oh.VIDEO_INPUT, defaultName: eq.intl.string(eq.t.WKWARY) })),
            tT && !N().isEqual(tE, n))
        ) {
            let e = void 0 !== tE[tm],
                t = tm === eX.dx && n[eX.dx]?.disabled,
                i = "Firefox" === O().name && "" === tm && n[tm]?.name === "Default" && !n[tm]?.disabled;
            ne(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nA({ inputVolume: t8(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        (v.w.remove(eQ), location.reload());
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        ((ty = !0 !== tL && !t), t && (tL = !0));
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        ((d = t), (o = n));
    },
    AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED: function (e) {
        let { deviceGuid: t, hardwareMuted: n } = e,
            i = nS(tu, t4().inputDeviceId),
            r = tu[i];
        if (t !== nC(r)) return !1;
        ((c = n), ey.default.track(eD.HAw.HARDWARE_MUTE_DETECTED, { input_device_name: r?.name, hardware_muted: n }));
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nG(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        (nA({ bypassSystemInputProcessing: t }), te.setAudioInputBypassSystemProcessing(t), no(), nv(e.location));
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        ((tr = e.enabled), e.unmute && nA({ mute: !1, deaf: !1 }), te.eachConnection(t9));
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        (eO.A.requestPermission(eK.iL.CAMERA), ne(t));
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    ((tr = !1), te.eachConnection(t9));
                    break;
                case "video":
                    ne(!1);
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
                d = o ? null : ew.A.getPidFromDesktopSource(i);
            (p.isPlatformEmbedded && !o && ({ soundshareId: e, soundshareSession: n } = ny(d, r)),
                s !== ts && (null != a && te.setGoLiveSource(null, ts), (ts = s)),
                ne(s === eX.x.STREAM && tT, {
                    desktopSource: { id: i, sourcePid: d, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                }));
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eX.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === eX.x.STREAM && tT,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            ne(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else ne(tT, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        (nA({ videoDeviceId: (t = nS(tE, t)) }), ne());
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return ta !== e.required && ((ta = e.required), e.required || te.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nk,
    USER_SETTINGS_MODAL_SET_SECTION: nk,
    CERTIFIED_DEVICES_SET: function () {
        return (te.eachConnection(nd), !1);
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        ti.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        ti.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        ((tn = t.settingsByContext),
            (tu = t.inputDevices),
            (t_ = t.outputDevices),
            (tK = t.appSupported),
            (tb = t.krispModuleLoaded),
            (tM = t.krispFatalError),
            (u = t.krispVersion),
            (ts = t.goLiveContext));
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = V.A.isEnabled();
        if (t === eD.g6G.BACKGROUND && tT && !n) ((tO = !0), ne(!1));
        else {
            if (t !== eD.g6G.ACTIVE || !tO) return !1;
            ((tO = !1), ne(!0));
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        te.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tI) return !1;
        ((tI = n), te.eachConnection(t9));
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eK.hL.ACCEPTED;
        switch (n) {
            case eK.iL.AUDIO:
                ((tH = !0), te.eachConnection(t9));
                break;
            case eK.iL.CAMERA:
                !i && tT && ne(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        te.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nA({ aecDumpEnabled: t });
        te.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        (nA({ openH264Enabled: t }), T.Ay?.setOpenH264Enabled?.(t));
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        ((tn = Object.values(eX.x).reduce((e, n) => {
            let i = e7();
            return ((e[n] = N().merge(i, t[n])), e);
        }, {})),
            v.w.set(eQ, tn),
            nh());
    },
    CHANNEL_DELETE: function () {
        if ((!tT && null == a) || null != ej.A.getRTCConnectionId()) return !1;
        ne(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eX.CO.KRISP_CPU_OVERUSE) {
            ((t2.noiseCancellation = !1), (t2.noiseSuppression = !0));
            let e = t4();
            return (te.eachConnection((t) => nl(t, e.noiseCancellation)), nb(), nv(), !0);
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eX.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t2.modeOptions = { vadUseKrisp: !1 }), te.eachConnection((e) => t7(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tG && ((tG = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        te.applyMediaFilterSettings(t).finally(() => {
            ((tx = !1), i.emitChange());
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tx = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tx = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== e$.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nL(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (null == P.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (te.setClipsSource(null),
            (0, p.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? U.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && t4().videoHook && U.c1(s.desktopSource.sourcePid)));
        let a = ew.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = ny(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = t3("MediaEngineStore clips"),
            c = t4().videoHook,
            u = c && ep.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: _, minCaptureHeight: E } = eh.getConfig({ location: "handleClipsInit" });
        te.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useGraphicsCapture: nc(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nu(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e1,
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
        !1 === t.clipsEnabled && ((s = null), te.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tZ = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        ((tF[t] = { active: n, available: i }), no());
    },
}));
