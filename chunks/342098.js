a.d(t, { A: () => w, l: () => g }), a(938796);
var e = a(627968);
a(64700);
var n = a(284009),
    o = a.n(n),
    l = a(835245),
    s = a(192308),
    d = a(339048),
    c = a(391048),
    r = a(636099),
    u = a(145659),
    p = a(65258),
    C = a(529427),
    I = a(449011),
    P = a(163437),
    _ = a(97352),
    h = a(67480),
    f = a(174459),
    k = a(937008),
    T = a(491057),
    S = a(652215);
function w(i) {
    let {
        initialPlanId: t,
        activeSubscription: n,
        analyticsObject: o,
        analyticsLocation: d,
        analyticsLocations: P,
        analyticsSubscriptionType: _,
        renderHeader: h,
        planGroup: w,
        skuId: b,
        guildId: g,
        reviewWarningMessage: y,
        applicationId: U,
        showBenefitsFirst: E,
        onComplete: M,
        forcesTransitionToGuild: m,
    } = i;
    if ((0, p.T)())
        return new I.o({ checkoutFlow: C.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT }).openCheckoutModal({
            skuId: b,
            applicationId: U,
            onComplete: M,
            initialPlanId: t,
            activeSubscription: n,
            analyticsObject: o,
            analyticsLocation: d,
            analyticsLocations: P,
            analyticsSubscriptionType: _,
            planGroup: w,
            guildId: g ?? void 0,
            reviewWarningMessage: y,
            tenantParams: { forcesTransitionToGuild: m ?? !1, showBenefitsFirst: E, guildId: g },
            modalAPIOptions: {
                modalKey: "application-payment-modal",
                onCloseCallback: () => {
                    (0, c.ET)(), (0, r.z)();
                },
            },
        });
    let A = (0, l.A)(),
        O = !1;
    (0, s.openModalLazy)(
        async () => {
            let { CheckoutRootProvider: i } = await Promise.resolve().then(a.bind(a, 197510)),
                l = (await a.e("72752").then(a.bind(a, 97491))).default,
                { ApplicationCheckoutContextProvider: s } = await Promise.resolve().then(a.bind(a, 975965)),
                { getApplicationPaymentSteps: c } = await a.e("50243").then(a.bind(a, 107854)),
                r = c();
            return (a) =>
                (0, e.jsx)(i, {
                    loadId: A,
                    applicationId: U,
                    activeSubscription: n,
                    stepConfigs: r,
                    skuIDs: [b],
                    unifiedCheckoutFlow: C.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    children: (0, e.jsx)(s, {
                        guildId: g,
                        showBenefitsFirst: E,
                        children: (0, e.jsx)(T.Qt, {
                            children: (0, e.jsx)(k.dX, {
                                children: (0, e.jsx)(l, {
                                    ...a,
                                    initialPlanId: t,
                                    skuId: b,
                                    analyticsLocations: P,
                                    analyticsObject: o,
                                    analyticsLocation: d,
                                    analyticsSubscriptionType: _,
                                    renderHeader: h,
                                    planGroup: w,
                                    reviewWarningMessage: y,
                                    applicationId: U,
                                    guildId: g ?? void 0,
                                    onComplete: () => {
                                        (O = !0), M?.();
                                    },
                                    forcesTransitionToGuild: m,
                                }),
                            }),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                O ||
                    (f.default.track(S.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: A,
                        payment_type: S.frM[S.VVm.SUBSCRIPTION],
                        location: d ?? o,
                        is_gift: !1,
                        sku_id: b,
                        application_id: U,
                        location_stack: P,
                        checkout_design: u.r.UNIFIED,
                        checkout_flow: C.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    }),
                    (0, c.ET)(),
                    (0, r.z)());
            },
            onCloseRequest: S.tEg,
        },
    );
}
let b = async (i, t) => {
    let a = (await (0, d.LM)(i))
        .filter((i) => null == i.ends_at || new Date(i.ends_at) > new Date())
        .find((i) => i.sku_id === t);
    o()(null == a, "User already has an active subscription to this SKU");
};
async function g(i) {
    let {
            applicationId: t,
            skuId: a,
            initialPlanId: e,
            analyticsLocationObject: n,
            analyticsLocations: l,
            renderHeader: s,
        } = i,
        d = h.A.get(a),
        c = _.A.getForSKU(a);
    o()(null != d, "Failed to find SKU");
    let r = (0, P.bg)(d.flags);
    o()(r, "Guild application subscriptions unsupported!"),
        await b(t, a),
        w({
            initialPlanId: e ?? c[0]?.id,
            activeSubscription: null,
            analyticsLocations: l,
            analyticsLocationObject: n,
            analyticsSubscriptionType: S.rzx.APPLICATION,
            renderHeader: s,
            planGroup: [],
            skuId: a,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t,
        });
}
