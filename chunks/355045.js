n.d(t, { Z: () => S });
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
    _ = n(199778),
    p = n(594174),
    h = n(314884),
    m = n(709586),
    g = n(267642),
    E = n(74538),
    v = n(678558),
    y = n(981631),
    I = n(474936),
    T = n(388032),
    b = n(359277);
let S = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        S = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        A = (0, o.e7)([h.Z], () => h.Z.boostSlots),
        { analyticsLocations: N } = (0, c.ZP)(),
        C = r.useMemo(
            () =>
                Object.keys(A).filter((e) => {
                    let t = A[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }),
            [A, n.id]
        ),
        R = r.useMemo(() => (0, g.vx)(A).length > 0, [A]);
    function O() {
        (0, f.Z)({
            initialPlanId: null,
            subscriptionTier: I.Si.TIER_2,
            analyticsLocations: N,
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
            subscriptionTier: I.Si.TIER_2,
            isGift: !0,
            analyticsLocations: N,
            analyticsObject: {
                page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
                section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: y.qAy.BUTTON_ICON,
                objectType: y.Qqv.GIFT
            },
            onClose: (e) => e && t()
        });
    }
    return (0, i.jsxs)('div', {
        className: b.guildStatus,
        children: [
            (0, i.jsx)(d.Z, {
                className: b.guildIcon,
                guild: n,
                size: d.Z.Sizes.LARGER
            }),
            (0, i.jsx)(u.X6q, {
                className: b.guildName,
                color: 'always-white',
                variant: 'text-lg/bold',
                children: n.name
            }),
            (0, i.jsxs)('div', {
                className: b.guildBoostCountWrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: b.guildBoostCount,
                        children: [
                            (0, i.jsx)(m.Z, { className: s()(b.guildBoostBadge, { [b.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0 }) }),
                            (0, i.jsx)(u.Text, {
                                className: b.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: T.intl.format(T.t['pob/cH'], { subscriptions: n.premiumSubscriberCount })
                            })
                        ]
                    }),
                    C.length > 0
                        ? (0, i.jsx)(u.Text, {
                              className: b.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: T.intl.format(T.t.Jeto2t, { numSubscriptions: C.length })
                          })
                        : null
                ]
            }),
            (0, i.jsx)(_.Z, {
                hide: R,
                containerClassName: b.FPContainer
            }),
            (0, i.jsxs)('div', {
                className: b.guildBoostCtas,
                children: [
                    (0, i.jsx)(l.$, {
                        onChange: a,
                        threshold: 0.9,
                        children: (0, i.jsx)('div', {
                            className: s()(b.guildBoostCta, b.guildBoostCtaBoostWrapper),
                            children: (0, i.jsx)(v.Z, {
                                className: b.guildBoostCtaBoost,
                                innerClassName: s()(b.__invalid_guildBoostCtaContent, b.guildBoostCtaBoostContent),
                                buttonShineClassName: b.guildBoostCtaBoostShine,
                                guild: n,
                                analyticsLocation: {
                                    page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: y.qAy.BUTTON_CTA,
                                    objectType: y.Qqv.BUY
                                },
                                closeLayer: t,
                                color: u.zxk.Colors.WHITE,
                                size: u.zxk.Sizes.LARGE,
                                fullWidth: !0
                            })
                        })
                    }),
                    E.ZP.hasFreeBoosts(S) || E.ZP.isPremium(S, I.p9.TIER_2)
                        ? (0, i.jsxs)(u.zxk, {
                              className: s()(b.guildBoostCta, b.guildBoostCtaSecondary),
                              innerClassName: s()(b.__invalid_guildBoostCtaContent, b.guildBoostCtaGiftContent),
                              look: u.zxk.Looks.OUTLINED,
                              color: u.zxk.Colors.WHITE,
                              onClick: D,
                              size: u.zxk.Sizes.LARGE,
                              children: [
                                  (0, i.jsx)(u.OgN, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: b.guildBoostCtaGiftIcon
                                  }),
                                  T.intl.string(T.t['8MYSQ0'])
                              ]
                          })
                        : (0, i.jsx)(u.zxk, {
                              className: s()(b.guildBoostCta, b.guildBoostCtaSecondary),
                              innerClassName: s()(b.__invalid_guildBoostCtaContent, b.__invalid_guildBoostCtaSubscribeContent),
                              look: u.zxk.Looks.OUTLINED,
                              color: u.zxk.Colors.WHITE,
                              onClick: O,
                              size: u.zxk.Sizes.LARGE,
                              children: T.intl.string(T.t.Q43TvL)
                          })
                ]
            })
        ]
    });
};
