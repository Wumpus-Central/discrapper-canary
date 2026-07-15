d.d(t, {
    _: () => M,
    a: () => S,
    b: () => W,
    c: () => T,
    d: () => D,
    f: () => z,
    g: () => N,
    h: () => p,
    i: () => O,
    l: () => C,
    m: () => r,
    n: () => U,
    o: () => R,
    p: () => Y,
    r: () => J,
    s: () => j,
    t: () => F,
    u: () => g,
    v: () => X,
    y: () => G,
});
var i = d(987800),
    e = d(768672),
    c = d(288052),
    a = d(599078),
    s = d(749378),
    n = d(305463),
    Z = d(550155),
    b = d(117589),
    m = d(713692),
    o = d(517666),
    u = d(77254);
function h(l) {
    let t = l?.delete;
    if ("function" == typeof t)
        try {
            t.call(l);
        } catch {}
}
var W = class extends i.n {
        constructor() {
            super(i.d.SelfieWithQualityMetrics),
                (this.defaultThresholds = {
                    frameMinX: 0,
                    frameMinY: 0,
                    frameMaxX: 1,
                    frameMaxY: 1,
                    brightnessThreshold: 50,
                    blurrinessThreshold: 50,
                    tiltRotationAngleThreshold: 15,
                    minMagicCropSize: 200,
                    headwearThreshold: 0.86,
                    lensesThreshold: 0.95,
                    closedEyesThreshold: 0.9,
                    maskThreshold: 0.85,
                    minFaceQualityScore: 0.63,
                    faceOcclusionThreshold: 0.3,
                    getReadyDelay: 2e3,
                    framesAggregationInterval: 2e3,
                    minFramesWithFace: 3,
                }),
                (this.currentFrame = null);
        }
        async processFrame(l) {
            this.currentFrame = l;
            let t = await this.processFrameWasm(l);
            if (this.onFaceDataCallback && t?.faces) {
                let d;
                try {
                    ("function" == typeof t.faces.size ? t.faces.size() : 0) > 0 &&
                        (d = "function" == typeof t.faces.get ? t.faces.get(0) : void 0) &&
                        this.onFaceDataCallback(d, { width: l.width, height: l.height });
                } catch {
                } finally {
                    h(d), h(t.faces), h(t);
                }
            }
        }
        async initialize(l) {
            !0 === l.videoSelfie
                ? ((this.pipelineType = i.d.SelfieWithAggregationMetrics), await this.initializeBase(l, "videoSelfie"))
                : !0 === l.useOnDeviceWorkflow
                  ? ((this.pipelineType = i.d.OnDeviceSelfieWorkflow), await this.initializeBase(l, "onDeviceSelfie"))
                  : await this.initializeBase(l, "selfie"),
                this.applyDefaults(l.autocaptureInterval ?? 0),
                !0 === l.videoSelfie && this.setVideoSelfieMode(!0);
        }
        processPhoto(l) {
            this.ensureInitialized(), i.a.processPhoto(l);
        }
        async postFaceResults(l) {
            return this.ensureInitialized(), i.a.postFaceResults(l);
        }
        setCallbacks(l) {
            this.ensureInitialized(), (this.onFaceDataCallback = l.onFaceData);
            let t = (t, d) => {
                if (!t) return;
                let i = new b.t(t);
                i.updateBase64Image(), i.updateBlob();
                let e = d ? this.formatFaceCoordinates(d) : this.createDefaultFaceCoordinates(i);
                l.onCapture?.(i, e);
            };
            (this.currentOnCaptureWrapper = t),
                i.a.setFaceDetectionCallbacks(
                    this.getPipelineType(),
                    l.onFarAway ?? (() => {}),
                    l.onTooClose ?? (() => {}),
                    l.onTooManyFaces ?? (() => {}),
                    l.onNoFace ?? (() => {}),
                    t,
                    l.onGetReady ?? (() => {}),
                    l.onGetReadyFinished ?? (() => {}),
                    l.onCenterFace ?? (() => {}),
                    l.onDark ?? (() => {}),
                    l.onBlur ?? (() => {}),
                    l.onFaceAngle ?? (() => {}),
                    l.onLenses ?? (() => {}),
                    l.onMask ?? (() => {}),
                    l.onEyesClosed ?? (() => {}),
                    l.onHeadWear ?? (() => {}),
                    l.onSwitchToManualCapture ?? (() => {}),
                    l.onFaceOccluded ?? (() => {}),
                );
        }
        setPositionConstraints(l) {
            this.ensureInitialized(),
                i.a.setFacePositionConstraints(this.getPipelineType(), l.minX, l.minY, l.maxX, l.maxY);
        }
        applyDefaults(l = 0) {
            this.ensureInitialized(),
                this.setThresholds({
                    brightnessThreshold: this.defaultThresholds.brightnessThreshold,
                    blurrinessThreshold: this.defaultThresholds.blurrinessThreshold,
                    tiltRotationAngleThreshold: this.defaultThresholds.tiltRotationAngleThreshold,
                    minMagicCropSize: this.defaultThresholds.minMagicCropSize,
                    autocaptureInterval: l,
                    minFaceQualityScore: this.defaultThresholds.minFaceQualityScore,
                    faceOcclusionThreshold: this.defaultThresholds.faceOcclusionThreshold,
                    getReadyDelay: this.defaultThresholds.getReadyDelay,
                    framesAggregationInterval: this.defaultThresholds.framesAggregationInterval,
                    minFramesWithFace: this.defaultThresholds.minFramesWithFace,
                }),
                this.setPositionConstraints({
                    minX: this.defaultThresholds.frameMinX,
                    minY: this.defaultThresholds.frameMinY,
                    maxX: this.defaultThresholds.frameMaxX,
                    maxY: this.defaultThresholds.frameMaxY,
                }),
                this.setAttributesThresholds({
                    headwearThreshold: this.defaultThresholds.headwearThreshold,
                    lensesThreshold: this.defaultThresholds.lensesThreshold,
                    closedEyesThreshold: this.defaultThresholds.closedEyesThreshold,
                    maskThreshold: this.defaultThresholds.maskThreshold,
                });
        }
        setAutocaptureInterval(l) {
            (this.ensureInitialized(), this.currentThresholds)
                ? this.setThresholds({ ...this.currentThresholds, autocaptureInterval: l })
                : this.applyDefaults(l);
        }
        setThresholds(l) {
            this.ensureInitialized(),
                (this.currentThresholds = { ...l }),
                i.a.setFaceDetectionThresholds(
                    this.getPipelineType(),
                    l.brightnessThreshold,
                    l.blurrinessThreshold,
                    l.tiltRotationAngleThreshold,
                    l.minMagicCropSize,
                    l.autocaptureInterval,
                    l.minFaceQualityScore,
                    l.faceOcclusionThreshold,
                    l.getReadyDelay,
                    l.framesAggregationInterval,
                    l.minFramesWithFace,
                );
        }
        setAttributesThresholds(l) {
            this.ensureInitialized(),
                i.a.setFaceAttributesThresholds(
                    this.getPipelineType(),
                    l.headwearThreshold,
                    l.lensesThreshold,
                    l.closedEyesThreshold,
                    l.maskThreshold,
                );
        }
        setChecksEnabled(l) {
            this.ensureInitialized(),
                i.a.setFaceChecksEnabled(
                    this.getPipelineType(),
                    l.lenses,
                    l.mask,
                    l.closedEyes,
                    l.headWear,
                    l.occlusion,
                );
        }
        setVideoSelfieMode(l) {
            this.ensureInitialized(), i.a.setFaceDetectionMode(this.getPipelineType(), l);
        }
        forceCapture() {
            if (!this.currentFrame || !this.currentOnCaptureWrapper) return;
            let l = b.t.fromImageData(this.currentFrame);
            this.currentOnCaptureWrapper(l.canvas);
        }
        reset() {
            super.reset(),
                (this.currentFrame = null),
                (this.onFaceDataCallback = void 0),
                (this.currentOnCaptureWrapper = void 0);
        }
        createDefaultFaceCoordinates(l) {
            return {
                rightEyeX: 0,
                rightEyeY: 0,
                leftEyeX: 0,
                leftEyeY: 0,
                noseTipX: 0,
                noseTipY: 0,
                rightMouthX: 0,
                rightMouthY: 0,
                mouthX: 0,
                mouthY: 0,
                x: 0,
                y: 0,
                width: l.width() ?? 0,
                height: l.height() ?? 0,
            };
        }
        formatFaceCoordinates(l) {
            return {
                rightEyeX: l.rightEye.x,
                rightEyeY: l.rightEye.y,
                leftEyeX: l.leftEye.x,
                leftEyeY: l.leftEye.y,
                noseTipX: l.noseTip.x,
                noseTipY: l.noseTip.y,
                rightMouthX: l.rightMouthCorner.x,
                rightMouthY: l.rightMouthCorner.y,
                mouthX: l.leftMouthCorner.x,
                mouthY: l.leftMouthCorner.y,
                x: l.rect.x,
                y: l.rect.y,
                width: l.rect.width,
                height: l.rect.height,
            };
        }
    },
    G = class {
        constructor(l) {
            (this.disposed = !1),
                (this.isProcessing = !1),
                (this.onFrameEvent = () => {
                    if (this.disposed || this.isProcessing) return;
                    let l = this.capturer.getLatestFrame();
                    l &&
                        (this.onFrame?.(l),
                        (this.isProcessing = !0),
                        this.provider
                            .processFrame(l)
                            .catch(() => {})
                            .finally(() => {
                                this.isProcessing = !1;
                            }));
                }),
                (this.capturer = l.capturer),
                (this.provider = l.provider),
                (this.onFrame = l.onFrame),
                this.capturer.addEventListener("frame", this.onFrameEvent);
        }
        dispose() {
            this.disposed ||
                ((this.disposed = !0),
                this.capturer.removeEventListener("frame", this.onFrameEvent),
                this.provider.reset());
        }
        isDisposed() {
            return this.disposed;
        }
    };
