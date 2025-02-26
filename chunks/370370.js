n.d(t, {
    Z: () => d,
    j: () => u
});
var r = n(200651),
    i = n(192379),
    l = n(379357),
    o = n(442550),
    s = n(297781),
    a = n(443487),
    c = n(62545);
let u = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ],
    d = i.memo((e) => {
        let { entry: t, channel: n, selected: i, hovered: d } = e,
            { largeImage: _ } = (0, l.rv)({
                entry: t,
                showCoverImage: !1
            });
        return (0, r.jsxs)(a.Zb, {
            selected: i,
            children: [
                (0, r.jsxs)(a.e$, {
                    children: [
                        (0, r.jsx)(a.F9, {
                            entry: t,
                            channelId: n.id,
                            guildId: n.guild_id
                        }),
                        (0, r.jsx)(a.ll, { children: t.extra.activity_name }),
                        (0, r.jsx)(s.Gk, {
                            location: s.Gt.CARD,
                            children: u.map((e, n) =>
                                (0, r.jsx)(
                                    e,
                                    {
                                        entry: t,
                                        hovered: d
                                    },
                                    n
                                )
                            )
                        })
                    ]
                }),
                (0, r.jsx)(o.f, {
                    alt: null == _ ? void 0 : _.alt,
                    src: null == _ ? void 0 : _.src,
                    size: 48,
                    className: c.thumbnail
                })
            ]
        });
    });
