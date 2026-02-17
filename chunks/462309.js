"use strict";
n.d(t, { L: () => C });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(397927),
    l = n(608805),
    u = n(584160),
    c = n(169797),
    d = n(242874),
    _ = n(75825),
    f = n(499369),
    h = n(490744),
    p = n(45938),
    g = n(937008),
    E = n(156312),
    A = n(166532),
    I = n(652215),
    T = n(788868),
    y = n(818348),
    S = n(629865);
function v(e, t) {
    return e in t;
}
function C(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: a,
            step: C,
            selectedPlan: b,
            purchaseState: N,
            purchaseType: R,
            selectedSku: O,
            enablePremiumBrandRefresh: D,
            isDisplayingWowMomentConfirmation: L,
            isPremiumGroupPurchase: w,
            isEligibleForTrial: x,
            isEligibleForDiscount: P,
        } = (0, E.P5)(),
        { isGift: M, selectedGiftStyle: k, giftRecipient: U } = (0, g.Pv)(),
        G = O?.productLine === I.EZt.COLLECTIBLES,
        F = O?.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM,
        V = M && (0, p.Ik)(U) && C === A.pn.CONFIRM && null != k && !G && !F,
        B = null != t && null != C,
        j = [A.pn.SKU_SELECT, A.pn.SELECT_FREE_SKU],
        H = null != C && !j.includes(C) && null != a,
        { enabled: Y } = (0, l.T0)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == C) return;
        if (Y && u.M.includes(C)) {
            let e = (0, u.u)({ step: C, skuId: a ?? (null != O ? O.id : null), showTrialBadge: x, showPromoBadge: P });
            return (0, r.jsx)(c.s3, { ...e });
        }
        let e = null;
        return (
            V
                ? (e = (0, r.jsxs)("div", {
                      className: S.kL,
                      children: [
                          (0, r.jsx)(_.A, { defaultAnimationState: d.oA.LOOP, giftStyle: k, className: S.qq }),
                          (0, r.jsx)(o.s_y, { onClick: n, className: S.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : B
                  ? (e = t(b ?? null, n, C))
                  : R === y.VV.ONE_TIME
                    ? (e = (0, r.jsx)(h.fs, { step: C, onClose: n }))
                    : H &&
                      (s()(v(a, T.WN), `invalid sku id: ${a}`),
                      (e = (0, r.jsx)(f.A, {
                          currentStep: C ?? void 0,
                          purchaseState: N,
                          premiumType: T.WN[a],
                          onClose: n,
                          showTrialBadge: x,
                          showDiscountBadge: P,
                          isGift: M,
                          giftRecipient: U,
                          isEligibleForTrial: x,
                          enablePremiumBrandRefresh: D,
                          isDisplayingWowMomentConfirmation: L,
                          isPremiumGroupPurchase: w,
                      }))),
            e
        );
    }, [Y, k, n, N, t, b, O, a, C, x, P, V, H, B, R, M, U, D, L, w]);
}
