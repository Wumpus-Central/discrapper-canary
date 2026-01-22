n.d(t, { A: () => s }), n(896048);
var r = n(64700),
    i = n(181658),
    l = n(493540);
function s(e) {
    let [t, n] = r.useState(),
        [s, a] = r.useState(!1),
        [c, o] = r.useState(!1);
    return {
        error: t,
        loading: s,
        createEnableRequest: r.useCallback(async () => {
            if (null != e) {
                a(!0), n(void 0), o(!1);
                try {
                    await l.gO(e), o(!0);
                } catch (e) {
                    n(new i.A(e));
                } finally {
                    a(!1);
                }
            }
        }, [e]),
        submittedRequest: c,
    };
}
