i.d(t, { IdOcr: () => k });
var n = i(31144),
    s = i(248702),
    a = i(899656),
    o = i(458741),
    r = i(727571);
i(236631);
var l = i(242003),
    d = i(590875),
    u = i(489771),
    c = i(734045),
    v = i(971052),
    y = i(868282),
    b = i(901510),
    m = i(745345),
    g = { text: u.t, date: v.t },
    h = ({ fields: e, data: t, validationErrors: i, isReadonly: a, onChange: o, onBlur: r, onContinue: d }) => {
        let { t: u } = (0, n.n)(),
            v = i && Object.keys(i).length > 0,
            y = e.filter((e) =>
                "issuingCountry" === e.key ? !0 === a : "documentNumber" !== e.key || !a || !!t.documentNumber,
            ),
            m = (0, s.d)(() => (0, b.n)(y.map((e) => !a && e.required)), [y, a]);
        return (0, s.v)("div", {
            className: "IncodeIdOcrForm",
            children: [
                y.map((e) => {
                    let n = t[e.key] ?? "",
                        l = i?.[e.key],
                        d = l ? u(l) : void 0,
                        v = !a && e.required,
                        y = (0, b.t)(m, v),
                        h = y ? u(`forms.label.${y}`) : void 0;
                    if ("radio" === e.type)
                        return (0, s.v)(
                            c.t,
                            {
                                id: `id-ocr-${e.key}`,
                                class: "IncodeIdOcrRadioGroup",
                                label: u(e.labelKey),
                                labelHint: h,
                                value: n,
                                options: (e.options ?? []).map((e) => ({ value: e.value, label: u(e.label) })),
                                required: v,
                                disabled: a,
                                onChange: (t) => o(e.key, t),
                            },
                            e.key,
                        );
                    let p = g[e.type],
                        k = new Date().toISOString().split("T")[0];
                    return (0, s.v)(
                        p,
                        {
                            id: `id-ocr-${e.key}`,
                            label: u(e.labelKey),
                            labelHint: h,
                            value: n,
                            disabled: a,
                            required: v,
                            error: d,
                            showErrorIcon: !!d,
                            onInput: (t) => o(e.key, t.target.value),
                            onBlur: a || !r ? void 0 : () => r(e.key),
                            ...("date" === e.type && { max: k }),
                        },
                        e.key,
                    );
                }),
                (0, s.v)("div", {
                    className: "IncodeIdOcrButton",
                    children: (0, s.v)(l.t, { onClick: d, disabled: v, children: u("common.continue") }),
                }),
            ],
        });
    },
    p = ({ config: e, onFinish: t }) => {
        let { t: i } = (0, n.n)(),
            [o, l] = (0, a.o)(() => (0, m.Ti)({ config: e }));
        return "finished" === o.status
            ? (t?.(), null)
            : "success" === o.status
              ? (0, s.v)(d.t, { status: "success", successTitle: i("idOcr.successTitle") })
              : "error" === o.status
                ? (0, s.v)(d.t, { status: "failure", onRetry: () => l.retry() })
                : "loading" === o.status || "submitting" === o.status
                  ? (0, s.v)(d.t, {
                        status: "submitting",
                        submittingTitle: i("common.holdOnASec"),
                        submittingSubtitle: i("idOcr.loadingSubtitle"),
                    })
                  : "readonly" === o.status || "inputting" === o.status
                    ? (0, s.v)(r.t, {
                          title: i("idOcr.title"),
                          className: "IncodeIdOcrPage",
                          hideFooterBranding: !0,
                          children: (0, s.v)(
                              h,
                              {
                                  fields: (0, m.W)(e),
                                  data: o.formData,
                                  validationErrors: "inputting" === o.status ? o.validationErrors : void 0,
                                  isReadonly: "readonly" === o.status,
                                  onChange: (e, t) => l.setField(e, t),
                                  onBlur: "inputting" === o.status ? (e) => l.validateField(e) : void 0,
                                  onContinue: () => l.continue(),
                              },
                              o.ocrDocument,
                          ),
                      })
                    : null;
    },
    k = ({ config: e, onFinish: t }) => (0, s.v)(o.t, { children: e ? (0, s.v)(p, { config: e, onFinish: t }) : null });
(0, y.t)(k, "incode-id-ocr");
