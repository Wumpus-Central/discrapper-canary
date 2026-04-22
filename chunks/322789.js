"use strict";
n.d(t, { A: () => N, n: () => b });
var i = n(627968),
    l = n(64700),
    s = n(696292),
    r = n(554146),
    a = n(414499),
    o = n(827734),
    c = n(834730),
    u = n(777666),
    d = n(359549),
    h = n(627363),
    m = n(932001),
    p = n(932413),
    f = n(657331),
    g = n(964195),
    _ = n(939341),
    x = n(263577),
    A = n(506326),
    C = n(868065),
    E = n(424994),
    I = n(518477),
    v = n(985018),
    y = n(383374),
    S = n(352760);
let b = [A.iq, A.Zc, A.Xy, A.$X, A.tR, A.K7, A.fg, A.sp, A.MK],
    N = l.memo((e) => {
        let {
                entry: t,
                channel: n,
                selected: l,
                hovered: N,
                isFirstApplicationOccurrence: T,
                trackRankingItemInteraction: j,
            } = e,
            { largeImage: R } = (0, _.nO)({ entry: t, showCoverImage: !1 }),
            { data: w } = (0, h.YY)(t.extra.application_id),
            L = (0, d.J)(w) && T,
            M = L ? [r.M.CLOUD_PLAY_NEW_BADGE] : [],
            [k] = (0, m.kn)(M);
        return (0, i.jsxs)(C.Zp, {
            selected: l,
            usesCardRows: !0,
            children: [
                (0, i.jsx)(p.A, {
                    applicationId: t.extra.application_id,
                    questContent: s.u.MEMBERS_LIST_CARD,
                    children: (e) =>
                        (0, i.jsxs)(C.dM, {
                            ref: e,
                            children: [
                                (0, i.jsxs)(C.UA, {
                                    children: [
                                        (0, i.jsx)(C.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                                        (0, i.jsx)(C.ZB, { children: t.extra.game_name }),
                                        (0, i.jsx)(A.mG, {
                                            location: A.N5.CARD,
                                            children: b.map((e, n) => (0, i.jsx)(e, { entry: t, hovered: N }, n)),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(x.V, {
                                    alt: R?.text ?? R?.alt,
                                    src: R?.src,
                                    size: 48,
                                    className: S.xn,
                                    showTooltip: R?.text != null,
                                }),
                            ],
                        }),
                }),
                L &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(C.ik, {}),
                            (0, i.jsxs)(C.dM, {
                                className: y.DK,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: y.tJ,
                                        children: [
                                            (0, i.jsx)(a.h, { color: o.A.colors.ICON_SUBTLE, size: "xxs" }),
                                            (0, i.jsx)(c.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: v.intl.string(v.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    k === r.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, i.jsx)(u.Lp, {
                                            text: v.intl.string(v.t.y2b7CA),
                                            color: o.A.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
                "applicationWidgetPreview" in t &&
                    null != t.applicationWidgetPreview &&
                    (0, i.jsx)(g.F, {
                        ...t.applicationWidgetPreview,
                        className: y.AB,
                        onClickViewMore: () => {
                            j(E.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                (0, f.openUserProfileModal)({ userId: t.author_id, tabSection: I.RP.WIDGETS });
                        },
                    }),
            ],
        });
    });
