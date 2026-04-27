n.d(t, { L: () => L });
var r = n(627968),
    l = n(64700),
    u = n(284009),
    a = n.n(u),
    i = n(935462),
    s = n(546605),
    d = n(742810),
    o = n(364995),
    c = n(558620),
    h = n(427675),
    f = n(584160),
    A = n(169797),
    E = n(94420),
    b = n(242874),
    I = n(165191),
    N = n(237412),
    S = n(490744),
    T = n(45938),
    O = n(937008),
    _ = n(156312),
    m = n(166532),
    k = n(615310),
    p = n(652215),
    C = n(788868),
    R = n(818348),
    g = n(575650);
function L(e) {
    let { renderHeader: t, handleClose: n } = e,
        u = (0, E.t4)((e) => e.selectedSkuId),
        {
            purchaseState: L,
            purchaseType: P,
            enablePremiumBrandRefresh: y,
            isDisplayingWowMomentConfirmation: v,
            isPremiumGroupPurchase: x,
            isEligibleForTrial: w,
            isEligibleForDiscount: B,
        } = (0, _.P5)(),
        D = (0, c.A)(),
        j = (0, h.S3)(),
        M = (0, k.bB)(),
        F = (0, o.P7)(),
        { isGift: G, selectedGiftStyle: H, giftRecipient: U } = (0, O.Pv)(),
        K = (0, s.vg)("PaymentModalHeader"),
        W = j?.productLine === p.EZt.COLLECTIBLES,
        V = j?.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM,
        Z = G && (0, T.Ik)(U) && M === m.pn.CONFIRM && null != H && !W && !V,
        Y = null != t && null != M,
        X = [m.pn.SKU_SELECT, m.pn.SELECT_FREE_SKU],
        q = null != M && !X.includes(M) && null != u,
        $ = (0, d.D7)({ location: "PaymentModalHeader" });
    return l.useMemo(() => {
        if (null == M) return;
        if ($ && f.M.includes(M)) {
            let e = (0, f.u)({
                step: M,
                skuId: u ?? (null != j ? j.id : null),
                showTrialBadge: w,
                showPromoBadge: B,
                storeCountryFromCheckoutContext: F,
                isStoreCountryEnabled: K,
            });
            return (0, r.jsx)(A.s3, { ...e });
        }
        let e = null;
        return (
            Z
                ? (e = (0, r.jsxs)("div", {
                      className: g.kL,
                      children: [
                          (0, r.jsx)(I.A, { defaultAnimationState: b.oA.LOOP, giftStyle: H, className: g.qq }),
                          (0, r.jsx)(i.s_, { onClick: n, className: g.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : Y
                  ? (e = t(D ?? null, n, M))
                  : P === R.VV.ONE_TIME
                    ? (e = (0, r.jsx)(S.fs, { step: M, onClose: n }))
                    : q &&
                      (a()(u in C.WN, `invalid sku id: ${u}`),
                      (e = (0, r.jsx)(N.A, {
                          currentStep: M ?? void 0,
                          purchaseState: L,
                          premiumType: C.WN[u],
                          onClose: n,
                          showTrialBadge: w,
                          showDiscountBadge: B,
                          isGift: G,
                          giftRecipient: U,
                          isEligibleForTrial: w,
                          enablePremiumBrandRefresh: y,
                          isDisplayingWowMomentConfirmation: v,
                          isPremiumGroupPurchase: x,
                      }))),
            e
        );
    }, [$, K, F, H, n, L, t, D, j, u, M, w, B, Z, q, Y, P, G, U, y, v, x]);
}
