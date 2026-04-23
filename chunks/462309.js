"use strict";
n.d(t, { L: () => b });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(935462),
    l = n(546605),
    u = n(742810),
    c = n(364995),
    d = n(558620),
    _ = n(427675),
    f = n(584160),
    p = n(169797),
    h = n(94420),
    E = n(242874),
    m = n(75825),
    g = n(499369),
    A = n(490744),
    I = n(45938),
    T = n(937008),
    S = n(156312),
    y = n(166532),
    N = n(615310),
    v = n(652215),
    C = n(788868),
    O = n(818348),
    R = n(575650);
function b(e) {
    let { renderHeader: t, handleClose: n } = e,
        s = (0, h.t4)((e) => e.selectedSkuId),
        {
            purchaseState: b,
            purchaseType: D,
            enablePremiumBrandRefresh: L,
            isDisplayingWowMomentConfirmation: w,
            isPremiumGroupPurchase: M,
            isEligibleForTrial: P,
            isEligibleForDiscount: x,
        } = (0, S.P5)(),
        k = (0, d.A)(),
        U = (0, _.S3)(),
        G = (0, N.bB)(),
        F = (0, c.P7)(),
        { isGift: V, selectedGiftStyle: B, giftRecipient: H } = (0, T.Pv)(),
        j = (0, l.vg)("PaymentModalHeader"),
        Y = U?.productLine === v.EZt.COLLECTIBLES,
        W = U?.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM,
        K = V && (0, I.Ik)(H) && G === y.pn.CONFIRM && null != B && !Y && !W,
        $ = null != t && null != G,
        z = [y.pn.SKU_SELECT, y.pn.SELECT_FREE_SKU],
        q = null != G && !z.includes(G) && null != s,
        X = (0, u.D7)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == G) return;
        if (X && f.M.includes(G)) {
            let e = (0, f.u)({
                step: G,
                skuId: s ?? (null != U ? U.id : null),
                showTrialBadge: P,
                showPromoBadge: x,
                storeCountryFromCheckoutContext: F,
                isStoreCountryEnabled: j,
            });
            return (0, r.jsx)(p.s3, { ...e });
        }
        let e = null;
        return (
            K
                ? (e = (0, r.jsxs)("div", {
                      className: R.kL,
                      children: [
                          (0, r.jsx)(m.A, { defaultAnimationState: E.oA.LOOP, giftStyle: B, className: R.qq }),
                          (0, r.jsx)(o.s_, { onClick: n, className: R.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : $
                  ? (e = t(k ?? null, n, G))
                  : D === O.VV.ONE_TIME
                    ? (e = (0, r.jsx)(A.fs, { step: G, onClose: n }))
                    : q &&
                      (a()(s in C.WN, `invalid sku id: ${s}`),
                      (e = (0, r.jsx)(g.A, {
                          currentStep: G ?? void 0,
                          purchaseState: b,
                          premiumType: C.WN[s],
                          onClose: n,
                          showTrialBadge: P,
                          showDiscountBadge: x,
                          isGift: V,
                          giftRecipient: H,
                          isEligibleForTrial: P,
                          enablePremiumBrandRefresh: L,
                          isDisplayingWowMomentConfirmation: w,
                          isPremiumGroupPurchase: M,
                      }))),
            e
        );
    }, [X, j, F, B, n, b, t, k, U, s, G, P, x, K, q, $, D, V, H, L, w, M]);
}
