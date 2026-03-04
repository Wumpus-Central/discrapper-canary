l.d(t, { A: () => C });
var n = l(627968);
l(64700);
var r = l(835245),
    a = l(397927),
    i = l(73153),
    s = l(391048),
    u = l(636099),
    o = l(608805),
    d = l(120700),
    c = l(589078),
    h = l(979286),
    A = l(287809),
    E = l(954571),
    m = l(166532),
    p = l(301518),
    f = l(652215);
let g = new Set([m.pn.REVIEW, m.pn.CONFIRM, m.pn.GIFT_CUSTOMIZATION]);
function C(e) {
    let t,
        {
            skuId: c,
            analyticsLocations: m,
            analyticsObject: C,
            isGift: I = !1,
            giftMessage: P,
            giftingOrigin: R,
            giftRecipient: _,
            onClose: M,
            onComplete: v,
            variantsReturnStyle: O,
        } = e,
        L = !1,
        U = (0, r.A)(),
        y = I ? "gift-payment-modal" : "payment-modal",
        w = A.default.getCurrentUser();
    w?.verified
        ? (i.h.wait(() => {
              i.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          S({
              loadId: U,
              skuId: c,
              analyticsLocations: m,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: y,
              isGift: I,
              giftMessage: P,
              giftingOrigin: R,
              giftRecipient: _,
              onClose: M,
              onCloseCallback: () => {
                  if (((0, p.S)({ checkoutSucceeded: L }), !L)) {
                      let e = (0, o.q1)({
                          location: "CollectiblesPaymentModal",
                          unifiedCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT,
                      });
                      E.default.track(f.HAw.PAYMENT_FLOW_CANCELED, {
                          load_id: U,
                          payment_type: f.frM[f.VVm.ONE_TIME],
                          location: C,
                          is_gift: I,
                          sku_id: c,
                          location_stack: m,
                          checkout_design: e ? o.rS.UNIFIED : o.rS.LEGACY,
                      });
                  }
                  (0, s.ET)(), (0, u.z)(), M?.(L), L && (0, h.gB)({ variantsReturnStyle: O });
              },
              onCloseRequest: () => {
                  null != t && g.has(t) && (0, a.OoC)(y);
              },
              onComplete: () => {
                  (L = !0), v?.();
              },
          }))
        : (0, a.mMO)(async () => {
              let { default: e } = await Promise.all([l.e("12206"), l.e("90406")]).then(l.bind(l, 661925));
              return (t) => {
                  let { onClose: l, ...r } = t;
                  return (0, n.jsx)(e, {
                      ...r,
                      onClose: () => {
                          l(), M?.(!1);
                      },
                  });
              };
          });
}
let S = (e) => {
    let {
        loadId: t,
        skuId: l,
        analyticsLocations: n,
        onStepChange: r,
        modalKey: a,
        isGift: i = !1,
        giftMessage: s,
        giftingOrigin: u,
        giftRecipient: o,
        onClose: d,
        onCloseCallback: h,
        onCloseRequest: A,
        onComplete: E,
    } = e;
    return (0, c.Tx)().openCheckoutModal({
        loadId: t,
        skuId: l,
        analyticsLocations: n,
        giftContextProps: { isGift: i, giftMessage: s, giftingOrigin: u, giftRecipient: o },
        onClose: d,
        onComplete: E,
        flowSpecificOptions: { onStepChange: r },
        openModalOptions: { modalKey: a, onCloseCallback: h, onCloseRequest: A },
    });
};
