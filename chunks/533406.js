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
            analyticsLocations: g,
            guildId: A,
            isEligibilityCheckContinuation: I,
            checkoutState: T,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        S = c.A.getSKUEligibilityEntry(e.id),
        y = S?.state,
        v = !n && null != A && (null == y || "checking" === y || "ineligible" === y);
    if (!v && !I) {
        let t = "none";
        n
            ? (t = "gift")
            : null == A
              ? (t = "no_guild")
              : "eligible" === y
                ? (t = "already_eligible")
                : "error" === y && (t = "prior_error"),
            u.default.track(_.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                sku_id: e.id,
                guild_id: A ?? null,
                application_id: e.applicationId,
                is_gift: n,
                eligibility_state: y ?? "none",
                skip_reason: t,
                error_http_status: S?.state === "error" ? (S.httpStatus ?? null) : null,
                location_stack: g,
            });
    }
    let N = T ?? { hasFinished: !1 };
    if (v)
        return void (0, d.L)({
            guildId: A,
            skuId: e.id,
            analyticsLocations: g ?? [],
            onContinue: () => {
                if (!N.hasFinished)
                    return p(
                        e,
                        { isGift: n, giftRecipient: o, giftingOrigin: m, additionalUserIds: E },
                        { analyticsLocations: g, guildId: A, isEligibilityCheckContinuation: !0, checkoutState: N },
                    );
            },
        });
    let C = !1,
        R = (0, r.A)(),
        O = () => {
            if (!C) {
                let t = (0, l.q1)({
                    location: "SocialLayerStorefrontPaymentModal",
                    unifiedCheckoutFlow: a.C.SLAYER_STOREFRONT_CHECKOUT,
                });
                u.default.track(_.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: R,
                    payment_type: _.frM[_.VVm.ONE_TIME],
                    is_gift: n,
                    sku_id: e.id,
                    application_id: e.applicationId,
                    location_stack: g,
                    sku_product_line: e.productLine,
                    checkout_design: t ? l.rS.UNIFIED : l.rS.LEGACY,
                    checkout_flow: a.C.SLAYER_STOREFRONT_CHECKOUT,
                });
            }
            (0, i.ET)(), (0, s.z)(), (0, d.l)(), (N.hasFinished = !0);
        },
        b = () => {
            (C = !0), (N.hasFinished = !0);
        },
        D = {
            loadId: R,
            skuId: e.id,
            applicationId: e.applicationId,
            analyticsLocations: g ?? [],
            isGift: n,
            giftRecipient: o,
            giftingOrigin: m,
            additionalUserIds: E,
            onCloseCallback: O,
            onComplete: b,
            modalKey: f,
        };
    h(D);
}
let h = (e) => {
    let {
        loadId: t,
        applicationId: n,
        skuId: r,
        analyticsLocations: i,
        isGift: s,
        giftRecipient: a,
        additionalUserIds: l,
        giftingOrigin: u,
        onCloseCallback: c,
        onComplete: d,
        modalKey: _,
    } = e;
    return (0, o.KY)().openCheckoutModal({
        loadId: t,
        applicationId: n,
        skuId: r,
        analyticsLocations: i,
        onComplete: d,
        giftContextProps: { isGift: s, giftRecipient: a, giftingOrigin: u, additionalUserIds: l },
        openModalOptions: { modalKey: _, onCloseCallback: c },
    });
};
