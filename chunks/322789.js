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
    C = n(964195),
    E = n(939341),
    I = n(291594),
    y = n(263577),
    S = n(506326),
    v = n(868065),
    N = n(424994),
    _ = n(518477),
    j = n(375708),
    T = n(273783),
    b = n(804779);
let R = [S.iq, S.Zc, S.Xy, S.$X, S.tR, S.K7, S.fg, S.sp, S.MK],
    O = i.memo(function (e) {
        let {
                entry: t,
                channel: n,
                selected: i,
                hovered: O,
                isFirstApplicationOccurrence: L,
                trackRankingItemInteraction: M,
            } = e,
            { largeImage: k } = (0, E.nO)({
                entry: t,
                showCoverImage: !1,
                trackingSource: "memberlist_gaming_content_row",
            }),
            { data: w } = (0, m.YY)(t.extra.application_id),
            P = (0, h.JC)(w) && L,
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
                { onOpened: () => M(N.PA.OPENED_GAME_PROFILE) },
            ),
            V = j.intl.formatToPlainString(j.t["9sZWVp"], { gameName: t.extra.game_name }),
            F = (0, l.jsx)(y.V, {
                alt: k?.text ?? k?.alt,
                src: k?.src,
                size: 48,
                className: b.xn,
                showTooltip: k?.text != null,
            }),
            H = (0, l.jsx)(v.ZB, { children: t.extra.game_name });
        return (0, l.jsxs)(v.Zp, {
            selected: i,
            usesCardRows: !0,
            children: [
                (0, l.jsx)(x.A, {
                    applicationId: t.extra.application_id,
                    questContent: s.u.MEMBERS_LIST_CARD,
                    children: (e) =>
                        (0, l.jsxs)(v.dM, {
                            ref: e,
                            children: [
                                (0, l.jsxs)(v.UA, {
                                    children: [
                                        (0, l.jsx)(v.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                                        null != G ? (0, l.jsx)(I.A, { className: T.N4, onClick: G, children: H }) : H,
                                        (0, l.jsx)(S.mG, {
                                            location: S.N5.CARD,
                                            children: R.map((e, n) => (0, l.jsx)(e, { entry: t, hovered: O }, n)),
                                        }),
                                    ],
                                }),
                                null != G
                                    ? (0, l.jsx)(a.D, { className: T.vi, onClick: G, "aria-label": V, children: F })
                                    : F,
                            ],
                        }),
                }),
                P &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(v.ik, {}),
                            (0, l.jsxs)(v.dM, {
                                className: T.DK,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: T.tJ,
                                        children: [
                                            (0, l.jsx)(o.h, { color: u.A.colors.ICON_SUBTLE, size: "xxs" }),
                                            (0, l.jsx)(c.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: j.intl.string(j.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    U === r.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, l.jsx)(d.Lp, {
                                            text: j.intl.string(j.t.y2b7CA),
                                            color: u.A.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
                "applicationWidgetPreview" in t &&
                    null != t.applicationWidgetPreview &&
                    (0, l.jsx)(C.F, {
                        userId: t.author_id,
                        widgetApplicationId: t.applicationWidgetPreview.widgetApplicationId,
                        hasWidget: t.applicationWidgetPreview.hasWidget,
                        className: T.AB,
                        compactViewMore: !0,
                        onClickViewMore: () => {
                            M(N.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                (0, A.openUserProfileModal)({ userId: t.author_id, tabSection: _.RP.WIDGETS });
                        },
                    }),
            ],
        });
    });
