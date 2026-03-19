i.d(e, { k: () => A, w: () => I }), i(938796);
var n = i(627968),
    l = i(397927),
    s = i(342098),
    a = i(216678),
    r = i(97352),
    u = i(166403),
    o = i(67480),
    c = i(915043),
    d = i(163437),
    S = i(490744),
    p = i(652215);
async function I(t) {
    let {
            subscriptionPlanId: e,
            sku: a,
            subscriptionGroupPlanIds: I,
            initialSubscribeForGuild: A,
            analyticsLocations: _,
            analyticsLocation: T,
            disableGuildSelector: E = !1,
        } = t,
        { promise: C, resolve: f } = Promise.withResolvers();
    if ((0, d.PJ)(a.flags) && !1 === E) {
        let { promise: t, resolve: e } = Promise.withResolvers();
        (0, l.mMO)(
            async () => {
                let { GuildSubscriptionSelectionModal: t } = await Promise.all([i.e("8555"), i.e("30476")]).then(
                    i.bind(i, 621524),
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
    let h = o.A.getParentSKU(a.id),
        N = null;
    return (
        null != h &&
            ([N] = (0, c.wm)({
                groupSku: h,
                SubscriptionStore: u.A,
                SubscriptionPlanStore: r.A,
                mapSubscriptionItems: c.W_,
                guildId: A,
            })),
        (0, s.A)({
            initialPlanId: e,
            skuId: a.id,
            activeSubscription: N,
            applicationId: a.applicationId,
            planGroup: I,
            guildId: A,
            renderHeader: (t, e, i) => (0, n.jsx)(S.fs, { step: i, onClose: () => e(!1) }),
            analyticsSubscriptionType: p.rzx.APPLICATION,
            analyticsLocations: _,
            analyticsLocation: T,
            onComplete: f,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
        }),
        C
    );
}
function A(t) {
    let { appId: e, skuId: i, analyticsLocations: n, checkoutFlow: l } = t;
    (0, a.A)({ applicationId: e, skuId: i, analyticsLocations: n, checkoutFlow: l });
}
