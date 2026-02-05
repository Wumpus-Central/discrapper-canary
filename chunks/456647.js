n.d(t, { X: () => s });
var i = n(64700),
    l = n(311907),
    a = n(77468),
    r = n(962173);
function s(e) {
    let t = (0, l.bG)([r.A], () => (null != e ? r.A.getAccount(null, e) : null)),
        n = (0, l.bG)([r.A], () => r.A.isFetching()),
        s = null != t && !t.revoked;
    return {
        loading: n,
        hasConnection: s,
        canConnect: null != e,
        startConnection: i.useCallback(
            async (t) => {
                if (null == e) return { success: !1 };
                try {
                    let n = await a.A.authorize(e, { location: t ?? "Account Linking" });
                    if (n.ok && n.body?.url != null) return { success: !0, url: n.body.url };
                    return { success: !1 };
                } catch (e) {
                    return { success: !1 };
                }
            },
            [e],
        ),
        account: t,
    };
}
