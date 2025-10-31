n.d(t, { Z: () => p }), n(388685);
var i = n(951288);
n(647438);
var r = n(442837),
    l = n(352527),
    o = n(183584),
    s = n(487029),
    a = n(592125),
    c = n(944486),
    d = n(554174),
    u = n(710111),
    h = n(774087);
function p() {
    let [e, t] = (0, r.Wu)([l.Z], () => [l.Z.enabled, l.Z.keepOpen]),
        n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()),
        p = (0, r.e7)([a.Z], () => a.Z.getChannel(n), [n]),
        f = null == p ? void 0 : p.getGuildId();
    return e && null != p
        ? (0, i.jsx)("div", {
              className: h.widget,
              children: (0, i.jsx)(s.Z, {
                  width: u.FW.width,
                  height: u.FW.height,
                  guildId: f,
                  channel: p,
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
