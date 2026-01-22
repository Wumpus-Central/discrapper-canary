n.d(t, {
    X: () => s,
});
var r = n(64700),
    l = n(311907),
    i = n(77468),
    a = n(962173);

function s(e) {
    let t = (0, l.bG)([a.A], () => (null != e ? a.A.getAccount(null, e) : null)),
        n = (0, l.bG)([a.A], () => a.A.isFetching()),
        s = null != t && !t.revoked;
    return {
        loading: n,
        hasConnection: s,
        canConnect: null != e,
        startConnection: r.useCallback(
            async (t) => {
                if (null == e)
                    return {
                        success: !1,
                    };
                try {
                    var n;
                    let r = await i.A.authorize(e, {
                        location: null != t ? t : "Account Linking",
                    });
                    if (r.ok && (null == (n = r.body) ? void 0 : n.url) != null)
                        return {
                            success: !0,
                            url: r.body.url,
                        };
                    return {
                        success: !1,
                    };
                } catch (e) {
                    return {
                        success: !1,
                    };
                }
            },
            [e],
        ),
        account: t,
    };
}
