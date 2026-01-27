n.d(t, {
    F: () => y,
    t: () => v,
});
var r = n(64700),
    i = n(311907),
    l = n(735991),
    a = n(297486),
    s = n(837057),
    o = n(310419),
    c = n(734057),
    u = n(576705),
    d = n(309010),
    p = n(967198),
    m = n(692848),
    f = n(204776),
    g = n(354287),
    h = n(652215),
    _ = n(488995),
    b = n(985018);

function A(e) {
    let { isDiscoverable: t, customInstallUrl: n, installParams: r, integrationTypesConfig: a } = e,
        s = (0, f.Ie)({
            customInstallUrl: n,
            installParams: r,
            integrationTypesConfig: a,
        }),
        o = (0, i.bG)([p.A], () => {
            var e;
            return null != (e = p.A.getGuildId()) ? e : void 0;
        }),
        m = (0, i.bG)([c.A, u.A, d.A], () => {
            let e = c.A.getChannel(d.A.getChannelId());
            return null != e && (e.isPrivate() || u.A.can(h.xBc.SEND_MESSAGES, e));
        }, []),
        g = (0, l.V1)(e, o) && m;
    return {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: r,
        integrationTypesConfig: a,
        canViewApp: t || g,
        canOpenAppLauncher: g,
        isInstallable: s,
        selectedGuildId: o,
    };
}

function y(e, t) {
    let {
        canViewApp: n,
        canOpenAppLauncher: i,
        isInstallable: l,
        customInstallUrl: c,
        installParams: u,
        integrationTypesConfig: d,
        selectedGuildId: p,
    } = A(e);
    return r.useMemo(
        () =>
            n
                ? () => {
                      (null == t || t(), i)
                          ? (0, a.hg)(e.id)
                          : (0, s.transitionToGlobalDiscovery)({
                                tab: _.GlobalDiscoveryTab.APPS,
                                applicationId: e.id,
                                newSessionState: {
                                    entrypoint: {
                                        name: o.sW.APPLICATION_MESSAGE_EMBED,
                                    },
                                },
                            });
                  }
                : l
                  ? () => {
                        null == t || t(),
                            (0, m.o)({
                                applicationId: e.id,
                                customInstallUrl: c,
                                installParams: u,
                                integrationTypesConfig: d,
                                guildId: p,
                                source: "app_message_embed",
                            });
                    }
                  : void 0,
        [e.id, i, n, c, u, d, l, t, p],
    );
}

function v(e) {
    let { canViewApp: t, isInstallable: n } = A(e),
        i = y(e);
    return r.useMemo(
        () =>
            t && null != i
                ? {
                      label: b.intl.string(b.t.hvVgAZ),
                      trackingArea: g.kY.VIEW,
                      onClick() {
                          i();
                      },
                  }
                : n && null != i
                  ? {
                        label: b.intl.string(b.t.NgXl3C),
                        trackingArea: g.kY.ADD_APP,
                        onClick() {
                            i();
                        },
                    }
                  : void 0,
        [t, n, i],
    );
}
