"use strict";
n.d(t, { L: () => v });
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
    p = n(490744),
    h = n(45938),
    m = n(937008),
    g = n(156312),
    E = n(166532),
    A = n(652215),
    I = n(788868),
    T = n(818348),
    y = n(629865);
function S(e, t) {
    return e in t;
}
function v(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: a,
            step: v,
            selectedPlan: C,
            purchaseState: b,
            purchaseType: N,
            selectedSku: R,
            enablePremiumBrandRefresh: O,
            isDisplayingWowMomentConfirmation: D,
            isPremiumGroupPurchase: L,
            isEligibleForTrial: w,
            isEligibleForDiscount: x,
        } = (0, g.P5)(),
        { isGift: P, selectedGiftStyle: M, giftRecipient: k } = (0, m.Pv)(),
        U = R?.productLine === A.EZt.COLLECTIBLES,
        G = R?.productLine === A.EZt.SOCIAL_LAYER_GAME_ITEM,
        V = P && (0, h.Ik)(k) && v === E.pn.CONFIRM && null != M && !U && !G,
        F = null != t && null != v,
        B = [E.pn.SKU_SELECT, E.pn.SELECT_FREE_SKU],
        j = null != v && !B.includes(v) && null != a,
        { enabled: H } = (0, l.T0)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == v) return;
        if (H && v === E.pn.REVIEW) {
            let e = (0, u.u)({ skuId: a ?? (null != R ? R.id : null), showTrialBadge: w, showPromoBadge: x });
            return (0, r.jsx)(c.s3, { ...e });
        }
        let e = null;
        return (
            V
                ? (e = (0, r.jsxs)("div", {
                      className: y.kL,
                      children: [
                          (0, r.jsx)(_.A, { defaultAnimationState: d.oA.LOOP, giftStyle: M, className: y.qq }),
                          (0, r.jsx)(o.s_y, { onClick: n, className: y.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : F
                  ? (e = t(C ?? null, n, v))
                  : N === T.VV.ONE_TIME
                    ? (e = (0, r.jsx)(p.fs, { step: v, onClose: n }))
                    : j &&
                      (s()(S(a, I.WN), `invalid sku id: ${a}`),
                      (e = (0, r.jsx)(f.A, {
                          currentStep: v ?? void 0,
                          purchaseState: b,
                          premiumType: I.WN[a],
                          onClose: n,
                          showTrialBadge: w,
                          showDiscountBadge: x,
                          isGift: P,
                          giftRecipient: k,
                          isEligibleForTrial: w,
                          enablePremiumBrandRefresh: O,
                          isDisplayingWowMomentConfirmation: D,
                          isPremiumGroupPurchase: L,
                      }))),
            e
        );
    }, [H, M, n, b, t, C, R, a, v, w, x, V, j, F, N, P, k, O, D, L]);
}
