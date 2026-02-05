"use strict";
n.d(t, { $u: () => f, Ay: () => m, wE: () => p });
var r = n(627968),
    i = n(64700),
    a = n(56121),
    s = n(403362),
    o = n(939341),
    l = n(263577),
    u = n(583846),
    c = n(506326),
    d = n(868065),
    _ = n(332225);
let f = [c.Y8],
    p = [a.j.WEEK],
    h = (e) => {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: a } = (0, o.nO)({ entry: t }),
            h = (0, u.TQ)(t);
        return null != h && (0, s.S1)(h, p)
            ? (0, r.jsxs)(d.Zp, {
                  selected: i,
                  children: [
                      (0, r.jsxs)(d.UA, {
                          children: [
                              (0, r.jsx)(d.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, r.jsx)(d.ZB, { children: t.extra.artist.name }),
                              (0, r.jsx)(c.mG, {
                                  location: c.N5.CARD,
                                  children: f.map((e, n) => (0, r.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, r.jsx)(l.V, { src: a?.src, size: 48, className: _.xn }),
                  ],
              })
            : null;
    },
    m = i.memo(h);
