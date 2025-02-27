n.d(t, { z: () => b });
var r = n(192379),
    i = n(373793),
    a = n(442837),
    o = n(783097),
    l = n(213459),
    s = n(132871),
    c = n(147890),
    d = n(592125),
    u = n(496675),
    p = n(944486),
    m = n(914010),
    f = n(135431),
    h = n(914498),
    g = n(981631),
    _ = n(388032);
function b(e, t) {
    let { isDiscoverable: n, customInstallUrl: b, installParams: v, integrationTypesConfig: y } = e,
        x = (0, f.Eb)({
            customInstallUrl: b,
            installParams: v,
            integrationTypesConfig: y
        }),
        O = (0, a.e7)([m.Z], () => {
            var e;
            return null !== (e = m.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        E = (0, l.PL)(!0, !1),
        j = (0, l.LD)(O, !1),
        N = (0, f.TK)(e.id, E),
        C = (0, f.TK)(e.id, j),
        I = x && null != y && i.Y.USER_INSTALL in y,
        S = (0, a.e7)(
            [d.Z, u.Z, p.Z],
            () => {
                let e = d.Z.getChannel(p.Z.getChannelId());
                return null != e && (e.isPrivate() || u.Z.can(g.Plq.SEND_MESSAGES, e));
            },
            []
        ),
        T = (N || C || I) && S,
        P = n || T;
    return r.useMemo(
        () =>
            P
                ? {
                      label: _.NW.string(_.t['HO/oXl']),
                      onClick() {
                          if ((null == t || t(h.j_.VIEW), T)) {
                              (0, o.X)(e.id);
                              return;
                          }
                          (0, c.dx)({
                              applicationId: e.id,
                              entrypoint: { name: s.n3.APPLICATION_DIRECTORY_PROFILE_EMBED }
                          });
                      }
                  }
                : x
                  ? {
                        label: _.NW.string(_.t.NgXl3N),
                        onClick() {
                            null == t || t(h.j_.ADD_APP),
                                (0, f.LO)({
                                    applicationId: e.id,
                                    customInstallUrl: b,
                                    installParams: v,
                                    integrationTypesConfig: y,
                                    guildId: O,
                                    source: 'app_message_embed'
                                });
                        }
                    }
                  : void 0,
        [e.id, T, P, b, v, y, x, t, O]
    );
}
