n.d(t, { F: () => E, t: () => v });
var i = n(64700),
    l = n(17928),
    s = n(735991),
    a = n(297486),
    r = n(837057),
    o = n(310419),
    d = n(734057),
    c = n(576705),
    u = n(309010),
    m = n(967198),
    h = n(692848),
    g = n(204776),
    A = n(354287),
    p = n(652215),
    x = n(488995),
    f = n(985018);
function C(e) {
    let { isDiscoverable: t, customInstallUrl: n, installParams: i, integrationTypesConfig: a } = e,
        r = (0, g.Ie)({ customInstallUrl: n, installParams: i, integrationTypesConfig: a }),
        o = (0, l.bG)([m.A], () => m.A.getGuildId() ?? void 0),
        h = (0, l.bG)([d.A, c.A, u.A], () => {
            let e = d.A.getChannel(u.A.getChannelId());
            return null != e && (e.isPrivate() || c.A.can(p.xBc.SEND_MESSAGES, e));
        }, []),
        A = (0, s.V1)(e, o) && h;
    return {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: i,
        integrationTypesConfig: a,
        canViewApp: t || A,
        canOpenAppLauncher: A,
        isInstallable: r,
        selectedGuildId: o,
    };
}
function E(e, t) {
    let {
        canViewApp: n,
        canOpenAppLauncher: l,
        isInstallable: s,
        customInstallUrl: d,
        installParams: c,
        integrationTypesConfig: u,
        selectedGuildId: m,
    } = C(e);
    return i.useMemo(
        () =>
            n
                ? () => {
                      (t?.(), l)
                          ? (0, a.hg)(e.id)
                          : (0, r.transitionToGlobalDiscovery)({
                                tab: x.GlobalDiscoveryTab.APPS,
                                applicationId: e.id,
                                newSessionState: { entrypoint: { name: o.sW.APPLICATION_MESSAGE_EMBED } },
                            });
                  }
                : s
                  ? () => {
                        t?.(),
                            (0, h.o)({
                                applicationId: e.id,
                                customInstallUrl: d,
                                installParams: c,
                                integrationTypesConfig: u,
                                guildId: m,
                                source: "app_message_embed",
                            });
                    }
                  : void 0,
        [e.id, l, n, d, c, u, s, t, m],
    );
}
function v(e) {
    let { canViewApp: t, isInstallable: n } = C(e),
        l = E(e);
    return i.useMemo(
        () =>
            t && null != l
                ? {
                      label: f.intl.string(f.t.hvVgAZ),
                      trackingArea: A.kY.VIEW,
                      onClick() {
                          l();
                      },
                  }
                : n && null != l
                  ? {
                        label: f.intl.string(f.t.NgXl3C),
                        trackingArea: A.kY.ADD_APP,
                        onClick() {
                            l();
                        },
                    }
                  : void 0,
        [t, n, l],
    );
}
