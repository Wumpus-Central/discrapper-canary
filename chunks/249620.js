r.d(t, { e: () => d });
var n = r(961082),
    i = r(256062),
    o = r(184093),
    a = r(957397),
    s = r(560754),
    l = r(721689),
    u = r(647851),
    c = r(209787),
    f = r(582128),
    p = r(572313);
function d(e, t, r) {
    let {
            isDisabled: d = !1,
            isReadOnly: h = !1,
            value: m,
            name: v,
            form: y,
            children: g,
            isRequired: b,
            validationBehavior: w = "aria",
            "aria-label": _,
            "aria-labelledby": S,
            "aria-describedby": E,
            onPressStart: x,
            onPressEnd: C,
            onPressChange: k,
            onPress: T,
            onPressUp: M,
            onClick: P,
        } = e,
        A = (0, p.KZ)({ ...e, value: t.isSelected }),
        { isInvalid: I, validationErrors: O, validationDetails: R } = A.displayValidation;
    (0, l.X)(e, A, r);
    let { pressProps: D, isPressed: L } = (0, u.d)({
            onPressStart: x,
            onPressEnd: C,
            onPressChange: k,
            onPress: T,
            onPressUp: M,
            onClick: P,
            isDisabled: d,
        }),
        [F, N] = (0, f.useState)(!1),
        { pressProps: j } = (0, u.d)({
            onPressStart(e) {
                "keyboard" === e.pointerType || "virtual" === e.pointerType
                    ? e.continuePropagation()
                    : (x?.(e), k?.(!0), N(!0));
            },
            onPressEnd(e) {
                "keyboard" === e.pointerType || "virtual" === e.pointerType
                    ? e.continuePropagation()
                    : (C?.(e), k?.(!1), N(!1));
            },
            onPressUp(e) {
                "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : M?.(e);
            },
            onClick: P,
            onPress(n) {
                if ("keyboard" === n.pointerType || "virtual" === n.pointerType) return void n.continuePropagation();
                (T?.(n), t.toggle(), r.current?.focus());
                let { [p.Lf]: i } = e,
                    { commitValidation: o } = i || A;
                o();
            },
            isDisabled: d || h,
        }),
        { focusableProps: B } = (0, a.Wc)(e, r),
        K = (0, o.v)(D, B),
        V = (0, n.$)(e, { labelable: !0 });
    (0, s.F)(r, t.defaultSelected, t.setSelected);
    let U = (0, c.L)(),
        $ = (0, c.L)();
    return {
        labelProps: (0, o.v)(j, { onClick: (e) => e.preventDefault() }),
        inputProps: (0, o.v)(V, {
            checked: t.isSelected,
            "aria-required": (b && "aria" === w) || void 0,
            required: b && "native" === w,
            "aria-invalid": I || "invalid" === e.validationState || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": h || void 0,
            "aria-describedby": [U.id, $.id, E].filter(Boolean).join(" ") || void 0,
            onChange: (e) => {
                (e.stopPropagation(), t.setSelected((0, i.wt)(e).checked));
            },
            disabled: d,
            ...(null == m ? {} : { value: m }),
            name: v,
            form: y,
            type: "checkbox",
            ...K,
        }),
        descriptionProps: U,
        errorMessageProps: $,
        isSelected: t.isSelected,
        isPressed: L || F,
        isDisabled: d,
        isReadOnly: h,
        isInvalid: I || "invalid" === e.validationState,
        validationErrors: O,
        validationDetails: R,
    };
}
