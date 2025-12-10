n.d(t, { x: () => d });
var r = n(195620),
    i = n(158821),
    a = n(880016),
    o = n(179549),
    s = n(473749),
    l = n(226098),
    c = n(497448),
    u = n(746367);
function d(e, t, n) {
    let {
            value: d,
            children: f,
            "aria-label": p,
            "aria-labelledby": _,
            onPressStart: m,
            onPressEnd: h,
            onPressChange: g,
            onPress: E,
            onPressUp: b,
            onClick: y,
        } = e,
        O = e.isDisabled || t.isDisabled,
        v = t.selectedValue === d,
        S = (e) => {
            e.stopPropagation(), t.setSelectedValue(d);
        },
        { pressProps: I, isPressed: T } = (0, l.r)({
            onPressStart: m,
            onPressEnd: h,
            onPressChange: g,
            onPress: E,
            onPressUp: b,
            onClick: y,
            isDisabled: O,
        }),
        { pressProps: C, isPressed: A } = (0, l.r)({
            onPressStart: m,
            onPressEnd: h,
            onPressChange: g,
            onPressUp: b,
            onClick: y,
            isDisabled: O,
            onPress(e) {
                var r;
                null == E || E(e), t.setSelectedValue(d), null == (r = n.current) || r.focus();
            },
        }),
        { focusableProps: N } = (0, c.kc)((0, i.d)(e, { onFocus: () => t.setLastFocusedValue(d) }), n),
        P = (0, i.d)(I, N),
        R = (0, a.z)(e, { labelable: !0 }),
        D = -1;
    null != t.selectedValue
        ? t.selectedValue === d && (D = 0)
        : (t.lastFocusedValue === d || null == t.lastFocusedValue) && (D = 0),
        O && (D = void 0);
    let { name: w, form: x, descriptionId: L, errorMessageId: j, validationBehavior: M } = r.H.get(t);
    return (
        (0, o.y)(n, t.defaultSelectedValue, t.setSelectedValue),
        (0, u.Q)({ validationBehavior: M }, t, n),
        {
            labelProps: (0, i.d)(
                C,
                (0, s.useMemo)(
                    () => ({
                        onClick: (e) => e.preventDefault(),
                        onMouseDown: (e) => e.preventDefault(),
                    }),
                    [],
                ),
            ),
            inputProps: (0, i.d)(R, {
                ...P,
                type: "radio",
                name: w,
                form: x,
                tabIndex: D,
                disabled: O,
                required: t.isRequired && "native" === M,
                checked: v,
                value: d,
                onChange: S,
                "aria-describedby":
                    [e["aria-describedby"], t.isInvalid ? j : null, L].filter(Boolean).join(" ") || void 0,
            }),
            isDisabled: O,
            isSelected: v,
            isPressed: T || A,
        }
    );
}
