n.d(t, { A: () => v });
var a = n(627968);
n(64700);
var l = n(835245),
    i = n(397927),
    r = n(73153),
    s = n(391048),
    c = n(636099),
    o = n(608805),
    d = n(120700),
    u = n(589078),
    m = n(979286),
    x = n(287809),
    h = n(954571),
    f = n(166532),
    g = n(301518),
    _ = n(652215);
let p = new Set([f.pn.REVIEW, f.pn.CONFIRM, f.pn.GIFT_CUSTOMIZATION]);
function v(e) {
    let t,
        {
            skuId: u,
            analyticsLocations: f,
            analyticsObject: v,
            isGift: j = !1,
            giftMessage: C,
            giftingOrigin: E,
            giftRecipient: I,
            onClose: N,
            onComplete: b,
        } = e,
        S = !1,
        T = (0, l.A)(),
        k = j ? "gift-payment-modal" : "payment-modal",
        L = x.default.getCurrentUser();
    L?.verified
        ? (r.h.wait(() => {
              r.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          A({
              loadId: T,
              skuId: u,
              analyticsLocations: f,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: k,
              isGift: j,
              giftMessage: C,
              giftingOrigin: E,
              giftRecipient: I,
              onClose: N,
              onCloseCallback: () => {
                  if (((0, g.S)({ checkoutSucceeded: S }), !S)) {
                      let e = (0, o.q1)({
                          location: "CollectiblesPaymentModal",
                          unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                      h.default.track(_.HAw.PAYMENT_FLOW_CANCELED, {
                          load_id: T,
                          payment_type: _.frM[_.VVm.ONE_TIME],
                          location: v,
                          is_gift: j,
                          sku_id: u,
                          location_stack: f,
                          checkout_design: e ? o.rS.UNIFIED : o.rS.LEGACY,
                          checkout_flow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                  }
                  (0, s.ET)(), (0, c.z)(), N?.(S), S && (0, m.gB)();
              },
              onCloseRequest: () => {
                  null != t && p.has(t) && (0, i.OoC)(k);
              },
              onComplete: () => {
                  (S = !0), b?.();
              },
          }))
        : (0, i.mMO)(async () => {
              let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
              return (t) => {
                  let { onClose: n, ...l } = t;
                  return (0, a.jsx)(e, {
                      ...l,
                      onClose: () => {
                          n(), N?.(!1);
                      },
                  });
              };
          });
}
let A = (e) => {
    let {
        loadId: t,
        skuId: n,
        analyticsLocations: a,
        onStepChange: l,
        modalKey: i,
        isGift: r = !1,
        giftMessage: s,
        giftingOrigin: c,
        giftRecipient: o,
        onClose: d,
        onCloseCallback: m,
        onCloseRequest: x,
        onComplete: h,
    } = e;
    return (0, u.Tx)().openCheckoutModal({
        loadId: t,
        skuId: n,
        analyticsLocations: a,
        giftContextProps: { isGift: r, giftMessage: s, giftingOrigin: c, giftRecipient: o },
        onClose: d,
        onComplete: h,
        flowSpecificOptions: { onStepChange: l },
        openModalOptions: { modalKey: i, onCloseCallback: m, onCloseRequest: x },
    });
};
