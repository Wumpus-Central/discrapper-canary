n.d(t, {
    L: () => T,
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    o = n.n(a),
    s = n(397927),
    l = n(608805),
    c = n(584160),
    u = n(169797),
    d = n(242874),
    f = n(75825),
    p = n(499369),
    _ = n(490744),
    h = n(45938),
    m = n(937008),
    g = n(156312),
    E = n(166532),
    y = n(652215),
    b = n(788868),
    O = n(818348),
    v = n(629865);

function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}

function S(e, t) {
    return e in t;
}

function T(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: a,
            step: A,
            selectedPlan: T,
            purchaseState: C,
            purchaseType: N,
            selectedSku: w,
            enablePremiumBrandRefresh: R,
            isDisplayingWowMomentConfirmation: P,
            isPremiumGroupPurchase: D,
            isEligibleForTrial: L,
            isEligibleForDiscount: x,
        } = (0, g.P5)(),
        { isGift: M, selectedGiftStyle: j, giftRecipient: k } = (0, m.Pv)(),
        U = (null == w ? void 0 : w.productLine) === y.EZt.COLLECTIBLES,
        G = (null == w ? void 0 : w.productLine) === y.EZt.SOCIAL_LAYER_GAME_ITEM,
        F = M && (0, h.Ik)(k) && A === E.pn.CONFIRM && null != j && !U && !G,
        V = null != t && null != A,
        B = [E.pn.SKU_SELECT, E.pn.SELECT_FREE_SKU],
        H = null != A && !B.includes(A) && null != a,
        { enabled: Y } = (0, l.T0)({
            location: "PaymentModalHeader",
        });
    return i.useMemo(() => {
        if (null == A) return;
        if (Y && A === E.pn.REVIEW) {
            let e = (0, c.u)({
                skuId: null != a ? a : null != w ? w.id : null,
            });
            return (0, r.jsx)(u.s3, I({}, e));
        }
        let e = null;
        return (
            F
                ? (e = (0, r.jsxs)("div", {
                      className: v.kL,
                      children: [
                          (0, r.jsx)(f.A, {
                              defaultAnimationState: d.oA.LOOP,
                              giftStyle: j,
                              className: v.qq,
                          }),
                          (0, r.jsx)(s.s_y, {
                              onClick: n,
                              className: v.b,
                              "data-migration-pending": !0,
                          }),
                      ],
                  }))
                : V
                  ? (e = t(null != T ? T : null, n, A))
                  : N === O.VV.ONE_TIME
                    ? (e = (0, r.jsx)(_.fs, {
                          step: A,
                          onClose: n,
                      }))
                    : H &&
                      (o()(S(a, b.WN), "invalid sku id: ".concat(a)),
                      (e = (0, r.jsx)(p.A, {
                          currentStep: null != A ? A : void 0,
                          purchaseState: C,
                          premiumType: b.WN[a],
                          onClose: n,
                          showTrialBadge: L,
                          showDiscountBadge: x,
                          isGift: M,
                          giftRecipient: k,
                          isEligibleForTrial: L,
                          enablePremiumBrandRefresh: R,
                          isDisplayingWowMomentConfirmation: P,
                          isPremiumGroupPurchase: D,
                      }))),
            e
        );
    }, [Y, j, n, C, t, T, w, a, A, L, x, F, H, V, N, M, k, R, P, D]);
}
