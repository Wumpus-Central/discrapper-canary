n.d(t, {
    A: () => S,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    c = n(421380),
    u = n(397927),
    d = n(688810),
    f = n(263063),
    p = n(532794),
    _ = n(864310),
    h = n(338548),
    m = n(287809),
    g = n(178368),
    E = n(927578),
    b = n(721923),
    y = n(652215),
    O = n(788868),
    A = n(985018),
    v = n(998465);
let S = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        S = i.useRef(null),
        I = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        T = (0, o.bG)([g.A], () => g.A.boostSlots),
        C = null == I ? void 0 : I.isPremiumGroupMember(),
        { analyticsLocations: N } = (0, d.Ay)(),
        R = i.useMemo(
            () =>
                Object.keys(T).filter((e) => {
                    let t = T[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }).length,
            [T, n.id],
        ),
        w = (0, _.A)(e.guild.id).total;

    function P() {
        (0, p.A)({
            initialPlanId: null,
            subscriptionTier: O.pe.TIER_2,
            analyticsLocations: N,
            analyticsObject: {
                page: y.liQ.PREMIUM_GUILD_USER_MODAL,
                section: y.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: y.ZSU.BUTTON_ICON,
                objectType: y.AnalyticsObjectTypes.BUY,
            },
            onClose: (e) => e && t(),
        });
    }

    function D() {
        (0, p.A)({
            initialPlanId: null,
            subscriptionTier: O.pe.TIER_2,
            isGift: !0,
            analyticsLocations: N,
            analyticsObject: {
                page: y.liQ.PREMIUM_GUILD_USER_MODAL,
                section: y.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: y.ZSU.BUTTON_ICON,
                objectType: y.AnalyticsObjectTypes.GIFT,
            },
            onClose: (e) => e && t(),
        });
    }
    return (0, r.jsxs)("div", {
        className: v.yD,
        children: [
            (0, r.jsx)(f.A, {
                className: v.$f,
                guild: n,
                size: f.A.Sizes.LARGER,
            }),
            (0, r.jsx)(u.Heading, {
                className: v.J5,
                color: "always-white",
                variant: "text-lg/bold",
                children: n.name,
            }),
            (0, r.jsxs)("div", {
                className: v.nx,
                children: [
                    (0, r.jsxs)("div", {
                        className: v.SJ,
                        children: [
                            (0, r.jsx)(u._Jp, {
                                color: w > 0 ? u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK : "currentColor",
                                className: s()(v.Me, {
                                    [v.S3]: w > 0,
                                }),
                            }),
                            (0, r.jsx)(u.Text, {
                                className: v.n,
                                variant: "text-md/bold",
                                children: A.intl.format(A.t["pob/cL"], {
                                    subscriptions: w,
                                }),
                            }),
                        ],
                    }),
                    R > 0
                        ? (0, r.jsx)(u.Text, {
                              className: v.EV,
                              variant: "text-sm/normal",
                              children: A.intl.format(A.t.Jeto2u, {
                                  numSubscriptions: R,
                              }),
                          })
                        : null,
                ],
            }),
            C
                ? (0, r.jsx)(h.A, {
                      alwaysWhite: !0,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: v.Sq,
                children: [
                    (0, r.jsx)(l.L, {
                        innerRef: S,
                        onChange: a,
                        threshold: 0.9,
                        children: (0, r.jsx)("div", {
                            ref: S,
                            className: s()(v.J$, v.$F),
                            children: (0, r.jsx)(b.A, {
                                className: v.E0,
                                innerClassName: v.J1,
                                buttonShineClassName: v.Vi,
                                guild: n,
                                analyticsLocation: {
                                    page: y.liQ.PREMIUM_GUILD_USER_MODAL,
                                    section: y.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: y.ZSU.BUTTON_CTA,
                                    objectType: y.AnalyticsObjectTypes.BUY,
                                },
                                closeLayer: t,
                                color: c.$n.Colors.WHITE,
                                size: c.$n.Sizes.LARGE,
                                fullWidth: !0,
                            }),
                        }),
                    }),
                    E.Ay.hasFreeBoosts(I) || E.Ay.isPremium(I, O.PremiumTypes.TIER_2)
                        ? (0, r.jsxs)(c.$n, {
                              "data-migration-pending": !0,
                              className: s()(v.J$, v.Rr),
                              innerClassName: v.yN,
                              look: c.$n.Looks.OUTLINED,
                              color: c.$n.Colors.WHITE,
                              onClick: D,
                              size: c.$n.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(u.okO, {
                                      size: "md",
                                      color: "currentColor",
                                      className: v.MD,
                                  }),
                                  A.intl.string(A.t["8MYSQw"]),
                              ],
                          })
                        : (0, r.jsx)(c.$n, {
                              "data-migration-pending": !0,
                              className: s()(v.J$, v.Rr),
                              look: c.$n.Looks.OUTLINED,
                              color: c.$n.Colors.WHITE,
                              onClick: P,
                              size: c.$n.Sizes.LARGE,
                              disabled: C,
                              children: A.intl.string(A.t.Q43TvC),
                          }),
                ],
            }),
        ],
    });
};
