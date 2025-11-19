n.d(t, { Z: () => l }), n(388685);
var a = n(473749);
let l = (e) => {
    let [t, n] = a.useState(!1);
    return {
        isFocused: t,
        handleFocus: a.useCallback(
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
