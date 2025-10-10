n.d(t, { Z: () => h }), n(388685);
var i = n(951288);
n(647438);
var r = n(442837),
    s = n(352527),
    o = n(183584),
    l = n(487029),
    a = n(592125),
    c = n(944486),
    d = n(554174),
    u = n(710111),
    p = n(774087);
function h() {
    let [e, t] = (0, r.Wu)([s.Z], () => [s.Z.enabled, s.Z.keepOpen]),
        n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()),
        h = (0, r.e7)([a.Z], () => a.Z.getChannel(n), [n]),
        f = null == h ? void 0 : h.getGuildId();
    return e && null != h
        ? (0, i.jsx)("div", {
              className: p.widget,
              children: (0, i.jsx)(l.Z, {
                  width: u.FW.width,
                  height: u.FW.height,
                  guildId: f,
                  channel: h,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, d.Z)();
                      null != e && (0, o.oZ)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
}
