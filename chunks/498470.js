_.d(e, { h: () => I, x: () => u });
var n = _(308588),
    c = _(509434),
    O = _(403581),
    T = _(104510),
    a = _(987144),
    i = _(75678),
    s = _(976860),
    E = _(44724),
    o = _(71393),
    l = _(202541),
    r = _(92737),
    A = _(652215);
function u(t) {
    let { buttonAction: e } = t;
    switch (e ?? n.d.UNSPECIFIED) {
        case n.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return { icon: c.I, iconPosition: "end" };
        case n.d.OPEN_GUILD_BOOST_CHECKOUT:
            return { icon: T._ };
        default:
            return { icon: O.t };
    }
}
function I(t) {
    let {
        buttonAction: e,
        deeplinkSection: _,
        applicationId: c,
        guildId: O,
        analyticsLocations: T = [],
        analyticsLocation: u,
        onClose: I,
    } = t;
    switch (e) {
        case n.d.OPEN_GUILD_BOOST_CHECKOUT:
            return () => {
                let t = null != O ? o.A.getGuild(O) : null;
                null != t && (0, a.g)({ guild: t, analyticsLocations: T, analyticsLocation: u ?? {}, onClose: I });
            };
        case n.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return () => {
                (null != c && (0, E.default)({ applicationId: c }), I?.());
            };
        case n.d.OPEN_MARKETING_PAGE:
            return () => {
                let t =
                    null != _ && "" !== _
                        ? `${A.BVt.APPLICATION_STORE}?${r.x}=${encodeURIComponent(_)}`
                        : A.BVt.APPLICATION_STORE;
                ((0, s.pX)(t), I?.());
            };
        case n.d.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, i.A)({
                    subscriptionTier: l.pe.TIER_1,
                    analyticsLocations: T,
                    analyticsObject: { ...u, object: A.ZSU.BUTTON_CTA, objectType: A.btD.TIER_1 },
                    onClose: (t) => {
                        t && I?.();
                    },
                });
        case n.d.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, i.A)({ analyticsLocations: T });
        case n.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, i.A)({
                    subscriptionTier: l.pe.TIER_2,
                    initialPlanId: l.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: T,
                    analyticsObject: { ...u, object: A.ZSU.BUTTON_CTA, objectType: A.btD.TIER_2 },
                    onClose: (t) => {
                        t && I?.();
                    },
                });
        case n.d.OPEN_TIER_2_PAYMENT_MODAL:
        case n.d.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, i.A)({
                    subscriptionTier: l.pe.TIER_2,
                    analyticsLocations: T,
                    analyticsObject: { ...u, object: A.ZSU.BUTTON_CTA, objectType: A.btD.TIER_2 },
                    onClose: (t) => {
                        t && I?.();
                    },
                });
    }
}
