n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(421380),
    l = n(927578),
    o = n(545334),
    c = n(422936),
    d = n(234419),
    u = n(396375),
    _ = n(543233),
    m = n(76707),
    A = n(788868),
    g = n(985018),
    E = n(296388);
let h = (e) => {
    let {
            title: t,
            titleClassName: n,
            buttonClassName: s,
            subtitle: h,
            description: p,
            descriptionCta: C,
            isPremiumGetCta: x,
            onCtaClick: T,
            cardVariant: I,
        } = e,
        S = (0, d.V)(),
        f = S?.subscription_trial,
        N = (0, c.O)(),
        b = (0, l.FY)({ intervalType: f?.interval, intervalCount: f?.interval_count }),
        R = (0, o.G)({
            defaultResponse: g.intl.string(g.t["8x0jKT"]),
            onNonTier2Subscriber: g.intl.string(g.t.IJI7yk),
            onTier2TrialOffer: b,
            onTier0TrialOffer: b,
            onDiscountOffer: g.intl.formatToPlainString(g.t.bkQ4bH, { percent: N?.discount.amount }),
        }),
        v = (0, _.Q)(I);
    return (0, i.jsxs)("div", {
        className: r()(E.L_, v?.overlayContainer?.className),
        children: [
            (0, i.jsx)(m.A, {
                title: t,
                cardVariantStyleInfo: v,
                titleClassName: n,
                subtitle: h,
                description: p,
                isOverlay: !0,
            }),
            x &&
                (0, i.jsx)(u.A, {
                    className: s,
                    look: a.$n.Looks.BLANK,
                    color: a.$n.Colors.CUSTOM,
                    subscriptionTier: A.pe.TIER_2,
                    textOptions: { textOverride: R },
                    showGradient: !0,
                }),
            null != C &&
                null != T &&
                (0, i.jsx)(a.$n, { "data-migration-pending": !0, className: s, onClick: T, children: C }),
        ],
    });
};
