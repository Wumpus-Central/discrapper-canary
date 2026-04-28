e.d(t, {
    a: () =>
        function i(t, e) {
            let { isGift: n, giftRecipient: a, giftingOrigin: r, additionalUserIds: E } = e,
                {
                    discoverySessionId: C,
                    analyticsLocations: y,
                    guildId: f,
                    isEligibilityCheckContinuation: g,
                    checkoutState: S,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                I = _.A.getSKUEligibilityEntry(t.id),
                L = I?.state,
                m = !n && null != f && (null == L || "checking" === L || "ineligible" === L);
            if (!m && !g) {
                let i = "none";
                n
                    ? (i = "gift")
                    : null == f
                      ? (i = "no_guild")
                      : "eligible" === L
                        ? (i = "already_eligible")
                        : "error" === L && (i = "prior_error"),
                    u.default.track(h.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: f ?? null,
                        application_id: t.applicationId,
                        is_gift: n,
                        eligibility_state: L ?? "none",
                        skip_reason: i,
                        error_http_status: I?.state === "error" ? (I.httpStatus ?? null) : null,
                        location_stack: y,
                    });
            }
            let A = S ?? { hasFinished: !1 };
            if (m)
                return void (0, p.L)({
                    guildId: f,
                    skuId: t.id,
                    analyticsLocations: y ?? [],
                    onContinue: () => {
                        if (!A.hasFinished)
                            return i(
                                t,
                                { isGift: n, giftRecipient: a, giftingOrigin: r, additionalUserIds: E },
                                {
                                    discoverySessionId: C,
                                    analyticsLocations: y,
                                    guildId: f,
                                    isEligibilityCheckContinuation: !0,
                                    checkoutState: A,
                                },
                            );
                    },
                });
            let T = !1,
                O = (0, o.A)();
            k({
                loadId: O,
                discoverySessionId: C,
                skuId: t.id,
                applicationId: t.applicationId,
                analyticsLocations: y ?? [],
                isGift: n,
                giftRecipient: a,
                giftingOrigin: r,
                additionalUserIds: E,
                onCloseCallback: () => {
                    if (!T) {
                        let i = (0, c.q1)({
                            location: "SocialLayerStorefrontPaymentModal",
                            unifiedCheckoutFlow: s.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                        u.default.track(h.HAw.PAYMENT_FLOW_CANCELED, {
                            load_id: O,
                            discovery_session_id: C,
                            payment_type: h.frM[h.VVm.ONE_TIME],
                            is_gift: n,
                            sku_id: t.id,
                            application_id: t.applicationId,
                            location_stack: y,
                            sku_product_line: t.productLine,
                            checkout_design: i ? c.rS.UNIFIED : c.rS.LEGACY,
                            checkout_flow: s.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                    }
                    (0, l.ET)(), (0, d.z)(), (0, p.l)(), (A.hasFinished = !0);
                },
                onComplete: () => {
                    (T = !0), (A.hasFinished = !0);
                },
                modalKey: "slayer-payment-modal",
            });
        },
    openSocialLayerStorefrontAnnouncementModal: () => E,
});
var n = e(627968),
    o = e(132500),
    a = e(192308),
    l = e(391048),
    d = e(636099),
    s = e(120700),
    r = e(226991),
    c = e(742810),
    u = e(954571),
    _ = e(832163),
    p = e(556808),
    h = e(652215);
let k = (i) => {
    let {
        loadId: t,
        discoverySessionId: e,
        applicationId: n,
        skuId: o,
        analyticsLocations: a,
        isGift: l,
        giftRecipient: d,
        additionalUserIds: s,
        giftingOrigin: c,
        onCloseCallback: u,
        onComplete: _,
        modalKey: p,
    } = i;
    return (0, r.KY)().openCheckoutModal({
        loadId: t,
        discoverySessionId: e,
        applicationId: n,
        skuId: o,
        analyticsLocations: a,
        onComplete: _,
        giftContextProps: { isGift: l, giftRecipient: d, giftingOrigin: c, additionalUserIds: s },
        openModalOptions: { modalKey: p, onCloseCallback: u },
    });
};
function E() {
    (0, a.openModalLazy)(
        async () => {
            let { default: i } = await Promise.all([e.e("63292"), e.e("60658"), e.e("26388")]).then(e.bind(e, 297187));
            return (t) => (0, n.jsx)(i, { ...t });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
