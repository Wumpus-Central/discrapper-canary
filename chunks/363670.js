"use strict";
n.d(t, { Ay: () => m, hh: () => E, u7: () => h });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(287809),
    o = n(939341),
    l = n(352139),
    d = n(263577),
    _ = n(506326),
    u = n(868065),
    c = n(352760);
let E = [_.R_];
function h(e) {
    let t = (0, s.bG)([l.A], () => l.A.getMatchingActivity(e)),
        n = (0, s.bG)([a.default], () => a.default.getUser(e.author_id));
    if (null == t || null == n) return {};
    let i = e.extra.entries[0],
        r = t.state ?? i.media.artists[0]?.name ?? i.media.title,
        o = t.details ?? i.media.title;
    return { activity: t, artist: r, currentEntry: i, title: o, user: n };
}
let m = r.memo(function (e) {
    let { entry: t, channel: n, selected: r, hovered: s } = e,
        { activity: a, artist: l } = h(t),
        { largeImage: m } = (0, o.nO)({ entry: t });
    return null == a
        ? (0, i.jsx)(u.eG, {})
        : (0, i.jsxs)(u.Zp, {
              selected: r,
              children: [
                  (0, i.jsxs)(u.UA, {
                      children: [
                          (0, i.jsx)(u.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                          (0, i.jsx)(u.ZB, { children: l.replace(/; /g, ", ") }),
                          (0, i.jsx)(_.mG, {
                              location: _.N5.CARD,
                              children: E.map((e, n) => (0, i.jsx)(e, { entry: t, hovered: s }, n)),
                          }),
                      ],
                  }),
                  (0, i.jsx)(d.V, { src: m?.src, size: 48, className: c.xn }),
              ],
          });
});
