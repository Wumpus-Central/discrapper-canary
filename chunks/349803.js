n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(642128),
    l = n(663002),
    o = n(481060),
    c = n(410030),
    d = n(104494),
    u = n(639119),
    m = n(318747),
    g = n(409100),
    p = n(474936),
    h = n(981631),
    f = n(946811);
let b = function (e) {
    var t, n;
    let { isVisible: i, isFullscreen: b, subscriptionTier: N, isMarketingPageV2: x } = e,
        _ = null === (t = (0, u.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        E = (0, d.Ng)(),
        j = (0, d.Wp)(E, p.Si.TIER_2) ? p.Si.TIER_2 : void 0,
        C = (0, o.q_F)({
            transform: i ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: +!!i,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        O = { section: h.jXE.MARKETING_FLOATING_CTA },
        v = (0, c.ZP)(),
        S = (0, l.wj)(v);
    return (0, r.jsx)(a.animated.div, {
        className: s()(f.wrapper, {
            [f.fullscreenWrapper]: b,
            [f.invisible]: !i
        }),
        style: C,
        children: (0, r.jsxs)('div', {
            className: x ? f.innerWrapperV2 : f.innerWrapperV1,
            children: [
                (0, r.jsx)(g.Z, {
                    className: s()(f.button, { [f.subButton]: S }),
                    subscriptionTier: null !== (n = null != N ? N : null == _ ? void 0 : _.sku_id) && void 0 !== n ? n : j,
                    premiumModalAnalyticsLocation: O,
                    isPersistentCTA: !0
                }),
                (0, r.jsx)(m.Z, {
                    className: f.button,
                    premiumModalAnalyticsLocation: O
                })
            ]
        })
    });
};
