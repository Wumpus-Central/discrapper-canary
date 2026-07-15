n.d(e, { Phone: () => E });
var r = n(529058),
    i = n(287822),
    o = n(748922),
    s = n(898159),
    a = n(898369),
    d = n(188043),
    p = n(787146),
    u = n(138326),
    l = n(509895),
    h = n(906819),
    v = n(296767),
    c = n(938040);
function g(t) {
    return "invalidPhone" === t ? "phone.invalidPhone" : "serverError" === t ? "phone.serverError" : t;
}
var m = ({ config: t, manager: e, onFinish: n, onError: s }) => {
        let { t: v } = (0, r.n)(),
            [m, E] = (0, o.u)(
                () => {
                    if (e) return e;
                    if (!t) throw Error("Phone config is required");
                    return (0, c.Y)({ config: t });
                },
                { manageLifecycle: !e },
            ),
            b = (0, i.h)((t) => v("phone.formatHint", { example: t }), [v]),
            f = (0, i.h)(
                ({ callingCode: t, countryName: e }) =>
                    v("phone.countryCodeAriaLabel", { callingCode: t, countryName: e }),
                [v],
            );
        if (
            ((0, o.c)({ status: m.status, onFinish: n, onError: s, error: "error" === m.status ? m.error : void 0 }),
            "idle" === m.status || "loadingPrefill" === m.status || "loadingStartInfo" === m.status)
        )
            return null;
        if ("inputting" === m.status || "submitting" === m.status || "sendingInitialOtp" === m.status) {
            let t = "submitting" === m.status || "sendingInitialOtp" === m.status,
                e = "inputting" === m.status ? m.countryCode : "US",
                n = "inputting" === m.status ? m.prefilledPhone : void 0,
                r = "inputting" === m.status && m.phoneError ? v(g(m.phoneError)) : void 0,
                o = "inputting" === m.status && m.validationErrors?.phone ? v(g(m.validationErrors.phone)) : void 0,
                s = "inputting" !== m.status || m.isValid,
                u = "inputting" === m.status && (m.optinEnabled ?? !1);
            return (0, i.v)(
                d.t,
                {
                    className: "IncodePhonePage",
                    title: v("phone.verify"),
                    subtitle: v("email.willSendCode"),
                    children: [
                        (0, i.v)("div", {
                            class: "IncodePhoneInputContainer",
                            children: [
                                (0, i.v)(h.t, {
                                    id: "phone",
                                    countryCode: e,
                                    value: n,
                                    error: r ?? o,
                                    showFormatHintInError: !r && !!o,
                                    disabled: t,
                                    onChange: (t, e) => {
                                        E.setPhoneNumber(t, e);
                                    },
                                    onBlur: () => {
                                        E.validatePhone();
                                    },
                                    formatHintBuilder: b,
                                    countryAriaLabelBuilder: f,
                                    "data-testid": "phone-input",
                                    showErrorIcon: !0,
                                }),
                                (0, i.v)(a.r, { size: 16 }),
                                u &&
                                    (0, i.v)(l.t, {
                                        id: "phone-optin",
                                        label: v("phone.optIn"),
                                        size: "s",
                                        onChange: (t) => E.setOptInGranted(t.target.checked),
                                    }),
                            ],
                        }),
                        (0, i.v)(a.r, {}),
                        (0, i.v)(p.t, {
                            onClick: () => E.submit(),
                            disabled: !s,
                            isLoading: t,
                            "data-testid": "phone-submit",
                            children: v("common.continue"),
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
            var O;
            let t = "verifyingOtp" === m.status,
                e = "otpError" === m.status,
                n = "awaitingOtp" === m.status,
                r = "resendingOtp" === m.status,
                o = n || e || t,
                s = e ? v("serverError" === (O = m.otpError) ? "phone.serverError" : O) : void 0,
                a =
                    "otpValidationErrors" in m && m.otpValidationErrors?.otp
                        ? v("otp.incompleteCode", { length: m.otpLength })
                        : void 0,
                p = !("isOtpValid" in m) || m.isOtpValid;
            return (0, i.v)(
                d.t,
                {
                    className: "IncodePhonePage",
                    title: v("otp.enterCodeSMS"),
                    children: (0, i.v)(u.t, {
                        value: m.otpCode,
                        otpLength: m.otpLength,
                        resendTimer: o ? m.resendTimer : 0,
                        canResend: !!o && m.canResend,
                        isLoading: t,
                        disabled: r || t,
                        error: s,
                        validationError: a,
                        isValid: p,
                        onSubmit: (t) => E.submitOtp(t),
                        onChange: (t) => E.setOtpCode(t),
                        onValidate: () => E.validateOtp(),
                        onResend: () => E.resendOtp(),
                        onBack: () => E.back(),
                    }),
                },
                "phone-otp",
            );
        }
        return (0, o.s)(m), null;
    },
    E = ({ config: t, manager: e, onFinish: n, onError: r }) =>
        (0, i.v)(s.t, { children: t || e ? (0, i.v)(m, { config: t, manager: e, onFinish: n, onError: r }) : null });
(0, v.t)(E, "incode-phone");
