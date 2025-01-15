var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(74538),
    o = n(773104),
    c = n(104494),
    d = n(639119),
    u = n(404615),
    m = n(743612),
    g = n(409100),
    h = n(474936),
    p = n(388032),
    x = n(506829);
t.Z = (e) => {
    var t;
    let n;
    let { title: s, titleClassName: f = '', buttonClassName: _ = '', subtitle: E = '', description: C = '', descriptionCta: T = '', isPremiumGetCta: S, onCtaClick: b, cardVariant: I } = e,
        N = (0, d.N)(),
        v = null == N ? void 0 : N.subscription_trial,
        A = (0, c.Ng)(),
        j = (0, l.Rt)({
            intervalType: null == v ? void 0 : v.interval,
            intervalCount: null == v ? void 0 : v.interval_count
        }),
        R = (0, o._)({
            defaultResponse: p.intl.string(p.t['8x0jKS']),
            onNonTier2Subscriber: p.intl.string(p.t.IJI7ys),
            onTier2TrialOffer: j,
            onTier0TrialOffer: j,
            onDiscountOffer: p.intl.formatToPlainString(p.t.bkQ4bG, { percent: null == A ? void 0 : A.discount.amount })
        }),
        O = (0, u._)(I);
    return (0, i.jsxs)('div', {
        className: r()(x.cardDescription, null == O ? void 0 : null === (t = O.description) || void 0 === t ? void 0 : t.className),
        children: [
            (0, i.jsx)(m.Z, {
                title: s,
                cardVariantStyleInfo: O,
                titleClassName: f,
                subtitle: E,
                description: C
            }),
            S &&
                (0, i.jsx)(g.Z, {
                    className: _,
                    subscriptionTier: h.Si.TIER_2,
                    buttonText: R,
                    color: a.Button.Colors.GREEN,
                    look: a.Button.Looks.FILLED
                }),
            0 !== T.length &&
                (null == (n = null == O ? void 0 : O.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != b &&
                (0, i.jsx)(a.Button, {
                    className: _,
                    onClick: b,
                    children: T
                })
        ]
    });
};
