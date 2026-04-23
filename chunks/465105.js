a.d(n, { A: () => l });
var i = a(64700),
    e = a(198982);
function l(t) {
    let { onSubmit: n, onClose: a } = t,
        [l, r] = i.useState(!1),
        [s, c] = i.useState(null),
        o = i.useCallback(async () => {
            if (!l) {
                r(!0), c(null);
                try {
                    await n(), a();
                } catch (t) {
                    c(new e.LG(t).getAnyErrorMessage()), r(!1);
                }
            }
        }, [a, n, l]);
    return { submitting: l, errorMessage: s, onSubmit: o };
}
