n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(835245),
    s = n(192308),
    a = n(73153),
    r = n(391048),
    o = n(636099),
    d = n(120700),
    c = n(589078),
    u = n(742810),
    h = n(979286),
    A = n(287809),
    _ = n(954571),
    m = n(166532),
    g = n(301518),
    p = n(652215);
let f = new Set([m.pn.REVIEW, m.pn.CONFIRM, m.pn.GIFT_CUSTOMIZATION]);
function E(e) {
    let t,
        {
            discoverySessionId: c,
            skuId: m,
            analyticsLocations: E,
            analyticsObject: I,
            isGift: C = !1,
            giftMessage: b,
            giftingOrigin: N,
            giftRecipient: S,
            onClose: v,
            onComplete: T,
        } = e,
        y = !1,
        j = (0, l.A)(),
        R = C ? "gift-payment-modal" : "payment-modal",
        L = A.default.getCurrentUser();
    L?.verified
        ? (a.h.wait(() => {
              a.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          x({
              loadId: j,
              discoverySessionId: c,
              skuId: m,
              analyticsLocations: E,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: R,
              isGift: C,
              giftMessage: b,
              giftingOrigin: N,
              giftRecipient: S,
              onClose: v,
              onCloseCallback: () => {
                  if (((0, g.S)({ checkoutSucceeded: y }), !y)) {
                      let e = (0, u.q1)({
                          location: "CollectiblesPaymentModal",
                          unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                      _.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                          load_id: j,
                          discovery_session_id: c,
                          payment_type: p.frM[p.VVm.ONE_TIME],
                          location: I,
                          is_gift: C,
                          sku_id: m,
                          location_stack: E,
                          checkout_design: e ? u.rS.UNIFIED : u.rS.LEGACY,
                          checkout_flow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                  }
                  (0, r.ET)(), (0, o.z)(), v?.(y), y && (0, h.gB)();
              },
              onCloseRequest: () => {
                  null != t && f.has(t) && (0, s.closeModal)(R);
              },
              onComplete: () => {
                  (y = !0), T?.();
              },
          }))
        : (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
              return (t) => {
                  let { onClose: n, ...l } = t;
                  return (0, i.jsx)(e, {
                      ...l,
                      onClose: () => {
                          n(), v?.(!1);
                      },
                  });
              };
          });
}
let x = (e) => {
    let {
        loadId: t,
        discoverySessionId: n,
        skuId: i,
        analyticsLocations: l,
        onStepChange: s,
        modalKey: a,
        isGift: r = !1,
        giftMessage: o,
        giftingOrigin: d,
        giftRecipient: u,
        onClose: h,
        onCloseCallback: A,
        onCloseRequest: _,
        onComplete: m,
    } = e;
    return (0, c.Tx)().openCheckoutModal({
        loadId: t,
        discoverySessionId: n,
        skuId: i,
        analyticsLocations: l,
        giftContextProps: { isGift: r, giftMessage: o, giftingOrigin: d, giftRecipient: u },
        onClose: h,
        onComplete: m,
        flowSpecificOptions: { onStepChange: s },
        openModalOptions: { modalKey: a, onCloseCallback: A, onCloseRequest: _ },
    });
};
