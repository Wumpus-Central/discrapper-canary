"use strict";
n.d(t, { M: () => s });
var r = n(783786),
    i = n(723906),
    a = n(803082);
function s(e) {
    let { description: t, errorMessage: n, isInvalid: s, validationState: o } = e,
        { labelProps: l, fieldProps: u } = (0, r.M)(e),
        c = (0, i.X1)([!!t, !!n, s, o]),
        d = (0, i.X1)([!!t, !!n, s, o]);
    return {
        labelProps: l,
        fieldProps: (u = (0, a.v)(u, {
            "aria-describedby": [c, d, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        })),
        descriptionProps: { id: c },
        errorMessageProps: { id: d },
    };
}
