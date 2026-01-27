n.d(t, {
    A: () => f,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(421380),
    a = n(927578),
    o = n(545334),
    c = n(422936),
    d = n(234419),
    u = n(396375),
    _ = n(543233),
    p = n(76707),
    m = n(788868),
    g = n(985018),
    A = n(296388);
let f = (e) => {
    var t;
    let n,
        {
            title: i,
            titleClassName: f = "",
            buttonClassName: h = "",
            subtitle: b = "",
            description: E = "",
            descriptionCta: x = "",
            isPremiumGetCta: O,
            onCtaClick: C,
            cardVariant: I,
        } = e,
        T = (0, d.V)(),
        S = null == T ? void 0 : T.subscription_trial,
        j = (0, c.O)(),
        v = (0, a.FY)({
            intervalType: null == S ? void 0 : S.interval,
            intervalCount: null == S ? void 0 : S.interval_count,
        }),
        N = (0, o.G)({
            defaultResponse: g.intl.string(g.t["8x0jKT"]),
            onNonTier2Subscriber: g.intl.string(g.t.IJI7yk),
            onTier2TrialOffer: v,
            onTier0TrialOffer: v,
            onDiscountOffer: g.intl.formatToPlainString(g.t.bkQ4bH, {
                percent: null == j ? void 0 : j.discount.amount,
            }),
        }),
        y = (0, _.Q)(I);
    return (0, r.jsxs)("div", {
        className: l()(A.L_, null == y || null == (t = y.description) ? void 0 : t.className),
        children: [
            (0, r.jsx)(p.A, {
                title: i,
                cardVariantStyleInfo: y,
                titleClassName: f,
                subtitle: b,
                description: E,
            }),
            O &&
                (0, r.jsx)(u.A, {
                    className: h,
                    look: s.$n.Looks.BLANK,
                    color: s.$n.Colors.CUSTOM,
                    subscriptionTier: m.pe.TIER_2,
                    textOptions: {
                        textOverride: N,
                    },
                    showGradient: !0,
                }),
            0 !== x.length &&
                (null == (n = null == y ? void 0 : y.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 &&
                null != C &&
                (0, r.jsx)(s.$n, {
                    "data-migration-pending": !0,
                    className: h,
                    onClick: C,
                    children: x,
                }),
        ],
    });
};
