n.d(t, {
    p: () => i,
});
var l = n(64700),
    r = n(456647);

function i(e) {
    let { loading: t, hasConnection: n, canConnect: i, startConnection: a, account: o } = (0, r.X)(e);
    return {
        loading: t,
        hasConnection: n,
        canConnect: i,
        startConnection: l.useCallback(
            async (e) => {
                let t = await a(e);
                if (t.success && null != t.url) {
                    let e = window.open(t.url, "_blank");
                    return null == e
                        ? {
                              success: !1,
                          }
                        : {
                              success: !0,
                              popup: e,
                          };
                }
                return {
                    success: !1,
                };
            },
            [a],
        ),
        account: o,
    };
}
