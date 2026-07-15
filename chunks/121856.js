e.d(t, { MandatoryConsent: () => g });
var s = e(529058),
    o = e(287822),
    i = e(748922),
    r = e(898159),
    a = e(188043),
    c = e(486234),
    l = e(787146),
    d = e(509895),
    u = e(296767),
    h = e(1310),
    C = e(721378),
    v = (n) => {
        n.target.closest("a") && n.stopPropagation();
    },
    b = ({ config: n, manager: t, onFinish: e, onError: r }) => {
        let { t: u, i18n: b } = (0, s.n)(),
            g = (0, o.l)(null),
            [m, p] = (0, i.u)(
                () => {
                    if (t) return t;
                    if (!n) throw Error("MandatoryConsent config is required when no manager is provided");
                    return (0, C.n)({ config: { ...n, language: n.language ?? b.language } });
                },
                { manageLifecycle: !t },
            );
        if (
            ((0, o._)(() => {
                "display" === m.status && g.current?.focus();
            }, [m.status]),
            (0, i.c)({ status: m.status, onFinish: e, onError: r, error: "error" === m.status ? m.error : void 0 }),
            (0, i.s)(m))
        )
            return null;
        if ("idle" === m.status || "loading" === m.status) return (0, o.v)(c.t, { hideText: !0 });
        let k = m.text
                .split("\n")
                .filter((n) => n.trim().length > 0)
                .join(" "),
            y = (n?.type ?? "MANDATORY") === "MANDATORY";
        return (0, o.v)(
            a.t,
            {
                className: "IncodeConsentPage",
                title: m.title,
                children: (0, o.v)("div", {
                    class: "IncodeConsentContent",
                    children: [
                        (0, o.v)("div", {
                            class: "IncodeConsentBody",
                            children: [
                                (0, o.v)("p", {
                                    class: "IncodeConsentSubtitle",
                                    children: u("biometricConsent.subtitle"),
                                }),
                                (0, o.v)("div", {
                                    class: "IncodeConsentCheckboxList",
                                    children: (0, o.v)(d.t, {
                                        id: "mandatory-consent-checkbox",
                                        class: "IncodeConsentCheckbox",
                                        checked: m.isSigned,
                                        required: !0,
                                        onChange: () => p.toggle(),
                                        label: (0, o.v)("span", {
                                            class: "IncodeConsentCheckboxLabel",
                                            role: "presentation",
                                            onClick: v,
                                            onKeyDown: v,
                                            children: (0, o.v)(h.t, { content: k, class: "IncodeRichText" }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        "display" === m.status && m.error
                            ? (0, o.v)("p", {
                                  class: "IncodeConsentSubmitError",
                                  "data-testid": "mandatory-consent-submit-error",
                                  role: "alert",
                                  children: m.error,
                              })
                            : null,
                        (0, o.v)("div", {
                            class: "IncodeConsentActions",
                            children: [
                                (0, o.v)(l.t, {
                                    "data-testid": "mandatory-consent-submit",
                                    class: y ? void 0 : "IncodeConsentButton",
                                    onClick: () => p.submit(),
                                    disabled: !m.canSubmit,
                                    isLoading: "submitting" === m.status,
                                    children: u("biometricConsent.button.continue"),
                                }),
                                y &&
                                    (0, o.v)(l.t, {
                                        variant: "link",
                                        onClick: () => p.cancel(),
                                        children: u("biometricConsent.button.cancel"),
                                    }),
                            ],
                        }),
                    ],
                }),
            },
            "ready",
        );
    },
    g = ({ config: n, manager: t, onFinish: e, onError: s }) =>
        (0, o.v)(r.t, { children: n || t ? (0, o.v)(b, { config: n, manager: t, onFinish: e, onError: s }) : null });
(0, u.t)(g, "incode-mandatory-consent");
