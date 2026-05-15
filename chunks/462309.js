n.d(t, { L: () => x });
var l = n(627968),
    r = n(64700),
    u = n(284009),
    i = n.n(u),
    a = n(935462),
    s = n(546605),
    o = n(742810),
    d = n(364995),
    c = n(558620),
    A = n(427675),
    E = n(584160),
    m = n(480642),
    N = n(94420),
    T = n(242874),
    S = n(75825),
    I = n(237412),
    p = n(897904),
    f = n(45938),
    _ = n(937008),
    h = n(834252),
    C = n(166532),
    R = n(615310),
    y = n(906234),
    v = n(652215),
    O = n(788868),
    g = n(818348),
    P = n(575650);
function x(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: u,
            purchaseState: x,
            paymentSourceId: k,
        } = (0, N.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            paymentSourceId: e.paymentSourceId,
        })),
        {
            purchaseType: U,
            isPremium: j,
            isDisplayingWowMomentConfirmation: G,
            isPremiumGroupPurchase: L,
            isEligibleForTrial: M,
            isEligibleForDiscount: b,
        } = (0, h.P5)(),
        w = (0, c.A)(),
        D = (0, A.S3)(),
        F = (0, R.bB)(),
        { checkoutPaymentSources: B, storeCountry: H } = (0, d.t)(),
        V = r.useMemo(() => {
            if (null == k) return null;
            let e = B.find((e) => e.id === k);
            return e?.relocationCountry ?? null;
        }, [B, k]),
        { isGift: W, selectedGiftStyle: K, giftRecipient: Y } = (0, _.Pv)(),
        Z = (0, s.vg)("PaymentModalHeader"),
        $ = D?.productLine === v.EZt.COLLECTIBLES,
        q = D?.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM,
        X = W && (0, f.Ik)(Y) && F === C.pn.CONFIRM && null != K && !$ && !q,
        z = null != t && null != F,
        J = [C.pn.SKU_SELECT, C.pn.SELECT_FREE_SKU],
        Q = null != F && !J.includes(F) && null != u,
        ee = (0, o.D7)({ location: "PaymentModalHeader" }),
        et = (0, y.G)(w?.id ?? "") && !M;
    return r.useMemo(() => {
        if (null == F) return;
        if (ee && E.M.includes(F)) {
            let e = (0, E.u)({
                step: F,
                skuId: u ?? (null != D ? D.id : null),
                showTrialBadge: M,
                showPromoBadge: b || et,
                storeCountryFromCheckoutContext: H,
                isStoreCountryEnabled: Z,
                relocationCountry: V,
            });
            return (0, l.jsx)(m.s3, { ...e });
        }
        let e = null;
        return (
            X
                ? (e = (0, l.jsxs)("div", {
                      className: P.kL,
                      children: [
                          (0, l.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, l.jsx)(S.A, {
                                  defaultAnimationState: T.oA.LOOP,
                                  giftStyle: K,
                                  className: P.qq,
                              }),
                          }),
                          (0, l.jsx)(a.s_, { onClick: n, className: P.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : z
                  ? (e = t(w ?? null, n, F))
                  : U === g.VV.ONE_TIME
                    ? (e = (0, l.jsx)(p.fs, { step: F, onClose: n }))
                    : Q &&
                      (i()(u in O.WN, `invalid sku id: ${u}`),
                      (e = (0, l.jsx)(I.A, {
                          currentStep: F ?? void 0,
                          purchaseState: x,
                          premiumType: O.WN[u],
                          onClose: n,
                          showTrialBadge: M,
                          showDiscountBadge: b,
                          isGift: W,
                          giftRecipient: Y,
                          isEligibleForTrial: M,
                          enablePremiumBrandRefresh: j,
                          isDisplayingWowMomentConfirmation: G,
                          isPremiumGroupPurchase: L,
                      }))),
            e
        );
    }, [ee, Z, H, V, K, n, x, t, w, D, u, F, M, b, et, X, Q, z, U, W, Y, j, G, L]);
}
