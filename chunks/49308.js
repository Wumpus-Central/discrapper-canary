n.d(t, { x: () => A });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(399606),
    l = n(570140),
    c = n(607070),
    u = n(597688),
    d = n(624377),
    f = n(530618),
    _ = n(372654),
    p = n(832149),
    h = n(987209),
    m = n(563132),
    g = n(179118),
    E = n(614277),
    b = n(698708),
    y = n(215023),
    O = n(474936),
    v = n(388032);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            skusById: a,
            selectedSkuId: l,
            application: c,
            paymentError: d,
            purchaseError: f,
            purchasePreviewError: _,
            appliedUserDiscounts: h,
        } = (0, m.JL)(),
        g = (0, s.e7)([u.Z], () => u.Z.getProduct(l)),
        O = i.useRef(!1);
    o()(null != l, "Expected selectedSkuId"), o()(null != c, "Expected application");
    let I = a[l];
    o()(null != I, "Expected sku");
    let T = null != d || null != f || null != _,
        S =
            h.length > 0
                ? v.intl.formatToPlainString(v.t.VuV3Td, { discountOfferAmount: h[0].discount.amount })
                : void 0;
    return (i.useEffect(() => {
        null == g ||
            T ||
            O.current ||
            ((O.current = !0),
            (0, p.Z)({
                product: g,
                overrideTitle: S,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: y.o8.FIAT,
            }));
    }, [g, n, t, T, S]),
    T)
        ? (0, r.jsx)(E.C3, { children: (0, r.jsx)(b.Z, {}) })
        : null;
}
function A(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: a,
            hasSentMessage: o,
            giftRecipient: p,
            giftMessageError: E,
            isSendingMessage: b,
            giftingOrigin: y,
        } = (0, h.wD)(),
        v = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        I = i.useRef(null),
        { selectedSkuId: A } = (0, m.JL)(),
        C = (0, s.e7)([u.Z], () => u.Z.getProduct(A)),
        { confettiColors: N } = (0, d.Z)(null == C ? void 0 : C.styles);
    return (
        i.useEffect(() => {
            t &&
                null != p &&
                null != A &&
                (y === O.Wt.USER_PROFILE_WISHLIST || y === O.Wt.DM_CHANNEL_WISHLIST) &&
                l.Z.dispatch({
                    type: "WISHLIST_GIFT_SENT",
                    skuId: A,
                    recipientId: p.id,
                });
        }, [t, p, A, y]),
        t
            ? (0, r.jsxs)("div", {
                  ref: I,
                  children: [
                      (0, r.jsx)(g.Z, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: a,
                          hasSentMessage: o,
                          giftRecipient: p,
                          giftMessageError: E,
                          isSendingMessage: b,
                      }),
                      !e.hideConfetti &&
                          !v &&
                          (0, r.jsx)(f.Z, {
                              confettiTarget: I.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, _.vK)(null == C ? void 0 : C.categorySkuId),
                              colors: null == N ? void 0 : N.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(S, T({}, e))
    );
}
