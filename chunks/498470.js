var c = n(308588),
    _ = n(509434),
    o = n(403581),
    O = n(34188),
    i = n(104510),
    a = n(793574),
    T = n(969935),
    s = n(987144),
    E = n(778705),
    l = n(976860),
    r = n(44724),
    I = n(71393),
    N = n(682901),
    P = n(92737),
    u = n(652215);
n.d(
    e,
    {},
    {
        h: function (t) {
            let {
                buttonAction: e,
                deeplinkSection: n,
                applicationId: _,
                shopCollectionId: o,
                guildId: O,
                analyticsLocations: i = [],
                analyticsLocation: A,
                onClose: R,
            } = t;
            switch (e) {
                case c.d.OPEN_GUILD_BOOST_CHECKOUT:
                    return () => {
                        let t = null != O ? I.A.getGuild(O) : null;
                        null != t &&
                            (0, s.g)({ guild: t, analyticsLocations: i, analyticsLocation: A ?? {}, onClose: R });
                    };
                case c.d.OPEN_SOCIAL_LAYER_STOREFRONT:
                    return () => {
                        (null != _ && (0, r.default)({ applicationId: _ }), R?.());
                    };
                case c.d.OPEN_SHOP:
                    return () => {
                        ((0, T.Cz)({
                            initialCollectionId: o,
                            analyticsLocations: i,
                            analyticsSource: a.A.PREMIUM_MARKETING,
                        }),
                            R?.());
                    };
                case c.d.OPEN_MARKETING_PAGE:
                    return () => {
                        let t =
                            null != n && "" !== n
                                ? `${u.BVt.APPLICATION_STORE}?${P.x}=${encodeURIComponent(n)}`
                                : u.BVt.APPLICATION_STORE;
                        ((0, l.pX)(t), R?.());
                    };
                case c.d.OPEN_TIER_1_PAYMENT_MODAL:
                    return () =>
                        (0, E.A)({
                            subscriptionTier: N.pe.TIER_1,
                            analyticsLocations: i,
                            analyticsObject: { ...A, object: u.ZSU.BUTTON_CTA, objectType: u.btD.TIER_1 },
                            onClose: (t) => {
                                t && R?.();
                            },
                        });
                case c.d.OPEN_PLAN_SELECTION_MODAL:
                    return () => (0, E.A)({ analyticsLocations: i });
                case c.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
                    return () =>
                        (0, E.A)({
                            subscriptionTier: N.pe.TIER_2,
                            initialPlanId: N.gD.PREMIUM_GROUP_MONTH,
                            analyticsLocations: i,
                            analyticsObject: { ...A, object: u.ZSU.BUTTON_CTA, objectType: u.btD.TIER_2 },
                            onClose: (t) => {
                                t && R?.();
                            },
                        });
                case c.d.OPEN_TIER_2_PAYMENT_MODAL:
                case c.d.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
                default:
                    return () =>
                        (0, E.A)({
                            subscriptionTier: N.pe.TIER_2,
                            analyticsLocations: i,
                            analyticsObject: { ...A, object: u.ZSU.BUTTON_CTA, objectType: u.btD.TIER_2 },
                            onClose: (t) => {
                                t && R?.();
                            },
                        });
            }
        },
        x: function (t) {
            let { buttonAction: e } = t;
            switch (e ?? c.d.UNSPECIFIED) {
                case c.d.OPEN_SOCIAL_LAYER_STOREFRONT:
                    return { icon: _.LinkExternalSmallIcon, iconPosition: "end" };
                case c.d.OPEN_SHOP:
                    return { icon: O.ShopIcon };
                case c.d.OPEN_GUILD_BOOST_CHECKOUT:
                    return { icon: i.BoostGemIcon };
                default:
                    return { icon: o.NitroWheelIcon };
            }
        },
    },
);
