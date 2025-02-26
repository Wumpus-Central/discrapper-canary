n.d(t, {
    Hs: () => _,
    ZP: () => m,
    qy: () => p
});
var r = n(200651),
    i = n(192379),
    l = n(317261),
    o = n(379357),
    s = n(442550),
    a = n(561308),
    c = n(297781),
    u = n(443487),
    d = n(62545);
let _ = [c.E6],
    E = [l._.WEEK];
function p(e) {
    return null != e && E.includes(e);
}
let m = i.memo((e) => {
    let { entry: t, channel: n, selected: i } = e,
        { largeImage: l } = (0, o.rv)({
            entry: t,
            showCoverImage: !1
        }),
        E = (0, a.Nq)(t);
    return null != E && p(E)
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
                  (0, r.jsx)(s.f, {
                      src: null == l ? void 0 : l.src,
                      size: 48,
                      className: d.thumbnail,
                      alt: null == l ? void 0 : l.alt
                  })
              ]
          })
        : null;
});
