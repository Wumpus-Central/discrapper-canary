e.d(t, {
    a: () =>
        function i(t, e) {
            let { isGift: a, giftRecipient: c, giftingOrigin: p, additionalUserIds: h } = e,
                {
                    discoverySessionId: _,
                    analyticsLocations: g,
                    guildId: k,
                    isEligibilityCheckContinuation: C,
                    checkoutState: E,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                I = s.A.getSKUEligibilityEntry(t.id),
                y = I?.state,
                L = !a && null != k && (null == y || "checking" === y || "ineligible" === y);
            if (!L && !C) {
                let i = "none";
                a
                    ? (i = "gift")
                    : null == k
                      ? (i = "no_guild")
                      : "eligible" === y
                        ? (i = "already_eligible")
                        : "error" === y && (i = "prior_error"),
                    o.default.track(r.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: k ?? null,
                        application_id: t.applicationId,
                        is_gift: a,
                        eligibility_state: y ?? "none",
                        skip_reason: i,
                        error_http_status: I?.state === "error" ? (I.httpStatus ?? null) : null,
                        location_stack: g,
                    });
            }
            let b = E ?? { hasFinished: !1 };
            L
                ? (0, d.L)({
                      guildId: k,
                      skuId: t.id,
                      analyticsLocations: g ?? [],
                      onContinue: () => {
                          if (!b.hasFinished)
                              return i(
                                  t,
                                  { isGift: a, giftRecipient: c, giftingOrigin: p, additionalUserIds: h },
                                  {
                                      discoverySessionId: _,
                                      analyticsLocations: g,
                                      guildId: k,
                                      isEligibilityCheckContinuation: !0,
                                      checkoutState: b,
                                  },
                              );
                      },
                  })
                : u({
                      discoverySessionId: _,
                      sku: t,
                      analyticsLocations: g ?? [],
                      isGift: a,
                      giftRecipient: c,
                      giftingOrigin: p,
                      additionalUserIds: h,
                      onCloseCallback: () => {
                          (0, l.ET)(), (0, n.z)(), (0, d.l)(), (b.hasFinished = !0);
                      },
                      onComplete: () => {
                          b.hasFinished = !0;
                      },
                      modalKey: "slayer-payment-modal",
                  });
        },
});
var l = e(391048),
    n = e(636099),
    a = e(155506),
    o = e(174459),
    s = e(832163),
    d = e(556808),
    r = e(652215);
let u = (i) => {
    let {
        discoverySessionId: t,
        sku: e,
        analyticsLocations: l,
        isGift: n,
        giftRecipient: o,
        additionalUserIds: s,
        giftingOrigin: d,
        onCloseCallback: r,
        onComplete: u,
        modalKey: c,
    } = i;
    return a.oE[a.CL.SLAYER_STOREFRONT_CHECKOUT]
        .get()
        .openCheckoutModal({
            discoverySessionId: t,
            applicationId: e.applicationId,
            skuId: e.id,
            skuProductLine: e.productLine,
            analyticsLocations: l,
            onComplete: u,
            giftContextProps: { isGift: n, giftRecipient: o, giftingOrigin: d, additionalUserIds: s },
            modalAPIOptions: { modalKey: c, onCloseCallback: r },
        });
};
