t.d(r, { CurpValidation: () => P });
var a = t(31144),
    n = t(248702),
    i = t(899656),
    l = t(458741),
    o = t(517e3),
    u = t(727571),
    d = t(321724),
    s = t(242003),
    c = t(288552),
    p = t(886567),
    h = t(489771),
    v = t(129028);
t(713834);
var b = t(971052);
t(994187);
var C = t(868282),
    g = t(901510),
    f = t(282511),
    m = t(457274),
    y = ({
        curp: e,
        errorKey: r,
        onCurpChange: t,
        onCurpBlur: i,
        onVerify: l,
        onSwitchToGenerate: u,
        disabled: d = !1,
        placeholder: c,
        continueLabel: p,
        dontHaveLabel: v,
    }) => {
        let { t: b } = (0, a.n)(),
            C = c ?? b("curp.placeholder.curp") ?? "CURP",
            g = p ?? b("curp.continue") ?? "Continue",
            f = v ?? b("curp.dontHave") ?? "I don't have my CURP",
            m = r ? b(r) : void 0,
            y = 0 === e.length || !!m || d;
        return (0, n.v)("div", {
            class: "IncodeCurpValidation IncodeCurpInput",
            children: [
                (0, n.v)(h.t, {
                    id: "curp-input",
                    value: e,
                    onInput: (e) => {
                        t(e.target.value.toUpperCase());
                    },
                    onBlur: i,
                    placeholder: C,
                    disabled: d,
                    required: !0,
                    maxLength: 18,
                    "aria-label": b("curp.placeholder.curp") ?? "CURP",
                    error: m,
                    showErrorIcon: !!m,
                }),
                (0, n.v)(o.r, {}),
                (0, n.v)(s.t, { type: "button", onClick: l, disabled: y, "data-testid": "curp-verify", children: g }),
                (0, n.v)(s.t, {
                    type: "button",
                    variant: "secondary",
                    onClick: u,
                    disabled: d,
                    "data-testid": "curp-switch-to-generate",
                    children: f,
                }),
            ],
        });
    },
    k = ({
        form: e,
        validationErrors: r,
        onFormChange: t,
        onValidateField: i,
        onGenerate: l,
        disabled: u = !1,
        labels: d,
    }) => {
        let { t: c } = (0, a.n)(),
            p = {
                firstName: c("curp.labels.firstName") ?? "Your First name",
                firstLast: c("curp.labels.firstLast") ?? "Your First last name",
                secondLast: c("curp.labels.secondLast") ?? "Your Second last name",
                gender: c("curp.labels.genderV2") ?? "Gender",
                genderPlaceholder: c("curp.placeholder.gender") ?? "Choose gender",
                male: c("curp.labels.maleV2") ?? "Male",
                female: c("curp.labels.femaleV2") ?? "Female",
                other: c("curp.labels.other") ?? "Other",
                dob: c("curp.labels.dob") ?? "Date of birth",
                birthState: c("curp.labels.birthState") ?? "State of birth",
                statePlaceholder: c("curp.placeholder.state") ?? "Select state",
                generate: c("curp.generateCta") ?? "Generate CURP",
                ...d,
            },
            C = (0, n.d)(() => (0, g.n)(m.h9.map((e) => e.required)), []),
            f = !!r && Object.keys(r).length > 0,
            y = (e) => (r) => {
                t({ [e]: r.target.value });
            },
            k = (e) => () => {
                i(e);
            },
            I = [
                { value: "H", label: p.male },
                { value: "M", label: p.female },
                { value: "X", label: p.other },
            ],
            P = m.eI.map((e) => ({ value: e.value, label: e.label }));
        return (0, n.v)("div", {
            class: "IncodeCurpValidation IncodeGenerateCurpForm",
            children: [
                m.h9.map((a) => {
                    let i = (0, g.t)(C, a.required),
                        l = i ? (c(`forms.label.${i}`) ?? void 0) : void 0,
                        o = r?.[a.key],
                        d = o ? (c(o) ?? void 0) : void 0,
                        s = ((e) => {
                            switch (e) {
                                case "name":
                                    return p.firstName;
                                case "firstLastName":
                                    return p.firstLast;
                                case "secondLastName":
                                    return p.secondLast;
                                case "gender":
                                    return p.gender;
                                case "birthDate":
                                    return p.dob;
                                case "birthState":
                                    return p.birthState;
                            }
                        })(a.key);
                    if ("dropdown" === a.type) {
                        let r = "gender" === a.key ? I : P,
                            i = "gender" === a.key ? p.genderPlaceholder : p.statePlaceholder;
                        return (0, n.v)(
                            v.t,
                            {
                                id: `curp-${"birthState" === a.key ? "birth-state" : "gender"}`,
                                label: s,
                                labelHint: l,
                                placeholder: i,
                                value: e[a.key],
                                options: r,
                                disabled: u,
                                required: a.required,
                                onChange: (e) => {
                                    "gender" === a.key ? t({ gender: e }) : t({ [a.key]: e });
                                },
                                onBlur: k(a.key),
                                error: d,
                                showErrorIcon: !!d,
                                "data-testid": "gender" === a.key ? "curp-gender" : "curp-birth-state",
                                ...("birthState" === a.key ? { searchable: !0 } : {}),
                            },
                            a.key,
                        );
                    }
                    return "date" === a.type
                        ? (0, n.v)(
                              b.t,
                              {
                                  id: "curp-birth-date",
                                  label: s,
                                  labelHint: l,
                                  value: e.birthDate,
                                  onInput: y("birthDate"),
                                  onBlur: k("birthDate"),
                                  max: new Date().toISOString().split("T")[0],
                                  placeholder: c("curp.placeholder.dob") ?? "mm/dd/yyyy",
                                  disabled: u,
                                  required: a.required,
                                  error: d,
                                  showErrorIcon: !!d,
                                  "data-testid": "curp-birth-date",
                              },
                              a.key,
                          )
                        : (0, n.v)(
                              h.t,
                              {
                                  id:
                                      "name" === a.key
                                          ? "curp-first-name"
                                          : "firstLastName" === a.key
                                            ? "curp-first-last"
                                            : "curp-second-last",
                                  label: s,
                                  labelHint: l,
                                  value: e[a.key],
                                  onInput: y(a.key),
                                  onBlur: k(a.key),
                                  placeholder: s,
                                  disabled: u,
                                  required: a.required,
                                  error: d,
                                  showErrorIcon: !!d,
                                  ...(a.autoComplete ? { autoComplete: a.autoComplete } : {}),
                              },
                              a.key,
                          );
                }),
                (0, n.v)(o.r, { size: 16 }),
                (0, n.v)(s.t, {
                    type: "button",
                    onClick: l,
                    disabled: f || u,
                    "data-testid": "curp-generate",
                    children: p.generate,
                }),
            ],
        });
    },
    I = ({ config: e, onFinish: r, onError: t }) => {
        let { t: l } = (0, a.n)(),
            [v, b] = (0, i.o)(() => {
                if (!e) throw Error("CURP validation config is required");
                return (0, m.pX)({ config: e });
            });
        if ("idle" === v.status || "loading" === v.status || "verifying" === v.status || "generating" === v.status)
            return (0, n.v)(d.t, {
                spinnerConfig: {
                    title:
                        "generating" === v.status
                            ? (l("curp.status.generating") ?? "Generating...")
                            : (l("curp.status.verifying") ?? "Verifying..."),
                },
            });
        if ("enterCurp" === v.status)
            return (0, n.v)(u.t, {
                className: "IncodeCurpValidationPage",
                title: l("curp.enterCurp") ?? "Enter your CURP",
                children: (0, n.v)(y, {
                    curp: v.curp,
                    errorKey: v.validationErrors?.curp,
                    onCurpChange: (e) => b.setCurp(e),
                    onCurpBlur: () => b.validateField("curp"),
                    onVerify: () => b.verify(),
                    onSwitchToGenerate: () => b.switchToGenerate(),
                    placeholder: l("curp.placeholder.curp") ?? "CURP",
                    continueLabel: l("curp.continue") ?? "Continue",
                    dontHaveLabel: l("curp.dontHave") ?? "I don't have my CURP",
                }),
            });
        if ("generateCurp" === v.status)
            return (0, n.v)(u.t, {
                className: "IncodeCurpValidationPage",
                title: l("curp.generate") ?? "Generate your CURP",
                hideFooterBranding: !0,
                children: (0, n.v)(k, {
                    form: v.form,
                    validationErrors: v.validationErrors,
                    onFormChange: (e) => b.setGenerateForm(e),
                    onValidateField: (e) => b.validateField(e),
                    onGenerate: () => b.generate(),
                }),
            });
        if ("confirmCurp" === v.status)
            return (0, n.v)(u.t, {
                className: "IncodeCurpValidationPage",
                title: l("curp.status.confirm") ?? "Confirm your CURP",
                children: (0, n.v)("div", {
                    class: "IncodeCurpValidation IncodeCurpConfirm",
                    children: [
                        (0, n.v)(h.t, {
                            id: "curp-confirm-input",
                            value: v.curp,
                            readOnly: !0,
                            "aria-label": l("curp.status.generatedCurp") ?? "Generated CURP",
                            "data-testid": "curp-confirm-input",
                        }),
                        (0, n.v)(o.r, {}),
                        (0, n.v)(s.t, {
                            type: "button",
                            onClick: () => b.confirmGenerated(),
                            "data-testid": "curp-confirm",
                            children: l("curp.continue") ?? "Continue",
                        }),
                    ],
                }),
            });
        if ("success" === v.status)
            return (0, n.v)(u.t, {
                className: "IncodeCurpValidationPage",
                children: (0, n.v)("div", {
                    class: "IncodeCurpValidation IncodeCurpSuccess",
                    children: [
                        (0, n.v)(p.t, { size: 64 }),
                        (0, n.v)(o.r, { size: 16 }),
                        (0, n.v)(f.t, {
                            className: "IncodeCurpSuccessTitle",
                            children: l("curp.status.verified") ?? "Verified",
                        }),
                    ],
                }),
            });
        if ("failure" === v.status || "generateError" === v.status) {
            let e = v.retriesLeft > 0,
                r =
                    "failure" === v.status
                        ? (l("curp.status.notVerified") ?? "Not verified")
                        : (l("curp.status.couldntGenerate") ?? "Couldn't generate CURP");
            return (0, n.v)(u.t, {
                className: "IncodeCurpValidationPage",
                children: (0, n.v)("div", {
                    class: "IncodeCurpValidation IncodeCurpFailure",
                    children: [
                        (0, n.v)(o.r, {}),
                        (0, n.v)(c.g, { size: 64 }),
                        (0, n.v)(o.r, { size: 16 }),
                        (0, n.v)(f.t, { className: "IncodeCurpFailureTitle", children: r }),
                        "generateError" === v.status &&
                            e &&
                            (0, n.v)(n.S, {
                                children: [
                                    (0, n.v)(o.r, { size: 12 }),
                                    (0, n.v)("p", {
                                        class: "IncodeCurpFailureHint",
                                        role: "alert",
                                        children: l("curp.status.checkInfo") ?? "Please check your information",
                                    }),
                                ],
                            }),
                        (0, n.v)(o.r, {}),
                        e &&
                            (0, n.v)(n.S, {
                                children: (0, n.v)(s.t, {
                                    type: "button",
                                    onClick: () => b.retry(),
                                    "data-testid": "curp-retry",
                                    children:
                                        "failure" === v.status
                                            ? (l("curp.status.tryAgain") ?? "Try again")
                                            : (l("curp.status.edit") ?? "Edit information"),
                                }),
                            }),
                    ],
                }),
            });
        }
        return "finished" === v.status ? r?.() : "closed" === v.status && t?.(void 0), null;
    },
    P = ({ config: e, onFinish: r, onError: t }) =>
        (0, n.v)(l.t, { children: e ? (0, n.v)(I, { config: e, onFinish: r, onError: t }) : null });
(0, C.t)(P, "incode-curp-validation");
