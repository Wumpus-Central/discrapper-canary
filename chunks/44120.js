n.d(t, { A: () => h });
var o = n(627968);
n(64700);
var l = n(192308),
    a = n(228366),
    s = n(391048),
    i = n(636099),
    p = n(529427),
    C = n(859040),
    d = n(287809),
    r = n(166532);
let u = new Set([r.pn.REVIEW, r.pn.CONFIRM, r.pn.GIFT_CUSTOMIZATION]);
function h(e) {
    let t,
        {
            discoverySessionId: p,
            skuId: r,
            analyticsLocations: h,
            analyticsObject: O,
            isGift: g = !1,
            giftMessage: m,
            giftingOrigin: E,
            giftRecipient: M,
            onClose: f,
            onComplete: k,
        } = e,
        I = g ? "gift-payment-modal" : "payment-modal",
        T = d.default.getCurrentUser();
    T?.verified
        ? (a.h.wait(() => {
              a.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          c({
              discoverySessionId: p,
              skuId: r,
              analyticsLocations: h,
              analyticsObject: O,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: I,
              isGift: g,
              giftMessage: m,
              giftingOrigin: E,
              giftRecipient: M,
              onClose: f,
              onCloseCallback: (e) => {
                  (0, s.ET)(), (0, i.z)(), e && (0, C.gB)();
              },
              onCloseRequest: () => {
                  null != t && u.has(t) && (0, l.closeModal)(I);
              },
              onComplete: () => {
                  null != k && k();
              },
          }))
        : (0, l.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("54681"), n.e("74913"), n.e("12206"), n.e("90406")]).then(
                  n.bind(n, 661925),
              );
              return (t) => {
                  let { onClose: n, ...l } = t;
                  return (0, o.jsx)(e, {
                      ...l,
                      onClose: () => {
                          n(), f?.(!1);
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
        modalKey: s,
        isGift: i = !1,
        giftMessage: C,
        giftingOrigin: d,
        giftRecipient: r,
        onClose: u,
        onCloseCallback: h,
        onCloseRequest: c,
        onComplete: O,
    } = e;
    return p.UnifiedCheckoutFlowManagerSingletons[p.CL.COLLECTIBLES_CHECKOUT]
        .get()
        .openCheckoutModal({
            discoverySessionId: t,
            skuId: n,
            analyticsLocations: o,
            analyticsObject: l,
            giftContextProps: { isGift: i, giftMessage: C, giftingOrigin: d, giftRecipient: r },
            onClose: u,
            onComplete: O,
            additionalOptions: { onStepChange: a },
            modalAPIOptions: { modalKey: s, onCloseCallback: h, onCloseRequest: c },
        });
};
