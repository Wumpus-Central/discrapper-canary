i.d(t, { t: () => d });
var r = i(588233),
    n = i(64755);
function o(e) {
    let { context: t } = e;
    if (e.matches("idle")) return { status: "idle" };
    if (e.matches("loading")) return { status: "loading" };
    if (e.matches("tutorial")) return { status: "tutorial", ageAssurance: t.config?.ageAssurance === !0 };
    if (e.matches("closed")) return { status: "closed" };
    if (e.matches("permissions")) {
        let t = (function (e) {
            if (e.matches("permissions")) {
                if (e.matches({ permissions: "idle" })) return "idle";
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
        return {
            status: "capture",
            captureStatus:
                (e.matches({ capture: "initializing" })
                    ? "initializing"
                    : e.matches({ capture: "detecting" })
                      ? "detecting"
                      : e.matches({ capture: "capturing" }) || e.matches({ capture: "capturingManual" })
                        ? "capturing"
                        : e.matches({ capture: "preparingUpload" }) ||
                            e.matches({ capture: "uploading" }) ||
                            e.matches({ capture: "validatingUpload" })
                          ? "uploading"
                          : e.matches({ capture: "uploadError" })
                            ? "uploadError"
                            : e.matches({ capture: "success" })
                              ? "success"
                              : void 0) ?? "initializing",
            stream: t.stream,
            detectionStatus: t.detectionStatus ?? "idle",
            debugFrame: t.debugFrame,
            attemptsRemaining: t.attemptsRemaining ?? 0,
            uploadError: t.uploadError,
            assistedOnboarding: t.config?.assistedOnboarding ?? !1,
            ageAssurance: t.config?.ageAssurance === !0,
        };
    if (e.matches("processing")) return { status: "processing" };
    if (e.matches("finished")) return { status: "finished", processResponse: t.processResponse };
    if (e.matches("error")) {
        let e = t.error;
        return { status: "error", error: "string" == typeof e ? e : e ? e.message : "Unknown error" };
    }
    return { status: "idle" };
}
function a(e, t) {
    let i = 0 === t ? "Exhausted" : "";
    switch (e) {
        case "LENSES_ERROR":
        case "LENSES_DETECTED":
            return `faceCapture.resultError.lensesDetected${i}`;
        case "BRIGHTNESS_ERROR":
            return `faceCapture.resultError.tooBright${i}`;
        case "MASK_ERROR":
        case "FACE_MASK_DETECTED":
            return `faceCapture.resultError.faceMaskDetected${i}`;
        case "FACE_TOO_DARK":
        case "TOO_DARK_ERROR":
            return `faceCapture.resultError.tooDark${i}`;
        case "CLOSED_EYES_ERROR":
        case "CLOSED_EYES_DETECTED":
            return `faceCapture.resultError.eyesClosed${i}`;
        case "HEAD_COVER_ERROR":
        case "HEAD_COVER_DETECTED":
            return `faceCapture.resultError.headCovered${i}`;
        case "FACE_OCCLUDED":
            return `faceCapture.resultError.faceOcclusion${i}`;
        case "TOO_BLURRY_ERROR":
        case "FACE_TOO_BLURRY":
        case "BAD_PHOTO_QUALITY":
        case "SELFIE_IMAGE_LOW_QUALITY":
            return `faceCapture.resultError.lowQuality${i}`;
        case "SERVER_ERROR":
        case "PROCESSING_ERROR":
        case "BAD_REQUEST":
            return `faceCapture.resultError.processingFailed${i}`;
        default:
            return `faceCapture.resultError.faceNotAligned${i}`;
    }
}
function s(e) {
    return "string" == typeof e ? e : "object" == typeof e ? Object.keys(e)[0] : void 0;
}
function l({ actor: e, trackElementClicked: t, trackCaptureAttemptFinished: i }) {
    return (
        (e.getSnapshot().context.dependencies.trackCaptureAttemptFinished = i),
        {
            load() {
                e.send({ type: "LOAD" });
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
            capture() {
                t?.("capture"), e.send({ type: "MANUAL_CAPTURE" });
            },
        }
    );
}
function c(e) {
    let t = e.context.uploadError;
    if ("string" == typeof t && 0 !== t.length) return { errorCode: t };
}
function d(e, t) {
    return (0, n.c)({
        actor: e,
        mapState: o,
        createApi: l,
        instrumentation: (0, r.o)(t, {
            getEventScreenName: (e) =>
                (function (e, t) {
                    if (t === r.n.authFace || t === r.n.authentication)
                        return (function (e) {
                            let { value: t } = e;
                            if (null == t) return;
                            let i = s(t);
                            if (void 0 !== i)
                                switch (i) {
                                    case "tutorial":
                                        return r.r.authFaceTutorial;
                                    case "capture":
                                        return (function (e) {
                                            let { value: t } = e;
                                            if ("object" != typeof t || null === t) return;
                                            let i = t.capture;
                                            if (void 0 !== i) {
                                                if ("string" == typeof i)
                                                    switch (i) {
                                                        case "preparingUpload":
                                                        case "uploading":
                                                        case "validatingUpload":
                                                            return r.r.authFaceUpload;
                                                        case "uploadError":
                                                            return r.r.authFaceError;
                                                        case "success":
                                                            return r.r.authFaceUploadSuccess;
                                                        case "checkingDeepsight":
                                                        case "initializingDeepsight":
                                                        case "checkingStream":
                                                        case "initializing":
                                                        case "detecting":
                                                        case "capturing":
                                                        case "capturingManual":
                                                            return r.r.authFace;
                                                    }
                                                if ("object" == typeof i && null !== i) {
                                                    let e = Object.keys(i);
                                                    if (e.includes("uploading") || e.includes("validatingUpload"))
                                                        return r.r.authFaceUpload;
                                                    if (e.includes("uploadError")) return r.r.authFaceError;
                                                    if (e.includes("success")) return r.r.authFaceUploadSuccess;
                                                }
                                                return r.r.authFace;
                                            }
                                        })(e);
                                    case "finished":
                                        return r.r.authFaceUploadSuccess;
                                    case "error":
                                        return r.r.authFaceUploadFailed;
                                    default:
                                        return r.r.authFace;
                                }
                        })(e);
                    let { value: i } = e;
                    if (null == i) return;
                    let n = s(i);
                    if (void 0 !== n)
                        switch (n) {
                            case "idle":
                            case "loading":
                            case "processing":
                                return "faceCapture.loading.processing";
                            case "tutorial":
                                if (e.context?.config?.ageAssurance === !0) return "faceCapture.tutorial.ageAssurance";
                                if ("object" == typeof e.value && null !== e.value) {
                                    let t = e.value.tutorial;
                                    if ("object" == typeof t && null !== t && "initializingCamera" in t)
                                        return "faceCapture.tutorial.loading";
                                }
                                return "faceCapture.tutorial.default";
                            case "permissions":
                                return "faceCapture.tutorial.default";
                            case "capture":
                                return (function (e) {
                                    let { value: t, context: i } = e;
                                    if ("object" != typeof t || null === t) return;
                                    let r = t.capture;
                                    if (void 0 !== r) {
                                        if ("string" == typeof r)
                                            switch (r) {
                                                case "checkingDeepsight":
                                                case "initializingDeepsight":
                                                case "checkingStream":
                                                case "initializing":
                                                    return "faceCapture.capturing.initiatingState";
                                                case "detecting":
                                                    switch (i?.detectionStatus) {
                                                        case "getReady":
                                                        case "getReadyFinished":
                                                            return "faceCapture.capturing.getReady";
                                                        case "dark":
                                                            return "faceCapture.capturing.tooDark";
                                                        case "tooBright":
                                                            return "faceCapture.capturing.tooBright";
                                                        case "tooClose":
                                                            return "faceCapture.capturing.moveAway";
                                                        case "tooFar":
                                                            return "faceCapture.capturing.moveCloser";
                                                        case "moveLeft":
                                                            return "faceCapture.capturing.moveLeft";
                                                        case "moveRight":
                                                            return "faceCapture.capturing.moveRight";
                                                        case "blur":
                                                        case "centerFace":
                                                        case "noFace":
                                                        case "tooManyFaces":
                                                            return "faceCapture.capturing.alignFace";
                                                        case "faceAngle":
                                                        case "lookAtCamera":
                                                            return "faceCapture.capturing.lookAtCamera";
                                                        case "eyesClosed":
                                                            return "faceCapture.capturing.eyesClosed";
                                                        case "faceMask":
                                                            return "faceCapture.capturing.maskDetected";
                                                        case "lenses":
                                                            return "faceCapture.capturing.glassesDetected";
                                                        case "headWear":
                                                            return "faceCapture.capturing.hatDetected";
                                                        case "faceOcclusion":
                                                            return "faceCapture.capturing.faceOcclusion";
                                                        case "manualCapture":
                                                            return "faceCapture.manualCapture.default";
                                                        case "capturing":
                                                            return "faceCapture.loading.processing";
                                                        case "detecting":
                                                        case "idle":
                                                        case "offline":
                                                            return "faceCapture.genericErrors.noConnection";
                                                        default:
                                                            return "faceCapture.capturing.initiatingState";
                                                    }
                                                case "capturing":
                                                    return "faceCapture.loading.processing";
                                                case "capturingManual":
                                                    return "faceCapture.manualCapture.default";
                                                case "preparingUpload":
                                                case "uploading":
                                                case "validatingUpload":
                                                    return "faceCapture.loading.uploading";
                                                case "uploadError":
                                                    return a(i?.uploadError, i?.attemptsRemaining);
                                                case "success":
                                                    return "faceCapture.resultSuccess.default";
                                            }
                                        if ("object" == typeof r && null !== r) {
                                            let e = Object.keys(r);
                                            if (e.includes("uploading")) return "faceCapture.loading.uploading";
                                            if (e.includes("uploadError"))
                                                return a(i?.uploadError, i?.attemptsRemaining);
                                            if (e.includes("success")) return "faceCapture.resultSuccess.default";
                                        }
                                        return "faceCapture.capturing.initiatingState";
                                    }
                                })(e);
                            case "finished":
                                return "faceCapture.resultSuccess.default";
                            case "closed":
                                return "faceCapture.closed";
                            case "error":
                                return "faceCapture.resultError.processingFailed";
                            default:
                                return `faceCapture.${n}`;
                        }
                })(e, t),
            getErrorPayload: c,
        }),
    });
}
