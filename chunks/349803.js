var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(666912),
    l = n(481060),
    o = n(104494),
    c = n(639119),
    d = n(318747),
    u = n(409100),
    g = n(474936),
    m = n(981631),
    f = n(798849);
t.Z = function (e) {
    var t, n;
    let { isVisible: r, isFullscreen: p, subscriptionTier: _, isMarketingPageV2: h } = e,
        x = null === (t = (0, c.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        E = (0, o.Ng)(),
        b = (0, o.Wp)(E, g.Si.TIER_2) ? g.Si.TIER_2 : void 0,
        C = (0, l.useSpring)({
            transform: r ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: r ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        v = { section: m.jXE.MARKETING_FLOATING_CTA };
    return (0, i.jsx)(s.animated.div, {
        className: a()(f.wrapper, {
            [f.fullscreenWrapper]: p,
            [f.invisible]: !r
        }),
        style: C,
        children: (0, i.jsxs)('div', {
            className: h ? f.innerWrapperV2 : f.innerWrapperV1,
            children: [
                (0, i.jsx)(u.Z, {
                    className: f.button,
                    subscriptionTier: null !== (n = null != _ ? _ : null == x ? void 0 : x.sku_id) && void 0 !== n ? n : b,
                    premiumModalAnalyticsLocation: v,
                    isPersistentCTA: !0
                }),
                (0, i.jsx)(d.Z, {
                    className: f.button,
                    premiumModalAnalyticsLocation: v
                })
            ]
        })
    });
};
