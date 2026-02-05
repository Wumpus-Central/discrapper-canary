e.d(i, { default: () => f });
var r = e(627968),
    a = e(158954),
    n = e(311907),
    l = e(192308),
    o = e(975807),
    s = e(166403),
    u = e(975571),
    d = e(783420),
    c = e(938973),
    p = e(788868),
    P = e(88001),
    m = e(652215),
    g = e(519412),
    b = e(985018),
    T = e(438705);
function M(t) {
    return (0, r.jsx)(a.Modal, {
        ...t,
        size: "md",
        title: b.intl.formatToPlainString(g.default.BcZLdW, { premiumGroupProductName: (0, P.DP)() }),
        subtitle: b.intl.string(g.default.EjhBrs),
        actions: [
            {
                text: b.intl.string(g.default["IO+nlU"]),
                variant: "secondary",
                onClick: () => {
                    (0, o.A)(P.TE);
                },
            },
        ],
    });
}
let f = (t) => {
    let { subscribeButtonProps: i } = (0, c.B)({
            subscriptionTier: p.pe.TIER_2,
            subscriptionPlanId: p.gD.PREMIUM_GROUP_MONTH,
        }),
        { disabled: e, ...f } = i,
        A = (0, n.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        _ = A?.hasActiveTrial ?? !1,
        h = e && !_;
    return (0, r.jsx)(d.A, {
        subscriptionTier: p.pe.TIER_2,
        initialPlanId: p.gD.PREMIUM_GROUP_MONTH,
        children: (i) => {
            let { onClick: e } = i;
            return (0, r.jsx)(a.ExpressiveModal, {
                ...t,
                graphic: { src: T, type: "image" },
                gradientColor: "nitro-pink",
                title: b.intl.formatToPlainString(g.default.tJbHtN, { premiumGroupProductName: (0, P.DP)() }),
                badge: { type: "beta", variant: "expressive" },
                subtitle: b.intl.formatToPlainString(g.default.csDq8A, {
                    premiumGroupProductName: (0, P.DP)(),
                    totalSeats: P.aw,
                }),
                actions: [
                    {
                        text: b.intl.string(g.default.z8re5H),
                        variant: "secondary",
                        onClick: () => void (0, o.A)(u.A.getArticleURL(m.MVz.PREMIUM_GROUP_ABOUT)),
                    },
                    {
                        ...f,
                        disabled: h,
                        onClick: (i) => {
                            _ ? (0, l.openModalLazy)(() => Promise.resolve(M)) : (e?.(i), t.onClose?.());
                        },
                    },
                ],
            });
        },
    });
};
