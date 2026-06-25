"use strict";
n.d(t, { A: () => R, n: () => v });
var i = n(627968),
    r = n(64700),
    s = n(696292),
    a = n(554146),
    o = n(414499),
    l = n(661531),
    u = n(834730),
    c = n(812993),
    d = n(737393),
    _ = n(627363),
    h = n(131607),
    f = n(932413),
    p = n(975732),
    E = n(964195),
    m = n(939341),
    g = n(263577),
    A = n(506326),
    I = n(868065),
    T = n(424994),
    S = n(518477),
    y = n(375708),
    C = n(383374),
    N = n(352760);
let v = [A.iq, A.Zc, A.Xy, A.$X, A.tR, A.K7, A.fg, A.sp, A.MK],
    R = r.memo(function (e) {
        let {
                entry: t,
                channel: n,
                selected: r,
                hovered: R,
                isFirstApplicationOccurrence: O,
                trackRankingItemInteraction: b,
            } = e,
            { largeImage: D } = (0, m.nO)({
                entry: t,
                showCoverImage: !1,
                trackingSource: "memberlist_gaming_content_row",
            }),
            { data: L } = (0, _.YY)(t.extra.application_id),
            w = (0, d.JC)(L) && O,
            M = w ? [a.M.CLOUD_PLAY_NEW_BADGE] : [],
            [P] = (0, h.kn)(M);
        return (0, i.jsxs)(I.Zp, {
            selected: r,
            usesCardRows: !0,
            children: [
                (0, i.jsx)(f.A, {
                    applicationId: t.extra.application_id,
                    questContent: s.u.MEMBERS_LIST_CARD,
                    children: (e) =>
                        (0, i.jsxs)(I.dM, {
                            ref: e,
                            children: [
                                (0, i.jsxs)(I.UA, {
                                    children: [
                                        (0, i.jsx)(I.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                                        (0, i.jsx)(I.ZB, { children: t.extra.game_name }),
                                        (0, i.jsx)(A.mG, {
                                            location: A.N5.CARD,
                                            children: v.map((e, n) => (0, i.jsx)(e, { entry: t, hovered: R }, n)),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(g.V, {
                                    alt: D?.text ?? D?.alt,
                                    src: D?.src,
                                    size: 48,
                                    className: N.xn,
                                    showTooltip: D?.text != null,
                                }),
                            ],
                        }),
                }),
                w &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(I.ik, {}),
                            (0, i.jsxs)(I.dM, {
                                className: C.DK,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: C.tJ,
                                        children: [
                                            (0, i.jsx)(o.h, { color: l.A.colors.ICON_SUBTLE, size: "xxs" }),
                                            (0, i.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: y.intl.string(y.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    P === a.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, i.jsx)(c.Lp, {
                                            text: y.intl.string(y.t.y2b7CA),
                                            color: l.A.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
                "applicationWidgetPreview" in t &&
                    null != t.applicationWidgetPreview &&
                    (0, i.jsx)(E.F, {
                        ...t.applicationWidgetPreview,
                        className: C.AB,
                        onClickViewMore: () => {
                            b(T.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                (0, p.openUserProfileModal)({ userId: t.author_id, tabSection: S.RP.WIDGETS });
                        },
                    }),
            ],
        });
    });
