"use strict";
n.d(t, { L: () => L });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(546605),
    c = n(742810),
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
    N = n(305114),
    C = n(652215),
    R = n(788868),
    O = n(818348),
    b = n(575650);
function D(e, t) {
    return e in t;
}
function L(e) {
    let { renderHeader: t, handleClose: n } = e,
        s = (0, h.t4)((e) => e.selectedSkuId),
        {
            purchaseState: L,
            purchaseType: w,
            enablePremiumBrandRefresh: M,
            isDisplayingWowMomentConfirmation: P,
            isPremiumGroupPurchase: x,
            isEligibleForTrial: k,
            isEligibleForDiscount: U,
        } = (0, S.P5)(),
        G = (0, d.A)(),
        F = (0, _.S3)(),
        V = (0, v.bB)(),
        B = (0, o.bG)([N.A], () => N.A.getStoreCountry()),
        { isGift: H, selectedGiftStyle: j, giftRecipient: Y } = (0, T.Pv)(),
        W = (0, u.vg)("PaymentModalHeader"),
        K = F?.productLine === C.EZt.COLLECTIBLES,
        $ = F?.productLine === C.EZt.SOCIAL_LAYER_GAME_ITEM,
        z = H && (0, I.Ik)(Y) && V === y.pn.CONFIRM && null != j && !K && !$,
        q = null != t && null != V,
        Z = [y.pn.SKU_SELECT, y.pn.SELECT_FREE_SKU],
        X = null != V && !Z.includes(V) && null != s,
        Q = (0, c.D7)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == V) return;
        if (Q && f.M.includes(V)) {
            let e = (0, f.u)({
                step: V,
                skuId: s ?? (null != F ? F.id : null),
                showTrialBadge: k,
                showPromoBadge: U,
                storeCountryFromCheckoutContext: B,
                isStoreCountryEnabled: W,
            });
            return (0, r.jsx)(p.s3, { ...e });
        }
        let e = null;
        return (
            z
                ? (e = (0, r.jsxs)("div", {
                      className: b.kL,
                      children: [
                          (0, r.jsx)(E.A, { defaultAnimationState: m.oA.LOOP, giftStyle: j, className: b.qq }),
                          (0, r.jsx)(l.s_y, { onClick: n, className: b.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : q
                  ? (e = t(G ?? null, n, V))
                  : w === O.VV.ONE_TIME
                    ? (e = (0, r.jsx)(A.fs, { step: V, onClose: n }))
                    : X &&
                      (a()(D(s, R.WN), `invalid sku id: ${s}`),
                      (e = (0, r.jsx)(g.A, {
                          currentStep: V ?? void 0,
                          purchaseState: L,
                          premiumType: R.WN[s],
                          onClose: n,
                          showTrialBadge: k,
                          showDiscountBadge: U,
                          isGift: H,
                          giftRecipient: Y,
                          isEligibleForTrial: k,
                          enablePremiumBrandRefresh: M,
                          isDisplayingWowMomentConfirmation: P,
                          isPremiumGroupPurchase: x,
                      }))),
            e
        );
    }, [Q, W, B, j, n, L, t, G, F, s, V, k, U, z, X, q, w, H, Y, M, P, x]);
}
