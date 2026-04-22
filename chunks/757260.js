"use strict";
n.d(t, { e: () => l });
var r = n(803082),
    i = n(290424),
    s = n(702992),
    a = n(8321),
    o = n(946020);
function l(e, t, n) {
    let {
            isDisabled: l = !1,
            isReadOnly: u = !1,
            value: d,
            name: c,
            form: _,
            children: f,
            "aria-label": E,
            "aria-labelledby": h,
            validationState: p = "valid",
            isInvalid: m,
            onPressStart: g,
            onPressEnd: A,
            onPressChange: I,
            onPress: T,
            onPressUp: S,
            onClick: y,
        } = e,
        { pressProps: N, isPressed: O } = (0, a.d)({
            onPressStart: g,
            onPressEnd: A,
            onPressChange: I,
            onPress: T,
            onPressUp: S,
            onClick: y,
            isDisabled: l,
        }),
        { pressProps: R, isPressed: v } = (0, a.d)({
            onPressStart: g,
            onPressEnd: A,
            onPressChange: I,
            onPressUp: S,
            onClick: y,
            onPress(e) {
                var r;
                null == T || T(e), t.toggle(), null == (r = n.current) || r.focus();
            },
            isDisabled: l || u,
        }),
        { focusableProps: C } = (0, o.Wc)(e, n),
        b = (0, r.v)(N, C),
        D = (0, i.$)(e, { labelable: !0 });
    return (
        (0, s.F)(n, t.defaultSelected, t.setSelected),
        {
            labelProps: (0, r.v)(R, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, r.v)(D, {
                "aria-invalid": m || "invalid" === p || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": u || void 0,
                onChange: (e) => {
                    e.stopPropagation(), t.setSelected(e.target.checked);
                },
                disabled: l,
                ...(null == d ? {} : { value: d }),
                name: c,
                form: _,
                type: "checkbox",
                ...b,
            }),
            isSelected: t.isSelected,
            isPressed: O || v,
            isDisabled: l,
            isReadOnly: u,
            isInvalid: m || "invalid" === p,
        }
    );
}
