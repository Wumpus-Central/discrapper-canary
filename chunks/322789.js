n.d(t, {
    A: () => O,
    n: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(696292),
    s = n(554146),
    o = n(397927),
    l = n(359549),
    c = n(627363),
    u = n(379848),
    d = n(753845),
    f = n(939341),
    p = n(263577),
    _ = n(506326),
    h = n(868065),
    m = n(985018),
    g = n(22589),
    E = n(332225);
let b = [_.iq, _.Zc, _.Xy, _.$X, _.tR, _.K7, _.fg, _.sp, _.MK],
    y = (e) => {
        let { entry: t, channel: n, selected: i, hovered: y, isFirstApplicationOccurrence: O } = e,
            { largeImage: A } = (0, f.nO)({
                entry: t,
                showCoverImage: !1,
            }),
            { data: v } = (0, c.YY)(t.extra.application_id),
            S = (0, l.J)(v) && O,
            I = S ? [s.M.CLOUD_PLAY_NEW_BADGE] : [],
            [T] = (0, u.kn)(I);
        return (0, r.jsxs)(h.Zp, {
            selected: i,
            usesCardRows: !0,
            children: [
                (0, r.jsx)(d.A, {
                    applicationId: t.extra.application_id,
                    questContent: a.u.MEMBERS_LIST_CARD,
                    children: (e) => {
                        var i;
                        return (0, r.jsxs)(h.dM, {
                            ref: e,
                            children: [
                                (0, r.jsxs)(h.UA, {
                                    children: [
                                        (0, r.jsx)(h.Hp, {
                                            entry: t,
                                            channelId: n.id,
                                            guildId: n.guild_id,
                                        }),
                                        (0, r.jsx)(h.ZB, {
                                            children: t.extra.game_name,
                                        }),
                                        (0, r.jsx)(_.mG, {
                                            location: _.N5.CARD,
                                            children: b.map((e, n) =>
                                                (0, r.jsx)(
                                                    e,
                                                    {
                                                        entry: t,
                                                        hovered: y,
                                                    },
                                                    n,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(p.V, {
                                    alt: null != (i = null == A ? void 0 : A.text) ? i : null == A ? void 0 : A.alt,
                                    src: null == A ? void 0 : A.src,
                                    size: 48,
                                    className: E.xn,
                                    showTooltip: (null == A ? void 0 : A.text) != null,
                                }),
                            ],
                        });
                    },
                }),
                S &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(h.ik, {}),
                            (0, r.jsxs)(h.dM, {
                                className: g.D,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: g.t,
                                        children: [
                                            (0, r.jsx)(o.hpF, {
                                                color: o.LU0.colors.ICON_SUBTLE,
                                                size: "xxs",
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: m.intl.string(m.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    T === s.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, r.jsx)(o.LpS, {
                                            text: m.intl.string(m.t.y2b7CA),
                                            color: o.LU0.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
            ],
        });
    },
    O = i.memo(y);
