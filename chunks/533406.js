"use strict";
n.d(t, {
    B: () => E,
    a: () =>
        function e(t, n) {
            let { isGift: r, giftRecipient: s, giftingOrigin: u, additionalUserIds: E } = n,
                {
                    discoverySessionId: m,
                    analyticsLocations: g,
                    guildId: A,
                    isEligibilityCheckContinuation: I,
                    checkoutState: T,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                S = _.A.getSKUEligibilityEntry(t.id),
                y = S?.state,
                N = !r && null != A && (null == y || "checking" === y || "ineligible" === y);
            if (!N && !I) {
                let e = "none";
                r
                    ? (e = "gift")
                    : null == A
                      ? (e = "no_guild")
                      : "eligible" === y
                        ? (e = "already_eligible")
                        : "error" === y && (e = "prior_error"),
                    d.default.track(p.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: A ?? null,
                        application_id: t.applicationId,
                        is_gift: r,
                        eligibility_state: y ?? "none",
                        skip_reason: e,
                        error_http_status: S?.state === "error" ? (S.httpStatus ?? null) : null,
                        location_stack: g,
                    });
            }
            let v = T ?? { hasFinished: !1 };
            if (N)
                return void (0, f.L)({
                    guildId: A,
                    skuId: t.id,
                    analyticsLocations: g ?? [],
                    onContinue: () => {
                        if (!v.hasFinished)
                            return e(
                                t,
                                { isGift: r, giftRecipient: s, giftingOrigin: u, additionalUserIds: E },
                                {
                                    discoverySessionId: m,
                                    analyticsLocations: g,
                                    guildId: A,
                                    isEligibilityCheckContinuation: !0,
                                    checkoutState: v,
                                },
                            );
                    },
                });
            let C = !1,
                O = (0, i.A)();
            h({
                loadId: O,
                discoverySessionId: m,
                skuId: t.id,
                applicationId: t.applicationId,
                analyticsLocations: g ?? [],
                isGift: r,
                giftRecipient: s,
                giftingOrigin: u,
                additionalUserIds: E,
                onCloseCallback: () => {
                    if (!C) {
                        let e = (0, c.q1)({
                            location: "SocialLayerStorefrontPaymentModal",
                            unifiedCheckoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                        d.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                            load_id: O,
                            discovery_session_id: m,
                            payment_type: p.frM[p.VVm.ONE_TIME],
                            is_gift: r,
                            sku_id: t.id,
                            application_id: t.applicationId,
                            location_stack: g,
                            sku_product_line: t.productLine,
                            checkout_design: e ? c.rS.UNIFIED : c.rS.LEGACY,
                            checkout_flow: l.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                    }
                    (0, a.ET)(), (0, o.z)(), (0, f.l)(), (v.hasFinished = !0);
                },
                onComplete: () => {
                    (C = !0), (v.hasFinished = !0);
                },
                modalKey: "slayer-payment-modal",
            });
        },
});
var r = n(627968),
    i = n(835245),
    s = n(192308),
    a = n(391048),
    o = n(636099),
    l = n(120700),
    u = n(589078),
    c = n(742810),
    d = n(954571),
    _ = n(832163),
    f = n(556808),
    p = n(652215);
let h = (e) => {
    let {
        loadId: t,
        discoverySessionId: n,
        applicationId: r,
        skuId: i,
        analyticsLocations: s,
        isGift: a,
        giftRecipient: o,
        additionalUserIds: l,
        giftingOrigin: c,
        onCloseCallback: d,
        onComplete: _,
        modalKey: f,
    } = e;
    return (0, u.KY)().openCheckoutModal({
        loadId: t,
        discoverySessionId: n,
        applicationId: r,
        skuId: i,
        analyticsLocations: s,
        onComplete: _,
        giftContextProps: { isGift: a, giftRecipient: o, giftingOrigin: c, additionalUserIds: l },
        openModalOptions: { modalKey: f, onCloseCallback: d },
    });
};
function E() {
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await n.e("29638").then(n.bind(n, 960997));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
