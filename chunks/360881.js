"use strict";
n.d(t, { v: () => u });
var r = n(64700),
    i = n(803082),
    a = n(339241),
    s = n(96441),
    o = n(8321),
    l = n(757260);
function u(e, t, n) {
    let u = (0, a.KZ)({ ...e, value: t.isSelected }),
        { isInvalid: c, validationErrors: d, validationDetails: _ } = u.displayValidation,
        {
            labelProps: f,
            inputProps: p,
            isSelected: h,
            isPressed: m,
            isDisabled: g,
            isReadOnly: E,
        } = (0, l.e)({ ...e, isInvalid: c }, t, n);
    (0, s.X)(e, u, n);
    let { isIndeterminate: A, isRequired: I, validationBehavior: T = "aria" } = e;
    (0, r.useEffect)(() => {
        n.current && (n.current.indeterminate = !!A);
    });
    let { pressProps: y } = (0, o.d)({
        isDisabled: g || E,
        onPress() {
            let { [a.Lf]: t } = e,
                { commitValidation: n } = t || u;
            n();
        },
    });
    return {
        labelProps: (0, i.v)(
            f,
            y,
            (0, r.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), []),
        ),
        inputProps: { ...p, checked: h, "aria-required": (I && "aria" === T) || void 0, required: I && "native" === T },
        isSelected: h,
        isPressed: m,
        isDisabled: g,
        isReadOnly: E,
        isInvalid: c,
        validationErrors: d,
        validationDetails: _,
    };
}
