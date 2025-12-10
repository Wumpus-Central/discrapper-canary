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
    p = n(743612),
    _ = n(474936),
    m = n(388032),
    h = n(505754);
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
            cardVariant: S,
        } = e,
        I = (0, u.N)(),
        T = null == I ? void 0 : I.subscription_trial,
        C = (0, c.N)(),
        A = (0, s.Rt)({
            intervalType: null == T ? void 0 : T.interval,
            intervalCount: null == T ? void 0 : T.interval_count,
        }),
        N = (0, l._)({
            defaultResponse: m.intl.string(m.t["8x0jKT"]),
            onNonTier2Subscriber: m.intl.string(m.t.IJI7yk),
            onTier2TrialOffer: A,
            onTier0TrialOffer: A,
            onDiscountOffer: m.intl.formatToPlainString(m.t.bkQ4bH, {
                percent: null == C ? void 0 : C.discount.amount,
            }),
        }),
        P = (0, f._)(S),
        R = (e) => (null == e ? void 0 : e.hideOnHoverComponent) !== !0;
    return (0, r.jsxs)("div", {
        className: a()(h.cardDescription, null == P || null == (t = P.description) ? void 0 : t.className),
        children: [
            (0, r.jsx)(p.Z, {
                title: n,
                cardVariantStyleInfo: P,
                titleClassName: i,
                subtitle: E,
                description: b,
            }),
            O &&
                (0, r.jsx)(d.Z, {
                    className: g,
                    look: o.zx.Looks.BLANK,
                    color: o.zx.Colors.CUSTOM,
                    subscriptionTier: _.Si.TIER_2,
                    textOptions: { textOverride: N },
                    showGradient: !0,
                }),
            0 !== y.length &&
                R(null == P ? void 0 : P.descriptionCta) &&
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
