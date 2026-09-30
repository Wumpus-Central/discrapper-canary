(n.d(t, { A: () => P, l: () => h }), n(938796));
var e = n(284009),
    a = n.n(e),
    i = n(339048),
    l = n(391048),
    d = n(589078),
    s = n(675219),
    r = n(163437),
    u = n(97352),
    c = n(67480),
    p = n(652215);
function P(o) {
    let {
        initialPlanId: t,
        activeSubscription: n,
        analyticsObject: e,
        analyticsLocation: a,
        analyticsLocations: i,
        analyticsSubscriptionType: r,
        planGroup: u,
        skuId: c,
        guildId: p,
        reviewWarningMessage: P,
        applicationId: C,
        showBenefitsFirst: h,
        onComplete: f,
        forcesTransitionToGuild: k,
    } = o;
    return new s.od({ checkoutFlow: d.CL.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT }).openCheckoutModal({
        checkoutConfiguration: { skuId: c, applicationId: C, activeSubscription: n },
        checkoutHandlers: { onComplete: f },
        unifiedCheckoutProviderProps: { analyticsLocations: i },
        forwardedPaymentModalProps: {
            initialPlanId: t,
            analyticsLocation: a,
            analyticsObject: e,
            analyticsSubscriptionType: r,
            planGroup: u,
            guildId: p ?? void 0,
            reviewWarningMessage: P,
        },
        tenantParams: { forcesTransitionToGuild: k ?? !1, showBenefitsFirst: h, guildId: p },
        modalAPIOptions: {
            modalKey: "application-payment-modal",
            onCloseCallback: () => {
                (0, l.ET)();
            },
        },
    });
}
async function C(o, t) {
    let n = (await (0, i.LM)(o))
        .filter((o) => null == o.ends_at || new Date(o.ends_at) > new Date())
        .find((o) => o.sku_id === t);
    a()(null == n, "User already has an active subscription to this SKU");
}
async function h(o) {
    let { applicationId: t, skuId: n, initialPlanId: e, analyticsLocationObject: i, analyticsLocations: l } = o,
        d = c.A.get(n),
        s = u.A.getForSKU(n);
    a()(null != d, "Failed to find SKU");
    let h = (0, r.bg)(d.flags);
    (a()(h, "Guild application subscriptions unsupported!"),
        await C(t, n),
        P({
            initialPlanId: e ?? s[0]?.id,
            activeSubscription: null,
            analyticsLocations: l,
            analyticsLocationObject: i,
            analyticsSubscriptionType: p.rzx.APPLICATION,
            planGroup: [],
            skuId: n,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t,
        }));
}
