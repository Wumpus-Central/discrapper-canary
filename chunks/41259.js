n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    a = n(95015),
    o = n(793030),
    s = n(974674),
    l = n(993365),
    c = n(385499),
    u = n(768581),
    d = n(489863),
    f = n(713938),
    _ = n(314583),
    p = n(981631),
    h = n(268685),
    m = n(388032),
    g = n(604483);
function E(e) {
    let { user: t, application: n, bot: E, accountScopes: b, showLogout: y, location: O, scopes: v } = e,
        I = (0, _.X)(),
        T = u.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
        }),
        S = u.ZP.getUserAvatarURL(t),
        A = i.useMemo(
            () =>
                v.some((e) => (0, f.sg)(e))
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.x, {
                                  variant: "text-lg/normal",
                                  color: "header-secondary",
                                  children: m.intl.string(m.t.uT1CPa),
                              }),
                              (0, r.jsx)(o.X6q, {
                                  variant: "heading-xxl/bold",
                                  color: "header-primary",
                                  children: n.name,
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)(l.x, {
                                  variant: "text-lg/bold",
                                  color: "header-primary",
                                  children: [
                                      n.name,
                                      null != E
                                          ? (0, r.jsx)(c.Z, {
                                                className: g.botTag,
                                                verified:
                                                    null != E.public_flags &&
                                                    (0, a.yE)(E.public_flags, p.xW$.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              b.length > 0
                                  ? (0, r.jsx)(l.x, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        children: m.intl.string(m.t.jFbDnJ),
                                    })
                                  : (0, r.jsx)(l.x, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        children: m.intl.string(m.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [b.length, n, E, v],
        );
    return (0, r.jsxs)("header", {
        id: I,
        className: g.header,
        children: [
            (0, r.jsxs)("div", {
                className: g.headerIcons,
                children: [
                    (0, r.jsx)(s.qE, {
                        className: g.avatar,
                        src: T,
                        size: h.EF.SIZE_80,
                        "aria-label": n.name,
                    }),
                    (0, r.jsxs)("div", {
                        className: g.ellipseGroup,
                        children: [
                            (0, r.jsx)("div", { className: g.ellipse }),
                            (0, r.jsx)("div", { className: g.ellipse }),
                            (0, r.jsx)("div", { className: g.ellipse }),
                        ],
                    }),
                    (0, r.jsx)(s.qE, {
                        className: g.avatar,
                        src: S,
                        size: h.EF.SIZE_80,
                        "aria-label": t.username,
                    }),
                ],
            }),
            A,
            y
                ? (0, r.jsx)("div", {
                      className: g.currentUser,
                      children: (0, r.jsxs)(l.x, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              m.intl.format(m.t.qRvpYU, {
                                  userHook: () =>
                                      (0, r.jsxs)(
                                          l.x,
                                          {
                                              className: g.currentUserTag,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, r.jsx)(l.x, {
                                                          className: g.currentUserDiscriminator,
                                                          variant: "text-sm/normal",
                                                          children: "#".concat(t.discriminator),
                                                      }),
                                              ],
                                          },
                                          t.id,
                                      ),
                              }),
                              (0, r.jsx)(o.P3F, {
                                  tag: "a",
                                  className: g.logoutLink,
                                  onClick: () => (0, d.c$)(O, "oauth2_logout"),
                                  children: m.intl.string(m.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
