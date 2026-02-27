"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var s = n(835245),
    l = n(397927),
    a = n(73153),
    r = n(391048),
    o = n(636099),
    d = n(608805),
    c = n(120700),
    u = n(589078),
    h = n(979286),
    p = n(287809),
    A = n(954571),
    f = n(166532),
    g = n(301518),
    _ = n(652215);
let m = new Set([f.pn.REVIEW, f.pn.CONFIRM, f.pn.GIFT_CUSTOMIZATION]);
function E(e) {
    let t,
        {
            skuId: u,
            analyticsLocations: f,
            analyticsObject: E,
            isGift: y = !1,
            giftMessage: v,
            giftingOrigin: S,
            giftRecipient: C,
            onClose: I,
            onComplete: N,
            variantsReturnStyle: T,
        } = e,
        O = !1,
        b = (0, s.A)(),
        j = y ? "gift-payment-modal" : "payment-modal",
        D = p.default.getCurrentUser();
    D?.verified
        ? (a.h.wait(() => {
              a.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          x({
              loadId: b,
              skuId: u,
              analyticsLocations: f,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: j,
              isGift: y,
              giftMessage: v,
              giftingOrigin: S,
              giftRecipient: C,
              onClose: I,
              onCloseCallback: () => {
                  if (((0, g.S)({ checkoutSucceeded: O }), !O)) {
                      let e = (0, d.q1)({
                          location: "CollectiblesPaymentModal",
                          unifiedCheckoutFlow: c.C.COLLECTIBLES_CHECKOUT,
                      });
                      A.default.track(_.HAw.PAYMENT_FLOW_CANCELED, {
                          load_id: b,
                          payment_type: _.frM[_.VVm.ONE_TIME],
                          location: E,
                          is_gift: y,
                          sku_id: u,
                          location_stack: f,
                          checkout_design: e ? d.rS.UNIFIED : d.rS.LEGACY,
                      });
                  }
                  (0, r.ET)(), (0, o.z)(), I?.(O), O && (0, h.gB)({ variantsReturnStyle: T });
              },
              onCloseRequest: () => {
                  null != t && m.has(t) && (0, l.OoC)(j);
              },
              onComplete: () => {
                  (O = !0), N?.();
              },
          }))
        : (0, l.mMO)(async () => {
              let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
              return (t) => {
                  let { onClose: n, ...s } = t;
                  return (0, i.jsx)(e, {
                      ...s,
                      onClose: () => {
                          n(), I?.(!1);
                      },
                  });
              };
          });
}
let x = (e) => {
    let {
        loadId: t,
        skuId: n,
        analyticsLocations: i,
        onStepChange: s,
        modalKey: l,
        isGift: a = !1,
        giftMessage: r,
        giftingOrigin: o,
        giftRecipient: d,
        onClose: c,
        onCloseCallback: h,
        onCloseRequest: p,
        onComplete: A,
    } = e;
    return (0, u.Tx)().openCheckoutModal({
        loadId: t,
        skuId: n,
        analyticsLocations: i,
        giftContextProps: { isGift: a, giftMessage: r, giftingOrigin: o, giftRecipient: d },
        onClose: c,
        onComplete: A,
        flowSpecificOptions: { onStepChange: s },
        openModalOptions: { modalKey: l, onCloseCallback: h, onCloseRequest: p },
    });
};
