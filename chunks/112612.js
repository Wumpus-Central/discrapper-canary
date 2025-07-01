(e.d(n, { Z: () => s }), e(388685));
var i = e(73800),
    a = e(881052);
function s(t) {
    let { onSubmit: n, onClose: e } = t,
        [s, c] = i.useState(!1),
        [o, r] = i.useState(null),
        l = i.useCallback(async () => {
            if (!s) {
                (c(!0), r(null));
                try {
                    (await n(), e());
                } catch (t) {
                    (r(new a.Hx(t).getAnyErrorMessage()), c(!1));
                }
            }
        }, [e, n, s]);
    return {
        submitting: s,
        errorMessage: o,
        onSubmit: l
    };
}
