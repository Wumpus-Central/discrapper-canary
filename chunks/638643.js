e.d(n, { k: () => I, w: () => p }), e(938796);
var i = e(627968),
    l = e(192308),
    r = e(342098),
    s = e(216678),
    a = e(97352),
    u = e(166403),
    o = e(67480),
    d = e(915043),
    c = e(163437),
    A = e(652215);
async function p(t) {
    let {
            subscriptionPlanId: n,
            sku: s,
            subscriptionGroupPlanIds: p,
            initialSubscribeForGuild: I,
            analyticsLocations: S,
            analyticsLocation: f,
            disableGuildSelector: h = !1,
        } = t,
        { promise: m, resolve: g } = Promise.withResolvers();
    if ((0, c.PJ)(s.flags) && !1 === h) {
        let { promise: t, resolve: n } = Promise.withResolvers();
        (0, l.openModalLazy)(
            async () => {
                let { GuildSubscriptionSelectionModal: t } = await Promise.all([
                    e.e("12410"),
                    e.e("2373"),
                    e.e("8555"),
                    e.e("20287"),
                    e.e("30476"),
                ]).then(e.bind(e, 399143));
                return (e) =>
                    (0, i.jsx)(t, {
                        transitionState: e.transitionState,
                        onClose: e.onClose,
                        sku: s,
                        onSelect: n,
                        currentGuildId: I,
                    });
            },
            { stackingBehavior: "stack" },
        ),
            (I = await t);
    }
    let v = o.A.getParentSKU(s.id),
        x = null;
    return (
        null != v &&
            ([x] = (0, d.wm)({
                groupSku: v,
                SubscriptionStore: u.A,
                SubscriptionPlanStore: a.A,
                mapSubscriptionItems: d.W_,
                guildId: I,
            })),
        (0, r.A)({
            initialPlanId: n,
            skuId: s.id,
            activeSubscription: x,
            applicationId: s.applicationId,
            planGroup: p,
            guildId: I,
            analyticsSubscriptionType: A.rzx.APPLICATION,
            analyticsLocations: S,
            analyticsLocation: f,
            onComplete: g,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
        }),
        m
    );
}
function I(t) {
    let { appId: n, skuId: e, analyticsLocations: i, checkoutFlow: l } = t;
    (0, s.q)({ applicationId: n, skuId: e, analyticsLocations: i, checkoutFlow: l });
}
