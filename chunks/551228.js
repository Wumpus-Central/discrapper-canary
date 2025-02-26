n.d(t, {
    ZP: () => m,
    pi: () => p,
    te: () => E
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(594174),
    s = n(379357),
    a = n(719247),
    c = n(442550),
    u = n(297781),
    d = n(443487),
    _ = n(62545);
let E = [u.XF];
function p(e) {
    var t, n, r, i;
    let s = (0, l.e7)([a.Z], () => a.Z.getMatchingActivity(e)),
        c = (0, l.e7)([o.default], () => o.default.getUser(e.author_id));
    if (null == s || null == c) return {};
    let u = e.extra.entries[0],
        d = null !== (r = null !== (n = s.state) && void 0 !== n ? n : null === (t = u.media.artists[0]) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : u.media.title,
        _ = null !== (i = s.details) && void 0 !== i ? i : u.media.title;
    return {
        activity: s,
        artist: d,
        currentEntry: u,
        title: _,
        user: c
    };
}
let m = i.memo(function (e) {
    let { entry: t, channel: n, selected: i, hovered: l } = e,
        { activity: o, artist: a } = p(t),
        { largeImage: m } = (0, s.rv)({ entry: t });
    return null == o
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
                              children: E.map((e, n) =>
                                  (0, r.jsx)(
                                      e,
                                      {
                                          entry: t,
                                          hovered: l
                                      },
                                      n
                                  )
                              )
                          })
                      ]
                  }),
                  (0, r.jsx)(c.f, {
                      src: null == m ? void 0 : m.src,
                      size: 48,
                      className: _.thumbnail
                  })
              ]
          });
});
