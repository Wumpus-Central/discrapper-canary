n.d(t, { A: () => h });
var o = n(627968);
n(64700);
var a = n(192308),
    l = n(228366),
    p = n(391048),
    s = n(636099),
    i = n(622207),
    d = n(859040),
    r = n(287809),
    C = n(166532);
let u = new Set([C.pn.REVIEW, C.pn.CONFIRM, C.pn.GIFT_CUSTOMIZATION]);
function h(e) {
    let t,
        {
            discoverySessionId: i,
            skuId: C,
            analyticsLocations: h,
            analyticsObject: M,
            isGift: m = !1,
            giftMessage: O,
            giftingOrigin: f,
            giftRecipient: k,
            onClose: T,
            onComplete: g,
        } = e,
        w = !1,
        y = m ? "gift-payment-modal" : "payment-modal",
        E = r.default.getCurrentUser();
    E?.verified
        ? (l.h.wait(() => {
              l.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          c({
              discoverySessionId: i,
              skuId: C,
              analyticsLocations: h,
              analyticsObject: M,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: y,
              isGift: m,
              giftMessage: O,
              giftingOrigin: f,
              giftRecipient: k,
              onClose: T,
              onCloseCallback: () => {
                  (0, p.ET)(), (0, s.z)(), T?.(w), w && (0, d.gB)();
              },
              onCloseRequest: () => {
                  null != t && u.has(t) && (0, a.closeModal)(y);
              },
              onComplete: () => {
                  (w = !0), g?.();
              },
          }))
        : (0, a.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("54681"), n.e("74913"), n.e("12206"), n.e("90406")]).then(
                  n.bind(n, 661925),
              );
              return (t) => {
                  let { onClose: n, ...a } = t;
                  return (0, o.jsx)(e, {
                      ...a,
                      onClose: () => {
                          n(), T?.(!1);
                      },
                  });
              };
          });
}
let c = (e) => {
    let {
        discoverySessionId: t,
        skuId: n,
        analyticsLocations: o,
        analyticsObject: a,
        onStepChange: l,
        modalKey: p,
        isGift: s = !1,
        giftMessage: d,
        giftingOrigin: r,
        giftRecipient: C,
        onClose: u,
        onCloseCallback: h,
        onCloseRequest: c,
        onComplete: M,
    } = e;
    return (0, i.Tx)().openCheckoutModal({
        discoverySessionId: t,
        skuId: n,
        analyticsLocations: o,
        analyticsObject: a,
        giftContextProps: { isGift: s, giftMessage: d, giftingOrigin: r, giftRecipient: C },
        onClose: u,
        onComplete: M,
        additionalOptions: { onStepChange: l },
        openModalOptions: { modalKey: p, onCloseCallback: h, onCloseRequest: c },
    });
};
