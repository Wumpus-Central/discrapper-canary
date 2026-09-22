t.d(n, { h: () => N, x: () => u });
var i = t(308588),
    c = t(509434),
    l = t(403581),
    o = t(104510),
    s = t(987144),
    r = t(75678),
    a = t(976860),
    _ = t(44724),
    T = t(71393),
    A = t(202541),
    E = t(92737),
    I = t(652215);
function u(e) {
    let { buttonAction: n } = e;
    switch (n ?? i.d.UNSPECIFIED) {
        case i.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return { icon: c.I, iconPosition: "end" };
        case i.d.OPEN_GUILD_BOOST_CHECKOUT:
            return { icon: o._ };
        default:
            return { icon: l.t };
    }
}
function N(e) {
    let {
        buttonAction: n,
        deeplinkSection: t,
        applicationId: c,
        guildId: l,
        analyticsLocations: o = [],
        analyticsLocation: u,
        onClose: N,
    } = e;
    switch (n) {
        case i.d.OPEN_GUILD_BOOST_CHECKOUT:
            return () => {
                let e = null != l ? T.A.getGuild(l) : null;
                null != e && (0, s.g)({ guild: e, analyticsLocations: o, analyticsLocation: u ?? {}, onClose: N });
            };
        case i.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return () => {
                (null != c && (0, _.default)({ applicationId: c }), N?.());
            };
        case i.d.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != t && "" !== t
                        ? `${I.BVt.APPLICATION_STORE}?${E.x}=${encodeURIComponent(t)}`
                        : I.BVt.APPLICATION_STORE;
                ((0, a.pX)(e), N?.());
            };
        case i.d.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, r.A)({
                    subscriptionTier: A.pe.TIER_1,
                    analyticsLocations: o,
                    analyticsObject: { ...u, object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && N?.();
                    },
                });
        case i.d.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, r.A)({ analyticsLocations: o });
        case i.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, r.A)({
                    subscriptionTier: A.pe.TIER_2,
                    initialPlanId: A.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: o,
                    analyticsObject: { ...u, object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && N?.();
                    },
                });
        case i.d.OPEN_TIER_2_PAYMENT_MODAL:
        case i.d.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, r.A)({
                    subscriptionTier: A.pe.TIER_2,
                    analyticsLocations: o,
                    analyticsObject: { ...u, object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && N?.();
                    },
                });
    }
}
