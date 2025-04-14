n.d(t, { Z: () => l }), n(388685);
var r = n(192379),
    i = n(479531),
    s = n(53365);
function l(e) {
    let [t, n] = r.useState(),
        [l, a] = r.useState(!1),
        [o, c] = r.useState(!1);
    return {
        error: t,
        loading: l,
        createEnableRequest: r.useCallback(async () => {
            if (null != e) {
                a(!0), n(void 0), c(!1);
                try {
                    await s.He(e), c(!0);
                } catch (e) {
                    n(new i.Z(e));
                } finally {
                    a(!1);
                }
            }
        }, [e]),
        submittedRequest: o
    };
}
