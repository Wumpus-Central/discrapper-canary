r.d(n, {
    j: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(379357),
    o = r(442550),
    l = r(297781),
    u = r(443487),
    c = r(830677);
let d = [l.OV, l.EE, l.Af, l.U9, l.n8, l.pQ],
    f = (e) => {
        let { entry: n, channel: r, selected: a, hovered: f } = e,
            { largeImage: _ } = (0, s.rv)({
                entry: n,
                showCoverImage: !1
            });
        return (0, i.jsxs)(u.Zb, {
            selected: a,
            children: [
                (0, i.jsxs)(u.e$, {
                    children: [
                        (0, i.jsx)(u.F9, {
                            entry: n,
                            channelId: r.id,
                            guildId: r.guild_id
                        }),
                        (0, i.jsx)(u.ll, { children: n.extra.activity_name }),
                        (0, i.jsx)(l.Gk, {
                            location: l.Gt.CARD,
                            children: d.map((e, r) =>
                                (0, i.jsx)(
                                    e,
                                    {
                                        entry: n,
                                        hovered: f
                                    },
                                    r
                                )
                            )
                        })
                    ]
                }),
                (0, i.jsx)(o.f, {
                    alt: null == _ ? void 0 : _.alt,
                    src: null == _ ? void 0 : _.src,
                    size: 48,
                    className: c.thumbnail
                })
            ]
        });
    };
n.Z = a.memo(f);
