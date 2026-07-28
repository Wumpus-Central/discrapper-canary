n.d(t, { A: () => l });
var s = n(582128);
let l = function (e) {
    let [t, n] = s.useState(!1);
    return {
        isFocused: t,
        handleFocus: s.useCallback(
            (t) => {
                e(t), n(!0);
            },
            [e, n],
        ),
        handleBlur: function () {
            n(!1);
        },
    };
};
