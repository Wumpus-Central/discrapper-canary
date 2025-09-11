t.d(n, { p: () => g });
var a = t(951288),
    o = t(120356),
    r = t.n(o),
    i = t(657707),
    l = t(793030),
    s = t(755721),
    d = t(436774),
    c = t(594174),
    u = t(111361),
    m = t(773104),
    p = t(784238),
    _ = t(474936),
    x = t(388032),
    f = t(851499);
let g = (e) => {
    let { buttonAnalyticsObject: n, className: t, upsellText: o } = e,
        g = c.default.getCurrentUser(),
        h = (0, u.yd)(null == g ? void 0 : g.premiumType, _.p9.TIER_2),
        C = (0, m._)({
            defaultResponse: x.intl.string(x.t["8x0jKS"]),
            onNonTier2Subscriber: x.intl.string(x.t.IJI7ys),
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
                          (0, a.jsx)(l.xvT, {
                              variant: "text-sm/medium",
                              color: "header-primary",
                              className: f.upsellText,
                              children: o,
                          }),
                      ],
                  }),
                  (0, a.jsx)(p.Z, {
                      className: f.button,
                      size: s.zx.Sizes.SMALL,
                      look: s.zx.Looks.BLANK,
                      color: s.zx.Colors.CUSTOM,
                      subscriptionTier: _.Si.TIER_2,
                      textOptions: { textOverride: C },
                      premiumModalAnalyticsLocation: n,
                      showGradient: !0,
                  }),
              ],
          });
};
