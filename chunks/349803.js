n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(272573),
    a = n(481060),
    o = n(410030),
    c = n(104494),
    d = n(639119),
    u = n(318747),
    m = n(409100),
    p = n(474936),
    g = n(981631),
    h = n(993229);
let f = function (e) {
    var t, n;
    let { isVisible: r, isFullscreen: f, subscriptionTier: b, isMarketingPageV2: _ } = e,
        x = null == (t = (0, d.N)()) ? void 0 : t.subscription_trial,
        E = (0, c.Ng)(),
        j = (0, c.Wp)(E, p.Si.TIER_2) ? p.Si.TIER_2 : void 0,
        C = (0, a.q_F)({
            transform: r ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: +!!r,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        O = { section: g.jXE.MARKETING_FLOATING_CTA },
        S = (0, o.ZP)(),
        v = (0, a.wjy)(S);
    return (0, i.jsx)(l.animated.div, {
        className: s()(h.wrapper, {
            [h.fullscreenWrapper]: f,
            [h.invisible]: !r
        }),
        style: C,
        children: (0, i.jsxs)('div', {
            className: _ ? h.innerWrapperV2 : h.innerWrapperV1,
            children: [
                (0, i.jsx)(m.Z, {
                    className: s()(h.button, { [h.subButton]: v }),
                    subscriptionTier: null != (n = null != b ? b : null == x ? void 0 : x.sku_id) ? n : j,
                    premiumModalAnalyticsLocation: O,
                    isPersistentCTA: !0
                }),
                (0, i.jsx)(u.Z, {
                    className: h.button,
                    premiumModalAnalyticsLocation: O
                })
            ]
        })
    });
};
