n.d(t, { Z: () => g }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(74538),
    l = n(773104),
    c = n(622909),
    u = n(639119),
    d = n(784238),
    f = n(176782),
    _ = n(743612),
    p = n(474936),
    h = n(388032),
    m = n(759291);
let g = (e) => {
    var t;
    let {
            title: n,
            titleClassName: i = "",
            buttonClassName: g = "",
            subtitle: E = "",
            description: b = "",
            descriptionCta: y = "",
            isPremiumGetCta: O,
            onCtaClick: v,
            cardVariant: I,
        } = e,
        T = (0, u.N)(),
        S = null == T ? void 0 : T.subscription_trial,
        A = (0, c.N)(),
        C = (0, s.Rt)({
            intervalType: null == S ? void 0 : S.interval,
            intervalCount: null == S ? void 0 : S.interval_count,
        }),
        N = (0, l._)({
            defaultResponse: h.intl.string(h.t["8x0jKT"]),
            onNonTier2Subscriber: h.intl.string(h.t.IJI7yk),
            onTier2TrialOffer: C,
            onTier0TrialOffer: C,
            onDiscountOffer: h.intl.formatToPlainString(h.t.bkQ4bH, {
                percent: null == A ? void 0 : A.discount.amount,
            }),
        }),
        R = (0, f._)(I),
        P = (e) => (null == e ? void 0 : e.hideOnHoverComponent) !== !0;
    return (0, r.jsxs)("div", {
        className: a()(m.cardDescription, null == R || null == (t = R.description) ? void 0 : t.className),
        children: [
            (0, r.jsx)(_.Z, {
                title: n,
                cardVariantStyleInfo: R,
                titleClassName: i,
                subtitle: E,
                description: b,
            }),
            O &&
                (0, r.jsx)(d.Z, {
                    className: g,
                    look: o.zx.Looks.BLANK,
                    color: o.zx.Colors.CUSTOM,
                    subscriptionTier: p.Si.TIER_2,
                    textOptions: { textOverride: N },
                    showGradient: !0,
                }),
            0 !== y.length &&
                P(null == R ? void 0 : R.descriptionCta) &&
                null != v &&
                (0, r.jsx)(o.zx, {
                    "data-migration-pending": !0,
                    className: g,
                    onClick: v,
                    children: y,
                }),
        ],
    });
};
