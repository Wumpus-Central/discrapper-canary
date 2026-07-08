r.d(e, { governmentValidationMachine: () => c, G: () => g });
var s = r(257300),
    n = r(209688),
    o = r(588233),
    a = r(171251),
    i = r(64755);
async function p(t) {
    let e = await n.t.post(a.t.governmentValidation, {}, { signal: t });
    if (!e.ok) throw Error(`POST ${a.t.governmentValidation} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function d(t, e) {
    let r = await n.t.post(a.t.governmentValidation, { otpCode: t.code }, { signal: e });
    if (!r.ok) throw Error(`POST ${a.t.governmentValidation} (OTP) failed: ${r.status} ${r.statusText}`);
    return r.data;
}
let c = (0, i.t)({
    types: { context: {}, events: {}, input: {} },
    delays: { AUTO_PROCEED: 3e3 },
    actors: {
        processValidation: (0, i.a)(async ({ signal: t }) => p(t)),
        submitOtp: (0, i.a)(async ({ input: t, signal: e }) => d({ code: t.code }, e)),
        pollingTimer: (0, i.i)(({ sendBack: t }) => {
            let e = s.t.getInstance(),
                r = e.setInterval(() => {
                    t({ type: "POLL" });
                }, 2e3);
            return () => e.clearInterval(r);
        }),
        resendTimer: (0, i.i)(({ sendBack: t }) => {
            let e = s.t.getInstance(),
                r = 30,
                n = e.setInterval(() => {
                    (r -= 1), t({ type: "TICK" }), r <= 0 && e.clearInterval(n);
                }, 1e3);
            return () => e.clearInterval(n);
        }),
    },
    actions: {
        setError: (0, i.r)(({ event: t }) => ({ error: String(t.error) })),
        setErrorFromResponse: (0, i.r)({ error: () => "Government validation failed" }),
        setUnknownError: (0, i.r)({ error: () => "Unknown validation status" }),
        clearError: (0, i.r)({ error: () => void 0 }),
        setOtpCode: (0, i.r)(({ event: t }) => ({ otpCode: t.code, otpError: void 0 })),
        setOtpError: (0, i.r)(({ context: t }) => ({
            otpError: "Invalid OTP code",
            attemptsRemaining: t.attemptsRemaining - 1,
        })),
        clearOtpError: (0, i.r)({ otpError: () => void 0, otpCode: () => "" }),
        startResendTimer: (0, i.r)({ resendTimer: () => 30, resendTimerActive: () => !0 }),
        tickResendTimer: (0, i.r)(({ context: t }) => {
            let e = Math.max(0, t.resendTimer - 1);
            return { resendTimer: e, resendTimerActive: e > 0 };
        }),
        incrementPollCount: (0, i.r)(({ context: t }) => ({ pollCount: t.pollCount + 1 })),
        resetPollCount: (0, i.r)({ pollCount: () => 0 }),
        resetContext: (0, i.r)(({ context: t }) => ({
            config: t.config,
            error: void 0,
            otpCode: "",
            otpError: void 0,
            attemptsRemaining: t.config.maxOtpAttempts ?? 3,
            resendTimer: 0,
            resendTimerActive: !1,
            pollCount: 0,
        })),
    },
    guards: {
        isProcessing: (t, e) => -1 === e.response.statusCode,
        isSuccess: (t, e) => 0 === e.response.statusCode && e.response.validationStatus?.status !== "UNKNOWN",
        isError: (t, e) => e.response.statusCode > 0,
        isOtpRequested: (t, e) => e.response.otpResponse?.authBridge?.otpCodeRequested === !0,
        isUnknown: (t, e) => e.response.validationStatus?.status === "UNKNOWN",
        hasAttemptsRemaining: ({ context: t }) => t.attemptsRemaining > 0,
        canResend: ({ context: t }) => !t.resendTimerActive,
        hasReachedMaxPolls: ({ context: t }) => t.pollCount >= 60,
    },
}).createMachine({
    id: "governmentValidation",
    initial: "idle",
    context: ({ input: t }) => ({
        config: t.config,
        error: void 0,
        otpCode: "",
        otpError: void 0,
        attemptsRemaining: t.config.maxOtpAttempts ?? 3,
        resendTimer: 0,
        resendTimerActive: !1,
        pollCount: 0,
    }),
    states: {
        idle: { on: { LOAD: { target: "loading" } } },
        loading: {
            invoke: {
                id: "processValidation",
                src: "processValidation",
                onDone: [
                    {
                        target: "awaitingOtp",
                        guard: { type: "isOtpRequested", params: ({ event: t }) => ({ response: t.output }) },
                    },
                    {
                        target: "displaySuccess",
                        guard: { type: "isSuccess", params: ({ event: t }) => ({ response: t.output }) },
                    },
                    {
                        target: "polling",
                        guard: { type: "isProcessing", params: ({ event: t }) => ({ response: t.output }) },
                    },
                    {
                        target: "displayUnknown",
                        guard: { type: "isUnknown", params: ({ event: t }) => ({ response: t.output }) },
                        actions: "setUnknownError",
                    },
                    { target: "displayError", actions: "setErrorFromResponse" },
                ],
                onError: { target: "displayError", actions: "setError" },
            },
        },
        polling: {
            invoke: { id: "pollingTimer", src: "pollingTimer" },
            on: {
                POLL: [
                    {
                        target: "displayError",
                        guard: "hasReachedMaxPolls",
                        actions: (0, i.r)({ error: () => "Validation timed out" }),
                    },
                    { target: "pollingRequest", actions: "incrementPollCount" },
                ],
            },
        },
        pollingRequest: {
            invoke: {
                id: "pollValidation",
                src: "processValidation",
                onDone: [
                    {
                        target: "displaySuccess",
                        guard: { type: "isSuccess", params: ({ event: t }) => ({ response: t.output }) },
                    },
                    {
                        target: "polling",
                        guard: { type: "isProcessing", params: ({ event: t }) => ({ response: t.output }) },
                    },
                    {
                        target: "displayUnknown",
                        guard: { type: "isUnknown", params: ({ event: t }) => ({ response: t.output }) },
                        actions: "setUnknownError",
                    },
                    { target: "displayError", actions: "setErrorFromResponse" },
                ],
                onError: { target: "displayError", actions: "setError" },
            },
        },
        awaitingOtp: {
            entry: "startResendTimer",
            invoke: { id: "resendTimer", src: "resendTimer" },
            on: {
                TICK: { actions: "tickResendTimer" },
                OTP_CHANGED: { actions: "setOtpCode" },
                SUBMIT_OTP: { target: "verifyingOtp" },
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
                    { target: "displayError", actions: (0, i.r)({ error: () => "Maximum OTP attempts exceeded" }) },
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
    let { context: e } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("loading")
          ? { status: "loading" }
          : t.matches("polling") || t.matches("pollingRequest")
            ? { status: "processing" }
            : t.matches("awaitingOtp")
              ? {
                    status: "awaitingOtp",
                    resendTimer: e.resendTimer,
                    canResend: !e.resendTimerActive,
                    attemptsRemaining: e.attemptsRemaining,
                    otpError: e.otpError,
                }
              : t.matches("verifyingOtp")
                ? { status: "verifyingOtp" }
                : t.matches("displaySuccess")
                  ? { status: "finished" }
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
function u({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setOtpCode(e) {
            t.send({ type: "OTP_CHANGED", code: e });
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
function g(t) {
    return (0, i.c)({
        actor: (0, i.s)(c, { input: { config: t.config } }).start(),
        mapState: l,
        createApi: u,
        instrumentation: (0, o.o)("GOVERNMENT_VALIDATION"),
    });
}
