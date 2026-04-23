"use strict";
r.d(t, { e: () => l });
var n = r(318473),
    a = r(290424),
    s = r(702992),
    i = r(775133),
    o = r(877247);
function l(e, t, r) {
    let {
            isDisabled: l = !1,
            isReadOnly: u = !1,
            value: c,
            name: d,
            form: f,
            children: p,
            "aria-label": h,
            "aria-labelledby": m,
            validationState: _ = "valid",
            isInvalid: g,
            onPressStart: v,
            onPressEnd: b,
            onPressChange: y,
            onPress: E,
            onPressUp: S,
            onClick: T,
        } = e,
        { pressProps: x, isPressed: w } = (0, i.d)({
            onPressStart: v,
            onPressEnd: b,
            onPressChange: y,
            onPress: E,
            onPressUp: S,
            onClick: T,
            isDisabled: l,
        }),
        { pressProps: C, isPressed: D } = (0, i.d)({
            onPressStart: v,
            onPressEnd: b,
            onPressChange: y,
            onPressUp: S,
            onClick: T,
            onPress(e) {
                var n;
                null == E || E(e), t.toggle(), null == (n = r.current) || n.focus();
            },
            isDisabled: l || u,
        }),
        { focusableProps: O } = (0, o.Wc)(e, r),
        A = (0, n.v)(x, O),
        M = (0, a.$)(e, { labelable: !0 });
    return (
        (0, s.F)(r, t.defaultSelected, t.setSelected),
        {
            labelProps: (0, n.v)(C, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, n.v)(M, {
                "aria-invalid": g || "invalid" === _ || void 0,
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
            isPressed: w || D,
            isDisabled: l,
            isReadOnly: u,
            isInvalid: g || "invalid" === _,
        }
    );
}
