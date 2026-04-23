"use strict";
n.d(t, { z: () => d });
var r = n(146968),
    i = n(803082),
    s = n(290424),
    a = n(702992),
    o = n(64700),
    l = n(8321),
    u = n(946020),
    c = n(96441);
function d(e, t, n) {
    let {
            value: d,
            children: _,
            "aria-label": f,
            "aria-labelledby": p,
            onPressStart: h,
            onPressEnd: E,
            onPressChange: m,
            onPress: g,
            onPressUp: A,
            onClick: I,
        } = e,
        T = e.isDisabled || t.isDisabled,
        S = t.selectedValue === d,
        { pressProps: y, isPressed: N } = (0, l.d)({
            onPressStart: h,
            onPressEnd: E,
            onPressChange: m,
            onPress: g,
            onPressUp: A,
            onClick: I,
            isDisabled: T,
        }),
        { pressProps: v, isPressed: C } = (0, l.d)({
            onPressStart: h,
            onPressEnd: E,
            onPressChange: m,
            onPressUp: A,
            onClick: I,
            isDisabled: T,
            onPress(e) {
                var r;
                null == g || g(e), t.setSelectedValue(d), null == (r = n.current) || r.focus();
            },
        }),
        { focusableProps: O } = (0, u.Wc)((0, i.v)(e, { onFocus: () => t.setLastFocusedValue(d) }), n),
        R = (0, i.v)(y, O),
        b = (0, s.$)(e, { labelable: !0 }),
        D = -1;
    null != t.selectedValue
        ? t.selectedValue === d && (D = 0)
        : (t.lastFocusedValue === d || null == t.lastFocusedValue) && (D = 0),
        T && (D = void 0);
    let { name: L, form: w, descriptionId: M, errorMessageId: P, validationBehavior: x } = r.V.get(t);
    return (
        (0, a.F)(n, t.defaultSelectedValue, t.setSelectedValue),
        (0, c.X)({ validationBehavior: x }, t, n),
        {
            labelProps: (0, i.v)(
                v,
                (0, o.useMemo)(
                    () => ({ onClick: (e) => e.preventDefault(), onMouseDown: (e) => e.preventDefault() }),
                    [],
                ),
            ),
            inputProps: (0, i.v)(b, {
                ...R,
                type: "radio",
                name: L,
                form: w,
                tabIndex: D,
                disabled: T,
                required: t.isRequired && "native" === x,
                checked: S,
                value: d,
                onChange: (e) => {
                    e.stopPropagation(), t.setSelectedValue(d);
                },
                "aria-describedby":
                    [e["aria-describedby"], t.isInvalid ? P : null, M].filter(Boolean).join(" ") || void 0,
            }),
            isDisabled: T,
            isSelected: S,
            isPressed: N || C,
        }
    );
}
