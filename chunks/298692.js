t.d(n, { B: () => a });
var l = t(647438),
    i = t(788956);
function a(e) {
    let { loading: n, hasConnection: t, canConnect: a, startConnection: o, account: r } = (0, i.d)(e);
    return {
        loading: n,
        hasConnection: t,
        canConnect: a,
        startConnection: l.useCallback(
            async (e) => {
                let n = await o(e);
                if (n.success && null != n.url) {
                    let e = window.open(n.url, "_blank");
                    return null == e
                        ? { success: !1 }
                        : {
                              success: !0,
                              popup: e,
                          };
                }
                return { success: !1 };
            },
            [o],
        ),
        account: r,
    };
}
