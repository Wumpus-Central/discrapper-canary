n.d(t, { Z: () => S });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(622535),
    c = n(755721),
    u = n(481060),
    d = n(906732),
    f = n(975298),
    _ = n(565138),
    p = n(963249),
    h = n(317169),
    m = n(594174),
    g = n(314884),
    E = n(74538),
    b = n(678558),
    y = n(981631),
    O = n(474936),
    v = n(388032),
    I = n(15470);
let S = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        S = i.useRef(null),
        T = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        A = (0, s.e7)([g.Z], () => g.Z.boostSlots),
        { analyticsLocations: C } = (0, d.ZP)(),
        { fractionalState: N } = (0, f.Z)({ forceFetch: !1 }),
        R = i.useMemo(
            () =>
                Object.keys(A).filter((e) => {
                    let t = A[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }).length,
            [A, n.id],
        ),
        P = (0, h.Z)(e.guild.id).total;
    function w() {
        (0, p.Z)({
            initialPlanId: null,
            subscriptionTier: O.Si.TIER_2,
            analyticsLocations: C,
            analyticsObject: {
                page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: y.qAy.BUTTON_ICON,
                objectType: y.AnalyticsObjectTypes.BUY,
            },
            onClose: (e) => e && t(),
        });
    }
    function D() {
        (0, p.Z)({
            initialPlanId: null,
            subscriptionTier: O.Si.TIER_2,
            isGift: !0,
            analyticsLocations: C,
            analyticsObject: {
                page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: y.qAy.BUTTON_ICON,
                objectType: y.AnalyticsObjectTypes.GIFT,
            },
            onClose: (e) => e && t(),
        });
    }
    return (0, r.jsxs)("div", {
        className: I.guildStatus,
        children: [
            (0, r.jsx)(_.Z, {
                className: I.guildIcon,
                guild: n,
                size: _.Z.Sizes.LARGER,
            }),
            (0, r.jsx)(u.Heading, {
                className: I.guildName,
                color: "always-white",
                variant: "text-lg/bold",
                children: n.name,
            }),
            (0, r.jsxs)("div", {
                className: I.guildBoostCountWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.guildBoostCount,
                        children: [
                            (0, r.jsx)(u.Ucv, {
                                color: P > 0 ? u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK : "currentColor",
                                className: o()(I.guildBoostBadge, { [I.guildBoostBadgeWithBoosts]: P > 0 }),
                            }),
                            (0, r.jsx)(u.Text, {
                                className: I.guildStatusCopy,
                                variant: "text-md/bold",
                                children: v.intl.format(v.t["pob/cL"], { subscriptions: P }),
                            }),
                        ],
                    }),
                    R > 0
                        ? (0, r.jsx)(u.Text, {
                              className: I.guildBoostCountCurrentUser,
                              variant: "text-sm/normal",
                              children: v.intl.format(v.t.Jeto2u, { numSubscriptions: R }),
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("div", {
                className: I.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        innerRef: S,
                        onChange: a,
                        threshold: 0.9,
                        children: (0, r.jsx)("div", {
                            ref: S,
                            className: o()(I.guildBoostCta, I.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(b.Z, {
                                className: I.guildBoostCtaBoost,
                                innerClassName: o()(I.__invalid_guildBoostCtaContent, I.guildBoostCtaBoostContent),
                                buttonShineClassName: I.guildBoostCtaBoostShine,
                                guild: n,
                                analyticsLocation: {
                                    page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: y.qAy.BUTTON_CTA,
                                    objectType: y.AnalyticsObjectTypes.BUY,
                                },
                                closeLayer: t,
                                color: c.zx.Colors.WHITE,
                                size: c.zx.Sizes.LARGE,
                                fullWidth: !0,
                            }),
                        }),
                    }),
                    E.ZP.hasFreeBoosts(T, N) || E.ZP.isPremium(T, O.PremiumTypes.TIER_2)
                        ? (0, r.jsxs)(c.zx, {
                              "data-migration-pending": !0,
                              className: o()(I.guildBoostCta, I.guildBoostCtaSecondary),
                              innerClassName: o()(I.__invalid_guildBoostCtaContent, I.guildBoostCtaGiftContent),
                              look: c.zx.Looks.OUTLINED,
                              color: c.zx.Colors.WHITE,
                              onClick: D,
                              size: c.zx.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(u.OgN, {
                                      size: "md",
                                      color: "currentColor",
                                      className: I.guildBoostCtaGiftIcon,
                                  }),
                                  v.intl.string(v.t["8MYSQw"]),
                              ],
                          })
                        : (0, r.jsx)(c.zx, {
                              "data-migration-pending": !0,
                              className: o()(I.guildBoostCta, I.guildBoostCtaSecondary),
                              innerClassName: o()(
                                  I.__invalid_guildBoostCtaContent,
                                  I.__invalid_guildBoostCtaSubscribeContent,
                              ),
                              look: c.zx.Looks.OUTLINED,
                              color: c.zx.Colors.WHITE,
                              onClick: w,
                              size: c.zx.Sizes.LARGE,
                              children: v.intl.string(v.t.Q43TvC),
                          }),
                ],
            }),
        ],
    });
};
