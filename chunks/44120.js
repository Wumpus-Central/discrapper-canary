o.d(t, { A: () => L });
var i = o(627968);
o(64700);
var n = o(132500),
    a = o(192308),
    r = o(228366),
    s = o(391048),
    l = o(636099),
    d = o(120700),
    c = o(226991),
    u = o(742810),
    C = o(693477),
    _ = o(287809),
    p = o(954571),
    E = o(166532),
    I = o(301518),
    A = o(652215);
let g = new Set([E.pn.REVIEW, E.pn.CONFIRM, E.pn.GIFT_CUSTOMIZATION]);
function L(e) {
    let t,
        {
            discoverySessionId: c,
            skuId: E,
            analyticsLocations: L,
            analyticsObject: S,
            isGift: T = !1,
            giftMessage: f,
            giftingOrigin: k,
            giftRecipient: y,
            onClose: M,
            onComplete: h,
        } = e,
        v = !1,
        P = (0, n.A)(),
        m = T ? "gift-payment-modal" : "payment-modal",
        N = _.default.getCurrentUser();
    N?.verified
        ? (r.h.wait(() => {
              r.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          O({
              loadId: P,
              discoverySessionId: c,
              skuId: E,
              analyticsLocations: L,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: m,
              isGift: T,
              giftMessage: f,
              giftingOrigin: k,
              giftRecipient: y,
              onClose: M,
              onCloseCallback: () => {
                  if (((0, I.S)({ checkoutSucceeded: v }), !v)) {
                      let e = (0, u.q1)({
                          location: "CollectiblesPaymentModal",
                          unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                      p.default.track(A.HAw.PAYMENT_FLOW_CANCELED, {
                          load_id: P,
                          discovery_session_id: c,
                          payment_type: A.frM[A.VVm.ONE_TIME],
                          location: S,
                          is_gift: T,
                          sku_id: E,
                          location_stack: L,
                          checkout_design: e ? u.rS.UNIFIED : u.rS.LEGACY,
                          checkout_flow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                  }
                  (0, s.ET)(), (0, l.z)(), M?.(v), v && (0, C.gB)();
              },
              onCloseRequest: () => {
                  null != t && g.has(t) && (0, a.closeModal)(m);
              },
              onComplete: () => {
                  (v = !0), h?.();
              },
          }))
        : (0, a.openModalLazy)(async () => {
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
let O = (e) => {
    let {
        loadId: t,
        discoverySessionId: o,
        skuId: i,
        analyticsLocations: n,
        onStepChange: a,
        modalKey: r,
        isGift: s = !1,
        giftMessage: l,
        giftingOrigin: d,
        giftRecipient: u,
        onClose: C,
        onCloseCallback: _,
        onCloseRequest: p,
        onComplete: E,
    } = e;
    return (0, c.Tx)().openCheckoutModal({
        loadId: t,
        discoverySessionId: o,
        skuId: i,
        analyticsLocations: n,
        giftContextProps: { isGift: s, giftMessage: l, giftingOrigin: d, giftRecipient: u },
        onClose: C,
        onComplete: E,
        additionalOptions: { onStepChange: a },
        openModalOptions: { modalKey: r, onCloseCallback: _, onCloseRequest: p },
    });
};
