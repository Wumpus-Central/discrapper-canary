"use strict";
n.d(t, { a: () => f });
var r = n(835245),
    i = n(391048),
    a = n(636099),
    s = n(589078),
    o = n(954571),
    l = n(832163),
    u = n(179935),
    c = n(556808),
    d = n(652215);
let _ = "slayer-payment-modal";
function f(e, t) {
    let { isGift: n, giftRecipient: s, giftingOrigin: p, additionalUserIds: g } = t,
        {
            analyticsLocations: E,
            guildId: A,
            isEligibilityCheckContinuation: I,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        T = (0, u.T)({ location: "openSocialLayerStorefrontPaymentModal" }),
        y = l.A.getSKUEligibilityEntry(e.id),
        S = y?.state,
        v = !n && null != A && T && (null == S || "checking" === S || "ineligible" === S);
    if (T && !v && !I) {
        let t = "none";
        n
            ? (t = "gift")
            : null == A
              ? (t = "no_guild")
              : "eligible" === S
                ? (t = "already_eligible")
                : "error" === S && (t = "prior_error"),
            o.default.track(d.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                sku_id: e.id,
                guild_id: A ?? null,
                application_id: e.applicationId,
                is_gift: n,
                eligibility_state: S ?? "none",
                skip_reason: t,
                error_http_status: y?.state === "error" ? (y.httpStatus ?? null) : null,
                location_stack: E,
            });
    }
    if (v)
        return void (0, c.L)({
            guildId: A,
            skuId: e.id,
            analyticsLocations: E ?? [],
            onContinue: () =>
                f(
                    e,
                    { isGift: n, giftRecipient: s, giftingOrigin: p, additionalUserIds: g },
                    { analyticsLocations: E, guildId: A, isEligibilityCheckContinuation: !0 },
                ),
        });
    let C = !1,
        b = (0, r.A)(),
        N = () => {
            C ||
                o.default.track(d.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: b,
                    payment_type: d.frM[d.VVm.ONE_TIME],
                    is_gift: n,
                    sku_id: e.id,
                    application_id: e.applicationId,
                    location_stack: E,
                    sku_product_line: e.productLine,
                }),
                (0, i.ET)(),
                (0, a.z)(),
                (0, c.l)();
        },
        R = () => {
            C = !0;
        },
        O = {
            loadId: b,
            skuId: e.id,
            applicationId: e.applicationId,
            analyticsLocations: E ?? [],
            isGift: n,
            giftRecipient: s,
            giftingOrigin: p,
            additionalUserIds: g,
            onCloseCallback: N,
            onComplete: R,
            modalKey: _,
        };
    h(O);
}
let h = (e) => {
    let {
        loadId: t,
        applicationId: n,
        skuId: r,
        analyticsLocations: i,
        isGift: a,
        giftRecipient: o,
        additionalUserIds: l,
        giftingOrigin: u,
        onCloseCallback: c,
        onComplete: d,
        modalKey: _,
    } = e;
    return (0, s.KY)().openCheckoutModal({
        loadId: t,
        applicationId: n,
        skuId: r,
        analyticsLocations: i,
        onComplete: d,
        giftContextProps: { isGift: a, giftRecipient: o, giftingOrigin: u, additionalUserIds: l },
        openModalOptions: { modalKey: _, onCloseCallback: c },
    });
};
