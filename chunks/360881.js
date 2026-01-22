n.d(t, { v: () => c });
var r = n(64700),
    i = n(803082),
    a = n(339241),
    s = n(96441),
    o = n(8321),
    l = n(757260);
function c(e, t, n) {
    let c = (0, a.KZ)({
            ...e,
            value: t.isSelected,
        }),
        { isInvalid: u, validationErrors: d, validationDetails: f } = c.displayValidation,
        {
            labelProps: p,
            inputProps: _,
            isSelected: h,
            isPressed: m,
            isDisabled: g,
            isReadOnly: E,
        } = (0, l.e)(
            {
                ...e,
                isInvalid: u,
            },
            t,
            n,
        );
    (0, s.X)(e, c, n);
    let { isIndeterminate: b, isRequired: y, validationBehavior: O = "aria" } = e;
    (0, r.useEffect)(() => {
        n.current && (n.current.indeterminate = !!b);
    });
    let { pressProps: A } = (0, o.d)({
        isDisabled: g || E,
        onPress() {
            let { [a.Lf]: t } = e,
                { commitValidation: n } = t || c;
            n();
        },
    });
    return {
        labelProps: (0, i.v)(
            p,
            A,
            (0, r.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), []),
        ),
        inputProps: {
            ..._,
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
