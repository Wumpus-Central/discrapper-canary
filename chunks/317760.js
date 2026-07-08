r.d(t, { emailMachine: () => E, k: () => f });
var i = r(257300),
    n = r(209688),
    a = r(588233),
    s = r(171251),
    o = r(64755);
function d(e, t) {
    return e.status === t ? "invalidEmail" : "serverError";
}
async function m(e) {
    let t = await n.t.get(s.t.getEmail, { signal: e });
    if (!t.ok) throw Error(`GET ${s.t.getEmail} failed: ${t.status} ${t.statusText}`);
    return t.data;
}
async function c(e, t) {
    try {
        return (await n.t.post(s.t.email, { email: e.email }, { signal: t })).data;
    } catch (e) {
        throw Error(d(e, 400));
    }
}
async function p(e) {
    try {
        await n.t.get(`${s.t.sendSmsOtp}?communicationchannel=EMAIL`, { signal: e });
    } catch (e) {
        throw Error(d(e));
    }
}
async function l(e, t) {
    try {
        return (await n.t.get(`${s.t.compareOtp}?code=${e}&channel=EMAIL`, { signal: t })).data;
    } catch (e) {
        throw Error(d(e));
    }
}
function g(e) {
    return e instanceof Error ? e.message : String(e);
}
let E = (0, o.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchEmail: (0, o.a)(async ({ signal: e }) => m(e)),
        submitEmail: (0, o.a)(async ({ input: e, signal: t }) => c({ email: e.email }, t)),
        sendOtp: (0, o.a)(async ({ signal: e }) => p(e)),
        verifyOtp: (0, o.a)(async ({ input: e, signal: t }) => l(e.code, t)),
        resendTimer: (0, o.i)(({ input: e, sendBack: t }) => {
            let r = i.t.getInstance(),
                n = e.seconds;
            if (n <= 0) return () => {};
            let a = r.setInterval(() => {
                t({ type: "TICK" }), (n -= 1) <= 0 && r.clearInterval(a);
            }, 1e3);
            return () => r.clearInterval(a);
        }),
    },
    actions: {
        setPrefilledEmail: (0, o.r)(({ event: e }) => {
            let t = e.output.email;
            return { prefilledEmail: t, email: t };
        }),
        setEmail: (0, o.r)(({ event: e }) => ({ email: e.email, isValid: e.isValid, emailError: void 0 })),
        setEmailError: (0, o.r)(({ event: e }) => ({ emailError: g(e.error) })),
        setError: (0, o.r)(({ event: e }) => ({ error: g(e.error) })),
        clearError: (0, o.r)({ error: () => void 0 }),
        clearEmailError: (0, o.r)({ emailError: () => void 0 }),
        setOtpCode: (0, o.r)(({ event: e }) => ({ otpCode: e.code, otpError: void 0 })),
        setOtpError: (0, o.r)(({ context: e, event: t }) => ({
            otpError: g(t.error),
            attemptsRemaining: e.attemptsRemaining - 1,
        })),
        setOtpRequestError: (0, o.r)(({ event: e }) => ({ otpError: g(e.error) })),
        clearOtpError: (0, o.r)({ otpError: () => void 0, otpCode: () => "" }),
        startResendTimer: (0, o.r)({ resendTimer: () => 30, resendTimerActive: () => !0 }),
        tickResendTimer: (0, o.r)(({ context: e }) => {
            let t = Math.max(0, e.resendTimer - 1);
            return { resendTimer: t, resendTimerActive: t > 0 };
        }),
        resetContext: (0, o.r)(({ context: e }) => ({
            config: e.config,
            email: "",
            isValid: !1,
            emailError: void 0,
            prefilledEmail: void 0,
            error: void 0,
            otpCode: "",
            otpError: void 0,
            attemptsRemaining: e.config.maxOtpAttempts ?? 3,
            resendTimer: 0,
            resendTimerActive: !1,
        })),
    },
    guards: {
        hasPrefill: ({ context: e }) => !0 === e.config.prefill,
        hasOtpVerification: ({ context: e }) => e.config.otpVerification,
        isValidEmail: ({ context: e }) => e.isValid,
        hasAttemptsRemaining: ({ context: e }) => e.attemptsRemaining > 1,
        canResend: ({ context: e }) => !e.resendTimerActive,
    },
}).createMachine({
    id: "email",
    initial: "idle",
    context: ({ input: e }) => ({
        config: e.config,
        email: "",
        isValid: !1,
        emailError: void 0,
        prefilledEmail: void 0,
        error: void 0,
        otpCode: "",
        otpError: void 0,
        attemptsRemaining: e.config.maxOtpAttempts ?? 3,
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
                SUBMIT: { target: "submitting", guard: "isValidEmail", actions: "clearEmailError" },
            },
        },
        submitting: {
            invoke: {
                id: "submitEmail",
                src: "submitEmail",
                input: ({ context: e }) => ({ email: e.email }),
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
            invoke: { id: "resendTimer", src: "resendTimer", input: ({ context: e }) => ({ seconds: e.resendTimer }) },
            on: {
                TICK: { actions: "tickResendTimer" },
                OTP_CHANGED: { actions: "setOtpCode" },
                VERIFY_OTP: { target: "verifyingOtp" },
                RESEND_OTP: { target: "resendingOtp", guard: "canResend" },
                BACK: { target: "inputting" },
            },
        },
        verifyingOtp: {
            invoke: {
                id: "verifyOtp",
                src: "verifyOtp",
                input: ({ context: e }) => ({ code: e.otpCode }),
                onDone: [
                    { target: "finished", guard: ({ event: e }) => !0 === e.output.success },
                    {
                        target: "otpError",
                        guard: "hasAttemptsRemaining",
                        actions: (0, o.r)(({ context: e }) => ({
                            otpError: "otp.errorv2",
                            attemptsRemaining: e.attemptsRemaining - 1,
                        })),
                    },
                    { target: "error", actions: (0, o.r)({ error: () => "Maximum OTP attempts exceeded" }) },
                ],
                onError: [
                    { target: "otpError", guard: "hasAttemptsRemaining", actions: "setOtpError" },
                    { target: "error", actions: "setError" },
                ],
            },
        },
        otpError: {
            invoke: { id: "resendTimer", src: "resendTimer", input: ({ context: e }) => ({ seconds: e.resendTimer }) },
            on: {
                TICK: { actions: "tickResendTimer" },
                OTP_CHANGED: { target: "awaitingOtp", actions: "setOtpCode" },
                RESEND_OTP: { target: "resendingOtp", guard: "canResend" },
                BACK: { target: "inputting" },
            },
        },
        finished: { type: "final" },
        error: { on: { RESET: { target: "idle", actions: "resetContext" } } },
    },
});
function u(e) {
    let { context: t } = e;
    return e.matches("idle")
        ? { status: "idle" }
        : e.matches("loadingPrefill")
          ? { status: "loadingPrefill" }
          : e.matches("inputting")
            ? {
                  status: "inputting",
                  prefilledEmail: t.prefilledEmail,
                  emailError: t.emailError,
                  otpVerification: t.config.otpVerification,
              }
            : e.matches("submitting")
              ? { status: "submitting" }
              : e.matches("resendingOtp")
                ? { status: "resendingOtp" }
                : e.matches("sendingInitialOtp")
                  ? { status: "sendingInitialOtp" }
                  : e.matches("awaitingOtp")
                    ? {
                          status: "awaitingOtp",
                          resendTimer: t.resendTimer,
                          canResend: !t.resendTimerActive,
                          attemptsRemaining: t.attemptsRemaining,
                      }
                    : e.matches("verifyingOtp")
                      ? { status: "verifyingOtp", resendTimer: t.resendTimer, canResend: !t.resendTimerActive }
                      : e.matches("otpError")
                        ? {
                              status: "otpError",
                              otpError: t.otpError ?? "Invalid OTP code",
                              attemptsRemaining: t.attemptsRemaining,
                              resendTimer: t.resendTimer,
                              canResend: !t.resendTimerActive,
                          }
                        : e.matches("finished")
                          ? { status: "finished" }
                          : e.matches("error")
                            ? { status: "error", error: t.error ?? "An error occurred" }
                            : { status: "idle" };
}
function O({ actor: e, trackElementClicked: t }) {
    return {
        load() {
            e.send({ type: "LOAD" });
        },
        setEmail(t, r) {
            e.send({ type: "EMAIL_CHANGED", email: t, isValid: r });
        },
        submit() {
            t?.("submit"), e.send({ type: "SUBMIT" });
        },
        setOtpCode(t) {
            e.send({ type: "OTP_CHANGED", code: t });
        },
        submitOtp(r) {
            t?.("submitOtp"), e.send({ type: "OTP_CHANGED", code: r }), e.send({ type: "VERIFY_OTP" });
        },
        resendOtp() {
            t?.("resendOtp"), e.send({ type: "RESEND_OTP" });
        },
        back() {
            t?.("back"), e.send({ type: "BACK" });
        },
        reset() {
            e.send({ type: "RESET" });
        },
    };
}
function f(e) {
    return (0, o.c)({
        actor: (0, o.s)(E, { input: { config: e.config } }).start(),
        mapState: u,
        createApi: O,
        instrumentation: (0, a.o)(a.n.email),
    });
}
