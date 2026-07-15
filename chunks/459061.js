r.d(e, { governmentValidationMachine: () => u, G: () => E });
var s = r(871178),
    n = r(768672),
    i = r(368499),
    a = r(288052),
    o = r(168056),
    d = r(269511);
async function p(t) {
    let e = await n.t.post(a.t.governmentValidation, {}, { signal: t });
    if (!e.ok) throw Error(`POST ${a.t.governmentValidation} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function c(t, e) {
    let r = await n.t.post(a.t.governmentValidation, { otpCode: t.code }, { signal: e });
    if (!r.ok) throw Error(`POST ${a.t.governmentValidation} (OTP) failed: ${r.status} ${r.statusText}`);
    return r.data;
}
let u = (0, o.t)({
    types: { context: {}, events: {}, input: {} },
    delays: { AUTO_PROCEED: 3e3 },
    actors: {
        processValidation: (0, o.a)(async ({ signal: t }) => p(t)),
        submitOtp: (0, o.a)(async ({ input: t, signal: e }) => c({ code: t.code }, e)),
        resendTimer: (0, o.i)(({ sendBack: t }) => {
            let e = s.t.getInstance(),
                r = 30,
                n = e.setInterval(() => {
                    (r -= 1), t({ type: "TICK" }), r <= 0 && e.clearInterval(n);
                }, 1e3);
            return () => e.clearInterval(n);
        }),
    },
    actions: {
        setError: (0, o.r)(({ event: t }) => ({ error: String(t.error) })),
        setErrorFromResponse: (0, o.r)({ error: () => "Government validation failed" }),
        setUnknownError: (0, o.r)({ error: () => "Unknown validation status" }),
        clearError: (0, o.r)({ error: () => void 0 }),
        setOtpCode: (0, o.r)(({ event: t }) => ({ otpCode: t.code, otpError: void 0, otpValidationErrors: void 0 })),
        validateOtpField: (0, o.r)(({ context: t }) => {
            let e = (0, d.n)(t.otpCode);
            return { otpValidationErrors: e.otp ? e : void 0 };
        }),
        setOtpError: (0, o.r)(({ context: t }) => ({
            otpError: "Invalid OTP code",
            attemptsRemaining: t.attemptsRemaining - 1,
        })),
        clearOtpError: (0, o.r)({ otpError: () => void 0, otpCode: () => "", otpValidationErrors: () => void 0 }),
        startResendTimer: (0, o.r)({ resendTimer: () => 30, resendTimerActive: () => !0 }),
        tickResendTimer: (0, o.r)(({ context: t }) => {
            let e = Math.max(0, t.resendTimer - 1);
            return { resendTimer: e, resendTimerActive: e > 0 };
        }),
        resetContext: (0, o.r)(({ context: t }) => ({
            config: t.config,
            error: void 0,
            otpCode: "",
            otpError: void 0,
            otpValidationErrors: void 0,
            attemptsRemaining: t.config.maxOtpAttempts ?? 3,
            resendTimer: 0,
            resendTimerActive: !1,
        })),
    },
    guards: {
        isBackgroundExecution: ({ context: t }) => t.config.backgroundExecution,
        isProcessing: (t, e) => -1 === e.response.statusCode,
        isSuccess: (t, e) =>
            0 === e.response.statusCode && e.response.governmentValidation?.validationStatus?.status === "OK",
        isError: (t, e) =>
            e.response.statusCode > 0 || e.response.governmentValidation?.validationStatus?.status === "FAIL",
        isOtpRequested: (t, e) => e.response.otpResponse?.authBridge?.otpCodeRequested === !0,
        isUnknown: (t, e) => e.response.governmentValidation?.validationStatus?.status === "UNKNOWN",
        hasAttemptsRemaining: ({ context: t }) => t.attemptsRemaining > 0,
        hasCompleteOtp: ({ context: t }) => (0, d.r)(t.otpCode),
        canResend: ({ context: t }) => !t.resendTimerActive,
    },
}).createMachine({
    id: "governmentValidation",
    initial: "idle",
    context: ({ input: t }) => ({
        config: t.config,
        error: void 0,
        otpCode: "",
        otpError: void 0,
        otpValidationErrors: void 0,
        attemptsRemaining: t.config.maxOtpAttempts ?? 3,
        resendTimer: 0,
        resendTimerActive: !1,
    }),
    states: {
        idle: { on: { LOAD: { target: "loading" } } },
        loading: {
            invoke: {
                id: "processValidation",
                src: "processValidation",
                onDone: [
                    { target: "finished", guard: "isBackgroundExecution" },
                    {
                        target: "awaitingOtp",
                        guard: { type: "isOtpRequested", params: ({ event: t }) => ({ response: t.output }) },
                    },
                    {
                        target: "displaySuccess",
                        guard: { type: "isSuccess", params: ({ event: t }) => ({ response: t.output }) },
                    },
                    {
                        target: "displayProcessing",
                        guard: { type: "isProcessing", params: ({ event: t }) => ({ response: t.output }) },
                    },
                    {
                        target: "displayUnknown",
                        guard: { type: "isUnknown", params: ({ event: t }) => ({ response: t.output }) },
                        actions: "setUnknownError",
                    },
                    { target: "displayError", actions: "setErrorFromResponse" },
                ],
                onError: [
                    { target: "finished", guard: "isBackgroundExecution" },
                    { target: "displayError", actions: "setError" },
                ],
            },
        },
        awaitingOtp: {
            entry: "startResendTimer",
            invoke: { id: "resendTimer", src: "resendTimer" },
            on: {
                TICK: { actions: "tickResendTimer" },
                OTP_CHANGED: { actions: "setOtpCode" },
                VALIDATE_OTP: { actions: "validateOtpField" },
                SUBMIT_OTP: [{ guard: "hasCompleteOtp", target: "verifyingOtp" }, { actions: "validateOtpField" }],
                RESEND_OTP: { target: "loading", guard: "canResend" },
            },
        },
        verifyingOtp: {
            invoke: {
                id: "submitOtp",
                src: "submitOtp",
                input: ({ context: t }) => ({ code: t.otpCode }),
                onDone: [
                    {
                        target: "displaySuccess",
                        guard: { type: "isSuccess", params: ({ event: t }) => ({ response: t.output }) },
                    },
                    { target: "awaitingOtp", guard: "hasAttemptsRemaining", actions: "setOtpError" },
                    { target: "displayError", actions: (0, o.r)({ error: () => "Maximum OTP attempts exceeded" }) },
                ],
                onError: [
                    { target: "awaitingOtp", guard: "hasAttemptsRemaining", actions: "setOtpError" },
                    { target: "displayError", actions: "setError" },
                ],
            },
        },
        displaySuccess: { after: { AUTO_PROCEED: { target: "finished" } } },
        displayProcessing: { after: { AUTO_PROCEED: { target: "finished" } } },
        displayError: { after: { AUTO_PROCEED: { target: "finished" } } },
        displayUnknown: { after: { AUTO_PROCEED: { target: "finished" } } },
        finished: { type: "final" },
    },
});
function l(t) {
    let e = (0, i.o)(t.value);
    if (void 0 !== e)
        switch (e) {
            case "loading":
            case "displayProcessing":
                return "GovernmentRecordValidation.analyzing.default";
            case "displaySuccess":
                return "GovernmentRecordValidation.success.default";
            case "displayError":
                return "GovernmentRecordValidation.error.usernotfound";
            default:
                return;
        }
}
function g(t) {
    let { context: e } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("loading")
          ? { status: "loading" }
          : t.matches("awaitingOtp")
            ? {
                  status: "awaitingOtp",
                  resendTimer: e.resendTimer,
                  canResend: !e.resendTimerActive,
                  attemptsRemaining: e.attemptsRemaining,
                  otpError: e.otpError,
                  otpCode: e.otpCode,
                  otpLength: 6,
                  otpValidationErrors: e.otpValidationErrors,
                  isOtpValid: 0 === Object.keys(e.otpValidationErrors ?? {}).length,
              }
            : t.matches("verifyingOtp")
              ? { status: "verifyingOtp", otpCode: e.otpCode, otpLength: 6 }
              : t.matches("displaySuccess")
                ? { status: "displaySuccess" }
                : t.matches("displayProcessing")
                  ? { status: "processing" }
                  : t.matches("finished")
                    ? { status: "finished" }
                    : t.matches("displayError")
                      ? { status: "error", error: e.error ?? "An error occurred" }
                      : t.matches("displayUnknown")
                        ? { status: "unknown", error: e.error ?? "Unknown validation status" }
                        : { status: "idle" };
}
function m({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setOtpCode(e) {
            t.send({ type: "OTP_CHANGED", code: e });
        },
        validateOtp() {
            t.send({ type: "VALIDATE_OTP" });
        },
        submitOtp(r) {
            e?.("submitOtp"), t.send({ type: "OTP_CHANGED", code: r }), t.send({ type: "SUBMIT_OTP" });
        },
        resendOtp() {
            e?.("resendOtp"), t.send({ type: "RESEND_OTP" });
        },
        retry() {
            e?.("retry"), t.send({ type: "RETRY" });
        },
    };
}
function E(t) {
    return (0, o.l)({
        actor: (0, o.s)(u, { input: { config: t.config } }).start(),
        mapState: g,
        createApi: m,
        instrumentation: (0, i.s)(i.n.governmentValidation, { getEventScreenName: l }),
    });
}
