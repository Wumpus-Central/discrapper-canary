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
    let { isGift: n, giftRecipient: s, giftingOrigin: h, additionalUserIds: m } = t,
        { analyticsLocations: g, guildId: E } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        A = (0, u.T)({ location: "openSocialLayerStorefrontPaymentModal" }),
        I = l.A.getSKUEligibility(e.id);
    if (!n && null != E && A && (null == I || "checking" === I || "ineligible" === I))
        return void (0, c.L)({
            guildId: E,
            skuId: e.id,
            onContinue: () =>
                f(
                    e,
                    { isGift: n, giftRecipient: s, giftingOrigin: h, additionalUserIds: m },
                    { analyticsLocations: g, guildId: E },
                ),
        });
    let T = !1,
        y = (0, r.A)(),
        S = () => {
            T ||
                o.default.track(d.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: y,
                    payment_type: d.frM[d.VVm.ONE_TIME],
                    is_gift: n,
                    sku_id: e.id,
                    application_id: e.applicationId,
                    location_stack: g,
                    sku_product_line: e.productLine,
                }),
                (0, i.ET)(),
                (0, a.z)(),
                (0, c.l)();
        },
        v = () => {
            T = !0;
        },
        C = {
            loadId: y,
            skuId: e.id,
            applicationId: e.applicationId,
            analyticsLocations: g ?? [],
            isGift: n,
            giftRecipient: s,
            giftingOrigin: h,
            additionalUserIds: m,
            onCloseCallback: S,
            onComplete: v,
            modalKey: _,
        };
    p(C);
}
let p = (e) => {
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
