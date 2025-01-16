r.d(n, {
    pi: function () {
        return m;
    },
    te: function () {
        return p;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(594174),
    u = r(379357),
    c = r(719247),
    d = r(442550),
    f = r(297781),
    _ = r(443487),
    h = r(830677);
let p = [f.XF];
function m(e) {
    var n, r, i, a;
    let s = (0, o.e7)([c.Z], () => c.Z.getMatchingActivity(e)),
        u = (0, o.e7)([l.default], () => l.default.getUser(e.author_id));
    if (null == s || null == u) return {};
    let d = e.extra.entries[0],
        f = null !== (i = null !== (r = s.state) && void 0 !== r ? r : null === (n = d.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : d.media.title,
        _ = null !== (a = s.details) && void 0 !== a ? a : d.media.title;
    return {
        activity: s,
        artist: f,
        currentEntry: d,
        title: _,
        user: u
    };
}
function g(e) {
    let { entry: n, channel: r, selected: i, hovered: s } = e,
        { activity: o, artist: l } = m(n),
        { largeImage: c } = (0, u.rv)({ entry: n });
    return null == o
        ? (0, a.jsx)(_.cA, {})
        : (0, a.jsxs)(_.Zb, {
              selected: i,
              children: [
                  (0, a.jsxs)(_.e$, {
                      children: [
                          (0, a.jsx)(_.F9, {
                              entry: n,
                              channelId: r.id,
                              guildId: r.guild_id
                          }),
                          (0, a.jsx)(_.ll, { children: l }),
                          (0, a.jsx)(f.Gk, {
                              location: f.Gt.CARD,
                              children: p.map((e, r) =>
                                  (0, a.jsx)(
                                      e,
                                      {
                                          entry: n,
                                          hovered: s
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
n.ZP = s.memo(g);
