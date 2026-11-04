var s = r(477900);
r(582128);
var e = r(462887),
    o = r(862482),
    n = r(736653),
    a = r(77528),
    c = r(725807),
    p = r(145310),
    u = r(486213);
r.d(
    t,
    {},
    {
        A: function (i) {
            let {
                    textOptions: t,
                    subscriptionTier: r,
                    hasActivePromotion: d = !1,
                    isPersistentCTA: h = !1,
                    useShorterCTA: l = !1,
                    showGradient: A,
                    confirmationFooter: k,
                    color: v,
                    ...D
                } = i,
                b = (0, n.Ay)(),
                { buttonText: x, marketingSubscriptionTierSkuId: N } = (0, p.s)({
                    hasActivePromotion: d,
                    subscriptionTier: r,
                    useShorterCTA: l,
                    isPersistentCTA: h,
                }),
                w = (0, a.V)(),
                C = w?.subscriptionTrial,
                O = null != C && N === C.skuId,
                R = v ?? ((0, e.M)(b) ? o.XD.BRAND_INVERTED : o.XD.BRAND);
            return (0, s.jsx)(c.A, {
                color: R,
                textOptions: { textOverride: x, textClassName: O ? u.A : void 0, ...t },
                onlyShineOnHover: !0,
                subscriptionTier: N,
                showGradient: A,
                confirmationFooter: k,
                ...D,
            });
        },
    },
);
