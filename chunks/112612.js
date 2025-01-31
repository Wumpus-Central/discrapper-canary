e.d(n, { Z: () => s }), e(47120);
var i = e(192379),
    a = e(881052);
function s(t) {
    let { onSubmit: n, onClose: e } = t,
        [s, c] = i.useState(!1),
        [r, o] = i.useState(null),
        l = i.useCallback(async () => {
            if (!s) {
                c(!0), o(null);
                try {
                    await n(), e();
                } catch (t) {
                    o(new a.Hx(t).getAnyErrorMessage()), c(!1);
                }
            }
        }, [e, n, s]);
    return {
        submitting: s,
        errorMessage: r,
        onSubmit: l
    };
}
