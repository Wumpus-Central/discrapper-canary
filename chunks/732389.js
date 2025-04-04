n.d(t, { p: () => g });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(657707),
    s = n(793030),
    l = n(481060),
    c = n(436774),
    u = n(594174),
    d = n(111361),
    f = n(773104),
    _ = n(409100),
    p = n(474936),
    h = n(388032),
    m = n(46350);
let g = (e) => {
    let { buttonAnalyticsObject: t, className: n, upsellText: i } = e,
        g = u.default.getCurrentUser(),
        E = (0, d.yd)(null == g ? void 0 : g.premiumType, p.p9.TIER_2),
        b = (0, f._)({
            defaultResponse: h.NW.string(h.t['8x0jKS']),
            onNonTier2Subscriber: h.NW.string(h.t.IJI7ys)
        });
    return E
        ? null
        : (0, r.jsxs)('div', {
              className: o()(m.upsellContainer, n),
              children: [
                  (0, r.jsxs)('div', {
                      className: m.row,
                      children: [
                          (0, r.jsx)(a.SrA, {
                              size: 'md',
                              color: c.JX.PREMIUM_TIER_2
                          }),
                          (0, r.jsx)(s.xv, {
                              variant: 'text-sm/medium',
                              color: 'header-primary',
                              className: m.upsellText,
                              children: i
                          })
                      ]
                  }),
                  (0, r.jsx)(_.Z, {
                      className: m.button,
                      size: l.zxk.Sizes.SMALL,
                      look: l.zxk.Looks.BLANK,
                      color: l.zxk.Colors.CUSTOM,
                      subscriptionTier: p.Si.TIER_2,
                      buttonText: b,
                      premiumModalAnalyticsLocation: t,
                      showGradient: !0
                  })
              ]
          });
};
