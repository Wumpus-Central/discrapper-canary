n.d(t, {
    Hs: () => p,
    ZP: () => h,
    qy: () => f
});
var r = n(200651),
    i = n(192379),
    o = n(317261),
    l = n(379357),
    s = n(442550),
    a = n(561308),
    c = n(297781),
    u = n(443487),
    d = n(522314);
let p = [c.E6],
    _ = [o._.WEEK];
function f(e) {
    return null != e && _.includes(e);
}
let h = i.memo((e) => {
    let { entry: t, channel: n, selected: i } = e,
        { largeImage: o } = (0, l.rv)({
            entry: t,
            showCoverImage: !1
        }),
        _ = (0, a.Nq)(t);
    return null != _ && f(_)
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
                              children: p.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
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
});
