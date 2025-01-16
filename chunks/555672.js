r.d(n, {
    Hs: function () {
        return _;
    },
    qy: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(317261),
    o = r(379357),
    l = r(442550),
    u = r(561308),
    c = r(297781),
    d = r(443487),
    f = r(830677);
let _ = [c.E6],
    h = [s._.WEEK];
function p(e) {
    let n = h;
    return null != e && n.includes(e);
}
let m = (e) => {
    let { entry: n, channel: r, selected: a } = e,
        { largeImage: s } = (0, o.rv)({
            entry: n,
            showCoverImage: !1
        }),
        h = (0, u.Nq)(n);
    return null != h && p(h)
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
                              children: _.map((e, r) => (0, i.jsx)(e, { entry: n }, r))
                          })
                      ]
                  }),
                  (0, i.jsx)(l.f, {
                      src: null == s ? void 0 : s.src,
                      size: 48,
                      className: f.thumbnail,
                      alt: null == s ? void 0 : s.alt
                  })
              ]
          })
        : null;
};
n.ZP = a.memo(m);
