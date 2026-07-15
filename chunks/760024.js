a.d(e, { authenticationMachine: () => A, O: () => l });
var r = a(987800),
    E = a(768672),
    n = a(368499),
    i = a(288052),
    o = a(599078);
a(28134), a(749378), a(768816);
var s = a(168056),
    _ = a(850886);
a(655586), a(395751), a(248051), a(305463);
var d = a(269521),
    T = a(166953),
    O = a(309370);
a(550155), a(117589), a(713692), a(825123), a(827029), a(405479);
var R = a(517666),
    S = a(77254);
a(436434), a(235582), a(659750), a(616533), a(252560);
let c = {
        SPOOF_ATTEMPT_DETECTED: S.t.SPOOF_ATTEMPT_DETECTED,
        SELFIE_FACE_OCCLUDED: S.t.FACE_OCCLUDED,
        FACE_OCCLUDED: S.t.FACE_OCCLUDED,
        FACE_TOO_DARK: S.t.FACE_TOO_DARK,
        LENSES_DETECTED: S.t.LENSES_DETECTED,
        FACE_MASK_DETECTED: S.t.FACE_MASK_DETECTED,
        CLOSED_EYES_DETECTED: S.t.CLOSED_EYES_DETECTED,
        HEAD_COVER_DETECTED: S.t.HEAD_COVER_DETECTED,
        FACE_NOT_FOUND: S.t.FACE_NOT_FOUND,
        FACE_CROPPING_FAILED: S.t.FACE_CROPPING_FAILED,
        FACE_TOO_SMALL: S.t.FACE_TOO_SMALL,
        FACE_TOO_BLURRY: S.t.FACE_TOO_BLURRY,
        BAD_PHOTO_QUALITY: S.t.BAD_PHOTO_QUALITY,
        PROCESSING_ERROR: S.t.PROCESSING_ERROR,
        BAD_REQUEST: S.t.BAD_REQUEST,
        SERVER: S.t.SERVER,
        USER_IS_NOT_RECOGNIZED: S.t.USER_IS_NOT_RECOGNIZED,
        NONEXISTENT_CUSTOMER: S.t.NONEXISTENT_CUSTOMER,
        HINT_NOT_PROVIDED: S.t.HINT_NOT_PROVIDED,
    },
    C = [S.t.NONEXISTENT_CUSTOMER, S.t.HINT_NOT_PROVIDED],
    D = (t) => (t ? ("PASS" !== t.overallStatus ? (c[t.error?.name] ?? S.t.SERVER) : void 0) : S.t.SERVER);
async function u(t) {
    try {
        let e = {
                base64Image: t.encryptedBase64Image,
                faceCoordinates: t.faceCoordinates ?? void 0,
                encrypted: !0,
                clientInfo: { deviceClass: (0, R.t)() },
                metadata: t.metadata ?? void 0,
                ...(void 0 !== t.authHint && { hint: t.authHint }),
            },
            a = {};
        t.recordingId && (a.recordingId = t.recordingId);
        let r = await E.t.post(i.t.authenticate, e, { signal: t.signal, query: a });
        if (!r.ok) throw Error(`POST ${i.t.authenticate} failed: ${r.status} ${r.statusText}`);
        return (
            t.deepsightService &&
                (0, o.t)({
                    frontIdStatsAnalysisStatus: "",
                    backIdStatsAnalysisStatus: "",
                    selfieStatsAnalysisStatus: t.deepsightService.getAnalysisStatus(),
                    motionStatus: t.deepsightService.getMotionStatus(),
                }),
            r.data
        );
    } catch (e) {
        let t = p(e);
        if (t) throw Error(t);
        throw Error(S.t.SERVER);
    }
}
let p = (t) => {
        if (!1 !== t.ok || "number" != typeof t.status) return;
        if (400 !== t.status) return S.t.SERVER;
        let e = t.data?.error?.name;
        return e ? (c[e] ?? S.t.BAD_REQUEST) : S.t.BAD_REQUEST;
    },
    A = _.t.provide({
        actors: {
            prepareFaceUpload: (0, s.a)(async ({ input: t }) => ((0, O.n)(t.config) ? (0, O.i)(t) : (0, O.t)(t))),
            uploadFace: (0, s.a)(async ({ input: t, signal: e }) =>
                (0, O.n)(t.config)
                    ? (0, O.r)(t, e)
                    : u({
                          encryptedBase64Image: t.encryptedBase64Image,
                          faceCoordinates: t.faceCoordinates,
                          authHint: t.authHint,
                          metadata: t.deepsightService?.getMetadata(),
                          recordingId: t.uploadRecordingId,
                          deepsightService: t.deepsightService ?? void 0,
                          signal: e,
                      }),
            ),
            processFace: (0, s.a)(async () => ({})),
        },
        actions: {
            setUploadErrorFromUploadValidation: (0, s.r)({
                uploadError: ({ context: t }) => {
                    if (!(0, O.n)(t.config)) return D(t.uploadResponse) ?? S.t.SERVER;
                },
            }),
            setTerminalError: (0, s.r)({
                error: ({ context: t }) => {
                    if (t.attemptsRemaining <= 0)
                        return {
                            type: "FACE_AUTH_ERROR",
                            message: "No more attempts remaining",
                            moduleErrorCode: S.t.NO_MORE_ATTEMPTS,
                        };
                    let e = t.uploadResponse;
                    return {
                        type: "FACE_AUTH_ERROR",
                        message: e?.error.message ?? e?.error.name ?? "Face authentication error",
                        moduleErrorCode: e ? c[e.error.name] : void 0,
                    };
                },
            }),
        },
        guards: {
            hasUploadValidationError: ({ context: t }) => !(0, O.n)(t.config) && void 0 !== D(t.uploadResponse),
            isTerminalUploadError: ({ context: t }) =>
                !(0, O.n)(t.config) &&
                ((t, e) => {
                    if (!t) return !1;
                    let a = c[t.error?.name];
                    return !!(a && C.includes(a)) || !!(e <= 0);
                })(t.uploadResponse, t.attemptsRemaining),
            isNoAttemptsTerminal: () => !0,
        },
    });
function l(t) {
    let e;
    return (0, d.t)(
        ((e = t.dependencies ?? { storage: new T.t(), getWasmUtil: () => r.t.getInstance() }),
        (0, s.s)(A, { input: { config: t.config, dependencies: e, authHint: t.authHint } }).start()),
        n.n.authFace,
    );
}
