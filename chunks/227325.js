n.d(e, { t: () => a });
var r = n(31144),
    o = n(248702),
    i = n(517e3),
    d = n(242003),
    c = n(489771);
n(55808);
var l = (t) =>
        t
            .replace(/[^a-zA-Z0-9]/g, "")
            .toUpperCase()
            .slice(0, 6),
    a = ({
        resendTimer: t,
        canResend: e,
        error: n,
        onSubmit: a,
        onResend: u,
        onBack: s,
        backLinkText: p = "otp.changePhoneNumber",
        disabled: h = !1,
        isLoading: v = !1,
    }) => {
        let { t: I } = (0, r.n)(),
            [m, b] = (0, o.p)(""),
            g = (0, o.l)(null),
            k = (0, o.l)(0),
            C = (0, o.l)(null),
            O = (0, o.l)(null),
            T = (0, o.l)(e),
            f = (0, o.l)(!1),
            x = (0, o.l)(),
            S = (0, o.h)((t) => {
                let e = O.current;
                e &&
                    (clearTimeout(x.current),
                    (e.textContent = ""),
                    (x.current = setTimeout(() => {
                        e.textContent = t;
                    }, 50)));
            }, []);
        (0, o._)(() => {
            let t = !T.current;
            return (T.current = e), t && e && S(I("otp.resendCodeAvailable")), () => clearTimeout(x.current);
        }, [e, S, I]),
            (0, o._)(() => {
                n &&
                    ((C.current = null),
                    setTimeout(() => {
                        g.current?.focus();
                    }, 0));
            }, [n]);
        let L = (0, o.h)(
            (t) => {
                let e = l(t);
                6 !== e.length || v || (C.current !== e && ((C.current = e), a(e)));
            },
            [v, a],
        );
        return (
            (0, o._)(() => {
                if (!m) return;
                let t = 6 === m.length && k.current < 6;
                (k.current = m.length), t && L(m);
            }, [m, L]),
            (0, o._)(() => {
                if (e || t <= 0) {
                    f.current = !1;
                    return;
                }
                if (!f.current) {
                    (f.current = !0), S(I("otp.timerStarted", { time: String(t) }));
                    return;
                }
                10 === t ? S(I("otp.timerTenSeconds")) : 5 === t && S(I("otp.timerFiveSeconds"));
            }, [t, e, S, I]),
            (0, o.v)("div", {
                class: "IncodeOtpInput IncodeOtpInputComposed",
                children: [
                    (0, o.v)("div", { ref: O, class: "IncodeSrOnly", "aria-live": "polite", "aria-atomic": "true" }),
                    (0, o.v)(c.t, {
                        id: "otp-code",
                        type: "text",
                        inputMode: "text",
                        ref: g,
                        maxLength: 6,
                        value: m,
                        error: n,
                        onInput: (t) => {
                            b(l(t.target.value));
                        },
                        onPaste: (t) => {
                            t.preventDefault();
                            let e = l(t.clipboardData?.getData("text") || "");
                            e && (b(e), 6 === e.length && L(e));
                        },
                        disabled: h || v,
                        required: !0,
                        autocomplete: "one-time-code",
                        "data-testid": "otp-input-0",
                        "aria-label": I("otp.verificationCode"),
                        class: "IncodeOtpSingleInput",
                        showErrorIcon: !0,
                    }),
                    (0, o.v)(i.r, {}),
                    (0, o.v)(d.t, {
                        onClick: () => {
                            L(m);
                        },
                        disabled: m.length < 6 || v,
                        isLoading: v,
                        "data-testid": "otp-submit",
                        children: I("common.continue"),
                    }),
                    (0, o.v)(i.r, { size: 12 }),
                    (() => {
                        if (!e && t > 0)
                            return (0, o.v)("div", {
                                class: "IncodeOtpInputActions",
                                children: (0, o.v)("p", {
                                    class: "IncodeOtpInputTimerText",
                                    "data-testid": "otp-timer",
                                    children: I("otp.resendCountdown", {
                                        time: `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`,
                                    }),
                                }),
                            });
                        return (0, o.v)("div", {
                            class: "IncodeOtpInputActions",
                            children: (0, o.v)("p", {
                                class: `IncodeOtpInputResendText ${h ? "IncodeOtpInputResendTextDisabled" : ""}`,
                                "data-testid": "otp-resend-section",
                                children: [
                                    I("otp.didYouNotGetIt"),
                                    (0, o.v)("button", {
                                        type: "button",
                                        class: "IncodeOtpInputLink",
                                        onClick: () => {
                                            (C.current = null), b(""), u();
                                        },
                                        disabled: h || !e,
                                        "data-testid": "otp-resend",
                                        children: I("otp.resendCode"),
                                    }),
                                    ` ${I("otp.or")} `,
                                    (0, o.v)("button", {
                                        type: "button",
                                        class: "IncodeOtpInputLink",
                                        onClick: () => {
                                            (C.current = null), b(""), s();
                                        },
                                        disabled: h,
                                        "data-testid": "otp-back",
                                        children: I(p),
                                    }),
                                ],
                            }),
                        });
                    })(),
                ],
            })
        );
    };
