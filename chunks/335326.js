r.d(n, {
    t: function () {
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
let d = [l.Yl, l.Rg],
    f = (e) => {
        let { entry: n, channel: r, selected: a } = e,
            { largeImage: f } = (0, s.rv)({ entry: n });
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
                        (0, i.jsx)(u.ll, { children: n.extra.media_title }),
                        (0, i.jsx)(l.Gk, {
                            location: l.Gt.CARD,
                            children: d.map((e, r) => (0, i.jsx)(e, { entry: n }, r))
                        })
                    ]
                }),
                (0, i.jsx)(o.f, {
                    src: null == f ? void 0 : f.src,
                    size: 48,
                    className: c.thumbnail,
                    alt: null == f ? void 0 : f.alt
                })
            ]
        });
    };
n.Z = a.memo(f);
