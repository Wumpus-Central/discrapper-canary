"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    u = n(421380),
    c = n(397927),
    d = n(688810),
    _ = n(263063),
    f = n(532794),
    p = n(864310),
    h = n(338548),
    m = n(287809),
    g = n(178368),
    E = n(927578),
    A = n(721923),
    I = n(652215),
    T = n(788868),
    y = n(985018),
    S = n(998465);
let v = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        v = i.useRef(null),
        C = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        b = (0, o.bG)([g.A], () => g.A.boostSlots),
        N = C?.isPremiumGroupMember(),
        { analyticsLocations: R } = (0, d.Ay)(),
        O = i.useMemo(
            () =>
                Object.keys(b).filter((e) => {
                    let t = b[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }).length,
            [b, n.id],
        ),
        D = (0, p.A)(e.guild.id).total;
    function L() {
        (0, f.A)({
            initialPlanId: null,
            subscriptionTier: T.pe.TIER_2,
            analyticsLocations: R,
            analyticsObject: {
                page: I.liQ.PREMIUM_GUILD_USER_MODAL,
                section: I.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: I.ZSU.BUTTON_ICON,
                objectType: I.AnalyticsObjectTypes.BUY,
            },
            onClose: (e) => e && t(),
        });
    }
    function w() {
        (0, f.A)({
            initialPlanId: null,
            subscriptionTier: T.pe.TIER_2,
            isGift: !0,
            analyticsLocations: R,
            analyticsObject: {
                page: I.liQ.PREMIUM_GUILD_USER_MODAL,
                section: I.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: I.ZSU.BUTTON_ICON,
                objectType: I.AnalyticsObjectTypes.GIFT,
            },
            onClose: (e) => e && t(),
        });
    }
    return (0, r.jsxs)("div", {
        className: S.yD,
        children: [
            (0, r.jsx)(_.A, { className: S.$f, guild: n, size: _.A.Sizes.LARGER }),
            (0, r.jsx)(c.Heading, {
                className: S.J5,
                color: "always-white",
                variant: "text-lg/bold",
                children: n.name,
            }),
            (0, r.jsxs)("div", {
                className: S.nx,
                children: [
                    (0, r.jsxs)("div", {
                        className: S.SJ,
                        children: [
                            (0, r.jsx)(c._Jp, {
                                color: D > 0 ? c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK : "currentColor",
                                className: s()(S.Me, { [S.S3]: D > 0 }),
                            }),
                            (0, r.jsx)(c.Text, {
                                className: S.n,
                                variant: "text-md/bold",
                                children: y.intl.format(y.t["pob/cL"], { subscriptions: D }),
                            }),
                        ],
                    }),
                    O > 0
                        ? (0, r.jsx)(c.Text, {
                              className: S.EV,
                              variant: "text-sm/normal",
                              children: y.intl.format(y.t.Jeto2u, { numSubscriptions: O }),
                          })
                        : null,
                ],
            }),
            N ? (0, r.jsx)(h.A, { alwaysWhite: !0 }) : null,
            (0, r.jsxs)("div", {
                className: S.Sq,
                children: [
                    (0, r.jsx)(l.L, {
                        innerRef: v,
                        onChange: a,
                        threshold: 0.9,
                        children: (0, r.jsx)("div", {
                            ref: v,
                            className: s()(S.J$, S.$F),
                            children: (0, r.jsx)(A.A, {
                                className: S.E0,
                                innerClassName: S.J1,
                                buttonShineClassName: S.Vi,
                                guild: n,
                                analyticsLocation: {
                                    page: I.liQ.PREMIUM_GUILD_USER_MODAL,
                                    section: I.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: I.ZSU.BUTTON_CTA,
                                    objectType: I.AnalyticsObjectTypes.BUY,
                                },
                                closeLayer: t,
                                color: u.$n.Colors.WHITE,
                                size: u.$n.Sizes.LARGE,
                                fullWidth: !0,
                            }),
                        }),
                    }),
                    E.Ay.hasFreeBoosts(C) || E.Ay.isPremium(C, T.PremiumTypes.TIER_2)
                        ? (0, r.jsxs)(u.$n, {
                              "data-migration-pending": !0,
                              className: s()(S.J$, S.Rr),
                              innerClassName: S.yN,
                              look: u.$n.Looks.OUTLINED,
                              color: u.$n.Colors.WHITE,
                              onClick: w,
                              size: u.$n.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(c.okO, { size: "md", color: "currentColor", className: S.MD }),
                                  y.intl.string(y.t["8MYSQw"]),
                              ],
                          })
                        : (0, r.jsx)(u.$n, {
                              "data-migration-pending": !0,
                              className: s()(S.J$, S.Rr),
                              look: u.$n.Looks.OUTLINED,
                              color: u.$n.Colors.WHITE,
                              onClick: L,
                              size: u.$n.Sizes.LARGE,
                              disabled: N,
                              children: y.intl.string(y.t.Q43TvC),
                          }),
                ],
            }),
        ],
    });
};
