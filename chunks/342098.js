i.d(e, { A: () => f, l: () => N }), i(938796);
var n = i(627968);
i(64700);
var l = i(284009),
    s = i.n(l),
    a = i(835245),
    r = i(397927),
    u = i(339048),
    o = i(391048),
    c = i(636099),
    d = i(608805),
    S = i(589078),
    p = i(163437),
    I = i(97352),
    A = i(67480),
    _ = i(954571),
    T = i(937008),
    E = i(491057),
    C = i(652215);
function f(t) {
    let {
            initialPlanId: e,
            activeSubscription: l,
            analyticsObject: s,
            analyticsLocation: u,
            analyticsLocations: p,
            analyticsSubscriptionType: I,
            renderHeader: A,
            planGroup: f,
            skuId: h,
            guildId: N,
            reviewWarningMessage: P,
            applicationId: g,
            showBenefitsFirst: m,
            onComplete: L,
            forcesTransitionToGuild: O,
        } = t,
        F = (0, a.A)(),
        b = !1;
    (0, r.mMO)(
        async () => {
            let { PaymentContextProvider: t } = await Promise.resolve().then(i.bind(i, 156312)),
                a = (await i.e("72752").then(i.bind(i, 97491))).default,
                { getApplicationPaymentSteps: r } = await i.e("50243").then(i.bind(i, 107854)),
                o = r({ guildId: N, showBenefitsFirst: m });
            return (i) =>
                (0, n.jsx)(t, {
                    loadId: F,
                    applicationId: g,
                    activeSubscription: l,
                    stepConfigs: o,
                    skuIDs: [h],
                    unifiedCheckoutFlow: S.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    children: (0, n.jsx)(E.Qt, {
                        children: (0, n.jsx)(T.dX, {
                            children: (0, n.jsx)(a, {
                                ...i,
                                initialPlanId: e,
                                skuId: h,
                                analyticsLocations: p,
                                analyticsObject: s,
                                analyticsLocation: u,
                                analyticsSubscriptionType: I,
                                renderHeader: A,
                                planGroup: f,
                                reviewWarningMessage: P,
                                applicationId: g,
                                guildId: N ?? void 0,
                                onComplete: () => {
                                    (b = !0), L?.();
                                },
                                forcesTransitionToGuild: O,
                            }),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                if (!b) {
                    let t = (0, d.q1)({
                        location: "ApplicationPaymentModal",
                        unifiedCheckoutFlow: S.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    });
                    _.default.track(C.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: F,
                        payment_type: C.frM[C.VVm.SUBSCRIPTION],
                        location: u ?? s,
                        is_gift: !1,
                        sku_id: h,
                        application_id: g,
                        location_stack: p,
                        checkout_design: t ? d.rS.UNIFIED : d.rS.LEGACY,
                    }),
                        (0, o.ET)(),
                        (0, c.z)();
                }
            },
            onCloseRequest: C.tEg,
        },
    );
}
let h = async (t, e) => {
    let i = (await (0, u.LM)(t))
        .filter((t) => null == t.ends_at || new Date(t.ends_at) > new Date())
        .find((t) => t.sku_id === e);
    s()(null == i, "User already has an active subscription to this SKU");
};
async function N(t) {
    let {
            applicationId: e,
            skuId: i,
            initialPlanId: n,
            analyticsLocationObject: l,
            analyticsLocations: a,
            renderHeader: r,
        } = t,
        u = A.A.get(i),
        o = I.A.getForSKU(i);
    s()(null != u, "Failed to find SKU");
    let c = (0, p.bg)(u.flags);
    s()(c, "Guild application subscriptions unsupported!"),
        await h(e, i),
        f({
            initialPlanId: n ?? o[0]?.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: l,
            analyticsSubscriptionType: C.rzx.APPLICATION,
            renderHeader: r,
            planGroup: [],
            skuId: i,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: e,
        });
}
