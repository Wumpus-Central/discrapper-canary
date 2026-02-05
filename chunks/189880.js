"use strict";
n.d(t, { A: () => E });
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
    p = n(652215),
    h = n(778712),
    m = n(985018),
    g = n(21998);
function E(e) {
    let { user: t, application: n, bot: E, accountScopes: A, showLogout: I, location: T, scopes: y } = e,
        S = (0, f.i)(),
        v = c.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        C = c.Ay.getUserAvatarURL(t),
        b = i.useMemo(
            () =>
                y.some((e) => (0, _.RM)(e))
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.E, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: m.intl.string(m.t.uT1CPa),
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
                                      null != E
                                          ? (0, r.jsx)(u.A, {
                                                className: g.AO,
                                                verified:
                                                    null != E.public_flags &&
                                                    (0, a.Lt)(E.public_flags, p.nhx.VERIFIED_BOT),
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
            [A.length, n, E, y],
        );
    return (0, r.jsxs)("header", {
        id: S,
        className: g.wx,
        children: [
            (0, r.jsxs)("div", {
                className: g.Y,
                children: [
                    (0, r.jsx)(o.eu, { className: g.my, src: v, size: h._3.SIZE_80, "aria-label": n.name }),
                    (0, r.jsxs)("div", {
                        className: g.I5,
                        children: [
                            (0, r.jsx)("div", { className: g.pw }),
                            (0, r.jsx)("div", { className: g.pw }),
                            (0, r.jsx)("div", { className: g.pw }),
                        ],
                    }),
                    (0, r.jsx)(o.eu, { className: g.my, src: C, size: h._3.SIZE_80, "aria-label": t.username }),
                ],
            }),
            b,
            I
                ? (0, r.jsx)("div", {
                      className: g.Ny,
                      children: (0, r.jsxs)(l.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              m.intl.format(m.t.qRvpYU, {
                                  userHook: () =>
                                      (0, r.jsxs)(
                                          l.E,
                                          {
                                              className: g.ZD,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, r.jsx)(l.E, {
                                                          className: g.Jb,
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
                                  className: g.Pg,
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
