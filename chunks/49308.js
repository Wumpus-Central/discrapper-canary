r.d(n, {
    x: function () {
        return T;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(512722),
    s = r.n(o),
    l = r(399606),
    u = r(607070),
    c = r(597688),
    d = r(1870),
    f = r(429368),
    p = r(624377),
    h = r(530618),
    _ = r(331042),
    m = r(372654),
    g = r(987209),
    E = r(563132),
    v = r(179118),
    y = r(614277),
    b = r(698708);
function I(e) {
    let { handleClose: n, confettiCanvas: r, hideConfetti: a = !1, analyticsLocations: o } = e,
        u = (0, l.e7)([d.Z], () => d.Z.purchases),
        { skusById: p, selectedSkuId: h, application: m } = (0, E.usePaymentContext)(),
        g = (0, l.e7)([c.Z], () => c.Z.getProduct(h)),
        v = (0, f.o)(g, u);
    s()(null != h, 'Expected selectedSkuId'), s()(null != m, 'Expected application');
    let I = p[h];
    return (s()(null != I, 'Expected sku'), null == g)
        ? null
        : (0, i.jsxs)(y.C3, {
              children: [
                  (0, i.jsx)(b.Z, {}),
                  (0, i.jsx)(_.CollectiblesCollectedModalInner, {
                      product: g,
                      onClose: n,
                      confettiCanvas: r,
                      analyticsLocations: o,
                      hideConfetti: a,
                      selectedVariantIndex: v
                  })
              ]
          });
}
function T(e) {
    let { isGift: n, giftCode: r, selectedGiftStyle: o, hasSentMessage: s, giftRecipient: d, giftMessageError: f, isSendingMessage: _ } = (0, g.wD)(),
        y = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        b = a.useRef(null),
        { selectedSkuId: T } = (0, E.usePaymentContext)(),
        S = (0, l.e7)([c.Z], () => c.Z.getProduct(T)),
        { confettiColors: A } = (0, p.Z)(null == S ? void 0 : S.styles);
    return n
        ? (0, i.jsxs)('div', {
              ref: b,
              children: [
                  (0, i.jsx)(v.Z, {
                      giftCode: r,
                      onClose: e.handleClose,
                      selectedGiftStyle: o,
                      hasSentMessage: s,
                      giftRecipient: d,
                      giftMessageError: f,
                      isSendingMessage: _
                  }),
                  !e.hideConfetti &&
                      !y &&
                      (0, i.jsx)(h.Z, {
                          confettiTarget: b.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, m.vK)(null == S ? void 0 : S.categorySkuId),
                          colors: null == A ? void 0 : A.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, i.jsx)(I, { ...e });
}
