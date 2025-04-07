n.d(t, { Z: () => f }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(990547),
    l = n(399606),
    o = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(728345),
    d = n(812206),
    p = n(230171),
    m = n(433534);
function f(e) {
    let { applicationId: t, embedUrl: n } = e,
        [a, o, s] = (0, l.Wu)([d.Z], () => [d.Z.getApplication(t), d.Z.isFetchingApplication(t), d.Z.didFetchingApplicationFail(t)], [t]);
    return (i.useEffect(() => {
        null != a || o || s || u.ZP.fetchApplication(t);
    }, [a, o, s, t]),
    null != a &&
        (0, m.E)({
            customInstallUrl: a.customInstallUrl,
            installParams: a.installParams,
            integrationTypesConfig: a.integrationTypesConfig
        }))
        ? (0, r.jsx)(h, {
              application: a,
              embedUrl: n
          })
        : null;
}
function h(e) {
    let { application: t, embedUrl: n } = e,
        l = i.useCallback(() => {
            (0, c.h)({
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id }
            });
        }, [t.id]),
        { analyticsLocations: u } = (0, s.ZP)(o.Z.APP_OAUTH2_LINK_EMBED);
    return (0, r.jsx)(s.Gt, {
        value: u,
        children: (0, r.jsx)(p.O, {
            app: t,
            embedUrl: n,
            linkType: p.U.OAUTH,
            onView: l
        })
    });
}
