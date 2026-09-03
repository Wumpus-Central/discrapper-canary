n.d(t, { h: () => u, x: () => E });
var i = n(308588),
    l = n(403581),
    c = n(987144),
    r = n(75678),
    s = n(976860),
    a = n(44724),
    o = n(71393),
    _ = n(202541),
    A = n(92737),
    T = n(652215);
function E(e) {
    let { buttonAction: t } = e;
    return (t ?? i.d.UNSPECIFIED) === i.d.OPEN_SOCIAL_LAYER_STOREFRONT ? { icon: void 0 } : { icon: l.t };
}
function u(e) {
    let {
        buttonAction: t,
        deeplinkSection: n,
        applicationId: l,
        guildId: E,
        analyticsLocations: u = [],
        analyticsLocation: I,
        onClose: R,
    } = e;
    switch (t) {
        case i.d.OPEN_GUILD_BOOST_CHECKOUT:
            return () => {
                let e = null != E ? o.A.getGuild(E) : null;
                null != e && (0, c.g)({ guild: e, analyticsLocations: u, analyticsLocation: I ?? {}, onClose: R });
            };
        case i.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return () => {
                null != l && (0, a.default)({ applicationId: l }), R?.();
            };
        case i.d.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != n && "" !== n
                        ? `${T.BVt.APPLICATION_STORE}?${A.x}=${encodeURIComponent(n)}`
                        : T.BVt.APPLICATION_STORE;
                (0, s.pX)(e), R?.();
            };
        case i.d.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, r.A)({
                    subscriptionTier: _.pe.TIER_1,
                    analyticsLocations: u,
                    analyticsObject: { ...I, object: T.ZSU.BUTTON_CTA, objectType: T.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && R?.();
                    },
                });
        case i.d.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, r.A)({ analyticsLocations: u });
        case i.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, r.A)({
                    subscriptionTier: _.pe.TIER_2,
                    initialPlanId: _.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: u,
                    analyticsObject: { ...I, object: T.ZSU.BUTTON_CTA, objectType: T.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && R?.();
                    },
                });
        case i.d.OPEN_TIER_2_PAYMENT_MODAL:
        case i.d.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, r.A)({
                    subscriptionTier: _.pe.TIER_2,
                    analyticsLocations: u,
                    analyticsObject: { ...I, object: T.ZSU.BUTTON_CTA, objectType: T.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && R?.();
                    },
                });
    }
}
