c.d(e, { h: () => I, x: () => u });
var n = c(308588),
    _ = c(509434),
    O = c(403581),
    T = c(104510),
    s = c(987144),
    a = c(75678),
    i = c(976860),
    E = c(44724),
    o = c(71393),
    l = c(202541),
    A = c(92737),
    r = c(652215);
function u(t) {
    let { buttonAction: e } = t;
    switch (e ?? n.d.UNSPECIFIED) {
        case n.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return { icon: _.I, iconPosition: "end" };
        case n.d.OPEN_GUILD_BOOST_CHECKOUT:
            return { icon: T._ };
        default:
            return { icon: O.t };
    }
}
function I(t) {
    let {
        buttonAction: e,
        deeplinkSection: c,
        applicationId: _,
        guildId: O,
        analyticsLocations: T = [],
        analyticsLocation: u,
        onClose: I,
    } = t;
    switch (e) {
        case n.d.OPEN_GUILD_BOOST_CHECKOUT:
            return () => {
                let t = null != O ? o.A.getGuild(O) : null;
                null != t && (0, s.g)({ guild: t, analyticsLocations: T, analyticsLocation: u ?? {}, onClose: I });
            };
        case n.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return () => {
                (null != _ && (0, E.default)({ applicationId: _ }), I?.());
            };
        case n.d.OPEN_MARKETING_PAGE:
            return () => {
                let t =
                    null != c && "" !== c
                        ? `${r.BVt.APPLICATION_STORE}?${A.x}=${encodeURIComponent(c)}`
                        : r.BVt.APPLICATION_STORE;
                ((0, i.pX)(t), I?.());
            };
        case n.d.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_1,
                    analyticsLocations: T,
                    analyticsObject: { ...u, object: r.ZSU.BUTTON_CTA, objectType: r.AnalyticsObjectTypes.TIER_1 },
                    onClose: (t) => {
                        t && I?.();
                    },
                });
        case n.d.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, a.A)({ analyticsLocations: T });
        case n.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_2,
                    initialPlanId: l.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: T,
                    analyticsObject: { ...u, object: r.ZSU.BUTTON_CTA, objectType: r.AnalyticsObjectTypes.TIER_2 },
                    onClose: (t) => {
                        t && I?.();
                    },
                });
        case n.d.OPEN_TIER_2_PAYMENT_MODAL:
        case n.d.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_2,
                    analyticsLocations: T,
                    analyticsObject: { ...u, object: r.ZSU.BUTTON_CTA, objectType: r.AnalyticsObjectTypes.TIER_2 },
                    onClose: (t) => {
                        t && I?.();
                    },
                });
    }
}
