var l = n(477900),
    i = n(582128),
    r = n(855986),
    a = n(935462),
    s = n(20742),
    o = n(463376),
    u = n(883645),
    c = n(427675),
    d = n(580133),
    m = n(516106),
    p = n(242874),
    C = n(573359),
    h = n(163074),
    f = n(742655),
    E = n(892349),
    S = n(35587),
    I = n(446263),
    g = n(683166),
    y = n(45938),
    A = n(722178),
    P = n(418200),
    v = n(166532),
    x = n(652215),
    _ = n(682901),
    T = n(792996),
    b = n(50302),
    N = n(116956),
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
        O = (0, r.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { isPremium: M, isPremiumGroupPurchase: L, isEligibleForTrial: k, isEligibleForDiscount: w } = (0, o.i)(),
        D = (0, c.S3)(),
        U = (0, u.s2)(),
        { isGift: G, selectedGiftStyle: F, giftRecipient: B } = (0, P.Pv)(),
        H = (0, E.p)("PremiumUnifiedCheckoutCustomHeader"),
        { enabled: W } = h.A.useConfig({ location: "PremiumUnifiedCheckoutCustomHeader" }),
        V = D?.productLine === x.EZt.COLLECTIBLES,
        Y = D?.productLine === x.EZt.SOCIAL_LAYER_GAME_ITEM,
        K = U === v.pn.CONFIRM && W && (0, f.MW)({ isGift: G, giftRecipient: B, selectedPlanId: d }),
        Z = G && (0, y.Ik)(B) && U === v.pn.CONFIRM && null != F && !V && !Y,
        q = [v.pn.SKU_SELECT, v.pn.SELECT_FREE_SKU],
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
                      title: T.intl.formatToPlainString(b.default["7Zw7AB"], { giftCount: R }),
                      titleTextVariant: "heading-xl/semibold",
                      subtitle: T.intl.format(b.default.geFoof, {
                          giftCount: R,
                          skuName: null != d ? (0, A.RH)(d) : "",
                      }),
                  }))
                : Z
                  ? (e = (0, l.jsxs)("div", {
                        className: N.kL,
                        children: [
                            (0, l.jsx)("div", {
                                "aria-hidden": !0,
                                style: { display: "contents" },
                                children: (0, l.jsx)(I.A, {
                                    defaultAnimationState: p.oA.LOOP,
                                    giftStyle: F,
                                    className: N.qq,
                                }),
                            }),
                            (0, l.jsx)(a.s_, { onClick: $, className: N.b, "data-migration-pending": !0 }),
                        ],
                    }))
                  : H
                    ? (e = (0, l.jsx)(s.rQ, { gradientColor: "nitro-pink", title: T.intl.string(T.t["7YWj6+"]) }))
                    : z &&
                      (e =
                          n in _.WN
                              ? (0, l.jsx)(g.A, {
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
n.d(
    t,
    {},
    {
        Fe: O,
        kc: function (e) {
            let { isGift: t } = (0, P.Pv)();
            return e.step !== v.pn.PLAN_SELECT || t ? (0, l.jsx)(R, { ...e }) : (0, l.jsx)(M, {});
        },
    },
);
