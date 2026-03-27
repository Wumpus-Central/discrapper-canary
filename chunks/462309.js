"use strict";
n.d(t, { L: () => N });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(397927),
    l = n(813077),
    u = n(608805),
    c = n(584160),
    d = n(169797),
    _ = n(242874),
    f = n(75825),
    p = n(499369),
    h = n(490744),
    m = n(45938),
    E = n(937008),
    g = n(156312),
    A = n(166532),
    I = n(652215),
    T = n(788868),
    S = n(818348),
    y = n(16571);
function v(e, t) {
    return e in t;
}
function N(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: s,
            step: N,
            selectedPlan: C,
            purchaseState: R,
            purchaseType: O,
            selectedSku: b,
            enablePremiumBrandRefresh: D,
            isDisplayingWowMomentConfirmation: L,
            isPremiumGroupPurchase: w,
            isEligibleForTrial: M,
            isEligibleForDiscount: x,
            storeCountryFromCheckoutContext: P,
        } = (0, g.P5)(),
        { isGift: k, selectedGiftStyle: U, giftRecipient: G } = (0, E.Pv)(),
        F = (0, l.wI)("PaymentModalHeader"),
        V = b?.productLine === I.EZt.COLLECTIBLES,
        B = b?.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM,
        H = k && (0, m.Ik)(G) && N === A.pn.CONFIRM && null != U && !V && !B,
        j = null != t && null != N,
        Y = [A.pn.SKU_SELECT, A.pn.SELECT_FREE_SKU],
        W = null != N && !Y.includes(N) && null != s,
        K = (0, u.D7)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == N) return;
        if (K && c.M.includes(N)) {
            let e = (0, c.u)({
                step: N,
                skuId: s ?? (null != b ? b.id : null),
                showTrialBadge: M,
                showPromoBadge: x,
                storeCountryFromCheckoutContext: P,
                isStoreCountryDisplayEnabled: F,
            });
            return (0, r.jsx)(d.s3, { ...e });
        }
        let e = null;
        return (
            H
                ? (e = (0, r.jsxs)("div", {
                      className: y.kL,
                      children: [
                          (0, r.jsx)(f.A, { defaultAnimationState: _.oA.LOOP, giftStyle: U, className: y.qq }),
                          (0, r.jsx)(o.s_y, { onClick: n, className: y.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : j
                  ? (e = t(C ?? null, n, N))
                  : O === S.VV.ONE_TIME
                    ? (e = (0, r.jsx)(h.fs, { step: N, onClose: n }))
                    : W &&
                      (a()(v(s, T.WN), `invalid sku id: ${s}`),
                      (e = (0, r.jsx)(p.A, {
                          currentStep: N ?? void 0,
                          purchaseState: R,
                          premiumType: T.WN[s],
                          onClose: n,
                          showTrialBadge: M,
                          showDiscountBadge: x,
                          isGift: k,
                          giftRecipient: G,
                          isEligibleForTrial: M,
                          enablePremiumBrandRefresh: D,
                          isDisplayingWowMomentConfirmation: L,
                          isPremiumGroupPurchase: w,
                      }))),
            e
        );
    }, [K, F, P, U, n, R, t, C, b, s, N, M, x, H, W, j, O, k, G, D, L, w]);
}
