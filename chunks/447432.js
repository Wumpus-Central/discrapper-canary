"use strict";
n.d(t, { M: () => a });
var r = n(783786),
    i = n(723906),
    s = n(803082);
function a(e) {
    let { description: t, errorMessage: n, isInvalid: a, validationState: o } = e,
        { labelProps: l, fieldProps: u } = (0, r.M)(e),
        c = (0, i.X1)([!!t, !!n, a, o]),
        d = (0, i.X1)([!!t, !!n, a, o]);
    return {
        labelProps: l,
        fieldProps: (u = (0, s.v)(u, {
            "aria-describedby": [c, d, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        })),
        descriptionProps: { id: c },
        errorMessageProps: { id: d },
    };
}
