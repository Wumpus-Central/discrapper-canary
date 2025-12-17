n.d(t, { Z: () => p }), n(388685);
var i = n(54381);
n(473749);
var r = n(442837),
    a = n(352527),
    l = n(183584),
    o = n(487029),
    s = n(592125),
    c = n(944486),
    u = n(554174),
    d = n(333031),
    f = n(710111),
    h = n(295108);
function p() {
    let [e, t] = (0, r.Wu)([a.Z], () => [a.Z.enabled, a.Z.keepOpen]),
        n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()),
        p = (0, r.e7)([s.Z], () => s.Z.getChannel(n), [n]),
        m = null == p ? void 0 : p.getGuildId();
    return e && null != p
        ? (0, i.jsx)(d.Z, {
              className: h.container,
              children: (0, i.jsx)(o.Z, {
                  width: f.FW.width,
                  height: f.FW.height,
                  guildId: m,
                  channel: p,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, u.Z)();
                      null != e && (0, l.oZ)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
}
