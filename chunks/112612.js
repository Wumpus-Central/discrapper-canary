e.d(n, { Z: () => a }), e(388685);
var i = e(192379),
    s = e(881052);
function a(t) {
    let { onSubmit: n, onClose: e } = t,
        [a, c] = i.useState(!1),
        [r, o] = i.useState(null),
        l = i.useCallback(async () => {
            if (!a) {
                c(!0), o(null);
                try {
                    await n(), e();
                } catch (t) {
                    o(new s.Hx(t).getAnyErrorMessage()), c(!1);
                }
            }
        }, [e, n, a]);
    return {
        submitting: a,
        errorMessage: r,
        onSubmit: l
    };
}
