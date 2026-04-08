n.d(t, { A: () => f });
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(528772),
    s = n(944775),
    o = n(927421),
    d = n(734057),
    c = n(309010),
    u = n(427603),
    _ = n(302614),
    h = n(980504),
    m = n(401747);
let f = a.memo(function () {
    let [e, t] = (0, r.yK)([l.A], () => [l.A.enabled, l.A.keepOpen]),
        n = (0, r.bG)([c.A], () => c.A.getVoiceChannelId()),
        a = (0, r.bG)([d.A], () => d.A.getChannel(n), [n]),
        f = a?.getGuildId();
    return e && null != a
        ? (0, i.jsx)(_.A, {
              className: m.k,
              children: (0, i.jsx)(o.A, {
                  width: h.ed.width,
                  height: h.ed.height,
                  guildId: f,
                  channel: a,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, u.A)();
                      null != e && (0, s.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
