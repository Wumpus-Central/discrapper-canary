r.d(t, { p_: () => eC, idCaptureMachine: () => es });
var a = r(976886),
    i = r(257300),
    n = r(209688),
    o = r(588233),
    s = r(171251),
    d = r(886421);
r(799201), r(401959);
var l = r(64755),
    u = r(257202);
r(389777), r(351618);
var c = r(581763),
    p = r(161370),
    g = r(958027),
    m = r(948455),
    E = r(781322),
    f = r(196283),
    h = r(410903);
r(682781);
var C = r(840237);
let I = new Set(["DIGITAL_ID_REQUESTED_BUT_OTHER_PROVIDED", "ID_TYPE_UNACCEPTABLE"]);
function T(e) {
    if (!e) return null;
    let { failReason: t } = e;
    if ("string" == typeof t && t.length > 0)
        return "DIGITAL_ID_REQUESTED_BUT_OTHER_PROVIDED" === t ||
            "ID_TYPE_UNACCEPTABLE" === t ||
            "FILE_CHANGED_ERROR" === t ||
            "NETWORK_ERROR" === t ||
            "GENERIC" === t
            ? t
            : "GENERIC";
    return (null != e.acceptedDocuments && e.acceptedDocuments.length > 0) || !1 === e.classification
        ? "ID_TYPE_UNACCEPTABLE"
        : !1 === e.success
          ? "GENERIC"
          : null;
}
let R = "/omni/add/front-id";
async function S(e) {
    let { file: t, signal: r, onProgress: a } = e,
        i = await n.t.post(R, t, {
            query: { idType: "DigitalId" },
            headers: { "Content-Type": t.type || "application/pdf" },
            onUploadProgress: a,
            signal: r,
        });
    if (!i.ok) throw Error(`POST ${R} failed: ${i.status}`);
    return { ...i.data, uploadDurationMs: 0 };
}
let A = ["application/pdf"],
    y = (0, l.a)(async ({ input: e, signal: t }) =>
        S({ file: e.file, signal: e.signal ?? t, onProgress: e.onProgress }),
    ),
    D = (e) => {
        if ("output" in e) return e.output;
    },
    U = (0, l.t)({
        types: { context: {}, events: {}, input: {}, output: {} },
        actors: { uploadDigitalId: y },
        actions: {
            requestPickerIfPending: (0, l.r)(({ context: e }) =>
                e.pendingPickerAutoOpen ? { pickerRequestId: e.pickerRequestId + 1, pendingPickerAutoOpen: !1 } : {},
            ),
            setPendingPickerAutoOpen: (0, l.r)(() => ({ pendingPickerAutoOpen: !0 })),
            storeSelectedFile: (0, l.r)(({ event: e }) =>
                "FILE_PICKED" !== e.type ? {} : { file: e.file, failReason: null },
            ),
            clearSelectedFile: (0, l.r)(() => ({
                file: null,
                uploadProgress: 0,
                failReason: null,
                response: void 0,
                uploadDurationMs: void 0,
            })),
            setInvalidFileTypeError: (0, l.r)(() => ({ failReason: "INVALID_FILE_TYPE" })),
            setUploadProgressCapped: (0, l.r)(({ event: e }) =>
                "UPLOAD_PROGRESS" !== e.type ? {} : { uploadProgress: Math.min(90, Math.max(0, e.progress)) },
            ),
            setUploadProgressCompleted: (0, l.r)(() => ({ uploadProgress: 100 })),
            storeUploadResponse: (0, l.r)(({ event: e }) =>
                "output" in e ? { response: e.output, uploadDurationMs: e.output.uploadDurationMs } : {},
            ),
            setFailReasonFromResponse: (0, l.r)(({ event: e }) =>
                "output" in e ? { failReason: T(e.output) ?? "GENERIC" } : {},
            ),
            setFailReasonFromNetworkError: (0, l.r)(({ event: e }) => {
                var t;
                let r;
                return "error" in e
                    ? {
                          failReason:
                              (r = (t = e.error) instanceof Error ? t.message : String(t)).includes(
                                  "ERR_UPLOAD_FILE_CHANGED",
                              ) ||
                              r.includes("file changed") ||
                              r.includes("FILE_CHANGED")
                                  ? "FILE_CHANGED_ERROR"
                                  : "NETWORK_ERROR",
                      }
                    : {};
            }),
            decrementAttemptOnFailure: (0, l.r)(({ context: e }) => ({
                attemptsRemaining: Math.max(0, e.attemptsRemaining - 1),
            })),
        },
        guards: {
            isSelectedFileTooLarge: ({ event: e }) => "FILE_PICKED" === e.type && e.file.size > 5242880,
            isSelectedFileMimeInvalid: ({ event: e }) => "FILE_PICKED" === e.type && !A.includes(e.file.type),
            hasSelectedFile: ({ context: e }) => null !== e.file,
            responseHasFailReason: ({ event: e }) => null !== T(D(e)),
            hasAttemptsRemaining: ({ context: e }) => e.attemptsRemaining > 0,
            isTerminalFailReason: ({ event: e }) => {
                var t;
                return (t = D(e)), "string" == typeof t?.failReason && I.has(t.failReason);
            },
            isCurrentFailReasonTerminal: ({ context: e }) => {
                let t = new Set(["DIGITAL_ID_REQUESTED_BUT_OTHER_PROVIDED", "ID_TYPE_UNACCEPTABLE"]);
                return null !== e.failReason && t.has(e.failReason);
            },
        },
    }).createMachine({
        id: "digitalUpload",
        initial: "decideStart",
        context: ({ input: e }) => ({
            showTutorial: e.showTutorial,
            file: null,
            uploadProgress: 0,
            attemptsRemaining: e.captureAttempts,
            failReason: null,
            response: void 0,
            uploadDurationMs: void 0,
            pickerRequestId: 0,
            pendingPickerAutoOpen: !e.showTutorial,
            resultType: null,
        }),
        output: ({ context: e }) => ({ result: e.resultType ?? "exhausted" }),
        states: {
            decideStart: {
                always: [{ guard: ({ context: e }) => e.showTutorial, target: "tutorial" }, { target: "selecting" }],
            },
            tutorial: { on: { NEXT_STEP: { target: "selecting", actions: ["setPendingPickerAutoOpen"] } } },
            selecting: {
                entry: ["requestPickerIfPending"],
                on: {
                    FILE_PICKED: [
                        { guard: "isSelectedFileTooLarge", target: "fileTooLarge", actions: ["clearSelectedFile"] },
                        { guard: "isSelectedFileMimeInvalid", target: "error", actions: ["setInvalidFileTypeError"] },
                        { target: "reviewing", actions: ["storeSelectedFile"] },
                    ],
                },
            },
            fileTooLarge: {
                on: {
                    CHOOSE_ANOTHER: { target: "selecting", actions: ["clearSelectedFile", "setPendingPickerAutoOpen"] },
                },
            },
            reviewing: {
                on: {
                    CONFIRM: { target: "uploading", guard: "hasSelectedFile" },
                    REPLACE: { target: "selecting", actions: ["setPendingPickerAutoOpen"] },
                },
            },
            uploading: {
                invoke: {
                    id: "uploadDigitalId",
                    src: "uploadDigitalId",
                    input: ({ context: e, self: t }) => ({
                        file: e.file,
                        onProgress: (e) => {
                            t.send({ type: "UPLOAD_PROGRESS", progress: e });
                        },
                    }),
                    onDone: [
                        {
                            guard: "isTerminalFailReason",
                            target: "retriesExhausted",
                            actions: ["storeUploadResponse", "setFailReasonFromResponse"],
                        },
                        {
                            guard: "responseHasFailReason",
                            target: "checkRetries",
                            actions: ["storeUploadResponse", "setFailReasonFromResponse", "decrementAttemptOnFailure"],
                        },
                        { target: "success", actions: ["storeUploadResponse", "setUploadProgressCompleted"] },
                    ],
                    onError: {
                        target: "checkRetries",
                        actions: ["setFailReasonFromNetworkError", "decrementAttemptOnFailure"],
                    },
                },
                initial: "analyzing",
                states: { analyzing: { after: { 8e3: { target: "holding" } } }, holding: {} },
                on: { UPLOAD_PROGRESS: { actions: ["setUploadProgressCapped"] } },
            },
            checkRetries: {
                always: [
                    { guard: "isCurrentFailReasonTerminal", target: "retriesExhausted" },
                    { guard: "hasAttemptsRemaining", target: "error" },
                    { target: "retriesExhausted" },
                ],
            },
            error: {
                on: {
                    RETRY: { target: "selecting", actions: ["setPendingPickerAutoOpen", "clearSelectedFile"] },
                    SCAN_INSTEAD: { target: "closed" },
                },
            },
            retriesExhausted: {
                entry: (0, l.r)({ resultType: "exhausted" }),
                on: { SCAN_INSTEAD: { target: "closed" } },
            },
            closed: { type: "final", entry: (0, l.r)({ resultType: "closed" }) },
            success: { on: { NEXT_STEP: { target: "completed" } } },
            completed: { type: "final", entry: (0, l.r)({ resultType: "success" }) },
        },
    }),
    v = new Set(["DIGITAL_ID_REQUESTED_BUT_OTHER_PROVIDED", "ID_TYPE_UNACCEPTABLE"]),
    _ = [
        ["enableId", "id"],
        ["enablePassport", "passport"],
        ["manualUploadIdCapture", "manualIdUpload"],
        ["digitalIdsUpload", "digitalIdUpload"],
        ["deviceWallet", "digitalId"],
    ];
var P = class extends a.t {
    constructor() {
        super(a.l.IdBlurGlarePipeline),
            (this.lastProcessResult = null),
            (this.capturedCanvas = null),
            (this.originalCapturedCanvas = null);
    }
    async initialize(e) {
        await this.initializeBase(e, "idCapture");
    }
    setCallbacks(e) {
        this.ensureInitialized(),
            a.r.setIdCaptureCallbacks(
                this.getPipelineType(),
                e.onFarAway ?? (() => {}),
                e.onDetectionStarted ?? (() => {}),
                e.onMaskChange ? (t, r, a, i) => e.onMaskChange?.(t, r, a, i) : () => {},
                e.onBlur ?? (() => {}),
                e.onGlare ?? (() => {}),
                e.onCapturing ?? (() => {}),
                e.onCapture
                    ? () => {
                          e.onCapture?.();
                      }
                    : () => {},
                e.onBestFrame ? (t, r, a) => e.onBestFrame?.(t, r, a) : () => {},
                e.onIdNotDetected ?? (() => {}),
                e.onSwitchToManualCapture ?? (() => {}),
                e.onIdTypeChange ? (t) => e.onIdTypeChange?.(t) : () => {},
                e.onIdSideChange ? (t) => e.onIdSideChange?.(t) : () => {},
                e.onCapturingCounterValueChange ? (t) => e.onCapturingCounterValueChange?.(t) : () => {},
            );
    }
    setThresholds(e) {
        this.ensureInitialized(),
            a.r.setIdCaptureThresholds(
                this.getPipelineType(),
                e.blurThreshold,
                e.blurChangeThreshold,
                e.glareThreshold,
                e.clsThreshold,
                e.sideThreshold,
                e.iouThreshold,
                e.idDetectedTimeout,
                e.autocaptureTimeout,
                e.framesAggregationInterval,
            );
    }
    setGeometry(e) {
        this.ensureInitialized(),
            a.r.setIdCaptureGeometryParams(
                this.getPipelineType(),
                e.areaDown,
                e.areaUp,
                e.areaIOSPassportUp,
                e.areaIOSPassportDown,
                e.widthIOSUp,
                e.widthIOSDown,
                e.widthDown,
                e.widthUp,
                e.windowOuterWidth,
                e.windowOuterHeight,
                e.windowInnerWidth,
                e.windowInnerHeight,
            );
    }
    setSettings(e) {
        this.ensureInitialized(),
            a.r.setIdCaptureConfigParams(
                this.getPipelineType(),
                e.isFixedMask,
                e.isIPhone14OrHigher,
                e.idType,
                e.blurCheckEnabled,
                e.glareCheckEnabled,
                e.faceQualityCheckEnabled,
                e.iouCheckEnabled,
                e.fpsLimitEnabled,
            );
    }
    setModelType(e) {
        let t;
        switch ((this.ensureInitialized(), e)) {
            case "v1":
                t = a.u.IdCaptureV1x;
                break;
            case "v2":
                t = a.u.IdCaptureV2x;
                break;
            case "v3":
                t = a.u.IdCaptureV3x;
                break;
            default:
                throw Error(`Unknown model type: ${e}`);
        }
        a.r.setIdCaptureModelType(this.getPipelineType(), t);
    }
    async processFrame(e) {
        let t = await this.processFrameWasm(e),
            r = this.getPipelineType();
        t && r === a.l.IdBlurGlarePipeline ? (this.lastProcessResult = t) : (this.lastProcessResult = null);
    }
    getLastProcessResult() {
        return this.lastProcessResult;
    }
    transformPerspective(e, t) {
        this.ensureInitialized();
        let r = e.width(),
            i = e.height();
        try {
            let n = e.getImageData();
            if (!n) return e;
            let o = a.r.IdPerspectiveTransform(n, t);
            if (o) {
                let e = new c.n(o),
                    a = e.width(),
                    n = e.height();
                if (a === r && n === i) {
                    let r = this.cropCanvasToRect(e, {
                        x: Math.round(t.x),
                        y: Math.round(t.y),
                        w: Math.round(t.w),
                        h: Math.round(t.h),
                    });
                    if (r) return r;
                }
                return e;
            }
            return e;
        } catch (t) {
            return e;
        }
    }
    cropCanvasToRect(e, t) {
        let r = e.width(),
            a = e.height();
        if (!r || !a) return null;
        let i = Math.max(0, Math.min(t.x, r)),
            n = Math.max(0, Math.min(t.y, a)),
            o = Math.max(1, Math.min(t.w, r - i)),
            s = Math.max(1, Math.min(t.h, a - n)),
            d = document.createElement("canvas");
        (d.width = o), (d.height = s);
        let l = d.getContext("2d");
        return l ? (l.drawImage(e.canvas, i, n, o, s, 0, 0, o, s), new c.n(d)) : null;
    }
    getCapturedCanvas() {
        return this.capturedCanvas;
    }
    getOriginalCapturedCanvas() {
        return this.originalCapturedCanvas;
    }
    setCapturedCanvases(e, t) {
        (this.originalCapturedCanvas = e), (this.capturedCanvas = t);
    }
    reset() {
        super.reset(),
            (this.lastProcessResult = null),
            (this.capturedCanvas = null),
            (this.originalCapturedCanvas = null);
    }
};
async function k(e) {
    try {
        await n.t.post(s.t.deviceStats, e);
    } catch {}
}
async function O(e) {
    return (0, m.t)(e);
}
let F = {
    UPLOAD_ERROR: "UPLOAD_ERROR",
    CLASSIFICATION_FAILED: "CLASSIFICATION_FAILED",
    LOW_SHARPNESS: "LOW_SHARPNESS",
    GLARE_DETECTED: "GLARE_DETECTED",
    WRONG_DOCUMENT_SIDE: "WRONG_DOCUMENT_SIDE",
    ID_TYPE_UNACCEPTABLE: "ID_TYPE_UNACCEPTABLE",
    READABILITY_ISSUE: "READABILITY_ISSUE",
    RETRY_EXHAUSTED_CONTINUE_TO_BACK: "RETRY_EXHAUSTED_CONTINUE_TO_BACK",
    RETRY_EXHAUSTED_SKIP_BACK: "RETRY_EXHAUSTED_SKIP_BACK",
    NO_MORE_TRIES: "NO_MORE_TRIES",
    UNEXPECTED_ERROR: "UNEXPECTED_ERROR",
    NO_TOKEN: "NO_TOKEN",
    PERMISSION_DENIED: "PERMISSION_DENIED",
    USER_CANCELLED: "USER_CANCELLED",
    SERVER: "SERVER_ERROR",
};
function M(e, t) {
    return t ? ("front" === e ? s.t.frontSecondId : s.t.backSecondId) : "front" === e ? s.t.frontId : s.t.backId;
}
let N = {
        blurThreshold: 0.2,
        blurChangeThreshold: 0.2,
        glareThreshold: 0.3,
        clsThreshold: 0.98,
        sideThreshold: 0.8,
        iouThreshold: 0.8,
        framesAggregationInterval: 3e3,
    },
    b = {
        isFixedMask: !1,
        isIPhone14OrHigher: !1,
        idType: "",
        blurCheckEnabled: !1,
        glareCheckEnabled: !1,
        faceQualityCheckEnabled: !0,
        iouCheckEnabled: !0,
        fpsLimitEnabled: !1,
    };
