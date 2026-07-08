let r, n;
i.d(t, {
    _: () => C,
    a: () => U,
    c: () => D,
    d: () => M,
    f: () => L,
    g: () => v,
    h: () => g,
    i: () => H,
    l: () => S,
    m: () => w,
    n: () => Z,
    o: () => O,
    p: () => _,
    r: () => N,
    s: () => k,
    t: () => G,
    u: () => P,
    v: () => m,
});
var o = i(976886),
    a = i(209688),
    s = i(171251),
    l = i(351618),
    c = i(581763),
    d = i(958027),
    u = i(948455),
    h = i(196283),
    p = i(410903),
    f = class extends o.t {
        constructor() {
            super(o.l.SelfieWithQualityMetrics),
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
        async processFrame(e) {
            (this.currentFrame = e), await this.processFrameWasm(e);
        }
        async initialize(e) {
            !0 === e.useOnDeviceWorkflow
                ? ((this.pipelineType = o.l.OnDeviceSelfieWorkflow), await this.initializeBase(e, "onDeviceSelfie"))
                : await this.initializeBase(e, "selfie"),
                this.applyDefaults(e.autocaptureInterval ?? 0);
        }
        processPhoto(e) {
            this.ensureInitialized(), o.r.processPhoto(e);
        }
        async postFaceResults(e) {
            return this.ensureInitialized(), o.r.postFaceResults(e);
        }
        setCallbacks(e) {
            this.ensureInitialized();
            let t = (t, i) => {
                let r = null;
                if ((this.currentFrame ? (r = c.n.fromImageData(this.currentFrame)) : t && (r = new c.n(t)), !r))
                    return;
                let n = i ? this.formatFaceCoordinates(i) : this.createDefaultFaceCoordinates(r);
                try {
                    r.updateBase64Image(), r.updateBlob();
                } catch {}
                e.onCapture?.(r, n);
            };
            o.r.setFaceDetectionCallbacks(
                this.getPipelineType(),
                e.onFarAway ?? (() => {}),
                e.onTooClose ?? (() => {}),
                e.onTooManyFaces ?? (() => {}),
                e.onNoFace ?? (() => {}),
                t,
                e.onGetReady ?? (() => {}),
                e.onGetReadyFinished ?? (() => {}),
                e.onCenterFace ?? (() => {}),
                e.onDark ?? (() => {}),
                e.onBlur ?? (() => {}),
                e.onFaceAngle ?? (() => {}),
                e.onLenses ?? (() => {}),
                e.onMask ?? (() => {}),
                e.onEyesClosed ?? (() => {}),
                e.onHeadWear ?? (() => {}),
                e.onSwitchToManualCapture ?? (() => {}),
                e.onFaceOccluded ?? (() => {}),
            );
        }
        setPositionConstraints(e) {
            this.ensureInitialized(),
                o.r.setFacePositionConstraints(this.getPipelineType(), e.minX, e.minY, e.maxX, e.maxY);
        }
        applyDefaults(e = 0) {
            this.ensureInitialized(),
                this.setThresholds({
                    brightnessThreshold: this.defaultThresholds.brightnessThreshold,
                    blurrinessThreshold: this.defaultThresholds.blurrinessThreshold,
                    tiltRotationAngleThreshold: this.defaultThresholds.tiltRotationAngleThreshold,
                    minMagicCropSize: this.defaultThresholds.minMagicCropSize,
                    autocaptureInterval: e,
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
        setAutocaptureInterval(e) {
            (this.ensureInitialized(), this.currentThresholds)
                ? this.setThresholds({ ...this.currentThresholds, autocaptureInterval: e })
                : this.applyDefaults(e);
        }
        setThresholds(e) {
            this.ensureInitialized(),
                (this.currentThresholds = { ...e }),
                o.r.setFaceDetectionThresholds(
                    this.getPipelineType(),
                    e.brightnessThreshold,
                    e.blurrinessThreshold,
                    e.tiltRotationAngleThreshold,
                    e.minMagicCropSize,
                    e.autocaptureInterval,
                    e.minFaceQualityScore,
                    e.faceOcclusionThreshold,
                    e.getReadyDelay,
                    e.framesAggregationInterval,
                    e.minFramesWithFace,
                );
        }
        setAttributesThresholds(e) {
            this.ensureInitialized(),
                o.r.setFaceAttributesThresholds(
                    this.getPipelineType(),
                    e.headwearThreshold,
                    e.lensesThreshold,
                    e.closedEyesThreshold,
                    e.maskThreshold,
                );
        }
        setChecksEnabled(e) {
            this.ensureInitialized(),
                o.r.setFaceChecksEnabled(
                    this.getPipelineType(),
                    e.lenses,
                    e.mask,
                    e.closedEyes,
                    e.headWear,
                    e.occlusion,
                );
        }
        setVideoSelfieMode(e) {
            this.ensureInitialized(), o.r.setFaceDetectionMode(this.getPipelineType(), e);
        }
        reset() {
            super.reset(), (this.currentFrame = null);
        }
        createDefaultFaceCoordinates(e) {
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
                width: e.width() ?? 0,
                height: e.height() ?? 0,
            };
        }
        formatFaceCoordinates(e) {
            return {
                rightEyeX: e.rightEye.x,
                rightEyeY: e.rightEye.y,
                leftEyeX: e.leftEye.x,
                leftEyeY: e.leftEye.y,
                noseTipX: e.noseTip.x,
                noseTipY: e.noseTip.y,
                rightMouthX: e.rightMouthCorner.x,
                rightMouthY: e.rightMouthCorner.y,
                mouthX: e.leftMouthCorner.x,
                mouthY: e.leftMouthCorner.y,
                x: e.rect.x,
                y: e.rect.y,
                width: e.rect.width,
                height: e.rect.height,
            };
        }
    },
    m = class {
        constructor(e) {
            (this.disposed = !1),
                (this.isProcessing = !1),
                (this.onFrameEvent = () => {
                    if (this.disposed || this.isProcessing) return;
                    let e = this.capturer.getLatestFrame();
                    e &&
                        (this.onFrame?.(e),
                        (this.isProcessing = !0),
                        this.provider
                            .processFrame(e)
                            .catch(() => {})
                            .finally(() => {
                                this.isProcessing = !1;
                            }));
                }),
                (this.capturer = e.capturer),
                (this.provider = e.provider),
                (this.onFrame = e.onFrame),
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
async function g(e) {
    return (await a.t.post(s.t.recordingCreateSessionV2, { type: e })).data;
}
async function v(e) {
    return (
        await a.t.post(s.t.recordingStartV2, {
            videoRecordingId: e.videoRecordingId,
            frameRate: 30,
            outputMode: "COMPOSED",
            resolution: e.resolution,
            type: e.type,
            hasAudio: e.hasAudio ?? !1,
        })
    ).data;
}
async function C(e) {
    return (await a.t.post(s.t.recordingStopV2, { videoRecordingId: e })).data;
}
async function y(e, t) {
    try {
        return (
            (
                await a.t.post(
                    s.t.deepsightVideoImport,
                    { video: e, type: "selfie" },
                    { headers: { "X-Incode-Hardware-Id": t } },
                )
            ).data.recordingId ?? ""
        );
    } catch {
        return "";
    }
}
let w = {
    FACE_OCCLUDED: "FACE_OCCLUDED",
    LIVENESS: "LIVENESS_ERROR",
    BRIGHTNESS: "BRIGHTNESS_ERROR",
    LENSES: "LENSES_ERROR",
    MASK: "MASK_ERROR",
    CLOSED_EYES: "CLOSED_EYES_ERROR",
    HEAD_COVER: "HEAD_COVER_ERROR",
    SERVER: "SERVER_ERROR",
    FACE_NOT_FOUND: "FACE_NOT_FOUND",
    MULTIPLE_FACES: "MULTIPLE_FACES",
    TOO_BLURRY: "TOO_BLURRY_ERROR",
    TOO_DARK: "TOO_DARK_ERROR",
    USER_IS_NOT_RECOGNIZED: "USER_IS_NOT_RECOGNIZED",
    SPOOF_ATTEMPT_DETECTED: "SPOOF_ATTEMPT_DETECTED",
    FACE_TOO_DARK: "FACE_TOO_DARK",
    LENSES_DETECTED: "LENSES_DETECTED",
    FACE_MASK_DETECTED: "FACE_MASK_DETECTED",
    CLOSED_EYES_DETECTED: "CLOSED_EYES_DETECTED",
    HEAD_COVER_DETECTED: "HEAD_COVER_DETECTED",
    FACE_CROPPING_FAILED: "FACE_CROPPING_FAILED",
    FACE_TOO_SMALL: "FACE_TOO_SMALL",
    FACE_TOO_BLURRY: "FACE_TOO_BLURRY",
    BAD_PHOTO_QUALITY: "BAD_PHOTO_QUALITY",
    PROCESSING_ERROR: "PROCESSING_ERROR",
    BAD_REQUEST: "BAD_REQUEST",
    NONEXISTENT_CUSTOMER: "NONEXISTENT_CUSTOMER",
    HINT_NOT_PROVIDED: "HINT_NOT_PROVIDED",
    SELFIE_IMAGE_LOW_QUALITY: "SELFIE_IMAGE_LOW_QUALITY",
};
async function _({ encryptedBase64Image: e, faceCoordinates: t, signal: i, metadata: r, recordingId: n }) {
    try {
        let o = {
                base64Image: e,
                faceCoordinates: t ?? void 0,
                encrypted: !0,
                clientInfo: { deviceClass: (0, p.t)() },
                metadata: r ?? void 0,
            },
            l = { imageType: "selfie" };
        n && (l.recordingId = n);
        let c = await a.t.post(s.t.selfie, o, { signal: i, query: l });
        if (!c.ok) throw Error(`POST ${s.t.selfie} failed: ${c.status} ${c.statusText}`);
        return c.data;
    } catch (t) {
        let e = b(t);
        if (e) throw Error(e);
        throw Error(w.SERVER);
    }
}
let b = (e) => {
    if (!1 === e.ok && "number" == typeof e.status)
        return 400 !== e.status
            ? w.SERVER
            : "number" != typeof e.data?.status
              ? w.BAD_REQUEST
              : ({
                    3004: w.FACE_NOT_FOUND,
                    3005: w.FACE_NOT_FOUND,
                    3006: w.TOO_BLURRY,
                    3007: w.TOO_DARK,
                    4010: w.MULTIPLE_FACES,
                    4019: w.FACE_NOT_FOUND,
                    4077: w.BAD_PHOTO_QUALITY,
                    4078: w.FACE_OCCLUDED,
                }[e.data.status] ?? w.BAD_REQUEST);
};
async function L(e = "selfie", t) {
    return (await a.t.post(s.t.processFace, {}, { query: { imageType: e }, signal: t })).data;
}
function S() {
    return (0, h.t)({ cameraLabelInspectionStatus: "FAIL" });
}
let E = { video: { facingMode: "user", height: { ideal: 480 }, width: { ideal: 640 } }, audio: !1 },
    I = { video: { height: { ideal: 1080 } }, audio: !1 };
function T(e) {
    return e
        ? {
              video: {
                  facingMode: "user",
                  height: e.height ? { ideal: e.height } : void 0,
                  width: e.width ? { ideal: e.width } : void 0,
              },
              audio: !1,
          }
        : (0, d.a)()
          ? I
          : E;
}
function M(e) {
    (0, l.i)(e);
}
async function x(e) {
    return e ? (0, l.r)(T(e)) : (0, d.n)() ? (0, u.n)({}) : (0, l.r)(T());
}
async function k(e) {
    let { config: t } = e,
        i = T(t.cameraResolution),
        r = new f();
    return (
        await r.initialize({
            autocaptureInterval: 1e3 * t.autoCaptureTimeout,
            useOnDeviceWorkflow: !0 === t.onDeviceFaceResultsSubmissionEnabled,
        }),
        r.setChecksEnabled({
            lenses: t.validateLenses ?? !1,
            mask: t.validateFaceMask ?? !1,
            closedEyes: t.validateClosedEyes ?? !1,
            headWear: t.validateHeadCover ?? !1,
            occlusion: !1,
        }),
        await e.deepsightService.performPrcCheck({ constraints: { video: i.video } }),
        { stream: t.assistedOnboarding ? (await (0, u.t)()).stream : await x(t.cameraResolution), provider: r }
    );
}
async function O({ canvas: e, dependencies: t }) {
    let i = e.getBase64Image();
    if (!i) throw Error("Canvas image is empty or null");
    return (await t.getWasmUtil()).encryptImage(i);
}
function P(e) {
    let t,
        i,
        { provider: r } = e,
        n = (r) => {
            i?.isDisposed() === !0 || (t !== r && ((t = r), e.onUpdate(r)));
        },
        o = () => {
            i?.dispose();
        },
        a = () => {
            o();
        };
    return (
        (async () => {
            try {
                r.setCallbacks({
                    onFarAway: () => n("tooFar"),
                    onTooClose: () => n("tooClose"),
                    onTooManyFaces: () => n("tooManyFaces"),
                    onNoFace: () => n("idle"),
                    onCenterFace: () => n("centerFace"),
                    onGetReady: () => n("getReady"),
                    onGetReadyFinished: () => n("getReadyFinished"),
                    onDark: () => {
                        e.config.validateBrightness && n("dark");
                    },
                    onBlur: () => n("blur"),
                    onFaceAngle: () => n("faceAngle"),
                    onLenses: () => {
                        e.config.validateLenses && n("lenses");
                    },
                    onMask: () => {
                        e.config.validateFaceMask && n("faceMask");
                    },
                    onEyesClosed: () => {
                        e.config.validateClosedEyes && n("eyesClosed");
                    },
                    onHeadWear: () => {
                        e.config.validateHeadCover && n("headWear");
                    },
                    onFaceOccluded: () => n("faceOcclusion"),
                    onSwitchToManualCapture: () => {
                        n("manualCapture"), o();
                    },
                    onCapture: (t, i) => {
                        n("success"), e.onSuccess(t, i), a();
                    },
                }),
                    n("detecting"),
                    (i = new m({ capturer: e.capturer, provider: r, onFrame: e.onFrame }));
            } catch {
                n("error"), a();
            }
        })(),
        {
            cleanup: a,
            reset: () => {
                r.reset();
            },
        }
    );
}
async function A() {
    let { OpenViduRecordingProvider: e } = await Promise.all([i.e("7079"), i.e("30117")]).then(i.bind(i, 807428));
    return new e();
}
async function R(e) {
    if ("VIDEOLIVENESS" === e.config.deepsightLiveness || !0 !== e.config.enableFaceRecording) return;
    if (e.existing) return e.existing;
    let t = e.config.recording?.capability ?? (await A()),
        i = e.clonedStream,
        r = i.getAudioTracks().length > 0,
        n = (function (e) {
            let t = e.getVideoTracks()[0];
            if (!t) return;
            let i = t.getSettings(),
                r = i.width,
                n = i.height;
            if ("number" == typeof r && "number" == typeof n) return `${r}x${n}`;
        })(i),
        o = await g("selfie"),
        a = await t.connect({ sessionToken: o.token, stream: i, events: {} });
    return (
        await v({ videoRecordingId: o.videoRecordingId, type: "selfie", resolution: n, hasAudio: r }),
        {
            token: o.token,
            sessionId: o.sessionId,
            videoRecordingId: o.videoRecordingId,
            connection: a,
            resolution: n,
            hasAudio: r,
        }
    );
}
async function F(e) {
    try {
        await C(e.videoRecordingId);
    } finally {
        await e.connection.disconnect();
    }
}
async function D(e) {
    let { loadDeepsightSession: t } = await i.e("27811").then(i.bind(i, 543278));
    return t({ ds: e.ds, storage: e.storage });
}
var U = class {
    constructor(e, t) {
        (this.hasFrame = !1),
            (this.disposed = !1),
            (this.eventTarget = new EventTarget()),
            (this.video = document.createElement("video")),
            (this.video.srcObject = e),
            (this.video.autoplay = !0),
            (this.video.playsInline = !0),
            (this.video.muted = !0);
        const i = e.getVideoTracks()[0]?.getSettings(),
            r = t?.width ?? i?.width ?? 1280,
            n = t?.height ?? i?.height ?? 720;
        (this.canvas = document.createElement("canvas")),
            (this.canvas.width = r),
            (this.canvas.height = n),
            (this.ctx = this.canvas.getContext("2d", { willReadFrequently: !0 }));
        const o = t?.fps ?? 10,
            a = o > 0 ? Math.max(16, Math.floor(1e3 / o)) : 0;
        this.video.addEventListener("loadedmetadata", () => {
            this.video.videoWidth > 0 &&
                this.video.videoHeight > 0 &&
                ((this.canvas.width = this.video.videoWidth), (this.canvas.height = this.video.videoHeight));
        });
        try {
            this.video.play();
        } catch {}
        this.rafLoop(a);
    }
    addEventListener(e, t, i) {
        this.eventTarget.addEventListener(e, t, i);
    }
    removeEventListener(e, t, i) {
        this.eventTarget.removeEventListener(e, t, i);
    }
    getLatestCanvas() {
        return (this.hasFrame || this.tick(), this.hasFrame) ? new c.n(this.canvas) : null;
    }
    getLatestFrame() {
        if (!this.ctx || (this.hasFrame || this.tick(), !this.hasFrame)) return null;
        try {
            return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        } catch {
            return null;
        }
    }
    dispose() {
        this.disposed ||
            ((this.disposed = !0),
            void 0 !== this.rafId && (window.cancelAnimationFrame(this.rafId), (this.rafId = void 0)),
            (this.video.srcObject = null),
            (this.canvas.width = 0),
            (this.canvas.height = 0),
            (this.hasFrame = !1));
    }
    rafLoop(e) {
        let t = (i) => {
            if (!this.disposed) {
                if (e <= 0 || void 0 === this.lastTickTimeMs || i - this.lastTickTimeMs >= e) {
                    this.lastTickTimeMs = i;
                    let e = this.lastFrameTimeSeconds;
                    this.tick();
                    let t = this.video.currentTime;
                    void 0 === e
                        ? this.hasFrame &&
                          ((this.lastFrameTimeSeconds = t), this.eventTarget.dispatchEvent(new Event("frame")))
                        : this.hasFrame &&
                          t !== e &&
                          ((this.lastFrameTimeSeconds = t), this.eventTarget.dispatchEvent(new Event("frame")));
                }
                this.rafId = window.requestAnimationFrame(t);
            }
        };
        this.rafId = window.requestAnimationFrame(t);
    }
    tick() {
        if (!this.ctx || this.video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
        let e = this.video.videoWidth,
            t = this.video.videoHeight;
        if (0 !== e && 0 !== t) {
            (this.canvas.width !== e || this.canvas.height !== t) &&
                ((this.canvas.width = e), (this.canvas.height = t));
            try {
                this.ctx.drawImage(this.video, 0, 0), (this.hasFrame = !0);
            } catch {
                this.hasFrame = !1;
            }
        }
    }
};
async function N() {
    try {
        await a.t.put(s.t.updateSession, { manualSelfieCheckNeeded: !0 });
    } catch {}
}
async function H() {
    try {
        await a.t.put(s.t.updateSession, { manualIdCheckNeeded: !0 });
    } catch {}
}
async function V(e) {
    let t = document.createElement("video");
    (t.preload = "metadata"), (t.src = URL.createObjectURL(e));
    try {
        Number.isFinite(t.duration) ||
            ((t.currentTime = Number.MAX_SAFE_INTEGER),
            await new Promise((e) => {
                let i = () => {
                        Number.isFinite(t.duration) &&
                            (t.removeEventListener("durationchange", i),
                            t.removeEventListener("timeupdate", r),
                            e(t.duration));
                    },
                    r = () => {
                        Number.isFinite(t.duration) &&
                            (t.removeEventListener("timeupdate", r),
                            t.removeEventListener("durationchange", i),
                            e(t.duration));
                    };
                t.addEventListener("durationchange", i), t.addEventListener("timeupdate", r);
            }));
        let e = t.duration;
        return Number.isFinite(e) ? e : null;
    } finally {
        URL.revokeObjectURL(t.src), (t.src = "");
    }
}
async function B(e, t) {
    let i = document.createElement("video");
    (i.preload = "metadata"), (i.playsInline = !0), (i.muted = !0);
    let r = URL.createObjectURL(e);
    i.src = r;
    let n = await V(e);
    if (!n || n < t) return URL.revokeObjectURL(r), e;
    let o = Math.max(0, Math.floor(n) - t);
    await new Promise((e) => {
        i.readyState >= 2 ? e() : i.addEventListener("loadedmetadata", () => e(), { once: !0 });
    });
    let a = document.createElement("canvas");
    (a.width = 230), (a.height = 320);
    let s = (0, d.t)() ? 15 : 24,
        l = a.captureStream(s),
        c = a.getContext("2d");
    (i.currentTime = o),
        await new Promise((e) => {
            i.addEventListener("seeked", () => e(), { once: !0 });
        }),
        c.drawImage(i, 0, 0, a.width, a.height);
    let u = e.type || (MediaRecorder.isTypeSupported("video/webm") ? "video/webm" : "video/mp4"),
        h = new MediaRecorder(l.clone(), { mimeType: u, videoBitsPerSecond: 5e5, bitsPerSecond: 5e5 }),
        p = [];
    h.ondataavailable = (e) => {
        e.data.size > 0 && p.push(e.data);
    };
    let f = new Promise((e) => {
        h.onstop = () => {
            let t = new Blob(p, { type: u });
            URL.revokeObjectURL(r),
                h.stream?.getTracks().forEach((e) => e.stop()),
                l.getTracks().forEach((e) => e.stop()),
                (i.src = ""),
                e(t);
        };
    });
    i.addEventListener("play", () => {
        !(function e() {
            if (i.currentTime >= n) {
                h.stop(), i.pause();
                return;
            }
            c.drawImage(i, 0, 0, a.width, a.height), requestAnimationFrame(e);
        })(),
            setTimeout(() => {
                h.start(100);
            }, 500);
    }),
        i.play().catch(() => {
            URL.revokeObjectURL(r);
        });
    let m = await f;
    return console.timeEnd("trimLastNSecondsUsingPlayback"), m;
}
async function $(e, t) {
    return await B(e, t);
}
var z = class {
    constructor() {
        (this.mediaRecorder = null),
            (this._isRecording = !1),
            (this._hasError = !1),
            (this._error = null),
            (this.mimeType = ""),
            (this.stream = null),
            (this.pauseRecordingBound = this.pauseRecording.bind(this));
    }
    get isRecording() {
        return this._isRecording;
    }
    get hasError() {
        return this._hasError;
    }
    get error() {
        return this._error;
    }
    startRecording(e) {
        this.reset(), this.registerEventListeners(), (this.stream = e);
        try {
            let t,
                i =
                    ((t = (function () {
                        for (let e of (0, d.r)()
                            ? ["video/mp4", "video/webm", "video/webm;codecs=vp9", "video/webm;codecs=vp8"]
                            : ["video/webm", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/mp4"])
                            if (MediaRecorder.isTypeSupported(e)) return e;
                        return "";
                    })()),
                    (0, d.r)()
                        ? { mimeType: t, videoBitsPerSecond: 1e6, bitsPerSecond: 1e6 }
                        : { mimeType: t, videoBitsPerSecond: 5e5, bitsPerSecond: 5e5 });
            this.mimeType = i.mimeType;
            let r = new MediaRecorder(e.clone(), i);
            (r.onerror = (e) => {
                (this._error = `Recording error: ${e}`), (this._isRecording = !1), (this._hasError = !0);
            }),
                r.start(),
                (this.mediaRecorder = r),
                (this._isRecording = !0),
                (this._error = null),
                (this._hasError = !1);
        } catch (e) {
            (this._error = `Failed to start recording: ${e}`), (this._hasError = !0);
        }
    }
    async stopRecording(e, t, i) {
        let r = this.mediaRecorder;
        return new Promise((n, o) => {
            if ((this.removeEventListeners(), r && this._isRecording)) {
                let a = [];
                (r.ondataavailable = (e) => {
                    e.data.size > 0 && a.push(e.data);
                }),
                    (r.onstop = async () => {
                        try {
                            let r = await $(new Blob(a, { type: this.mimeType }), e),
                                o = t(
                                    await new Promise((e, t) => {
                                        let i = new FileReader();
                                        (i.onloadend = () => {
                                            e(i.result.split(",")[1]);
                                        }),
                                            (i.onerror = () => t(i.error ?? Error("FileReader error"))),
                                            i.readAsDataURL(r);
                                    }),
                                );
                            i(await r.arrayBuffer()),
                                (this._isRecording = !1),
                                n({ trimmedBlob: r, encryptedVideo: o });
                        } catch (e) {
                            (this._isRecording = !1),
                                (this._error = `Recording stop failed: ${e}`),
                                (this._hasError = !0),
                                o(e);
                        }
                    }),
                    r.stop(),
                    (this._isRecording = !1);
            } else n({ trimmedBlob: new Blob([], { type: this.mimeType }), encryptedVideo: "" });
            r?.stream?.getTracks().forEach((e) => e.stop());
        });
    }
    reset() {
        (this._isRecording = !1), (this._error = null), (this._hasError = !1);
    }
    pauseRecording() {
        if (this._isRecording && this.mediaRecorder?.state === "recording")
            try {
                this.mediaRecorder.pause();
            } catch {}
    }
    registerEventListeners() {
        document.addEventListener("visibilitychange", this.pauseRecordingBound);
    }
    removeEventListeners() {
        document.removeEventListener("visibilitychange", this.pauseRecordingBound);
    }
};
function j() {
    return r || (r = Promise.all([i.e("7079"), i.e("30117")]).then(i.bind(i, 807428))), r;
}
function Z() {
    j(),
        n ||
            (n = (async () =>
                (await Promise.all([i.e("7079"), i.e("90050")]).then(i.bind(i, 669785))).loadOpenVidu())());
}
var W = class {
        constructor(e, t) {
            (this.recorder = new z()), (this.sessionToken = t), (this.wasmUtil = e);
        }
        async start(e) {
            this.recorder.startRecording(e);
        }
        async stop() {
            if (!this.recorder.isRecording) return { recordingId: null };
            let e = await this.recorder.stopRecording(
                10,
                (e) => this.wasmUtil.encryptImage(e),
                (e) => this.wasmUtil.ckvcks(e),
            );
            return this.sessionToken
                ? { recordingId: await y(e.encryptedVideo, this.sessionToken) }
                : { recordingId: null };
        }
        async stopAndGetVideo() {
            if (!this.recorder.isRecording) return { videoBase64: void 0 };
            try {
                return {
                    videoBase64:
                        (
                            await this.recorder.stopRecording(
                                10,
                                (e) => e,
                                () => {},
                            )
                        ).encryptedVideo || void 0,
                };
            } catch {
                return { videoBase64: void 0 };
            }
        }
        cleanup() {
            this.recorder.reset();
        }
    },
    K = class {
        constructor(e) {
            this.config = e;
        }
        async start(e) {
            if (!this.provider) {
                let { OpenViduRecordingProvider: e } = await j();
                this.provider = new e();
            }
            this.session = await R({
                config: { ...this.config, recording: { capability: this.provider } },
                clonedStream: e.clone(),
                existing: this.session,
            });
        }
        async stop() {
            return this.session && (F(this.session), (this.session = void 0)), { recordingId: null };
        }
        async stopAndGetVideo() {
            return this.session && (F(this.session), (this.session = void 0)), { videoBase64: void 0 };
        }
        cleanup() {
            this.session && F(this.session);
        }
    };
function G(e) {
    if (!0 !== e.config.onDeviceFaceResultsSubmissionEnabled) {
        if ("VIDEOLIVENESS" === e.config.deepsightLiveness) return new W(e.wasmUtil, e.sessionToken);
        if (!0 === e.config.enableFaceRecording) return new K(e.config);
    }
}
