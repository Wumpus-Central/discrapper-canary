"use strict";
n.d(t, { Ay: () => m, hh: () => f, u7: () => p });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(287809),
    o = n(939341),
    l = n(574520),
    u = n(263577),
    c = n(506326),
    d = n(868065),
    _ = n(332225);
let f = [c.R_];
function p(e) {
    let t = (0, a.bG)([l.A], () => l.A.getMatchingActivity(e)),
        n = (0, a.bG)([s.default], () => s.default.getUser(e.author_id));
    if (null == t || null == n) return {};
    let r = e.extra.entries[0],
        i = t.state ?? r.media.artists[0]?.name ?? r.media.title,
        o = t.details ?? r.media.title;
    return { activity: t, artist: i, currentEntry: r, title: o, user: n };
}
function h(e) {
    let { entry: t, channel: n, selected: i, hovered: a } = e,
        { activity: s, artist: l } = p(t),
        { largeImage: h } = (0, o.nO)({ entry: t });
    return null == s
        ? (0, r.jsx)(d.eG, {})
        : (0, r.jsxs)(d.Zp, {
              selected: i,
              children: [
                  (0, r.jsxs)(d.UA, {
                      children: [
                          (0, r.jsx)(d.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                          (0, r.jsx)(d.ZB, { children: l.replace(/; /g, ", ") }),
                          (0, r.jsx)(c.mG, {
                              location: c.N5.CARD,
                              children: f.map((e, n) => (0, r.jsx)(e, { entry: t, hovered: a }, n)),
                          }),
                      ],
                  }),
                  (0, r.jsx)(u.V, { src: h?.src, size: 48, className: _.xn }),
              ],
          });
}
let m = i.memo(h);
