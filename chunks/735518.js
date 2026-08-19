"use strict";
r.d(t, { K: () => o });
var n = r(568864);
function o(e, t, r) {
    let { labelProps: o, inputProps: i, isSelected: a, isPressed: s, isDisabled: l, isReadOnly: u } = (0, n.e)(e, t, r);
    return {
        labelProps: o,
        inputProps: { ...i, role: "switch", checked: a },
        isSelected: a,
        isPressed: s,
        isDisabled: l,
        isReadOnly: u,
    };
}
