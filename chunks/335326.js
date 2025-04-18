n.d(t, {
    Z: () => f,
    t: () => u
});
var r = n(200651),
    i = n(192379),
    o = n(379357),
    a = n(442550),
    s = n(297781),
    l = n(443487),
    c = n(111998);
let u = [s.Yl, s.Rg],
    d = (e) => {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: d } = (0, o.rv)({ entry: t });
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
                        (0, r.jsx)(l.ll, { children: t.extra.media_title }),
                        (0, r.jsx)(s.Gk, {
                            location: s.Gt.CARD,
                            children: u.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                        })
                    ]
                }),
                (0, r.jsx)(a.f, {
                    src: null == d ? void 0 : d.src,
                    size: 48,
                    className: c.thumbnail,
                    alt: null == d ? void 0 : d.alt
                })
            ]
        });
    },
    f = i.memo(d);
