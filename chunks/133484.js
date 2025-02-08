n.d(t, { Z: () => E });
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(410030),
    a = n(100527),
    o = n(906732),
    c = n(197115),
    d = n(626135),
    u = n(74538),
    m = n(981631),
    g = n(474936),
    h = n(388032),
    x = n(304556),
    _ = n(699623),
    p = n(820350);
function E(e) {
    let { user: t, showOverlay: n, children: E } = e,
        C = (0, l.ZP)(),
        { analyticsLocations: f } = (0, o.ZP)(a.Z.PREMIUM_UPSELL_OVERLAY);
    return (s.useEffect(() => {
        n &&
            d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                location_stack: f,
                type: g.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
            });
    }, [n, f]),
    n)
        ? (0, i.jsxs)('div', {
              className: x.upsellOverlayContainer,
              children: [
                  (0, i.jsx)('div', { children: E }),
                  (0, i.jsxs)('div', {
                      className: x.upsellOverlay,
                      children: [
                          (0, i.jsx)('img', {
                              className: x.upsellImage,
                              alt: h.intl.string(h.t.LHFZQ0),
                              src: (function (e) {
                                  switch (e) {
                                      case m.BRd.DARK:
                                          return _;
                                      case m.BRd.LIGHT:
                                          return p;
                                  }
                              })(C)
                          }),
                          (0, i.jsxs)('div', {
                              className: x.upsellTextContainer,
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-lg/semibold',
                                      color: 'always-white',
                                      children: h.intl.string(h.t.dMaDFR)
                                  }),
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'always-white',
                                      children: h.intl.string(h.t.F7sgFB)
                                  })
                              ]
                          }),
                          (0, i.jsx)(c.Z, {
                              size: r.zxk.Sizes.LARGE,
                              color: r.zxk.Colors.GREEN,
                              buttonText: u.ZP.isPremium(t) ? h.intl.string(h.t.AfRWIy) : h.intl.string(h.t.nkdUys),
                              subscriptionTier: g.Si.TIER_2
                          })
                      ]
                  })
              ]
          })
        : (0, i.jsx)(i.Fragment, { children: E });
}
