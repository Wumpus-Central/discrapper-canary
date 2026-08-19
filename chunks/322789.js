"use strict";
n.d(t, { A: () => O, n: () => L });
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
    A = n(975732),
    E = n(964195),
    C = n(939341),
    I = n(99066),
    y = n(291594),
    S = n(263577),
    v = n(506326),
    _ = n(868065),
    N = n(424994),
    T = n(518477),
    j = n(375708),
    b = n(161878),
    R = n(685504);
let L = [v.iq, v.Zc, v.Xy, v.$X, v.tR, v.K7, v.fg, v.sp, v.MK],
    O = i.memo(function (e) {
        let {
                entry: t,
                channel: n,
                selected: i,
                hovered: O,
                isFirstApplicationOccurrence: M,
                trackRankingItemInteraction: w,
            } = e,
            { largeImage: k } = (0, C.nO)({
                entry: t,
                showCoverImage: !1,
                trackingSource: "memberlist_gaming_content_row",
            }),
            { data: P } = (0, m.YY)(t.extra.application_id),
            D = (0, h.JC)(P) && M,
            U = D ? [r.M.CLOUD_PLAY_NEW_BADGE] : [],
            [G] = (0, f.kn)(U),
            V = (0, I.dN)("MemberListGamingContent"),
            F = (0, g.A)(
                {
                    location: "Member List Activity Card",
                    applicationId: V ? t.extra.application_id : void 0,
                    source: p.GameProfileSources.ActivityCard,
                    trackEntryPointImpression: V,
                    sourceUserId: t.author_id,
                },
                { onOpened: () => w(N.PA.OPENED_GAME_PROFILE) },
            ),
            H = V ? F : void 0,
            B = j.intl.formatToPlainString(j.t["9sZWVp"], { gameName: t.extra.game_name }),
            W = (0, l.jsx)(S.V, {
                alt: k?.text ?? k?.alt,
                src: k?.src,
                size: 48,
                className: R.xn,
                showTooltip: k?.text != null,
            }),
            K = (0, l.jsx)(_.ZB, { children: t.extra.game_name });
        return (0, l.jsxs)(_.Zp, {
            selected: i,
            usesCardRows: !0,
            children: [
                (0, l.jsx)(x.A, {
                    applicationId: t.extra.application_id,
                    questContent: s.u.MEMBERS_LIST_CARD,
                    children: (e) =>
                        (0, l.jsxs)(_.dM, {
                            ref: e,
                            children: [
                                (0, l.jsxs)(_.UA, {
                                    children: [
                                        (0, l.jsx)(_.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                                        null != H ? (0, l.jsx)(y.A, { className: b.N4, onClick: H, children: K }) : K,
                                        (0, l.jsx)(v.mG, {
                                            location: v.N5.CARD,
                                            children: L.map((e, n) => (0, l.jsx)(e, { entry: t, hovered: O }, n)),
                                        }),
                                    ],
                                }),
                                null != H
                                    ? (0, l.jsx)(a.D, { className: b.vi, onClick: H, "aria-label": B, children: W })
                                    : W,
                            ],
                        }),
                }),
                D &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(_.ik, {}),
                            (0, l.jsxs)(_.dM, {
                                className: b.DK,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: b.tJ,
                                        children: [
                                            (0, l.jsx)(o.h, { color: u.A.colors.ICON_SUBTLE, size: "xxs" }),
                                            (0, l.jsx)(c.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: j.intl.string(j.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    G === r.M.CLOUD_PLAY_NEW_BADGE &&
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
                    (0, l.jsx)(E.F, {
                        userId: t.author_id,
                        widgetApplicationId: t.applicationWidgetPreview.widgetApplicationId,
                        hasWidget: t.applicationWidgetPreview.hasWidget,
                        className: b.AB,
                        compactViewMore: !0,
                        onClickViewMore: () => {
                            w(N.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                (0, A.openUserProfileModal)({ userId: t.author_id, tabSection: T.RP.WIDGETS });
                        },
                    }),
            ],
        });
    });
