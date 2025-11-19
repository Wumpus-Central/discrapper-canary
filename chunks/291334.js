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
    _ = n(981631),
    p = n(474936),
    h = n(388032),
    m = n(430355),
    g = n(699623),
    E = n(820350);
function b(e) {
    switch (e) {
        case _.BRd.DARK:
        case _.BRd.DARKER:
        case _.BRd.MIDNIGHT:
            return g;
        case _.BRd.LIGHT:
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
            d.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                location_stack: y,
                type: p.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, y]),
    n)
        ? (0, r.jsxs)("div", {
              className: m.upsellOverlayContainer,
              children: [
                  (0, r.jsx)("div", { children: g }),
                  (0, r.jsxs)("div", {
                      className: m.upsellOverlay,
                      children: [
                          (0, r.jsx)("img", {
                              className: m.upsellImage,
                              alt: h.intl.string(h.t.LHFZQy),
                              src: b(E),
                          }),
                          (0, r.jsxs)("div", {
                              className: m.upsellTextContainer,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: h.intl.string(h.t.dMaDFX),
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: h.intl.string(h.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(u.Z, {
                              size: a.zx.Sizes.LARGE,
                              color: a.zx.Colors.GREEN,
                              textOptions: {
                                  textOverride: f.ZP.isPremium(t)
                                      ? h.intl.string(h.t.AfRWI8)
                                      : h.intl.string(h.t.nkdUym),
                              },
                              subscriptionTier: p.Si.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : g;
}
