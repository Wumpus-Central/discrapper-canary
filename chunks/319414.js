n.d(t, { Z: () => f }), n(388685);
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(352527),
    o = n(183584),
    a = n(487029),
    s = n(592125),
    c = n(944486),
    u = n(554174),
    d = n(333031),
    h = n(710111),
    p = n(218168);
function f() {
    let [e, t] = (0, r.Wu)([l.Z], () => [l.Z.enabled, l.Z.keepOpen]),
        n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()),
        f = (0, r.e7)([s.Z], () => s.Z.getChannel(n), [n]),
        m = null == f ? void 0 : f.getGuildId();
    return e && null != f
        ? (0, i.jsx)(d.Z, {
              className: p.container,
              children: (0, i.jsx)(a.Z, {
                  width: h.FW.width,
                  height: h.FW.height,
                  guildId: m,
                  channel: f,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, u.Z)();
                      null != e && (0, o.oZ)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
}
