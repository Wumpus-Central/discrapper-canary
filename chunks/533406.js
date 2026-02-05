"use strict";
n.d(t, { a: () => m });
var r = n(627968),
    i = n(835245),
    a = n(397927),
    s = n(391048),
    o = n(636099),
    l = n(769315),
    u = n(589078),
    c = n(954571),
    d = n(832163),
    _ = n(179935),
    f = n(556808),
    p = n(652215);
let h = "slayer-payment-modal";
function m(e, t) {
    let { isGift: n, giftRecipient: r, giftingOrigin: a, additionalUserIds: u } = t,
        { analyticsLocations: A, guildId: I } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        T = (0, _.T)({ location: "openSocialLayerStorefrontPaymentModal" }),
        y = d.A.getSKUEligibility(e.id);
    if (!n && null != I && T && (null == y || "checking" === y || "ineligible" === y))
        return void (0, f.L)({
            guildId: I,
            skuId: e.id,
            onContinue: () =>
                m(
                    e,
                    { isGift: n, giftRecipient: r, giftingOrigin: a, additionalUserIds: u },
                    { analyticsLocations: A, guildId: I },
                ),
        });
    let S = !1,
        v = (0, i.A)(),
        { enabled: C } = (0, l.ik)({ location: "openCollectiblesPaymentModal" }),
        b = () => {
            S ||
                c.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: v,
                    payment_type: p.frM[p.VVm.ONE_TIME],
                    is_gift: n,
                    sku_id: e.id,
                    application_id: e.applicationId,
                    location_stack: A,
                    sku_product_line: e.productLine,
                }),
                (0, s.ET)(),
                (0, o.z)(),
                (0, f.l)();
        },
        N = () => {
            S = !0;
        },
        R = {
            loadId: v,
            skuId: e.id,
            applicationId: e.applicationId,
            analyticsLocations: A ?? [],
            isGift: n,
            giftRecipient: r,
            giftingOrigin: a,
            additionalUserIds: u,
            onCloseCallback: b,
            onComplete: N,
            modalKey: h,
        };
    C ? g(R) : E(R);
}
let g = (e) => {
        let {
            loadId: t,
            applicationId: n,
            skuId: r,
            analyticsLocations: i,
            isGift: a,
            giftRecipient: s,
            giftingOrigin: o,
            onCloseCallback: l,
            onComplete: c,
            modalKey: d,
        } = e;
        return (0, u.KY)().openCheckoutModal({
            loadId: t,
            applicationId: n,
            skuId: r,
            analyticsLocations: i,
            onComplete: c,
            giftContextProps: { isGift: a, giftRecipient: s, giftingOrigin: o },
            openModalOptions: { modalKey: d, onCloseCallback: l },
        });
    },
    E = (e) => {
        let {
            loadId: t,
            applicationId: i,
            skuId: s,
            analyticsLocations: o,
            isGift: l,
            giftRecipient: u,
            giftingOrigin: c,
            additionalUserIds: d,
            onCloseCallback: _,
            onComplete: f,
            modalKey: p,
        } = e;
        return (0, a.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 317042));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        loadId: t,
                        applicationId: i,
                        skuId: s,
                        analyticsLocations: o,
                        isGift: l,
                        giftRecipient: u,
                        additionalUserIds: d,
                        giftingOrigin: c,
                        onComplete: f,
                    });
            },
            { onCloseCallback: _, modalKey: p },
        );
    };
