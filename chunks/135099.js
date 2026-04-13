n.d(t, { A: () => N });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    r = n(554146),
    o = n(397927),
    d = n(573648),
    c = n(793574),
    u = n(688810),
    h = n(429913),
    A = n(826673),
    _ = n(780964),
    m = n(858897),
    p = n(962173),
    g = n(362490),
    f = n(652215),
    E = n(49999),
    x = n(873494),
    I = n(985018),
    C = n(381703);
let N = (e) => {
    let { markAsDismissed: t, applicationName: n } = e,
        l = [f.fg2.LEAGUE_OF_LEGENDS, f.fg2.RIOT_GAMES],
        N = (0, a.bG)([p.A], () => p.A.getAccounts().find((e) => l.includes(e.type))?.type),
        T = null != N ? d.A.get(N) : null,
        S = T?.replacedBy,
        b = (0, h.h)(S);
    n = n ?? b?.name;
    let { startAuthorization: y, canStartAuthorization: v } = (0, g.RD)(b),
        { analyticsLocations: j } = (0, u.Ay)(c.A.NOTICE);
    return null != b && v
        ? (0, i.jsxs)(o.$Td, {
              color: o.Hv$.WARNING,
              children: [
                  (0, i.jsx)(o.PMB, {
                      noticeType: f.kqX.RIOT_MIGRATION,
                      onClick: () => {
                          (0, A.Dr)(r.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(E.i.USER_DISMISS);
                      },
                  }),
                  (0, i.jsx)("img", {
                      src: d.A.get(f.fg2.RIOT_GAMES).icon.whiteSVG,
                      alt: I.intl.string(x.default["1S6oAo"]),
                      className: s()(C.tV, C._R),
                  }),
                  I.intl.format(x.default.YnnXb6, { connectionName: T?.name, applicationName: n }),
                  (0, i.jsx)(o.Z_L, {
                      onClick: () => {
                          t(E.i.TAKE_ACTION),
                              (0, m.openUserSettings)(_.X.CONNECTIONS_PANEL),
                              setTimeout(() => y({ analyticsLocations: j }), 0);
                      },
                      className: C.HE,
                      noticeType: f.kqX.RIOT_MIGRATION,
                      children: I.intl.string(x.default.ZeOhh9),
                  }),
                  (0, i.jsx)(o.zr9, {
                      onClick: () => {
                          t(E.i.USER_DISMISS);
                      },
                      className: C.wX,
                      children: I.intl.string(x.default["MVB/Ab"]),
                  }),
              ],
          })
        : null;
};
