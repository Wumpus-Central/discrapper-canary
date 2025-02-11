n.d(t, { Z: () => A });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(622535),
    u = n(481060),
    c = n(906732),
    d = n(565138),
    f = n(963249),
    _ = n(695349),
    p = n(199778),
    h = n(594174),
    m = n(314884),
    g = n(709586),
    E = n(267642),
    v = n(74538),
    y = n(678558),
    I = n(981631),
    T = n(474936),
    b = n(388032),
    S = n(359277);
let A = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        A = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        N = (0, o.e7)([m.Z], () => m.Z.boostSlots),
        { analyticsLocations: C } = (0, c.ZP)(),
        R = (0, _.W)(),
        O = r.useMemo(
            () =>
                Object.keys(N).filter((e) => {
                    let t = N[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }),
            [N, n.id]
        ),
        D = r.useMemo(() => (0, E.vx)(N).length > 0, [N]);
    function L() {
        (0, f.Z)({
            initialPlanId: null,
            subscriptionTier: T.Si.TIER_2,
            analyticsLocations: C,
            analyticsObject: {
                page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: I.qAy.BUTTON_ICON,
                objectType: I.Qqv.BUY
            },
            onClose: (e) => e && t()
        });
    }
    function x() {
        (0, f.Z)({
            initialPlanId: null,
            subscriptionTier: T.Si.TIER_2,
            isGift: !0,
            analyticsLocations: C,
            analyticsObject: {
                page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: I.qAy.BUTTON_ICON,
                objectType: I.Qqv.GIFT
            },
            onClose: (e) => e && t()
        });
    }
    return (0, i.jsxs)('div', {
        className: S.guildStatus,
        children: [
            (0, i.jsx)(d.Z, {
                className: S.guildIcon,
                guild: n,
                size: d.Z.Sizes.LARGER
            }),
            (0, i.jsx)(u.X6q, {
                className: S.guildName,
                color: 'always-white',
                variant: 'text-lg/bold',
                children: n.name
            }),
            (0, i.jsxs)('div', {
                className: S.guildBoostCountWrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: S.guildBoostCount,
                        children: [
                            (0, i.jsx)(g.Z, { className: s()(S.guildBoostBadge, { [S.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0 }) }),
                            (0, i.jsx)(u.Text, {
                                className: S.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: b.intl.format(b.t['pob/cH'], { subscriptions: n.premiumSubscriberCount })
                            })
                        ]
                    }),
                    O.length > 0
                        ? (0, i.jsx)(u.Text, {
                              className: S.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: b.intl.format(b.t.Jeto2t, { numSubscriptions: O.length })
                          })
                        : null
                ]
            }),
            (0, i.jsx)(p.Z, {
                hide: D,
                containerClassName: S.FPContainer,
                isInReverseTrial: R
            }),
            (0, i.jsxs)('div', {
                className: S.guildBoostCtas,
                children: [
                    (0, i.jsx)(l.$, {
                        onChange: a,
                        threshold: 0.9,
                        children: (0, i.jsx)('div', {
                            className: s()(S.guildBoostCta, S.guildBoostCtaBoostWrapper),
                            children: (0, i.jsx)(y.Z, {
                                className: S.guildBoostCtaBoost,
                                innerClassName: s()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaBoostContent),
                                buttonShineClassName: S.guildBoostCtaBoostShine,
                                guild: n,
                                analyticsLocation: {
                                    page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: I.qAy.BUTTON_CTA,
                                    objectType: I.Qqv.BUY
                                },
                                closeLayer: t,
                                color: u.zxk.Colors.WHITE,
                                size: u.zxk.Sizes.LARGE,
                                fullWidth: !0
                            })
                        })
                    }),
                    v.ZP.hasFreeBoosts(A) || v.ZP.isPremium(A, T.p9.TIER_2)
                        ? (0, i.jsxs)(u.zxk, {
                              className: s()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: s()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaGiftContent),
                              look: u.zxk.Looks.OUTLINED,
                              color: u.zxk.Colors.WHITE,
                              onClick: x,
                              size: u.zxk.Sizes.LARGE,
                              children: [
                                  (0, i.jsx)(u.OgN, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: S.guildBoostCtaGiftIcon
                                  }),
                                  b.intl.string(b.t['8MYSQ0'])
                              ]
                          })
                        : (0, i.jsx)(u.zxk, {
                              className: s()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: s()(S.__invalid_guildBoostCtaContent, S.__invalid_guildBoostCtaSubscribeContent),
                              look: u.zxk.Looks.OUTLINED,
                              color: u.zxk.Colors.WHITE,
                              onClick: L,
                              size: u.zxk.Sizes.LARGE,
                              children: b.intl.string(b.t.Q43TvL)
                          })
                ]
            })
        ]
    });
};
