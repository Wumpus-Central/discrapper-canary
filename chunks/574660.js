n.d(t, { F: () => C, t: () => v });
var i = n(64700),
    l = n(17928),
    a = n(735991),
    r = n(297486),
    s = n(837057),
    o = n(310419),
    c = n(734057),
    d = n(576705),
    u = n(309010),
    _ = n(967198),
    m = n(692848),
    h = n(204776),
    p = n(354287),
    g = n(652215),
    f = n(488995),
    x = n(985018);
function A(e) {
    let { isDiscoverable: t, customInstallUrl: n, installParams: i, integrationTypesConfig: r } = e,
        s = (0, h.Ie)({ customInstallUrl: n, installParams: i, integrationTypesConfig: r }),
        o = (0, l.bG)([_.A], () => _.A.getGuildId() ?? void 0),
        m = (0, l.bG)([c.A, d.A, u.A], () => {
            let e = c.A.getChannel(u.A.getChannelId());
            return null != e && (e.isPrivate() || d.A.can(g.xBc.SEND_MESSAGES, e));
        }, []),
        p = (0, a.V1)(e, o) && m;
    return {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: i,
        integrationTypesConfig: r,
        canViewApp: t || p,
        canOpenAppLauncher: p,
        isInstallable: s,
        selectedGuildId: o,
    };
}
function C(e, t) {
    let {
        canViewApp: n,
        canOpenAppLauncher: l,
        isInstallable: a,
        customInstallUrl: c,
        installParams: d,
        integrationTypesConfig: u,
        selectedGuildId: _,
    } = A(e);
    return i.useMemo(
        () =>
            n
                ? () => {
                      (t?.(), l)
                          ? (0, r.hg)(e.id)
                          : (0, s.transitionToGlobalDiscovery)({
                                tab: f.GlobalDiscoveryTab.APPS,
                                applicationId: e.id,
                                newSessionState: { entrypoint: { name: o.sW.APPLICATION_MESSAGE_EMBED } },
                            });
                  }
                : a
                  ? () => {
                        t?.(),
                            (0, m.o)({
                                applicationId: e.id,
                                customInstallUrl: c,
                                installParams: d,
                                integrationTypesConfig: u,
                                guildId: _,
                                source: "app_message_embed",
                            });
                    }
                  : void 0,
        [e.id, l, n, c, d, u, a, t, _],
    );
}
function v(e) {
    let { canViewApp: t, isInstallable: n } = A(e),
        l = C(e);
    return i.useMemo(
        () =>
            t && null != l
                ? {
                      label: x.intl.string(x.t.hvVgAZ),
                      trackingArea: p.kY.VIEW,
                      onClick() {
                          l();
                      },
                  }
                : n && null != l
                  ? {
                        label: x.intl.string(x.t.NgXl3C),
                        trackingArea: p.kY.ADD_APP,
                        onClick() {
                            l();
                        },
                    }
                  : void 0,
        [t, n, l],
    );
}
