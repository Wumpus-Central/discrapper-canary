n.d(t, {
    Hs: () => f,
    ZP: () => m,
    qy: () => p
});
var r = n(255367),
    i = n(73800),
    o = n(317261),
    a = n(379357),
    s = n(442550),
    l = n(561308),
    c = n(297781),
    u = n(443487),
    d = n(522314);
let f = [c.E6],
    _ = [o._.WEEK];
function p(e) {
    let t = _;
    return null != e && t.includes(e);
}
let h = (e) => {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: o } = (0, a.rv)({
                entry: t,
                showCoverImage: !1
            }),
            _ = (0, l.Nq)(t);
        return null != _ && p(_)
            ? (0, r.jsxs)(u.Zb, {
                  selected: i,
                  children: [
                      (0, r.jsxs)(u.e$, {
                          children: [
                              (0, r.jsx)(u.F9, {
                                  entry: t,
                                  channelId: n.id,
                                  guildId: n.guild_id
                              }),
                              (0, r.jsx)(u.ll, { children: t.extra.game_name }),
                              (0, r.jsx)(c.Gk, {
                                  location: c.Gt.CARD,
                                  children: f.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                              })
                          ]
                      }),
                      (0, r.jsx)(s.f, {
                          src: null == o ? void 0 : o.src,
                          size: 48,
                          className: d.thumbnail,
                          alt: null == o ? void 0 : o.alt
                      })
                  ]
              })
            : null;
    },
    m = i.memo(h);
