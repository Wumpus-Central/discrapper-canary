n.d(t, { Z: () => f }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(990547),
    a = n(399606),
    o = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(728345),
    d = n(812206),
    p = n(230171),
    m = n(433534);
function f(e) {
    let { applicationId: t, embedUrl: n } = e,
        [l, o, s] = (0, a.Wu)([d.Z], () => [d.Z.getApplication(t), d.Z.isFetchingApplication(t), d.Z.didFetchingApplicationFail(t)], [t]);
    return (i.useEffect(() => {
        null != l || o || s || u.ZP.fetchApplication(t);
    }, [l, o, s, t]),
    null != l &&
        (0, m.Eb)({
            customInstallUrl: l.customInstallUrl,
            installParams: l.installParams,
            integrationTypesConfig: l.integrationTypesConfig
        }))
        ? (0, r.jsx)(h, {
              application: l,
              embedUrl: n
          })
        : null;
}
function h(e) {
    let { application: t, embedUrl: n } = e,
        a = i.useCallback(() => {
            (0, c.h)({
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
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
            onView: a
        })
    });
}
