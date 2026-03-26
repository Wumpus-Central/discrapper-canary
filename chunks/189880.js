"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(665260),
    a = n(158954),
    o = n(97808),
    l = n(571356),
    u = n(709066),
    c = n(486020),
    d = n(716965),
    _ = n(647053),
    f = n(566615),
    p = n(652215),
    h = n(778712),
    m = n(985018),
    E = n(377099);
function g(e) {
    let { user: t, application: n, bot: g, accountScopes: A, showLogout: I, location: T, scopes: S } = e,
        y = (0, f.i)(),
        v = c.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        N = c.Ay.getUserAvatarURL(t),
        C = i.useMemo(
            () =>
                S.some((e) => (0, _.RM)(e))
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.E, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: m.intl.string(m.t.uT1CPa),
                              }),
                              (0, r.jsx)(a.DZT, {
                                  variant: "heading-xxl/bold",
                                  color: "text-strong",
                                  children: n.name,
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)(l.E, {
                                  variant: "text-lg/bold",
                                  color: "text-strong",
                                  children: [
                                      n.name,
                                      null != g
                                          ? (0, r.jsx)(u.A, {
                                                className: E.AO,
                                                verified:
                                                    null != g.public_flags &&
                                                    (0, s.Lt)(g.public_flags, p.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              A.length > 0
                                  ? (0, r.jsx)(l.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: m.intl.string(m.t.jFbDnJ),
                                    })
                                  : (0, r.jsx)(l.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: m.intl.string(m.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [A.length, n, g, S],
        );
    return (0, r.jsxs)("header", {
        id: y,
        className: E.wx,
        children: [
            (0, r.jsxs)("div", {
                className: E.Y,
                children: [
                    (0, r.jsx)(o.eu, { className: E.my, src: v, size: h._3.SIZE_80, "aria-label": n.name }),
                    (0, r.jsxs)("div", {
                        className: E.I5,
                        children: [
                            (0, r.jsx)("div", { className: E.pw }),
                            (0, r.jsx)("div", { className: E.pw }),
                            (0, r.jsx)("div", { className: E.pw }),
                        ],
                    }),
                    (0, r.jsx)(o.eu, { className: E.my, src: N, size: h._3.SIZE_80, "aria-label": t.username }),
                ],
            }),
            C,
            I
                ? (0, r.jsx)("div", {
                      className: E.Ny,
                      children: (0, r.jsxs)(l.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              m.intl.format(m.t.qRvpYU, {
                                  userHook: () =>
                                      (0, r.jsxs)(
                                          l.E,
                                          {
                                              className: E.ZD,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, r.jsx)(l.E, {
                                                          className: E.Jb,
                                                          variant: "text-sm/normal",
                                                          children: `#${t.discriminator}`,
                                                      }),
                                              ],
                                          },
                                          t.id,
                                      ),
                              }),
                              (0, r.jsx)(a.DUT, {
                                  tag: "a",
                                  className: E.Pg,
                                  onClick: () => (0, d.Vh)(T, "oauth2_logout"),
                                  children: m.intl.string(m.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
