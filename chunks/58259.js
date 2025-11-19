n.d(t, { Z: () => a }), n(388685);
var r = n(473749),
    i = n(479531),
    l = n(53365);
function a(e) {
    let [t, n] = r.useState(),
        [a, s] = r.useState(!1),
        [o, c] = r.useState(!1);
    return {
        error: t,
        loading: a,
        createEnableRequest: r.useCallback(async () => {
            if (null != e) {
                s(!0), n(void 0), c(!1);
                try {
                    await l.He(e), c(!0);
                } catch (e) {
                    n(new i.Z(e));
                } finally {
                    s(!1);
                }
            }
        }, [e]),
        submittedRequest: o,
    };
}
