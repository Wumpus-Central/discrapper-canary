t.d(n, {
    x: function () {
        return E;
    }
});
var i = t(200651),
    l = t(192379),
    s = t(512722),
    a = t.n(s),
    r = t(399606),
    o = t(607070),
    d = t(597688),
    c = t(1870),
    u = t(429368),
    h = t(624377),
    x = t(530618),
    f = t(331042),
    C = t(372654),
    m = t(987209),
    g = t(563132),
    p = t(179118),
    S = t(614277),
    j = t(698708);
function v(e) {
    let { handleClose: n, confettiCanvas: t, hideConfetti: l = !1, analyticsLocations: s } = e,
        o = (0, r.e7)([c.Z], () => c.Z.purchases),
        { skusById: h, selectedSkuId: x, application: C } = (0, g.usePaymentContext)(),
        m = (0, r.e7)([d.Z], () => d.Z.getProduct(x)),
        p = (0, u.o)(m, o);
    a()(null != x, 'Expected selectedSkuId'), a()(null != C, 'Expected application');
    let v = h[x];
    return (a()(null != v, 'Expected sku'), null == m)
        ? null
        : (0, i.jsxs)(S.C3, {
              children: [
                  (0, i.jsx)(j.Z, {}),
                  (0, i.jsx)(f.CollectiblesCollectedModalInner, {
                      product: m,
                      onClose: n,
                      confettiCanvas: t,
                      analyticsLocations: s,
                      hideConfetti: l,
                      selectedVariantIndex: p
                  })
              ]
          });
}
function E(e) {
    let { isGift: n, giftCode: t, selectedGiftStyle: s, hasSentMessage: a, giftRecipient: c, giftMessageError: u, isSendingMessage: f } = (0, m.wD)(),
        S = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        j = l.useRef(null),
        { selectedSkuId: E } = (0, g.usePaymentContext)(),
        I = (0, r.e7)([d.Z], () => d.Z.getProduct(E)),
        { confettiColors: T } = (0, h.Z)(null == I ? void 0 : I.styles);
    return n
        ? (0, i.jsxs)('div', {
              ref: j,
              children: [
                  (0, i.jsx)(p.Z, {
                      giftCode: t,
                      onClose: e.handleClose,
                      selectedGiftStyle: s,
                      hasSentMessage: a,
                      giftRecipient: c,
                      giftMessageError: u,
                      isSendingMessage: f
                  }),
                  !e.hideConfetti &&
                      !S &&
                      (0, i.jsx)(x.Z, {
                          confettiTarget: j.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, C.vK)(null == I ? void 0 : I.categorySkuId),
                          colors: null == T ? void 0 : T.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, i.jsx)(v, { ...e });
}
