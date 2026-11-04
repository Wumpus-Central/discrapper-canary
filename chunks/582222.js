i.r(t);
var n = i(783285),
    s = i(768611),
    a = i(200503),
    r = i(628926),
    o = i(242268),
    d = i(326144),
    u = i(264957),
    l = i(503679),
    c = i(936391),
    m = i(910276),
    v = i(269174),
    I = i(806002),
    h = i(918676),
    q = i(611797),
    p = i(598976),
    F = i(581736),
    g = i(170831),
    y = ({
        question: e,
        value: t,
        disabled: i = !1,
        error: a,
        labelHint: r,
        onChange: o,
        onFormatValidityChange: d,
        onBlur: u,
    }) => {
        let { t: l } = (0, n.n)(),
            h = e.inputType ?? e.overrides ?? "TEXT",
            q = `dynamic-form-${e.questionId}`,
            g = e.question,
            y = !e.isOptional,
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
            })(h),
            f = "COUNTRY" === h || "NATIONALITY" === h,
            E = (0, s.d)(
                () => (f ? m.n.map((e) => ({ value: e.code, label: `${e.emoji} ${e.name}`, ariaLabel: e.name })) : []),
                [f],
            );
        if ("YESNO" === h) {
            let n = [
                { value: "YES", label: l("common.yes") },
                { value: "NO", label: l("common.no") },
            ];
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(v.t, {
                    id: q,
                    "data-testid": q,
                    name: e.questionId,
                    label: g,
                    labelHint: r,
                    value: t,
                    options: n,
                    required: y,
                    error: a,
                    disabled: i,
                    onChange: (t) => o(e.questionId, t),
                    onBlur: () => u?.(e.questionId),
                }),
            });
        }
        if ("DATE" === h)
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(I.t, {
                    id: q,
                    "data-testid": q,
                    name: e.questionId,
                    label: g,
                    labelHint: r,
                    value: t,
                    required: y,
                    autocomplete: b,
                    error: a,
                    showErrorIcon: !!a,
                    disabled: i,
                    onInput: (t) => o(e.questionId, t.target.value),
                    onBlur: () => u?.(e.questionId),
                }),
            });
        if ("PHONE" === h)
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                onFocusOut: () => u?.(e.questionId),
                children: (0, s.v)(m.t, {
                    id: q,
                    "data-testid": q,
                    label: g,
                    labelHint: r,
                    value: t,
                    required: y,
                    autocomplete: b,
                    error: a,
                    showErrorIcon: !!a,
                    disabled: i,
                    onChange: (t, i) => {
                        (o(e.questionId, t), d?.(e.questionId, i));
                    },
                }),
            });
        if ("COUNTRY" === h || "NATIONALITY" === h)
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(v.t, {
                    id: q,
                    "data-testid": q,
                    label: g,
                    labelHint: r,
                    value: t,
                    options: E,
                    searchable: !0,
                    required: y,
                    error: a,
                    disabled: i,
                    onChange: (t) => o(e.questionId, t),
                    onBlur: () => u?.(e.questionId),
                }),
            });
        if ("SELECT" === h || "MULTISELECT" === h) {
            let n = (e.options ?? []).map((e) => ({ value: e, label: e }));
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(v.t, {
                    id: q,
                    "data-testid": q,
                    label: g,
                    labelHint: r,
                    value: t,
                    options: n,
                    searchable: n.length > 5,
                    required: y,
                    error: a,
                    disabled: i,
                    onChange: (t) => o(e.questionId, t),
                    onBlur: () => u?.(e.questionId),
                }),
            });
        }
        return "EMAIL" === h
            ? (0, s.v)("div", {
                  class: "IncodeDynamicFormsField",
                  children: (0, s.v)(p.t, {
                      id: q,
                      "data-testid": q,
                      value: t,
                      emailError: a,
                      label: g,
                      labelHint: r,
                      required: y,
                      disabled: i,
                      onEmailChange: (t, i) => {
                          (o(e.questionId, t), d?.(e.questionId, i));
                      },
                      onBlur: () => u?.(e.questionId),
                  }),
              })
            : "CPF" === h
              ? (0, s.v)("div", {
                    class: "IncodeDynamicFormsField",
                    children: (0, s.v)(c.t, {
                        id: q,
                        "data-testid": q,
                        name: e.questionId,
                        label: g,
                        labelHint: r,
                        inputMode: "numeric",
                        maxLength: 14,
                        value: t,
                        required: y,
                        error: a,
                        showErrorIcon: !!a,
                        disabled: i,
                        onInput: (t) => {
                            let i = (0, F.formatCPF)(t.target.value);
                            ((t.target.value = i), o(e.questionId, i), d?.(e.questionId, (0, F.isValidCPF)(i)));
                        },
                        onBlur: () => u?.(e.questionId),
                    }),
                })
              : "NUMBER" === h
                ? (0, s.v)("div", {
                      class: "IncodeDynamicFormsField",
                      children: (0, s.v)(c.t, {
                          id: q,
                          "data-testid": q,
                          name: e.questionId,
                          label: g,
                          labelHint: r,
                          type: "number",
                          inputMode: "numeric",
                          value: t,
                          required: y,
                          error: a,
                          showErrorIcon: !!a,
                          disabled: i,
                          onInput: (t) => {
                              let i = t.target.value.replace(/[^0-9]/g, "");
                              o(e.questionId, i);
                          },
                          onBlur: () => u?.(e.questionId),
                      }),
                  })
                : (0, s.v)("div", {
                      class: "IncodeDynamicFormsField",
                      children: (0, s.v)(c.t, {
                          id: q,
                          "data-testid": q,
                          name: e.questionId,
                          label: g,
                          labelHint: r,
                          type: "text",
                          value: t,
                          required: y,
                          autocomplete: b,
                          error: a,
                          showErrorIcon: !!a,
                          disabled: i,
                          onInput: (t) => o(e.questionId, t.target.value),
                          onBlur: () => u?.(e.questionId),
                      }),
                  });
    },
    b = ({
        screen: e,
        answers: t,
        validationErrors: i,
        canSubmit: a,
        isSubmitting: r = !1,
        onAnswerChange: l,
        onAnswerValidityChange: c,
        onValidateField: m,
        onSubmit: v,
    }) => {
        let { t: I } = (0, n.n)(),
            h = e.hideTitle ? void 0 : e.title || I("dynamicForms.title"),
            p = (0, s.m)(),
            F = e.title || I("dynamicForms.title"),
            g = (0, s.d)(() => (0, q.n)(e.questions.map((e) => !e.isOptional)), [e]);
        return (0, s.v)(d.t, {
            className: "IncodeDynamicFormsPage",
            title: h,
            titleId: h ? p : void 0,
            hideFooterBranding: !0,
            children: [
                (0, s.v)(o.r, { size: 32 }),
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
                        (e.preventDefault(), v());
                    },
                    "aria-labelledby": h ? p : void 0,
                    "aria-label": h ? void 0 : F,
                    "aria-busy": r || void 0,
                    children: [
                        e.questions.map((e) => {
                            let n = i?.[e.questionId],
                                a = (0, q.t)(g, !e.isOptional),
                                o = a ? (I(`forms.label.${a}`) ?? void 0) : void 0;
                            return (0, s.v)(
                                y,
                                {
                                    question: e,
                                    value: t[e.questionId] ?? "",
                                    disabled: r,
                                    error: n ? I(n) : void 0,
                                    labelHint: o,
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
                            disabled: !a,
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
            [o, d] = (0, a.u)(
                () => {
                    if (t) return t;
                    if (!e) throw Error("DynamicForms config is required");
                    return (0, g.createDynamicFormsManager)({ config: e });
                },
                { manageLifecycle: !t, autoLoad: !0 },
            );
        if (
            ((0, a.c)({ status: "closed" === o.status ? "finished" : o.status, onFinish: i }),
            "idle" === o.status || "loadingScreens" === o.status)
        )
            return (0, s.v)(l.t, { status: "submitting", submittingTitle: r("common.loading") });
        if ("inputting" === o.status || "submitting" === o.status) {
            let e = "submitting" === o.status,
                t = "inputting" === o.status && o.canSubmit;
            return (0, s.v)(
                b,
                {
                    screen: o.currentScreen,
                    answers: o.answers,
                    validationErrors: o.validationErrors,
                    canSubmit: t,
                    isSubmitting: e,
                    onAnswerChange: (e, t) => d.setAnswer(e, t),
                    onAnswerValidityChange: (e, t) => d.setAnswerValidity(e, t),
                    onValidateField: (e) => d.validateField(e),
                    onSubmit: () => d.submit(),
                },
                o.screenIndex,
            );
        }
        return "success" === o.status
            ? (0, s.v)(l.t, { status: "success", successTitle: r("dynamicForms.success") })
            : "misconfigured" === o.status
              ? (0, s.v)(l.t, {
                    status: "failure",
                    failureTitle: r("dynamicForms.misconfigured"),
                    onSkip: () => d.close(),
                    skipLabel: r("common.close"),
                })
              : "finished" === o.status || "closed" === o.status
                ? null
                : void 0;
    },
    E = ({ config: e, manager: t, onFinish: i }) =>
        (0, s.v)(r.t, { children: e || t ? (0, s.v)(f, { config: e, manager: t, onFinish: i }) : null });
((0, h.t)(E, "incode-dynamic-forms"), i.d(t, {}, { DynamicForms: E }));
