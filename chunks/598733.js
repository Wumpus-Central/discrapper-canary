"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(421380),
    E = n(397927),
    c = n(686956),
    _ = n(976860),
    d = n(71393),
    A = n(967198),
    u = n(449054),
    T = n(652215),
    I = n(985018),
    N = n(163677),
    R = n(1624);
let S =
    21552 == n.j
        ? () => {
              let e = (0, a.bG)([A.A], () => A.A.getGuildId(), []),
                  t = (0, a.bG)([d.A], () => d.A.getGuild(e), [e]),
                  [n, l] = r.useState(!1);
              if (null == t) return null;
              let S = async () => {
                  l(!0);
                  try {
                      u.cf(t.id), await c.A.joinGuild(t.id, { source: T.Q4z.NOTICE_BAR });
                  } catch {
                      l(!1);
                  }
              };
              return (0, i.jsxs)("div", {
                  className: s()(N.lm, R.lm),
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
                              (0, i.jsx)(E.rJJ, { size: "xs", color: "currentColor", className: N.UE }),
                              I.intl.string(I.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(E.Text, {
                          className: N.wx,
                          variant: "text-sm/normal",
                          children: I.intl.string(I.t["N/y2WE"]),
                      }),
                      (0, i.jsx)(o.$n, {
                          className: N.x6,
                          look: o.$n.Looks.OUTLINED,
                          color: o.$n.Colors.WHITE,
                          size: o.$n.Sizes.NONE,
                          submitting: n,
                          onClick: S,
                          children: I.intl.format(I.t.uHN7ny, { guild: t.name }),
                      }),
                  ],
              });
          }
        : null;
