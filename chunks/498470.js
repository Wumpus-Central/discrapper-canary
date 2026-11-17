var n = c(308588),
    _ = c(509434),
    T = c(403581),
    i = c(34188),
    o = c(104510),
    a = c(793574),
    O = c(969935),
    s = c(987144),
    E = c(778705),
    l = c(976860),
    r = c(44724),
    I = c(71393),
    A = c(990820),
    N = c(682901),
    u = c(92737),
    P = c(652215);
c.d(
    e,
    {},
    {
        h: function (t) {
            let {
                buttonAction: e,
                deeplinkSection: c,
                applicationId: _,
                shopCollectionId: T,
                giftModalDestination: i,
                guildId: o,
                analyticsLocations: R = [],
                analyticsLocation: d,
                onClose: b,
            } = t;
            switch (e) {
                case n.dz.OPEN_GUILD_BOOST_CHECKOUT:
                    return () => {
                        let t = null != o ? I.A.getGuild(o) : null;
                        null != t &&
                            (0, s.g)({ guild: t, analyticsLocations: R, analyticsLocation: d ?? {}, onClose: b });
                    };
                case n.dz.OPEN_SOCIAL_LAYER_STOREFRONT:
                    return () => {
                        (null != _ && (0, r.default)({ applicationId: _ }), b?.());
                    };
                case n.dz.OPEN_SHOP:
                    return () => {
                        ((0, O.Cz)({
                            initialCollectionId: T,
                            analyticsLocations: R,
                            analyticsSource: a.A.PREMIUM_MARKETING,
                        }),
                            b?.());
                    };
                case n.dz.OPEN_MARKETING_PAGE:
                    return () => {
                        let t =
                            null != c && "" !== c
                                ? `${P.BVt.APPLICATION_STORE}?${u.x}=${encodeURIComponent(c)}`
                                : P.BVt.APPLICATION_STORE;
                        ((0, l.pX)(t), b?.());
                    };
                case n.dz.OPEN_GIFT_MODAL:
                    if (i === n.We.TIER_2)
                        return () =>
                            (0, E.A)({
                                isGift: !0,
                                subscriptionTier: N.pe.TIER_2,
                                analyticsLocations: R,
                                analyticsObject: { ...d, object: P.ZSU.BUTTON_CTA, objectType: P.btD.TIER_2 },
                                onClose: (t) => {
                                    t && b?.();
                                },
                            });
                    return () =>
                        (0, A.A)({
                            analyticsLocations: R,
                            analyticsObject: { ...d, object: P.ZSU.BUTTON_CTA, objectType: P.btD.BUY },
                        });
                case n.dz.OPEN_TIER_1_PAYMENT_MODAL:
                    return () =>
                        (0, E.A)({
                            subscriptionTier: N.pe.TIER_1,
                            analyticsLocations: R,
                            analyticsObject: { ...d, object: P.ZSU.BUTTON_CTA, objectType: P.btD.TIER_1 },
                            onClose: (t) => {
                                t && b?.();
                            },
                        });
                case n.dz.OPEN_PLAN_SELECTION_MODAL:
                    return () => (0, E.A)({ analyticsLocations: R });
                case n.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
                    return () =>
                        (0, E.A)({
                            subscriptionTier: N.pe.TIER_2,
                            initialPlanId: N.gD.PREMIUM_GROUP_MONTH,
                            analyticsLocations: R,
                            analyticsObject: { ...d, object: P.ZSU.BUTTON_CTA, objectType: P.btD.TIER_2 },
                            onClose: (t) => {
                                t && b?.();
                            },
                        });
                case n.dz.OPEN_TIER_2_PAYMENT_MODAL:
                case n.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
                default:
                    return () =>
                        (0, E.A)({
                            subscriptionTier: N.pe.TIER_2,
                            analyticsLocations: R,
                            analyticsObject: { ...d, object: P.ZSU.BUTTON_CTA, objectType: P.btD.TIER_2 },
                            onClose: (t) => {
                                t && b?.();
                            },
                        });
            }
        },
        x: function (t) {
            let { buttonAction: e } = t;
            switch (e ?? n.dz.UNSPECIFIED) {
                case n.dz.OPEN_SOCIAL_LAYER_STOREFRONT:
                    return { icon: _.LinkExternalSmallIcon, iconPosition: "end" };
                case n.dz.OPEN_SHOP:
                    return { icon: i.ShopIcon };
                case n.dz.OPEN_GUILD_BOOST_CHECKOUT:
                    return { icon: o.BoostGemIcon };
                default:
                    return { icon: T.NitroWheelIcon };
            }
        },
    },
);
