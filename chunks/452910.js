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
    let {
            title: n,
            titleClassName: i,
            buttonClassName: f,
            subtitle: b,
            description: h,
            descriptionCta: E,
            isPremiumGetCta: O,
            onCtaClick: C,
            cardVariant: x,
        } = e,
        S = (0, d.V)(),
        T = null == S ? void 0 : S.subscription_trial,
        I = (0, c.O)(),
        y = (0, a.FY)({
            intervalType: null == T ? void 0 : T.interval,
            intervalCount: null == T ? void 0 : T.interval_count,
        }),
        N = (0, o.G)({
            defaultResponse: g.intl.string(g.t["8x0jKT"]),
            onNonTier2Subscriber: g.intl.string(g.t.IJI7yk),
            onTier2TrialOffer: y,
            onTier0TrialOffer: y,
            onDiscountOffer: g.intl.formatToPlainString(g.t.bkQ4bH, {
                percent: null == I ? void 0 : I.discount.amount,
            }),
        }),
        j = (0, _.Q)(x);
    return (0, r.jsxs)("div", {
        className: l()(A.L_, null == j || null == (t = j.overlayContainer) ? void 0 : t.className),
        children: [
            (0, r.jsx)(p.A, {
                title: n,
                cardVariantStyleInfo: j,
                titleClassName: i,
                subtitle: b,
                description: h,
                isOverlay: !0,
            }),
            O &&
                (0, r.jsx)(u.A, {
                    className: f,
                    look: s.$n.Looks.BLANK,
                    color: s.$n.Colors.CUSTOM,
                    subscriptionTier: m.pe.TIER_2,
                    textOptions: {
                        textOverride: N,
                    },
                    showGradient: !0,
                }),
            null != E &&
                null != C &&
                (0, r.jsx)(s.$n, {
                    "data-migration-pending": !0,
                    className: f,
                    onClick: C,
                    children: E,
                }),
        ],
    });
};
