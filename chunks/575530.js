"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(528772),
    s = n(944775),
    o = n(927421),
    d = n(734057),
    u = n(309010),
    c = n(427603),
    A = n(302614),
    h = n(980504),
    g = n(923779);
let f = i.memo(function () {
    let [e, t] = (0, l.yK)([a.A], () => [a.A.enabled, a.A.keepOpen]),
        n = (0, l.bG)([u.A], () => u.A.getVoiceChannelId()),
        i = (0, l.bG)([d.A], () => d.A.getChannel(n), [n]),
        f = i?.getGuildId();
    return e && null != i
        ? (0, r.jsx)(A.A, {
              className: g.k,
              children: (0, r.jsx)(o.A, {
                  width: h.ed.width,
                  height: h.ed.height,
                  guildId: f,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, c.A)();
                      null != e && (0, s.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
});
