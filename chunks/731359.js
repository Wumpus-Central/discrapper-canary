n.d(t, { z: () => d });
var r = n(146968),
    i = n(803082),
    a = n(290424),
    s = n(702992),
    o = n(64700),
    l = n(8321),
    c = n(946020),
    u = n(96441);
function d(e, t, n) {
    let {
            value: d,
            children: f,
            "aria-label": p,
            "aria-labelledby": _,
            onPressStart: h,
            onPressEnd: m,
            onPressChange: g,
            onPress: E,
            onPressUp: b,
            onClick: y,
        } = e,
        O = e.isDisabled || t.isDisabled,
        A = t.selectedValue === d,
        v = (e) => {
            e.stopPropagation(), t.setSelectedValue(d);
        },
        { pressProps: S, isPressed: I } = (0, l.d)({
            onPressStart: h,
            onPressEnd: m,
            onPressChange: g,
            onPress: E,
            onPressUp: b,
            onClick: y,
            isDisabled: O,
        }),
        { pressProps: T, isPressed: C } = (0, l.d)({
            onPressStart: h,
            onPressEnd: m,
            onPressChange: g,
            onPressUp: b,
            onClick: y,
            isDisabled: O,
            onPress(e) {
                var r;
                null == E || E(e), t.setSelectedValue(d), null == (r = n.current) || r.focus();
            },
        }),
        { focusableProps: N } = (0, c.Wc)((0, i.v)(e, { onFocus: () => t.setLastFocusedValue(d) }), n),
        R = (0, i.v)(S, N),
        w = (0, a.$)(e, { labelable: !0 }),
        P = -1;
    null != t.selectedValue
        ? t.selectedValue === d && (P = 0)
        : (t.lastFocusedValue === d || null == t.lastFocusedValue) && (P = 0),
        O && (P = void 0);
    let { name: D, form: x, descriptionId: L, errorMessageId: j, validationBehavior: M } = r.V.get(t);
    return (
        (0, s.F)(n, t.defaultSelectedValue, t.setSelectedValue),
        (0, u.X)({ validationBehavior: M }, t, n),
        {
            labelProps: (0, i.v)(
                T,
                (0, o.useMemo)(
                    () => ({
                        onClick: (e) => e.preventDefault(),
                        onMouseDown: (e) => e.preventDefault(),
                    }),
                    [],
                ),
            ),
            inputProps: (0, i.v)(w, {
                ...R,
                type: "radio",
                name: D,
                form: x,
                tabIndex: P,
                disabled: O,
                required: t.isRequired && "native" === M,
                checked: A,
                value: d,
                onChange: v,
                "aria-describedby":
                    [e["aria-describedby"], t.isInvalid ? j : null, L].filter(Boolean).join(" ") || void 0,
            }),
            isDisabled: O,
            isSelected: A,
            isPressed: I || C,
        }
    );
}
