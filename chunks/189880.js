"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(665260),
    a = n(534514),
    o = n(939249),
    l = n(97808),
    u = n(834730),
    d = n(709066),
    c = n(486020),
    _ = n(716965),
    f = n(647053),
    E = n(566615),
    h = n(652215),
    p = n(778712),
    m = n(985018),
    g = n(510523);
function A(e) {
    let { user: t, application: n, bot: A, accountScopes: I, showLogout: T, location: S, scopes: y } = e,
        N = (0, E.i)(),
        O = c.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        R = c.Ay.getUserAvatarURL(t),
        v = i.useMemo(
            () =>
                y.some((e) => (0, f.RM)(e))
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.E, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: m.intl.string(m.t.uT1CPa),
                              }),
                              (0, r.jsx)(a.D, { variant: "heading-xxl/bold", color: "text-strong", children: n.name }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)(u.E, {
                                  variant: "text-lg/bold",
                                  color: "text-strong",
                                  children: [
                                      n.name,
                                      null != A
                                          ? (0, r.jsx)(d.A, {
                                                className: g.AO,
                                                verified:
                                                    null != A.public_flags &&
                                                    (0, s.Lt)(A.public_flags, h.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              I.length > 0
                                  ? (0, r.jsx)(u.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: m.intl.string(m.t.jFbDnJ),
                                    })
                                  : (0, r.jsx)(u.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: m.intl.string(m.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [I.length, n, A, y],
        );
    return (0, r.jsxs)("header", {
        id: N,
        className: g.wx,
        children: [
            (0, r.jsxs)("div", {
                className: g.Y,
                children: [
                    (0, r.jsx)(l.eu, { className: g.my, src: O, size: p._3.SIZE_80, "aria-label": n.name }),
                    (0, r.jsxs)("div", {
                        className: g.I5,
                        children: [
                            (0, r.jsx)("div", { className: g.pw }),
                            (0, r.jsx)("div", { className: g.pw }),
                            (0, r.jsx)("div", { className: g.pw }),
                        ],
                    }),
                    (0, r.jsx)(l.eu, { className: g.my, src: R, size: p._3.SIZE_80, "aria-label": t.username }),
                ],
            }),
            v,
            T
                ? (0, r.jsx)("div", {
                      className: g.Ny,
                      children: (0, r.jsxs)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              m.intl.format(m.t.qRvpYU, {
                                  userHook: () =>
                                      (0, r.jsxs)(
                                          u.E,
                                          {
                                              className: g.ZD,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, r.jsx)(u.E, {
                                                          className: g.Jb,
                                                          variant: "text-sm/normal",
                                                          children: `#${t.discriminator}`,
                                                      }),
                                              ],
                                          },
                                          t.id,
                                      ),
                              }),
                              (0, r.jsx)(o.D, {
                                  tag: "a",
                                  className: g.Pg,
                                  onClick: () => (0, _.Vh)(S, "oauth2_logout"),
                                  children: m.intl.string(m.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
