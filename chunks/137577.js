n.d(t, { A: () => c });
var r = n(64700),
    l = n(311907),
    i = n(824552),
    a = n(627363),
    s = n(587895),
    o = n(546183);
function c(e) {
    let t = (null == e ? void 0 : e.require_application_authorization) ? e.application_id : null,
        { authorizationsFetchState: n, applicationOAuth2Token: c } = (0, l.cf)([o.default], () => ({
            authorizationsFetchState: o.default.getFetchState(),
            applicationOAuth2Token: o.default.getNewestTokenForApplication(t),
        })),
        u = (0, l.bG)([s.A], () => s.A.getApplication(t)),
        d = (0, l.bG)([s.A], () => s.A.getApplication(null == u ? void 0 : u.parentId));
    (0, r.useEffect)(() => {
        null != t && n === o.FetchState.NOT_FETCHED && i.A.fetch();
    }, [n, t]),
        (0, r.useEffect)(() => {
            null != t && null == u && n === o.FetchState.FETCHED && a.Ay.fetchApplications([t], !1);
        }, [t, c, n, u]),
        (0, r.useEffect)(() => {
            null != u &&
                null != u.parentId &&
                null == d &&
                n === o.FetchState.FETCHED &&
                a.Ay.fetchApplications([u.parentId], !1);
        }, [u, n, d]);
    let f = null != u && (null == u.parentId || null != d);
    return {
        showLinkedLobbyApplicationLoadingIndicator: null != t && (n !== o.FetchState.FETCHED || null == u || !f),
        requiredLinkedLobbyApplication: null == c && null != u && f ? (null != d ? d : u) : null,
    };
}
