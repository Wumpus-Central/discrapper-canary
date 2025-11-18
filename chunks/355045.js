n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(622535),
    c = n(755721),
    u = n(481060),
    d = n(906732),
    f = n(565138),
    _ = n(963249),
    p = n(317169),
    h = n(594174),
    m = n(314884),
    g = n(74538),
    E = n(678558),
    b = n(981631),
    y = n(474936),
    O = n(388032),
    v = n(15470);
let I = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        I = i.useRef(null),
        T = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        S = (0, s.e7)([m.Z], () => m.Z.boostSlots),
        { analyticsLocations: A } = (0, d.ZP)(),
        C = i.useMemo(
            () =>
                Object.keys(S).filter((e) => {
                    let t = S[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }).length,
            [S, n.id],
        ),
        N = (0, p.Z)(e.guild.id).total;
    function R() {
        (0, _.Z)({
            initialPlanId: null,
            subscriptionTier: y.Si.TIER_2,
            analyticsLocations: A,
            analyticsObject: {
                page: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: b.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: b.qAy.BUTTON_ICON,
                objectType: b.AnalyticsObjectTypes.BUY,
            },
            onClose: (e) => e && t(),
        });
    }
    function P() {
        (0, _.Z)({
            initialPlanId: null,
            subscriptionTier: y.Si.TIER_2,
            isGift: !0,
            analyticsLocations: A,
            analyticsObject: {
                page: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: b.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: b.qAy.BUTTON_ICON,
                objectType: b.AnalyticsObjectTypes.GIFT,
            },
            onClose: (e) => e && t(),
        });
    }
    return (0, r.jsxs)("div", {
        className: v.guildStatus,
        children: [
            (0, r.jsx)(f.Z, {
                className: v.guildIcon,
                guild: n,
                size: f.Z.Sizes.LARGER,
            }),
            (0, r.jsx)(u.Heading, {
                className: v.guildName,
                color: "always-white",
                variant: "text-lg/bold",
                children: n.name,
            }),
            (0, r.jsxs)("div", {
                className: v.guildBoostCountWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: v.guildBoostCount,
                        children: [
                            (0, r.jsx)(u.Ucv, {
                                color: N > 0 ? u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK : "currentColor",
                                className: o()(v.guildBoostBadge, { [v.guildBoostBadgeWithBoosts]: N > 0 }),
                            }),
                            (0, r.jsx)(u.Text, {
                                className: v.guildStatusCopy,
                                variant: "text-md/bold",
                                children: O.intl.format(O.t["pob/cL"], { subscriptions: N }),
                            }),
                        ],
                    }),
                    C > 0
                        ? (0, r.jsx)(u.Text, {
                              className: v.guildBoostCountCurrentUser,
                              variant: "text-sm/normal",
                              children: O.intl.format(O.t.Jeto2u, { numSubscriptions: C }),
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("div", {
                className: v.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        innerRef: I,
                        onChange: a,
                        threshold: 0.9,
                        children: (0, r.jsx)("div", {
                            ref: I,
                            className: o()(v.guildBoostCta, v.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(E.Z, {
                                className: v.guildBoostCtaBoost,
                                innerClassName: o()(v.__invalid_guildBoostCtaContent, v.guildBoostCtaBoostContent),
                                buttonShineClassName: v.guildBoostCtaBoostShine,
                                guild: n,
                                analyticsLocation: {
                                    page: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: b.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: b.qAy.BUTTON_CTA,
                                    objectType: b.AnalyticsObjectTypes.BUY,
                                },
                                closeLayer: t,
                                color: c.zx.Colors.WHITE,
                                size: c.zx.Sizes.LARGE,
                                fullWidth: !0,
                            }),
                        }),
                    }),
                    g.ZP.hasFreeBoosts(T) || g.ZP.isPremium(T, y.PremiumTypes.TIER_2)
                        ? (0, r.jsxs)(c.zx, {
                              "data-migration-pending": !0,
                              className: o()(v.guildBoostCta, v.guildBoostCtaSecondary),
                              innerClassName: o()(v.__invalid_guildBoostCtaContent, v.guildBoostCtaGiftContent),
                              look: c.zx.Looks.OUTLINED,
                              color: c.zx.Colors.WHITE,
                              onClick: P,
                              size: c.zx.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(u.OgN, {
                                      size: "md",
                                      color: "currentColor",
                                      className: v.guildBoostCtaGiftIcon,
                                  }),
                                  O.intl.string(O.t["8MYSQw"]),
                              ],
                          })
                        : (0, r.jsx)(c.zx, {
                              "data-migration-pending": !0,
                              className: o()(v.guildBoostCta, v.guildBoostCtaSecondary),
                              innerClassName: o()(
                                  v.__invalid_guildBoostCtaContent,
                                  v.__invalid_guildBoostCtaSubscribeContent,
                              ),
                              look: c.zx.Looks.OUTLINED,
                              color: c.zx.Colors.WHITE,
                              onClick: R,
                              size: c.zx.Sizes.LARGE,
                              children: O.intl.string(O.t.Q43TvC),
                          }),
                ],
            }),
        ],
    });
};
