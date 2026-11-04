i.r(t);
var s = i(783285),
    a = i(768611),
    n = i(200503),
    r = i(628926),
    d = i(326144);
i(685131);
var o = i(264957),
    l = i(503679),
    u = i(936391),
    c = i(660539),
    v = i(806002),
    m = i(918676),
    y = i(611797),
    b = i(965681),
    g = { text: u.t, date: v.t },
    p = { name: "name", birthDate: "bday", issuingCountry: "country-name", address: "street-address" },
    h = ({ fields: e, data: t, validationErrors: i, isReadonly: n, onChange: r, onBlur: d, onContinue: l }) => {
        let { t: u } = (0, s.n)(),
            v = i && Object.keys(i).length > 0,
            m = e.filter((e) =>
                "issuingCountry" === e.key ? !0 === n : "documentNumber" !== e.key || !n || !!t.documentNumber,
            ),
            b = (0, a.d)(() => (0, y.n)(m.map((e) => !n && e.required)), [m, n]);
        return (0, a.v)("div", {
            className: "IncodeIdOcrForm",
            children: [
                (0, a.v)("div", {
                    className: "IncodeIdOcrFields",
                    tabIndex: n ? 0 : void 0,
                    children: m.map((e) => {
                        let s = t[e.key] ?? "",
                            o = i?.[e.key],
                            l = o ? u(o) : void 0,
                            v = !n && e.required,
                            m = (0, y.t)(b, v),
                            h = m ? u(`forms.label.${m}`) : void 0;
                        if ("radio" === e.type)
                            return (0, a.v)(
                                c.t,
                                {
                                    id: `id-ocr-${e.key}`,
                                    class: "IncodeIdOcrRadioGroup",
                                    label: u(e.labelKey),
                                    labelHint: h,
                                    value: s,
                                    options: (e.options ?? []).map((e) => ({ value: e.value, label: u(e.label) })),
                                    required: v,
                                    disabled: n,
                                    onChange: (t) => r(e.key, t),
                                },
                                e.key,
                            );
                        let k = g[e.type],
                            I = new Date().toISOString().split("T")[0];
                        return (0, a.v)(
                            k,
                            {
                                id: `id-ocr-${e.key}`,
                                label: u(e.labelKey),
                                labelHint: h,
                                value: s,
                                disabled: n,
                                required: v,
                                autocomplete: p[e.key],
                                error: l,
                                showErrorIcon: !!l,
                                onInput: (t) => r(e.key, t.target.value),
                                onBlur: n || !d ? void 0 : () => d(e.key),
                                ...("date" === e.type && { max: I }),
                            },
                            e.key,
                        );
                    }),
                }),
                (0, a.v)("div", {
                    className: "IncodeIdOcrButton",
                    children: (0, a.v)(o.t, {
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
        let { t: r } = (0, s.n)(),
            [o, u] = (0, n.u)(() => t ?? (0, b.createIdOcrManager)({ config: e }), { manageLifecycle: !t });
        return ((0, n.c)({ status: "finished" === o.status ? "finished" : "loading", onFinish: i }),
        "finished" === o.status)
            ? null
            : "success" === o.status
              ? (0, a.v)(l.t, { status: "success", successTitle: r("idOcr.successTitle") })
              : "error" === o.status
                ? (0, a.v)(l.t, { status: "failure", onRetry: () => u.retry() })
                : "loading" === o.status || "submitting" === o.status
                  ? (0, a.v)(l.t, {
                        status: "submitting",
                        submittingTitle: r("common.holdOnASec"),
                        submittingSubtitle: r("idOcr.loadingSubtitle"),
                    })
                  : "readonly" === o.status || "inputting" === o.status
                    ? (0, a.v)(d.t, {
                          title: r("idOcr.title"),
                          className: "IncodeIdOcrPage",
                          hideFooterBranding: !0,
                          children: (0, a.v)(
                              h,
                              {
                                  fields: (0, b.getOcrFields)(e),
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
        (0, a.v)(r.t, { children: e ? (0, a.v)(k, { config: e, manager: t, onFinish: i }) : null });
((0, m.t)(I, "incode-id-ocr"), i.d(t, {}, { IdOcr: I }));
