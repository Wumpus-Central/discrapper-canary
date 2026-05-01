n.d(t, { L: () => k });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    u = n(935462),
    o = n(546605),
    s = n(742810),
    d = n(364995),
    c = n(558620),
    A = n(427675),
    f = n(584160),
    m = n(169797),
    E = n(94420),
    h = n(242874),
    C = n(75825),
    T = n(237412),
    N = n(897904),
    g = n(45938),
    p = n(937008),
    I = n(902958),
    S = n(166532),
    x = n(615310),
    y = n(906234),
    v = n(652215),
    R = n(788868),
    _ = n(818348),
    j = n(575650);
function k(e) {
    let { renderHeader: t, handleClose: n } = e,
        { selectedSkuId: i, purchaseState: k } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        {
            purchaseType: P,
            paymentSourceId: O,
            enablePremiumBrandRefresh: B,
            isDisplayingWowMomentConfirmation: M,
            isPremiumGroupPurchase: b,
            isEligibleForTrial: w,
            isEligibleForDiscount: G,
        } = (0, I.P5)(),
        U = (0, c.A)(),
        F = (0, A.S3)(),
        H = (0, x.bB)(),
        { checkoutPaymentSources: L, storeCountry: D } = (0, d.t6)(),
        W = r.useMemo(() => {
            if (null == O) return null;
            let e = L.find((e) => e.id === O);
            return e?.relocationCountry ?? null;
        }, [L, O]),
        { isGift: V, selectedGiftStyle: K, giftRecipient: Z } = (0, p.Pv)(),
        $ = (0, o.vg)("PaymentModalHeader"),
        z = F?.productLine === v.EZt.COLLECTIBLES,
        Y = F?.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM,
        q = V && (0, g.Ik)(Z) && H === S.pn.CONFIRM && null != K && !z && !Y,
        Q = null != t && null != H,
        J = [S.pn.SKU_SELECT, S.pn.SELECT_FREE_SKU],
        X = null != H && !J.includes(H) && null != i,
        ee = (0, s.D7)({ location: "PaymentModalHeader" }),
        et = (0, y.G)(U?.id ?? "") && !w;
    return r.useMemo(() => {
        if (null == H) return;
        if (ee && f.M.includes(H)) {
            let e = (0, f.u)({
                step: H,
                skuId: i ?? (null != F ? F.id : null),
                showTrialBadge: w,
                showPromoBadge: G || et,
                storeCountryFromCheckoutContext: D,
                isStoreCountryEnabled: $,
                relocationCountry: W,
            });
            return (0, l.jsx)(m.s3, { ...e });
        }
        let e = null;
        return (
            q
                ? (e = (0, l.jsxs)("div", {
                      className: j.kL,
                      children: [
                          (0, l.jsx)(C.A, { defaultAnimationState: h.oA.LOOP, giftStyle: K, className: j.qq }),
                          (0, l.jsx)(u.s_, { onClick: n, className: j.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : Q
                  ? (e = t(U ?? null, n, H))
                  : P === _.VV.ONE_TIME
                    ? (e = (0, l.jsx)(N.fs, { step: H, onClose: n }))
                    : X &&
                      (a()(i in R.WN, `invalid sku id: ${i}`),
                      (e = (0, l.jsx)(T.A, {
                          currentStep: H ?? void 0,
                          purchaseState: k,
                          premiumType: R.WN[i],
                          onClose: n,
                          showTrialBadge: w,
                          showDiscountBadge: G,
                          isGift: V,
                          giftRecipient: Z,
                          isEligibleForTrial: w,
                          enablePremiumBrandRefresh: B,
                          isDisplayingWowMomentConfirmation: M,
                          isPremiumGroupPurchase: b,
                      }))),
            e
        );
    }, [ee, $, D, W, K, n, k, t, U, F, i, H, w, G, et, q, X, Q, P, V, Z, B, M, b]);
}
