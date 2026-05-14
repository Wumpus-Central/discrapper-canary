a.d(t, { A: () => w, l: () => P }), a(938796);
var e = a(627968);
a(64700);
var n = a(284009),
    l = a.n(n),
    o = a(835245),
    s = a(192308),
    c = a(339048),
    d = a(391048),
    r = a(636099),
    u = a(622207),
    p = a(742810),
    _ = a(163437),
    C = a(97352),
    I = a(67480),
    f = a(174459),
    k = a(937008),
    h = a(491057),
    y = a(652215);
function w(i) {
    let {
            initialPlanId: t,
            activeSubscription: n,
            analyticsObject: l,
            analyticsLocation: c,
            analyticsLocations: _,
            analyticsSubscriptionType: C,
            renderHeader: I,
            planGroup: w,
            skuId: E,
            guildId: P,
            reviewWarningMessage: S,
            applicationId: b,
            showBenefitsFirst: A,
            onComplete: T,
            forcesTransitionToGuild: g,
        } = i,
        L = (0, o.A)(),
        M = !1;
    (0, s.openModalLazy)(
        async () => {
            let { PaymentContextProvider: i } = await Promise.resolve().then(a.bind(a, 834252)),
                o = (await a.e("72752").then(a.bind(a, 97491))).default,
                { getApplicationPaymentSteps: s } = await Promise.all([a.e("70582"), a.e("73122"), a.e("31727")]).then(
                    a.bind(a, 141778),
                ),
                d = s({ guildId: P, showBenefitsFirst: A });
            return (a) =>
                (0, e.jsx)(i, {
                    loadId: L,
                    applicationId: b,
                    activeSubscription: n,
                    stepConfigs: d,
                    skuIDs: [E],
                    unifiedCheckoutFlow: u.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    children: (0, e.jsx)(h.Qt, {
                        children: (0, e.jsx)(k.dX, {
                            children: (0, e.jsx)(o, {
                                ...a,
                                initialPlanId: t,
                                skuId: E,
                                analyticsLocations: _,
                                analyticsObject: l,
                                analyticsLocation: c,
                                analyticsSubscriptionType: C,
                                renderHeader: I,
                                planGroup: w,
                                reviewWarningMessage: S,
                                applicationId: b,
                                guildId: P ?? void 0,
                                onComplete: () => {
                                    (M = !0), T?.();
                                },
                                forcesTransitionToGuild: g,
                            }),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                M ||
                    (f.default.track(y.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: L,
                        payment_type: y.frM[y.VVm.SUBSCRIPTION],
                        location: c ?? l,
                        is_gift: !1,
                        sku_id: E,
                        application_id: b,
                        location_stack: _,
                        checkout_design: p.rS.UNIFIED,
                        checkout_flow: u.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    }),
                    (0, d.ET)(),
                    (0, r.z)());
            },
            onCloseRequest: y.tEg,
        },
    );
}
let E = async (i, t) => {
    let a = (await (0, c.LM)(i))
        .filter((i) => null == i.ends_at || new Date(i.ends_at) > new Date())
        .find((i) => i.sku_id === t);
    l()(null == a, "User already has an active subscription to this SKU");
};
async function P(i) {
    let {
            applicationId: t,
            skuId: a,
            initialPlanId: e,
            analyticsLocationObject: n,
            analyticsLocations: o,
            renderHeader: s,
        } = i,
        c = I.A.get(a),
        d = C.A.getForSKU(a);
    l()(null != c, "Failed to find SKU");
    let r = (0, _.bg)(c.flags);
    l()(r, "Guild application subscriptions unsupported!"),
        await E(t, a),
        w({
            initialPlanId: e ?? d[0]?.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: n,
            analyticsSubscriptionType: y.rzx.APPLICATION,
            renderHeader: s,
            planGroup: [],
            skuId: a,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t,
        });
}
