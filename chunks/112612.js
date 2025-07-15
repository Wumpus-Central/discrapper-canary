(e.d(n, { Z: () => c }), e(388685));
var i = e(73800),
    a = e(881052);
function c(t) {
    let { onSubmit: n, onClose: e } = t,
        [c, r] = i.useState(!1),
        [o, s] = i.useState(null),
        l = i.useCallback(async () => {
            if (!c) {
                (r(!0), s(null));
                try {
                    (await n(), e());
                } catch (t) {
                    (s(new a.Hx(t).getAnyErrorMessage()), r(!1));
                }
            }
        }, [e, n, c]);
    return {
        submitting: c,
        errorMessage: o,
        onSubmit: l
    };
}
