a.d(n, { A: () => l }), a(896048);
var e = a(64700),
    i = a(198982);
function l(t) {
    let { onSubmit: n, onClose: a } = t,
        [l, r] = e.useState(!1),
        [s, c] = e.useState(null),
        o = e.useCallback(async () => {
            if (!l) {
                r(!0), c(null);
                try {
                    await n(), a();
                } catch (t) {
                    c(new i.LG(t).getAnyErrorMessage()), r(!1);
                }
            }
        }, [a, n, l]);
    return {
        submitting: l,
        errorMessage: s,
        onSubmit: o,
    };
}
