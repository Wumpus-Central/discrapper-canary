"use strict";
let r, i, s, a, o, l, u, d, c, _, f;
n.d(t, { Ay: () => nE }), n(323874), n(14289), n(35956), n(321073), n(790599);
var E = n(284009),
    h = n.n(E),
    p = n(735438),
    m = n.n(p),
    g = n(481613),
    A = n.n(g),
    I = n(299855),
    T = n.n(I),
    S = n(311907),
    y = n(205693),
    N = n(506774),
    O = n(451988),
    R = n(73153),
    v = n(77729),
    C = n(719129),
    b = n(894539),
    D = n(124838),
    L = n(274372),
    w = n(915618),
    M = n(572164),
    P = n(626584),
    U = n(211597),
    k = n(487329),
    x = n(49463),
    G = n(6494),
    V = n(15285),
    F = n(540305),
    B = n(17300),
    H = n(582220),
    Y = n(448215),
    W = n(934341),
    j = n(374480),
    K = n(658046),
    $ = n(621963),
    z = n(227493),
    q = n(264866),
    X = n(927170),
    Q = n(342092),
    J = n(233232),
    Z = n(140175);
n(491642);
var ee = n(801644),
    et = n(223572),
    en = n(147490),
    er = n(710496),
    ei = n(993628),
    es = n(886124),
    ea = n(165479),
    eo = n(896014),
    el = n(765396),
    eu = n(75076),
    ed = n(674966),
    ec = n(559633),
    e_ = n(3527),
    ef = n(90361),
    eE = n(967347),
    eh = n(879172),
    ep = n(617617),
    em = n(499156),
    eg = n(954571),
    eA = n(353835),
    eI = n(927813),
    eT = n(723702),
    eS = n(728458),
    ey = n(837921),
    eN = n(350535),
    eO = n(961350),
    eR = n(131319),
    ev = n(347481),
    eC = n(734057),
    eb = n(383501),
    eD = n(287809),
    eL = n(117549),
    ew = n(652215),
    eM = n(502075),
    eP = n(765682),
    eU = n(355097),
    ek = n(509381),
    ex = n(731854),
    eG = n(985018);
let eV = new P.A("MediaEngineStore"),
    eF = "MediaEngineStore",
    eB = { left: 1, right: 1 },
    eH = 5 * eI.A.Millis.SECOND,
    eY = 2 * eI.A.Millis.SECOND,
    eW = 30 * eI.A.Millis.SECOND,
    ej = +eI.A.Millis.MINUTE,
    eK = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e$ = 0;
