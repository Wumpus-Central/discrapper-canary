d.d(t, { p_: () => lI, idCaptureMachine: () => lh }), d(987800);
var i = d(871178),
    e = d(768672),
    c = d(368499),
    a = d(288052),
    s = d(599078),
    n = d(943956);
d(28134);
var Z = d(749378);
d(768816), d(806374);
var b = d(168056);
d(769308);
var m = d(655586);
d(395751);
var o = d(248051);
d(305463);
var u = d(166953),
    h = d(309370);
d(550155);
var W = d(117589),
    G = d(713692);
d(825123);
var p = d(827029);
d(405479);
var N = d(517666);
d(77254);
var M = d(235582),
    X = d(659750),
    r = d(616533);
d(252560), d(861654);
var y = d(877522);
let Y = new Set(["DIGITAL_ID_REQUESTED_BUT_OTHER_PROVIDED", "ID_TYPE_UNACCEPTABLE"]);
function T(l) {
    if (!l) return null;
    let { failReason: t } = l;
    if ("string" == typeof t && t.length > 0)
        return "DIGITAL_ID_REQUESTED_BUT_OTHER_PROVIDED" === t ||
            "ID_TYPE_UNACCEPTABLE" === t ||
            "FILE_CHANGED_ERROR" === t ||
            "NETWORK_ERROR" === t ||
            "GENERIC" === t
            ? t
            : "GENERIC";
    return (null != l.acceptedDocuments && l.acceptedDocuments.length > 0) || !1 === l.classification
        ? "ID_TYPE_UNACCEPTABLE"
        : !1 === l.success
          ? "GENERIC"
          : null;
}
let V = "/omni/add/front-id";
async function L(l) {
    let { file: t, signal: d, onProgress: i, extractIdFace: c } = l,
        a = { idType: "DigitalId" };
    !1 === c && (a.extractIdFace = !1);
    let s = await e.t.post(V, t, {
        query: a,
        headers: { "Content-Type": t.type || "application/pdf" },
        onUploadProgress: i,
        signal: d,
    });
    if (!s.ok) throw Error(`POST ${V} failed: ${s.status}`);
    return { ...s.data, uploadDurationMs: 0 };
}
let I = ["application/pdf"],
    z = (0, b.a)(async ({ input: l, signal: t }) =>
        L({ file: l.file, signal: l.signal ?? t, onProgress: l.onProgress, extractIdFace: l.extractIdFace }),
    ),
    w = (l) => {
        if ("output" in l) return l.output;
    },
    R = (0, b.t)({
        types: { context: {}, events: {}, input: {}, output: {} },
        actors: { uploadDigitalId: z },
        actions: {
            requestPickerIfPending: (0, b.r)(({ context: l }) =>
                l.pendingPickerAutoOpen ? { pickerRequestId: l.pickerRequestId + 1, pendingPickerAutoOpen: !1 } : {},
            ),
            setPendingPickerAutoOpen: (0, b.r)(() => ({ pendingPickerAutoOpen: !0 })),
            storeSelectedFile: (0, b.r)(({ event: l }) =>
                "FILE_PICKED" !== l.type ? {} : { file: l.file, failReason: null },
            ),
            clearSelectedFile: (0, b.r)(() => ({
                file: null,
                uploadProgress: 0,
                failReason: null,
                response: void 0,
                uploadDurationMs: void 0,
            })),
            setInvalidFileTypeError: (0, b.r)(() => ({ failReason: "INVALID_FILE_TYPE" })),
            setUploadProgressCapped: (0, b.r)(({ event: l }) =>
                "UPLOAD_PROGRESS" !== l.type ? {} : { uploadProgress: Math.min(90, Math.max(0, l.progress)) },
            ),
            setUploadProgressCompleted: (0, b.r)(() => ({ uploadProgress: 100 })),
            storeUploadResponse: (0, b.r)(({ event: l }) =>
                "output" in l ? { response: l.output, uploadDurationMs: l.output.uploadDurationMs } : {},
            ),
            setFailReasonFromResponse: (0, b.r)(({ event: l }) =>
                "output" in l ? { failReason: T(l.output) ?? "GENERIC" } : {},
            ),
            setFailReasonFromNetworkError: (0, b.r)(({ event: l }) => {
                var t;
                let d;
                return "error" in l
                    ? {
                          failReason:
                              (d = (t = l.error) instanceof Error ? t.message : String(t)).includes(
                                  "ERR_UPLOAD_FILE_CHANGED",
                              ) ||
                              d.includes("file changed") ||
                              d.includes("FILE_CHANGED")
                                  ? "FILE_CHANGED_ERROR"
                                  : "NETWORK_ERROR",
                      }
                    : {};
            }),
            decrementAttemptOnFailure: (0, b.r)(({ context: l }) => ({
                attemptsRemaining: Math.max(0, l.attemptsRemaining - 1),
            })),
        },
        guards: {
            isSelectedFileTooLarge: ({ event: l }) => "FILE_PICKED" === l.type && l.file.size > 5242880,
            isSelectedFileMimeInvalid: ({ event: l }) => "FILE_PICKED" === l.type && !I.includes(l.file.type),
            hasSelectedFile: ({ context: l }) => null !== l.file,
            responseHasFailReason: ({ event: l }) => null !== T(w(l)),
            hasAttemptsRemaining: ({ context: l }) => l.attemptsRemaining > 0,
            isTerminalFailReason: ({ event: l }) => {
                var t;
                return (t = w(l)), "string" == typeof t?.failReason && Y.has(t.failReason);
            },
            isCurrentFailReasonTerminal: ({ context: l }) => {
                let t = new Set(["DIGITAL_ID_REQUESTED_BUT_OTHER_PROVIDED", "ID_TYPE_UNACCEPTABLE"]);
                return null !== l.failReason && t.has(l.failReason);
            },
        },
    }).createMachine({
        id: "digitalUpload",
        initial: "decideStart",
        context: ({ input: l }) => ({
            showTutorial: l.showTutorial,
            file: null,
            uploadProgress: 0,
            attemptsRemaining: l.attemptsRemaining,
            failReason: null,
            response: void 0,
            uploadDurationMs: void 0,
            pickerRequestId: 0,
            pendingPickerAutoOpen: !l.showTutorial,
            resultType: null,
            extractIdFace: l.extractIdFace,
        }),
        output: ({ context: l }) => ({ result: l.resultType ?? "exhausted", attemptsRemaining: l.attemptsRemaining }),
        states: {
            decideStart: {
                always: [{ guard: ({ context: l }) => l.showTutorial, target: "tutorial" }, { target: "selecting" }],
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
                    input: ({ context: l, self: t }) => ({
                        file: l.file,
                        onProgress: (l) => {
                            t.send({ type: "UPLOAD_PROGRESS", progress: l });
                        },
                        extractIdFace: l.extractIdFace,
                    }),
                    onDone: [
                        {
                            guard: "isTerminalFailReason",
                            target: "terminalError",
                            actions: ["storeUploadResponse", "setFailReasonFromResponse", "decrementAttemptOnFailure"],
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
                    { guard: "isCurrentFailReasonTerminal", target: "terminalError" },
                    { guard: "hasAttemptsRemaining", target: "error" },
                    { target: "terminalError" },
                ],
            },
            error: {
                on: {
                    RETRY: { target: "selecting", actions: ["setPendingPickerAutoOpen", "clearSelectedFile"] },
                    SCAN_INSTEAD: { target: "tutorial", actions: ["clearSelectedFile"] },
                },
            },
            terminalError: {
                on: {
                    SCAN_INSTEAD: [
                        { guard: "hasAttemptsRemaining", target: "tutorial", actions: ["clearSelectedFile"] },
                        { target: "exhausted" },
                    ],
                },
            },
            exhausted: { type: "final", entry: (0, b.r)({ resultType: "exhausted" }) },
            success: { on: { NEXT_STEP: { target: "completed" } } },
            completed: { type: "final", entry: (0, b.r)({ resultType: "success" }) },
        },
    }),
    S = new Set(["DIGITAL_ID_REQUESTED_BUT_OTHER_PROVIDED", "ID_TYPE_UNACCEPTABLE"]);
function C(l, t) {
    let d = l.failReason;
    return "WRONG_DOCUMENT_SIDE" === d
        ? "manualIdUpload.wrongSide"
        : "WRONG_ONE_SIDED_DOCUMENT" === d ||
            "UNKNOWN_DOCUMENT_TYPE" === d ||
            "ID_TYPE_UNACCEPTABLE" === d ||
            ("passport" === t && l.typeOfId && "passport" !== l.typeOfId.toLowerCase()) ||
            ("id" === t && l.typeOfId?.toLowerCase() === "passport")
          ? "manualIdUpload.wrongDocument"
          : !1 === l.correctSharpness
            ? "manualIdUpload.lowSharpness"
            : !1 === l.correctGlare
              ? "manualIdUpload.glareDetected"
              : !1 === l.readability
                ? "manualIdUpload.readabilityIssue"
                : null;
}
let x = (l) =>
        new Promise((t, d) => {
            let i = new FileReader();
            (i.onload = () => {
                let l = i.result;
                "string" == typeof l ? t(l) : d(Error("FileReader produced non-string result"));
            }),
                (i.onerror = () => {
                    d(i.error ?? Error("FileReader failed"));
                }),
                i.readAsDataURL(l);
        }),
    g = async (l, t) => {
        let d = URL.createObjectURL(l);
        try {
            let i = await new Promise((l, t) => {
                    let i = new Image();
                    (i.onload = () => l(i)), (i.onerror = () => t(Error("Image decoding failed"))), (i.src = d);
                }),
                e = i.naturalWidth || i.width,
                c = i.naturalHeight || i.height;
            if (e <= 0 || c <= 0) return x(l);
            let a = document.createElement("canvas");
            (a.width = e), (a.height = c);
            let s = a.getContext("2d");
            if (!s) return x(l);
            return (
                (s.fillStyle = "#fff"),
                s.fillRect(0, 0, e, c),
                s.drawImage(i, 0, 0, e, c),
                a.toDataURL(t.mimeType ?? "image/jpeg", t.quality ?? 0.92)
            );
        } finally {
            URL.revokeObjectURL(d);
        }
    },
    D = async (l, t = {}) => {
        if (
            !(
                l.type.startsWith("image/") &&
                "u" > typeof document &&
                "u" > typeof Image &&
                "u" > typeof URL &&
                "function" == typeof URL.createObjectURL
            )
        )
            return x(l);
        try {
            return await g(l, t);
        } catch {
            return x(l);
        }
    };
async function j(l) {
    return (0, G.n)(l);
}
let U = {
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
function F(l, t) {
    return t ? ("front" === l ? a.t.frontSecondId : a.t.backSecondId) : "front" === l ? a.t.frontId : a.t.backId;
}
let O = {
        blurThreshold: 0.2,
        blurChangeThreshold: 0.2,
        glareThreshold: 0.3,
        clsThreshold: 0.98,
        sideThreshold: 0.8,
        iouThreshold: 0.8,
        framesAggregationInterval: 3e3,
    },
    J = {
        isFixedMask: !1,
        isIPhone14OrHigher: !1,
        idType: "",
        blurCheckEnabled: !1,
        glareCheckEnabled: !1,
        faceQualityCheckEnabled: !0,
        iouCheckEnabled: !0,
        fpsLimitEnabled: !1,
    };
async function k(l) {
    let t,
        { config: d, deepsightService: i } = l,
        e = new y.i();
    if (
        (await e.initialize({}),
        e.setThresholds({
            ...O,
            ...d.thresholds,
            idDetectedTimeout: d.thresholds?.idDetectedTimeout ?? 1e3 * d.deviceIdleTimeout,
            autocaptureTimeout: d.thresholds?.autocaptureTimeout ?? 1e3 * d.autoCaptureTimeout,
        }),
        d.settings && e.setSettings({ ...J, ...d.settings }),
        i)
    )
        try {
            await i.performPrcCheck({
                constraints: (0, Z.n)()
                    ? { video: { facingMode: "user", height: { ideal: 480 }, width: { ideal: 640 } } }
                    : { video: { facingMode: "environment", height: { ideal: 720 } } },
            });
        } catch {}
    let { stream: c, fallbackLevel: a } = await j(),
        s = c.getVideoTracks()[0];
    if (s) {
        let l = s.getSettings();
        "number" == typeof l.width && "number" == typeof l.height && (t = `${l.width}x${l.height}`);
    }
    return (
        i && s && i.metadata.updateCameraInfo(s),
        { stream: c, provider: e, captureResolution: t, cameraFallbackLevel: a }
    );
}
function E(l) {
    for (let t of l.getTracks()) t.stop();
}
function v(l, t) {
    if ("ID_TYPE_UNACCEPTABLE" === l.failReason)
        return {
            error: !0,
            message: "ID type is not acceptable",
            messageDescription: "Please use a valid ID type",
            errorKey: U.ID_TYPE_UNACCEPTABLE,
        };
    if ("WRONG_DOCUMENT_SIDE" === l.failReason)
        return {
            error: !0,
            message: "Wrong side of document",
            messageDescription:
                "back" === l.side ? "Please show the back side of your ID" : "Please show the front side of your ID",
            errorKey: U.WRONG_DOCUMENT_SIDE,
        };
    if (!l.classification) return { error: !0, message: "ID classification failed", errorKey: U.CLASSIFICATION_FAILED };
    let d = "desktop" === (0, N.t)() ? -1 : 10;
    return void 0 !== l.sharpness && d >= 0 && l.sharpness < d
        ? {
              error: !0,
              message: "Image is not sharp enough",
              messageDescription: "Please ensure the image is clear and well-focused",
              errorKey: U.LOW_SHARPNESS,
          }
        : void 0 === l.glare || !(l.glare < 10) || t?.skipGlareFront || t?.skipGlareBack
          ? void 0
          : {
                error: !0,
                message: "Glare detected on ID",
                messageDescription: "Please avoid bright reflections on your ID",
                errorKey: U.GLARE_DETECTED,
            };
}
async function K(l) {
    let t = l.ageAssurance ? ["back" === l.type ? "croppedBackID" : "croppedFrontID"] : [];
    try {
        let d = await e.t.post(a.t.getImages, { images: ["croppedIDFace", ...t] }, { signal: l.signal });
        if (!d.ok) throw Error(`Failed to get extra images: ${d.status}`);
        return d.data ?? { croppedIDFace: "", croppedFrontID: "", croppedBackID: "" };
    } catch {
        return { croppedIDFace: "", croppedFrontID: "", croppedBackID: "" };
    }
}
async function H(l) {
    let {
            type: t,
            image: d,
            onProgress: i,
            signal: c,
            metadata: a,
            ageAssurance: s,
            glare: n,
            sharpness: Z,
            shouldSkipGlareBack: b,
            analyticsProvider: m,
            imageData: o,
            isSecondId: u,
            onlyFront: h,
            extractIdFace: W,
        } = l,
        G = a;
    if (m && o)
        try {
            await m.analyzeFrame(o), m.update(), (G = m.getMetadata());
        } catch (l) {
            console.warn("[IdCapture] Analytics failed:", l);
        }
    let p = F(t, u),
        N = { base64Image: d, metadata: G },
        M = { imageType: "id" };
    (h && "front" === t && (M.onlyFront = !0), b && "back" === t)
        ? (M.glare = 0)
        : void 0 !== n && (M.glare = (1 - n) * 100),
        void 0 !== Z && (M.sharpness = (1 - Z) * 100),
        !1 === W && "front" === t && (M.extractIdFace = !1);
    try {
        let l = await e.t.post(p, N, { signal: c, query: M, onUploadProgress: i });
        if (!l.ok) throw Error(`POST ${p} failed: ${l.status} ${l.statusText}`);
        let a = l.data,
            n = await K({ type: t, ageAssurance: s, signal: c }),
            Z = {
                ...a,
                originalImage: d,
                frontIdImage: "front" === t ? d : void 0,
                backIdImage: n.croppedBackID,
                ...n,
            };
        return i?.(100), Z;
    } catch (t) {
        let l = t instanceof Error ? t.message : "Unknown error";
        throw Error(`${U.UPLOAD_ERROR}: ${l}`);
    }
}
async function Q() {
    let { OpenViduRecordingProvider: l } = await Promise.all([d.e("87651"), d.e("52586")]).then(d.bind(d, 795377));
    return new l();
}
async function P(l) {
    if (!0 !== l.config.enableIdRecording) return;
    if (l.existing) return l.existing;
    let t = l.config.recording?.capability ?? (await Q()),
        d = l.stream.clone(),
        i = d.getAudioTracks().length > 0,
        e = (function (l) {
            let t = l.getVideoTracks()[0];
            if (!t) return "1080x1920";
            let d = t.getSettings(),
                i = d.width,
                e = d.height;
            if ("number" == typeof i && "number" == typeof e) {
                let l = e > i ? { width: 1080, height: 1920 } : { width: 1920, height: 1080 };
                return `${l.width}x${l.height}`;
            }
            return "1080x1920";
        })(d),
        c = await (0, h.h)(l.type),
        a = await t.connect({ sessionToken: c.token, stream: d, events: {} });
    return (
        await (0, h.g)({ videoRecordingId: c.videoRecordingId, type: l.type, resolution: e, hasAudio: i }),
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
async function f(l = !1, t = "", d) {
    let i = l ? a.t.processSecondId : a.t.processId,
        c = t ? `${i}?queueName=${t}` : i;
    return { isDocumentExpired: (await e.t.post(c, {}, { signal: d })).data?.isDocumentExpired ?? !1 };
}
async function B(l) {
    let { side: t, base64Image: d, retry: i, onlyFront: c, signal: a, isSecondId: s, extractIdFace: n } = l,
        Z = F("back" === t ? "back" : "front", s),
        b = { captureType: "UPLOAD" };
    i && (b.retry = !0), c && "front" === t && (b.onlyFront = !0), !1 === n && "back" !== t && (b.extractIdFace = !1);
    let m = await e.t.post(Z, { base64Image: d }, { signal: a, query: b });
    if (!m.ok) throw Error(`POST ${Z} failed: ${m.status} ${m.statusText}`);
    return m.data;
}
let A = async (l) => {
        var t;
        let d;
        return -1 === (d = (t = await D(l)).indexOf(",")) ? t : t.slice(d + 1);
    },
    _ = (0, b.a)(async ({ input: l, signal: t }) => {
        let d,
            i,
            e = await A(l.file);
        return ((d = e.replace(/\s/g, "")),
        (i = 0),
        d.endsWith("==") ? (i = 2) : d.endsWith("=") && (i = 1),
        5242880 >= Math.max(0, Math.floor((3 * d.length) / 4) - i))
            ? {
                  type: "uploaded",
                  response: await B({
                      side: l.side,
                      base64Image: e,
                      retry: l.retry,
                      onlyFront: l.onlyFront,
                      isSecondId: l.isSecondId,
                      extractIdFace: l.extractIdFace,
                      signal: t,
                  }),
              }
            : { type: "fileTooLarge" };
    }),
    $ = (l) => {
        if ("output" in l) return l.output;
    },
    q = (l) => {
        let t = $(l);
        return t?.type === "uploaded" ? t.response : void 0;
    },
    ll = (0, b.t)({
        types: { context: {}, events: {}, input: {}, output: {} },
        actors: { uploadManualFile: _ },
        actions: {
            setManualUploadActiveTab: (0, b.r)(({ context: l, event: t }) =>
                "MANUAL_UPLOAD_TAB_CHANGED" !== t.type
                    ? {}
                    : { activeTab: t.tab, errorMessage: null, errorSide: null, retriesLeft: l.captureAttempts },
            ),
            resetManualUpload: (0, b.r)(({ context: l }) => ({
                frontFile: null,
                backFile: null,
                passportFile: null,
                frontUploaded: !1,
                backUploaded: !1,
                passportUploaded: !1,
                skipBackFromServer: !1,
                errorMessage: null,
                errorSide: null,
                retriesLeft: l.captureAttempts,
            })),
            storeSelectedFile: (0, b.r)(({ event: l }) => {
                if ("MANUAL_UPLOAD_FILE_SELECTED" !== l.type) return {};
                let t = { errorMessage: null, errorSide: null };
                return (
                    "front" === l.side
                        ? (t.frontFile = l.file)
                        : "back" === l.side
                          ? (t.backFile = l.file)
                          : (t.passportFile = l.file),
                    t
                );
            }),
            markFrontUploaded: (0, b.r)(() => ({ frontUploaded: !0, errorMessage: null, errorSide: null })),
            markBackUploaded: (0, b.r)(() => ({ backUploaded: !0, errorMessage: null, errorSide: null })),
            markPassportUploaded: (0, b.r)(() => ({ passportUploaded: !0, errorMessage: null, errorSide: null })),
            recordSkipBackFromResponse: (0, b.r)(({ event: l }) => {
                let t = q(l);
                return t && t.skipBackIdCapture ? { skipBackFromServer: !0 } : {};
            }),
            decrementManualUploadRetries: (0, b.r)(({ context: l }) => ({
                retriesLeft: Math.max(0, l.retriesLeft - 1),
            })),
            setManualUploadErrorFromResponse: (0, b.r)(({ context: l, event: t }) => {
                let d = q(t);
                return d ? { errorMessage: C(d, l.activeTab) ?? "manualIdUpload.generic" } : {};
            }),
            setManualUploadGenericError: (0, b.r)(() => ({ errorMessage: "manualIdUpload.generic" })),
            setManualUploadFileTooLargeError: (0, b.r)(({ event: l }) => ({
                errorMessage: "manualIdUpload.fileTooBig",
                errorSide: "MANUAL_UPLOAD_FILE_SELECTED" === l.type ? l.side : null,
            })),
            markErrorSideFront: (0, b.r)(() => ({ errorSide: "front" })),
            markErrorSideBack: (0, b.r)(() => ({ errorSide: "back" })),
            markErrorSidePassport: (0, b.r)(() => ({ errorSide: "passport" })),
            clearManualUploadError: (0, b.r)(() => ({ errorMessage: null, errorSide: null })),
        },
        guards: {
            isSelectedFileTooLarge: ({ event: l }) => "MANUAL_UPLOAD_FILE_SELECTED" === l.type && l.file.size > 5242880,
            isFrontFileSelection: ({ event: l }) => "MANUAL_UPLOAD_FILE_SELECTED" === l.type && "front" === l.side,
            isBackFileSelection: ({ event: l }) => "MANUAL_UPLOAD_FILE_SELECTED" === l.type && "back" === l.side,
            isPassportFileSelection: ({ event: l }) =>
                "MANUAL_UPLOAD_FILE_SELECTED" === l.type && "passport" === l.side,
            manualUploadRetriesExhausted: ({ context: l }) => l.retriesLeft <= 0,
            canContinueFromIdTab: ({ context: l }) =>
                "id" === l.activeTab &&
                !!l.frontUploaded &&
                (!!l.onlyFront || !!l.skipBackFromServer || l.backUploaded),
            canContinueFromPassportTab: ({ context: l }) => "passport" === l.activeTab && l.passportUploaded,
            manualUploadResponseHasError: ({ context: l, event: t }) => {
                let d = q(t);
                return !!d && null !== C(d, l.activeTab);
            },
            manualUploadPayloadTooLarge: ({ event: l }) => $(l)?.type === "fileTooLarge",
        },
    }).createMachine({
        id: "manualUpload",
        initial: "selecting",
        context: ({ input: l }) => ({
            onlyFront: l.onlyFront,
            isSecondId: l.isSecondId,
            captureAttempts: l.captureAttempts,
            extractIdFace: l.extractIdFace,
            frontFile: null,
            backFile: null,
            passportFile: null,
            activeTab: "id",
            retriesLeft: l.captureAttempts,
            errorMessage: null,
            errorSide: null,
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
                    input: ({ context: l }) => ({
                        side: "front",
                        file: l.frontFile,
                        retry: l.retriesLeft < l.captureAttempts,
                        onlyFront: l.onlyFront,
                        isSecondId: l.isSecondId,
                        extractIdFace: l.extractIdFace,
                    }),
                    onDone: [
                        {
                            guard: "manualUploadPayloadTooLarge",
                            target: "selecting",
                            actions: ["setManualUploadFileTooLargeError", "markErrorSideFront"],
                        },
                        {
                            guard: "manualUploadResponseHasError",
                            target: "checkRetries",
                            actions: [
                                "decrementManualUploadRetries",
                                "setManualUploadErrorFromResponse",
                                "markErrorSideFront",
                            ],
                        },
                        {
                            target: "selecting",
                            actions: ["markFrontUploaded", "recordSkipBackFromResponse", "clearManualUploadError"],
                        },
                    ],
                    onError: {
                        target: "checkRetries",
                        actions: ["decrementManualUploadRetries", "setManualUploadGenericError", "markErrorSideFront"],
                    },
                },
            },
            uploadingBack: {
                invoke: {
                    id: "uploadManualFile",
                    src: "uploadManualFile",
                    input: ({ context: l }) => ({
                        side: "back",
                        file: l.backFile,
                        retry: l.retriesLeft < l.captureAttempts,
                        onlyFront: !1,
                        isSecondId: l.isSecondId,
                    }),
                    onDone: [
                        {
                            guard: "manualUploadPayloadTooLarge",
                            target: "selecting",
                            actions: ["setManualUploadFileTooLargeError", "markErrorSideBack"],
                        },
                        {
                            guard: "manualUploadResponseHasError",
                            target: "checkRetries",
                            actions: [
                                "decrementManualUploadRetries",
                                "setManualUploadErrorFromResponse",
                                "markErrorSideBack",
                            ],
                        },
                        { target: "selecting", actions: ["markBackUploaded", "clearManualUploadError"] },
                    ],
                    onError: {
                        target: "checkRetries",
                        actions: ["decrementManualUploadRetries", "setManualUploadGenericError", "markErrorSideBack"],
                    },
                },
            },
            uploadingPassport: {
                invoke: {
                    id: "uploadManualFile",
                    src: "uploadManualFile",
                    input: ({ context: l }) => ({
                        side: "passport",
                        file: l.passportFile,
                        retry: l.retriesLeft < l.captureAttempts,
                        onlyFront: !1,
                        isSecondId: l.isSecondId,
                        extractIdFace: l.extractIdFace,
                    }),
                    onDone: [
                        {
                            guard: "manualUploadPayloadTooLarge",
                            target: "selecting",
                            actions: ["setManualUploadFileTooLargeError", "markErrorSidePassport"],
                        },
                        {
                            guard: "manualUploadResponseHasError",
                            target: "checkRetries",
                            actions: [
                                "decrementManualUploadRetries",
                                "setManualUploadErrorFromResponse",
                                "markErrorSidePassport",
                            ],
                        },
                        { target: "selecting", actions: ["markPassportUploaded", "clearManualUploadError"] },
                    ],
                    onError: {
                        target: "checkRetries",
                        actions: [
                            "decrementManualUploadRetries",
                            "setManualUploadGenericError",
                            "markErrorSidePassport",
                        ],
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
    lt = [
        ["enableId", "id"],
        ["enablePassport", "passport"],
        ["manualUploadIdCapture", "manualIdUpload"],
        ["digitalIdsUpload", "digitalIdUpload"],
        ["deviceWallet", "digitalId"],
    ],
    ld = (0, b.a)(async () => (0, o.t)()),
    li = (0, b.a)(async ({ input: l }) => (0, o.n)(l)),
    le = (0, b.a)(async ({ input: l }) => k(l)),
    lc = (0, b.i)(({ input: l, sendBack: t }) => {
        if (!l.frameCapturer || !l.provider) return t({ type: "DETECTION_UPDATE", status: "error" }), () => {};
        let d = l.provider,
            e = null,
            c = null,
            a = {},
            s = !1,
            n = i.t.getInstance(),
            Z = null,
            b = null,
            m = null,
            o = () => {
                if (!m) return !1;
                let t = m.toLowerCase();
                if ("wrong" === t) return !0;
                let d = t.includes("back") && !t.includes("front"),
                    i = t.includes("front") && !t.includes("back");
                return ("front" === l.currentMode && d) || ("back" === l.currentMode && i);
            },
            u = () => {
                Z && (n.clearTimeout(Z), (Z = null), (b = null));
            },
            G = (l) => {
                o() ||
                    (Z && b !== l) ||
                    (Z && b === l && n.clearTimeout(Z),
                    (b = l),
                    t({ type: "DETECTION_UPDATE", status: l }),
                    (Z = n.setTimeout(() => {
                        (Z = null), (b = null), t({ type: "DETECTION_UPDATE", status: "detecting" });
                    }, 500)));
            },
            N = l.frameCapturer.getLatestCanvas(),
            M = (0, p.n)(N?.width() ?? 1280, N?.height() ?? 720);
        l.config.geometry
            ? d.setGeometry({
                  ...l.config.geometry,
                  windowOuterWidth: M.outerWidth,
                  windowOuterHeight: M.outerHeight,
                  windowInnerWidth: M.innerWidth,
                  windowInnerHeight: M.innerHeight,
              })
            : d.setGeometry({
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
                  windowOuterWidth: M.outerWidth,
                  windowOuterHeight: M.outerHeight,
                  windowInnerWidth: M.innerWidth,
                  windowInnerHeight: M.innerHeight,
              });
        let X = "back" === l.currentMode ? "BackId" : "passport" === l.currentMode ? "Passport" : "FrontId";
        d.setSettings({
            isFixedMask: l.config.settings?.isFixedMask ?? !1,
            isIPhone14OrHigher: l.config.settings?.isIPhone14OrHigher ?? !1,
            idType: X,
            blurCheckEnabled: l.config.settings?.blurCheckEnabled ?? !1,
            glareCheckEnabled: l.config.settings?.glareCheckEnabled ?? !1,
            faceQualityCheckEnabled: l.config.settings?.faceQualityCheckEnabled ?? !0,
            iouCheckEnabled: l.config.settings?.iouCheckEnabled ?? !0,
            fpsLimitEnabled: l.config.settings?.fpsLimitEnabled ?? !1,
        });
        let r = {
            ...y.r,
            ...l.config.thresholds,
            idDetectedTimeout: (l.config.deviceIdleTimeout ?? 10) * 1e3,
            autocaptureTimeout: (l.config.autoCaptureTimeout ?? 5) * 1e3,
        };
        d.setThresholds(r);
        let Y = l.config.modelVersion ?? y.n;
        d.setModelType(Y),
            d.setCallbacks({
                onFarAway: () => {
                    s || G("farAway");
                },
                onDetectionStarted: () => {},
                onMaskChange: (l, d, i, e) => {
                    t({ type: "ORIENTATION_CHANGE", orientation: e });
                },
                onBlur: () => {
                    s || G("blur");
                },
                onGlare: () => {
                    s || G("glare");
                },
                onIdNotDetected: () => {
                    s || t({ type: "DETECTION_UPDATE", status: "idNotDetected" });
                },
                onSwitchToManualCapture: () => {
                    (s = !1), t({ type: "SWITCH_TO_MANUAL_CAPTURE" });
                },
                onCapturing: () => {
                    u(), (m = null), (s = !0), t({ type: "DETECTION_UPDATE", status: "capturing" });
                },
                onBestFrame: (l, d, i) => {
                    e && ((c = e.clone()), (a = { glare: d, sharpness: l })),
                        ("horizontal" === i || "vertical" === i) && t({ type: "ORIENTATION_CHANGE", orientation: i });
                },
                onCapture: () => {
                    (s = !1),
                        c
                            ? t({ type: "DETECTION_SUCCESS", canvas: c, qualityElements: a })
                            : e && t({ type: "DETECTION_SUCCESS", canvas: e.clone(), qualityElements: {} });
                },
                onIdTypeChange: (l) => {
                    t({ type: "ID_TYPE_CHANGE", idType: l });
                },
                onIdSideChange: (l) => {
                    s || ((m = l), o() && u(), t({ type: "ID_SIDE_CHANGE", side: l }));
                },
                onCapturingCounterValueChange: (l) => {
                    t({ type: "COUNTER_VALUE_CHANGE", value: l });
                },
            }),
            t({ type: "DETECTION_UPDATE", status: "detecting" });
        let T = new h.y({
            capturer: l.frameCapturer,
            provider: {
                processFrame: async (l) => {
                    (e = W.t.fromImageData(l)), t({ type: "DETECTION_FRAME", frame: l }), await d.processFrame(l);
                },
                reset: () => {
                    Z && (n.clearTimeout(Z), (Z = null), (b = null)),
                        (e = null),
                        (c = null),
                        (a = {}),
                        (s = !1),
                        (m = null),
                        d.reset();
                },
            },
            onFrame: (l) => t({ type: "DETECTION_FRAME", frame: l }),
        });
        return (
            t({
                type: "DETECTION_RESET_READY",
                reset: () => {
                    d.reset();
                },
            }),
            () => {
                u(), T?.dispose();
            }
        );
    }),
    la = (0, b.a)(async ({ input: l, signal: t }) => {
        let d,
            i = l.canvas.getBase64Image();
        if (!i) throw Error(U.UPLOAD_ERROR);
        if (l.deepsightService)
            try {
                let t = (0, e.r)(),
                    i = "back" === l.type ? "BACK_ID" : "FRONT_ID";
                await l.deepsightService.performVirtualCameraCheck(t, i);
                let c = l.canvas.getImageData();
                c && (await l.deepsightService.analyzeFrame(c));
                let a = l.deepsightService.getAnalysisStatus(),
                    n = l.deepsightService.getMotionStatus();
                "front" === l.type
                    ? await (0, s.t)({
                          frontIdStatsAnalysisStatus: a,
                          backIdStatsAnalysisStatus: "",
                          selfieStatsAnalysisStatus: "",
                          motionStatus: n,
                      })
                    : await (0, s.t)({
                          frontIdStatsAnalysisStatus: "",
                          backIdStatsAnalysisStatus: a,
                          selfieStatsAnalysisStatus: "",
                          motionStatus: n,
                      }),
                    (d = l.deepsightService.getMetadata());
            } catch {}
        let c = l.canvas?.getImageData() ?? void 0,
            a = l.deepsightService?.getPipelineState() ?? "";
        return (
            l.dependencies?.trackCaptureAttemptFinished?.({
                logs: a,
                resolution: l.captureResolution,
                fallbackLevel: l.cameraFallbackLevel,
            }),
            H({
                image: i,
                type: l.type,
                sendBase64: !0,
                glare: l.qualityElements?.glare,
                sharpness: l.qualityElements?.sharpness,
                ageAssurance: l.ageAssurance,
                signal: t,
                onProgress: l.onProgress,
                metadata: d,
                analyticsProvider: l.analyticsProvider,
                imageData: c,
                isSecondId: l.isSecondId,
                onlyFront: l.onlyFront,
                extractIdFace: l.extractIdFace,
            })
        );
    }),
    ls = (0, b.a)(async ({ input: l, signal: t }) => f(l.isSecondId, "", t)),
    ln = (0, b.a)(async ({ input: l }) => {
        if (!l.stream) return;
        let t = "back" === l.currentMode ? "backId" : "frontId";
        return P({ config: l.config, stream: l.stream, existing: l.existing, type: t });
    }),
    lZ = (0, b.a)(async ({ input: l }) => {
        if (!l.dependencies) return;
        let { loadDeepsightSession: t } = await d.e("24222").then(d.bind(d, 456141));
        return t({ ds: l.ds, storage: l.dependencies.storage, disableIpify: l.disableIpify });
    }),
    lb = (0, b.a)(async ({ input: l }) => {
        if (!l.deepsightService || !l.stream) return !1;
        let t = l.stream.getVideoTracks()[0];
        return !!t && l.deepsightService.checkVirtualCamera(t);
    });
function lm(l) {
    l.frameCapturer?.dispose(), l.stream && E(l.stream);
}
function lo(l) {
    l.provider?.dispose?.();
}
let lu = "ID capture module has no accepted documents and no capture option enabled",
    lh = (0, b.t)({
        types: { context: {}, events: {}, input: {} },
        actors: {
            checkPermission: ld,
            requestPermission: li,
            initializeCamera: le,
            runDetection: lc,
            uploadIdImage: la,
            processId: ls,
            startRecording: ln,
            initializeDeepsightSession: lZ,
            checkVirtualCamera: lb,
            manualUploadMachine: ll,
            digitalUploadMachine: R,
        },
        actions: {
            stopMediaStream: (0, b.r)(({ context: l }) => (lm(l), { stream: void 0, frameCapturer: void 0 })),
            disposeProvider: ({ context: l }) => {
                lo(l);
            },
            cleanupDeepsight: ({ context: l }) => {
                l.deepsightService?.cleanup();
            },
            flagIdManualReview: () => {
                (0, r.i)();
            },
            resetForBackCapture: (0, b.r)(
                ({ context: l }) => (
                    l.frameCapturer?.dispose(),
                    l.stream && E(l.stream),
                    l.provider?.reset(),
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
                        attemptsRemaining: l.config.captureAttempts,
                        expiredAttempts: 0,
                        expiredFromUpload: !1,
                        exhaustedFromUpload: !1,
                        forceFinishAfterProcessing: !1,
                        captureResolution: void 0,
                        cameraFallbackLevel: void 0,
                    }
                ),
            ),
            resetForFrontCapture: (0, b.r)(
                ({ context: l }) => (
                    l.frameCapturer?.dispose(),
                    l.stream && E(l.stream),
                    l.provider?.reset(),
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
                        attemptsRemaining: l.config.captureAttempts,
                        expiredAttempts: 0,
                        expiredFromUpload: !1,
                        exhaustedFromUpload: !1,
                        forceFinishAfterProcessing: !1,
                        captureResolution: void 0,
                        cameraFallbackLevel: void 0,
                    }
                ),
            ),
            prepareForBackCapture: (0, b.r)(
                ({ context: l }) => (
                    l.provider?.reset(),
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
                        attemptsRemaining: l.config.captureAttempts,
                    }
                ),
            ),
            setStreamAndCapturer: (0, b.r)({
                stream: ({ event: l }) =>
                    (function (l) {
                        if ("output" in l) return l.output.stream;
                    })(l),
                provider: ({ event: l }) =>
                    (function (l) {
                        if ("output" in l) return l.output.provider;
                    })(l),
                frameCapturer: ({ event: l }) =>
                    (function (l) {
                        if ("output" in l) {
                            let t = l.output;
                            if (t.stream) return new M.t(t.stream);
                        }
                    })(l),
                captureResolution: ({ event: l }) =>
                    (function (l) {
                        if ("output" in l) return l.output.captureResolution;
                    })(l),
                cameraFallbackLevel: ({ event: l }) =>
                    (function (l) {
                        if ("output" in l) return l.output.cameraFallbackLevel;
                    })(l),
            }),
            trackTutorialId: () => {},
            trackContinue: () => {},
            trackCameraId: ({ context: l }) => {},
            preloadRecordingProvider: ({ context: l }) => {
                !0 === l.config.enableIdRecording && (0, r.n)();
            },
            resetContext: (0, b.r)(({ context: l }) => {
                let t;
                return (
                    l.provider?.reset(),
                    (t = l.config.onlyBack
                        ? "back"
                        : !l.config.enableId && l.config.enablePassport
                          ? "passport"
                          : l.config.usSmartCapture
                            ? "back"
                            : "front"),
                    {
                        stream: void 0,
                        provider: l.provider,
                        frameCapturer: void 0,
                        error: void 0,
                        detectionStatus: "idle",
                        counterValue: 0,
                        orientation: void 0,
                        capturedImages: {},
                        captureOnlyImages: {},
                        uploadResponse: void 0,
                        recordingSession: void 0,
                        attemptsRemaining: l.config.captureAttempts,
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
            resetDetection: ({ context: l }) => {
                l.resetDetection?.();
            },
            captureImage: (0, b.r)({
                qualityElements: ({ event: l }) => {
                    if ("qualityElements" in l) return l.qualityElements;
                },
            }),
            storeCapturedCanvasInProvider: ({ context: l, event: t }) => {
                !(function (l, t) {
                    let d,
                        i = null;
                    if (
                        !(i = "canvas" in t && t.canvas ? t.canvas : (l.frameCapturer?.getLatestCanvas() ?? null)) ||
                        !l.provider
                    )
                        return;
                    let e = i.width(),
                        c = i.height();
                    if (!e || !c) return;
                    let a = i,
                        { innerWidth: s, innerHeight: n } = (0, p.n)();
                    if (l.detectionArea) {
                        let t = Math.max(s / e, n / c);
                        d = {
                            x: (l.detectionArea.x - (s - e * t) / 2) / t,
                            y: (l.detectionArea.y - (n - c * t) / 2) / t,
                            w: l.detectionArea.width / t,
                            h: l.detectionArea.height / t,
                        };
                    } else if (l.frameRect) {
                        let t = Math.max(s / e, n / c);
                        d = {
                            x: (l.frameRect.x - (s - e * t) / 2) / t,
                            y: (l.frameRect.y - (n - c * t) / 2) / t,
                            w: l.frameRect.w / t,
                            h: l.frameRect.h / t,
                        };
                    } else {
                        let t = l.provider.getLastProcessResult?.()?.quad,
                            i = !!t,
                            a = t?.size ? t.size() : (t?.length ?? 0);
                        if (i && a >= 4 && t.get) {
                            let l = t.get(0),
                                i = t.get(1),
                                e = t.get(2),
                                c = t.get(3),
                                a = Math.min(l.x, i.x, e.x, c.x),
                                s = Math.max(l.x, i.x, e.x, c.x),
                                n = Math.min(l.y, i.y, e.y, c.y);
                            d = { x: a, y: n, w: s - a, h: Math.max(l.y, i.y, e.y, c.y) - n };
                        } else {
                            let l = Math.min(387, 0.9 * s),
                                t = l / (35 / 22);
                            d = {
                                x: (((s - l) / 2) * e) / s,
                                y: (((n - t) / 2) * c) / n,
                                w: (e * l) / s,
                                h: (c * t) / n,
                            };
                        }
                    }
                    let Z = l.provider.transformPerspective(a, d);
                    l.provider.setCapturedCanvases(a, Z);
                })(l, t);
            },
            captureLatestFrame: ({ context: l }) => {
                l.frameCapturer?.getLatestCanvas();
            },
            clearUploadFailure: (0, b.r)(
                ({ context: l }) => (
                    l.previewImageUrl && (0, c.C)(l.previewImageUrl),
                    { uploadError: void 0, detectionStatus: "idle", previewImageUrl: void 0, uploadProgress: void 0 }
                ),
            ),
            clearStreamForRetry: (0, b.r)(
                ({ context: l }) => (
                    lm(l),
                    lo(l),
                    {
                        stream: void 0,
                        provider: void 0,
                        frameCapturer: void 0,
                        captureResolution: void 0,
                        cameraFallbackLevel: void 0,
                    }
                ),
            ),
            decrementAttemptsRemaining: (0, b.r)(({ context: l }) => ({ attemptsRemaining: l.attemptsRemaining - 1 })),
            setUploadErrorFromUploadValidation: (0, b.r)({
                uploadError: ({ context: l }) =>
                    l.uploadResponse
                        ? (v(l.uploadResponse, {
                              skipGlareFront: l.uploadResponse.skipGlareFront,
                              skipGlareBack: l.uploadResponse.skipGlareBack,
                          })?.errorKey ?? U.SERVER)
                        : U.SERVER,
            }),
            stopMediaRecording: ({ context: l }) => {
                var t;
                l.recordingSession &&
                    ((t = l.recordingSession),
                    (async () => {
                        try {
                            await (0, h._)(t.videoRecordingId);
                        } finally {
                            await t.connection.disconnect();
                        }
                    })());
            },
            clearRecordingSession: (0, b.r)({ recordingSession: () => void 0 }),
            setSelectedDocument: (0, b.r)({
                selectedDocumentType: ({ event: l }) => {
                    if ("documentType" in l) return l.documentType;
                },
            }),
            setCurrentMode: (0, b.r)({
                currentMode: ({ event: l, context: t }) => {
                    var d, i;
                    return (
                        (d = t),
                        "documentType" in (i = l)
                            ? "passport" === i.documentType
                                ? "passport"
                                : d.config.usSmartCapture
                                  ? "back"
                                  : "front"
                            : "FRONT_COMPLETE" === i.type
                              ? "back"
                              : d.currentMode
                    );
                },
            }),
            storeCapturedImage: (0, b.r)(({ context: l, event: t }) =>
                (function (l, t) {
                    if (!l.currentMode) return { capturedImages: l.capturedImages, previewImageUrl: l.previewImageUrl };
                    let d = l.provider?.getCapturedCanvas(),
                        i = d?.getBase64Image(1, !0),
                        e = "";
                    "output" in t && (e = t.output.originalImage ?? "");
                    let c = { imageBase64: i ?? e },
                        a = l.capturedImages;
                    a =
                        "front" === l.currentMode || "passport" === l.currentMode
                            ? { ...l.capturedImages, front: c }
                            : { ...l.capturedImages, back: c };
                    let s = l.previewImageUrl;
                    if (d) {
                        d.updateBlob();
                        let l = d.getBlobData();
                        l?.url && (s = l.url);
                    } else if ("canvas" in t && t.canvas) {
                        let l = t.canvas;
                        l.updateBlob();
                        let d = l.getBlobData();
                        d?.url && (s = d.url);
                    }
                    return { capturedImages: a, previewImageUrl: s };
                })(l, t),
            ),
            setDetectionStatus: (0, b.r)({
                detectionStatus: ({ event: l, context: t }) =>
                    (function (l, t) {
                        if ("DETECTION_UPDATE" === t.type) {
                            let d = t.status,
                                i = l.detectionStatus;
                            return "wrongSide" === i
                                ? "capturing" !== d && "manualCapture" !== d && "offline" !== d
                                    ? i
                                    : d
                                : ("blur" === d || "glare" === d) && "farAway" === i
                                  ? i
                                  : ("wrongSide" === d || "farAway" === d, d);
                        }
                        return "idle";
                    })(t, l),
            }),
            setCounterValue: (0, b.r)({ counterValue: ({ event: l }) => ("value" in l ? l.value : 0) }),
            setIdType: (0, b.r)({
                idType: ({ event: l }) => {
                    if ("idType" in l) return l.idType;
                },
            }),
            setOrientation: (0, b.r)({
                orientation: ({ event: l }) => {
                    if ("orientation" in l) return l.orientation;
                },
            }),
            setFrameRect: (0, b.r)({
                frameRect: ({ event: l }) => {
                    if ("frameRect" in l) return l.frameRect;
                },
            }),
            setDetectionArea: (0, b.r)({
                detectionArea: ({ event: l }) => {
                    if ("detectionArea" in l) return l.detectionArea;
                },
            }),
            incrementExpiredAttempts: (0, b.r)(({ context: l }) => ({ expiredAttempts: l.expiredAttempts + 1 })),
            storeDigitalUploadResponse: (0, b.r)(({ self: l }) => {
                let t = l.getSnapshot().children?.digitalIdUpload?.getSnapshot()?.context?.response;
                return t ? { uploadResponse: t, isDigitalUpload: !0 } : { isDigitalUpload: !0 };
            }),
            syncAttemptsFromDigitalUpload: (0, b.r)({
                attemptsRemaining: ({ event: l }) => l.output?.attemptsRemaining ?? 0,
            }),
            incrementProcessingExpiredAttempts: (0, b.r)(({ context: l }) => ({
                processingExpiredAttempts: l.processingExpiredAttempts + 1,
            })),
            setSkipProcessId: (0, b.r)({ skipProcessId: () => !0 }),
            setExpiredFromUpload: (0, b.r)({ expiredFromUpload: () => !0 }),
            setExhaustedFromUpload: (0, b.r)({ exhaustedFromUpload: () => !0 }),
            setExpiredRedirected: (0, b.r)({ expiredRedirected: () => !0 }),
            setForceFinishAfterProcessing: (0, b.r)({ forceFinishAfterProcessing: () => !0 }),
            clearExpiredFromUpload: (0, b.r)({ expiredFromUpload: () => !1 }),
        },
        guards: {
            hasShowTutorial: ({ context: l }) => l.config.showTutorial,
            hasAgeAssurance: ({ context: l }) => !0 === l.config.ageAssurance,
            hasShowDocumentChooser: ({ context: l }) =>
                !l.config.onlyBack && (l.config.showDocumentChooserScreen ?? !1),
            isPermissionGranted: ({ event: l }) => "output" in l && "granted" === l.output,
            isReadyForCapture: ({ context: l, event: t }) =>
                (0, X.t)((0, X.r)("output" in t ? t.output : void 0, l.permissionResult), l.config.ds),
            needsMotionPrimeOnly: ({ context: l, event: t }) =>
                (0, X.n)((0, X.r)("output" in t ? t.output : void 0, l.permissionResult), l.config.ds),
            isPermissionDeniedError: ({ event: l }) => {
                if ("error" in l) {
                    let t = l.error;
                    return t?.name === "NotAllowedError" || t?.name === "PermissionDeniedError";
                }
                return !1;
            },
            hasStream: ({ context: l }) => void 0 !== l.stream,
            hasAttemptsRemaining: ({ context: l }) => l.attemptsRemaining > 0,
            hasCapturedImage: ({ context: l }) => l.provider?.getCapturedCanvas() !== null,
            hasUploadValidationError: ({ context: l }) =>
                !!l.uploadResponse &&
                void 0 !==
                    v(l.uploadResponse, {
                        skipGlareFront: l.uploadResponse.skipGlareFront,
                        skipGlareBack: l.uploadResponse.skipGlareBack,
                    }),
            isFrontMode: ({ context: l }) => "front" === l.currentMode || "passport" === l.currentMode,
            isOnlyFront: (l) => !1,
            shouldContinueToBack: ({ context: l }) =>
                !(
                    ("front" !== l.currentMode && "passport" !== l.currentMode) ||
                    l.config.onlyBack ||
                    l.config.usSmartCapture ||
                    l.uploadResponse?.skipBackIdCapture
                ),
            shouldContinueToFront: ({ context: l }) =>
                !0 === l.config.usSmartCapture &&
                "back" === l.currentMode &&
                l.uploadResponse?.forceFrontIdCapture === !0,
            hasMandatoryConsent: ({ context: l }) => l.uploadResponse?.showMandatoryConsent === !0,
            isDeepsightEnabled: ({ context: l }) => void 0 !== l.dependencies,
            isDeepsightReady: ({ context: l }) => void 0 !== l.deepsightService,
            needsDeepsightInit: ({ context: l }) =>
                void 0 !== l.dependencies && void 0 === l.deepsightService && !l.deepsightInitAttempted,
            hasOnlyManualUploadAvailable: ({ context: l }) =>
                1 === l.availableDocumentTypes.length && "manualIdUpload" === l.availableDocumentTypes[0],
            hasNoDocumentTypesAvailable: ({ context: l }) => 0 === l.availableDocumentTypes.length,
            isManualIdUploadSelected: ({ event: l }) =>
                "SELECT_DOCUMENT" === l.type && "manualIdUpload" === l.documentType,
            isDigitalIdUploadSelected: ({ event: l }) =>
                "SELECT_DOCUMENT" === l.type && "digitalIdUpload" === l.documentType,
            isUploadExpired: ({ context: l }) => l.uploadResponse?.isDocumentExpired === !0,
            isExpiredAttemptsExhausted: ({ context: l }) => l.expiredAttempts + 1 >= 3,
            isNotPassportMode: ({ context: l }) => "passport" !== l.currentMode,
            shouldForceBackOnExpired: ({ context: l }) =>
                "front" === l.currentMode &&
                !0 === l.config.alwaysCaptureBackOfId &&
                !l.config.onlyBack &&
                !l.config.usSmartCapture &&
                !l.isDigitalUpload,
            wasExpiredFromUpload: ({ context: l }) => !0 === l.expiredFromUpload,
            shouldSkipProcessId: ({ context: l }) => !0 === l.skipProcessId,
            isProcessingExpiredExhausted: ({ context: l }) =>
                l.processingExpiredAttempts + 1 >= l.config.captureAttempts,
            shouldProcessAfterExhaustion: ({ context: l }) =>
                !0 === l.exhaustedFromUpload &&
                "back" === l.currentMode &&
                (!0 === l.config.onlyBack || !0 === l.config.usSmartCapture),
            forceFinishAfterProcessing: ({ context: l }) => !0 === l.forceFinishAfterProcessing,
            isBackModeInMultiSideFlow: ({ context: l }) =>
                "back" === l.currentMode && !l.config.onlyBack && !l.config.usSmartCapture,
            wasExpiredRedirected: ({ context: l }) => !0 === l.expiredRedirected,
            isManualUploadExhausted: ({ event: l }) => l.output?.result === "exhausted",
            isDigitalUploadExhausted: ({ event: l }) => l.output?.result === "exhausted",
            isDigitalUploadSuccessful: ({ event: l }) => l.output?.result === "success",
        },
    }).createMachine({
        id: "idCapture",
        initial: "idle",
        context: ({ input: l }) => {
            let t = l.config.onlyBack
                ? "back"
                : !l.config.enableId && l.config.enablePassport
                  ? "passport"
                  : l.config.usSmartCapture
                    ? "back"
                    : "front";
            return {
                config: l.config,
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
                attemptsRemaining: l.config.captureAttempts,
                expiredAttempts: 0,
                expiredRedirected: !1,
                processingExpiredAttempts: 0,
                skipProcessId: !0 === l.config.skipProcessId,
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
                manualCaptureTriggered: !1,
                deepsightService: void 0,
                analyticsProvider: l.analyticsProvider,
                dependencies: l.dependencies,
                disableIpify: (0, n.t)(),
                deepsightInitAttempted: !1,
                availableDocumentTypes: (function (l) {
                    let t = [];
                    for (let [d, i] of lt) l[d] && t.push(i);
                    return t;
                })(l.config),
                captureResolution: void 0,
                cameraFallbackLevel: void 0,
            };
        },
        on: { QUIT: { target: "#idCapture.closed" }, UPDATE_DETECTION_AREA: { actions: "setDetectionArea" } },
        states: {
            idle: {
                on: {
                    LOAD: [
                        {
                            target: "error",
                            guard: "hasNoDocumentTypesAvailable",
                            actions: [() => console.error(lu), (0, b.r)({ error: () => lu })],
                        },
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
                        {
                            target: "digitalIdUpload",
                            guard: "isDigitalIdUploadSelected",
                            actions: ["setSelectedDocument"],
                        },
                        {
                            target: "manualIdUpload",
                            guard: "isManualIdUploadSelected",
                            actions: ["setSelectedDocument"],
                        },
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
                                        actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                    },
                                    onError: {
                                        target: "done",
                                        actions: (0, b.r)({ permissionResult: () => "prompt" }),
                                    },
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
                                    input: ({ context: l }) => ({
                                        ds: l.config.ds,
                                        dependencies: l.dependencies,
                                        disableIpify: l.disableIpify,
                                    }),
                                    onDone: {
                                        target: "done",
                                        actions: (0, b.r)({
                                            deepsightService: ({ event: l }) => l.output,
                                            deepsightInitAttempted: () => !0,
                                        }),
                                    },
                                    onError: {
                                        target: "done",
                                        actions: [
                                            (0, b.r)({ deepsightInitAttempted: () => !0 }),
                                            () => console.warn("Deepsight initialization failed"),
                                        ],
                                    },
                                },
                            },
                            done: { type: "final" },
                        },
                    },
                },
                onDone: [{ target: "capture", guard: "isReadyForCapture" }, { target: "permissions" }],
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
                                    guard: "isReadyForCapture",
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                },
                                {
                                    target: "ready",
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                },
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
                                            input: ({ context: l }) => ({
                                                ds: l.config.ds,
                                                dependencies: l.dependencies,
                                                disableIpify: l.disableIpify,
                                            }),
                                            onDone: {
                                                target: "initializingStream",
                                                actions: (0, b.r)({
                                                    deepsightService: ({ event: l }) => l.output,
                                                    deepsightInitAttempted: () => !0,
                                                }),
                                            },
                                            onError: {
                                                target: "initializingStream",
                                                actions: [
                                                    (0, b.r)({ deepsightInitAttempted: () => !0 }),
                                                    () => console.warn("Deepsight initialization failed in tutorial"),
                                                ],
                                            },
                                        },
                                    },
                                    initializingStream: {
                                        invoke: {
                                            id: "tutorialInitCamera",
                                            src: "initializeCamera",
                                            input: ({ context: l }) => ({
                                                config: l.config,
                                                deepsightService: l.deepsightService,
                                            }),
                                            onDone: { target: "ready", actions: "setStreamAndCapturer" },
                                            onError: [
                                                {
                                                    target: "#idCapture.tutorial.ready",
                                                    guard: "isPermissionDeniedError",
                                                    actions: (0, b.r)({ permissionResult: () => "denied" }),
                                                },
                                                {
                                                    target: "#idCapture.tutorial.ready",
                                                    actions: (0, b.r)({ error: ({ event: l }) => String(l.error) }),
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
                                    guard: "isReadyForCapture",
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                },
                                {
                                    target: "#idCapture.permissions.requesting",
                                    guard: "needsMotionPrimeOnly",
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                },
                                {
                                    target: "#idCapture.permissions",
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
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
                                    guard: "isReadyForCapture",
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                },
                                {
                                    target: "denied",
                                    guard: ({ event: l }) => "denied" === l.output,
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                },
                                {
                                    target: "motionOnly",
                                    guard: "needsMotionPrimeOnly",
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                },
                                {
                                    target: "waitingForUser",
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                },
                            ],
                            onError: {
                                target: "waitingForUser",
                                actions: (0, b.r)({ permissionResult: () => "prompt" }),
                            },
                        },
                        on: { REQUEST_PERMISSION: "requesting", GO_TO_LEARN_MORE: "learnMore" },
                    },
                    waitingForUser: { on: { REQUEST_PERMISSION: "requesting", GO_TO_LEARN_MORE: "learnMore" } },
                    motionOnly: { on: { REQUEST_PERMISSION: "requesting" } },
                    learnMore: { on: { BACK: "idle", REQUEST_PERMISSION: "requesting" } },
                    requesting: {
                        invoke: {
                            id: "requestPermission",
                            src: "requestPermission",
                            input: ({ context: l }) => ({
                                permissionResult: "refresh" === l.permissionResult ? void 0 : l.permissionResult,
                                requestMotionPermission: !0 === l.config.ds,
                            }),
                            onDone: [
                                {
                                    target: "#idCapture.capture",
                                    guard: "isReadyForCapture",
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                },
                                {
                                    target: "denied",
                                    guard: ({ event: l }) => "denied" === l.output,
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                },
                                {
                                    target: "waitingForUser",
                                    actions: (0, b.r)({ permissionResult: ({ event: l }) => l.output }),
                                },
                            ],
                            onError: { target: "denied" },
                        },
                    },
                    denied: { entry: (0, b.r)({ permissionResult: () => "refresh" }) },
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
                            input: ({ context: l }) => ({
                                ds: l.config.ds,
                                dependencies: l.dependencies,
                                disableIpify: l.disableIpify,
                            }),
                            onDone: {
                                target: "checkingStream",
                                actions: (0, b.r)({
                                    deepsightService: ({ event: l }) => l.output,
                                    deepsightInitAttempted: () => !0,
                                }),
                            },
                            onError: {
                                target: "checkingStream",
                                actions: [
                                    (0, b.r)({ deepsightInitAttempted: () => !0 }),
                                    () => console.warn("Deepsight initialization failed in capture"),
                                ],
                            },
                        },
                    },
                    initializing: {
                        invoke: {
                            id: "initializeCamera",
                            src: "initializeCamera",
                            input: ({ context: l }) => ({ config: l.config, deepsightService: l.deepsightService }),
                            onDone: { target: "detecting", actions: "setStreamAndCapturer" },
                            onError: [
                                {
                                    target: "#idCapture.permissions",
                                    guard: "isPermissionDeniedError",
                                    actions: (0, b.r)({ permissionResult: () => "denied" }),
                                },
                                {
                                    target: "#idCapture.error",
                                    actions: (0, b.r)({ error: ({ event: l }) => String(l.error) }),
                                },
                            ],
                        },
                    },
                    detecting: {
                        always: [
                            {
                                target: "manualCaptureWaiting",
                                guard: ({ context: l }) => l.manualCaptureTriggered,
                                actions: (0, b.r)({ detectionStatus: () => "manualCapture" }),
                            },
                        ],
                        entry: [(0, b.r)({ detectionStatus: () => "detecting" })],
                        invoke: [
                            {
                                id: "startRecording",
                                src: "startRecording",
                                input: ({ context: l }) => ({
                                    config: l.config,
                                    stream: l.stream,
                                    existing: l.recordingSession,
                                    currentMode: l.currentMode,
                                }),
                                onDone: {
                                    actions: (0, b.r)({
                                        recordingSession: ({ context: l, event: t }) => t.output ?? l.recordingSession,
                                    }),
                                },
                                onError: { actions: () => void 0 },
                            },
                            {
                                id: "runDetection",
                                src: "runDetection",
                                input: ({ context: l }) => ({
                                    frameCapturer: l.frameCapturer,
                                    provider: l.provider,
                                    config: l.config,
                                    currentMode: l.currentMode,
                                    detectionArea: l.detectionArea ?? l.config.detectionArea,
                                }),
                            },
                        ],
                        on: {
                            DETECTION_UPDATE: { actions: "setDetectionStatus" },
                            DETECTION_FRAME: { actions: (0, b.r)({ debugFrame: ({ event: l }) => l.frame }) },
                            DETECTION_RESET_READY: { actions: (0, b.r)({ resetDetection: ({ event: l }) => l.reset }) },
                            DETECTION_SUCCESS: {
                                target: "capturing",
                                actions: (0, b.r)({ qualityElements: ({ event: l }) => l.qualityElements }),
                            },
                            MANUAL_CAPTURE: { target: "capturingManual" },
                            SWITCH_TO_MANUAL_CAPTURE: {
                                target: "manualCaptureWaiting",
                                actions: (0, b.r)({
                                    detectionStatus: () => "manualCapture",
                                    manualCaptureTriggered: () => !0,
                                }),
                            },
                            COUNTER_VALUE_CHANGE: { actions: "setCounterValue" },
                            ID_TYPE_CHANGE: { actions: "setIdType" },
                            ID_SIDE_CHANGE: {
                                actions: (0, b.r)({
                                    detectionStatus: ({ event: l, context: t }) =>
                                        (function (l, t) {
                                            let d = t?.toLowerCase() || "",
                                                i = l.currentMode;
                                            if ("wrong" === d) return "wrongSide";
                                            let e = d.includes("back") && !d.includes("front"),
                                                c = d.includes("front") && !d.includes("back");
                                            return ("front" === i && e) || ("back" === i && c)
                                                ? "wrongSide"
                                                : (("front" === i && c) || "back" === i, "detecting");
                                        })(t, l.side),
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
                                actions: (0, b.r)(({ context: l }) => ({
                                    uploadError: U.UPLOAD_ERROR,
                                    attemptsRemaining: l.attemptsRemaining - 1,
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
                                actions: (0, b.r)(({ context: l }) => ({
                                    uploadError: U.UPLOAD_ERROR,
                                    attemptsRemaining: l.attemptsRemaining - 1,
                                })),
                            },
                        ],
                    },
                    uploading: {
                        entry: (0, b.r)({ uploadProgress: () => 0 }),
                        invoke: {
                            id: "uploadIdImage",
                            src: "uploadIdImage",
                            input: ({ context: l, self: t }) => {
                                let d = l.provider?.getOriginalCapturedCanvas();
                                if (!d) throw Error(U.UPLOAD_ERROR);
                                return {
                                    canvas: d,
                                    type: "back" === l.currentMode ? "back" : "front",
                                    qualityElements: l.qualityElements,
                                    onProgress: (l) => {
                                        t.send({ type: "UPLOAD_PROGRESS", progress: l });
                                    },
                                    deepsightService: l.deepsightService,
                                    stream: l.stream,
                                    isSecondId: l.config.isSecondId ?? !1,
                                    onlyFront: !1,
                                    ageAssurance: l.config.ageAssurance,
                                    dependencies: l.dependencies,
                                    captureResolution: l.captureResolution,
                                    cameraFallbackLevel: l.cameraFallbackLevel,
                                    extractIdFace: l.config.extractIdFace,
                                    croppedCanvas: l.provider?.getCapturedCanvas() ?? null,
                                };
                            },
                            onDone: {
                                target: "validatingUpload",
                                actions: [
                                    (0, b.r)({ uploadResponse: ({ event: l }) => l.output, uploadProgress: () => 100 }),
                                    "storeCapturedImage",
                                ],
                            },
                            onError: {
                                target: "uploadError",
                                actions: (0, b.r)(({ context: l, event: t }) => ({
                                    uploadError:
                                        (function (l) {
                                            if (l instanceof Error) {
                                                let t = l.message;
                                                return Object.values(U).find((l) => t.includes(l));
                                            }
                                        })(t.error) ?? U.UPLOAD_ERROR,
                                    attemptsRemaining: l.attemptsRemaining - 1,
                                })),
                            },
                        },
                        on: {
                            UPLOAD_PROGRESS: { actions: (0, b.r)({ uploadProgress: ({ event: l }) => l.progress }) },
                        },
                    },
                    validatingUpload: {
                        always: [
                            {
                                target: "uploadError",
                                guard: "hasUploadValidationError",
                                actions: ["setUploadErrorFromUploadValidation", "decrementAttemptsRemaining"],
                            },
                            {
                                target: "#idCapture.finished",
                                guard: (0, b.o)(["shouldSkipProcessId", "isUploadExpired"]),
                            },
                            {
                                target: "#idCapture.expiredExhausted",
                                guard: (0, b.o)(["isNotPassportMode", "isUploadExpired", "wasExpiredRedirected"]),
                                actions: ["setExhaustedFromUpload"],
                            },
                            {
                                target: "#idCapture.expiredExhausted",
                                guard: (0, b.o)(["isNotPassportMode", "isUploadExpired", "isExpiredAttemptsExhausted"]),
                                actions: ["incrementExpiredAttempts", "setExhaustedFromUpload"],
                            },
                            {
                                target: "#idCapture.expired",
                                guard: (0, b.o)(["isNotPassportMode", "isUploadExpired"]),
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
                                    input: ({ context: l }) => ({
                                        config: l.config,
                                        deepsightService: l.deepsightService,
                                    }),
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
                                        actions: (0, b.r)({ currentMode: () => "back" }),
                                    },
                                },
                            },
                            clicked: { type: "final" },
                        },
                    },
                },
                onDone: [
                    { target: "#idCapture.capture.detecting", guard: "hasStream" },
                    { target: "#idCapture.capture" },
                ],
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
                                    input: ({ context: l }) => ({
                                        config: l.config,
                                        deepsightService: l.deepsightService,
                                    }),
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
                                        actions: (0, b.r)({ currentMode: () => "front" }),
                                    },
                                },
                            },
                            clicked: { type: "final" },
                        },
                    },
                },
                onDone: [
                    { target: "#idCapture.capture.detecting", guard: "hasStream" },
                    { target: "#idCapture.capture" },
                ],
            },
            processing: {
                entry: "stopMediaStream",
                always: [{ target: "finished", guard: "shouldSkipProcessId" }],
                invoke: {
                    id: "processId",
                    src: "processId",
                    input: ({ context: l }) => ({ isSecondId: l.config.isSecondId ?? !1 }),
                    onDone: [
                        { target: "finished", guard: "forceFinishAfterProcessing" },
                        {
                            target: "expiredExhausted",
                            guard: (0, b.o)([
                                ({ event: l }) => l.output.isDocumentExpired,
                                "isProcessingExpiredExhausted",
                            ]),
                            actions: ["incrementProcessingExpiredAttempts"],
                        },
                        {
                            target: "expired",
                            guard: ({ event: l }) => l.output.isDocumentExpired,
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
                            target: "#idCapture.backFinished",
                            guard: (0, b.o)([
                                "wasExpiredFromUpload",
                                "isBackModeInMultiSideFlow",
                                (0, b.c)("wasExpiredRedirected"),
                            ]),
                            actions: [
                                "resetDetection",
                                "clearExpiredFromUpload",
                                "clearUploadFailure",
                                "setExpiredRedirected",
                            ],
                        },
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
                entry: "flagIdManualReview",
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
                    input: ({ context: l }) => ({
                        isSecondId: l.config.isSecondId ?? !1,
                        onlyFront: !1,
                        captureAttempts: l.config.captureAttempts,
                        extractIdFace: l.config.extractIdFace,
                    }),
                    onSnapshot: { actions: () => {} },
                    onDone: [
                        { guard: "isManualUploadExhausted", target: "#idCapture.finished" },
                        { target: "#idCapture.processing" },
                    ],
                    onError: {
                        target: "#idCapture.error",
                        actions: (0, b.r)({ error: ({ event: l }) => String(l.error) }),
                    },
                },
                on: {
                    QUIT: { target: "closed" },
                    MANUAL_UPLOAD_TAB_CHANGED: { actions: (0, b.n)("manualIdUpload", ({ event: l }) => l) },
                    MANUAL_UPLOAD_FILE_SELECTED: { actions: (0, b.n)("manualIdUpload", ({ event: l }) => l) },
                    MANUAL_UPLOAD_CONTINUE: { actions: (0, b.n)("manualIdUpload", ({ event: l }) => l) },
                    MANUAL_UPLOAD_RESET: { actions: (0, b.n)("manualIdUpload", ({ event: l }) => l) },
                },
            },
            digitalIdUpload: {
                invoke: {
                    id: "digitalIdUpload",
                    src: "digitalUploadMachine",
                    input: ({ context: l }) => ({
                        showTutorial: l.config.showTutorial,
                        attemptsRemaining: l.attemptsRemaining,
                        extractIdFace: l.config.extractIdFace,
                    }),
                    onSnapshot: { actions: () => {} },
                    onDone: [
                        {
                            guard: "isDigitalUploadExhausted",
                            target: "#idCapture.finished",
                            actions: ["syncAttemptsFromDigitalUpload"],
                        },
                        {
                            guard: "isDigitalUploadSuccessful",
                            target: "#idCapture.processing",
                            actions: ["syncAttemptsFromDigitalUpload", "storeDigitalUploadResponse"],
                        },
                        {
                            target: "#idCapture.error",
                            actions: (0, b.r)({ error: () => "Digital upload finished without output" }),
                        },
                    ],
                    onError: {
                        target: "#idCapture.error",
                        actions: (0, b.r)({ error: ({ event: l }) => String(l.error) }),
                    },
                },
                on: {
                    QUIT: { target: "closed" },
                    DIGITAL_UPLOAD_NEXT_STEP: { actions: (0, b.n)("digitalIdUpload", { type: "NEXT_STEP" }) },
                    DIGITAL_UPLOAD_FILE_PICKED: {
                        actions: (0, b.n)("digitalIdUpload", ({ event: l }) => ({ type: "FILE_PICKED", file: l.file })),
                    },
                    DIGITAL_UPLOAD_CONFIRM: { actions: (0, b.n)("digitalIdUpload", { type: "CONFIRM" }) },
                    DIGITAL_UPLOAD_REPLACE: { actions: (0, b.n)("digitalIdUpload", { type: "REPLACE" }) },
                    DIGITAL_UPLOAD_RETRY: { actions: (0, b.n)("digitalIdUpload", { type: "RETRY" }) },
                    DIGITAL_UPLOAD_SCAN_INSTEAD: { actions: (0, b.n)("digitalIdUpload", { type: "SCAN_INSTEAD" }) },
                    DIGITAL_UPLOAD_CHOOSE_ANOTHER: { actions: (0, b.n)("digitalIdUpload", { type: "CHOOSE_ANOTHER" }) },
                },
            },
        },
    });
