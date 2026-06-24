n.d(o, { A: () => c });
var t = n(627968);
n(64700);
var a = n(192308),
    l = n(228366),
    i = n(391048),
    s = n(636099),
    r = n(529427),
    d = n(662388),
    p = n(287809),
    u = n(166532);
let C = new Set([u.pn.REVIEW, u.pn.CONFIRM, u.pn.GIFT_CUSTOMIZATION]);
function c(e) {
    let o,
        {
            discoverySessionId: u,
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
        w = p.default.getCurrentUser();
    w?.verified
        ? (l.h.wait(() => {
              l.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          (function (e) {
              let {
                  discoverySessionId: o,
                  skuId: n,
                  analyticsLocations: t,
                  analyticsObject: a,
                  onStepChange: l,
                  modalKey: i,
                  isGift: s = !1,
                  giftMessage: d,
                  giftingOrigin: p,
                  giftRecipient: u,
                  onClose: C,
                  onCloseCallback: c,
                  onCloseRequest: h,
                  onComplete: f,
              } = e;
              r.UnifiedCheckoutFlowManagerSingletons[r.CL.COLLECTIBLES_CHECKOUT]
                  .get()
                  .openCheckoutModal({
                      unifiedCheckoutProviderProps: { analyticsLocations: t },
                      checkoutConfiguration: { skuId: n, discoverySessionId: o },
                      giftContextProps: { isGift: s, giftMessage: d, giftingOrigin: p, giftRecipient: u },
                      checkoutHandlers: { onClose: C, onComplete: f },
                      forwardedPaymentModalProps: { onStepChange: l, analyticsObject: a },
                      modalAPIOptions: { modalKey: i, onCloseCallback: c, onCloseRequest: h },
                  });
          })({
              discoverySessionId: u,
              skuId: c,
              analyticsLocations: h,
              analyticsObject: f,
              onStepChange: function (e) {
                  o = e;
              },
              modalKey: O,
              isGift: k,
              giftMessage: g,
              giftingOrigin: m,
              giftRecipient: M,
              onClose: P,
              onCloseCallback: function (e) {
                  (0, i.ET)(), (0, s.z)(), e && (0, d.gB)();
              },
              onCloseRequest: () => {
                  null != o && C.has(o) && (0, a.closeModal)(O);
              },
              onComplete: () => {
                  null != E && E();
              },
          }))
        : (0, a.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("54681"), n.e("74913"), n.e("12206"), n.e("90406")]).then(
                  n.bind(n, 661925),
              );
              return (o) => {
                  let { onClose: n, ...a } = o;
                  return (0, t.jsx)(e, {
                      ...a,
                      onClose: () => {
                          n(), P?.(!1);
                      },
                  });
              };
          });
}
