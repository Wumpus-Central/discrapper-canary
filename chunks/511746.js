n.d(t, { O: () => c });
var r = n(473749),
    i = n(158821),
    a = n(134915),
    o = n(746367),
    s = n(226098),
    l = n(975898);
function c(e, t, n) {
    let c = (0, a.Q3)({
            ...e,
            value: t.isSelected,
        }),
        { isInvalid: u, validationErrors: d, validationDetails: f } = c.displayValidation,
        {
            labelProps: p,
            inputProps: _,
            isSelected: m,
            isPressed: h,
            isDisabled: g,
            isReadOnly: E,
        } = (0, l.O)(
            {
                ...e,
                isInvalid: u,
            },
            t,
            n,
        );
    (0, o.Q)(e, c, n);
    let { isIndeterminate: b, isRequired: y, validationBehavior: O = "aria" } = e;
    (0, r.useEffect)(() => {
        n.current && (n.current.indeterminate = !!b);
    });
    let { pressProps: v } = (0, s.r)({
        isDisabled: g || E,
        onPress() {
            let { [a.tL]: t } = e,
                { commitValidation: n } = t || c;
            n();
        },
    });
    return {
        labelProps: (0, i.d)(
            p,
            v,
            (0, r.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), []),
        ),
        inputProps: {
            ..._,
            checked: m,
            "aria-required": (y && "aria" === O) || void 0,
            required: y && "native" === O,
        },
        isSelected: m,
        isPressed: h,
        isDisabled: g,
        isReadOnly: E,
        isInvalid: u,
        validationErrors: d,
        validationDetails: f,
    };
}
