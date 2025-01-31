n.d(t, { Z: () => h }), n(47120);
var i = n(200651);
n(192379);
var a = n(442837),
    o = n(352527),
    r = n(183584),
    s = n(487029),
    l = n(592125),
    d = n(944486),
    c = n(554174),
    _ = n(710111),
    u = n(408704);
function h() {
    let [e, t] = (0, a.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]),
        n = (0, a.e7)([d.Z], () => d.Z.getVoiceChannelId()),
        h = (0, a.e7)([l.Z], () => l.Z.getChannel(n), [n]),
        f = null == h ? void 0 : h.getGuildId();
    return e && null != h
        ? (0, i.jsx)('div', {
              className: u.widget,
              children: (0, i.jsx)(s.Z, {
                  width: _.FW.width,
                  height: _.FW.height,
                  guildId: f,
                  channel: h,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, c.Z)();
                      null != e && (0, r.oZ)(e);
                  },
                  analyticsSource: 'overlay'
              })
          })
        : null;
}
