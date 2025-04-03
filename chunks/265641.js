n.d(t, { Z: () => r }), n(47120);
var i = n(192379);
let r = (e) => {
    let [t, n] = i.useState(!1);
    return {
        isFocused: t,
        handleFocus: i.useCallback(
            (t) => {
                e(t), n(!0);
            },
            [e, n]
        ),
        handleBlur: () => {
            n(!1);
        }
    };
};
