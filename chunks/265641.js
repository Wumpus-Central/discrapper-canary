n.d(t, { Z: () => a }), n(388685);
var l = n(647438);
let a = (e) => {
    let [t, n] = l.useState(!1);
    return {
        isFocused: t,
        handleFocus: l.useCallback(
            (t) => {
                e(t), n(!0);
            },
            [e, n],
        ),
        handleBlur: () => {
            n(!1);
        },
    };
};
