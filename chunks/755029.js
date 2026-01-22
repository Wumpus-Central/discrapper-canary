n.d(t, {
    A: () => p,
}),
    n(896048);
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(528772),
    l = n(944775),
    o = n(927421),
    a = n(734057),
    c = n(309010),
    d = n(427603),
    u = n(980504),
    h = n(761121);

function p() {
    let [e, t] = (0, r.yK)([s.A], () => [s.A.enabled, s.A.keepOpen]),
        n = (0, r.bG)([c.A], () => c.A.getVoiceChannelId()),
        p = (0, r.bG)([a.A], () => a.A.getChannel(n), [n]),
        f = null == p ? void 0 : p.getGuildId();
    return e && null != p
        ? (0, i.jsx)("div", {
              className: h.H,
              children: (0, i.jsx)(o.A, {
                  width: u.ed.width,
                  height: u.ed.height,
                  guildId: f,
                  channel: p,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, d.A)();
                      null != e && (0, l.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
}
