r.d(e, { emailMachine: () => O, k: () => h });
var i = r(871178),
    a = r(768672),
    n = r(368499),
    o = r(288052),
    s = r(168056),
    d = r(269511);
function l(t, e) {
    return t.status === e ? "invalidEmail" : "serverError";
}
async function p(t) {
    let e = await a.t.get(o.t.getEmail, { signal: t });
    if (!e.ok) throw Error(`GET ${o.t.getEmail} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function m(t, e) {
    try {
        return (await a.t.post(o.t.email, { email: t.email }, { signal: e })).data;
    } catch (t) {
        throw Error(l(t, 400));
    }
}
async function c(t) {
    try {
        await a.t.get(`${o.t.sendSmsOtp}?communicationchannel=EMAIL`, { signal: t });
    } catch (t) {
        throw Error(l(t));
    }
}
async function g(t, e) {
    try {
        return (await a.t.get(`${o.t.compareOtp}?code=${t}&channel=EMAIL`, { signal: e })).data;
    } catch (t) {
        throw Error(l(t));
    }
}
function E(t) {
    return t instanceof Error ? t.message : String(t);
}
function u(t) {
    return 0 !== t.email.trim().length && t.isValid ? {} : { email: "invalidEmail" };
}
let O = (0, s.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchEmail: (0, s.a)(async ({ signal: t }) => p(t)),
        submitEmail: (0, s.a)(async ({ input: t, signal: e }) => m({ email: t.email }, e)),
        sendOtp: (0, s.a)(async ({ signal: t }) => c(t)),
        verifyOtp: (0, s.a)(async ({ input: t, signal: e }) => g(t.code, e)),
        resendTimer: (0, s.i)(({ input: t, sendBack: e }) => {
            let r = i.t.getInstance(),
                a = t.seconds;
            if (a <= 0) return () => {};
            let n = r.setInterval(() => {
                e({ type: "TICK" }), (a -= 1) <= 0 && r.clearInterval(n);
            }, 1e3);
            return () => r.clearInterval(n);
        }),
    },
    actions: {
        setPrefilledEmail: (0, s.r)(({ event: t }) => {
            let e = t.output.email;
            return { prefilledEmail: e, email: e };
        }),
        setEmail: (0, s.r)(({ event: t }) => ({
            email: t.email,
            isValid: t.isValid,
            emailError: void 0,
            validationErrors: void 0,
        })),
        validateEmailField: (0, s.r)(({ context: t }) => {
            let e = u(t);
            return { validationErrors: e.email ? e : void 0 };
        }),
        computeValidationResult: (0, s.r)(({ context: t }) => {
            let e = u(t);
            return { validationErrors: e.email ? e : void 0 };
        }),
        setEmailError: (0, s.r)(({ event: t }) => ({ emailError: E(t.error) })),
        setError: (0, s.r)(({ event: t }) => ({ error: E(t.error) })),
        clearError: (0, s.r)({ error: () => void 0 }),
        clearEmailError: (0, s.r)({ emailError: () => void 0 }),
        setOtpCode: (0, s.r)(({ event: t }) => ({ otpCode: t.code, otpError: void 0, otpValidationErrors: void 0 })),
        validateOtpField: (0, s.r)(({ context: t }) => {
            let e = (0, d.n)(t.otpCode);
            return { otpValidationErrors: e.otp ? e : void 0 };
        }),
        setOtpError: (0, s.r)(({ context: t, event: e }) => ({
            otpError: E(e.error),
            attemptsRemaining: t.attemptsRemaining - 1,
        })),
        setOtpRequestError: (0, s.r)(({ event: t }) => ({ otpError: E(t.error) })),
        clearOtpError: (0, s.r)({ otpError: () => void 0, otpCode: () => "", otpValidationErrors: () => void 0 }),
        startResendTimer: (0, s.r)({ resendTimer: () => 30, resendTimerActive: () => !0 }),
        tickResendTimer: (0, s.r)(({ context: t }) => {
            let e = Math.max(0, t.resendTimer - 1);
            return { resendTimer: e, resendTimerActive: e > 0 };
        }),
        resetContext: (0, s.r)(({ context: t }) => ({
            config: t.config,
            email: "",
            isValid: !1,
            emailError: void 0,
            validationErrors: void 0,
            prefilledEmail: void 0,
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
        hasPrefill: ({ context: t }) => !0 === t.config.prefill,
        hasOtpVerification: ({ context: t }) => t.config.otpVerification,
        hasNoValidationErrors: ({ context: t }) => !t.validationErrors || 0 === Object.keys(t.validationErrors).length,
        hasAttemptsRemaining: ({ context: t }) => t.attemptsRemaining > 1,
        hasCompleteOtp: ({ context: t }) => (0, d.r)(t.otpCode),
        canResend: ({ context: t }) => !t.resendTimerActive,
    },
}).createMachine({
    id: "email",
    initial: "idle",
    context: ({ input: t }) => ({
        config: t.config,
        email: "",
        isValid: !1,
        emailError: void 0,
        validationErrors: void 0,
        prefilledEmail: void 0,
        error: void 0,
        otpCode: "",
        otpError: void 0,
        otpValidationErrors: void 0,
        attemptsRemaining: t.config.maxOtpAttempts ?? 3,
        resendTimer: 0,
        resendTimerActive: !1,
    }),
    states: {
        idle: { on: { LOAD: [{ target: "loadingPrefill", guard: "hasPrefill" }, { target: "inputting" }] } },
        loadingPrefill: {
            invoke: {
                id: "fetchEmail",
                src: "fetchEmail",
                onDone: { target: "inputting", actions: "setPrefilledEmail" },
                onError: { target: "inputting" },
            },
        },
        inputting: {
            on: {
                EMAIL_CHANGED: { actions: "setEmail" },
                VALIDATE_EMAIL: { actions: "validateEmailField" },
                SUBMIT: { target: "validatingSubmit" },
            },
        },
        validatingSubmit: {
            entry: "computeValidationResult",
            always: [
                { guard: "hasNoValidationErrors", target: "submitting", actions: "clearEmailError" },
                { target: "inputting" },
            ],
        },
        submitting: {
            invoke: {
                id: "submitEmail",
                src: "submitEmail",
                input: ({ context: t }) => ({ email: t.email }),
                onDone: [{ target: "sendingInitialOtp", guard: "hasOtpVerification" }, { target: "finished" }],
                onError: { target: "inputting", actions: "setEmailError" },
            },
        },
        sendingInitialOtp: {
            invoke: {
                id: "sendOtp",
                src: "sendOtp",
                onDone: { target: "awaitingOtp", actions: "startResendTimer" },
                onError: { target: "otpError", actions: ["setOtpRequestError", "startResendTimer"] },
            },
        },
        resendingOtp: {
            invoke: {
                id: "sendOtp",
                src: "sendOtp",
                onDone: { target: "awaitingOtp", actions: "startResendTimer" },
                onError: { target: "otpError", actions: ["setOtpRequestError", "startResendTimer"] },
            },
        },
        awaitingOtp: {
            invoke: { id: "resendTimer", src: "resendTimer", input: ({ context: t }) => ({ seconds: t.resendTimer }) },
            on: {
                TICK: { actions: "tickResendTimer" },
                OTP_CHANGED: { actions: "setOtpCode" },
                VALIDATE_OTP: { actions: "validateOtpField" },
                VERIFY_OTP: [{ guard: "hasCompleteOtp", target: "verifyingOtp" }, { actions: "validateOtpField" }],
                RESEND_OTP: { target: "resendingOtp", guard: "canResend" },
                BACK: { target: "inputting" },
            },
        },
        verifyingOtp: {
            invoke: {
                id: "verifyOtp",
                src: "verifyOtp",
                input: ({ context: t }) => ({ code: t.otpCode }),
                onDone: [
                    { target: "finished", guard: ({ event: t }) => !0 === t.output.success },
                    {
                        target: "otpError",
                        guard: "hasAttemptsRemaining",
                        actions: (0, s.r)(({ context: t }) => ({
                            otpError: "otp.errorv2",
                            attemptsRemaining: t.attemptsRemaining - 1,
                        })),
                    },
                    { target: "error", actions: (0, s.r)({ error: () => "Maximum OTP attempts exceeded" }) },
                ],
                onError: [
                    { target: "otpError", guard: "hasAttemptsRemaining", actions: "setOtpError" },
                    { target: "error", actions: "setError" },
                ],
            },
        },
        otpError: {
            invoke: { id: "resendTimer", src: "resendTimer", input: ({ context: t }) => ({ seconds: t.resendTimer }) },
            on: {
                TICK: { actions: "tickResendTimer" },
                OTP_CHANGED: { target: "awaitingOtp", actions: "setOtpCode" },
                VALIDATE_OTP: { actions: "validateOtpField" },
                RESEND_OTP: { target: "resendingOtp", guard: "canResend" },
                BACK: { target: "inputting" },
            },
        },
        finished: { type: "final" },
        error: { on: { RESET: { target: "idle", actions: "resetContext" } } },
    },
});
function v(t) {
    let { value: e } = t;
    if ("string" == typeof e)
        switch (e) {
            case "idle":
            case "inputting":
            case "validatingSubmit":
                return "email.verifyEmail.default";
            case "loadingPrefill":
            case "submitting":
                return "email.verifyEmail.loading";
            case "sendingInitialOtp":
            case "resendingOtp":
                return "email.OTP.loading";
            case "awaitingOtp":
                return "email.OTP.typing";
            case "verifyingOtp":
                return "email.OTP.processing";
            case "otpError":
                return "email.OTP.error";
            case "finished":
                return "email.success";
            case "error":
                return "email.error.somethingWentWrong";
            default:
                return;
        }
}
function f(t) {
    let { context: e } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("loadingPrefill")
          ? { status: "loadingPrefill" }
          : t.matches("inputting")
            ? {
                  status: "inputting",
                  prefilledEmail: e.prefilledEmail,
                  emailError: e.emailError,
                  validationErrors: e.validationErrors,
                  isValid: 0 === Object.keys(e.validationErrors ?? {}).length,
                  otpVerification: e.config.otpVerification,
              }
            : t.matches("submitting")
              ? { status: "submitting" }
              : t.matches("resendingOtp")
                ? { status: "resendingOtp", otpCode: e.otpCode, otpLength: 6 }
                : t.matches("sendingInitialOtp")
                  ? { status: "sendingInitialOtp" }
                  : t.matches("awaitingOtp")
                    ? {
                          status: "awaitingOtp",
                          resendTimer: e.resendTimer,
                          canResend: !e.resendTimerActive,
                          attemptsRemaining: e.attemptsRemaining,
                          otpCode: e.otpCode,
                          otpLength: 6,
                          otpValidationErrors: e.otpValidationErrors,
                          isOtpValid: 0 === Object.keys(e.otpValidationErrors ?? {}).length,
                      }
                    : t.matches("verifyingOtp")
                      ? {
                            status: "verifyingOtp",
                            resendTimer: e.resendTimer,
                            canResend: !e.resendTimerActive,
                            otpCode: e.otpCode,
                            otpLength: 6,
                        }
                      : t.matches("otpError")
                        ? {
                              status: "otpError",
                              otpError: e.otpError ?? "Invalid OTP code",
                              attemptsRemaining: e.attemptsRemaining,
                              resendTimer: e.resendTimer,
                              canResend: !e.resendTimerActive,
                              otpCode: e.otpCode,
                              otpLength: 6,
                              otpValidationErrors: e.otpValidationErrors,
                              isOtpValid: 0 === Object.keys(e.otpValidationErrors ?? {}).length,
                          }
                        : t.matches("finished")
                          ? { status: "finished" }
                          : t.matches("error")
                            ? { status: "error", error: e.error ?? "An error occurred" }
                            : { status: "idle" };
}
function T({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setEmail(e, r) {
            t.send({ type: "EMAIL_CHANGED", email: e, isValid: r });
        },
        validateEmail() {
            t.send({ type: "VALIDATE_EMAIL" });
        },
        submit() {
            e?.("submit"), t.send({ type: "SUBMIT" });
        },
        setOtpCode(e) {
            t.send({ type: "OTP_CHANGED", code: e });
        },
        validateOtp() {
            t.send({ type: "VALIDATE_OTP" });
        },
        submitOtp(r) {
            e?.("submitOtp"), t.send({ type: "OTP_CHANGED", code: r }), t.send({ type: "VERIFY_OTP" });
        },
        resendOtp() {
            e?.("resendOtp"), t.send({ type: "RESEND_OTP" });
        },
        back() {
            e?.("back"), t.send({ type: "BACK" });
        },
        reset() {
            t.send({ type: "RESET" });
        },
    };
}
function h(t) {
    return (0, s.l)({
        actor: (0, s.s)(O, { input: { config: t.config } }).start(),
        mapState: f,
        createApi: T,
        instrumentation: (0, n.s)(n.n.email, { getEventScreenName: v }),
    });
}
