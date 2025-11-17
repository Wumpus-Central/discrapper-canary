n.d(t, { h: () => i });
var r = n(975898);
function i(e, t, n) {
    let { labelProps: i, inputProps: a, isSelected: o, isPressed: s, isDisabled: l, isReadOnly: c } = (0, r.O)(e, t, n);
    return {
        labelProps: i,
        inputProps: {
            ...a,
            role: "switch",
            checked: o,
        },
        isSelected: o,
        isPressed: s,
        isDisabled: l,
        isReadOnly: c,
    };
}
