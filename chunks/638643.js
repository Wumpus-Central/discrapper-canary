n.d(e, { k: () => S, w: () => I }), n(938796);
var i = n(627968),
    l = n(192308),
    r = n(342098),
    s = n(216678),
    a = n(97352),
    u = n(166403),
    o = n(67480),
    d = n(915043),
    c = n(163437),
    A = n(897904),
    p = n(652215);
async function I(t) {
    let {
            subscriptionPlanId: e,
            sku: s,
            subscriptionGroupPlanIds: I,
            initialSubscribeForGuild: S,
            analyticsLocations: h,
            analyticsLocation: f,
            disableGuildSelector: m = !1,
        } = t,
        { promise: g, resolve: x } = Promise.withResolvers();
    if ((0, c.PJ)(s.flags) && !1 === m) {
        let { promise: t, resolve: e } = Promise.withResolvers();
        (0, l.openModalLazy)(
            async () => {
                let { GuildSubscriptionSelectionModal: t } = await Promise.all([
                    n.e("67525"),
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
    let v = o.A.getParentSKU(s.id),
        P = null;
    return (
        null != v &&
            ([P] = (0, d.wm)({
                groupSku: v,
                SubscriptionStore: u.A,
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
            analyticsLocation: f,
            onComplete: x,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
        }),
        g
    );
}
function S(t) {
    let { appId: e, skuId: n, analyticsLocations: i, checkoutFlow: l } = t;
    (0, s.q)({ applicationId: e, skuId: n, analyticsLocations: i, checkoutFlow: l });
}
