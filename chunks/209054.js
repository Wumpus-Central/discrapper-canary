E.d(t, { authenticationMachine: () => A, O: () => S }), E(976886);
var a = E(133237),
    r = E(209688),
    n = E(588233),
    o = E(171251);
E(401959);
var i = E(64755),
    _ = E(233627),
    s = E(257202),
    T = E(489131);
E(389777), E(351618), E(581763);
var R = E(161370);
E(958027), E(948455), E(781322), E(196283);
var O = E(410903);
E(682781), E(840237);
let d = {
        SPOOF_ATTEMPT_DETECTED: R.m.SPOOF_ATTEMPT_DETECTED,
        SELFIE_FACE_OCCLUDED: R.m.FACE_OCCLUDED,
        FACE_OCCLUDED: R.m.FACE_OCCLUDED,
        FACE_TOO_DARK: R.m.FACE_TOO_DARK,
        LENSES_DETECTED: R.m.LENSES_DETECTED,
        FACE_MASK_DETECTED: R.m.FACE_MASK_DETECTED,
        CLOSED_EYES_DETECTED: R.m.CLOSED_EYES_DETECTED,
        HEAD_COVER_DETECTED: R.m.HEAD_COVER_DETECTED,
        FACE_NOT_FOUND: R.m.FACE_NOT_FOUND,
        FACE_CROPPING_FAILED: R.m.FACE_CROPPING_FAILED,
        FACE_TOO_SMALL: R.m.FACE_TOO_SMALL,
        FACE_TOO_BLURRY: R.m.FACE_TOO_BLURRY,
        BAD_PHOTO_QUALITY: R.m.BAD_PHOTO_QUALITY,
        PROCESSING_ERROR: R.m.PROCESSING_ERROR,
        BAD_REQUEST: R.m.BAD_REQUEST,
        SERVER: R.m.SERVER,
        USER_IS_NOT_RECOGNIZED: R.m.USER_IS_NOT_RECOGNIZED,
        NONEXISTENT_CUSTOMER: R.m.NONEXISTENT_CUSTOMER,
        HINT_NOT_PROVIDED: R.m.HINT_NOT_PROVIDED,
    },
    m = [R.m.NONEXISTENT_CUSTOMER, R.m.HINT_NOT_PROVIDED],
    C = (e) => (e ? ("PASS" !== e.overallStatus ? (d[e.error?.name] ?? R.m.SERVER) : void 0) : R.m.SERVER);
async function c(e) {
    try {
        let t = {
                base64Image: e.encryptedBase64Image,
                faceCoordinates: e.faceCoordinates ?? void 0,
                encrypted: !0,
                clientInfo: { deviceClass: (0, O.t)() },
                metadata: e.metadata ?? void 0,
                ...(void 0 !== e.authHint && { hint: e.authHint }),
            },
            E = {};
        e.recordingId && (E.recordingId = e.recordingId);
        let a = await r.t.post(o.t.authenticate, t, { signal: e.signal, query: E });
        if (!a.ok) throw Error(`POST ${o.t.authenticate} failed: ${a.status} ${a.statusText}`);
        return a.data;
    } catch (t) {
        let e = D(t);
        if (e) throw Error(e);
        throw Error(R.m.SERVER);
    }
}
let D = (e) => {
        if (!1 !== e.ok || "number" != typeof e.status) return;
        if (400 !== e.status) return R.m.SERVER;
        let t = e.data?.error?.name;
        return t ? (d[t] ?? R.m.BAD_REQUEST) : R.m.BAD_REQUEST;
    },
    A = T.t.provide({
        actors: {
            prepareFaceUpload: (0, i.a)(async ({ input: e }) => ((0, T.r)(e.config) ? (0, T.a)(e) : (0, T.n)(e))),
            uploadFace: (0, i.a)(async ({ input: e, signal: t }) =>
                (0, T.r)(e.config)
                    ? (0, T.i)(e, t)
                    : c({
                          encryptedBase64Image: e.encryptedBase64Image,
                          faceCoordinates: e.faceCoordinates,
                          authHint: e.authHint,
                          metadata: e.deepsightService?.getMetadata(),
                          recordingId: e.uploadRecordingId,
                          signal: t,
                      }),
            ),
            processFace: (0, i.a)(async () => ({})),
        },
        actions: {
            setUploadErrorFromUploadValidation: (0, i.r)({
                uploadError: ({ context: e }) => {
                    if (!(0, T.r)(e.config)) return C(e.uploadResponse) ?? R.m.SERVER;
                },
            }),
            setTerminalError: (0, i.r)({
                error: ({ context: e }) => {
                    let t = e.uploadResponse;
                    return e.attemptsRemaining <= 0
                        ? { type: "FACE_AUTH_ERROR", message: "No more attempts remaining" }
                        : t
                          ? {
                                type: "FACE_AUTH_ERROR",
                                message: t.error?.message ?? t.error?.name ?? "Face authentication error",
                            }
                          : { type: "FACE_AUTH_ERROR", message: "Authentication failed" };
                },
            }),
        },
        guards: {
            hasUploadValidationError: ({ context: e }) => !(0, T.r)(e.config) && void 0 !== C(e.uploadResponse),
            isTerminalUploadError: ({ context: e }) => {
                if ((0, T.r)(e.config)) return !1;
                var t = e.uploadResponse,
                    E = e.attemptsRemaining;
                if (!t) return !1;
                let a = d[t.error?.name];
                return !!(a && m.includes(a)) || !!(E <= 0);
            },
            isNoAttemptsTerminal: () => !0,
        },
    });
function S(e) {
    let t;
    return (0, _.t)(
        ((t = e.dependencies ?? { storage: new s.t(), getWasmUtil: () => a.t.getInstance() }),
        (0, i.s)(A, { input: { config: e.config, dependencies: t, authHint: e.authHint } }).start()),
        n.n.authFace,
    );
}
