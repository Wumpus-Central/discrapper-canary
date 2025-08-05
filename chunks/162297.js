(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(990547),
    o = n(399606),
    s = n(100527),
    l = n(906732),
    c = n(213609),
    u = n(728345),
    d = n(812206),
    f = n(230171),
    _ = n(433534);
function p(e) {
    let { applicationId: t } = e,
        [n, a, s] = (0, o.Wu)([d.Z], () => [d.Z.getApplication(t), d.Z.isFetchingApplication(t), d.Z.didFetchingApplicationFail(t)], [t]);
    return (i.useEffect(() => {
        null != n || a || s || u.ZP.fetchApplication(t);
    }, [n, a, s, t]),
    null != n &&
        (0, _.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, r.jsx)(h, { application: n })
        : null;
}
function h(e) {
    let { application: t } = e,
        n = i.useCallback(() => {
            (0, c.h)({
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id }
            });
        }, [t.id]),
        { analyticsLocations: o } = (0, l.ZP)(s.Z.APP_OAUTH2_LINK_EMBED);
    return (0, r.jsx)(l.Gt, {
        value: o,
        children: (0, r.jsx)(f.O, {
            app: t,
            linkType: f.U.OAUTH,
            onView: n
        })
    });
}
