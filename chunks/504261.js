s.d(t, { A: () => l });
var n = s(64700);
let l = (e) => {
    let [t, s] = n.useState(!1);
    return {
        isFocused: t,
        handleFocus: n.useCallback(
            (t) => {
                e(t), s(!0);
            },
            [e, s],
        ),
        handleBlur: () => {
            s(!1);
        },
    };
};
