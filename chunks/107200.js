n.d(t, { Z: () => f }), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(352527),
    o = n(183584),
    s = n(487029),
    l = n(592125),
    c = n(944486),
    d = n(554174),
    _ = n(710111),
    u = n(143719);
function f() {
    let [e, t] = (0, r.Wu)([a.Z], () => [a.Z.enabled, a.Z.keepOpen]),
        n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()),
        f = (0, r.e7)([l.Z], () => l.Z.getChannel(n), [n]),
        p = null == f ? void 0 : f.getGuildId();
    return e && null != f
        ? (0, i.jsx)('div', {
              className: u.widget,
              children: (0, i.jsx)(s.Z, {
                  width: _.FW.width,
                  height: _.FW.height,
                  guildId: p,
                  channel: f,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, d.Z)();
                      null != e && (0, o.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
