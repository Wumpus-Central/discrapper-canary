n.d(t, { x: () => I });
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(399606),
    l = n(607070),
    c = n(597688),
    u = n(1870),
    d = n(429368),
    f = n(624377),
    p = n(530618),
    _ = n(331042),
    h = n(372654),
    m = n(987209),
    g = n(563132),
    E = n(179118),
    v = n(614277),
    b = n(698708);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function S(e) {
    let { handleClose: t, confettiCanvas: n, hideConfetti: i = !1, analyticsLocations: o } = e,
        l = (0, s.e7)([u.Z], () => u.Z.purchases),
        { skusById: f, selectedSkuId: p, application: h } = (0, g.JL)(),
        m = (0, s.e7)([c.Z], () => c.Z.getProduct(p)),
        E = (0, d.o)(m, l);
    a()(null != p, 'Expected selectedSkuId'), a()(null != h, 'Expected application');
    let y = f[p];
    return (a()(null != y, 'Expected sku'), null == m)
        ? null
        : (0, r.jsxs)(v.C3, {
              children: [
                  (0, r.jsx)(b.Z, {}),
                  (0, r.jsx)(_.e, {
                      product: m,
                      onClose: t,
                      confettiCanvas: n,
                      analyticsLocations: o,
                      hideConfetti: i,
                      selectedVariantIndex: E
                  })
              ]
          });
}
function I(e) {
    let { isGift: t, giftCode: n, selectedGiftStyle: o, hasSentMessage: a, giftRecipient: u, giftMessageError: d, isSendingMessage: _ } = (0, m.wD)(),
        v = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        b = i.useRef(null),
        { selectedSkuId: y } = (0, g.JL)(),
        I = (0, s.e7)([c.Z], () => c.Z.getProduct(y)),
        { confettiColors: T } = (0, f.Z)(null == I ? void 0 : I.styles);
    return t
        ? (0, r.jsxs)('div', {
              ref: b,
              children: [
                  (0, r.jsx)(E.Z, {
                      giftCode: n,
                      onClose: e.handleClose,
                      selectedGiftStyle: o,
                      hasSentMessage: a,
                      giftRecipient: u,
                      giftMessageError: d,
                      isSendingMessage: _
                  }),
                  !e.hideConfetti &&
                      !v &&
                      (0, r.jsx)(p.Z, {
                          confettiTarget: b.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, h.vK)(null == I ? void 0 : I.categorySkuId),
                          colors: null == T ? void 0 : T.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, r.jsx)(S, O({}, e));
}
