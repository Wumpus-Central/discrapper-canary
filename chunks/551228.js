n.d(t, {
    ZP: () => m,
    pi: () => p,
    te: () => _
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(594174),
    o = n(379357),
    l = n(719247),
    u = n(442550),
    c = n(297781),
    d = n(443487),
    f = n(704927);
let _ = [c.XF];
function p(e) {
    var t, n, i, r;
    let o = (0, a.e7)([l.Z], () => l.Z.getMatchingActivity(e)),
        u = (0, a.e7)([s.default], () => s.default.getUser(e.author_id));
    if (null == o || null == u) return {};
    let c = e.extra.entries[0],
        d = null !== (i = null !== (n = o.state) && void 0 !== n ? n : null === (t = c.media.artists[0]) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : c.media.title,
        f = null !== (r = o.details) && void 0 !== r ? r : c.media.title;
    return {
        activity: o,
        artist: d,
        currentEntry: c,
        title: f,
        user: u
    };
}
function h(e) {
    let { entry: t, channel: n, selected: r, hovered: a } = e,
        { activity: s, artist: l } = p(t),
        { largeImage: h } = (0, o.rv)({ entry: t });
    return null == s
        ? (0, i.jsx)(d.cA, {})
        : (0, i.jsxs)(d.Zb, {
              selected: r,
              children: [
                  (0, i.jsxs)(d.e$, {
                      children: [
                          (0, i.jsx)(d.F9, {
                              entry: t,
                              channelId: n.id,
                              guildId: n.guild_id
                          }),
                          (0, i.jsx)(d.ll, { children: l }),
                          (0, i.jsx)(c.Gk, {
                              location: c.Gt.CARD,
                              children: _.map((e, n) =>
                                  (0, i.jsx)(
                                      e,
                                      {
                                          entry: t,
                                          hovered: a
                                      },
                                      n
                                  )
                              )
                          })
                      ]
                  }),
                  (0, i.jsx)(u.f, {
                      src: null == h ? void 0 : h.src,
                      size: 48,
                      className: f.thumbnail
                  })
              ]
          });
}
let m = r.memo(h);
