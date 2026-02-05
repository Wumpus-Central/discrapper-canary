n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    r = n(421380),
    a = n(397927),
    l = n(736653),
    o = n(793574),
    c = n(688810),
    d = n(465794),
    u = n(954571),
    _ = n(927578),
    m = n(652215),
    A = n(788868),
    g = n(985018),
    E = n(547568),
    h = n(896237),
    p = n(448085);
function C(e) {
    let { user: t, showOverlay: n, children: C } = e,
        x = (0, l.Ay)(),
        { analyticsLocations: T } = (0, c.Ay)(o.A.PREMIUM_UPSELL_OVERLAY);
    return (s.useEffect(() => {
        n &&
            u.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: T,
                type: A.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, T]),
    n)
        ? (0, i.jsxs)("div", {
              className: E.ry,
              children: [
                  (0, i.jsx)("div", { children: C }),
                  (0, i.jsxs)("div", {
                      className: E.Wc,
                      children: [
                          (0, i.jsx)("img", {
                              className: E.Tn,
                              alt: g.intl.string(g.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case m.NJ8.DARK:
                                      case m.NJ8.DARKER:
                                      case m.NJ8.MIDNIGHT:
                                          return h;
                                      case m.NJ8.LIGHT:
                                          return p;
                                      default:
                                          return h;
                                  }
                              })(x),
                          }),
                          (0, i.jsxs)("div", {
                              className: E._9,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: g.intl.string(g.t.dMaDFX),
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: g.intl.string(g.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(d.A, {
                              size: r.$n.Sizes.LARGE,
                              color: r.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: _.Ay.isPremium(t)
                                      ? g.intl.string(g.t.AfRWI8)
                                      : g.intl.string(g.t.nkdUym),
                              },
                              subscriptionTier: A.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : C;
}
