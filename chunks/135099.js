n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    d = n(397927),
    c = n(573648),
    u = n(793574),
    h = n(688810),
    A = n(429913),
    _ = n(826673),
    m = n(780964),
    p = n(858897),
    g = n(962173),
    f = n(362490),
    E = n(652215),
    x = n(49999),
    I = n(873494),
    C = n(985018),
    N = n(381703);
let T = (e) => {
    let { markAsDismissed: t, applicationName: n } = e,
        s = [E.fg2.LEAGUE_OF_LEGENDS, E.fg2.RIOT_GAMES],
        T = (0, r.bG)([g.A], () => g.A.getAccounts().find((e) => s.includes(e.type))?.type),
        S = null != T ? c.A.get(T) : null,
        b = S?.replacedBy,
        y = (0, A.h)(b);
    n = n ?? y?.name;
    let { startAuthorization: v, canStartAuthorization: j, hasAlreadyLinked: R, fetched: O } = (0, f.RD)(y),
        { analyticsLocations: L } = (0, h.Ay)(u.A.NOTICE);
    return (l.useEffect(() => {
        R && O && ((0, _.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(x.i.INDIRECT_ACTION));
    }, [R, O, t]),
    null != y && j && O && !R)
        ? (0, i.jsxs)(d.$Td, {
              color: d.Hv$.WARNING,
              children: [
                  (0, i.jsx)(d.PMB, {
                      noticeType: E.kqX.RIOT_MIGRATION,
                      onClick: () => {
                          (0, _.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(x.i.USER_DISMISS);
                      },
                  }),
                  (0, i.jsx)("img", {
                      src: c.A.get(E.fg2.RIOT_GAMES).icon.whiteSVG,
                      alt: C.intl.string(I.default["1S6oAo"]),
                      className: a()(N.tV, N._R),
                  }),
                  C.intl.format(I.default.YnnXb6, { connectionName: S?.name, applicationName: n }),
                  (0, i.jsx)(d.Z_L, {
                      onClick: () => {
                          (0, _.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                              t(x.i.TAKE_ACTION),
                              (0, p.openUserSettings)(m.X.CONNECTIONS_PANEL),
                              setTimeout(() => v({ analyticsLocations: L }), 0);
                      },
                      className: N.HE,
                      noticeType: E.kqX.RIOT_MIGRATION,
                      children: C.intl.string(I.default.ZeOhh9),
                  }),
                  (0, i.jsx)(d.zr9, {
                      onClick: () => {
                          t(x.i.USER_DISMISS);
                      },
                      className: N.wX,
                      children: C.intl.string(I.default["MVB/Ab"]),
                  }),
              ],
          })
        : null;
};
