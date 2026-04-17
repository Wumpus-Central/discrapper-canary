e.d(i, { A: () => f, l: () => P }), e(938796);
var n = e(627968);
e(64700);
var l = e(284009),
    s = e.n(l),
    a = e(835245),
    r = e(397927),
    o = e(339048),
    u = e(391048),
    c = e(636099),
    d = e(589078),
    S = e(742810),
    p = e(163437),
    I = e(97352),
    A = e(67480),
    _ = e(954571),
    T = e(937008),
    E = e(491057),
    C = e(652215);
function f(t) {
    let {
            initialPlanId: i,
            activeSubscription: l,
            analyticsObject: s,
            analyticsLocation: o,
            analyticsLocations: p,
            analyticsSubscriptionType: I,
            renderHeader: A,
            planGroup: f,
            skuId: N,
            guildId: P,
            reviewWarningMessage: h,
            applicationId: g,
            showBenefitsFirst: m,
            onComplete: L,
            forcesTransitionToGuild: O,
        } = t,
        F = (0, a.A)(),
        b = !1;
    (0, r.mMO)(
        async () => {
            let { PaymentContextProvider: t } = await Promise.resolve().then(e.bind(e, 156312)),
                a = (await e.e("72752").then(e.bind(e, 97491))).default,
                { getApplicationPaymentSteps: r } = await e.e("50243").then(e.bind(e, 107854)),
                u = r({ guildId: P, showBenefitsFirst: m });
            return (e) =>
                (0, n.jsx)(t, {
                    loadId: F,
                    applicationId: g,
                    activeSubscription: l,
                    stepConfigs: u,
                    skuIDs: [N],
                    unifiedCheckoutFlow: d.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    children: (0, n.jsx)(E.Qt, {
                        children: (0, n.jsx)(T.dX, {
                            children: (0, n.jsx)(a, {
                                ...e,
                                initialPlanId: i,
                                skuId: N,
                                analyticsLocations: p,
                                analyticsObject: s,
                                analyticsLocation: o,
                                analyticsSubscriptionType: I,
                                renderHeader: A,
                                planGroup: f,
                                reviewWarningMessage: h,
                                applicationId: g,
                                guildId: P ?? void 0,
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
                b ||
                    (_.default.track(C.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: F,
                        payment_type: C.frM[C.VVm.SUBSCRIPTION],
                        location: o ?? s,
                        is_gift: !1,
                        sku_id: N,
                        application_id: g,
                        location_stack: p,
                        checkout_design: S.rS.UNIFIED,
                        checkout_flow: d.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                    }),
                    (0, u.ET)(),
                    (0, c.z)());
            },
            onCloseRequest: C.tEg,
        },
    );
}
let N = async (t, i) => {
    let e = (await (0, o.LM)(t))
        .filter((t) => null == t.ends_at || new Date(t.ends_at) > new Date())
        .find((t) => t.sku_id === i);
    s()(null == e, "User already has an active subscription to this SKU");
};
async function P(t) {
    let {
            applicationId: i,
            skuId: e,
            initialPlanId: n,
            analyticsLocationObject: l,
            analyticsLocations: a,
            renderHeader: r,
        } = t,
        o = A.A.get(e),
        u = I.A.getForSKU(e);
    s()(null != o, "Failed to find SKU");
    let c = (0, p.bg)(o.flags);
    s()(c, "Guild application subscriptions unsupported!"),
        await N(i, e),
        f({
            initialPlanId: n ?? u[0]?.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: l,
            analyticsSubscriptionType: C.rzx.APPLICATION,
            renderHeader: r,
            planGroup: [],
            skuId: e,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: i,
        });
}
