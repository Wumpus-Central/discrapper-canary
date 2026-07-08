e.d(n, { Phone: () => f });
var i = e(31144),
    r = e(248702),
    o = e(899656),
    s = e(458741),
    a = e(517e3),
    d = e(727571),
    u = e(242003),
    p = e(227325),
    l = e(967325),
    h = e(368697),
    c = e(868282),
    g = e(158406),
    v = ({ config: t, manager: n, onFinish: e, onError: s }) => {
        var c, v;
        let { t: f } = (0, i.n)(),
            [m, b] = (0, o.o)(
                () => {
                    if (n) return n;
                    if (!t) throw Error("Phone config is required");
                    return (0, g.Y)({ config: t });
                },
                { manageLifecycle: !n },
            ),
            [E, P] = (0, r.p)(!1),
            [O, C] = (0, r.p)(!1),
            [I, k] = (0, r.p)(!1);
        if ("idle" === m.status || "loadingPrefill" === m.status || "loadingStartInfo" === m.status) return null;
        if ("inputting" === m.status || "submitting" === m.status || "sendingInitialOtp" === m.status) {
            let t = "submitting" === m.status || "sendingInitialOtp" === m.status,
                n = "inputting" === m.status ? m.countryCode : "US",
                e = "inputting" === m.status ? m.prefilledPhone : void 0,
                i =
                    "inputting" === m.status && m.phoneError
                        ? f(
                              "invalidPhone" === (c = m.phoneError)
                                  ? "phone.invalidPhone"
                                  : "serverError" === c
                                    ? "phone.serverError"
                                    : c,
                          )
                        : void 0,
                o = "inputting" === m.status && O && I && !E ? f("phone.invalidPhone") : void 0,
                s = "inputting" === m.status && (m.optinEnabled ?? !1);
            return (0, r.v)(
                d.t,
                {
                    className: "IncodePhonePage",
                    title: f("phone.verify"),
                    subtitle: f("email.willSendCode"),
                    children: [
                        (0, r.v)("div", {
                            class: "IncodePhoneInputContainer",
                            children: [
                                (0, r.v)(h.t, {
                                    id: "phone",
                                    countryCode: n,
                                    value: e,
                                    error: i ?? o,
                                    disabled: t,
                                    onChange: (t, n) => {
                                        b.setPhoneNumber(t, n), C(!0), k(!1), P(n);
                                    },
                                    onBlur: () => {
                                        k(!0);
                                    },
                                    "data-testid": "phone-input",
                                    showErrorIcon: !0,
                                }),
                                (0, r.v)(a.r, { size: 16 }),
                                s &&
                                    (0, r.v)(l.t, {
                                        id: "phone-optin",
                                        label: f("phone.optIn"),
                                        size: "s",
                                        onChange: (t) => b.setOptInGranted(t.target.checked),
                                    }),
                            ],
                        }),
                        (0, r.v)(a.r, {}),
                        (0, r.v)(u.t, {
                            onClick: () => b.submit(),
                            disabled: !E || void 0 !== i,
                            isLoading: t,
                            "data-testid": "phone-submit",
                            children: f("common.continue"),
                        }),
                    ],
                },
                "phone-input",
            );
        }
        if (
            "awaitingOtp" === m.status ||
            "verifyingOtp" === m.status ||
            "otpError" === m.status ||
            "resendingOtp" === m.status
        ) {
            let t = "verifyingOtp" === m.status,
                n = "otpError" === m.status,
                e = "awaitingOtp" === m.status,
                i = "resendingOtp" === m.status,
                o = e || n || t,
                s = n ? f("serverError" === (v = m.otpError) ? "phone.serverError" : v) : void 0;
            return (0, r.v)(
                d.t,
                {
                    className: "IncodePhonePage",
                    title: f("otp.enterCodeSMS"),
                    children: (0, r.v)(p.t, {
                        resendTimer: o ? m.resendTimer : 0,
                        canResend: !!o && m.canResend,
                        isLoading: t,
                        disabled: i || t,
                        error: s,
                        onSubmit: (t) => b.submitOtp(t),
                        onResend: () => b.resendOtp(),
                        onBack: () => b.back(),
                    }),
                },
                "phone-otp",
            );
        }
        return "finished" === m.status ? e?.() : "error" === m.status && s?.(m.error), null;
    },
    f = ({ config: t, manager: n, onFinish: e, onError: i }) =>
        (0, r.v)(s.t, { children: t || n ? (0, r.v)(v, { config: t, manager: n, onFinish: e, onError: i }) : null });
(0, c.t)(f, "incode-phone");
