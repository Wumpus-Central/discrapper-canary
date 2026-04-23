n.d(t, { X: () => r });
var l = n(64700),
    a = n(17928),
    i = n(77468),
    s = n(30370);
function r(e) {
    let t = (0, a.bG)([s.A], () => (null != e ? s.A.getAccount(null, e) : null)),
        n = (0, a.bG)([s.A], () => s.A.isFetching()),
        r = null != t && !t.revoked;
    return {
        loading: n,
        hasConnection: r,
        canConnect: null != e,
        startConnection: l.useCallback(
            async (t) => {
                if (null == e) return { success: !1 };
                try {
                    let n = await i.A.authorize(e, { location: t ?? "Account Linking" });
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
