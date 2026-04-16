"use strict";
n.d(t, { a: () => p });
var r = n(835245),
    i = n(391048),
    s = n(636099),
    a = n(120700),
    o = n(589078),
    l = n(742810),
    u = n(954571),
    c = n(832163),
    d = n(556808),
    _ = n(652215);
let f = "slayer-payment-modal";
function p(e, t) {
    let { isGift: n, giftRecipient: o, giftingOrigin: m, additionalUserIds: E } = t,
        {
            discoverySessionId: g,
            analyticsLocations: A,
            guildId: I,
            isEligibilityCheckContinuation: T,
            checkoutState: S,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        y = c.A.getSKUEligibilityEntry(e.id),
        v = y?.state,
        N = !n && null != I && (null == v || "checking" === v || "ineligible" === v);
    if (!N && !T) {
        let t = "none";
        n
            ? (t = "gift")
            : null == I
              ? (t = "no_guild")
              : "eligible" === v
                ? (t = "already_eligible")
                : "error" === v && (t = "prior_error"),
            u.default.track(_.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                sku_id: e.id,
                guild_id: I ?? null,
                application_id: e.applicationId,
                is_gift: n,
                eligibility_state: v ?? "none",
                skip_reason: t,
                error_http_status: y?.state === "error" ? (y.httpStatus ?? null) : null,
                location_stack: A,
            });
    }
    let C = S ?? { hasFinished: !1 };
    if (N)
        return void (0, d.L)({
            guildId: I,
            skuId: e.id,
            analyticsLocations: A ?? [],
            onContinue: () => {
                if (!C.hasFinished)
                    return p(
                        e,
                        { isGift: n, giftRecipient: o, giftingOrigin: m, additionalUserIds: E },
                        {
                            discoverySessionId: g,
                            analyticsLocations: A,
                            guildId: I,
                            isEligibilityCheckContinuation: !0,
                            checkoutState: C,
                        },
                    );
            },
        });
    let R = !1,
        O = (0, r.A)(),
        b = () => {
            if (!R) {
                let t = (0, l.q1)({
                    location: "SocialLayerStorefrontPaymentModal",
                    unifiedCheckoutFlow: a.C.SLAYER_STOREFRONT_CHECKOUT,
                });
                u.default.track(_.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: O,
                    discovery_session_id: g,
                    payment_type: _.frM[_.VVm.ONE_TIME],
                    is_gift: n,
                    sku_id: e.id,
                    application_id: e.applicationId,
                    location_stack: A,
                    sku_product_line: e.productLine,
                    checkout_design: t ? l.rS.UNIFIED : l.rS.LEGACY,
                    checkout_flow: a.C.SLAYER_STOREFRONT_CHECKOUT,
                });
            }
            (0, i.ET)(), (0, s.z)(), (0, d.l)(), (C.hasFinished = !0);
        },
        D = () => {
            (R = !0), (C.hasFinished = !0);
        },
        L = {
            loadId: O,
            discoverySessionId: g,
            skuId: e.id,
            applicationId: e.applicationId,
            analyticsLocations: A ?? [],
            isGift: n,
            giftRecipient: o,
            giftingOrigin: m,
            additionalUserIds: E,
            onCloseCallback: b,
            onComplete: D,
            modalKey: f,
        };
    h(L);
}
let h = (e) => {
    let {
        loadId: t,
        discoverySessionId: n,
        applicationId: r,
        skuId: i,
        analyticsLocations: s,
        isGift: a,
        giftRecipient: l,
        additionalUserIds: u,
        giftingOrigin: c,
        onCloseCallback: d,
        onComplete: _,
        modalKey: f,
    } = e;
    return (0, o.KY)().openCheckoutModal({
        loadId: t,
        discoverySessionId: n,
        applicationId: r,
        skuId: i,
        analyticsLocations: s,
        onComplete: _,
        giftContextProps: { isGift: a, giftRecipient: l, giftingOrigin: c, additionalUserIds: u },
        openModalOptions: { modalKey: f, onCloseCallback: d },
    });
};
