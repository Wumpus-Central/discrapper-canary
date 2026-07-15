d.d(t, { t: () => s });
var i = d(287822),
    e = d(898369),
    c = d(606742),
    a = d(748158),
    s = (0, i.a)(
        (
            {
                id: l,
                label: t,
                labelHint: d,
                size: s = "m",
                checked: n,
                defaultChecked: Z,
                disabled: b = !1,
                required: m = !1,
                name: o,
                value: u,
                onChange: h,
                error: W,
                helper: G,
                showErrorIcon: p = !0,
                class: N,
                "aria-label": M,
                "aria-labelledby": X,
                "aria-describedby": r,
                "aria-invalid": y,
                ...Y
            },
            T,
        ) => {
            let [V, L] = (0, i.p)(!!Z),
                I = void 0 !== n,
                z = I ? !!n : V,
                w = !!b,
                R = G ? `${l}-helper` : void 0,
                S = W ? `${l}-error` : void 0,
                C = [r, S, R].filter(Boolean).join(" ") || void 0;
            return (0, i.v)("div", {
                class: (0, e.n)("IncodeCheckbox", "string" == typeof N ? N : void 0),
                children: [
                    (0, i.v)("label", {
                        class: (0, e.n)("IncodeCheckboxLabel", { IncodeCheckboxLabelDisabled: w }),
                        htmlFor: l,
                        children: [
                            (0, i.v)("div", {
                                class: "relative inline-flex",
                                children: [
                                    (0, i.v)("input", {
                                        ref: T,
                                        type: "checkbox",
                                        class: "IncodeCheckboxInput",
                                        id: l,
                                        name: o,
                                        value: u,
                                        ...(I ? { checked: n } : { defaultChecked: Z }),
                                        disabled: b,
                                        required: m,
                                        onChange: (l) => {
                                            I || L(l.target.checked), h?.(l);
                                        },
                                        "aria-label": M,
                                        "aria-labelledby": X,
                                        "aria-describedby": C,
                                        "aria-invalid": y || !!W,
                                        "aria-required": !!m,
                                        ...Y,
                                    }),
                                    (0, i.v)("div", {
                                        class: (0, e.n)("IncodeCheckboxVisual", {
                                            IncodeCheckboxVisualChecked: z,
                                            IncodeCheckboxVisualDisabled: w,
                                            IncodeCheckboxVisualError: !!W,
                                        }),
                                        children: z && (0, i.v)(a.d, { size: 28 }),
                                    }),
                                ],
                            }),
                            t &&
                                (0, i.v)("span", {
                                    class: (0, e.n)("IncodeCheckboxText", {
                                        IncodeCheckboxTextS: "s" === s,
                                        IncodeCheckboxTextM: "m" === s,
                                        IncodeCheckboxTextDisabled: w,
                                    }),
                                    "aria-hidden": X ? "true" : void 0,
                                    children: [
                                        t,
                                        d &&
                                            (0, i.v)("span", {
                                                class: "IncodeCheckboxLabelHint",
                                                "data-testid": `${l}-label-hint`,
                                                children: d,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    W &&
                        (0, i.v)("div", {
                            class: "IncodeCheckboxMessageWrapper",
                            "data-testid": `${l}-error-wrapper`,
                            children: [
                                p &&
                                    (0, i.v)("div", {
                                        class: "IncodeCheckboxIconWrapper",
                                        children: (0, i.v)(c.t, { size: 17 }),
                                    }),
                                (0, i.v)("p", { id: S, class: "IncodeCheckboxErrorText", children: W }),
                            ],
                        }),
                    G &&
                        !W &&
                        (0, i.v)("div", {
                            class: "IncodeCheckboxMessageWrapper",
                            "data-testid": `${l}-helper-wrapper`,
                            children: (0, i.v)("p", { id: R, class: "IncodeCheckboxHelperText", children: G }),
                        }),
                ],
            });
        },
    );
