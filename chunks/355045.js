n.d(t, { Z: () => N });
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
    b = n(709586),
    y = n(267642),
    O = n(74538),
    v = n(678558),
    I = n(981631),
    T = n(474936),
    S = n(388032),
    A = n(491503);
let N = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        N = i.useRef(null),
        C = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        R = (0, s.e7)([E.Z], () => E.Z.boostSlots),
        { analyticsLocations: P } = (0, d.ZP)(),
        { fractionalState: w } = (0, f.Z)({ forceFetch: !1 }),
        D = i.useMemo(
            () =>
                Object.keys(R).filter((e) => {
                    let t = R[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }).length,
            [R, n.id]
        ),
        L = i.useMemo(() => (0, y.vx)(R).length > 0, [R]),
        x = (0, h.Z)(e.guild.id).total;
    function k() {
        (0, p.Z)({
            initialPlanId: null,
            subscriptionTier: T.Si.TIER_2,
            analyticsLocations: P,
            analyticsObject: {
                page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: I.qAy.BUTTON_ICON,
                objectType: I.Qqv.BUY
            },
            onClose: (e) => e && t()
        });
    }
    function M() {
        (0, p.Z)({
            initialPlanId: null,
            subscriptionTier: T.Si.TIER_2,
            isGift: !0,
            analyticsLocations: P,
            analyticsObject: {
                page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: I.qAy.BUTTON_ICON,
                objectType: I.Qqv.GIFT
            },
            onClose: (e) => e && t()
        });
    }
    return (0, r.jsxs)('div', {
        className: A.guildStatus,
        children: [
            (0, r.jsx)(_.Z, {
                className: A.guildIcon,
                guild: n,
                size: _.Z.Sizes.LARGER
            }),
            (0, r.jsx)(u.X6q, {
                className: A.guildName,
                color: 'always-white',
                variant: 'text-lg/bold',
                children: n.name
            }),
            (0, r.jsxs)('div', {
                className: A.guildBoostCountWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: A.guildBoostCount,
                        children: [
                            (0, r.jsx)(b.Z, { className: o()(A.guildBoostBadge, { [A.guildBoostBadgeWithBoosts]: x > 0 }) }),
                            (0, r.jsx)(u.Text, {
                                className: A.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: S.intl.format(S.t['pob/cH'], { subscriptions: x })
                            })
                        ]
                    }),
                    D > 0
                        ? (0, r.jsx)(u.Text, {
                              className: A.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: S.intl.format(S.t.Jeto2t, { numSubscriptions: D })
                          })
                        : null
                ]
            }),
            (0, r.jsx)(m.Z, {
                hide: L,
                containerClassName: A.FPContainer
            }),
            (0, r.jsxs)('div', {
                className: A.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        innerRef: N,
                        onChange: a,
                        threshold: 0.9,
                        children: (0, r.jsx)('div', {
                            ref: N,
                            className: o()(A.guildBoostCta, A.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(v.Z, {
                                className: A.guildBoostCtaBoost,
                                innerClassName: o()(A.__invalid_guildBoostCtaContent, A.guildBoostCtaBoostContent),
                                buttonShineClassName: A.guildBoostCtaBoostShine,
                                guild: n,
                                analyticsLocation: {
                                    page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: I.qAy.BUTTON_CTA,
                                    objectType: I.Qqv.BUY
                                },
                                closeLayer: t,
                                color: c.zx.Colors.WHITE,
                                size: c.zx.Sizes.LARGE,
                                fullWidth: !0
                            })
                        })
                    }),
                    O.ZP.hasFreeBoosts(C, w) || O.ZP.isPremium(C, T.p9.TIER_2)
                        ? (0, r.jsxs)(c.zx, {
                              className: o()(A.guildBoostCta, A.guildBoostCtaSecondary),
                              innerClassName: o()(A.__invalid_guildBoostCtaContent, A.guildBoostCtaGiftContent),
                              look: c.zx.Looks.OUTLINED,
                              color: c.zx.Colors.WHITE,
                              onClick: M,
                              size: c.zx.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(u.OgN, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: A.guildBoostCtaGiftIcon
                                  }),
                                  S.intl.string(S.t['8MYSQ0'])
                              ]
                          })
                        : (0, r.jsx)(c.zx, {
                              className: o()(A.guildBoostCta, A.guildBoostCtaSecondary),
                              innerClassName: o()(A.__invalid_guildBoostCtaContent, A.__invalid_guildBoostCtaSubscribeContent),
                              look: c.zx.Looks.OUTLINED,
                              color: c.zx.Colors.WHITE,
                              onClick: k,
                              size: c.zx.Sizes.LARGE,
                              children: S.intl.string(S.t.Q43TvL)
                          })
                ]
            })
        ]
    });
};
