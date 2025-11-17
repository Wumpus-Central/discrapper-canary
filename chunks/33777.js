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
            "aria-label": _,
            "aria-labelledby": p,
            onPressStart: h,
            onPressEnd: m,
            onPressChange: g,
            onPress: E,
            onPressUp: b,
            onClick: y,
        } = e,
        O = e.isDisabled || t.isDisabled,
        v = t.selectedValue === d,
        I = (e) => {
            e.stopPropagation(), t.setSelectedValue(d);
        },
        { pressProps: T, isPressed: S } = (0, l.r)({
            onPressStart: h,
            onPressEnd: m,
            onPressChange: g,
            onPress: E,
            onPressUp: b,
            onClick: y,
            isDisabled: O,
        }),
        { pressProps: A, isPressed: C } = (0, l.r)({
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
        { focusableProps: N } = (0, c.kc)((0, i.d)(e, { onFocus: () => t.setLastFocusedValue(d) }), n),
        R = (0, i.d)(T, N),
        P = (0, a.z)(e, { labelable: !0 }),
        D = -1;
    null != t.selectedValue
        ? t.selectedValue === d && (D = 0)
        : (t.lastFocusedValue === d || null == t.lastFocusedValue) && (D = 0),
        O && (D = void 0);
    let { name: w, form: x, descriptionId: L, errorMessageId: M, validationBehavior: k } = r.H.get(t);
    return (
        (0, o.y)(n, t.defaultSelectedValue, t.setSelectedValue),
        (0, u.Q)({ validationBehavior: k }, t, n),
        {
            labelProps: (0, i.d)(
                A,
                (0, s.useMemo)(
                    () => ({
                        onClick: (e) => e.preventDefault(),
                        onMouseDown: (e) => e.preventDefault(),
                    }),
                    [],
                ),
            ),
            inputProps: (0, i.d)(P, {
                ...R,
                type: "radio",
                name: w,
                form: x,
                tabIndex: D,
                disabled: O,
                required: t.isRequired && "native" === k,
                checked: v,
                value: d,
                onChange: I,
                "aria-describedby":
                    [e["aria-describedby"], t.isInvalid ? M : null, L].filter(Boolean).join(" ") || void 0,
            }),
            isDisabled: O,
            isSelected: v,
            isPressed: S || C,
        }
    );
}
