n.d(t, { Fe: () => N, kc: () => R });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(17928),
    o = n(935462),
    u = n(463376),
    c = n(427675),
    d = n(580133),
    p = n(6938),
    m = n(242874),
    h = n(573359),
    C = n(35587),
    A = n(75825),
    E = n(237412),
    f = n(45938),
    y = n(951305),
    S = n(166532),
    P = n(615310),
    T = n(906234),
    I = n(652215),
    _ = n(202541),
    g = n(375708),
    x = n(865543);
function v(e) {
    let { onClose: t } = e,
        { selectedSkuId: n, purchaseState: r } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        d = (0, s.bG)([h.A], () => h.A.isDisplayingWowMomentConfirmation),
        { isPremium: C, isPremiumGroupPurchase: T, isEligibleForTrial: g, isEligibleForDiscount: v } = (0, u.i)(),
        N = (0, c.S3)(),
        b = (0, P.bB)(),
        { isGift: R, selectedGiftStyle: M, giftRecipient: j } = (0, y.Pv)(),
        O = N?.productLine === I.EZt.COLLECTIBLES,
        L = N?.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM,
        w = R && (0, f.Ik)(j) && b === S.pn.CONFIRM && null != M && !O && !L,
        D = [S.pn.SKU_SELECT, S.pn.SELECT_FREE_SKU],
        k = null != b && !D.includes(b) && null != n,
        U = i.useCallback(() => t(!1), [t]);
    return i.useMemo(() => {
        if (null == b) return;
        let e = null;
        return (
            w
                ? (e = (0, l.jsxs)("div", {
                      className: x.kL,
                      children: [
                          (0, l.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, l.jsx)(A.A, {
                                  defaultAnimationState: m.oA.LOOP,
                                  giftStyle: M,
                                  className: x.qq,
                              }),
                          }),
                          (0, l.jsx)(o.s_, { onClick: U, className: x.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : k &&
                  (a()(n in _.WN, `invalid sku id: ${n}`),
                  (e = (0, l.jsx)(E.A, {
                      currentStep: b ?? void 0,
                      purchaseState: r,
                      premiumType: _.WN[n],
                      onClose: U,
                      showTrialBadge: g,
                      showDiscountBadge: v,
                      isGift: R,
                      giftRecipient: j,
                      isEligibleForTrial: g,
                      enablePremiumBrandRefresh: C,
                      isDisplayingWowMomentConfirmation: d,
                      isPremiumGroupPurchase: T,
                  }))),
            e
        );
    }, [M, U, r, n, b, g, v, w, k, R, j, C, d, T]);
}
function N(e) {
    let {
            premiumDiscountPercent: t,
            selectedPlanId: n,
            isPremiumDiscountAppliedToCheckoutInvoice: l,
        } = (0, p.t4)((e) => ({
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
            selectedPlanId: e.selectedPlanId,
        })),
        { isPremiumGroupPurchase: r, isEligibleForTrial: a, isEligibleForDiscount: s } = (0, u.i)(),
        o = (0, T.G)(n ?? "") && !a,
        c = (0, C.Sq)();
    return i.useMemo(() => {
        let n, i;
        return (r
            ? (i = "beta")
            : a
              ? (i = "trial")
              : (s || o || c) &&
                (l && null != t && (n = g.intl.formatToPlainString(g.t.iiLbvu, { percent: t })), (i = "promo")),
        null != e)
            ? e
            : null != n
              ? { headerBadgeText: n }
              : { headerBadgePreset: i };
    }, [e, r, a, s, o, c, t, l]);
}
function b() {
    let e = N();
    return (0, l.jsx)(d.f, { headerBadgeConfig: e });
}
function R(e) {
    let { isGift: t } = (0, y.Pv)();
    return e.step !== S.pn.PLAN_SELECT || t ? (0, l.jsx)(v, { ...e }) : (0, l.jsx)(b, {});
}
