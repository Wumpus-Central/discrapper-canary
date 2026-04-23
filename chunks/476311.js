"use strict";
n.d(t, { B: () => l });
var r = n(360881),
    i = n(150724),
    s = n(339241),
    a = n(64700),
    o = n(823807);
function l(e, t, n) {
    var l, u;
    let c = (0, o.H)({
            isReadOnly: e.isReadOnly || t.isReadOnly,
            isSelected: t.isSelected(e.value),
            defaultSelected: t.defaultValue.includes(e.value),
            onChange(n) {
                n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n);
            },
        }),
        { name: d, form: _, descriptionId: f, errorMessageId: p, validationBehavior: h } = i.n.get(t);
    h = null != (l = e.validationBehavior) ? l : h;
    let { realtimeValidation: E } = (0, s.KZ)({ ...e, value: c.isSelected, name: void 0, validationBehavior: "aria" }),
        m = (0, a.useRef)(s.YD),
        g = () => {
            t.setInvalid(e.value, E.isInvalid ? E : m.current);
        };
    (0, a.useEffect)(g);
    let A = t.realtimeValidation.isInvalid ? t.realtimeValidation : E,
        I = "native" === h ? t.displayValidation : A,
        T = (0, r.v)(
            {
                ...e,
                isReadOnly: e.isReadOnly || t.isReadOnly,
                isDisabled: e.isDisabled || t.isDisabled,
                name: e.name || d,
                form: e.form || _,
                isRequired: null != (u = e.isRequired) ? u : t.isRequired,
                validationBehavior: h,
                [s.Lf]: {
                    realtimeValidation: A,
                    displayValidation: I,
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation,
                    updateValidation(e) {
                        (m.current = e), g();
                    },
                },
            },
            c,
            n,
        );
    return {
        ...T,
        inputProps: {
            ...T.inputProps,
            "aria-describedby": [e["aria-describedby"], t.isInvalid ? p : null, f].filter(Boolean).join(" ") || void 0,
        },
    };
}
