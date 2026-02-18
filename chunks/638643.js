i.d(e, { k: () => A, w: () => I }), i(938796);
var n = i(627968),
    l = i(397927),
    s = i(342098),
    r = i(216678),
    a = i(97352),
    u = i(166403),
    o = i(67480),
    c = i(915043),
    d = i(163437),
    p = i(490744),
    S = i(652215);
async function I(t) {
    let {
            subscriptionPlanId: e,
            sku: r,
            subscriptionGroupPlanIds: I,
            initialSubscribeForGuild: A,
            analyticsLocations: _,
            analyticsLocation: T,
            disableGuildSelector: E = !1,
        } = t,
        { promise: f, resolve: C } = Promise.withResolvers();
    if ((0, d.PJ)(r.flags) && !1 === E) {
        let { promise: t, resolve: e } = Promise.withResolvers();
        (0, l.mMO)(
            async () => {
                let { GuildSubscriptionSelectionModal: t } = await Promise.all([i.e("8555"), i.e("30476")]).then(
                    i.bind(i, 399143),
                );
                return (i) =>
                    (0, n.jsx)(t, {
                        transitionState: i.transitionState,
                        onClose: i.onClose,
                        sku: r,
                        onSelect: e,
                        currentGuildId: A,
                    });
            },
            { stackingBehavior: "stack" },
        ),
            (A = await t);
    }
    let N = o.A.getParentSKU(r.id),
        h = null;
    return (
        null != N &&
            ([h] = (0, c.wm)({
                groupSku: N,
                SubscriptionStore: u.A,
                SubscriptionPlanStore: a.A,
                mapSubscriptionItems: c.W_,
                guildId: A,
            })),
        (0, s.A)({
            initialPlanId: e,
            skuId: r.id,
            activeSubscription: h,
            applicationId: r.applicationId,
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
        f
    );
}
function A(t) {
    let { appId: e, skuId: i, analyticsLocations: n } = t;
    (0, r.A)({ applicationId: e, skuId: i, analyticsLocations: n });
}
