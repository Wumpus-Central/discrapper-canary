n.d(t, {
    Z: () => f,
    j: () => u
});
var r = n(200651),
    i = n(192379),
    o = n(379357),
    a = n(442550),
    s = n(297781),
    l = n(443487),
    c = n(62545);
let u = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ],
    d = (e) => {
        let { entry: t, channel: n, selected: i, hovered: d } = e,
            { largeImage: f } = (0, o.rv)({
                entry: t,
                showCoverImage: !1
            });
        return (0, r.jsxs)(l.Zb, {
            selected: i,
            children: [
                (0, r.jsxs)(l.e$, {
                    children: [
                        (0, r.jsx)(l.F9, {
                            entry: t,
                            channelId: n.id,
                            guildId: n.guild_id
                        }),
                        (0, r.jsx)(l.ll, { children: t.extra.activity_name }),
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
                (0, r.jsx)(a.f, {
                    alt: null == f ? void 0 : f.alt,
                    src: null == f ? void 0 : f.src,
                    size: 48,
                    className: c.thumbnail
                })
            ]
        });
    },
    f = i.memo(d);
