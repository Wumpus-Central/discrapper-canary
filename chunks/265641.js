n.d(t, { Z: () => l }), n(388685);
var s = n(473749);
let l = (e) => {
    let [t, n] = s.useState(!1);
    return {
        isFocused: t,
        handleFocus: s.useCallback(
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
