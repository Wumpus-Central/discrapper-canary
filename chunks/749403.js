t.d(n, { p: () => a });
var l = t(64700),
    i = t(456647);
function a(e) {
    let { loading: n, hasConnection: t, canConnect: a, startConnection: r, account: o } = (0, i.X)(e);
    return {
        loading: n,
        hasConnection: t,
        canConnect: a,
        startConnection: l.useCallback(
            async (e) => {
                let n = await r(e);
                if (n.success && null != n.url) {
                    let e = window.open(n.url, "_blank");
                    return null == e ? { success: !1 } : { success: !0, popup: e };
                }
                return { success: !1 };
            },
            [r],
        ),
        account: o,
    };
}
