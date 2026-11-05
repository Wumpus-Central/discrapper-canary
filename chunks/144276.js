var n = r(892730),
    i = r(518206),
    o = r(652664),
    a = r(994965),
    s = r(470194),
    l = r(631705),
    u = r(845062),
    c = r(958203),
    f = r(582128),
    d = r(997401);
r.d(
    t,
    {},
    {
        e: function (e, t, r) {
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
                    "aria-describedby": E,
                    onPressStart: x,
                    onPressEnd: C,
                    onPressChange: k,
                    onPress: T,
                    onPressUp: P,
                    onClick: A,
                } = e,
                I = (0, d.KZ)({ ...e, value: t.isSelected }),
                { isInvalid: M, validationErrors: O, validationDetails: R } = I.displayValidation;
            (0, l.X)(e, I, r);
            let { pressProps: L, isPressed: D } = (0, u.d)({
                    onPressStart: x,
                    onPressEnd: C,
                    onPressChange: k,
                    onPress: T,
                    onPressUp: P,
                    onClick: A,
                    isDisabled: p,
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
                        "keyboard" === e.pointerType || "virtual" === e.pointerType ? e.continuePropagation() : P?.(e);
                    },
                    onClick: A,
                    onPress(n) {
                        if ("keyboard" === n.pointerType || "virtual" === n.pointerType)
                            return void n.continuePropagation();
                        (T?.(n), t.toggle(), r.current?.focus());
                        let { [d.Lf]: i } = e,
                            { commitValidation: o } = i || I;
                        o();
                    },
                    isDisabled: p || h,
                }),
                { focusableProps: B } = (0, a.Wc)(e, r),
                U = (0, o.v)(L, B),
                V = (0, n.$)(e, { labelable: !0 });
            (0, s.F)(r, t.defaultSelected, t.setSelected);
            let $ = (0, c.L)(),
                K = (0, c.L)();
            return {
                labelProps: (0, o.v)(j, { onClick: (e) => e.preventDefault() }),
                inputProps: (0, o.v)(V, {
                    checked: t.isSelected,
                    "aria-required": (b && "aria" === w) || void 0,
                    required: b && "native" === w,
                    "aria-invalid": M || "invalid" === e.validationState || void 0,
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-controls": e["aria-controls"],
                    "aria-readonly": h || void 0,
                    "aria-describedby": [$.id, K.id, E].filter(Boolean).join(" ") || void 0,
                    onChange: (e) => {
                        (e.stopPropagation(), t.setSelected((0, i.wt)(e).checked));
                    },
                    disabled: p,
                    ...(null == m ? {} : { value: m }),
                    name: v,
                    form: y,
                    type: "checkbox",
                    ...U,
                }),
                descriptionProps: $,
                errorMessageProps: K,
                isSelected: t.isSelected,
                isPressed: D || F,
                isDisabled: p,
                isReadOnly: h,
                isInvalid: M || "invalid" === e.validationState,
                validationErrors: O,
                validationDetails: R,
            };
        },
    },
);
