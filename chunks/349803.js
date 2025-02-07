n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(642128),
    a = n(663002),
    o = n(481060),
    c = n(410030),
    d = n(104494),
    u = n(639119),
    m = n(318747),
    h = n(409100),
    g = n(474936),
    _ = n(981631),
    x = n(798849);
let p = function (e) {
    var t, n;
    let { isVisible: s, isFullscreen: p, subscriptionTier: E, isMarketingPageV2: C } = e,
        f = null === (t = (0, u.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        T = (0, d.Ng)(),
        N = (0, d.Wp)(T, g.Si.TIER_2) ? g.Si.TIER_2 : void 0,
        S = (0, o.q_F)({
            transform: s ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: s ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        I = { section: _.jXE.MARKETING_FLOATING_CTA },
        b = (0, c.ZP)(),
        v = (0, a.wj)(b);
    return (0, i.jsx)(l.animated.div, {
        className: r()(x.wrapper, {
            [x.fullscreenWrapper]: p,
            [x.invisible]: !s
        }),
        style: S,
        children: (0, i.jsxs)('div', {
            className: C ? x.innerWrapperV2 : x.innerWrapperV1,
            children: [
                (0, i.jsx)(h.Z, {
                    className: r()(x.button, { [x.subButton]: v }),
                    subscriptionTier: null !== (n = null != E ? E : null == f ? void 0 : f.sku_id) && void 0 !== n ? n : N,
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
