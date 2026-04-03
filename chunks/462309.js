"use strict";
n.d(t, { L: () => b });
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
    T = n(987616),
    S = n(615310),
    y = n(305114),
    v = n(652215),
    N = n(788868),
    C = n(818348),
    R = n(554418);
function O(e, t) {
    return e in t;
}
function b(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: s,
            selectedPlan: b,
            purchaseState: D,
            purchaseType: L,
            enablePremiumBrandRefresh: w,
            isDisplayingWowMomentConfirmation: M,
            isPremiumGroupPurchase: x,
            isEligibleForTrial: P,
            isEligibleForDiscount: k,
        } = (0, A.P5)(),
        U = (0, T.S3)(),
        G = (0, S.bB)(),
        F = (0, o.bG)([y.A], () => y.A.getStoreCountry()),
        { isGift: V, selectedGiftStyle: B, giftRecipient: H } = (0, g.Pv)(),
        j = (0, u.wI)("PaymentModalHeader"),
        Y = U?.productLine === v.EZt.COLLECTIBLES,
        W = U?.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM,
        K = V && (0, E.Ik)(H) && G === I.pn.CONFIRM && null != B && !Y && !W,
        $ = null != t && null != G,
        z = [I.pn.SKU_SELECT, I.pn.SELECT_FREE_SKU],
        q = null != G && !z.includes(G) && null != s,
        Z = (0, c.D7)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == G) return;
        if (Z && d.M.includes(G)) {
            let e = (0, d.u)({
                step: G,
                skuId: s ?? (null != U ? U.id : null),
                showTrialBadge: P,
                showPromoBadge: k,
                storeCountryFromCheckoutContext: F,
                isStoreCountryDisplayEnabled: j,
            });
            return (0, r.jsx)(_.s3, { ...e });
        }
        let e = null;
        return (
            K
                ? (e = (0, r.jsxs)("div", {
                      className: R.kL,
                      children: [
                          (0, r.jsx)(p.A, { defaultAnimationState: f.oA.LOOP, giftStyle: B, className: R.qq }),
                          (0, r.jsx)(l.s_y, { onClick: n, className: R.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : $
                  ? (e = t(b ?? null, n, G))
                  : L === C.VV.ONE_TIME
                    ? (e = (0, r.jsx)(m.fs, { step: G, onClose: n }))
                    : q &&
                      (a()(O(s, N.WN), `invalid sku id: ${s}`),
                      (e = (0, r.jsx)(h.A, {
                          currentStep: G ?? void 0,
                          purchaseState: D,
                          premiumType: N.WN[s],
                          onClose: n,
                          showTrialBadge: P,
                          showDiscountBadge: k,
                          isGift: V,
                          giftRecipient: H,
                          isEligibleForTrial: P,
                          enablePremiumBrandRefresh: w,
                          isDisplayingWowMomentConfirmation: M,
                          isPremiumGroupPurchase: x,
                      }))),
            e
        );
    }, [Z, j, F, B, n, D, t, b, U, s, G, P, k, K, q, $, L, V, H, w, M, x]);
}
