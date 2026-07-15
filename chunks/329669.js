t.d(r, { CurpValidation: () => P });
var a = t(529058),
    n = t(287822),
    i = t(748922),
    u = t(898159),
    l = t(898369),
    o = t(188043),
    s = t(486234),
    c = t(787146),
    d = t(606742);
t(748158);
var p = t(430671),
    v = t(34050),
    h = t(96798),
    C = t(843641);
t(599452);
var f = t(98259);
t(796338);
var g = t(296767),
    m = t(120916),
    b = t(431835),
    y = ({
        curp: e,
        errorKey: r,
        onCurpChange: t,
        onCurpBlur: i,
        onVerify: u,
        onSwitchToGenerate: o,
        disabled: s = !1,
        placeholder: d,
        continueLabel: p,
        dontHaveLabel: v,
    }) => {
        let { t: C } = (0, a.n)(),
            f = d ?? C("curp.placeholder.curp") ?? "CURP",
            g = p ?? C("curp.continue") ?? "Continue",
            m = v ?? C("curp.dontHave") ?? "I don't have my CURP",
            b = r ? C(r) : void 0,
            y = 0 === e.length || !!b || s;
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
                    placeholder: f,
                    disabled: s,
                    required: !0,
                    maxLength: 18,
                    "aria-label": C("curp.placeholder.curp") ?? "CURP",
                    error: b,
                    showErrorIcon: !!b,
                }),
                (0, n.v)(l.r, {}),
                (0, n.v)(c.t, { type: "button", onClick: u, disabled: y, "data-testid": "curp-verify", children: g }),
                (0, n.v)(c.t, {
                    type: "button",
                    variant: "secondary",
                    onClick: o,
                    disabled: s,
                    "data-testid": "curp-switch-to-generate",
                    children: m,
                }),
            ],
        });
    },
    k = ({
        form: e,
        validationErrors: r,
        onFormChange: t,
        onValidateField: i,
        onGenerate: u,
        disabled: o = !1,
        labels: s,
    }) => {
        let { t: d } = (0, a.n)(),
            p = {
                firstName: d("curp.labels.firstName") ?? "Your First name",
                firstLast: d("curp.labels.firstLast") ?? "Your First last name",
                secondLast: d("curp.labels.secondLast") ?? "Your Second last name",
                gender: d("curp.labels.genderV2") ?? "Gender",
                genderPlaceholder: d("curp.placeholder.gender") ?? "Choose gender",
                male: d("curp.labels.maleV2") ?? "Male",
                female: d("curp.labels.femaleV2") ?? "Female",
                other: d("curp.labels.other") ?? "Other",
                dob: d("curp.labels.dob") ?? "Date of birth",
                birthState: d("curp.labels.birthState") ?? "State of birth",
                statePlaceholder: d("curp.placeholder.state") ?? "Select state",
                generate: d("curp.generateCta") ?? "Generate CURP",
                ...s,
            },
            v = (0, n.d)(() => (0, m.n)(b.h9.map((e) => e.required)), []),
            g = !!r && Object.keys(r).length > 0,
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
            P = b.eI.map((e) => ({ value: e.value, label: e.label }));
        return (0, n.v)("div", {
            class: "IncodeCurpValidation IncodeGenerateCurpForm",
            children: [
                b.h9.map((a) => {
                    let i = (0, m.t)(v, a.required),
                        u = i ? (d(`forms.label.${i}`) ?? void 0) : void 0,
                        l = r?.[a.key],
                        s = l ? (d(l) ?? void 0) : void 0,
                        c = ((e) => {
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
                            C.t,
                            {
                                id: `curp-${"birthState" === a.key ? "birth-state" : "gender"}`,
                                label: c,
                                labelHint: u,
                                placeholder: i,
                                value: e[a.key],
                                options: r,
                                disabled: o,
                                required: a.required,
                                onChange: (e) => {
                                    "gender" === a.key ? t({ gender: e }) : t({ [a.key]: e });
                                },
                                onBlur: k(a.key),
                                error: s,
                                showErrorIcon: !!s,
                                "data-testid": "gender" === a.key ? "curp-gender" : "curp-birth-state",
                                ...("birthState" === a.key ? { searchable: !0 } : {}),
                            },
                            a.key,
                        );
                    }
                    return "date" === a.type
                        ? (0, n.v)(
                              f.t,
                              {
                                  id: "curp-birth-date",
                                  label: c,
                                  labelHint: u,
                                  value: e.birthDate,
                                  onInput: y("birthDate"),
                                  onBlur: k("birthDate"),
                                  max: new Date().toISOString().split("T")[0],
                                  disabled: o,
                                  required: a.required,
                                  error: s,
                                  showErrorIcon: !!s,
                                  "data-testid": "curp-birth-date",
                                  ...(a.autoComplete ? { autoComplete: a.autoComplete } : {}),
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
                                  label: c,
                                  labelHint: u,
                                  value: e[a.key],
                                  onInput: y(a.key),
                                  onBlur: k(a.key),
                                  placeholder: c,
                                  disabled: o,
                                  required: a.required,
                                  error: s,
                                  showErrorIcon: !!s,
                                  ...(a.autoComplete ? { autoComplete: a.autoComplete } : {}),
                              },
                              a.key,
                          );
                }),
                (0, n.v)(l.r, { size: 16 }),
                (0, n.v)(c.t, {
                    type: "button",
                    onClick: u,
                    disabled: g || o,
                    "data-testid": "curp-generate",
                    children: p.generate,
                }),
            ],
        });
    },
    I = ({ config: e, manager: r, onFinish: t, onError: u }) => {
        let { t: C } = (0, a.n)(),
            [f, g] = (0, i.u)(
                () => {
                    if (r) return r;
                    if (!e) throw Error("CurpValidation config is required when no manager is provided");
                    return (0, b.pX)({ config: e });
                },
                { manageLifecycle: !r },
            );
        if (((0, i.c)({ status: f.status, onFinish: t, onError: u }), "idle" === f.status || "loading" === f.status))
            return (0, n.v)(s.t, { hideText: !0 });
        if ("verifying" === f.status || "generating" === f.status)
            return (0, n.v)(s.t, {
                spinnerConfig: {
                    title:
                        "generating" === f.status
                            ? (C("curp.status.generating") ?? "Generating...")
                            : (C("curp.status.verifying") ?? "Verifying..."),
                },
            });
        if ("enterCurp" === f.status)
            return (0, n.v)(o.t, {
                className: "IncodeCurpValidationPage",
                title: C("curp.enterCurp") ?? "Enter your CURP",
                children: (0, n.v)(y, {
                    curp: f.curp,
                    errorKey: f.validationErrors?.curp,
                    onCurpChange: (e) => g.setCurp(e),
                    onCurpBlur: () => g.validateField("curp"),
                    onVerify: () => g.verify(),
                    onSwitchToGenerate: () => g.switchToGenerate(),
                    placeholder: C("curp.placeholder.curp") ?? "CURP",
                    continueLabel: C("curp.continue") ?? "Continue",
                    dontHaveLabel: C("curp.dontHave") ?? "I don't have my CURP",
                }),
            });
        if ("generateCurp" === f.status)
            return (0, n.v)(o.t, {
                className: "IncodeCurpValidationPage",
                title: C("curp.generate") ?? "Generate your CURP",
                hideFooterBranding: !0,
                children: (0, n.v)(k, {
                    form: f.form,
                    validationErrors: f.validationErrors,
                    onFormChange: (e) => g.setGenerateForm(e),
                    onValidateField: (e) => g.validateField(e),
                    onGenerate: () => g.generate(),
                }),
            });
        if ("confirmCurp" === f.status)
            return (0, n.v)(o.t, {
                className: "IncodeCurpValidationPage",
                title: C("curp.status.confirm") ?? "Confirm your CURP",
                children: (0, n.v)("div", {
                    class: "IncodeCurpValidation IncodeCurpConfirm",
                    children: [
                        (0, n.v)(h.t, {
                            id: "curp-confirm-input",
                            value: f.curp,
                            readOnly: !0,
                            "aria-label": C("curp.status.generatedCurp") ?? "Generated CURP",
                            "data-testid": "curp-confirm-input",
                        }),
                        (0, n.v)(l.r, {}),
                        (0, n.v)(c.t, {
                            type: "button",
                            onClick: () => g.confirmGenerated(),
                            "data-testid": "curp-confirm",
                            children: C("curp.continue") ?? "Continue",
                        }),
                    ],
                }),
            });
        if ("success" === f.status)
            return (0, n.v)(o.t, {
                className: "IncodeCurpValidationPage",
                children: (0, n.v)("div", {
                    class: "IncodeCurpValidation IncodeCurpSuccess",
                    children: [
                        (0, n.v)(p.t, { size: 64 }),
                        (0, n.v)(l.r, { size: 16 }),
                        (0, n.v)(v.t, {
                            className: "IncodeCurpSuccessTitle",
                            children: C("curp.status.verified") ?? "Verified",
                        }),
                    ],
                }),
            });
        if ("failure" === f.status || "generateError" === f.status) {
            let e = f.retriesLeft > 0,
                r =
                    "failure" === f.status
                        ? (C("curp.status.notVerified") ?? "Not verified")
                        : (C("curp.status.couldntGenerate") ?? "Couldn't generate CURP"),
                t = C("failure" === f.status && f.fromAutoVerify ? "curp.verifyManually" : "curp.status.tryAgain");
            return (0, n.v)(o.t, {
                className: "IncodeCurpValidationPage",
                children: (0, n.v)("div", {
                    class: "IncodeCurpValidation IncodeCurpFailure",
                    children: [
                        (0, n.v)(l.r, {}),
                        (0, n.v)(d.t, { size: 64 }),
                        (0, n.v)(l.r, { size: 16 }),
                        (0, n.v)(v.t, { className: "IncodeCurpFailureTitle", children: r }),
                        "generateError" === f.status &&
                            e &&
                            (0, n.v)(n.x, {
                                children: [
                                    (0, n.v)(l.r, { size: 12 }),
                                    (0, n.v)("p", {
                                        class: "IncodeCurpFailureHint",
                                        role: "alert",
                                        children: C("curp.status.checkInfo") ?? "Please check your information",
                                    }),
                                ],
                            }),
                        (0, n.v)(l.r, {}),
                        e &&
                            (0, n.v)(n.x, {
                                children: (0, n.v)(c.t, {
                                    type: "button",
                                    onClick: () => g.retry(),
                                    "data-testid": "curp-retry",
                                    children:
                                        "failure" === f.status ? t : (C("curp.status.edit") ?? "Edit information"),
                                }),
                            }),
                    ],
                }),
            });
        }
        return "finished" === f.status || f.status, null;
    },
    P = ({ config: e, manager: r, onFinish: t, onError: a }) =>
        (0, n.v)(u.t, { children: e || r ? (0, n.v)(I, { config: e, manager: r, onFinish: t, onError: a }) : null });
(0, g.t)(P, "incode-curp-validation");
