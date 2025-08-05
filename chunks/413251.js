n.d(t, { Z: () => c });
var r = n(73800),
    i = n(442837),
    a = n(384275),
    o = n(728345),
    s = n(812206),
    l = n(881998);
function c(e) {
    let t = (null == e ? void 0 : e.require_application_authorization) ? e.application_id : null,
        { authorizationsFetchState: n, applicationOAuth2Token: c } = (0, i.cj)([l.Z], () => ({
            authorizationsFetchState: l.Z.getFetchState(),
            applicationOAuth2Token: l.Z.getNewestTokenForApplication(t)
        })),
        u = (0, i.e7)([s.Z], () => s.Z.getApplication(t)),
        d = (0, i.e7)([s.Z], () => s.Z.getApplication(null == u ? void 0 : u.parentId));
    ((0, r.useEffect)(() => {
        null != t && n === l.M.NOT_FETCHED && a.Z.fetch();
    }, [n, t]),
        (0, r.useEffect)(() => {
            null != t && null == u && n === l.M.FETCHED && o.ZP.fetchApplications([t], !1);
        }, [t, c, n, u]),
        (0, r.useEffect)(() => {
            null != u && null != u.parentId && null == d && n === l.M.FETCHED && o.ZP.fetchApplications([u.parentId], !1);
        }, [u, n, d]));
    let f = null != u && (null == u.parentId || null != d);
    return {
        showLinkedLobbyApplicationLoadingIndicator: null != t && (n !== l.M.FETCHED || null == u || !f),
        requiredLinkedLobbyApplication: null == c && null != u && f ? (null != d ? d : u) : null
    };
}
