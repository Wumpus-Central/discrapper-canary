n.d(t, { p: () => a });
var l = n(64700),
    i = n(456647);
function a(e) {
    let { loading: t, hasConnection: n, canConnect: a, startConnection: r, account: o } = (0, i.X)(e);
    return {
        loading: t,
        hasConnection: n,
        canConnect: a,
        startConnection: l.useCallback(
            async (e) => {
                let t = await r(e);
                if (t.success && null != t.url) {
                    let e = window.open(t.url, "_blank");
                    return null == e ? { success: !1 } : { success: !0, popup: e };
                }
                return { success: !1 };
            },
            [r],
        ),
        account: o,
    };
}
