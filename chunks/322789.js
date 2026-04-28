"use strict";
n.d(t, { A: () => N, n: () => S });
var l = n(627968),
    i = n(64700),
    s = n(696292),
    a = n(554146),
    r = n(414499),
    o = n(661531),
    c = n(834730),
    u = n(777666),
    d = n(737393),
    h = n(627363),
    m = n(932001),
    p = n(932413),
    f = n(975732),
    g = n(964195),
    _ = n(939341),
    x = n(263577),
    C = n(506326),
    A = n(868065),
    E = n(424994),
    I = n(518477),
    v = n(985018),
    y = n(383374),
    b = n(352760);
let S = [C.iq, C.Zc, C.Xy, C.$X, C.tR, C.K7, C.fg, C.sp, C.MK],
    N = i.memo((e) => {
        let {
                entry: t,
                channel: n,
                selected: i,
                hovered: N,
                isFirstApplicationOccurrence: j,
                trackRankingItemInteraction: T,
            } = e,
            { largeImage: w } = (0, _.nO)({ entry: t, showCoverImage: !1 }),
            { data: R } = (0, h.YY)(t.extra.application_id),
            L = (0, d.J)(R) && j,
            k = L ? [a.M.CLOUD_PLAY_NEW_BADGE] : [],
            [O] = (0, m.kn)(k);
        return (0, l.jsxs)(A.Zp, {
            selected: i,
            usesCardRows: !0,
            children: [
                (0, l.jsx)(p.A, {
                    applicationId: t.extra.application_id,
                    questContent: s.u.MEMBERS_LIST_CARD,
                    children: (e) =>
                        (0, l.jsxs)(A.dM, {
                            ref: e,
                            children: [
                                (0, l.jsxs)(A.UA, {
                                    children: [
                                        (0, l.jsx)(A.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                                        (0, l.jsx)(A.ZB, { children: t.extra.game_name }),
                                        (0, l.jsx)(C.mG, {
                                            location: C.N5.CARD,
                                            children: S.map((e, n) => (0, l.jsx)(e, { entry: t, hovered: N }, n)),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(x.V, {
                                    alt: w?.text ?? w?.alt,
                                    src: w?.src,
                                    size: 48,
                                    className: b.xn,
                                    showTooltip: w?.text != null,
                                }),
                            ],
                        }),
                }),
                L &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(A.ik, {}),
                            (0, l.jsxs)(A.dM, {
                                className: y.DK,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: y.tJ,
                                        children: [
                                            (0, l.jsx)(r.h, { color: o.A.colors.ICON_SUBTLE, size: "xxs" }),
                                            (0, l.jsx)(c.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: v.intl.string(v.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    O === a.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, l.jsx)(u.Lp, {
                                            text: v.intl.string(v.t.y2b7CA),
                                            color: o.A.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
                "applicationWidgetPreview" in t &&
                    null != t.applicationWidgetPreview &&
                    (0, l.jsx)(g.F, {
                        ...t.applicationWidgetPreview,
                        className: y.AB,
                        onClickViewMore: () => {
                            T(E.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                (0, f.openUserProfileModal)({ userId: t.author_id, tabSection: I.RP.WIDGETS });
                        },
                    }),
            ],
        });
    });
