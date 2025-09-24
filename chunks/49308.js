n.d(t, { x: () => T });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(399606),
    l = n(607070),
    c = n(597688),
    u = n(624377),
    d = n(530618),
    f = n(372654),
    _ = n(832149),
    p = n(987209),
    h = n(563132),
    m = n(179118),
    g = n(614277),
    E = n(698708),
    b = n(215023),
    y = n(388032);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            skusById: a,
            selectedSkuId: l,
            application: u,
            paymentError: d,
            purchaseError: f,
            purchasePreviewError: p,
            appliedUserDiscounts: m,
        } = (0, h.JL)(),
        O = (0, s.e7)([c.Z], () => c.Z.getProduct(l)),
        v = i.useRef(!1);
    o()(null != l, "Expected selectedSkuId"), o()(null != u, "Expected application");
    let I = a[l];
    o()(null != I, "Expected sku");
    let T = null != d || null != f || null != p,
        S =
            m.length > 0
                ? y.intl.formatToPlainString(y.t.VuV3TU, { discountOfferAmount: m[0].discount.amount })
                : void 0;
    return (i.useEffect(() => {
        null == O ||
            T ||
            v.current ||
            ((v.current = !0),
            (0, _.Z)({
                product: O,
                overrideTitle: S,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: b.o8.FIAT,
            }));
    }, [O, n, t, T, S]),
    T)
        ? (0, r.jsx)(g.C3, { children: (0, r.jsx)(E.Z, {}) })
        : null;
}
function T(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: a,
            hasSentMessage: o,
            giftRecipient: _,
            giftMessageError: g,
            isSendingMessage: E,
        } = (0, p.wD)(),
        b = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        y = i.useRef(null),
        { selectedSkuId: O } = (0, h.JL)(),
        T = (0, s.e7)([c.Z], () => c.Z.getProduct(O)),
        { confettiColors: S } = (0, u.Z)(null == T ? void 0 : T.styles);
    return t
        ? (0, r.jsxs)("div", {
              ref: y,
              children: [
                  (0, r.jsx)(m.Z, {
                      giftCode: n,
                      onClose: e.handleClose,
                      selectedGiftStyle: a,
                      hasSentMessage: o,
                      giftRecipient: _,
                      giftMessageError: g,
                      isSendingMessage: E,
                  }),
                  !e.hideConfetti &&
                      !b &&
                      (0, r.jsx)(d.Z, {
                          confettiTarget: y.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, f.vK)(null == T ? void 0 : T.categorySkuId),
                          colors: null == S ? void 0 : S.map((e) => e.toHexString()),
                      }),
              ],
          })
        : (0, r.jsx)(I, v({}, e));
}
