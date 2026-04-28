"use strict";
n.d(t, { A: () => d, R: () => u });
var l = n(627968),
    i = n(64700),
    s = n(939341),
    a = n(263577),
    r = n(506326),
    o = n(868065),
    c = n(352760);
let u = [r.zi, r.Rq],
    d = i.memo((e) => {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: d } = (0, s.nO)({ entry: t });
        return (0, l.jsxs)(o.Zp, {
            selected: i,
            children: [
                (0, l.jsxs)(o.UA, {
                    children: [
                        (0, l.jsx)(o.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                        (0, l.jsx)(o.ZB, { children: t.extra.media_title }),
                        (0, l.jsx)(r.mG, {
                            location: r.N5.CARD,
                            children: u.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                        }),
                    ],
                }),
                (0, l.jsx)(a.V, { src: d?.src, size: 48, className: c.xn, alt: d?.alt }),
            ],
        });
    });
