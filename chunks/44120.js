o.d(n, { A: () => c });
var t = o(627968);
o(64700);
var a = o(192308),
    l = o(228366),
    i = o(391048),
    s = o(636099),
    u = o(529427),
    r = o(662388),
    d = o(287809),
    p = o(166532);
let C = new Set([p.pn.REVIEW, p.pn.CONFIRM, p.pn.GIFT_CUSTOMIZATION]);
function c(e) {
    let n,
        {
            discoverySessionId: p,
            skuId: c,
            analyticsLocations: h,
            analyticsObject: f,
            isGift: k = !1,
            giftMessage: g,
            giftingOrigin: m,
            giftRecipient: M,
            onClose: P,
            onComplete: E,
        } = e,
        O = k ? "gift-payment-modal" : "payment-modal",
        w = d.default.getCurrentUser();
    w?.verified
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
                  isGift: s = !1,
                  giftMessage: r,
                  giftingOrigin: d,
                  giftRecipient: p,
                  onClose: C,
                  onCloseCallback: c,
                  onCloseRequest: h,
                  onComplete: f,
              } = e;
              u.UnifiedCheckoutFlowManagerSingletons[u.CL.COLLECTIBLES_CHECKOUT]
                  .get()
                  .openCheckoutModal({
                      unifiedCheckoutProviderProps: { analyticsLocations: t },
                      checkoutConfiguration: { skuId: o, discoverySessionId: n },
                      giftContextProps: { isGift: s, giftMessage: r, giftingOrigin: d, giftRecipient: p },
                      checkoutHandlers: { onClose: C, onComplete: f },
                      forwardedPaymentModalProps: { onStepChange: l, analyticsObject: a },
                      modalAPIOptions: { modalKey: i, onCloseCallback: c, onCloseRequest: h },
                  });
          })({
              discoverySessionId: p,
              skuId: c,
              analyticsLocations: h,
              analyticsObject: f,
              onStepChange: function (e) {
                  n = e;
              },
              modalKey: O,
              isGift: k,
              giftMessage: g,
              giftingOrigin: m,
              giftRecipient: M,
              onClose: P,
              onCloseCallback: function (e) {
                  (0, i.ET)(), (0, s.z)(), e && (0, r.gB)();
              },
              onCloseRequest: function () {
                  null != n && C.has(n) && (0, a.closeModal)(O);
              },
              onComplete: function () {
                  null != E && E();
              },
          }))
        : (0, a.openModalLazy)(async () => {
              let { default: e } = await Promise.all([o.e("54681"), o.e("74913"), o.e("12206"), o.e("90406")]).then(
                  o.bind(o, 661925),
              );
              return (n) => {
                  let { onClose: o, ...a } = n;
                  return (0, t.jsx)(e, {
                      ...a,
                      onClose: () => {
                          o(), P?.(!1);
                      },
                  });
              };
          });
}
