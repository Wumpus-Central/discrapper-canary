t.d(e, { A: () => b, l: () => g }), t(938796);
var a = t(627968);
t(64700);
var n = t(284009),
    l = t.n(n),
    o = t(835245),
    s = t(192308),
    c = t(339048),
    d = t(391048),
    r = t(636099),
    u = t(145659),
    p = t(407001),
    C = t(163437),
    _ = t(97352),
    I = t(67480),
    P = t(174459),
    h = t(937008),
    f = t(491057),
    k = t(652215);
function b(i) {
    let {
            initialPlanId: e,
            activeSubscription: n,
            analyticsObject: l,
            analyticsLocation: c,
            analyticsLocations: C,
            analyticsSubscriptionType: _,
            renderHeader: I,
            planGroup: b,
            skuId: S,
            guildId: g,
            reviewWarningMessage: w,
            applicationId: y,
            showBenefitsFirst: T,
            onComplete: U,
            forcesTransitionToGuild: A,
        } = i,
        E = (0, o.A)(),
        M = !1;
    (0, s.openModalLazy)(
        async () => {
            let { CheckoutRootProvider: i } = await Promise.resolve().then(t.bind(t, 197510)),
                o = (await Promise.all([t.e("18030"), t.e("72752")]).then(t.bind(t, 97491))).default,
                { ApplicationCheckoutContextProvider: s } = await t.e("18030").then(t.bind(t, 975965)),
                { getApplicationPaymentSteps: d } = await Promise.all([
                    t.e("70582"),
                    t.e("73122"),
                    t.e("18030"),
                    t.e("31727"),
                ]).then(t.bind(t, 141778)),
                r = d({ guildId: g, showBenefitsFirst: T });
            return (t) =>
                (0, a.jsx)(i, {
                    loadId: E,
                    applicationId: y,
                    activeSubscription: n,
                    stepConfigs: r,
                    skuIDs: [S],
                    unifiedCheckoutFlow: p.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    children: (0, a.jsx)(s, {
                        children: (0, a.jsx)(f.Qt, {
                            children: (0, a.jsx)(h.dX, {
                                children: (0, a.jsx)(o, {
                                    ...t,
                                    initialPlanId: e,
                                    skuId: S,
                                    analyticsLocations: C,
                                    analyticsObject: l,
                                    analyticsLocation: c,
                                    analyticsSubscriptionType: _,
                                    renderHeader: I,
                                    planGroup: b,
                                    reviewWarningMessage: w,
                                    applicationId: y,
                                    guildId: g ?? void 0,
                                    onComplete: () => {
                                        (M = !0), U?.();
                                    },
                                    forcesTransitionToGuild: A,
                                }),
                            }),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                M ||
                    (P.default.track(k.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: E,
                        payment_type: k.frM[k.VVm.SUBSCRIPTION],
                        location: c ?? l,
                        is_gift: !1,
                        sku_id: S,
                        application_id: y,
                        location_stack: C,
                        checkout_design: u.r.UNIFIED,
                        checkout_flow: p.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    }),
                    (0, d.ET)(),
                    (0, r.z)());
            },
            onCloseRequest: k.tEg,
        },
    );
}
let S = async (i, e) => {
    let t = (await (0, c.LM)(i))
        .filter((i) => null == i.ends_at || new Date(i.ends_at) > new Date())
        .find((i) => i.sku_id === e);
    l()(null == t, "User already has an active subscription to this SKU");
};
async function g(i) {
    let {
            applicationId: e,
            skuId: t,
            initialPlanId: a,
            analyticsLocationObject: n,
            analyticsLocations: o,
            renderHeader: s,
        } = i,
        c = I.A.get(t),
        d = _.A.getForSKU(t);
    l()(null != c, "Failed to find SKU");
    let r = (0, C.bg)(c.flags);
    l()(r, "Guild application subscriptions unsupported!"),
        await S(e, t),
        b({
            initialPlanId: a ?? d[0]?.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: n,
            analyticsSubscriptionType: k.rzx.APPLICATION,
            renderHeader: s,
            planGroup: [],
            skuId: t,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: e,
        });
}
