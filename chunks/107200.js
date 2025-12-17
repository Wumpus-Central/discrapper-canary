n.d(t, { Z: () => h }), n(388685);
var i = n(54381);
n(473749);
var r = n(442837),
    a = n(352527),
    s = n(183584),
    o = n(487029),
    l = n(592125),
    c = n(944486),
    d = n(554174),
    u = n(710111),
    f = n(399794);
function h() {
    let [e, t] = (0, r.Wu)([a.Z], () => [a.Z.enabled, a.Z.keepOpen]),
        n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()),
        h = (0, r.e7)([l.Z], () => l.Z.getChannel(n), [n]),
        p = null == h ? void 0 : h.getGuildId();
    return e && null != h
        ? (0, i.jsx)("div", {
              className: f.widget,
              children: (0, i.jsx)(o.Z, {
                  width: u.FW.width,
                  height: u.FW.height,
                  guildId: p,
                  channel: h,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, d.Z)();
                      null != e && (0, s.oZ)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
}
