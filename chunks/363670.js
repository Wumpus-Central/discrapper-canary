"use strict";
n.d(t, { Ay: () => h, hh: () => f, u7: () => p });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(287809),
    o = n(939341),
    l = n(352139),
    u = n(263577),
    c = n(506326),
    d = n(868065),
    _ = n(352760);
let f = [c.R_];
function p(e) {
    let t = (0, s.bG)([l.A], () => l.A.getMatchingActivity(e)),
        n = (0, s.bG)([a.default], () => a.default.getUser(e.author_id));
    if (null == t || null == n) return {};
    let r = e.extra.entries[0],
        i = t.state ?? r.media.artists[0]?.name ?? r.media.title,
        o = t.details ?? r.media.title;
    return { activity: t, artist: i, currentEntry: r, title: o, user: n };
}
let h = i.memo(function (e) {
    let { entry: t, channel: n, selected: i, hovered: s } = e,
        { activity: a, artist: l } = p(t),
        { largeImage: h } = (0, o.nO)({ entry: t });
    return null == a
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
                              children: f.map((e, n) => (0, r.jsx)(e, { entry: t, hovered: s }, n)),
                          }),
                      ],
                  }),
                  (0, r.jsx)(u.V, { src: h?.src, size: 48, className: _.xn }),
              ],
          });
});