async function p(l) {
    return (await e.t.post(c.t.recordingCreateSessionV2, { type: l })).data;
}
async function N(l) {
    return (
        await e.t.post(c.t.recordingStartV2, {
            videoRecordingId: l.videoRecordingId,
            frameRate: 30,
            outputMode: "COMPOSED",
            resolution: l.resolution,
            type: l.type,
            hasAudio: l.hasAudio ?? !1,
        })
    ).data;
}
async function M(l) {
    return (await e.t.post(c.t.recordingStopV2, { videoRecordingId: l })).data;
}
async function X(l, t) {
    try {
        return (
            (
                await e.t.post(
                    c.t.deepsightVideoImport,
                    { video: l, type: "selfie" },
                    { headers: { "X-Incode-Hardware-Id": t } },
                )
            ).data.recordingId ?? ""
        );
    } catch {
        return "";
    }
}
async function r({
    encryptedBase64Image: l,
    faceCoordinates: t,
    signal: d,
    metadata: i,
    recordingId: s,
    imageType: n = "selfie",
    deepsightService: Z,
}) {
    try {
        let b = {
                base64Image: l,
                faceCoordinates: t ?? void 0,
                encrypted: !0,
                clientInfo: { deviceClass: (0, o.t)() },
                metadata: i ?? void 0,
            },
            m = { imageType: n };
        s && (m.recordingId = s);
        let u = await e.t.post(c.t.selfie, b, { signal: d, query: m });
        if (!u.ok) throw Error(`POST ${c.t.selfie} failed: ${u.status} ${u.statusText}`);
        return (
            Z &&
                (0, a.t)({
                    frontIdStatsAnalysisStatus: "",
                    backIdStatsAnalysisStatus: "",
                    selfieStatsAnalysisStatus: Z.getAnalysisStatus(),
                    motionStatus: Z.getMotionStatus(),
                }),
            u.data
        );
    } catch (t) {
        let l = y(t);
        if (l) throw Error(l);
        throw Error(u.t.SERVER);
    }
}
let y = (l) => {
    if (!1 === l.ok && "number" == typeof l.status)
        return 400 !== l.status
            ? u.t.SERVER
            : "number" != typeof l.data?.status
              ? u.t.BAD_REQUEST
              : ({
                    3004: u.t.FACE_NOT_FOUND,
                    3005: u.t.FACE_NOT_FOUND,
                    3006: u.t.TOO_BLURRY,
                    3007: u.t.TOO_DARK,
                    4010: u.t.MULTIPLE_FACES,
                    4019: u.t.FACE_NOT_FOUND,
                    4077: u.t.BAD_PHOTO_QUALITY,
                    4078: u.t.FACE_OCCLUDED,
                }[l.data.status] ?? u.t.BAD_REQUEST);
};
async function Y(l = "selfie", t) {
    return (await e.t.post(c.t.processFace, {}, { query: { imageType: l }, signal: t })).data;
}
function T() {
    return (0, a.t)({ cameraLabelInspectionStatus: "FAIL" });
}
let V = { video: { facingMode: "user", height: { ideal: 480 }, width: { ideal: 640 } }, audio: !1 },
    L = { video: { height: { ideal: 1080 } }, audio: !1 };
