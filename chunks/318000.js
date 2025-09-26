n.d(t, { u: () => l });
var r = n(427956),
    i = n(436773),
    a = n(586235),
    o = n(893600),
    s = n(71734);
function l(e, t) {
    let { isDisabled: n, name: l, form: c, validationBehavior: u = "aria" } = e,
        { isInvalid: d, validationErrors: f, validationDetails: _ } = t.displayValidation,
        {
            labelProps: p,
            fieldProps: h,
            descriptionProps: m,
            errorMessageProps: g,
        } = (0, o.U)({
            ...e,
            labelElementType: "span",
            isInvalid: d,
            errorMessage: e.errorMessage || f,
        });
    r.k.set(t, {
        name: l,
        form: c,
        descriptionId: m.id,
        errorMessageId: g.id,
        validationBehavior: u,
    });
    let E = (0, i.z)(e, { labelable: !0 }),
        { focusWithinProps: b } = (0, s.L)({
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange,
        });
    return {
        groupProps: (0, a.d)(E, {
            role: "group",
            "aria-disabled": n || void 0,
            ...h,
            ...b,
        }),
        labelProps: p,
        descriptionProps: m,
        errorMessageProps: g,
        isInvalid: d,
        validationErrors: f,
        validationDetails: _,
    };
}
