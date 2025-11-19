n.d(t, {
    G: () => y,
    z: () => O,
});
var r = n(473749),
    i = n(442837),
    a = n(783097),
    o = n(176412),
    s = n(749681),
    l = n(258971),
    c = n(592125),
    u = n(496675),
    d = n(944486),
    f = n(914010),
    _ = n(135431),
    p = n(433534),
    h = n(914498),
    m = n(981631),
    g = n(49898),
    E = n(388032);
function b(e) {
    let { isDiscoverable: t, customInstallUrl: n, installParams: r, integrationTypesConfig: o } = e,
        s = (0, p.Eb)({
            customInstallUrl: n,
            installParams: r,
            integrationTypesConfig: o,
        }),
        l = (0, i.e7)([f.Z], () => {
            var e;
            return null != (e = f.Z.getGuildId()) ? e : void 0;
        }),
        _ = (0, i.e7)([c.Z, u.Z, d.Z], () => {
            let e = c.Z.getChannel(d.Z.getChannelId());
            return null != e && (e.isPrivate() || u.Z.can(m.Plq.SEND_MESSAGES, e));
        }, []),
        h = (0, a.PZ)(e, l) && _,
        g = t || h;
    return {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: r,
        integrationTypesConfig: o,
        canViewApp: g,
        canOpenAppLauncher: h,
        isInstallable: s,
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
                      if ((null == t || t(), i)) return void (0, o.X)(e.id);
                      (0, s.transitionToGlobalDiscovery)({
                          tab: g.GlobalDiscoveryTab.APPS,
                          applicationId: e.id,
                          newSessionState: { entrypoint: { name: l.xF.APPLICATION_MESSAGE_EMBED } },
                      });
                  }
                : a
                  ? () => {
                        null == t || t(),
                            (0, _.L)({
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
                      trackingArea: h.j_.VIEW,
                      onClick() {
                          i();
                      },
                  }
                : n && null != i
                  ? {
                        label: E.intl.string(E.t.NgXl3C),
                        trackingArea: h.j_.ADD_APP,
                        onClick() {
                            i();
                        },
                    }
                  : void 0,
        [t, n, i],
    );
}
