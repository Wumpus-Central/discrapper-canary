"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    s = n(665260),
    a = n(534514),
    o = n(939249),
    l = n(97808),
    _ = n(834730),
    d = n(709066),
    u = n(486020),
    c = n(716965),
    E = n(647053),
    h = n(566615),
    m = n(652215),
    f = n(778712),
    g = n(985018),
    A = n(510523);
function I(e) {
    let { user: t, application: n, bot: I, accountScopes: p, showLogout: T, location: S, scopes: N } = e,
        O = (0, h.i)(),
        R = u.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        C = u.Ay.getUserAvatarURL(t),
        y = r.useMemo(
            () =>
                N.some((e) => (0, E.RM)(e))
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(_.E, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: g.intl.string(g.t.uT1CPa),
                              }),
                              (0, i.jsx)(a.D, { variant: "heading-xxl/bold", color: "text-strong", children: n.name }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)(_.E, {
                                  variant: "text-lg/bold",
                                  color: "text-strong",
                                  children: [
                                      n.name,
                                      null != I
                                          ? (0, i.jsx)(d.A, {
                                                className: A.AO,
                                                verified:
                                                    null != I.public_flags &&
                                                    (0, s.Lt)(I.public_flags, m.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              p.length > 0
                                  ? (0, i.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: g.intl.string(g.t.jFbDnJ),
                                    })
                                  : (0, i.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: g.intl.string(g.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [p.length, n, I, N],
        );
    return (0, i.jsxs)("header", {
        id: O,
        className: A.wx,
        children: [
            (0, i.jsxs)("div", {
                className: A.Y,
                children: [
                    (0, i.jsx)(l.eu, { className: A.my, src: R, size: f._3.SIZE_80, "aria-label": n.name }),
                    (0, i.jsxs)("div", {
                        className: A.I5,
                        children: [
                            (0, i.jsx)("div", { className: A.pw }),
                            (0, i.jsx)("div", { className: A.pw }),
                            (0, i.jsx)("div", { className: A.pw }),
                        ],
                    }),
                    (0, i.jsx)(l.eu, { className: A.my, src: C, size: f._3.SIZE_80, "aria-label": t.username }),
                ],
            }),
            y,
            T
                ? (0, i.jsx)("div", {
                      className: A.Ny,
                      children: (0, i.jsxs)(_.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              g.intl.format(g.t.qRvpYU, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          _.E,
                                          {
                                              className: A.ZD,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, i.jsx)(_.E, {
                                                          className: A.Jb,
                                                          variant: "text-sm/normal",
                                                          children: `#${t.discriminator}`,
                                                      }),
                                              ],
                                          },
                                          t.id,
                                      ),
                              }),
                              (0, i.jsx)(o.D, {
                                  tag: "a",
                                  className: A.Pg,
                                  onClick: () => (0, c.Vh)(S, "oauth2_logout"),
                                  children: g.intl.string(g.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
