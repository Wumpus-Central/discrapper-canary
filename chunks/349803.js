var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(476183),
    l = n(663002),
    o = n(481060),
    c = n(410030),
    d = n(104494),
    u = n(639119),
    g = n(318747),
    m = n(409100),
    f = n(474936),
    p = n(981631),
    _ = n(798849);
t.Z = function (e) {
    var t, n;
    let { isVisible: r, isFullscreen: h, subscriptionTier: x, isMarketingPageV2: E } = e,
        b = null === (t = (0, u.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        C = (0, d.Ng)(),
        v = (0, d.Wp)(C, f.Si.TIER_2) ? f.Si.TIER_2 : void 0,
        T = (0, o.useSpring)({
            transform: r ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: r ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        N = { section: p.jXE.MARKETING_FLOATING_CTA },
        I = (0, c.ZP)(),
        S = (0, l.wj)(I);
    return (0, i.jsx)(s.animated.div, {
        className: a()(_.wrapper, {
            [_.fullscreenWrapper]: h,
            [_.invisible]: !r
        }),
        style: T,
        children: (0, i.jsxs)('div', {
            className: E ? _.innerWrapperV2 : _.innerWrapperV1,
            children: [
                (0, i.jsx)(m.Z, {
                    className: a()(_.button, { [_.subButton]: S }),
                    subscriptionTier: null !== (n = null != x ? x : null == b ? void 0 : b.sku_id) && void 0 !== n ? n : v,
                    premiumModalAnalyticsLocation: N,
                    isPersistentCTA: !0
                }),
                (0, i.jsx)(g.Z, {
                    className: _.button,
                    premiumModalAnalyticsLocation: N
                })
            ]
        })
    });
};
