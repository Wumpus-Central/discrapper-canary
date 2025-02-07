n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(74538),
    o = n(773104),
    c = n(104494),
    d = n(639119),
    u = n(404615),
    m = n(743612),
    h = n(409100),
    g = n(474936),
    _ = n(388032),
    x = n(506829);
let p = (e) => {
    var t;
    let n;
    let { title: s, titleClassName: p = '', buttonClassName: E = '', subtitle: C = '', description: f = '', descriptionCta: T = '', isPremiumGetCta: N, onCtaClick: S, cardVariant: I } = e,
        b = (0, d.N)(),
        v = null == b ? void 0 : b.subscription_trial,
        j = (0, c.Ng)(),
        A = (0, a.Rt)({
            intervalType: null == v ? void 0 : v.interval,
            intervalCount: null == v ? void 0 : v.interval_count
        }),
        O = (0, o._)({
            defaultResponse: _.intl.string(_.t['8x0jKS']),
            onNonTier2Subscriber: _.intl.string(_.t.IJI7ys),
            onTier2TrialOffer: A,
            onTier0TrialOffer: A,
            onDiscountOffer: _.intl.formatToPlainString(_.t.bkQ4bG, { percent: null == j ? void 0 : j.discount.amount })
        }),
        R = (0, u._)(I);
    return (0, i.jsxs)('div', {
        className: r()(x.cardDescription, null == R ? void 0 : null === (t = R.description) || void 0 === t ? void 0 : t.className),
        children: [
            (0, i.jsx)(m.Z, {
                title: s,
                cardVariantStyleInfo: R,
                titleClassName: p,
                subtitle: C,
                description: f
            }),
            N &&
                (0, i.jsx)(h.Z, {
                    className: E,
                    subscriptionTier: g.Si.TIER_2,
                    buttonText: O,
                    color: l.zxk.Colors.GREEN,
                    look: l.zxk.Looks.FILLED
                }),
            0 !== T.length &&
                (null == (n = null == R ? void 0 : R.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != S &&
                (0, i.jsx)(l.zxk, {
                    className: E,
                    onClick: S,
                    children: T
                })
        ]
    });
};
