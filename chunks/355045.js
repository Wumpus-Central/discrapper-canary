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
    p = n(963249),
    _ = n(317169),
    m = n(691807),
    h = n(594174),
    g = n(314884),
    E = n(74538),
    b = n(678558),
    y = n(981631),
    O = n(474936),
    v = n(388032),
    S = n(887477);
let I = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        I = i.useRef(null),
        T = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        C = (0, s.e7)([g.Z], () => g.Z.boostSlots),
        A = null == T ? void 0 : T.isPremiumGroupMember(),
        { analyticsLocations: N } = (0, d.ZP)(),
        P = i.useMemo(
            () =>
                Object.keys(C).filter((e) => {
                    let t = C[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }).length,
            [C, n.id],
        ),
        R = (0, _.Z)(e.guild.id).total;
    function w() {
        (0, p.Z)({
            initialPlanId: null,
            subscriptionTier: O.Si.TIER_2,
            analyticsLocations: N,
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
            analyticsLocations: N,
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
        className: S.guildStatus,
        children: [
            (0, r.jsx)(f.Z, {
                className: S.guildIcon,
                guild: n,
                size: f.Z.Sizes.LARGER,
            }),
            (0, r.jsx)(u.Heading, {
                className: S.guildName,
                color: "always-white",
                variant: "text-lg/bold",
                children: n.name,
            }),
            (0, r.jsxs)("div", {
                className: S.guildBoostCountWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: S.guildBoostCount,
                        children: [
                            (0, r.jsx)(u.Ucv, {
                                color: R > 0 ? u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK : "currentColor",
                                className: o()(S.guildBoostBadge, { [S.guildBoostBadgeWithBoosts]: R > 0 }),
                            }),
                            (0, r.jsx)(u.Text, {
                                className: S.guildStatusCopy,
                                variant: "text-md/bold",
                                children: v.intl.format(v.t["pob/cL"], { subscriptions: R }),
                            }),
                        ],
                    }),
                    P > 0
                        ? (0, r.jsx)(u.Text, {
                              className: S.guildBoostCountCurrentUser,
                              variant: "text-sm/normal",
                              children: v.intl.format(v.t.Jeto2u, { numSubscriptions: P }),
                          })
                        : null,
                ],
            }),
            A ? (0, r.jsx)(m.Z, { alwaysWhite: !0 }) : null,
            (0, r.jsxs)("div", {
                className: S.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        innerRef: I,
                        onChange: a,
                        threshold: 0.9,
                        children: (0, r.jsx)("div", {
                            ref: I,
                            className: o()(S.guildBoostCta, S.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(b.Z, {
                                className: S.guildBoostCtaBoost,
                                innerClassName: S.guildBoostCtaBoostContent,
                                buttonShineClassName: S.guildBoostCtaBoostShine,
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
                    E.ZP.hasFreeBoosts(T) || E.ZP.isPremium(T, O.PremiumTypes.TIER_2)
                        ? (0, r.jsxs)(c.zx, {
                              "data-migration-pending": !0,
                              className: o()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: S.guildBoostCtaGiftContent,
                              look: c.zx.Looks.OUTLINED,
                              color: c.zx.Colors.WHITE,
                              onClick: D,
                              size: c.zx.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(u.OgN, {
                                      size: "md",
                                      color: "currentColor",
                                      className: S.guildBoostCtaGiftIcon,
                                  }),
                                  v.intl.string(v.t["8MYSQw"]),
                              ],
                          })
                        : (0, r.jsx)(c.zx, {
                              "data-migration-pending": !0,
                              className: o()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              look: c.zx.Looks.OUTLINED,
                              color: c.zx.Colors.WHITE,
                              onClick: w,
                              size: c.zx.Sizes.LARGE,
                              disabled: A,
                              children: v.intl.string(v.t.Q43TvC),
                          }),
                ],
            }),
        ],
    });
};
