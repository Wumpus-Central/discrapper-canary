r.d(t, { documentCaptureMachine: () => h, D: () => M }), r(987800);
var a = r(768672),
    i = r(368499),
    o = r(288052);
r(749378);
var n = r(168056);
r(395751);
var s = r(248051),
    u = r(305463);
r(550155);
var c = r(713692),
    p = r(659750);
let d = {
        processV5CLogbook: "v5cMultiPageLogbook",
        processCirculationCard: "circulationCard",
        processFinanceSettlement: "financeSettlement",
        processCarInvoice: "carInvoice",
        asyncProcessCarInvoice: "carInvoice",
        asyncProcessCirculationCard: "circulationCard",
        capture: "addressStatement",
    },
    l = ["v5cMultiPageLogbook", "circulationCard", "financeSettlement"],
    m = new Set(["otherDocument1", "otherDocument2", "otherDocument3"]),
    g = "UPLOAD_FAILED";
function f(e) {
    return l.includes(e);
}
function C(e, t, r) {
    return `${e}?type=${encodeURIComponent(t)}&format=${r}`;
}
async function E({ base64Image: e, processingType: t, fileFormat: r, onProgress: i, signal: n }) {
    let s,
        u,
        c =
            ((s = "application/pdf" === r ? "pdf" : "image"),
            f((u = d[t] ?? t))
                ? C(o.t.documentV3, u, s)
                : "carInvoice" === u
                  ? C(o.t.cfdi, u, s)
                  : m.has(u)
                    ? C(o.t.addDocument, u, s)
                    : "addressStatement" !== u && u
                      ? C(o.t.addressStatement, t, s)
                      : C(o.t.addressStatement, u || "addressStatement", s)),
        p = e.includes(",") ? e.split(",")[1] : e,
        l = await a.t.post(c, { base64Image: p }, { signal: n, onUploadProgress: i });
    if (!l.ok) throw Error(`Document upload failed: ${l.status}`);
    if (
        !(
            l.data.success ||
            "SUCCESS" === l.data.status ||
            "ADD_NEXT_PAGE" === l.data.status ||
            "OPTIONAL_PAGE_CAPTURE" === l.data.status
        )
    )
        throw Error("Document upload rejected by server");
    return l.data;
}
function P(e) {
    let t = d[e] ?? e;
    return f(t) ? t : null;
}
async function y({ processingType: e, signal: t }) {
    let r = P(e);
    if (!r) throw Error(`finalizeDocument only supports multi-page types (${l.join(", ")})`);
    let i = await a.t.post(o.t.finalizeDocument, { type: r }, { signal: t });
    if (!i.ok) throw Error(`Document finalize failed: ${i.status}`);
    let n = i.data;
    if (!n) throw Error("Document finalize rejected by server");
    if (!(n.success || "SUCCESS" === n.status)) {
        let e = "string" == typeof n.status ? n.status : "unknown";
        throw Error(`Document finalize rejected by server (status: ${e})`);
    }
    return n;
}
let h = (0, n.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        checkPermission: (0, n.a)(async () => (0, s.t)()),
        requestPermission: (0, n.a)(async ({ input: e }) => (0, s.n)(e)),
        initCamera: (0, n.a)(async () => {
            let { stream: e } = await (0, c.n)(void 0);
            return e;
        }),
        uploadDocument: (0, n.a)(async ({ input: e, signal: t }) =>
            E({
                base64Image: e.capturedDocument.imageBase64,
                processingType: e.processingType,
                fileFormat: e.capturedDocument.fileType,
                onProgress: e.onProgress,
                signal: t,
            }),
        ),
        finalizeDocumentRequest: (0, n.a)(async ({ input: e, signal: t }) =>
            y({ processingType: e.processingType, signal: t }),
        ),
    },
    actions: {
        setStream: (0, n.r)(({ event: e }) => ({ stream: e.output })),
        setCapturedDocument: (0, n.r)(({ event: e }) => ({
            capturedDocument: { imageBase64: e.imageBase64, file: e.file, fileType: e.fileType },
            error: void 0,
        })),
        setFileTooLargeError: (0, n.r)({ error: () => "FILE_TOO_LARGE" }),
        setProgress: (0, n.r)(({ event: e }) => ({ progress: e.progress })),
        setUploadError: (0, n.r)({ error: () => g }),
        setFinalizeError: (0, n.r)({ error: () => "UNEXPECTED_ERROR" }),
        decrementAttemptsRemaining: (0, n.r)(({ context: e }) => ({ attemptsRemaining: e.attemptsRemaining - 1 })),
        setCaptureMethodFile: (0, n.r)({ captureMethod: () => "file" }),
        setCaptureMethodCamera: (0, n.r)({ captureMethod: () => "camera" }),
        setCaptureMethodGallery: (0, n.r)({ captureMethod: () => "gallery" }),
        clearCapturedDocument: (0, n.r)({
            capturedDocument: () => void 0,
            captureMethod: () => void 0,
            progress: () => 0,
            error: () => void 0,
        }),
        resetPageNumber: (0, n.r)({ pageNumber: () => 1 }),
        clearCapturedDocumentGalleryRetake: (0, n.r)({
            capturedDocument: () => void 0,
            progress: () => 0,
            error: () => void 0,
        }),
        setNextPageType: (0, n.r)(({ context: e, event: t }) => {
            let { status: r } = t.output;
            return "file" === e.captureMethod && e.capturedDocument?.fileType === "application/pdf"
                ? { nextPageType: "none" }
                : {
                      nextPageType:
                          "ADD_NEXT_PAGE" === r ? "required" : "OPTIONAL_PAGE_CAPTURE" === r ? "optional" : "none",
                  };
        }),
        clearForNextPage: (0, n.r)(({ context: e }) => ({
            capturedDocument: void 0,
            progress: 0,
            error: void 0,
            pageNumber: e.pageNumber + 1,
            nextPageType: "none",
            captureMethod: void 0,
        })),
        clearError: (0, n.r)({ error: () => void 0 }),
        resetProgress: (0, n.r)({ progress: () => 0 }),
        stopStream: (0, n.r)(({ context: e }) => (e.stream && (0, u.a)(e.stream), { stream: void 0 })),
    },
    guards: {
        allowSkip: ({ context: e }) => e.config.allowSkipDocumentCapture && 1 === e.pageNumber,
        fileSizeOk: ({ context: e, event: t }) => t.file.size <= e.config.maxFileSize,
        canRetry: ({ context: e }) => e.attemptsRemaining > 0,
        attemptsExhausted: ({ context: e }) => e.attemptsRemaining <= 0,
        isCameraMode: ({ context: e }) => "camera" === e.config.captureMode,
        isCameraPermissionGranted: ({ context: e, event: t }) => {
            let r = t.output;
            return (0, p.t)((0, p.r)(r, e.permissionResult), !1);
        },
        isCameraPermissionDenied: ({ event: e }) => "denied" === e.output,
        isCaptureMethodCamera: ({ context: e }) => "camera" === e.captureMethod,
        isCaptureMethodGallery: ({ context: e }) => "gallery" === e.captureMethod,
        isCaptureMethodFile: ({ context: e }) => "file" === e.captureMethod,
        isNextPageOptional: ({ context: e }) => "optional" === e.nextPageType,
        isNextPageRequired: ({ context: e }) => "required" === e.nextPageType,
        canFinalizeOptionalPages: ({ context: e }) =>
            "optional" === e.nextPageType && null !== P(e.config.processingType),
        fileSizeOkForGallery: ({ context: e, event: t }) =>
            t.file.size <= e.config.maxFileSize && "gallery" === e.captureMethod,
        fileSizeOkForNonGallery: ({ context: e, event: t }) =>
            t.file.size <= e.config.maxFileSize && "gallery" !== e.captureMethod,
    },
}).createMachine({
    id: "documentCapture",
    initial: "tutorial",
    context: ({ input: e }) => {
        let {
            processingType: t = "addressStatement",
            captureMode: r = "camera",
            allowSkipDocumentCapture: a,
            disableSkipPoa: i,
            captureAttempts: o = 3,
            sendBase64: n = !1,
            maxFileSize: s = 0xa00000,
            title: u,
            text: c,
            step2Title: p,
            step2Text: d,
        } = e.config;
        return {
            config: {
                processingType: t,
                captureMode: r,
                allowSkipDocumentCapture: a ?? (null != i && !i),
                captureAttempts: o,
                sendBase64: n,
                maxFileSize: s,
                title: u,
                text: c,
                step2Title: p,
                step2Text: d,
            },
            stream: void 0,
            permissionResult: void 0,
            capturedDocument: void 0,
            captureMethod: void 0,
            progress: 0,
            error: void 0,
            attemptsRemaining: o,
            pageNumber: 1,
            nextPageType: "none",
        };
    },
    states: {
        tutorial: {
            on: {
                CAPTURE: [{ target: "permissions", guard: "isCameraMode" }, { target: "capturing" }],
                FILE_SELECTED: [
                    {
                        target: "preview",
                        guard: "fileSizeOk",
                        actions: ["setCapturedDocument", "setCaptureMethodFile"],
                    },
                    { target: "tutorial", actions: "setFileTooLargeError" },
                ],
                SKIP: { target: "finished", guard: "allowSkip" },
                CLOSE: { target: "closed" },
            },
        },
        permissions: {
            initial: "idle",
            states: {
                idle: {
                    invoke: {
                        id: "checkPermissionIdle",
                        src: "checkPermission",
                        onDone: [
                            {
                                target: "#documentCapture.initCamera",
                                guard: "isCameraPermissionGranted",
                                actions: (0, n.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                            {
                                target: "denied",
                                guard: "isCameraPermissionDenied",
                                actions: (0, n.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                            {
                                target: "waitingForUser",
                                actions: (0, n.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                        ],
                        onError: { target: "waitingForUser", actions: (0, n.r)({ permissionResult: () => "prompt" }) },
                    },
                    on: { REQUEST_PERMISSION: "requesting", GO_TO_LEARN_MORE: "learnMore" },
                },
                waitingForUser: { on: { REQUEST_PERMISSION: "requesting", GO_TO_LEARN_MORE: "learnMore" } },
                learnMore: { on: { BACK: "idle", REQUEST_PERMISSION: "requesting" } },
                requesting: {
                    invoke: {
                        id: "requestPermission",
                        src: "requestPermission",
                        input: ({ context: e }) => ({
                            permissionResult: "refresh" === e.permissionResult ? void 0 : e.permissionResult,
                            requestMotionPermission: !1,
                        }),
                        onDone: [
                            {
                                target: "#documentCapture.initCamera",
                                guard: "isCameraPermissionGranted",
                                actions: (0, n.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                            {
                                target: "denied",
                                guard: "isCameraPermissionDenied",
                                actions: (0, n.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                            {
                                target: "waitingForUser",
                                actions: (0, n.r)({ permissionResult: ({ event: e }) => e.output }),
                            },
                        ],
                        onError: { target: "denied" },
                    },
                },
                denied: { entry: (0, n.r)({ permissionResult: () => "refresh" }) },
            },
            on: { CLOSE: { target: "closed" } },
        },
        initCamera: {
            invoke: {
                id: "initCamera",
                src: "initCamera",
                input: void 0,
                onDone: { target: "capturing", actions: "setStream" },
                onError: { target: "failure", actions: "setUploadError" },
            },
            on: { CLOSE: { target: "closed" } },
        },
        capturing: {
            on: {
                FILE_SELECTED: [
                    { target: "preview", guard: "fileSizeOkForGallery", actions: "setCapturedDocument" },
                    {
                        target: "preview",
                        guard: "fileSizeOkForNonGallery",
                        actions: ["setCapturedDocument", "setCaptureMethodCamera"],
                    },
                    { target: "capturing", actions: "setFileTooLargeError" },
                ],
                CLOSE: { target: "closed", actions: "stopStream" },
            },
        },
        preview: {
            on: {
                ACCEPT: { target: "uploading", actions: "resetProgress" },
                RETAKE: [
                    { target: "tutorial", guard: "isCaptureMethodFile", actions: "clearCapturedDocument" },
                    {
                        target: "capturing",
                        guard: "isCaptureMethodGallery",
                        actions: "clearCapturedDocumentGalleryRetake",
                    },
                    { target: "capturing", actions: "clearCapturedDocument" },
                ],
                CLOSE: { target: "closed", actions: "stopStream" },
            },
        },
        uploading: {
            invoke: {
                id: "uploadDocument",
                src: "uploadDocument",
                input: ({ context: e, self: t }) => {
                    if (!e.capturedDocument) throw Error("No captured document to upload");
                    return {
                        capturedDocument: e.capturedDocument,
                        processingType: e.config.processingType,
                        onProgress: (e) => {
                            t.send({ type: "UPLOAD_PROGRESS", progress: e });
                        },
                    };
                },
                onDone: { target: "success", actions: ["setNextPageType", "stopStream"] },
                onError: { target: "failure", actions: ["setUploadError", "decrementAttemptsRemaining", "stopStream"] },
            },
            on: { UPLOAD_PROGRESS: { actions: "setProgress" } },
        },
        success: {
            on: {
                CONTINUE: [
                    { target: "nextPage", guard: "isNextPageOptional" },
                    { target: "nextPage", guard: "isNextPageRequired" },
                    { target: "finished" },
                ],
                CLOSE: { target: "closed" },
            },
        },
        nextPage: {
            on: {
                NEXT_PAGE_CAMERA: { target: "permissions", actions: ["clearForNextPage", "setCaptureMethodCamera"] },
                NEXT_PAGE_PHOTO_LIBRARY: {
                    target: "capturing",
                    actions: ["clearForNextPage", "setCaptureMethodGallery"],
                },
                ALL_PAGES_CAPTURED: [
                    { target: "finalizing", guard: "canFinalizeOptionalPages" },
                    { target: "finished" },
                ],
                CLOSE: { target: "closed" },
            },
        },
        finalizing: {
            invoke: {
                id: "finalizeDocument",
                src: "finalizeDocumentRequest",
                input: ({ context: e }) => ({ processingType: e.config.processingType }),
                onDone: { target: "finished" },
                onError: { target: "failure", actions: ["setFinalizeError", "decrementAttemptsRemaining"] },
            },
        },
        failure: {
            on: {
                RETRY: {
                    target: "tutorial",
                    guard: "canRetry",
                    actions: ["clearError", "clearCapturedDocument", "resetPageNumber"],
                },
                CLOSE: { target: "closed" },
            },
            after: { 3e3: { target: "finished", guard: "attemptsExhausted" } },
        },
        finished: { type: "final" },
        closed: { type: "final" },
    },
});
function T(e) {
    let t = (0, i.o)(e.value);
    if (void 0 === t) return;
    let r = "file" === e.context.config.captureMode;
    switch (t) {
        case "tutorial":
            return r ? "documentCapture.tutorial.uploadOnly" : "documentCapture.tutorial.captureOnly";
        case "capturing":
            return r ? "documentCapture.upload.selectFromFiles" : "documentCapture.capture.default";
        case "preview":
            return r ? "documentCapture.upload.reviewFile" : "documentCapture.capture.reviewPhoto";
        case "uploading":
            return r ? "documentCapture.upload.analyzing" : "documentCapture.capture.analyzing";
        case "success":
        case "finished":
            return r ? "documentCapture.upload.success" : "documentCapture.capture.success";
        case "failure":
            return (e.context.attemptsRemaining ?? 0) > 0
                ? "documentCapture.errors.genericError"
                : "documentCapture.errors.genericErrorExhausted";
        case "nextPage": {
            let t = e.context.nextPageType;
            if ("required" === t) return "documentCapture.tutorial.nextPageMandatory";
            if ("optional" === t) return "documentCapture.tutorial.nextPageOptional";
            return;
        }
        default:
            return;
    }
}
function D(e) {
    let { context: t } = e;
    if (e.matches("tutorial")) {
        let e = t.pageNumber > 1;
        return {
            status: "tutorial",
            title: e ? (t.config.step2Title ?? t.config.title) : t.config.title,
            text: e ? (t.config.step2Text ?? t.config.text) : t.config.text,
            allowSkipDocumentCapture: t.config.allowSkipDocumentCapture && 1 === t.pageNumber,
            captureMode: t.config.captureMode,
            error: t.error,
            pageNumber: t.pageNumber,
        };
    }
    if (e.matches("permissions"))
        return {
            status: "permissions",
            permissionStatus: e.matches({ permissions: "learnMore" })
                ? "learnMore"
                : e.matches({ permissions: "requesting" })
                  ? "requesting"
                  : e.matches({ permissions: "denied" })
                    ? "denied"
                    : "idle",
        };
    return e.matches("initCamera")
        ? { status: "initializingCamera" }
        : e.matches("capturing")
          ? {
                status: "capturing",
                stream: t.stream,
                captureMode: t.config.captureMode,
                captureMethod: t.captureMethod,
                error: t.error,
                pageNumber: t.pageNumber,
            }
          : e.matches("preview")
            ? {
                  status: "preview",
                  imageBase64: t.capturedDocument?.imageBase64 ?? "",
                  fileType: t.capturedDocument?.fileType ?? "",
                  fileName: t.capturedDocument?.file.name ?? "",
              }
            : e.matches("uploading")
              ? {
                    status: "uploading",
                    progress: t.progress,
                    imageBase64: t.capturedDocument?.imageBase64 ?? "",
                    fileType: t.capturedDocument?.fileType ?? "",
                    fileName: t.capturedDocument?.file.name ?? "",
                }
              : e.matches("success")
                ? {
                      status: "success",
                      imageBase64: t.capturedDocument?.imageBase64 ?? "",
                      fileType: t.capturedDocument?.fileType ?? "",
                      fileName: t.capturedDocument?.file.name ?? "",
                      nextPageType: t.nextPageType,
                  }
                : e.matches("failure")
                  ? { status: "failure", error: t.error ?? g, attemptsRemaining: t.attemptsRemaining }
                  : e.matches("finished")
                    ? { status: "finished" }
                    : e.matches("closed")
                      ? { status: "closed" }
                      : e.matches("nextPage")
                        ? {
                              status: "nextPage",
                              imageBase64: t.capturedDocument?.imageBase64 ?? "",
                              fileType: t.capturedDocument?.fileType ?? "",
                              fileName: t.capturedDocument?.file.name ?? "",
                              pageNumber: t.pageNumber,
                              nextPageType: t.nextPageType,
                              captureMode: t.config.captureMode,
                          }
                        : e.matches("finalizing")
                          ? { status: "finalizing" }
                          : {
                                status: "tutorial",
                                title: void 0,
                                text: void 0,
                                allowSkipDocumentCapture: !1,
                                captureMode: "file",
                                error: void 0,
                                pageNumber: 1,
                            };
}
function R({ actor: e, trackElementClicked: t }) {
    return {
        capture() {
            t?.("capture"), e.send({ type: "CAPTURE" });
        },
        setFile(t, r) {
            e.send({ type: "FILE_SELECTED", file: t, imageBase64: r, fileType: t.type });
        },
        accept() {
            t?.("accept"), e.send({ type: "ACCEPT" });
        },
        retake() {
            t?.("retake"), e.send({ type: "RETAKE" });
        },
        retry() {
            t?.("retry"), e.send({ type: "RETRY" });
        },
        continue() {
            t?.("continue"), e.send({ type: "CONTINUE" });
        },
        skip() {
            t?.("skip"), e.send({ type: "SKIP" });
        },
        close() {
            t?.("close"), e.send({ type: "CLOSE" });
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
        captureNextPageFromCamera() {
            t?.("captureNextPageFromCamera"), e.send({ type: "NEXT_PAGE_CAMERA" });
        },
        captureNextPageFromFile() {
            t?.("captureNextPageFromFile"), e.send({ type: "NEXT_PAGE_PHOTO_LIBRARY" });
        },
        finishPageCapture() {
            t?.("finishPageCapture"), e.send({ type: "ALL_PAGES_CAPTURED" });
        },
    };
}
function S(e) {
    let t = e.context.error;
    if (void 0 !== t) return { errorCode: t };
}
function M(e) {
    return (0, n.l)({
        actor: (0, n.s)(h, { input: { config: e.config } }).start(),
        mapState: D,
        createApi: R,
        instrumentation: (0, i.s)(i.n.document, { getEventScreenName: T, getErrorPayload: S }),
    });
}
