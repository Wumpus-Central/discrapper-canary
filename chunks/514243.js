n.d(t, {
    A: () => f,
    R: () => u,
});
var r = n(627968),
    i = n(64700),
    a = n(939341),
    s = n(263577),
    o = n(506326),
    l = n(868065),
    c = n(332225);
let u = [o.zi, o.Rq],
    d = (e) => {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: d } = (0, a.nO)({
                entry: t,
            });
        return (0, r.jsxs)(l.Zp, {
            selected: i,
            children: [
                (0, r.jsxs)(l.UA, {
                    children: [
                        (0, r.jsx)(l.Hp, {
                            entry: t,
                            channelId: n.id,
                            guildId: n.guild_id,
                        }),
                        (0, r.jsx)(l.ZB, {
                            children: t.extra.media_title,
                        }),
                        (0, r.jsx)(o.mG, {
                            location: o.N5.CARD,
                            children: u.map((e, n) =>
                                (0, r.jsx)(
                                    e,
                                    {
                                        entry: t,
                                    },
                                    n,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, r.jsx)(s.V, {
                    src: null == d ? void 0 : d.src,
                    size: 48,
                    className: c.xn,
                    alt: null == d ? void 0 : d.alt,
                }),
            ],
        });
    },
    f = i.memo(d);
