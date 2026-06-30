"use strict";
n.d(t, { A: () => y, n: () => S });
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
    p = n(939341),
    E = n(263577),
    m = n(506326),
    g = n(868065),
    A = n(375708),
    I = n(383374),
    T = n(352760);
let S = [m.iq, m.Zc, m.Xy, m.$X, m.tR, m.K7, m.fg, m.sp, m.MK],
    y = r.memo(function (e) {
        let { entry: t, channel: n, selected: r, hovered: y, isFirstApplicationOccurrence: C } = e,
            { largeImage: N } = (0, p.nO)({
                entry: t,
                showCoverImage: !1,
                trackingSource: "memberlist_gaming_content_row",
            }),
            { data: v } = (0, _.YY)(t.extra.application_id),
            R = (0, d.JC)(v) && C,
            O = R ? [a.M.CLOUD_PLAY_NEW_BADGE] : [],
            [b] = (0, h.kn)(O);
        return (0, i.jsxs)(g.Zp, {
            selected: r,
            usesCardRows: !0,
            children: [
                (0, i.jsx)(f.A, {
                    applicationId: t.extra.application_id,
                    questContent: s.u.MEMBERS_LIST_CARD,
                    children: (e) =>
                        (0, i.jsxs)(g.dM, {
                            ref: e,
                            children: [
                                (0, i.jsxs)(g.UA, {
                                    children: [
                                        (0, i.jsx)(g.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                                        (0, i.jsx)(g.ZB, { children: t.extra.game_name }),
                                        (0, i.jsx)(m.mG, {
                                            location: m.N5.CARD,
                                            children: S.map((e, n) => (0, i.jsx)(e, { entry: t, hovered: y }, n)),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(E.V, {
                                    alt: N?.text ?? N?.alt,
                                    src: N?.src,
                                    size: 48,
                                    className: T.xn,
                                    showTooltip: N?.text != null,
                                }),
                            ],
                        }),
                }),
                R &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(g.ik, {}),
                            (0, i.jsxs)(g.dM, {
                                className: I.D,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: I.t,
                                        children: [
                                            (0, i.jsx)(o.h, { color: l.A.colors.ICON_SUBTLE, size: "xxs" }),
                                            (0, i.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: A.intl.string(A.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    b === a.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, i.jsx)(c.Lp, {
                                            text: A.intl.string(A.t.y2b7CA),
                                            color: l.A.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
            ],
        });
    });
