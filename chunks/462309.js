n.d(t, { L: () => j });
var l = n(627968),
    r = n(64700),
    a = n(284009),
    i = n.n(a),
    u = n(935462),
    o = n(546605),
    s = n(742810),
    d = n(364995),
    c = n(558620),
    A = n(427675),
    E = n(584160),
    f = n(169797),
    m = n(94420),
    T = n(242874),
    N = n(75825),
    g = n(237412),
    p = n(897904),
    C = n(45938),
    I = n(937008),
    h = n(902958),
    S = n(166532),
    x = n(615310),
    y = n(652215),
    R = n(788868),
    v = n(818348),
    _ = n(575650);
function j(e) {
    let { renderHeader: t, handleClose: n } = e,
        { selectedSkuId: a, purchaseState: j } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        {
            purchaseType: k,
            paymentSourceId: O,
            enablePremiumBrandRefresh: P,
            isDisplayingWowMomentConfirmation: B,
            isPremiumGroupPurchase: M,
            isEligibleForTrial: b,
            isEligibleForDiscount: w,
        } = (0, h.P5)(),
        G = (0, c.A)(),
        U = (0, A.S3)(),
        H = (0, x.bB)(),
        { checkoutPaymentSources: F, storeCountry: L } = (0, d.t6)(),
        D = r.useMemo(() => {
            if (null == O) return null;
            let e = F.find((e) => e.id === O);
            return e?.relocationCountry ?? null;
        }, [F, O]),
        { isGift: W, selectedGiftStyle: K, giftRecipient: V } = (0, I.Pv)(),
        Z = (0, o.vg)("PaymentModalHeader"),
        $ = U?.productLine === y.EZt.COLLECTIBLES,
        z = U?.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM,
        q = W && (0, C.Ik)(V) && H === S.pn.CONFIRM && null != K && !$ && !z,
        Q = null != t && null != H,
        Y = [S.pn.SKU_SELECT, S.pn.SELECT_FREE_SKU],
        J = null != H && !Y.includes(H) && null != a,
        X = (0, s.D7)({ location: "PaymentModalHeader" });
    return r.useMemo(() => {
        if (null == H) return;
        if (X && E.M.includes(H)) {
            let e = (0, E.u)({
                step: H,
                skuId: a ?? (null != U ? U.id : null),
                showTrialBadge: b,
                showPromoBadge: w,
                storeCountryFromCheckoutContext: L,
                isStoreCountryEnabled: Z,
                relocationCountry: D,
            });
            return (0, l.jsx)(f.s3, { ...e });
        }
        let e = null;
        return (
            q
                ? (e = (0, l.jsxs)("div", {
                      className: _.kL,
                      children: [
                          (0, l.jsx)(N.A, { defaultAnimationState: T.oA.LOOP, giftStyle: K, className: _.qq }),
                          (0, l.jsx)(u.s_, { onClick: n, className: _.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : Q
                  ? (e = t(G ?? null, n, H))
                  : k === v.VV.ONE_TIME
                    ? (e = (0, l.jsx)(p.fs, { step: H, onClose: n }))
                    : J &&
                      (i()(a in R.WN, `invalid sku id: ${a}`),
                      (e = (0, l.jsx)(g.A, {
                          currentStep: H ?? void 0,
                          purchaseState: j,
                          premiumType: R.WN[a],
                          onClose: n,
                          showTrialBadge: b,
                          showDiscountBadge: w,
                          isGift: W,
                          giftRecipient: V,
                          isEligibleForTrial: b,
                          enablePremiumBrandRefresh: P,
                          isDisplayingWowMomentConfirmation: B,
                          isPremiumGroupPurchase: M,
                      }))),
            e
        );
    }, [X, Z, L, D, K, n, j, t, G, U, a, H, b, w, q, J, Q, k, W, V, P, B, M]);
}
