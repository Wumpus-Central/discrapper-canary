n.d(t, {
    W: () => g,
    Z: () => b,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(704215),
    o = n(481060),
    s = n(206074),
    l = n(728345),
    c = n(243778),
    u = n(379357),
    d = n(442550),
    f = n(297781),
    p = n(443487),
    _ = n(388032),
    m = n(800371),
    h = n(451419);
let g = [f.OV, f.EE, f.Af, f.U9, f.wO, f.f, f.n8, f.v1, f.pQ],
    E = (e) => {
        var t;
        let { entry: n, channel: i, selected: E, hovered: b, isFirstApplicationOccurrence: y } = e,
            { largeImage: O } = (0, u.rv)({
                entry: n,
                showCoverImage: !1,
            }),
            { data: v } = (0, l.IX)(n.extra.application_id),
            S = (0, s.q)(v) && y,
            I = S ? [a.z.CLOUD_PLAY_NEW_BADGE] : [],
            [T] = (0, c.US)(I);
        return (0, r.jsxs)(p.Zb, {
            selected: E,
            usesCardRows: !0,
            children: [
                (0, r.jsxs)(p.lS, {
                    children: [
                        (0, r.jsxs)(p.e$, {
                            children: [
                                (0, r.jsx)(p.F9, {
                                    entry: n,
                                    channelId: i.id,
                                    guildId: i.guild_id,
                                }),
                                (0, r.jsx)(p.ll, { children: n.extra.game_name }),
                                (0, r.jsx)(f.Gk, {
                                    location: f.Gt.CARD,
                                    children: g.map((e, t) =>
                                        (0, r.jsx)(
                                            e,
                                            {
                                                entry: n,
                                                hovered: b,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsx)(d.f, {
                            alt: null != (t = null == O ? void 0 : O.text) ? t : null == O ? void 0 : O.alt,
                            src: null == O ? void 0 : O.src,
                            size: 48,
                            className: h.thumbnail,
                            showTooltip: (null == O ? void 0 : O.text) != null,
                        }),
                    ],
                }),
                S &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.xx, {}),
                            (0, r.jsxs)(p.lS, {
                                className: m.cloudPlaySection,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: m.cloudPlaySectionTextContainer,
                                        children: [
                                            (0, r.jsx)(o.v3n, {
                                                color: o.TVs.colors.ICON_SECONDARY,
                                                size: "xxs",
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-secondary",
                                                children: _.intl.string(_.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    T === a.z.CLOUD_PLAY_NEW_BADGE &&
                                        (0, r.jsx)(o.IGR, {
                                            text: _.intl.string(_.t.y2b7CA),
                                            color: o.TVs.colors.BG_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
            ],
        });
    },
    b = i.memo(E);
