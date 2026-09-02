"use strict";
n.d(t, { A: () => O, n: () => R });
var l = n(477900),
    i = n(582128),
    s = n(696292),
    r = n(554146),
    a = n(939249),
    o = n(414499),
    u = n(661531),
    c = n(834730),
    d = n(812993),
    h = n(146779),
    m = n(627363),
    f = n(131607),
    p = n(409626),
    g = n(692969),
    x = n(932413),
    A = n(402860),
    E = n(964195),
    C = n(939341),
    I = n(291594),
    y = n(263577),
    S = n(506326),
    N = n(868065),
    v = n(424994),
    _ = n(518477),
    T = n(375708),
    j = n(273783),
    b = n(804779);
let R = [S.iq, S.Zc, S.Xy, S.$X, S.tR, S.K7, S.fg, S.sp, S.MK],
    O = i.memo(function (e) {
        let {
                entry: t,
                channel: n,
                selected: i,
                hovered: O,
                isFirstApplicationOccurrence: M,
                trackRankingItemInteraction: L,
            } = e,
            { largeImage: k } = (0, C.nO)({
                entry: t,
                showCoverImage: !1,
                trackingSource: "memberlist_gaming_content_row",
            }),
            { data: w } = (0, m.YY)(t.extra.application_id),
            P = (0, h.JC)(w) && M,
            D = P ? [r.M.CLOUD_PLAY_NEW_BADGE] : [],
            [U] = (0, f.kn)(D),
            G = (0, g.A)(
                {
                    location: "Member List Activity Card",
                    applicationId: t.extra.application_id,
                    source: p.GameProfileSources.ActivityCard,
                    trackEntryPointImpression: !0,
                    sourceUserId: t.author_id,
                },
                { onOpened: () => L(v.PA.OPENED_GAME_PROFILE) },
            ),
            V = T.intl.formatToPlainString(T.t["9sZWVp"], { gameName: t.extra.game_name }),
            F = (0, l.jsx)(y.V, {
                alt: k?.text ?? k?.alt,
                src: k?.src,
                size: 48,
                className: b.xn,
                showTooltip: k?.text != null,
            }),
            H = (0, l.jsx)(N.ZB, { children: t.extra.game_name });
        return (0, l.jsxs)(N.Zp, {
            selected: i,
            usesCardRows: !0,
            children: [
                (0, l.jsx)(x.A, {
                    applicationId: t.extra.application_id,
                    questContent: s.u.MEMBERS_LIST_CARD,
                    children: (e) =>
                        (0, l.jsxs)(N.dM, {
                            ref: e,
                            children: [
                                (0, l.jsxs)(N.UA, {
                                    children: [
                                        (0, l.jsx)(N.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                                        null != G ? (0, l.jsx)(I.A, { className: j.N4, onClick: G, children: H }) : H,
                                        (0, l.jsx)(S.mG, {
                                            location: S.N5.CARD,
                                            children: R.map((e, n) => (0, l.jsx)(e, { entry: t, hovered: O }, n)),
                                        }),
                                    ],
                                }),
                                null != G
                                    ? (0, l.jsx)(a.D, { className: j.vi, onClick: G, "aria-label": V, children: F })
                                    : F,
                            ],
                        }),
                }),
                P &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(N.ik, {}),
                            (0, l.jsxs)(N.dM, {
                                className: j.DK,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: j.tJ,
                                        children: [
                                            (0, l.jsx)(o.h, { color: u.A.colors.ICON_SUBTLE, size: "xxs" }),
                                            (0, l.jsx)(c.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: T.intl.string(T.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    U === r.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, l.jsx)(d.Lp, {
                                            text: T.intl.string(T.t.y2b7CA),
                                            color: u.A.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
                "applicationWidgetPreview" in t &&
                    null != t.applicationWidgetPreview &&
                    (0, l.jsx)(E.F, {
                        userId: t.author_id,
                        widgetApplicationId: t.applicationWidgetPreview.widgetApplicationId,
                        hasWidget: t.applicationWidgetPreview.hasWidget,
                        className: j.AB,
                        compactViewMore: !0,
                        onClickViewMore: () => {
                            L(v.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                (0, A.openUserProfileModal)({ userId: t.author_id, tabSection: _.RP.WIDGETS });
                        },
                    }),
            ],
        });
    });
