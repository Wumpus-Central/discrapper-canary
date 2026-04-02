"use strict";
n.d(t, { L: () => O });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(813077),
    c = n(742810),
    d = n(584160),
    _ = n(169797),
    f = n(242874),
    p = n(75825),
    h = n(499369),
    m = n(490744),
    E = n(45938),
    g = n(937008),
    A = n(156312),
    I = n(166532),
    T = n(615310),
    S = n(305114),
    y = n(652215),
    v = n(788868),
    N = n(818348),
    C = n(16571);
function R(e, t) {
    return e in t;
}
function O(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: s,
            selectedPlan: O,
            purchaseState: b,
            purchaseType: D,
            selectedSku: L,
            enablePremiumBrandRefresh: w,
            isDisplayingWowMomentConfirmation: M,
            isPremiumGroupPurchase: x,
            isEligibleForTrial: P,
            isEligibleForDiscount: k,
        } = (0, A.P5)(),
        U = (0, T.bB)(),
        G = (0, o.bG)([S.A], () => S.A.getStoreCountry()),
        { isGift: F, selectedGiftStyle: V, giftRecipient: B } = (0, g.Pv)(),
        H = (0, u.wI)("PaymentModalHeader"),
        j = L?.productLine === y.EZt.COLLECTIBLES,
        Y = L?.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM,
        W = F && (0, E.Ik)(B) && U === I.pn.CONFIRM && null != V && !j && !Y,
        K = null != t && null != U,
        $ = [I.pn.SKU_SELECT, I.pn.SELECT_FREE_SKU],
        z = null != U && !$.includes(U) && null != s,
        q = (0, c.D7)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == U) return;
        if (q && d.M.includes(U)) {
            let e = (0, d.u)({
                step: U,
                skuId: s ?? (null != L ? L.id : null),
                showTrialBadge: P,
                showPromoBadge: k,
                storeCountryFromCheckoutContext: G,
                isStoreCountryDisplayEnabled: H,
            });
            return (0, r.jsx)(_.s3, { ...e });
        }
        let e = null;
        return (
            W
                ? (e = (0, r.jsxs)("div", {
                      className: C.kL,
                      children: [
                          (0, r.jsx)(p.A, { defaultAnimationState: f.oA.LOOP, giftStyle: V, className: C.qq }),
                          (0, r.jsx)(l.s_y, { onClick: n, className: C.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : K
                  ? (e = t(O ?? null, n, U))
                  : D === N.VV.ONE_TIME
                    ? (e = (0, r.jsx)(m.fs, { step: U, onClose: n }))
                    : z &&
                      (a()(R(s, v.WN), `invalid sku id: ${s}`),
                      (e = (0, r.jsx)(h.A, {
                          currentStep: U ?? void 0,
                          purchaseState: b,
                          premiumType: v.WN[s],
                          onClose: n,
                          showTrialBadge: P,
                          showDiscountBadge: k,
                          isGift: F,
                          giftRecipient: B,
                          isEligibleForTrial: P,
                          enablePremiumBrandRefresh: w,
                          isDisplayingWowMomentConfirmation: M,
                          isPremiumGroupPurchase: x,
                      }))),
            e
        );
    }, [q, H, G, V, n, b, t, O, L, s, U, P, k, W, z, K, D, F, B, w, M, x]);
}
