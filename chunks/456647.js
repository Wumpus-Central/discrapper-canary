n.d(t, { X: () => o });
var i = n(582128),
    r = n(17928),
    l = n(77468),
    a = n(30370);
function o(e) {
    let t = (0, r.bG)([a.A], () => (null != e ? a.A.getAccount(null, e) : null)),
        n = (0, r.bG)([a.A], () => a.A.isFetching()),
        o = null != t && !t.revoked;
    return {
        loading: n,
        hasConnection: o,
        canConnect: null != e,
        startConnection: i.useCallback(
            async (t) => {
                if (null == e) return { success: !1 };
                try {
                    let n = await l.A.authorize(e, { location: t ?? "Account Linking" });
                    if (n.body?.url != null) return { success: !0, url: n.body.url };
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
