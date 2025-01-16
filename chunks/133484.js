n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(410030),
    l = n(100527),
    o = n(906732),
    c = n(197115),
    d = n(626135),
    u = n(74538),
    m = n(981631),
    g = n(474936),
    h = n(388032),
    p = n(304556),
    x = n(699623),
    f = n(820350);
function _(e) {
    let { user: t, showOverlay: n, children: _ } = e,
        E = (0, a.ZP)(),
        { analyticsLocations: C } = (0, o.ZP)(l.Z.PREMIUM_UPSELL_OVERLAY);
    return (r.useEffect(() => {
        n &&
            d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                location_stack: C,
                type: g.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
            });
    }, [n, C]),
    n)
        ? (0, i.jsxs)('div', {
              className: p.upsellOverlayContainer,
              children: [
                  (0, i.jsx)('div', { children: _ }),
                  (0, i.jsxs)('div', {
                      className: p.upsellOverlay,
                      children: [
                          (0, i.jsx)('img', {
                              className: p.upsellImage,
                              alt: h.intl.string(h.t.LHFZQ0),
                              src: (function (e) {
                                  switch (e) {
                                      case m.BRd.DARK:
                                          return x;
                                      case m.BRd.LIGHT:
                                          return f;
                                  }
                              })(E)
                          }),
                          (0, i.jsxs)('div', {
                              className: p.upsellTextContainer,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-lg/semibold',
                                      color: 'always-white',
                                      children: h.intl.string(h.t.dMaDFR)
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'always-white',
                                      children: h.intl.string(h.t.F7sgFB)
                                  })
                              ]
                          }),
                          (0, i.jsx)(c.Z, {
                              size: s.Button.Sizes.LARGE,
                              color: s.Button.Colors.GREEN,
                              buttonText: u.ZP.isPremium(t) ? h.intl.string(h.t.AfRWIy) : h.intl.string(h.t.nkdUys),
                              subscriptionTier: g.Si.TIER_2
                          })
                      ]
                  })
              ]
          })
        : (0, i.jsx)(i.Fragment, { children: _ });
}
