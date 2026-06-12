"use strict";
n.d(t, { e: () => l });
var i = n(318473),
    r = n(290424),
    s = n(702992),
    a = n(775133),
    o = n(877247);
function l(e, t, n) {
    let {
            isDisabled: l = !1,
            isReadOnly: u = !1,
            value: c,
            name: d,
            form: _,
            children: h,
            "aria-label": f,
            "aria-labelledby": p,
            validationState: E = "valid",
            isInvalid: m,
            onPressStart: g,
            onPressEnd: A,
            onPressChange: I,
            onPress: T,
            onPressUp: S,
            onClick: y,
        } = e,
        { pressProps: N, isPressed: v } = (0, a.d)({
            onPressStart: g,
            onPressEnd: A,
            onPressChange: I,
            onPress: T,
            onPressUp: S,
            onClick: y,
            isDisabled: l,
        }),
        { pressProps: C, isPressed: R } = (0, a.d)({
            onPressStart: g,
            onPressEnd: A,
            onPressChange: I,
            onPressUp: S,
            onClick: y,
            onPress(e) {
                var i;
                null == T || T(e), t.toggle(), null == (i = n.current) || i.focus();
            },
            isDisabled: l || u,
        }),
        { focusableProps: O } = (0, o.Wc)(e, n),
        b = (0, i.v)(N, O),
        D = (0, r.$)(e, { labelable: !0 });
    return (
        (0, s.F)(n, t.defaultSelected, t.setSelected),
        {
            labelProps: (0, i.v)(C, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, i.v)(D, {
                "aria-invalid": m || "invalid" === E || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": u || void 0,
                onChange: (e) => {
                    e.stopPropagation(), t.setSelected(e.target.checked);
                },
                disabled: l,
                ...(null == c ? {} : { value: c }),
                name: d,
                form: _,
                type: "checkbox",
                ...b,
            }),
            isSelected: t.isSelected,
            isPressed: v || R,
            isDisabled: l,
            isReadOnly: u,
            isInvalid: m || "invalid" === E,
        }
    );
}
