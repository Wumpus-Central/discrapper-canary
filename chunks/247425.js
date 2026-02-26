"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(178368),
    g = n(927578),
    A = n(721923),
    I = n(652215),
    T = n(788868),
    S = n(985018),
    y = n(162575);
let v = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: s } = e,
        v = i.useRef(null),
        N = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        C = (0, o.bG)([E.A], () => E.A.boostSlots),
        b = N?.isPremiumGroupMember(),
        { analyticsLocations: R } = (0, d.Ay)(),
        O = i.useMemo(
            () =>
                Object.keys(C).filter((e) => {
                    let t = C[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }).length,
            [C, n.id],
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
        className: y.yD,
        children: [
            (0, r.jsx)(_.Ay, { className: y.$f, guild: n, size: _.Ay.Sizes.LARGER }),
            (0, r.jsx)(c.Heading, {
                className: y.J5,
                color: "always-white",
                variant: "text-lg/bold",
                children: n.name,
            }),
            (0, r.jsxs)("div", {
                className: y.nx,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.SJ,
                        children: [
                            (0, r.jsx)(c._Jp, {
                                color: D > 0 ? c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK : "currentColor",
                                className: a()(y.Me, { [y.S3]: D > 0 }),
                            }),
                            (0, r.jsx)(c.Text, {
                                className: y.n,
                                variant: "text-md/bold",
                                children: S.intl.format(S.t["pob/cL"], { subscriptions: D }),
                            }),
                        ],
                    }),
                    O > 0
                        ? (0, r.jsx)(c.Text, {
                              className: y.EV,
                              variant: "text-sm/normal",
                              children: S.intl.format(S.t.Jeto2u, { numSubscriptions: O }),
                          })
                        : null,
                ],
            }),
            b ? (0, r.jsx)(h.A, { alwaysWhite: !0 }) : null,
            (0, r.jsxs)("div", {
                className: y.Sq,
                children: [
                    (0, r.jsx)(l.L, {
                        innerRef: v,
                        onChange: s,
                        threshold: 0.9,
                        children: (0, r.jsx)("div", {
                            ref: v,
                            className: a()(y.J$, y.$F),
                            children: (0, r.jsx)(A.A, {
                                className: y.E0,
                                innerClassName: y.J1,
                                buttonShineClassName: y.Vi,
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
                    g.Ay.hasFreeBoosts(N) || g.Ay.isPremium(N, T.PremiumTypes.TIER_2)
                        ? (0, r.jsxs)(u.$n, {
                              "data-migration-pending": !0,
                              className: a()(y.J$, y.Rr),
                              innerClassName: y.yN,
                              look: u.$n.Looks.OUTLINED,
                              color: u.$n.Colors.WHITE,
                              onClick: w,
                              size: u.$n.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(c.okO, { size: "md", color: "currentColor", className: y.MD }),
                                  S.intl.string(S.t["8MYSQw"]),
                              ],
                          })
                        : (0, r.jsx)(u.$n, {
                              "data-migration-pending": !0,
                              className: a()(y.J$, y.Rr),
                              look: u.$n.Looks.OUTLINED,
                              color: u.$n.Colors.WHITE,
                              onClick: L,
                              size: u.$n.Sizes.LARGE,
                              disabled: b,
                              children: S.intl.string(S.t.Q43TvC),
                          }),
                ],
            }),
        ],
    });
};
