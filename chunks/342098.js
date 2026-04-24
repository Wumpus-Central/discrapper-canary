"use strict";
n.d(t, { A: () => E, l: () => v }), n(938796);
var i = n(627968);
n(64700);
var r = n(284009),
    a = n.n(r),
    s = n(132500),
    l = n(192308),
    o = n(339048),
    c = n(391048),
    d = n(636099),
    u = n(226991),
    _ = n(742810),
    p = n(163437),
    f = n(97352),
    h = n(67480),
    m = n(954571),
    g = n(937008),
    b = n(491057),
    A = n(652215);
function E(e) {
    let {
            initialPlanId: t,
            activeSubscription: r,
            analyticsObject: a,
            analyticsLocation: o,
            analyticsLocations: p,
            analyticsSubscriptionType: f,
            renderHeader: h,
            planGroup: E,
            skuId: I,
            guildId: v,
            reviewWarningMessage: S,
            applicationId: T,
            showBenefitsFirst: y,
            onComplete: C,
            forcesTransitionToGuild: x,
        } = e,
        L = (0, s.A)(),
        R = !1;
    (0, l.openModalLazy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 156312)),
                s = (await n.e("72752").then(n.bind(n, 97491))).default,
                { getApplicationPaymentSteps: l } = await n.e("31727").then(n.bind(n, 141778)),
                c = l({ guildId: v, showBenefitsFirst: y });
            return (n) =>
                (0, i.jsx)(e, {
                    loadId: L,
                    applicationId: T,
                    activeSubscription: r,
                    stepConfigs: c,
                    skuIDs: [I],
                    unifiedCheckoutFlow: u.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    children: (0, i.jsx)(b.Qt, {
                        children: (0, i.jsx)(g.dX, {
                            children: (0, i.jsx)(s, {
                                ...n,
                                initialPlanId: t,
                                skuId: I,
                                analyticsLocations: p,
                                analyticsObject: a,
                                analyticsLocation: o,
                                analyticsSubscriptionType: f,
                                renderHeader: h,
                                planGroup: E,
                                reviewWarningMessage: S,
                                applicationId: T,
                                guildId: v ?? void 0,
                                onComplete: () => {
                                    (R = !0), C?.();
                                },
                                forcesTransitionToGuild: x,
                            }),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                R ||
                    (m.default.track(A.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: L,
                        payment_type: A.frM[A.VVm.SUBSCRIPTION],
                        location: o ?? a,
                        is_gift: !1,
                        sku_id: I,
                        application_id: T,
                        location_stack: p,
                        checkout_design: _.rS.UNIFIED,
                        checkout_flow: u.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    }),
                    (0, c.ET)(),
                    (0, d.z)());
            },
            onCloseRequest: A.tEg,
        },
    );
}
let I = async (e, t) => {
    let n = (await (0, o.LM)(e))
        .filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date())
        .find((e) => e.sku_id === t);
    a()(null == n, "User already has an active subscription to this SKU");
};
async function v(e) {
    let {
            applicationId: t,
            skuId: n,
            initialPlanId: i,
            analyticsLocationObject: r,
            analyticsLocations: s,
            renderHeader: l,
        } = e,
        o = h.A.get(n),
        c = f.A.getForSKU(n);
    a()(null != o, "Failed to find SKU");
    let d = (0, p.bg)(o.flags);
    a()(d, "Guild application subscriptions unsupported!"),
        await I(t, n),
        E({
            initialPlanId: i ?? c[0]?.id,
            activeSubscription: null,
            analyticsLocations: s,
            analyticsLocationObject: r,
            analyticsSubscriptionType: A.rzx.APPLICATION,
            renderHeader: l,
            planGroup: [],
            skuId: n,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t,
        });
}
