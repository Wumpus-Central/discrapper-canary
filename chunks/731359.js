"use strict";
n.d(t, { z: () => c });
var r = n(146968),
    i = n(803082),
    s = n(290424),
    a = n(702992),
    o = n(64700),
    l = n(8321),
    u = n(946020),
    d = n(96441);
function c(e, t, n) {
    let {
            value: c,
            children: _,
            "aria-label": f,
            "aria-labelledby": E,
            onPressStart: h,
            onPressEnd: p,
            onPressChange: m,
            onPress: g,
            onPressUp: A,
            onClick: I,
        } = e,
        T = e.isDisabled || t.isDisabled,
        S = t.selectedValue === c,
        { pressProps: y, isPressed: N } = (0, l.d)({
            onPressStart: h,
            onPressEnd: p,
            onPressChange: m,
            onPress: g,
            onPressUp: A,
            onClick: I,
            isDisabled: T,
        }),
        { pressProps: O, isPressed: R } = (0, l.d)({
            onPressStart: h,
            onPressEnd: p,
            onPressChange: m,
            onPressUp: A,
            onClick: I,
            isDisabled: T,
            onPress(e) {
                var r;
                null == g || g(e), t.setSelectedValue(c), null == (r = n.current) || r.focus();
            },
        }),
        { focusableProps: v } = (0, u.Wc)((0, i.v)(e, { onFocus: () => t.setLastFocusedValue(c) }), n),
        C = (0, i.v)(y, v),
        b = (0, s.$)(e, { labelable: !0 }),
        D = -1;
    null != t.selectedValue
        ? t.selectedValue === c && (D = 0)
        : (t.lastFocusedValue === c || null == t.lastFocusedValue) && (D = 0),
        T && (D = void 0);
    let { name: L, form: w, descriptionId: M, errorMessageId: P, validationBehavior: U } = r.V.get(t);
    return (
        (0, a.F)(n, t.defaultSelectedValue, t.setSelectedValue),
        (0, d.X)({ validationBehavior: U }, t, n),
        {
            labelProps: (0, i.v)(
                O,
                (0, o.useMemo)(
                    () => ({ onClick: (e) => e.preventDefault(), onMouseDown: (e) => e.preventDefault() }),
                    [],
                ),
            ),
            inputProps: (0, i.v)(b, {
                ...C,
                type: "radio",
                name: L,
                form: w,
                tabIndex: D,
                disabled: T,
                required: t.isRequired && "native" === U,
                checked: S,
                value: c,
                onChange: (e) => {
                    e.stopPropagation(), t.setSelectedValue(c);
                },
                "aria-describedby":
                    [e["aria-describedby"], t.isInvalid ? P : null, M].filter(Boolean).join(" ") || void 0,
            }),
            isDisabled: T,
            isSelected: S,
            isPressed: N || R,
        }
    );
}
