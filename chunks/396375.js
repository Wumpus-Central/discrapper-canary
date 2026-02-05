i.d(t, { A: () => m });
var r = i(627968);
i(64700);
var n = i(582754),
    s = i(421380),
    a = i(736653),
    l = i(234419),
    o = i(465794),
    c = i(145310),
    d = i(275403);
let m = (e) => {
    let {
            textOptions: t,
            subscriptionTier: i,
            hasActivePromotion: m = !1,
            isPersistentCTA: u = !1,
            useShorterCTA: x = !1,
            showGradient: C,
            confirmationFooter: g,
            color: p,
            ...T
        } = e,
        h = (0, a.Ay)(),
        { buttonText: I, marketingSubscriptionTierSkuId: f } = (0, c.s)({
            hasActivePromotion: m,
            subscriptionTier: i,
            useShorterCTA: x,
            isPersistentCTA: u,
        }),
        j = (0, l.V)(),
        A = j?.subscription_trial,
        v = null != A && f === A.sku_id,
        _ = p ?? ((0, n.Mw)(h) ? s.XD.BRAND_INVERTED : s.XD.BRAND);
    return (0, r.jsx)(o.A, {
        color: _,
        textOptions: { textOverride: I, textClassName: v ? d.A : void 0, ...t },
        onlyShineOnHover: !0,
        subscriptionTier: f,
        showGradient: C,
        confirmationFooter: g,
        ...T,
    });
};
