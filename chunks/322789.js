"use strict";
n.d(t, { A: () => M, n: () => b });
var i = n(627968),
    r = n(64700),
    a = n(696292),
    s = n(554146),
    l = n(939249),
    o = n(414499),
    d = n(661531),
    c = n(834730),
    u = n(812993),
    _ = n(737393),
    E = n(627363),
    A = n(131607),
    h = n(409626),
    I = n(692969),
    f = n(932413),
    p = n(975732),
    T = n(964195),
    m = n(939341),
    g = n(99066),
    S = n(291594),
    N = n(263577),
    C = n(506326),
    O = n(868065),
    R = n(424994),
    L = n(518477),
    D = n(375708),
    y = n(383374),
    v = n(352760);
let b = [C.iq, C.Zc, C.Xy, C.$X, C.tR, C.K7, C.fg, C.sp, C.MK],
    M = r.memo(function (e) {
        let {
                entry: t,
                channel: n,
                selected: r,
                hovered: M,
                isFirstApplicationOccurrence: P,
                trackRankingItemInteraction: U,
            } = e,
            { largeImage: w } = (0, m.nO)({
                entry: t,
                showCoverImage: !1,
                trackingSource: "memberlist_gaming_content_row",
            }),
            { data: G } = (0, E.YY)(t.extra.application_id),
            x = (0, _.JC)(G) && P,
            k = x ? [s.M.CLOUD_PLAY_NEW_BADGE] : [],
            [F] = (0, A.kn)(k),
            V = (0, g.dN)("MemberListGamingContent"),
            B = (0, I.A)(
                {
                    location: "Member List Activity Card",
                    applicationId: V ? t.extra.application_id : void 0,
                    source: h.GameProfileSources.ActivityCard,
                    trackEntryPointImpression: V,
                    sourceUserId: t.author_id,
                },
                { onOpened: () => U(R.PA.OPENED_GAME_PROFILE) },
            ),
            H = V ? B : void 0,
            j = D.intl.formatToPlainString(D.t["9sZWVp"], { gameName: t.extra.game_name }),
            W = (0, i.jsx)(N.V, {
                alt: w?.text ?? w?.alt,
                src: w?.src,
                size: 48,
                className: v.xn,
                showTooltip: w?.text != null,
            }),
            Y = (0, i.jsx)(O.ZB, { children: t.extra.game_name });
        return (0, i.jsxs)(O.Zp, {
            selected: r,
            usesCardRows: !0,
            children: [
                (0, i.jsx)(f.A, {
                    applicationId: t.extra.application_id,
                    questContent: a.u.MEMBERS_LIST_CARD,
                    children: (e) =>
                        (0, i.jsxs)(O.dM, {
                            ref: e,
                            children: [
                                (0, i.jsxs)(O.UA, {
                                    children: [
                                        (0, i.jsx)(O.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                                        null != H ? (0, i.jsx)(S.A, { className: y.N4, onClick: H, children: Y }) : Y,
                                        (0, i.jsx)(C.mG, {
                                            location: C.N5.CARD,
                                            children: b.map((e, n) => (0, i.jsx)(e, { entry: t, hovered: M }, n)),
                                        }),
                                    ],
                                }),
                                null != H
                                    ? (0, i.jsx)(l.D, { className: y.vi, onClick: H, "aria-label": j, children: W })
                                    : W,
                            ],
                        }),
                }),
                x &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(O.ik, {}),
                            (0, i.jsxs)(O.dM, {
                                className: y.DK,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: y.tJ,
                                        children: [
                                            (0, i.jsx)(o.h, { color: d.A.colors.ICON_SUBTLE, size: "xxs" }),
                                            (0, i.jsx)(c.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: D.intl.string(D.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    F === s.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, i.jsx)(u.Lp, {
                                            text: D.intl.string(D.t.y2b7CA),
                                            color: d.A.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
                "applicationWidgetPreview" in t &&
                    null != t.applicationWidgetPreview &&
                    (0, i.jsx)(T.F, {
                        userId: t.author_id,
                        widgetApplicationId: t.applicationWidgetPreview.widgetApplicationId,
                        hasWidget: t.applicationWidgetPreview.hasWidget,
                        className: y.AB,
                        compactViewMore: !0,
                        onClickViewMore: () => {
                            U(R.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                (0, p.openUserProfileModal)({ userId: t.author_id, tabSection: L.RP.WIDGETS });
                        },
                    }),
            ],
        });
    });
