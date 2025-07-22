n.d(t, { Z: () => A });
var r = n(255367),
    i = n(73800),
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
    m = n(199778),
    g = n(594174),
    E = n(314884),
    b = n(267642),
    y = n(74538),
    O = n(678558),
    v = n(981631),
    I = n(474936),
    T = n(388032),
    S = n(491503);
let A = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        A = i.useRef(null),
        N = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        C = (0, s.e7)([E.Z], () => E.Z.boostSlots),
        { analyticsLocations: R } = (0, d.ZP)(),
        { fractionalState: P } = (0, f.Z)({ forceFetch: !1 }),
        w = i.useMemo(
            () =>
                Object.keys(C).filter((e) => {
                    let t = C[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }).length,
            [C, n.id]
        ),
        D = i.useMemo(() => (0, b.vx)(C).length > 0, [C]),
        L = (0, h.Z)(e.guild.id).total;
    function x() {
        (0, p.Z)({
            initialPlanId: null,
            subscriptionTier: I.Si.TIER_2,
            analyticsLocations: R,
            analyticsObject: {
                page: v.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: v.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: v.qAy.BUTTON_ICON,
                objectType: v.Qqv.BUY
            },
            onClose: (e) => e && t()
        });
    }
    function M() {
        (0, p.Z)({
            initialPlanId: null,
            subscriptionTier: I.Si.TIER_2,
            isGift: !0,
            analyticsLocations: R,
            analyticsObject: {
                page: v.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: v.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: v.qAy.BUTTON_ICON,
                objectType: v.Qqv.GIFT
            },
            onClose: (e) => e && t()
        });
    }
    return (0, r.jsxs)('div', {
        className: S.guildStatus,
        children: [
            (0, r.jsx)(_.Z, {
                className: S.guildIcon,
                guild: n,
                size: _.Z.Sizes.LARGER
            }),
            (0, r.jsx)(u.X6q, {
                className: S.guildName,
                color: 'always-white',
                variant: 'text-lg/bold',
                children: n.name
            }),
            (0, r.jsxs)('div', {
                className: S.guildBoostCountWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.guildBoostCount,
                        children: [
                            (0, r.jsx)(u.$Eu, {
                                color: L > 0 ? u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK : 'currentColor',
                                className: o()(S.guildBoostBadge, { [S.guildBoostBadgeWithBoosts]: L > 0 })
                            }),
                            (0, r.jsx)(u.Text, {
                                className: S.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: T.intl.format(T.t['pob/cH'], { subscriptions: L })
                            })
                        ]
                    }),
                    w > 0
                        ? (0, r.jsx)(u.Text, {
                              className: S.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: T.intl.format(T.t.Jeto2t, { numSubscriptions: w })
                          })
                        : null
                ]
            }),
            (0, r.jsx)(m.Z, {
                hide: D,
                containerClassName: S.FPContainer
            }),
            (0, r.jsxs)('div', {
                className: S.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        innerRef: A,
                        onChange: a,
                        threshold: 0.9,
                        children: (0, r.jsx)('div', {
                            ref: A,
                            className: o()(S.guildBoostCta, S.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(O.Z, {
                                className: S.guildBoostCtaBoost,
                                innerClassName: o()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaBoostContent),
                                buttonShineClassName: S.guildBoostCtaBoostShine,
                                guild: n,
                                analyticsLocation: {
                                    page: v.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: v.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: v.qAy.BUTTON_CTA,
                                    objectType: v.Qqv.BUY
                                },
                                closeLayer: t,
                                color: c.zx.Colors.WHITE,
                                size: c.zx.Sizes.LARGE,
                                fullWidth: !0
                            })
                        })
                    }),
                    y.ZP.hasFreeBoosts(N, P) || y.ZP.isPremium(N, I.p9.TIER_2)
                        ? (0, r.jsxs)(c.zx, {
                              className: o()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: o()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaGiftContent),
                              look: c.zx.Looks.OUTLINED,
                              color: c.zx.Colors.WHITE,
                              onClick: M,
                              size: c.zx.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(u.OgN, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: S.guildBoostCtaGiftIcon
                                  }),
                                  T.intl.string(T.t['8MYSQ0'])
                              ]
                          })
                        : (0, r.jsx)(c.zx, {
                              className: o()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: o()(S.__invalid_guildBoostCtaContent, S.__invalid_guildBoostCtaSubscribeContent),
                              look: c.zx.Looks.OUTLINED,
                              color: c.zx.Colors.WHITE,
                              onClick: x,
                              size: c.zx.Sizes.LARGE,
                              children: T.intl.string(T.t.Q43TvL)
                          })
                ]
            })
        ]
    });
};
