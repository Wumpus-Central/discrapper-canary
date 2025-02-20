n.d(t, { Z: () => f }), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    o = n(352527),
    l = n(183584),
    a = n(487029),
    s = n(592125),
    c = n(944486),
    u = n(554174),
    d = n(710111),
    p = n(696407);
function f() {
    let [e, t] = (0, r.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]),
        n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()),
        f = (0, r.e7)([s.Z], () => s.Z.getChannel(n), [n]),
        h = null == f ? void 0 : f.getGuildId();
    return e && null != f
        ? (0, i.jsx)('div', {
              className: p.container,
              children: (0, i.jsx)(a.Z, {
                  width: d.FW.width,
                  height: d.FW.height,
                  guildId: h,
                  channel: f,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, u.Z)();
                      null != e && (0, l.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
