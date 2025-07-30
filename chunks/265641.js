(n.d(t, { Z: () => a }), n(388685));
var r = n(73800);
let a = (e) => {
    let [t, n] = r.useState(!1);
    return {
        isFocused: t,
        handleFocus: r.useCallback(
            (t) => {
                (e(t), n(!0));
            },
            [e, n]
        ),
        handleBlur: () => {
            n(!1);
        }
    };
};
