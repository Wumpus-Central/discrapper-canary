"use strict";
n.d(t, { z: () => d });
var r = n(146968),
    i = n(803082),
    a = n(290424),
    s = n(702992),
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
            onPressEnd: m,
            onPressChange: g,
            onPress: E,
            onPressUp: A,
            onClick: I,
        } = e,
        T = e.isDisabled || t.isDisabled,
        y = t.selectedValue === d,
        S = (e) => {
            e.stopPropagation(), t.setSelectedValue(d);
        },
        { pressProps: v, isPressed: C } = (0, l.d)({
            onPressStart: h,
            onPressEnd: m,
            onPressChange: g,
            onPress: E,
            onPressUp: A,
            onClick: I,
            isDisabled: T,
        }),
        { pressProps: b, isPressed: N } = (0, l.d)({
            onPressStart: h,
            onPressEnd: m,
            onPressChange: g,
            onPressUp: A,
            onClick: I,
            isDisabled: T,
            onPress(e) {
                var r;
                null == E || E(e), t.setSelectedValue(d), null == (r = n.current) || r.focus();
            },
        }),
        { focusableProps: R } = (0, u.Wc)((0, i.v)(e, { onFocus: () => t.setLastFocusedValue(d) }), n),
        O = (0, i.v)(v, R),
        D = (0, a.$)(e, { labelable: !0 }),
        L = -1;
    null != t.selectedValue
        ? t.selectedValue === d && (L = 0)
        : (t.lastFocusedValue === d || null == t.lastFocusedValue) && (L = 0),
        T && (L = void 0);
    let { name: w, form: x, descriptionId: P, errorMessageId: M, validationBehavior: k } = r.V.get(t);
    return (
        (0, s.F)(n, t.defaultSelectedValue, t.setSelectedValue),
        (0, c.X)({ validationBehavior: k }, t, n),
        {
            labelProps: (0, i.v)(
                b,
                (0, o.useMemo)(
                    () => ({ onClick: (e) => e.preventDefault(), onMouseDown: (e) => e.preventDefault() }),
                    [],
                ),
            ),
            inputProps: (0, i.v)(D, {
                ...O,
                type: "radio",
                name: w,
                form: x,
                tabIndex: L,
                disabled: T,
                required: t.isRequired && "native" === k,
                checked: y,
                value: d,
                onChange: S,
                "aria-describedby":
                    [e["aria-describedby"], t.isInvalid ? M : null, P].filter(Boolean).join(" ") || void 0,
            }),
            isDisabled: T,
            isSelected: y,
            isPressed: C || N,
        }
    );
}
