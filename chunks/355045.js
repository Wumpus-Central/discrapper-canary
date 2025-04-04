n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(622535),
    c = n(481060),
    u = n(906732),
    d = n(975298),
    f = n(565138),
    _ = n(963249),
    p = n(317169),
    h = n(199778),
    m = n(594174),
    g = n(314884),
    E = n(709586),
    b = n(267642),
    y = n(74538),
    v = n(678558),
    O = n(981631),
    I = n(474936),
    S = n(388032),
    T = n(491503);
let N = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: o } = e,
        N = i.useRef(null),
        A = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        C = (0, s.e7)([g.Z], () => g.Z.boostSlots),
        { analyticsLocations: R } = (0, u.ZP)(),
        { fractionalState: P } = (0, d.Z)({ forceFetch: !1 }),
        w = i.useMemo(
            () =>
                Object.keys(C).filter((e) => {
                    let t = C[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }).length,
            [C, n.id]
        ),
        D = i.useMemo(() => (0, b.vx)(C).length > 0, [C]),
        L = (0, p.Z)(e.guild.id).total;
    function x() {
        (0, _.Z)({
            initialPlanId: null,
            subscriptionTier: I.Si.TIER_2,
            analyticsLocations: R,
            analyticsObject: {
                page: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: O.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: O.qAy.BUTTON_ICON,
                objectType: O.Qqv.BUY
            },
            onClose: (e) => e && t()
        });
    }
    function M() {
        (0, _.Z)({
            initialPlanId: null,
            subscriptionTier: I.Si.TIER_2,
            isGift: !0,
            analyticsLocations: R,
            analyticsObject: {
                page: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: O.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: O.qAy.BUTTON_ICON,
                objectType: O.Qqv.GIFT
            },
            onClose: (e) => e && t()
        });
    }
    return (0, r.jsxs)('div', {
        className: T.guildStatus,
        children: [
            (0, r.jsx)(f.Z, {
                className: T.guildIcon,
                guild: n,
                size: f.Z.Sizes.LARGER
            }),
            (0, r.jsx)(c.X6q, {
                className: T.guildName,
                color: 'always-white',
                variant: 'text-lg/bold',
                children: n.name
            }),
            (0, r.jsxs)('div', {
                className: T.guildBoostCountWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: T.guildBoostCount,
                        children: [
                            (0, r.jsx)(E.Z, { className: a()(T.guildBoostBadge, { [T.guildBoostBadgeWithBoosts]: L > 0 }) }),
                            (0, r.jsx)(c.Text, {
                                className: T.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: S.NW.format(S.t['pob/cH'], { subscriptions: L })
                            })
                        ]
                    }),
                    w > 0
                        ? (0, r.jsx)(c.Text, {
                              className: T.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: S.NW.format(S.t.Jeto2t, { numSubscriptions: w })
                          })
                        : null
                ]
            }),
            (0, r.jsx)(h.Z, {
                hide: D,
                containerClassName: T.FPContainer
            }),
            (0, r.jsxs)('div', {
                className: T.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        innerRef: N,
                        onChange: o,
                        threshold: 0.9,
                        children: (0, r.jsx)('div', {
                            ref: N,
                            className: a()(T.guildBoostCta, T.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(v.Z, {
                                className: T.guildBoostCtaBoost,
                                innerClassName: a()(T.__invalid_guildBoostCtaContent, T.guildBoostCtaBoostContent),
                                buttonShineClassName: T.guildBoostCtaBoostShine,
                                guild: n,
                                analyticsLocation: {
                                    page: O.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: O.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: O.qAy.BUTTON_CTA,
                                    objectType: O.Qqv.BUY
                                },
                                closeLayer: t,
                                color: c.zxk.Colors.WHITE,
                                size: c.zxk.Sizes.LARGE,
                                fullWidth: !0
                            })
                        })
                    }),
                    y.ZP.hasFreeBoosts(A, P) || y.ZP.isPremium(A, I.p9.TIER_2)
                        ? (0, r.jsxs)(c.zxk, {
                              className: a()(T.guildBoostCta, T.guildBoostCtaSecondary),
                              innerClassName: a()(T.__invalid_guildBoostCtaContent, T.guildBoostCtaGiftContent),
                              look: c.zxk.Looks.OUTLINED,
                              color: c.zxk.Colors.WHITE,
                              onClick: M,
                              size: c.zxk.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(c.OgN, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: T.guildBoostCtaGiftIcon
                                  }),
                                  S.NW.string(S.t['8MYSQ0'])
                              ]
                          })
                        : (0, r.jsx)(c.zxk, {
                              className: a()(T.guildBoostCta, T.guildBoostCtaSecondary),
                              innerClassName: a()(T.__invalid_guildBoostCtaContent, T.__invalid_guildBoostCtaSubscribeContent),
                              look: c.zxk.Looks.OUTLINED,
                              color: c.zxk.Colors.WHITE,
                              onClick: x,
                              size: c.zxk.Sizes.LARGE,
                              children: S.NW.string(S.t.Q43TvL)
                          })
                ]
            })
        ]
    });
};
