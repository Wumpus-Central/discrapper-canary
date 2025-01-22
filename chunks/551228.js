r.d(n, {
    pi: function () {
        return m;
    },
    te: function () {
        return _;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(594174),
    u = r(379357),
    c = r(719247),
    d = r(442550),
    f = r(297781),
    p = r(443487),
    h = r(830677);
let _ = [f.XF];
function m(e) {
    var n, r, i, a;
    let o = (0, s.e7)([c.Z], () => c.Z.getMatchingActivity(e)),
        u = (0, s.e7)([l.default], () => l.default.getUser(e.author_id));
    if (null == o || null == u) return {};
    let d = e.extra.entries[0],
        f = null !== (i = null !== (r = o.state) && void 0 !== r ? r : null === (n = d.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : d.media.title,
        p = null !== (a = o.details) && void 0 !== a ? a : d.media.title;
    return {
        activity: o,
        artist: f,
        currentEntry: d,
        title: p,
        user: u
    };
}
function g(e) {
    let { entry: n, channel: r, selected: i, hovered: o } = e,
        { activity: s, artist: l } = m(n),
        { largeImage: c } = (0, u.rv)({ entry: n });
    return null == s
        ? (0, a.jsx)(p.cA, {})
        : (0, a.jsxs)(p.Zb, {
              selected: i,
              children: [
                  (0, a.jsxs)(p.e$, {
                      children: [
                          (0, a.jsx)(p.F9, {
                              entry: n,
                              channelId: r.id,
                              guildId: r.guild_id
                          }),
                          (0, a.jsx)(p.ll, { children: l }),
                          (0, a.jsx)(f.Gk, {
                              location: f.Gt.CARD,
                              children: _.map((e, r) =>
                                  (0, a.jsx)(
                                      e,
                                      {
                                          entry: n,
                                          hovered: o
                                      },
                                      r
                                  )
                              )
                          })
                      ]
                  }),
                  (0, a.jsx)(d.f, {
                      src: null == c ? void 0 : c.src,
                      size: 48,
                      className: h.thumbnail
                  })
              ]
          });
}
n.ZP = o.memo(g);
