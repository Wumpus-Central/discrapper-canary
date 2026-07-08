a.d(t, { documentCaptureMachine: () => y, D: () => h });
var r = a(209688),
    o = a(588233),
    i = a(171251),
    n = a(64755);
a(389777);
var s = a(351618);
a(958027);
var c = a(948455);
let u = {
        processV5CLogbook: "v5cMultiPageLogbook",
        processCirculationCard: "circulationCard",
        processFinanceSettlement: "financeSettlement",
        processCarInvoice: "carInvoice",
        asyncProcessCarInvoice: "carInvoice",
        asyncProcessCirculationCard: "circulationCard",
        capture: "addressStatement",
    },
    p = ["v5cMultiPageLogbook", "circulationCard", "financeSettlement"],
    l = new Set(["otherDocument1", "otherDocument2", "otherDocument3"]),
    d = "UPLOAD_FAILED";
function g(e) {
    return p.includes(e);
}
function m(e, t, a) {
    return `${e}?type=${encodeURIComponent(t)}&format=${a}`;
}
async function f({ base64Image: e, processingType: t, fileFormat: a, onProgress: o, signal: n }) {
    let s,
        c,
        p =
            ((s = "application/pdf" === a ? "pdf" : "image"),
            g((c = u[t] ?? t))
                ? m(i.t.documentV3, c, s)
                : "carInvoice" === c
                  ? m(i.t.cfdi, c, s)
                  : l.has(c)
                    ? m(i.t.addDocument, c, s)
                    : "addressStatement" !== c && c
                      ? m(i.t.addressStatement, t, s)
                      : m(i.t.addressStatement, c || "addressStatement", s)),
        d = e.includes(",") ? e.split(",")[1] : e,
        C = await r.t.post(p, { base64Image: d }, { signal: n, onUploadProgress: o });
    if (!C.ok) throw Error(`Document upload failed: ${C.status}`);
    if (
        !(
            C.data.success ||
            "SUCCESS" === C.data.status ||
            "ADD_NEXT_PAGE" === C.data.status ||
            "OPTIONAL_PAGE_CAPTURE" === C.data.status
        )
    )
        throw Error("Document upload rejected by server");
    return C.data;
}
function C(e) {
    let t = u[e] ?? e;
    return g(t) ? t : null;
}
async function E({ processingType: e, signal: t }) {
    let a = C(e);
    if (!a) throw Error(`finalizeDocument only supports multi-page types (${p.join(", ")})`);
    let o = await r.t.post(i.t.finalizeDocument, { type: a }, { signal: t });
    if (!o.ok) throw Error(`Document finalize failed: ${o.status}`);
    let n = o.data;
    if (!n) throw Error("Document finalize rejected by server");
    if (!(n.success || "SUCCESS" === n.status)) {
        let e = "string" == typeof n.status ? n.status : "unknown";
        throw Error(`Document finalize rejected by server (status: ${e})`);
    }
    return n;
}
let y = (0, n.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        initCamera: (0, n.a)(async () => {
            let { stream: e } = await (0, c.t)(void 0);
            return e;
        }),
        uploadDocument: (0, n.a)(async ({ input: e, signal: t }) =>
            f({
                base64Image: e.capturedDocument.imageBase64,
                processingType: e.processingType,
                fileFormat: e.capturedDocument.fileType,
                onProgress: e.onProgress,
                signal: t,
            }),
        ),
        finalizeDocumentRequest: (0, n.a)(async ({ input: e, signal: t }) =>
            E({ processingType: e.processingType, signal: t }),
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
        setUploadError: (0, n.r)({ error: () => d }),
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
            let { status: a } = t.output;
            return "file" === e.captureMethod && e.capturedDocument?.fileType === "application/pdf"
                ? { nextPageType: "none" }
                : {
                      nextPageType:
                          "ADD_NEXT_PAGE" === a ? "required" : "OPTIONAL_PAGE_CAPTURE" === a ? "optional" : "none",
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
        stopStream: (0, n.r)(({ context: e }) => (e.stream && (0, s.i)(e.stream), { stream: void 0 })),
    },
    guards: {
        allowSkip: ({ context: e }) => e.config.allowSkipDocumentCapture && 1 === e.pageNumber,
        fileSizeOk: ({ context: e, event: t }) => t.file.size <= e.config.maxFileSize,
        canRetry: ({ context: e }) => e.attemptsRemaining > 0,
        attemptsExhausted: ({ context: e }) => e.attemptsRemaining <= 0,
        isCameraMode: ({ context: e }) => "camera" === e.config.captureMode,
        isCaptureMethodCamera: ({ context: e }) => "camera" === e.captureMethod,
        isCaptureMethodGallery: ({ context: e }) => "gallery" === e.captureMethod,
        isCaptureMethodFile: ({ context: e }) => "file" === e.captureMethod,
        isNextPageOptional: ({ context: e }) => "optional" === e.nextPageType,
        isNextPageRequired: ({ context: e }) => "required" === e.nextPageType,
        canFinalizeOptionalPages: ({ context: e }) =>
            "optional" === e.nextPageType && null !== C(e.config.processingType),
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
            captureMode: a = "camera",
            allowSkipDocumentCapture: r,
            disableSkipPoa: o,
            captureAttempts: i = 3,
            sendBase64: n = !1,
            maxFileSize: s = 0xa00000,
            title: c,
            text: u,
            step2Title: p,
            step2Text: l,
        } = e.config;
        return {
            config: {
                processingType: t,
                captureMode: a,
                allowSkipDocumentCapture: r ?? (null != o && !o),
                captureAttempts: i,
                sendBase64: n,
                maxFileSize: s,
                title: c,
                text: u,
                step2Title: p,
                step2Text: l,
            },
            stream: void 0,
            capturedDocument: void 0,
            captureMethod: void 0,
            progress: 0,
            error: void 0,
            attemptsRemaining: i,
            pageNumber: 1,
            nextPageType: "none",
        };
    },
    states: {
        tutorial: {
            on: {
                CAPTURE: [{ target: "initCamera", guard: "isCameraMode" }, { target: "capturing" }],
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
                NEXT_PAGE_CAMERA: { target: "initCamera", actions: ["clearForNextPage", "setCaptureMethodCamera"] },
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
function P(e) {
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
                  ? { status: "failure", error: t.error ?? d, attemptsRemaining: t.attemptsRemaining }
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
function D({ actor: e, trackElementClicked: t }) {
    return {
        capture() {
            t?.("capture"), e.send({ type: "CAPTURE" });
        },
        setFile(t, a) {
            e.send({ type: "FILE_SELECTED", file: t, imageBase64: a, fileType: t.type });
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
function T(e) {
    let t = e.context.error;
    if (void 0 !== t) return { errorCode: t };
}
function h(e) {
    return (0, n.c)({
        actor: (0, n.s)(y, { input: { config: e.config } }).start(),
        mapState: P,
        createApi: D,
        instrumentation: (0, o.o)(o.n.document, { getErrorPayload: T }),
    });
}
