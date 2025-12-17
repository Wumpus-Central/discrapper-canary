e.d(n, { Z: () => c }), e(388685);
var i = e(473749),
    a = e(881052);
function c(t) {
    let { onSubmit: n, onClose: e } = t,
        [c, l] = i.useState(!1),
        [r, o] = i.useState(null),
        s = i.useCallback(async () => {
            if (!c) {
                l(!0), o(null);
                try {
                    await n(), e();
                } catch (t) {
                    o(new a.Hx(t).getAnyErrorMessage()), l(!1);
                }
            }
        }, [e, n, c]);
    return {
        submitting: c,
        errorMessage: r,
        onSubmit: s,
    };
}
