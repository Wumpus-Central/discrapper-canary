n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(528772),
    s = n(944775),
    r = n(927421),
    o = n(734057),
    d = n(309010),
    u = n(427603),
    c = n(302614),
    h = n(980504),
    A = n(538482);
function m() {
    let [e, t] = (0, l.yK)([a.A], () => [a.A.enabled, a.A.keepOpen]),
        n = (0, l.bG)([d.A], () => d.A.getVoiceChannelId()),
        m = (0, l.bG)([o.A], () => o.A.getChannel(n), [n]),
        g = m?.getGuildId();
    return e && null != m
        ? (0, i.jsx)(c.A, {
              className: A.k,
              children: (0, i.jsx)(r.A, {
                  width: h.ed.width,
                  height: h.ed.height,
                  guildId: g,
                  channel: m,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, u.A)();
                      null != e && (0, s.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
}
