a.d(t, { EkybModule: () => F });
var r = a(529058),
    n = a(287822),
    l = a(748922),
    o = a(898159),
    s = a(898369),
    d = a(188043);
a(48913);
var i = a(211396),
    u = a(787146),
    b = a(878176),
    m = a(96798),
    c = a(927216),
    v = a(843641),
    y = a(296767),
    h = a(120916),
    k = a(872698),
    p = a(13287),
    g = a(264140),
    C = ({ value: e, onChange: t }) => {
        let { t: a } = (0, r.n)();
        return (0, n.v)(p.t, {
            id: "ekyb-country",
            label: a("ekyb.country"),
            value: e,
            onChange: t,
            countryCodes: g.cd,
            devOnlyCountryCodes: g.OJ,
            "data-testid": "ekyb-country-selector",
        });
    },
    $ = ({ field: e, value: t, error: a, errorParams: l, country: o, labelHint: s, onChange: d, onBlur: i }) => {
        let { t: u } = (0, r.n)();
        return "dropdown" === e.type
            ? (0, n.v)(v.t, {
                  id: `ekyb-${e.name}`,
                  label: u(e.label),
                  labelHint: s,
                  placeholder: e.placeholder ? u(e.placeholder) : void 0,
                  value: t,
                  options: (e.options ?? []).map((e) => {
                      let t = u(e.label);
                      return { ...e, label: t, ariaLabel: (0, k.t)(t) };
                  }),
                  error: (0, c.i)(u, a, l),
                  required: e.required,
                  searchable: !0,
                  onChange: (t) => d(e.name, t),
                  onBlur: i ? () => i(e.name) : void 0,
                  "data-testid": `ekyb-field-${e.name}`,
              })
            : (0, n.v)(c.r, {
                  name: e.name,
                  label: e.label,
                  displayLabel: e.displayLabel,
                  value: t,
                  error: a,
                  errorParams: l,
                  required: e.required,
                  labelHint: s,
                  onChange: d,
                  onBlur: i,
              });
    },
    N = ({
        ubos: e,
        validationErrors: t,
        canAddUbo: a,
        labelHint: l,
        onSetField: o,
        onBlur: s,
        onAdd: d,
        onRemove: i,
    }) => {
        let { t: u } = (0, r.n)(),
            b = (e) => (0, c.i)(u, e?.key, e?.params);
        return 0 === e.length
            ? null
            : (0, n.v)("div", {
                  className: "IncodeEkybUbos",
                  children: [
                      e.map((e, a) => {
                          let r = 0 === a ? u("ekyb.uboName") : u("ekyb.uboNameWithNumber", { number: a + 1 }),
                              d = 0 === a ? u("ekyb.uboSurname") : u("ekyb.uboSurnameWithNumber", { number: a + 1 }),
                              c = 0 === a;
                          return (0, n.v)(
                              "div",
                              {
                                  className: "IncodeEkybUboEntry",
                                  role: "group",
                                  "aria-label": `UBO ${a + 1}`,
                                  children: [
                                      (0, n.v)(m.t, {
                                          id: `ubo-${a}-name`,
                                          label: r,
                                          labelHint: l,
                                          name: `ubo-${a}-name`,
                                          value: e.name,
                                          error: b(t?.[`ubo-${a}-name`]),
                                          required: !0,
                                          onInput: (e) => o(a, "name", e.target.value),
                                          onBlur: s ? () => s(`ubo-${a}-name`) : void 0,
                                          "data-testid": `ekyb-ubo-${a}-name`,
                                      }),
                                      (0, n.v)(m.t, {
                                          id: `ubo-${a}-surname`,
                                          label: d,
                                          labelHint: l,
                                          name: `ubo-${a}-surname`,
                                          value: e.surname,
                                          error: b(t?.[`ubo-${a}-surname`]),
                                          required: !0,
                                          onInput: (e) => o(a, "surname", e.target.value),
                                          onBlur: s ? () => s(`ubo-${a}-surname`) : void 0,
                                          "data-testid": `ekyb-ubo-${a}-surname`,
                                      }),
                                      !c &&
                                          (0, n.v)("button", {
                                              className: "IncodeEkybRemoveUbo",
                                              onClick: () => i(a),
                                              type: "button",
                                              "aria-label": `${u("common.remove")} UBO ${a + 1}`,
                                              children: u("common.remove"),
                                          }),
                                  ],
                              },
                              e.id,
                          );
                      }),
                      a &&
                          (0, n.v)("button", {
                              className: "IncodeEkybAddUbo",
                              onClick: d,
                              type: "button",
                              "data-testid": "ekyb-add-ubo",
                              children: u("ekyb.addAnotherUbo"),
                          }),
                  ],
              });
    },
    q = ({ config: e, onFinish: t }) => {
        let { t: a } = (0, r.n)(),
            [o, s] = (0, l.u)(() => (0, g.j5)({ config: e }));
        return ((0, l.c)({ status: "closed" === o.status ? "finished" : o.status, onFinish: t }),
        "finished" === o.status || "closed" === o.status)
            ? null
            : "loading" === o.status
              ? (0, n.v)(b.t, { status: "submitting", submittingTitle: a("common.loading") })
              : "submitting" === o.status
                ? (0, n.v)(d.t, {
                      className: "IncodeEkybPage",
                      children: (0, n.v)(i.t, {
                          fullScreen: !1,
                          title: a("common.processing"),
                          className: "IncodeEkybSpinner",
                      }),
                  })
                : "success" === o.status
                  ? (0, n.v)(b.t, { status: "success" })
                  : "error" === o.status
                    ? (0, n.v)(b.t, { status: "failure", onRetry: () => s.retry() })
                    : "form" === o.status
                      ? (0, n.v)(E, { state: o, manager: s })
                      : null;
    },
    I = new Set(["street", "houseNo", "addressLine2", "city", "state", "postalCode"]),
    E = ({ state: e, manager: t }) => {
        let {
                country: a,
                fields: o,
                values: i,
                validationErrors: b,
                isValid: m,
                ubos: v,
                canAddUbo: y,
                addressSuggestions: p,
            } = e,
            { t: g } = (0, r.n)(),
            q = (0, n.l)(null),
            E = (0, n.l)(null),
            F = (0, n.l)(void 0),
            f = (0, l.o)(q, o.length),
            S = (e) => (0, c.i)(g, e?.key, e?.params),
            U = b?.postalCode?.key;
        (0, n._)(() => {
            let e = F.current;
            if (((F.current = U), !U || e === U)) return;
            let t = requestAnimationFrame(() => {
                let e = E.current;
                e &&
                    (e.querySelector("#postalCode-error") ?? e).scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
            });
            return () => cancelAnimationFrame(t);
        }, [U]);
        let B = o.filter((e) => !I.has(e.name)),
            A = o.filter((e) => I.has(e.name)),
            w = (0, n.d)(() => (0, h.n)(o.map((e) => e.required)), [o]),
            H = (e) => {
                let t = (0, h.t)(w, e);
                return t ? g(`forms.label.${t}`) : void 0;
            };
        return (0, n.v)(d.t, {
            className: `IncodeEkybPage${f ? " IncodeEkybPageScrollable" : ""}`,
            title: g("ekyb.title"),
            children: [
                (0, n.v)("div", {
                    ref: q,
                    className: "IncodeEkybForm",
                    children: [
                        (0, n.v)(C, { value: a, onChange: (e) => t.setCountry(e) }),
                        B.map((e) =>
                            (0, n.v)(
                                $,
                                {
                                    field: e,
                                    value: i[e.name] ?? "",
                                    error: S(b?.[e.name]),
                                    country: a,
                                    labelHint: H(e.required),
                                    onChange: (e, a) => t.setField(e, a),
                                    onBlur: (e) => t.validateField(e),
                                },
                                e.name,
                            ),
                        ),
                        (0, n.v)(N, {
                            ubos: v,
                            validationErrors: b,
                            canAddUbo: y,
                            labelHint: H(!0),
                            onSetField: (e, a, r) => t.setUboField(e, a, r),
                            onBlur: (e) => t.validateField(e),
                            onAdd: () => t.addUbo(),
                            onRemove: (e) => t.removeUbo(e),
                        }),
                        A.length > 0 &&
                            (0, n.v)(n.x, {
                                children: [
                                    (0, n.v)("h3", {
                                        className: "IncodeEkybSectionHeader",
                                        children: g("ekyb.addressDetails"),
                                    }),
                                    A.map((e) =>
                                        "street" === e.name
                                            ? (0, n.v)(
                                                  k.n,
                                                  {
                                                      label: e.label,
                                                      labelHint: H(e.required),
                                                      value: i.street ?? "",
                                                      error: S(b?.street),
                                                      suggestions: p,
                                                      required: e.required,
                                                      onChange: (e) => t.setField("street", e),
                                                      onSearch: (e) => t.searchAddress(e),
                                                      onSelect: (e) => t.selectAddress(e),
                                                      onBlur: () => t.validateField("street"),
                                                  },
                                                  e.name,
                                              )
                                            : (0, n.v)(
                                                  "div",
                                                  {
                                                      ref: "postalCode" === e.name ? E : void 0,
                                                      children: (0, n.v)($, {
                                                          field: e,
                                                          value: i[e.name] ?? "",
                                                          error: S(b?.[e.name]),
                                                          country: a,
                                                          labelHint: H(e.required),
                                                          onChange: (e, a) => t.setField(e, a),
                                                          onBlur: (e) => t.validateField(e),
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
                        (0, n.v)(u.t, {
                            onClick: () => t.submit(),
                            disabled: !m,
                            "data-testid": "ekyb-submit",
                            children: g("ekyb.continue"),
                        }),
                        (0, n.v)(s.r, { size: 16 }),
                    ],
                }),
            ],
        });
    },
    F = ({ config: e, onFinish: t }) => (0, n.v)(o.t, { children: e ? (0, n.v)(q, { config: e, onFinish: t }) : null });
(0, y.t)(F, "incode-ekyb");
