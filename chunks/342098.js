i.d(e, { A: () => C, l: () => g }), i(938796);
var n = i(627968);
i(64700);
var l = i(284009),
    s = i.n(l),
    a = i(835245),
    r = i(192308),
    o = i(339048),
    u = i(391048),
    c = i(636099),
    d = i(589078),
    p = i(742810),
    S = i(163437),
    I = i(97352),
    A = i(67480),
    _ = i(954571),
    T = i(937008),
    h = i(491057),
    E = i(652215);
function C(t) {
    let {
            initialPlanId: e,
            activeSubscription: l,
            analyticsObject: s,
            analyticsLocation: o,
            analyticsLocations: S,
            analyticsSubscriptionType: I,
            renderHeader: A,
            planGroup: C,
            skuId: f,
            guildId: g,
            reviewWarningMessage: N,
            applicationId: P,
            showBenefitsFirst: m,
            onComplete: L,
            forcesTransitionToGuild: v,
        } = t,
        O = (0, a.A)(),
        F = !1;
    (0, r.openModalLazy)(
        async () => {
            let { PaymentContextProvider: t } = await Promise.resolve().then(i.bind(i, 156312)),
                a = (await i.e("72752").then(i.bind(i, 97491))).default,
                { getApplicationPaymentSteps: r } = await i.e("50243").then(i.bind(i, 107854)),
                u = r({ guildId: g, showBenefitsFirst: m });
            return (i) =>
                (0, n.jsx)(t, {
                    loadId: O,
                    applicationId: P,
                    activeSubscription: l,
                    stepConfigs: u,
                    skuIDs: [f],
                    unifiedCheckoutFlow: d.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    children: (0, n.jsx)(h.Qt, {
                        children: (0, n.jsx)(T.dX, {
                            children: (0, n.jsx)(a, {
                                ...i,
                                initialPlanId: e,
                                skuId: f,
                                analyticsLocations: S,
                                analyticsObject: s,
                                analyticsLocation: o,
                                analyticsSubscriptionType: I,
                                renderHeader: A,
                                planGroup: C,
                                reviewWarningMessage: N,
                                applicationId: P,
                                guildId: g ?? void 0,
                                onComplete: () => {
                                    (F = !0), L?.();
                                },
                                forcesTransitionToGuild: v,
                            }),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                F ||
                    (_.default.track(E.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: O,
                        payment_type: E.frM[E.VVm.SUBSCRIPTION],
                        location: o ?? s,
                        is_gift: !1,
                        sku_id: f,
                        application_id: P,
                        location_stack: S,
                        checkout_design: p.rS.UNIFIED,
                        checkout_flow: d.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    }),
                    (0, u.ET)(),
                    (0, c.z)());
            },
            onCloseRequest: E.tEg,
        },
    );
}
let f = async (t, e) => {
    let i = (await (0, o.LM)(t))
        .filter((t) => null == t.ends_at || new Date(t.ends_at) > new Date())
        .find((t) => t.sku_id === e);
    s()(null == i, "User already has an active subscription to this SKU");
};
async function g(t) {
    let {
            applicationId: e,
            skuId: i,
            initialPlanId: n,
            analyticsLocationObject: l,
            analyticsLocations: a,
            renderHeader: r,
        } = t,
        o = A.A.get(i),
        u = I.A.getForSKU(i);
    s()(null != o, "Failed to find SKU");
    let c = (0, S.bg)(o.flags);
    s()(c, "Guild application subscriptions unsupported!"),
        await f(e, i),
        C({
            initialPlanId: n ?? u[0]?.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: l,
            analyticsSubscriptionType: E.rzx.APPLICATION,
            renderHeader: r,
            planGroup: [],
            skuId: i,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: e,
        });
}
