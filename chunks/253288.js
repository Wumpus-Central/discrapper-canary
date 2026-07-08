t.d(r, { EkybModule: () => S });
var a = t(31144),
    n = t(248702),
    o = t(899656),
    l = t(458741),
    s = t(517e3),
    i = t(727571);
t(236631);
var u = t(443781),
    d = t(242003),
    b = t(590875),
    m = t(489771),
    c = t(734045),
    v = t(129028),
    h = t(868282),
    y = t(901510),
    k = t(353313),
    p = t(111332),
    g = t(449538),
    f = ({ value: e, onChange: r }) => {
        let { t: t } = (0, a.n)();
        return (0, n.v)(p.t, {
            id: "ekyb-country",
            label: t("ekyb.country"),
            value: e,
            onChange: r,
            countryCodes: g.cd,
            devOnlyCountryCodes: g.OJ,
            "data-testid": "ekyb-country-selector",
        });
    },
    C = ({ field: e, value: r, error: t, errorParams: o, country: l, labelHint: s, onChange: i, onBlur: u }) => {
        let { t: d } = (0, a.n)();
        return "dropdown" === e.type
            ? (0, n.v)(v.t, {
                  id: `ekyb-${e.name}`,
                  label: d(e.label),
                  labelHint: s,
                  placeholder: e.placeholder ? d(e.placeholder) : void 0,
                  value: r,
                  options: (e.options ?? []).map((e) => {
                      let r = d(e.label);
                      return { ...e, label: r, ariaLabel: (0, k.t)(r) };
                  }),
                  error: (0, c.i)(d, t, o),
                  required: e.required,
                  searchable: !0,
                  onChange: (r) => i(e.name, r),
                  onBlur: u ? () => u(e.name) : void 0,
                  "data-testid": `ekyb-field-${e.name}`,
              })
            : (0, n.v)(c.r, {
                  name: e.name,
                  label: e.label,
                  displayLabel: e.displayLabel,
                  value: r,
                  error: t,
                  errorParams: o,
                  required: e.required,
                  labelHint: s,
                  onChange: i,
                  onBlur: u,
              });
    },
    $ = ({
        ubos: e,
        errors: r,
        errorParams: t,
        canAddUbo: o,
        labelHint: l,
        onSetField: s,
        onBlur: i,
        onAdd: u,
        onRemove: d,
    }) => {
        let { t: b } = (0, a.n)(),
            v = (e) => (0, c.i)(b, r[e], t[e]);
        return 0 === e.length
            ? null
            : (0, n.v)("div", {
                  className: "IncodeEkybUbos",
                  children: [
                      e.map((e, r) => {
                          let t = 0 === r ? b("ekyb.uboName") : b("ekyb.uboNameWithNumber", { number: r + 1 }),
                              a = 0 === r ? b("ekyb.uboSurname") : b("ekyb.uboSurnameWithNumber", { number: r + 1 }),
                              o = 0 === r;
                          return (0, n.v)(
                              "div",
                              {
                                  className: "IncodeEkybUboEntry",
                                  role: "group",
                                  "aria-label": `UBO ${r + 1}`,
                                  children: [
                                      (0, n.v)(m.t, {
                                          id: `ubo-${r}-name`,
                                          label: t,
                                          labelHint: l,
                                          name: `ubo-${r}-name`,
                                          value: e.name,
                                          error: v(`ubo-${r}-name`),
                                          required: !0,
                                          onInput: (e) => s(r, "name", e.target.value),
                                          onBlur: i ? () => i(`ubo-${r}-name`) : void 0,
                                          "data-testid": `ekyb-ubo-${r}-name`,
                                      }),
                                      (0, n.v)(m.t, {
                                          id: `ubo-${r}-surname`,
                                          label: a,
                                          labelHint: l,
                                          name: `ubo-${r}-surname`,
                                          value: e.surname,
                                          error: v(`ubo-${r}-surname`),
                                          required: !0,
                                          onInput: (e) => s(r, "surname", e.target.value),
                                          onBlur: i ? () => i(`ubo-${r}-surname`) : void 0,
                                          "data-testid": `ekyb-ubo-${r}-surname`,
                                      }),
                                      !o &&
                                          (0, n.v)("button", {
                                              className: "IncodeEkybRemoveUbo",
                                              onClick: () => d(r),
                                              type: "button",
                                              "aria-label": `${b("common.remove")} UBO ${r + 1}`,
                                              children: b("common.remove"),
                                          }),
                                  ],
                              },
                              e.id,
                          );
                      }),
                      o &&
                          (0, n.v)("button", {
                              className: "IncodeEkybAddUbo",
                              onClick: u,
                              type: "button",
                              "data-testid": "ekyb-add-ubo",
                              children: b("ekyb.addAnotherUbo"),
                          }),
                  ],
              });
    },
    N = ({ config: e, onFinish: r }) => {
        let { t: t } = (0, a.n)(),
            [l, s] = (0, o.o)(() => (0, g.j5)({ config: e }));
        return (
            (0, n._)(() => {
                ("finished" === l.status || "closed" === l.status) && r?.();
            }, [l.status, r]),
            "finished" === l.status || "closed" === l.status
                ? null
                : "loading" === l.status
                  ? (0, n.v)(b.t, { status: "submitting", submittingTitle: t("common.loading") })
                  : "submitting" === l.status
                    ? (0, n.v)(i.t, {
                          className: "IncodeEkybPage",
                          children: (0, n.v)(u.t, {
                              fullScreen: !1,
                              title: t("common.processing"),
                              className: "IncodeEkybSpinner",
                          }),
                      })
                    : "success" === l.status
                      ? (0, n.v)(b.t, { status: "success" })
                      : "error" === l.status
                        ? (0, n.v)(b.t, { status: "failure", onRetry: () => s.retry() })
                        : "form" === l.status
                          ? (0, n.v)(I, { state: l, manager: s })
                          : null
        );
    },
    q = new Set(["street", "houseNo", "addressLine2", "city", "state", "postalCode"]),
    E = ["street", "city", "state", "postalCode", "houseNo"],
    I = ({ state: e, manager: r }) => {
        let {
                country: t,
                fields: l,
                values: u,
                errors: b,
                isValid: m,
                ubos: c,
                canAddUbo: v,
                addressSuggestions: h,
                submitAttempted: p,
            } = e,
            { t: N } = (0, a.n)(),
            I = (0, n.l)(null),
            S = (0, n.l)(null),
            U = (0, n.l)(void 0),
            A = (0, o.i)(I, l.length),
            [B, F] = (0, n.p)({}),
            H = (0, n.h)((e) => {
                F((r) => (r[e] ? r : { ...r, [e]: !0 }));
            }, []),
            { displayErrors: P, errorParams: w } = (0, n.d)(() => (0, g.if)(b, B, p, t, l), [b, B, p, t, l]),
            O = (0, n.h)((e) => H(e), [H]),
            L = (0, n.h)(
                (e, t) => {
                    H(e), r.setField(e, t);
                },
                [r, H],
            ),
            R = (0, n.h)(
                (e, t, a) => {
                    H(`ubo-${e}-${t}`), r.setUboField(e, t, a);
                },
                [r, H],
            ),
            _ = (0, n.h)(
                (e) => {
                    for (let e of E) H(e);
                    r.selectAddress(e);
                },
                [r, H],
            ),
            j = (0, n.h)(
                (e) => {
                    r.removeUbo(e),
                        F((r) => {
                            let t = {};
                            for (let [a, n] of Object.entries(r)) {
                                let r = a.match(/^ubo-(\d+)-(name|surname)$/);
                                if (!r) {
                                    t[a] = n;
                                    continue;
                                }
                                let o = Number(r[1]);
                                if (o === e) continue;
                                let l = o > e ? o - 1 : o;
                                t[`ubo-${l}-${r[2]}`] = n;
                            }
                            return t;
                        });
                },
                [r],
            );
        (0, n._)(() => {
            let e = P.postalCode,
                r = U.current;
            if (((U.current = e), !e || r === e)) return;
            let t = requestAnimationFrame(() => {
                let e = S.current;
                e &&
                    (e.querySelector("#postalCode-error") ?? e).scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
            });
            return () => cancelAnimationFrame(t);
        }, [P.postalCode]);
        let V = l.filter((e) => !q.has(e.name)),
            W = l.filter((e) => q.has(e.name)),
            z = (0, n.d)(() => (0, y.n)(l.map((e) => e.required)), [l]),
            D = (e) => {
                let r = (0, y.t)(z, e);
                return r ? N(`forms.label.${r}`) : void 0;
            };
        return (0, n.v)(i.t, {
            className: `IncodeEkybPage${A ? " IncodeEkybPageScrollable" : ""}`,
            title: N("ekyb.title"),
            children: [
                (0, n.v)("div", {
                    ref: I,
                    className: "IncodeEkybForm",
                    children: [
                        (0, n.v)(f, { value: t, onChange: (e) => r.setCountry(e) }),
                        V.map((e) =>
                            (0, n.v)(
                                C,
                                {
                                    field: e,
                                    value: u[e.name] ?? "",
                                    error: P[e.name],
                                    errorParams: w[e.name],
                                    country: t,
                                    labelHint: D(e.required),
                                    onChange: L,
                                    onBlur: O,
                                },
                                e.name,
                            ),
                        ),
                        (0, n.v)($, {
                            ubos: c,
                            errors: P,
                            errorParams: w,
                            canAddUbo: v,
                            labelHint: D(!0),
                            onSetField: R,
                            onBlur: O,
                            onAdd: () => r.addUbo(),
                            onRemove: j,
                        }),
                        W.length > 0 &&
                            (0, n.v)(n.S, {
                                children: [
                                    (0, n.v)("h3", {
                                        className: "IncodeEkybSectionHeader",
                                        children: N("ekyb.addressDetails"),
                                    }),
                                    W.map((e) =>
                                        "street" === e.name
                                            ? (0, n.v)(
                                                  k.n,
                                                  {
                                                      label: e.label,
                                                      labelHint: D(e.required),
                                                      value: u.street ?? "",
                                                      error: P.street,
                                                      errorParams: w.street,
                                                      suggestions: h,
                                                      required: e.required,
                                                      onChange: (e) => L("street", e),
                                                      onSearch: (e) => r.searchAddress(e),
                                                      onSelect: _,
                                                      onBlur: () => O("street"),
                                                  },
                                                  e.name,
                                              )
                                            : (0, n.v)(
                                                  "div",
                                                  {
                                                      ref: "postalCode" === e.name ? S : void 0,
                                                      children: (0, n.v)(C, {
                                                          field: e,
                                                          value: u[e.name] ?? "",
                                                          error: P[e.name],
                                                          errorParams: w[e.name],
                                                          country: t,
                                                          labelHint: D(e.required),
                                                          onChange: L,
                                                          onBlur: O,
                                                      }),
                                                  },
                                                  e.name,
                                              ),
                                    ),
                                ],
                            }),
                    ],
                }),
                (0, n.v)("div", {
                    className: "IncodeEkybFooter",
                    children: [
                        (0, n.v)(d.t, {
                            onClick: () => r.submit(),
                            disabled: !m,
                            "data-testid": "ekyb-submit",
                            children: N("ekyb.continue"),
                        }),
                        (0, n.v)(s.r, { size: 16 }),
                    ],
                }),
            ],
        });
    },
    S = ({ config: e, onFinish: r }) => (0, n.v)(l.t, { children: e ? (0, n.v)(N, { config: e, onFinish: r }) : null });
(0, h.t)(S, "incode-ekyb");
