n.d(t, { z: () => v });
var r = n(192379),
    i = n(373793),
    a = n(442837),
    o = n(783097),
    l = n(213459),
    s = n(749681),
    c = n(258971),
    d = n(592125),
    u = n(496675),
    p = n(944486),
    m = n(914010),
    f = n(135431),
    h = n(914498),
    g = n(981631),
    _ = n(49898),
    b = n(388032);
function v(e, t) {
    let { isDiscoverable: n, customInstallUrl: v, installParams: y, integrationTypesConfig: x } = e,
        O = (0, f.Eb)({
            customInstallUrl: v,
            installParams: y,
            integrationTypesConfig: x
        }),
        E = (0, a.e7)([m.Z], () => {
            var e;
            return null !== (e = m.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        j = (0, l.PL)(!0, !1),
        N = (0, l.LD)(E, !1),
        C = (0, f.TK)(e.id, j),
        I = (0, f.TK)(e.id, N),
        S = O && null != x && i.Y.USER_INSTALL in x,
        T = (0, a.e7)(
            [d.Z, u.Z, p.Z],
            () => {
                let e = d.Z.getChannel(p.Z.getChannelId());
                return null != e && (e.isPrivate() || u.Z.can(g.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        P = (C || I || S) && T,
        A = n || P;
    return r.useMemo(
        () =>
            A
                ? {
                      label: b.NW.string(b.t['HO/oXl']),
                      trackingArea: h.j_.VIEW,
                      onClick() {
                          if ((null == t || t(h.j_.VIEW), P)) {
                              (0, o.X)(e.id);
                              return;
                          }
                          (0, s.transitionToGlobalDiscovery)({
                              tab: _.GlobalDiscoveryTab.APPS,
                              applicationId: e.id,
                              newSessionState: { entrypoint: { name: c.xF.APPLICATION_DIRECTORY_PROFILE_EMBED } }
                          });
                      }
                  }
                : O
                  ? {
                        label: b.NW.string(b.t.NgXl3N),
                        trackingArea: h.j_.ADD_APP,
                        onClick() {
                            null == t || t(h.j_.ADD_APP),
                                (0, f.LO)({
                                    applicationId: e.id,
                                    customInstallUrl: v,
                                    installParams: y,
                                    integrationTypesConfig: x,
                                    guildId: E,
                                    source: 'app_message_embed'
                                });
                        }
                    }
                  : void 0,
        [e.id, P, A, v, y, x, O, t, E]
    );
}
