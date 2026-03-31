n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(421380),
    a = n(397927),
    r = n(736653),
    o = n(793574),
    d = n(688810),
    c = n(465794),
    u = n(954571),
    m = n(927578),
    g = n(652215),
    _ = n(788868),
    A = n(985018),
    x = n(49882),
    h = n(896237),
    p = n(448085);
function T(e) {
    let { user: t, showOverlay: n, children: T } = e,
        f = (0, r.Ay)(),
        { analyticsLocations: E } = (0, d.Ay)(o.A.PREMIUM_UPSELL_OVERLAY);
    return (s.useEffect(() => {
        n &&
            u.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: E,
                type: _.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, E]),
    n)
        ? (0, i.jsxs)("div", {
              className: x.ry,
              children: [
                  (0, i.jsx)("div", { children: T }),
                  (0, i.jsxs)("div", {
                      className: x.Wc,
                      children: [
                          (0, i.jsx)("img", {
                              className: x.Tn,
                              alt: A.intl.string(A.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case g.NJ8.DARK:
                                      case g.NJ8.DARKER:
                                      case g.NJ8.MIDNIGHT:
                                          return h;
                                      case g.NJ8.LIGHT:
                                          return p;
                                      default:
                                          return h;
                                  }
                              })(f),
                          }),
                          (0, i.jsxs)("div", {
                              className: x._9,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: A.intl.string(A.t.dMaDFX),
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: A.intl.string(A.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(c.A, {
                              size: l.$n.Sizes.LARGE,
                              color: l.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: m.Ay.isPremium(t)
                                      ? A.intl.string(A.t.AfRWI8)
                                      : A.intl.string(A.t.nkdUym),
                              },
                              subscriptionTier: _.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : T;
}
