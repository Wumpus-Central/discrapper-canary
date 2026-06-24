let r;
i.d(t, { _: () => u, g: () => d, h: () => h, m: () => p, n: () => S, o: () => E, r: () => I, v: () => c });
var n = i(209688);
function o() {
    return Date.now();
}
let s =
        ((r = []),
        {
            subscribe: function (e) {
                return (
                    r.push(e),
                    () => {
                        let t = r.indexOf(e);
                        t > -1 && r.splice(t, 1);
                    }
                );
            },
            emit: function (e) {
                r.forEach((t) => {
                    try {
                        t(e);
                    } catch {
                        return;
                    }
                });
            },
            clear: function () {
                r.length = 0;
            },
        }),
    a = null,
    l = [];
function c(e) {
    if ((a?.dispose(), (a = e), l.length > 0)) for (let t of l.splice(0)) e.enqueue(t);
    return e;
}
function d() {
    return a;
}
function u() {
    a?.dispose(), (a = null), (l.length = 0);
}
function h(e) {
    s.emit(e);
    let t = {
        code: e.code,
        module: e.module,
        screen:
            void 0 !== e.screen
                ? (function (e) {
                      if (e.length <= 50) return e;
                      let t = e.slice(0, 50),
                          i = Math.max(t.lastIndexOf("."), t.lastIndexOf("+"));
                      return i > 0 ? t.slice(0, i) : t;
                  })(e.screen)
                : void 0,
        clientTimestamp: e.clientTimestamp ?? o(),
        payload: e.payload ?? {},
    };
    a ? a.enqueue(t) : l.push(t);
}
function p(e) {
    let {
            endpoint: t,
            authToken: i,
            pageLifecycle: r,
            timer: o,
            apiBaseUrl: s,
            apiClient: a = n.t,
            maxBatchSize: l = 50,
            maxBatchAgeMs: c = 1e3,
            maxRetries: d = 2,
        } = e,
        u = [],
        h = !1,
        p = !1,
        f = null,
        m = null,
        g = !1;
    function C() {
        null !== f && (o.clearTimeout(f), (f = null));
    }
    function v() {
        g || ((g = !0), console.warn("[AnalyticsBatchingService] Dropping batch: no auth token at flush time."));
    }
    function y(e, i) {
        let r;
        try {
            r = a.post(t, e, { keepalive: !0 });
        } catch (t) {
            w(e, t, i);
            return;
        }
        r.catch((t) => w(e, t, i));
    }
    function w(e, t, i) {
        var r;
        p ||
            !(
                0 === (r = (t && "object" == typeof t && "status" in t && Number(t.status)) || 0) ||
                r >= 500 ||
                408 === r ||
                429 === r
            ) ||
            i >= d ||
            o.setTimeout(
                () => {
                    p || y(e, i + 1);
                },
                250 * 2 ** i,
            );
    }
    function _() {
        if (p || 0 === u.length) return;
        let e = u;
        ((u = []), C(), i()) ? y(e, 0) : v();
    }
    function b() {
        if (p || 0 === u.length) return;
        let e = u;
        (u = []), C();
        let n = i();
        if (!n) return void v();
        let o = `${s().replace(/\/$/, "")}${t}`,
            a = JSON.stringify({ token: n, events: e });
        r.sendBeacon(o, a);
    }
    return {
        enqueue: function (e) {
            if (!p && (u.push(e), h)) {
                if (u.length >= l) return void _();
                null === f &&
                    (f = o.setTimeout(() => {
                        (f = null), _();
                    }, c));
            }
        },
        start: function () {
            h || p || ((h = !0), (m = r.onPageHide(b)), u.length > 0 && _());
        },
        flush: _,
        dispose: function () {
            p || ((p = !0), C(), m?.(), (m = null), (u = []));
        },
    };
}
function f(e) {
    h({ code: e.code, module: e.module, screen: e.screen, clientTimestamp: o(), payload: e.payload });
}
function m(e, t, i) {
    f({ module: e, screen: t, code: "moduleOpened", payload: i });
}
function g(e, t, i) {
    f({ module: e, screen: t, code: "moduleClosed", payload: i });
}
function C(e, t, i) {
    f({ module: e, screen: t, code: "screenOpened", payload: i });
}
function v(e, t, i) {
    f({ module: e, screen: t, code: "screenClosed", payload: i });
}
function y(e, t, i) {
    f({ module: e, screen: t, code: "errorTriggered", payload: i });
}
function w(e) {
    return "string" != typeof e
        ? ""
        : e
              .trim()
              .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");
}
function _(e) {
    return e
        .split("+")
        .map((e) =>
            e
                .split(".")
                .map((e) => w(e))
                .filter((e) => e.length > 0)
                .join("."),
        )
        .filter((e) => e.length > 0)
        .join("+");
}
function b(e) {
    if ("string" == typeof e || "number" == typeof e) {
        let t = w(String(e));
        return t.length > 0 ? t : void 0;
    }
    if ("object" != typeof e || null === e) return;
    let t = Object.entries(e).sort(([e], [t]) => (e < t ? -1 : +(e > t)));
    if (0 === t.length) return;
    let i = t
        .map(([e, t]) => {
            let i = w(e),
                r = b(t);
            return 0 === i.length ? r : void 0 === r ? i : `${i}.${r}`;
        })
        .filter((e) => void 0 !== e && e.length > 0);
    if (0 !== i.length) return i.join("+");
}
function L(e, t) {
    let i = "string" == typeof e ? e.trim() : "",
        r = _(t);
    return 0 === i.length ? r : 0 === r.length ? i : `${i}.${r}`;
}
function E(e, t) {
    return {
        moduleName: e,
        onModuleOpened: m,
        onModuleClosed: g,
        onScreenOpened: C,
        onScreenClosed: v,
        onErrorTriggered: y,
        onElementClicked: (e, t, i) => {
            f({ module: e, screen: t, code: "elementClicked", payload: i });
        },
        onCaptureAttemptFinished: (e, t, i) => {
            f({ module: e, screen: t, code: "captureAttemptFinished", payload: i });
        },
        getScreenName: (i) =>
            (function (e, t, i) {
                let r = i?.getEventScreenName?.(t);
                if (void 0 !== r) return r;
                let n = i?.getScreenName?.(t) ?? b(t.value);
                if (void 0 !== n) return L(e, n);
            })(e, i, { getEventScreenName: t?.getEventScreenName, getScreenName: t?.getScreenName }),
        getErrorName: (i) => {
            let r =
                t?.getErrorName?.(i) ??
                (function (e) {
                    let t = b(e.value);
                    if (void 0 === t) return;
                    let i = _(t);
                    if (0 !== i.length) {
                        if ("error" === i) return "error.unknown";
                        if ("error" === i || i.includes("error") || i.includes("failed") || i.includes("failure"))
                            return `error.${i}`;
                    }
                })(i);
            if (void 0 !== r) return L(e, r);
        },
        getErrorPayload: (e) => t?.getErrorPayload?.(e),
    };
}
let S = {
        selfie: "SELFIE",
        faceCapture: "faceCapture",
        authentication: "AUTHENTICATION",
        authFace: "authFace",
        mlConsent: "ML_CONSENT",
        combinedConsent: "COMBINED_CONSENT",
        curpValidation: "CURP_VALIDATION",
        faceMatch: "FACE_MATCH",
        qr: "QR",
        videoSelfie: "VIDEO_ONBOARDING",
        passport: "ID",
        front: "ID",
        back: "ID",
        id: "ID",
        idCapture: "idCapture",
        idOcr: "ID_OCR",
        document: "DOCUMENT_CAPTURE",
        creditCard: "CREDIT_CARD_FRONT",
        creditCardBack: "CREDIT_CARD_BACK",
        conference: "CONFERENCE",
        otp: "OTP",
        signature: "SIGNATURE",
        ekyc: "EXTERNAL_VERIFICATION",
        watchlist: "WATCHLIST",
        globalWatchList: "GLOBAL_WATCHLIST",
        customWatchList: "CUSTOM_WATCHLIST",
        email: "EMAIL",
        phone: "PHONE",
        instantVerifyEmail: "INSTANT_VERIFY_EMAIL",
        instantVerifyConsent: "INSTANT_VERIFY_CONSENT",
        forms: "FORMS",
        customModule: "CUSTOM_MODULE",
        geolocation: "GEOLOCATION",
        ekyb: "EKYB",
        identityReuse: "IDENTITY_REUSE",
        antifraud: "ANTIFRAUD",
        aeSignature: "AE_SIGNATURE",
        qeSignature: "QE_SIGNATURE",
        crossDocumentDataMatch: "CROSS_DOCUMENT_DATA_MATCH",
        customFields: "CUSTOM_FIELDS",
        watchlistForBusiness: "WATCHLIST_FOR_BUSINESS",
        trustGraph: "TRUST_GRAPH",
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
    };
I.passportTutorial, I.frontTutorial, I.backTutorial, I.faceCaptureTutorial;
