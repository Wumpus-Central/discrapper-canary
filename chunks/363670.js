t.d(i, { Ay: () => _, hh: () => u, u7: () => j });
var n = t(477900),
    r = t(582128),
    l = t(17928),
    s = t(287809),
    a = t(774926),
    c = t(574520),
    d = t(263577),
    o = t(506326),
    x = t(868065),
    m = t(804779);
let u = [o.R_];
function j(e) {
    let i = (0, l.bG)([c.A], () => c.A.getMatchingActivity(e)),
        t = (0, l.bG)([s.default], () => s.default.getUser(e.author_id));
    if (null == i || null == t) return {};
    let n = e.extra.entries[0],
        r = i.state ?? n.media.artists[0]?.name ?? n.media.title,
        a = i.details ?? n.media.title;
    return { activity: i, artist: r, currentEntry: n, title: a, user: t };
}
let _ =
    221552 == t.j
        ? r.memo(function (e) {
              let { entry: i, channel: t, selected: r, hovered: l } = e,
                  { activity: s, artist: c } = j(i),
                  { largeImage: _ } = (0, a.nO)({
                      entry: i,
                      trackingSource: "memberlist_listened_session_content_row",
                  });
              return null == s
                  ? (0, n.jsx)(x.eG, {})
                  : (0, n.jsxs)(x.Zp, {
                        selected: r,
                        children: [
                            (0, n.jsxs)(x.UA, {
                                children: [
                                    (0, n.jsx)(x.Hp, { entry: i, channelId: t.id, guildId: t.guild_id }),
                                    (0, n.jsx)(x.ZB, { children: c.replace(/; /g, ", ") }),
                                    (0, n.jsx)(o.mG, {
                                        location: o.N5.CARD,
                                        children: u.map((e, t) => (0, n.jsx)(e, { entry: i, hovered: l }, t)),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(d.V, { src: _?.src, size: 48, className: m.xn }),
                        ],
                    });
          })
        : null;
