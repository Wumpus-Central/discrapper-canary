n.d(e, { k: () => S, w: () => I }), n(938796);
var i = n(627968),
    l = n(192308),
    r = n(342098),
    s = n(216678),
    a = n(97352),
    o = n(166403),
    u = n(67480),
    d = n(915043),
    c = n(163437),
    A = n(490744),
    p = n(652215);
async function I(t) {
    let {
            subscriptionPlanId: e,
            sku: s,
            subscriptionGroupPlanIds: I,
            initialSubscribeForGuild: S,
            analyticsLocations: h,
            analyticsLocation: m,
            disableGuildSelector: g = !1,
        } = t,
        { promise: x, resolve: f } = Promise.withResolvers();
    if ((0, c.PJ)(s.flags) && !1 === g) {
        let { promise: t, resolve: e } = Promise.withResolvers();
        (0, l.openModalLazy)(
            async () => {
                let { GuildSubscriptionSelectionModal: t } = await Promise.all([
                    n.e("2373"),
                    n.e("8555"),
                    n.e("30476"),
                ]).then(n.bind(n, 399143));
                return (n) =>
                    (0, i.jsx)(t, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        sku: s,
                        onSelect: e,
                        currentGuildId: S,
                    });
            },
            { stackingBehavior: "stack" },
        ),
            (S = await t);
    }
    let v = u.A.getParentSKU(s.id),
        P = null;
    return (
        null != v &&
            ([P] = (0, d.wm)({
                groupSku: v,
                SubscriptionStore: o.A,
                SubscriptionPlanStore: a.A,
                mapSubscriptionItems: d.W_,
                guildId: S,
            })),
        (0, r.A)({
            initialPlanId: e,
            skuId: s.id,
            activeSubscription: P,
            applicationId: s.applicationId,
            planGroup: I,
            guildId: S,
            renderHeader: (t, e, n) => (0, i.jsx)(A.fs, { step: n, onClose: () => e(!1) }),
            analyticsSubscriptionType: p.rzx.APPLICATION,
            analyticsLocations: h,
            analyticsLocation: m,
            onComplete: f,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
        }),
        x
    );
}
function S(t) {
    let { appId: e, skuId: n, analyticsLocations: i, checkoutFlow: l } = t;
    (0, s.A)({ applicationId: e, skuId: n, analyticsLocations: i, checkoutFlow: l });
}
