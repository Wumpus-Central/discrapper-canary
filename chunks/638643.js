n.d(t, {
    k: () => h,
    w: () => _,
}),
    n(938796),
    n(896048);
var r = n(627968),
    i = n(397927),
    a = n(342098),
    s = n(216678),
    o = n(97352),
    l = n(166403),
    c = n(67480),
    u = n(915043),
    d = n(163437),
    f = n(490744),
    p = n(652215);
async function _(e) {
    let {
            subscriptionPlanId: t,
            sku: s,
            subscriptionGroupPlanIds: _,
            initialSubscribeForGuild: h,
            analyticsLocations: m,
            analyticsLocation: g,
            disableGuildSelector: E = !1,
        } = e,
        { promise: b, resolve: y } = Promise.withResolvers();
    if ((0, d.PJ)(s.flags) && !1 === E) {
        let { promise: e, resolve: t } = Promise.withResolvers();
        (0, i.mMO)(
            async () => {
                let { GuildSubscriptionSelectionModal: e } = await n.e("30476").then(n.bind(n, 399143));
                return (n) =>
                    (0, r.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        sku: s,
                        onSelect: t,
                        currentGuildId: h,
                    });
            },
            { stackingBehavior: "stack" },
        ),
            (h = await e);
    }
    let O = c.A.getParentSKU(s.id),
        A = null;
    return (
        null != O &&
            ([A] = (0, u.wm)({
                groupSku: O,
                SubscriptionStore: l.A,
                SubscriptionPlanStore: o.A,
                mapSubscriptionItems: u.W_,
                guildId: h,
            })),
        (0, a.A)({
            initialPlanId: t,
            skuId: s.id,
            activeSubscription: A,
            applicationId: s.applicationId,
            planGroup: _,
            guildId: h,
            renderHeader: (e, t, n) =>
                (0, r.jsx)(f.fs, {
                    step: n,
                    onClose: () => t(!1),
                }),
            analyticsSubscriptionType: p.rzx.APPLICATION,
            analyticsLocations: m,
            analyticsLocation: g,
            onComplete: y,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
        }),
        b
    );
}
function h(e) {
    let { appId: t, skuId: n, analyticsLocations: r } = e;
    (0, s.A)({
        applicationId: t,
        skuId: n,
        analyticsLocations: r,
    });
}
