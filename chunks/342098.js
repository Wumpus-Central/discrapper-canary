"use strict";
n.d(t, { A: () => E, l: () => I }), n(938796);
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(835245),
    o = n(397927),
    l = n(339048),
    u = n(391048),
    c = n(636099),
    d = n(163437),
    _ = n(97352),
    f = n(67480),
    p = n(954571),
    h = n(937008),
    m = n(491057),
    g = n(652215);
function E(e) {
    let {
            initialPlanId: t,
            activeSubscription: i,
            analyticsObject: a,
            analyticsLocation: l,
            analyticsLocations: d,
            analyticsSubscriptionType: _,
            renderHeader: f,
            planGroup: E,
            skuId: A,
            guildId: I,
            reviewWarningMessage: T,
            applicationId: y,
            showBenefitsFirst: S,
            onComplete: v,
            forcesTransitionToGuild: C,
        } = e,
        b = (0, s.A)(),
        N = !1;
    (0, o.mMO)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 156312)),
                s = (await n.e("50371").then(n.bind(n, 97491))).default,
                { getApplicationPaymentSteps: o } = await n.e("50243").then(n.bind(n, 107854)),
                u = o({ guildId: I, showBenefitsFirst: S });
            return (n) =>
                (0, r.jsx)(e, {
                    loadId: b,
                    applicationId: y,
                    activeSubscription: i,
                    stepConfigs: u,
                    skuIDs: [A],
                    children: (0, r.jsx)(m.Qt, {
                        children: (0, r.jsx)(h.dX, {
                            children: (0, r.jsx)(s, {
                                ...n,
                                initialPlanId: t,
                                skuId: A,
                                analyticsLocations: d,
                                analyticsObject: a,
                                analyticsLocation: l,
                                analyticsSubscriptionType: _,
                                renderHeader: f,
                                planGroup: E,
                                reviewWarningMessage: T,
                                applicationId: y,
                                guildId: I ?? void 0,
                                onComplete: () => {
                                    (N = !0), v?.();
                                },
                                forcesTransitionToGuild: C,
                            }),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                N ||
                    (p.default.track(g.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: b,
                        payment_type: g.frM[g.VVm.SUBSCRIPTION],
                        location: l ?? a,
                        is_gift: !1,
                        sku_id: A,
                        application_id: y,
                        location_stack: d,
                    }),
                    (0, u.ET)(),
                    (0, c.z)());
            },
            onCloseRequest: g.tEg,
        },
    );
}
let A = async (e, t) => {
    let n = (await (0, l.LM)(e))
        .filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date())
        .find((e) => e.sku_id === t);
    a()(null == n, "User already has an active subscription to this SKU");
};
async function I(e) {
    let {
            applicationId: t,
            skuId: n,
            initialPlanId: r,
            analyticsLocationObject: i,
            analyticsLocations: s,
            renderHeader: o,
        } = e,
        l = f.A.get(n),
        u = _.A.getForSKU(n);
    a()(null != l, "Failed to find SKU");
    let c = (0, d.bg)(l.flags);
    a()(c, "Guild application subscriptions unsupported!"),
        await A(t, n),
        E({
            initialPlanId: r ?? u[0]?.id,
            activeSubscription: null,
            analyticsLocations: s,
            analyticsLocationObject: i,
            analyticsSubscriptionType: g.rzx.APPLICATION,
            renderHeader: o,
            planGroup: [],
            skuId: n,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t,
        });
}
