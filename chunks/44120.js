n.d(t, { A: () => h });
var o = n(627968);
n(64700);
var l = n(192308),
    a = n(228366),
    p = n(391048),
    s = n(636099),
    C = n(95250),
    i = n(859040),
    d = n(287809),
    r = n(166532);
let u = new Set([r.pn.REVIEW, r.pn.CONFIRM, r.pn.GIFT_CUSTOMIZATION]);
function h(e) {
    let t,
        {
            discoverySessionId: C,
            skuId: r,
            analyticsLocations: h,
            analyticsObject: E,
            isGift: O = !1,
            giftMessage: m,
            giftingOrigin: I,
            giftRecipient: M,
            onClose: T,
            onComplete: f,
        } = e,
        g = O ? "gift-payment-modal" : "payment-modal",
        k = d.default.getCurrentUser();
    k?.verified
        ? (a.h.wait(() => {
              a.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          c({
              discoverySessionId: C,
              skuId: r,
              analyticsLocations: h,
              analyticsObject: E,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: g,
              isGift: O,
              giftMessage: m,
              giftingOrigin: I,
              giftRecipient: M,
              onClose: T,
              onCloseCallback: (e) => {
                  (0, p.ET)(), (0, s.z)(), e && (0, i.gB)();
              },
              onCloseRequest: () => {
                  null != t && u.has(t) && (0, l.closeModal)(g);
              },
              onComplete: () => {
                  null != f && f();
              },
          }))
        : (0, l.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("4969"), n.e("74913"), n.e("12206"), n.e("90406")]).then(
                  n.bind(n, 661925),
              );
              return (t) => {
                  let { onClose: n, ...l } = t;
                  return (0, o.jsx)(e, {
                      ...l,
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
        analyticsObject: l,
        onStepChange: a,
        modalKey: p,
        isGift: s = !1,
        giftMessage: i,
        giftingOrigin: d,
        giftRecipient: r,
        onClose: u,
        onCloseCallback: h,
        onCloseRequest: c,
        onComplete: E,
    } = e;
    return C.oE[C.CL.COLLECTIBLES_CHECKOUT]
        .get()
        .openCheckoutModal({
            discoverySessionId: t,
            skuId: n,
            analyticsLocations: o,
            analyticsObject: l,
            giftContextProps: { isGift: s, giftMessage: i, giftingOrigin: d, giftRecipient: r },
            onClose: u,
            onComplete: E,
            additionalOptions: { onStepChange: a },
            modalAPIOptions: { modalKey: p, onCloseCallback: h, onCloseRequest: c },
        });
};
