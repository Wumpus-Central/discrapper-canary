n.d(t, {
    a: () =>
        function e(t, n) {
            let { isGift: r, giftRecipient: _, giftingOrigin: m, additionalUserIds: g } = n,
                {
                    discoverySessionId: p,
                    analyticsLocations: f,
                    guildId: E,
                    isEligibilityCheckContinuation: x,
                    checkoutState: I,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                C = c.A.getSKUEligibilityEntry(t.id),
                b = C?.state,
                N = !r && null != E && (null == b || "checking" === b || "ineligible" === b);
            if (!N && !x) {
                let e = "none";
                r
                    ? (e = "gift")
                    : null == E
                      ? (e = "no_guild")
                      : "eligible" === b
                        ? (e = "already_eligible")
                        : "error" === b && (e = "prior_error"),
                    d.default.track(h.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: E ?? null,
                        application_id: t.applicationId,
                        is_gift: r,
                        eligibility_state: b ?? "none",
                        skip_reason: e,
                        error_http_status: C?.state === "error" ? (C.httpStatus ?? null) : null,
                        location_stack: f,
                    });
            }
            let S = I ?? { hasFinished: !1 };
            if (N)
                return void (0, u.L)({
                    guildId: E,
                    skuId: t.id,
                    analyticsLocations: f ?? [],
                    onContinue: () => {
                        if (!S.hasFinished)
                            return e(
                                t,
                                { isGift: r, giftRecipient: _, giftingOrigin: m, additionalUserIds: g },
                                {
                                    discoverySessionId: p,
                                    analyticsLocations: f,
                                    guildId: E,
                                    isEligibilityCheckContinuation: !0,
                                    checkoutState: S,
                                },
                            );
                    },
                });
            let v = !1,
                T = (0, i.A)();
            A({
                loadId: T,
                discoverySessionId: p,
                skuId: t.id,
                applicationId: t.applicationId,
                analyticsLocations: f ?? [],
                isGift: r,
                giftRecipient: _,
                giftingOrigin: m,
                additionalUserIds: g,
                onCloseCallback: () => {
                    if (!v) {
                        let e = (0, o.q1)({
                            location: "SocialLayerStorefrontPaymentModal",
                            unifiedCheckoutFlow: a.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                        d.default.track(h.HAw.PAYMENT_FLOW_CANCELED, {
                            load_id: T,
                            discovery_session_id: p,
                            payment_type: h.frM[h.VVm.ONE_TIME],
                            is_gift: r,
                            sku_id: t.id,
                            application_id: t.applicationId,
                            location_stack: f,
                            sku_product_line: t.productLine,
                            checkout_design: e ? o.rS.UNIFIED : o.rS.LEGACY,
                            checkout_flow: a.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                    }
                    (0, l.ET)(), (0, s.z)(), (0, u.l)(), (S.hasFinished = !0);
                },
                onComplete: () => {
                    (v = !0), (S.hasFinished = !0);
                },
                modalKey: "slayer-payment-modal",
            });
        },
});
var i = n(835245),
    l = n(391048),
    s = n(636099),
    a = n(120700),
    r = n(589078),
    o = n(742810),
    d = n(954571),
    c = n(832163),
    u = n(556808),
    h = n(652215);
let A = (e) => {
    let {
        loadId: t,
        discoverySessionId: n,
        applicationId: i,
        skuId: l,
        analyticsLocations: s,
        isGift: a,
        giftRecipient: o,
        additionalUserIds: d,
        giftingOrigin: c,
        onCloseCallback: u,
        onComplete: h,
        modalKey: A,
    } = e;
    return (0, r.KY)().openCheckoutModal({
        loadId: t,
        discoverySessionId: n,
        applicationId: i,
        skuId: l,
        analyticsLocations: s,
        onComplete: h,
        giftContextProps: { isGift: a, giftRecipient: o, giftingOrigin: c, additionalUserIds: d },
        openModalOptions: { modalKey: A, onCloseCallback: u },
    });
};
