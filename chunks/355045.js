var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(622535),
    c = r(481060),
    d = r(906732),
    f = r(565138),
    p = r(963249),
    h = r(199778),
    _ = r(594174),
    m = r(314884),
    g = r(709586),
    E = r(267642),
    v = r(74538),
    y = r(678558),
    b = r(981631),
    I = r(474936),
    T = r(388032),
    S = r(892804);
function A(e) {
    let { closeLayer: n, guild: r, onCtaVisibilityChange: o } = e,
        A = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        C = (0, l.e7)([m.Z], () => m.Z.boostSlots),
        { analyticsLocations: N } = (0, d.ZP)(),
        R = a.useMemo(
            () =>
                Object.keys(C).filter((e) => {
                    let n = C[e];
                    return null != n.premiumGuildSubscription && n.premiumGuildSubscription.guildId === r.id;
                }),
            [C, r.id]
        ),
        O = a.useMemo(() => (0, E.vx)(C).length > 0, [C]);
    function D() {
        (0, p.Z)({
            initialPlanId: null,
            subscriptionTier: I.Si.TIER_2,
            analyticsLocations: N,
            analyticsObject: {
                page: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: b.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: b.qAy.BUTTON_ICON,
                objectType: b.Qqv.BUY
            },
            onClose: (e) => e && n()
        });
    }
    function L() {
        (0, p.Z)({
            initialPlanId: null,
            subscriptionTier: I.Si.TIER_2,
            isGift: !0,
            analyticsLocations: N,
            analyticsObject: {
                page: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: b.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: b.qAy.BUTTON_ICON,
                objectType: b.Qqv.GIFT
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
                            (0, i.jsx)(g.Z, { className: s()(S.guildBoostBadge, { [S.guildBoostBadgeWithBoosts]: r.premiumSubscriberCount > 0 }) }),
                            (0, i.jsx)(c.Text, {
                                className: S.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: T.intl.format(T.t['pob/cH'], { subscriptions: r.premiumSubscriberCount })
                            })
                        ]
                    }),
                    R.length > 0
                        ? (0, i.jsx)(c.Text, {
                              className: S.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: T.intl.format(T.t.Jeto2t, { numSubscriptions: R.length })
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
                        onChange: o,
                        threshold: 0.9,
                        children: (0, i.jsx)('div', {
                            className: s()(S.guildBoostCta, S.guildBoostCtaBoostWrapper),
                            children: (0, i.jsx)(y.Z, {
                                className: S.guildBoostCtaBoost,
                                innerClassName: s()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaBoostContent),
                                buttonShineClassName: S.guildBoostCtaBoostShine,
                                guild: r,
                                analyticsLocation: {
                                    page: b.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: b.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: b.qAy.BUTTON_CTA,
                                    objectType: b.Qqv.BUY
                                },
                                closeLayer: n,
                                color: c.Button.Colors.WHITE,
                                size: c.Button.Sizes.LARGE,
                                fullWidth: !0
                            })
                        })
                    }),
                    v.ZP.hasFreeBoosts(A) || v.ZP.isPremium(A, I.p9.TIER_2)
                        ? (0, i.jsxs)(c.Button, {
                              className: s()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: s()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaGiftContent),
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
                                  T.intl.string(T.t['8MYSQ0'])
                              ]
                          })
                        : (0, i.jsx)(c.Button, {
                              className: s()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: s()(S.__invalid_guildBoostCtaContent, S.__invalid_guildBoostCtaSubscribeContent),
                              look: c.Button.Looks.OUTLINED,
                              color: c.Button.Colors.WHITE,
                              onClick: D,
                              size: c.Button.Sizes.LARGE,
                              children: T.intl.string(T.t.Q43TvL)
                          })
                ]
            })
        ]
    });
}
n.Z = A;
