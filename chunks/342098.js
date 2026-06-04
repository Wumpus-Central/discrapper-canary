a.d(t, { A: () => k, l: () => y }), a(938796);
var e = a(627968);
a(64700);
var n = a(284009),
    l = a.n(n),
    o = a(835245),
    s = a(192308),
    c = a(339048),
    d = a(391048),
    r = a(636099),
    u = a(813730),
    p = a(742810),
    C = a(163437),
    _ = a(97352),
    I = a(67480),
    P = a(174459),
    h = a(937008),
    b = a(491057),
    f = a(652215);
function k(i) {
    let {
            initialPlanId: t,
            activeSubscription: n,
            analyticsObject: l,
            analyticsLocation: c,
            analyticsLocations: C,
            analyticsSubscriptionType: _,
            renderHeader: I,
            planGroup: k,
            skuId: S,
            guildId: y,
            reviewWarningMessage: w,
            applicationId: T,
            showBenefitsFirst: g,
            onComplete: E,
            forcesTransitionToGuild: U,
        } = i,
        A = (0, o.A)(),
        M = !1;
    (0, s.openModalLazy)(
        async () => {
            let { CheckoutRootProvider: i } = await Promise.resolve().then(a.bind(a, 197510)),
                o = (await Promise.all([a.e("18030"), a.e("72752")]).then(a.bind(a, 97491))).default,
                { ApplicationCheckoutContextProvider: s } = await a.e("18030").then(a.bind(a, 975965)),
                { getApplicationPaymentSteps: d } = await Promise.all([
                    a.e("70582"),
                    a.e("73122"),
                    a.e("18030"),
                    a.e("31727"),
                ]).then(a.bind(a, 141778)),
                r = d({ guildId: y, showBenefitsFirst: g });
            return (a) =>
                (0, e.jsx)(i, {
                    loadId: A,
                    applicationId: T,
                    activeSubscription: n,
                    stepConfigs: r,
                    skuIDs: [S],
                    unifiedCheckoutFlow: u.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    children: (0, e.jsx)(s, {
                        children: (0, e.jsx)(b.Qt, {
                            children: (0, e.jsx)(h.dX, {
                                children: (0, e.jsx)(o, {
                                    ...a,
                                    initialPlanId: t,
                                    skuId: S,
                                    analyticsLocations: C,
                                    analyticsObject: l,
                                    analyticsLocation: c,
                                    analyticsSubscriptionType: _,
                                    renderHeader: I,
                                    planGroup: k,
                                    reviewWarningMessage: w,
                                    applicationId: T,
                                    guildId: y ?? void 0,
                                    onComplete: () => {
                                        (M = !0), E?.();
                                    },
                                    forcesTransitionToGuild: U,
                                }),
                            }),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                M ||
                    (P.default.track(f.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: A,
                        payment_type: f.frM[f.VVm.SUBSCRIPTION],
                        location: c ?? l,
                        is_gift: !1,
                        sku_id: S,
                        application_id: T,
                        location_stack: C,
                        checkout_design: p.rS.UNIFIED,
                        checkout_flow: u.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    }),
                    (0, d.ET)(),
                    (0, r.z)());
            },
            onCloseRequest: f.tEg,
        },
    );
}
let S = async (i, t) => {
    let a = (await (0, c.LM)(i))
        .filter((i) => null == i.ends_at || new Date(i.ends_at) > new Date())
        .find((i) => i.sku_id === t);
    l()(null == a, "User already has an active subscription to this SKU");
};
async function y(i) {
    let {
            applicationId: t,
            skuId: a,
            initialPlanId: e,
            analyticsLocationObject: n,
            analyticsLocations: o,
            renderHeader: s,
        } = i,
        c = I.A.get(a),
        d = _.A.getForSKU(a);
    l()(null != c, "Failed to find SKU");
    let r = (0, C.bg)(c.flags);
    l()(r, "Guild application subscriptions unsupported!"),
        await S(t, a),
        k({
            initialPlanId: e ?? d[0]?.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: n,
            analyticsSubscriptionType: f.rzx.APPLICATION,
            renderHeader: s,
            planGroup: [],
            skuId: a,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t,
        });
}
