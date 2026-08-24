"use strict";
r.d(t, { M: () => a });
var n = r(429966),
    i = r(709157),
    o = r(192734);
function a(e) {
    let { description: t, errorMessage: r, isInvalid: a, validationState: s } = e,
        { labelProps: l, fieldProps: u } = (0, n.M)(e),
        c = (0, i.X1)([!!t, !!r, a, s]),
        f = (0, i.X1)([!!t, !!r, a, s]);
    return {
        labelProps: l,
        fieldProps: (u = (0, o.v)(u, {
            "aria-describedby": [c, f, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        })),
        descriptionProps: { id: c },
        errorMessageProps: { id: f },
    };
}
