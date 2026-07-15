d.d(t, { t: () => Z });
var i = d(529058),
    e = d(287822),
    c = d(898369),
    a = d(787146),
    s = d(96798);
d(425364);
var n = (l, t) =>
        l
            .replace(/[^a-zA-Z0-9]/g, "")
            .toUpperCase()
            .slice(0, t),
    Z = ({
        value: l,
        otpLength: t,
        resendTimer: d,
        canResend: Z,
        error: b,
        validationError: m,
        isValid: o = !0,
        onSubmit: u,
        onChange: h,
        onValidate: W,
        onResend: G,
        onBack: p,
        backLinkText: N = "otp.changePhoneNumber",
        disabled: M = !1,
        isLoading: X = !1,
    }) => {
        let { t: r } = (0, i.n)(),
            y = (0, e.l)(null),
            Y = (0, e.l)(l.length),
            T = (0, e.l)(null),
            V = (0, e.l)(null),
            L = (0, e.l)(Z),
            I = (0, e.l)(!1),
            z = (0, e.l)(),
            w = (0, e.h)((l) => {
                let t = V.current;
                t &&
                    (clearTimeout(z.current),
                    (t.textContent = ""),
                    (z.current = setTimeout(() => {
                        t.textContent = l;
                    }, 50)));
            }, []);
        (0, e._)(() => {
            let l = !L.current;
            return (L.current = Z), l && Z && w(r("otp.resendCodeAvailable")), () => clearTimeout(z.current);
        }, [Z, w, r]),
            (0, e._)(() => {
                b &&
                    ((T.current = null),
                    setTimeout(() => {
                        y.current?.focus();
                    }, 0));
            }, [b]);
        let R = (0, e.h)(
            (l) => {
                let d = n(l, t);
                d.length !== t || X || (T.current !== d && ((T.current = d), u(d)));
            },
            [X, u, t],
        );
        (0, e._)(() => {
            let d = l.length === t && Y.current < t;
            (Y.current = l.length), d && R(l);
        }, [l, t, R]);
        let S = b ?? m;
        return (
            (0, e._)(() => {
                if (Z || d <= 0) {
                    I.current = !1;
                    return;
                }
                if (!I.current) {
                    (I.current = !0), w(r("otp.timerStarted", { time: String(d) }));
                    return;
                }
                10 === d ? w(r("otp.timerTenSeconds")) : 5 === d && w(r("otp.timerFiveSeconds"));
            }, [d, Z, w, r]),
            (0, e.v)("div", {
                class: "IncodeOtpInput IncodeOtpInputComposed",
                children: [
                    (0, e.v)("div", { ref: V, class: "IncodeSrOnly", "aria-live": "polite", "aria-atomic": "true" }),
                    (0, e.v)(s.t, {
                        id: "otp-code",
                        type: "text",
                        inputMode: "text",
                        ref: y,
                        maxLength: t,
                        value: l,
                        error: S,
                        onInput: (l) => {
                            h(n(l.target.value, t));
                        },
                        onBlur: W,
                        onPaste: (l) => {
                            l.preventDefault();
                            let d = n(l.clipboardData?.getData("text") || "", t);
                            d && h(d);
                        },
                        disabled: M || X,
                        required: !0,
                        autocomplete: "one-time-code",
                        "data-testid": "otp-input-0",
                        "aria-label": r("otp.verificationCode"),
                        class: "IncodeOtpSingleInput",
                        showErrorIcon: !0,
                    }),
                    (0, e.v)(c.r, {}),
                    (0, e.v)(a.t, {
                        onClick: () => {
                            if (l.length < t) {
                                W?.(), y.current?.focus();
                                return;
                            }
                            R(l);
                        },
                        disabled: M || X || !o,
                        isLoading: X,
                        "data-testid": "otp-submit",
                        children: r("common.continue"),
                    }),
                    (0, e.v)(c.r, { size: 12 }),
                    (() => {
                        if (!Z && d > 0)
                            return (0, e.v)("div", {
                                class: "IncodeOtpInputActions",
                                "data-testid": "otp-timer",
                                children: (0, e.v)(a.t, {
                                    variant: "link",
                                    disabled: !0,
                                    children: r("otp.resendCountdown", {
                                        time: `${Math.floor(d / 60)}:${(d % 60).toString().padStart(2, "0")}`,
                                    }),
                                }),
                            });
                        return (0, e.v)("div", {
                            class: "IncodeOtpInputActions",
                            children: (0, e.v)("p", {
                                class: `IncodeOtpInputResendText ${M ? "IncodeOtpInputResendTextDisabled" : ""}`,
                                "data-testid": "otp-resend-section",
                                children: [
                                    r("otp.didYouNotGetIt"),
                                    (0, e.v)(a.t, {
                                        variant: "link",
                                        size: "inline",
                                        onClick: () => {
                                            (T.current = null), h(""), G();
                                        },
                                        disabled: M || !Z,
                                        "data-testid": "otp-resend",
                                        children: r("otp.resendCode"),
                                    }),
                                    ` ${r("otp.or")} `,
                                    (0, e.v)(a.t, {
                                        variant: "link",
                                        size: "inline",
                                        onClick: () => {
                                            (T.current = null), h(""), p();
                                        },
                                        disabled: M,
                                        "data-testid": "otp-back",
                                        children: r(N),
                                    }),
                                ],
                            }),
                        });
                    })(),
                ],
            })
        );
    };
