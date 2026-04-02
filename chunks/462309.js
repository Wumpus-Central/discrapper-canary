"use strict";
n.d(t, { L: () => C });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(397927),
    l = n(813077),
    u = n(742810),
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
    I = n(615310),
    T = n(652215),
    S = n(788868),
    y = n(818348),
    v = n(16571);
function N(e, t) {
    return e in t;
}
function C(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: s,
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
        k = (0, I.bB)(),
        { isGift: U, selectedGiftStyle: G, giftRecipient: F } = (0, E.Pv)(),
        V = (0, l.wI)("PaymentModalHeader"),
        B = b?.productLine === T.EZt.COLLECTIBLES,
        H = b?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM,
        j = U && (0, m.Ik)(F) && k === A.pn.CONFIRM && null != G && !B && !H,
        Y = null != t && null != k,
        W = [A.pn.SKU_SELECT, A.pn.SELECT_FREE_SKU],
        K = null != k && !W.includes(k) && null != s,
        $ = (0, u.D7)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == k) return;
        if ($ && c.M.includes(k)) {
            let e = (0, c.u)({
                step: k,
                skuId: s ?? (null != b ? b.id : null),
                showTrialBadge: M,
                showPromoBadge: x,
                storeCountryFromCheckoutContext: P,
                isStoreCountryDisplayEnabled: V,
            });
            return (0, r.jsx)(d.s3, { ...e });
        }
        let e = null;
        return (
            j
                ? (e = (0, r.jsxs)("div", {
                      className: v.kL,
                      children: [
                          (0, r.jsx)(f.A, { defaultAnimationState: _.oA.LOOP, giftStyle: G, className: v.qq }),
                          (0, r.jsx)(o.s_y, { onClick: n, className: v.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : Y
                  ? (e = t(C ?? null, n, k))
                  : O === y.VV.ONE_TIME
                    ? (e = (0, r.jsx)(h.fs, { step: k, onClose: n }))
                    : K &&
                      (a()(N(s, S.WN), `invalid sku id: ${s}`),
                      (e = (0, r.jsx)(p.A, {
                          currentStep: k ?? void 0,
                          purchaseState: R,
                          premiumType: S.WN[s],
                          onClose: n,
                          showTrialBadge: M,
                          showDiscountBadge: x,
                          isGift: U,
                          giftRecipient: F,
                          isEligibleForTrial: M,
                          enablePremiumBrandRefresh: D,
                          isDisplayingWowMomentConfirmation: L,
                          isPremiumGroupPurchase: w,
                      }))),
            e
        );
    }, [$, V, P, G, n, R, t, C, b, s, k, M, x, j, K, Y, O, U, F, D, L, w]);
}
