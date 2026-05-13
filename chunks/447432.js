"use strict";
n.d(t, { M: () => a });
var i = n(783786),
    r = n(985620),
    s = n(318473);
function a(e) {
    let { description: t, errorMessage: n, isInvalid: a, validationState: o } = e,
        { labelProps: l, fieldProps: u } = (0, i.M)(e),
        c = (0, r.X1)([!!t, !!n, a, o]),
        d = (0, r.X1)([!!t, !!n, a, o]);
    return {
        labelProps: l,
        fieldProps: (u = (0, s.v)(u, {
            "aria-describedby": [c, d, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        })),
        descriptionProps: { id: c },
        errorMessageProps: { id: d },
    };
}
