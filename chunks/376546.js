"use strict";
n.d(t, { M: () => l });
var r = n(150724),
    i = n(290424),
    s = n(803082),
    a = n(447432),
    o = n(744493);
function l(e, t) {
    let { isDisabled: n, name: l, form: u, validationBehavior: c = "aria" } = e,
        { isInvalid: d, validationErrors: _, validationDetails: f } = t.displayValidation,
        {
            labelProps: p,
            fieldProps: h,
            descriptionProps: E,
            errorMessageProps: m,
        } = (0, a.M)({ ...e, labelElementType: "span", isInvalid: d, errorMessage: e.errorMessage || _ });
    r.n.set(t, { name: l, form: u, descriptionId: E.id, errorMessageId: m.id, validationBehavior: c });
    let g = (0, i.$)(e, { labelable: !0 }),
        { focusWithinProps: A } = (0, o.R)({
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange,
        });
    return {
        groupProps: (0, s.v)(g, { role: "group", "aria-disabled": n || void 0, ...h, ...A }),
        labelProps: p,
        descriptionProps: E,
        errorMessageProps: m,
        isInvalid: d,
        validationErrors: _,
        validationDetails: f,
    };
}
