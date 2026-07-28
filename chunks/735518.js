"use strict";
n.d(t, { K: () => i });
var r = n(568864);
function i(e, t, n) {
    let { labelProps: i, inputProps: a, isSelected: o, isPressed: s, isDisabled: l, isReadOnly: u } = (0, r.e)(e, t, n);
    return {
        labelProps: i,
        inputProps: { ...a, role: "switch", checked: o },
        isSelected: o,
        isPressed: s,
        isDisabled: l,
        isReadOnly: u,
    };
}
