var c = n(308588),
    _ = n(509434),
    O = n(403581),
    T = n(104510),
    o = n(987144),
    a = n(778705),
    i = n(976860),
    s = n(44724),
    E = n(71393),
    l = n(682901),
    r = n(92737),
    I = n(652215);
n.d(
    e,
    {},
    {
        h: function (t) {
            let {
                buttonAction: e,
                deeplinkSection: n,
                applicationId: _,
                guildId: O,
                analyticsLocations: T = [],
                analyticsLocation: A,
                onClose: N,
            } = t;
            switch (e) {
                case c.d.OPEN_GUILD_BOOST_CHECKOUT:
                    return () => {
                        let t = null != O ? E.A.getGuild(O) : null;
                        null != t &&
                            (0, o.g)({ guild: t, analyticsLocations: T, analyticsLocation: A ?? {}, onClose: N });
                    };
                case c.d.OPEN_SOCIAL_LAYER_STOREFRONT:
                    return () => {
                        (null != _ && (0, s.default)({ applicationId: _ }), N?.());
                    };
                case c.d.OPEN_MARKETING_PAGE:
                    return () => {
                        let t =
                            null != n && "" !== n
                                ? `${I.BVt.APPLICATION_STORE}?${r.x}=${encodeURIComponent(n)}`
                                : I.BVt.APPLICATION_STORE;
                        ((0, i.pX)(t), N?.());
                    };
                case c.d.OPEN_TIER_1_PAYMENT_MODAL:
                    return () =>
                        (0, a.A)({
                            subscriptionTier: l.pe.TIER_1,
                            analyticsLocations: T,
                            analyticsObject: { ...A, object: I.ZSU.BUTTON_CTA, objectType: I.btD.TIER_1 },
                            onClose: (t) => {
                                t && N?.();
                            },
                        });
                case c.d.OPEN_PLAN_SELECTION_MODAL:
                    return () => (0, a.A)({ analyticsLocations: T });
                case c.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
                    return () =>
                        (0, a.A)({
                            subscriptionTier: l.pe.TIER_2,
                            initialPlanId: l.gD.PREMIUM_GROUP_MONTH,
                            analyticsLocations: T,
                            analyticsObject: { ...A, object: I.ZSU.BUTTON_CTA, objectType: I.btD.TIER_2 },
                            onClose: (t) => {
                                t && N?.();
                            },
                        });
                case c.d.OPEN_TIER_2_PAYMENT_MODAL:
                case c.d.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
                default:
                    return () =>
                        (0, a.A)({
                            subscriptionTier: l.pe.TIER_2,
                            analyticsLocations: T,
                            analyticsObject: { ...A, object: I.ZSU.BUTTON_CTA, objectType: I.btD.TIER_2 },
                            onClose: (t) => {
                                t && N?.();
                            },
                        });
            }
        },
        x: function (t) {
            let { buttonAction: e } = t;
            switch (e ?? c.d.UNSPECIFIED) {
                case c.d.OPEN_SOCIAL_LAYER_STOREFRONT:
                    return { icon: _.LinkExternalSmallIcon, iconPosition: "end" };
                case c.d.OPEN_GUILD_BOOST_CHECKOUT:
                    return { icon: T.BoostGemIcon };
                default:
                    return { icon: O.NitroWheelIcon };
            }
        },
    },
);
