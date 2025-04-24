n.d(t, { Z: () => b }), n(953529);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(74538),
    o = n(773104),
    c = n(104494),
    d = n(639119),
    u = n(404615),
    m = n(743612),
    p = n(409100),
    g = n(474936),
    h = n(388032),
    f = n(344253);
let b = (e) => {
    var t;
    let n,
        { title: r, titleClassName: b = '', buttonClassName: _ = '', subtitle: x = '', description: E = '', descriptionCta: C = '', isPremiumGetCta: j, onCtaClick: O, cardVariant: S } = e,
        v = (0, d.N)(),
        T = null == v ? void 0 : v.subscription_trial,
        I = (0, c.Ng)(),
        N = (0, a.Rt)({
            intervalType: null == T ? void 0 : T.interval,
            intervalCount: null == T ? void 0 : T.interval_count
        }),
        y = (0, o._)({
            defaultResponse: h.intl.string(h.t['8x0jKS']),
            onNonTier2Subscriber: h.intl.string(h.t.IJI7ys),
            onTier2TrialOffer: N,
            onTier0TrialOffer: N,
            onDiscountOffer: h.intl.formatToPlainString(h.t.bkQ4bG, { percent: null == I ? void 0 : I.discount.amount })
        }),
        A = (0, u._)(S);
    return (0, i.jsxs)('div', {
        className: s()(f.cardDescription, null == A || null == (t = A.description) ? void 0 : t.className),
        children: [
            (0, i.jsx)(m.Z, {
                title: r,
                cardVariantStyleInfo: A,
                titleClassName: b,
                subtitle: x,
                description: E
            }),
            j &&
                (0, i.jsx)(p.Z, {
                    className: _,
                    look: l.zxk.Looks.BLANK,
                    color: l.zxk.Colors.CUSTOM,
                    subscriptionTier: g.Si.TIER_2,
                    buttonText: y,
                    showGradient: !0
                }),
            0 !== C.length &&
                (null == (n = null == A ? void 0 : A.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != O &&
                (0, i.jsx)(l.zxk, {
                    className: _,
                    onClick: O,
                    children: C
                })
        ]
    });
};
