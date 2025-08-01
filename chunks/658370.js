(n.d(t, { Z: () => b }), n(953529));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(755721),
    l = n(74538),
    o = n(773104),
    c = n(104494),
    d = n(639119),
    u = n(784238),
    m = n(404615),
    p = n(743612),
    g = n(474936),
    h = n(388032),
    f = n(593595);
let b = (e) => {
    var t;
    let n,
        { title: r, titleClassName: b = '', buttonClassName: x = '', subtitle: _ = '', description: j = '', descriptionCta: C = '', isPremiumGetCta: O, onCtaClick: E, cardVariant: v } = e,
        S = (0, d.N)(),
        T = null == S ? void 0 : S.subscription_trial,
        N = (0, c.Ng)(),
        I = (0, l.Rt)({
            intervalType: null == T ? void 0 : T.interval,
            intervalCount: null == T ? void 0 : T.interval_count
        }),
        y = (0, o._)({
            defaultResponse: h.intl.string(h.t['8x0jKS']),
            onNonTier2Subscriber: h.intl.string(h.t.IJI7ys),
            onTier2TrialOffer: I,
            onTier0TrialOffer: I,
            onDiscountOffer: h.intl.formatToPlainString(h.t.bkQ4bG, { percent: null == N ? void 0 : N.discount.amount })
        }),
        A = (0, m._)(v);
    return (0, i.jsxs)('div', {
        className: s()(f.cardDescription, null == A || null == (t = A.description) ? void 0 : t.className),
        children: [
            (0, i.jsx)(p.Z, {
                title: r,
                cardVariantStyleInfo: A,
                titleClassName: b,
                subtitle: _,
                description: j
            }),
            O &&
                (0, i.jsx)(u.Z, {
                    className: x,
                    look: a.zx.Looks.BLANK,
                    color: a.zx.Colors.CUSTOM,
                    subscriptionTier: g.Si.TIER_2,
                    textOptions: { textOverride: y },
                    showGradient: !0
                }),
            0 !== C.length &&
                (null == (n = null == A ? void 0 : A.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != E &&
                (0, i.jsx)(a.zx, {
                    className: x,
                    onClick: E,
                    children: C
                })
        ]
    });
};