async function w(e) {
    let t,
        { config: r, deepsightService: a } = e,
        i = new P();
    if (
        (await i.initialize({}),
        i.setThresholds({
            ...N,
            ...r.thresholds,
            idDetectedTimeout: r.thresholds?.idDetectedTimeout ?? 1e3 * r.deviceIdleTimeout,
            autocaptureTimeout: r.thresholds?.autocaptureTimeout ?? 1e3 * r.autoCaptureTimeout,
        }),
        r.settings && i.setSettings({ ...b, ...r.settings }),
        a)
    )
        try {
            await a.performPrcCheck({
                constraints: (0, g.n)()
                    ? { video: { facingMode: "user", height: { ideal: 480 }, width: { ideal: 640 } } }
                    : { video: { facingMode: "environment", height: { ideal: 720 } } },
            });
        } catch {}
    let { stream: n, fallbackLevel: o } = await O(),
        s = n.getVideoTracks()[0];
    if (s) {
        let e = s.getSettings();
        "number" == typeof e.width && "number" == typeof e.height && (t = `${e.width}x${e.height}`);
    }
    return (
        a && s && a.metadata.updateCameraInfo(s),
        { stream: n, provider: i, captureResolution: t, cameraFallbackLevel: o }
    );
}
function L(e) {
    for (let t of e.getTracks()) t.stop();
}
function x(e, t) {
    if ("ID_TYPE_UNACCEPTABLE" === e.failReason)
        return {
            error: !0,
            message: "ID type is not acceptable",
            messageDescription: "Please use a valid ID type",
            errorKey: F.ID_TYPE_UNACCEPTABLE,
        };
    if ("WRONG_DOCUMENT_SIDE" === e.failReason)
        return {
            error: !0,
            message: "Wrong side of document",
            messageDescription:
                "back" === e.side ? "Please show the back side of your ID" : "Please show the front side of your ID",
            errorKey: F.WRONG_DOCUMENT_SIDE,
        };
    if (!e.classification) return { error: !0, message: "ID classification failed", errorKey: F.CLASSIFICATION_FAILED };
    let r = "desktop" === (0, h.t)() ? -1 : 10;
    return void 0 !== e.sharpness && r >= 0 && e.sharpness < r
        ? {
              error: !0,
              message: "Image is not sharp enough",
              messageDescription: "Please ensure the image is clear and well-focused",
              errorKey: F.LOW_SHARPNESS,
          }
        : void 0 === e.glare || !(e.glare < 10) || t?.skipGlareFront || t?.skipGlareBack
          ? void 0
          : {
                error: !0,
                message: "Glare detected on ID",
                messageDescription: "Please avoid bright reflections on your ID",
                errorKey: F.GLARE_DETECTED,
            };
}
async function B(e) {
    let t = e.ageAssurance ? ["back" === e.type ? "croppedBackID" : "croppedFrontID"] : [];
    try {
        let r = await n.t.post(s.t.getImages, { images: ["croppedIDFace", ...t] }, { signal: e.signal });
        if (!r.ok) throw Error(`Failed to get extra images: ${r.status}`);
        return r.data ?? { croppedIDFace: "", croppedFrontID: "", croppedBackID: "" };
    } catch {
        return { croppedIDFace: "", croppedFrontID: "", croppedBackID: "" };
    }
}
async function G(e) {
    let {
            type: t,
            image: r,
            onProgress: a,
            signal: i,
            metadata: o,
            ageAssurance: s,
            glare: d,
            sharpness: l,
            shouldSkipGlareBack: u,
            analyticsProvider: c,
            imageData: p,
            isSecondId: g,
            onlyFront: m,
        } = e,
        E = o;
    if (c && p)
        try {
            await c.analyzeFrame(p), c.update();
            let e = c.getAnalysisStatus(),
                r = c.getMotionStatus();
            await k({
                frontIdStatsAnalysisStatus: "front" === t ? e : void 0,
                backIdStatsAnalysisStatus: "back" === t ? e : void 0,
                motionStatus: r,
            }),
                (E = c.getMetadata());
        } catch (e) {
            console.warn("[IdCapture] Analytics failed:", e);
        }
    let f = M(t, g),
        h = { base64Image: r, metadata: E },
        C = { imageType: "id" };
    (m && "front" === t && (C.onlyFront = !0), u && "back" === t)
        ? (C.glare = 0)
        : void 0 !== d && (C.glare = (1 - d) * 100),
        void 0 !== l && (C.sharpness = (1 - l) * 100);
    try {
        let e = await n.t.post(f, h, { signal: i, query: C, onUploadProgress: a });
        if (!e.ok) throw Error(`POST ${f} failed: ${e.status} ${e.statusText}`);
        let o = e.data,
            d = await B({ type: t, ageAssurance: s, signal: i }),
            l = {
                ...o,
                originalImage: r,
                frontIdImage: "front" === t ? r : void 0,
                backIdImage: d.croppedBackID,
                ...d,
            };
        return a?.(100), l;
    } catch (t) {
        let e = t instanceof Error ? t.message : "Unknown error";
        throw Error(`${F.UPLOAD_ERROR}: ${e}`);
    }
}
async function z() {
    let { OpenViduRecordingProvider: e } = await Promise.all([r.e("7079"), r.e("30117")]).then(r.bind(r, 807428));
    return new e();
}
async function H(e) {
    if (!0 !== e.config.enableIdRecording) return;
    if (e.existing) return e.existing;
    let t = e.config.recording?.capability ?? (await z()),
        r = e.stream.clone(),
        a = r.getAudioTracks().length > 0,
        i = (function (e) {
            let t = e.getVideoTracks()[0];
            if (!t) return "1080x1920";
            let r = t.getSettings(),
                a = r.width,
                i = r.height;
            if ("number" == typeof a && "number" == typeof i) {
                let e = i > a ? { width: 1080, height: 1920 } : { width: 1920, height: 1080 };
                return `${e.width}x${e.height}`;
            }
            return "1080x1920";
        })(r),
        n = await (0, p.h)(e.type),
        o = await t.connect({ sessionToken: n.token, stream: r, events: {} });
    return (
        await (0, p.g)({ videoRecordingId: n.videoRecordingId, type: e.type, resolution: i, hasAudio: a }),
        {
            token: n.token,
            sessionId: n.sessionId,
            videoRecordingId: n.videoRecordingId,
            connection: o,
            resolution: i,
            hasAudio: a,
        }
    );
}
async function $(e = !1, t = "", r) {
    let a = e ? s.t.processSecondId : s.t.processId,
        i = t ? `${a}?queueName=${t}` : a;
    return { isDocumentExpired: (await n.t.post(i, {}, { signal: r })).data?.isDocumentExpired ?? !1 };
}
async function V(e) {
    let { side: t, base64Image: r, retry: a, onlyFront: i, signal: o, isSecondId: s } = e,
        d = M("back" === t ? "back" : "front", s),
        l = { captureType: "UPLOAD" };
    a && (l.retry = !0), i && "front" === t && (l.onlyFront = !0);
    let u = await n.t.post(d, { base64Image: r }, { signal: o, query: l });
    if (!u.ok) throw Error(`POST ${d} failed: ${u.status} ${u.statusText}`);
    return u.data;
}
function q(e, t) {
    let r = e.failReason;
    return "WRONG_DOCUMENT_SIDE" === r
        ? "manualIdUpload.wrongSide"
        : "WRONG_ONE_SIDED_DOCUMENT" === r ||
            "UNKNOWN_DOCUMENT_TYPE" === r ||
            "ID_TYPE_UNACCEPTABLE" === r ||
            ("passport" === t && e.typeOfId && "passport" !== e.typeOfId.toLowerCase()) ||
            ("id" === t && e.typeOfId?.toLowerCase() === "passport")
          ? "manualIdUpload.wrongDocument"
          : !1 === e.correctSharpness
            ? "manualIdUpload.lowSharpness"
            : !1 === e.correctGlare
              ? "manualIdUpload.glareDetected"
              : !1 === e.readability
                ? "manualIdUpload.readabilityIssue"
                : !1 === e.idQualityAttemptApproved
                  ? "manualIdUpload.qualityRejected"
                  : null;
}
let W = (0, l.a)(async ({ input: e, signal: t }) => {
        var r;
        let a = await ((r = e.file),
        new Promise((e, t) => {
            let a = new FileReader();
            (a.onload = () => {
                let r = a.result;
                if ("string" != typeof r) return void t(Error("FileReader produced non-string result"));
                let i = r.indexOf(",");
                e(-1 === i ? r : r.slice(i + 1));
            }),
                (a.onerror = () => {
                    t(a.error ?? Error("FileReader failed"));
                }),
                a.readAsDataURL(r);
        }));
        return V({
            side: e.side,
            base64Image: a,
            retry: e.retry,
            onlyFront: e.onlyFront,
            isSecondId: e.isSecondId,
            signal: t,
        });
    }),
    K = (0, l.t)({
        types: { context: {}, events: {}, input: {}, output: {} },
        actors: { uploadManualFile: W },
        actions: {
            setManualUploadActiveTab: (0, l.r)(({ context: e, event: t }) =>
                "MANUAL_UPLOAD_TAB_CHANGED" !== t.type
                    ? {}
                    : {
                          activeTab: t.tab,
                          frontFile: null,
                          backFile: null,
                          passportFile: null,
                          frontUploaded: !1,
                          backUploaded: !1,
                          passportUploaded: !1,
                          skipBackFromServer: !1,
                          errorMessage: null,
                          retriesLeft: e.captureAttempts,
                      },
            ),
            resetManualUpload: (0, l.r)(({ context: e }) => ({
                frontFile: null,
                backFile: null,
                passportFile: null,
                frontUploaded: !1,
                backUploaded: !1,
                passportUploaded: !1,
                skipBackFromServer: !1,
                errorMessage: null,
                retriesLeft: e.captureAttempts,
            })),
            storeSelectedFile: (0, l.r)(({ event: e }) => {
                if ("MANUAL_UPLOAD_FILE_SELECTED" !== e.type) return {};
                let t = { errorMessage: null };
                return (
                    "front" === e.side
                        ? (t.frontFile = e.file)
                        : "back" === e.side
                          ? (t.backFile = e.file)
                          : (t.passportFile = e.file),
                    t
                );
            }),
            markFrontUploaded: (0, l.r)(() => ({ frontUploaded: !0, errorMessage: null })),
            markBackUploaded: (0, l.r)(() => ({ backUploaded: !0, errorMessage: null })),
            markPassportUploaded: (0, l.r)(() => ({ passportUploaded: !0, errorMessage: null })),
            recordSkipBackFromResponse: (0, l.r)(({ event: e }) =>
                "output" in e && e.output.skipBackIdCapture ? { skipBackFromServer: !0 } : {},
            ),
            decrementManualUploadRetries: (0, l.r)(({ context: e }) => ({
                retriesLeft: Math.max(0, e.retriesLeft - 1),
            })),
            setManualUploadErrorFromResponse: (0, l.r)(({ context: e, event: t }) =>
                "output" in t ? { errorMessage: q(t.output, e.activeTab) ?? "manualIdUpload.generic" } : {},
            ),
            setManualUploadGenericError: (0, l.r)(() => ({ errorMessage: "manualIdUpload.generic" })),
            setManualUploadFileTooLargeError: (0, l.r)(() => ({ errorMessage: "manualIdUpload.fileTooBig" })),
            clearManualUploadError: (0, l.r)(() => ({ errorMessage: null })),
        },
        guards: {
            isSelectedFileTooLarge: ({ event: e }) => "MANUAL_UPLOAD_FILE_SELECTED" === e.type && e.file.size > 5242880,
            isFrontFileSelection: ({ event: e }) => "MANUAL_UPLOAD_FILE_SELECTED" === e.type && "front" === e.side,
            isBackFileSelection: ({ event: e }) => "MANUAL_UPLOAD_FILE_SELECTED" === e.type && "back" === e.side,
            isPassportFileSelection: ({ event: e }) =>
                "MANUAL_UPLOAD_FILE_SELECTED" === e.type && "passport" === e.side,
            manualUploadRetriesExhausted: ({ context: e }) => e.retriesLeft <= 0,
            canContinueFromIdTab: ({ context: e }) =>
                "id" === e.activeTab &&
                !!e.frontUploaded &&
                (!!e.onlyFront || !!e.skipBackFromServer || e.backUploaded),
            canContinueFromPassportTab: ({ context: e }) => "passport" === e.activeTab && e.passportUploaded,
            manualUploadResponseHasError: ({ context: e, event: t }) => {
                let r = ((e) => {
                    if ("output" in e) return e.output;
                })(t);
                return !!r && null !== q(r, e.activeTab);
            },
        },
    }).createMachine({
        id: "manualUpload",
        initial: "selecting",
        context: ({ input: e }) => ({
            onlyFront: e.onlyFront,
            isSecondId: e.isSecondId,
            captureAttempts: e.captureAttempts,
            frontFile: null,
            backFile: null,
            passportFile: null,
            activeTab: "id",
            retriesLeft: e.captureAttempts,
            errorMessage: null,
            skipBackFromServer: !1,
            frontUploaded: !1,
            backUploaded: !1,
            passportUploaded: !1,
        }),
        on: {
            MANUAL_UPLOAD_TAB_CHANGED: { target: ".selecting", actions: ["setManualUploadActiveTab"] },
            MANUAL_UPLOAD_RESET: { target: ".selecting", actions: ["resetManualUpload"] },
        },
        states: {
            selecting: {
                on: {
                    MANUAL_UPLOAD_FILE_SELECTED: [
                        { guard: "isSelectedFileTooLarge", actions: ["setManualUploadFileTooLargeError"] },
                        { guard: "isFrontFileSelection", target: "uploadingFront", actions: ["storeSelectedFile"] },
                        { guard: "isBackFileSelection", target: "uploadingBack", actions: ["storeSelectedFile"] },
                        {
                            guard: "isPassportFileSelection",
                            target: "uploadingPassport",
                            actions: ["storeSelectedFile"],
                        },
                    ],
                    MANUAL_UPLOAD_CONTINUE: [
                        { guard: "canContinueFromIdTab", target: "finished" },
                        { guard: "canContinueFromPassportTab", target: "finished" },
                    ],
                },
            },
            uploadingFront: {
                invoke: {
                    id: "uploadManualFile",
                    src: "uploadManualFile",
                    input: ({ context: e }) => ({
                        side: "front",
                        file: e.frontFile,
                        retry: e.retriesLeft < e.captureAttempts,
                        onlyFront: e.onlyFront,
                        isSecondId: e.isSecondId,
                    }),
                    onDone: [
                        {
                            guard: "manualUploadResponseHasError",
                            target: "checkRetries",
                            actions: ["decrementManualUploadRetries", "setManualUploadErrorFromResponse"],
                        },
                        {
                            target: "selecting",
                            actions: ["markFrontUploaded", "recordSkipBackFromResponse", "clearManualUploadError"],
                        },
                    ],
                    onError: {
                        target: "checkRetries",
                        actions: ["decrementManualUploadRetries", "setManualUploadGenericError"],
                    },
                },
            },
            uploadingBack: {
                invoke: {
                    id: "uploadManualFile",
                    src: "uploadManualFile",
                    input: ({ context: e }) => ({
                        side: "back",
                        file: e.backFile,
                        retry: e.retriesLeft < e.captureAttempts,
                        onlyFront: !1,
                        isSecondId: e.isSecondId,
                    }),
                    onDone: [
                        {
                            guard: "manualUploadResponseHasError",
                            target: "checkRetries",
                            actions: ["decrementManualUploadRetries", "setManualUploadErrorFromResponse"],
                        },
                        { target: "selecting", actions: ["markBackUploaded", "clearManualUploadError"] },
                    ],
                    onError: {
                        target: "checkRetries",
                        actions: ["decrementManualUploadRetries", "setManualUploadGenericError"],
                    },
                },
            },
            uploadingPassport: {
                invoke: {
                    id: "uploadManualFile",
                    src: "uploadManualFile",
                    input: ({ context: e }) => ({
                        side: "passport",
                        file: e.passportFile,
                        retry: e.retriesLeft < e.captureAttempts,
                        onlyFront: !1,
                        isSecondId: e.isSecondId,
                    }),
                    onDone: [
                        {
                            guard: "manualUploadResponseHasError",
                            target: "checkRetries",
                            actions: ["decrementManualUploadRetries", "setManualUploadErrorFromResponse"],
                        },
                        { target: "selecting", actions: ["markPassportUploaded", "clearManualUploadError"] },
                    ],
                    onError: {
                        target: "checkRetries",
                        actions: ["decrementManualUploadRetries", "setManualUploadGenericError"],
                    },
                },
            },
            checkRetries: {
                always: [
                    { guard: "manualUploadRetriesExhausted", target: "retriesExhausted" },
                    { target: "selecting" },
                ],
            },
            retriesExhausted: { after: { 5e3: { target: "exhausted" } } },
            exhausted: { type: "final", output: { result: "exhausted" } },
            finished: { type: "final", output: { result: "success" } },
        },
    }),
    Y = {
        blurThreshold: 0.2,
        blurChangeThreshold: 0.2,
        glareThreshold: 0.3,
        clsThreshold: 0.98,
        sideThreshold: 0.8,
        iouThreshold: 0.8,
        idDetectedTimeout: 1e4,
        autocaptureTimeout: 5e3,
        framesAggregationInterval: 3e3,
    },
    X = (0, l.a)(async () => (0, C.t)()),
    Q = (0, l.a)(async ({ input: e }) => (0, C.n)({ requestMotion: e.requestMotionPermission })),
    j = (0, l.a)(async ({ input: e }) => w(e)),
    J = (0, l.i)(({ input: e, sendBack: t }) => {
        if (!e.frameCapturer || !e.provider) return t({ type: "DETECTION_UPDATE", status: "error" }), () => {};
        let r = e.provider,
            a = null,
            n = null,
            o = {},
            s = !1,
            d = i.t.getInstance(),
            l = null,
            u = null,
            g = null,
            m = () => {
                if (!g) return !1;
                let t = g.toLowerCase();
                if ("wrong" === t) return !0;
                let r = t.includes("back") && !t.includes("front"),
                    a = t.includes("front") && !t.includes("back");
                return ("front" === e.currentMode && r) || ("back" === e.currentMode && a);
            },
            f = () => {
                l && (d.clearTimeout(l), (l = null), (u = null));
            },
            h = (e) => {
                m() ||
                    (l && u !== e) ||
                    (l && u === e && d.clearTimeout(l),
                    (u = e),
                    t({ type: "DETECTION_UPDATE", status: e }),
                    (l = d.setTimeout(() => {
                        (l = null), (u = null), t({ type: "DETECTION_UPDATE", status: "detecting" });
                    }, 500)));
            },
            C = e.frameCapturer.getLatestCanvas(),
            I = (0, E.r)(C?.width() ?? 1280, C?.height() ?? 720);
        e.config.geometry
            ? r.setGeometry({
                  ...e.config.geometry,
                  windowOuterWidth: I.outerWidth,
                  windowOuterHeight: I.outerHeight,
                  windowInnerWidth: I.innerWidth,
                  windowInnerHeight: I.innerHeight,
              })
            : r.setGeometry({
                  ...{
                      areaDown: 25e3,
                      areaUp: 55e3,
                      areaIOSPassportUp: 3e4,
                      areaIOSPassportDown: 2e4,
                      widthIOSUp: 160,
                      widthIOSDown: 85,
                      widthDown: 110,
                      widthUp: 205,
                  },
                  windowOuterWidth: I.outerWidth,
                  windowOuterHeight: I.outerHeight,
                  windowInnerWidth: I.innerWidth,
                  windowInnerHeight: I.innerHeight,
              });
        let T = "back" === e.currentMode ? "BackId" : "passport" === e.currentMode ? "Passport" : "FrontId";
        r.setSettings({
            isFixedMask: e.config.settings?.isFixedMask ?? !1,
            isIPhone14OrHigher: e.config.settings?.isIPhone14OrHigher ?? !1,
            idType: T,
            blurCheckEnabled: e.config.settings?.blurCheckEnabled ?? !1,
            glareCheckEnabled: e.config.settings?.glareCheckEnabled ?? !1,
            faceQualityCheckEnabled: e.config.settings?.faceQualityCheckEnabled ?? !0,
            iouCheckEnabled: e.config.settings?.iouCheckEnabled ?? !0,
            fpsLimitEnabled: e.config.settings?.fpsLimitEnabled ?? !1,
        });
        let R = {
            ...Y,
            ...e.config.thresholds,
            idDetectedTimeout: (e.config.deviceIdleTimeout ?? 10) * 1e3,
            autocaptureTimeout: (e.config.autoCaptureTimeout ?? 5) * 1e3,
        };
        r.setThresholds(R);
        let S = e.config.modelVersion ?? "v2";
        r.setModelType(S),
            r.setCallbacks({
                onFarAway: () => {
                    s || h("farAway");
                },
                onDetectionStarted: () => {},
                onMaskChange: (e, r, a, i) => {
                    t({ type: "ORIENTATION_CHANGE", orientation: i });
                },
                onBlur: () => {
                    s || h("blur");
                },
                onGlare: () => {
                    s || h("glare");
                },
                onIdNotDetected: () => {
                    s || t({ type: "DETECTION_UPDATE", status: "idNotDetected" });
                },
                onSwitchToManualCapture: () => {
                    (s = !1), t({ type: "SWITCH_TO_MANUAL_CAPTURE" });
                },
                onCapturing: () => {
                    f(), (g = null), (s = !0), t({ type: "DETECTION_UPDATE", status: "capturing" });
                },
                onBestFrame: (e, r, i) => {
                    a && ((n = a.clone()), (o = { glare: r, sharpness: e })),
                        ("horizontal" === i || "vertical" === i) && t({ type: "ORIENTATION_CHANGE", orientation: i });
                },
                onCapture: () => {
                    (s = !1),
                        n
                            ? t({ type: "DETECTION_SUCCESS", canvas: n, qualityElements: o })
                            : a && t({ type: "DETECTION_SUCCESS", canvas: a.clone(), qualityElements: {} });
                },
                onIdTypeChange: (e) => {
                    t({ type: "ID_TYPE_CHANGE", idType: e });
                },
                onIdSideChange: (e) => {
                    s || ((g = e), m() && f(), t({ type: "ID_SIDE_CHANGE", side: e }));
                },
                onCapturingCounterValueChange: (e) => {
                    t({ type: "COUNTER_VALUE_CHANGE", value: e });
                },
            }),
            t({ type: "DETECTION_UPDATE", status: "detecting" });
        let A = new p.v({
            capturer: e.frameCapturer,
            provider: {
                processFrame: async (e) => {
                    (a = c.n.fromImageData(e)), t({ type: "DETECTION_FRAME", frame: e }), await r.processFrame(e);
                },
                reset: () => {
                    l && (d.clearTimeout(l), (l = null), (u = null)),
                        (a = null),
                        (n = null),
                        (o = {}),
                        (s = !1),
                        (g = null),
                        r.reset();
                },
            },
            onFrame: (e) => t({ type: "DETECTION_FRAME", frame: e }),
        });
        return (
            t({
                type: "DETECTION_RESET_READY",
                reset: () => {
                    r.reset();
                },
            }),
            () => {
                f(), A?.dispose();
            }
        );
    }),
    Z = (0, l.a)(async ({ input: e, signal: t }) => {
        let r,
            a = e.canvas.getBase64Image();
        if (!a) throw Error(F.UPLOAD_ERROR);
        if (e.deepsightService)
            try {
                let t = (0, n.r)(),
                    a = "back" === e.type ? "BACK_ID" : "FRONT_ID";
                await e.deepsightService.performVirtualCameraCheck(t, a);
                let i = e.canvas.getImageData();
                i && (await e.deepsightService.analyzeFrame(i));
                let o = e.deepsightService.getAnalysisStatus(),
                    s = e.deepsightService.getMotionStatus();
                "front" === e.type
                    ? await (0, f.t)({
                          frontIdStatsAnalysisStatus: o,
                          backIdStatsAnalysisStatus: "",
                          selfieStatsAnalysisStatus: "",
                          motionStatus: s,
                      })
                    : await (0, f.t)({
                          frontIdStatsAnalysisStatus: "",
                          backIdStatsAnalysisStatus: o,
                          selfieStatsAnalysisStatus: "",
                          motionStatus: s,
                      }),
                    (r = e.deepsightService.getMetadata());
            } catch {}
        let i = e.canvas?.getImageData() ?? void 0,
            o = e.deepsightService?.getPipelineState() ?? "";
        return (
            e.dependencies?.trackCaptureAttemptFinished?.({
                logs: o,
                resolution: e.captureResolution,
                fallbackLevel: e.cameraFallbackLevel,
            }),
            G({
                image: a,
                type: e.type,
                sendBase64: !0,
                glare: e.qualityElements?.glare,
                sharpness: e.qualityElements?.sharpness,
                ageAssurance: e.ageAssurance,
                signal: t,
                onProgress: e.onProgress,
                metadata: r,
                analyticsProvider: e.analyticsProvider,
                imageData: i,
                isSecondId: e.isSecondId,
                onlyFront: e.onlyFront,
            })
        );
    }),
    ee = (0, l.a)(async ({ input: e, signal: t }) => $(e.isSecondId, "", t)),
    et = (0, l.a)(async ({ input: e }) => {
        if (!e.stream) return;
        let t = "back" === e.currentMode ? "backId" : "frontId";
        return H({ config: e.config, stream: e.stream, existing: e.existing, type: t });
    }),
    er = (0, l.i)(({ input: e, sendBack: t }) => {
        if (!e.motionProvider) return t({ type: "MOTION_STATUS", status: "UNCLEAR" }), () => {};
        let r = i.t.getInstance(),
            a = r.setInterval(() => {
                t({ type: "MOTION_STATUS", status: e.motionProvider.check() });
            }, 500);
        return () => r.clearInterval(a);
    }),
    ea = (0, l.a)(async ({ input: e }) => {
        if (!e.dependencies) return;
        let { loadDeepsightSession: t } = await r.e("27811").then(r.bind(r, 543278));
        return t({ ds: e.ds, storage: e.dependencies.storage, disableIpify: e.disableIpify });
    }),
    ei = (0, l.a)(async ({ input: e }) => {
        if (!e.deepsightService || !e.stream) return !1;
        let t = e.stream.getVideoTracks()[0];
        return !!t && e.deepsightService.checkVirtualCamera(t);
    });
