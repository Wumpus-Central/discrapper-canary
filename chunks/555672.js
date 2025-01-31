n.d(t, {
    Hs: () => f,
    ZP: () => m,
    qy: () => p
});
var i = n(200651),
    r = n(192379),
    a = n(317261),
    s = n(379357),
    o = n(442550),
    l = n(561308),
    u = n(297781),
    c = n(443487),
    d = n(830677);
let f = [u.E6],
    _ = [a._.WEEK];
function p(e) {
    let t = _;
    return null != e && t.includes(e);
}
let h = (e) => {
        let { entry: t, channel: n, selected: r } = e,
            { largeImage: a } = (0, s.rv)({
                entry: t,
                showCoverImage: !1
            }),
            _ = (0, l.Nq)(t);
        return null != _ && p(_)
            ? (0, i.jsxs)(c.Zb, {
                  selected: r,
                  children: [
                      (0, i.jsxs)(c.e$, {
                          children: [
                              (0, i.jsx)(c.F9, {
                                  entry: t,
                                  channelId: n.id,
                                  guildId: n.guild_id
                              }),
                              (0, i.jsx)(c.ll, { children: t.extra.game_name }),
                              (0, i.jsx)(u.Gk, {
                                  location: u.Gt.CARD,
                                  children: f.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                              })
                          ]
                      }),
                      (0, i.jsx)(o.f, {
                          src: null == a ? void 0 : a.src,
                          size: 48,
                          className: d.thumbnail,
                          alt: null == a ? void 0 : a.alt
                      })
                  ]
              })
            : null;
    },
    m = r.memo(h);
