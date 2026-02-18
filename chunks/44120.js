"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(835245),
    l = n(397927),
    a = n(73153),
    r = n(391048),
    o = n(636099),
    d = n(589078),
    c = n(979286),
    u = n(287809),
    h = n(954571),
    p = n(166532),
    A = n(301518),
    f = n(652215);
let g = new Set([p.pn.REVIEW, p.pn.CONFIRM, p.pn.GIFT_CUSTOMIZATION]);
function _(e) {
    let t,
        {
            skuId: d,
            analyticsLocations: p,
            analyticsObject: _,
            isGift: x = !1,
            giftMessage: E,
            giftingOrigin: y,
            giftRecipient: v,
            onClose: S,
            onComplete: C,
            variantsReturnStyle: I,
        } = e,
        N = !1,
        T = (0, s.A)(),
        O = x ? "gift-payment-modal" : "payment-modal",
        j = u.default.getCurrentUser();
    j?.verified
        ? (a.h.wait(() => {
              a.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
          }),
          m({
              loadId: T,
              skuId: d,
              analyticsLocations: p,
              onStepChange: (e) => {
                  t = e;
              },
              modalKey: O,
              isGift: x,
              giftMessage: E,
              giftingOrigin: y,
              giftRecipient: v,
              onClose: S,
              onCloseCallback: () => {
                  (0, A.S)({ checkoutSucceeded: N }),
                      N ||
                          h.default.track(f.HAw.PAYMENT_FLOW_CANCELED, {
                              load_id: T,
                              payment_type: f.frM[f.VVm.ONE_TIME],
                              location: _,
                              is_gift: x,
                              sku_id: d,
                              location_stack: p,
                          }),
                      (0, r.ET)(),
                      (0, o.z)(),
                      S?.(N),
                      N && (0, c.gB)({ variantsReturnStyle: I });
              },
              onCloseRequest: () => {
                  null != t && g.has(t) && (0, l.OoC)(O);
              },
              onComplete: () => {
                  (N = !0), C?.();
              },
          }))
        : (0, l.mMO)(async () => {
              let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
              return (t) => {
                  let { onClose: n, ...s } = t;
                  return (0, i.jsx)(e, {
                      ...s,
                      onClose: () => {
                          n(), S?.(!1);
                      },
                  });
              };
          });
}
let m = (e) => {
    let {
        loadId: t,
        skuId: n,
        analyticsLocations: i,
        onStepChange: s,
        modalKey: l,
        isGift: a = !1,
        giftMessage: r,
        giftingOrigin: o,
        giftRecipient: c,
        onClose: u,
        onCloseCallback: h,
        onCloseRequest: p,
        onComplete: A,
    } = e;
    return (0, d.Tx)().openCheckoutModal({
        loadId: t,
        skuId: n,
        analyticsLocations: i,
        giftContextProps: { isGift: a, giftMessage: r, giftingOrigin: o, giftRecipient: c },
        onClose: u,
        onComplete: A,
        flowSpecificOptions: { onStepChange: s },
        openModalOptions: { modalKey: l, onCloseCallback: h, onCloseRequest: p },
    });
};
