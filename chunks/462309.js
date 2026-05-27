n.d(t, { L: () => k });
var l = n(627968),
    r = n(64700),
    u = n(284009),
    i = n.n(u),
    a = n(935462),
    s = n(546605),
    o = n(742810),
    d = n(364995),
    c = n(463376),
    A = n(558620),
    E = n(427675),
    m = n(584160),
    N = n(480642),
    T = n(722847),
    S = n(242874),
    I = n(75825),
    p = n(237412),
    f = n(897904),
    _ = n(45938),
    h = n(937008),
    C = n(834252),
    R = n(166532),
    y = n(615310),
    v = n(906234),
    O = n(652215),
    g = n(788868),
    P = n(818348),
    x = n(575650);
function k(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: u,
            purchaseState: k,
            paymentSourceId: U,
        } = (0, T.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            paymentSourceId: e.paymentSourceId,
        })),
        { purchaseType: j, isDisplayingWowMomentConfirmation: G } = (0, C.P5)(),
        { isPremium: L, isPremiumGroupPurchase: M, isEligibleForTrial: b, isEligibleForDiscount: w } = (0, c.i)(),
        D = (0, A.A)(),
        F = (0, E.S3)(),
        B = (0, y.bB)(),
        { checkoutPaymentSources: H, storeCountry: V } = (0, d.t)(),
        W = r.useMemo(() => {
            if (null == U) return null;
            let e = H.find((e) => e.id === U);
            return e?.relocationCountry ?? null;
        }, [H, U]),
        { isGift: K, selectedGiftStyle: Y, giftRecipient: Z } = (0, h.Pv)(),
        $ = (0, s.vg)("PaymentModalHeader"),
        q = F?.productLine === O.EZt.COLLECTIBLES,
        X = F?.productLine === O.EZt.SOCIAL_LAYER_GAME_ITEM,
        z = K && (0, _.Ik)(Z) && B === R.pn.CONFIRM && null != Y && !q && !X,
        J = null != t && null != B,
        Q = [R.pn.SKU_SELECT, R.pn.SELECT_FREE_SKU],
        ee = null != B && !Q.includes(B) && null != u,
        et = (0, o.D7)({ location: "PaymentModalHeader" }),
        en = (0, v.G)(D?.id ?? "") && !b;
    return r.useMemo(() => {
        if (null == B) return;
        if (et && m.M.includes(B)) {
            let e = (0, m.u)({
                step: B,
                skuId: u ?? (null != F ? F.id : null),
                showTrialBadge: b,
                showPromoBadge: w || en,
                storeCountryFromCheckoutContext: V,
                isStoreCountryEnabled: $,
                relocationCountry: W,
            });
            return (0, l.jsx)(N.s3, { ...e });
        }
        let e = null;
        return (
            z
                ? (e = (0, l.jsxs)("div", {
                      className: x.kL,
                      children: [
                          (0, l.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, l.jsx)(I.A, {
                                  defaultAnimationState: S.oA.LOOP,
                                  giftStyle: Y,
                                  className: x.qq,
                              }),
                          }),
                          (0, l.jsx)(a.s_, { onClick: n, className: x.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : J
                  ? (e = t(D ?? null, n, B))
                  : j === P.VV.ONE_TIME
                    ? (e = (0, l.jsx)(f.fs, { step: B, onClose: n }))
                    : ee &&
                      (i()(u in g.WN, `invalid sku id: ${u}`),
                      (e = (0, l.jsx)(p.A, {
                          currentStep: B ?? void 0,
                          purchaseState: k,
                          premiumType: g.WN[u],
                          onClose: n,
                          showTrialBadge: b,
                          showDiscountBadge: w,
                          isGift: K,
                          giftRecipient: Z,
                          isEligibleForTrial: b,
                          enablePremiumBrandRefresh: L,
                          isDisplayingWowMomentConfirmation: G,
                          isPremiumGroupPurchase: M,
                      }))),
            e
        );
    }, [et, $, V, W, Y, n, k, t, D, F, u, B, b, w, en, z, ee, J, j, K, Z, L, G, M]);
}
