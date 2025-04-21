n.d(t, { Z: () => s }), n(388685);
var r = n(192379),
    i = n(479531),
    l = n(53365);
function s(e) {
    let [t, n] = r.useState(),
        [s, a] = r.useState(!1),
        [o, c] = r.useState(!1);
    return {
        error: t,
        loading: s,
        createEnableRequest: r.useCallback(async () => {
            if (null != e) {
                a(!0), n(void 0), c(!1);
                try {
                    await l.He(e), c(!0);
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
