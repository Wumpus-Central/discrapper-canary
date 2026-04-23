n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    l = n(528772),
    o = n(944775),
    d = n(927421),
    s = n(734057),
    c = n(309010),
    u = n(427603),
    _ = n(302614),
    A = n(980504),
    h = n(923779);
let f = i.memo(function () {
    let [e, t] = (0, a.yK)([l.A], () => [l.A.enabled, l.A.keepOpen]),
        n = (0, a.bG)([c.A], () => c.A.getVoiceChannelId()),
        i = (0, a.bG)([s.A], () => s.A.getChannel(n), [n]),
        f = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(_.A, {
              className: h.k,
              children: (0, r.jsx)(d.A, {
                  width: A.ed.width,
                  height: A.ed.height,
                  guildId: f,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, u.A)();
                      null != e && (0, o.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
