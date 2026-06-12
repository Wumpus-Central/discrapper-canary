e.d(t, {
    a: () =>
        function i(t, e) {
            let { isGift: l, giftRecipient: p, giftingOrigin: u, additionalUserIds: h } = e,
                {
                    discoverySessionId: _,
                    analyticsLocations: k,
                    guildId: g,
                    isEligibilityCheckContinuation: C,
                    checkoutState: I,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                E = s.A.getSKUEligibilityEntry(t.id),
                y = E?.state,
                L = !l && (null == y || "checking" === y || "ineligible" === y);
            if (!L && !C) {
                let i = "none";
                l ? (i = "gift") : "eligible" === y ? (i = "already_eligible") : "error" === y && (i = "prior_error"),
                    o.default.track(r.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: g ?? null,
                        application_id: t.applicationId,
                        is_gift: l,
                        eligibility_state: y ?? "none",
                        skip_reason: i,
                        error_http_status: E?.state === "error" ? (E.httpStatus ?? null) : null,
                        location_stack: k,
                    });
            }
            let S = I ?? { hasFinished: !1 };
            L
                ? (0, d.L)({
                      guildId: g,
                      applicationId: t.applicationId,
                      skuId: t.id,
                      analyticsLocations: k ?? [],
                      onContinue: () => {
                          if (!S.hasFinished)
                              return i(
                                  t,
                                  { isGift: l, giftRecipient: p, giftingOrigin: u, additionalUserIds: h },
                                  {
                                      discoverySessionId: _,
                                      analyticsLocations: k,
                                      guildId: g,
                                      isEligibilityCheckContinuation: !0,
                                      checkoutState: S,
                                  },
                              );
                      },
                  })
                : c({
                      discoverySessionId: _,
                      sku: t,
                      analyticsLocations: k ?? [],
                      isGift: l,
                      giftRecipient: p,
                      giftingOrigin: u,
                      additionalUserIds: h,
                      onCloseCallback: () => {
                          (0, a.ET)(), (0, n.z)(), (0, d.l)(), (S.hasFinished = !0);
                      },
                      onComplete: () => {
                          S.hasFinished = !0;
                      },
                      modalKey: "slayer-payment-modal",
                  });
        },
});
var a = e(391048),
    n = e(636099),
    l = e(529427),
    o = e(174459),
    s = e(832163),
    d = e(556808),
    r = e(652215);
let c = (i) => {
    let {
        discoverySessionId: t,
        sku: e,
        analyticsLocations: a,
        isGift: n,
        giftRecipient: o,
        additionalUserIds: s,
        giftingOrigin: d,
        onCloseCallback: r,
        onComplete: c,
        modalKey: p,
    } = i;
    return l.UnifiedCheckoutFlowManagerSingletons[l.CL.SLAYER_STOREFRONT_CHECKOUT]
        .get()
        .openCheckoutModal({
            discoverySessionId: t,
            applicationId: e.applicationId,
            skuId: e.id,
            skuProductLine: e.productLine,
            analyticsLocations: a,
            onComplete: c,
            giftContextProps: { isGift: n, giftRecipient: o, giftingOrigin: d, additionalUserIds: s },
            modalAPIOptions: { modalKey: p, onCloseCallback: r },
        });
};
