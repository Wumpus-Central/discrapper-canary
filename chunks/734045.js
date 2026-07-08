d.d(a, { i: () => t, r: () => s, t: () => u });
var i = d(31144),
    r = d(248702),
    l = d(517e3),
    o = d(288552),
    n = d(489771);
function t(e, a, d) {
    if (a)
        return e(
            a,
            (function (e, a) {
                if (a?.fieldName && "string" == typeof a.fieldName) {
                    let d = String(a.fieldName),
                        i = d.includes(".") ? e(d) : d;
                    return { ...a, fieldName: i };
                }
                return a;
            })(e, d),
        );
}
var s = ({
        name: e,
        label: a,
        displayLabel: d,
        value: l = "",
        error: o,
        errorParams: s,
        type: c = "text",
        placeholder: u,
        placeholderParams: v,
        required: p,
        readonly: h,
        maxLength: b,
        disabled: I,
        labelHint: m,
        onChange: R,
        onBlur: B,
    }) => {
        let { t: f } = (0, i.n)();
        return (0, r.v)("div", {
            className: "IncodeFormField",
            children: (0, r.v)(n.t, {
                id: e,
                label: d ?? f(a),
                labelHint: m,
                name: e,
                type: c,
                value: l,
                placeholder: u ? f(u, v) : void 0,
                readOnly: h,
                disabled: I,
                required: p,
                maxLength: b,
                error: t(f, o, s),
                onInput: (a) => {
                    R(e, a.target.value);
                },
                onBlur: B ? () => B(e) : void 0,
                "data-testid": `form-field-${e}`,
            }),
        });
    },
    c = (0, r.a)(
        (
            {
                id: e,
                label: a,
                labelHint: d,
                checked: i,
                defaultChecked: n,
                disabled: t = !1,
                required: s = !1,
                name: c,
                value: u,
                onChange: v,
                error: p,
                helper: h,
                showErrorIcon: b = !0,
                class: I,
                "aria-label": m,
                "aria-labelledby": R,
                "aria-describedby": B,
                "aria-invalid": f,
                ...g
            },
            C,
        ) => {
            let [y, $] = (0, r.p)(!!n),
                k = void 0 !== i,
                x = k ? !!i : y,
                H = !!t,
                L = h ? `${e}-helper` : void 0,
                q = p ? `${e}-error` : void 0,
                w = [B, q, L].filter(Boolean).join(" ") || void 0;
            return (0, r.v)("div", {
                class: (0, l.n)("IncodeRadioButton", "string" == typeof I ? I : void 0),
                children: [
                    (0, r.v)("label", {
                        class: (0, l.n)("IncodeRadioButtonLabel", { IncodeRadioButtonLabelDisabled: H }),
                        htmlFor: e,
                        children: [
                            (0, r.v)("div", {
                                class: "relative inline-flex",
                                children: [
                                    (0, r.v)("input", {
                                        ref: C,
                                        type: "radio",
                                        class: "IncodeRadioButtonInput",
                                        id: e,
                                        name: c,
                                        value: u,
                                        ...(k ? { checked: i } : { defaultChecked: n }),
                                        disabled: t,
                                        required: s,
                                        onChange: (e) => {
                                            k || $(e.target.checked), v?.(e);
                                        },
                                        "aria-label": m,
                                        "aria-labelledby": R,
                                        "aria-describedby": w,
                                        "aria-invalid": f || !!p,
                                        "aria-required": !!s,
                                        ...g,
                                    }),
                                    (0, r.v)("div", {
                                        class: (0, l.n)("IncodeRadioButtonVisual", {
                                            IncodeRadioButtonVisualChecked: x,
                                            IncodeRadioButtonVisualDisabled: H,
                                            IncodeRadioButtonVisualError: !!p,
                                        }),
                                        "aria-hidden": "true",
                                        children: (0, r.v)("span", {
                                            class: (0, l.n)("IncodeRadioButtonDot", { IncodeRadioButtonDotVisible: x }),
                                        }),
                                    }),
                                ],
                            }),
                            a &&
                                (0, r.v)("span", {
                                    class: (0, l.n)("IncodeRadioButtonText", { IncodeRadioButtonTextDisabled: H }),
                                    "aria-hidden": R ? "true" : void 0,
                                    children: [
                                        a,
                                        d &&
                                            (0, r.v)("span", {
                                                class: "IncodeRadioButtonLabelHint",
                                                "data-testid": `${e}-label-hint`,
                                                children: d,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    p &&
                        (0, r.v)("div", {
                            class: "IncodeRadioButtonMessageWrapper",
                            "data-testid": `${e}-error-wrapper`,
                            children: [
                                b &&
                                    (0, r.v)("div", {
                                        class: "IncodeRadioButtonIconWrapper",
                                        children: (0, r.v)(o.g, { size: 17 }),
                                    }),
                                (0, r.v)("p", { id: q, class: "IncodeRadioButtonErrorText", children: p }),
                            ],
                        }),
                    h &&
                        !p &&
                        (0, r.v)("div", {
                            class: "IncodeRadioButtonMessageWrapper",
                            "data-testid": `${e}-helper-wrapper`,
                            children: (0, r.v)("p", { id: L, class: "IncodeRadioButtonHelperText", children: h }),
                        }),
                ],
            });
        },
    ),
    u = (0, r.a)(
        (
            {
                id: e,
                label: a,
                labelHint: d,
                options: i,
                value: o,
                defaultValue: n,
                error: t,
                helper: s,
                required: u = !1,
                disabled: v = !1,
                name: p,
                orientation: h = "row",
                onChange: b,
                onBlur: I,
                class: m,
                "data-testid": R,
            },
            B,
        ) => {
            let [f, g] = (0, r.p)(n ?? ""),
                C = void 0 !== o,
                y = C ? o : f,
                $ = `${e}-label`,
                k = t ? `${e}-error` : void 0,
                x = s && !t ? `${e}-helper` : void 0,
                H = k ?? x,
                L = p ?? e;
            return (0, r.v)("div", {
                ref: B,
                class: (0, l.n)("IncodeRadioGroupComposed", m),
                "data-testid": R,
                children: [
                    (0, r.v)("span", {
                        id: $,
                        class: "IncodeRadioGroupComposedLabel",
                        children: [
                            a,
                            d &&
                                (0, r.v)("span", {
                                    class: "IncodeRadioGroupComposedLabelHint",
                                    "data-testid": `${e}-label-hint`,
                                    children: d,
                                }),
                        ],
                    }),
                    (0, r.v)("div", {
                        class: "IncodeRadioGroupComposedOptions",
                        role: "radiogroup",
                        "aria-labelledby": $,
                        "aria-required": u || void 0,
                        "aria-invalid": !!t || void 0,
                        "aria-describedby": H,
                        "data-orientation": h,
                        children: i.map((a) =>
                            (0, r.v)(
                                c,
                                {
                                    id: `${e}-${a.value}`,
                                    name: L,
                                    label: a.label,
                                    value: a.value,
                                    checked: y === a.value,
                                    disabled: v || a.disabled,
                                    showErrorIcon: !1,
                                    "aria-invalid": !!t || void 0,
                                    "aria-describedby": H,
                                    onChange: (e) => {
                                        var d;
                                        return (d = a.value), void (C || g(d), b?.(d, e));
                                    },
                                    onBlur: I,
                                },
                                a.value,
                            ),
                        ),
                    }),
                    t && (0, r.v)("p", { id: k, class: "IncodeRadioGroupComposedError", role: "alert", children: t }),
                    s && !t && (0, r.v)("p", { id: x, class: "IncodeRadioGroupComposedHelper", children: s }),
                ],
            });
        },
    );
