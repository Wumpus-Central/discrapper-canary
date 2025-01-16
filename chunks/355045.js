var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(622535),
    c = r(481060),
    d = r(906732),
    f = r(565138),
    _ = r(963249),
    h = r(199778),
    p = r(594174),
    m = r(314884),
    g = r(709586),
    E = r(267642),
    v = r(74538),
    I = r(678558),
    T = r(981631),
    b = r(474936),
    y = r(388032),
    S = r(892804);
function A(e) {
    let { closeLayer: n, guild: r, onCtaVisibilityChange: s } = e,
        A = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        N = (0, l.e7)([m.Z], () => m.Z.boostSlots),
        { analyticsLocations: C } = (0, d.ZP)(),
        R = a.useMemo(
            () =>
                Object.keys(N).filter((e) => {
                    let n = N[e];
                    return null != n.premiumGuildSubscription && n.premiumGuildSubscription.guildId === r.id;
                }),
            [N, r.id]
        ),
        O = a.useMemo(() => (0, E.vx)(N).length > 0, [N]);
    function D() {
        (0, _.Z)({
            initialPlanId: null,
            subscriptionTier: b.Si.TIER_2,
            analyticsLocations: C,
            analyticsObject: {
                page: T.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: T.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: T.qAy.BUTTON_ICON,
                objectType: T.Qqv.BUY
            },
            onClose: (e) => e && n()
        });
    }
    function L() {
        (0, _.Z)({
            initialPlanId: null,
            subscriptionTier: b.Si.TIER_2,
            isGift: !0,
            analyticsLocations: C,
            analyticsObject: {
                page: T.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: T.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: T.qAy.BUTTON_ICON,
                objectType: T.Qqv.GIFT
            },
            onClose: (e) => e && n()
        });
    }
    return (0, i.jsxs)('div', {
        className: S.guildStatus,
        children: [
            (0, i.jsx)(f.Z, {
                className: S.guildIcon,
                guild: r,
                size: f.Z.Sizes.LARGER
            }),
            (0, i.jsx)(c.Heading, {
                className: S.guildName,
                color: 'always-white',
                variant: 'text-lg/bold',
                children: r.name
            }),
            (0, i.jsxs)('div', {
                className: S.guildBoostCountWrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: S.guildBoostCount,
                        children: [
                            (0, i.jsx)(g.Z, { className: o()(S.guildBoostBadge, { [S.guildBoostBadgeWithBoosts]: r.premiumSubscriberCount > 0 }) }),
                            (0, i.jsx)(c.Text, {
                                className: S.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: y.intl.format(y.t['pob/cH'], { subscriptions: r.premiumSubscriberCount })
                            })
                        ]
                    }),
                    R.length > 0
                        ? (0, i.jsx)(c.Text, {
                              className: S.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: y.intl.format(y.t.Jeto2t, { numSubscriptions: R.length })
                          })
                        : null
                ]
            }),
            (0, i.jsx)(h.Z, {
                hide: O,
                containerClassName: S.FPContainer
            }),
            (0, i.jsxs)('div', {
                className: S.guildBoostCtas,
                children: [
                    (0, i.jsx)(u.$, {
                        onChange: s,
                        threshold: 0.9,
                        children: (0, i.jsx)('div', {
                            className: o()(S.guildBoostCta, S.guildBoostCtaBoostWrapper),
                            children: (0, i.jsx)(I.Z, {
                                className: S.guildBoostCtaBoost,
                                innerClassName: o()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaBoostContent),
                                buttonShineClassName: S.guildBoostCtaBoostShine,
                                guild: r,
                                analyticsLocation: {
                                    page: T.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: T.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: T.qAy.BUTTON_CTA,
                                    objectType: T.Qqv.BUY
                                },
                                closeLayer: n,
                                color: c.Button.Colors.WHITE,
                                size: c.Button.Sizes.LARGE,
                                fullWidth: !0
                            })
                        })
                    }),
                    v.ZP.hasFreeBoosts(A) || v.ZP.isPremium(A, b.p9.TIER_2)
                        ? (0, i.jsxs)(c.Button, {
                              className: o()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: o()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaGiftContent),
                              look: c.Button.Looks.OUTLINED,
                              color: c.Button.Colors.WHITE,
                              onClick: L,
                              size: c.Button.Sizes.LARGE,
                              children: [
                                  (0, i.jsx)(c.GiftIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: S.guildBoostCtaGiftIcon
                                  }),
                                  y.intl.string(y.t['8MYSQ0'])
                              ]
                          })
                        : (0, i.jsx)(c.Button, {
                              className: o()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: o()(S.__invalid_guildBoostCtaContent, S.__invalid_guildBoostCtaSubscribeContent),
                              look: c.Button.Looks.OUTLINED,
                              color: c.Button.Colors.WHITE,
                              onClick: D,
                              size: c.Button.Sizes.LARGE,
                              children: y.intl.string(y.t.Q43TvL)
                          })
                ]
            })
        ]
    });
}
n.Z = A;
