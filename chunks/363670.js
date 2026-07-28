"use strict";
n.d(t, { Ay: () => h, hh: () => E, u7: () => A });
var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(287809),
    l = n(939341),
    o = n(574520),
    d = n(263577),
    c = n(506326),
    u = n(868065),
    _ = n(685504);
let E = [c.R_];
function A(e) {
    let t = (0, a.bG)([o.A], () => o.A.getMatchingActivity(e)),
        n = (0, a.bG)([s.default], () => s.default.getUser(e.author_id));
    if (null == t || null == n) return {};
    let i = e.extra.entries[0],
        r = t.state ?? i.media.artists[0]?.name ?? i.media.title,
        l = t.details ?? i.media.title;
    return { activity: t, artist: r, currentEntry: i, title: l, user: n };
}
let h = r.memo(function (e) {
    let { entry: t, channel: n, selected: r, hovered: a } = e,
        { activity: s, artist: o } = A(t),
        { largeImage: h } = (0, l.nO)({ entry: t, trackingSource: "memberlist_listened_session_content_row" });
    return null == s
        ? (0, i.jsx)(u.eG, {})
        : (0, i.jsxs)(u.Zp, {
              selected: r,
              children: [
                  (0, i.jsxs)(u.UA, {
                      children: [
                          (0, i.jsx)(u.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                          (0, i.jsx)(u.ZB, { children: o.replace(/; /g, ", ") }),
                          (0, i.jsx)(c.mG, {
                              location: c.N5.CARD,
                              children: E.map((e, n) => (0, i.jsx)(e, { entry: t, hovered: a }, n)),
                          }),
                      ],
                  }),
                  (0, i.jsx)(d.V, { src: h?.src, size: 48, className: _.xn }),
              ],
          });
});
