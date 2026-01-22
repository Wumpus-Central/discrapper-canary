n.d(t, {
    A: () => E,
});
var r = n(627968),
    i = n(64700),
    a = n(665260),
    s = n(158954),
    o = n(97808),
    l = n(571356),
    c = n(709066),
    u = n(486020),
    d = n(716965),
    f = n(647053),
    p = n(566615),
    _ = n(652215),
    h = n(778712),
    m = n(985018),
    g = n(21998);

function E(e) {
    let { user: t, application: n, bot: E, accountScopes: b, showLogout: y, location: O, scopes: A } = e,
        v = (0, p.i)(),
        S = u.Ay.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
        }),
        I = u.Ay.getUserAvatarURL(t),
        T = i.useMemo(
            () =>
                A.some((e) => (0, f.RM)(e))
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
                                          ? (0, r.jsx)(c.A, {
                                                className: g.AO,
                                                verified:
                                                    null != E.public_flags &&
                                                    (0, a.Lt)(E.public_flags, _.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              b.length > 0
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
            [b.length, n, E, A],
        );
    return (0, r.jsxs)("header", {
        id: v,
        className: g.wx,
        children: [
            (0, r.jsxs)("div", {
                className: g.Y,
                children: [
                    (0, r.jsx)(o.eu, {
                        className: g.my,
                        src: S,
                        size: h._3.SIZE_80,
                        "aria-label": n.name,
                    }),
                    (0, r.jsxs)("div", {
                        className: g.I5,
                        children: [
                            (0, r.jsx)("div", {
                                className: g.pw,
                            }),
                            (0, r.jsx)("div", {
                                className: g.pw,
                            }),
                            (0, r.jsx)("div", {
                                className: g.pw,
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.eu, {
                        className: g.my,
                        src: I,
                        size: h._3.SIZE_80,
                        "aria-label": t.username,
                    }),
                ],
            }),
            T,
            y
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
                                                          children: "#".concat(t.discriminator),
                                                      }),
                                              ],
                                          },
                                          t.id,
                                      ),
                              }),
                              (0, r.jsx)(s.DUT, {
                                  tag: "a",
                                  className: g.Pg,
                                  onClick: () => (0, d.Vh)(O, "oauth2_logout"),
                                  children: m.intl.string(m.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
