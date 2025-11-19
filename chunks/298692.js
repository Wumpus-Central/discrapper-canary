n.d(t, { B: () => r });
var l = n(473749),
    i = n(788956);
function r(e) {
    let { loading: t, hasConnection: n, canConnect: r, startConnection: o, account: a } = (0, i.d)(e);
    return {
        loading: t,
        hasConnection: n,
        canConnect: r,
        startConnection: l.useCallback(
            async (e) => {
                let t = await o(e);
                if (t.success && null != t.url) {
                    let e = window.open(t.url, "_blank");
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
        account: a,
    };
}