function en(e) {
    e.frameCapturer?.dispose(), e.stream && L(e.stream);
}
function eo(e) {
    e.provider?.dispose?.();
}
let es = (0, l.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        checkPermission: X,
        requestPermission: Q,
        initializeCamera: j,
        runDetection: J,
        uploadIdImage: Z,
        processId: ee,
        startRecording: et,
        checkMotionSensor: er,
        initializeDeepsightSession: ea,
        checkVirtualCamera: ei,
        manualUploadMachine: K,
        digitalUploadMachine: U,
    },
    actions: {
        stopMediaStream: (0, l.r)(({ context: e }) => (en(e), { stream: void 0, frameCapturer: void 0 })),
        disposeProvider: ({ context: e }) => {
            eo(e);
        },
        cleanupDeepsight: ({ context: e }) => {
            e.deepsightService?.cleanup();
        },
        flagIdManualReview: () => {
            (0, p.i)();
        },
        resetForBackCapture: (0, l.r)(
            ({ context: e }) => (
                e.frameCapturer?.dispose(),
                e.stream && L(e.stream),
                e.provider?.reset(),
                {
                    stream: void 0,
                    frameCapturer: void 0,
                    detectionStatus: "idle",
                    counterValue: 0,
                    orientation: void 0,
                    resetDetection: void 0,
                    idType: void 0,
                    qualityElements: void 0,
                    debugFrame: void 0,
                    frameRect: void 0,
                    previewImageUrl: void 0,
                    uploadProgress: void 0,
                    manualCaptureTriggered: !1,
                    attemptsRemaining: e.config.captureAttempts,
                    expiredAttempts: 0,
                    expiredFromUpload: !1,
                    exhaustedFromUpload: !1,
                    forceFinishAfterProcessing: !1,
                    captureResolution: void 0,
                    cameraFallbackLevel: void 0,
                }
            ),
        ),
        resetForFrontCapture: (0, l.r)(
            ({ context: e }) => (
                e.frameCapturer?.dispose(),
                e.stream && L(e.stream),
                e.provider?.reset(),
                {
                    stream: void 0,
                    frameCapturer: void 0,
                    detectionStatus: "idle",
                    counterValue: 0,
                    orientation: void 0,
                    resetDetection: void 0,
                    idType: void 0,
                    qualityElements: void 0,
                    debugFrame: void 0,
                    frameRect: void 0,
                    previewImageUrl: void 0,
                    uploadProgress: void 0,
                    manualCaptureTriggered: !1,
                    attemptsRemaining: e.config.captureAttempts,
                    expiredAttempts: 0,
                    expiredFromUpload: !1,
                    exhaustedFromUpload: !1,
                    forceFinishAfterProcessing: !1,
                    captureResolution: void 0,
                    cameraFallbackLevel: void 0,
                }
            ),
        ),
        prepareForBackCapture: (0, l.r)(
            ({ context: e }) => (
                e.provider?.reset(),
                {
                    detectionStatus: "idle",
                    counterValue: 0,
                    orientation: void 0,
                    resetDetection: void 0,
                    idType: void 0,
                    qualityElements: void 0,
                    debugFrame: void 0,
                    frameRect: void 0,
                    previewImageUrl: void 0,
                    uploadProgress: void 0,
                    manualCaptureTriggered: !1,
                    attemptsRemaining: e.config.captureAttempts,
                }
            ),
        ),
        setStreamAndCapturer: (0, l.r)({
            stream: ({ event: e }) =>
                (function (e) {
                    if ("output" in e) return e.output.stream;
                })(e),
            provider: ({ event: e }) =>
                (function (e) {
                    if ("output" in e) return e.output.provider;
                })(e),
            frameCapturer: ({ event: e }) =>
                (function (e) {
                    if ("output" in e) {
                        let t = e.output;
                        if (t.stream) return new p.a(t.stream);
                    }
                })(e),
            captureResolution: ({ event: e }) =>
                (function (e) {
                    if ("output" in e) return e.output.captureResolution;
                })(e),
            cameraFallbackLevel: ({ event: e }) =>
                (function (e) {
                    if ("output" in e) return e.output.cameraFallbackLevel;
                })(e),
        }),
        trackTutorialId: () => {},
        trackContinue: () => {},
        trackCameraId: ({ context: e }) => {},
        preloadRecordingProvider: ({ context: e }) => {
            !0 === e.config.enableIdRecording && (0, p.n)();
        },
        resetContext: (0, l.r)(({ context: e }) => {
            let t;
            return (
                e.provider?.reset(),
                (t = e.config.onlyBack
                    ? "back"
                    : !e.config.enableId && e.config.enablePassport
                      ? "passport"
                      : e.config.usSmartCapture
                        ? "back"
                        : "front"),
                {
                    stream: void 0,
                    provider: e.provider,
                    frameCapturer: void 0,
                    error: void 0,
                    detectionStatus: "idle",
                    counterValue: 0,
                    orientation: void 0,
                    capturedImages: {},
                    captureOnlyImages: {},
                    uploadResponse: void 0,
                    recordingSession: void 0,
                    attemptsRemaining: e.config.captureAttempts,
                    expiredAttempts: 0,
                    skipProcessId: !1,
                    expiredFromUpload: !1,
                    isDigitalUpload: !1,
                    exhaustedFromUpload: !1,
                    forceFinishAfterProcessing: !1,
                    uploadError: void 0,
                    permissionResult: void 0,
                    resetDetection: void 0,
                    idType: void 0,
                    qualityElements: void 0,
                    previewImageUrl: void 0,
                    uploadProgress: void 0,
                    currentMode: t,
                    selectedDocumentType: void 0,
                    manualCaptureTriggered: !1,
                    captureResolution: void 0,
                    cameraFallbackLevel: void 0,
                }
            );
        }),
        resetDetection: ({ context: e }) => {
            e.resetDetection?.();
        },
        captureImage: (0, l.r)({
            qualityElements: ({ event: e }) => {
                if ("qualityElements" in e) return e.qualityElements;
            },
        }),
        storeCapturedCanvasInProvider: ({ context: e, event: t }) => {
            !(function (e, t) {
                let r,
                    a = null;
                if (
                    !(a = "canvas" in t && t.canvas ? t.canvas : (e.frameCapturer?.getLatestCanvas() ?? null)) ||
                    !e.provider
                )
                    return;
                let i = a.width(),
                    n = a.height();
                if (!i || !n) return;
                let o = a,
                    { innerWidth: s, innerHeight: d } = (0, E.r)();
                if (e.detectionArea) {
                    let t = Math.max(s / i, d / n);
                    r = {
                        x: (e.detectionArea.x - (s - i * t) / 2) / t,
                        y: (e.detectionArea.y - (d - n * t) / 2) / t,
                        w: e.detectionArea.width / t,
                        h: e.detectionArea.height / t,
                    };
                } else if (e.frameRect) {
                    let t = Math.max(s / i, d / n);
                    r = {
                        x: (e.frameRect.x - (s - i * t) / 2) / t,
                        y: (e.frameRect.y - (d - n * t) / 2) / t,
                        w: e.frameRect.w / t,
                        h: e.frameRect.h / t,
                    };
                } else {
                    let t = e.provider.getLastProcessResult?.()?.quad,
                        a = !!t,
                        o = t?.size ? t.size() : (t?.length ?? 0);
                    if (a && o >= 4 && t.get) {
                        let e = t.get(0),
                            a = t.get(1),
                            i = t.get(2),
                            n = t.get(3),
                            o = Math.min(e.x, a.x, i.x, n.x),
                            s = Math.max(e.x, a.x, i.x, n.x),
                            d = Math.min(e.y, a.y, i.y, n.y);
                        r = { x: o, y: d, w: s - o, h: Math.max(e.y, a.y, i.y, n.y) - d };
                    } else {
                        let e = Math.min(387, 0.9 * s),
                            t = e / (35 / 22);
                        r = { x: (((s - e) / 2) * i) / s, y: (((d - t) / 2) * n) / d, w: (i * e) / s, h: (n * t) / d };
                    }
                }
                let l = e.provider.transformPerspective(o, r);
                e.provider.setCapturedCanvases(o, l);
            })(e, t);
        },
        captureLatestFrame: ({ context: e }) => {
            e.frameCapturer?.getLatestCanvas();
        },
        clearUploadFailure: (0, l.r)(
            ({ context: e }) => (
                e.previewImageUrl && (0, o.S)(e.previewImageUrl),
                { uploadError: void 0, detectionStatus: "idle", previewImageUrl: void 0, uploadProgress: void 0 }
            ),
        ),
        clearStreamForRetry: (0, l.r)(
            ({ context: e }) => (
                en(e),
                eo(e),
                {
                    stream: void 0,
                    provider: void 0,
                    frameCapturer: void 0,
                    captureResolution: void 0,
                    cameraFallbackLevel: void 0,
                }
            ),
        ),
        decrementAttemptsRemaining: (0, l.r)(({ context: e }) => ({ attemptsRemaining: e.attemptsRemaining - 1 })),
        setUploadErrorFromUploadValidation: (0, l.r)({
            uploadError: ({ context: e }) =>
                e.uploadResponse
                    ? (x(e.uploadResponse, {
                          skipGlareFront: e.uploadResponse.skipGlareFront,
                          skipGlareBack: e.uploadResponse.skipGlareBack,
                      })?.errorKey ?? F.SERVER)
                    : F.SERVER,
        }),
        stopMediaRecording: ({ context: e }) => {
            var t;
            e.recordingSession &&
                ((t = e.recordingSession),
                (async () => {
                    try {
                        await (0, p._)(t.videoRecordingId);
                    } finally {
                        await t.connection.disconnect();
                    }
                })());
        },
        clearRecordingSession: (0, l.r)({ recordingSession: () => void 0 }),
        setSelectedDocument: (0, l.r)({
            selectedDocumentType: ({ event: e }) => {
                if ("documentType" in e) return e.documentType;
            },
        }),
        setCurrentMode: (0, l.r)({
            currentMode: ({ event: e, context: t }) => {
                var r, a;
                return (
                    (r = t),
                    "documentType" in (a = e)
                        ? "passport" === a.documentType
                            ? "passport"
                            : r.config.usSmartCapture
                              ? "back"
                              : "front"
                        : "FRONT_COMPLETE" === a.type
                          ? "back"
                          : r.currentMode
                );
            },
        }),
        storeCapturedImage: (0, l.r)(({ context: e, event: t }) =>
            (function (e, t) {
                if (!e.currentMode) return { capturedImages: e.capturedImages, previewImageUrl: e.previewImageUrl };
                let r = e.provider?.getCapturedCanvas(),
                    a = r?.getBase64Image(1, !0),
                    i = "";
                "output" in t && (i = t.output.originalImage ?? "");
                let n = { imageBase64: a ?? i },
                    o = e.capturedImages;
                o =
                    "front" === e.currentMode || "passport" === e.currentMode
                        ? { ...e.capturedImages, front: n }
                        : { ...e.capturedImages, back: n };
                let s = e.previewImageUrl;
                if (r) {
                    r.updateBlob();
                    let e = r.getBlobData();
                    e?.url && (s = e.url);
                } else if ("canvas" in t && t.canvas) {
                    let e = t.canvas;
                    e.updateBlob();
                    let r = e.getBlobData();
                    r?.url && (s = r.url);
                }
                return { capturedImages: o, previewImageUrl: s };
            })(e, t),
        ),
        setDetectionStatus: (0, l.r)({
            detectionStatus: ({ event: e, context: t }) =>
                (function (e, t) {
                    if ("DETECTION_UPDATE" === t.type) {
                        let r = t.status,
                            a = e.detectionStatus;
                        return "wrongSide" === a
                            ? "capturing" !== r && "manualCapture" !== r && "offline" !== r
                                ? a
                                : r
                            : ("blur" === r || "glare" === r) && "farAway" === a
                              ? a
                              : ("wrongSide" === r || "farAway" === r, r);
                    }
                    return "idle";
                })(t, e),
        }),
        setCounterValue: (0, l.r)({ counterValue: ({ event: e }) => ("value" in e ? e.value : 0) }),
        setIdType: (0, l.r)({
            idType: ({ event: e }) => {
                if ("idType" in e) return e.idType;
            },
        }),
        setOrientation: (0, l.r)({
            orientation: ({ event: e }) => {
                if ("orientation" in e) return e.orientation;
            },
        }),
        setFrameRect: (0, l.r)({
            frameRect: ({ event: e }) => {
                if ("frameRect" in e) return e.frameRect;
            },
        }),
        setDetectionArea: (0, l.r)({
            detectionArea: ({ event: e }) => {
                if ("detectionArea" in e) return e.detectionArea;
            },
        }),
        setMotionStatus: (0, l.r)({
            motionStatus: ({ event: e }) => {
                if ("status" in e && "MOTION_STATUS" === e.type) return e.status;
            },
        }),
        incrementExpiredAttempts: (0, l.r)(({ context: e }) => ({ expiredAttempts: e.expiredAttempts + 1 })),
        storeDigitalUploadResponse: (0, l.r)(({ self: e }) => {
            let t = e.getSnapshot().children?.digitalIdUpload?.getSnapshot()?.context?.response;
            return t ? { uploadResponse: t, isDigitalUpload: !0 } : { isDigitalUpload: !0 };
        }),
        incrementProcessingExpiredAttempts: (0, l.r)(({ context: e }) => ({
            processingExpiredAttempts: e.processingExpiredAttempts + 1,
        })),
        setSkipProcessId: (0, l.r)({ skipProcessId: () => !0 }),
        setExpiredFromUpload: (0, l.r)({ expiredFromUpload: () => !0 }),
        setExhaustedFromUpload: (0, l.r)({ exhaustedFromUpload: () => !0 }),
        setForceFinishAfterProcessing: (0, l.r)({ forceFinishAfterProcessing: () => !0 }),
        clearExpiredFromUpload: (0, l.r)({ expiredFromUpload: () => !1 }),
    },
    guards: {
        hasShowTutorial: ({ context: e }) => e.config.showTutorial,
        hasAgeAssurance: ({ context: e }) => !0 === e.config.ageAssurance,
        hasShowDocumentChooser: ({ context: e }) => !e.config.onlyBack && (e.config.showDocumentChooserScreen ?? !1),
        isPermissionGranted: ({ event: e }) => "output" in e && "granted" === e.output,
        isPermissionDeniedError: ({ event: e }) => {
            if ("error" in e) {
                let t = e.error;
                return t?.name === "NotAllowedError" || t?.name === "PermissionDeniedError";
            }
            return !1;
        },
        hasStream: ({ context: e }) => void 0 !== e.stream,
        hasAttemptsRemaining: ({ context: e }) => e.attemptsRemaining > 0,
        hasCapturedImage: ({ context: e }) => e.provider?.getCapturedCanvas() !== null,
        hasUploadValidationError: ({ context: e }) =>
            !!e.uploadResponse &&
            void 0 !==
                x(e.uploadResponse, {
                    skipGlareFront: e.uploadResponse.skipGlareFront,
                    skipGlareBack: e.uploadResponse.skipGlareBack,
                }),
        isFrontMode: ({ context: e }) => "front" === e.currentMode || "passport" === e.currentMode,
        isOnlyFront: (e) => !1,
        shouldContinueToBack: ({ context: e }) =>
            !(
                ("front" !== e.currentMode && "passport" !== e.currentMode) ||
                e.config.onlyBack ||
                e.config.usSmartCapture ||
                (e.uploadResponse?.skipBackIdCapture &&
                    (!0 !== e.config.alwaysCaptureBackOfId || "passport" === e.currentMode))
            ),
        shouldContinueToFront: ({ context: e }) =>
            !0 === e.config.usSmartCapture && "back" === e.currentMode && e.uploadResponse?.forceFrontIdCapture === !0,
        hasMandatoryConsent: ({ context: e }) => e.uploadResponse?.showMandatoryConsent === !0,
        isDeepsightEnabled: ({ context: e }) => void 0 !== e.dependencies,
        isDeepsightReady: ({ context: e }) => void 0 !== e.deepsightService,
        needsDeepsightInit: ({ context: e }) =>
            void 0 !== e.dependencies && void 0 === e.deepsightService && !e.deepsightInitAttempted,
        hasOnlyManualUploadAvailable: ({ context: e }) =>
            1 === e.availableDocumentTypes.length && "manualIdUpload" === e.availableDocumentTypes[0],
        isManualIdUploadSelected: ({ event: e }) => "SELECT_DOCUMENT" === e.type && "manualIdUpload" === e.documentType,
        isDigitalIdUploadSelected: ({ event: e }) =>
            "SELECT_DOCUMENT" === e.type && "digitalIdUpload" === e.documentType,
        isUploadExpired: ({ context: e }) => e.uploadResponse?.isDocumentExpired === !0,
        isExpiredAttemptsExhausted: ({ context: e }) => e.expiredAttempts + 1 >= e.config.captureAttempts,
        isNotPassportMode: ({ context: e }) => "passport" !== e.currentMode,
        shouldForceBackOnExpired: ({ context: e }) =>
            "front" === e.currentMode &&
            !0 === e.config.alwaysCaptureBackOfId &&
            !e.config.onlyBack &&
            !e.config.usSmartCapture &&
            !e.isDigitalUpload,
        wasExpiredFromUpload: ({ context: e }) => !0 === e.expiredFromUpload,
        shouldSkipProcessId: ({ context: e }) => !0 === e.skipProcessId,
        isProcessingExpiredExhausted: ({ context: e }) => e.processingExpiredAttempts + 1 >= e.config.captureAttempts,
        shouldProcessAfterExhaustion: ({ context: e }) => !0 === e.exhaustedFromUpload && "back" === e.currentMode,
        forceFinishAfterProcessing: ({ context: e }) => !0 === e.forceFinishAfterProcessing,
        isManualUploadExhausted: ({ event: e }) => e.output?.result === "exhausted",
        isDigitalUploadExhausted: ({ event: e }) => e.output?.result === "exhausted",
        isDigitalUploadClosed: ({ event: e }) => e.output?.result === "closed",
        isDigitalUploadSuccessful: ({ event: e }) => e.output?.result === "success",
    },
}).createMachine({
    id: "idCapture",
    initial: "idle",
    context: ({ input: e }) => {
        let t = e.config.onlyBack
            ? "back"
            : !e.config.enableId && e.config.enablePassport
              ? "passport"
              : e.config.usSmartCapture
                ? "back"
                : "front";
        return {
            config: e.config,
            currentMode: t,
            selectedDocumentType: void 0,
            stream: void 0,
            provider: void 0,
            frameCapturer: void 0,
            error: void 0,
            detectionStatus: "idle",
            counterValue: 0,
            orientation: void 0,
            capturedImages: {},
            captureOnlyImages: {},
            uploadResponse: void 0,
            recordingSession: void 0,
            attemptsRemaining: e.config.captureAttempts,
            expiredAttempts: 0,
            processingExpiredAttempts: 0,
            skipProcessId: !0 === e.config.skipProcessId,
            expiredFromUpload: !1,
            isDigitalUpload: !1,
            exhaustedFromUpload: !1,
            forceFinishAfterProcessing: !1,
            uploadError: void 0,
            permissionResult: void 0,
            resetDetection: void 0,
            idType: void 0,
            qualityElements: void 0,
            debugFrame: void 0,
            frameRect: void 0,
            detectionArea: void 0,
            previewImageUrl: void 0,
            uploadProgress: void 0,
            motionStatus: void 0,
            manualCaptureTriggered: !1,
            deepsightService: void 0,
            analyticsProvider: e.analyticsProvider,
            dependencies: e.dependencies,
            disableIpify: (0, d.t)(),
            deepsightInitAttempted: !1,
            availableDocumentTypes: (function (e) {
                let t = [];
                for (let [r, a] of _) e[r] && t.push(a);
                return t;
            })(e.config),
            captureResolution: void 0,
            cameraFallbackLevel: void 0,
        };
    },
    on: { QUIT: { target: "#idCapture.closed" }, UPDATE_DETECTION_AREA: { actions: "setDetectionArea" } },
    states: {
        idle: {
            on: {
                LOAD: [
                    { target: "manualIdUpload", guard: "hasOnlyManualUploadAvailable" },
                    { target: "chooser", guard: "hasShowDocumentChooser" },
                    { target: "ageVerification", guard: "hasAgeAssurance" },
                    { target: "tutorial", guard: "hasShowTutorial" },
                    { target: "loading" },
                ],
            },
        },
        chooser: {
            on: {
                SELECT_DOCUMENT: [
                    { target: "digitalIdUpload", guard: "isDigitalIdUploadSelected", actions: ["setSelectedDocument"] },
                    { target: "manualIdUpload", guard: "isManualIdUploadSelected", actions: ["setSelectedDocument"] },
                    {
                        target: "ageVerification",
                        guard: "hasAgeAssurance",
                        actions: ["setSelectedDocument", "setCurrentMode"],
                    },
                    {
                        target: "tutorial",
                        guard: "hasShowTutorial",
                        actions: ["setSelectedDocument", "setCurrentMode"],
                    },
                    { target: "loading", actions: ["setSelectedDocument", "setCurrentMode"] },
                ],
            },
        },
        ageVerification: {
            on: {
                NEXT_STEP: [
                    { target: "tutorial", guard: "hasShowTutorial", actions: "trackContinue" },
                    { target: "loading", actions: "trackContinue" },
                ],
            },
        },
        loading: {
            entry: "preloadRecordingProvider",
            type: "parallel",
            states: {
                permissionCheck: {
                    initial: "checking",
                    states: {
                        checking: {
                            invoke: {
                                id: "checkPermissionLoading",
                                src: "checkPermission",
                                onDone: {
                                    target: "done",
                                    actions: (0, l.r)({ permissionResult: ({ event: e }) => e.output }),
                                },
                                onError: { target: "done", actions: (0, l.r)({ permissionResult: () => "prompt" }) },
                            },
                        },
                        done: { type: "final" },
                    },
                },
                deepsightInit: {
                    initial: "initializing",
                    states: {
                        initializing: {
                            invoke: {
                                id: "initDeepsightLoading",
                                src: "initializeDeepsightSession",
                                input: ({ context: e }) => ({
                                    ds: e.config.ds,
                                    dependencies: e.dependencies,
                                    disableIpify: e.disableIpify,
                                }),
                                onDone: {
                                    target: "done",
                                    actions: (0, l.r)({
                                        deepsightService: ({ event: e }) => e.output,
                                        deepsightInitAttempted: () => !0,
                                    }),
                                },
                                onError: {
                                    target: "done",
                                    actions: [
                                        (0, l.r)({ deepsightInitAttempted: () => !0 }),
                                        () => console.warn("Deepsight initialization failed"),
                                    ],
                                },
                            },
                        },
                        done: { type: "final" },
                    },
                },
            },
            onDone: [{ target: "capture", guard: "isPermissionGranted" }, { target: "permissions" }],
        },
        tutorial: {
            initial: "checkingPermission",
            entry: ["trackTutorialId", "preloadRecordingProvider"],
            states: {
                checkingPermission: {
                    invoke: {
                        id: "checkPermissionTutorial",
                        src: "checkPermission",
                        onDone: [
                            {
                                target: "initializingCamera",
                                guard: "isPermissionGranted",
                                actions: (0, l.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                            { target: "ready", actions: (0, l.r)({ permissionResult: ({ event: e }) => e.output }) },
                        ],
                    },
                    on: { NEXT_STEP: { target: "#idCapture.capture", actions: "trackContinue" } },
                },
                initializingCamera: {
                    type: "parallel",
                    states: {
                        cameraInit: {
                            initial: "initializingDeepsight",
                            states: {
                                initializingDeepsight: {
                                    invoke: {
                                        id: "tutorialInitDeepsight",
                                        src: "initializeDeepsightSession",
                                        input: ({ context: e }) => ({
                                            ds: e.config.ds,
                                            dependencies: e.dependencies,
                                            disableIpify: e.disableIpify,
                                        }),
                                        onDone: {
                                            target: "initializingStream",
                                            actions: (0, l.r)({
                                                deepsightService: ({ event: e }) => e.output,
                                                deepsightInitAttempted: () => !0,
                                            }),
                                        },
                                        onError: {
                                            target: "initializingStream",
                                            actions: [
                                                (0, l.r)({ deepsightInitAttempted: () => !0 }),
                                                () => console.warn("Deepsight initialization failed in tutorial"),
                                            ],
                                        },
                                    },
                                },
                                initializingStream: {
                                    invoke: {
                                        id: "tutorialInitCamera",
                                        src: "initializeCamera",
                                        input: ({ context: e }) => ({
                                            config: e.config,
                                            deepsightService: e.deepsightService,
                                        }),
                                        onDone: { target: "ready", actions: "setStreamAndCapturer" },
                                        onError: [
                                            {
                                                target: "#idCapture.tutorial.ready",
                                                guard: "isPermissionDeniedError",
                                                actions: (0, l.r)({ permissionResult: () => "denied" }),
                                            },
                                            {
                                                target: "#idCapture.tutorial.ready",
                                                actions: (0, l.r)({ error: ({ event: e }) => String(e.error) }),
                                            },
                                        ],
                                    },
                                },
                                ready: { type: "final" },
                            },
                        },
                        userIntent: {
                            initial: "booting",
                            states: {
                                booting: { on: { NEXT_STEP: { target: "clicked", actions: "trackContinue" } } },
                                clicked: { type: "final" },
                            },
                        },
                    },
                    onDone: { target: "#idCapture.capture" },
                },
                ready: { on: { NEXT_STEP: { target: "waitingForPermission", actions: "trackContinue" } } },
                waitingForPermission: {
                    invoke: {
                        id: "checkPermissionWaiting",
                        src: "checkPermission",
                        onDone: [
                            {
                                target: "#idCapture.capture",
                                guard: "isPermissionGranted",
                                actions: (0, l.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                            {
                                target: "#idCapture.permissions",
                                actions: (0, l.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                        ],
                    },
                },
            },
        },
        permissions: {
            entry: "preloadRecordingProvider",
            initial: "idle",
            states: {
                idle: {
                    invoke: {
                        id: "checkPermissionIdle",
                        src: "checkPermission",
                        onDone: [
                            {
                                target: "#idCapture.capture",
                                guard: "isPermissionGranted",
                                actions: (0, l.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                            {
                                target: "denied",
                                guard: ({ event: e }) => "denied" === e.output,
                                actions: (0, l.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                            {
                                target: "waitingForUser",
                                actions: (0, l.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                        ],
                        onError: { target: "waitingForUser", actions: (0, l.r)({ permissionResult: () => "prompt" }) },
                    },
                    on: { REQUEST_PERMISSION: "requesting", GO_TO_LEARN_MORE: "learnMore" },
                },
                waitingForUser: { on: { REQUEST_PERMISSION: "requesting", GO_TO_LEARN_MORE: "learnMore" } },
                learnMore: { on: { BACK: "idle", REQUEST_PERMISSION: "requesting" } },
                requesting: {
                    invoke: {
                        id: "requestPermission",
                        src: "requestPermission",
                        input: ({ context: e }) => ({ requestMotionPermission: !0 === e.config.ds }),
                        onDone: [
                            {
                                target: "#idCapture.capture",
                                guard: "isPermissionGranted",
                                actions: (0, l.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                            {
                                target: "denied",
                                guard: ({ event: e }) => "denied" === e.output,
                                actions: (0, l.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                            { target: "idle", actions: (0, l.r)({ permissionResult: ({ event: e }) => e.output }) },
                        ],
                        onError: { target: "denied" },
                    },
                },
                denied: { entry: (0, l.r)({ permissionResult: () => "refresh" }) },
            },
        },
        capture: {
            initial: "checkingStream",
            entry: ["trackCameraId", "preloadRecordingProvider"],
            exit: ["stopMediaRecording", "clearRecordingSession"],
            on: { SET_FRAME_RECT: { actions: "setFrameRect" } },
            states: {
                checkingStream: {
                    always: [
                        { target: "initializingDeepsight", guard: "needsDeepsightInit" },
                        { target: "detecting", guard: "hasStream" },
                        { target: "initializing" },
                    ],
                },
                initializingDeepsight: {
                    invoke: {
                        id: "initDeepsightCapture",
                        src: "initializeDeepsightSession",
                        input: ({ context: e }) => ({
                            ds: e.config.ds,
                            dependencies: e.dependencies,
                            disableIpify: e.disableIpify,
                        }),
                        onDone: {
                            target: "checkingStream",
                            actions: (0, l.r)({
                                deepsightService: ({ event: e }) => e.output,
                                deepsightInitAttempted: () => !0,
                            }),
                        },
                        onError: {
                            target: "checkingStream",
                            actions: [
                                (0, l.r)({ deepsightInitAttempted: () => !0 }),
                                () => console.warn("Deepsight initialization failed in capture"),
                            ],
                        },
                    },
                },
                initializing: {
                    invoke: {
                        id: "initializeCamera",
                        src: "initializeCamera",
                        input: ({ context: e }) => ({ config: e.config, deepsightService: e.deepsightService }),
                        onDone: { target: "detecting", actions: "setStreamAndCapturer" },
                        onError: [
                            {
                                target: "#idCapture.permissions",
                                guard: "isPermissionDeniedError",
                                actions: (0, l.r)({ permissionResult: () => "denied" }),
                            },
                            {
                                target: "#idCapture.error",
                                actions: (0, l.r)({ error: ({ event: e }) => String(e.error) }),
                            },
                        ],
                    },
                },
                detecting: {
                    always: [
                        {
                            target: "manualCaptureWaiting",
                            guard: ({ context: e }) => e.manualCaptureTriggered,
                            actions: (0, l.r)({ detectionStatus: () => "manualCapture" }),
                        },
                    ],
                    entry: [(0, l.r)({ detectionStatus: () => "detecting" })],
                    invoke: [
                        {
                            id: "startRecording",
                            src: "startRecording",
                            input: ({ context: e }) => ({
                                config: e.config,
                                stream: e.stream,
                                existing: e.recordingSession,
                                currentMode: e.currentMode,
                            }),
                            onDone: {
                                actions: (0, l.r)({
                                    recordingSession: ({ context: e, event: t }) => t.output ?? e.recordingSession,
                                }),
                            },
                            onError: { actions: () => void 0 },
                        },
                        {
                            id: "runDetection",
                            src: "runDetection",
                            input: ({ context: e }) => ({
                                frameCapturer: e.frameCapturer,
                                provider: e.provider,
                                config: e.config,
                                currentMode: e.currentMode,
                                detectionArea: e.detectionArea ?? e.config.detectionArea,
                            }),
                        },
                    ],
                    on: {
                        DETECTION_UPDATE: { actions: "setDetectionStatus" },
                        DETECTION_FRAME: { actions: (0, l.r)({ debugFrame: ({ event: e }) => e.frame }) },
                        DETECTION_RESET_READY: { actions: (0, l.r)({ resetDetection: ({ event: e }) => e.reset }) },
                        DETECTION_SUCCESS: {
                            target: "capturing",
                            actions: (0, l.r)({ qualityElements: ({ event: e }) => e.qualityElements }),
                        },
                        MANUAL_CAPTURE: { target: "capturingManual" },
                        SWITCH_TO_MANUAL_CAPTURE: {
                            target: "manualCaptureWaiting",
                            actions: (0, l.r)({
                                detectionStatus: () => "manualCapture",
                                manualCaptureTriggered: () => !0,
                            }),
                        },
                        COUNTER_VALUE_CHANGE: { actions: "setCounterValue" },
                        ID_TYPE_CHANGE: { actions: "setIdType" },
                        ID_SIDE_CHANGE: {
                            actions: (0, l.r)({
                                detectionStatus: ({ event: e, context: t }) =>
                                    (function (e, t) {
                                        let r = t?.toLowerCase() || "",
                                            a = e.currentMode;
                                        if ("wrong" === r) return "wrongSide";
                                        let i = r.includes("back") && !r.includes("front"),
                                            n = r.includes("front") && !r.includes("back");
                                        return ("front" === a && i) || ("back" === a && n)
                                            ? "wrongSide"
                                            : (("front" === a && n) || "back" === a, "detecting");
                                    })(t, e.side),
                            }),
                        },
                        ORIENTATION_CHANGE: { actions: "setOrientation" },
                    },
                },
                manualCaptureWaiting: { on: { MANUAL_CAPTURE: { target: "capturingManual" } } },
                capturing: {
                    entry: ["captureImage", "storeCapturedCanvasInProvider", "storeCapturedImage"],
                    always: [
                        { target: "uploading", guard: "hasCapturedImage" },
                        {
                            target: "uploadError",
                            actions: (0, l.r)(({ context: e }) => ({
                                uploadError: F.UPLOAD_ERROR,
                                attemptsRemaining: e.attemptsRemaining - 1,
                            })),
                        },
                    ],
                },
                capturingManual: {
                    entry: ["captureLatestFrame", "storeCapturedCanvasInProvider", "storeCapturedImage"],
                    always: [
                        { target: "uploading", guard: "hasCapturedImage" },
                        {
                            target: "uploadError",
                            actions: (0, l.r)(({ context: e }) => ({
                                uploadError: F.UPLOAD_ERROR,
                                attemptsRemaining: e.attemptsRemaining - 1,
                            })),
                        },
                    ],
                },
                uploading: {
                    entry: (0, l.r)({ uploadProgress: () => 0 }),
                    invoke: {
                        id: "uploadIdImage",
                        src: "uploadIdImage",
                        input: ({ context: e, self: t }) => {
                            let r = e.provider?.getOriginalCapturedCanvas();
                            if (!r) throw Error(F.UPLOAD_ERROR);
                            return {
                                canvas: r,
                                type: "back" === e.currentMode ? "back" : "front",
                                qualityElements: e.qualityElements,
                                onProgress: (e) => {
                                    t.send({ type: "UPLOAD_PROGRESS", progress: e });
                                },
                                deepsightService: e.deepsightService,
                                stream: e.stream,
                                isSecondId: e.config.isSecondId ?? !1,
                                onlyFront: !1,
                                ageAssurance: e.config.ageAssurance,
                                dependencies: e.dependencies,
                                captureResolution: e.captureResolution,
                                cameraFallbackLevel: e.cameraFallbackLevel,
                                croppedCanvas: e.provider?.getCapturedCanvas() ?? null,
                            };
                        },
                        onDone: {
                            target: "validatingUpload",
                            actions: [
                                (0, l.r)({ uploadResponse: ({ event: e }) => e.output, uploadProgress: () => 100 }),
                                "storeCapturedImage",
                            ],
                        },
                        onError: {
                            target: "uploadError",
                            actions: (0, l.r)(({ context: e, event: t }) => ({
                                uploadError:
                                    (function (e) {
                                        if (e instanceof Error) {
                                            let t = e.message;
                                            return Object.values(F).find((e) => t.includes(e));
                                        }
                                    })(t.error) ?? F.UPLOAD_ERROR,
                                attemptsRemaining: e.attemptsRemaining - 1,
                            })),
                        },
                    },
                    on: { UPLOAD_PROGRESS: { actions: (0, l.r)({ uploadProgress: ({ event: e }) => e.progress }) } },
                },
                validatingUpload: {
                    always: [
                        {
                            target: "uploadError",
                            guard: "hasUploadValidationError",
                            actions: ["setUploadErrorFromUploadValidation", "decrementAttemptsRemaining"],
                        },
                        { target: "#idCapture.finished", guard: (0, l.o)(["shouldSkipProcessId", "isUploadExpired"]) },
                        {
                            target: "#idCapture.expiredExhausted",
                            guard: (0, l.o)(["isNotPassportMode", "isUploadExpired", "isExpiredAttemptsExhausted"]),
                            actions: ["incrementExpiredAttempts", "setExhaustedFromUpload"],
                        },
                        {
                            target: "#idCapture.expired",
                            guard: (0, l.o)(["isNotPassportMode", "isUploadExpired"]),
                            actions: ["incrementExpiredAttempts", "setExpiredFromUpload"],
                        },
                        { target: "success" },
                    ],
                },
                uploadError: {
                    on: {
                        CONTINUE_FROM_ERROR: [
                            {
                                target: "checkingStream",
                                guard: "hasAttemptsRemaining",
                                actions: ["resetDetection", "clearUploadFailure", "clearStreamForRetry"],
                            },
                            {
                                target: "#idCapture.frontFinished",
                                guard: "shouldContinueToBack",
                                actions: ["flagIdManualReview"],
                            },
                            {
                                target: "#idCapture.backFinished",
                                guard: "shouldContinueToFront",
                                actions: ["flagIdManualReview"],
                            },
                            { target: "#idCapture.processing", actions: ["flagIdManualReview"] },
                        ],
                    },
                },
                success: {
                    on: {
                        NEXT_STEP: [
                            { target: "#idCapture.mandatoryConsent", guard: "hasMandatoryConsent" },
                            { target: "#idCapture.frontFinished", guard: "shouldContinueToBack" },
                            { target: "#idCapture.backFinished", guard: "shouldContinueToFront" },
                            { target: "#idCapture.processing" },
                        ],
                    },
                },
            },
        },
        mandatoryConsent: {
            on: {
                CONSENT_ACCEPT: [
                    { target: "frontFinished", guard: "shouldContinueToBack" },
                    { target: "backFinished", guard: "shouldContinueToFront" },
                    { target: "processing" },
                ],
                CONSENT_CANCEL: { target: "closed" },
            },
        },
        frontFinished: {
            entry: ["stopMediaRecording", "resetForBackCapture"],
            type: "parallel",
            states: {
                cameraInit: {
                    initial: "checking",
                    states: {
                        checking: {
                            always: [{ target: "ready", guard: "hasStream" }, { target: "initializingStream" }],
                        },
                        initializingStream: {
                            invoke: {
                                id: "frontFinishedInitCamera",
                                src: "initializeCamera",
                                input: ({ context: e }) => ({ config: e.config, deepsightService: e.deepsightService }),
                                onDone: { target: "ready", actions: "setStreamAndCapturer" },
                                onError: {
                                    target: "ready",
                                    actions: () => {
                                        console.warn("Camera initialization failed during flip transition");
                                    },
                                },
                            },
                        },
                        ready: { type: "final" },
                    },
                },
                userIntent: {
                    initial: "waiting",
                    states: {
                        waiting: {
                            on: {
                                CONTINUE_TO_BACK: {
                                    target: "clicked",
                                    actions: (0, l.r)({ currentMode: () => "back" }),
                                },
                            },
                        },
                        clicked: { type: "final" },
                    },
                },
            },
            onDone: [{ target: "#idCapture.capture.detecting", guard: "hasStream" }, { target: "#idCapture.capture" }],
        },
        backFinished: {
            entry: ["stopMediaRecording", "resetForFrontCapture"],
            type: "parallel",
            states: {
                cameraInit: {
                    initial: "checking",
                    states: {
                        checking: {
                            always: [{ target: "ready", guard: "hasStream" }, { target: "initializingStream" }],
                        },
                        initializingStream: {
                            invoke: {
                                id: "backFinishedInitCamera",
                                src: "initializeCamera",
                                input: ({ context: e }) => ({ config: e.config, deepsightService: e.deepsightService }),
                                onDone: { target: "ready", actions: "setStreamAndCapturer" },
                                onError: {
                                    target: "ready",
                                    actions: () => {
                                        console.warn("Camera initialization failed during flip transition");
                                    },
                                },
                            },
                        },
                        ready: { type: "final" },
                    },
                },
                userIntent: {
                    initial: "waiting",
                    states: {
                        waiting: {
                            on: {
                                CONTINUE_TO_FRONT: {
                                    target: "clicked",
                                    actions: (0, l.r)({ currentMode: () => "front" }),
                                },
                            },
                        },
                        clicked: { type: "final" },
                    },
                },
            },
            onDone: [{ target: "#idCapture.capture.detecting", guard: "hasStream" }, { target: "#idCapture.capture" }],
        },
        processing: {
            entry: "stopMediaStream",
            always: [{ target: "finished", guard: "shouldSkipProcessId" }],
            invoke: {
                id: "processId",
                src: "processId",
                input: ({ context: e }) => ({ isSecondId: e.config.isSecondId ?? !1 }),
                onDone: [
                    { target: "finished", guard: "forceFinishAfterProcessing" },
                    {
                        target: "expiredExhausted",
                        guard: (0, l.o)([({ event: e }) => e.output.isDocumentExpired, "isProcessingExpiredExhausted"]),
                        actions: ["incrementProcessingExpiredAttempts"],
                    },
                    {
                        target: "expired",
                        guard: ({ event: e }) => e.output.isDocumentExpired,
                        actions: ["incrementProcessingExpiredAttempts", "clearExpiredFromUpload"],
                    },
                    { target: "finished" },
                ],
                onError: { target: "finished" },
            },
        },
        expired: {
            on: {
                RETRY_CAPTURE: [
                    {
                        target: "#idCapture.capture",
                        guard: "wasExpiredFromUpload",
                        actions: ["resetDetection", "clearExpiredFromUpload", "clearUploadFailure"],
                    },
                    { target: "chooser", guard: "hasShowDocumentChooser", actions: ["resetContext"] },
                    { target: "ageVerification", guard: "hasAgeAssurance", actions: "resetContext" },
                    { target: "tutorial", guard: "hasShowTutorial", actions: "resetContext" },
                    { target: "loading", actions: "resetContext" },
                ],
            },
        },
        expiredExhausted: {
            on: {
                CONTINUE_EXHAUSTED: [
                    {
                        target: "#idCapture.frontFinished",
                        guard: "shouldForceBackOnExpired",
                        actions: ["setSkipProcessId"],
                    },
                    {
                        target: "#idCapture.processing",
                        guard: "shouldProcessAfterExhaustion",
                        actions: ["setForceFinishAfterProcessing"],
                    },
                    { target: "#idCapture.finished", actions: ["setSkipProcessId"] },
                ],
            },
        },
        finished: {
            entry: ["stopMediaRecording", "stopMediaStream", "disposeProvider", "cleanupDeepsight"],
            type: "final",
        },
        closed: { entry: ["stopMediaStream", "disposeProvider", "cleanupDeepsight"], type: "final" },
        error: {
            entry: ["stopMediaStream", "disposeProvider", "cleanupDeepsight"],
            on: { RESET: { target: "idle", actions: "resetContext" } },
        },
        manualIdUpload: {
            invoke: {
                id: "manualIdUpload",
                src: "manualUploadMachine",
                input: ({ context: e }) => ({
                    isSecondId: e.config.isSecondId ?? !1,
                    onlyFront: !1,
                    captureAttempts: e.config.captureAttempts,
                }),
                onSnapshot: { actions: () => {} },
                onDone: [
                    { guard: "isManualUploadExhausted", target: "#idCapture.finished" },
                    { target: "#idCapture.processing" },
                ],
                onError: {
                    target: "#idCapture.error",
                    actions: (0, l.r)({ error: ({ event: e }) => String(e.error) }),
                },
            },
            on: {
                QUIT: { target: "closed" },
                MANUAL_UPLOAD_TAB_CHANGED: { actions: (0, l.n)("manualIdUpload", ({ event: e }) => e) },
                MANUAL_UPLOAD_FILE_SELECTED: { actions: (0, l.n)("manualIdUpload", ({ event: e }) => e) },
                MANUAL_UPLOAD_CONTINUE: { actions: (0, l.n)("manualIdUpload", ({ event: e }) => e) },
                MANUAL_UPLOAD_RESET: { actions: (0, l.n)("manualIdUpload", ({ event: e }) => e) },
            },
        },
        digitalIdUpload: {
            invoke: {
                id: "digitalIdUpload",
                src: "digitalUploadMachine",
                input: ({ context: e }) => ({
                    showTutorial: e.config.showTutorial,
                    captureAttempts: e.config.captureAttempts,
                }),
                onSnapshot: { actions: () => {} },
                onDone: [
                    { guard: "isDigitalUploadExhausted", target: "#idCapture.finished" },
                    { guard: "isDigitalUploadClosed", target: "#idCapture.chooser" },
                    {
                        guard: "isDigitalUploadSuccessful",
                        target: "#idCapture.processing",
                        actions: ["storeDigitalUploadResponse"],
                    },
                    {
                        target: "#idCapture.error",
                        actions: (0, l.r)({ error: () => "Digital upload finished without output" }),
                    },
                ],
                onError: {
                    target: "#idCapture.error",
                    actions: (0, l.r)({ error: ({ event: e }) => String(e.error) }),
                },
            },
            on: {
                QUIT: { target: "closed" },
                DIGITAL_UPLOAD_NEXT_STEP: { actions: (0, l.n)("digitalIdUpload", { type: "NEXT_STEP" }) },
                DIGITAL_UPLOAD_FILE_PICKED: {
                    actions: (0, l.n)("digitalIdUpload", ({ event: e }) => ({ type: "FILE_PICKED", file: e.file })),
                },
                DIGITAL_UPLOAD_CONFIRM: { actions: (0, l.n)("digitalIdUpload", { type: "CONFIRM" }) },
                DIGITAL_UPLOAD_REPLACE: { actions: (0, l.n)("digitalIdUpload", { type: "REPLACE" }) },
                DIGITAL_UPLOAD_RETRY: { actions: (0, l.n)("digitalIdUpload", { type: "RETRY" }) },
                DIGITAL_UPLOAD_SCAN_INSTEAD: { actions: (0, l.n)("digitalIdUpload", { type: "SCAN_INSTEAD" }) },
                DIGITAL_UPLOAD_CHOOSE_ANOTHER: { actions: (0, l.n)("digitalIdUpload", { type: "CHOOSE_ANOTHER" }) },
            },
        },
    },
});
function ed(e) {
    let { context: t } = e;
    if (e.matches("idle")) return { status: "idle" };
    if (
        e.matches({ capture: "checkingStream" }) ||
        e.matches({ capture: "initializingDeepsight" }) ||
        e.matches({ capture: "initializing" }) ||
        e.matches({ permissions: "idle" })
    )
        return { status: "loading" };
    if (e.matches("chooser")) return { status: "chooser", availableDocumentTypes: t.availableDocumentTypes };
    if (e.matches("loading")) return { status: "loading" };
    if (e.matches("tutorial"))
        return { status: "tutorial", selectedDocumentType: t.selectedDocumentType, currentMode: t.currentMode };
    if (e.matches("ageVerification")) return { status: "ageVerification" };
    if (e.matches("closed")) return { status: "closed" };
    if (e.matches("permissions")) {
        let t = (function (e) {
            if (e.matches("permissions")) {
                if (e.matches({ permissions: "idle" }) || e.matches({ permissions: "waitingForUser" })) return "idle";
                if (e.matches({ permissions: "learnMore" })) return "learnMore";
                if (e.matches({ permissions: "requesting" })) return "requesting";
                if (e.matches({ permissions: "denied" })) return "denied";
            }
        })(e);
        return void 0 === t
            ? { status: "permissions", permissionStatus: "idle" }
            : { status: "permissions", permissionStatus: t };
    }
    if (e.matches("capture"))
        return (function (e, t) {
            var r, a;
            let i,
                n =
                    ((i = {
                        initializing: e.matches({ capture: "initializing" }),
                        detecting: e.matches({ capture: "detecting" }),
                        manualCaptureWaiting: e.matches({ capture: "manualCaptureWaiting" }),
                        capturing: e.matches({ capture: "capturing" }),
                        capturingManual: e.matches({ capture: "capturingManual" }),
                        uploading: e.matches({ capture: "uploading" }),
                        uploadError: e.matches({ capture: "uploadError" }),
                        success: e.matches({ capture: "success" }),
                    }).initializing
                        ? "initializing"
                        : i.detecting || i.manualCaptureWaiting
                          ? "detecting"
                          : i.capturing || i.capturingManual
                            ? "capturing"
                            : i.uploading
                              ? "uploading"
                              : i.uploadError
                                ? "uploadError"
                                : i.success
                                  ? "success"
                                  : void 0) ?? "initializing",
                { uploadError: o, uploadResponse: s } = t;
            return {
                status: "capture",
                captureStatus: n,
                stream: t.stream,
                detectionStatus: t.detectionStatus,
                debugFrame: void 0,
                attemptsRemaining: t.attemptsRemaining,
                uploadError: o,
                currentMode: t.currentMode,
                counterValue: t.counterValue,
                orientation: t.orientation,
                idType: t.idType,
                previewImageUrl: t.previewImageUrl,
                uploadProgress: t.uploadProgress ?? 0,
                ageAssurance: !0 === t.config.ageAssurance,
                uploadErrorMessage: o
                    ? ((r = t.currentMode),
                      o
                          ? "CLASSIFICATION_FAILED" === o
                              ? "passport" === r
                                  ? "idv2.capture.processing.errors.classification.titlePassport"
                                  : "idv2.capture.processing.errors.classification.title"
                              : {
                                    UPLOAD_ERROR: "idv2.capture.processing.errors.upload.title",
                                    CLASSIFICATION_FAILED: "idv2.capture.processing.errors.classification.title",
                                    LOW_SHARPNESS: "idv2.capture.processing.errors.sharpness.title",
                                    GLARE_DETECTED: "idv2.capture.processing.errors.glare.title",
                                    WRONG_DOCUMENT_SIDE: "idv2.capture.processing.errors.wrongSide.title",
                                    ID_TYPE_UNACCEPTABLE: "idv2.capture.processing.errors.unacceptable.title",
                                    READABILITY_ISSUE: "idv2.capture.processing.errors.readability.title",
                                    RETRY_EXHAUSTED_CONTINUE_TO_BACK: "idv2.capture.processing.errors.default.title",
                                    RETRY_EXHAUSTED_SKIP_BACK: "idv2.capture.processing.errors.default.title",
                                    NO_MORE_TRIES: "idv2.capture.processing.errors.default.title",
                                    UNEXPECTED_ERROR: "idv2.capture.processing.errors.default.title",
                                    NO_TOKEN: "idv2.capture.processing.errors.default.title",
                                    PERMISSION_DENIED: "idv2.capture.processing.errors.default.title",
                                    USER_CANCELLED: "idv2.capture.processing.errors.default.title",
                                    SERVER_ERROR: "idv2.capture.processing.errors.default.title",
                                }[o]
                          : void 0)
                    : void 0,
                uploadErrorDescription: o
                    ? ((a = t.currentMode),
                      o
                          ? "WRONG_DOCUMENT_SIDE" === o
                              ? s?.side === "back"
                                  ? "idv2.capture.processing.errors.wrongSide.back.subtitle"
                                  : "idv2.capture.processing.errors.wrongSide.front.subtitle"
                              : "CLASSIFICATION_FAILED" === o
                                ? "passport" === a
                                    ? "idv2.capture.processing.errors.classification.subtitlePassport"
                                    : "idv2.capture.processing.errors.classification.subtitle"
                                : {
                                      UPLOAD_ERROR: "idv2.capture.processing.errors.upload.subtitle",
                                      CLASSIFICATION_FAILED: "idv2.capture.processing.errors.classification.subtitle",
                                      LOW_SHARPNESS: "idv2.capture.processing.errors.sharpness.subtitle",
                                      GLARE_DETECTED: "idv2.capture.processing.errors.glare.subtitle",
                                      WRONG_DOCUMENT_SIDE: "idv2.capture.processing.errors.wrongSide.front.subtitle",
                                      ID_TYPE_UNACCEPTABLE: "idv2.capture.processing.errors.unacceptable.subtitle",
                                      READABILITY_ISSUE: "idv2.capture.processing.errors.readability.subtitle",
                                      RETRY_EXHAUSTED_CONTINUE_TO_BACK:
                                          "idv2.capture.processing.errors.default.subtitle",
                                      RETRY_EXHAUSTED_SKIP_BACK: "idv2.capture.processing.errors.default.subtitle",
                                      NO_MORE_TRIES: "idv2.capture.processing.errors.default.subtitle",
                                      UNEXPECTED_ERROR: "idv2.capture.processing.errors.default.subtitle",
                                      NO_TOKEN: "idv2.capture.processing.errors.default.subtitle",
                                      PERMISSION_DENIED: "idv2.capture.processing.errors.default.subtitle",
                                      USER_CANCELLED: "idv2.capture.processing.errors.default.subtitle",
                                      SERVER_ERROR: "idv2.capture.processing.errors.default.subtitle",
                                  }[o]
                          : void 0)
                    : void 0,
                needsBackCapture: (function (e) {
                    if (
                        e.isDigitalUpload ||
                        ("front" !== e.currentMode && "passport" !== e.currentMode) ||
                        e.config.onlyBack ||
                        (e.config.usSmartCapture && "front" === e.currentMode)
                    )
                        return !1;
                    let t = e.uploadResponse?.skipBackIdCapture === !0,
                        r = !0 === e.config.alwaysCaptureBackOfId && "passport" !== e.currentMode;
                    return !t || r;
                })(t),
                needsFrontCapture:
                    !0 === t.config.usSmartCapture &&
                    "back" === t.currentMode &&
                    t.uploadResponse?.forceFrontIdCapture === !0,
                showCaptureButtonInAuto: t.config.showCaptureButtonInAuto ?? !1,
                canRetry: t.attemptsRemaining > 0,
            };
        })(e, t);
    if (e.matches("mandatoryConsent"))
        return { status: "mandatoryConsent", regulationType: t.uploadResponse?.regulationType ?? "Other" };
    if (e.matches("frontFinished")) return { status: "frontFinished" };
    if (e.matches("backFinished")) return { status: "backFinished" };
    if (e.matches("processing")) return { status: "processing" };
    if (e.matches("expiredExhausted")) return { status: "expiredExhausted" };
    if (e.matches("expired")) {
        let e = t.expiredFromUpload ? t.expiredAttempts : t.processingExpiredAttempts;
        return { status: "expired", attemptsRemaining: Math.max(0, t.config.captureAttempts - e) };
    }
    if (e.matches("finished")) return { status: "finished" };
    if (e.matches("error")) return { status: "error", error: t.error ?? "Unknown error" };
    if (e.matches("manualIdUpload"))
        return (function (e) {
            let { config: t } = e.context,
                r = e.children.manualIdUpload?.getSnapshot(),
                a = r?.context,
                i = r?.value,
                n = (a?.backUploaded ?? !1) || (a?.skipBackFromServer ?? !1),
                o = (a?.frontUploaded ?? !1) && n,
                s = a?.activeTab === "id" ? o : (a?.passportUploaded ?? !1);
            return {
                status: "manualUpload",
                phase:
                    "retriesExhausted" === i
                        ? "exhausted"
                        : "uploadingFront" === i || "uploadingBack" === i || "uploadingPassport" === i
                          ? "uploading"
                          : "selecting",
                uploadingSide:
                    "uploadingFront" === i
                        ? "front"
                        : "uploadingBack" === i
                          ? "back"
                          : "uploadingPassport" === i
                            ? "passport"
                            : void 0,
                activeTab: a?.activeTab ?? "id",
                showIdTab: t.enableId ?? !0,
                showPassportTab: t.enablePassport ?? !1,
                showBackSlot: !0,
                frontFileName: a?.frontFile?.name,
                backFileName: a?.backFile?.name,
                passportFileName: a?.passportFile?.name,
                frontUploaded: a?.frontUploaded ?? !1,
                backUploaded: n,
                passportUploaded: a?.passportUploaded ?? !1,
                canContinue: s,
                retriesLeft: a?.retriesLeft ?? e.context.config.captureAttempts,
                errorKey: a?.errorMessage ?? null,
            };
        })(e);
    if (e.matches("digitalIdUpload")) {
        let t, r, a;
        return (
            (t = e.children.digitalIdUpload?.getSnapshot()),
            (r = t?.context),
            {
                status: "digitalIdUpload",
                phase:
                    "tutorial" === (a = t?.value)
                        ? "tutorial"
                        : "selecting" === a
                          ? "selecting"
                          : "reviewing" === a
                            ? "reviewing"
                            : "success" === a
                              ? "success"
                              : "error" === a
                                ? "error"
                                : "fileTooLarge" === a
                                  ? "fileTooLarge"
                                  : "retriesExhausted" === a
                                    ? "exhausted"
                                    : t?.matches({ uploading: "holding" })
                                      ? "holding"
                                      : t?.matches({ uploading: "analyzing" })
                                        ? "uploading"
                                        : "selecting",
                file: r?.file ?? null,
                fileName: r?.file?.name,
                failReason: r?.failReason ?? null,
                attemptsRemaining: r?.attemptsRemaining ?? e.context.config.captureAttempts,
                uploadProgress: r?.uploadProgress ?? 0,
                pickerRequestId: r?.pickerRequestId ?? 0,
            }
        );
    }
    return { status: "idle" };
}
function el({ actor: e, trackElementClicked: t, trackCaptureAttemptFinished: r }) {
    let a = e.getSnapshot();
    return (
        a.context.dependencies && (a.context.dependencies.trackCaptureAttemptFinished = r),
        {
            load() {
                e.send({ type: "LOAD" });
            },
            selectDocument(r) {
                t?.(`selectDocument.${r}`), e.send({ type: "SELECT_DOCUMENT", documentType: r });
            },
            nextStep() {
                t?.("nextStep"), e.send({ type: "NEXT_STEP" });
            },
            requestPermission() {
                t?.("requestPermission"), e.send({ type: "REQUEST_PERMISSION" });
            },
            goToLearnMore() {
                t?.("goToLearnMore"), e.send({ type: "GO_TO_LEARN_MORE" });
            },
            back() {
                t?.("back"), e.send({ type: "BACK" });
            },
            close() {
                t?.("close"), e.send({ type: "QUIT" });
            },
            reset() {
                e.send({ type: "RESET" });
            },
            retryCapture() {
                t?.("retryCapture"), e.send({ type: "RETRY_CAPTURE" });
            },
            continueExhausted() {
                t?.("continueExhausted"), e.send({ type: "CONTINUE_EXHAUSTED" });
            },
            continueFromError() {
                t?.("continueFromError"), e.send({ type: "CONTINUE_FROM_ERROR" });
            },
            capture() {
                t?.("capture"), e.send({ type: "MANUAL_CAPTURE" });
            },
            switchToManualCapture() {
                t?.("switchToManualCapture"), e.send({ type: "SWITCH_TO_MANUAL_CAPTURE" });
            },
            continueToBack() {
                t?.("continueToBack"), e.send({ type: "CONTINUE_TO_BACK" });
            },
            continueToFront() {
                t?.("continueToFront"), e.send({ type: "CONTINUE_TO_FRONT" });
            },
            skipBack() {
                t?.("skipBack"), e.send({ type: "SKIP_BACK" });
            },
            acceptMandatoryConsent() {
                t?.("acceptMandatoryConsent"), e.send({ type: "CONSENT_ACCEPT" });
            },
            cancelMandatoryConsent() {
                t?.("cancelMandatoryConsent"), e.send({ type: "CONSENT_CANCEL" });
            },
            updateDetectionArea(t) {
                e.send({ type: "UPDATE_DETECTION_AREA", detectionArea: t });
            },
            manualUploadChangeTab(r) {
                t?.(`manualUpload.tab.${r}`), e.send({ type: "MANUAL_UPLOAD_TAB_CHANGED", tab: r });
            },
            manualUploadSelectFile(r, a) {
                t?.(`manualUpload.select.${r}`), e.send({ type: "MANUAL_UPLOAD_FILE_SELECTED", side: r, file: a });
            },
            manualUploadContinue() {
                t?.("manualUpload.continue"), e.send({ type: "MANUAL_UPLOAD_CONTINUE" });
            },
            manualUploadReset() {
                t?.("manualUpload.reset"), e.send({ type: "MANUAL_UPLOAD_RESET" });
            },
            digitalUploadNextStep() {
                t?.("digitalUpload.nextStep"), e.send({ type: "DIGITAL_UPLOAD_NEXT_STEP" });
            },
            digitalUploadPickFile(r) {
                t?.("digitalUpload.pickFile"), e.send({ type: "DIGITAL_UPLOAD_FILE_PICKED", file: r });
            },
            digitalUploadConfirm() {
                t?.("digitalUpload.confirmFile"), e.send({ type: "DIGITAL_UPLOAD_CONFIRM" });
            },
            digitalUploadReplace() {
                t?.("digitalUpload.replaceFile"), e.send({ type: "DIGITAL_UPLOAD_REPLACE" });
            },
            digitalUploadRetry() {
                t?.("digitalUpload.retry"), e.send({ type: "DIGITAL_UPLOAD_RETRY" });
            },
            digitalUploadScanInstead() {
                t?.("digitalUpload.scanInstead"), e.send({ type: "DIGITAL_UPLOAD_SCAN_INSTEAD" });
            },
            digitalUploadChooseAnother() {
                t?.("digitalUpload.chooseAnother"), e.send({ type: "DIGITAL_UPLOAD_CHOOSE_ANOTHER" });
            },
        }
    );
}
let eu = {
        tutorial: "idCapture.tutorial.front",
        capturePrefix: "idCapture.frontCapture",
        analyzingPrefix: "idCapture.frontAnalyzing",
        errorPrefix: "idCapture.frontCaptureError",
        successPrefix: "idCapture.frontCaptureSuccess",
        liveCueSide: "showfront",
    },
    ec = {
        tutorial: "idCapture.tutorial.back",
        capturePrefix: "idCapture.backCapture",
        analyzingPrefix: "idCapture.backAnalyzing",
        errorPrefix: "idCapture.backCaptureError",
        successPrefix: "idCapture.backCaptureSuccess",
        liveCueSide: "showback",
    },
    ep = { tutorial: "idCapture.tutorial.passport" };
function eg(e, t) {
    switch (t) {
        case "wrongSide":
            return `${e.capturePrefix}.livecue-${e.liveCueSide}`;
        case "blur":
            return `${e.capturePrefix}.livecue-blur`;
        case "farAway":
        case "idNotDetected":
            return `${e.capturePrefix}.livecue-align`;
        case "glare":
            return `${e.capturePrefix}.livecue-glare`;
        case "offline":
            return `${e.capturePrefix}.livecue-dark`;
        case "manualCapture":
            return `${e.capturePrefix}.manual`;
        case "capturing":
            return `${e.capturePrefix}.takingphoto`;
        default:
            return `${e.capturePrefix}.default`;
    }
}
function em(e, t) {
    switch (t) {
        case "WRONG_DOCUMENT_SIDE":
            return `${e.errorPrefix}.wrongside`;
        case "GLARE_DETECTED":
            return `${e.errorPrefix}.glare`;
        case "LOW_SHARPNESS":
            return `${e.errorPrefix}.blur`;
        case "READABILITY_ISSUE":
            return `${e.errorPrefix}.notreadable`;
        case "ID_TYPE_UNACCEPTABLE":
        case "CLASSIFICATION_FAILED":
            return `${e.errorPrefix}.notaccepted`;
        case "RETRY_EXHAUSTED_CONTINUE_TO_BACK":
        case "RETRY_EXHAUSTED_SKIP_BACK":
        case "NO_MORE_TRIES":
            return `${e.errorPrefix}.failedExhausted`;
        case "NO_TOKEN":
        case "SERVER_ERROR":
            return `${e.errorPrefix}.nointernet`;
        default:
            return `${e.errorPrefix}.failed`;
    }
}
function eE(e, t) {
    let { config: r } = e.context;
    return r?.onlyBack === !0 || r?.showCaptureButtonInAuto === !0
        ? `${t.successPrefix}.captureonly`
        : `${t.successPrefix}.default`;
}
function ef(e) {
    return (function (e) {
        let { value: t, context: r } = e;
        if (null == t) return;
        let a = "string" == typeof t ? t : "object" == typeof t ? Object.keys(t)[0] : void 0;
        if (void 0 === a) return;
        let i = "back" === (n = r.currentMode) ? ec : "passport" === n ? { ...eu, ...ep } : eu;
        switch (a) {
            case "idle":
            case "loading":
                return "idCapture.loader.default";
            case "chooser":
                return "idCapture.documentchooser";
            case "tutorial":
                return i.tutorial;
            case "ageVerification":
                return "idCapture.tutorial.ageverification";
            case "permissions":
                var n;
                if ("object" != typeof t || null === t) return "idCapture.permissions.default";
                switch (t.permissions) {
                    case "requesting":
                        return "idCapture.permissions.required";
                    case "denied":
                        return "idCapture.permissions.quit";
                    case "learnMore":
                        return "idCapture.commonissues.default";
                    default:
                        return "idCapture.permissions.default";
                }
            case "capture":
                return (function (e, t) {
                    let { value: r, context: a } = e;
                    if ("object" != typeof r || null === r) return;
                    let i = r.capture;
                    if (void 0 !== i) {
                        if ("string" == typeof i)
                            switch (i) {
                                case "checkingStream":
                                case "initializing":
                                case "initializingDeepsight":
                                    return "idCapture.loader.preparingcamera";
                                case "detecting":
                                    return eg(t, a.detectionStatus);
                                case "manualCaptureWaiting":
                                case "capturingManual":
                                    return `${t.capturePrefix}.manual`;
                                case "capturing":
                                    return `${t.capturePrefix}.takingphoto`;
                                case "uploading":
                                case "validatingUpload":
                                    return `${t.analyzingPrefix}.uploading`;
                                case "uploadError":
                                    return em(t, a.uploadError);
                                case "success":
                                    return eE(e, t);
                            }
                        if ("object" == typeof i && null !== i) {
                            let r = Object.keys(i);
                            if (
                                r.includes("checkingStream") ||
                                r.includes("initializing") ||
                                r.includes("initializingDeepsight")
                            )
                                return "idCapture.loader.preparingcamera";
                            if (r.includes("detecting")) return eg(t, a.detectionStatus);
                            if (r.includes("manualCaptureWaiting")) return `${t.capturePrefix}.manual`;
                            if (r.includes("capturing")) return `${t.capturePrefix}.takingphoto`;
                            if (r.includes("capturingManual")) return `${t.capturePrefix}.manual`;
                            if (r.includes("uploading") || r.includes("validatingUpload"))
                                return `${t.analyzingPrefix}.uploading`;
                            if (r.includes("uploadError")) return em(t, a.uploadError);
                            if (r.includes("success")) return eE(e, t);
                        }
                        return `${t.capturePrefix}.default`;
                    }
                })(e, i);
            case "mandatoryConsent":
                return "idCapture.mandatoryConsent";
            case "frontFinished":
                return "idCapture.flipid.showback";
            case "backFinished":
                return "idCapture.flipid.showfront";
            case "processing":
                return `${i.analyzingPrefix}.processing`;
            case "expired":
                return "idCapture.expired";
            case "expiredExhausted":
                return "idCapture.expiredExhausted";
            case "finished":
                return "idCapture.finished";
            case "closed":
                return "idCapture.closed";
            case "error":
                return "idCapture.error";
            case "digitalIdUpload": {
                let t = e.children.digitalIdUpload?.getSnapshot(),
                    r = t?.context;
                var o = t?.value,
                    s = r?.failReason ?? null;
                if ("tutorial" === o) return "uploadDigitalid.tutorial.default";
                if ("selecting" === o || "reviewing" === o) return "uploadDigitalid.review.default";
                if (
                    "uploading" === o ||
                    (function (e) {
                        if ("holding" === e) return !0;
                        if ("object" != typeof e || null === e) return !1;
                        let t = e.uploading;
                        return (
                            "holding" === t ||
                            ("object" == typeof t && null !== t && Object.prototype.hasOwnProperty.call(t, "holding"))
                        );
                    })(o)
                )
                    return "uploadDigitalid.analyzing.default";
                if ("success" === o) return "uploadDigitalid.success.default";
                if ("fileTooLarge" === o) return "uploadDigitalid.error.filetoolarge";
                if ("error" === o)
                    return null !== s && v.has(s)
                        ? "uploadDigitalid.error.notaccepted"
                        : "uploadDigitalid.error.default";
                return "uploadDigitalid.review.default";
            }
            default:
                return `idCapture.${a}`;
        }
    })(e);
}
function eh(e) {
    let t = e.context.uploadError;
    if (void 0 !== t) return { errorCode: t };
}
function eC(e) {
    var t;
    let r;
    return (
        (r = e.dependencies ?? { storage: new u.t() }),
        (t = (0, l.s)(es, { input: { config: e.config, dependencies: r } }).start()),
        (0, l.c)({
            actor: t,
            mapState: ed,
            createApi: el,
            instrumentation: (0, o.o)(o.n.idCapture, { getEventScreenName: ef, getErrorPayload: eh }),
        })
    );
}
async function eI(e, t) {
    let r = e.canvas;
    if (!r) throw Error(F.UPLOAD_ERROR);
    let a = r.getImageData() ?? void 0,
        i = "";
    if (e.deepsightService && a)
        try {
            if ((await e.deepsightService.analyzeFrame(a), t.aborted)) throw new DOMException("Aborted", "AbortError");
            i = e.deepsightService.getMetadata();
        } catch (e) {
            if (e?.name === "AbortError") throw e;
        }
    let n = r.getBase64Image() ?? "";
    r.updateBlob();
    let o = r.getBlobData();
    if (!o) throw Error(F.UPLOAD_ERROR);
    return {
        imageBase64: n,
        blob: o.blob,
        url: o.url,
        metadata: i,
        croppedImage: (function (e) {
            if (!e) return;
            e.updateBlob();
            let t = e.getBlobData();
            if (!t) return;
            let r = e.getBase64Image() ?? "";
            if (r) return { imageBase64: r, blob: t.blob, url: t.url };
        })(e.croppedCanvas ?? null),
    };
}
r(850696),
    es.provide({
        actors: {
            uploadIdImage: (0, l.a)(async ({ input: e, signal: t }) => await eI(e, t)),
            processId: (0, l.a)(async () => ({ isDocumentExpired: !1 })),
            startRecording: (0, l.a)(async () => void 0),
        },
        actions: {
            storeCapturedImage: (0, l.r)(({ context: e, event: t }) => {
                if (!("output" in t) || !e.currentMode) return { captureOnlyImages: e.captureOnlyImages };
                let r = t.output,
                    a = "back" === e.currentMode ? "back" : "front";
                return { captureOnlyImages: { ...e.captureOnlyImages, [a]: r } };
            }),
        },
        guards: {
            hasUploadValidationError: () => !1,
            shouldContinueToBack: ({ context: e }) =>
                ("front" === e.currentMode || "passport" === e.currentMode) &&
                !e.config.onlyFront &&
                !e.config.onlyBack &&
                !e.config.usSmartCapture,
        },
    });
