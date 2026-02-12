"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(665260),
    s = n(158954),
    o = n(97808),
    l = n(571356),
    u = n(709066),
    c = n(486020),
    d = n(716965),
    _ = n(647053),
    f = n(566615),
    h = n(652215),
    p = n(778712),
    g = n(985018),
    E = n(21998);
function A(e) {
    let { user: t, application: n, bot: A, accountScopes: I, showLogout: T, location: y, scopes: S } = e,
        v = (0, f.i)(),
        C = c.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        b = c.Ay.getUserAvatarURL(t),
        N = i.useMemo(
            () =>
                S.some((e) => (0, _.RM)(e))
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.E, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: g.intl.string(g.t.uT1CPa),
                              }),
                              (0, r.jsx)(s.DZT, {
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
                                      null != A
                                          ? (0, r.jsx)(u.A, {
                                                className: E.AO,
                                                verified:
                                                    null != A.public_flags &&
                                                    (0, a.Lt)(A.public_flags, h.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              I.length > 0
                                  ? (0, r.jsx)(l.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: g.intl.string(g.t.jFbDnJ),
                                    })
                                  : (0, r.jsx)(l.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: g.intl.string(g.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [I.length, n, A, S],
        );
    return (0, r.jsxs)("header", {
        id: v,
        className: E.wx,
        children: [
            (0, r.jsxs)("div", {
                className: E.Y,
                children: [
                    (0, r.jsx)(o.eu, { className: E.my, src: C, size: p._3.SIZE_80, "aria-label": n.name }),
                    (0, r.jsxs)("div", {
                        className: E.I5,
                        children: [
                            (0, r.jsx)("div", { className: E.pw }),
                            (0, r.jsx)("div", { className: E.pw }),
                            (0, r.jsx)("div", { className: E.pw }),
                        ],
                    }),
                    (0, r.jsx)(o.eu, { className: E.my, src: b, size: p._3.SIZE_80, "aria-label": t.username }),
                ],
            }),
            N,
            T
                ? (0, r.jsx)("div", {
                      className: E.Ny,
                      children: (0, r.jsxs)(l.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              g.intl.format(g.t.qRvpYU, {
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
                              (0, r.jsx)(s.DUT, {
                                  tag: "a",
                                  className: E.Pg,
                                  onClick: () => (0, d.Vh)(y, "oauth2_logout"),
                                  children: g.intl.string(g.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
