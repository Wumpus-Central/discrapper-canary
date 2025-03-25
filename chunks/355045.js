n.d(t, { Z: () => T });
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
    p = n(199778),
    h = n(594174),
    m = n(314884),
    g = n(709586),
    E = n(267642),
    b = n(74538),
    v = n(678558),
    y = n(981631),
    O = n(474936),
    I = n(388032),
    S = n(797827);
let T = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: o } = e,
        T = i.useRef(null),
        N = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        A = (0, s.e7)([m.Z], () => m.Z.boostSlots),
        { analyticsLocations: C } = (0, u.ZP)(),
        { fractionalState: R } = (0, d.Z)({ forceFetch: !1 }),
        P = i.useMemo(
            () =>
                Object.keys(A).filter((e) => {
                    let t = A[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }),
            [A, n.id]
        ),
        w = i.useMemo(() => (0, E.vx)(A).length > 0, [A]);
    function D() {
        (0, _.Z)({
            initialPlanId: null,
            subscriptionTier: O.Si.TIER_2,
            analyticsLocations: C,
            analyticsObject: {
                page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: y.qAy.BUTTON_ICON,
                objectType: y.Qqv.BUY
            },
            onClose: (e) => e && t()
        });
    }
    function L() {
        (0, _.Z)({
            initialPlanId: null,
            subscriptionTier: O.Si.TIER_2,
            isGift: !0,
            analyticsLocations: C,
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
        className: S.guildStatus,
        children: [
            (0, r.jsx)(f.Z, {
                className: S.guildIcon,
                guild: n,
                size: f.Z.Sizes.LARGER
            }),
            (0, r.jsx)(c.X6q, {
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
                            (0, r.jsx)(g.Z, { className: a()(S.guildBoostBadge, { [S.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0 }) }),
                            (0, r.jsx)(c.Text, {
                                className: S.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: I.NW.format(I.t['pob/cH'], { subscriptions: n.premiumSubscriberCount })
                            })
                        ]
                    }),
                    P.length > 0
                        ? (0, r.jsx)(c.Text, {
                              className: S.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: I.NW.format(I.t.Jeto2t, { numSubscriptions: P.length })
                          })
                        : null
                ]
            }),
            (0, r.jsx)(p.Z, {
                hide: w,
                containerClassName: S.FPContainer
            }),
            (0, r.jsxs)('div', {
                className: S.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        innerRef: T,
                        onChange: o,
                        threshold: 0.9,
                        children: (0, r.jsx)('div', {
                            ref: T,
                            className: a()(S.guildBoostCta, S.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(v.Z, {
                                className: S.guildBoostCtaBoost,
                                innerClassName: a()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaBoostContent),
                                buttonShineClassName: S.guildBoostCtaBoostShine,
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
                    b.ZP.hasFreeBoosts(N, R) || b.ZP.isPremium(N, O.p9.TIER_2)
                        ? (0, r.jsxs)(c.zxk, {
                              className: a()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: a()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaGiftContent),
                              look: c.zxk.Looks.OUTLINED,
                              color: c.zxk.Colors.WHITE,
                              onClick: L,
                              size: c.zxk.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(c.OgN, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: S.guildBoostCtaGiftIcon
                                  }),
                                  I.NW.string(I.t['8MYSQ0'])
                              ]
                          })
                        : (0, r.jsx)(c.zxk, {
                              className: a()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: a()(S.__invalid_guildBoostCtaContent, S.__invalid_guildBoostCtaSubscribeContent),
                              look: c.zxk.Looks.OUTLINED,
                              color: c.zxk.Colors.WHITE,
                              onClick: D,
                              size: c.zxk.Sizes.LARGE,
                              children: I.NW.string(I.t.Q43TvL)
                          })
                ]
            })
        ]
    });
};
