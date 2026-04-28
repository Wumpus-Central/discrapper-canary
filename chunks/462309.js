n.d(t, { L: () => O });
var l = n(627968),
    r = n(64700),
    u = n(284009),
    i = n.n(u),
    a = n(935462),
    o = n(546605),
    s = n(742810),
    c = n(364995),
    d = n(558620),
    A = n(427675),
    E = n(584160),
    f = n(169797),
    T = n(94420),
    I = n(242874),
    N = n(75825),
    m = n(237412),
    _ = n(490744),
    h = n(45938),
    C = n(937008),
    g = n(156312),
    p = n(166532),
    S = n(615310),
    R = n(652215),
    y = n(788868),
    x = n(818348),
    v = n(575650);
function O(e) {
    let { renderHeader: t, handleClose: n } = e,
        u = (0, T.t4)((e) => e.selectedSkuId),
        {
            purchaseState: O,
            purchaseType: P,
            paymentSourceId: k,
            enablePremiumBrandRefresh: B,
            isDisplayingWowMomentConfirmation: j,
            isPremiumGroupPurchase: b,
            isEligibleForTrial: M,
            isEligibleForDiscount: w,
        } = (0, g.P5)(),
        L = (0, d.A)(),
        F = (0, A.S3)(),
        G = (0, S.bB)(),
        H = (0, c.P7)(),
        { paymentSourceRecords: U } = (0, c.Fy)(),
        D = r.useMemo(() => {
            if (null == k) return null;
            let e = U.find((e) => e.id === k);
            return e?.relocationCountry ?? null;
        }, [U, k]),
        { isGift: V, selectedGiftStyle: W, giftRecipient: K } = (0, C.Pv)(),
        Z = (0, o.vg)("PaymentModalHeader"),
        Y = F?.productLine === R.EZt.COLLECTIBLES,
        q = F?.productLine === R.EZt.SOCIAL_LAYER_GAME_ITEM,
        z = V && (0, h.Ik)(K) && G === p.pn.CONFIRM && null != W && !Y && !q,
        Q = null != t && null != G,
        $ = [p.pn.SKU_SELECT, p.pn.SELECT_FREE_SKU],
        X = null != G && !$.includes(G) && null != u,
        J = (0, s.D7)({ location: "PaymentModalHeader" });
    return r.useMemo(() => {
        if (null == G) return;
        if (J && E.M.includes(G)) {
            let e = (0, E.u)({
                step: G,
                skuId: u ?? (null != F ? F.id : null),
                showTrialBadge: M,
                showPromoBadge: w,
                storeCountryFromCheckoutContext: H,
                isStoreCountryEnabled: Z,
                relocationCountry: D,
            });
            return (0, l.jsx)(f.s3, { ...e });
        }
        let e = null;
        return (
            z
                ? (e = (0, l.jsxs)("div", {
                      className: v.kL,
                      children: [
                          (0, l.jsx)(N.A, { defaultAnimationState: I.oA.LOOP, giftStyle: W, className: v.qq }),
                          (0, l.jsx)(a.s_, { onClick: n, className: v.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : Q
                  ? (e = t(L ?? null, n, G))
                  : P === x.VV.ONE_TIME
                    ? (e = (0, l.jsx)(_.fs, { step: G, onClose: n }))
                    : X &&
                      (i()(u in y.WN, `invalid sku id: ${u}`),
                      (e = (0, l.jsx)(m.A, {
                          currentStep: G ?? void 0,
                          purchaseState: O,
                          premiumType: y.WN[u],
                          onClose: n,
                          showTrialBadge: M,
                          showDiscountBadge: w,
                          isGift: V,
                          giftRecipient: K,
                          isEligibleForTrial: M,
                          enablePremiumBrandRefresh: B,
                          isDisplayingWowMomentConfirmation: j,
                          isPremiumGroupPurchase: b,
                      }))),
            e
        );
    }, [J, Z, H, D, W, n, O, t, L, F, u, G, M, w, z, X, Q, P, V, K, B, j, b]);
}
