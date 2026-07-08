i.d(n, { DynamicForms: () => E });
var t = i(31144),
    s = i(248702),
    a = i(899656),
    o = i(458741),
    r = i(517e3),
    d = i(727571),
    l = i(242003),
    u = i(590875),
    c = i(489771),
    m = i(967325),
    v = i(368697),
    h = i(129028),
    I = i(971052),
    g = i(868282),
    p = i(221491),
    b = i(21603),
    F = i(586966);
function f(e) {
    return e.inputType ?? e.overrides ?? "TEXT";
}
var q = ({
        question: e,
        value: n,
        disabled: i = !1,
        onChange: t,
        onPhoneChange: a,
        onPhoneBlur: o,
        phoneError: r,
        onEmailChange: d,
        onEmailBlur: l,
        emailError: u,
        onCpfChange: g,
        onCpfBlur: F,
        cpfError: q,
    }) => {
        let C = f(e),
            y = `dynamic-form-${e.questionId}`,
            E = e.isOptional ? e.question : `* ${e.question}`,
            w = "COUNTRY" === C || "NATIONALITY" === C,
            T = (0, s.d)(
                () => (w ? v.n.map((e) => ({ value: e.code, label: `${e.emoji} ${e.name}`, ariaLabel: e.name })) : []),
                [w],
            );
        if ("YESNO" === C)
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(m.t, {
                    id: y,
                    name: e.questionId,
                    label: E,
                    checked: "YES" === n,
                    disabled: i,
                    onChange: (n) => t(e.questionId, n.target.checked ? "YES" : "NO"),
                }),
            });
        if ("DATE" === C)
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(I.t, {
                    id: y,
                    name: e.questionId,
                    label: E,
                    value: n,
                    disabled: i,
                    onInput: (n) => t(e.questionId, n.target.value),
                }),
            });
        if ("PHONE" === C)
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                onFocusOut: () => o?.(e.questionId),
                children: (0, s.v)(v.t, {
                    id: y,
                    label: E,
                    value: n,
                    error: r,
                    showErrorIcon: !!r,
                    disabled: i,
                    onChange: (n, i) => a?.(e.questionId, n, i),
                }),
            });
        if ("COUNTRY" === C || "NATIONALITY" === C)
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(h.t, {
                    id: y,
                    label: E,
                    value: n,
                    options: T,
                    searchable: !0,
                    disabled: i,
                    onChange: (n) => t(e.questionId, n),
                }),
            });
        if ("SELECT" === C || "MULTISELECT" === C) {
            let a = (e.options ?? []).map((e) => ({ value: e, label: e }));
            return (0, s.v)("div", {
                class: "IncodeDynamicFormsField",
                children: (0, s.v)(h.t, {
                    id: y,
                    label: E,
                    value: n,
                    options: a,
                    searchable: a.length > 5,
                    disabled: i,
                    onChange: (n) => t(e.questionId, n),
                }),
            });
        }
        return "EMAIL" === C
            ? (0, s.v)("div", {
                  class: "IncodeDynamicFormsField",
                  children: (0, s.v)(p.t, {
                      value: n,
                      emailError: u,
                      label: E,
                      disabled: i,
                      onEmailChange: (n, i) => {
                          t(e.questionId, n), d?.(e.questionId, n, i);
                      },
                      onBlur: () => l?.(e.questionId),
                  }),
              })
            : "CPF" === C
              ? (0, s.v)("div", {
                    class: "IncodeDynamicFormsField",
                    children: (0, s.v)(c.t, {
                        id: y,
                        name: e.questionId,
                        label: E,
                        inputMode: "numeric",
                        maxLength: 14,
                        value: n,
                        error: q,
                        showErrorIcon: !!q,
                        disabled: i,
                        onInput: (n) => {
                            let i = (0, b.bb)(n.target.value);
                            (n.target.value = i), t(e.questionId, i), g?.(e.questionId, i);
                        },
                        onBlur: () => F?.(e.questionId),
                    }),
                })
              : "NUMBER" === C
                ? (0, s.v)("div", {
                      class: "IncodeDynamicFormsField",
                      children: (0, s.v)(c.t, {
                          id: y,
                          name: e.questionId,
                          label: E,
                          type: "number",
                          inputMode: "numeric",
                          value: n,
                          disabled: i,
                          onInput: (n) => {
                              let i = n.target.value.replace(/[^0-9]/g, "");
                              t(e.questionId, i);
                          },
                      }),
                  })
                : (0, s.v)("div", {
                      class: "IncodeDynamicFormsField",
                      children: (0, s.v)(c.t, {
                          id: y,
                          name: e.questionId,
                          label: E,
                          type: "text",
                          value: n,
                          disabled: i,
                          onInput: (n) => t(e.questionId, n.target.value),
                      }),
                  });
    },
    C = ({
        screen: e,
        answers: n,
        answerValidity: i,
        canSubmit: a,
        isSubmitting: o = !1,
        onAnswerChange: u,
        onAnswerValidityChange: c,
        onSubmit: m,
    }) => {
        let { t: v } = (0, t.n)(),
            [h, I] = (0, s.p)({}),
            [g, p] = (0, s.p)({}),
            [b, F] = (0, s.p)({}),
            [C, y] = (0, s.p)({}),
            [E, w] = (0, s.p)({}),
            [T, S] = (0, s.p)({});
        return (
            (0, s._)(() => {
                I({}), p({}), F({}), y({}), w({}), S({});
            }, [e]),
            (0, s.v)(d.t, {
                className: "IncodeDynamicFormsPage",
                title: e.hideTitle ? void 0 : e.title || v("dynamicForms.title"),
                hideFooterBranding: !0,
                children: [
                    (0, s.v)(r.r, { size: 32 }),
                    (0, s.v)("form", {
                        class: "IncodeDynamicFormsForm",
                        onSubmit: (e) => {
                            e.preventDefault(), m();
                        },
                        autoComplete: "off",
                        children: [
                            e.questions.map((e) => {
                                let t = f(e),
                                    a = i[e.questionId],
                                    r =
                                        "PHONE" === t && h[e.questionId] && g[e.questionId] && !1 === a
                                            ? v("phone.invalidPhone")
                                            : void 0,
                                    d =
                                        "EMAIL" === t && b[e.questionId] && C[e.questionId] && !1 === a
                                            ? v("verification.errors.emailInvalid")
                                            : void 0,
                                    l =
                                        "CPF" === t && E[e.questionId] && T[e.questionId] && !1 === a
                                            ? v("dynamicForms.invalidCpf")
                                            : void 0;
                                return (0, s.v)(
                                    q,
                                    {
                                        question: e,
                                        value: n[e.questionId] ?? "",
                                        disabled: o,
                                        onChange: u,
                                        onPhoneChange: (e, n, i) => {
                                            u(e, n), c(e, i), I((n) => ({ ...n, [e]: !0 }));
                                        },
                                        onPhoneBlur: (e) => p((n) => ({ ...n, [e]: !0 })),
                                        phoneError: r,
                                        onEmailChange: (e, n, i) => {
                                            c(e, i), F((n) => ({ ...n, [e]: !0 }));
                                        },
                                        onEmailBlur: (e) => y((n) => ({ ...n, [e]: !0 })),
                                        emailError: d,
                                        onCpfChange: (e) => {
                                            w((n) => ({ ...n, [e]: !0 }));
                                        },
                                        onCpfBlur: (e) => S((n) => ({ ...n, [e]: !0 })),
                                        cpfError: l,
                                    },
                                    e.questionId,
                                );
                            }),
                            (0, s.v)(l.t, {
                                type: "submit",
                                disabled: !a,
                                isLoading: o,
                                children: v("common.continue"),
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    y = ({ config: e, manager: n, onFinish: i }) => {
        let { t: o } = (0, t.n)(),
            [r, d] = (0, a.o)(
                () => {
                    if (n) return n;
                    if (!e) throw Error("DynamicForms config is required");
                    return (0, F.q)({ config: e });
                },
                { manageLifecycle: !n, autoLoad: !0 },
            );
        if (
            ((0, s._)(() => {
                ("finished" === r.status || "closed" === r.status) && i?.();
            }, [r.status, i]),
            "idle" === r.status || "loadingScreens" === r.status)
        )
            return (0, s.v)(u.t, {
                status: "submitting",
                submittingTitle: o("common.loading"),
                hideFooterBranding: !0,
            });
        if ("inputting" === r.status || "submitting" === r.status) {
            let e = "submitting" === r.status,
                n = "inputting" === r.status && r.canSubmit;
            return (0, s.v)(C, {
                screen: r.currentScreen,
                answers: r.answers,
                answerValidity: r.answerValidity,
                canSubmit: n,
                isSubmitting: e,
                onAnswerChange: (e, n) => d.setAnswer(e, n),
                onAnswerValidityChange: (e, n) => d.setAnswerValidity(e, n),
                onSubmit: () => d.submit(),
            });
        }
        return "success" === r.status
            ? (0, s.v)(u.t, { status: "success", successTitle: o("dynamicForms.success"), hideFooterBranding: !0 })
            : "misconfigured" === r.status
              ? (0, s.v)(u.t, {
                    status: "failure",
                    failureTitle: o("dynamicForms.misconfigured"),
                    onSkip: () => d.close(),
                    skipLabel: o("common.close"),
                    hideFooterBranding: !0,
                })
              : "finished" === r.status || "closed" === r.status
                ? null
                : void 0;
    },
    E = ({ config: e, manager: n, onFinish: i }) =>
        (0, s.v)(o.t, { children: e || n ? (0, s.v)(y, { config: e, manager: n, onFinish: i }) : null });
(0, g.t)(E, "incode-dynamic-forms");
