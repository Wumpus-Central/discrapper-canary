i.d(e, { k: () => A, w: () => I }), i(938796);
var n = i(627968),
    l = i(192308),
    s = i(342098),
    a = i(216678),
    r = i(97352),
    o = i(166403),
    u = i(67480),
    c = i(915043),
    d = i(163437),
    p = i(490744),
    S = i(652215);
async function I(t) {
    let {
            subscriptionPlanId: e,
            sku: a,
            subscriptionGroupPlanIds: I,
            initialSubscribeForGuild: A,
            analyticsLocations: _,
            analyticsLocation: T,
            disableGuildSelector: h = !1,
        } = t,
        { promise: E, resolve: C } = Promise.withResolvers();
    if ((0, d.PJ)(a.flags) && !1 === h) {
        let { promise: t, resolve: e } = Promise.withResolvers();
        (0, l.openModalLazy)(
            async () => {
                let { GuildSubscriptionSelectionModal: t } = await Promise.all([i.e("8555"), i.e("30476")]).then(
                    i.bind(i, 399143),
                );
                return (i) =>
                    (0, n.jsx)(t, {
                        transitionState: i.transitionState,
                        onClose: i.onClose,
                        sku: a,
                        onSelect: e,
                        currentGuildId: A,
                    });
            },
            { stackingBehavior: "stack" },
        ),
            (A = await t);
    }
    let f = u.A.getParentSKU(a.id),
        g = null;
    return (
        null != f &&
            ([g] = (0, c.wm)({
                groupSku: f,
                SubscriptionStore: o.A,
                SubscriptionPlanStore: r.A,
                mapSubscriptionItems: c.W_,
                guildId: A,
            })),
        (0, s.A)({
            initialPlanId: e,
            skuId: a.id,
            activeSubscription: g,
            applicationId: a.applicationId,
            planGroup: I,
            guildId: A,
            renderHeader: (t, e, i) => (0, n.jsx)(p.fs, { step: i, onClose: () => e(!1) }),
            analyticsSubscriptionType: S.rzx.APPLICATION,
            analyticsLocations: _,
            analyticsLocation: T,
            onComplete: C,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
        }),
        E
    );
}
function A(t) {
    let { appId: e, skuId: i, analyticsLocations: n, checkoutFlow: l } = t;
    (0, a.A)({ applicationId: e, skuId: i, analyticsLocations: n, checkoutFlow: l });
}
