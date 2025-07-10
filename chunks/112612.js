(e.d(n, { Z: () => r }), e(388685));
var i = e(73800),
    a = e(881052);
function r(t) {
    let { onSubmit: n, onClose: e } = t,
        [r, s] = i.useState(!1),
        [c, l] = i.useState(null),
        o = i.useCallback(async () => {
            if (!r) {
                (s(!0), l(null));
                try {
                    (await n(), e());
                } catch (t) {
                    (l(new a.Hx(t).getAnyErrorMessage()), s(!1));
                }
            }
        }, [e, n, r]);
    return {
        submitting: r,
        errorMessage: c,
        onSubmit: o
    };
}
