var s = t(582128);
t.d(
    n,
    {},
    {
        A: function (e) {
            let [n, t] = s.useState(!1);
            return {
                isFocused: n,
                handleFocus: s.useCallback(
                    (n) => {
                        (e(n), t(!0));
                    },
                    [e, t],
                ),
                handleBlur: function () {
                    t(!1);
                },
            };
        },
    },
);
