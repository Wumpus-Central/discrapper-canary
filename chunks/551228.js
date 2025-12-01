n.d(t, {
    ZP: () => h,
    pi: () => _,
    te: () => p,
}),
    n(388685),
    n(704826),
    n(35282);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(594174),
    s = n(379357),
    l = n(719247),
    c = n(442550),
    u = n(297781),
    d = n(443487),
    f = n(451419);
let p = [u.XF];
function _(e) {
    var t, n, r, i;
    let s = (0, a.e7)([l.Z], () => l.Z.getMatchingActivity(e)),
        c = (0, a.e7)([o.default], () => o.default.getUser(e.author_id));
    if (null == s || null == c) return {};
    let u = e.extra.entries[0],
        d =
            null != (r = null != (n = s.state) ? n : null == (t = u.media.artists[0]) ? void 0 : t.name)
                ? r
                : u.media.title,
        f = null != (i = s.details) ? i : u.media.title;
    return {
        activity: s,
        artist: d,
        currentEntry: u,
        title: f,
        user: c,
    };
}
function m(e) {
    let { entry: t, channel: n, selected: i, hovered: a } = e,
        { activity: o, artist: l } = _(t),
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
                              guildId: n.guild_id,
                          }),
                          (0, r.jsx)(d.ll, { children: l.replace(/; /g, ", ") }),
                          (0, r.jsx)(u.Gk, {
                              location: u.Gt.CARD,
                              children: p.map((e, n) =>
                                  (0, r.jsx)(
                                      e,
                                      {
                                          entry: t,
                                          hovered: a,
                                      },
                                      n,
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, r.jsx)(c.f, {
                      src: null == m ? void 0 : m.src,
                      size: 48,
                      className: f.thumbnail,
                  }),
              ],
          });
}
let h = i.memo(m);
