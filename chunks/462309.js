"use strict";
n.d(t, { L: () => D });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(397927),
    l = n(546605),
    u = n(742810),
    c = n(364995),
    d = n(558620),
    _ = n(427675),
    f = n(584160),
    p = n(169797),
    h = n(94420),
    m = n(242874),
    E = n(75825),
    g = n(499369),
    A = n(490744),
    I = n(45938),
    T = n(937008),
    S = n(156312),
    y = n(166532),
    v = n(615310),
    N = n(652215),
    C = n(788868),
    R = n(818348),
    O = n(575650);
function b(e, t) {
    return e in t;
}
function D(e) {
    let { renderHeader: t, handleClose: n } = e,
        s = (0, h.t4)((e) => e.selectedSkuId),
        {
            purchaseState: D,
            purchaseType: L,
            enablePremiumBrandRefresh: w,
            isDisplayingWowMomentConfirmation: M,
            isPremiumGroupPurchase: P,
            isEligibleForTrial: x,
            isEligibleForDiscount: k,
        } = (0, S.P5)(),
        U = (0, d.A)(),
        G = (0, _.S3)(),
        F = (0, v.bB)(),
        V = (0, c.P7)(),
        { isGift: B, selectedGiftStyle: H, giftRecipient: j } = (0, T.Pv)(),
        Y = (0, l.vg)("PaymentModalHeader"),
        W = G?.productLine === N.EZt.COLLECTIBLES,
        K = G?.productLine === N.EZt.SOCIAL_LAYER_GAME_ITEM,
        $ = B && (0, I.Ik)(j) && F === y.pn.CONFIRM && null != H && !W && !K,
        z = null != t && null != F,
        q = [y.pn.SKU_SELECT, y.pn.SELECT_FREE_SKU],
        Z = null != F && !q.includes(F) && null != s,
        X = (0, u.D7)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == F) return;
        if (X && f.M.includes(F)) {
            let e = (0, f.u)({
                step: F,
                skuId: s ?? (null != G ? G.id : null),
                showTrialBadge: x,
                showPromoBadge: k,
                storeCountryFromCheckoutContext: V,
                isStoreCountryEnabled: Y,
            });
            return (0, r.jsx)(p.s3, { ...e });
        }
        let e = null;
        return (
            $
                ? (e = (0, r.jsxs)("div", {
                      className: O.kL,
                      children: [
                          (0, r.jsx)(E.A, { defaultAnimationState: m.oA.LOOP, giftStyle: H, className: O.qq }),
                          (0, r.jsx)(o.s_y, { onClick: n, className: O.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : z
                  ? (e = t(U ?? null, n, F))
                  : L === R.VV.ONE_TIME
                    ? (e = (0, r.jsx)(A.fs, { step: F, onClose: n }))
                    : Z &&
                      (a()(b(s, C.WN), `invalid sku id: ${s}`),
                      (e = (0, r.jsx)(g.A, {
                          currentStep: F ?? void 0,
                          purchaseState: D,
                          premiumType: C.WN[s],
                          onClose: n,
                          showTrialBadge: x,
                          showDiscountBadge: k,
                          isGift: B,
                          giftRecipient: j,
                          isEligibleForTrial: x,
                          enablePremiumBrandRefresh: w,
                          isDisplayingWowMomentConfirmation: M,
                          isPremiumGroupPurchase: P,
                      }))),
            e
        );
    }, [X, Y, V, H, n, D, t, U, G, s, F, x, k, $, Z, z, L, B, j, w, M, P]);
}
