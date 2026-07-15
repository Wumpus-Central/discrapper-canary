d.d(t, { selfieMachine: () => o, y6: () => u });
var i = d(987800);
d(768672);
var e = d(368499);
d(288052), d(599078), d(28134), d(749378), d(768816);
var c = d(168056),
    a = d(850886);
d(655586), d(395751), d(248051), d(305463);
var s = d(269521),
    n = d(166953),
    Z = d(309370);
d(550155), d(117589), d(713692), d(825123), d(827029), d(405479), d(517666);
var b = d(77254);
d(436434), d(235582), d(659750), d(616533), d(252560), Object.values(b.t);
let m = ({ config: l, response: t }) =>
        t
            ? 0 !== t.confidence
                ? b.t.LIVENESS
                : l.validateBrightness && !t.isBright
                  ? b.t.BRIGHTNESS
                  : l.validateLenses && t.hasLenses
                    ? b.t.LENSES
                    : l.validateFaceMask && t.hasFaceMask
                      ? b.t.MASK
                      : l.validateClosedEyes && t.hasClosedEyes
                        ? b.t.CLOSED_EYES
                        : l.validateHeadCover && t.hasHeadCover
                          ? b.t.HEAD_COVER
                          : void 0
            : b.t.SERVER,
    o = a.t.provide({
        actors: {
            prepareFaceUpload: (0, c.a)(async ({ input: l }) => ((0, Z.n)(l.config) ? (0, Z.i)(l) : (0, Z.t)(l))),
            uploadFace: (0, c.a)(async ({ input: l, signal: t }) =>
                (0, Z.n)(l.config)
                    ? (0, Z.r)(l, t)
                    : (0, Z.m)({
                          encryptedBase64Image: l.encryptedBase64Image,
                          faceCoordinates: l.faceCoordinates,
                          metadata: l.deepsightService?.getMetadata(),
                          recordingId: l.uploadRecordingId,
                          deepsightService: l.deepsightService ?? void 0,
                          signal: t,
                      }),
            ),
            processFace: (0, c.a)(async ({ input: l, signal: t }) => ((0, Z.n)(l.config) ? {} : (0, Z.p)("selfie", t))),
        },
        actions: {
            setUploadErrorFromUploadValidation: (0, c.r)({
                uploadError: ({ context: l }) => {
                    if (!(0, Z.n)(l.config)) return m({ config: l.config, response: l.uploadResponse }) ?? b.t.SERVER;
                },
            }),
        },
        guards: {
            hasUploadValidationError: ({ context: l }) =>
                !(0, Z.n)(l.config) && void 0 !== m({ config: l.config, response: l.uploadResponse }),
            isTerminalUploadError: () => !1,
        },
    });
function u(l) {
    let t;
    return (0, s.t)(
        ((t = l.dependencies ?? { storage: new n.t(), getWasmUtil: () => i.t.getInstance() }),
        (0, c.s)(o, { input: { config: l.config, dependencies: t, authHint: l.authHint } }).start()),
        e.n.faceCapture,
    );
}
async function h(l, t) {
    let d,
        i = l.capturedImage;
    if (!i) throw Error("selfieCaptureOnly: no captured image");
    try {
        d = (await l.recordingService?.stopAndGetVideo())?.videoBase64;
    } catch {
        d = void 0;
    }
    if (t.aborted) throw new DOMException("Aborted", "AbortError");
    let e = "";
    try {
        if (l.deepsightService) {
            let d = i.getImageData();
            if ((d && (await l.deepsightService.analyzeFrame(d)), t.aborted))
                throw new DOMException("Aborted", "AbortError");
            e = l.deepsightService.getMetadata();
        }
    } catch (l) {
        if (l?.name === "AbortError") throw l;
        e = "";
    }
    let c = i.getBase64Image() ?? "",
        a = i.getBlobData();
    if (!a) throw Error("selfieCaptureOnly: failed to build image blob");
    return { imageBase64: c, blob: a.blob, url: a.url, metadata: e, videoBase64: d };
}
d(219282),
    a.t.provide({
        actors: {
            prepareFaceUpload: (0, c.a)(async () => ({ encryptedBase64Image: "", recordingId: null })),
            uploadFace: (0, c.a)(async ({ input: l, signal: t }) => await h(l, t)),
            processFace: (0, c.a)(async () => ({})),
        },
        actions: { setUploadResponseFromEvent: (0, c.r)({ captureOnlyResult: ({ event: l }) => l.output }) },
        guards: { hasUploadValidationError: () => !1, isTerminalUploadError: () => !1 },
    });
