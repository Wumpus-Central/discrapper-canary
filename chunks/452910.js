n.d(t, {
    A: () => g,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(421380),
    o = n(927578),
    l = n(545334),
    c = n(422936),
    u = n(234419),
    d = n(396375),
    f = n(543233),
    p = n(76707),
    _ = n(788868),
    h = n(985018),
    m = n(296388);
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
            onCtaClick: A,
            cardVariant: v,
        } = e,
        S = (0, u.V)(),
        I = null == S ? void 0 : S.subscription_trial,
        T = (0, c.O)(),
        C = (0, o.FY)({
            intervalType: null == I ? void 0 : I.interval,
            intervalCount: null == I ? void 0 : I.interval_count,
        }),
        N = (0, l.G)({
            defaultResponse: h.intl.string(h.t["8x0jKT"]),
            onNonTier2Subscriber: h.intl.string(h.t.IJI7yk),
            onTier2TrialOffer: C,
            onTier0TrialOffer: C,
            onDiscountOffer: h.intl.formatToPlainString(h.t.bkQ4bH, {
                percent: null == T ? void 0 : T.discount.amount,
            }),
        }),
        R = (0, f.Q)(v),
        w = (e) => (null == e ? void 0 : e.hideOnHoverComponent) !== !0;
    return (0, r.jsxs)("div", {
        className: a()(m.L_, null == R || null == (t = R.description) ? void 0 : t.className),
        children: [
            (0, r.jsx)(p.A, {
                title: n,
                cardVariantStyleInfo: R,
                titleClassName: i,
                subtitle: E,
                description: b,
            }),
            O &&
                (0, r.jsx)(d.A, {
                    className: g,
                    look: s.$n.Looks.BLANK,
                    color: s.$n.Colors.CUSTOM,
                    subscriptionTier: _.pe.TIER_2,
                    textOptions: {
                        textOverride: N,
                    },
                    showGradient: !0,
                }),
            0 !== y.length &&
                w(null == R ? void 0 : R.descriptionCta) &&
                null != A &&
                (0, r.jsx)(s.$n, {
                    "data-migration-pending": !0,
                    className: g,
                    onClick: A,
                    children: y,
                }),
        ],
    });
};
