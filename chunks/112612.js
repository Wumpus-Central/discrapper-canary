n.d(e, { Z: () => a }), n(388685);
var i = n(192379),
    s = n(881052);
function a(t) {
    let { onSubmit: e, onClose: n } = t,
        [a, c] = i.useState(!1),
        [r, o] = i.useState(null),
        l = i.useCallback(async () => {
            if (!a) {
                c(!0), o(null);
                try {
                    await e(), n();
                } catch (t) {
                    o(new s.Hx(t).getAnyErrorMessage()), c(!1);
                }
            }
        }, [n, e, a]);
    return {
        submitting: a,
        errorMessage: r,
        onSubmit: l
    };
}
