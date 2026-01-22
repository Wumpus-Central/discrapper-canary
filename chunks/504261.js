n.d(t, { A: () => s }), n(896048);
var i = n(64700);
let s = (e) => {
    let [t, n] = i.useState(!1);
    return {
        isFocused: t,
        handleFocus: i.useCallback(
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
