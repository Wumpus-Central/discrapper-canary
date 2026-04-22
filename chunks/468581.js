"use strict";
n.d(t, { $: () => u, A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(939341),
    r = n(263577),
    a = n(506326),
    o = n(868065),
    c = n(352760);
let u = [a.iq, a.Zc, a.Xy, a.$X, a.fg, a.MK],
    d = l.memo((e) => {
        let { entry: t, channel: n, selected: l, hovered: d } = e,
            { largeImage: h } = (0, s.nO)({ entry: t, showCoverImage: !1 });
        return (0, i.jsxs)(o.Zp, {
            selected: l,
            children: [
                (0, i.jsxs)(o.UA, {
                    children: [
                        (0, i.jsx)(o.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                        (0, i.jsx)(o.ZB, { children: t.extra.activity_name }),
                        (0, i.jsx)(a.mG, {
                            location: a.N5.CARD,
                            children: u.map((e, n) => (0, i.jsx)(e, { entry: t, hovered: d }, n)),
                        }),
                    ],
                }),
                (0, i.jsx)(r.V, { alt: h?.alt, src: h?.src, size: 48, className: c.xn }),
            ],
        });
    });
