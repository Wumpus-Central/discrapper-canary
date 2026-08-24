"use strict";
r.d(t, { e: () => l });
var n = r(192734),
    o = r(201092),
    i = r(103564),
    a = r(404903),
    s = r(126024);
function l(e, t, r) {
    let {
            isDisabled: l = !1,
            isReadOnly: u = !1,
            value: c,
            name: f,
            form: p,
            children: d,
            "aria-label": h,
            "aria-labelledby": m,
            validationState: v = "valid",
            isInvalid: y,
            onPressStart: g,
            onPressEnd: b,
            onPressChange: w,
            onPress: _,
            onPressUp: S,
            onClick: x,
        } = e,
        { pressProps: E, isPressed: k } = (0, a.d)({
            onPressStart: g,
            onPressEnd: b,
            onPressChange: w,
            onPress: _,
            onPressUp: S,
            onClick: x,
            isDisabled: l,
        }),
        { pressProps: C, isPressed: T } = (0, a.d)({
            onPressStart: g,
            onPressEnd: b,
            onPressChange: w,
            onPressUp: S,
            onClick: x,
            onPress(e) {
                var n;
                null == _ || _(e), t.toggle(), null == (n = r.current) || n.focus();
            },
            isDisabled: l || u,
        }),
        { focusableProps: M } = (0, s.Wc)(e, r),
        P = (0, n.v)(E, M),
        A = (0, o.$)(e, { labelable: !0 });
    return (
        (0, i.F)(r, t.defaultSelected, t.setSelected),
        {
            labelProps: (0, n.v)(C, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, n.v)(A, {
                "aria-invalid": y || "invalid" === v || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": u || void 0,
                onChange: (e) => {
                    e.stopPropagation(), t.setSelected(e.target.checked);
                },
                disabled: l,
                ...(null == c ? {} : { value: c }),
                name: f,
                form: p,
                type: "checkbox",
                ...P,
            }),
            isSelected: t.isSelected,
            isPressed: k || T,
            isDisabled: l,
            isReadOnly: u,
            isInvalid: y || "invalid" === v,
        }
    );
}
