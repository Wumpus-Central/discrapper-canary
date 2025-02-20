n.d(t, { Z: () => f }), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    o = n(352527),
    a = n(183584),
    s = n(487029),
    c = n(592125),
    d = n(944486),
    l = n(554174),
    u = n(710111),
    _ = n(551756);
function f() {
    let [e, t] = (0, r.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]),
        n = (0, r.e7)([d.Z], () => d.Z.getVoiceChannelId()),
        f = (0, r.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        p = null == f ? void 0 : f.getGuildId();
    return e && null != f
        ? (0, i.jsx)('div', {
              className: _.widget,
              children: (0, i.jsx)(s.Z, {
                  width: u.FW.width,
                  height: u.FW.height,
                  guildId: p,
                  channel: f,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, l.Z)();
                      null != e && (0, a.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
