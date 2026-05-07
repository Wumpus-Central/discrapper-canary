n.d(t, { L: () => P });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    u = n(935462),
    s = n(546605),
    o = n(742810),
    d = n(364995),
    c = n(558620),
    A = n(427675),
    E = n(584160),
    m = n(169797),
    h = n(94420),
    T = n(242874),
    f = n(75825),
    p = n(237412),
    N = n(897904),
    C = n(45938),
    I = n(937008),
    S = n(49960),
    _ = n(166532),
    g = n(615310),
    x = n(906234),
    y = n(652215),
    R = n(788868),
    v = n(818348),
    j = n(575650);
function P(e) {
    let { renderHeader: t, handleClose: n } = e,
        { selectedSkuId: i, purchaseState: P } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        {
            purchaseType: O,
            paymentSourceId: k,
            isPremium: b,
            isDisplayingWowMomentConfirmation: B,
            isPremiumGroupPurchase: U,
            isEligibleForTrial: w,
            isEligibleForDiscount: M,
        } = (0, S.P5)(),
        G = (0, c.A)(),
        L = (0, A.S3)(),
        D = (0, g.bB)(),
        { checkoutPaymentSources: F, storeCountry: H } = (0, d.t)(),
        V = r.useMemo(() => {
            if (null == k) return null;
            let e = F.find((e) => e.id === k);
            return e?.relocationCountry ?? null;
        }, [F, k]),
        { isGift: W, selectedGiftStyle: K, giftRecipient: Y } = (0, I.Pv)(),
        Z = (0, s.vg)("PaymentModalHeader"),
        $ = L?.productLine === y.EZt.COLLECTIBLES,
        q = L?.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM,
        z = W && (0, C.Ik)(Y) && D === _.pn.CONFIRM && null != K && !$ && !q,
        J = null != t && null != D,
        Q = [_.pn.SKU_SELECT, _.pn.SELECT_FREE_SKU],
        X = null != D && !Q.includes(D) && null != i,
        ee = (0, o.D7)({ location: "PaymentModalHeader" }),
        et = (0, x.G)(G?.id ?? "") && !w;
    return r.useMemo(() => {
        if (null == D) return;
        if (ee && E.M.includes(D)) {
            let e = (0, E.u)({
                step: D,
                skuId: i ?? (null != L ? L.id : null),
                showTrialBadge: w,
                showPromoBadge: M || et,
                storeCountryFromCheckoutContext: H,
                isStoreCountryEnabled: Z,
                relocationCountry: V,
            });
            return (0, l.jsx)(m.s3, { ...e });
        }
        let e = null;
        return (
            z
                ? (e = (0, l.jsxs)("div", {
                      className: j.kL,
                      children: [
                          (0, l.jsx)(f.A, { defaultAnimationState: T.oA.LOOP, giftStyle: K, className: j.qq }),
                          (0, l.jsx)(u.s_, { onClick: n, className: j.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : J
                  ? (e = t(G ?? null, n, D))
                  : O === v.VV.ONE_TIME
                    ? (e = (0, l.jsx)(N.fs, { step: D, onClose: n }))
                    : X &&
                      (a()(i in R.WN, `invalid sku id: ${i}`),
                      (e = (0, l.jsx)(p.A, {
                          currentStep: D ?? void 0,
                          purchaseState: P,
                          premiumType: R.WN[i],
                          onClose: n,
                          showTrialBadge: w,
                          showDiscountBadge: M,
                          isGift: W,
                          giftRecipient: Y,
                          isEligibleForTrial: w,
                          enablePremiumBrandRefresh: b,
                          isDisplayingWowMomentConfirmation: B,
                          isPremiumGroupPurchase: U,
                      }))),
            e
        );
    }, [ee, Z, H, V, K, n, P, t, G, L, i, D, w, M, et, z, X, J, O, W, Y, b, B, U]);
}
