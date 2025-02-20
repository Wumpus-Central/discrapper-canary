n.d(t, { Z: () => T });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(622535),
    c = n(481060),
    u = n(906732),
    d = n(565138),
    f = n(963249),
    p = n(695349),
    _ = n(199778),
    h = n(594174),
    m = n(314884),
    g = n(709586),
    E = n(267642),
    v = n(74538),
    b = n(678558),
    y = n(981631),
    O = n(474936),
    S = n(388032),
    I = n(774876);
let T = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: o } = e,
        T = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        N = (0, s.e7)([m.Z], () => m.Z.boostSlots),
        { analyticsLocations: A } = (0, u.ZP)(),
        C = (0, p.W)(),
        R = i.useMemo(
            () =>
                Object.keys(N).filter((e) => {
                    let t = N[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }),
            [N, n.id]
        ),
        P = i.useMemo(() => (0, E.vx)(N).length > 0, [N]);
    function w() {
        (0, f.Z)({
            initialPlanId: null,
            subscriptionTier: O.Si.TIER_2,
            analyticsLocations: A,
            analyticsObject: {
                page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: y.qAy.BUTTON_ICON,
                objectType: y.Qqv.BUY
            },
            onClose: (e) => e && t()
        });
    }
    function D() {
        (0, f.Z)({
            initialPlanId: null,
            subscriptionTier: O.Si.TIER_2,
            isGift: !0,
            analyticsLocations: A,
            analyticsObject: {
                page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: y.qAy.BUTTON_ICON,
                objectType: y.Qqv.GIFT
            },
            onClose: (e) => e && t()
        });
    }
    return (0, r.jsxs)('div', {
        className: I.guildStatus,
        children: [
            (0, r.jsx)(d.Z, {
                className: I.guildIcon,
                guild: n,
                size: d.Z.Sizes.LARGER
            }),
            (0, r.jsx)(c.X6q, {
                className: I.guildName,
                color: 'always-white',
                variant: 'text-lg/bold',
                children: n.name
            }),
            (0, r.jsxs)('div', {
                className: I.guildBoostCountWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: I.guildBoostCount,
                        children: [
                            (0, r.jsx)(g.Z, { className: a()(I.guildBoostBadge, { [I.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0 }) }),
                            (0, r.jsx)(c.Text, {
                                className: I.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: S.NW.format(S.t['pob/cH'], { subscriptions: n.premiumSubscriberCount })
                            })
                        ]
                    }),
                    R.length > 0
                        ? (0, r.jsx)(c.Text, {
                              className: I.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: S.NW.format(S.t.Jeto2t, { numSubscriptions: R.length })
                          })
                        : null
                ]
            }),
            (0, r.jsx)(_.Z, {
                hide: P,
                containerClassName: I.FPContainer,
                isInReverseTrial: C
            }),
            (0, r.jsxs)('div', {
                className: I.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        onChange: o,
                        threshold: 0.9,
                        children: (0, r.jsx)('div', {
                            className: a()(I.guildBoostCta, I.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(b.Z, {
                                className: I.guildBoostCtaBoost,
                                innerClassName: a()(I.__invalid_guildBoostCtaContent, I.guildBoostCtaBoostContent),
                                buttonShineClassName: I.guildBoostCtaBoostShine,
                                guild: n,
                                analyticsLocation: {
                                    page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: y.qAy.BUTTON_CTA,
                                    objectType: y.Qqv.BUY
                                },
                                closeLayer: t,
                                color: c.zxk.Colors.WHITE,
                                size: c.zxk.Sizes.LARGE,
                                fullWidth: !0
                            })
                        })
                    }),
                    v.ZP.hasFreeBoosts(T) || v.ZP.isPremium(T, O.p9.TIER_2)
                        ? (0, r.jsxs)(c.zxk, {
                              className: a()(I.guildBoostCta, I.guildBoostCtaSecondary),
                              innerClassName: a()(I.__invalid_guildBoostCtaContent, I.guildBoostCtaGiftContent),
                              look: c.zxk.Looks.OUTLINED,
                              color: c.zxk.Colors.WHITE,
                              onClick: D,
                              size: c.zxk.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(c.OgN, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: I.guildBoostCtaGiftIcon
                                  }),
                                  S.NW.string(S.t['8MYSQ0'])
                              ]
                          })
                        : (0, r.jsx)(c.zxk, {
                              className: a()(I.guildBoostCta, I.guildBoostCtaSecondary),
                              innerClassName: a()(I.__invalid_guildBoostCtaContent, I.__invalid_guildBoostCtaSubscribeContent),
                              look: c.zxk.Looks.OUTLINED,
                              color: c.zxk.Colors.WHITE,
                              onClick: w,
                              size: c.zxk.Sizes.LARGE,
                              children: S.NW.string(S.t.Q43TvL)
                          })
                ]
            })
        ]
    });
};
