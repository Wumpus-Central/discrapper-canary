n.d(t, {
    Hs: () => _,
    ZP: () => f,
    qy: () => E
});
var r = n(200651),
    i = n(192379),
    o = n(317261),
    l = n(379357),
    a = n(442550),
    s = n(561308),
    c = n(297781),
    u = n(443487),
    d = n(563504);
let _ = [c.E6],
    p = [o._.WEEK];
function E(e) {
    return null != e && p.includes(e);
}
let f = i.memo((e) => {
    let { entry: t, channel: n, selected: i } = e,
        { largeImage: o } = (0, l.rv)({
            entry: t,
            showCoverImage: !1
        }),
        p = (0, s.Nq)(t);
    return null != p && E(p)
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
                              children: _.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                          })
                      ]
                  }),
                  (0, r.jsx)(a.f, {
                      src: null == o ? void 0 : o.src,
                      size: 48,
                      className: d.thumbnail,
                      alt: null == o ? void 0 : o.alt
                  })
              ]
          })
        : null;
});