function I(l, t) {
    return l
        ? {
              video: {
                  facingMode: "user",
                  deviceId: t ? { exact: t } : void 0,
                  height: l.height ? { ideal: l.height } : void 0,
                  width: l.width ? { ideal: l.width } : void 0,
              },
              audio: !1,
          }
        : (0, s.a)()
          ? L
          : V;
}
function z(l) {
    (0, n.a)(l);
}
async function w(l) {
    return (0, s.n)()
        ? l
            ? (0, m.t)((t) => (0, n.r)(I(l, t)))
            : (0, m.t)((l) => (0, m.r)(l ? { deviceId: l } : {}))
        : (0, n.r)(l ? I(l) : I());
}
async function R(l) {
    let { config: t } = l,
        d = I(t.cameraResolution),
        i = new W();
    return (
        await i.initialize({
            autocaptureInterval: U(t) ? 0x7fffffff : 1e3 * t.autoCaptureTimeout,
            useOnDeviceWorkflow: !0 === t.onDeviceFaceResultsSubmissionEnabled,
        }),
        i.setChecksEnabled({
            lenses: t.validateLenses ?? !1,
            mask: t.validateFaceMask ?? !1,
            closedEyes: t.validateClosedEyes ?? !1,
            headWear: t.validateHeadCover ?? !1,
            occlusion: !1,
        }),
        await l.deepsightService.performPrcCheck({ constraints: { video: d.video } }),
        { stream: t.assistedOnboarding ? (await (0, m.n)()).stream : await w(t.cameraResolution), provider: i }
    );
}
async function S({ canvas: l, dependencies: t }) {
    let d = l.getBase64Image();
    if (!d) throw Error("Canvas image is empty or null");
    return (await t.getWasmUtil()).encryptImage(d);
}
function C(l) {
    let t,
        d,
        { provider: i } = l,
        e = (i) => {
            d?.isDisposed() === !0 || (t !== i && ((t = i), l.onUpdate(i)));
        },
        c = () => {
            d?.dispose();
        },
        a = () => {
            c();
        };
    return (
        (async () => {
            try {
                i.setCallbacks({
                    onFarAway: () => e("tooFar"),
                    onTooClose: () => e("tooClose"),
                    onTooManyFaces: () => e("tooManyFaces"),
                    onNoFace: () => e("idle"),
                    onCenterFace: () => e("centerFace"),
                    onGetReady: () => e("getReady"),
                    onGetReadyFinished: () => e("getReadyFinished"),
                    onDark: () => {
                        l.config.validateBrightness && e("dark");
                    },
                    onBlur: () => e("blur"),
                    onFaceAngle: () => e("faceAngle"),
                    onLenses: () => {
                        l.config.validateLenses && e("lenses");
                    },
                    onMask: () => {
                        l.config.validateFaceMask && e("faceMask");
                    },
                    onEyesClosed: () => {
                        l.config.validateClosedEyes && e("eyesClosed");
                    },
                    onHeadWear: () => {
                        l.config.validateHeadCover && e("headWear");
                    },
                    onFaceOccluded: () => e("faceOcclusion"),
                    onFaceData: l.onPose,
                    onSwitchToManualCapture: () => {
                        e("manualCapture"), c();
                    },
                    onCapture: (t, d) => {
                        e("success"), l.onSuccess(t, d), a();
                    },
                }),
                    e("detecting"),
                    (d = new G({ capturer: l.capturer, provider: i, onFrame: l.onFrame }));
            } catch {
                e("error"), a();
            }
        })(),
        {
            cleanup: a,
            reset: () => {
                i.reset();
            },
        }
    );
}
async function x() {
    let { OpenViduRecordingProvider: l } = await Promise.all([d.e("87651"), d.e("52586")]).then(d.bind(d, 795377));
    return new l();
}
async function g(l) {
    if ("VIDEOLIVENESS" === l.config.deepsightLiveness || !0 !== l.config.enableFaceRecording) return;
    if (l.existing) return l.existing;
    let t = l.config.recording?.capability ?? (await x()),
        d = l.clonedStream,
        i = d.getAudioTracks().length > 0,
        e = (function (l) {
            let t = l.getVideoTracks()[0];
            if (!t) return;
            let d = t.getSettings(),
                i = d.width,
                e = d.height;
            if ("number" == typeof i && "number" == typeof e) return `${i}x${e}`;
        })(d),
        c = await p("selfie"),
        a = await t.connect({ sessionToken: c.token, stream: d, events: {} });
    return (
        await N({ videoRecordingId: c.videoRecordingId, type: "selfie", resolution: e, hasAudio: i }),
        {
            token: c.token,
            sessionId: c.sessionId,
            videoRecordingId: c.videoRecordingId,
            connection: a,
            resolution: e,
            hasAudio: i,
        }
    );
}
async function D(l) {
    try {
        await M(l.videoRecordingId);
    } finally {
        await l.connection.disconnect();
    }
}
async function j(l) {
    let { loadDeepsightSession: t } = await d.e("24222").then(d.bind(d, 456141));
    return t({ ds: l.ds, storage: l.storage });
}
let U = (l) => !0 === l.onDeviceFaceResultsSubmissionEnabled;
async function F(l) {
    let t = (0, e.r)(),
        d = (await l.recordingService?.stop())?.recordingId ?? null;
    try {
        l.deepsightService &&
            (await Promise.all([
                l.deepsightService.performVirtualCameraCheck(t, "SELFIE"),
                l.deepsightService.analyzeFrame(l.capturedImage.getImageData()),
            ]));
    } catch (l) {}
    let i = l.deepsightService?.getPipelineState() ?? "";
    return (
        l.dependencies.trackCaptureAttemptFinished?.({ logs: i }),
        { encryptedBase64Image: await S({ canvas: l.capturedImage, dependencies: l.dependencies }), recordingId: d }
    );
}
async function O(l) {
    if (!l.capturedImage) throw Error("On-device capture requires a captured image canvas");
    if (!l.provider) throw Error("On-device capture requires the FaceDetectionProvider to be initialized");
    return (
        l.manualCaptureTriggered &&
            (await new Promise((l) => {
                let t = !1,
                    d = () => {
                        t || ((t = !0), l());
                    };
                "function" == typeof requestAnimationFrame &&
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            setTimeout(d, 0);
                        });
                    }),
                    setTimeout(d, 100);
            }),
            await (0, Z.t)(350),
            l.provider.processPhoto(l.capturedImage.canvas)),
        { encryptedBase64Image: "", recordingId: null }
    );
}
async function J(l, t) {
    let d = l.provider;
    if (!d) throw Error("On-device upload requires the FaceDetectionProvider to be initialized");
    let i = (0, e.r)();
    return (await d.postFaceResults({ headers: i ? { "X-Incode-Hardware-Id": i } : void 0, timeout: 3e4 })) ?? {};
}
