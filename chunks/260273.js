n.d(t, { rc: () => d, iz: () => o, p5: () => c });
var i = n(120700),
    r = n(652215);
let a = {
        [i.C.PREMIUM_CHECKOUT]: r.rzx.PREMIUM,
        [i.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: r.rzx.PREMIUM,
        [i.C.GUILD_BOOST_CHECKOUT]: r.rzx.PREMIUM,
        [i.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: r.rzx.APPLICATION,
        [i.C.GUILD_ROLE_CHECKOUT]: r.rzx.GUILD,
        [i.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: r.rzx.PREMIUM,
    },
    s = new Set([i.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]);
var l = n(682901);
let o = {},
    d = {
        skuIds: [],
        isGift: !1,
        sharedCheckoutParams: o,
        activeSubscription: null,
        excludeSubscriptionPlansBySKU: !1,
        purchaseType: r.VVm.SUBSCRIPTION,
        applicationId: l.tv,
        paymentGateway: void 0,
        defaultPlanId: void 0,
        customCheckoutFlow: void 0,
        unifiedCheckoutFlow: void 0,
        tenantParamsMap: {},
    };
function c(e, t, n) {
    return {
        ...n,
        getTenantParams: (e) => t().tenantParamsMap[e],
        getAnalyticsSubscriptionType: () => {
            let { unifiedCheckoutFlow: e } = t();
            return (null != e ? a[e] : void 0) ?? r.rzx.PREMIUM;
        },
        getTenantManagesPaymentAuth: () => {
            let { unifiedCheckoutFlow: e } = t();
            return null != e && s.has(e);
        },
        getSharedCheckoutParams: () => t().sharedCheckoutParams,
        setCheckoutInitParameters: (n) => {
            var i;
            let { skuIds: r, ...a } = n,
                s = ((i = t().skuIds), null != r && (r.length !== i.length || r.some((e, t) => e !== i[t])));
            e({ ...a, ...(s ? { skuIds: r } : {}) });
        },
    };
}
