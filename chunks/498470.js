t.d(n, { h: () => d, x: () => I });
var i = t(308588),
    l = t(509434),
    c = t(403581),
    r = t(104510),
    o = t(987144),
    s = t(75678),
    a = t(976860),
    _ = t(44724),
    A = t(71393),
    T = t(202541),
    u = t(92737),
    E = t(652215);
function I(e) {
    let { buttonAction: n } = e;
    switch (n ?? i.d.UNSPECIFIED) {
        case i.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return { icon: l.I, iconPosition: "end" };
        case i.d.OPEN_GUILD_BOOST_CHECKOUT:
            return { icon: r._ };
        default:
            return { icon: c.t };
    }
}
function d(e) {
    let {
        buttonAction: n,
        deeplinkSection: t,
        applicationId: l,
        guildId: c,
        analyticsLocations: r = [],
        analyticsLocation: I,
        onClose: d,
    } = e;
    switch (n) {
        case i.d.OPEN_GUILD_BOOST_CHECKOUT:
            return () => {
                let e = null != c ? A.A.getGuild(c) : null;
                null != e && (0, o.g)({ guild: e, analyticsLocations: r, analyticsLocation: I ?? {}, onClose: d });
            };
        case i.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return () => {
                (null != l && (0, _.default)({ applicationId: l }), d?.());
            };
        case i.d.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != t && "" !== t
                        ? `${E.BVt.APPLICATION_STORE}?${u.x}=${encodeURIComponent(t)}`
                        : E.BVt.APPLICATION_STORE;
                ((0, a.pX)(e), d?.());
            };
        case i.d.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, s.A)({
                    subscriptionTier: T.pe.TIER_1,
                    analyticsLocations: r,
                    analyticsObject: { ...I, object: E.ZSU.BUTTON_CTA, objectType: E.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
        case i.d.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, s.A)({ analyticsLocations: r });
        case i.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, s.A)({
                    subscriptionTier: T.pe.TIER_2,
                    initialPlanId: T.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: r,
                    analyticsObject: { ...I, object: E.ZSU.BUTTON_CTA, objectType: E.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
        case i.d.OPEN_TIER_2_PAYMENT_MODAL:
        case i.d.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, s.A)({
                    subscriptionTier: T.pe.TIER_2,
                    analyticsLocations: r,
                    analyticsObject: { ...I, object: E.ZSU.BUTTON_CTA, objectType: E.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
    }
}