function ez() {
    return {
        mode: ew.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: eT.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: ex.Hz,
        outputVolume: ex.Hz,
        inputDeviceId: ex.dx,
        outputDeviceId: ex.dx,
        videoDeviceId: ex.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: eX.supports(ex.O5.VIDEO_HOOK),
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
let eq = {
        [ek.m.CUSTOM]: {},
        [ek.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [ek.m.STUDIO]: {
            mode: ew.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    eX = (0, y.hB)((0, y.WI)());
eV.enableNativeLogger(!0);
let eQ = {},
    eJ = new Set([ex.x.DEFAULT]),
    eZ = eX.supports(ex.O5.AUTO_ENABLE),
    e0 = !1,
    e1 = ex.x.STREAM,
    e2 = performance.now(),
    e3 = null,
    e6 = { [ex.dx]: t4("No Input Devices") },
    e4 = { [ex.dx]: t4("No Output Devices") },
    e5 = { [ex.dx]: t4("No Video Devices") },
    e7 = new O.Ep(),
    e8 = !1,
    e9 = !1,
    te = !1,
    tt = !1,
    tn = !1,
    tr = ex.qe,
    ti = ex.qe,
    ts = !1,
    ta = !1,
    to = new O.Ep(),
    tl = !1,
    tu = !1,
    td = !1,
    tc = !1,
    t_ = new O.Ep(),
    tf = !1,
    tE = !1,
    th = !1,
    tp = [],
    tm = !1,
    tg = null,
    tA = !1,
    tI = !1,
    tT = !1,
    tS = {},
    ty = null,
    tN = null,
    tO = !1;
ed.A.hasPermission(eP.iL.AUDIO, { showAuthorizationError: !1 }),
    ed.A.hasPermission(eP.iL.CAMERA, { showAuthorizationError: !1 });
let tR = new Set(),
    tv = !1,
    tC = new Set(),
    tb = {},
    tD = null,
    tL = null,
    tw = !0,
    tM = !1,
    tP = new O.Ep(),
    tU = !1,
    tk = !1,
    tx = !1,
    tG = !1;
function tV(e) {
    return (0, $.p)({ location: e }).hdrCaptureMode;
}
async function tF() {
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
function tB() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT,
        t = eQ[e];
    return null == t && ((t = ez()), (eQ[e] = t)), t;
}
function tH() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT,
        t = tB(e),
        n = eq[t.activeInputProfile ?? ek.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, et.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, B.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function tY(e) {
    let t = tH(e.context),
        n = t.mode;
    e.context === ex.x.DEFAULT && (0, Z.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = em.A.getConfig({ location: "setInputMode" }),
        i = r && n === ew.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && (th || !1),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function tW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.Hz;
    return m().clamp(e, 0, t);
}
function tj(e) {
    let t = tH(e.context),
        n = !eZ || t.mute || t.deaf;
    e.context === ex.x.DEFAULT
        ? (n = n || e8 || e9 || te || !ed.A.didHavePermission(eP.iL.AUDIO))
        : e.context === ex.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ex.x.DEFAULT && b.A.updateNativeMute();
}
function tK() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tn,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eT.isWindows)()
                ? C.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && tH().videoHook && C.c1(n.desktopSource.sourcePid),
            eX.setGoLiveSource(null, e1)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            eX.setGoLiveSource(null, e1),
        tn || e)
    ) {
        let t = tH().videoDeviceId;
        tn && t === ex.dx && ti === ex.dx && tr !== ex.qe ? (t = tr) : (ti = t),
            (tr = (tn = e) ? t7(e5, t) : ex.qe),
            eX.setVideoInputDevice(tr);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tV("MediaEngineStore go live"),
                i = tH().videoHook,
                s = tJ(),
                a = s ? ((0, eT.isWindows)() && T().satisfies(v.A?.os.release, eM.fG) ? eM.zl : eM.eg) : 0,
                o = !1;
            (0, eT.isWindows)() &&
                a >= eM.zl &&
                (o =
                    !0 === tL
                        ? ea.q.getConfig({ location: "updateVideo" }).enabled
                        : es.d.getConfig({ location: "updateVideo" }).enabled);
            let l = !i || !j.f.getConfig({ location: "updateVideo" }).enabled,
                u = i && er.H.getConfig({ location: "updateVideo" }).enabled;
            eX.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: i,
                        useHookFramePacer: l,
                        useGraphicsCapture: s,
                        useGraphicsCaptureApiLevel: a,
                        useCaptureDeviceForEncode: (0, eT.isWindows)(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tZ(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eH,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (0, K.H)({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: u,
                    },
                    quality: e,
                },
                e1,
            );
        }
        null != t.cameraSource &&
            eX.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                e1,
            );
    }
}
function t$(e) {
    switch (e) {
        case ex.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case ex.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case ex.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tz(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function tq(e, t) {
    e.setAutomaticGainControl(tz(t));
}
function tX(e, t) {
    let n = (0, e_.A)(t, r.getSystemMicrophoneMode());
    n !== t && eV.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, X.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function tQ(e) {
    let t = tH(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ev.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ev.A.hasNoiseSuppression(n) || t.noiseSuppression),
        tq(e, ev.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        tX(e, t.noiseCancellation),
        (0, eT.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tJ() {
    return (0, eT.isWindows)() && T().satisfies(v.A?.os.release, eM.yg);
}
function tZ() {
    return (0, eT.isMac)() && eX.supports(ex.O5.SCREEN_CAPTURE_KIT) && T().satisfies(v.A?.os.release, eM.e);
}
function t0() {
    return (
        (0, eT.isWindows)() &&
        eX.supports(ex.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eX.supports(ex.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t1() {
    return eX.supports(ex.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function t2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tB(t);
    return Object.assign(r, e), !__OVERLAY__ && n && N.w.set(eF, eQ), r;
}
function t3() {
    let e = tH();
    t9(e.inputDeviceId),
        eX.setAudioOutputDevice(e.outputDeviceId),
        tK(),
        eX.setInputVolume(e.inputVolume),
        eX.setOutputVolume(e.outputVolume),
        eX.setAecDump(e.aecDumpEnabled),
        eX.setSidechainCompression(e.sidechainCompression),
        eX.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eX.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, eT.isLinux)() && ey.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function t6() {
    eZ || eX.enable().then(() => R.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function t4(e) {
    return { id: ex.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function t5(e, t) {
    if (0 === e.length) {
        let e = t4(t);
        return { [e.id]: e };
    }
    return m()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1,
            facing: e.facing,
            guid: e.originalId,
            hardwareId: e.hardwareId,
            containerId: e.containerId,
            effects: e.effects,
        }))
        .keyBy("id")
        .value();
}
function t7(e, t) {
    let n = e[t] ?? e[ex.dx] ?? m()(e).values().first();
    return null != n ? n.id : t;
}
function t8(e) {
    if (!(0, eT.isWindows)() || !Y.A.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects)
        return;
    let t = e6[e];
    t?.guid != null && (0, ef.A)(t.guid, e, eX);
}
function t9(e) {
    eX.setAudioInputDevice(e), t8(e);
}
function ne(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ep.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eU.W.USER ? ex.x.DEFAULT : ex.x.STREAM,
            i = r === ex.x.STREAM ? ex.Cn : ex.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = tH(r);
        for (let [e, t] of Object.entries(s))
            null == (0, eh.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                eX.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    eX.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        t2({ localMutes: a, localVolumes: o }, r);
    }
}
function nn(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: s } = (function (e) {
            if (null == r)
                return (
                    eV.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = r.getExperimentalSoundshare() ? e : eA.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eA.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
            }
        })(e);
        if (null != t) {
            var n, i;
            return (
                (n = t),
                (i = s),
                (0, eT.isWindows)() &&
                    n > 1 &&
                    C.GH(n, { soundshare_session: i }).then((e) => {
                        null == e ||
                            V.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            R.h.wait(() => {
                                R.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: s }
            );
        }
    }
    return null != e && tH().videoHook && C.GH(e), { soundshareId: null, soundshareSession: null };
}
function nr() {
    let e = ex.x.DEFAULT,
        { videoToggleStateMap: t } = tH(e);
    for (let [e, n] of Object.entries(t)) n === ew.bb8.AUTO_PROBING && delete t[e];
    t2({ videoToggleStateMap: t }, e, !1);
}
function ni(e) {
    let t = tH(),
        n = eX.getAudioSubsystem(),
        i = eX.getAudioLayer(),
        s = t7(e6, t.inputDeviceId),
        a = e6[s]?.name,
        o = (0, e_.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
    eg.default.track(ew.HAw.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e,
        bypass_system_input_processing: t.bypassSystemInputProcessing,
        audio_subsystem: n,
        audio_layer: i,
        input_device: a,
        effective_noise_cancellation: o,
    });
}
function ns() {
    let e = tH(),
        t = tC.size > 0,
        n = e.inputDeviceId,
        r = ev.A.hasEchoCancellation(n) || e.echoCancellation,
        i = ev.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = tz(ev.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    eX.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: !t,
        noiseSuppression: i,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function na() {
    if (!eX.supports(ex.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((tx = !0), (tk = eX.supports(ex.O5.GAMESCOPE_CAPTURE)));
}
async function no() {
    try {
        await ey.Ay.ensureModule("discord_krisp");
        let e = ey.Ay.requireModule("discord_krisp");
        (th = !0),
            (d = e.getSdkVersion?.()),
            (c = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tp = e), r.emitChange();
            }),
            r.emitChange(),
            await ey.Ay.ensureModule("discord_voice");
        let t = ey.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eV.warn(`Failed to load Krisp module: ${t.message}`), eS.A.captureException(t);
        let e = ex.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ex.CO.INITIALIZED : n;
        }
        eg.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), t2({ noiseCancellation: !1 });
    } finally {
        tE = !1;
    }
}
async function nl() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(eK);
        if (null === r) return void eV.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await ey.Ay.downloadOpenH264(
                eK,
                s,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    eV.log("OpenH264 download status", e);
                },
            );
            eV.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eV.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eg.default.track(ew.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await ey.Ay.cleanupUnusedOpenH264Files([s]);
            eV.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eV.error("OpenH264 download failed", e);
    }
}
function nu(e) {
    e === ex.rB.AUTOMATIC
        ? (t2({ automaticAudioSubsystem: !0 }), nd())
        : (t2({ automaticAudioSubsystem: !1 }), eX.setAudioSubsystem(e));
}
function nd() {
    eX.queueAudioSubsystem(ex.rB.EXPERIMENTAL);
}
function nc(e) {
    let { section: t } = e;
    return t === ew.nc_.VOICE && t6(), !1;
}
class n_ extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (e7.start(eW, () => {
                eV.error("Device enumeration timed out"), eg.default.track(ew.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            eX.on(y.bg.Connection, (e) => {
                tY(e), tj(e), tQ(e);
                let t = tH();
                e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                    e.setQoS(t.qos),
                    (0, eT.isWindows)()
                        ? (e.setExperimentFlag(ex.fd.H265_HARDWARE_ONLY, !0),
                          (null != tN
                              ? tN
                              : "u" > typeof window
                                ? (tN = tF().then((e) => ((ty = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(ex.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, eT.isMac)() && e.setExperimentFlag(ex.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, eT.isLinux)() && t.openH264Enabled && e.setExperimentFlag(ex.fd.USE_LIBOPENH264_DECODER, !0),
                    (0, J.J)({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(ex.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(ex.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(ex.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: n } = D.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (n && e.setExperimentFlag(ex.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === ex.x.STREAM)
                ) {
                    let t = ne(e4);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, eT.isWindows)())
                    e.setExperimentFlag(ex.fd.SIGNAL_AV1, !0),
                        e.setExperimentFlag(ex.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, eT.isMac)())
                    e.setExperimentFlag(ex.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(ex.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, eT.isLinux)()) e.setExperimentFlag(ex.fd.SIGNAL_AV1_DECODE, !0);
                else if ((0, eT.isIOS)())
                    e.setExperimentFlag(ex.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(ex.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, eT.isAndroid)() && !1) {
                    let { enabled: t } = (0, H.T)("MediaEngineStore");
                    t &&
                        (e.setExperimentFlag(ex.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(ex.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, eT.isWeb)()) {
                    let { enabled: t } = W.A.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(ex.fd.BROWSER_HEVC, t);
                }
                for (let n of ((0, eT.isWindows)() &&
                    tD?.startsWith("AMD") &&
                    (0, eo.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ex.fd.WMF_GPU_ENCODE, !0),
                (0, eT.isWindows)() &&
                    tD?.startsWith("Intel") &&
                    (0, el.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ex.fd.WMF_GPU_ENCODE, !0),
                (0, eT.isWindows)() &&
                    tD?.startsWith("Qualcomm") &&
                    (0, eo.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ex.fd.WMF_GPU_ENCODE, !0),
                eX.setHasFullbandPerformance((0, U.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, w.A)(r) && e.setClipsKeyFrameInterval(ex.X1),
                (t = tH(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(t.localMutes)))
                    n !== eO.default.getId() && e.setLocalMute(n, t.localMutes[n]);
                for (let n of Object.keys(t.localVolumes))
                    n !== eO.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
                for (let n of Object.keys(t.localPans)) {
                    let r = t.localPans[n];
                    e.setLocalPan(n, r.left, r.right);
                }
                for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
                e.on(y.yq.Speaking, (t, n, r, i) => {
                    R.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
                }),
                    e.context === ex.x.DEFAULT &&
                        ((ta = !1),
                        e.on(y.yq.SpeakingWhileMuted, () => {
                            let e = !ta;
                            (ta = !0),
                                e && r.emitChange(),
                                to.start(eY, () => {
                                    (ta = !1), r.emitChange();
                                });
                        })),
                    e.on(y.yq.DesktopSourceEnd, (t, n) => {
                        R.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(y.yq.InteractionRequired, (e) => {
                        R.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(y.yq.VideoHookInitialize, (e, t, n, r, i, a) => {
                        s?.desktopSource != null &&
                            eg.default.track(ew.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: a,
                                ...(0, F.A)(s?.desktopSource),
                            });
                    }),
                    e.on(y.yq.NoiseCancellationError, (e) => {
                        eV.warn(`noisecancellererror event: ${e}`),
                            (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t$(e) }),
                            (tA = !0),
                            eg.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                            R.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                            R.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                            R.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                    }),
                    e.on(y.yq.VoiceActivityDetectorError, (e) => {
                        eV.warn(`voiceactivitydetectorerror event: ${e}`),
                            (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t$(e) }),
                            eg.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                            R.h.dispatch({
                                type: "AUDIO_SET_MODE",
                                context: ex.x.DEFAULT,
                                mode: ew.TBI.VOICE_ACTIVITY,
                                options: { ...tH(ex.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                            }),
                            R.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                    }),
                    e.on(y.yq.SdpError, (e, t, n, r) => {
                        eg.default.track(ew.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                    }),
                    e.on(y.yq.VideoState, (t) => {
                        R.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eR.A.bitrate),
                    e.applyVideoQualityMode(eL.A.mode),
                    (0, eT.isWindows)() &&
                        eX.supports(ex.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        eX.setAsyncVideoInputDeviceInit(!0);
            }),
            eX.on(y.bg.DeviceChange, (e, t, n) => {
                e7.stop(),
                    R.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            eX.on(y.bg.VolumeChange, (e, t) => {
                R.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            eX.on(y.bg.DesktopSourceEnd, (e, t) => {
                R.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            eX.on(y.bg.AudioPermission, (e) => {
                (tO = !0), R.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            eX.on(y.bg.VideoPermission, (e) => {
                R.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            eX.on(y.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eA.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eV.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t =
                    ei.A.getConfig({ location: "watchdog_timeout" }).enabled && null != v.A.processUtils.setCrashReason;
                try {
                    await eg.default.track(
                        ew.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eV.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eV.info("Relaunching app due to voice watchdog timeout"),
                    await v.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    N.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    v.A.app.relaunch());
            }),
            eX.on(y.bg.VideoInputInitialized, (e) => {
                eg.default.track(ew.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eI.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eb.A.getMediaSessionId(),
                    rtc_connection_id: eb.A.getRTCConnectionId(),
                });
            }),
            eX.on(y.bg.AudioInputInitialized, (e) => {
                eg.default.track(ew.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eI.A.Millis.SECOND),
                    rtc_connection_id: eb.A.getRTCConnectionId(),
                });
            }),
            eX.on(y.bg.ClipsRecordingRestartNeeded, () => {
                R.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            eX.on(y.bg.ClipsInitFailure, (e, t) => {
                R.h.wait(() => {
                    R.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
                });
            }),
            eX.on(y.bg.ClipsRecordingEnded, (e, t) => {
                a?.desktopSource?.id === e &&
                    (null != t && s?.desktopSource?.soundshareId !== t && C.c1(t), (a = null));
            }),
            eX.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
                R.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            eX.on(y.bg.NativeScreenSharePickerCancel, (e) => {
                R.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            eX.on(y.bg.NativeScreenSharePickerError, (e) => {
                R.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            eX.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
                eg.default.track(ew.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            eX.on(y.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, k.QW)(
                    t === k.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            eX.on(y.bg.ConnectionStats, (e) => {
                R.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e$++,
                            context: n.context,
                        };
                    }),
                });
            }),
            eX.on(y.bg.VoiceQueueMetrics, (e) => {
                let t = nf(e);
                null !== t && eg.default.track(ew.HAw.VOICE_QUEUE_METRICS, t);
            }),
            eX.setOnVideoContainerResized((e, t, n) => {
                R.h.wait(() =>
                    R.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            na(),
            o.reset(),
            (0, eE.w)().then((e) => {
                null != e && ((tD = e.gpu_brand), (tL = e.has_intel_hybrid_igpu));
            }),
            eX.on(y.bg.SystemMicrophoneModeChange, (e) => {
                (f = e), eX.eachConnection(tQ), r.emitChange();
            }),
            null != (e = N.w.get("audio")) && (N.w.set(eF, { [ex.x.DEFAULT]: e }), N.w.remove("audio")),
            (eQ = N.w.get(eF) ?? {}),
            m().each(eQ, (e) => {
                m().defaultsDeep(e, ez()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eN.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    eX.supports(ex.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, eT.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            t3(),
            ((0, eT.isWindows)() || (0, eT.isLinux)() || (0, eT.isMac)()) && !__OVERLAY__ && !tE && !th
                ? ((tE = !0), no())
                : (0, eT.isWeb)() && eX.supports(ex.O5.NOISE_CANCELLATION)
                  ? ((th = !0), r.emitChange())
                  : (0, eT.isWeb)() && t2({ noiseCancellation: !1 }),
            (0, eT.isLinux)() && nl(),
            nr(),
            (0, eT.isDesktop)() && eT.isPlatformEmbedded && !tG)
        ) {
            tG = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    ey.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = ex.tl;
                let n = nf(t);
                null !== n && eg.default.track(ew.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ex.tl);
            };
            setTimeout(e, ex.tl);
        }
        (0, eT.isWindows)() &&
            eT.isPlatformEmbedded &&
            null === e3 &&
            eX
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        e3 = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        eV.error("Failed to parse codec survey", e), (e3 = !1);
                    }
                })
                .catch((e) => {
                    eV.error("Failed to get codec survey", e), (e3 = !1);
                })
                .finally(() => {
                    R.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, eT.isAndroid)(),
            (tb = {
                [ex.O5.VIDEO]: eX.supports(ex.O5.VIDEO),
                [ex.O5.DESKTOP_CAPTURE]: eX.supports(ex.O5.DESKTOP_CAPTURE),
                [ex.O5.HYBRID_VIDEO]: eX.supports(ex.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eO.default, eR.A, ev.A, eC.A, L.A, x.A, eb.A, V.Ay, ep.A, eD.default, eL.A);
    }
    supports(e) {
        return eX.supports(e);
    }
    supportsInApp(e) {
        return tb[e] || eX.supports(e);
    }
    isSupported() {
        return eX.supported();
    }
    isNoiseSuppressionSupported() {
        return eX.supports(ex.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return th || !1;
    }
    isNoiseCancellationError() {
        return tA;
    }
    isAutomaticGainControlSupported() {
        return eX.supports(ex.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t1() && (eX.supports(ex.O5.LEGACY_AUDIO_SUBSYSTEM) || eX.supports(ex.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eX.supports(ex.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eX.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return th || !1;
    }
    isAecDumpSupported() {
        return eX.supports(ex.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eX.supports(ex.O5.VIDEO) && eX.supports(ex.O5.SIMULCAST);
    }
    getAecDump() {
        return tH().aecDumpEnabled;
    }
    getMediaEngine() {
        return eX;
    }
    getVideoComponent() {
        return eX.Video;
    }
    getCameraComponent() {
        return eX.Camera;
    }
    getKrispSuppressionLevel() {
        return c ?? 100;
    }
    getKrispEnableStats() {
        return tm;
    }
    isEnabled() {
        return eZ;
    }
    isMute() {
        return this.isSelfMute() || e8;
    }
    isDeaf() {
        return this.isSelfDeaf() || tt;
    }
    hasContext(e) {
        return null != eQ[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return e === ex.x.DEFAULT && e9;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return (
            !this.isEnabled() ||
            tH(e).mute ||
            !ed.A.didHavePermission(eP.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ex.x.DEFAULT && te)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return ts;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ts = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT,
            t = tM && "voice_isolation" !== this.getSystemMicrophoneMode() && tH(e).mode === ew.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ev.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tw;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return !this.isSupported() || tH(e).deaf;
    }
    isVideoEnabled() {
        return tn && tu;
    }
    isVideoAvailable() {
        return Object.values(e5).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tu;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.STREAM;
        return e1 === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.STREAM;
        return e1 === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return e !== eO.default.getId() && (tH(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eX.supports(ex.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return tH(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return tH(t).videoToggleStateMap[e] ?? ew.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return t === ex.x.DEFAULT && tR.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return e === ex.x.DEFAULT && tR.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tI;
    }
    isNativeAudioPermissionReady() {
        return tO;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return e1;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e2;
    }
    isH264MfDecodeAvailable() {
        return e3;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT,
            n = tH(t).localPans[e];
        return null != n ? n : eB;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT,
            n = t === ex.x.STREAM ? ex.Cn : ex.Hz,
            r = tH(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tH().inputVolume;
    }
    getOutputVolume() {
        return tH().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return tH(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return tH(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            m().each(eQ, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === ew.TBI.PUSH_TO_TALK && eJ.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t7(e6, tH().inputDeviceId);
    }
    getOutputDeviceId() {
        return t7(e4, tH().outputDeviceId);
    }
    getVideoDeviceId() {
        return t7(e5, tH().videoDeviceId);
    }
    getInputDevices() {
        return e6;
    }
    getOutputDevices() {
        return e4;
    }
    getVideoDevices() {
        return e5;
    }
    getEchoCancellation() {
        let e = tH();
        return ev.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eX.supports(ex.O5.SIDECHAIN_COMPRESSION) && tH().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tH().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tH().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== ty && ty;
    }
    getOpenH264Enabled() {
        return (0, eT.isLinux)() && tH().openH264Enabled;
    }
    getLoopback() {
        return tC.size > 0;
    }
    getLoopbackReasons() {
        return tC;
    }
    getNoiseSuppression() {
        let e = tH();
        return ev.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tH();
        return ev.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tH().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tH().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return tH().silenceWarning;
    }
    getDebugLogging() {
        return eX.getDebugLogging();
    }
    getQoS() {
        return tH().qos;
    }
    getAttenuation() {
        return tH().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tH().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tH().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return t0() && tH().automaticAudioSubsystem ? ex.rB.AUTOMATIC : eX.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eX.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tH().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ek.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return tH(e);
    }
    getState() {
        return {
            settingsByContext: eQ,
            inputDevices: e6,
            outputDevices: e4,
            appSupported: tb,
            krispModuleLoaded: th,
            krispVersion: d,
            krispSuppressionLevel: c,
            goLiveSource: s,
            goLiveContext: e1,
        };
    }
    getInputDetectedThisConnection() {
        return td;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tc;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return eT.isPlatformEmbedded || this.getMode() !== ew.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eX.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e0;
    }
    getVideoHook() {
        return tH().videoHook;
    }
    supportsVideoHook() {
        return eX.supports(ex.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tH().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return eX.supports(ex.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(v.A?.os.release, eM.$x);
    }
    supportsHookSoundshare() {
        return (0, eT.isWindows)() && eX.supports(ex.O5.SOUNDSHARE) && T().satisfies(v.A?.os.release, eM.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tH().useSystemScreensharePicker,
            n = (0, eT.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return eX.supports(ex.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tx;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === ex.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === ex.x.STREAM && "streamer" === t && (0, eT.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = en.g.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (0, Q.n)({ location: "handleReady" }).enabled && n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return tk;
    }
    getSpeakingWhileMuted() {
        return ta;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tp;
    }
    getKrispVadActivationThreshold() {
        return tH().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return tU;
    }
    setHasActiveCallKitCall(e) {
        tU = e;
    }
    supportsScreenSoundshare() {
        return (0, eT.isMac)()
            ? eX.supports(ex.O5.SOUNDSHARE) && T().satisfies(v.A?.os.release, eM.P$) && tZ()
            : (0, eT.isWindows)()
              ? eX.supports(ex.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eT.isLinux)() && eX.supports(ex.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eT.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tS[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, eT.isMac)() || (0, eT.isIOS)()) return f;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT,
            t = this.supports(ex.O5.VIDEO)
                ? [{ rid: "100", type: e === ex.x.DEFAULT ? ex.mI.VIDEO : ex.mI.SCREEN, quality: ex.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === ex.x.DEFAULT &&
                t.push({ rid: "50", type: ex.mI.VIDEO, quality: ex.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, eT.isWeb)() };
        return eX.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tT &&
            ((tT = !0),
            (0, eT.isWeb)() &&
                eX.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    eV.warn("DAVE preload failed:", e), eS.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return eX.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tD;
    }
}
function nf(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = { metrics_period_ms: e.periodMs, total_tasks: 0, total_exec_time_ns: 0, queue_name: e.queueName };
    (t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)),
        (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        r = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let r = n[e];
            (t[`slow_task_${e}_name`] = r.name), (t[`slow_task_${e}_longest_exec_time_ns`] = r.longestExecTimeNs);
        }
    for (let e = 0; e < 3; e++)
        if (e < r.length) {
            let n = r[e];
            (t[`delayed_task_${e}_name`] = n.name),
                (t[`delayed_task_${e}_longest_queue_time_ns`] = n.longestQueueTimeNs);
        }
    return (t.full_task_report = JSON.stringify(n)), t;
}
(r = new n_(R.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
        if ((r !== n && tK(i, null), null != t || null == n)) {
            tf = !1;
            return;
        }
        if (tf) return;
        tf = !0;
        let s = tH();
        (s.mute || s.deaf) && (t2({ deaf: !1, mute: !1 }), eX.eachConnection(tj));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (i === t.sessionId) {
                (e8 = t.mute || t.suppress), (tt = t.deaf), eX.eachConnection(tj);
                let e = null != t.guildId && null != t.channelId && null != tg && tg !== t.channelId,
                    n = !tf && null == t.channelId;
                return tK(!e && !n && tn), (tg = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eO.default.getId() || null != eb.A.getChannelId() || tK(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (i = e.sessionId), (e8 = !1), (tt = !1);
        let t = tH();
        t0() && (t1() ? nu(ex.rB.AUTOMATIC) : t.automaticAudioSubsystem && nd()),
            eX.supports(ex.O5.OFFLOAD_ADM_CONTROLS) && eX.setOffloadAdmControls(!0),
            (0, eT.isIOS)() &&
                (0, z.Y)("handleConnectionOpen").enabled &&
                eX.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            t8(t.inputDeviceId),
            nt();
    },
    CONNECTION_CLOSED: function () {
        i = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, eT.isWeb)() && r.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case ew.S7L.CONNECTING:
                t6();
                break;
            case ew.S7L.RTC_CONNECTING:
                (tc = !1), (l = void 0), (u = void 0), (td = !1), (tM = !1), tP.stop(), t_.stop(), o.reset();
                break;
            case ew.S7L.RTC_CONNECTED:
                tK();
                break;
            case ew.S7L.DISCONNECTED:
                (function () {
                    if (0 === tR.size) return;
                    let e = ex.x.DEFAULT,
                        { disabledLocalVideos: t } = tH(e);
                    tR.forEach((n) => {
                        h()(t[n], "If you are auto-disabled, then you are also disabled."),
                            delete t[n],
                            eX.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                    }),
                        tR.clear(),
                        t2({ disabledLocalVideos: t }, e, !1);
                })(),
                    nr();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (e9 = t), eX.eachConnection(tj);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: r, deaf: i } = tH(t);
        if (t === ex.x.DEFAULT && (ed.A.requestPermission(eP.iL.AUDIO), te)) return !1;
        (r = !i && !r) || (i = !1), n || (ts = !0), t2({ mute: r, deaf: i }, t), eX.eachConnection(tj);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: r } = e;
        t2({ mute: n }, t), r || (ts = !0), eX.eachConnection(tj);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        t2({ deaf: !tH(t).deaf }, t), eX.eachConnection(tj);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eO.default.getId()) return;
        let { localMutes: r } = tH(t);
        r[n] ? delete r[n] : (r[n] = !0),
            t2({ localMutes: r }, t),
            eX.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
        h()(!(i && s), "These are not allowed to both be true.");
        let a = r === ew.bb8.DISABLED,
            { disabledLocalVideos: o } = tH(t),
            l = o[n] ?? !1,
            u = tR.has(n),
            d = r === ew.bb8.AUTO_ENABLED || r === ew.bb8.MANUAL_ENABLED;
        eV.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${d}`),
            h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
        let c = a !== l,
            _ = t === ex.x.DEFAULT,
            f = s && c && _,
            E = i && c && _;
        eV.info(`changed=${c} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${E}`);
        let { videoToggleStateMap: p } = tH(t);
        if (
            (p[n] === ew.bb8.AUTO_PROBING &&
                r === ew.bb8.AUTO_ENABLED &&
                (0, eu.A)(n, a ? ex.Al.AUTO_DISABLE : ex.Al.AUTO_ENABLE, d),
            (p[n] = r),
            t2({ videoToggleStateMap: p }, t, i),
            r === ew.bb8.AUTO_PROBING
                ? eb.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eb.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tv ||
                (eV.info(`isAutoDisableAllowed=${tv} - disabling VideoHealthManager`),
                eb.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            f)
        ) {
            if ((!a && !u) || (a && !tv)) return;
            (0, eu.A)(n, a ? ex.Al.AUTO_DISABLE : ex.Al.AUTO_ENABLE, d), a ? tR.add(n) : tR.delete(n);
        } else
            E &&
                (u && !a
                    ? (eV.info("disallowing auto-disable for this session because of manual override by user"),
                      (tv = !1),
                      eb.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eu.A)(n, ex.Al.MANUAL_REENABLE, d))
                    : (0, eu.A)(n, a ? ex.Al.MANUAL_DISABLE : ex.Al.MANUAL_ENABLE, d));
        _ && !a && tR.delete(n),
            a ? (o[n] = !0) : delete o[n],
            t2({ disabledLocalVideos: o }, t, i),
            eX.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: r } = e;
        if (n === eO.default.getId()) return;
        let i = t === ex.x.STREAM ? ex.Cn : ex.Hz,
            { localVolumes: s } = tH(t);
        r === i ? delete s[n] : (s[n] = r),
            t2({ localVolumes: s }, t),
            eX.eachConnection((e) => e.setLocalVolume(n, r), t);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: r, right: i } = e,
            { localPans: s } = tH(t);
        (s[n] = { left: r, right: i }), t2({ localPans: s }, t), eX.eachConnection((e) => e.setLocalPan(n, r, i), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: r } = e;
        t2({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), eX.eachConnection(tY);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        t2({ inputVolume: tW(t) }), eX.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        t2({ outputVolume: t }), eX.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = t7(e6, t)),
            (e2 = performance.now()),
            t2({ inputDeviceId: t }),
            t9(t),
            eX.eachConnection(tQ),
            (l = void 0),
            (u = void 0),
            tP.stop(),
            (tM = !1);
        let { resetSilenceWarningOnDeviceChange: n } = ee.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((td = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        t2({ outputDeviceId: (t = t7(e4, t)) }), eX.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        t2({ activeInputProfile: t });
        let n = tH();
        eX.eachConnection((e) => {
            tY(e), tQ(e);
        }),
            eX.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            ns();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = t2({ echoCancellation: e.enabled });
        eX.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ns(), ni(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = t2({ sidechainCompression: e.enabled })), eX.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = t2({ sidechainCompressionStrength: e.strength });
        eX.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tC.add(n) : tC.delete(n), ns();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = t2({ noiseSuppression: e.enabled });
        eX.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ns(), ni(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = t2({ automaticGainControl: e.enabled });
        eX.eachConnection((e) => tq(e, t.automaticGainControl)), ns(), ni(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = t2({ noiseCancellation: e.enabled });
        eX.eachConnection((e) => tX(e, t.noiseCancellation)), ns(), ni(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        ec.A.setKrispModelOverride(e.model), (_ = e.model), ns();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        t2({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        eX.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (c = t), ec.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, eT.isWeb)() || ((tm = e.enabled), eX.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        t2({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        t2({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        t2({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
            i = t2({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
        eX.eachConnection((e) =>
            e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        t2({ qos: t }), eX.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n, videoDevices: r } = e,
            i = e6;
        if (((e6 = t5(t, eG.intl.string(eG.t["/QIjDA"]))), !m().isEqual(e6, i))) {
            let e = tH();
            t9(t7(e6, e.inputDeviceId)), eX.eachConnection(tQ);
        }
        !(function (e) {
            let t = e4;
            if (((e4 = t5(e, eG.intl.string(eG.t.xlUg0v))), !m().isEqual(e4, t))) {
                let e = tH(),
                    n = t7(e4, e.outputDeviceId);
                eX.setAudioOutputDevice(n);
                let r = ne(t),
                    i = ne(e4);
                r !== i &&
                    eX.eachConnection((e) => {
                        e.context === ex.x.STREAM && e.setSoundshareDiscardRearChannels(i);
                    });
            }
        })(n);
        tu = r.length > 0;
        let s = e5;
        if (((e5 = t5(r, eG.intl.string(eG.t.WKWARY))), tn && !m().isEqual(e5, s))) {
            let e = void 0 !== e5[tr],
                t = tr === ex.dx && s[ex.dx]?.disabled,
                n = "Firefox" === A().name && "" === tr && s[tr]?.name === "Default" && !s[tr]?.disabled;
            tK(e || t || n);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        t2({ inputVolume: tW(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        N.w.remove(eF), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tc = !0 !== td && !t), t)) (td = !0), (tM = !1), tP.stop(), t_.stop();
        else if (tH().mode === ew.TBI.VOICE_ACTIVITY && td) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ee.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                tP.start(ej, () => {
                    eg.default.track(ew.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: e6[t7(e6, tH().inputDeviceId)]?.name,
                        rtc_connection_id: eb.A.getRTCConnectionId(),
                    }),
                        (tM = !0),
                        r.emitChange();
                }),
                null != t &&
                    t_.start(t * eI.A.Millis.MINUTE, () => {
                        (td = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (u = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nu(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        t2({ bypassSystemInputProcessing: t }), eX.setAudioInputBypassSystemProcessing(t), ni(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (eZ = e.enabled), e.unmute && t2({ mute: !1, deaf: !1 }), eX.eachConnection(tj);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        ed.A.requestPermission(eP.iL.CAMERA), tK(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (eZ = !1), eX.eachConnection(tj);
                    break;
                case "video":
                    tK(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: r, sound: i } = t.desktopSettings,
                a = t.context ?? ex.x.DEFAULT,
                o = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                l = eA.A.getPidFromDesktopSource(r);
            eT.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nn(l, i)),
                a !== e1 && (null != s && eX.setGoLiveSource(null, e1), (e1 = a)),
                tK(a === ex.x.STREAM && tn, {
                    desktopSource: { id: r, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? ex.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
                i = e === ex.x.STREAM && tn,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            tK(i, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else tK(tn, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        t2({ videoDeviceId: (t = t7(e5, t)) }), tK();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return e0 !== e.required && ((e0 = e.required), e.required || eX.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nc,
    USER_SETTINGS_MODAL_SET_SECTION: nc,
    CERTIFIED_DEVICES_SET: function () {
        return eX.eachConnection(tQ), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        eJ.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        eJ.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (eQ = t.settingsByContext),
            (e6 = t.inputDevices),
            (e4 = t.outputDevices),
            (tb = t.appSupported),
            (th = t.krispModuleLoaded),
            (d = t.krispVersion),
            (e1 = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = G.A.isEnabled();
        if (t === ew.g6G.BACKGROUND && tn && !n) (tl = !0), tK(!1);
        else {
            if (t !== ew.g6G.ACTIVE || !tl) return !1;
            (tl = !1), tK(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        eX.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === te) return !1;
        (te = n), eX.eachConnection(tj);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            r = t === eP.hL.ACCEPTED;
        switch (n) {
            case eP.iL.AUDIO:
                (tO = !0), eX.eachConnection(tj);
                break;
            case eP.iL.CAMERA:
                !r && tn && tK(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        eX.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = t2({ aecDumpEnabled: t });
        eX.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        t2({ openH264Enabled: t }), ey.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (eQ = Object.values(ex.x).reduce((e, n) => {
            let r = ez();
            return (e[n] = m().merge(r, t[n])), e;
        }, {})),
            N.w.set(eF, eQ),
            t3();
    },
    CHANNEL_DELETE: function () {
        if ((!tn && null == s) || null != eb.A.getRTCConnectionId()) return !1;
        tK(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tA && ((tA = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        eX.applyMediaFilterSettings(t).finally(() => {
            (tI = !1), r.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tI = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tI = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: r,
        } = e;
        if (t !== eU.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
        nt(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: i } = e;
        if (!(0, M.Ao)() || null == v.A) return !1;
        null != a &&
            (eX.setClipsSource(null),
            (0, eT.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? C.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && tH().videoHook && C.c1(a.desktopSource.sourcePid)));
        let s = eA.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = nn(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: i };
        let u = tV("MediaEngineStore clips"),
            d = tH().videoHook,
            c = !d || !j.f.getConfig({ location: "handleClipsInit" }).enabled,
            _ = d && er.H.getConfig({ location: "handleClipsInit" }).enabled;
        eX.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: d,
                useHookFramePacer: c,
                useGraphicsCapture: tJ(),
                useCaptureDeviceForEncode: !1,
                useLoopback: r.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: tZ(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: eH,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
            },
            quality: i,
            applicationName: n,
            videoEncoderExperiments: r.getVideoEncoderExperiments(ex.x.STREAM, "streamer"),
        });
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), eX.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tw = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: r } = e;
        tS[t] = { active: n, available: r };
    },
})),
    (o = new q.A(eX, r));
let nE = r;
