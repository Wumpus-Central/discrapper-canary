n.d(t, { Z: () => _ });
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(410030),
    a = n(100527),
    o = n(906732),
    c = n(197115),
    d = n(626135),
    u = n(74538),
    m = n(981631),
    g = n(474936),
    p = n(388032),
    h = n(451740),
    f = n(699623),
    b = n(820350);
function _(e) {
    let { user: t, showOverlay: n, children: _ } = e,
        x = (0, l.ZP)(),
        { analyticsLocations: E } = (0, o.ZP)(a.Z.PREMIUM_UPSELL_OVERLAY);
    return (r.useEffect(() => {
        n &&
            d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                location_stack: E,
                type: g.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
            });
    }, [n, E]),
    n)
        ? (0, i.jsxs)('div', {
              className: h.upsellOverlayContainer,
              children: [
                  (0, i.jsx)('div', { children: _ }),
                  (0, i.jsxs)('div', {
                      className: h.upsellOverlay,
                      children: [
                          (0, i.jsx)('img', {
                              className: h.upsellImage,
                              alt: p.intl.string(p.t.LHFZQ0),
                              src: (function (e) {
                                  switch (e) {
                                      case m.BRd.DARK:
                                          return f;
                                      case m.BRd.LIGHT:
                                          return b;
                                  }
                              })(x)
                          }),
                          (0, i.jsxs)('div', {
                              className: h.upsellTextContainer,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-lg/semibold',
                                      color: 'always-white',
                                      children: p.intl.string(p.t.dMaDFR)
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'always-white',
                                      children: p.intl.string(p.t.F7sgFB)
                                  })
                              ]
                          }),
                          (0, i.jsx)(c.Z, {
                              size: s.zxk.Sizes.LARGE,
                              color: s.zxk.Colors.GREEN,
                              buttonText: u.ZP.isPremium(t) ? p.intl.string(p.t.AfRWIy) : p.intl.string(p.t.nkdUys),
                              subscriptionTier: g.Si.TIER_2
                          })
                      ]
                  })
              ]
          })
        : _;
}
