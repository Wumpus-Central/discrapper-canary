i.d(t, { Z: () => a }), i(47120);
var n = i(192379);
let a = (e) => {
    let [t, i] = n.useState(!1);
    return {
        isFocused: t,
        handleFocus: n.useCallback(
            (t) => {
                e(t), i(!0);
            },
            [e, i]
        ),
        handleBlur: () => {
            i(!1);
        }
    };
};
