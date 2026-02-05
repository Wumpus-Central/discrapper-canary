"use strict";
n.d(t, { $: () => c, A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(939341),
    s = n(263577),
    o = n(506326),
    l = n(868065),
    u = n(332225);
let c = [o.iq, o.Zc, o.Xy, o.$X, o.fg, o.MK],
    d = (e) => {
        let { entry: t, channel: n, selected: i, hovered: d } = e,
            { largeImage: _ } = (0, a.nO)({ entry: t, showCoverImage: !1 });
        return (0, r.jsxs)(l.Zp, {
            selected: i,
            children: [
                (0, r.jsxs)(l.UA, {
                    children: [
                        (0, r.jsx)(l.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                        (0, r.jsx)(l.ZB, { children: t.extra.activity_name }),
                        (0, r.jsx)(o.mG, {
                            location: o.N5.CARD,
                            children: c.map((e, n) => (0, r.jsx)(e, { entry: t, hovered: d }, n)),
                        }),
                    ],
                }),
                (0, r.jsx)(s.V, { alt: _?.alt, src: _?.src, size: 48, className: u.xn }),
            ],
        });
    },
    _ = i.memo(d);
