r.d(i, { A: () => d });
var s = r(477900);
r(582128);
var e = r(462887),
    o = r(862482),
    n = r(736653),
    a = r(732280),
    c = r(725807),
    p = r(145310),
    u = r(486213);
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
        b = (0, n.Ay)(),
        { buttonText: x, marketingSubscriptionTierSkuId: N } = (0, p.s)({
            hasActivePromotion: d,
            subscriptionTier: r,
            useShorterCTA: h,
            isPersistentCTA: l,
        }),
        w = (0, a.V)(),
        C = w?.subscriptionTrial,
        O = null != C && N === C.skuId,
        R = v ?? ((0, e.M)(b) ? o.XD.BRAND_INVERTED : o.XD.BRAND);
    return (0, s.jsx)(c.A, {
        color: R,
        textOptions: { textOverride: x, textClassName: O ? u.A : void 0, ...i },
        onlyShineOnHover: !0,
        subscriptionTier: N,
        showGradient: A,
        confirmationFooter: k,
        ...D,
    });
};
