n.d(t, { n: () => S, t: () => w });
var r = n(209688),
    o = n(588233),
    s = n(171251),
    i = n(64755);
async function a(e) {
    let t = await fetch(e.url, { method: e.method, headers: e.headers, body: e.body, signal: e.signal });
    if (!t.ok) throw Error(`${e.method} ${e.url} failed: ${t.status} ${t.statusText}`);
    return t;
}
async function c(e) {
    let t = await r.t.get(s.t.aesUnsignedDocuments, { signal: e });
    if (!t.ok) throw Error(`GET ${s.t.aesUnsignedDocuments} failed: ${t.status} ${t.statusText}`);
    return t.data;
}
async function l(e, t, n) {
    let o = "qe" === t ? s.t.qesSignDocument : s.t.aesSignDocument,
        i = await r.t.post(o, { documentRef: e, userConsented: !0 }, { signal: n });
    if (!i.ok) throw Error(`POST ${o} failed: ${i.status} ${i.statusText}`);
    return i.data;
}
async function u(e) {
    let t = await r.t.post(s.t.aesGenerateUploadUrl, {}, { signal: e });
    if (!t.ok) throw Error(`POST ${s.t.aesGenerateUploadUrl} failed: ${t.status} ${t.statusText}`);
    return t.data;
}
async function g(e, t, n) {
    await a({ method: "PUT", url: e, headers: { "Content-Type": "application/pdf" }, body: t, signal: n });
}
let d = (0, i.a)(async ({ signal: e }) => c(e)),
    m = (0, i.a)(async ({ input: e, signal: t }) =>
        (await Promise.all(e.documents.map((n) => l(n.documentRef, e.variant, t)))).map((e) => ({
            signedDocumentUrl: e.signedDocumentUrl,
        })),
    ),
    f = (0, i.a)(async ({ input: e, signal: t }) => {
        let n = e.getFileData();
        if (!n) throw Error("No file data available for upload");
        let { preSignedUrl: r } = await u(t);
        await g(r, n, t);
    }),
    D = ["terms", "signElectronically", "signDisplayed"],
    p = ["issuance", "qesAcknowledgement", "qscdConfirmation", "termsAgreement", "documentsReviewed"];
