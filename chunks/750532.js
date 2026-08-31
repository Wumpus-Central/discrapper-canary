n.d(t, { Fe: () => T, kc: () => b });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(935462),
    s = n(20742),
    o = n(463376),
    u = n(883645),
    c = n(427675),
    d = n(580133),
    m = n(206441),
    p = n(242874),
    C = n(573359),
    h = n(892349),
    f = n(35587),
    E = n(165191),
    S = n(237412),
    y = n(45938),
    I = n(951305),
    g = n(166532),
    A = n(652215),
    P = n(202541),
    v = n(375708),
    x = n(894575);
function _(e) {
    let { onClose: t } = e,
        { selectedSkuId: n, purchaseState: d } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        f = (0, r.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { isPremium: _, isPremiumGroupPurchase: T, isEligibleForTrial: N, isEligibleForDiscount: b } = (0, o.i)(),
        j = (0, c.S3)(),
        R = (0, u.s2)(),
        { isGift: M, selectedGiftStyle: O, giftRecipient: L } = (0, I.Pv)(),
        k = (0, h.p)("PremiumUnifiedCheckoutCustomHeader"),
        w = j?.productLine === A.EZt.COLLECTIBLES,
        U = j?.productLine === A.EZt.SOCIAL_LAYER_GAME_ITEM,
        D = M && (0, y.Ik)(L) && R === g.pn.CONFIRM && null != O && !w && !U,
        G = [g.pn.SKU_SELECT, g.pn.SELECT_FREE_SKU],
        F = null != R && !G.includes(R) && null != n,
        B = i.useCallback(() => t(!1), [t]);
    return i.useMemo(() => {
        if (null == R) return;
        let e = null;
        return (
            D
                ? (e = (0, l.jsxs)("div", {
                      className: x.kL,
                      children: [
                          (0, l.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, l.jsx)(E.A, {
                                  defaultAnimationState: p.oA.LOOP,
                                  giftStyle: O,
                                  className: x.qq,
                              }),
                          }),
                          (0, l.jsx)(a.s_, { onClick: B, className: x.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : k
                  ? (e = (0, l.jsx)(s.rQ, { gradientColor: "nitro-pink", title: v.intl.string(v.t["7YWj6+"]) }))
                  : F &&
                    (e =
                        n in P.WN
                            ? (0, l.jsx)(S.A, {
                                  currentStep: R ?? void 0,
                                  purchaseState: d,
                                  premiumType: P.WN[n],
                                  onClose: B,
                                  showTrialBadge: N,
                                  showDiscountBadge: b,
                                  isGift: M,
                                  giftRecipient: L,
                                  isEligibleForTrial: N,
                                  enablePremiumBrandRefresh: _,
                                  isDisplayingWowMomentConfirmation: f,
                                  isPremiumGroupPurchase: T,
                              })
                            : (0, l.jsx)(s.rQ, { title: v.intl.string(v.t.q9EGps) })),
            e
        );
    }, [O, B, d, n, R, N, b, D, k, F, M, L, _, f, T]);
}
function T(e) {
    let { premiumDiscountPercent: t, isPremiumDiscountAppliedToCheckoutInvoice: n } = (0, m.t4)((e) => ({
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
            selectedPlanId: e.selectedPlanId,
        })),
        { isPremiumGroupPurchase: l, isEligibleForTrial: r, isEligibleForDiscount: a } = (0, o.i)(),
        s = (0, f.Sq)();
    return i.useMemo(() => {
        let i, o;
        return (l
            ? (o = "beta")
            : r
              ? (o = "trial")
              : (a || s) &&
                (n && null != t && (i = v.intl.formatToPlainString(v.t.iiLbvu, { percent: t })), (o = "promo")),
        null != e)
            ? e
            : null != i
              ? { headerBadgeText: i }
              : { headerBadgePreset: o };
    }, [e, l, r, a, s, t, n]);
}
function N() {
    let e = T();
    return (0, l.jsx)(d.f, { headerBadgeConfig: e });
}
function b(e) {
    let { isGift: t } = (0, I.Pv)();
    return e.step !== g.pn.PLAN_SELECT || t ? (0, l.jsx)(_, { ...e }) : (0, l.jsx)(N, {});
}
