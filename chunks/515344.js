n.d(t, {
    G: () => C,
    z: () => v,
});
var r = n(647438),
    i = n(442837),
    l = n(783097),
    o = n(176412),
    a = n(749681),
    s = n(258971),
    c = n(592125),
    u = n(496675),
    d = n(944486),
    p = n(914010),
    m = n(135431),
    f = n(433534),
    g = n(914498),
    _ = n(981631),
    h = n(49898),
    b = n(388032);
function E(e) {
    let { isDiscoverable: t, customInstallUrl: n, installParams: r, integrationTypesConfig: o } = e,
        a = (0, f.Eb)({
            customInstallUrl: n,
            installParams: r,
            integrationTypesConfig: o,
        }),
        s = (0, i.e7)([p.Z], () => {
            var e;
            return null != (e = p.Z.getGuildId()) ? e : void 0;
        }),
        m = (0, i.e7)([c.Z, u.Z, d.Z], () => {
            let e = c.Z.getChannel(d.Z.getChannelId());
            return null != e && (e.isPrivate() || u.Z.can(_.Plq.SEND_MESSAGES, e));
        }, []),
        g = (0, l.PZ)(e, s) && m;
    return {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: r,
        integrationTypesConfig: o,
        canViewApp: t || g,
        canOpenAppLauncher: g,
        isInstallable: a,
        selectedGuildId: s,
    };
}
function C(e, t) {
    let {
        canViewApp: n,
        canOpenAppLauncher: i,
        isInstallable: l,
        customInstallUrl: c,
        installParams: u,
        integrationTypesConfig: d,
        selectedGuildId: p,
    } = E(e);
    return r.useMemo(
        () =>
            n
                ? () => {
                      if ((null == t || t(), i)) return void (0, o.X)(e.id);
                      (0, a.transitionToGlobalDiscovery)({
                          tab: h.GlobalDiscoveryTab.APPS,
                          applicationId: e.id,
                          newSessionState: { entrypoint: { name: s.xF.APPLICATION_MESSAGE_EMBED } },
                      });
                  }
                : l
                  ? () => {
                        null == t || t(),
                            (0, m.L)({
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
    let { canViewApp: t, isInstallable: n } = E(e),
        i = C(e);
    return r.useMemo(
        () =>
            t && null != i
                ? {
                      label: b.intl.string(b.t.hvVgAQ),
                      trackingArea: g.j_.VIEW,
                      onClick() {
                          i();
                      },
                  }
                : n && null != i
                  ? {
                        label: b.intl.string(b.t.NgXl3N),
                        trackingArea: g.j_.ADD_APP,
                        onClick() {
                            i();
                        },
                    }
                  : void 0,
        [t, n, i],
    );
}
