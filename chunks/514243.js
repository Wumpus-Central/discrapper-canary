"use strict";
n.d(t, { A: () => d, R: () => c });
var l = n(477900),
    i = n(582128),
    s = n(939341),
    r = n(263577),
    a = n(506326),
    o = n(868065),
    u = n(685504);
let c = [a.zi, a.Rq],
    d = i.memo(function (e) {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: d } = (0, s.nO)({ entry: t, trackingSource: "memberlist_watch_content_row" });
        return (0, l.jsxs)(o.Zp, {
            selected: i,
            children: [
                (0, l.jsxs)(o.UA, {
                    children: [
                        (0, l.jsx)(o.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                        (0, l.jsx)(o.ZB, { children: t.extra.media_title }),
                        (0, l.jsx)(a.mG, {
                            location: a.N5.CARD,
                            children: c.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                        }),
                    ],
                }),
                (0, l.jsx)(r.V, { src: d?.src, size: 48, className: u.xn, alt: d?.alt }),
            ],
        });
    });
