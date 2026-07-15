d.d(t, { Consent: () => p });
var i = d(529058),
    e = d(287822),
    c = d(748922),
    a = d(898159),
    s = d(188043),
    n = d(486234),
    Z = d(787146),
    b = d(509895),
    m = d(296767),
    o = d(1310),
    u = d(120916),
    h = d(88918),
    W = (l) => {
        l.target.closest("a") && l.stopPropagation();
    },
    G = ({ config: l, manager: t, onFinish: d, onError: a }) => {
        let { t: m, i18n: G } = (0, i.n)(),
            [p, N] = (0, c.u)(
                () => {
                    if (t) return t;
                    if (!l) throw Error("Consent config is required");
                    return (0, h.w)({ config: { ...l, language: l.language ?? G.language } });
                },
                { manageLifecycle: !t },
            ),
            M = "checkboxes" in p ? p.checkboxes : void 0,
            X = (0, e.d)(() => (0, u.n)(M?.map((l) => l.required) ?? []), [M]);
        return ((0, c.c)({ status: p.status, onFinish: d, onError: a, error: "error" === p.status ? p.error : void 0 }),
        (0, c.s)(p))
            ? null
            : "idle" === p.status || "loading" === p.status
              ? (0, e.v)(n.t, { hideText: !0 })
              : (0, e.v)(
                    s.t,
                    {
                        className: "IncodeConsentPage",
                        title: p.title,
                        children: (0, e.v)("div", {
                            class: "IncodeConsentContent",
                            children: [
                                (0, e.v)("div", {
                                    class: "IncodeConsentBody",
                                    children: [
                                        (0, e.v)(o.t, { content: p.richText, class: "IncodeRichText" }),
                                        (0, e.v)("div", {
                                            class: "IncodeConsentCheckboxList",
                                            role: "group",
                                            "aria-label": m("biometricConsent.consentOptions"),
                                            children: p.checkboxes.map((l) => {
                                                let t = (0, u.t)(X, l.required),
                                                    d = t ? m(`forms.label.${t}`) : void 0;
                                                return (0, e.v)(
                                                    b.t,
                                                    {
                                                        id: `consent-checkbox-${l.id}`,
                                                        class: "IncodeConsentCheckbox",
                                                        size: "s",
                                                        checked: l.checked,
                                                        required: l.required,
                                                        labelHint: d,
                                                        onChange: () => N.toggleCheckbox(l.id),
                                                        label: (0, e.v)("span", {
                                                            class: "IncodeConsentCheckboxLabel",
                                                            role: "presentation",
                                                            onClick: W,
                                                            onKeyDown: W,
                                                            children: (0, e.v)(o.t, {
                                                                content: l.label,
                                                                class: "IncodeRichText",
                                                                disallowedTags: ["img"],
                                                            }),
                                                        }),
                                                    },
                                                    l.id,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                                "display" === p.status && p.error
                                    ? (0, e.v)("p", {
                                          class: "IncodeConsentSubmitError",
                                          "data-testid": "consent-submit-error",
                                          role: "alert",
                                          children: p.error,
                                      })
                                    : null,
                                (0, e.v)(Z.t, {
                                    class: "IncodeConsentButton",
                                    "data-testid": "consent-submit",
                                    onClick: () => N.submit(),
                                    disabled: !p.canSubmit,
                                    isLoading: "submitting" === p.status,
                                    children: m("biometricConsent.button.continue"),
                                }),
                            ],
                        }),
                    },
                    "ready",
                );
    },
    p = ({ config: l, manager: t, onFinish: d, onError: i }) =>
        (0, e.v)(a.t, { children: l || t ? (0, e.v)(G, { config: l, manager: t, onFinish: d, onError: i }) : null });
(0, m.t)(p, "incode-consent");
