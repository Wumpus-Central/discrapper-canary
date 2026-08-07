n.d(t, { Fe: () => x, kc: () => b });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(20742),
    s = n(935462),
    o = n(463376),
    u = n(883645),
    c = n(427675),
    d = n(580133),
    p = n(87725),
    m = n(242874),
    C = n(573359),
    h = n(35587),
    f = n(165191),
    E = n(237412),
    S = n(45938),
    A = n(951305),
    y = n(166532),
    P = n(906234),
    I = n(652215),
    g = n(202541),
    v = n(375708),
    T = n(562575);
function _(e) {
    let { onClose: t } = e,
        { selectedSkuId: n, purchaseState: d } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        h = (0, r.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { isPremium: P, isPremiumGroupPurchase: _, isEligibleForTrial: x, isEligibleForDiscount: N } = (0, o.i)(),
        b = (0, c.S3)(),
        R = (0, u.s2)(),
        { isGift: j, selectedGiftStyle: M, giftRecipient: O } = (0, A.Pv)(),
        L = b?.productLine === I.EZt.COLLECTIBLES,
        k = b?.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM,
        w = j && (0, S.Ik)(O) && R === y.pn.CONFIRM && null != M && !L && !k,
        U = [y.pn.SKU_SELECT, y.pn.SELECT_FREE_SKU],
        D = null != R && !U.includes(R) && null != n,
        G = i.useCallback(() => t(!1), [t]);
    return i.useMemo(() => {
        if (null == R) return;
        let e = null;
        return (
            w
                ? (e = (0, l.jsxs)("div", {
                      className: T.kL,
                      children: [
                          (0, l.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, l.jsx)(f.A, {
                                  defaultAnimationState: m.oA.LOOP,
                                  giftStyle: M,
                                  className: T.qq,
                              }),
                          }),
                          (0, l.jsx)(s.s_, { onClick: G, className: T.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : D &&
                  (e =
                      n in g.WN
                          ? (0, l.jsx)(E.A, {
                                currentStep: R ?? void 0,
                                purchaseState: d,
                                premiumType: g.WN[n],
                                onClose: G,
                                showTrialBadge: x,
                                showDiscountBadge: N,
                                isGift: j,
                                giftRecipient: O,
                                isEligibleForTrial: x,
                                enablePremiumBrandRefresh: P,
                                isDisplayingWowMomentConfirmation: h,
                                isPremiumGroupPurchase: _,
                            })
                          : (0, l.jsx)(a.rQ, { title: v.intl.string(v.t.q9EGps) })),
            e
        );
    }, [M, G, d, n, R, x, N, w, D, j, O, P, h, _]);
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
                (l && null != t && (n = v.intl.formatToPlainString(v.t.iiLbvu, { percent: t })), (i = "promo")),
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
function b(e) {
    let { isGift: t } = (0, A.Pv)();
    return e.step !== y.pn.PLAN_SELECT || t ? (0, l.jsx)(_, { ...e }) : (0, l.jsx)(N, {});
}
