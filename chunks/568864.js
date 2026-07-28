"use strict";
n.d(t, { e: () => l });
var r = n(192734),
    i = n(201092),
    a = n(103564),
    o = n(404903),
    s = n(126024);
function l(e, t, n) {
    let {
            isDisabled: l = !1,
            isReadOnly: u = !1,
            value: c,
            name: d,
            form: f,
            children: p,
            "aria-label": h,
            "aria-labelledby": m,
            validationState: g = "valid",
            isInvalid: v,
            onPressStart: y,
            onPressEnd: b,
            onPressChange: _,
            onPress: w,
            onPressUp: x,
            onClick: E,
        } = e,
        { pressProps: S, isPressed: k } = (0, o.d)({
            onPressStart: y,
            onPressEnd: b,
            onPressChange: _,
            onPress: w,
            onPressUp: x,
            onClick: E,
            isDisabled: l,
        }),
        { pressProps: T, isPressed: C } = (0, o.d)({
            onPressStart: y,
            onPressEnd: b,
            onPressChange: _,
            onPressUp: x,
            onClick: E,
            onPress(e) {
                var r;
                null == w || w(e), t.toggle(), null == (r = n.current) || r.focus();
            },
            isDisabled: l || u,
        }),
        { focusableProps: P } = (0, s.Wc)(e, n),
        A = (0, r.v)(S, P),
        M = (0, i.$)(e, { labelable: !0 });
    return (
        (0, a.F)(n, t.defaultSelected, t.setSelected),
        {
            labelProps: (0, r.v)(T, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, r.v)(M, {
                "aria-invalid": v || "invalid" === g || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": u || void 0,
                onChange: (e) => {
                    e.stopPropagation(), t.setSelected(e.target.checked);
                },
                disabled: l,
                ...(null == c ? {} : { value: c }),
                name: d,
                form: f,
                type: "checkbox",
                ...A,
            }),
            isSelected: t.isSelected,
            isPressed: k || C,
            isDisabled: l,
            isReadOnly: u,
            isInvalid: v || "invalid" === g,
        }
    );
}
