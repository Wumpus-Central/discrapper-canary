t.d(n, { Z: () => l }), t(388685);
var s = t(473749);
let l = (e) => {
    let [n, t] = s.useState(!1);
    return {
        isFocused: n,
        handleFocus: s.useCallback(
            (n) => {
                e(n), t(!0);
            },
            [e, t],
        ),
        handleBlur: () => {
            t(!1);
        },
    };
};
