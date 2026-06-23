"use strict";
n.d(t, { A: () => d, R: () => c });
var i = n(627968),
    r = n(64700),
    s = n(939341),
    a = n(263577),
    o = n(506326),
    l = n(868065),
    u = n(352760);
let c = [o.zi, o.Rq],
    d = r.memo(function (e) {
        let { entry: t, channel: n, selected: r } = e,
            { largeImage: d } = (0, s.nO)({ entry: t, trackingSource: "memberlist_watch_content_row" });
        return (0, i.jsxs)(l.Zp, {
            selected: r,
            children: [
                (0, i.jsxs)(l.UA, {
                    children: [
                        (0, i.jsx)(l.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                        (0, i.jsx)(l.ZB, { children: t.extra.media_title }),
                        (0, i.jsx)(o.mG, {
                            location: o.N5.CARD,
                            children: c.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                        }),
                    ],
                }),
                (0, i.jsx)(a.V, { src: d?.src, size: 48, className: u.xn, alt: d?.alt }),
            ],
        });
    });
