n.d(t, { e: () => l });
var r = n(803082),
    i = n(290424),
    a = n(702992),
    s = n(8321),
    o = n(946020);
function l(e, t, n) {
    let {
            isDisabled: l = !1,
            isReadOnly: c = !1,
            value: u,
            name: d,
            form: f,
            children: p,
            "aria-label": _,
            "aria-labelledby": h,
            validationState: m = "valid",
            isInvalid: g,
            onPressStart: E,
            onPressEnd: b,
            onPressChange: y,
            onPress: O,
            onPressUp: A,
            onClick: v,
        } = e,
        S = (e) => {
            e.stopPropagation(), t.setSelected(e.target.checked);
        },
        { pressProps: I, isPressed: T } = (0, s.d)({
            onPressStart: E,
            onPressEnd: b,
            onPressChange: y,
            onPress: O,
            onPressUp: A,
            onClick: v,
            isDisabled: l,
        }),
        { pressProps: C, isPressed: N } = (0, s.d)({
            onPressStart: E,
            onPressEnd: b,
            onPressChange: y,
            onPressUp: A,
            onClick: v,
            onPress(e) {
                var r;
                null == O || O(e), t.toggle(), null == (r = n.current) || r.focus();
            },
            isDisabled: l || c,
        }),
        { focusableProps: R } = (0, o.Wc)(e, n),
        w = (0, r.v)(I, R),
        P = (0, i.$)(e, { labelable: !0 });
    return (
        (0, a.F)(n, t.defaultSelected, t.setSelected),
        {
            labelProps: (0, r.v)(C, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, r.v)(P, {
                "aria-invalid": g || "invalid" === m || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": c || void 0,
                onChange: S,
                disabled: l,
                ...(null == u ? {} : { value: u }),
                name: d,
                form: f,
                type: "checkbox",
                ...w,
            }),
            isSelected: t.isSelected,
            isPressed: T || N,
            isDisabled: l,
            isReadOnly: c,
            isInvalid: g || "invalid" === m,
        }
    );
}
