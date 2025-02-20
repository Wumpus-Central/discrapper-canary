n.d(e, { Z: () => s }), n(47120);
var i = n(192379),
    a = n(881052);
function s(t) {
    let { onSubmit: e, onClose: n } = t,
        [s, c] = i.useState(!1),
        [r, o] = i.useState(null),
        l = i.useCallback(async () => {
            if (!s) {
                c(!0), o(null);
                try {
                    await e(), n();
                } catch (t) {
                    o(new a.Hx(t).getAnyErrorMessage()), c(!1);
                }
            }
        }, [n, e, s]);
    return {
        submitting: s,
        errorMessage: r,
        onSubmit: l
    };
}
