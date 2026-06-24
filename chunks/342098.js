n.d(t, { A: () => C, l: () => f }), n(938796);
var e = n(284009),
    a = n.n(e),
    i = n(339048),
    l = n(391048),
    s = n(636099),
    d = n(529427),
    r = n(162307),
    u = n(163437),
    c = n(97352),
    p = n(67480),
    P = n(652215);
function C(o) {
    let {
        initialPlanId: t,
        activeSubscription: n,
        analyticsObject: e,
        analyticsLocation: a,
        analyticsLocations: i,
        analyticsSubscriptionType: u,
        planGroup: c,
        skuId: p,
        guildId: P,
        reviewWarningMessage: C,
        applicationId: h,
        showBenefitsFirst: f,
        onComplete: k,
        forcesTransitionToGuild: g,
    } = o;
    return new r.o({ checkoutFlow: d.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT }).openCheckoutModal({
        checkoutConfiguration: { skuId: p, applicationId: h, activeSubscription: n },
        checkoutHandlers: { onComplete: k },
        unifiedCheckoutProviderProps: { analyticsLocations: i },
        forwardedPaymentModalProps: {
            initialPlanId: t,
            analyticsLocation: a,
            analyticsObject: e,
            analyticsSubscriptionType: u,
            planGroup: c,
            guildId: P ?? void 0,
            reviewWarningMessage: C,
        },
        tenantParams: { forcesTransitionToGuild: g ?? !1, showBenefitsFirst: f, guildId: P },
        modalAPIOptions: {
            modalKey: "application-payment-modal",
            onCloseCallback: () => {
                (0, l.ET)(), (0, s.z)();
            },
        },
    });
}
async function h(o, t) {
    let n = (await (0, i.LM)(o))
        .filter((o) => null == o.ends_at || new Date(o.ends_at) > new Date())
        .find((o) => o.sku_id === t);
    a()(null == n, "User already has an active subscription to this SKU");
}
async function f(o) {
    let { applicationId: t, skuId: n, initialPlanId: e, analyticsLocationObject: i, analyticsLocations: l } = o,
        s = p.A.get(n),
        d = c.A.getForSKU(n);
    a()(null != s, "Failed to find SKU");
    let r = (0, u.bg)(s.flags);
    a()(r, "Guild application subscriptions unsupported!"),
        await h(t, n),
        C({
            initialPlanId: e ?? d[0]?.id,
            activeSubscription: null,
            analyticsLocations: l,
            analyticsLocationObject: i,
            analyticsSubscriptionType: P.rzx.APPLICATION,
            planGroup: [],
            skuId: n,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t,
        });
}
