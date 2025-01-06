n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    r = n(479531),
    l = n(53365);
function a(e) {
    let [t, n] = i.useState(),
        [a, s] = i.useState(!1),
        [o, c] = i.useState(!1);
    return {
        error: t,
        loading: a,
        createEnableRequest: i.useCallback(async () => {
            if (null != e) {
                s(!0), n(void 0), c(!1);
                try {
                    await l.He(e), c(!0);
                } catch (e) {
                    n(new r.Z(e));
                } finally {
                    s(!1);
                }
            }
        }, [e]),
        submittedRequest: o
    };
}
