n.d(t, { x: () => I });
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(399606),
    l = n(607070),
    c = n(597688),
    u = n(624377),
    d = n(530618),
    _ = n(372654),
    f = n(832149),
    p = n(987209),
    h = n(563132),
    m = n(179118),
    g = n(27034),
    E = n(698708),
    b = n(215023);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        { skusById: a, selectedSkuId: l, application: u, paymentError: d, purchaseError: _, purchasePreviewError: p } = (0, h.JL)(),
        m = (0, s.e7)([c.Z], () => c.Z.getProduct(l)),
        y = i.useRef(!1);
    (o()(null != l, 'Expected selectedSkuId'), o()(null != u, 'Expected application'));
    let O = a[l];
    o()(null != O, 'Expected sku');
    let v = null != d || null != _ || null != p;
    return (i.useEffect(() => {
        null == m ||
            v ||
            y.current ||
            ((y.current = !0),
            (0, f.Z)({
                product: m,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: b.o8.FIAT
            }));
    }, [m, n, t, v]),
    v)
        ? (0, r.jsx)(g.C3, { children: (0, r.jsx)(E.Z, {}) })
        : null;
}
function I(e) {
    let { isGift: t, giftCode: n, selectedGiftStyle: a, hasSentMessage: o, giftRecipient: f, giftMessageError: g, isSendingMessage: E } = (0, p.wD)(),
        b = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        y = i.useRef(null),
        { selectedSkuId: I } = (0, h.JL)(),
        T = (0, s.e7)([c.Z], () => c.Z.getProduct(I)),
        { confettiColors: S } = (0, u.Z)(null == T ? void 0 : T.styles);
    return t
        ? (0, r.jsxs)('div', {
              ref: y,
              children: [
                  (0, r.jsx)(m.Z, {
                      giftCode: n,
                      onClose: e.handleClose,
                      selectedGiftStyle: a,
                      hasSentMessage: o,
                      giftRecipient: f,
                      giftMessageError: g,
                      isSendingMessage: E
                  }),
                  !e.hideConfetti &&
                      !b &&
                      (0, r.jsx)(d.Z, {
                          confettiTarget: y.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, _.vK)(null == T ? void 0 : T.categorySkuId),
                          colors: null == S ? void 0 : S.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, r.jsx)(v, O({}, e));
}
