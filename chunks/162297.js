n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
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
    let { applicationId: t, message: n } = e,
        [a, s, l] = (0, o.Wu)(
            [d.Z],
            () => [d.Z.getApplication(t), d.Z.isFetchingApplication(t), d.Z.didFetchingApplicationFail(t)],
            [t],
        );
    return (i.useEffect(() => {
        null != a || s || l || u.ZP.fetchApplication(t);
    }, [a, s, l, t]),
    null != a &&
        (0, _.Eb)({
            customInstallUrl: a.customInstallUrl,
            installParams: a.installParams,
            integrationTypesConfig: a.integrationTypesConfig,
        }))
        ? (0, r.jsx)(h, {
              application: a,
              message: n,
          })
        : null;
}
function h(e) {
    let { application: t, message: n } = e,
        o = i.useCallback(() => {
            (0, c.h)({
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]),
        { analyticsLocations: u } = (0, l.ZP)(s.Z.APP_OAUTH2_LINK_EMBED);
    return (0, r.jsx)(l.Gt, {
        value: u,
        children: (0, r.jsx)(f.O, {
            app: t,
            linkType: f.U.OAUTH,
            onView: o,
            message: n,
        }),
    });
}
