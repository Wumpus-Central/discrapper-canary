"use strict";
n.d(t, { L: () => v });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(397927),
    l = n(608805),
    u = n(584160),
    c = n(169797),
    d = n(242874),
    _ = n(75825),
    f = n(499369),
    p = n(490744),
    h = n(45938),
    m = n(937008),
    E = n(156312),
    g = n(166532),
    A = n(652215),
    I = n(788868),
    T = n(818348),
    S = n(767659);
function y(e, t) {
    return e in t;
}
function v(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: s,
            step: v,
            selectedPlan: N,
            purchaseState: C,
            purchaseType: b,
            selectedSku: R,
            enablePremiumBrandRefresh: O,
            isDisplayingWowMomentConfirmation: D,
            isPremiumGroupPurchase: L,
            isEligibleForTrial: w,
            isEligibleForDiscount: x,
        } = (0, E.P5)(),
        { isGift: M, selectedGiftStyle: P, giftRecipient: k } = (0, m.Pv)(),
        U = R?.productLine === A.EZt.COLLECTIBLES,
        G = R?.productLine === A.EZt.SOCIAL_LAYER_GAME_ITEM,
        F = M && (0, h.Ik)(k) && v === g.pn.CONFIRM && null != P && !U && !G,
        V = null != t && null != v,
        B = [g.pn.SKU_SELECT, g.pn.SELECT_FREE_SKU],
        H = null != v && !B.includes(v) && null != s,
        j = (0, l.D7)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == v) return;
        if (j && u.M.includes(v)) {
            let e = (0, u.u)({ step: v, skuId: s ?? (null != R ? R.id : null), showTrialBadge: w, showPromoBadge: x });
            return (0, r.jsx)(c.s3, { ...e });
        }
        let e = null;
        return (
            F
                ? (e = (0, r.jsxs)("div", {
                      className: S.kL,
                      children: [
                          (0, r.jsx)(_.A, { defaultAnimationState: d.oA.LOOP, giftStyle: P, className: S.qq }),
                          (0, r.jsx)(o.s_y, { onClick: n, className: S.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : V
                  ? (e = t(N ?? null, n, v))
                  : b === T.VV.ONE_TIME
                    ? (e = (0, r.jsx)(p.fs, { step: v, onClose: n }))
                    : H &&
                      (a()(y(s, I.WN), `invalid sku id: ${s}`),
                      (e = (0, r.jsx)(f.A, {
                          currentStep: v ?? void 0,
                          purchaseState: C,
                          premiumType: I.WN[s],
                          onClose: n,
                          showTrialBadge: w,
                          showDiscountBadge: x,
                          isGift: M,
                          giftRecipient: k,
                          isEligibleForTrial: w,
                          enablePremiumBrandRefresh: O,
                          isDisplayingWowMomentConfirmation: D,
                          isPremiumGroupPurchase: L,
                      }))),
            e
        );
    }, [j, P, n, C, t, N, R, s, v, w, x, F, H, V, b, M, k, O, D, L]);
}
