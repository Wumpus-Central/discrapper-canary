l.d(a, { EkycModule: () => S });
var t = l(31144),
    r = l(248702),
    n = l(899656),
    i = l(458741),
    s = l(727571),
    o = l(443781),
    d = l(242003),
    c = l(590875),
    u = l(734045),
    m = l(368697),
    v = l(129028),
    p = l(971052),
    h = l(868282),
    b = l(901510),
    y = l(353313),
    f = l(485108),
    k = ({ config: e, onFinish: a }) => {
        let { t: l } = (0, t.n)(),
            [i, d] = (0, n.o)(() => (0, f.MR)({ config: e }));
        return (
            (0, r._)(() => {
                ("finished" === i.status || "closed" === i.status) && a?.();
            }, [i.status, a]),
            "finished" === i.status || "closed" === i.status
                ? null
                : "loading" === i.status
                  ? (0, r.v)(c.t, { status: "submitting", submittingTitle: l("common.loading") })
                  : "submitting" === i.status
                    ? (0, r.v)(s.t, {
                          className: "IncodeEkycPage",
                          children: (0, r.v)(o.t, {
                              fullScreen: !1,
                              title: l("common.processing"),
                              className: "IncodeEkycSpinner",
                          }),
                      })
                    : "success" === i.status
                      ? (0, r.v)(c.t, { status: "success" })
                      : "error" === i.status
                        ? (0, r.v)(c.t, { status: "failure", onRetry: () => d.retry(), onSkip: () => d.skip() })
                        : "misconfigured" === i.status
                          ? (0, r.v)(c.t, {
                                status: "failure",
                                failureTitle: l("verification.noFormFields"),
                                onSkip: () => d.close(),
                                skipLabel: l("common.close"),
                            })
                          : "form" === i.status
                            ? (0, r.v)(C, { state: i, manager: d })
                            : null
        );
    },
    g = ["street", "city", "state", "postalCode", "houseNo"],
    C = ({ state: e, manager: a }) => {
        let {
                fields: l,
                values: i,
                errors: o,
                isValid: c,
                addressSuggestions: h,
                prefilled: k,
                hideEmail: C,
                fieldsCountry: S,
                submitError: E,
                submitAttempted: I,
            } = e,
            { t: q } = (0, t.n)(),
            F = (0, r.l)(null),
            N = (0, r.l)(null),
            $ = (0, r.l)(void 0),
            P = (0, n.i)(F, l.length),
            [H, L] = (0, r.p)({}),
            B = (0, r.h)((e) => {
                L((a) => (a[e] ? a : { ...a, [e]: !0 }));
            }, []),
            { displayErrors: A, errorParams: w } = (0, r.d)(() => (0, f.xd)(o, H, I, S, l), [o, H, I, S, l]),
            _ = (0, r.h)((e) => B(e), [B]),
            x = (0, r.h)(
                (e, l) => {
                    B(e), a.setField(e, l);
                },
                [a, B],
            ),
            R = (0, r.h)(
                (e) => {
                    for (let e of g) B(e);
                    a.selectAddress(e);
                },
                [a, B],
            ),
            D = (0, r.d)(
                () =>
                    (0, b.n)(
                        l.filter((e) => !("email" === e.name && C)).map((e) => !e.readonly && !k[e.name] && e.required),
                    ),
                [l, C, k],
            );
        (0, r._)(() => {
            let e = A.postalCode,
                a = $.current;
            if ((($.current = e), !e || a === e)) return;
            let l = requestAnimationFrame(() => {
                let e = N.current;
                e &&
                    (e.querySelector("#postalCode-error") ?? e).scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
            });
            return () => cancelAnimationFrame(l);
        }, [A.postalCode]);
        let M = (e, a) => (0, u.i)(q, a, w[e]),
            T;
        return (0, r.v)(s.t, {
            className: `IncodeEkycPage${P ? " IncodeEkycPageScrollable" : ""}`,
            title: q("verification.title"),
            children: [
                (0, r.v)("div", {
                    ref: F,
                    className: "IncodeEkycForm",
                    children: l.map((e) => {
                        let l;
                        if ("email" === e.name && C) return null;
                        let t = null;
                        e.section &&
                            e.section !== T &&
                            ((T = e.section),
                            (t = (0, r.v)("h3", {
                                className: "IncodeEkycSectionHeader",
                                children: q(
                                    {
                                        address: "verification.labels.addressDetailsSection",
                                        driverLicense: "verification.labels.dlDetailsSection",
                                    }[e.section] ?? e.section,
                                ),
                            })));
                        let n = e.readonly || k[e.name],
                            s = !n && e.required,
                            o = (l = (0, b.t)(D, s)) ? q(`forms.label.${l}`) : void 0,
                            d = i[e.name] ?? "",
                            c = A[e.name];
                        if ("street" === e.name && "address" === e.section)
                            return (0, r.v)(
                                "div",
                                {
                                    children: [
                                        t,
                                        (0, r.v)(y.n, {
                                            label: e.label,
                                            labelHint: o,
                                            value: d,
                                            error: c,
                                            errorParams: w[e.name],
                                            suggestions: h,
                                            readonly: n,
                                            required: s,
                                            onChange: (e) => x("street", e),
                                            onSearch: (e) => a.searchAddress(e),
                                            onSelect: R,
                                            onBlur: () => _("street"),
                                        }),
                                    ],
                                },
                                e.name,
                            );
                        if ("dropdown" === e.type) {
                            let a = q(e.label);
                            return (0, r.v)(
                                "div",
                                {
                                    children: [
                                        t,
                                        (0, r.v)(v.t, {
                                            id: `ekyc-${e.name}`,
                                            label: a,
                                            labelHint: o,
                                            placeholder: e.placeholder ? q(e.placeholder) : void 0,
                                            value: d,
                                            options: (e.options ?? []).map((e) => {
                                                let a = q(e.label);
                                                return { ...e, label: a, ariaLabel: (0, y.t)(a) };
                                            }),
                                            error: M(e.name, c),
                                            disabled: n,
                                            required: s,
                                            searchable: !0,
                                            onChange: (a) => x(e.name, a),
                                            onBlur: () => _(e.name),
                                            "data-testid": `ekyc-field-${e.name}`,
                                        }),
                                    ],
                                },
                                e.name,
                            );
                        }
                        if ("date" === e.type) {
                            let a = q(e.label);
                            return (0, r.v)(
                                "div",
                                {
                                    children: [
                                        t,
                                        (0, r.v)(p.t, {
                                            id: `ekyc-${e.name}`,
                                            label: a,
                                            labelHint: o,
                                            value: d,
                                            error: M(e.name, c),
                                            disabled: n,
                                            required: s,
                                            onInput: (a) => {
                                                let l = a.target;
                                                x(e.name, l.value);
                                            },
                                            onBlur: () => _(e.name),
                                            "data-testid": `ekyc-field-${e.name}`,
                                        }),
                                    ],
                                },
                                e.name,
                            );
                        }
                        if ("phone" === e.type) {
                            let a = q(e.label);
                            return (0, r.v)(
                                "div",
                                {
                                    children: [
                                        t,
                                        (0, r.v)(m.t, {
                                            id: `ekyc-${e.name}`,
                                            label: a,
                                            labelHint: o,
                                            countryCode: S,
                                            value: d,
                                            placeholder: e.placeholder,
                                            error: M(e.name, c),
                                            disabled: n,
                                            disableCountrySelector: e.disableCountrySelector,
                                            required: s,
                                            onChange: (a) => x(e.name, a),
                                            onBlur: () => _(e.name),
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
                                          t,
                                          (0, r.v)(u.t, {
                                              id: `ekyc-${e.name}`,
                                              class: "IncodeEkycRadioGroup",
                                              label: q(e.label),
                                              labelHint: o,
                                              value: d,
                                              options: (e.options ?? []).map((e) => ({
                                                  value: e.value,
                                                  label: q(e.label),
                                              })),
                                              error: c ? M(e.name, c) : void 0,
                                              disabled: n,
                                              required: s,
                                              onChange: (a) => x(e.name, a),
                                              onBlur: () => _(e.name),
                                          }),
                                      ],
                                  },
                                  e.name,
                              )
                            : (0, r.v)(
                                  "div",
                                  {
                                      ref: "postalCode" === e.name ? N : void 0,
                                      children: [
                                          t,
                                          (0, r.v)(u.r, {
                                              name: e.name,
                                              label: e.label,
                                              displayLabel: e.displayLabel,
                                              value: d,
                                              error: c,
                                              errorParams: w[e.name],
                                              type: e.type,
                                              placeholder: e.placeholder,
                                              placeholderParams: e.placeholderParams,
                                              required: s,
                                              labelHint: o,
                                              readonly: n,
                                              maxLength: e.maxLength,
                                              onChange: x,
                                              onBlur: _,
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
                        E && (0, r.v)("p", { className: "IncodeEkycSubmitError", role: "alert", children: q(E) }),
                        (0, r.v)(d.t, {
                            onClick: () => a.submit(),
                            disabled: !c,
                            "data-testid": "ekyc-submit",
                            children: q("common.continue"),
                        }),
                        "verification.errors.countryNotSupported" === E &&
                            (0, r.v)(d.t, {
                                variant: "link",
                                onClick: () => a.skip(),
                                "data-testid": "ekyc-skip",
                                children: q("verification.labels.skip"),
                            }),
                    ],
                }),
            ],
        });
    },
    S = ({ config: e, onFinish: a }) => (0, r.v)(i.t, { children: e ? (0, r.v)(k, { config: e, onFinish: a }) : null });
(0, h.t)(S, "incode-ekyc");
