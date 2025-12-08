i.d(n, { Z: () => c }), i(388685);
var e = i(473749),
    a = i(881052);
function c(t) {
    let { onSubmit: n, onClose: i } = t,
        [c, l] = e.useState(!1),
        [r, o] = e.useState(null),
        s = e.useCallback(async () => {
            if (!c) {
                l(!0), o(null);
                try {
                    await n(), i();
                } catch (t) {
                    o(new a.Hx(t).getAnyErrorMessage()), l(!1);
                }
            }
        }, [i, n, c]);
    return {
        submitting: c,
        errorMessage: r,
        onSubmit: s,
    };
}
