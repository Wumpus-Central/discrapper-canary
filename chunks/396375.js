"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(462887),
    s = n(862482),
    a = n(736653),
    o = n(234419),
    l = n(725807),
    u = n(145310),
    c = n(943386);
let d = (e) => {
    let {
            textOptions: t,
            subscriptionTier: n,
            hasActivePromotion: d = !1,
            isPersistentCTA: _ = !1,
            useShorterCTA: f = !1,
            showGradient: h,
            confirmationFooter: p,
            color: E,
            ...m
        } = e,
        g = (0, a.Ay)(),
        { buttonText: A, marketingSubscriptionTierSkuId: I } = (0, u.s)({
            hasActivePromotion: d,
            subscriptionTier: n,
            useShorterCTA: f,
            isPersistentCTA: _,
        }),
        T = (0, o.V)(),
        S = T?.subscription_trial,
        N = null != S && I === S.sku_id,
        y = E ?? ((0, r.M)(g) ? s.XD.BRAND_INVERTED : s.XD.BRAND);
    return (0, i.jsx)(l.A, {
        color: y,
        textOptions: { textOverride: A, textClassName: N ? c.A : void 0, ...t },
        onlyShineOnHover: !0,
        subscriptionTier: I,
        showGradient: h,
        confirmationFooter: p,
        ...m,
    });
};
