r.d(e, { Y: () => T, phoneMachine: () => l });
var n = r(257300),
    o = r(209688),
    i = r(588233),
    a = r(171251),
    s = r(64755);
function d(t, e) {
    return t.status === e ? "invalidPhone" : "serverError";
}
async function p(t) {
    let e = await o.t.get(a.t.getPhone, { signal: t });
    if (!e.ok) throw Error(`GET ${a.t.getPhone} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function c(t) {
    let e = await o.t.get(a.t.startInfo, { signal: t });
    if (!e.ok) throw Error(`GET ${a.t.startInfo} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function g(t, e) {
    try {
        return (await o.t.post(a.t.phone, { phone: t.phone, optInGranted: t.optInGranted }, { signal: e })).data;
    } catch (t) {
        throw Error(d(t, 400));
    }
}
async function h(t, e) {
    try {
        return (await o.t.post(a.t.phoneInstant, { phone: t.phone, optInGranted: t.optInGranted }, { signal: e })).data;
    } catch (t) {
        throw Error(d(t, 400));
    }
}
async function u(t) {
    try {
        await o.t.get(`${a.t.sendSmsOtp}?communicationchannel=SMS`, { signal: t });
    } catch (t) {
        throw Error(d(t));
    }
}
async function f(t, e) {
    try {
        return (await o.t.get(`${a.t.compareOtp}?code=${t}&channel=SMS`, { signal: e })).data;
    } catch (t) {
        throw Error(d(t));
    }
}
function m(t) {
    return t instanceof Error ? t.message : String(t);
}
let l = (0, s.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchPhone: (0, s.a)(async ({ signal: t }) => p(t)),
        fetchStartInfo: (0, s.a)(async ({ signal: t }) => c(t)),
        submitPhone: (0, s.a)(async ({ input: t, signal: e }) =>
            t.isInstantVerify
                ? h({ phone: t.phone, optInGranted: t.optInGranted }, e)
                : g({ phone: t.phone, optInGranted: t.optInGranted }, e),
        ),
        sendOtp: (0, s.a)(async ({ signal: t }) => u(t)),
        verifyOtp: (0, s.a)(async ({ input: t, signal: e }) => f(t.code, e)),
        resendTimer: (0, s.i)(({ input: t, sendBack: e }) => {
            let r = n.t.getInstance(),
                o = t.seconds;
            if (o <= 0) return () => {};
            let i = r.setInterval(() => {
                e({ type: "TICK" }), (o -= 1) <= 0 && r.clearInterval(i);
            }, 1e3);
            return () => r.clearInterval(i);
        }),
    },
    actions: {
        setStartInfo: (0, s.r)(({ event: t }) => {
            let e = t.output;
            return { startInfo: e, countryCode: e.ipIsoCode, phonePrefix: e.phonePrefix };
        }),
        setPrefilledPhone: (0, s.r)(({ event: t }) => {
            let e = t.output.phone;
            return { prefilledPhone: e, phone: e };
        }),
        setPhone: (0, s.r)(({ event: t }) => ({ phone: t.phone, isValid: t.isValid, phoneError: void 0 })),
        setPhoneError: (0, s.r)(({ event: t }) => ({ phoneError: m(t.error) })),
        setOptInGranted: (0, s.r)(({ event: t }) => ({ optInGranted: t.granted })),
        setError: (0, s.r)(({ event: t }) => ({ error: m(t.error) })),
        clearError: (0, s.r)({ error: () => void 0 }),
        clearPhoneError: (0, s.r)({ phoneError: () => void 0 }),
        setOtpCode: (0, s.r)(({ event: t }) => ({ otpCode: t.code, otpError: void 0 })),
        setOtpError: (0, s.r)(({ context: t, event: e }) => ({
            otpError: m(e.error),
            attemptsRemaining: t.attemptsRemaining - 1,
        })),
        setOtpRequestError: (0, s.r)(({ event: t }) => ({ otpError: m(t.error) })),
        clearOtpError: (0, s.r)({ otpError: () => void 0, otpCode: () => "" }),
        startResendTimer: (0, s.r)({ resendTimer: () => 30, resendTimerActive: () => !0 }),
        tickResendTimer: (0, s.r)(({ context: t }) => {
            let e = Math.max(0, t.resendTimer - 1);
            return { resendTimer: e, resendTimerActive: e > 0 };
        }),
        resetContext: (0, s.r)(({ context: t }) => ({
            config: t.config,
            phone: "",
            isValid: !1,
            phoneError: void 0,
            countryCode: "",
            phonePrefix: "",
            prefilledPhone: void 0,
            optInGranted: !1,
            startInfo: void 0,
            error: void 0,
            otpCode: "",
            otpError: void 0,
            attemptsRemaining: t.config.maxOtpAttempts ?? 3,
            resendTimer: 0,
            resendTimerActive: !1,
        })),
    },
    guards: {
        hasPrefill: ({ context: t }) => t.config.prefill,
        hasOtpVerification: ({ context: t }) => t.config.otpVerification,
        isValidPhone: ({ context: t }) => t.isValid,
        hasAttemptsRemaining: ({ context: t }) => t.attemptsRemaining > 1,
        canResend: ({ context: t }) => !t.resendTimerActive,
    },
}).createMachine({
    id: "phone",
    initial: "idle",
    context: ({ input: t }) => ({
        config: t.config,
        phone: "",
        isValid: !1,
        phoneError: void 0,
        countryCode: "",
        phonePrefix: "",
        prefilledPhone: void 0,
        optInGranted: !1,
        startInfo: void 0,
        error: void 0,
        otpCode: "",
        otpError: void 0,
        attemptsRemaining: t.config.maxOtpAttempts ?? 3,
        resendTimer: 0,
        resendTimerActive: !1,
    }),
    states: {
        idle: { on: { LOAD: [{ target: "loadingPrefill", guard: "hasPrefill" }, { target: "loadingStartInfo" }] } },
        loadingPrefill: {
            invoke: {
                id: "fetchPhone",
                src: "fetchPhone",
                onDone: { target: "loadingStartInfo", actions: "setPrefilledPhone" },
                onError: { target: "loadingStartInfo" },
            },
        },
        loadingStartInfo: {
            invoke: {
                id: "fetchStartInfo",
                src: "fetchStartInfo",
                onDone: { target: "inputting", actions: "setStartInfo" },
                onError: { target: "inputting" },
            },
        },
        inputting: {
            on: {
                PHONE_CHANGED: { actions: "setPhone" },
                OPT_IN_CHANGED: { actions: "setOptInGranted" },
                SUBMIT: { target: "submitting", guard: "isValidPhone", actions: "clearPhoneError" },
            },
        },
        submitting: {
            invoke: {
                id: "submitPhone",
                src: "submitPhone",
                input: ({ context: t }) => ({
                    phone: t.phone,
                    optInGranted: t.config.optinEnabled ? t.optInGranted : void 0,
                    isInstantVerify: t.config.isInstantVerify ?? !1,
                }),
                onDone: [{ target: "sendingInitialOtp", guard: "hasOtpVerification" }, { target: "finished" }],
                onError: { target: "inputting", actions: "setPhoneError" },
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
                VERIFY_OTP: { target: "verifyingOtp" },
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
                RESEND_OTP: { target: "resendingOtp", guard: "canResend" },
                BACK: { target: "inputting" },
            },
        },
        finished: { type: "final" },
        error: { on: { RESET: { target: "idle", actions: "resetContext" } } },
    },
});
function E(t) {
    let { context: e } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("loadingPrefill")
          ? { status: "loadingPrefill" }
          : t.matches("loadingStartInfo")
            ? {
                  status: "loadingStartInfo",
                  prefilledPhone: e.prefilledPhone,
                  otpVerification: e.config.otpVerification,
                  optinEnabled: e.config.optinEnabled ?? !1,
              }
            : t.matches("inputting")
              ? {
                    status: "inputting",
                    countryCode: e.countryCode,
                    phonePrefix: e.phonePrefix,
                    prefilledPhone: e.prefilledPhone,
                    phoneError: e.phoneError,
                    otpVerification: e.config.otpVerification,
                    optinEnabled: e.config.optinEnabled ?? !1,
                }
              : t.matches("submitting")
                ? { status: "submitting" }
                : t.matches("resendingOtp")
                  ? { status: "resendingOtp" }
                  : t.matches("sendingInitialOtp")
                    ? { status: "sendingInitialOtp" }
                    : t.matches("awaitingOtp")
                      ? {
                            status: "awaitingOtp",
                            resendTimer: e.resendTimer,
                            canResend: !e.resendTimerActive,
                            attemptsRemaining: e.attemptsRemaining,
                        }
                      : t.matches("verifyingOtp")
                        ? { status: "verifyingOtp", resendTimer: e.resendTimer, canResend: !e.resendTimerActive }
                        : t.matches("otpError")
                          ? {
                                status: "otpError",
                                otpError: e.otpError ?? "otp.errorv2",
                                attemptsRemaining: e.attemptsRemaining,
                                resendTimer: e.resendTimer,
                                canResend: !e.resendTimerActive,
                            }
                          : t.matches("finished")
                            ? { status: "finished" }
                            : t.matches("error")
                              ? { status: "error", error: e.error ?? "An error occurred" }
                              : { status: "idle" };
}
function O({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setPhoneNumber(e, r) {
            t.send({ type: "PHONE_CHANGED", phone: e, isValid: r });
        },
        setOptInGranted(e) {
            t.send({ type: "OPT_IN_CHANGED", granted: e });
        },
        submit() {
            e?.("submit"), t.send({ type: "SUBMIT" });
        },
        setOtpCode(e) {
            t.send({ type: "OTP_CHANGED", code: e });
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
function T(t) {
    return (0, s.c)({
        actor: (0, s.s)(l, { input: { config: t.config } }).start(),
        mapState: E,
        createApi: O,
        instrumentation: (0, i.o)(i.n.phone),
    });
}
