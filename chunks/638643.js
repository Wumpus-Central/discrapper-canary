n.d(e, { k: () => I, w: () => p }), n(938796);
var i = n(627968),
    l = n(192308),
    r = n(342098),
    s = n(216678),
    a = n(97352),
    u = n(166403),
    o = n(67480),
    d = n(915043),
    c = n(163437),
    A = n(652215);
async function p(t) {
    let {
            subscriptionPlanId: e,
            sku: s,
            subscriptionGroupPlanIds: p,
            initialSubscribeForGuild: I,
            analyticsLocations: S,
            analyticsLocation: h,
            disableGuildSelector: m = !1,
        } = t,
        { promise: f, resolve: g } = Promise.withResolvers();
    if ((0, c.PJ)(s.flags) && !1 === m) {
        let { promise: t, resolve: e } = Promise.withResolvers();
        (0, l.openModalLazy)(
            async () => {
                let { GuildSubscriptionSelectionModal: t } = await Promise.all([
                    n.e("33973"),
                    n.e("2373"),
                    n.e("8555"),
                    n.e("20287"),
                    n.e("30476"),
                ]).then(n.bind(n, 399143));
                return (n) =>
                    (0, i.jsx)(t, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        sku: s,
                        onSelect: e,
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
            initialPlanId: e,
            skuId: s.id,
            activeSubscription: x,
            applicationId: s.applicationId,
            planGroup: p,
            guildId: I,
            analyticsSubscriptionType: A.rzx.APPLICATION,
            analyticsLocations: S,
            analyticsLocation: h,
            onComplete: g,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
        }),
        f
    );
}
function I(t) {
    let { appId: e, skuId: n, analyticsLocations: i, checkoutFlow: l } = t;
    (0, s.q)({ applicationId: e, skuId: n, analyticsLocations: i, checkoutFlow: l });
}
