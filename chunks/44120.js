n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(132500),
    s = n(192308),
    r = n(228366),
    a = n(391048),
    o = n(636099),
    d = n(120700),
    c = n(226991),
    u = n(742810),
    h = n(803375),
    A = n(287809),
    _ = n(954571),
    g = n(166532),
    m = n(301518),
    p = n(652215);
let f = new Set([g.pn.REVIEW, g.pn.CONFIRM, g.pn.GIFT_CUSTOMIZATION]);
function E(e) {
    let t,
        {
            discoverySessionId: c,
            skuId: g,
            analyticsLocations: E,
            analyticsObject: x,
            isGift: I = !1,
            giftMessage: b,
            giftingOrigin: S,
            giftRecipient: N,
            onClose: T,
            onComplete: v,
        } = e,
        y = !1,
        R = (0, l.A)(),
        j = I ? "gift-payment-modal" : "payment-modal",
        L = A.default.getCurrentUser();
    L?.verified
        ? (r.h.wait(() => {
              r.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          C({
              loadId: R,
              discoverySessionId: c,
              skuId: g,
              analyticsLocations: E,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: j,
              isGift: I,
              giftMessage: b,
              giftingOrigin: S,
              giftRecipient: N,
              onClose: T,
              onCloseCallback: () => {
                  if (((0, m.S)({ checkoutSucceeded: y }), !y)) {
                      let e = (0, u.q1)({
                          location: "CollectiblesPaymentModal",
                          unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                      _.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                          load_id: R,
                          discovery_session_id: c,
                          payment_type: p.frM[p.VVm.ONE_TIME],
                          location: x,
                          is_gift: I,
                          sku_id: g,
                          location_stack: E,
                          checkout_design: e ? u.rS.UNIFIED : u.rS.LEGACY,
                          checkout_flow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                  }
                  (0, a.ET)(), (0, o.z)(), T?.(y), y && (0, h.gB)();
              },
              onCloseRequest: () => {
                  null != t && f.has(t) && (0, s.closeModal)(j);
              },
              onComplete: () => {
                  (y = !0), v?.();
              },
          }))
        : (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
              return (t) => {
                  let { onClose: n, ...l } = t;
                  return (0, i.jsx)(e, {
                      ...l,
                      onClose: () => {
                          n(), T?.(!1);
                      },
                  });
              };
          });
}
let C = (e) => {
    let {
        loadId: t,
        discoverySessionId: n,
        skuId: i,
        analyticsLocations: l,
        onStepChange: s,
        modalKey: r,
        isGift: a = !1,
        giftMessage: o,
        giftingOrigin: d,
        giftRecipient: u,
        onClose: h,
        onCloseCallback: A,
        onCloseRequest: _,
        onComplete: g,
    } = e;
    return (0, c.Tx)().openCheckoutModal({
        loadId: t,
        discoverySessionId: n,
        skuId: i,
        analyticsLocations: l,
        giftContextProps: { isGift: a, giftMessage: o, giftingOrigin: d, giftRecipient: u },
        onClose: h,
        onComplete: g,
        flowSpecificOptions: { onStepChange: s },
        openModalOptions: { modalKey: r, onCloseCallback: A, onCloseRequest: _ },
    });
};
