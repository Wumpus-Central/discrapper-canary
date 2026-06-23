n.d(t, {
    a: () =>
        function i(t, n) {
            let { isGift: r, giftRecipient: u, giftingOrigin: p, additionalUserIds: h } = n,
                {
                    discoverySessionId: k,
                    analyticsLocations: _,
                    guildId: g,
                    isEligibilityCheckContinuation: C,
                    checkoutState: f,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                I = s.A.getSKUEligibilityEntry(t.id),
                E = I?.state,
                y = !r && (null == E || "checking" === E || "ineligible" === E);
            if (!y && !C) {
                let i = "none";
                r ? (i = "gift") : "eligible" === E ? (i = "already_eligible") : "error" === E && (i = "prior_error"),
                    l.default.track(d.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: g ?? null,
                        application_id: t.applicationId,
                        is_gift: r,
                        eligibility_state: E ?? "none",
                        skip_reason: i,
                        error_http_status: I?.state === "error" ? (I.httpStatus ?? null) : null,
                        location_stack: _,
                    });
            }
            let L = f ?? { hasFinished: !1 };
            y
                ? (0, c.L)({
                      guildId: g,
                      applicationId: t.applicationId,
                      skuId: t.id,
                      analyticsLocations: _ ?? [],
                      onContinue: () => {
                          if (!L.hasFinished)
                              return i(
                                  t,
                                  { isGift: r, giftRecipient: u, giftingOrigin: p, additionalUserIds: h },
                                  {
                                      discoverySessionId: k,
                                      analyticsLocations: _,
                                      guildId: g,
                                      isEligibilityCheckContinuation: !0,
                                      checkoutState: L,
                                  },
                              );
                      },
                  })
                : (function (i) {
                      let {
                          discoverySessionId: t,
                          sku: n,
                          analyticsLocations: e,
                          isGift: o,
                          giftRecipient: l,
                          additionalUserIds: s,
                          giftingOrigin: c,
                          onCloseCallback: d,
                          onComplete: r,
                          modalKey: u,
                      } = i;
                      a.UnifiedCheckoutFlowManagerSingletons[a.CL.SLAYER_STOREFRONT_CHECKOUT]
                          .get()
                          .openCheckoutModal({
                              checkoutConfiguration: {
                                  discoverySessionId: t,
                                  applicationId: n.applicationId,
                                  skuId: n.id,
                                  skuProductLine: n.productLine,
                              },
                              unifiedCheckoutProviderProps: { analyticsLocations: e },
                              checkoutHandlers: { onComplete: r },
                              giftContextProps: { isGift: o, giftRecipient: l, giftingOrigin: c, additionalUserIds: s },
                              modalAPIOptions: { modalKey: u, onCloseCallback: d },
                          });
                  })({
                      discoverySessionId: k,
                      sku: t,
                      analyticsLocations: _ ?? [],
                      isGift: r,
                      giftRecipient: u,
                      giftingOrigin: p,
                      additionalUserIds: h,
                      onCloseCallback: function () {
                          (0, e.ET)(), (0, o.z)(), (0, c.l)(), (L.hasFinished = !0);
                      },
                      onComplete: function () {
                          L.hasFinished = !0;
                      },
                      modalKey: "slayer-payment-modal",
                  });
        },
});
var e = n(391048),
    o = n(636099),
    a = n(529427),
    l = n(174459),
    s = n(832163),
    c = n(556808),
    d = n(652215);
