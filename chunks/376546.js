n.d(t, { M: () => l });
var r = n(150724),
    i = n(290424),
    a = n(803082),
    s = n(447432),
    o = n(744493);
function l(e, t) {
    let { isDisabled: n, name: l, form: c, validationBehavior: u = "aria" } = e,
        { isInvalid: d, validationErrors: f, validationDetails: p } = t.displayValidation,
        {
            labelProps: _,
            fieldProps: h,
            descriptionProps: m,
            errorMessageProps: g,
        } = (0, s.M)({
            ...e,
            labelElementType: "span",
            isInvalid: d,
            errorMessage: e.errorMessage || f,
        });
    r.n.set(t, {
        name: l,
        form: c,
        descriptionId: m.id,
        errorMessageId: g.id,
        validationBehavior: u,
    });
    let E = (0, i.$)(e, { labelable: !0 }),
        { focusWithinProps: b } = (0, o.R)({
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange,
        });
    return {
        groupProps: (0, a.v)(E, {
            role: "group",
            "aria-disabled": n || void 0,
            ...h,
            ...b,
        }),
        labelProps: _,
        descriptionProps: m,
        errorMessageProps: g,
        isInvalid: d,
        validationErrors: f,
        validationDetails: p,
    };
}
