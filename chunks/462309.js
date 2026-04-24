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
    f = n(584160),
    E = n(169797),
    T = n(94420),
    N = n(242874),
    m = n(75825),
    p = n(237412),
    I = n(490744),
    _ = n(45938),
    h = n(937008),
    S = n(156312),
    g = n(166532),
    R = n(615310),
    C = n(652215),
    y = n(788868),
    x = n(818348),
    v = n(575650);
function O(e) {
    let { renderHeader: t, handleClose: n } = e,
        u = (0, T.t4)((e) => e.selectedSkuId),
        {
            purchaseState: O,
            purchaseType: P,
            enablePremiumBrandRefresh: k,
            isDisplayingWowMomentConfirmation: B,
            isPremiumGroupPurchase: b,
            isEligibleForTrial: j,
            isEligibleForDiscount: w,
        } = (0, S.P5)(),
        M = (0, d.A)(),
        L = (0, A.S3)(),
        G = (0, R.bB)(),
        U = (0, c.P7)(),
        { isGift: H, selectedGiftStyle: D, giftRecipient: F } = (0, h.Pv)(),
        V = (0, o.vg)("PaymentModalHeader"),
        W = L?.productLine === C.EZt.COLLECTIBLES,
        K = L?.productLine === C.EZt.SOCIAL_LAYER_GAME_ITEM,
        Z = H && (0, _.Ik)(F) && G === g.pn.CONFIRM && null != D && !W && !K,
        Y = null != t && null != G,
        z = [g.pn.SKU_SELECT, g.pn.SELECT_FREE_SKU],
        q = null != G && !z.includes(G) && null != u,
        $ = (0, s.D7)({ location: "PaymentModalHeader" });
    return r.useMemo(() => {
        if (null == G) return;
        if ($ && f.M.includes(G)) {
            let e = (0, f.u)({
                step: G,
                skuId: u ?? (null != L ? L.id : null),
                showTrialBadge: j,
                showPromoBadge: w,
                storeCountryFromCheckoutContext: U,
                isStoreCountryEnabled: V,
            });
            return (0, l.jsx)(E.s3, { ...e });
        }
        let e = null;
        return (
            Z
                ? (e = (0, l.jsxs)("div", {
                      className: v.kL,
                      children: [
                          (0, l.jsx)(m.A, { defaultAnimationState: N.oA.LOOP, giftStyle: D, className: v.qq }),
                          (0, l.jsx)(a.s_, { onClick: n, className: v.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : Y
                  ? (e = t(M ?? null, n, G))
                  : P === x.VV.ONE_TIME
                    ? (e = (0, l.jsx)(I.fs, { step: G, onClose: n }))
                    : q &&
                      (i()(u in y.WN, `invalid sku id: ${u}`),
                      (e = (0, l.jsx)(p.A, {
                          currentStep: G ?? void 0,
                          purchaseState: O,
                          premiumType: y.WN[u],
                          onClose: n,
                          showTrialBadge: j,
                          showDiscountBadge: w,
                          isGift: H,
                          giftRecipient: F,
                          isEligibleForTrial: j,
                          enablePremiumBrandRefresh: k,
                          isDisplayingWowMomentConfirmation: B,
                          isPremiumGroupPurchase: b,
                      }))),
            e
        );
    }, [$, V, U, D, n, O, t, M, L, u, G, j, w, Z, q, Y, P, H, F, k, B, b]);
}
