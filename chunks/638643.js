n.d(e, { k: () => I, w: () => S }), n(938796);
var i = n(627968),
    l = n(397927),
    r = n(342098),
    s = n(216678),
    u = n(97352),
    a = n(166403),
    o = n(67480),
    c = n(915043),
    d = n(163437),
    A = n(490744),
    p = n(652215);
async function S(t) {
    let {
            subscriptionPlanId: e,
            sku: s,
            subscriptionGroupPlanIds: S,
            initialSubscribeForGuild: I,
            analyticsLocations: f,
            analyticsLocation: E,
            disableGuildSelector: g = !1,
        } = t,
        { promise: m, resolve: T } = Promise.withResolvers();
    if ((0, d.PJ)(s.flags) && !1 === g) {
        let { promise: t, resolve: e } = Promise.withResolvers();
        (0, l.mMO)(
            async () => {
                let { GuildSubscriptionSelectionModal: t } = await n.e("30476").then(n.bind(n, 399143));
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
    let _ = o.A.getParentSKU(s.id),
        N = null;
    return (
        null != _ &&
            ([N] = (0, c.wm)({
                groupSku: _,
                SubscriptionStore: a.A,
                SubscriptionPlanStore: u.A,
                mapSubscriptionItems: c.W_,
                guildId: I,
            })),
        (0, r.A)({
            initialPlanId: e,
            skuId: s.id,
            activeSubscription: N,
            applicationId: s.applicationId,
            planGroup: S,
            guildId: I,
            renderHeader: (t, e, n) => (0, i.jsx)(A.fs, { step: n, onClose: () => e(!1) }),
            analyticsSubscriptionType: p.rzx.APPLICATION,
            analyticsLocations: f,
            analyticsLocation: E,
            onComplete: T,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
        }),
        m
    );
}
function I(t) {
    let { appId: e, skuId: n, analyticsLocations: i } = t;
    (0, s.A)({ applicationId: e, skuId: n, analyticsLocations: i });
}
