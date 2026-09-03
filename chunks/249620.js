r.d(t, { e: () => p });
var n = r(961082),
    i = r(256062),
    o = r(184093),
    a = r(957397),
    s = r(560754),
    l = r(721689),
    u = r(114218),
    c = r(209787),
    f = r(582128),
    d = r(572313);
function p(e, t, r) {
    let {
            isDisabled: p = !1,
            isReadOnly: h = !1,
            value: m,
            name: v,
            form: y,
            children: g,
            isRequired: b,
            validationBehavior: w = "aria",
            "aria-label": _,
            "aria-labelledby": S,
            "aria-describedby": x,
            onPressStart: E,
            onPressEnd: k,
            onPressChange: C,
            onPress: T,
            onPressUp: M,
            onClick: P,
        } = e,
        A = (0, d.KZ)({ ...e, value: t.isSelected }),
        { isInvalid: I, validationErrors: O, validationDetails: D } = A.displayValidation;
    (0, l.X)(e, A, r);
    let { pressProps: R, isPressed: L } = (0, u.d)({
            onPressStart: E,
            onPressEnd: k,
            onPressChange: C,
            onPress: T,
            onPressUp: M,
            onClick: P,
            isDisabled: p,
        }),
        [F, N] = (0, f.useState)(!1),
        { pressProps: j } = (0, u.d)({
            onPressStart(e) {
                "keyboard" === e.pointerType || "virtual" === e.pointerType
                    ? e.continuePropagation()
                    : (E?.(e), C?.(!0), N(!0));
            },
            onPressEnd(e) {
                "keyboard" === e.pointerType || "virtual" === e.pointerType
                    ? e.continuePropagation()
                    : (k?.(e), C?.(!1), N(!1));
            },
            onPressUp(e) {
                "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : M?.(e);
            },
            onClick: P,
            onPress(n) {
                if ("keyboard" === n.pointerType || "virtual" === n.pointerType) return void n.continuePropagation();
                T?.(n), t.toggle(), r.current?.focus();
                let { [d.Lf]: i } = e,
                    { commitValidation: o } = i || A;
                o();
            },
            isDisabled: p || h,
        }),
        { focusableProps: B } = (0, a.Wc)(e, r),
        K = (0, o.v)(R, B),
        $ = (0, n.$)(e, { labelable: !0 });
    (0, s.F)(r, t.defaultSelected, t.setSelected);
    let V = (0, c.L)(),
        U = (0, c.L)();
    return {
        labelProps: (0, o.v)(j, { onClick: (e) => e.preventDefault() }),
        inputProps: (0, o.v)($, {
            checked: t.isSelected,
            "aria-required": (b && "aria" === w) || void 0,
            required: b && "native" === w,
            "aria-invalid": I || "invalid" === e.validationState || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": h || void 0,
            "aria-describedby": [V.id, U.id, x].filter(Boolean).join(" ") || void 0,
            onChange: (e) => {
                e.stopPropagation(), t.setSelected((0, i.wt)(e).checked);
            },
            disabled: p,
            ...(null == m ? {} : { value: m }),
            name: v,
            form: y,
            type: "checkbox",
            ...K,
        }),
        descriptionProps: V,
        errorMessageProps: U,
        isSelected: t.isSelected,
        isPressed: L || F,
        isDisabled: p,
        isReadOnly: h,
        isInvalid: I || "invalid" === e.validationState,
        validationErrors: O,
        validationDetails: D,
    };
}
