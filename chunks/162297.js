n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(990547),
    o = n(399606),
    a = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(728345),
    d = n(812206),
    p = n(230171),
    m = n(433534);
function f(e) {
    let { applicationId: t } = e,
        [n, l, a] = (0, o.Wu)(
            [d.Z],
            () => [d.Z.getApplication(t), d.Z.isFetchingApplication(t), d.Z.didFetchingApplicationFail(t)],
            [t],
        );
    return (i.useEffect(() => {
        null != n || l || a || u.ZP.fetchApplication(t);
    }, [n, l, a, t]),
    null != n &&
        (0, m.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig,
        }))
        ? (0, r.jsx)(g, { application: n })
        : null;
}
function g(e) {
    let { application: t } = e,
        n = i.useCallback(() => {
            (0, c.h)({
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]),
        { analyticsLocations: o } = (0, s.ZP)(a.Z.APP_OAUTH2_LINK_EMBED);
    return (0, r.jsx)(s.Gt, {
        value: o,
        children: (0, r.jsx)(p.O, {
            app: t,
            linkType: p.U.OAUTH,
            onView: n,
        }),
    });
}
