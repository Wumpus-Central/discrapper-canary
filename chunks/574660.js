n.d(t, { F: () => C, t: () => _ });
var i = n(582128),
    l = n(17928),
    s = n(735991),
    a = n(482030),
    r = n(837057),
    o = n(310419),
    c = n(734057),
    d = n(576705),
    u = n(309010),
    m = n(967198),
    h = n(692848),
    g = n(204776),
    p = n(354287),
    A = n(652215),
    x = n(488995),
    f = n(375708);
function E(e) {
    let { isDiscoverable: t, customInstallUrl: n, installParams: i, integrationTypesConfig: a } = e,
        r = (0, g.Ie)({ customInstallUrl: n, installParams: i, integrationTypesConfig: a }),
        o = (0, l.bG)([m.A], () => m.A.getGuildId() ?? void 0),
        h = (0, l.bG)([c.A, d.A, u.Ay], () => {
            let e = c.A.getChannel(u.Ay.getChannelId());
            return null != e && (e.isPrivate() || d.A.can(A.xBc.SEND_MESSAGES, e));
        }, []),
        p = (0, s.V1)(e, o) && h;
    return {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: i,
        integrationTypesConfig: a,
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
        isInstallable: s,
        customInstallUrl: c,
        installParams: d,
        integrationTypesConfig: u,
        selectedGuildId: m,
    } = E(e);
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
                                customInstallUrl: c,
                                installParams: d,
                                integrationTypesConfig: u,
                                guildId: m,
                                source: "app_message_embed",
                            });
                    }
                  : void 0,
        [e.id, l, n, c, d, u, s, t, m],
    );
}
function _(e) {
    let { canViewApp: t, isInstallable: n } = E(e),
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
