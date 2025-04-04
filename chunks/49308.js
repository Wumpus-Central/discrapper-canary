n.d(t, { x: () => S });
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
    _ = n(530618),
    p = n(331042),
    h = n(372654),
    m = n(987209),
    g = n(563132),
    E = n(179118),
    b = n(614277),
    y = n(698708);
function v(e, t, n) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e) {
    let { handleClose: t, confettiCanvas: n, hideConfetti: i = !1, analyticsLocations: o } = e,
        l = (0, s.e7)([u.Z], () => u.Z.purchases),
        { skusById: f, selectedSkuId: _, application: h } = (0, g.JL)(),
        m = (0, s.e7)([c.Z], () => c.Z.getProduct(_)),
        E = (0, d.o)(m, l);
    a()(null != _, 'Expected selectedSkuId'), a()(null != h, 'Expected application');
    let v = f[_];
    return (a()(null != v, 'Expected sku'), null == m)
        ? null
        : (0, r.jsxs)(b.C3, {
              children: [
                  (0, r.jsx)(y.Z, {}),
                  (0, r.jsx)(p.e, {
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
function S(e) {
    let { isGift: t, giftCode: n, selectedGiftStyle: o, hasSentMessage: a, giftRecipient: u, giftMessageError: d, isSendingMessage: p } = (0, m.wD)(),
        b = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        y = i.useRef(null),
        { selectedSkuId: v } = (0, g.JL)(),
        S = (0, s.e7)([c.Z], () => c.Z.getProduct(v)),
        { confettiColors: T } = (0, f.Z)(null == S ? void 0 : S.styles);
    return t
        ? (0, r.jsxs)('div', {
              ref: y,
              children: [
                  (0, r.jsx)(E.Z, {
                      giftCode: n,
                      onClose: e.handleClose,
                      selectedGiftStyle: o,
                      hasSentMessage: a,
                      giftRecipient: u,
                      giftMessageError: d,
                      isSendingMessage: p
                  }),
                  !e.hideConfetti &&
                      !b &&
                      (0, r.jsx)(_.Z, {
                          confettiTarget: y.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, h.vK)(null == S ? void 0 : S.categorySkuId),
                          colors: null == T ? void 0 : T.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, r.jsx)(I, O({}, e));
}
