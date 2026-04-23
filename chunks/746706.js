n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(862482),
    a = n(834730),
    r = n(736653),
    o = n(793574),
    d = n(688810),
    u = n(725807),
    c = n(954571),
    g = n(927578),
    m = n(652215),
    _ = n(788868),
    A = n(985018),
    h = n(574173),
    p = n(896237),
    x = n(448085);
function E(e) {
    let { user: t, showOverlay: n, children: E } = e,
        T = (0, r.Ay)(),
        { analyticsLocations: S } = (0, d.Ay)(o.A.PREMIUM_UPSELL_OVERLAY);
    return (s.useEffect(() => {
        n &&
            c.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: S,
                type: _.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, S]),
    n)
        ? (0, i.jsxs)("div", {
              className: h.ry,
              children: [
                  (0, i.jsx)("div", { children: E }),
                  (0, i.jsxs)("div", {
                      className: h.Wc,
                      children: [
                          (0, i.jsx)("img", {
                              className: h.Tn,
                              alt: A.intl.string(A.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case m.NJ8.DARK:
                                      case m.NJ8.DARKER:
                                      case m.NJ8.MIDNIGHT:
                                          return p;
                                      case m.NJ8.LIGHT:
                                          return x;
                                      default:
                                          return p;
                                  }
                              })(T),
                          }),
                          (0, i.jsxs)("div", {
                              className: h._9,
                              children: [
                                  (0, i.jsx)(a.E, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: A.intl.string(A.t.dMaDFX),
                                  }),
                                  (0, i.jsx)(a.E, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: A.intl.string(A.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(u.A, {
                              size: l.$n.Sizes.LARGE,
                              color: l.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: g.Ay.isPremium(t)
                                      ? A.intl.string(A.t.AfRWI8)
                                      : A.intl.string(A.t.nkdUym),
                              },
                              subscriptionTier: _.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : E;
}
