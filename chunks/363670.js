"use strict";
n.d(t, { Ay: () => f, hh: () => m, u7: () => p });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(287809),
    r = n(939341),
    o = n(352139),
    c = n(263577),
    u = n(506326),
    d = n(868065),
    h = n(352760);
let m = [u.R_];
function p(e) {
    let t = (0, s.bG)([o.A], () => o.A.getMatchingActivity(e)),
        n = (0, s.bG)([a.default], () => a.default.getUser(e.author_id));
    if (null == t || null == n) return {};
    let l = e.extra.entries[0],
        i = t.state ?? l.media.artists[0]?.name ?? l.media.title,
        r = t.details ?? l.media.title;
    return { activity: t, artist: i, currentEntry: l, title: r, user: n };
}
let f = i.memo(function (e) {
    let { entry: t, channel: n, selected: i, hovered: s } = e,
        { activity: a, artist: o } = p(t),
        { largeImage: f } = (0, r.nO)({ entry: t });
    return null == a
        ? (0, l.jsx)(d.eG, {})
        : (0, l.jsxs)(d.Zp, {
              selected: i,
              children: [
                  (0, l.jsxs)(d.UA, {
                      children: [
                          (0, l.jsx)(d.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                          (0, l.jsx)(d.ZB, { children: o.replace(/; /g, ", ") }),
                          (0, l.jsx)(u.mG, {
                              location: u.N5.CARD,
                              children: m.map((e, n) => (0, l.jsx)(e, { entry: t, hovered: s }, n)),
                          }),
                      ],
                  }),
                  (0, l.jsx)(c.V, { src: f?.src, size: 48, className: h.xn }),
              ],
          });
});
