var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(476183),
    l = n(663002),
    o = n(481060),
    c = n(410030),
    d = n(104494),
    u = n(639119),
    m = n(318747),
    g = n(409100),
    h = n(474936),
    p = n(981631),
    x = n(798849);
t.Z = function (e) {
    var t, n;
    let { isVisible: s, isFullscreen: f, subscriptionTier: _, isMarketingPageV2: E } = e,
        C = null === (t = (0, u.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        T = (0, d.Ng)(),
        S = (0, d.Wp)(T, h.Si.TIER_2) ? h.Si.TIER_2 : void 0,
        b = (0, o.useSpring)({
            transform: s ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: s ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        I = { section: p.jXE.MARKETING_FLOATING_CTA },
        N = (0, c.ZP)(),
        v = (0, l.wj)(N);
    return (0, i.jsx)(a.animated.div, {
        className: r()(x.wrapper, {
            [x.fullscreenWrapper]: f,
            [x.invisible]: !s
        }),
        style: b,
        children: (0, i.jsxs)('div', {
            className: E ? x.innerWrapperV2 : x.innerWrapperV1,
            children: [
                (0, i.jsx)(g.Z, {
                    className: r()(x.button, { [x.subButton]: v }),
                    subscriptionTier: null !== (n = null != _ ? _ : null == C ? void 0 : C.sku_id) && void 0 !== n ? n : S,
                    premiumModalAnalyticsLocation: I,
                    isPersistentCTA: !0
                }),
                (0, i.jsx)(m.Z, {
                    className: x.button,
                    premiumModalAnalyticsLocation: I
                })
            ]
        })
    });
};
