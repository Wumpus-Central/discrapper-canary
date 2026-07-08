e.d(t, { Email: () => v });
var r = e(31144),
    a = e(248702),
    s = e(899656),
    n = e(458741),
    l = e(517e3),
    o = e(727571),
    d = e(242003),
    u = e(227325),
    m = e(868282),
    p = e(221491),
    c = e(317760),
    g = ({ config: i, manager: t, onFinish: e, onError: n }) => {
        var m, g;
        let { t: v } = (0, r.n)(),
            [E, f] = (0, s.o)(
                () => {
                    if (t) return t;
                    if (!i) throw Error("Email config is required");
                    return (0, c.k)({ config: i });
                },
                { manageLifecycle: !t },
            ),
            [h, b] = (0, a.p)(""),
            [O, k] = (0, a.p)(!1),
            [I, w] = (0, a.p)(!1),
            [C, P] = (0, a.p)(!1),
            y = "inputting" === E.status ? (E.prefilledEmail ?? "") : "";
        if (
            ((0, a._)(() => {
                if (y) {
                    let i = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(y.trim());
                    b(y.trim()), k(i), f.setEmail(y.trim(), i);
                }
            }, [y, f]),
            "idle" === E.status ||
                "loadingPrefill" === E.status ||
                "inputting" === E.status ||
                "submitting" === E.status ||
                "sendingInitialOtp" === E.status)
        ) {
            let i =
                    "idle" === E.status ||
                    "loadingPrefill" === E.status ||
                    "submitting" === E.status ||
                    "sendingInitialOtp" === E.status,
                t =
                    "inputting" === E.status && E.emailError
                        ? v(
                              "invalidEmail" === (m = E.emailError)
                                  ? "verification.errors.emailInvalid"
                                  : "serverError" === m
                                    ? "email.serverError"
                                    : m,
                          )
                        : void 0,
                e = "inputting" === E.status && I && C && !O ? v("verification.errors.emailInvalid") : void 0;
            return (0, a.v)(
                o.t,
                {
                    className: "IncodeEmailPage",
                    title: v("email.verify"),
                    subtitle: v("email.willSendCode"),
                    children: [
                        (0, a.v)(p.t, {
                            value: h,
                            emailError: t ?? e,
                            disabled: i,
                            required: !0,
                            onEmailChange: (i, t) => {
                                f.setEmail(i, t), b(i), w(!0), P(!1), k(t);
                            },
                            onBlur: () => {
                                P(!0);
                            },
                        }),
                        (0, a.v)(l.r, {}),
                        (0, a.v)(d.t, {
                            onClick: () => f.submit(),
                            disabled: !O || void 0 !== t,
                            isLoading: i,
                            "data-testid": "email-submit",
                            children: v("common.continue"),
                        }),
                    ],
                },
                "email-input",
            );
        }
        if (
            "awaitingOtp" === E.status ||
            "verifyingOtp" === E.status ||
            "otpError" === E.status ||
            "resendingOtp" === E.status
        ) {
            let i = "verifyingOtp" === E.status,
                t = "otpError" === E.status,
                e = "awaitingOtp" === E.status,
                r = "resendingOtp" === E.status,
                s = e || t || i;
            return (0, a.v)(
                o.t,
                {
                    className: "IncodeEmailPage IncodeEmailOtpPage",
                    title: v("otp.enterCodeEmail"),
                    children: (0, a.v)(u.t, {
                        resendTimer: s ? E.resendTimer : 0,
                        canResend: !!s && E.canResend,
                        error: t ? v("serverError" === (g = E.otpError) ? "email.serverError" : g) : void 0,
                        isLoading: i,
                        disabled: r || i,
                        onSubmit: (i) => f.submitOtp(i),
                        onResend: () => f.resendOtp(),
                        onBack: () => f.back(),
                        backLinkText: "otp.changeEmail",
                    }),
                },
                "email-otp",
            );
        }
        return "finished" === E.status ? e?.() : "error" === E.status && n?.(E.error), null;
    },
    v = ({ config: i, manager: t, onFinish: e, onError: r }) =>
        (0, a.v)(n.t, { children: i || t ? (0, a.v)(g, { config: i, manager: t, onFinish: e, onError: r }) : null });
(0, m.t)(v, "incode-email");