function lW(l) {
    let { context: t } = l;
    if (l.matches("idle")) return { status: "idle" };
    if (
        l.matches({ capture: "checkingStream" }) ||
        l.matches({ capture: "initializingDeepsight" }) ||
        l.matches({ capture: "initializing" }) ||
        l.matches({ permissions: "idle" })
    )
        return { status: "loading" };
    if (l.matches("chooser")) return { status: "chooser", availableDocumentTypes: t.availableDocumentTypes };
    if (l.matches("loading")) return { status: "loading" };
    if (l.matches("tutorial"))
        return { status: "tutorial", selectedDocumentType: t.selectedDocumentType, currentMode: t.currentMode };
    if (l.matches("ageVerification")) return { status: "ageVerification" };
    if (l.matches("closed")) return { status: "closed" };
    if (l.matches("permissions")) {
        let t = (function (l) {
            if (l.matches("permissions")) {
                if (l.matches({ permissions: "idle" }) || l.matches({ permissions: "waitingForUser" })) return "idle";
                if (l.matches({ permissions: "learnMore" })) return "learnMore";
                if (l.matches({ permissions: "requesting" })) return "requesting";
                if (l.matches({ permissions: "denied" })) return "denied";
                if (l.matches({ permissions: "motionOnly" })) return "motionOnly";
            }
        })(l);
        return void 0 === t
            ? { status: "permissions", permissionStatus: "idle" }
            : { status: "permissions", permissionStatus: t };
    }
    if (l.matches("capture"))
        return (function (l, t) {
            var d, i;
            let e,
                c =
                    ((e = {
                        initializing: l.matches({ capture: "initializing" }),
                        detecting: l.matches({ capture: "detecting" }),
                        manualCaptureWaiting: l.matches({ capture: "manualCaptureWaiting" }),
                        capturing: l.matches({ capture: "capturing" }),
                        capturingManual: l.matches({ capture: "capturingManual" }),
                        uploading: l.matches({ capture: "uploading" }),
                        uploadError: l.matches({ capture: "uploadError" }),
                        success: l.matches({ capture: "success" }),
                    }).initializing
                        ? "initializing"
                        : e.detecting || e.manualCaptureWaiting
                          ? "detecting"
                          : e.capturing || e.capturingManual
                            ? "capturing"
                            : e.uploading
                              ? "uploading"
                              : e.uploadError
                                ? "uploadError"
                                : e.success
                                  ? "success"
                                  : void 0) ?? "initializing",
                { uploadError: a, uploadResponse: s } = t;
            return {
                status: "capture",
                captureStatus: c,
                stream: t.stream,
                detectionStatus: t.detectionStatus,
                debugFrame: void 0,
                attemptsRemaining: t.attemptsRemaining,
                uploadError: a,
                currentMode: t.currentMode,
                counterValue: t.counterValue,
                orientation: t.orientation,
                idType: t.idType,
                previewImageUrl: t.previewImageUrl,
                uploadProgress: t.uploadProgress ?? 0,
                ageAssurance: !0 === t.config.ageAssurance,
                uploadErrorMessage: a
                    ? ((d = t.currentMode),
                      a
                          ? "CLASSIFICATION_FAILED" === a
                              ? "passport" === d
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
                                }[a]
                          : void 0)
                    : void 0,
                uploadErrorDescription: a
                    ? ((i = t.currentMode),
                      a
                          ? "WRONG_DOCUMENT_SIDE" === a
                              ? s?.side === "back"
                                  ? "idv2.capture.processing.errors.wrongSide.back.subtitle"
                                  : "idv2.capture.processing.errors.wrongSide.front.subtitle"
                              : "CLASSIFICATION_FAILED" === a
                                ? "passport" === i
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
                                  }[a]
                          : void 0)
                    : void 0,
                needsBackCapture:
                    !t.isDigitalUpload &&
                    ("front" === t.currentMode || "passport" === t.currentMode) &&
                    !t.config.onlyBack &&
                    (!t.config.usSmartCapture || "front" !== t.currentMode) &&
                    t.uploadResponse?.skipBackIdCapture !== !0,
                needsFrontCapture:
                    !0 === t.config.usSmartCapture &&
                    "back" === t.currentMode &&
                    t.uploadResponse?.forceFrontIdCapture === !0,
                showCaptureButtonInAuto: t.config.showCaptureButtonInAuto ?? !1,
                canRetry: t.attemptsRemaining > 0,
            };
        })(l, t);
    if (l.matches("mandatoryConsent"))
        return { status: "mandatoryConsent", regulationType: t.uploadResponse?.regulationType ?? "Other" };
    if (l.matches("frontFinished")) return { status: "frontFinished" };
    if (l.matches("backFinished")) return { status: "backFinished" };
    if (l.matches("processing")) return { status: "processing" };
    if (l.matches("expiredExhausted")) return { status: "expiredExhausted" };
    if (l.matches("expired")) {
        let l = t.expiredFromUpload ? t.expiredAttempts : t.processingExpiredAttempts;
        return {
            status: "expired",
            attemptsRemaining: Math.max(0, (t.expiredFromUpload ? 3 : t.config.captureAttempts) - l),
            currentMode: t.currentMode,
        };
    }
    if (l.matches("finished")) return { status: "finished" };
    if (l.matches("error")) return { status: "error", error: t.error ?? "Unknown error" };
    if (l.matches("manualIdUpload"))
        return (function (l) {
            let t,
                d,
                { config: i } = l.context,
                { showIdTab: e, showPassportTab: c } =
                    ((t = !!i.enableId),
                    (d = !!i.enablePassport),
                    t || d ? { showIdTab: t, showPassportTab: d } : { showIdTab: !0, showPassportTab: !0 }),
                a = l.children.manualIdUpload?.getSnapshot(),
                s = a?.context,
                n = a?.value,
                Z = (s?.backUploaded ?? !1) || (s?.skipBackFromServer ?? !1),
                b = (s?.frontUploaded ?? !1) && Z,
                m = s?.activeTab === "id" ? b : (s?.passportUploaded ?? !1);
            return {
                status: "manualUpload",
                phase:
                    "retriesExhausted" === n
                        ? "exhausted"
                        : "uploadingFront" === n || "uploadingBack" === n || "uploadingPassport" === n
                          ? "uploading"
                          : "selecting",
                uploadingSide:
                    "uploadingFront" === n
                        ? "front"
                        : "uploadingBack" === n
                          ? "back"
                          : "uploadingPassport" === n
                            ? "passport"
                            : void 0,
                activeTab: s?.activeTab ?? "id",
                showIdTab: e,
                showPassportTab: c,
                showBackSlot: !0,
                frontFileName: s?.frontFile?.name,
                backFileName: s?.backFile?.name,
                passportFileName: s?.passportFile?.name,
                frontUploaded: s?.frontUploaded ?? !1,
                backUploaded: Z,
                passportUploaded: s?.passportUploaded ?? !1,
                canContinue: m,
                retriesLeft: s?.retriesLeft ?? l.context.config.captureAttempts,
                errorKey: s?.errorMessage ?? null,
                errorSide: s?.errorSide ?? null,
            };
        })(l);
    if (l.matches("digitalIdUpload")) {
        let t, d, i;
        return (
            (t = l.children.digitalIdUpload?.getSnapshot()),
            (d = t?.context),
            {
                status: "digitalIdUpload",
                phase:
                    "tutorial" === (i = t?.value)
                        ? "tutorial"
                        : "selecting" === i
                          ? "selecting"
                          : "reviewing" === i
                            ? "reviewing"
                            : "success" === i
                              ? "success"
                              : "error" === i
                                ? "error"
                                : "fileTooLarge" === i
                                  ? "fileTooLarge"
                                  : "terminalError" === i
                                    ? "exhausted"
                                    : t?.matches({ uploading: "holding" })
                                      ? "holding"
                                      : t?.matches({ uploading: "analyzing" })
                                        ? "uploading"
                                        : "selecting",
                file: d?.file ?? null,
                fileName: d?.file?.name,
                failReason: d?.failReason ?? null,
                attemptsRemaining: d?.attemptsRemaining ?? l.context.config.captureAttempts,
                uploadProgress: d?.uploadProgress ?? 0,
                pickerRequestId: d?.pickerRequestId ?? 0,
            }
        );
    }
    return { status: "idle" };
}
function lG({ actor: l, trackElementClicked: t, trackCaptureAttemptFinished: d }) {
    let i = l.getSnapshot();
    return (
        i.context.dependencies && (i.context.dependencies.trackCaptureAttemptFinished = d),
        {
            load() {
                let { config: t } = l.getSnapshot().context;
                !0 === t.ds && (0, m.n)(!0), (0, o.o)(), l.send({ type: "LOAD" });
            },
            selectDocument(d) {
                t?.(`selectDocument.${d}`), l.send({ type: "SELECT_DOCUMENT", documentType: d });
            },
            async nextStep() {
                t?.("nextStep");
                let d = l.getSnapshot();
                if (d.matches("tutorial")) {
                    let { config: l, permissionResult: t } = d.context;
                    await (0, o.r)({ ds: l.ds, cameraGranted: "granted" === t });
                }
                l.send({ type: "NEXT_STEP" });
            },
            requestPermission() {
                t?.("requestPermission"), l.send({ type: "REQUEST_PERMISSION" });
            },
            goToLearnMore() {
                t?.("goToLearnMore"), l.send({ type: "GO_TO_LEARN_MORE" });
            },
            back() {
                t?.("back"), l.send({ type: "BACK" });
            },
            close() {
                t?.("close"), l.send({ type: "QUIT" });
            },
            reset() {
                l.send({ type: "RESET" });
            },
            retryCapture() {
                t?.("retryCapture"), l.send({ type: "RETRY_CAPTURE" });
            },
            continueExhausted() {
                t?.("continueExhausted"), l.send({ type: "CONTINUE_EXHAUSTED" });
            },
            continueFromError() {
                t?.("continueFromError"), l.send({ type: "CONTINUE_FROM_ERROR" });
            },
            capture() {
                t?.("capture"), l.send({ type: "MANUAL_CAPTURE" });
            },
            switchToManualCapture() {
                t?.("switchToManualCapture"), l.send({ type: "SWITCH_TO_MANUAL_CAPTURE" });
            },
            continueToBack() {
                t?.("continueToBack"), l.send({ type: "CONTINUE_TO_BACK" });
            },
            continueToFront() {
                t?.("continueToFront"), l.send({ type: "CONTINUE_TO_FRONT" });
            },
            skipBack() {
                t?.("skipBack"), l.send({ type: "SKIP_BACK" });
            },
            acceptMandatoryConsent() {
                t?.("acceptMandatoryConsent"), l.send({ type: "CONSENT_ACCEPT" });
            },
            cancelMandatoryConsent() {
                t?.("cancelMandatoryConsent"), l.send({ type: "CONSENT_CANCEL" });
            },
            updateDetectionArea(t) {
                l.send({ type: "UPDATE_DETECTION_AREA", detectionArea: t });
            },
            manualUploadChangeTab(d) {
                t?.(`manualUpload.tab.${d}`), l.send({ type: "MANUAL_UPLOAD_TAB_CHANGED", tab: d });
            },
            manualUploadSelectFile(d, i) {
                t?.(`manualUpload.select.${d}`), l.send({ type: "MANUAL_UPLOAD_FILE_SELECTED", side: d, file: i });
            },
            manualUploadContinue() {
                t?.("manualUpload.continue"), l.send({ type: "MANUAL_UPLOAD_CONTINUE" });
            },
            manualUploadReset() {
                t?.("manualUpload.reset"), l.send({ type: "MANUAL_UPLOAD_RESET" });
            },
            digitalUploadNextStep() {
                t?.("digitalUpload.nextStep"), l.send({ type: "DIGITAL_UPLOAD_NEXT_STEP" });
            },
            digitalUploadPickFile(d) {
                t?.("digitalUpload.pickFile"), l.send({ type: "DIGITAL_UPLOAD_FILE_PICKED", file: d });
            },
            digitalUploadConfirm() {
                t?.("digitalUpload.confirmFile"), l.send({ type: "DIGITAL_UPLOAD_CONFIRM" });
            },
            digitalUploadReplace() {
                t?.("digitalUpload.replaceFile"), l.send({ type: "DIGITAL_UPLOAD_REPLACE" });
            },
            digitalUploadRetry() {
                t?.("digitalUpload.retry"), l.send({ type: "DIGITAL_UPLOAD_RETRY" });
            },
            digitalUploadScanInstead() {
                t?.("digitalUpload.scanInstead"), l.send({ type: "DIGITAL_UPLOAD_SCAN_INSTEAD" });
            },
            digitalUploadChooseAnother() {
                t?.("digitalUpload.chooseAnother"), l.send({ type: "DIGITAL_UPLOAD_CHOOSE_ANOTHER" });
            },
        }
    );
}
let lp = {
        tutorial: "idCapture.tutorial.front",
        capturePrefix: "idCapture.frontCapture",
        analyzingPrefix: "idCapture.frontAnalyzing",
        errorPrefix: "idCapture.frontCaptureError",
        successPrefix: "idCapture.frontCaptureSuccess",
        liveCueSide: "showfront",
    },
    lN = {
        tutorial: "idCapture.tutorial.back",
        capturePrefix: "idCapture.backCapture",
        analyzingPrefix: "idCapture.backAnalyzing",
        errorPrefix: "idCapture.backCaptureError",
        successPrefix: "idCapture.backCaptureSuccess",
        liveCueSide: "showback",
    },
    lM = { tutorial: "idCapture.tutorial.passport" };
