"use strict";
n.d(t, { a: () => f });
var r = n(835245),
    i = n(391048),
    s = n(636099),
    a = n(589078),
    o = n(954571),
    l = n(832163),
    u = n(179935),
    c = n(556808),
    d = n(652215);
let _ = "slayer-payment-modal";
function f(e, t) {
    let { isGift: n, giftRecipient: a, giftingOrigin: h, additionalUserIds: m } = t,
        {
            analyticsLocations: E,
            guildId: g,
            isEligibilityCheckContinuation: A,
            checkoutState: I,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        T = (0, u.T)({ location: "openSocialLayerStorefrontPaymentModal" }),
        S = l.A.getSKUEligibilityEntry(e.id),
        y = S?.state,
        v = !n && null != g && T && (null == y || "checking" === y || "ineligible" === y);
    if (T && !v && !A) {
        let t = "none";
        n
            ? (t = "gift")
            : null == g
              ? (t = "no_guild")
              : "eligible" === y
                ? (t = "already_eligible")
                : "error" === y && (t = "prior_error"),
            o.default.track(d.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                sku_id: e.id,
                guild_id: g ?? null,
                application_id: e.applicationId,
                is_gift: n,
                eligibility_state: y ?? "none",
                skip_reason: t,
                error_http_status: S?.state === "error" ? (S.httpStatus ?? null) : null,
                location_stack: E,
            });
    }
    let N = I ?? { hasFinished: !1 };
    if (v)
        return void (0, c.L)({
            guildId: g,
            skuId: e.id,
            analyticsLocations: E ?? [],
            onContinue: () => {
                if (!N.hasFinished)
                    return f(
                        e,
                        { isGift: n, giftRecipient: a, giftingOrigin: h, additionalUserIds: m },
                        { analyticsLocations: E, guildId: g, isEligibilityCheckContinuation: !0, checkoutState: N },
                    );
            },
        });
    let C = !1,
        b = (0, r.A)(),
        R = () => {
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
                (0, s.z)(),
                (0, c.l)(),
                (N.hasFinished = !0);
        },
        O = () => {
            (C = !0), (N.hasFinished = !0);
        },
        D = {
            loadId: b,
            skuId: e.id,
            applicationId: e.applicationId,
            analyticsLocations: E ?? [],
            isGift: n,
            giftRecipient: a,
            giftingOrigin: h,
            additionalUserIds: m,
            onCloseCallback: R,
            onComplete: O,
            modalKey: _,
        };
    p(D);
}
let p = (e) => {
    let {
        loadId: t,
        applicationId: n,
        skuId: r,
        analyticsLocations: i,
        isGift: s,
        giftRecipient: o,
        additionalUserIds: l,
        giftingOrigin: u,
        onCloseCallback: c,
        onComplete: d,
        modalKey: _,
    } = e;
    return (0, a.KY)().openCheckoutModal({
        loadId: t,
        applicationId: n,
        skuId: r,
        analyticsLocations: i,
        onComplete: d,
        giftContextProps: { isGift: s, giftRecipient: o, giftingOrigin: u, additionalUserIds: l },
        openModalOptions: { modalKey: _, onCloseCallback: c },
    });
};
