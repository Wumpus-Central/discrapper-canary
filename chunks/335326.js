n.d(t, {
    Z: () => f,
    t: () => c
});
var i = n(200651),
    r = n(192379),
    a = n(379357),
    s = n(442550),
    o = n(297781),
    l = n(443487),
    u = n(704927);
let c = [o.Yl, o.Rg],
    d = (e) => {
        let { entry: t, channel: n, selected: r } = e,
            { largeImage: d } = (0, a.rv)({ entry: t });
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
                        (0, i.jsx)(l.ll, { children: t.extra.media_title }),
                        (0, i.jsx)(o.Gk, {
                            location: o.Gt.CARD,
                            children: c.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                        })
                    ]
                }),
                (0, i.jsx)(s.f, {
                    src: null == d ? void 0 : d.src,
                    size: 48,
                    className: u.thumbnail,
                    alt: null == d ? void 0 : d.alt
                })
            ]
        });
    },
    f = r.memo(d);
