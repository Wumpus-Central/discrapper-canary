n.d(t, {
    Z: () => f,
    j: () => c
});
var i = n(200651),
    r = n(192379),
    a = n(379357),
    s = n(442550),
    o = n(297781),
    l = n(443487),
    u = n(704927);
let c = [o.OV, o.EE, o.Af, o.U9, o.n8, o.pQ],
    d = (e) => {
        let { entry: t, channel: n, selected: r, hovered: d } = e,
            { largeImage: f } = (0, a.rv)({
                entry: t,
                showCoverImage: !1
            });
        return (0, i.jsxs)(l.Zb, {
            selected: r,
            children: [
                (0, i.jsxs)(l.e$, {
                    children: [
                        (0, i.jsx)(l.F9, {
                            entry: t,
                            channelId: n.id,
                            guildId: n.guild_id
                        }),
                        (0, i.jsx)(l.ll, { children: t.extra.activity_name }),
                        (0, i.jsx)(o.Gk, {
                            location: o.Gt.CARD,
                            children: c.map((e, n) =>
                                (0, i.jsx)(
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
                (0, i.jsx)(s.f, {
                    alt: null == f ? void 0 : f.alt,
                    src: null == f ? void 0 : f.src,
                    size: 48,
                    className: u.thumbnail
                })
            ]
        });
    },
    f = r.memo(d);
