r.d(n, {
    Hs: function () {
        return p;
    },
    qy: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(317261),
    s = r(379357),
    l = r(442550),
    u = r(561308),
    c = r(297781),
    d = r(443487),
    f = r(830677);
let p = [c.E6],
    h = [o._.WEEK];
function _(e) {
    let n = h;
    return null != e && n.includes(e);
}
let m = (e) => {
    let { entry: n, channel: r, selected: a } = e,
        { largeImage: o } = (0, s.rv)({
            entry: n,
            showCoverImage: !1
        }),
        h = (0, u.Nq)(n);
    return null != h && _(h)
        ? (0, i.jsxs)(d.Zb, {
              selected: a,
              children: [
                  (0, i.jsxs)(d.e$, {
                      children: [
                          (0, i.jsx)(d.F9, {
                              entry: n,
                              channelId: r.id,
                              guildId: r.guild_id
                          }),
                          (0, i.jsx)(d.ll, { children: n.extra.game_name }),
                          (0, i.jsx)(c.Gk, {
                              location: c.Gt.CARD,
                              children: p.map((e, r) => (0, i.jsx)(e, { entry: n }, r))
                          })
                      ]
                  }),
                  (0, i.jsx)(l.f, {
                      src: null == o ? void 0 : o.src,
                      size: 48,
                      className: f.thumbnail,
                      alt: null == o ? void 0 : o.alt
                  })
              ]
          })
        : null;
};
n.ZP = a.memo(m);
