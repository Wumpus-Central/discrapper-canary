e(938796);
var a = e(284009),
    n = e.n(a),
    i = e(339048),
    l = e(391048),
    s = e(589078),
    d = e(675219),
    r = e(163437),
    u = e(97352),
    c = e(67480);
function p(o) {
    let {
        initialPlanId: t,
        activeSubscription: e,
        analyticsObject: a,
        analyticsLocation: n,
        analyticsLocations: i,
        planGroup: r,
        skuId: u,
        guildId: c,
        reviewWarningMessage: p,
        applicationId: C,
        showBenefitsFirst: P,
        onComplete: h,
        forcesTransitionToGuild: k,
    } = o;
    return new d.od({ checkoutFlow: s.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT }).openCheckoutModal({
        checkoutConfiguration: { skuId: u, applicationId: C, activeSubscription: e },
        sharedCheckoutParams: { initialPlanId: t, planGroup: r, reviewWarningMessage: p },
        checkoutHandlers: { onComplete: h },
        unifiedCheckoutProviderProps: { analyticsLocations: i },
        forwardedPaymentModalProps: { analyticsLocation: n, analyticsObject: a },
        tenantParams: { forcesTransitionToGuild: k ?? !1, showBenefitsFirst: P, guildId: c },
        modalAPIOptions: {
            modalKey: "application-payment-modal",
            onCloseCallback: () => {
                (0, l.ET)();
            },
        },
    });
}
e.d(
    t,
    {},
    {
        A: p,
        l: async function (o) {
            let { applicationId: t, skuId: e, initialPlanId: a, analyticsLocationObject: l, analyticsLocations: s } = o,
                d = c.A.get(e),
                C = u.A.getForSKU(e);
            n()(null != d, "Failed to find SKU");
            let P = (0, r.bg)(d.flags);
            (n()(P, "Guild application subscriptions unsupported!"),
                await (async function (o, t) {
                    let e = (await (0, i.LM)(o))
                        .filter((o) => null == o.ends_at || new Date(o.ends_at) > new Date())
                        .find((o) => o.sku_id === t);
                    n()(null == e, "User already has an active subscription to this SKU");
                })(t, e),
                p({
                    initialPlanId: a ?? C[0]?.id,
                    activeSubscription: null,
                    analyticsLocations: s,
                    analyticsLocationObject: l,
                    planGroup: [],
                    skuId: e,
                    guildId: null,
                    showBenefitsFirst: !1,
                    applicationId: t,
                }));
        },
    },
);
