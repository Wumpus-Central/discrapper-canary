n.d(t, { F: () => C, t: () => E });
var i = n(64700),
    l = n(311907),
    a = n(735991),
    s = n(297486),
    r = n(837057),
    o = n(310419),
    d = n(734057),
    c = n(576705),
    u = n(309010),
    m = n(967198),
    _ = n(692848),
    h = n(204776),
    p = n(354287),
    g = n(652215),
    A = n(488995),
    f = n(985018);
function x(e) {
    let { isDiscoverable: t, customInstallUrl: n, installParams: i, integrationTypesConfig: s } = e,
        r = (0, h.Ie)({ customInstallUrl: n, installParams: i, integrationTypesConfig: s }),
        o = (0, l.bG)([m.A], () => m.A.getGuildId() ?? void 0),
        _ = (0, l.bG)([d.A, c.A, u.A], () => {
            let e = d.A.getChannel(u.A.getChannelId());
            return null != e && (e.isPrivate() || c.A.can(g.xBc.SEND_MESSAGES, e));
        }, []),
        p = (0, a.V1)(e, o) && _;
    return {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: i,
        integrationTypesConfig: s,
        canViewApp: t || p,
        canOpenAppLauncher: p,
        isInstallable: r,
        selectedGuildId: o,
    };
}
function C(e, t) {
    let {
        canViewApp: n,
        canOpenAppLauncher: l,
        isInstallable: a,
        customInstallUrl: d,
        installParams: c,
        integrationTypesConfig: u,
        selectedGuildId: m,
    } = x(e);
    return i.useMemo(
        () =>
            n
                ? () => {
                      (t?.(), l)
                          ? (0, s.hg)(e.id)
                          : (0, r.transitionToGlobalDiscovery)({
                                tab: A.GlobalDiscoveryTab.APPS,
                                applicationId: e.id,
                                newSessionState: { entrypoint: { name: o.sW.APPLICATION_MESSAGE_EMBED } },
                            });
                  }
                : a
                  ? () => {
                        t?.(),
                            (0, _.o)({
                                applicationId: e.id,
                                customInstallUrl: d,
                                installParams: c,
                                integrationTypesConfig: u,
                                guildId: m,
                                source: "app_message_embed",
                            });
                    }
                  : void 0,
        [e.id, l, n, d, c, u, a, t, m],
    );
}
function E(e) {
    let { canViewApp: t, isInstallable: n } = x(e),
        l = C(e);
    return i.useMemo(
        () =>
            t && null != l
                ? {
                      label: f.intl.string(f.t.hvVgAZ),
                      trackingArea: p.kY.VIEW,
                      onClick() {
                          l();
                      },
                  }
                : n && null != l
                  ? {
                        label: f.intl.string(f.t.NgXl3C),
                        trackingArea: p.kY.ADD_APP,
                        onClick() {
                            l();
                        },
                    }
                  : void 0,
        [t, n, l],
    );
}
