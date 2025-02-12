n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(642128),
    l = n(663002),
    o = n(481060),
    c = n(410030),
    d = n(104494),
    u = n(639119),
    m = n(318747),
    g = n(409100),
    _ = n(474936),
    p = n(981631),
    f = n(174892);
let h = function (e) {
    var t, n;
    let { isVisible: r, isFullscreen: h, subscriptionTier: x, isMarketingPageV2: E } = e,
        C = null === (t = (0, u.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        b = (0, d.Ng)(),
        v = (0, d.Wp)(b, _.Si.TIER_2) ? _.Si.TIER_2 : void 0,
        T = (0, o.q_F)({
            transform: r ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: r ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        N = { section: p.jXE.MARKETING_FLOATING_CTA },
        I = (0, c.ZP)(),
        R = (0, l.wj)(I);
    return (0, i.jsx)(s.animated.div, {
        className: a()(f.wrapper, {
            [f.fullscreenWrapper]: h,
            [f.invisible]: !r
        }),
        style: T,
        children: (0, i.jsxs)('div', {
            className: E ? f.innerWrapperV2 : f.innerWrapperV1,
            children: [
                (0, i.jsx)(g.Z, {
                    className: a()(f.button, { [f.subButton]: R }),
                    subscriptionTier: null !== (n = null != x ? x : null == C ? void 0 : C.sku_id) && void 0 !== n ? n : v,
                    premiumModalAnalyticsLocation: N,
                    isPersistentCTA: !0
                }),
                (0, i.jsx)(m.Z, {
                    className: f.button,
                    premiumModalAnalyticsLocation: N
                })
            ]
        })
    });
};
