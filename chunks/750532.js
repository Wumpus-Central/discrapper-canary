n.d(t, { Fe: () => N, kc: () => j });
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
    A = n(166532),
    g = n(906234),
    P = n(652215),
    v = n(202541),
    x = n(375708),
    _ = n(894575);
function T(e) {
    let { onClose: t } = e,
        { selectedSkuId: n, purchaseState: d } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        f = (0, r.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { isPremium: g, isPremiumGroupPurchase: T, isEligibleForTrial: N, isEligibleForDiscount: b } = (0, o.i)(),
        j = (0, c.S3)(),
        R = (0, u.s2)(),
        { isGift: M, selectedGiftStyle: O, giftRecipient: L } = (0, I.Pv)(),
        k = (0, h.p)("PremiumUnifiedCheckoutCustomHeader"),
        w = j?.productLine === P.EZt.COLLECTIBLES,
        U = j?.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM,
        D = M && (0, y.Ik)(L) && R === A.pn.CONFIRM && null != O && !w && !U,
        G = [A.pn.SKU_SELECT, A.pn.SELECT_FREE_SKU],
        F = null != R && !G.includes(R) && null != n,
        B = i.useCallback(() => t(!1), [t]);
    return i.useMemo(() => {
        if (null == R) return;
        let e = null;
        return (
            D
                ? (e = (0, l.jsxs)("div", {
                      className: _.kL,
                      children: [
                          (0, l.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, l.jsx)(E.A, {
                                  defaultAnimationState: p.oA.LOOP,
                                  giftStyle: O,
                                  className: _.qq,
                              }),
                          }),
                          (0, l.jsx)(a.s_, { onClick: B, className: _.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : k
                  ? (e = (0, l.jsx)(s.rQ, { gradientColor: "nitro-pink", title: x.intl.string(x.t["7YWj6+"]) }))
                  : F &&
                    (e =
                        n in v.WN
                            ? (0, l.jsx)(S.A, {
                                  currentStep: R ?? void 0,
                                  purchaseState: d,
                                  premiumType: v.WN[n],
                                  onClose: B,
                                  showTrialBadge: N,
                                  showDiscountBadge: b,
                                  isGift: M,
                                  giftRecipient: L,
                                  isEligibleForTrial: N,
                                  enablePremiumBrandRefresh: g,
                                  isDisplayingWowMomentConfirmation: f,
                                  isPremiumGroupPurchase: T,
                              })
                            : (0, l.jsx)(s.rQ, { title: x.intl.string(x.t.q9EGps) })),
            e
        );
    }, [O, B, d, n, R, N, b, D, k, F, M, L, g, f, T]);
}
function N(e) {
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
        u = (0, g.G)(n ?? "") && !a,
        c = (0, f.Sq)();
    return i.useMemo(() => {
        let n, i;
        return (r
            ? (i = "beta")
            : a
              ? (i = "trial")
              : (s || u || c) &&
                (l && null != t && (n = x.intl.formatToPlainString(x.t.iiLbvu, { percent: t })), (i = "promo")),
        null != e)
            ? e
            : null != n
              ? { headerBadgeText: n }
              : { headerBadgePreset: i };
    }, [e, r, a, s, u, c, t, l]);
}
function b() {
    let e = N();
    return (0, l.jsx)(d.f, { headerBadgeConfig: e });
}
function j(e) {
    let { isGift: t } = (0, I.Pv)();
    return e.step !== A.pn.PLAN_SELECT || t ? (0, l.jsx)(T, { ...e }) : (0, l.jsx)(b, {});
}
