n.d(t, { A: () => h });
var o = n(627968);
n(64700);
var l = n(192308),
    a = n(228366),
    p = n(391048),
    s = n(636099),
    i = n(663288),
    d = n(859040),
    r = n(287809),
    u = n(166532);
let C = new Set([u.pn.REVIEW, u.pn.CONFIRM, u.pn.GIFT_CUSTOMIZATION]);
function h(e) {
    let t,
        {
            discoverySessionId: i,
            skuId: u,
            analyticsLocations: h,
            analyticsObject: M,
            isGift: m = !1,
            giftMessage: O,
            giftingOrigin: f,
            giftRecipient: k,
            onClose: T,
            onComplete: g,
        } = e,
        w = m ? "gift-payment-modal" : "payment-modal",
        y = r.default.getCurrentUser();
    y?.verified
        ? (a.h.wait(() => {
              a.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          c({
              discoverySessionId: i,
              skuId: u,
              analyticsLocations: h,
              analyticsObject: M,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: w,
              isGift: m,
              giftMessage: O,
              giftingOrigin: f,
              giftRecipient: k,
              onClose: T,
              onCloseCallback: (e) => {
                  (0, p.ET)(), (0, s.z)(), e && (0, d.gB)();
              },
              onCloseRequest: () => {
                  null != t && C.has(t) && (0, l.closeModal)(w);
              },
              onComplete: () => {
                  null != g && g();
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
        giftMessage: d,
        giftingOrigin: r,
        giftRecipient: u,
        onClose: C,
        onCloseCallback: h,
        onCloseRequest: c,
        onComplete: M,
    } = e;
    return (0, i.Tx)().openCheckoutModal({
        discoverySessionId: t,
        skuId: n,
        analyticsLocations: o,
        analyticsObject: l,
        giftContextProps: { isGift: s, giftMessage: d, giftingOrigin: r, giftRecipient: u },
        onClose: C,
        onComplete: M,
        additionalOptions: { onStepChange: a },
        openModalOptions: { modalKey: p, onCloseCallback: h, onCloseRequest: c },
    });
};
