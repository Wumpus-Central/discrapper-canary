o.d(t, { A: () => O });
var i = o(627968);
o(64700);
var n = o(132500),
    r = o(192308),
    s = o(228366),
    a = o(391048),
    l = o(636099),
    d = o(120700),
    c = o(226991),
    u = o(742810),
    C = o(693477),
    p = o(287809),
    _ = o(954571),
    E = o(166532),
    I = o(301518),
    g = o(652215);
let A = new Set([E.pn.REVIEW, E.pn.CONFIRM, E.pn.GIFT_CUSTOMIZATION]);
function O(e) {
    let t,
        {
            discoverySessionId: c,
            skuId: E,
            analyticsLocations: O,
            analyticsObject: f,
            isGift: T = !1,
            giftMessage: S,
            giftingOrigin: k,
            giftRecipient: y,
            onClose: M,
            onComplete: h,
        } = e,
        v = !1,
        P = (0, n.A)(),
        m = T ? "gift-payment-modal" : "payment-modal",
        N = p.default.getCurrentUser();
    N?.verified
        ? (s.h.wait(() => {
              s.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          L({
              loadId: P,
              discoverySessionId: c,
              skuId: E,
              analyticsLocations: O,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: m,
              isGift: T,
              giftMessage: S,
              giftingOrigin: k,
              giftRecipient: y,
              onClose: M,
              onCloseCallback: () => {
                  if (((0, I.S)({ checkoutSucceeded: v }), !v)) {
                      let e = (0, u.q1)({
                          location: "CollectiblesPaymentModal",
                          unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                      _.default.track(g.HAw.PAYMENT_FLOW_CANCELED, {
                          load_id: P,
                          discovery_session_id: c,
                          payment_type: g.frM[g.VVm.ONE_TIME],
                          location: f,
                          is_gift: T,
                          sku_id: E,
                          location_stack: O,
                          checkout_design: e ? u.rS.UNIFIED : u.rS.LEGACY,
                          checkout_flow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                  }
                  (0, a.ET)(), (0, l.z)(), M?.(v), v && (0, C.gB)();
              },
              onCloseRequest: () => {
                  null != t && A.has(t) && (0, r.closeModal)(m);
              },
              onComplete: () => {
                  (v = !0), h?.();
              },
          }))
        : (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([o.e("54681"), o.e("14753"), o.e("12206"), o.e("90406")]).then(
                  o.bind(o, 661925),
              );
              return (t) => {
                  let { onClose: o, ...n } = t;
                  return (0, i.jsx)(e, {
                      ...n,
                      onClose: () => {
                          o(), M?.(!1);
                      },
                  });
              };
          });
}
let L = (e) => {
    let {
        loadId: t,
        discoverySessionId: o,
        skuId: i,
        analyticsLocations: n,
        onStepChange: r,
        modalKey: s,
        isGift: a = !1,
        giftMessage: l,
        giftingOrigin: d,
        giftRecipient: u,
        onClose: C,
        onCloseCallback: p,
        onCloseRequest: _,
        onComplete: E,
    } = e;
    return (0, c.Tx)().openCheckoutModal({
        loadId: t,
        discoverySessionId: o,
        skuId: i,
        analyticsLocations: n,
        giftContextProps: { isGift: a, giftMessage: l, giftingOrigin: d, giftRecipient: u },
        onClose: C,
        onComplete: E,
        flowSpecificOptions: { onStepChange: r },
        openModalOptions: { modalKey: s, onCloseCallback: p, onCloseRequest: _ },
    });
};
