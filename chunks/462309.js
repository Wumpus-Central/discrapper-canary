"use strict";
n.d(t, { L: () => D });
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
    T = n(970077),
    S = n(987616),
    y = n(615310),
    v = n(305114),
    N = n(652215),
    C = n(788868),
    R = n(818348),
    O = n(16571);
function b(e, t) {
    return e in t;
}
function D(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: s,
            purchaseState: D,
            purchaseType: L,
            enablePremiumBrandRefresh: w,
            isDisplayingWowMomentConfirmation: M,
            isPremiumGroupPurchase: x,
            isEligibleForTrial: P,
            isEligibleForDiscount: k,
        } = (0, A.P5)(),
        U = (0, T.A)(),
        G = (0, S.S3)(),
        F = (0, y.bB)(),
        V = (0, o.bG)([v.A], () => v.A.getStoreCountry()),
        { isGift: B, selectedGiftStyle: H, giftRecipient: j } = (0, g.Pv)(),
        Y = (0, u.wI)("PaymentModalHeader"),
        W = G?.productLine === N.EZt.COLLECTIBLES,
        K = G?.productLine === N.EZt.SOCIAL_LAYER_GAME_ITEM,
        $ = B && (0, E.Ik)(j) && F === I.pn.CONFIRM && null != H && !W && !K,
        z = null != t && null != F,
        q = [I.pn.SKU_SELECT, I.pn.SELECT_FREE_SKU],
        Z = null != F && !q.includes(F) && null != s,
        X = (0, c.D7)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == F) return;
        if (X && d.M.includes(F)) {
            let e = (0, d.u)({
                step: F,
                skuId: s ?? (null != G ? G.id : null),
                showTrialBadge: P,
                showPromoBadge: k,
                storeCountryFromCheckoutContext: V,
                isStoreCountryDisplayEnabled: Y,
            });
            return (0, r.jsx)(_.s3, { ...e });
        }
        let e = null;
        return (
            $
                ? (e = (0, r.jsxs)("div", {
                      className: O.kL,
                      children: [
                          (0, r.jsx)(p.A, { defaultAnimationState: f.oA.LOOP, giftStyle: H, className: O.qq }),
                          (0, r.jsx)(l.s_y, { onClick: n, className: O.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : z
                  ? (e = t(U ?? null, n, F))
                  : L === R.VV.ONE_TIME
                    ? (e = (0, r.jsx)(m.fs, { step: F, onClose: n }))
                    : Z &&
                      (a()(b(s, C.WN), `invalid sku id: ${s}`),
                      (e = (0, r.jsx)(h.A, {
                          currentStep: F ?? void 0,
                          purchaseState: D,
                          premiumType: C.WN[s],
                          onClose: n,
                          showTrialBadge: P,
                          showDiscountBadge: k,
                          isGift: B,
                          giftRecipient: j,
                          isEligibleForTrial: P,
                          enablePremiumBrandRefresh: w,
                          isDisplayingWowMomentConfirmation: M,
                          isPremiumGroupPurchase: x,
                      }))),
            e
        );
    }, [X, Y, V, H, n, D, t, U, G, s, F, P, k, $, Z, z, L, B, j, w, M, x]);
}
