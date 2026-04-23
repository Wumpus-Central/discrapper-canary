"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907);
if (21552 == n.j) var o = n(862482);
if (21552 == n.j) var c = n(477155);
if (21552 == n.j) var u = n(834730);
var d = n(686956),
    _ = n(976860),
    E = n(71393),
    A = n(967198),
    m = n(449054),
    I = n(652215),
    T = n(985018),
    N = n(484154),
    g = n(580537);
let p =
    21552 == n.j
        ? () => {
              let e = (0, a.bG)([A.A], () => A.A.getGuildId(), []),
                  t = (0, a.bG)([E.A], () => E.A.getGuild(e), [e]),
                  [n, l] = r.useState(!1);
              if (null == t) return null;
              let p = async () => {
                  l(!0);
                  try {
                      m.cf(t.id), await d.A.joinGuild(t.id, { source: I.Q4z.NOTICE_BAR });
                  } catch {
                      l(!1);
                  }
              };
              return (0, i.jsxs)("div", {
                  className: s()(N.lm, g.lm),
                  children: [
                      (0, i.jsxs)(o.$n, {
                          look: o.$n.Looks.OUTLINED,
                          color: o.$n.Colors.WHITE,
                          size: o.$n.Sizes.NONE,
                          className: s()(N.x6, N.aX),
                          innerClassName: N.gb,
                          onClick: () => {
                              (0, _.JK)().goBack();
                          },
                          children: [
                              (0, i.jsx)(c.r, { size: "xs", color: "currentColor", className: N.UE }),
                              T.intl.string(T.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(u.E, {
                          className: N.wx,
                          variant: "text-sm/normal",
                          children: T.intl.string(T.t["N/y2WE"]),
                      }),
                      (0, i.jsx)(o.$n, {
                          className: N.x6,
                          look: o.$n.Looks.OUTLINED,
                          color: o.$n.Colors.WHITE,
                          size: o.$n.Sizes.NONE,
                          submitting: n,
                          onClick: p,
                          children: T.intl.format(T.t.uHN7ny, { guild: t.name }),
                      }),
                  ],
              });
          }
        : null;
