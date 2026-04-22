"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(554146);
if (21552 == n.j) var c = n(417098);
var u = n(736653),
    d = n(573648),
    _ = n(793574),
    E = n(688810),
    A = n(429913),
    m = n(826673),
    I = n(780964),
    T = n(858897),
    N = n(962173),
    g = n(362490),
    p = n(652215),
    C = n(49999),
    f = n(452832),
    h = n(985018),
    R = n(448759);
let S =
    21552 == n.j
        ? (e) => {
              let { markAsDismissed: t, applicationName: n } = e,
                  l = [p.fg2.LEAGUE_OF_LEGENDS, p.fg2.RIOT_GAMES],
                  S = (0, a.bG)([N.A], () => N.A.getAccounts().find((e) => l.includes(e.type))?.type),
                  O = (0, u.Ay)(),
                  x = null != S ? d.A.get(S) : null,
                  M = x?.replacedBy,
                  D = (0, A.h)(M);
              n = n ?? D?.name;
              let { startAuthorization: P, canStartAuthorization: U, hasAlreadyLinked: y, fetched: L } = (0, g.RD)(D),
                  { analyticsLocations: v } = (0, E.Ay)(_.A.NOTICE);
              if (
                  (r.useEffect(() => {
                      y && L && ((0, m.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(C.i.INDIRECT_ACTION));
                  }, [y, L, t]),
                  null == D || !U || !L || y)
              )
                  return null;
              let j = d.A.get(p.fg2.RIOT_GAMES);
              return (0, i.jsxs)(c.$T, {
                  color: c.Hv.WARNING,
                  children: [
                      (0, i.jsx)(c.PM, {
                          noticeType: p.kqX.RIOT_MIGRATION,
                          onClick: () => {
                              (0, m.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(C.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === O ? j?.icon.blackSVG : j?.icon.whiteSVG,
                          alt: h.intl.string(f.default["1S6oAo"]),
                          className: s()(R.tV, R._R),
                      }),
                      h.intl.format(f.default.YnnXb6, { connectionName: x?.name, applicationName: n }),
                      (0, i.jsx)(c.Z_, {
                          onClick: () => {
                              (0, m.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                                  t(C.i.TAKE_ACTION),
                                  (0, T.openUserSettings)(I.X.CONNECTIONS_PANEL),
                                  setTimeout(() => P({ analyticsLocations: v }), 0);
                          },
                          className: R.HE,
                          noticeType: p.kqX.RIOT_MIGRATION,
                          children: h.intl.string(f.default.ZeOhh9),
                      }),
                      (0, i.jsx)(c.zr, {
                          onClick: () => {
                              t(C.i.USER_DISMISS);
                          },
                          className: R.wX,
                          children: h.intl.string(f.default["MVB/Ab"]),
                      }),
                  ],
              });
          }
        : null;
