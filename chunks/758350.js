i.d(t, { IdOcr: () => I });
var s = i(529058),
    n = i(287822),
    a = i(748922),
    d = i(898159),
    r = i(188043);
i(48913);
var o = i(787146),
    l = i(878176),
    u = i(96798),
    c = i(927216),
    v = i(98259),
    m = i(296767),
    y = i(120916),
    b = i(803581),
    p = { text: u.t, date: v.t },
    g = { name: "name", birthDate: "bday", issuingCountry: "country-name", address: "street-address" },
    h = ({ fields: e, data: t, validationErrors: i, isReadonly: a, onChange: d, onBlur: r, onContinue: l }) => {
        let { t: u } = (0, s.n)(),
            v = i && Object.keys(i).length > 0,
            m = e.filter((e) =>
                "issuingCountry" === e.key ? !0 === a : "documentNumber" !== e.key || !a || !!t.documentNumber,
            ),
            b = (0, n.d)(() => (0, y.n)(m.map((e) => !a && e.required)), [m, a]);
        return (0, n.v)("div", {
            className: "IncodeIdOcrForm",
            children: [
                (0, n.v)("div", {
                    className: "IncodeIdOcrFields",
                    tabIndex: a ? 0 : void 0,
                    children: m.map((e) => {
                        let s = t[e.key] ?? "",
                            o = i?.[e.key],
                            l = o ? u(o) : void 0,
                            v = !a && e.required,
                            m = (0, y.t)(b, v),
                            h = m ? u(`forms.label.${m}`) : void 0;
                        if ("radio" === e.type)
                            return (0, n.v)(
                                c.t,
                                {
                                    id: `id-ocr-${e.key}`,
                                    class: "IncodeIdOcrRadioGroup",
                                    label: u(e.labelKey),
                                    labelHint: h,
                                    value: s,
                                    options: (e.options ?? []).map((e) => ({ value: e.value, label: u(e.label) })),
                                    required: v,
                                    disabled: a,
                                    onChange: (t) => d(e.key, t),
                                },
                                e.key,
                            );
                        let k = p[e.type],
                            I = new Date().toISOString().split("T")[0];
                        return (0, n.v)(
                            k,
                            {
                                id: `id-ocr-${e.key}`,
                                label: u(e.labelKey),
                                labelHint: h,
                                value: s,
                                disabled: a,
                                required: v,
                                autocomplete: g[e.key],
                                error: l,
                                showErrorIcon: !!l,
                                onInput: (t) => d(e.key, t.target.value),
                                onBlur: a || !r ? void 0 : () => r(e.key),
                                ...("date" === e.type && { max: I }),
                            },
                            e.key,
                        );
                    }),
                }),
                (0, n.v)("div", {
                    className: "IncodeIdOcrButton",
                    children: (0, n.v)(o.t, {
                        onClick: l,
                        disabled: v,
                        "data-testid": "id-ocr-continue",
                        children: u("common.continue"),
                    }),
                }),
            ],
        });
    },
    k = ({ config: e, manager: t, onFinish: i }) => {
        let { t: d } = (0, s.n)(),
            [o, u] = (0, a.u)(() => t ?? (0, b.Ti)({ config: e }), { manageLifecycle: !t });
        return ((0, a.c)({ status: "finished" === o.status ? "finished" : "loading", onFinish: i }),
        "finished" === o.status)
            ? null
            : "success" === o.status
              ? (0, n.v)(l.t, { status: "success", successTitle: d("idOcr.successTitle") })
              : "error" === o.status
                ? (0, n.v)(l.t, { status: "failure", onRetry: () => u.retry() })
                : "loading" === o.status || "submitting" === o.status
                  ? (0, n.v)(l.t, {
                        status: "submitting",
                        submittingTitle: d("common.holdOnASec"),
                        submittingSubtitle: d("idOcr.loadingSubtitle"),
                    })
                  : "readonly" === o.status || "inputting" === o.status
                    ? (0, n.v)(r.t, {
                          title: d("idOcr.title"),
                          className: "IncodeIdOcrPage",
                          hideFooterBranding: !0,
                          children: (0, n.v)(
                              h,
                              {
                                  fields: (0, b.W)(e),
                                  data: o.formData,
                                  validationErrors: "inputting" === o.status ? o.validationErrors : void 0,
                                  isReadonly: "readonly" === o.status,
                                  onChange: (e, t) => u.setField(e, t),
                                  onBlur: "inputting" === o.status ? (e) => u.validateField(e) : void 0,
                                  onContinue: () => u.continue(),
                              },
                              o.ocrDocument,
                          ),
                      })
                    : null;
    },
    I = ({ config: e, manager: t, onFinish: i }) =>
        (0, n.v)(d.t, { children: e ? (0, n.v)(k, { config: e, manager: t, onFinish: i }) : null });
(0, m.t)(I, "incode-id-ocr");
