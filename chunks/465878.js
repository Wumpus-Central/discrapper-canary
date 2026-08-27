"use strict";
r.d(t, { M: () => a });
var n = r(66464),
    i = r(184093),
    o = r(295551);
function a(e) {
    let { description: t, errorMessage: r, isInvalid: a, validationState: s } = e,
        { labelProps: l, fieldProps: u } = (0, n.M)(e),
        c = (0, o.X1)([!!t, !!r, a, s]),
        f = (0, o.X1)([!!t, !!r, a, s]);
    return {
        labelProps: l,
        fieldProps: (u = (0, i.v)(u, {
            "aria-describedby": [c, f, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        })),
        descriptionProps: { id: c },
        errorMessageProps: { id: f },
    };
}
