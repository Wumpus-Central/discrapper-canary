var o = t(477900);
t(582128);
var a = t(192308),
    l = t(73153),
    i = t(391048),
    u = t(589078),
    r = t(429811),
    s = t(287809),
    C = t(166532);
let p = new Set([C.pn.REVIEW, C.pn.CONFIRM, C.pn.GIFT_CUSTOMIZATION]);
t.d(
    n,
    {},
    {
        A: function (e) {
            let n,
                {
                    discoverySessionId: C,
                    skuId: c,
                    analyticsLocations: d,
                    analyticsObject: f,
                    isGift: h = !1,
                    giftMessage: k,
                    giftingOrigin: m,
                    giftRecipient: g,
                    onClose: O,
                    onComplete: P,
                } = e,
                E = h ? "gift-payment-modal" : "payment-modal",
                M = s.default.getCurrentUser();
            M?.verified
                ? (l.h.dispatch({ type: "PAYMENT_MODAL_OPEN" }),
                  (function (e) {
                      let {
                          discoverySessionId: n,
                          skuId: t,
                          analyticsLocations: o,
                          analyticsObject: a,
                          onStepChange: l,
                          modalKey: i,
                          isGift: r = !1,
                          giftMessage: s,
                          giftingOrigin: C,
                          giftRecipient: p,
                          onClose: c,
                          onCloseCallback: d,
                          onCloseRequest: f,
                          onComplete: h,
                      } = e;
                      u.UnifiedCheckoutFlowManagerSingletons[u.CL.COLLECTIBLES_CHECKOUT]
                          .get()
                          .openCheckoutModal({
                              unifiedCheckoutProviderProps: { analyticsLocations: o },
                              checkoutConfiguration: { skuId: t, discoverySessionId: n },
                              giftContextProps: { isGift: r, giftMessage: s, giftingOrigin: C, giftRecipient: p },
                              checkoutHandlers: { onClose: c, onComplete: h },
                              forwardedPaymentModalProps: { onStepChange: l, analyticsObject: a },
                              modalAPIOptions: { modalKey: i, onCloseCallback: d, onCloseRequest: f },
                          });
                  })({
                      discoverySessionId: C,
                      skuId: c,
                      analyticsLocations: d,
                      analyticsObject: f,
                      onStepChange: function (e) {
                          n = e;
                      },
                      modalKey: E,
                      isGift: h,
                      giftMessage: k,
                      giftingOrigin: m,
                      giftRecipient: g,
                      onClose: O,
                      onCloseCallback: function (e) {
                          ((0, i.ET)(), e && (0, r.gB)());
                      },
                      onCloseRequest: function () {
                          null != n && p.has(n) && (0, a.Oo)(E);
                      },
                      onComplete: function () {
                          null != P && P();
                      },
                  }))
                : (0, a.mM)(async () => {
                      let { default: e } = await Promise.all([t.e(928873), t.e(874913), t.e(112206), t.e(590406)]).then(
                          t.bind(t, 661925),
                      );
                      return (n) => {
                          let { onClose: t, ...a } = n;
                          return (0, o.jsx)(e, {
                              ...a,
                              onClose: () => {
                                  (t(), O?.(!1));
                              },
                          });
                      };
                  });
        },
    },
);
