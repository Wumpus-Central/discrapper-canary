n.d(t, { Fe: () => M, kc: () => L });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(935462),
    s = n(20742),
    o = n(463376),
    u = n(883645),
    c = n(427675),
    d = n(580133),
    m = n(721836),
    p = n(242874),
    C = n(573359),
    h = n(332026),
    f = n(557679),
    E = n(892349),
    S = n(35587),
    y = n(165191),
    I = n(237412),
    A = n(45938),
    g = n(158045),
    P = n(951305),
    v = n(166532),
    _ = n(652215),
    x = n(202541),
    T = n(375708),
    N = n(341535),
    b = n(894575),
    j = n(711729);
function R(e) {
    let { onClose: t } = e,
        {
            selectedSkuId: n,
            selectedPlanId: d,
            purchaseState: S,
            quantity: R,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            purchaseState: e.purchaseState,
            quantity: e.quantity,
        })),
        M = (0, r.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { isPremium: O, isPremiumGroupPurchase: L, isEligibleForTrial: k, isEligibleForDiscount: w } = (0, o.i)(),
        U = (0, c.S3)(),
        D = (0, u.s2)(),
        { isGift: G, selectedGiftStyle: F, giftRecipient: B } = (0, P.Pv)(),
        H = (0, E.p)("PremiumUnifiedCheckoutCustomHeader"),
        W = (0, h.Wh)({ location: "PremiumUnifiedCheckoutCustomHeader" }),
        Y = U?.productLine === _.EZt.COLLECTIBLES,
        V = U?.productLine === _.EZt.SOCIAL_LAYER_GAME_ITEM,
        K = D === v.pn.CONFIRM && W && (0, f.M)({ isGift: G, giftRecipient: B, selectedPlanId: d }),
        Z = G && (0, A.Ik)(B) && D === v.pn.CONFIRM && null != F && !Y && !V,
        q = [v.pn.SKU_SELECT, v.pn.SELECT_FREE_SKU],
        z = null != D && !q.includes(D) && null != n,
        Q = i.useCallback(() => t(!1), [t]);
    return i.useMemo(() => {
        if (null == D) return;
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
                : Z
                  ? (e = (0, l.jsxs)("div", {
                        className: b.kL,
                        children: [
                            (0, l.jsx)("div", {
                                "aria-hidden": !0,
                                style: { display: "contents" },
                                children: (0, l.jsx)(y.A, {
                                    defaultAnimationState: p.oA.LOOP,
                                    giftStyle: F,
                                    className: b.qq,
                                }),
                            }),
                            (0, l.jsx)(a.s_, { onClick: Q, className: b.b, "data-migration-pending": !0 }),
                        ],
                    }))
                  : H
                    ? (e = (0, l.jsx)(s.rQ, { gradientColor: "nitro-pink", title: T.intl.string(T.t["7YWj6+"]) }))
                    : z &&
                      (e =
                          n in x.WN
                              ? (0, l.jsx)(I.A, {
                                    currentStep: D ?? void 0,
                                    purchaseState: S,
                                    premiumType: x.WN[n],
                                    onClose: Q,
                                    showTrialBadge: k,
                                    showDiscountBadge: w,
                                    isGift: G,
                                    giftRecipient: B,
                                    isEligibleForTrial: k,
                                    enablePremiumBrandRefresh: O,
                                    isDisplayingWowMomentConfirmation: M,
                                    isPremiumGroupPurchase: L,
                                })
                              : (0, l.jsx)(s.rQ, { title: T.intl.string(T.t.q9EGps) })),
            e
        );
    }, [F, Q, S, n, D, k, w, R, d, K, Z, H, z, G, B, O, M, L]);
}
function M(e) {
    let { premiumDiscountPercent: t, isPremiumDiscountAppliedToCheckoutInvoice: n } = (0, m.t4)((e) => ({
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
            selectedPlanId: e.selectedPlanId,
        })),
        { isPremiumGroupPurchase: l, isEligibleForTrial: r, isEligibleForDiscount: a } = (0, o.i)(),
        s = (0, S.Sq)();
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
function O() {
    let e = M();
    return (0, l.jsx)(d.f, { headerBadgeConfig: e });
}
function L(e) {
    let { isGift: t } = (0, P.Pv)();
    return e.step !== v.pn.PLAN_SELECT || t ? (0, l.jsx)(R, { ...e }) : (0, l.jsx)(O, {});
}
