d.d(t, {
    C: () => c,
    S: () => e,
    _: () => m,
    a: () => z,
    g: () => u,
    h: () => h,
    n: () => L,
    o: () => V,
    p: () => W,
    r: () => I,
    s: () => T,
    v: () => o,
    x: () => a,
    y: () => b,
});
var i = d(768672);
function e() {
    return Date.now();
}
function c(l) {
    URL.revokeObjectURL(l);
}
function a() {
    let l = [];
    return {
        subscribe: function (t) {
            return (
                l.push(t),
                () => {
                    let d = l.indexOf(t);
                    d > -1 && l.splice(d, 1);
                }
            );
        },
        emit: function (t) {
            l.forEach((l) => {
                try {
                    l(t);
                } catch {
                    return;
                }
            });
        },
        clear: function () {
            l.length = 0;
        },
    };
}
let s = a(),
    n = null,
    Z = [];
function b(l) {
    if ((n?.dispose(), (n = l), Z.length > 0)) for (let t of Z.splice(0)) l.enqueue(t);
    return l;
}
function m() {
    return n;
}
function o() {
    n?.dispose(), (n = null), (Z.length = 0);
}
function u(l) {
    s.emit(l);
    let t = {
        code: l.code,
        module: l.module,
        screen:
            void 0 !== l.screen
                ? (function (l) {
                      if (l.length <= 50) return l;
                      let t = l.slice(0, 50),
                          d = Math.max(t.lastIndexOf("."), t.lastIndexOf("+"));
                      return d > 0 ? t.slice(0, d) : t;
                  })(l.screen)
                : void 0,
        clientTimestamp: l.clientTimestamp ?? e(),
        payload: l.payload ?? {},
    };
    n ? n.enqueue(t) : Z.push(t);
}
function h(l) {
    let {
            endpoint: t,
            authToken: d,
            pageLifecycle: e,
            timer: c,
            apiBaseUrl: a,
            apiClient: s = i.t,
            maxBatchSize: n = 50,
            maxBatchAgeMs: Z = 1e3,
            maxRetries: b = 2,
        } = l,
        m = [],
        o = !1,
        u = !1,
        h = null,
        W = null,
        G = !1;
    function p() {
        null !== h && (c.clearTimeout(h), (h = null));
    }
    function N() {
        G || ((G = !0), console.warn("[AnalyticsBatchingService] Dropping batch: no auth token at flush time."));
    }
    function M(l, d) {
        let i;
        try {
            i = s.post(t, l, { keepalive: !0 });
        } catch (t) {
            X(l, t, d);
            return;
        }
        i.catch((t) => X(l, t, d));
    }
    function X(l, t, d) {
        var i;
        u ||
            !(
                0 === (i = (t && "object" == typeof t && "status" in t && Number(t.status)) || 0) ||
                i >= 500 ||
                408 === i ||
                429 === i
            ) ||
            d >= b ||
            c.setTimeout(
                () => {
                    u || M(l, d + 1);
                },
                250 * 2 ** d,
            );
    }
    function r() {
        if (u || 0 === m.length) return;
        let l = m;
        ((m = []), p(), d()) ? M(l, 0) : N();
    }
    function y() {
        if (u || 0 === m.length) return;
        let l = m;
        (m = []), p();
        let i = d();
        if (!i) return void N();
        let c = `${a().replace(/\/$/, "")}${t}`,
            s = JSON.stringify({ token: i, events: l });
        e.sendBeacon(c, s);
    }
    return {
        enqueue: function (l) {
            if (!u && (m.push(l), o)) {
                if (m.length >= n) return void r();
                null === h &&
                    (h = c.setTimeout(() => {
                        (h = null), r();
                    }, Z));
            }
        },
        start: function () {
            o || u || ((o = !0), (W = e.onPageHide(y)), m.length > 0 && r());
        },
        flush: r,
        dispose: function () {
            u || ((u = !0), p(), W?.(), (W = null), (m = []));
        },
    };
}
function W(l) {
    u({ code: l.code, module: l.module, screen: l.screen, clientTimestamp: e(), payload: l.payload });
}
function G(l, t, d) {
    W({ module: l, screen: t, code: "moduleOpened", payload: d });
}
function p(l, t, d) {
    W({ module: l, screen: t, code: "moduleClosed", payload: d });
}
function N(l, t, d) {
    W({ module: l, screen: t, code: "background", payload: d });
}
function M(l, t, d) {
    W({ module: l, screen: t, code: "foreground", payload: d });
}
function X(l, t, d) {
    W({ module: l, screen: t, code: "screenOpened", payload: d });
}
function r(l, t, d) {
    W({ module: l, screen: t, code: "screenClosed", payload: d });
}
function y(l) {
    if ("string" == typeof l || "number" == typeof l) {
        let t = String(l).trim();
        return t.length > 0 ? t : void 0;
    }
    if ("object" != typeof l || null === l) return;
    let t = Object.entries(l).sort(([l], [t]) => (l < t ? -1 : +(l > t)));
    if (0 === t.length) return;
    let d = t
        .map(([l, t]) => {
            let d = l.trim(),
                i = y(t);
            return 0 === d.length ? i : void 0 === i ? d : `${d}.${i}`;
        })
        .filter((l) => void 0 !== l && l.length > 0);
    if (0 !== d.length) return d.join("+");
}
function Y(l, t) {
    let d = "string" == typeof l ? l.trim() : "",
        i = t.trim();
    return 0 === d.length ? i : 0 === i.length ? d : `${d}.${i}`;
}
function T(l, t) {
    let d = t?.visibilityObserver;
    return {
        moduleName: l,
        onModuleOpened: G,
        onModuleClosed: p,
        onScreenOpened: X,
        onScreenClosed: r,
        onErrorTriggered: (l, t, d, i) => {
            W({ module: l, screen: d, code: "errorTriggered", payload: { errorName: t, ...i } });
        },
        subscribeVisibility: d ? (l) => d.onVisibilityChange(l) : void 0,
        getInitialVisibility: d ? () => d.isVisible() : void 0,
        onBackground: d ? N : void 0,
        onForeground: d ? M : void 0,
        onElementClicked: (l, t, d) => {
            W({ module: l, screen: t, code: "elementClicked", payload: d });
        },
        onCaptureAttemptFinished: (l, t, d) => {
            W({ module: l, screen: t, code: "captureAttemptFinished", payload: d });
        },
        getScreenName: (d) =>
            (function (l, t, d) {
                let i = d?.getEventScreenName?.(t);
                if (void 0 !== i) {
                    let l = i.trim();
                    return l.length > 0 ? l : void 0;
                }
                let e = d?.getScreenName?.(t) ?? y(t.value);
                if (void 0 !== e) return Y(l, e);
            })(l, d, { getEventScreenName: t?.getEventScreenName, getScreenName: t?.getScreenName }),
        getErrorName: (d) => {
            let i =
                t?.getErrorName?.(d) ??
                (function (l) {
                    let t,
                        d = y(l.value);
                    if (void 0 === d) return;
                    let i = d.trim();
                    if (0 !== i.length) {
                        if ("error" === i.toLowerCase()) return "error.unknown";
                        if (
                            "error" === (t = i.toLowerCase()) ||
                            t.includes("error") ||
                            t.includes("failed") ||
                            t.includes("failure")
                        )
                            return `error.${i}`;
                    }
                })(d);
            if (void 0 !== i) return Y(l, i);
        },
        getErrorPayload: (l) => t?.getErrorPayload?.(l),
    };
}
function V(l) {
    if ("string" == typeof l) return l;
    if ("object" == typeof l && null !== l) {
        let t = Object.keys(l);
        if (1 === t.length) {
            let l = t[0];
            return "string" == typeof l ? l : void 0;
        }
    }
}
let L = {
        selfie: "SELFIE",
        faceCapture: "faceCapture",
        authentication: "AUTHENTICATION",
        authFace: "authFace",
        mlConsent: "ML_CONSENT",
        combinedConsent: "datasharingconsent",
        curpValidation: "CURP",
        faceMatch: "FACE_MATCH",
        qr: "QR",
        videoSelfie: "VIDEO_ONBOARDING",
        passport: "ID",
        front: "ID",
        back: "ID",
        id: "ID",
        idCapture: "idCapture",
        idOcr: "ID_OCR",
        document: "documentCapture",
        creditCard: "CREDIT_CARD_FRONT",
        creditCardBack: "CREDIT_CARD_BACK",
        conference: "CONFERENCE",
        otp: "OTP",
        signature: "eSign",
        ekyc: "eKYC",
        watchlist: "watchlist",
        globalWatchList: "GLOBAL_WATCHLIST",
        customWatchList: "customWatchlist",
        email: "email",
        phone: "phoneNumber",
        instantVerifyEmail: "INSTANT_VERIFY_EMAIL",
        instantVerifyConsent: "INSTANT_VERIFY_CONSENT",
        forms: "forms",
        customModule: "CUSTOM_MODULE",
        geolocation: "Geolocation",
        ekyb: "eKYB",
        identityReuse: "IDENTITY_REUSE",
        antifraud: "antifraud",
        aeSignature: "AdSign",
        qeSignature: "QSign",
        crossDocumentDataMatch: "CROSS_DOCUMENT_DATA_MATCH",
        customFields: "CUSTOM_FIELDS",
        fieldComparison: "FIELD_COMPARISON",
        personhood: "PERSONHOOD",
        watchlistForBusiness: "watchlistForBusiness",
        trustGraph: "TRUST_GRAPH",
        certificateIssuance: "CERTIFICATE_ISSUANCE",
        governmentValidation: "GovernmentRecordValidation",
        documentUpload: "document-upload",
        home: "home",
        workflow: "workflow",
        fiscalQr: "FISCAL_QR",
    },
    I = {
        faceMatch: "FACE_MATCH",
        faceCaptureTutorial: "SELFIE_CAPTURE_TUTORIAL",
        faceCaptureCamera: "SELFIE_CAMERA_CAPTURE",
        faceCaptureError: "SELFIE_ATTEMPT_FAILED",
        faceCaptureSuccess: "SELFIE_UPLOAD_SUCCEEDED",
        faceCaptureUpload: "SELFIE_UPLOAD_PROGRESS",
        mlConsent: "MACHINE_LEARNING_CONSENT",
        combinedConsent: "COMBINED_CONSENT",
        curpEnter: "ENTER_CURP",
        curpValidate: "VALIDATE_CURP",
        curpGenerate: "GENERATE_CURP",
        curpValidation: "CURP_VALIDATION_PROGRESS",
        curpValidationFailed: "CURP_VALIDATION_FAILED",
        curpValidationSuccess: "CURP_VALIDATION_SUCCEEDED",
        qrTutorial: "QR_TUTORIAL",
        qrScan: "QR_SCAN",
        smsOtp: "OTP",
        simpleOTP: "OTP",
        signatureInput: "SIGNATURE_INPUT",
        frontTutorial: "FRONT_ID_CAPTURE_TUTORIAL",
        frontCameraCapture: "FRONT_ID_CAMERA_CAPTURE",
        frontHelp: "FRONT_ID_HELP",
        frontReviewPhoto: "FRONT_ID_REVIEW_PHOTO",
        frontUploadProgress: "FRONT_ID_UPLOAD_PROGRESS",
        frontAttemptFailed: "FRONT_ID_ATTEMPT_FAILED",
        frontUploadSuccess: "FRONT_ID_UPLOAD_SUCCEEDED",
        backTutorial: "BACK_ID_CAPTURE_TUTORIAL",
        backCameraCapture: "BACK_ID_CAMERA_CAPTURE",
        backReviewPhoto: "BACK_ID_REVIEW_PHOTO",
        backUploadProgress: "BACK_ID_UPLOAD_PROGRESS",
        backAttemptFailed: "BACK_ID_ATTEMPT_FAILED",
        backUploadSuccess: "BACK_ID_UPLOAD_SUCCEEDED",
        backHelp: "BACK_ID_HELP",
        passportTutorial: "TUTORIAL_PASSPORT",
        documentTutorial: "DOCUMENT_CAPTURE_TUTORIAL",
        documentCameraCapture: "DOCUMENT_CAMERA_CAPTURE",
        documentHelp: "DOCUMENT_HELP",
        documentReviewPhoto: "DOCUMENT_REVIEW_PHOTO",
        documentUploadProgress: "DOCUMENT_UPLOAD_IN_PROGRESS",
        documentAttemptFailed: "DOCUMENT_ATTEMPT_FAILED",
        documentUploadSuccess: "DOCUMENT_UPLOAD_SUCCEEDED",
        conferenceWait: "CONFERENCE_WAIT",
        conferenceVideoChat: "CONFERENCE_VIDEO_CHAT",
        conferenceMessageChat: "CONFERENCE_MESSAGE_CHAT",
        videoSelfieTutorial: "VIDEO_SELFIE_TUTORIAL",
        videoSelfie: "VIDEO_SELFIE",
        videoSelfieFaceCapture: "VIDEO_SELFIE_FACE_CAPTURE",
        videoSelfieFaceUploadProgress: "VIDEO_SELFIE_FACE_UPLOAD_PROGRESS",
        videoSelfieFaceAttemptFailed: "VIDEO_SELFIE_FACE_ATTEMPT_FAILED",
        videoSelfieFaceUploadSucceeded: "VIDEO_SELFIE_FACE_UPLOAD_SUCCEEDED",
        videoSelfieFrontIdCapture: "VIDEO_SELFIE_FRONT_ID_CAPTURE",
        videoSelfieFrontIdUploadProgress: "VIDEO_SELFIE_FRONT_ID_UPLOAD_PROGRESS",
        videoSelfieFrontIdAttemptFailed: "VIDEO_SELFIE_FRONT_ID_ATTEMPT_FAILED",
        videoSelfieFrontIdUploadSucceeded: "VIDEO_SELFIE_FRONT_ID_UPLOAD_SUCCEEDED",
        videoSelfieBackIdCapture: "VIDEO_SELFIE_BACK_ID_CAPTURE",
        videoSelfieBackIdUploadProgress: "VIDEO_SELFIE_BACK_ID_UPLOAD_PROGRESS",
        videoSelfieBackIdAttemptFailed: "VIDEO_SELFIE_BACK_ID_ATTEMPT_FAILED",
        videoSelfieBackIdUploadSucceeded: "VIDEO_SELFIE_BACK_ID_UPLOAD_SUCCEEDED",
        videoSelfieDocumentCapture: "VIDEO_SELFIE_DOCUMENT_CAPTURE",
        videoSelfieVoiceQuestion: "VIDEO_SELFIE_VOICE_QUESTION",
        videoSelfieVoiceFinalQuestion: "VIDEO_SELFIE_VOICE_FINAL_QUESTION",
        videoSelfieVideoUpload: "VIDEO SELFIE VIDEO UPLOAD",
        ekycInput: "EKYC_INPUT",
        ekycProgress: "EKYC_PROGRESS",
        ekycSucceeded: "EKYC_SUCCEEDED",
        ekycFailed: "EKYC_FAILED",
        forms: "FORMS",
        globalWatchListInput: "GLOBAL_WATCHLIST_INPUT",
        globalWatchListProgress: "GLOBAL_WATCHLIST_PROGRESS",
        globalWatchListSuccess: "GLOBAL_WATCHLIST_SUCCEEDED",
        globalWatchListFailed: "GLOBAL_WATCHLIST_FAILED",
        customWatchListInput: "CUSTOM_WATCHLIST_INPUT",
        customWatchListProgress: "CUSTOM_WATCHLIST_PROGRESS",
        customWatchListSuccess: "CUSTOM_WATCHLIST_SUCCEEDED",
        customWatchListFailed: "CUSTOM_WATCHLIST_FAILED",
        emailInput: "EMAIL_INPUT",
        phoneInput: "PHONE_INPUT",
        instantVerify: "INSTANT_VERIFY",
        authFace: "AUTH_FACE",
        authFaceError: "AUTH_FACE_ATTEMPT_FAILED",
        authFaceUpload: "AUTH_FACE_UPLOAD_PROGRESS",
        authFaceUploadSuccess: "AUTH_FACE_UPLOAD_SUCCEEDED",
        authFaceUploadFailed: "AUTH_FACE_UPLOAD_FAILED",
        authFaceTutorial: "AUTH_FACE_TUTORIAL",
        customModuleCallback: "CUSTOM_MODULE_CALLBACK",
        customModuleProcessing: "CUSTOM_MODULE_PROCESSING",
        digitalIdFileSelection: "DIGITAL_ID_FILE_SELECTION",
        digitalIdFileReview: "DIGITAL_ID_FILE_REVIEW",
        digitalIdUploadProgress: "DIGITAL_ID_UPLOAD_PROGRESS",
        digitalIdUploadSuccess: "DIGITAL_ID_UPLOAD_SUCCEEDED",
        digitalIdUploadFailed: "DIGITAL_ID_UPLOAD_FAILED",
        digitalIdAnalysisProgress: "DIGITAL_ID_ANALYSIS_PROGRESS",
        digitalIdVerificationSuccess: "DIGITAL_ID_VERIFICATION_SUCCESS",
        digitalIdVerificationFailed: "DIGITAL_ID_VERIFICATION_FAILED",
        ekybForm: "EKYB_FORM",
    },
    z = {
        imageTooBlurry: "imageTooBlurry",
        fillFrame: "fillFrame",
        checkCameraOrLighting: "checkCameraOrLighting",
        frontIdCaptureStarted: "frontIdCaptureStarted",
        lookAtCamera: "lookAtCamera",
        moveCloser: "moveCloser",
        lookingForFrontId: "lookingForFrontId",
        lookingForBackId: "lookingForBackId",
        cameraSwitchToBack: "cameraSwitchToBack",
        cameraSwitchToFront: "cameraSwitchToFront",
        audioStreamOpened: "audioStreamOpened",
        audioStreamClosed: "audioStreamClosed",
        videoSelfieQuestionAnswered: "videoSelfieQuestionAnswered",
        videoSelfieVideoUploadInProgress: "videoSelfieVideoUploadInProgress",
        videoSelfieTosNotAccepted: "videoSelfieTosNotAccepted",
        videoSelfieTosAccepted: "videoSelfieTosAccepted",
        videoSelfieStreamCreated: "videoSelfieStreamCreated",
        videoSelfieStreamDestroyed: "videoSelfieStreamDestroyed",
        videoSelfieReconnecting: "videoSelfieReconnecting",
        videoSelfieReconnected: "videoSelfieReconnected",
    };
I.passportTutorial, I.frontTutorial, I.backTutorial, I.faceCaptureTutorial;
