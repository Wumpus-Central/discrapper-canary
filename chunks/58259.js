n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    r = n(479531),
    l = n(53365);
function s(e) {
    let [t, n] = i.useState(),
        [s, a] = i.useState(!1),
        [o, c] = i.useState(!1);
    return {
        error: t,
        loading: s,
        createEnableRequest: i.useCallback(async () => {
            if (null != e) {
                a(!0), n(void 0), c(!1);
                try {
                    await l.He(e), c(!0);
                } catch (e) {
                    n(new r.Z(e));
                } finally {
                    a(!1);
                }
            }
        }, [e]),
        submittedRequest: o
    };
}
