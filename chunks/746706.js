n.d(t, { A: () => f });
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
    _ = n(652215),
    g = n(788868),
    x = n(985018),
    A = n(49882),
    h = n(896237),
    p = n(448085);
function f(e) {
    let { user: t, showOverlay: n, children: f } = e,
        T = (0, r.Ay)(),
        { analyticsLocations: S } = (0, d.Ay)(o.A.PREMIUM_UPSELL_OVERLAY);
    return (s.useEffect(() => {
        n &&
            u.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: S,
                type: g.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, S]),
    n)
        ? (0, i.jsxs)("div", {
              className: A.ry,
              children: [
                  (0, i.jsx)("div", { children: f }),
                  (0, i.jsxs)("div", {
                      className: A.Wc,
                      children: [
                          (0, i.jsx)("img", {
                              className: A.Tn,
                              alt: x.intl.string(x.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case _.NJ8.DARK:
                                      case _.NJ8.DARKER:
                                      case _.NJ8.MIDNIGHT:
                                          return h;
                                      case _.NJ8.LIGHT:
                                          return p;
                                      default:
                                          return h;
                                  }
                              })(T),
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
                              subscriptionTier: g.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : f;
}
