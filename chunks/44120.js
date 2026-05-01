o.d(t, { A: () => _ });
var i = o(627968);
o(64700);
var n = o(192308),
    r = o(228366),
    a = o(391048),
    s = o(636099),
    l = o(110048),
    d = o(859040),
    u = o(287809),
    c = o(166532),
    p = o(301518);
let C = new Set([c.pn.REVIEW, c.pn.CONFIRM, c.pn.GIFT_CUSTOMIZATION]);
function _(e) {
    let t,
        {
            discoverySessionId: l,
            skuId: c,
            analyticsLocations: _,
            analyticsObject: g,
            isGift: E = !1,
            giftMessage: A,
            giftingOrigin: O,
            giftRecipient: S,
            onClose: y,
            onComplete: L,
        } = e,
        T = !1,
        v = E ? "gift-payment-modal" : "payment-modal",
        f = u.default.getCurrentUser();
    f?.verified
        ? (r.h.wait(() => {
              r.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          I({
              discoverySessionId: l,
              skuId: c,
              analyticsLocations: _,
              analyticsObject: g,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: v,
              isGift: E,
              giftMessage: A,
              giftingOrigin: O,
              giftRecipient: S,
              onClose: y,
              onCloseCallback: () => {
                  (0, p.S)({ checkoutSucceeded: T }), (0, a.ET)(), (0, s.z)(), y?.(T), T && (0, d.gB)();
              },
              onCloseRequest: () => {
                  null != t && C.has(t) && (0, n.closeModal)(v);
              },
              onComplete: () => {
                  (T = !0), L?.();
              },
          }))
        : (0, n.openModalLazy)(async () => {
              let { default: e } = await Promise.all([o.e("54681"), o.e("14753"), o.e("12206"), o.e("90406")]).then(
                  o.bind(o, 661925),
              );
              return (t) => {
                  let { onClose: o, ...n } = t;
                  return (0, i.jsx)(e, {
                      ...n,
                      onClose: () => {
                          o(), y?.(!1);
                      },
                  });
              };
          });
}
let I = (e) => {
    let {
        discoverySessionId: t,
        skuId: o,
        analyticsLocations: i,
        analyticsObject: n,
        onStepChange: r,
        modalKey: a,
        isGift: s = !1,
        giftMessage: d,
        giftingOrigin: u,
        giftRecipient: c,
        onClose: p,
        onCloseCallback: C,
        onCloseRequest: _,
        onComplete: I,
    } = e;
    return (0, l.Tx)().openCheckoutModal({
        discoverySessionId: t,
        skuId: o,
        analyticsLocations: i,
        analyticsObject: n,
        giftContextProps: { isGift: s, giftMessage: d, giftingOrigin: u, giftRecipient: c },
        onClose: p,
        onComplete: I,
        additionalOptions: { onStepChange: r },
        openModalOptions: { modalKey: a, onCloseCallback: C, onCloseRequest: _ },
    });
};
