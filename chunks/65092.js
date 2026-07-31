d.d(t, { selfieMachine: () => o, y6: () => u });
var i = d(522681);
d(41851);
var e = d(269882);
d(528239), d(829601), d(489510), d(886347), d(219877);
var c = d(646613),
    a = d(215628);
d(867386), d(444064), d(880008), d(49954), d(154676);
var s = d(985346),
    n = d(377689),
    Z = d(327487);
d(280366), d(693160), d(97669), d(614235), d(888091), d(453080), d(660125);
var b = d(588936);
d(689280), d(974916), d(159126), d(934350), d(132680), Object.values(b.t);
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
d(788783),
    a.t.provide({
        actors: {
            prepareFaceUpload: (0, c.a)(async () => ({ encryptedBase64Image: "", recordingId: null })),
            uploadFace: (0, c.a)(async ({ input: l, signal: t }) => await h(l, t)),
            processFace: (0, c.a)(async () => ({})),
        },
        actions: { setUploadResponseFromEvent: (0, c.r)({ captureOnlyResult: ({ event: l }) => l.output }) },
        guards: { hasUploadValidationError: () => !1, isTerminalUploadError: () => !1 },
    });
