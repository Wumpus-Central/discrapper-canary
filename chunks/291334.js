n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(755721),
    o = n(481060),
    s = n(410030),
    l = n(100527),
    c = n(906732),
    u = n(767714),
    d = n(626135),
    f = n(74538),
    p = n(981631),
    _ = n(474936),
    m = n(388032),
    h = n(985576),
    g = n(699623),
    E = n(820350);
function b(e) {
    switch (e) {
        case p.BRd.DARK:
        case p.BRd.DARKER:
        case p.BRd.MIDNIGHT:
            return g;
        case p.BRd.LIGHT:
            return E;
        default:
            return g;
    }
}
function y(e) {
    let { user: t, showOverlay: n, children: g } = e,
        E = (0, s.ZP)(),
        { analyticsLocations: y } = (0, c.ZP)(l.Z.PREMIUM_UPSELL_OVERLAY);
    return (i.useEffect(() => {
        n &&
            d.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                location_stack: y,
                type: _.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, y]),
    n)
        ? (0, r.jsxs)("div", {
              className: h.upsellOverlayContainer,
              children: [
                  (0, r.jsx)("div", { children: g }),
                  (0, r.jsxs)("div", {
                      className: h.upsellOverlay,
                      children: [
                          (0, r.jsx)("img", {
                              className: h.upsellImage,
                              alt: m.intl.string(m.t.LHFZQy),
                              src: b(E),
                          }),
                          (0, r.jsxs)("div", {
                              className: h.upsellTextContainer,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: m.intl.string(m.t.dMaDFX),
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: m.intl.string(m.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(u.Z, {
                              size: a.zx.Sizes.LARGE,
                              color: a.zx.Colors.GREEN,
                              textOptions: {
                                  textOverride: f.ZP.isPremium(t)
                                      ? m.intl.string(m.t.AfRWI8)
                                      : m.intl.string(m.t.nkdUym),
                              },
                              subscriptionTier: _.Si.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : g;
}
