var l = n(582128),
    i = n(855986),
    s = n(627363),
    a = n(587895),
    r = n(712440),
    o = n(733110);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = e?.require_application_authorization ? e.application_id : null,
                { authorizationsFetchState: n, applicationOAuth2Token: c } = (0, i.cf)([o.A], () => ({
                    authorizationsFetchState: o.A.getFetchState(),
                    applicationOAuth2Token: o.A.getNewestTokenForApplication(t),
                })),
                d = (0, i.bG)([a.A], () => a.A.getApplication(t)),
                u = (0, i.bG)([a.A], () => a.A.getApplication(d?.parentId)),
                h = (0, i.bG)([o.A], () => o.A.getNewestTokenForApplication(d?.parentId));
            ((0, l.useEffect)(() => {
                null != t && n === o.FetchState.NOT_FETCHED && r.A.fetch();
            }, [n, t]),
                (0, l.useEffect)(() => {
                    null != t && null == d && n === o.FetchState.FETCHED && s.Ay.fetchApplications([t], !1);
                }, [t, c, n, d]),
                (0, l.useEffect)(() => {
                    null != d &&
                        null != d.parentId &&
                        null == u &&
                        n === o.FetchState.FETCHED &&
                        s.Ay.fetchApplications([d.parentId], !1);
                }, [d, n, u]));
            let m = null != d && (null == d.parentId || null != u),
                g = null == c && null != d && m,
                p = g && null != u && null != h;
            return {
                showLinkedLobbyApplicationLoadingIndicator:
                    null != t && (n !== o.FetchState.FETCHED || null == d || !m),
                requiredLinkedLobbyApplication: g ? (p ? d : (u ?? d)) : null,
                shouldRelaunchLinkedLobbyApplication: p,
            };
        },
    },
);
