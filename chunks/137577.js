n.d(t, { A: () => c });
var i = n(64700),
    l = n(311907),
    a = n(824552),
    s = n(627363),
    r = n(587895),
    o = n(546183);
function c(e) {
    let t = e?.require_application_authorization ? e.application_id : null,
        { authorizationsFetchState: n, applicationOAuth2Token: c } = (0, l.cf)([o.default], () => ({
            authorizationsFetchState: o.default.getFetchState(),
            applicationOAuth2Token: o.default.getNewestTokenForApplication(t),
        })),
        d = (0, l.bG)([r.A], () => r.A.getApplication(t)),
        u = (0, l.bG)([r.A], () => r.A.getApplication(d?.parentId));
    (0, i.useEffect)(() => {
        null != t && n === o.FetchState.NOT_FETCHED && a.A.fetch();
    }, [n, t]),
        (0, i.useEffect)(() => {
            null != t && null == d && n === o.FetchState.FETCHED && s.Ay.fetchApplications([t], !1);
        }, [t, c, n, d]),
        (0, i.useEffect)(() => {
            null != d &&
                null != d.parentId &&
                null == u &&
                n === o.FetchState.FETCHED &&
                s.Ay.fetchApplications([d.parentId], !1);
        }, [d, n, u]);
    let h = null != d && (null == d.parentId || null != u);
    return {
        showLinkedLobbyApplicationLoadingIndicator: null != t && (n !== o.FetchState.FETCHED || null == d || !h),
        requiredLinkedLobbyApplication: null == c && null != d && h ? (u ?? d) : null,
    };
}
