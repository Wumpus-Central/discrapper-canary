d.d(t, { t: () => W });
var i = d(368499),
    e = d(168056),
    c = d(850886),
    a = d(655586),
    s = d(248051);
function n(l) {
    let { context: t } = l;
    if (l.matches("idle")) return { status: "idle" };
    if (l.matches("loading")) return { status: "loading" };
    if (l.matches("tutorial")) return { status: "tutorial", ageAssurance: t.config?.ageAssurance === !0 };
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
    if (l.matches("capture")) {
        let d = l.matches({ capture: "initializing" })
                ? "initializing"
                : l.matches({ capture: "detecting" })
                  ? "detecting"
                  : l.matches({ capture: "capturing" }) || l.matches({ capture: "capturingManual" })
                    ? "capturing"
                    : l.matches({ capture: "preparingUpload" }) ||
                        l.matches({ capture: "uploading" }) ||
                        l.matches({ capture: "validatingUpload" })
                      ? "uploading"
                      : l.matches({ capture: "uploadError" })
                        ? "uploadError"
                        : l.matches({ capture: "success" })
                          ? "success"
                          : void 0,
            { obfuscateWithAvatar: i, avatarVariant: e } = (0, c.n)(t.config?.selfieConcealmentOption);
        return {
            status: "capture",
            captureStatus: d ?? "initializing",
            stream: t.stream,
            detectionStatus: t.detectionStatus ?? "idle",
            debugFrame: t.debugFrame,
            attemptsRemaining: t.attemptsRemaining ?? 0,
            uploadError: t.uploadError,
            assistedOnboarding: t.config?.assistedOnboarding ?? !1,
            ageAssurance: t.config?.ageAssurance === !0,
            onDeviceMode: t.config?.onDeviceFaceResultsSubmissionEnabled === !0,
            obfuscateWithAvatar: i,
            avatarCanvas: t.avatarCanvas,
            avatarVariant: e,
        };
    }
    if (l.matches("processing")) return { status: "processing" };
    if (l.matches("finished")) return { status: "finished", processResponse: t.processResponse };
    if (l.matches("error")) {
        let l = t.error;
        return {
            status: "error",
            error: "string" == typeof l ? l : l ? l.message : "Unknown error",
            moduleErrorCode: "object" == typeof l && l ? l.moduleErrorCode : void 0,
        };
    }
    return { status: "idle" };
}
function Z(l, t) {
    let d = 0 === t ? "Exhausted" : "";
    switch (l) {
        case "LENSES_ERROR":
        case "LENSES_DETECTED":
            return `faceCapture.resultError.lensesDetected${d}`;
        case "BRIGHTNESS_ERROR":
            return `faceCapture.resultError.tooBright${d}`;
        case "MASK_ERROR":
        case "FACE_MASK_DETECTED":
            return `faceCapture.resultError.faceMaskDetected${d}`;
        case "FACE_TOO_DARK":
        case "TOO_DARK_ERROR":
            return `faceCapture.resultError.tooDark${d}`;
        case "CLOSED_EYES_ERROR":
        case "CLOSED_EYES_DETECTED":
            return `faceCapture.resultError.eyesClosed${d}`;
        case "HEAD_COVER_ERROR":
        case "HEAD_COVER_DETECTED":
            return `faceCapture.resultError.headCovered${d}`;
        case "FACE_OCCLUDED":
            return `faceCapture.resultError.faceOcclusion${d}`;
        case "TOO_BLURRY_ERROR":
        case "FACE_TOO_BLURRY":
        case "BAD_PHOTO_QUALITY":
        case "SELFIE_IMAGE_LOW_QUALITY":
            return `faceCapture.resultError.lowQuality${d}`;
        case "SERVER_ERROR":
        case "PROCESSING_ERROR":
        case "BAD_REQUEST":
            return `faceCapture.resultError.processingFailed${d}`;
        default:
            return `faceCapture.resultError.faceNotAligned${d}`;
    }
}
function b({ actor: l, trackElementClicked: t, trackCaptureAttemptFinished: d }) {
    return (
        (l.getSnapshot().context.dependencies.trackCaptureAttemptFinished = d),
        {
            load() {
                let { config: t } = l.getSnapshot().context;
                !0 === t.ds && (0, a.n)(!0), l.send({ type: "LOAD" });
            },
            async nextStep() {
                t?.("nextStep");
                let d = l.getSnapshot();
                if (d.matches("tutorial")) {
                    let { config: l, permissionResult: t } = d.context;
                    await (0, s.r)({ ds: l.ds, cameraGranted: "granted" === t });
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
            capture() {
                t?.("capture"), l.send({ type: "MANUAL_CAPTURE" });
            },
        }
    );
}
function m(l) {
    switch (l) {
        case "LENSES_ERROR":
        case "LENSES_DETECTED":
            return "lensesDetected";
        case "BRIGHTNESS_ERROR":
            return "tooBright";
        case "MASK_ERROR":
        case "FACE_MASK_DETECTED":
            return "faceMaskDetected";
        case "FACE_TOO_DARK":
        case "TOO_DARK_ERROR":
            return "tooDark";
        case "CLOSED_EYES_ERROR":
        case "CLOSED_EYES_DETECTED":
            return "eyesClosed";
        case "HEAD_COVER_ERROR":
        case "HEAD_COVER_DETECTED":
            return "headCovered";
        case "FACE_OCCLUDED":
            return "faceOcclusion";
        case "TOO_BLURRY_ERROR":
        case "FACE_TOO_BLURRY":
        case "BAD_PHOTO_QUALITY":
        case "SELFIE_IMAGE_LOW_QUALITY":
            return "lowQuality";
        case "SERVER_ERROR":
        case "PROCESSING_ERROR":
        case "BAD_REQUEST":
            return "processingFailed";
        default:
            return "faceNotAligned";
    }
}
function o(l, t) {
    if ("object" != typeof l || null === l) return !1;
    let d = l.capture;
    return "string" == typeof d ? d === t : "object" == typeof d && null !== d && t in d;
}
function u(l) {
    let t = (0, i.o)(l.value);
    if (void 0 !== t) {
        if ("error" === t) return "error.unknown";
        if ("capture" === t) {
            if (o(l.value, "uploadError")) return `error.${m(l.context.uploadError)}`;
            if (o(l.value, "detecting") && "offline" === l.context.detectionStatus) return "error.noConnection";
        }
    }
}
function h(l) {
    let t = (0, i.o)(l.value);
    if ("error" === t) return { reason: "fatal" };
    if ("capture" === t && o(l.value, "detecting") && "offline" === l.context.detectionStatus)
        return { reason: "noConnection" };
    let d = l.context.uploadError;
    if ("string" == typeof d && 0 !== d.length) return { errorCode: d, reason: m(d) };
}
function W(l, t, d = new a.t()) {
    return (0, e.l)({
        actor: l,
        mapState: n,
        createApi: b,
        instrumentation: (0, i.s)(t, {
            getEventScreenName: (l) =>
                (function (l, t) {
                    if (t === i.n.authFace || t === i.n.authentication)
                        return (function (l) {
                            let { value: t } = l;
                            if (null == t) return;
                            let d = (0, i.o)(t);
                            if (void 0 !== d)
                                switch (d) {
                                    case "tutorial":
                                        return i.r.authFaceTutorial;
                                    case "capture":
                                        return (function (l) {
                                            let { value: t } = l;
                                            if ("object" != typeof t || null === t) return;
                                            let d = t.capture;
                                            if (void 0 !== d) {
                                                if ("string" == typeof d)
                                                    switch (d) {
                                                        case "preparingUpload":
                                                        case "uploading":
                                                        case "validatingUpload":
                                                            return i.r.authFaceUpload;
                                                        case "uploadError":
                                                            return i.r.authFaceError;
                                                        case "success":
                                                            return i.r.authFaceUploadSuccess;
                                                        case "checkingDeepsight":
                                                        case "initializingDeepsight":
                                                        case "checkingStream":
                                                        case "initializing":
                                                        case "detecting":
                                                        case "capturing":
                                                        case "capturingManual":
                                                            return i.r.authFace;
                                                    }
                                                if ("object" == typeof d && null !== d) {
                                                    let l = Object.keys(d);
                                                    if (l.includes("uploading") || l.includes("validatingUpload"))
                                                        return i.r.authFaceUpload;
                                                    if (l.includes("uploadError")) return i.r.authFaceError;
                                                    if (l.includes("success")) return i.r.authFaceUploadSuccess;
                                                }
                                                return i.r.authFace;
                                            }
                                        })(l);
                                    case "finished":
                                        return i.r.authFaceUploadSuccess;
                                    case "error":
                                        return i.r.authFaceUploadFailed;
                                    default:
                                        return i.r.authFace;
                                }
                        })(l);
                    let { value: d } = l;
                    if (null == d) return;
                    let e = (0, i.o)(d);
                    if (void 0 !== e)
                        switch (e) {
                            case "idle":
                            case "loading":
                            case "processing":
                                return "faceCapture.loading.processing";
                            case "tutorial":
                                if (l.context?.config?.ageAssurance === !0) return "faceCapture.tutorial.ageAssurance";
                                if ("object" == typeof l.value && null !== l.value) {
                                    let t = l.value.tutorial;
                                    if ("object" == typeof t && null !== t && "initializingCamera" in t)
                                        return "faceCapture.tutorial.loading";
                                }
                                return "faceCapture.tutorial.default";
                            case "permissions":
                                return "faceCapture.tutorial.default";
                            case "capture":
                                return (function (l) {
                                    let { value: t, context: d } = l;
                                    if ("object" != typeof t || null === t) return;
                                    let i = t.capture;
                                    if (void 0 !== i) {
                                        if ("string" == typeof i)
                                            switch (i) {
                                                case "checkingDeepsight":
                                                case "initializingDeepsight":
                                                case "checkingStream":
                                                case "initializing":
                                                    return "faceCapture.capturing.initiatingState";
                                                case "detecting":
                                                    switch (d?.detectionStatus) {
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
                                                    return Z(d?.uploadError, d?.attemptsRemaining);
                                                case "success":
                                                    return "faceCapture.resultSuccess.default";
                                            }
                                        if ("object" == typeof i && null !== i) {
                                            let l = Object.keys(i);
                                            if (l.includes("uploading")) return "faceCapture.loading.uploading";
                                            if (l.includes("uploadError"))
                                                return Z(d?.uploadError, d?.attemptsRemaining);
                                            if (l.includes("success")) return "faceCapture.resultSuccess.default";
                                        }
                                        return "faceCapture.capturing.initiatingState";
                                    }
                                })(l);
                            case "finished":
                                return "faceCapture.resultSuccess.default";
                            case "closed":
                                return "faceCapture.closed";
                            case "error":
                                return "faceCapture.resultError.processingFailed";
                            default:
                                return `faceCapture.${e}`;
                        }
                })(l, t),
            getErrorName: u,
            getErrorPayload: h,
            visibilityObserver: d,
        }),
    });
}
