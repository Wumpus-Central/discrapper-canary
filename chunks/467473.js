t.d(n, {
    Hs: () => x,
    ZP: () => j,
    qy: () => h
});
var l = t(200651),
    i = t(192379),
    a = t(317261),
    s = t(379357),
    r = t(442550),
    c = t(561308),
    d = t(297781),
    o = t(443487),
    u = t(563504);
let x = [d.E6],
    m = [a._.WEEK];
function h(e) {
    return null != e && m.includes(e);
}
let j = i.memo((e) => {
    let { entry: n, channel: t, selected: i } = e,
        { largeImage: a } = (0, s.rv)({
            entry: n,
            showCoverImage: !1
        }),
        m = (0, c.Nq)(n);
    return null != m && h(m)
        ? (0, l.jsxs)(o.Zb, {
              selected: i,
              children: [
                  (0, l.jsxs)(o.e$, {
                      children: [
                          (0, l.jsx)(o.F9, {
                              entry: n,
                              channelId: t.id,
                              guildId: t.guild_id
                          }),
                          (0, l.jsx)(o.ll, { children: n.extra.game_name }),
                          (0, l.jsx)(d.Gk, {
                              location: d.Gt.CARD,
                              children: x.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                          })
                      ]
                  }),
                  (0, l.jsx)(r.f, {
                      src: null == a ? void 0 : a.src,
                      size: 48,
                      className: u.thumbnail,
                      alt: null == a ? void 0 : a.alt
                  })
              ]
          })
        : null;
});
