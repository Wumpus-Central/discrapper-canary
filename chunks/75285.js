n.d(t, { O: () => c });
var r = n(647438),
    i = n(506364),
    a = n(218900),
    o = n(836070),
    s = n(459613),
    l = n(611333);
function c(e, t, n) {
    let c = (0, a.Q3)({
            ...e,
            value: t.isSelected,
        }),
        { isInvalid: u, validationErrors: d, validationDetails: f } = c.displayValidation,
        {
            labelProps: _,
            inputProps: p,
            isSelected: h,
            isPressed: m,
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
        labelProps: (0, i.d)(_, v),
        inputProps: {
            ...p,
            checked: h,
            "aria-required": (y && "aria" === O) || void 0,
            required: y && "native" === O,
        },
        isSelected: h,
        isPressed: m,
        isDisabled: g,
        isReadOnly: E,
        isInvalid: u,
        validationErrors: d,
        validationDetails: f,
    };
}
