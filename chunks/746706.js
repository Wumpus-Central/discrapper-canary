n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(421380),
    s = n(397927),
    o = n(736653),
    l = n(793574),
    c = n(688810),
    u = n(465794),
    d = n(954571),
    f = n(927578),
    p = n(652215),
    _ = n(788868),
    h = n(985018),
    m = n(547568),
    g = n(896237),
    E = n(448085);
function b(e) {
    switch (e) {
        case p.NJ8.DARK:
        case p.NJ8.DARKER:
        case p.NJ8.MIDNIGHT:
            return g;
        case p.NJ8.LIGHT:
            return E;
        default:
            return g;
    }
}
function y(e) {
    let { user: t, showOverlay: n, children: g } = e,
        E = (0, o.Ay)(),
        { analyticsLocations: y } = (0, c.Ay)(l.A.PREMIUM_UPSELL_OVERLAY);
    return (i.useEffect(() => {
        n &&
            d.default.track(p.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: y,
                type: _.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, y]),
    n)
        ? (0, r.jsxs)("div", {
              className: m.ry,
              children: [
                  (0, r.jsx)("div", { children: g }),
                  (0, r.jsxs)("div", {
                      className: m.Wc,
                      children: [
                          (0, r.jsx)("img", {
                              className: m.Tn,
                              alt: h.intl.string(h.t.LHFZQy),
                              src: b(E),
                          }),
                          (0, r.jsxs)("div", {
                              className: m._9,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: h.intl.string(h.t.dMaDFX),
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: h.intl.string(h.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(u.A, {
                              size: a.$n.Sizes.LARGE,
                              color: a.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: f.Ay.isPremium(t)
                                      ? h.intl.string(h.t.AfRWI8)
                                      : h.intl.string(h.t.nkdUym),
                              },
                              subscriptionTier: _.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : g;
}
