n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(421380),
    a = n(397927),
    r = n(736653),
    o = n(793574),
    d = n(688810),
    c = n(725807),
    u = n(954571),
    m = n(927578),
    g = n(652215),
    _ = n(788868),
    x = n(985018),
    A = n(423149),
    h = n(896237),
    p = n(448085);
function T(e) {
    let { user: t, showOverlay: n, children: T } = e,
        f = (0, r.Ay)(),
        { analyticsLocations: S } = (0, d.Ay)(o.A.PREMIUM_UPSELL_OVERLAY);
    return (s.useEffect(() => {
        n &&
            u.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: S,
                type: _.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, S]),
    n)
        ? (0, i.jsxs)("div", {
              className: A.ry,
              children: [
                  (0, i.jsx)("div", { children: T }),
                  (0, i.jsxs)("div", {
                      className: A.Wc,
                      children: [
                          (0, i.jsx)("img", {
                              className: A.Tn,
                              alt: x.intl.string(x.t.LHFZQy),
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
                              className: A._9,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: x.intl.string(x.t.dMaDFX),
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: x.intl.string(x.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(c.A, {
                              size: l.$n.Sizes.LARGE,
                              color: l.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: m.Ay.isPremium(t)
                                      ? x.intl.string(x.t.AfRWI8)
                                      : x.intl.string(x.t.nkdUym),
                              },
                              subscriptionTier: _.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : T;
}
