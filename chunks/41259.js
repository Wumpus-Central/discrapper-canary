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
    p = n(314583),
    _ = n(981631),
    m = n(268685),
    h = n(388032),
    g = n(436808);
function E(e) {
    let { user: t, application: n, bot: E, accountScopes: b, showLogout: y, location: O, scopes: v } = e,
        S = (0, p.X)(),
        I = u.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
        }),
        T = u.ZP.getUserAvatarURL(t),
        C = i.useMemo(
            () =>
                v.some((e) => (0, f.sg)(e))
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.x, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: h.intl.string(h.t.uT1CPa),
                              }),
                              (0, r.jsx)(o.X6q, {
                                  variant: "heading-xxl/bold",
                                  color: "text-strong",
                                  children: n.name,
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)(l.x, {
                                  variant: "text-lg/bold",
                                  color: "text-strong",
                                  children: [
                                      n.name,
                                      null != E
                                          ? (0, r.jsx)(c.Z, {
                                                className: g.botTag,
                                                verified:
                                                    null != E.public_flags &&
                                                    (0, a.yE)(E.public_flags, _.xW$.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              b.length > 0
                                  ? (0, r.jsx)(l.x, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: h.intl.string(h.t.jFbDnJ),
                                    })
                                  : (0, r.jsx)(l.x, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: h.intl.string(h.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [b.length, n, E, v],
        );
    return (0, r.jsxs)("header", {
        id: S,
        className: g.header,
        children: [
            (0, r.jsxs)("div", {
                className: g.headerIcons,
                children: [
                    (0, r.jsx)(s.qE, {
                        className: g.avatar,
                        src: I,
                        size: m.EF.SIZE_80,
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
                        src: T,
                        size: m.EF.SIZE_80,
                        "aria-label": t.username,
                    }),
                ],
            }),
            C,
            y
                ? (0, r.jsx)("div", {
                      className: g.currentUser,
                      children: (0, r.jsxs)(l.x, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              h.intl.format(h.t.qRvpYU, {
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
                                  children: h.intl.string(h.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
