n.d(t, {
    F: () => y,
    t: () => O,
});
var r = n(64700),
    i = n(311907),
    a = n(735991),
    s = n(297486),
    o = n(837057),
    l = n(310419),
    c = n(734057),
    u = n(576705),
    d = n(309010),
    f = n(967198),
    p = n(692848),
    _ = n(204776),
    h = n(354287),
    m = n(652215),
    g = n(488995),
    E = n(985018);
function b(e) {
    let { isDiscoverable: t, customInstallUrl: n, installParams: r, integrationTypesConfig: s } = e,
        o = (0, _.Ie)({
            customInstallUrl: n,
            installParams: r,
            integrationTypesConfig: s,
        }),
        l = (0, i.bG)([f.A], () => {
            var e;
            return null != (e = f.A.getGuildId()) ? e : void 0;
        }),
        p = (0, i.bG)([c.A, u.A, d.A], () => {
            let e = c.A.getChannel(d.A.getChannelId());
            return null != e && (e.isPrivate() || u.A.can(m.xBc.SEND_MESSAGES, e));
        }, []),
        h = (0, a.V1)(e, l) && p,
        g = t || h;
    return {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: r,
        integrationTypesConfig: s,
        canViewApp: g,
        canOpenAppLauncher: h,
        isInstallable: o,
        selectedGuildId: l,
    };
}
function y(e, t) {
    let {
        canViewApp: n,
        canOpenAppLauncher: i,
        isInstallable: a,
        customInstallUrl: c,
        installParams: u,
        integrationTypesConfig: d,
        selectedGuildId: f,
    } = b(e);
    return r.useMemo(
        () =>
            n
                ? () => {
                      (null == t || t(), i)
                          ? (0, s.hg)(e.id)
                          : (0, o.transitionToGlobalDiscovery)({
                                tab: g.GlobalDiscoveryTab.APPS,
                                applicationId: e.id,
                                newSessionState: { entrypoint: { name: l.sW.APPLICATION_MESSAGE_EMBED } },
                            });
                  }
                : a
                  ? () => {
                        null == t || t(),
                            (0, p.o)({
                                applicationId: e.id,
                                customInstallUrl: c,
                                installParams: u,
                                integrationTypesConfig: d,
                                guildId: f,
                                source: "app_message_embed",
                            });
                    }
                  : void 0,
        [e.id, i, n, c, u, d, a, t, f],
    );
}
function O(e) {
    let { canViewApp: t, isInstallable: n } = b(e),
        i = y(e);
    return r.useMemo(
        () =>
            t && null != i
                ? {
                      label: E.intl.string(E.t.hvVgAZ),
                      trackingArea: h.kY.VIEW,
                      onClick() {
                          i();
                      },
                  }
                : n && null != i
                  ? {
                        label: E.intl.string(E.t.NgXl3C),
                        trackingArea: h.kY.ADD_APP,
                        onClick() {
                            i();
                        },
                    }
                  : void 0,
        [t, n, i],
    );
}
