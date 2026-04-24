n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(132500),
    a = n(192308),
    s = n(228366),
    r = n(391048),
    o = n(636099),
    d = n(120700),
    c = n(226991),
    u = n(742810),
    h = n(693477),
    _ = n(287809),
    m = n(954571),
    g = n(166532),
    p = n(301518),
    A = n(652215);
let x = new Set([g.pn.REVIEW, g.pn.CONFIRM, g.pn.GIFT_CUSTOMIZATION]);
function f(e) {
    let t,
        {
            discoverySessionId: c,
            skuId: g,
            analyticsLocations: f,
            analyticsObject: I,
            isGift: C = !1,
            giftMessage: E,
            giftingOrigin: j,
            giftRecipient: v,
            onClose: y,
            onComplete: S,
        } = e,
        T = !1,
        N = (0, l.A)(),
        R = C ? "gift-payment-modal" : "payment-modal",
        O = _.default.getCurrentUser();
    O?.verified
        ? (s.h.wait(() => {
              s.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          b({
              loadId: N,
              discoverySessionId: c,
              skuId: g,
              analyticsLocations: f,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: R,
              isGift: C,
              giftMessage: E,
              giftingOrigin: j,
              giftRecipient: v,
              onClose: y,
              onCloseCallback: () => {
                  if (((0, p.S)({ checkoutSucceeded: T }), !T)) {
                      let e = (0, u.q1)({
                          location: "CollectiblesPaymentModal",
                          unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                      m.default.track(A.HAw.PAYMENT_FLOW_CANCELED, {
                          load_id: N,
                          discovery_session_id: c,
                          payment_type: A.frM[A.VVm.ONE_TIME],
                          location: I,
                          is_gift: C,
                          sku_id: g,
                          location_stack: f,
                          checkout_design: e ? u.rS.UNIFIED : u.rS.LEGACY,
                          checkout_flow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                  }
                  (0, r.ET)(), (0, o.z)(), y?.(T), T && (0, h.gB)();
              },
              onCloseRequest: () => {
                  null != t && x.has(t) && (0, a.closeModal)(R);
              },
              onComplete: () => {
                  (T = !0), S?.();
              },
          }))
        : (0, a.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
              return (t) => {
                  let { onClose: n, ...l } = t;
                  return (0, i.jsx)(e, {
                      ...l,
                      onClose: () => {
                          n(), y?.(!1);
                      },
                  });
              };
          });
}
let b = (e) => {
    let {
        loadId: t,
        discoverySessionId: n,
        skuId: i,
        analyticsLocations: l,
        onStepChange: a,
        modalKey: s,
        isGift: r = !1,
        giftMessage: o,
        giftingOrigin: d,
        giftRecipient: u,
        onClose: h,
        onCloseCallback: _,
        onCloseRequest: m,
        onComplete: g,
    } = e;
    return (0, c.Tx)().openCheckoutModal({
        loadId: t,
        discoverySessionId: n,
        skuId: i,
        analyticsLocations: l,
        giftContextProps: { isGift: r, giftMessage: o, giftingOrigin: d, giftRecipient: u },
        onClose: h,
        onComplete: g,
        flowSpecificOptions: { onStepChange: a },
        openModalOptions: { modalKey: s, onCloseCallback: _, onCloseRequest: m },
    });
};
