l.d(e, { k: () => I, w: () => h }), l(938796);
var i = l(627968),
    n = l(192308),
    a = l(342098),
    s = l(216678),
    r = l(97352),
    o = l(166403),
    d = l(67480),
    u = l(169820),
    c = l(163437),
    A = l(490744),
    p = l(652215);
async function h(t) {
    let {
            subscriptionPlanId: e,
            sku: s,
            subscriptionGroupPlanIds: h,
            initialSubscribeForGuild: I,
            analyticsLocations: m,
            analyticsLocation: f,
            disableGuildSelector: g = !1,
        } = t,
        { promise: v, resolve: x } = Promise.withResolvers();
    if ((0, c.PJ)(s.flags) && !1 === g) {
        let { promise: t, resolve: e } = Promise.withResolvers();
        (0, n.openModalLazy)(
            async () => {
                let { GuildSubscriptionSelectionModal: t } = await Promise.all([l.e("8555"), l.e("30476")]).then(
                    l.bind(l, 399143),
                );
                return (l) =>
                    (0, i.jsx)(t, {
                        transitionState: l.transitionState,
                        onClose: l.onClose,
                        sku: s,
                        onSelect: e,
                        currentGuildId: I,
                    });
            },
            { stackingBehavior: "stack" },
        ),
            (I = await t);
    }
    let S = d.A.getParentSKU(s.id),
        E = null;
    return (
        null != S &&
            ([E] = (0, u.wm)({
                groupSku: S,
                SubscriptionStore: o.A,
                SubscriptionPlanStore: r.A,
                mapSubscriptionItems: u.W_,
                guildId: I,
            })),
        (0, a.A)({
            initialPlanId: e,
            skuId: s.id,
            activeSubscription: E,
            applicationId: s.applicationId,
            planGroup: h,
            guildId: I,
            renderHeader: (t, e, l) => (0, i.jsx)(A.fs, { step: l, onClose: () => e(!1) }),
            analyticsSubscriptionType: p.rzx.APPLICATION,
            analyticsLocations: m,
            analyticsLocation: f,
            onComplete: x,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
        }),
        v
    );
}
function I(t) {
    let { appId: e, skuId: l, analyticsLocations: i, checkoutFlow: n } = t;
    (0, s.A)({ applicationId: e, skuId: l, analyticsLocations: i, checkoutFlow: n });
}
