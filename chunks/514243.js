"use strict";
n.d(t, { A: () => u, R: () => c });
var i = n(477900),
    r = n(582128),
    a = n(939341),
    s = n(263577),
    l = n(506326),
    o = n(868065),
    d = n(685504);
let c = [l.zi, l.Rq],
    u = r.memo(function (e) {
        let { entry: t, channel: n, selected: r } = e,
            { largeImage: u } = (0, a.nO)({ entry: t, trackingSource: "memberlist_watch_content_row" });
        return (0, i.jsxs)(o.Zp, {
            selected: r,
            children: [
                (0, i.jsxs)(o.UA, {
                    children: [
                        (0, i.jsx)(o.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                        (0, i.jsx)(o.ZB, { children: t.extra.media_title }),
                        (0, i.jsx)(l.mG, {
                            location: l.N5.CARD,
                            children: c.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                        }),
                    ],
                }),
                (0, i.jsx)(s.V, { src: u?.src, size: 48, className: d.xn, alt: u?.alt }),
            ],
        });
    });
