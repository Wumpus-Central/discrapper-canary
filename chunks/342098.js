t.d(a, { A: () => b, l: () => w }), t(938796);
var n = t(627968);
t(64700);
var e = t(284009),
    l = t.n(e),
    s = t(132500),
    o = t(192308),
    d = t(339048),
    c = t(391048),
    r = t(636099),
    u = t(226991),
    p = t(742810),
    I = t(163437),
    _ = t(97352),
    C = t(67480),
    h = t(954571),
    P = t(937008),
    S = t(491057),
    f = t(652215);
function b(i) {
    let {
            initialPlanId: a,
            activeSubscription: e,
            analyticsObject: l,
            analyticsLocation: d,
            analyticsLocations: I,
            analyticsSubscriptionType: _,
            renderHeader: C,
            planGroup: b,
            skuId: k,
            guildId: w,
            reviewWarningMessage: y,
            applicationId: g,
            showBenefitsFirst: T,
            onComplete: U,
            forcesTransitionToGuild: A,
        } = i,
        E = (0, s.A)(),
        L = !1;
    (0, o.openModalLazy)(
        async () => {
            let { PaymentContextProvider: i } = await Promise.resolve().then(t.bind(t, 156312)),
                s = (await t.e("72752").then(t.bind(t, 97491))).default,
                { getApplicationPaymentSteps: o } = await Promise.all([t.e("70582"), t.e("73122"), t.e("31727")]).then(
                    t.bind(t, 141778),
                ),
                c = o({ guildId: w, showBenefitsFirst: T });
            return (t) =>
                (0, n.jsx)(i, {
                    loadId: E,
                    applicationId: g,
                    activeSubscription: e,
                    stepConfigs: c,
                    skuIDs: [k],
                    unifiedCheckoutFlow: u.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    children: (0, n.jsx)(S.Qt, {
                        children: (0, n.jsx)(P.dX, {
                            children: (0, n.jsx)(s, {
                                ...t,
                                initialPlanId: a,
                                skuId: k,
                                analyticsLocations: I,
                                analyticsObject: l,
                                analyticsLocation: d,
                                analyticsSubscriptionType: _,
                                renderHeader: C,
                                planGroup: b,
                                reviewWarningMessage: y,
                                applicationId: g,
                                guildId: w ?? void 0,
                                onComplete: () => {
                                    (L = !0), U?.();
                                },
                                forcesTransitionToGuild: A,
                            }),
                        }),
                    }),
                });
        },
        {
            onCloseCallback: () => {
                L ||
                    (h.default.track(f.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: E,
                        payment_type: f.frM[f.VVm.SUBSCRIPTION],
                        location: d ?? l,
                        is_gift: !1,
                        sku_id: k,
                        application_id: g,
                        location_stack: I,
                        checkout_design: p.rS.UNIFIED,
                        checkout_flow: u.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    }),
                    (0, c.ET)(),
                    (0, r.z)());
            },
            onCloseRequest: f.tEg,
        },
    );
}
let k = async (i, a) => {
    let t = (await (0, d.LM)(i))
        .filter((i) => null == i.ends_at || new Date(i.ends_at) > new Date())
        .find((i) => i.sku_id === a);
    l()(null == t, "User already has an active subscription to this SKU");
};
async function w(i) {
    let {
            applicationId: a,
            skuId: t,
            initialPlanId: n,
            analyticsLocationObject: e,
            analyticsLocations: s,
            renderHeader: o,
        } = i,
        d = C.A.get(t),
        c = _.A.getForSKU(t);
    l()(null != d, "Failed to find SKU");
    let r = (0, I.bg)(d.flags);
    l()(r, "Guild application subscriptions unsupported!"),
        await k(a, t),
        b({
            initialPlanId: n ?? c[0]?.id,
            activeSubscription: null,
            analyticsLocations: s,
            analyticsLocationObject: e,
            analyticsSubscriptionType: f.rzx.APPLICATION,
            renderHeader: o,
            planGroup: [],
            skuId: t,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: a,
        });
}
