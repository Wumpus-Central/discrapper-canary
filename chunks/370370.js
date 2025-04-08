n.d(t, {
    Z: () => d,
    j: () => u
});
var r = n(200651),
    i = n(192379),
    o = n(379357),
    l = n(442550),
    s = n(297781),
    a = n(443487),
    c = n(522314);
let u = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ],
    d = i.memo((e) => {
        let { entry: t, channel: n, selected: i, hovered: d } = e,
            { largeImage: p } = (0, o.rv)({
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
                (0, r.jsx)(l.f, {
                    alt: null == p ? void 0 : p.alt,
                    src: null == p ? void 0 : p.src,
                    size: 48,
                    className: c.thumbnail
                })
            ]
        });
    });
