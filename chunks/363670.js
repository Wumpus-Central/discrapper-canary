"use strict";
n.d(t, { Ay: () => p, hh: () => m, u7: () => f });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(287809),
    a = n(939341),
    o = n(574520),
    u = n(263577),
    c = n(506326),
    d = n(868065),
    h = n(804779);
let m = [c.R_];
function f(e) {
    let t = (0, s.bG)([o.A], () => o.A.getMatchingActivity(e)),
        n = (0, s.bG)([r.default], () => r.default.getUser(e.author_id));
    if (null == t || null == n) return {};
    let l = e.extra.entries[0],
        i = t.state ?? l.media.artists[0]?.name ?? l.media.title,
        a = t.details ?? l.media.title;
    return { activity: t, artist: i, currentEntry: l, title: a, user: n };
}
let p = i.memo(function (e) {
    let { entry: t, channel: n, selected: i, hovered: s } = e,
        { activity: r, artist: o } = f(t),
        { largeImage: p } = (0, a.nO)({ entry: t, trackingSource: "memberlist_listened_session_content_row" });
    return null == r
        ? (0, l.jsx)(d.eG, {})
        : (0, l.jsxs)(d.Zp, {
              selected: i,
              children: [
                  (0, l.jsxs)(d.UA, {
                      children: [
                          (0, l.jsx)(d.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                          (0, l.jsx)(d.ZB, { children: o.replace(/; /g, ", ") }),
                          (0, l.jsx)(c.mG, {
                              location: c.N5.CARD,
                              children: m.map((e, n) => (0, l.jsx)(e, { entry: t, hovered: s }, n)),
                          }),
                      ],
                  }),
                  (0, l.jsx)(u.V, { src: p?.src, size: 48, className: h.xn }),
              ],
          });
});
