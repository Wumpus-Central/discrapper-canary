"use strict";
n.d(t, { A: () => C, n: () => S });
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
    p = n(939341),
    h = n(263577),
    m = n(506326),
    g = n(868065),
    E = n(424994),
    A = n(518477),
    I = n(985018),
    T = n(22589),
    y = n(332225);
let S = [m.iq, m.Zc, m.Xy, m.$X, m.tR, m.K7, m.fg, m.sp, m.MK],
    v = (e) => {
        let {
                entry: t,
                channel: n,
                selected: i,
                hovered: v,
                isFirstApplicationOccurrence: C,
                trackRankingItemInteraction: b,
            } = e,
            { largeImage: N } = (0, p.nO)({ entry: t, showCoverImage: !1 }),
            { data: R } = (0, u.YY)(t.extra.application_id),
            O = (0, l.J)(R) && C,
            D = O ? [s.M.CLOUD_PLAY_NEW_BADGE] : [],
            [L] = (0, c.kn)(D);
        return (0, r.jsxs)(g.Zp, {
            selected: i,
            usesCardRows: !0,
            children: [
                (0, r.jsx)(d.A, {
                    applicationId: t.extra.application_id,
                    questContent: a.u.MEMBERS_LIST_CARD,
                    children: (e) =>
                        (0, r.jsxs)(g.dM, {
                            ref: e,
                            children: [
                                (0, r.jsxs)(g.UA, {
                                    children: [
                                        (0, r.jsx)(g.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                                        (0, r.jsx)(g.ZB, { children: t.extra.game_name }),
                                        (0, r.jsx)(m.mG, {
                                            location: m.N5.CARD,
                                            children: S.map((e, n) => (0, r.jsx)(e, { entry: t, hovered: v }, n)),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(h.V, {
                                    alt: N?.text ?? N?.alt,
                                    src: N?.src,
                                    size: 48,
                                    className: y.xn,
                                    showTooltip: N?.text != null,
                                }),
                            ],
                        }),
                }),
                O &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(g.ik, {}),
                            (0, r.jsxs)(g.dM, {
                                className: T.DK,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: T.tJ,
                                        children: [
                                            (0, r.jsx)(o.hpF, { color: o.LU0.colors.ICON_SUBTLE, size: "xxs" }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: I.intl.string(I.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    L === s.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, r.jsx)(o.LpS, {
                                            text: I.intl.string(I.t.y2b7CA),
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
                        className: T.AB,
                        onClickViewMore: () => {
                            b(E.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                (0, _.openUserProfileModal)({ userId: t.author_id, tabSection: A.RP.WIDGETS });
                        },
                    }),
            ],
        });
    },
    C = i.memo(v);
