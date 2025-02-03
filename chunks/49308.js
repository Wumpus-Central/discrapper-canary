n.d(t, { x: () => b });
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(399606),
    l = n(607070),
    u = n(597688),
    c = n(1870),
    d = n(429368),
    f = n(624377),
    _ = n(530618),
    p = n(331042),
    h = n(372654),
    m = n(987209),
    g = n(563132),
    E = n(179118),
    v = n(614277),
    y = n(698708);
function I(e) {
    let { handleClose: t, confettiCanvas: n, hideConfetti: r = !1, analyticsLocations: a } = e,
        l = (0, o.e7)([c.Z], () => c.Z.purchases),
        { skusById: f, selectedSkuId: _, application: h } = (0, g.JL)(),
        m = (0, o.e7)([u.Z], () => u.Z.getProduct(_)),
        E = (0, d.o)(m, l);
    s()(null != _, 'Expected selectedSkuId'), s()(null != h, 'Expected application');
    let I = f[_];
    return (s()(null != I, 'Expected sku'), null == m)
        ? null
        : (0, i.jsxs)(v.C3, {
              children: [
                  (0, i.jsx)(y.Z, {}),
                  (0, i.jsx)(p.e, {
                      product: m,
                      onClose: t,
                      confettiCanvas: n,
                      analyticsLocations: a,
                      hideConfetti: r,
                      selectedVariantIndex: E
                  })
              ]
          });
}
function b(e) {
    let { isGift: t, giftCode: n, selectedGiftStyle: a, hasSentMessage: s, giftRecipient: c, giftMessageError: d, isSendingMessage: p } = (0, m.wD)(),
        v = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        y = r.useRef(null),
        { selectedSkuId: b } = (0, g.JL)(),
        T = (0, o.e7)([u.Z], () => u.Z.getProduct(b)),
        { confettiColors: S } = (0, f.Z)(null == T ? void 0 : T.styles);
    return t
        ? (0, i.jsxs)('div', {
              ref: y,
              children: [
                  (0, i.jsx)(E.Z, {
                      giftCode: n,
                      onClose: e.handleClose,
                      selectedGiftStyle: a,
                      hasSentMessage: s,
                      giftRecipient: c,
                      giftMessageError: d,
                      isSendingMessage: p
                  }),
                  !e.hideConfetti &&
                      !v &&
                      (0, i.jsx)(_.Z, {
                          confettiTarget: y.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, h.vK)(null == T ? void 0 : T.categorySkuId),
                          colors: null == S ? void 0 : S.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, i.jsx)(I, { ...e });
}
