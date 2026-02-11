"use strict";
n.d(t, { A: () => b, n: () => v });
var r = n(627968),
    i = n(64700),
    a = n(696292),
    s = n(554146),
    o = n(397927),
    l = n(359549),
    u = n(627363),
    c = n(379848),
    d = n(753845),
    _ = n(657331),
    f = n(964195),
    h = n(939341),
    p = n(263577),
    g = n(506326),
    E = n(868065),
    A = n(424994),
    I = n(518477),
    T = n(985018),
    y = n(197291),
    S = n(687071);
let v = [g.iq, g.Zc, g.Xy, g.$X, g.tR, g.K7, g.fg, g.sp, g.MK],
    C = (e) => {
        let {
                entry: t,
                channel: n,
                selected: i,
                hovered: C,
                isFirstApplicationOccurrence: b,
                trackRankingItemInteraction: N,
            } = e,
            { largeImage: R } = (0, h.nO)({ entry: t, showCoverImage: !1 }),
            { data: O } = (0, u.YY)(t.extra.application_id),
            D = (0, l.J)(O) && b,
            L = D ? [s.M.CLOUD_PLAY_NEW_BADGE] : [],
            [w] = (0, c.kn)(L);
        return (0, r.jsxs)(E.Zp, {
            selected: i,
            usesCardRows: !0,
            children: [
                (0, r.jsx)(d.A, {
                    applicationId: t.extra.application_id,
                    questContent: a.u.MEMBERS_LIST_CARD,
                    children: (e) =>
                        (0, r.jsxs)(E.dM, {
                            ref: e,
                            children: [
                                (0, r.jsxs)(E.UA, {
                                    children: [
                                        (0, r.jsx)(E.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                                        (0, r.jsx)(E.ZB, { children: t.extra.game_name }),
                                        (0, r.jsx)(g.mG, {
                                            location: g.N5.CARD,
                                            children: v.map((e, n) => (0, r.jsx)(e, { entry: t, hovered: C }, n)),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(p.V, {
                                    alt: R?.text ?? R?.alt,
                                    src: R?.src,
                                    size: 48,
                                    className: S.xn,
                                    showTooltip: R?.text != null,
                                }),
                            ],
                        }),
                }),
                D &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(E.ik, {}),
                            (0, r.jsxs)(E.dM, {
                                className: y.DK,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: y.tJ,
                                        children: [
                                            (0, r.jsx)(o.hpF, { color: o.LU0.colors.ICON_SUBTLE, size: "xxs" }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: T.intl.string(T.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    w === s.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, r.jsx)(o.LpS, {
                                            text: T.intl.string(T.t.y2b7CA),
                                            color: o.LU0.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
                "applicationWidgetPreview" in t &&
                    null != t.applicationWidgetPreview &&
                    (0, r.jsx)(f.F, {
                        ...t.applicationWidgetPreview,
                        className: y.AB,
                        onClickViewMore: () => {
                            N(A.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                (0, _.openUserProfileModal)({ userId: t.author_id, tabSection: I.RP.WIDGETS });
                        },
                    }),
            ],
        });
    },
    b = i.memo(C);
