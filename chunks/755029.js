"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(528772),
    a = n(944775),
    r = n(927421),
    o = n(734057),
    d = n(309010),
    c = n(427603),
    u = n(980504),
    h = n(402622);
function p() {
    let [e, t] = (0, s.yK)([l.A], () => [l.A.enabled, l.A.keepOpen]),
        n = (0, s.bG)([d.A], () => d.A.getVoiceChannelId()),
        p = (0, s.bG)([o.A], () => o.A.getChannel(n), [n]),
        A = p?.getGuildId();
    return e && null != p
        ? (0, i.jsx)("div", {
              className: h.H,
              children: (0, i.jsx)(r.A, {
                  width: u.ed.width,
                  height: u.ed.height,
                  guildId: A,
                  channel: p,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, c.A)();
                      null != e && (0, a.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
}
