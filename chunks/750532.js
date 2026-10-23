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
    m = n(123816),
    p = n(242874),
    h = n(573359),
    C = n(163074),
    f = n(557679),
    E = n(892349),
    S = n(35587),
    g = n(180522),
    I = n(637969),
    A = n(45938),
    y = n(927578),
    x = n(951305),
    P = n(166532),
    v = n(652215),
    _ = n(202541),
    T = n(105292),
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
        O = (0, r.bG)([h.A], () => h.A.isDisplayingWowMomentConfirmation),
        { isPremium: M, isPremiumGroupPurchase: L, isEligibleForTrial: k, isEligibleForDiscount: w } = (0, o.i)(),
        D = (0, c.S3)(),
        U = (0, u.s2)(),
        { isGift: G, selectedGiftStyle: F, giftRecipient: B } = (0, x.Pv)(),
        H = (0, E.p)("PremiumUnifiedCheckoutCustomHeader"),
        { enabled: W } = C.A.useConfig({ location: "PremiumUnifiedCheckoutCustomHeader" }),
        V = D?.productLine === v.EZt.COLLECTIBLES,
        Y = D?.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM,
        K = U === P.pn.CONFIRM && W && (0, f.M)({ isGift: G, giftRecipient: B, selectedPlanId: d }),
        Z = G && (0, A.Ik)(B) && U === P.pn.CONFIRM && null != F && !V && !Y,
        q = [P.pn.SKU_SELECT, P.pn.SELECT_FREE_SKU],
        z = null != U && !q.includes(U) && null != n,
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
                          skuName: null != d ? (0, y.RH)(d) : "",
                      }),
                  }))
                : Z
                  ? (e = (0, l.jsxs)("div", {
                        className: b.kL,
                        children: [
                            (0, l.jsx)("div", {
                                "aria-hidden": !0,
                                style: { display: "contents" },
                                children: (0, l.jsx)(g.A, {
                                    defaultAnimationState: p.oA.LOOP,
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
                              ? (0, l.jsx)(I.A, {
                                    currentStep: U ?? void 0,
                                    purchaseState: S,
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
    }, [F, $, S, n, U, k, w, R, d, K, Z, H, z, G, B, M, O, L]);
}
function O(e) {
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
function M() {
    let e = O();
    return (0, l.jsx)(d.f, { headerBadgeConfig: e });
}
function L(e) {
    let { isGift: t } = (0, x.Pv)();
    return e.step !== P.pn.PLAN_SELECT || t ? (0, l.jsx)(R, { ...e }) : (0, l.jsx)(M, {});
}
