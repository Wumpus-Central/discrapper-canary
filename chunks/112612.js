(e.d(n, { Z: () => r }), e(388685));
var i = e(73800),
    a = e(881052);
function r(t) {
    let { onSubmit: n, onClose: e } = t,
        [r, c] = i.useState(!1),
        [o, s] = i.useState(null),
        l = i.useCallback(async () => {
            if (!r) {
                (c(!0), s(null));
                try {
                    (await n(), e());
                } catch (t) {
                    (s(new a.Hx(t).getAnyErrorMessage()), c(!1));
                }
            }
        }, [e, n, r]);
    return {
        submitting: r,
        errorMessage: o,
        onSubmit: l
    };
}
