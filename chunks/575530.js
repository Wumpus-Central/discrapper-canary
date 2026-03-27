n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(528772),
    a = n(944775),
    o = n(927421),
    d = n(734057),
    u = n(309010),
    c = n(427603),
    h = n(302614),
    g = n(980504),
    m = n(401747);
let p = s.memo(function () {
    let [e, t] = (0, l.yK)([r.A], () => [r.A.enabled, r.A.keepOpen]),
        n = (0, l.bG)([u.A], () => u.A.getVoiceChannelId()),
        s = (0, l.bG)([d.A], () => d.A.getChannel(n), [n]),
        p = s?.getGuildId();
    return e && null != s
        ? (0, i.jsx)(h.A, {
              className: m.k,
              children: (0, i.jsx)(o.A, {
                  width: g.ed.width,
                  height: g.ed.height,
                  guildId: p,
                  channel: s,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, c.A)();
                      null != e && (0, a.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
