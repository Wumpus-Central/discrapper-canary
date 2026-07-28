"use strict";
n.d(t, { M: () => o });
var r = n(429966),
    i = n(709157),
    a = n(192734);
function o(e) {
    let { description: t, errorMessage: n, isInvalid: o, validationState: s } = e,
        { labelProps: l, fieldProps: u } = (0, r.M)(e),
        c = (0, i.X1)([!!t, !!n, o, s]),
        d = (0, i.X1)([!!t, !!n, o, s]);
    return {
        labelProps: l,
        fieldProps: (u = (0, a.v)(u, {
            "aria-describedby": [c, d, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        })),
        descriptionProps: { id: c },
        errorMessageProps: { id: d },
    };
}
