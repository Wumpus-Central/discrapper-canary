"use strict";
n.d(t, { Ay: () => f, hh: () => m, u7: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(287809),
    a = n(939341),
    o = n(352139),
    c = n(263577),
    u = n(506326),
    d = n(868065),
    h = n(352760);
let m = [u.R_];
function p(e) {
    let t = (0, s.bG)([o.A], () => o.A.getMatchingActivity(e)),
        n = (0, s.bG)([r.default], () => r.default.getUser(e.author_id));
    if (null == t || null == n) return {};
    let i = e.extra.entries[0],
        l = t.state ?? i.media.artists[0]?.name ?? i.media.title,
        a = t.details ?? i.media.title;
    return { activity: t, artist: l, currentEntry: i, title: a, user: n };
}
let f = l.memo(function (e) {
    let { entry: t, channel: n, selected: l, hovered: s } = e,
        { activity: r, artist: o } = p(t),
        { largeImage: f } = (0, a.nO)({ entry: t });
    return null == r
        ? (0, i.jsx)(d.eG, {})
        : (0, i.jsxs)(d.Zp, {
              selected: l,
              children: [
                  (0, i.jsxs)(d.UA, {
                      children: [
                          (0, i.jsx)(d.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                          (0, i.jsx)(d.ZB, { children: o.replace(/; /g, ", ") }),
                          (0, i.jsx)(u.mG, {
                              location: u.N5.CARD,
                              children: m.map((e, n) => (0, i.jsx)(e, { entry: t, hovered: s }, n)),
                          }),
                      ],
                  }),
                  (0, i.jsx)(c.V, { src: f?.src, size: 48, className: h.xn }),
              ],
          });
});
