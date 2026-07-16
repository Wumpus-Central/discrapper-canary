n.d(t, { Fe: () => v, kc: () => b });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(20742),
    s = n(935462),
    o = n(463376),
    u = n(427675),
    c = n(580133),
    d = n(6938),
    p = n(242874),
    m = n(573359),
    h = n(35587),
    C = n(75825),
    A = n(237412),
    E = n(45938),
    f = n(951305),
    y = n(166532),
    S = n(615310),
    P = n(906234),
    T = n(652215),
    I = n(202541),
    _ = n(375708),
    g = n(865543);
function x(e) {
    let { onClose: t } = e,
        { selectedSkuId: n, purchaseState: c } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        h = (0, r.bG)([m.A], () => m.A.isDisplayingWowMomentConfirmation),
        { isPremium: P, isPremiumGroupPurchase: x, isEligibleForTrial: v, isEligibleForDiscount: N } = (0, o.i)(),
        b = (0, u.S3)(),
        R = (0, S.bB)(),
        { isGift: M, selectedGiftStyle: j, giftRecipient: O } = (0, f.Pv)(),
        L = b?.productLine === T.EZt.COLLECTIBLES,
        w = b?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM,
        D = M && (0, E.Ik)(O) && R === y.pn.CONFIRM && null != j && !L && !w,
        k = [y.pn.SKU_SELECT, y.pn.SELECT_FREE_SKU],
        U = null != R && !k.includes(R) && null != n,
        G = i.useCallback(() => t(!1), [t]);
    return i.useMemo(() => {
        if (null == R) return;
        let e = null;
        return (
            D
                ? (e = (0, l.jsxs)("div", {
                      className: g.kL,
                      children: [
                          (0, l.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, l.jsx)(C.A, {
                                  defaultAnimationState: p.oA.LOOP,
                                  giftStyle: j,
                                  className: g.qq,
                              }),
                          }),
                          (0, l.jsx)(s.s_, { onClick: G, className: g.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : U &&
                  (e =
                      n in I.WN
                          ? (0, l.jsx)(A.A, {
                                currentStep: R ?? void 0,
                                purchaseState: c,
                                premiumType: I.WN[n],
                                onClose: G,
                                showTrialBadge: v,
                                showDiscountBadge: N,
                                isGift: M,
                                giftRecipient: O,
                                isEligibleForTrial: v,
                                enablePremiumBrandRefresh: P,
                                isDisplayingWowMomentConfirmation: h,
                                isPremiumGroupPurchase: x,
                            })
                          : (0, l.jsx)(a.rQ, { title: _.intl.string(_.t.q9EGps) })),
            e
        );
    }, [j, G, c, n, R, v, N, D, U, M, O, P, h, x]);
}
function v(e) {
    let {
            premiumDiscountPercent: t,
            selectedPlanId: n,
            isPremiumDiscountAppliedToCheckoutInvoice: l,
        } = (0, d.t4)((e) => ({
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
                (l && null != t && (n = _.intl.formatToPlainString(_.t.iiLbvu, { percent: t })), (i = "promo")),
        null != e)
            ? e
            : null != n
              ? { headerBadgeText: n }
              : { headerBadgePreset: i };
    }, [e, r, a, s, u, c, t, l]);
}
function N() {
    let e = v();
    return (0, l.jsx)(c.f, { headerBadgeConfig: e });
}
function b(e) {
    let { isGift: t } = (0, f.Pv)();
    return e.step !== y.pn.PLAN_SELECT || t ? (0, l.jsx)(x, { ...e }) : (0, l.jsx)(N, {});
}
