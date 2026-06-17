e.d(t, {
    a: () =>
        function i(t, e) {
            let { isGift: o, giftRecipient: u, giftingOrigin: p, additionalUserIds: h } = e,
                {
                    discoverySessionId: k,
                    analyticsLocations: _,
                    guildId: g,
                    isEligibilityCheckContinuation: C,
                    checkoutState: I,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                E = s.A.getSKUEligibilityEntry(t.id),
                f = E?.state,
                y = !o && (null == f || "checking" === f || "ineligible" === f);
            if (!y && !C) {
                let i = "none";
                o ? (i = "gift") : "eligible" === f ? (i = "already_eligible") : "error" === f && (i = "prior_error"),
                    l.default.track(r.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: g ?? null,
                        application_id: t.applicationId,
                        is_gift: o,
                        eligibility_state: f ?? "none",
                        skip_reason: i,
                        error_http_status: E?.state === "error" ? (E.httpStatus ?? null) : null,
                        location_stack: _,
                    });
            }
            let L = I ?? { hasFinished: !1 };
            y
                ? (0, d.L)({
                      guildId: g,
                      applicationId: t.applicationId,
                      skuId: t.id,
                      analyticsLocations: _ ?? [],
                      onContinue: () => {
                          if (!L.hasFinished)
                              return i(
                                  t,
                                  { isGift: o, giftRecipient: u, giftingOrigin: p, additionalUserIds: h },
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
                : c({
                      discoverySessionId: k,
                      sku: t,
                      analyticsLocations: _ ?? [],
                      isGift: o,
                      giftRecipient: u,
                      giftingOrigin: p,
                      additionalUserIds: h,
                      onCloseCallback: () => {
                          (0, n.ET)(), (0, a.z)(), (0, d.l)(), (L.hasFinished = !0);
                      },
                      onComplete: () => {
                          L.hasFinished = !0;
                      },
                      modalKey: "slayer-payment-modal",
                  });
        },
});
var n = e(391048),
    a = e(636099),
    o = e(529427),
    l = e(174459),
    s = e(832163),
    d = e(556808),
    r = e(652215);
let c = (i) => {
    let {
        discoverySessionId: t,
        sku: e,
        analyticsLocations: n,
        isGift: a,
        giftRecipient: l,
        additionalUserIds: s,
        giftingOrigin: d,
        onCloseCallback: r,
        onComplete: c,
        modalKey: u,
    } = i;
    return o.UnifiedCheckoutFlowManagerSingletons[o.CL.SLAYER_STOREFRONT_CHECKOUT]
        .get()
        .openCheckoutModal({
            checkoutConfiguration: {
                discoverySessionId: t,
                applicationId: e.applicationId,
                skuId: e.id,
                skuProductLine: e.productLine,
            },
            unifiedCheckoutProviderProps: { analyticsLocations: n },
            checkoutHandlers: { onComplete: c },
            giftContextProps: { isGift: a, giftRecipient: l, giftingOrigin: d, additionalUserIds: s },
            modalAPIOptions: { modalKey: u, onCloseCallback: r },
        });
};
