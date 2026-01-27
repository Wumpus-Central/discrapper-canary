n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(64700),
    l = n(421380),
    s = n(397927),
    a = n(736653),
    o = n(793574),
    c = n(688810),
    d = n(465794),
    u = n(954571),
    _ = n(927578),
    p = n(652215),
    m = n(788868),
    g = n(985018),
    A = n(547568),
    f = n(896237),
    h = n(448085);

function b(e) {
    let { user: t, showOverlay: n, children: b } = e,
        E = (0, a.Ay)(),
        { analyticsLocations: x } = (0, c.Ay)(o.A.PREMIUM_UPSELL_OVERLAY);
    return (i.useEffect(() => {
        n &&
            u.default.track(p.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: x,
                type: m.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, x]),
    n)
        ? (0, r.jsxs)("div", {
              className: A.ry,
              children: [
                  (0, r.jsx)("div", {
                      children: b,
                  }),
                  (0, r.jsxs)("div", {
                      className: A.Wc,
                      children: [
                          (0, r.jsx)("img", {
                              className: A.Tn,
                              alt: g.intl.string(g.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case p.NJ8.DARK:
                                      case p.NJ8.DARKER:
                                      case p.NJ8.MIDNIGHT:
                                          return f;
                                      case p.NJ8.LIGHT:
                                          return h;
                                      default:
                                          return f;
                                  }
                              })(E),
                          }),
                          (0, r.jsxs)("div", {
                              className: A._9,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: g.intl.string(g.t.dMaDFX),
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: g.intl.string(g.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(d.A, {
                              size: l.$n.Sizes.LARGE,
                              color: l.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: _.Ay.isPremium(t)
                                      ? g.intl.string(g.t.AfRWI8)
                                      : g.intl.string(g.t.nkdUym),
                              },
                              subscriptionTier: m.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : b;
}
