n.d(t, { a: () => l });
var r = n(75285),
    i = n(429350),
    a = n(218900),
    o = n(647438),
    s = n(289395);
function l(e, t, n) {
    var l, c;
    let u = (0, s.l)({
            isReadOnly: e.isReadOnly || t.isReadOnly,
            isSelected: t.isSelected(e.value),
            onChange(n) {
                n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n);
            },
        }),
        { name: d, descriptionId: f, errorMessageId: _, validationBehavior: p } = i.k.get(t);
    p = null != (l = e.validationBehavior) ? l : p;
    let { realtimeValidation: h } = (0, a.Q3)({
            ...e,
            value: u.isSelected,
            name: void 0,
            validationBehavior: "aria",
        }),
        m = (0, o.useRef)(a.PS),
        g = () => {
            t.setInvalid(e.value, h.isInvalid ? h : m.current);
        };
    (0, o.useEffect)(g);
    let E = t.realtimeValidation.isInvalid ? t.realtimeValidation : h,
        b = "native" === p ? t.displayValidation : E,
        y = (0, r.O)(
            {
                ...e,
                isReadOnly: e.isReadOnly || t.isReadOnly,
                isDisabled: e.isDisabled || t.isDisabled,
                name: e.name || d,
                isRequired: null != (c = e.isRequired) ? c : t.isRequired,
                validationBehavior: p,
                [a.tL]: {
                    realtimeValidation: E,
                    displayValidation: b,
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation,
                    updateValidation(e) {
                        (m.current = e), g();
                    },
                },
            },
            u,
            n,
        );
    return {
        ...y,
        inputProps: {
            ...y.inputProps,
            "aria-describedby": [e["aria-describedby"], t.isInvalid ? _ : null, f].filter(Boolean).join(" ") || void 0,
        },
    };
}
