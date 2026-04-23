"use strict";
n.d(t, { v: () => u });
var r = n(64700),
    i = n(803082),
    s = n(339241),
    a = n(96441),
    o = n(8321),
    l = n(757260);
function u(e, t, n) {
    let u = (0, s.KZ)({ ...e, value: t.isSelected }),
        { isInvalid: c, validationErrors: d, validationDetails: _ } = u.displayValidation,
        {
            labelProps: f,
            inputProps: p,
            isSelected: h,
            isPressed: E,
            isDisabled: m,
            isReadOnly: g,
        } = (0, l.e)({ ...e, isInvalid: c }, t, n);
    (0, a.X)(e, u, n);
    let { isIndeterminate: A, isRequired: I, validationBehavior: T = "aria" } = e;
    (0, r.useEffect)(() => {
        n.current && (n.current.indeterminate = !!A);
    });
    let { pressProps: S } = (0, o.d)({
        isDisabled: m || g,
        onPress() {
            let { [s.Lf]: t } = e,
                { commitValidation: n } = t || u;
            n();
        },
    });
    return {
        labelProps: (0, i.v)(
            f,
            S,
            (0, r.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), []),
        ),
        inputProps: { ...p, checked: h, "aria-required": (I && "aria" === T) || void 0, required: I && "native" === T },
        isSelected: h,
        isPressed: E,
        isDisabled: m,
        isReadOnly: g,
        isInvalid: c,
        validationErrors: d,
        validationDetails: _,
    };
}
