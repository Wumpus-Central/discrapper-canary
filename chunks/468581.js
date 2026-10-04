t.d(i, { $: () => o, A: () => x });
var n = t(477900),
    l = t(582128),
    r = t(823638),
    s = t(263577),
    a = t(506326),
    c = t(868065),
    d = t(804779);
let o = [a.iq, a.Zc, a.Xy, a.$X, a.fg, a.MK],
    x =
        221552 == t.j
            ? l.memo(function (e) {
                  let { entry: i, channel: t, selected: l, hovered: x } = e,
                      { largeImage: m } = (0, r.nO)({
                          entry: i,
                          showCoverImage: !1,
                          trackingSource: "memberlist_activity_content_row",
                      });
                  return (0, n.jsxs)(c.Zp, {
                      selected: l,
                      children: [
                          (0, n.jsxs)(c.UA, {
                              children: [
                                  (0, n.jsx)(c.Hp, { entry: i, channelId: t.id, guildId: t.guild_id }),
                                  (0, n.jsx)(c.ZB, { children: i.extra.activity_name }),
                                  (0, n.jsx)(a.mG, {
                                      location: a.N5.CARD,
                                      children: o.map((e, t) => (0, n.jsx)(e, { entry: i, hovered: x }, t)),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(s.V, { alt: m?.alt, src: m?.src, size: 48, className: d.xn }),
                      ],
                  });
              })
            : null;
