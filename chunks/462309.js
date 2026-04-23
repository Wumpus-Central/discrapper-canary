n.d(t, { L: () => v });
var i = n(627968),
    r = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(935462),
    u = n(546605),
    o = n(742810),
    c = n(364995),
    d = n(558620),
    p = n(427675),
    h = n(584160),
    C = n(169797),
    m = n(94420),
    I = n(242874),
    E = n(75825),
    f = n(237412),
    _ = n(490744),
    A = n(45938),
    P = n(937008),
    b = n(156312),
    y = n(166532),
    S = n(615310),
    M = n(652215),
    T = n(788868),
    R = n(818348),
    g = n(575650);
function v(e) {
    let { renderHeader: t, handleClose: n } = e,
        l = (0, m.t4)((e) => e.selectedSkuId),
        {
            purchaseState: v,
            purchaseType: N,
            enablePremiumBrandRefresh: U,
            isDisplayingWowMomentConfirmation: x,
            isPremiumGroupPurchase: D,
            isEligibleForTrial: L,
            isEligibleForDiscount: w,
        } = (0, b.P5)(),
        O = (0, d.A)(),
        j = (0, p.S3)(),
        k = (0, S.bB)(),
        G = (0, c.P7)(),
        { isGift: B, selectedGiftStyle: H, giftRecipient: V } = (0, P.Pv)(),
        Y = (0, u.vg)("PaymentModalHeader"),
        F = j?.productLine === M.EZt.COLLECTIBLES,
        Z = j?.productLine === M.EZt.SOCIAL_LAYER_GAME_ITEM,
        q = B && (0, A.Ik)(V) && k === y.pn.CONFIRM && null != H && !F && !Z,
        K = null != t && null != k,
        z = [y.pn.SKU_SELECT, y.pn.SELECT_FREE_SKU],
        W = null != k && !z.includes(k) && null != l,
        $ = (0, o.D7)({ location: "PaymentModalHeader" });
    return r.useMemo(() => {
        if (null == k) return;
        if ($ && h.M.includes(k)) {
            let e = (0, h.u)({
                step: k,
                skuId: l ?? (null != j ? j.id : null),
                showTrialBadge: L,
                showPromoBadge: w,
                storeCountryFromCheckoutContext: G,
                isStoreCountryEnabled: Y,
            });
            return (0, i.jsx)(C.s3, { ...e });
        }
        let e = null;
        return (
            q
                ? (e = (0, i.jsxs)("div", {
                      className: g.kL,
                      children: [
                          (0, i.jsx)(E.A, { defaultAnimationState: I.oA.LOOP, giftStyle: H, className: g.qq }),
                          (0, i.jsx)(a.s_, { onClick: n, className: g.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : K
                  ? (e = t(O ?? null, n, k))
                  : N === R.VV.ONE_TIME
                    ? (e = (0, i.jsx)(_.fs, { step: k, onClose: n }))
                    : W &&
                      (s()(l in T.WN, `invalid sku id: ${l}`),
                      (e = (0, i.jsx)(f.A, {
                          currentStep: k ?? void 0,
                          purchaseState: v,
                          premiumType: T.WN[l],
                          onClose: n,
                          showTrialBadge: L,
                          showDiscountBadge: w,
                          isGift: B,
                          giftRecipient: V,
                          isEligibleForTrial: L,
                          enablePremiumBrandRefresh: U,
                          isDisplayingWowMomentConfirmation: x,
                          isPremiumGroupPurchase: D,
                      }))),
            e
        );
    }, [$, Y, G, H, n, v, t, O, j, l, k, L, w, q, W, K, N, B, V, U, x, D]);
}
