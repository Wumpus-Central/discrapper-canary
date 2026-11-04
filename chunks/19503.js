e.r(t);
var s = e(783285),
    o = e(768611),
    r = e(200503),
    a = e(628926),
    i = e(326144),
    c = e(658299),
    l = e(264957),
    d = e(112316),
    u = e(918676),
    h = e(779705),
    C = e(424313),
    v = (n) => {
        n.target.closest("a") && n.stopPropagation();
    },
    g = ({ config: n, manager: t, onFinish: e, onError: a }) => {
        let { t: u, i18n: g } = (0, s.n)(),
            b = (0, o.l)(null),
            [m, p] = (0, r.u)(
                () => {
                    if (t) return t;
                    if (!n) throw Error("MandatoryConsent config is required when no manager is provided");
                    return (0, C.createMandatoryConsentManager)({
                        config: { ...n, language: n.language ?? g.language },
                    });
                },
                { manageLifecycle: !t },
            );
        if (
            ((0, o._)(() => {
                "display" === m.status && b.current?.focus();
            }, [m.status]),
            (0, r.c)({ status: m.status, onFinish: e, onError: a, error: "error" === m.status ? m.error : void 0 }),
            (0, r.s)(m))
        )
            return null;
        if ("idle" === m.status || "loading" === m.status) return (0, o.v)(c.t, { hideText: !0 });
        let y = m.text
                .split("\n")
                .filter((n) => n.trim().length > 0)
                .join(" "),
            k = (n?.type ?? "MANDATORY") === "MANDATORY";
        return (0, o.v)(
            i.t,
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
                                            children: (0, o.v)(h.t, { content: y, class: "IncodeRichText" }),
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
                                    class: k ? void 0 : "IncodeConsentButton",
                                    onClick: () => p.submit(),
                                    disabled: !m.canSubmit,
                                    isLoading: "submitting" === m.status,
                                    children: u("biometricConsent.button.continue"),
                                }),
                                k &&
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
    b = ({ config: n, manager: t, onFinish: e, onError: s }) =>
        (0, o.v)(a.t, { children: n || t ? (0, o.v)(g, { config: n, manager: t, onFinish: e, onError: s }) : null });
((0, u.t)(b, "incode-mandatory-consent"), e.d(t, {}, { MandatoryConsent: b }));
