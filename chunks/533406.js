n.d(t, {
    B: () => m,
    a: () =>
        function e(t, n) {
            let { isGift: r, giftRecipient: a, giftingOrigin: u, additionalUserIds: m } = n,
                {
                    discoverySessionId: _,
                    analyticsLocations: E,
                    guildId: C,
                    isEligibilityCheckContinuation: g,
                    checkoutState: A,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                w = h.A.getSKUEligibilityEntry(t.id),
                k = w?.state,
                v = !r && null != C && (null == k || "checking" === k || "ineligible" === k);
            if (!v && !g) {
                let e = "none";
                r
                    ? (e = "gift")
                    : null == C
                      ? (e = "no_guild")
                      : "eligible" === k
                        ? (e = "already_eligible")
                        : "error" === k && (e = "prior_error"),
                    c.default.track(p.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: C ?? null,
                        application_id: t.applicationId,
                        is_gift: r,
                        eligibility_state: k ?? "none",
                        skip_reason: e,
                        error_http_status: w?.state === "error" ? (w.httpStatus ?? null) : null,
                        location_stack: E,
                    });
            }
            let M = A ?? { hasFinished: !1 };
            if (v)
                return void (0, y.L)({
                    guildId: C,
                    skuId: t.id,
                    analyticsLocations: E ?? [],
                    onContinue: () => {
                        if (!M.hasFinished)
                            return e(
                                t,
                                { isGift: r, giftRecipient: a, giftingOrigin: u, additionalUserIds: m },
                                {
                                    discoverySessionId: _,
                                    analyticsLocations: E,
                                    guildId: C,
                                    isEligibilityCheckContinuation: !0,
                                    checkoutState: M,
                                },
                            );
                    },
                });
            let S = !1,
                I = (0, i.A)();
            f({
                loadId: I,
                discoverySessionId: _,
                skuId: t.id,
                applicationId: t.applicationId,
                analyticsLocations: E ?? [],
                isGift: r,
                giftRecipient: a,
                giftingOrigin: u,
                additionalUserIds: m,
                onCloseCallback: () => {
                    if (!S) {
                        let e = (0, d.q1)({
                            location: "SocialLayerStorefrontPaymentModal",
                            unifiedCheckoutFlow: s.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                        c.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                            load_id: I,
                            discovery_session_id: _,
                            payment_type: p.frM[p.VVm.ONE_TIME],
                            is_gift: r,
                            sku_id: t.id,
                            application_id: t.applicationId,
                            location_stack: E,
                            sku_product_line: t.productLine,
                            checkout_design: e ? d.rS.UNIFIED : d.rS.LEGACY,
                            checkout_flow: s.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                    }
                    (0, l.ET)(), (0, o.z)(), (0, y.l)(), (M.hasFinished = !0);
                },
                onComplete: () => {
                    (S = !0), (M.hasFinished = !0);
                },
                modalKey: "slayer-payment-modal",
            });
        },
});
var r = n(627968),
    i = n(132500),
    a = n(192308),
    l = n(391048),
    o = n(636099),
    s = n(120700),
    u = n(226991),
    d = n(742810),
    c = n(954571),
    h = n(832163),
    y = n(556808),
    p = n(652215);
let f = (e) => {
    let {
        loadId: t,
        discoverySessionId: n,
        applicationId: r,
        skuId: i,
        analyticsLocations: a,
        isGift: l,
        giftRecipient: o,
        additionalUserIds: s,
        giftingOrigin: d,
        onCloseCallback: c,
        onComplete: h,
        modalKey: y,
    } = e;
    return (0, u.KY)().openCheckoutModal({
        loadId: t,
        discoverySessionId: n,
        applicationId: r,
        skuId: i,
        analyticsLocations: a,
        onComplete: h,
        giftContextProps: { isGift: l, giftRecipient: o, giftingOrigin: d, additionalUserIds: s },
        openModalOptions: { modalKey: y, onCloseCallback: c },
    });
};
function m() {
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await n.e("26388").then(n.bind(n, 297187));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
