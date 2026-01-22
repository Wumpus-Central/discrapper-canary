n.d(t, { A: () => f }), n(896048);
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(528772),
    a = n(944775),
    o = n(927421),
    s = n(734057),
    c = n(309010),
    u = n(427603),
    d = n(302614),
    p = n(980504),
    h = n(32160);
function f() {
    let [e, t] = (0, r.yK)([l.A], () => [l.A.enabled, l.A.keepOpen]),
        n = (0, r.bG)([c.A], () => c.A.getVoiceChannelId()),
        f = (0, r.bG)([s.A], () => s.A.getChannel(n), [n]),
        m = null == f ? void 0 : f.getGuildId();
    return e && null != f
        ? (0, i.jsx)(d.A, {
              className: h.k,
              children: (0, i.jsx)(o.A, {
                  width: p.ed.width,
                  height: p.ed.height,
                  guildId: m,
                  channel: f,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, u.A)();
                      null != e && (0, a.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
}
