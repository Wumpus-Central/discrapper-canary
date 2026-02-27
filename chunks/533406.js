"use strict";
n.d(t, { a: () => h });
var r = n(835245),
    i = n(391048),
    s = n(636099),
    a = n(608805),
    o = n(120700),
    l = n(589078),
    u = n(954571),
    c = n(832163),
    d = n(179935),
    _ = n(556808),
    f = n(652215);
let p = "slayer-payment-modal";
function h(e, t) {
    let { isGift: n, giftRecipient: l, giftingOrigin: E, additionalUserIds: g } = t,
        {
            analyticsLocations: A,
            guildId: I,
            isEligibilityCheckContinuation: T,
            checkoutState: S,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        y = (0, d.T)({ location: "openSocialLayerStorefrontPaymentModal" }),
        v = c.A.getSKUEligibilityEntry(e.id),
        N = v?.state,
        C = !n && null != I && y && (null == N || "checking" === N || "ineligible" === N);
    if (y && !C && !T) {
        let t = "none";
        n
            ? (t = "gift")
            : null == I
              ? (t = "no_guild")
              : "eligible" === N
                ? (t = "already_eligible")
                : "error" === N && (t = "prior_error"),
            u.default.track(f.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                sku_id: e.id,
                guild_id: I ?? null,
                application_id: e.applicationId,
                is_gift: n,
                eligibility_state: N ?? "none",
                skip_reason: t,
                error_http_status: v?.state === "error" ? (v.httpStatus ?? null) : null,
                location_stack: A,
            });
    }
    let b = S ?? { hasFinished: !1 };
    if (C)
        return void (0, _.L)({
            guildId: I,
            skuId: e.id,
            analyticsLocations: A ?? [],
            onContinue: () => {
                if (!b.hasFinished)
                    return h(
                        e,
                        { isGift: n, giftRecipient: l, giftingOrigin: E, additionalUserIds: g },
                        { analyticsLocations: A, guildId: I, isEligibilityCheckContinuation: !0, checkoutState: b },
                    );
            },
        });
    let R = !1,
        O = (0, r.A)(),
        D = () => {
            if (!R) {
                let t = (0, a.q1)({
                    location: "SocialLayerStorefrontPaymentModal",
                    unifiedCheckoutFlow: o.C.SLAYER_STOREFRONT_CHECKOUT,
                });
                u.default.track(f.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: O,
                    payment_type: f.frM[f.VVm.ONE_TIME],
                    is_gift: n,
                    sku_id: e.id,
                    application_id: e.applicationId,
                    location_stack: A,
                    sku_product_line: e.productLine,
                    checkout_design: t ? a.rS.UNIFIED : a.rS.LEGACY,
                });
            }
            (0, i.ET)(), (0, s.z)(), (0, _.l)(), (b.hasFinished = !0);
        },
        L = () => {
            (R = !0), (b.hasFinished = !0);
        },
        w = {
            loadId: O,
            skuId: e.id,
            applicationId: e.applicationId,
            analyticsLocations: A ?? [],
            isGift: n,
            giftRecipient: l,
            giftingOrigin: E,
            additionalUserIds: g,
            onCloseCallback: D,
            onComplete: L,
            modalKey: p,
        };
    m(w);
}
let m = (e) => {
    let {
        loadId: t,
        applicationId: n,
        skuId: r,
        analyticsLocations: i,
        isGift: s,
        giftRecipient: a,
        additionalUserIds: o,
        giftingOrigin: u,
        onCloseCallback: c,
        onComplete: d,
        modalKey: _,
    } = e;
    return (0, l.KY)().openCheckoutModal({
        loadId: t,
        applicationId: n,
        skuId: r,
        analyticsLocations: i,
        onComplete: d,
        giftContextProps: { isGift: s, giftRecipient: a, giftingOrigin: u, additionalUserIds: o },
        openModalOptions: { modalKey: _, onCloseCallback: c },
    });
};
