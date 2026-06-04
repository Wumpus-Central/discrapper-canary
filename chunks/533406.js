e.d(t, {
    a: () =>
        function i(t, e) {
            let { isGift: n, giftRecipient: c, giftingOrigin: u, additionalUserIds: h } = e,
                {
                    discoverySessionId: _,
                    analyticsLocations: k,
                    guildId: g,
                    isEligibilityCheckContinuation: C,
                    checkoutState: E,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                I = s.A.getSKUEligibilityEntry(t.id),
                y = I?.state,
                L = !n && (null == y || "checking" === y || "ineligible" === y);
            if (!L && !C) {
                let i = "none";
                n ? (i = "gift") : "eligible" === y ? (i = "already_eligible") : "error" === y && (i = "prior_error"),
                    o.default.track(r.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: g ?? null,
                        application_id: t.applicationId,
                        is_gift: n,
                        eligibility_state: y ?? "none",
                        skip_reason: i,
                        error_http_status: I?.state === "error" ? (I.httpStatus ?? null) : null,
                        location_stack: k,
                    });
            }
            let b = E ?? { hasFinished: !1 };
            L
                ? (0, d.L)({
                      guildId: g,
                      applicationId: t.applicationId,
                      skuId: t.id,
                      analyticsLocations: k ?? [],
                      onContinue: () => {
                          if (!b.hasFinished)
                              return i(
                                  t,
                                  { isGift: n, giftRecipient: c, giftingOrigin: u, additionalUserIds: h },
                                  {
                                      discoverySessionId: _,
                                      analyticsLocations: k,
                                      guildId: g,
                                      isEligibilityCheckContinuation: !0,
                                      checkoutState: b,
                                  },
                              );
                      },
                  })
                : p({
                      discoverySessionId: _,
                      sku: t,
                      analyticsLocations: k ?? [],
                      isGift: n,
                      giftRecipient: c,
                      giftingOrigin: u,
                      additionalUserIds: h,
                      onCloseCallback: () => {
                          (0, a.ET)(), (0, l.z)(), (0, d.l)(), (b.hasFinished = !0);
                      },
                      onComplete: () => {
                          b.hasFinished = !0;
                      },
                      modalKey: "slayer-payment-modal",
                  });
        },
});
var a = e(391048),
    l = e(636099),
    n = e(813730),
    o = e(174459),
    s = e(832163),
    d = e(556808),
    r = e(652215);
let p = (i) => {
    let {
        discoverySessionId: t,
        sku: e,
        analyticsLocations: a,
        isGift: l,
        giftRecipient: o,
        additionalUserIds: s,
        giftingOrigin: d,
        onCloseCallback: r,
        onComplete: p,
        modalKey: c,
    } = i;
    return n.oE[n.CL.SLAYER_STOREFRONT_CHECKOUT]
        .get()
        .openCheckoutModal({
            discoverySessionId: t,
            applicationId: e.applicationId,
            skuId: e.id,
            skuProductLine: e.productLine,
            analyticsLocations: a,
            onComplete: p,
            giftContextProps: { isGift: l, giftRecipient: o, giftingOrigin: d, additionalUserIds: s },
            modalAPIOptions: { modalKey: c, onCloseCallback: r },
        });
};
