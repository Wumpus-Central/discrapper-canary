n.d(t, { kc: () => O, Fe: () => R });
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
    b = n(894575);
function j(e) {
    let { onClose: t } = e,
        {
            selectedSkuId: n,
            selectedPlanId: d,
            purchaseState: S,
            quantity: j,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            purchaseState: e.purchaseState,
            quantity: e.quantity,
        })),
        R = (0, r.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { isPremium: M, isPremiumGroupPurchase: O, isEligibleForTrial: L, isEligibleForDiscount: k } = (0, o.i)(),
        w = (0, c.S3)(),
        U = (0, u.s2)(),
        { isGift: D, selectedGiftStyle: G, giftRecipient: F } = (0, P.Pv)(),
        B = (0, E.p)("PremiumUnifiedCheckoutCustomHeader"),
        H = (0, h.Wh)({ location: "PremiumUnifiedCheckoutCustomHeader" }),
        W = w?.productLine === _.EZt.COLLECTIBLES,
        Y = w?.productLine === _.EZt.SOCIAL_LAYER_GAME_ITEM,
        V = U === v.pn.CONFIRM && H && (0, f.M)({ isGift: D, giftRecipient: F, selectedPlanId: d }),
        K = D && (0, A.Ik)(F) && U === v.pn.CONFIRM && null != G && !W && !Y,
        Z = [v.pn.SKU_SELECT, v.pn.SELECT_FREE_SKU],
        q = null != U && !Z.includes(U) && null != n,
        z = i.useCallback(() => t(!1), [t]);
    return i.useMemo(() => {
        if (null == U) return;
        let e = null;
        return (
            V
                ? (e = (0, l.jsx)(s.rQ, {
                      alignCenter: !0,
                      gradientColor: "nitro-pink",
                      graphic: {
                          type: "image",
                          src: "https://cdn.discordapp.com/assets/content/93307a8b4bf1e7aa669b27c8237eb687acfe65de7db2c1bf4adef192a9c86424.svg",
                          aspectRatio: "16/9",
                      },
                      title: T.intl.formatToPlainString(N.default["7Zw7AB"], { giftCount: j }),
                      titleTextVariant: "heading-xl/semibold",
                      subtitle: T.intl.format(N.default.geFoof, {
                          giftCount: j,
                          skuName: null != d ? (0, g.RH)(d) : "",
                      }),
                  }))
                : K
                  ? (e = (0, l.jsxs)("div", {
                        className: b.kL,
                        children: [
                            (0, l.jsx)("div", {
                                "aria-hidden": !0,
                                style: { display: "contents" },
                                children: (0, l.jsx)(y.A, {
                                    defaultAnimationState: p.oA.LOOP,
                                    giftStyle: G,
                                    className: b.qq,
                                }),
                            }),
                            (0, l.jsx)(a.s_, { onClick: z, className: b.b, "data-migration-pending": !0 }),
                        ],
                    }))
                  : B
                    ? (e = (0, l.jsx)(s.rQ, { gradientColor: "nitro-pink", title: T.intl.string(T.t["7YWj6+"]) }))
                    : q &&
                      (e =
                          n in x.WN
                              ? (0, l.jsx)(I.A, {
                                    currentStep: U ?? void 0,
                                    purchaseState: S,
                                    premiumType: x.WN[n],
                                    onClose: z,
                                    showTrialBadge: L,
                                    showDiscountBadge: k,
                                    isGift: D,
                                    giftRecipient: F,
                                    isEligibleForTrial: L,
                                    enablePremiumBrandRefresh: M,
                                    isDisplayingWowMomentConfirmation: R,
                                    isPremiumGroupPurchase: O,
                                })
                              : (0, l.jsx)(s.rQ, { title: T.intl.string(T.t.q9EGps) })),
            e
        );
    }, [G, z, S, n, U, L, k, j, d, V, K, B, q, D, F, M, R, O]);
}
function R(e) {
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
    let e = R();
    return (0, l.jsx)(d.f, { headerBadgeConfig: e });
}
function O(e) {
    let { isGift: t } = (0, P.Pv)();
    return e.step !== v.pn.PLAN_SELECT || t ? (0, l.jsx)(j, { ...e }) : (0, l.jsx)(M, {});
}
