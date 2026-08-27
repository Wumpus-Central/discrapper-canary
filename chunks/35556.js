"use strict";
r.d(t, { K: () => i });
var n = r(249620);
function i(e, t, r) {
    let { labelProps: i, inputProps: o, isSelected: a, ...s } = (0, n.e)(e, t, r);
    return { labelProps: i, inputProps: { ...o, role: "switch", checked: a }, isSelected: a, ...s };
}
