n.d(t, { Fe: () => x, kc: () => R });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(20742),
    s = n(935462),
    o = n(463376),
    u = n(883645),
    c = n(427675),
    d = n(580133),
    p = n(316915),
    m = n(242874),
    C = n(573359),
    h = n(35587),
    E = n(165191),
    f = n(237412),
    A = n(45938),
    S = n(951305),
    y = n(166532),
    P = n(906234),
    I = n(652215),
    _ = n(202541),
    T = n(375708),
    g = n(562575);
function v(e) {
    let { onClose: t } = e,
        { selectedSkuId: n, purchaseState: d } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        h = (0, r.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { isPremium: P, isPremiumGroupPurchase: v, isEligibleForTrial: x, isEligibleForDiscount: N } = (0, o.i)(),
        R = (0, c.S3)(),
        b = (0, u.s2)(),
        { isGift: M, selectedGiftStyle: j, giftRecipient: O } = (0, S.Pv)(),
        L = R?.productLine === I.EZt.COLLECTIBLES,
        w = R?.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM,
        k = M && (0, A.Ik)(O) && b === y.pn.CONFIRM && null != j && !L && !w,
        U = [y.pn.SKU_SELECT, y.pn.SELECT_FREE_SKU],
        D = null != b && !U.includes(b) && null != n,
        G = i.useCallback(() => t(!1), [t]);
    return i.useMemo(() => {
        if (null == b) return;
        let e = null;
        return (
            k
                ? (e = (0, l.jsxs)("div", {
                      className: g.kL,
                      children: [
                          (0, l.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, l.jsx)(E.A, {
                                  defaultAnimationState: m.oA.LOOP,
                                  giftStyle: j,
                                  className: g.qq,
                              }),
                          }),
                          (0, l.jsx)(s.s_, { onClick: G, className: g.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : D &&
                  (e =
                      n in _.WN
                          ? (0, l.jsx)(f.A, {
                                currentStep: b ?? void 0,
                                purchaseState: d,
                                premiumType: _.WN[n],
                                onClose: G,
                                showTrialBadge: x,
                                showDiscountBadge: N,
                                isGift: M,
                                giftRecipient: O,
                                isEligibleForTrial: x,
                                enablePremiumBrandRefresh: P,
                                isDisplayingWowMomentConfirmation: h,
                                isPremiumGroupPurchase: v,
                            })
                          : (0, l.jsx)(a.rQ, { title: T.intl.string(T.t.q9EGps) })),
            e
        );
    }, [j, G, d, n, b, x, N, k, D, M, O, P, h, v]);
}
function x(e) {
    let {
            premiumDiscountPercent: t,
            selectedPlanId: n,
            isPremiumDiscountAppliedToCheckoutInvoice: l,
        } = (0, p.t4)((e) => ({
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
            selectedPlanId: e.selectedPlanId,
        })),
        { isPremiumGroupPurchase: r, isEligibleForTrial: a, isEligibleForDiscount: s } = (0, o.i)(),
        u = (0, P.G)(n ?? "") && !a,
        c = (0, h.Sq)();
    return i.useMemo(() => {
        let n, i;
        return (r
            ? (i = "beta")
            : a
              ? (i = "trial")
              : (s || u || c) &&
                (l && null != t && (n = T.intl.formatToPlainString(T.t.iiLbvu, { percent: t })), (i = "promo")),
        null != e)
            ? e
            : null != n
              ? { headerBadgeText: n }
              : { headerBadgePreset: i };
    }, [e, r, a, s, u, c, t, l]);
}
function N() {
    let e = x();
    return (0, l.jsx)(d.f, { headerBadgeConfig: e });
}
function R(e) {
    let { isGift: t } = (0, S.Pv)();
    return e.step !== y.pn.PLAN_SELECT || t ? (0, l.jsx)(v, { ...e }) : (0, l.jsx)(N, {});
}
