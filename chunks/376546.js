"use strict";
n.d(t, { M: () => l });
var r = n(150724),
    i = n(290424),
    a = n(803082),
    s = n(447432),
    o = n(744493);
function l(e, t) {
    let { isDisabled: n, name: l, form: u, validationBehavior: c = "aria" } = e,
        { isInvalid: d, validationErrors: _, validationDetails: f } = t.displayValidation,
        {
            labelProps: p,
            fieldProps: h,
            descriptionProps: m,
            errorMessageProps: g,
        } = (0, s.M)({ ...e, labelElementType: "span", isInvalid: d, errorMessage: e.errorMessage || _ });
    r.n.set(t, { name: l, form: u, descriptionId: m.id, errorMessageId: g.id, validationBehavior: c });
    let E = (0, i.$)(e, { labelable: !0 }),
        { focusWithinProps: A } = (0, o.R)({
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange,
        });
    return {
        groupProps: (0, a.v)(E, { role: "group", "aria-disabled": n || void 0, ...h, ...A }),
        labelProps: p,
        descriptionProps: m,
        errorMessageProps: g,
        isInvalid: d,
        validationErrors: _,
        validationDetails: f,
    };
}
