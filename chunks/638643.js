(i.d(n, { k: () => I, w: () => p }), i(938796));
var e = i(477900),
    l = i(192308),
    r = i(342098),
    s = i(216678),
    a = i(97352),
    o = i(166403),
    u = i(67480),
    d = i(915043),
    c = i(163437),
    A = i(652215);
async function p(t) {
    let {
            subscriptionPlanId: n,
            sku: s,
            subscriptionGroupPlanIds: p,
            initialSubscribeForGuild: I,
            analyticsLocations: S,
            analyticsLocation: f,
            disableGuildSelector: m = !1,
        } = t,
        { promise: h, resolve: g } = Promise.withResolvers();
    if ((0, c.PJ)(s.flags) && !1 === m) {
        let { promise: t, resolve: n } = Promise.withResolvers();
        ((0, l.openModalLazy)(
            async () => {
                let { GuildSubscriptionSelectionModal: t } = await Promise.all([
                    i.e("775417"),
                    i.e("970062"),
                    i.e("308555"),
                    i.e("220287"),
                    i.e("930476"),
                ]).then(i.bind(i, 399143));
                return (i) =>
                    (0, e.jsx)(t, {
                        transitionState: i.transitionState,
                        onClose: i.onClose,
                        sku: s,
                        onSelect: n,
                        currentGuildId: I,
                    });
            },
            { stackingBehavior: "stack" },
        ),
            (I = await t));
    }
    let v = u.A.getParentSKU(s.id),
        b = null;
    return (
        null != v &&
            ([b] = (0, d.wm)({
                groupSku: v,
                SubscriptionStore: o.A,
                SubscriptionPlanStore: a.A,
                mapSubscriptionItems: d.W_,
                guildId: I,
            })),
        (0, r.A)({
            initialPlanId: n,
            skuId: s.id,
            activeSubscription: b,
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
        h
    );
}
function I(t) {
    let { appId: n, skuId: i, analyticsLocations: e, checkoutFlow: l } = t;
    (0, s.q)({ applicationId: n, skuId: i, analyticsLocations: e, checkoutFlow: l });
}
