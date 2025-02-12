n.d(t, { Z: () => f }), n(47120);
var i = n(200651);
n(192379);
var o = n(442837),
    r = n(352527),
    a = n(183584),
    c = n(487029),
    s = n(592125),
    l = n(944486),
    d = n(554174),
    u = n(710111),
    _ = n(221035);
function f() {
    let [e, t] = (0, o.Wu)([r.Z], () => [r.Z.enabled, r.Z.keepOpen]),
        n = (0, o.e7)([l.Z], () => l.Z.getVoiceChannelId()),
        f = (0, o.e7)([s.Z], () => s.Z.getChannel(n), [n]),
        p = null == f ? void 0 : f.getGuildId();
    return e && null != f
        ? (0, i.jsx)('div', {
              className: _.widget,
              children: (0, i.jsx)(c.Z, {
                  width: u.FW.width,
                  height: u.FW.height,
                  guildId: p,
                  channel: f,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, d.Z)();
                      null != e && (0, a.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
