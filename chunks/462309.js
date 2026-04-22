n.d(t, { L: () => b });
var l = n(627968),
    i = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(935462),
    o = n(546605),
    u = n(742810),
    c = n(364995),
    d = n(558620),
    p = n(427675),
    m = n(584160),
    h = n(169797),
    A = n(94420),
    _ = n(242874),
    C = n(75825),
    E = n(499369),
    y = n(490744),
    f = n(45938),
    P = n(937008),
    S = n(156312),
    x = n(166532),
    T = n(615310),
    N = n(652215),
    g = n(788868),
    I = n(818348),
    v = n(575650);
function b(e) {
    let { renderHeader: t, handleClose: n } = e,
        a = (0, A.t4)((e) => e.selectedSkuId),
        {
            purchaseState: b,
            purchaseType: R,
            enablePremiumBrandRefresh: M,
            isDisplayingWowMomentConfirmation: j,
            isPremiumGroupPurchase: L,
            isEligibleForTrial: O,
            isEligibleForDiscount: D,
        } = (0, S.P5)(),
        U = (0, d.A)(),
        w = (0, p.S3)(),
        k = (0, T.bB)(),
        F = (0, c.P7)(),
        { isGift: G, selectedGiftStyle: B, giftRecipient: Y } = (0, P.Pv)(),
        W = (0, o.vg)("PaymentModalHeader"),
        V = w?.productLine === N.EZt.COLLECTIBLES,
        H = w?.productLine === N.EZt.SOCIAL_LAYER_GAME_ITEM,
        K = G && (0, f.Ik)(Y) && k === x.pn.CONFIRM && null != B && !V && !H,
        Z = null != t && null != k,
        q = [x.pn.SKU_SELECT, x.pn.SELECT_FREE_SKU],
        z = null != k && !q.includes(k) && null != a,
        $ = (0, u.D7)({ location: "PaymentModalHeader" });
    return i.useMemo(() => {
        if (null == k) return;
        if ($ && m.M.includes(k)) {
            let e = (0, m.u)({
                step: k,
                skuId: a ?? (null != w ? w.id : null),
                showTrialBadge: O,
                showPromoBadge: D,
                storeCountryFromCheckoutContext: F,
                isStoreCountryEnabled: W,
            });
            return (0, l.jsx)(h.s3, { ...e });
        }
        let e = null;
        return (
            K
                ? (e = (0, l.jsxs)("div", {
                      className: v.kL,
                      children: [
                          (0, l.jsx)(C.A, { defaultAnimationState: _.oA.LOOP, giftStyle: B, className: v.qq }),
                          (0, l.jsx)(s.s_, { onClick: n, className: v.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : Z
                  ? (e = t(U ?? null, n, k))
                  : R === I.VV.ONE_TIME
                    ? (e = (0, l.jsx)(y.fs, { step: k, onClose: n }))
                    : z &&
                      (r()(a in g.WN, `invalid sku id: ${a}`),
                      (e = (0, l.jsx)(E.A, {
                          currentStep: k ?? void 0,
                          purchaseState: b,
                          premiumType: g.WN[a],
                          onClose: n,
                          showTrialBadge: O,
                          showDiscountBadge: D,
                          isGift: G,
                          giftRecipient: Y,
                          isEligibleForTrial: O,
                          enablePremiumBrandRefresh: M,
                          isDisplayingWowMomentConfirmation: j,
                          isPremiumGroupPurchase: L,
                      }))),
            e
        );
    }, [$, W, F, B, n, b, t, U, w, a, k, O, D, K, z, Z, R, G, Y, M, j, L]);
}
