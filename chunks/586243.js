n.d(t, { A: () => r });
var i = n(64700),
    l = n(181658),
    s = n(493540);
function r(e) {
    let [t, n] = i.useState(),
        [r, a] = i.useState(!1),
        [o, d] = i.useState(!1);
    return {
        error: t,
        loading: r,
        createEnableRequest: i.useCallback(async () => {
            if (null != e) {
                a(!0), n(void 0), d(!1);
                try {
                    await s.gO(e), d(!0);
                } catch (e) {
                    n(new l.A(e));
                } finally {
                    a(!1);
                }
            }
        }, [e]),
        submittedRequest: o,
    };
}
