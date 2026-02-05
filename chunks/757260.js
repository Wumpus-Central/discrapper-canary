"use strict";
n.d(t, { e: () => l });
var r = n(803082),
    i = n(290424),
    a = n(702992),
    s = n(8321),
    o = n(946020);
function l(e, t, n) {
    let {
            isDisabled: l = !1,
            isReadOnly: u = !1,
            value: c,
            name: d,
            form: _,
            children: f,
            "aria-label": p,
            "aria-labelledby": h,
            validationState: m = "valid",
            isInvalid: g,
            onPressStart: E,
            onPressEnd: A,
            onPressChange: I,
            onPress: T,
            onPressUp: y,
            onClick: S,
        } = e,
        v = (e) => {
            e.stopPropagation(), t.setSelected(e.target.checked);
        },
        { pressProps: C, isPressed: b } = (0, s.d)({
            onPressStart: E,
            onPressEnd: A,
            onPressChange: I,
            onPress: T,
            onPressUp: y,
            onClick: S,
            isDisabled: l,
        }),
        { pressProps: N, isPressed: R } = (0, s.d)({
            onPressStart: E,
            onPressEnd: A,
            onPressChange: I,
            onPressUp: y,
            onClick: S,
            onPress(e) {
                var r;
                null == T || T(e), t.toggle(), null == (r = n.current) || r.focus();
            },
            isDisabled: l || u,
        }),
        { focusableProps: O } = (0, o.Wc)(e, n),
        D = (0, r.v)(C, O),
        L = (0, i.$)(e, { labelable: !0 });
    return (
        (0, a.F)(n, t.defaultSelected, t.setSelected),
        {
            labelProps: (0, r.v)(N, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, r.v)(L, {
                "aria-invalid": g || "invalid" === m || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": u || void 0,
                onChange: v,
                disabled: l,
                ...(null == c ? {} : { value: c }),
                name: d,
                form: _,
                type: "checkbox",
                ...D,
            }),
            isSelected: t.isSelected,
            isPressed: b || R,
            isDisabled: l,
            isReadOnly: u,
            isInvalid: g || "invalid" === m,
        }
    );
}
