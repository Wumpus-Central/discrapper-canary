l.d(a, { EkycModule: () => F });
var t = l(529058),
    r = l(287822),
    i = l(748922),
    n = l(898159),
    s = l(188043),
    d = l(211396),
    o = l(787146),
    c = l(878176),
    u = l(927216),
    m = l(906819),
    v = l(843641),
    p = l(98259),
    h = l(296767),
    b = l(120916),
    y = l(872698),
    k = l(419208),
    f = ({ config: e, onFinish: a }) => {
        let { t: l } = (0, t.n)(),
            [n, o] = (0, i.u)(() => (0, k.M)({ config: e }));
        return ((0, i.c)({ status: "closed" === n.status ? "finished" : n.status, onFinish: a }),
        "finished" === n.status || "closed" === n.status)
            ? null
            : "loading" === n.status
              ? (0, r.v)(c.t, { status: "submitting", submittingTitle: l("common.loading") })
              : "submitting" === n.status
                ? (0, r.v)(s.t, {
                      className: "IncodeEkycPage",
                      children: (0, r.v)(d.t, {
                          fullScreen: !1,
                          title: l("common.processing"),
                          className: "IncodeEkycSpinner",
                      }),
                  })
                : "success" === n.status
                  ? (0, r.v)(c.t, { status: "success" })
                  : "error" === n.status
                    ? (0, r.v)(c.t, { status: "failure", onRetry: () => o.retry(), onSkip: () => o.skip() })
                    : "misconfigured" === n.status
                      ? (0, r.v)(c.t, {
                            status: "failure",
                            failureTitle: l("verification.noFormFields"),
                            onSkip: () => o.close(),
                            skipLabel: l("common.close"),
                        })
                      : "form" === n.status
                        ? (0, r.v)(g, { state: n, manager: o })
                        : null;
    },
    g = ({ state: e, manager: a }) => {
        let l,
            {
                fields: n,
                values: d,
                validationErrors: c,
                isValid: h,
                addressSuggestions: k,
                prefilled: f,
                hideEmail: g,
                fieldsCountry: F,
                submitError: C,
            } = e,
            { t: S } = (0, t.n)(),
            E = (0, r.l)(null),
            I = (0, r.l)(null),
            q = (0, r.l)(void 0),
            $ = (0, i.o)(E, n.length),
            N = (0, r.d)(
                () =>
                    (0, b.n)(
                        n.filter((e) => !("email" === e.name && g)).map((e) => !e.readonly && !f[e.name] && e.required),
                    ),
                [n, g, f],
            ),
            L = c?.postalCode?.key;
        (0, r._)(() => {
            let e = q.current;
            if (((q.current = L), !L || e === L)) return;
            let a = requestAnimationFrame(() => {
                let e = I.current;
                e &&
                    (e.querySelector("#postalCode-error") ?? e).scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
            });
            return () => cancelAnimationFrame(a);
        }, [L]);
        let P = (e) => (0, u.i)(S, e?.key, e?.params);
        return (0, r.v)(s.t, {
            className: `IncodeEkycPage${$ ? " IncodeEkycPageScrollable" : ""}`,
            title: S("verification.title"),
            children: [
                (0, r.v)("div", {
                    ref: E,
                    className: "IncodeEkycForm",
                    children: n.map((e) => {
                        let t;
                        if ("email" === e.name && g) return null;
                        let i = null;
                        e.section &&
                            e.section !== l &&
                            ((l = e.section),
                            (i = (0, r.v)("h3", {
                                className: "IncodeEkycSectionHeader",
                                children: S(
                                    {
                                        address: "verification.labels.addressDetailsSection",
                                        driverLicense: "verification.labels.dlDetailsSection",
                                    }[e.section] ?? e.section,
                                ),
                            })));
                        let n = e.readonly || f[e.name],
                            s = !n && e.required,
                            o = (t = (0, b.t)(N, s)) ? S(`forms.label.${t}`) : void 0,
                            h = d[e.name] ?? "",
                            C = c?.[e.name];
                        if ("street" === e.name && "address" === e.section)
                            return (0, r.v)(
                                "div",
                                {
                                    children: [
                                        i,
                                        (0, r.v)(y.n, {
                                            label: e.label,
                                            labelHint: o,
                                            value: h,
                                            error: C?.key,
                                            errorParams: C?.params,
                                            suggestions: k,
                                            readonly: n,
                                            required: s,
                                            onChange: (e) => a.setField("street", e),
                                            onSearch: (e) => a.searchAddress(e),
                                            onSelect: (e) => a.selectAddress(e),
                                            onBlur: () => a.validateField("street"),
                                        }),
                                    ],
                                },
                                e.name,
                            );
                        if ("dropdown" === e.type) {
                            let l = S(e.label);
                            return (0, r.v)(
                                "div",
                                {
                                    children: [
                                        i,
                                        (0, r.v)(v.t, {
                                            id: `ekyc-${e.name}`,
                                            label: l,
                                            labelHint: o,
                                            placeholder: e.placeholder ? S(e.placeholder) : void 0,
                                            value: h,
                                            options: (e.options ?? []).map((e) => {
                                                let a = S(e.label);
                                                return { ...e, label: a, ariaLabel: (0, y.t)(a) };
                                            }),
                                            error: P(C),
                                            disabled: n,
                                            required: s,
                                            searchable: !0,
                                            onChange: (l) => a.setField(e.name, l),
                                            onBlur: () => a.validateField(e.name),
                                            "data-testid": `ekyc-field-${e.name}`,
                                        }),
                                    ],
                                },
                                e.name,
                            );
                        }
                        if ("date" === e.type) {
                            let l = S(e.label);
                            return (0, r.v)(
                                "div",
                                {
                                    children: [
                                        i,
                                        (0, r.v)(p.t, {
                                            id: `ekyc-${e.name}`,
                                            label: l,
                                            labelHint: o,
                                            value: h,
                                            error: P(C),
                                            disabled: n,
                                            required: s,
                                            onInput: (l) => {
                                                let t = l.target;
                                                a.setField(e.name, t.value);
                                            },
                                            onBlur: () => a.validateField(e.name),
                                            "data-testid": `ekyc-field-${e.name}`,
                                        }),
                                    ],
                                },
                                e.name,
                            );
                        }
                        if ("phone" === e.type) {
                            let l = S(e.label);
                            return (0, r.v)(
                                "div",
                                {
                                    children: [
                                        i,
                                        (0, r.v)(m.t, {
                                            id: `ekyc-${e.name}`,
                                            label: l,
                                            labelHint: o,
                                            countryCode: F,
                                            value: h,
                                            placeholder: e.placeholder,
                                            error: P(C),
                                            disabled: n,
                                            disableCountrySelector: e.disableCountrySelector,
                                            required: s,
                                            onChange: (l) => a.setField(e.name, l),
                                            onBlur: () => a.validateField(e.name),
                                            "data-testid": `ekyc-field-${e.name}`,
                                        }),
                                    ],
                                },
                                e.name,
                            );
                        }
                        return "radio" === e.type
                            ? (0, r.v)(
                                  "div",
                                  {
                                      children: [
                                          i,
                                          (0, r.v)(u.t, {
                                              id: `ekyc-${e.name}`,
                                              class: "IncodeEkycRadioGroup",
                                              label: S(e.label),
                                              labelHint: o,
                                              value: h,
                                              options: (e.options ?? []).map((e) => ({
                                                  value: e.value,
                                                  label: S(e.label),
                                              })),
                                              error: P(C),
                                              disabled: n,
                                              required: s,
                                              onChange: (l) => a.setField(e.name, l),
                                              onBlur: () => a.validateField(e.name),
                                          }),
                                      ],
                                  },
                                  e.name,
                              )
                            : (0, r.v)(
                                  "div",
                                  {
                                      ref: "postalCode" === e.name ? I : void 0,
                                      children: [
                                          i,
                                          (0, r.v)(u.r, {
                                              name: e.name,
                                              label: e.label,
                                              displayLabel: e.displayLabel,
                                              value: h,
                                              error: C?.key,
                                              errorParams: C?.params,
                                              type: e.type,
                                              placeholder: e.placeholder,
                                              placeholderParams: e.placeholderParams,
                                              required: s,
                                              labelHint: o,
                                              readonly: n,
                                              maxLength: e.maxLength,
                                              onChange: (e, l) => a.setField(e, l),
                                              onBlur: (e) => a.validateField(e),
                                          }),
                                      ],
                                  },
                                  e.name,
                              );
                    }),
                }),
                (0, r.v)("div", {
                    className: "IncodeEkycFooter",
                    children: [
                        C && (0, r.v)("p", { className: "IncodeEkycSubmitError", role: "alert", children: S(C) }),
                        (0, r.v)(o.t, {
                            onClick: () => a.submit(),
                            disabled: !h,
                            "data-testid": "ekyc-submit",
                            children: S("common.continue"),
                        }),
                        "verification.errors.countryNotSupported" === C &&
                            (0, r.v)(o.t, {
                                variant: "link",
                                onClick: () => a.skip(),
                                "data-testid": "ekyc-skip",
                                children: S("verification.labels.skip"),
                            }),
                    ],
                }),
            ],
        });
    },
    F = ({ config: e, onFinish: a }) => (0, r.v)(n.t, { children: e ? (0, r.v)(f, { config: e, onFinish: a }) : null });
(0, h.t)(F, "incode-ekyc");
