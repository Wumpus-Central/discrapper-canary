o.d(n, { A: () => C });
var t = o(477900);
o(582128);
var a = o(192308),
    l = o(228366),
    i = o(391048),
    s = o(529427),
    u = o(839534),
    r = o(287809),
    d = o(166532);
let p = new Set([d.pn.REVIEW, d.pn.CONFIRM, d.pn.GIFT_CUSTOMIZATION]);
function C(e) {
    let n,
        {
            discoverySessionId: d,
            skuId: C,
            analyticsLocations: c,
            analyticsObject: h,
            isGift: f = !1,
            giftMessage: k,
            giftingOrigin: g,
            giftRecipient: m,
            onClose: M,
            onComplete: P,
        } = e,
        E = f ? "gift-payment-modal" : "payment-modal",
        O = r.default.getCurrentUser();
    O?.verified
        ? (l.h.wait(() => {
              l.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          (function (e) {
              let {
                  discoverySessionId: n,
                  skuId: o,
                  analyticsLocations: t,
                  analyticsObject: a,
                  onStepChange: l,
                  modalKey: i,
                  isGift: u = !1,
                  giftMessage: r,
                  giftingOrigin: d,
                  giftRecipient: p,
                  onClose: C,
                  onCloseCallback: c,
                  onCloseRequest: h,
                  onComplete: f,
              } = e;
              s.UnifiedCheckoutFlowManagerSingletons[s.CL.COLLECTIBLES_CHECKOUT]
                  .get()
                  .openCheckoutModal({
                      unifiedCheckoutProviderProps: { analyticsLocations: t },
                      checkoutConfiguration: { skuId: o, discoverySessionId: n },
                      giftContextProps: { isGift: u, giftMessage: r, giftingOrigin: d, giftRecipient: p },
                      checkoutHandlers: { onClose: C, onComplete: f },
                      forwardedPaymentModalProps: { onStepChange: l, analyticsObject: a },
                      modalAPIOptions: { modalKey: i, onCloseCallback: c, onCloseRequest: h },
                  });
          })({
              discoverySessionId: d,
              skuId: C,
              analyticsLocations: c,
              analyticsObject: h,
              onStepChange: function (e) {
                  n = e;
              },
              modalKey: E,
              isGift: f,
              giftMessage: k,
              giftingOrigin: g,
              giftRecipient: m,
              onClose: M,
              onCloseCallback: function (e) {
                  ((0, i.ET)(), e && (0, u.gB)());
              },
              onCloseRequest: function () {
                  null != n && p.has(n) && (0, a.closeModal)(E);
              },
              onComplete: function () {
                  null != P && P();
              },
          }))
        : (0, a.openModalLazy)(async () => {
              let { default: e } = await Promise.all([o.e("928873"), o.e("874913"), o.e("112206"), o.e("590406")]).then(
                  o.bind(o, 661925),
              );
              return (n) => {
                  let { onClose: o, ...a } = n;
                  return (0, t.jsx)(e, {
                      ...a,
                      onClose: () => {
                          (o(), M?.(!1));
                      },
                  });
              };
          });
}
