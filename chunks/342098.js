e.d(t, { A: () => C, l: () => k }), e(938796);
var a = e(284009),
    n = e.n(a),
    i = e(339048),
    l = e(391048),
    s = e(636099),
    d = e(529427),
    r = e(793591),
    u = e(163437),
    c = e(97352),
    p = e(67480),
    P = e(652215);
function C(o) {
    let {
        initialPlanId: t,
        activeSubscription: e,
        analyticsObject: a,
        analyticsLocation: n,
        analyticsLocations: i,
        analyticsSubscriptionType: u,
        planGroup: c,
        skuId: p,
        guildId: P,
        reviewWarningMessage: C,
        applicationId: h,
        showBenefitsFirst: k,
        onComplete: f,
        forcesTransitionToGuild: g,
    } = o;
    return new r.o({ checkoutFlow: d.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT }).openCheckoutModal({
        checkoutConfiguration: { skuId: p, applicationId: h, activeSubscription: e },
        checkoutHandlers: { onComplete: f },
        unifiedCheckoutProviderProps: { analyticsLocations: i },
        forwardedPaymentModalProps: {
            initialPlanId: t,
            analyticsLocation: n,
            analyticsObject: a,
            analyticsSubscriptionType: u,
            planGroup: c,
            guildId: P ?? void 0,
            reviewWarningMessage: C,
        },
        tenantParams: { forcesTransitionToGuild: g ?? !1, showBenefitsFirst: k, guildId: P },
        modalAPIOptions: {
            modalKey: "application-payment-modal",
            onCloseCallback: () => {
                (0, l.ET)(), (0, s.z)();
            },
        },
    });
}
let h = async (o, t) => {
    let e = (await (0, i.LM)(o))
        .filter((o) => null == o.ends_at || new Date(o.ends_at) > new Date())
        .find((o) => o.sku_id === t);
    n()(null == e, "User already has an active subscription to this SKU");
};
async function k(o) {
    let { applicationId: t, skuId: e, initialPlanId: a, analyticsLocationObject: i, analyticsLocations: l } = o,
        s = p.A.get(e),
        d = c.A.getForSKU(e);
    n()(null != s, "Failed to find SKU");
    let r = (0, u.bg)(s.flags);
    n()(r, "Guild application subscriptions unsupported!"),
        await h(t, e),
        C({
            initialPlanId: a ?? d[0]?.id,
            activeSubscription: null,
            analyticsLocations: l,
            analyticsLocationObject: i,
            analyticsSubscriptionType: P.rzx.APPLICATION,
            planGroup: [],
            skuId: e,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t,
        });
}
