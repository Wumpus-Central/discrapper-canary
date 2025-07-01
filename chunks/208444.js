n.d(t, { z: () => E });
var r = n(73800),
    i = n(442837),
    l = n(783097),
    a = n(176412),
    o = n(749681),
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
function E(e, t) {
    let { isDiscoverable: n, customInstallUrl: E, installParams: y, integrationTypesConfig: C } = e,
        x = (0, f.Eb)({
            customInstallUrl: E,
            installParams: y,
            integrationTypesConfig: C
        }),
        v = (0, i.e7)([p.Z], () => {
            var e;
            return null != (e = p.Z.getGuildId()) ? e : void 0;
        }),
        O = (0, i.e7)(
            [c.Z, u.Z, d.Z],
            () => {
                let e = c.Z.getChannel(d.Z.getChannelId());
                return null != e && (e.isPrivate() || u.Z.can(_.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        j = (0, l.PZ)(e, v) && O,
        I = n || j;
    return r.useMemo(
        () =>
            I
                ? {
                      label: b.intl.string(b.t['HO/oXl']),
                      trackingArea: g.j_.VIEW,
                      onClick() {
                          if ((null == t || t(g.j_.VIEW), j)) return void (0, a.X)(e.id);
                          (0, o.transitionToGlobalDiscovery)({
                              tab: h.GlobalDiscoveryTab.APPS,
                              applicationId: e.id,
                              newSessionState: { entrypoint: { name: s.xF.APPLICATION_MESSAGE_EMBED } }
                          });
                      }
                  }
                : x
                  ? {
                        label: b.intl.string(b.t.NgXl3N),
                        trackingArea: g.j_.ADD_APP,
                        onClick() {
                            (null == t || t(g.j_.ADD_APP),
                                (0, m.L)({
                                    applicationId: e.id,
                                    customInstallUrl: E,
                                    installParams: y,
                                    integrationTypesConfig: C,
                                    guildId: v,
                                    source: 'app_message_embed'
                                }));
                        }
                    }
                  : void 0,
        [e.id, j, I, E, y, C, x, t, v]
    );
}
