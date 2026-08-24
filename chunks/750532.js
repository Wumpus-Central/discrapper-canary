n.d(t, { Fe: () => T, kc: () => b });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(20742),
    s = n(935462),
    o = n(463376),
    u = n(883645),
    c = n(427675),
    d = n(580133),
    m = n(87725),
    p = n(242874),
    C = n(573359),
    h = n(35587),
    f = n(165191),
    E = n(237412),
    S = n(45938),
    y = n(951305),
    I = n(166532),
    A = n(906234),
    P = n(652215),
    g = n(202541),
    v = n(375708),
    _ = n(894575);
function x(e) {
    let { onClose: t } = e,
        { selectedSkuId: n, purchaseState: d } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        h = (0, r.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { isPremium: A, isPremiumGroupPurchase: x, isEligibleForTrial: T, isEligibleForDiscount: N } = (0, o.i)(),
        b = (0, c.S3)(),
        j = (0, u.s2)(),
        { isGift: R, selectedGiftStyle: M, giftRecipient: O } = (0, y.Pv)(),
        L = b?.productLine === P.EZt.COLLECTIBLES,
        k = b?.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM,
        w = R && (0, S.Ik)(O) && j === I.pn.CONFIRM && null != M && !L && !k,
        U = [I.pn.SKU_SELECT, I.pn.SELECT_FREE_SKU],
        D = null != j && !U.includes(j) && null != n,
        G = i.useCallback(() => t(!1), [t]);
    return i.useMemo(() => {
        if (null == j) return;
        let e = null;
        return (
            w
                ? (e = (0, l.jsxs)("div", {
                      className: _.kL,
                      children: [
                          (0, l.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, l.jsx)(f.A, {
                                  defaultAnimationState: p.oA.LOOP,
                                  giftStyle: M,
                                  className: _.qq,
                              }),
                          }),
                          (0, l.jsx)(s.s_, { onClick: G, className: _.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : D &&
                  (e =
                      n in g.WN
                          ? (0, l.jsx)(E.A, {
                                currentStep: j ?? void 0,
                                purchaseState: d,
                                premiumType: g.WN[n],
                                onClose: G,
                                showTrialBadge: T,
                                showDiscountBadge: N,
                                isGift: R,
                                giftRecipient: O,
                                isEligibleForTrial: T,
                                enablePremiumBrandRefresh: A,
                                isDisplayingWowMomentConfirmation: h,
                                isPremiumGroupPurchase: x,
                            })
                          : (0, l.jsx)(a.rQ, { title: v.intl.string(v.t.q9EGps) })),
            e
        );
    }, [M, G, d, n, j, T, N, w, D, R, O, A, h, x]);
}
function T(e) {
    let {
            premiumDiscountPercent: t,
            selectedPlanId: n,
            isPremiumDiscountAppliedToCheckoutInvoice: l,
        } = (0, m.t4)((e) => ({
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
            selectedPlanId: e.selectedPlanId,
        })),
        { isPremiumGroupPurchase: r, isEligibleForTrial: a, isEligibleForDiscount: s } = (0, o.i)(),
        u = (0, A.G)(n ?? "") && !a,
        c = (0, h.Sq)();
    return i.useMemo(() => {
        let n, i;
        return (r
            ? (i = "beta")
            : a
              ? (i = "trial")
              : (s || u || c) &&
                (l && null != t && (n = v.intl.formatToPlainString(v.t.iiLbvu, { percent: t })), (i = "promo")),
        null != e)
            ? e
            : null != n
              ? { headerBadgeText: n }
              : { headerBadgePreset: i };
    }, [e, r, a, s, u, c, t, l]);
}
function N() {
    let e = T();
    return (0, l.jsx)(d.f, { headerBadgeConfig: e });
}
function b(e) {
    let { isGift: t } = (0, y.Pv)();
    return e.step !== I.pn.PLAN_SELECT || t ? (0, l.jsx)(x, { ...e }) : (0, l.jsx)(N, {});
}
