t.d(n, { p: () => x });
var a = t(54381),
    o = t(120356),
    r = t.n(o),
    i = t(657707),
    l = t(793030),
    s = t(755721),
    d = t(436774),
    c = t(594174),
    u = t(111361),
    m = t(773104),
    _ = t(784238),
    p = t(474936),
    f = t(388032),
    g = t(851499);
let x = (e) => {
    let { buttonAnalyticsObject: n, className: t, upsellText: o } = e,
        x = c.default.getCurrentUser(),
        h = (0, u.yd)(null == x ? void 0 : x.premiumType, p.PremiumTypes.TIER_2),
        C = (0, m._)({
            defaultResponse: f.intl.string(f.t["8x0jKT"]),
            onNonTier2Subscriber: f.intl.string(f.t.IJI7yk),
        });
    return h
        ? null
        : (0, a.jsxs)("div", {
              className: r()(g.upsellContainer, t),
              children: [
                  (0, a.jsxs)("div", {
                      className: g.row,
                      children: [
                          (0, a.jsx)(i.SrA, {
                              size: "md",
                              color: d.JX.PREMIUM_TIER_2,
                          }),
                          (0, a.jsx)(l.xvT, {
                              variant: "text-sm/medium",
                              color: "header-primary",
                              className: g.upsellText,
                              children: o,
                          }),
                      ],
                  }),
                  (0, a.jsx)(_.Z, {
                      className: g.button,
                      size: s.zx.Sizes.SMALL,
                      look: s.zx.Looks.BLANK,
                      color: s.zx.Colors.CUSTOM,
                      subscriptionTier: p.Si.TIER_2,
                      textOptions: { textOverride: C },
                      premiumModalAnalyticsLocation: n,
                      showGradient: !0,
                  }),
              ],
          });
};
