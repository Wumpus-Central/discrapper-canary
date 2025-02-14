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
    h = n(474936),
    g = n(388032),
    x = n(376080),
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
                type: h.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
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
                              alt: g.intl.string(g.t.LHFZQ0),
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
                                      children: g.intl.string(g.t.dMaDFR)
                                  }),
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'always-white',
                                      children: g.intl.string(g.t.F7sgFB)
                                  })
                              ]
                          }),
                          (0, i.jsx)(c.Z, {
                              size: r.zxk.Sizes.LARGE,
                              color: r.zxk.Colors.GREEN,
                              buttonText: u.ZP.isPremium(t) ? g.intl.string(g.t.AfRWIy) : g.intl.string(g.t.nkdUys),
                              subscriptionTier: h.Si.TIER_2
                          })
                      ]
                  })
              ]
          })
        : (0, i.jsx)(i.Fragment, { children: E });
}
