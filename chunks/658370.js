n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(74538),
    o = n(773104),
    c = n(104494),
    d = n(639119),
    u = n(404615),
    m = n(743612),
    g = n(409100),
    _ = n(474936),
    p = n(388032),
    f = n(510040);
let h = (e) => {
    var t;
    let n;
    let { title: r, titleClassName: h = '', buttonClassName: x = '', subtitle: E = '', description: C = '', descriptionCta: b = '', isPremiumGetCta: v, onCtaClick: T, cardVariant: N } = e,
        I = (0, d.N)(),
        R = null == I ? void 0 : I.subscription_trial,
        j = (0, c.Ng)(),
        S = (0, l.Rt)({
            intervalType: null == R ? void 0 : R.interval,
            intervalCount: null == R ? void 0 : R.interval_count
        }),
        A = (0, o._)({
            defaultResponse: p.intl.string(p.t['8x0jKS']),
            onNonTier2Subscriber: p.intl.string(p.t.IJI7ys),
            onTier2TrialOffer: S,
            onTier0TrialOffer: S,
            onDiscountOffer: p.intl.formatToPlainString(p.t.bkQ4bG, { percent: null == j ? void 0 : j.discount.amount })
        }),
        P = (0, u._)(N);
    return (0, i.jsxs)('div', {
        className: a()(f.cardDescription, null == P ? void 0 : null === (t = P.description) || void 0 === t ? void 0 : t.className),
        children: [
            (0, i.jsx)(m.Z, {
                title: r,
                cardVariantStyleInfo: P,
                titleClassName: h,
                subtitle: E,
                description: C
            }),
            v &&
                (0, i.jsx)(g.Z, {
                    className: x,
                    subscriptionTier: _.Si.TIER_2,
                    buttonText: A,
                    color: s.zxk.Colors.GREEN,
                    look: s.zxk.Looks.FILLED
                }),
            0 !== b.length &&
                (null == (n = null == P ? void 0 : P.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != T &&
                (0, i.jsx)(s.zxk, {
                    className: x,
                    onClick: T,
                    children: b
                })
        ]
    });
};
