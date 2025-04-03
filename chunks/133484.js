n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(410030),
    l = n(100527),
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
function N(e) {
    let { user: t, showOverlay: n, children: N } = e,
        x = (0, a.ZP)(),
        { analyticsLocations: _ } = (0, o.ZP)(l.Z.PREMIUM_UPSELL_OVERLAY);
    return (i.useEffect(() => {
        n &&
            d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                location_stack: _,
                type: g.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
            });
    }, [n, _]),
    n)
        ? (0, r.jsxs)('div', {
              className: h.upsellOverlayContainer,
              children: [
                  (0, r.jsx)('div', { children: N }),
                  (0, r.jsxs)('div', {
                      className: h.upsellOverlay,
                      children: [
                          (0, r.jsx)('img', {
                              className: h.upsellImage,
                              alt: p.NW.string(p.t.LHFZQ0),
                              src: (function (e) {
                                  switch (e) {
                                      case m.BRd.DARK:
                                          return f;
                                      case m.BRd.LIGHT:
                                          return b;
                                  }
                              })(x)
                          }),
                          (0, r.jsxs)('div', {
                              className: h.upsellTextContainer,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-lg/semibold',
                                      color: 'always-white',
                                      children: p.NW.string(p.t.dMaDFR)
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'always-white',
                                      children: p.NW.string(p.t.F7sgFB)
                                  })
                              ]
                          }),
                          (0, r.jsx)(c.Z, {
                              size: s.zxk.Sizes.LARGE,
                              color: s.zxk.Colors.GREEN,
                              buttonText: u.ZP.isPremium(t) ? p.NW.string(p.t.AfRWIy) : p.NW.string(p.t.nkdUys),
                              subscriptionTier: g.Si.TIER_2
                          })
                      ]
                  })
              ]
          })
        : N;
}
