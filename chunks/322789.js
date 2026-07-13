"use strict";
n.d(t, { A: () => L, n: () => R });
var i = n(627968),
    r = n(64700),
    a = n(696292),
    s = n(554146),
    l = n(414499),
    o = n(661531),
    d = n(834730),
    c = n(812993),
    u = n(737393),
    _ = n(627363),
    E = n(131607),
    A = n(932413),
    h = n(975732),
    I = n(964195),
    f = n(939341),
    p = n(263577),
    T = n(506326),
    m = n(868065),
    g = n(424994),
    S = n(518477),
    N = n(375708),
    C = n(383374),
    O = n(352760);
let R = [T.iq, T.Zc, T.Xy, T.$X, T.tR, T.K7, T.fg, T.sp, T.MK],
    L = r.memo(function (e) {
        let {
                entry: t,
                channel: n,
                selected: r,
                hovered: L,
                isFirstApplicationOccurrence: D,
                trackRankingItemInteraction: y,
            } = e,
            { largeImage: v } = (0, f.nO)({
                entry: t,
                showCoverImage: !1,
                trackingSource: "memberlist_gaming_content_row",
            }),
            { data: b } = (0, _.YY)(t.extra.application_id),
            M = (0, u.JC)(b) && D,
            P = M ? [s.M.CLOUD_PLAY_NEW_BADGE] : [],
            [U] = (0, E.kn)(P);
        return (0, i.jsxs)(m.Zp, {
            selected: r,
            usesCardRows: !0,
            children: [
                (0, i.jsx)(A.A, {
                    applicationId: t.extra.application_id,
                    questContent: a.u.MEMBERS_LIST_CARD,
                    children: (e) =>
                        (0, i.jsxs)(m.dM, {
                            ref: e,
                            children: [
                                (0, i.jsxs)(m.UA, {
                                    children: [
                                        (0, i.jsx)(m.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                                        (0, i.jsx)(m.ZB, { children: t.extra.game_name }),
                                        (0, i.jsx)(T.mG, {
                                            location: T.N5.CARD,
                                            children: R.map((e, n) => (0, i.jsx)(e, { entry: t, hovered: L }, n)),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(p.V, {
                                    alt: v?.text ?? v?.alt,
                                    src: v?.src,
                                    size: 48,
                                    className: O.xn,
                                    showTooltip: v?.text != null,
                                }),
                            ],
                        }),
                }),
                M &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(m.ik, {}),
                            (0, i.jsxs)(m.dM, {
                                className: C.DK,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: C.tJ,
                                        children: [
                                            (0, i.jsx)(l.h, { color: o.A.colors.ICON_SUBTLE, size: "xxs" }),
                                            (0, i.jsx)(d.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: N.intl.string(N.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    U === s.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, i.jsx)(c.Lp, {
                                            text: N.intl.string(N.t.y2b7CA),
                                            color: o.A.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
                "applicationWidgetPreview" in t &&
                    null != t.applicationWidgetPreview &&
                    (0, i.jsx)(I.F, {
                        userId: t.author_id,
                        widgetApplicationId: t.applicationWidgetPreview.widgetApplicationId,
                        hasWidget: t.applicationWidgetPreview.hasWidget,
                        className: C.AB,
                        compactViewMore: !0,
                        onClickViewMore: () => {
                            y(g.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                (0, h.openUserProfileModal)({ userId: t.author_id, tabSection: S.RP.WIDGETS });
                        },
                    }),
            ],
        });
    });
