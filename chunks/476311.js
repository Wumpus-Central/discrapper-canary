n.d(t, {
    B: () => l,
});
var r = n(360881),
    i = n(150724),
    a = n(339241),
    s = n(64700),
    o = n(823807);

function l(e, t, n) {
    var l, c;
    let u = (0, o.H)({
            isReadOnly: e.isReadOnly || t.isReadOnly,
            isSelected: t.isSelected(e.value),
            defaultSelected: t.defaultValue.includes(e.value),
            onChange(n) {
                n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n);
            },
        }),
        { name: d, form: f, descriptionId: p, errorMessageId: _, validationBehavior: h } = i.n.get(t);
    h = null != (l = e.validationBehavior) ? l : h;
    let { realtimeValidation: m } = (0, a.KZ)({
            ...e,
            value: u.isSelected,
            name: void 0,
            validationBehavior: "aria",
        }),
        g = (0, s.useRef)(a.YD),
        E = () => {
            t.setInvalid(e.value, m.isInvalid ? m : g.current);
        };
    (0, s.useEffect)(E);
    let b = t.realtimeValidation.isInvalid ? t.realtimeValidation : m,
        y = "native" === h ? t.displayValidation : b,
        O = (0, r.v)(
            {
                ...e,
                isReadOnly: e.isReadOnly || t.isReadOnly,
                isDisabled: e.isDisabled || t.isDisabled,
                name: e.name || d,
                form: e.form || f,
                isRequired: null != (c = e.isRequired) ? c : t.isRequired,
                validationBehavior: h,
                [a.Lf]: {
                    realtimeValidation: b,
                    displayValidation: y,
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation,
                    updateValidation(e) {
                        (g.current = e), E();
                    },
                },
            },
            u,
            n,
        );
    return {
        ...O,
        inputProps: {
            ...O.inputProps,
            "aria-describedby": [e["aria-describedby"], t.isInvalid ? _ : null, p].filter(Boolean).join(" ") || void 0,
        },
    };
}