function lX(l, t) {
    switch (t) {
        case "wrongSide":
            return `${l.capturePrefix}.livecue-${l.liveCueSide}`;
        case "blur":
            return `${l.capturePrefix}.livecue-blur`;
        case "farAway":
        case "idNotDetected":
            return `${l.capturePrefix}.livecue-align`;
        case "glare":
            return `${l.capturePrefix}.livecue-glare`;
        case "offline":
            return `${l.capturePrefix}.livecue-dark`;
        case "manualCapture":
            return `${l.capturePrefix}.manual`;
        case "capturing":
            return `${l.capturePrefix}.takingphoto`;
        default:
            return `${l.capturePrefix}.default`;
    }
}
function lr(l, t) {
    switch (t) {
        case "WRONG_DOCUMENT_SIDE":
            return `${l.errorPrefix}.wrongside`;
        case "GLARE_DETECTED":
            return `${l.errorPrefix}.glare`;
        case "LOW_SHARPNESS":
            return `${l.errorPrefix}.blur`;
        case "READABILITY_ISSUE":
            return `${l.errorPrefix}.notreadable`;
        case "ID_TYPE_UNACCEPTABLE":
        case "CLASSIFICATION_FAILED":
            return `${l.errorPrefix}.notaccepted`;
        case "RETRY_EXHAUSTED_CONTINUE_TO_BACK":
        case "RETRY_EXHAUSTED_SKIP_BACK":
        case "NO_MORE_TRIES":
            return `${l.errorPrefix}.failedExhausted`;
        case "NO_TOKEN":
        case "SERVER_ERROR":
            return `${l.errorPrefix}.nointernet`;
        default:
            return `${l.errorPrefix}.failed`;
    }
}
function ly(l, t) {
    let { config: d } = l.context;
    return d?.onlyBack === !0 || d?.showCaptureButtonInAuto === !0
        ? `${t.successPrefix}.captureonly`
        : `${t.successPrefix}.default`;
}
function lY(l) {
    return (function (l) {
        let { value: t, context: d } = l;
        if (null == t) return;
        let i = (0, c.o)(t);
        if (void 0 === i) return;
        let e = "back" === (a = d.currentMode) ? lN : "passport" === a ? { ...lp, ...lM } : lp;
        switch (i) {
            case "idle":
            case "loading":
                return "idCapture.loader.default";
            case "chooser":
                return "idCapture.documentchooser";
            case "tutorial":
                return e.tutorial;
            case "ageVerification":
                return "idCapture.tutorial.ageverification";
            case "permissions":
                var a;
                if ("object" != typeof t || null === t) return "idCapture.permissions.default";
                switch (t.permissions) {
                    case "requesting":
                        return "idCapture.permissions.required";
                    case "denied":
                        return "idCapture.permissions.quit";
                    case "learnMore":
                        return "idCapture.commonissues.default";
                    case "motionOnly":
                        return "idCapture.permissions.motionOnly";
                    default:
                        return "idCapture.permissions.default";
                }
            case "capture":
                return (function (l, t) {
                    let { value: d, context: i } = l;
                    if ("object" != typeof d || null === d) return;
                    let e = d.capture;
                    if (void 0 !== e) {
                        if ("string" == typeof e)
                            switch (e) {
                                case "checkingStream":
                                case "initializing":
                                case "initializingDeepsight":
                                    return "idCapture.loader.preparingcamera";
                                case "detecting":
                                    return lX(t, i.detectionStatus);
                                case "manualCaptureWaiting":
                                case "capturingManual":
                                    return `${t.capturePrefix}.manual`;
                                case "capturing":
                                    return `${t.capturePrefix}.takingphoto`;
                                case "uploading":
                                case "validatingUpload":
                                    return `${t.analyzingPrefix}.uploading`;
                                case "uploadError":
                                    return lr(t, i.uploadError);
                                case "success":
                                    return ly(l, t);
                            }
                        if ("object" == typeof e && null !== e) {
                            let d = Object.keys(e);
                            if (
                                d.includes("checkingStream") ||
                                d.includes("initializing") ||
                                d.includes("initializingDeepsight")
                            )
                                return "idCapture.loader.preparingcamera";
                            if (d.includes("detecting")) return lX(t, i.detectionStatus);
                            if (d.includes("manualCaptureWaiting")) return `${t.capturePrefix}.manual`;
                            if (d.includes("capturing")) return `${t.capturePrefix}.takingphoto`;
                            if (d.includes("capturingManual")) return `${t.capturePrefix}.manual`;
                            if (d.includes("uploading") || d.includes("validatingUpload"))
                                return `${t.analyzingPrefix}.uploading`;
                            if (d.includes("uploadError")) return lr(t, i.uploadError);
                            if (d.includes("success")) return ly(l, t);
                        }
                        return `${t.capturePrefix}.default`;
                    }
                })(l, e);
            case "mandatoryConsent":
                return "idCapture.mandatoryConsent";
            case "frontFinished":
                return "idCapture.flipid.showback";
            case "backFinished":
                return "idCapture.flipid.showfront";
            case "processing":
                return `${e.analyzingPrefix}.processing`;
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
                let t = l.children.digitalIdUpload?.getSnapshot(),
                    d = t?.context;
                var s = t?.value,
                    n = d?.failReason ?? null;
                if ("tutorial" === s) return "uploadDigitalid.tutorial.default";
                if ("selecting" === s || "reviewing" === s) return "uploadDigitalid.review.default";
                if (
                    "uploading" === s ||
                    (function (l) {
                        if ("holding" === l) return !0;
                        if ("object" != typeof l || null === l) return !1;
                        let t = l.uploading;
                        return (
                            "holding" === t ||
                            ("object" == typeof t && null !== t && Object.prototype.hasOwnProperty.call(t, "holding"))
                        );
                    })(s)
                )
                    return "uploadDigitalid.analyzing.default";
                if ("success" === s) return "uploadDigitalid.success.default";
                if ("fileTooLarge" === s) return "uploadDigitalid.error.filetoolarge";
                if ("error" === s)
                    return null !== n && S.has(n)
                        ? "uploadDigitalid.error.notaccepted"
                        : "uploadDigitalid.error.default";
                return "uploadDigitalid.review.default";
            }
            case "manualIdUpload": {
                let t = l.children.manualIdUpload?.getSnapshot(),
                    d = t?.context;
                return (
                    (function (l, t) {
                        if ("selecting" === l && void 0 !== t)
                            return null !== t.errorMessage
                                ? "IDmanual.error.document"
                                : "passport" === t.activeTab
                                  ? t.passportUploaded
                                      ? "IDmanual.upload.uploadedPassport"
                                      : "IDmanual.upload.passport"
                                  : t.frontUploaded
                                    ? t.backUploaded || t.skipBackFromServer || t.onlyFront
                                        ? "IDmanual.upload.uploadedFrontandBack"
                                        : "IDmanual.upload.uploadedFront"
                                    : "IDmanual.upload.default";
                    })(t?.value, d) ?? "idCapture.manualIdUpload"
                );
            }
            default:
                return `idCapture.${i}`;
        }
    })(l);
}
let lT = {
    WRONG_DOCUMENT_SIDE: "wrongSide",
    GLARE_DETECTED: "glare",
    LOW_SHARPNESS: "blur",
    READABILITY_ISSUE: "notReadable",
    ID_TYPE_UNACCEPTABLE: "notAccepted",
    CLASSIFICATION_FAILED: "notAccepted",
    RETRY_EXHAUSTED_CONTINUE_TO_BACK: "failedExhausted",
    RETRY_EXHAUSTED_SKIP_BACK: "failedExhausted",
    NO_MORE_TRIES: "failedExhausted",
    NO_TOKEN: "noConnection",
    SERVER_ERROR: "noConnection",
    UPLOAD_ERROR: "failed",
    UNEXPECTED_ERROR: "failed",
    PERMISSION_DENIED: "failed",
    USER_CANCELLED: "failed",
};
function lV(l) {
    let t = (0, c.o)(l.value);
    if (void 0 !== t)
        switch (t) {
            case "error":
                return "error.unknown";
            case "expired":
                return "error.expired";
            case "expiredExhausted":
                return "error.expiredExhausted";
            case "capture": {
                if (
                    !(function (l, t) {
                        if ("object" != typeof l || null === l) return !1;
                        let d = l.capture;
                        return "string" == typeof d ? d === t : "object" == typeof d && null !== d && t in d;
                    })(l.value, "uploadError")
                )
                    return;
                let t = l.context.uploadError;
                return `error.${t ? lT[t] : "failed"}`;
            }
            default:
                return;
        }
}
function lL(l) {
    let t = (0, c.o)(l.value);
    if ("expired" === t) return { reason: "documentExpired" };
    if ("expiredExhausted" === t) return { reason: "documentExpiredExhausted" };
    if ("error" === t) return { reason: "fatal" };
    let d = l.context.uploadError;
    if (void 0 !== d) return { errorCode: d, reason: lT[d] ?? "failed" };
}
function lI(l) {
    let t;
    return (function (l, t = new m.t()) {
        return (0, b.l)({
            actor: l,
            mapState: lW,
            createApi: lG,
            instrumentation: (0, c.s)(c.n.idCapture, {
                getEventScreenName: lY,
                getErrorName: lV,
                getErrorPayload: lL,
                visibilityObserver: t,
            }),
        });
    })(
        ((t = l.dependencies ?? { storage: new u.t() }),
        (0, b.s)(lh, { input: { config: l.config, dependencies: t } }).start()),
    );
}
async function lz(l, t) {
    let d = l.canvas;
    if (!d) throw Error(U.UPLOAD_ERROR);
    let i = d.getImageData() ?? void 0,
        e = "";
    if (l.deepsightService && i)
        try {
            if ((await l.deepsightService.analyzeFrame(i), t.aborted)) throw new DOMException("Aborted", "AbortError");
            e = l.deepsightService.getMetadata();
        } catch (l) {
            if (l?.name === "AbortError") throw l;
        }
    let c = d.getBase64Image() ?? "";
    d.updateBlob();
    let a = d.getBlobData();
    if (!a) throw Error(U.UPLOAD_ERROR);
    return {
        imageBase64: c,
        blob: a.blob,
        url: a.url,
        metadata: e,
        croppedImage: (function (l) {
            if (!l) return;
            l.updateBlob();
            let t = l.getBlobData();
            if (!t) return;
            let d = l.getBase64Image() ?? "";
            if (d) return { imageBase64: d, blob: t.blob, url: t.url };
        })(l.croppedCanvas ?? null),
    };
}
d(219282),
    lh.provide({
        actors: {
            uploadIdImage: (0, b.a)(async ({ input: l, signal: t }) => await lz(l, t)),
            processId: (0, b.a)(async () => ({ isDocumentExpired: !1 })),
            startRecording: (0, b.a)(async () => void 0),
        },
        actions: {
            storeCapturedImage: (0, b.r)(({ context: l, event: t }) => {
                if (!("output" in t) || !l.currentMode) return { captureOnlyImages: l.captureOnlyImages };
                let d = t.output,
                    i = "back" === l.currentMode ? "back" : "front";
                return {
                    captureOnlyImages: { ...l.captureOnlyImages, [i]: d },
                    previewImageUrl: d.croppedImage?.url ?? d.url ?? l.previewImageUrl,
                };
            }),
        },
        guards: {
            hasUploadValidationError: () => !1,
            shouldContinueToBack: ({ context: l }) =>
                ("front" === l.currentMode || "passport" === l.currentMode) &&
                !l.config.onlyFront &&
                !l.config.onlyBack &&
                !l.config.usSmartCapture,
        },
    });
