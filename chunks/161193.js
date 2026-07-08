n.d(t, { GovernmentValidation: () => V });
var e = n(31144),
    a = n(248702),
    o = n(899656),
    s = n(458741),
    r = n(517e3),
    c = n(727571),
    d = n(443781),
    l = n(288552),
    v = n(886567),
    u = n(227325),
    h = n(868282),
    p = n(282511),
    g = n(457230),
    f = ({ variant: i, icon: t, title: n, subtitle: e }) =>
        (0, a.v)("div", {
            class: `IncodeGovtValidation IncodeGovtValidation--${i}`,
            children: (0, a.v)(c.t, {
                className: "IncodeGovtValidationPage",
                children: (0, a.v)("div", {
                    class: "IncodeGovtValidationStatus",
                    children: [
                        (0, a.v)(t, { size: 64 }),
                        (0, a.v)(p.t, { children: n }),
                        e ? (0, a.v)("p", { class: "IncodeGovtValidationText", children: e }) : null,
                    ],
                }),
            }),
        }),
    k = ({ title: i, subtitle: t }) =>
        (0, a.v)("div", {
            class: "IncodeGovtValidation IncodeGovtValidation--loading",
            children: (0, a.v)(c.t, {
                className: "IncodeGovtValidationPage",
                children: (0, a.v)(d.t, { title: i, subtitle: t, fullScreen: !1 }),
            }),
        }),
    G = ({ config: i, onFinish: t }) => {
        let { t: n } = (0, e.n)(),
            [s, d] = (0, o.o)(() => {
                if (!i) throw Error("GovernmentValidation config is required");
                return (0, g.G)({ config: i });
            });
        if (i.backgroundExecution && "finished" === s.status) return t?.(), null;
        if ("idle" === s.status || "loading" === s.status)
            return (0, a.v)(k, { title: `${n("ineCheck.verifying")} ${n("ineCheck.identity")}` });
        if ("finished" === s.status)
            return (0, a.v)(f, { variant: "success", icon: v.t, title: n("ineCheck.verified") });
        if ("processing" === s.status)
            return (0, a.v)(f, { variant: "success", icon: v.t, title: n("ineCheck.processing") });
        if ("awaitingOtp" === s.status || "verifyingOtp" === s.status) {
            let i = "verifyingOtp" === s.status,
                t = "awaitingOtp" === s.status ? s.otpError : void 0;
            return (0, a.v)("div", {
                class: "IncodeGovtValidation IncodeGovtValidation--otp",
                children: (0, a.v)(c.t, {
                    className: "IncodeGovtValidationPage",
                    children: [
                        (0, a.v)(r.r, { size: 16 }),
                        (0, a.v)("div", {
                            class: "IncodeGovtValidationOtpInstructions",
                            children: [
                                (0, a.v)(p.t, { children: n("otp.insertSMS") }),
                                (0, a.v)("p", { children: n("otp.focus") }),
                            ],
                        }),
                        (0, a.v)(u.t, {
                            resendTimer: "awaitingOtp" === s.status ? s.resendTimer : 0,
                            canResend: "awaitingOtp" === s.status && s.canResend,
                            error: t,
                            onSubmit: (i) => d.submitOtp(i),
                            onResend: () => d.resendOtp(),
                            onBack: () => {},
                            isLoading: i,
                        }),
                    ],
                }),
            });
        }
        return "error" === s.status
            ? (0, a.v)(f, { variant: "error", icon: l.g, title: `${n("ineCheck.failure1")} ${n("ineCheck.failure2")}` })
            : "unknown" === s.status
              ? (0, a.v)(f, { variant: "unknown", icon: l.h, title: n("ineCheck.unknown") })
              : null;
    },
    V = ({ config: i, onFinish: t }) => (0, a.v)(s.t, { children: i ? (0, a.v)(G, { config: i, onFinish: t }) : null });
(0, h.t)(V, "incode-government-validation");
