i.d(t, { DynamicForms: () => E });
var n = i(529058),
    s = i(287822),
    o = i(748922),
    r = i(898159),
    a = i(898369),
    d = i(188043),
    u = i(787146),
    l = i(878176),
    c = i(96798),
    m = i(906819),
    v = i(843641),
    I = i(98259),
    q = i(296767),
    h = i(120916),
    p = i(915192),
    g = i(364162),
    y = i(70098),
    F = ({
        question: e,
        value: t,
        disabled: i = !1,
        error: o,
        labelHint: r,
        onChange: a,
        onFormatValidityChange: d,
        onBlur: u,
    }) => {
        let { t: l } = (0, n.n)(),
            q = e.inputType ?? e.overrides ?? "TEXT",
            h = `dynamic-form-${e.questionId}`,
            y = e.question,
            F = !e.isOptional,
            b = (function (e) {
                switch (e) {
                    case "NAME":
                        return "name";
                    case "PHONE":
                        return "tel";
                    case "DATE":
                        return "bday";
                    default:
                        return;
                }
            })(q),
            f = "COUNTRY" === q || "NATIONALITY" === q,
            E = (0, s.d)(
                () => (f ? m.n.map((e) => ({ value: e.code, label: `${e.emoji} ${e.name}`, ariaLabel: e.name })) : []),
                [f],
            );
        if ("YESNO" === q) {
            let n = [
                { value: "YES", label: l("common.yes") },
                { value: "NO", label: l("common.no") },
            ];
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(v.t, {
                    id: h,
                    "data-testid": h,
                    name: e.questionId,
                    label: y,
                    labelHint: r,
                    value: t,
                    options: n,
                    required: F,
                    error: o,
                    disabled: i,
                    onChange: (t) => a(e.questionId, t),
                    onBlur: () => u?.(e.questionId),
                }),
            });
        }
        if ("DATE" === q)
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(I.t, {
                    id: h,
                    "data-testid": h,
                    name: e.questionId,
                    label: y,
                    labelHint: r,
                    value: t,
                    required: F,
                    autocomplete: b,
                    error: o,
                    showErrorIcon: !!o,
                    disabled: i,
                    onInput: (t) => a(e.questionId, t.target.value),
                    onBlur: () => u?.(e.questionId),
                }),
            });
        if ("PHONE" === q)
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                onFocusOut: () => u?.(e.questionId),
                children: (0, s.v)(m.t, {
                    id: h,
                    "data-testid": h,
                    label: y,
                    labelHint: r,
                    value: t,
                    required: F,
                    autocomplete: b,
                    error: o,
                    showErrorIcon: !!o,
                    disabled: i,
                    onChange: (t, i) => {
                        a(e.questionId, t), d?.(e.questionId, i);
                    },
                }),
            });
        if ("COUNTRY" === q || "NATIONALITY" === q)
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(v.t, {
                    id: h,
                    "data-testid": h,
                    label: y,
                    labelHint: r,
                    value: t,
                    options: E,
                    searchable: !0,
                    required: F,
                    error: o,
                    disabled: i,
                    onChange: (t) => a(e.questionId, t),
                    onBlur: () => u?.(e.questionId),
                }),
            });
        if ("SELECT" === q || "MULTISELECT" === q) {
            let n = (e.options ?? []).map((e) => ({ value: e, label: e }));
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(v.t, {
                    id: h,
                    "data-testid": h,
                    label: y,
                    labelHint: r,
                    value: t,
                    options: n,
                    searchable: n.length > 5,
                    required: F,
                    error: o,
                    disabled: i,
                    onChange: (t) => a(e.questionId, t),
                    onBlur: () => u?.(e.questionId),
                }),
            });
        }
        return "EMAIL" === q
            ? (0, s.v)("div", {
                  class: "IncodeDynamicFormsField",
                  children: (0, s.v)(p.t, {
                      id: h,
                      "data-testid": h,
                      value: t,
                      emailError: o,
                      label: y,
                      labelHint: r,
                      required: F,
                      disabled: i,
                      onEmailChange: (t, i) => {
                          a(e.questionId, t), d?.(e.questionId, i);
                      },
                      onBlur: () => u?.(e.questionId),
                  }),
              })
            : "CPF" === q
              ? (0, s.v)("div", {
                    class: "IncodeDynamicFormsField",
                    children: (0, s.v)(c.t, {
                        id: h,
                        "data-testid": h,
                        name: e.questionId,
                        label: y,
                        labelHint: r,
                        inputMode: "numeric",
                        maxLength: 14,
                        value: t,
                        required: F,
                        error: o,
                        showErrorIcon: !!o,
                        disabled: i,
                        onInput: (t) => {
                            let i = (0, g.bb)(t.target.value);
                            (t.target.value = i), a(e.questionId, i), d?.(e.questionId, (0, g.uG)(i));
                        },
                        onBlur: () => u?.(e.questionId),
                    }),
                })
              : "NUMBER" === q
                ? (0, s.v)("div", {
                      class: "IncodeDynamicFormsField",
                      children: (0, s.v)(c.t, {
                          id: h,
                          "data-testid": h,
                          name: e.questionId,
                          label: y,
                          labelHint: r,
                          type: "number",
                          inputMode: "numeric",
                          value: t,
                          required: F,
                          error: o,
                          showErrorIcon: !!o,
                          disabled: i,
                          onInput: (t) => {
                              let i = t.target.value.replace(/[^0-9]/g, "");
                              a(e.questionId, i);
                          },
                          onBlur: () => u?.(e.questionId),
                      }),
                  })
                : (0, s.v)("div", {
                      class: "IncodeDynamicFormsField",
                      children: (0, s.v)(c.t, {
                          id: h,
                          "data-testid": h,
                          name: e.questionId,
                          label: y,
                          labelHint: r,
                          type: "text",
                          value: t,
                          required: F,
                          autocomplete: b,
                          error: o,
                          showErrorIcon: !!o,
                          disabled: i,
                          onInput: (t) => a(e.questionId, t.target.value),
                          onBlur: () => u?.(e.questionId),
                      }),
                  });
    },
    b = ({
        screen: e,
        answers: t,
        validationErrors: i,
        canSubmit: o,
        isSubmitting: r = !1,
        onAnswerChange: l,
        onAnswerValidityChange: c,
        onValidateField: m,
        onSubmit: v,
    }) => {
        let { t: I } = (0, n.n)(),
            q = e.hideTitle ? void 0 : e.title || I("dynamicForms.title"),
            p = (0, s.m)(),
            g = e.title || I("dynamicForms.title"),
            y = (0, s.d)(() => (0, h.n)(e.questions.map((e) => !e.isOptional)), [e]);
        return (0, s.v)(d.t, {
            className: "IncodeDynamicFormsPage",
            title: q,
            titleId: q ? p : void 0,
            hideFooterBranding: !0,
            children: [
                (0, s.v)(a.r, { size: 32 }),
                r &&
                    (0, s.v)("div", {
                        role: "status",
                        "aria-live": "polite",
                        class: "IncodeSrOnly",
                        children: I("common.processing"),
                    }),
                (0, s.v)("form", {
                    class: "IncodeDynamicFormsForm",
                    onSubmit: (e) => {
                        e.preventDefault(), v();
                    },
                    "aria-labelledby": q ? p : void 0,
                    "aria-label": q ? void 0 : g,
                    "aria-busy": r || void 0,
                    children: [
                        e.questions.map((e) => {
                            let n = i?.[e.questionId],
                                o = (0, h.t)(y, !e.isOptional),
                                a = o ? (I(`forms.label.${o}`) ?? void 0) : void 0;
                            return (0, s.v)(
                                F,
                                {
                                    question: e,
                                    value: t[e.questionId] ?? "",
                                    disabled: r,
                                    error: n ? I(n) : void 0,
                                    labelHint: a,
                                    onChange: l,
                                    onFormatValidityChange: c,
                                    onBlur: m,
                                },
                                e.questionId,
                            );
                        }),
                        (0, s.v)(u.t, {
                            type: "submit",
                            "data-testid": "dynamic-forms-submit",
                            disabled: !o,
                            isLoading: r,
                            children: I("common.continue"),
                        }),
                    ],
                }),
            ],
        });
    },
    f = ({ config: e, manager: t, onFinish: i }) => {
        let { t: r } = (0, n.n)(),
            [a, d] = (0, o.u)(
                () => {
                    if (t) return t;
                    if (!e) throw Error("DynamicForms config is required");
                    return (0, y.q)({ config: e });
                },
                { manageLifecycle: !t, autoLoad: !0 },
            );
        if (
            ((0, o.c)({ status: "closed" === a.status ? "finished" : a.status, onFinish: i }),
            "idle" === a.status || "loadingScreens" === a.status)
        )
            return (0, s.v)(l.t, { status: "submitting", submittingTitle: r("common.loading") });
        if ("inputting" === a.status || "submitting" === a.status) {
            let e = "submitting" === a.status,
                t = "inputting" === a.status && a.canSubmit;
            return (0, s.v)(
                b,
                {
                    screen: a.currentScreen,
                    answers: a.answers,
                    validationErrors: a.validationErrors,
                    canSubmit: t,
                    isSubmitting: e,
                    onAnswerChange: (e, t) => d.setAnswer(e, t),
                    onAnswerValidityChange: (e, t) => d.setAnswerValidity(e, t),
                    onValidateField: (e) => d.validateField(e),
                    onSubmit: () => d.submit(),
                },
                a.screenIndex,
            );
        }
        return "success" === a.status
            ? (0, s.v)(l.t, { status: "success", successTitle: r("dynamicForms.success") })
            : "misconfigured" === a.status
              ? (0, s.v)(l.t, {
                    status: "failure",
                    failureTitle: r("dynamicForms.misconfigured"),
                    onSkip: () => d.close(),
                    skipLabel: r("common.close"),
                })
              : "finished" === a.status || "closed" === a.status
                ? null
                : void 0;
    },
    E = ({ config: e, manager: t, onFinish: i }) =>
        (0, s.v)(r.t, { children: e || t ? (0, s.v)(f, { config: e, manager: t, onFinish: i }) : null });
(0, q.t)(E, "incode-dynamic-forms");
