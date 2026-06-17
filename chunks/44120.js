o.d(t, { A: () => c });
var n = o(627968);
o(64700);
var a = o(192308),
    l = o(228366),
    r = o(391048),
    s = o(636099),
    i = o(529427),
    d = o(564064),
    p = o(287809),
    C = o(166532);
let u = new Set([C.pn.REVIEW, C.pn.CONFIRM, C.pn.GIFT_CUSTOMIZATION]);
function c(e) {
    let t,
        {
            discoverySessionId: i,
            skuId: C,
            analyticsLocations: c,
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
          h({
              discoverySessionId: i,
              skuId: C,
              analyticsLocations: c,
              analyticsObject: f,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: O,
              isGift: k,
              giftMessage: g,
              giftingOrigin: m,
              giftRecipient: M,
              onClose: P,
              onCloseCallback: (e) => {
                  (0, r.ET)(), (0, s.z)(), e && (0, d.gB)();
              },
              onCloseRequest: () => {
                  null != t && u.has(t) && (0, a.closeModal)(O);
              },
              onComplete: () => {
                  null != E && E();
              },
          }))
        : (0, a.openModalLazy)(async () => {
              let { default: e } = await Promise.all([o.e("87181"), o.e("74913"), o.e("12206"), o.e("90406")]).then(
                  o.bind(o, 661925),
              );
              return (t) => {
                  let { onClose: o, ...a } = t;
                  return (0, n.jsx)(e, {
                      ...a,
                      onClose: () => {
                          o(), P?.(!1);
                      },
                  });
              };
          });
}
let h = (e) => {
    let {
        discoverySessionId: t,
        skuId: o,
        analyticsLocations: n,
        analyticsObject: a,
        onStepChange: l,
        modalKey: r,
        isGift: s = !1,
        giftMessage: d,
        giftingOrigin: p,
        giftRecipient: C,
        onClose: u,
        onCloseCallback: c,
        onCloseRequest: h,
        onComplete: f,
    } = e;
    return i.UnifiedCheckoutFlowManagerSingletons[i.CL.COLLECTIBLES_CHECKOUT]
        .get()
        .openCheckoutModal({
            unifiedCheckoutProviderProps: { analyticsLocations: n },
            checkoutConfiguration: { skuId: o, discoverySessionId: t },
            giftContextProps: { isGift: s, giftMessage: d, giftingOrigin: p, giftRecipient: C },
            checkoutHandlers: { onClose: u, onComplete: f },
            forwardedPaymentModalProps: { onStepChange: l, analyticsObject: a },
            modalAPIOptions: { modalKey: r, onCloseCallback: c, onCloseRequest: h },
        });
};
