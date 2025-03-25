n.d(t, { z: () => v });
var r = n(192379),
    i = n(442837),
    a = n(783097),
    o = n(176412),
    l = n(749681),
    s = n(258971),
    c = n(592125),
    u = n(496675),
    d = n(944486),
    p = n(914010),
    m = n(135431),
    f = n(433534),
    h = n(914498),
    g = n(981631),
    _ = n(49898),
    b = n(388032);
function v(e, t) {
    let { isDiscoverable: n, customInstallUrl: v, installParams: y, integrationTypesConfig: x } = e,
        E = (0, f.E)({
            customInstallUrl: v,
            installParams: y,
            integrationTypesConfig: x
        }),
        O = (0, i.e7)([p.Z], () => {
            var e;
            return null !== (e = p.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        N = (0, i.e7)(
            [c.Z, u.Z, d.Z],
            () => {
                let e = c.Z.getChannel(d.Z.getChannelId());
                return null != e && (e.isPrivate() || u.Z.can(g.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        j = (0, a.PZ)(e, O) && N,
        C = n || j;
    return r.useMemo(
        () =>
            C
                ? {
                      label: b.NW.string(b.t['HO/oXl']),
                      trackingArea: h.j_.VIEW,
                      onClick() {
                          if ((null == t || t(h.j_.VIEW), j)) {
                              (0, o.X)(e.id);
                              return;
                          }
                          (0, l.transitionToGlobalDiscovery)({
                              tab: _.GlobalDiscoveryTab.APPS,
                              applicationId: e.id,
                              newSessionState: { entrypoint: { name: s.xF.APPLICATION_DIRECTORY_PROFILE_EMBED } }
                          });
                      }
                  }
                : E
                  ? {
                        label: b.NW.string(b.t.NgXl3N),
                        trackingArea: h.j_.ADD_APP,
                        onClick() {
                            null == t || t(h.j_.ADD_APP),
                                (0, m.LO)({
                                    applicationId: e.id,
                                    customInstallUrl: v,
                                    installParams: y,
                                    integrationTypesConfig: x,
                                    guildId: O,
                                    source: 'app_message_embed'
                                });
                        }
                    }
                  : void 0,
        [e.id, j, C, v, y, x, E, t, O]
    );
}
