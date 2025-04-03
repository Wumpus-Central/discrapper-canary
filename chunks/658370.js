n.d(t, { Z: () => b }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(74538),
    o = n(773104),
    c = n(104494),
    d = n(639119),
    u = n(404615),
    m = n(743612),
    g = n(409100),
    p = n(474936),
    h = n(388032),
    f = n(344253);
let b = (e) => {
    var t;
    let n,
        { title: i, titleClassName: b = '', buttonClassName: N = '', subtitle: x = '', description: _ = '', descriptionCta: E = '', isPremiumGetCta: j, onCtaClick: O, cardVariant: C } = e,
        S = (0, d.N)(),
        v = null == S ? void 0 : S.subscription_trial,
        T = (0, c.Ng)(),
        I = (0, l.Rt)({
            intervalType: null == v ? void 0 : v.interval,
            intervalCount: null == v ? void 0 : v.interval_count
        }),
        y = (0, o._)({
            defaultResponse: h.NW.string(h.t['8x0jKS']),
            onNonTier2Subscriber: h.NW.string(h.t.IJI7ys),
            onTier2TrialOffer: I,
            onTier0TrialOffer: I,
            onDiscountOffer: h.NW.formatToPlainString(h.t.bkQ4bG, { percent: null == T ? void 0 : T.discount.amount })
        }),
        A = (0, u._)(C);
    return (0, r.jsxs)('div', {
        className: s()(f.cardDescription, null == A || null == (t = A.description) ? void 0 : t.className),
        children: [
            (0, r.jsx)(m.Z, {
                title: i,
                cardVariantStyleInfo: A,
                titleClassName: b,
                subtitle: x,
                description: _
            }),
            j &&
                (0, r.jsx)(g.Z, {
                    className: N,
                    look: a.zxk.Looks.BLANK,
                    color: a.zxk.Colors.CUSTOM,
                    subscriptionTier: p.Si.TIER_2,
                    buttonText: y,
                    showGradient: !0
                }),
            0 !== E.length &&
                (null == (n = null == A ? void 0 : A.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != O &&
                (0, r.jsx)(a.zxk, {
                    className: N,
                    onClick: O,
                    children: E
                })
        ]
    });
};
