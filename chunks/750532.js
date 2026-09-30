n.d(t, { Fe: () => O, kc: () => L });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(935462),
    s = n(20742),
    o = n(463376),
    u = n(883645),
    c = n(427675),
    d = n(580133),
    p = n(263532),
    m = n(242874),
    h = n(573359),
    C = n(332026),
    f = n(557679),
    S = n(892349),
    E = n(35587),
    y = n(180522),
    A = n(341774),
    I = n(45938),
    g = n(158045),
    P = n(951305),
    v = n(166532),
    x = n(652215),
    _ = n(202541),
    T = n(375708),
    N = n(805161),
    b = n(894575),
    j = n(711729);
function R(e) {
    let { onClose: t } = e,
        {
            selectedSkuId: n,
            selectedPlanId: d,
            purchaseState: E,
            quantity: R,
        } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            purchaseState: e.purchaseState,
            quantity: e.quantity,
        })),
        O = (0, r.bG)([h.A], () => h.A.isDisplayingWowMomentConfirmation),
        { isPremium: M, isPremiumGroupPurchase: L, isEligibleForTrial: k, isEligibleForDiscount: w } = (0, o.i)(),
        D = (0, c.S3)(),
        U = (0, u.s2)(),
        { isGift: G, selectedGiftStyle: F, giftRecipient: B } = (0, P.Pv)(),
        H = (0, S.p)("PremiumUnifiedCheckoutCustomHeader"),
        W = (0, C.Wh)({ location: "PremiumUnifiedCheckoutCustomHeader" }),
        Y = D?.productLine === x.EZt.COLLECTIBLES,
        V = D?.productLine === x.EZt.SOCIAL_LAYER_GAME_ITEM,
        K = U === v.pn.CONFIRM && W && (0, f.M)({ isGift: G, giftRecipient: B, selectedPlanId: d }),
        q = G && (0, I.Ik)(B) && U === v.pn.CONFIRM && null != F && !Y && !V,
        Z = [v.pn.SKU_SELECT, v.pn.SELECT_FREE_SKU],
        z = null != U && !Z.includes(U) && null != n,
        $ = i.useCallback(() => t(!1), [t]);
    return i.useMemo(() => {
        if (null == U) return;
        let e = null;
        return (
            K
                ? (e = (0, l.jsx)(s.rQ, {
                      alignCenter: !0,
                      gradientColor: "nitro-pink",
                      graphic: { type: "image", src: j.A, aspectRatio: "16/9" },
                      title: T.intl.formatToPlainString(N.default["7Zw7AB"], { giftCount: R }),
                      titleTextVariant: "heading-xl/semibold",
                      subtitle: T.intl.format(N.default.geFoof, {
                          giftCount: R,
                          skuName: null != d ? (0, g.RH)(d) : "",
                      }),
                  }))
                : q
                  ? (e = (0, l.jsxs)("div", {
                        className: b.kL,
                        children: [
                            (0, l.jsx)("div", {
                                "aria-hidden": !0,
                                style: { display: "contents" },
                                children: (0, l.jsx)(y.A, {
                                    defaultAnimationState: m.oA.LOOP,
                                    giftStyle: F,
                                    className: b.qq,
                                }),
                            }),
                            (0, l.jsx)(a.s_, { onClick: $, className: b.b, "data-migration-pending": !0 }),
                        ],
                    }))
                  : H
                    ? (e = (0, l.jsx)(s.rQ, { gradientColor: "nitro-pink", title: T.intl.string(T.t["7YWj6+"]) }))
                    : z &&
                      (e =
                          n in _.WN
                              ? (0, l.jsx)(A.A, {
                                    currentStep: U ?? void 0,
                                    purchaseState: E,
                                    premiumType: _.WN[n],
                                    onClose: $,
                                    showTrialBadge: k,
                                    showDiscountBadge: w,
                                    isGift: G,
                                    giftRecipient: B,
                                    isEligibleForTrial: k,
                                    enablePremiumBrandRefresh: M,
                                    isDisplayingWowMomentConfirmation: O,
                                    isPremiumGroupPurchase: L,
                                })
                              : (0, l.jsx)(s.rQ, { title: T.intl.string(T.t.q9EGps) })),
            e
        );
    }, [F, $, E, n, U, k, w, R, d, K, q, H, z, G, B, M, O, L]);
}
function O(e) {
    let { premiumDiscountPercent: t, isPremiumDiscountAppliedToCheckoutInvoice: n } = (0, p.t4)((e) => ({
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
            selectedPlanId: e.selectedPlanId,
        })),
        { isPremiumGroupPurchase: l, isEligibleForTrial: r, isEligibleForDiscount: a } = (0, o.i)(),
        s = (0, E.Sq)();
    return i.useMemo(() => {
        let i, o;
        return (l
            ? (o = "beta")
            : r
              ? (o = "trial")
              : (a || s) &&
                (n && null != t && (i = T.intl.formatToPlainString(T.t.iiLbvu, { percent: t })), (o = "promo")),
        null != e)
            ? e
            : null != i
              ? { headerBadgeText: i }
              : { headerBadgePreset: o };
    }, [e, l, r, a, s, t, n]);
}
function M() {
    let e = O();
    return (0, l.jsx)(d.f, { headerBadgeConfig: e });
}
function L(e) {
    let { isGift: t } = (0, P.Pv)();
    return e.step !== v.pn.PLAN_SELECT || t ? (0, l.jsx)(R, { ...e }) : (0, l.jsx)(M, {});
}
