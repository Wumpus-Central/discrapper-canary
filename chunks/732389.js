t.d(n, { p: () => x });
var a = t(54381),
    o = t(120356),
    r = t.n(o),
    i = t(657707),
    s = t(793030),
    l = t(755721),
    d = t(436774),
    c = t(594174),
    u = t(111361),
    m = t(773104),
    _ = t(784238),
    p = t(474936),
    g = t(388032),
    f = t(558560);
let x = (e) => {
    let { buttonAnalyticsObject: n, className: t, upsellText: o } = e,
        x = c.default.getCurrentUser(),
        h = (0, u.yd)(null == x ? void 0 : x.premiumType, p.PremiumTypes.TIER_2),
        C = (0, m._)({
            defaultResponse: g.intl.string(g.t["8x0jKT"]),
            onNonTier2Subscriber: g.intl.string(g.t.IJI7yk),
        });
    return h
        ? null
        : (0, a.jsxs)("div", {
              className: r()(f.upsellContainer, t),
              children: [
                  (0, a.jsxs)("div", {
                      className: f.row,
                      children: [
                          (0, a.jsx)(i.SrA, {
                              size: "md",
                              color: d.JX.PREMIUM_TIER_2,
                          }),
                          (0, a.jsx)(s.xvT, {
                              variant: "text-sm/medium",
                              color: "header-primary",
                              className: f.upsellText,
                              children: o,
                          }),
                      ],
                  }),
                  (0, a.jsx)(_.Z, {
                      className: f.button,
                      size: l.zx.Sizes.SMALL,
                      look: l.zx.Looks.BLANK,
                      color: l.zx.Colors.CUSTOM,
                      subscriptionTier: p.Si.TIER_2,
                      textOptions: { textOverride: C },
                      premiumModalAnalyticsLocation: n,
                      showGradient: !0,
                  }),
              ],
          });
};
