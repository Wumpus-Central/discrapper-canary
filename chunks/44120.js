"use strict";
a.d(t, { A: () => v });
var l = a(627968);
a(64700);
var r = a(835245),
    n = a(397927),
    s = a(73153),
    i = a(391048),
    o = a(636099),
    d = a(608805),
    c = a(120700),
    u = a(589078),
    x = a(979286),
    h = a(287809),
    m = a(954571),
    b = a(166532),
    p = a(301518),
    g = a(652215);
let f = new Set([b.pn.REVIEW, b.pn.CONFIRM, b.pn.GIFT_CUSTOMIZATION]);
function v(e) {
    let t,
        {
            skuId: u,
            analyticsLocations: b,
            analyticsObject: v,
            isGift: y = !1,
            giftMessage: _,
            giftingOrigin: k,
            giftRecipient: A,
            onClose: C,
            onComplete: S,
            variantsReturnStyle: I,
        } = e,
        T = !1,
        w = (0, r.A)(),
        V = y ? "gift-payment-modal" : "payment-modal",
        P = h.default.getCurrentUser();
    P?.verified
        ? (s.h.wait(() => {
              s.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          j({
              loadId: w,
              skuId: u,
              analyticsLocations: b,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: V,
              isGift: y,
              giftMessage: _,
              giftingOrigin: k,
              giftRecipient: A,
              onClose: C,
              onCloseCallback: () => {
                  if (((0, p.S)({ checkoutSucceeded: T }), !T)) {
                      let e = (0, d.q1)({
                          location: "CollectiblesPaymentModal",
                          unifiedCheckoutFlow: c.C.COLLECTIBLES_CHECKOUT,
                      });
                      m.default.track(g.HAw.PAYMENT_FLOW_CANCELED, {
                          load_id: w,
                          payment_type: g.frM[g.VVm.ONE_TIME],
                          location: v,
                          is_gift: y,
                          sku_id: u,
                          location_stack: b,
                          checkout_design: e ? d.rS.UNIFIED : d.rS.LEGACY,
                      });
                  }
                  (0, i.ET)(), (0, o.z)(), C?.(T), T && (0, x.gB)({ variantsReturnStyle: I });
              },
              onCloseRequest: () => {
                  null != t && f.has(t) && (0, n.OoC)(V);
              },
              onComplete: () => {
                  (T = !0), S?.();
              },
          }))
        : (0, n.mMO)(async () => {
              let { default: e } = await Promise.all([a.e("12206"), a.e("90406")]).then(a.bind(a, 661925));
              return (t) => {
                  let { onClose: a, ...r } = t;
                  return (0, l.jsx)(e, {
                      ...r,
                      onClose: () => {
                          a(), C?.(!1);
                      },
                  });
              };
          });
}
let j = (e) => {
    let {
        loadId: t,
        skuId: a,
        analyticsLocations: l,
        onStepChange: r,
        modalKey: n,
        isGift: s = !1,
        giftMessage: i,
        giftingOrigin: o,
        giftRecipient: d,
        onClose: c,
        onCloseCallback: x,
        onCloseRequest: h,
        onComplete: m,
    } = e;
    return (0, u.Tx)().openCheckoutModal({
        loadId: t,
        skuId: a,
        analyticsLocations: l,
        giftContextProps: { isGift: s, giftMessage: i, giftingOrigin: o, giftRecipient: d },
        onClose: c,
        onComplete: m,
        flowSpecificOptions: { onStepChange: r },
        openModalOptions: { modalKey: n, onCloseCallback: x, onCloseRequest: h },
    });
};
