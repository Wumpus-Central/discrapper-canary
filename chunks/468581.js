n.d(t, { $: () => c, A: () => d });
var l = n(477900),
    i = n(582128),
    s = n(939341),
    r = n(263577),
    a = n(506326),
    o = n(868065),
    u = n(804779);
let c = [a.iq, a.Zc, a.Xy, a.$X, a.fg, a.MK],
    d = i.memo(function (e) {
        let { entry: t, channel: n, selected: i, hovered: d } = e,
            { largeImage: h } = (0, s.nO)({
                entry: t,
                showCoverImage: !1,
                trackingSource: "memberlist_activity_content_row",
            });
        return (0, l.jsxs)(o.Zp, {
            selected: i,
            children: [
                (0, l.jsxs)(o.UA, {
                    children: [
                        (0, l.jsx)(o.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                        (0, l.jsx)(o.ZB, { children: t.extra.activity_name }),
                        (0, l.jsx)(a.mG, {
                            location: a.N5.CARD,
                            children: c.map((e, n) => (0, l.jsx)(e, { entry: t, hovered: d }, n)),
                        }),
                    ],
                }),
                (0, l.jsx)(r.V, { alt: h?.alt, src: h?.src, size: 48, className: u.xn }),
            ],
        });
    });
