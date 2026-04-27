n.d(t, { L: () => L });
var r = n(627968),
    l = n(64700),
    u = n(284009),
    a = n.n(u),
    i = n(935462),
    s = n(546605),
    o = n(742810),
    d = n(364995),
    c = n(558620),
    f = n(427675),
    h = n(584160),
    A = n(169797),
    E = n(94420),
    b = n(242874),
    I = n(165191),
    N = n(237412),
    S = n(490744),
    T = n(45938),
    m = n(937008),
    O = n(156312),
    _ = n(166532),
    C = n(615310),
    k = n(652215),
    p = n(788868),
    g = n(818348),
    R = n(575650);
function L(e) {
    let { renderHeader: t, handleClose: n } = e,
        u = (0, E.t4)((e) => e.selectedSkuId),
        {
            purchaseState: L,
            purchaseType: y,
            paymentSourceId: P,
            enablePremiumBrandRefresh: x,
            isDisplayingWowMomentConfirmation: v,
            isPremiumGroupPurchase: w,
            isEligibleForTrial: B,
            isEligibleForDiscount: D,
        } = (0, O.P5)(),
        j = (0, c.A)(),
        M = (0, f.S3)(),
        F = (0, C.bB)(),
        G = (0, d.P7)(),
        { paymentSourceRecords: H } = (0, d.Fy)(),
        U = l.useMemo(() => {
            if (null == P) return null;
            let e = H.find((e) => e.id === P);
            return e?.relocationCountry ?? null;
        }, [H, P]),
        { isGift: K, selectedGiftStyle: W, giftRecipient: V } = (0, m.Pv)(),
        Z = (0, s.vg)("PaymentModalHeader"),
        Y = M?.productLine === k.EZt.COLLECTIBLES,
        X = M?.productLine === k.EZt.SOCIAL_LAYER_GAME_ITEM,
        q = K && (0, T.Ik)(V) && F === _.pn.CONFIRM && null != W && !Y && !X,
        $ = null != t && null != F,
        z = [_.pn.SKU_SELECT, _.pn.SELECT_FREE_SKU],
        Q = null != F && !z.includes(F) && null != u,
        J = (0, o.D7)({ location: "PaymentModalHeader" });
    return l.useMemo(() => {
        if (null == F) return;
        if (J && h.M.includes(F)) {
            let e = (0, h.u)({
                step: F,
                skuId: u ?? (null != M ? M.id : null),
                showTrialBadge: B,
                showPromoBadge: D,
                storeCountryFromCheckoutContext: G,
                isStoreCountryEnabled: Z,
                relocationCountry: U,
            });
            return (0, r.jsx)(A.s3, { ...e });
        }
        let e = null;
        return (
            q
                ? (e = (0, r.jsxs)("div", {
                      className: R.kL,
                      children: [
                          (0, r.jsx)(I.A, { defaultAnimationState: b.oA.LOOP, giftStyle: W, className: R.qq }),
                          (0, r.jsx)(i.s_, { onClick: n, className: R.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : $
                  ? (e = t(j ?? null, n, F))
                  : y === g.VV.ONE_TIME
                    ? (e = (0, r.jsx)(S.fs, { step: F, onClose: n }))
                    : Q &&
                      (a()(u in p.WN, `invalid sku id: ${u}`),
                      (e = (0, r.jsx)(N.A, {
                          currentStep: F ?? void 0,
                          purchaseState: L,
                          premiumType: p.WN[u],
                          onClose: n,
                          showTrialBadge: B,
                          showDiscountBadge: D,
                          isGift: K,
                          giftRecipient: V,
                          isEligibleForTrial: B,
                          enablePremiumBrandRefresh: x,
                          isDisplayingWowMomentConfirmation: v,
                          isPremiumGroupPurchase: w,
                      }))),
            e
        );
    }, [J, Z, G, U, W, n, L, t, j, M, u, F, B, D, q, Q, $, y, K, V, x, v, w]);
}
