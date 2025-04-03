n.d(t, {
    ZP: () => h,
    pi: () => f,
    te: () => _
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    l = n(594174),
    s = n(379357),
    a = n(719247),
    c = n(442550),
    u = n(297781),
    d = n(443487),
    p = n(522314);
let _ = [u.XF];
function f(e) {
    var t, n, r, i;
    let s = (0, o.e7)([a.Z], () => a.Z.getMatchingActivity(e)),
        c = (0, o.e7)([l.default], () => l.default.getUser(e.author_id));
    if (null == s || null == c) return {};
    let u = e.extra.entries[0],
        d = null != (r = null != (n = s.state) ? n : null == (t = u.media.artists[0]) ? void 0 : t.name) ? r : u.media.title,
        p = null != (i = s.details) ? i : u.media.title;
    return {
        activity: s,
        artist: d,
        currentEntry: u,
        title: p,
        user: c
    };
}
let h = i.memo(function (e) {
    let { entry: t, channel: n, selected: i, hovered: o } = e,
        { activity: l, artist: a } = f(t),
        { largeImage: h } = (0, s.rv)({ entry: t });
    return null == l
        ? (0, r.jsx)(d.cA, {})
        : (0, r.jsxs)(d.Zb, {
              selected: i,
              children: [
                  (0, r.jsxs)(d.e$, {
                      children: [
                          (0, r.jsx)(d.F9, {
                              entry: t,
                              channelId: n.id,
                              guildId: n.guild_id
                          }),
                          (0, r.jsx)(d.ll, { children: a }),
                          (0, r.jsx)(u.Gk, {
                              location: u.Gt.CARD,
                              children: _.map((e, n) =>
                                  (0, r.jsx)(
                                      e,
                                      {
                                          entry: t,
                                          hovered: o
                                      },
                                      n
                                  )
                              )
                          })
                      ]
                  }),
                  (0, r.jsx)(c.f, {
                      src: null == h ? void 0 : h.src,
                      size: 48,
                      className: p.thumbnail
                  })
              ]
          });
});
