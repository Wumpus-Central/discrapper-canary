n.d(t, { Fe: () => v, kc: () => M });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(20742),
    s = n(935462),
    o = n(463376),
    u = n(883645),
    c = n(427675),
    d = n(580133),
    p = n(316915),
    m = n(242874),
    h = n(573359),
    C = n(35587),
    E = n(75825),
    f = n(237412),
    A = n(45938),
    S = n(951305),
    y = n(166532),
    P = n(906234),
    I = n(652215),
    _ = n(202541),
    T = n(375708),
    g = n(865543);
function x(e) {
    let { onClose: t } = e,
        { selectedSkuId: n, purchaseState: d } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        C = (0, r.bG)([h.A], () => h.A.isDisplayingWowMomentConfirmation),
        { isPremium: P, isPremiumGroupPurchase: x, isEligibleForTrial: v, isEligibleForDiscount: N } = (0, o.i)(),
        M = (0, c.S3)(),
        R = (0, u.s2)(),
        { isGift: b, selectedGiftStyle: j, giftRecipient: O } = (0, S.Pv)(),
        L = M?.productLine === I.EZt.COLLECTIBLES,
        w = M?.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM,
        k = b && (0, A.Ik)(O) && R === y.pn.CONFIRM && null != j && !L && !w,
        D = [y.pn.SKU_SELECT, y.pn.SELECT_FREE_SKU],
        U = null != R && !D.includes(R) && null != n,
        G = i.useCallback(() => t(!1), [t]);
    return i.useMemo(() => {
        if (null == R) return;
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
                : U &&
                  (e =
                      n in _.WN
                          ? (0, l.jsx)(f.A, {
                                currentStep: R ?? void 0,
                                purchaseState: d,
                                premiumType: _.WN[n],
                                onClose: G,
                                showTrialBadge: v,
                                showDiscountBadge: N,
                                isGift: b,
                                giftRecipient: O,
                                isEligibleForTrial: v,
                                enablePremiumBrandRefresh: P,
                                isDisplayingWowMomentConfirmation: C,
                                isPremiumGroupPurchase: x,
                            })
                          : (0, l.jsx)(a.rQ, { title: T.intl.string(T.t.q9EGps) })),
            e
        );
    }, [j, G, d, n, R, v, N, k, U, b, O, P, C, x]);
}
function v(e) {
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
        c = (0, C.Sq)();
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
    let e = v();
    return (0, l.jsx)(d.f, { headerBadgeConfig: e });
}
function M(e) {
    let { isGift: t } = (0, S.Pv)();
    return e.step !== y.pn.PLAN_SELECT || t ? (0, l.jsx)(x, { ...e }) : (0, l.jsx)(N, {});
}