function h(e) {
    return Object.values(e).every(Boolean);
}
let S = (0, i.t)({
    types: { context: {}, events: {}, input: {} },
    actors: { fetchUnsignedDocs: d, signDocuments: m, uploadDocument: f },
    actions: {
        setDocuments: (0, i.r)(({ event: e }) => {
            let { output: t } = e;
            return { documents: t.documents ?? [] };
        }),
        setSignedDocuments: (0, i.r)(({ event: e }) => {
            let { output: t } = e;
            return { signedDocuments: t };
        }),
        setFile: (0, i.r)(({ event: e }) => {
            let { fileName: t, fileSize: n, fileUrl: r } = e;
            return { fileName: t, fileSize: n, fileUrl: r };
        }),
        updateConsent: (0, i.r)(({ context: e, event: t }) => {
            let { name: n, checked: r } = t;
            return { consentChecks: { ...e.consentChecks, [n]: r } };
        }),
        setViewingDocument: (0, i.r)(({ event: e }) => ({ viewingDocumentUrl: e.url })),
        clearViewingDocument: (0, i.r)({ viewingDocumentUrl: () => null }),
    },
    guards: {
        errorFromUpload: ({ context: e }) => "upload" === e.errorSource,
        errorFromSigning: ({ context: e }) => "signing" === e.errorSource,
        shouldUpload: ({ context: e }) => !0 === e.config.uploadDocument,
        shouldDownload: ({ context: e }) => !0 === e.config.downloadDocument,
        allConsented: ({ context: e }) => h(e.consentChecks),
        hasDocuments: ({ event: e }) => {
            let { output: t } = e;
            return (t.documents?.length ?? 0) > 0;
        },
        allSigned: ({ event: e }) => {
            let { output: t } = e;
            return t.every((e) => !!e.signedDocumentUrl);
        },
        allSignedAndDownload: ({ context: e, event: t }) => {
            let { output: n } = t;
            return n.every((e) => !!e.signedDocumentUrl) && !0 === e.config.downloadDocument;
        },
    },
}).createMachine({
    id: "electronicSignature",
    initial: "idle",
    context: ({ input: e }) => ({
        config: e.config,
        getFileData: e.getFileData,
        documents: [],
        signedDocuments: [],
        fileName: null,
        fileSize: null,
        fileUrl: null,
        consentChecks: Object.fromEntries(("qe" === (e.config.variant ?? "ae") ? p : D).map((e) => [e, !1])),
        viewingDocumentUrl: null,
        errorMessage: "",
        errorSource: null,
    }),
    states: {
        idle: { on: { LOAD: [{ target: "uploading", guard: "shouldUpload" }, { target: "fetchingDocs" }] } },
        uploading: { on: { SELECT_FILE: { target: "reviewing", actions: "setFile" }, CLOSE: { target: "closed" } } },
        reviewing: {
            on: {
                REPLACE_FILE: {
                    target: "uploading",
                    actions: (0, i.r)({ fileName: () => null, fileSize: () => null, fileUrl: () => null }),
                },
                CONFIRM_FILE: { target: "uploadingFile" },
                CLOSE: { target: "closed" },
            },
        },
        uploadingFile: {
            invoke: {
                id: "uploadDocument",
                src: "uploadDocument",
                input: ({ context: e }) => ({ getFileData: e.getFileData }),
                onDone: { target: "fetchingDocs" },
                onError: {
                    target: "error",
                    actions: (0, i.r)(({ event: e }) => ({
                        errorMessage: String(e.error ?? "aes.error"),
                        errorSource: "upload",
                    })),
                },
            },
        },
        fetchingDocs: {
            invoke: {
                id: "fetchUnsignedDocs",
                src: "fetchUnsignedDocs",
                onDone: [
                    { target: "signing", guard: "hasDocuments", actions: "setDocuments" },
                    {
                        target: "error",
                        actions: (0, i.r)({ errorMessage: () => "aes.noDocuments", errorSource: () => "fetchDocs" }),
                    },
                ],
                onError: {
                    target: "error",
                    actions: (0, i.r)(({ event: e }) => ({
                        errorMessage: String(e.error ?? "aes.error"),
                        errorSource: "fetchDocs",
                    })),
                },
            },
        },
        signing: {
            on: {
                SET_CONSENT: { actions: "updateConsent" },
                VIEW_DOCUMENT: { actions: "setViewingDocument" },
                CLOSE_DOCUMENT_VIEW: { actions: "clearViewingDocument" },
                SIGN: { target: "processing", guard: "allConsented" },
                CLOSE: { target: "closed" },
            },
        },
        processing: {
            invoke: {
                id: "signDocuments",
                src: "signDocuments",
                input: ({ context: e }) => ({ documents: e.documents, variant: e.config.variant ?? "ae" }),
                onDone: [
                    { target: "successDownload", guard: "allSignedAndDownload", actions: "setSignedDocuments" },
                    { target: "success", guard: "allSigned", actions: "setSignedDocuments" },
                    {
                        target: "error",
                        actions: (0, i.r)({ errorMessage: () => "aes.signingFailed", errorSource: () => "signing" }),
                    },
                ],
                onError: {
                    target: "error",
                    actions: (0, i.r)(({ event: e }) => ({
                        errorMessage: String(e.error ?? "aes.error"),
                        errorSource: "signing",
                    })),
                },
            },
        },
        success: { after: { 3e3: "finished" } },
        successDownload: { on: { FINISH: { target: "finished" }, CLOSE: { target: "closed" } } },
        error: {
            on: {
                RETRY: [
                    {
                        target: "uploading",
                        guard: "errorFromUpload",
                        actions: (0, i.r)({
                            errorMessage: () => "",
                            errorSource: () => null,
                            fileName: () => null,
                            fileSize: () => null,
                            fileUrl: () => null,
                        }),
                    },
                    {
                        target: "signing",
                        guard: "errorFromSigning",
                        actions: (0, i.r)({ errorMessage: () => "", errorSource: () => null }),
                    },
                    { target: "fetchingDocs", actions: (0, i.r)({ errorMessage: () => "", errorSource: () => null }) },
                ],
                CLOSE: { target: "closed" },
            },
        },
        finished: { type: "final" },
        closed: { type: "final" },
    },
});
function E(e) {
    let { context: t } = e;
    if (e.matches("idle") || e.matches("fetchingDocs") || e.matches("uploadingFile")) return { status: "loading" };
    if (e.matches("uploading")) return { status: "uploading", fileName: t.fileName };
    if (e.matches("reviewing")) return { status: "reviewing", fileName: t.fileName, fileUrl: t.fileUrl };
    if (e.matches("signing"))
        return {
            status: "signing",
            variant: t.config.variant ?? "ae",
            documents: t.documents,
            consentChecks: t.consentChecks,
            allConsented: h(t.consentChecks),
            viewingDocumentUrl: t.viewingDocumentUrl,
        };
    if (e.matches("processing")) return { status: "processing" };
    if (e.matches("success") || e.matches("successDownload"))
        return {
            status: "success",
            signedDocuments: t.signedDocuments,
            downloadDocument: !0 === t.config.downloadDocument,
        };
    if (e.matches("error")) return { status: "error", errorMessage: t.errorMessage };
    if (e.matches("finished")) return { status: "finished" };
    if (e.matches("closed")) return { status: "closed" };
    throw Error(`Unhandled electronic-signature state: ${JSON.stringify(e.value)}`);
}
function w(e) {
    var t;
    let n = { current: null };
    return (0, i.c)({
        actor:
            ((t = { config: e.config, getFileData: () => n.current }),
            (0, i.s)(S, { input: { config: t.config, getFileData: t.getFileData } }).start()),
        mapState: E,
        createApi: (e) =>
            (function ({ actor: e, trackElementClicked: t, fileDataRef: n }) {
                return {
                    load() {
                        e.send({ type: "LOAD" });
                    },
                    setConsent(t, n) {
                        e.send({ type: "SET_CONSENT", name: t, checked: n });
                    },
                    selectFile(t, r, o) {
                        (n.current = r),
                            e.send({ type: "SELECT_FILE", fileName: t, fileSize: r.byteLength, fileUrl: o });
                    },
                    replaceFile() {
                        (n.current = null), e.send({ type: "REPLACE_FILE" });
                    },
                    confirmFile() {
                        t?.("confirmFile"), e.send({ type: "CONFIRM_FILE" });
                    },
                    viewDocument(t) {
                        e.send({ type: "VIEW_DOCUMENT", url: t });
                    },
                    closeDocumentView() {
                        e.send({ type: "CLOSE_DOCUMENT_VIEW" });
                    },
                    sign() {
                        t?.("sign"), e.send({ type: "SIGN" });
                    },
                    finish() {
                        t?.("finish"), e.send({ type: "FINISH" });
                    },
                    retry() {
                        t?.("retry"), (n.current = null), e.send({ type: "RETRY" });
                    },
                    close() {
                        t?.("close"), e.send({ type: "CLOSE" });
                    },
                };
            })({ ...e, fileDataRef: n }),
        instrumentation: (0, o.o)("qe" === e.config.variant ? o.n.qeSignature : o.n.aeSignature),
    });
}
