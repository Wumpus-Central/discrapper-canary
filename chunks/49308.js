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
    p = n(372654),
    _ = n(832149),
    m = n(987209),
    h = n(563132),
    g = n(179118),
    E = n(614277),
    b = n(698708),
    y = n(215023),
    O = n(474936),
    v = n(388032);
function S(e, t, n) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            skusById: a,
            selectedSkuId: l,
            application: c,
            paymentError: d,
            purchaseError: f,
            purchasePreviewError: p,
            appliedUserDiscounts: m,
        } = (0, h.JL)(),
        g = (0, s.e7)([u.Z], () => u.Z.getProduct(l)),
        O = i.useRef(!1);
    o()(null != l, "Expected selectedSkuId"), o()(null != c, "Expected application");
    let S = a[l];
    o()(null != S, "Expected sku");
    let I = null != d || null != f || null != p,
        T =
            m.length > 0
                ? v.intl.formatToPlainString(v.t.VuV3Td, { discountOfferAmount: m[0].discount.amount })
                : void 0;
    return (i.useEffect(() => {
        null == g ||
            I ||
            O.current ||
            ((O.current = !0),
            (0, _.Z)({
                product: g,
                overrideTitle: T,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: y.o8.FIAT,
            }));
    }, [g, n, t, I, T]),
    I)
        ? (0, r.jsx)(E.C3, { children: (0, r.jsx)(b.Z, {}) })
        : null;
}
function A(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: a,
            hasSentMessage: o,
            giftRecipient: _,
            giftMessageError: E,
            isSendingMessage: b,
            giftingOrigin: y,
        } = (0, m.wD)(),
        v = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        S = i.useRef(null),
        { selectedSkuId: A } = (0, h.JL)(),
        C = (0, s.e7)([u.Z], () => u.Z.getProduct(A)),
        { confettiColors: N } = (0, d.Z)(null == C ? void 0 : C.styles);
    return (
        i.useEffect(() => {
            t &&
                null != _ &&
                null != A &&
                (y === O.Wt.USER_PROFILE_WISHLIST || y === O.Wt.DM_CHANNEL_WISHLIST) &&
                l.Z.dispatch({
                    type: "WISHLIST_GIFT_SENT",
                    skuId: A,
                    recipientId: _.id,
                });
        }, [t, _, A, y]),
        t
            ? (0, r.jsxs)("div", {
                  ref: S,
                  children: [
                      (0, r.jsx)(g.Z, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: a,
                          hasSentMessage: o,
                          giftRecipient: _,
                          giftMessageError: E,
                          isSendingMessage: b,
                      }),
                      !e.hideConfetti &&
                          !v &&
                          (0, r.jsx)(f.Z, {
                              confettiTarget: S.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, p.vK)(null == C ? void 0 : C.categorySkuId),
                              colors: null == N ? void 0 : N.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(T, I({}, e))
    );
}
