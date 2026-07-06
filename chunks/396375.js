r.d(i, { A: () => d });
var s = r(627968);
r(64700);
var e = r(462887),
    o = r(862482),
    n = r(736653),
    a = r(234419),
    c = r(725807),
    p = r(145310),
    u = r(943386);
let d = function (t) {
    let {
            textOptions: i,
            subscriptionTier: r,
            hasActivePromotion: d = !1,
            isPersistentCTA: l = !1,
            useShorterCTA: h = !1,
            showGradient: A,
            confirmationFooter: k,
            color: v,
            ...D
        } = t,
        _ = (0, n.Ay)(),
        { buttonText: b, marketingSubscriptionTierSkuId: x } = (0, p.s)({
            hasActivePromotion: d,
            subscriptionTier: r,
            useShorterCTA: h,
            isPersistentCTA: l,
        }),
        N = (0, a.V)(),
        w = N?.subscription_trial,
        C = null != w && x === w.sku_id,
        O = v ?? ((0, e.M)(_) ? o.XD.BRAND_INVERTED : o.XD.BRAND);
    return (0, s.jsx)(c.A, {
        color: O,
        textOptions: { textOverride: b, textClassName: C ? u.A : void 0, ...i },
        onlyShineOnHover: !0,
        subscriptionTier: x,
        showGradient: A,
        confirmationFooter: k,
        ...D,
    });
};
