n.d(t, { Z: () => _ });
var i = n(255367),
    r = n(73800),
    s = n(755721),
    a = n(481060),
    l = n(410030),
    o = n(100527),
    c = n(906732),
    d = n(767714),
    u = n(626135),
    m = n(74538),
    p = n(981631),
    g = n(474936),
    h = n(388032),
    f = n(451740),
    b = n(699623),
    x = n(820350);
function _(e) {
    let { user: t, showOverlay: n, children: _ } = e,
        j = (0, l.ZP)(),
        { analyticsLocations: E } = (0, c.ZP)(o.Z.PREMIUM_UPSELL_OVERLAY);
    return (r.useEffect(() => {
        n &&
            u.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                location_stack: E,
                type: g.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
            });
    }, [n, E]),
    n)
        ? (0, i.jsxs)('div', {
              className: f.upsellOverlayContainer,
              children: [
                  (0, i.jsx)('div', { children: _ }),
                  (0, i.jsxs)('div', {
                      className: f.upsellOverlay,
                      children: [
                          (0, i.jsx)('img', {
                              className: f.upsellImage,
                              alt: h.intl.string(h.t.LHFZQ0),
                              src: (function (e) {
                                  switch (e) {
                                      case p.BRd.DARK:
                                          return b;
                                      case p.BRd.LIGHT:
                                          return x;
                                  }
                              })(j)
                          }),
                          (0, i.jsxs)('div', {
                              className: f.upsellTextContainer,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-lg/semibold',
                                      color: 'always-white',
                                      children: h.intl.string(h.t.dMaDFR)
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'always-white',
                                      children: h.intl.string(h.t.F7sgFB)
                                  })
                              ]
                          }),
                          (0, i.jsx)(d.Z, {
                              size: s.zx.Sizes.LARGE,
                              color: s.zx.Colors.GREEN,
                              textOptions: { textOverride: m.ZP.isPremium(t) ? h.intl.string(h.t.AfRWIy) : h.intl.string(h.t.nkdUys) },
                              subscriptionTier: g.Si.TIER_2
                          })
                      ]
                  })
              ]
          })
        : _;
}
