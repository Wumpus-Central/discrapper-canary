e.d(t, {
    a: () =>
        function i(t, e) {
            let { isGift: n, giftRecipient: l, giftingOrigin: s, additionalUserIds: h } = e,
                {
                    discoverySessionId: _,
                    analyticsLocations: g,
                    guildId: k,
                    isEligibilityCheckContinuation: y,
                    checkoutState: C,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                E = r.A.getSKUEligibilityEntry(t.id),
                I = E?.state,
                L = !n && null != k && (null == I || "checking" === I || "ineligible" === I);
            if (!L && !y) {
                let i = "none";
                n
                    ? (i = "gift")
                    : null == k
                      ? (i = "no_guild")
                      : "eligible" === I
                        ? (i = "already_eligible")
                        : "error" === I && (i = "prior_error"),
                    d.default.track(c.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: k ?? null,
                        application_id: t.applicationId,
                        is_gift: n,
                        eligibility_state: I ?? "none",
                        skip_reason: i,
                        error_http_status: E?.state === "error" ? (E.httpStatus ?? null) : null,
                        location_stack: g,
                    });
            }
            let f = C ?? { hasFinished: !1 };
            L
                ? (0, u.L)({
                      guildId: k,
                      skuId: t.id,
                      analyticsLocations: g ?? [],
                      onContinue: () => {
                          if (!f.hasFinished)
                              return i(
                                  t,
                                  { isGift: n, giftRecipient: l, giftingOrigin: s, additionalUserIds: h },
                                  {
                                      discoverySessionId: _,
                                      analyticsLocations: g,
                                      guildId: k,
                                      isEligibilityCheckContinuation: !0,
                                      checkoutState: f,
                                  },
                              );
                      },
                  })
                : p({
                      discoverySessionId: _,
                      sku: t,
                      analyticsLocations: g ?? [],
                      isGift: n,
                      giftRecipient: l,
                      giftingOrigin: s,
                      additionalUserIds: h,
                      onCloseCallback: () => {
                          (0, a.ET)(), (0, o.z)(), (0, u.l)(), (f.hasFinished = !0);
                      },
                      onComplete: () => {
                          f.hasFinished = !0;
                      },
                      modalKey: "slayer-payment-modal",
                  });
        },
    openSocialLayerStorefrontAnnouncementModal: () => h,
});
var n = e(627968),
    l = e(192308),
    a = e(391048),
    o = e(636099),
    s = e(210561),
    d = e(174459),
    r = e(832163),
    u = e(556808),
    c = e(652215);
let p = (i) => {
    let {
        discoverySessionId: t,
        sku: e,
        analyticsLocations: n,
        isGift: l,
        giftRecipient: a,
        additionalUserIds: o,
        giftingOrigin: d,
        onCloseCallback: r,
        onComplete: u,
        modalKey: c,
    } = i;
    return s.oE[s.CL.SLAYER_STOREFRONT_CHECKOUT]
        .get()
        .openCheckoutModal({
            discoverySessionId: t,
            applicationId: e.applicationId,
            skuId: e.id,
            skuProductLine: e.productLine,
            analyticsLocations: n,
            onComplete: u,
            giftContextProps: { isGift: l, giftRecipient: a, giftingOrigin: d, additionalUserIds: o },
            modalAPIOptions: { modalKey: c, onCloseCallback: r },
        });
};
function h() {
    (0, l.openModalLazy)(
        async () => {
            let { default: i } = await Promise.all([e.e("63292"), e.e("26388")]).then(e.bind(e, 297187));
            return (t) => (0, n.jsx)(i, { ...t });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
