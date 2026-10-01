t.d(i, { A: () => x, R: () => o });
var n = t(477900),
    l = t(582128),
    r = t(939341),
    s = t(263577),
    a = t(506326),
    c = t(868065),
    d = t(804779);
let o = [a.zi, a.Rq],
    x =
        221552 == t.j
            ? l.memo(function (e) {
                  let { entry: i, channel: t, selected: l } = e,
                      { largeImage: x } = (0, r.nO)({ entry: i, trackingSource: "memberlist_watch_content_row" });
                  return (0, n.jsxs)(c.Zp, {
                      selected: l,
                      children: [
                          (0, n.jsxs)(c.UA, {
                              children: [
                                  (0, n.jsx)(c.Hp, { entry: i, channelId: t.id, guildId: t.guild_id }),
                                  (0, n.jsx)(c.ZB, { children: i.extra.media_title }),
                                  (0, n.jsx)(a.mG, {
                                      location: a.N5.CARD,
                                      children: o.map((e, t) => (0, n.jsx)(e, { entry: i }, t)),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(s.V, { src: x?.src, size: 48, className: d.xn, alt: x?.alt }),
                      ],
                  });
              })
            : null;
