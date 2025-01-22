var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
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
    let { title: r, titleClassName: f = '', buttonClassName: E = '', subtitle: _ = '', description: C = '', descriptionCta: T = '', isPremiumGetCta: S, onCtaClick: b, cardVariant: I } = e,
        N = (0, d.N)(),
        v = null == N ? void 0 : N.subscription_trial,
        A = (0, c.Ng)(),
        j = (0, l.Rt)({
            intervalType: null == v ? void 0 : v.interval,
            intervalCount: null == v ? void 0 : v.interval_count
        }),
        O = (0, o._)({
            defaultResponse: p.intl.string(p.t['8x0jKS']),
            onNonTier2Subscriber: p.intl.string(p.t.IJI7ys),
            onTier2TrialOffer: j,
            onTier0TrialOffer: j,
            onDiscountOffer: p.intl.formatToPlainString(p.t.bkQ4bG, { percent: null == A ? void 0 : A.discount.amount })
        }),
        R = (0, u._)(I);
    return (0, i.jsxs)('div', {
        className: s()(x.cardDescription, null == R ? void 0 : null === (t = R.description) || void 0 === t ? void 0 : t.className),
        children: [
            (0, i.jsx)(m.Z, {
                title: r,
                cardVariantStyleInfo: R,
                titleClassName: f,
                subtitle: _,
                description: C
            }),
            S &&
                (0, i.jsx)(g.Z, {
                    className: E,
                    subscriptionTier: h.Si.TIER_2,
                    buttonText: O,
                    color: a.Button.Colors.GREEN,
                    look: a.Button.Looks.FILLED
                }),
            0 !== T.length &&
                (null == (n = null == R ? void 0 : R.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != b &&
                (0, i.jsx)(a.Button, {
                    className: E,
                    onClick: b,
                    children: T
                })
        ]
    });
};
